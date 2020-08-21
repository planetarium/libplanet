using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Net;
using System.Net.Sockets;
using System.Security.Cryptography;
using System.Threading;
using System.Threading.Tasks;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Net;
using Libplanet.Net.Messages;
using Libplanet.Net.Protocols;
using Libplanet.Store;
using Libplanet.Stun;
using Libplanet.Tests.Blockchain;
using Libplanet.Tests.Common;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Store;
using Libplanet.Tx;
using NetMQ;
using NetMQ.Sockets;
using Serilog;
using Serilog.Events;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Tests.Net
{
    public partial class SwarmTest : IDisposable
    {
        private const int Timeout = 60 * 1000;
        private const int DisposeTimeout = 5 * 1000;

        private readonly ITestOutputHelper _output;
        private readonly ILogger _logger;

        public SwarmTest(ITestOutputHelper output)
        {
            const string outputTemplate =
                "{Timestamp:HH:mm:ss:ffffffZ}[@{SwarmId}][{ThreadId}] - {Message}";
            Log.Logger = new LoggerConfiguration()
                .MinimumLevel.Verbose()
                .Enrich.WithThreadId()
                .WriteTo.TestOutput(output, outputTemplate: outputTemplate)
                .CreateLogger()
                .ForContext<SwarmTest>();

            Log.Logger.Debug($"Started to initialize a {nameof(SwarmTest)} instance.");

            _logger = Log.ForContext<SwarmTest>();
            _output = output;

            var policy = new BlockPolicy<DumbAction>(new MinerReward(1));
            _fx1 = new DefaultStoreFixture(memory: true);
            _fx2 = new DefaultStoreFixture(memory: true);
            _fx3 = new DefaultStoreFixture(memory: true);
            _fx4 = new DefaultStoreFixture(memory: true);

            _renderers = new List<DumbRenderer<DumbAction>>
            {
                new DumbRenderer<DumbAction>(),
                new DumbRenderer<DumbAction>(),
                new DumbRenderer<DumbAction>(),
                new DumbRenderer<DumbAction>(),
            };

            _blockchains = new List<BlockChain<DumbAction>>
            {
                TestUtils.MakeBlockChain(policy, _fx1.Store, renderers: new[] { _renderers[0] }),
                TestUtils.MakeBlockChain(policy, _fx2.Store, renderers: new[] { _renderers[1] }),
                TestUtils.MakeBlockChain(policy, _fx3.Store, renderers: new[] { _renderers[2] }),
                TestUtils.MakeBlockChain(policy, _fx4.Store, renderers: new[] { _renderers[3] }),
            };

            _finalizers = new List<Func<Task>>();
            _swarms = new List<Swarm<DumbAction>>
            {
                CreateSwarm(_blockchains[0]),
                CreateSwarm(_blockchains[1]),
                CreateSwarm(_blockchains[2]),
                CreateSwarm(_blockchains[3]),
            };

            Log.Logger.Debug($"Finished to initialize a {nameof(SwarmTest)} instance.");
        }

        public void Dispose()
        {
            try
            {
                Log.Logger.Debug("Starts to finalize {Resources} resources...", _finalizers.Count);
                int i = 1;
                foreach (Func<Task> finalize in _finalizers)
                {
                    Log.Logger.Debug("Tries to finalize the resource #{Resource}...", i++);
                    finalize().Wait(DisposeTimeout);
                }

                Log.Logger.Debug("Finished to finalize {Resources} resources.", _finalizers.Count);

                NetMQConfig.Cleanup(false);
                Log.Logger.Debug($"Finished to clean up the {nameof(NetMQConfig)} singleton.");
            }
            finally
            {
                _fx1.Dispose();
                _fx2.Dispose();
                _fx3.Dispose();
            }

            Log.Logger.Debug($"Finished to {nameof(Dispose)}() a {nameof(SwarmTest)} instance.");
        }

        [Fact]
        public void BlockChain()
        {
            Assert.Same(_blockchains[0], _swarms[0].BlockChain);
            Assert.Same(_blockchains[1], _swarms[1].BlockChain);
            Assert.Same(_blockchains[2], _swarms[2].BlockChain);
        }

        [Fact(Timeout = Timeout)]
        public async Task CanNotStartTwice()
        {
            Swarm<DumbAction> swarm = _swarms[0];

            Task t = await Task.WhenAny(
                swarm.StartAsync(),
                swarm.StartAsync());

            Assert.True(swarm.Running);
            Assert.True(t.IsFaulted);
            Assert.True(
                t.Exception.InnerException is SwarmException,
                $"Expected SwarmException, but actual exception was: {t.Exception.InnerException}"
            );

            await StopAsync(swarm);
        }

        [Fact(Timeout = Timeout)]
        public async Task HandleReconnection()
        {
            Swarm<DumbAction> seed = CreateSwarm(_blockchains[0]);

            Swarm<DumbAction> swarmA = CreateSwarm(_blockchains[1]);
            Swarm<DumbAction> swarmB = CreateSwarm(_blockchains[2]);

            try
            {
                await StartAsync(seed);
                await StartAsync(swarmA);
                await StartAsync(swarmB);
                await swarmA.AddPeersAsync(new[] { seed.AsPeer }, null);
                await StopAsync(swarmA);
                await swarmB.AddPeersAsync(new[] { seed.AsPeer }, null);

                Assert.Contains(swarmB.AsPeer, seed.Peers);
                Assert.Contains(seed.AsPeer, swarmB.Peers);
            }
            finally
            {
                await StopAsync(seed);
                await StopAsync(swarmA);
                await StopAsync(swarmB);

                seed.Dispose();
                swarmA.Dispose();
                swarmB.Dispose();
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task BroadcastBlockToReconnectedPeer()
        {
            BlockChain<DumbAction> chainWithBlocks = _blockchains[0];
            Swarm<DumbAction> seed = CreateSwarm(chainWithBlocks);

            var privateKey = new PrivateKey();
            Swarm<DumbAction> swarmA = CreateSwarm(_blockchains[1], privateKey);
            Swarm<DumbAction> swarmB = CreateSwarm(_blockchains[2], privateKey);

            foreach (int i in Enumerable.Range(0, 10))
            {
                await chainWithBlocks.MineBlock(_fx1.Address1);
            }

            try
            {
                await StartAsync(seed);
                await StartAsync(swarmA);
                await StartAsync(swarmB);

                Assert.Equal(swarmA.AsPeer, swarmB.AsPeer);

                await swarmA.AddPeersAsync(new[] { seed.AsPeer }, null);
                await StopAsync(swarmA);
                await seed.Protocol.RefreshTableAsync(TimeSpan.Zero, default(CancellationToken));

                Assert.DoesNotContain(swarmA.AsPeer, seed.Peers);

                await swarmB.AddPeersAsync(new[] { seed.AsPeer }, null);

                // This is added for context switching.
                await Task.Delay(100);

                Assert.Contains(swarmB.AsPeer, seed.Peers);
                Assert.Contains(seed.AsPeer, swarmB.Peers);

                seed.BroadcastBlock(chainWithBlocks.Tip);

                await swarmB.BlockAppended.WaitAsync();

                Assert.NotEqual(chainWithBlocks.BlockHashes, _blockchains[1].BlockHashes);
                Assert.Equal(chainWithBlocks.BlockHashes, _blockchains[2].BlockHashes);
            }
            finally
            {
                await StopAsync(seed);
                await StopAsync(swarmA);
                await StopAsync(swarmB);

                seed.Dispose();
                swarmA.Dispose();
                swarmB.Dispose();
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task StopAsyncTest()
        {
            Swarm<DumbAction> swarm = _swarms[0];
            BlockChain<DumbAction> chain = _blockchains[0];

            await swarm.StopAsync();
            var task = await StartAsync(swarm);

            Assert.True(swarm.Running);
            await swarm.StopAsync();

            Assert.False(swarm.Running);

            Assert.False(
                task.IsFaulted,
                $"A task was faulted due to an exception: {task.Exception}"
            );
        }

        [Fact(Timeout = Timeout)]
        public async Task CanWaitForRunning()
        {
            Swarm<DumbAction> swarm = _swarms[0];
            BlockChain<DumbAction> chain = _blockchains[0];

            Assert.False(swarm.Running);

            Task consumerTask = Task.Run(
                async () =>
                {
                    await swarm.WaitForRunningAsync();
                    Assert.True(swarm.Running);
                }
            );

            Task producerTask = Task.Run(async () =>
            {
                await swarm.StartAsync();
            });

            await consumerTask;
            Assert.True(swarm.Running);

            await StopAsync(swarm);
            Assert.False(swarm.Running);
        }

        [Fact(Timeout = Timeout)]
        public async Task AddPeersWithoutStart()
        {
            Swarm<DumbAction> a = _swarms[0];
            Swarm<DumbAction> b = _swarms[1];

            try
            {
                await StartAsync(b);

                await a.AddPeersAsync(new Peer[] { b.AsPeer }, null);

                Assert.Contains(b.AsPeer, a.Peers);
                Assert.Empty(b.Peers);
            }
            finally
            {
                await StopAsync(a);
                await StopAsync(b);
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task AddPeersAsync()
        {
            Swarm<DumbAction> a = _swarms[0];
            Swarm<DumbAction> b = _swarms[1];

            try
            {
                await StartAsync(a);
                await StartAsync(b);

                await a.AddPeersAsync(new Peer[] { b.AsPeer }, null);

                Assert.Contains(a.AsPeer, b.Peers);
                Assert.Contains(b.AsPeer, a.Peers);
            }
            finally
            {
                await StopAsync(a);
                await StopAsync(b);
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task BootstrapException()
        {
            Swarm<DumbAction> swarmA = _swarms[0];
            Swarm<DumbAction> swarmB = _swarms[1];

            try
            {
                await Assert.ThrowsAsync<PeerDiscoveryException>(
                    () => swarmB.BootstrapAsync(new[] { swarmA.AsPeer }, 3000, 3000));

                await StartAsync(swarmA);
            }
            finally
            {
                await StopAsync(swarmA);
                await StopAsync(swarmB);
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task BootstrapAsyncWithoutStart()
        {
            Swarm<DumbAction> swarmA = _swarms[0];
            Swarm<DumbAction> swarmB = _swarms[1];
            Swarm<DumbAction> swarmC = _swarms[2];

            try
            {
                await StartAsync(swarmA);
                await StartAsync(swarmB);

                await BootstrapAsync(swarmB, swarmA.AsPeer);
                await BootstrapAsync(swarmC, swarmA.AsPeer);

                Assert.Contains(swarmB.AsPeer, swarmC.Peers);
                Assert.DoesNotContain(swarmC.AsPeer, swarmB.Peers);
            }
            finally
            {
                await StopAsync(swarmA);
                await StopAsync(swarmB);
                await StopAsync(swarmC);
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task AutoConnectAfterStart()
        {
            Swarm<DumbAction> swarmA = _swarms[0];
            Swarm<DumbAction> swarmB = _swarms[1];

            try
            {
                await StartAsync(swarmB);

                await BootstrapAsync(swarmA, swarmB.AsPeer);

                Assert.Contains(swarmB.AsPeer, swarmA.Peers);
                Assert.Empty(swarmB.Peers);

                await StartAsync(swarmA);
                await Task.Delay(100);
                Assert.Contains(swarmA.AsPeer, swarmB.Peers);
            }
            finally
            {
                await StopAsync(swarmA);
                await StopAsync(swarmB);
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task BroadcastWhileMining()
        {
            Swarm<DumbAction> a = _swarms[0];
            Swarm<DumbAction> b = _swarms[1];

            BlockChain<DumbAction> chainA = _blockchains[0];
            BlockChain<DumbAction> chainB = _blockchains[1];

            Task CreateMiner(
                Swarm<DumbAction> swarm,
                BlockChain<DumbAction> chain,
                int delay,
                CancellationToken cancellationToken
            )
            {
                return Task.Run(async () =>
                {
                    while (!cancellationToken.IsCancellationRequested)
                    {
                        try
                        {
                            var block = await chain.MineBlock(_fx1.Address1);

                            Log.Debug(
                                "Block mined. [Node: {0}, Block: {1}]",
                                swarm.Address,
                                block.Hash);
                            swarm.BroadcastBlock(block);
                        }
                        catch (OperationCanceledException)
                        {
                            continue;
                        }
                        finally
                        {
                            await Task.Delay(delay);
                        }
                    }

                    swarm.BroadcastBlock(chain[-1]);
                    Log.Debug("Mining complete.");
                });
            }

            try
            {
                await StartAsync(a);
                await StartAsync(b);

                await a.AddPeersAsync(new[] { b.AsPeer }, null);

                var minerCanceller = new CancellationTokenSource();
                Task miningA = CreateMiner(a, chainA, 5000, minerCanceller.Token);
                Task miningB = CreateMiner(b, chainB, 8000, minerCanceller.Token);

                await Task.Delay(10000);
                minerCanceller.Cancel();

                await Task.WhenAll(miningA, miningB);

                await Task.Delay(5000);
            }
            finally
            {
                await StopAsync(a);
                await StopAsync(b);
            }

            _logger.CompareBothChains(LogEventLevel.Debug, "A", chainA, "B", chainB);
            Assert.Equal(chainA.BlockHashes, chainB.BlockHashes);
        }

        [Fact(Timeout = Timeout)]
        public async Task Cancel()
        {
            Swarm<DumbAction> swarm = _swarms[0];
            var cts = new CancellationTokenSource();

            Task task = await StartAsync(
                swarm,
                cancellationToken: cts.Token
            );

            cts.Cancel();
            bool canceled = false;
            try
            {
                await task;
            }
            catch (OperationCanceledException)
            {
                canceled = true;
            }

            Assert.True(canceled);
        }

        [Fact(Timeout = Timeout)]
        public async Task GetBlocks()
        {
            Swarm<DumbAction> swarmA = _swarms[0];
            Swarm<DumbAction> swarmB = _swarms[1];

            BlockChain<DumbAction> chainA = _blockchains[0];
            BlockChain<DumbAction> chainB = _blockchains[1];

            // FIXME: Rename the following variables or reuse the real genesis block which
            // already exists in chainA.  These are misleading as genesis.Index is not 0 but 1.
            Block<DumbAction> genesis = await chainA.MineBlock(_fx1.Address1);
            chainB.Append(genesis); // chainA and chainB shares genesis block.
            Block<DumbAction> block1 = await chainA.MineBlock(_fx1.Address1);
            Block<DumbAction> block2 = await chainA.MineBlock(_fx1.Address1);

            try
            {
                await StartAsync(swarmA);
                await StartAsync(swarmB);

                await swarmA.AddPeersAsync(new[] { swarmB.AsPeer }, null);

                (long, HashDigest<SHA256>)[] inventories1 = (
                    await swarmB.GetBlockHashes(
                        swarmA.AsPeer as BoundPeer,
                        new BlockLocator(new[] { genesis.Hash }),
                        null
                    ).ToArrayAsync()
                ).Select(p => p.ToValueTuple()).ToArray();
                Assert.Equal(
                    new[]
                    {
                        (genesis.Index, genesis.Hash),
                        (block1.Index, block1.Hash),
                        (block2.Index, block2.Hash),
                    },
                    inventories1);

                (long, HashDigest<SHA256>)[] inventories2 = (
                    await swarmB.GetBlockHashes(
                        swarmA.AsPeer as BoundPeer,
                        new BlockLocator(new[] { genesis.Hash }),
                        block1.Hash
                    ).ToArrayAsync()
                ).Select(p => p.ToValueTuple()).ToArray();
                Assert.Equal(
                    new[] { (genesis.Index, genesis.Hash), (block1.Index, block1.Hash) },
                    inventories2);

                Block<DumbAction>[] receivedBlocks =
                    await swarmB.GetBlocksAsync(
                        swarmA.AsPeer as BoundPeer,
                        inventories1.Select(pair => pair.Item2),
                        cancellationToken: default
                    ).ToArrayAsync();
                Assert.Equal(new[] { genesis, block1, block2 }, receivedBlocks);
            }
            finally
            {
                await StopAsync(swarmA);
                await StopAsync(swarmB);
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task GetMultipleBlocksAtOnce()
        {
            var privateKey = new PrivateKey();

            BlockChain<DumbAction> chainA = _blockchains[0];
            BlockChain<DumbAction> chainB = _blockchains[1];

            Swarm<DumbAction> swarmA = _swarms[0];
            Swarm<DumbAction> swarmB = CreateSwarm(chainB, privateKey);

            Block<DumbAction> genesis = await chainA.MineBlock(_fx1.Address1);
            chainB.Append(genesis); // chainA and chainB shares genesis block.
            await chainA.MineBlock(_fx1.Address1);
            await chainA.MineBlock(_fx1.Address1);

            try
            {
                await StartAsync(swarmA);
                await StartAsync(swarmB);

                var peer = swarmA.AsPeer as BoundPeer;

                await swarmB.AddPeersAsync(new[] { peer }, null);

                Tuple<long, HashDigest<SHA256>>[] hashes = await swarmB.GetBlockHashes(
                    peer,
                    new BlockLocator(new[] { genesis.Hash }),
                    null
                ).ToArrayAsync();

                var netMQAddress = $"tcp://{peer.EndPoint.Host}:{peer.EndPoint.Port}";
                using (var socket = new DealerSocket(netMQAddress))
                {
                    var request = new GetBlocks(hashes.Select(pair => pair.Item2), 2);
                    socket.SendMultipartMessage(
                        request.ToNetMQMessage(privateKey, swarmB.AsPeer, swarmB.AppProtocolVersion)
                    );

                    NetMQMessage response = socket.ReceiveMultipartMessage();
                    Message parsedMessage = Message.Parse(
                        response,
                        true,
                        swarmA.AppProtocolVersion,
                        swarmA.TrustedAppProtocolVersionSigners,
                        null);
                    Libplanet.Net.Messages.Blocks blockMessage =
                        (Libplanet.Net.Messages.Blocks)parsedMessage;

                    Assert.Equal(2, blockMessage.Payloads.Count);

                    response = socket.ReceiveMultipartMessage();
                    parsedMessage = Message.Parse(
                        response,
                        true,
                        swarmA.AppProtocolVersion,
                        swarmA.TrustedAppProtocolVersionSigners,
                        null);
                    blockMessage = (Libplanet.Net.Messages.Blocks)parsedMessage;

                    Assert.Single(blockMessage.Payloads);
                }
            }
            finally
            {
                await StopAsync(swarmA);
                await StopAsync(swarmB);

                swarmB.Dispose();
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task GetTx()
        {
            Swarm<DumbAction> swarmA = _swarms[0];
            Swarm<DumbAction> swarmB = _swarms[1];

            BlockChain<DumbAction> chainB = _blockchains[1];

            Transaction<DumbAction> tx = Transaction<DumbAction>.Create(
                0,
                new PrivateKey(),
                chainB.Genesis.Hash,
                new DumbAction[0]
            );
            chainB.StageTransaction(tx);
            await chainB.MineBlock(_fx1.Address1);

            try
            {
                await StartAsync(swarmA);
                await StartAsync(swarmB);

                await swarmA.AddPeersAsync(new[] { swarmB.AsPeer }, null);

                List<Transaction<DumbAction>> txs =
                    await swarmA.GetTxsAsync(
                        swarmB.AsPeer as BoundPeer,
                        new[] { tx.Id },
                        cancellationToken: default
                    ).ToListAsync();

                Assert.Equal(new[] { tx }, txs);
            }
            finally
            {
                await StopAsync(swarmA);
                await StopAsync(swarmB);
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task BroadcastTx()
        {
            Swarm<DumbAction> swarmA = _swarms[0];
            Swarm<DumbAction> swarmB = _swarms[1];
            Swarm<DumbAction> swarmC = _swarms[2];

            BlockChain<DumbAction> chainA = _blockchains[0];
            BlockChain<DumbAction> chainB = _blockchains[1];
            BlockChain<DumbAction> chainC = _blockchains[2];

            Transaction<DumbAction> tx = Transaction<DumbAction>.Create(
                0,
                new PrivateKey(),
                chainA.Genesis.Hash,
                new DumbAction[] { }
            );

            chainA.StageTransaction(tx);
            await chainA.MineBlock(_fx1.Address1);

            try
            {
                await StartAsync(swarmA);
                await StartAsync(swarmB);
                await StartAsync(swarmC);

                await swarmA.AddPeersAsync(new[] { swarmB.AsPeer }, null);
                await swarmB.AddPeersAsync(new[] { swarmC.AsPeer }, null);
                await swarmC.AddPeersAsync(new[] { swarmA.AsPeer }, null);

                swarmA.BroadcastTxs(new[] { tx });

                await swarmC.TxReceived.WaitAsync();
                await swarmB.TxReceived.WaitAsync();

                Assert.Equal(tx, chainB.GetTransaction(tx.Id));
                Assert.Equal(tx, chainC.GetTransaction(tx.Id));
            }
            finally
            {
                await StopAsync(swarmA);
                await StopAsync(swarmB);
                await StopAsync(swarmC);
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task BroadcastTxWhileMining()
        {
            Swarm<DumbAction> swarmA = _swarms[0];
            Swarm<DumbAction> swarmC = _swarms[2];

            BlockChain<DumbAction> chainA = _blockchains[0];
            BlockChain<DumbAction> chainC = _blockchains[2];

            var privateKey = new PrivateKey();
            var address = privateKey.ToAddress();

            var txs = Enumerable.Range(0, 10).Select(_ =>
                chainA.MakeTransaction(new PrivateKey(), new[] { new DumbAction(address, "foo") }))
                .ToArray();

            try
            {
                await StartAsync(swarmA);
                await StartAsync(swarmC);

                await swarmC.AddPeersAsync(new[] { swarmA.AsPeer }, null);

                for (var i = 0; i < 100; i++)
                {
                    swarmA.BroadcastTxs(txs);
                }

                var t = Task.Run(async () =>
                {
                    for (var i = 0; i < 10; i++)
                    {
                        await chainC.MineBlock(_fx1.Address1);
                    }
                });

                await swarmC.TxReceived.WaitAsync();
                await t;

                for (var i = 0; i < 10; i++)
                {
                    Assert.True(chainC.Store.ContainsTransaction(txs[i].Id));
                }
            }
            finally
            {
                await StopAsync(swarmA);
                await StopAsync(swarmC);
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task BroadcastTxAsync()
        {
            Swarm<DumbAction> swarmA = _swarms[0];
            Swarm<DumbAction> swarmB = _swarms[1];
            Swarm<DumbAction> swarmC = _swarms[2];

            BlockChain<DumbAction> chainA = _blockchains[0];
            BlockChain<DumbAction> chainB = _blockchains[1];
            BlockChain<DumbAction> chainC = _blockchains[2];

            Transaction<DumbAction> tx = Transaction<DumbAction>.Create(
                0,
                new PrivateKey(),
                chainA.Genesis.Hash,
                new DumbAction[] { }
            );

            chainA.StageTransaction(tx);

            try
            {
                await StartAsync(swarmA);
                await StartAsync(swarmB);
                await StartAsync(swarmC);

                // Broadcast tx swarmA to swarmB
                await swarmA.AddPeersAsync(new[] { swarmB.AsPeer }, null);

                await swarmB.TxReceived.WaitAsync();
                Assert.Equal(tx, chainB.GetTransaction(tx.Id));

                await StopAsync(swarmA);

                // Re-Broadcast received tx swarmB to swarmC
                await swarmB.AddPeersAsync(new[] { swarmC.AsPeer }, null);

                await swarmC.TxReceived.WaitAsync();
                Assert.Equal(tx, chainC.GetTransaction(tx.Id));
            }
            finally
            {
                await StopAsync(swarmA);
                await StopAsync(swarmB);
                await StopAsync(swarmC);
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task BroadcastTxAsyncMany()
        {
            int size = 5;

            var policy = new BlockPolicy<DumbAction>();
            StoreFixture[] fxs = new StoreFixture[size];
            BlockChain<DumbAction>[] blockChains = new BlockChain<DumbAction>[size];
            Swarm<DumbAction>[] swarms = new Swarm<DumbAction>[size];

            for (int i = 0; i < size; i++)
            {
                fxs[i] = new DefaultStoreFixture(memory: true);
                blockChains[i] = new BlockChain<DumbAction>(
                    policy,
                    fxs[i].Store,
                    fxs[i].StateStore,
                    fxs[i].GenesisBlock
                );
                swarms[i] = CreateSwarm(blockChains[i]);
            }

            Transaction<DumbAction> tx = Transaction<DumbAction>.Create(
                0,
                new PrivateKey(),
                blockChains[size - 1].Genesis.Hash,
                new DumbAction[] { }
            );

            blockChains[size - 1].StageTransaction(tx);

            try
            {
                for (int i = 0; i < size; i++)
                {
                    await StartAsync(swarms[i]);
                }

                List<Task> tasks = new List<Task>();
                for (int i = 1; i < size; i++)
                {
                    await BootstrapAsync(swarms[i], swarms[0].AsPeer);
                }

                for (int i = 0; i < size - 1; i++)
                {
                    tasks.Add(swarms[i].TxReceived.WaitAsync());
                }

                await Task.WhenAll(tasks);

                for (int i = 0; i < size; i++)
                {
                    Assert.Equal(tx, blockChains[i].GetTransaction(tx.Id));
                }
            }
            finally
            {
                for (int i = 0; i < size; i++)
                {
                    await StopAsync(swarms[i]);
                    fxs[i].Dispose();
                    swarms[i].Dispose();
                }
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task CanBroadcastBlock()
        {
            // If the bucket stored peers are the same, the block may not propagate,
            // so specify private keys to make the buckets different.
            var keyA = ByteUtil.ParseHex(
                "8568eb6f287afedece2c7b918471183db0451e1a61535bb0381cfdf95b85df20");
            var keyB = ByteUtil.ParseHex(
                "c34f7498befcc39a14f03b37833f6c7bb78310f1243616524eda70e078b8313c");
            var keyC = ByteUtil.ParseHex(
                "941bc2edfab840d79914d80fe3b30840628ac37a5d812d7f922b5d2405a223d3");

            var swarmA = CreateSwarm(_blockchains[0], new PrivateKey(keyA));
            var swarmB = CreateSwarm(_blockchains[1], new PrivateKey(keyB));
            var swarmC = CreateSwarm(_blockchains[2], new PrivateKey(keyC));

            BlockChain<DumbAction> chainA = _blockchains[0];
            BlockChain<DumbAction> chainB = _blockchains[1];
            BlockChain<DumbAction> chainC = _blockchains[2];

            foreach (int i in Enumerable.Range(0, 10))
            {
                await chainA.MineBlock(_fx1.Address1);
            }

            foreach (int i in Enumerable.Range(0, 3))
            {
                await chainB.MineBlock(_fx2.Address1);
            }

            try
            {
                await StartAsync(swarmA);
                await StartAsync(swarmB);
                await StartAsync(swarmC);

                await BootstrapAsync(swarmB, swarmA.AsPeer);
                await BootstrapAsync(swarmC, swarmA.AsPeer);

                swarmB.BroadcastBlock(chainB[-1]);

                // chainA ignores block header received because its index is shorter.
                await swarmA.BlockHeaderReceived.WaitAsync();
                await swarmC.BlockAppended.WaitAsync();
                Assert.False(swarmA.BlockAppended.IsSet);

                // chainB doesn't applied to chainA since chainB is shorter
                // than chainA
                Assert.NotEqual(chainB, chainA);

                swarmA.BroadcastBlock(chainA[-1]);

                await swarmB.BlockAppended.WaitAsync();
                await swarmC.BlockAppended.WaitAsync();

                Log.Debug("Compare chainA and chainB");
                Assert.Equal(chainA.BlockHashes, chainB.BlockHashes);
                Log.Debug("Compare chainA and chainC");
                Assert.Equal(chainA.BlockHashes, chainC.BlockHashes);
            }
            finally
            {
                await StopAsync(swarmA);
                await StopAsync(swarmB);
                await StopAsync(swarmC);

                swarmA.Dispose();
                swarmB.Dispose();
                swarmC.Dispose();
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task BroadcastBlockWithSkip()
        {
            var policy = new BlockPolicy<DumbAction>(new MinerReward(1));
            var fx = new DefaultStoreFixture(memory: true);
            var blockChain = TestUtils.MakeBlockChain(policy, fx.Store);
            var privateKey = new PrivateKey();
            var minerSwarm = CreateSwarm(blockChain, privateKey);
            Swarm<DumbAction> receiverSwarm = _swarms[0];
            DumbRenderer<DumbAction> receiverRenderer = _renderers[0];

            int renderCount = 0;
            int renderCount2 = 0;

            receiverRenderer.RenderEventHandler += (_, a) => renderCount += a is DumbAction ? 1 : 0;
            DumbAction.RenderEventHandler += (_, __) => renderCount2++;

            Transaction<DumbAction>[] transactions =
            {
                fx.MakeTransaction(
                    new[]
                    {
                        new DumbAction(fx.Address2, "foo"),
                        new DumbAction(fx.Address2, "bar"),
                    },
                    timestamp: DateTimeOffset.MinValue,
                    nonce: 0,
                    privateKey: privateKey),
                fx.MakeTransaction(
                    new[]
                    {
                        new DumbAction(fx.Address2, "baz"),
                        new DumbAction(fx.Address2, "qux"),
                    },
                    timestamp: DateTimeOffset.MinValue.AddSeconds(5),
                    nonce: 1,
                    privateKey: privateKey),
            };

            try
            {
                await StartAsync(minerSwarm);
                await StartAsync(receiverSwarm);

                await BootstrapAsync(receiverSwarm, minerSwarm.AsPeer);

                var block1 = TestUtils.MineNext(
                    blockChain.Genesis,
                    new[] { transactions[0] },
                    null,
                    policy.GetNextBlockDifficulty(blockChain));
                blockChain.Append(block1, DateTimeOffset.MinValue.AddSeconds(3), true, false);
                var block2 = TestUtils.MineNext(
                    block1,
                    new[] { transactions[1] },
                    null,
                    policy.GetNextBlockDifficulty(blockChain));
                blockChain.Append(block2, DateTimeOffset.MinValue.AddSeconds(8), true, false);
                Log.Debug("Ready to broadcast blocks.");
                minerSwarm.BroadcastBlock(block2);
                await receiverSwarm.BlockAppended.WaitAsync();

                Assert.Equal(3, _blockchains[0].Count);
                Assert.Equal(4, renderCount);
                Assert.Equal(renderCount2, renderCount);
            }
            finally
            {
                await StopAsync(minerSwarm);
                await StopAsync(receiverSwarm);
                fx.Dispose();
                minerSwarm.Dispose();
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task BroadcastBlockWithoutGenesis()
        {
            Swarm<DumbAction> swarmA = _swarms[0];
            Swarm<DumbAction> swarmB = _swarms[1];

            BlockChain<DumbAction> chainA = _blockchains[0];
            BlockChain<DumbAction> chainB = _blockchains[1];

            try
            {
                await StartAsync(swarmA);
                await StartAsync(swarmB);

                await BootstrapAsync(swarmB, swarmA.AsPeer);

                await chainA.MineBlock(_fx1.Address1);
                swarmA.BroadcastBlock(chainA[-1]);

                await swarmB.BlockAppended.WaitAsync();

                Assert.Equal(chainB.BlockHashes, chainA.BlockHashes);

                await chainA.MineBlock(_fx1.Address1);
                swarmA.BroadcastBlock(chainA[-1]);

                await swarmB.BlockAppended.WaitAsync();

                Assert.Equal(chainB.BlockHashes, chainA.BlockHashes);
            }
            finally
            {
                await StopAsync(swarmA);
                await StopAsync(swarmB);
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task IgnoreExistingBlocks()
        {
            Swarm<DumbAction> swarmA = _swarms[0];
            Swarm<DumbAction> swarmB = _swarms[1];

            BlockChain<DumbAction> chainA = _blockchains[0];
            BlockChain<DumbAction> chainB = _blockchains[1];

            Block<DumbAction> genesis = await chainA.MineBlock(_fx1.Address1);
            chainB.Append(genesis);

            foreach (int i in Enumerable.Range(0, 3))
            {
                await chainA.MineBlock(_fx1.Address1);
            }

            try
            {
                await StartAsync(swarmA);
                await StartAsync(swarmB);

                await BootstrapAsync(swarmB, swarmA.AsPeer);
                swarmA.BroadcastBlock(chainA[-1]);
                await swarmB.BlockAppended.WaitAsync();

                Assert.Equal(chainA.BlockHashes, chainB.BlockHashes);

                CancellationTokenSource cts = new CancellationTokenSource();
                swarmA.BroadcastBlock(chainA[-1]);
                Task t = swarmB.BlockAppended.WaitAsync(cts.Token);

                // Actually, previous code may pass this test if message is
                // delayed over 5 seconds.
                await Task.Delay(5000);
                Assert.False(t.IsCompleted);

                cts.Cancel();
            }
            finally
            {
                await StopAsync(swarmA);
                await StopAsync(swarmB);
            }
        }

        [Fact(Timeout = Timeout)]
        public void ThrowArgumentExceptionInConstructor()
        {
            var key = new PrivateKey();
            AppProtocolVersion ver = AppProtocolVersion.Sign(key, 1);
            Assert.Throws<ArgumentNullException>(() =>
            {
                new Swarm<DumbAction>(null, key, ver);
            });

            Assert.Throws<ArgumentNullException>(() =>
            {
                new Swarm<DumbAction>(_blockchains[0], null, ver);
            });

            // Swarm<DumbAction> needs host or iceServers.
            Assert.Throws<ArgumentException>(() =>
            {
                new Swarm<DumbAction>(_blockchains[0], key, ver);
            });

            // Swarm<DumbAction> needs host or iceServers.
            Assert.Throws<ArgumentException>(() =>
            {
                new Swarm<DumbAction>(_blockchains[0], key, ver, iceServers: new IceServer[] { });
            });
        }

        [Fact(Timeout = Timeout)]
        public void CanResolveEndPoint()
        {
            var expected = new DnsEndPoint("1.2.3.4", 5678);
            using (Swarm<DumbAction> s = CreateSwarm(
                _blockchains[0], host: "1.2.3.4", listenPort: 5678))
            {
                Assert.Equal(expected, s.EndPoint);
                Assert.Equal(expected, (s.AsPeer as BoundPeer)?.EndPoint);
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task StopGracefullyWhileStarting()
        {
            Swarm<DumbAction> a = _swarms[0];

            Task t = await StartAsync(a);
            bool canceled = false;
            try
            {
                await Task.WhenAll(a.StopAsync(), t);
            }
            catch (OperationCanceledException)
            {
                canceled = true;
            }

            Assert.True(canceled || t.IsCompleted);
        }

        [Fact(Timeout = Timeout)]
        public async Task AsPeer()
        {
            using (Swarm<DumbAction> swarm = CreateSwarm(_blockchains[0]))
            {
                Assert.IsNotType<BoundPeer>(swarm.AsPeer);

                await StartAsync(swarm);
                Assert.IsType<BoundPeer>(swarm.AsPeer);
                await StopAsync(swarm);
            }
        }

        [FactOnlyTurnAvailable(Timeout = Timeout)]
        public async Task ExchangeWithIceServer()
        {
            Uri turnUrl = FactOnlyTurnAvailableAttribute.TurnUri;
            string username = FactOnlyTurnAvailableAttribute.Username;
            string password = FactOnlyTurnAvailableAttribute.Password;

            IEnumerable<IceServer> iceServers = new[]
            {
                new IceServer(
                    urls: new[] { turnUrl },
                    username: username,
                    credential: password),
            };

            var seed = CreateSwarm(_blockchains[0], host: "localhost");
            var swarmA = CreateSwarm(_blockchains[1], iceServers: iceServers);
            var swarmB = CreateSwarm(_blockchains[2], iceServers: iceServers);

            try
            {
                await StartAsync(seed);
                await StartAsync(swarmA);
                await StartAsync(swarmB);

                await swarmA.AddPeersAsync(new[] { seed.AsPeer }, null);
                await swarmB.AddPeersAsync(new[] { seed.AsPeer }, null);
                await swarmA.AddPeersAsync(new[] { swarmB.AsPeer }, null);

                Assert.Equal(
                    new HashSet<BoundPeer>
                    {
                        swarmA.AsPeer as BoundPeer,
                        swarmB.AsPeer as BoundPeer,
                    },
                    seed.Peers.ToHashSet());
                Assert.Equal(
                    new HashSet<BoundPeer> { seed.AsPeer as BoundPeer, swarmB.AsPeer as BoundPeer },
                    swarmA.Peers.ToHashSet());
                Assert.Equal(
                    new HashSet<BoundPeer> { seed.AsPeer as BoundPeer, swarmA.AsPeer as BoundPeer },
                    swarmB.Peers.ToHashSet());
            }
            finally
            {
                await StopAsync(seed);
                await StopAsync(swarmA);
                await StopAsync(swarmB);

                seed.Dispose();
                swarmA.Dispose();
                swarmB.Dispose();
            }
        }

        [FactOnlyTurnAvailable(Timeout = 2 * Timeout)]
        public async Task ReconnectToTurn()
        {
            int port;
            using (var socket = new Socket(SocketType.Stream, ProtocolType.Tcp))
            {
                socket.Bind(new IPEndPoint(IPAddress.Loopback, 0));
                port = ((IPEndPoint)socket.LocalEndPoint).Port;
            }

            Uri turnUrl = FactOnlyTurnAvailableAttribute.TurnUri;
            string username = FactOnlyTurnAvailableAttribute.Username;
            string password = FactOnlyTurnAvailableAttribute.Password;
            var proxyUri = new Uri($"turn://{username}:{password}@localhost:{port}/");

            IEnumerable<IceServer> iceServers = new[]
            {
                new IceServer(urls: new[] { proxyUri }, username: username, credential: password),
            };

            var cts = new CancellationTokenSource();
            var tasks = new List<Task> { TurnProxy(port, turnUrl, cts.Token) };

            var seed = CreateSwarm(_blockchains[0], host: "localhost");
            var swarmA = CreateSwarm(_blockchains[1], iceServers: iceServers);

            async Task RefreshTableAsync(CancellationToken cancellationToken)
            {
                while (!cancellationToken.IsCancellationRequested)
                {
                    await Task.Delay(1000, cancellationToken);
                    try
                    {
                        await swarmA.Protocol.RefreshTableAsync(
                            TimeSpan.FromSeconds(10), cancellationToken);
                    }
                    catch (TurnClientException)
                    {
                    }
                }
            }

            async Task MineAndBroadcast(CancellationToken cancellationToken)
            {
                while (!cancellationToken.IsCancellationRequested)
                {
                    var block = await _blockchains[0].MineBlock(_fx1.Address1);
                    seed.BroadcastBlock(block);
                    await Task.Delay(5000, cancellationToken);
                }
            }

            try
            {
                await StartAsync(seed);
                await StartAsync(swarmA);

                await swarmA.AddPeersAsync(new[] { seed.AsPeer }, null);

                cts.Cancel();
                cts = new CancellationTokenSource();

                tasks.Add(TurnProxy(port, turnUrl, cts.Token));
                tasks.Add(RefreshTableAsync(cts.Token));
                tasks.Add(MineAndBroadcast(cts.Token));

                await swarmA.BlockReceived.WaitAsync();
                cts.Cancel();
                await Task.Delay(1000);

                Assert.Equal(_blockchains[0].Tip, _blockchains[1].Tip);
            }
            finally
            {
                await StopAsync(seed);
                await StopAsync(swarmA);

                seed.Dispose();
                swarmA.Dispose();
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task RemoveForkedChainWhenFillBlocksAsyncFail()
        {
            // This test makes 2 different policies to reproduce an exception
            // while FillBlocksAsync.
            var policy1 = new BlockPolicy<DumbAction>();
            var policy2 = new NullPolicy<DumbAction>();
            var fx1 = new DefaultStoreFixture();
            var fx2 = new DefaultStoreFixture();

            var chain1 = TestUtils.MakeBlockChain(policy1, fx1.Store);
            var chain2 = TestUtils.MakeBlockChain(policy2, fx2.Store);
            Assert.Equal(chain1.Genesis, chain2.Genesis);

            await chain1.MineBlock(_fx1.Address1);
            await chain2.MineBlock(_fx1.Address1);

            // Creates a block that will make chain 2's total difficulty is higher than chain 1's.
            var block3 = TestUtils.MineNext(
                chain2.Tip,
                difficulty: (long)chain1.Tip.TotalDifficulty + 1,
                blockInterval: TimeSpan.FromMilliseconds(1));
            chain2.Append(block3);

            var swarm1 = CreateSwarm(chain1);
            var swarm2 = CreateSwarm(chain2);

            try
            {
                await StartAsync(swarm1);
                await StartAsync(swarm2);
                await swarm1.AddPeersAsync(new[] { swarm2.AsPeer }, null);

                swarm2.BroadcastBlock(block3);
                await swarm1.FillBlocksAsyncFailed.WaitAsync();

                List<Guid> chainIds = fx1.Store.ListChainIds().ToList();
                Assert.Single(chainIds);
            }
            finally
            {
                await StopAsync(swarm1);
                await StopAsync(swarm2);

                fx1.Dispose();
                fx2.Dispose();

                swarm1.Dispose();
                swarm2.Dispose();
            }
        }

        [Fact]
        public async Task RenderInFork()
        {
            var policy = new BlockPolicy<DumbAction>(new MinerReward(1));
            var renderer = new DumbRenderer<DumbAction>();
            var chain = TestUtils.MakeBlockChain(
                policy,
                new DefaultStore(null),
                renderers: new[] { renderer }
            );
            var miner1 = CreateSwarm(chain);
            var miner2 = CreateSwarm(TestUtils.MakeBlockChain(policy, new DefaultStore(null)));

            int renderCount = 0;
            int renderCount2 = 0;

            try
            {
                await StartAsync(miner1);
                await StartAsync(miner2);

                await BootstrapAsync(miner2, miner1.AsPeer);

                var privKey = new PrivateKey();
                var addr = _fx1.Address1;
                var item = "foo";

                miner1.BlockChain.MakeTransaction(privKey, new[] { new DumbAction(addr, item) });
                await miner1.BlockChain.MineBlock(miner1.Address);

                miner2.BlockChain.MakeTransaction(privKey, new[] { new DumbAction(addr, item) });
                await miner2.BlockChain.MineBlock(miner2.Address);

                miner2.BlockChain.MakeTransaction(privKey, new[] { new DumbAction(addr, item) });
                var latest = await miner2.BlockChain.MineBlock(miner2.Address);

                renderer.RenderEventHandler += (_, a) => renderCount += a is DumbAction ? 1 : 0;
                DumbAction.RenderEventHandler += (_, __) => renderCount2++;

                miner2.BroadcastBlock(latest);

                await miner1.BlockReceived.WaitAsync();

                Assert.Equal(miner1.BlockChain.Tip, miner2.BlockChain.Tip);
                Assert.Equal(miner1.BlockChain.Count, miner2.BlockChain.Count);
                Assert.Equal(2, renderCount);
                Assert.Equal(renderCount, renderCount2);
            }
            finally
            {
                await StopAsync(miner1);
                await StopAsync(miner2);
                miner1.Dispose();
                miner2.Dispose();
                DumbAction.RenderRecords.Value = ImmutableList<RenderRecord>.Empty;
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task ForkByDifficulty()
        {
            var policy = new BlockPolicy<DumbAction>(new MinerReward(1));
            var chain1 = TestUtils.MakeBlockChain(policy, new DefaultStore(null));
            var chain2 = TestUtils.MakeBlockChain(policy, new DefaultStore(null));

            await chain1.MineBlock(_fx1.Address1);
            await chain1.MineBlock(_fx1.Address1);
            long nextDifficulty =
                (long)chain1.Tip.TotalDifficulty + policy.GetNextBlockDifficulty(chain2);
            var block = TestUtils.MineNext(
                chain2.Tip,
                difficulty: nextDifficulty,
                blockInterval: TimeSpan.FromMilliseconds(1));
            chain2.Append(block);

            Assert.True(chain1.Tip.Index > chain2.Tip.Index);
            Assert.True(chain1.Tip.TotalDifficulty < chain2.Tip.TotalDifficulty);

            var miner1 = CreateSwarm(chain1);
            var miner2 = CreateSwarm(chain2);

            try
            {
                await StartAsync(miner1);
                await StartAsync(miner2);

                await BootstrapAsync(miner2, miner1.AsPeer);

                miner2.BroadcastBlock(block);
                await miner1.BlockReceived.WaitAsync();

                Assert.Equal(miner1.BlockChain.Tip, miner2.BlockChain.Tip);
                Assert.Equal(miner1.BlockChain.Count, miner2.BlockChain.Count);
            }
            finally
            {
                await StopAsync(miner1);
                await StopAsync(miner2);
                miner1.Dispose();
                miner2.Dispose();
            }
        }

        [Fact(Skip="This should be fixed to work deterministically.")]
        public async Task HandleReorgInSynchronizing()
        {
            var policy = new BlockPolicy<Sleep>(new MinerReward(1));
            var miner1 = CreateSwarm(TestUtils.MakeBlockChain(policy, new DefaultStore(null)));
            var miner2 = CreateSwarm(TestUtils.MakeBlockChain(policy, new DefaultStore(null)));
            var receiver = CreateSwarm(TestUtils.MakeBlockChain(policy, new DefaultStore(null)));

            foreach (var i in Enumerable.Range(0, 8))
            {
                miner1.BlockChain.StageTransaction(
                    Transaction<Sleep>.Create(
                        0,
                        new PrivateKey(),
                        miner1.BlockChain.Genesis.Hash,
                        actions: new[] { new Sleep() }
                    )
                );
                var b = await miner1.BlockChain.MineBlock(miner1.Address);
                miner2.BlockChain.Append(b);
            }

            try
            {
                await StartAsync(miner1);
                await StartAsync(miner2);

                await BootstrapAsync(miner2, miner1.AsPeer);
                await BootstrapAsync(receiver, miner1.AsPeer);

                var t = receiver.PreloadAsync();
                await miner1.BlockChain.MineBlock(miner1.Address);
                await miner2.BlockChain.MineBlock(miner2.Address);
                Block<Sleep> latest = await miner2.BlockChain.MineBlock(miner2.Address);
                miner2.BroadcastBlock(latest);
                await t;

                Assert.Equal(miner1.BlockChain.Tip, miner2.BlockChain.Tip);
                Assert.Equal(miner1.BlockChain.Count, miner2.BlockChain.Count);
                Assert.Equal(miner1.BlockChain.Count, receiver.BlockChain.Count);
                Assert.Equal(miner1.BlockChain.Tip, receiver.BlockChain.Tip);
            }
            finally
            {
                await StopAsync(miner1);
                await StopAsync(miner2);
                miner1.Dispose();
                miner2.Dispose();
                receiver.Dispose();
            }
        }

        [Theory(Timeout = Timeout)]
        [InlineData(true)]
        [InlineData(false)]
        public async void RestageTransactionsOnceLocallyMinedAfterReorg(bool restage)
        {
            var policy = new BlockPolicy<DumbAction>(new MinerReward(1));
            var minerA = CreateSwarm(TestUtils.MakeBlockChain(policy, new DefaultStore(null)));
            var minerB = CreateSwarm(TestUtils.MakeBlockChain(policy, new DefaultStore(null)));

            var privateKeyA = new PrivateKey();
            var privateKeyB = new PrivateKey();

            try
            {
                const string dumbItem = "item0.0";
                var txA = minerA.BlockChain.MakeTransaction(
                    privateKeyA,
                    new[] { new DumbAction(_fx1.Address1, dumbItem), });
                var txB = minerB.BlockChain.MakeTransaction(
                    privateKeyB,
                    new[] { new DumbAction(_fx1.Address2, dumbItem), });

                if (!restage)
                {
                    minerB.BlockChain.StageTransaction(txA);
                }

                Log.Debug("Make minerB's chain longer than minerA's chain.");
                Block<DumbAction> blockA = await minerA.BlockChain.MineBlock(minerA.Address);
                Block<DumbAction> blockB = await minerB.BlockChain.MineBlock(minerB.Address);
                Block<DumbAction> blockC = await minerB.BlockChain.MineBlock(minerB.Address);

                Assert.Equal((Text)dumbItem, minerA.BlockChain.GetState(_fx1.Address1));
                Assert.Equal((Text)dumbItem, minerB.BlockChain.GetState(_fx1.Address2));

                await StartAsync(minerA);
                await StartAsync(minerB);

                await BootstrapAsync(minerA, minerB.AsPeer);

                Log.Debug("Reorg occurrs.");
                minerB.BroadcastBlock(blockC);
                await minerA.BlockAppended.WaitAsync();

                Assert.Equal(minerA.BlockChain.Tip, minerB.BlockChain.Tip);
                Assert.Equal(3, minerA.BlockChain.Count);
                Assert.Equal(
                    restage ? null : (Text?)dumbItem,
                    minerA.BlockChain.GetState(_fx1.Address1));
                Assert.Equal((Text)dumbItem, minerA.BlockChain.GetState(_fx1.Address2));

                Log.Debug("Check if txs in unrendered blocks staged again.");
                Assert.Equal(
                    restage,
                    minerA.BlockChain.GetStagedTransactionIds().Contains(txA.Id));

                await minerA.BlockChain.MineBlock(minerA.Address);
                minerA.BroadcastBlock(minerA.BlockChain.Tip);
                await minerB.BlockAppended.WaitAsync();

                Assert.Equal(minerA.BlockChain.Tip, minerB.BlockChain.Tip);
                Assert.Equal((Text)dumbItem, minerA.BlockChain.GetState(_fx1.Address1));
                Assert.Equal((Text)dumbItem, minerA.BlockChain.GetState(_fx1.Address2));
            }
            finally
            {
                await StopAsync(minerA);
                await StopAsync(minerB);

                minerA.Dispose();
                minerB.Dispose();
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task UnstageInvalidTransaction()
        {
            var validKey = new PrivateKey();
            bool IsSignerValid(Transaction<DumbAction> tx)
            {
                var validAddress = validKey.PublicKey.ToAddress();
                return tx.Signer.Equals(validAddress);
            }

            var policy = new BlockPolicy<DumbAction>(doesTransactionFollowPolicy: IsSignerValid);
            var fx1 = new DefaultStoreFixture();
            var fx2 = new DefaultStoreFixture();

            var swarmA = CreateSwarm(
                TestUtils.MakeBlockChain(policy, fx1.Store, privateKey: validKey));
            var swarmB = CreateSwarm(
                TestUtils.MakeBlockChain(policy, fx2.Store, privateKey: validKey));

            var invalidKey = new PrivateKey();

            try
            {
                var validTx = swarmA.BlockChain.MakeTransaction(validKey, new DumbAction[] { });
                var invalidTx = swarmA.BlockChain.MakeTransaction(invalidKey, new DumbAction[] { });

                await StartAsync(swarmA);
                await StartAsync(swarmB);

                await BootstrapAsync(swarmA, swarmB.AsPeer);

                swarmA.BroadcastTxs(new[] { validTx, invalidTx });
                await swarmB.TxReceived.WaitAsync();

                Assert.Equal(swarmB.BlockChain.GetTransaction(validTx.Id), validTx);
                Assert.Equal(swarmB.BlockChain.GetTransaction(invalidTx.Id), invalidTx);

                Assert.Contains(validTx.Id, swarmB.BlockChain.GetStagedTransactionIds());
                Assert.DoesNotContain(invalidTx.Id, swarmB.BlockChain.GetStagedTransactionIds());
            }
            finally
            {
                await StopAsync(swarmA);
                await StopAsync(swarmB);

                swarmA.Dispose();
                swarmB.Dispose();

                fx1.Dispose();
                fx2.Dispose();
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task IgnoreTransactionFromDifferentGenesis()
        {
            var validKey = new PrivateKey();
            bool IsSignerValid(Transaction<DumbAction> tx)
            {
                var validAddress = validKey.PublicKey.ToAddress();
                return tx.Signer.Equals(validAddress);
            }

            var policy = new BlockPolicy<DumbAction>(doesTransactionFollowPolicy: IsSignerValid);
            var fx1 = new DefaultStoreFixture();
            var fx2 = new DefaultStoreFixture();

            var swarmA = CreateSwarm(
                TestUtils.MakeBlockChain(
                    policy,
                    fx1.Store,
                    privateKey: validKey,
                    timestamp: DateTimeOffset.MinValue));
            var swarmB = CreateSwarm(
                TestUtils.MakeBlockChain(
                    policy,
                    fx2.Store,
                    privateKey: validKey,
                    timestamp: DateTimeOffset.MinValue.AddSeconds(1)));

            try
            {
                var tx = swarmA.BlockChain.MakeTransaction(validKey, new DumbAction[] { });

                await StartAsync(swarmA);
                await StartAsync(swarmB);

                await BootstrapAsync(swarmA, swarmB.AsPeer);

                swarmA.BroadcastTxs(new[] { tx });
                await swarmB.TxReceived.WaitAsync();

                Assert.Throws<KeyNotFoundException>(() => swarmB.BlockChain.GetTransaction(tx.Id));
                Assert.DoesNotContain(tx.Id, swarmB.BlockChain.GetStagedTransactionIds());
            }
            finally
            {
                await StopAsync(swarmA);
                await StopAsync(swarmB);

                swarmA.Dispose();
                swarmB.Dispose();

                fx1.Dispose();
                fx2.Dispose();
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task CreateNewChainWhenBranchPointNotExist()
        {
            // If the bucket stored peers are the same, the block may not propagate,
            // so specify private keys to make the buckets different.
            var keyA = ByteUtil.ParseHex(
                "8568eb6f287afedece2c7b918471183db0451e1a61535bb0381cfdf95b85df20");
            var keyB = ByteUtil.ParseHex(
                "c34f7498befcc39a14f03b37833f6c7bb78310f1243616524eda70e078b8313c");
            var keyC = ByteUtil.ParseHex(
                "941bc2edfab840d79914d80fe3b30840628ac37a5d812d7f922b5d2405a223d3");

            var minerSwarmA = CreateSwarm(_blockchains[0], new PrivateKey(keyA));
            var minerSwarmB = CreateSwarm(_blockchains[1], new PrivateKey(keyB));
            var receiverSwarm = CreateSwarm(_blockchains[2], new PrivateKey(keyC));

            BlockChain<DumbAction> minerChainA = _blockchains[0];
            BlockChain<DumbAction> minerChainB = _blockchains[1];
            BlockChain<DumbAction> receiverChain = _blockchains[2];

            try
            {
                await StartAsync(minerSwarmA);
                await StartAsync(minerSwarmB);
                await StartAsync(receiverSwarm);

                await BootstrapAsync(minerSwarmA, receiverSwarm.AsPeer);
                await BootstrapAsync(minerSwarmB, receiverSwarm.AsPeer);

                // Broadcast SwarmA's first block.
                var b1 = await minerChainA.MineBlock(_fx1.Address1);
                await minerChainB.MineBlock(_fx1.Address1);
                minerSwarmA.BroadcastBlock(b1);
                await receiverSwarm.BlockAppended.WaitAsync();
                Assert.Equal(receiverChain.Tip, minerChainA.Tip);

                // Broadcast SwarmB's second block.
                await minerChainA.MineBlock(_fx1.Address1);
                var b2 = await minerChainB.MineBlock(_fx1.Address1);
                minerSwarmB.BroadcastBlock(b2);
                await receiverSwarm.BlockAppended.WaitAsync();
                Assert.Equal(receiverChain.Tip, minerChainB.Tip);

                // Broadcast SwarmA's third block.
                var b3 = await minerChainA.MineBlock(_fx1.Address1);
                await minerChainB.MineBlock(_fx1.Address1);
                minerSwarmA.BroadcastBlock(b3);
                await receiverSwarm.BlockAppended.WaitAsync();
                Assert.Equal(receiverChain.Tip, minerChainA.Tip);
            }
            finally
            {
                await StopAsync(minerSwarmA);
                await StopAsync(minerSwarmB);
                await StopAsync(receiverSwarm);
                minerSwarmA.Dispose();
                minerSwarmB.Dispose();
                receiverSwarm.Dispose();
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task DoNotDeleteCanonicalChainWhenBlockDownloadFailed()
        {
            var chainA = _blockchains[0];
            var chainB = _blockchains[1];

            var swarmA = _swarms[0];
            var swarmB = _swarms[1];
            swarmB.Options.BlockHashRecvTimeout = TimeSpan.FromMilliseconds(10);

            var genesis = await chainA.MineBlock(_fx1.Address1);
            chainB.Append(genesis);

            await chainA.MineBlock(_fx1.Address1);
            var block = await chainA.MineBlock(_fx1.Address1);

            try
            {
                await StartAsync(swarmA);
                await StartAsync(swarmB);
                await BootstrapAsync(swarmA, swarmB.AsPeer);

                swarmA.BroadcastBlock(block);
                await swarmB.FillBlocksAsyncStarted.WaitAsync();
                await StopAsync(swarmA);
                await swarmB.FillBlocksAsyncFailed.WaitAsync();

                Assert.NotNull(chainB.GetState(_fx1.Address1));
            }
            finally
            {
                await StopAsync(swarmA);
                await StopAsync(swarmB);
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task DoNotReceiveBlockFromNodeHavingDifferenceGenesisBlock()
        {
            var keyA = ByteUtil.ParseHex(
                "8568eb6f287afedece2c7b918471183db0451e1a61535bb0381cfdf95b85df20");
            var keyB = ByteUtil.ParseHex(
                "c34f7498befcc39a14f03b37833f6c7bb78310f1243616524eda70e078b8313c");
            var keyC = ByteUtil.ParseHex(
                "941bc2edfab840d79914d80fe3b30840628ac37a5d812d7f922b5d2405a223d3");

            var privateKeyA = new PrivateKey(keyA);
            var privateKeyB = new PrivateKey(keyB);
            var privateKeyC = new PrivateKey(keyC);

            var actionsA = new[] { new DumbAction(_fx1.Address1, "1") };
            var actionsB = new[] { new DumbAction(_fx1.Address1, "2") };

            var genesisBlockA = BlockChain<DumbAction>.MakeGenesisBlock(actionsA, privateKeyA);
            var genesisBlockB = BlockChain<DumbAction>.MakeGenesisBlock(actionsB, privateKeyB);

            BlockChain<DumbAction>
                MakeGenesisChain(IStore store, Block<DumbAction> genesisBlock) =>
                new BlockChain<DumbAction>(
                    new BlockPolicy<DumbAction>(),
                    store,
                    store as IStateStore,
                    genesisBlock);

            var genesisChainA = MakeGenesisChain(new DefaultStore(null), genesisBlockA);
            var genesisChainB = MakeGenesisChain(new DefaultStore(null), genesisBlockB);
            var genesisChainC = MakeGenesisChain(new DefaultStore(null), genesisBlockA);

            var swarmA = CreateSwarm(genesisChainA, privateKeyA);
            var swarmB = CreateSwarm(genesisChainB, privateKeyB);
            var swarmC = CreateSwarm(genesisChainC, privateKeyC);
            try
            {
                await StartAsync(swarmA);
                await StartAsync(swarmB);
                await StartAsync(swarmC);

                await swarmB.AddPeersAsync(new[] { swarmA.AsPeer }, null);
                await swarmC.AddPeersAsync(new[] { swarmA.AsPeer }, null);

                var block = await swarmA.BlockChain.MineBlock(swarmA.Address);

                Task.WaitAll(new[]
                {
                    Task.Run(() => swarmC.BlockAppended.Wait()),
                    Task.Run(() => swarmA.BroadcastBlock(block)),
                });

                Assert.NotEqual(genesisChainA.Genesis, genesisChainB.Genesis);
                Assert.Equal(genesisChainA.BlockHashes, genesisChainC.BlockHashes);
                Assert.Equal(2, genesisChainA.Count);
                Assert.Equal(1, genesisChainB.Count);
                Assert.Equal(2, genesisChainC.Count);

                Assert.Equal("1", (Text)genesisChainA.GetState(_fx1.Address1));
                Assert.Equal("2", (Text)genesisChainB.GetState(_fx1.Address1));
                Assert.Equal("1", (Text)genesisChainC.GetState(_fx1.Address1));
            }
            finally
            {
                await StopAsync(swarmA);
                await StopAsync(swarmB);
                await StopAsync(swarmC);

                swarmA.Dispose();
                swarmB.Dispose();
                swarmC.Dispose();
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task ThrowInvalidGenesisException()
        {
            var policy = new BlockPolicy<DumbAction>();
            BlockChain<DumbAction> MakeBlockChain() => TestUtils.MakeBlockChain(
                policy,
                new DefaultStore(path: null),
                null,
                new PrivateKey());

            var chainA = MakeBlockChain();
            var chainB = MakeBlockChain();
            var swarmA = CreateSwarm(chainA);
            var swarmB = CreateSwarm(chainB);

            await chainB.MineBlock(_fx1.Address1);

            await StartAsync(swarmA);
            await StartAsync(swarmB);

            await swarmA.AddPeersAsync(new[] { swarmB.AsPeer }, null);
            Assert.NotEqual(chainA.Genesis, chainB.Genesis);
            Task t = swarmA.PreloadAsync();
            await Assert.ThrowsAsync<AggregateException>(async () => await t);
            var exception = t.Exception.InnerException?.InnerException;
            Assert.IsType<InvalidGenesisBlockException>(exception);

            await StopAsync(swarmA);
            await StopAsync(swarmB);
            swarmA.Dispose();
            swarmB.Dispose();
        }

        [Fact(Timeout = Timeout)]
        public async Task FindSpecificPeerAsync()
        {
            Swarm<DumbAction> swarmA = _swarms[0];
            Swarm<DumbAction> swarmB = _swarms[1];
            Swarm<DumbAction> swarmC = _swarms[2];
            Swarm<DumbAction> swarmD = _swarms[3];
            BoundPeer foundPeer;
            try
            {
                await StartAsync(swarmA);
                await StartAsync(swarmB);
                await StartAsync(swarmC);
                await StartAsync(swarmD);

                await swarmA.AddPeersAsync(new Peer[] { swarmB.AsPeer }, null);
                await swarmB.AddPeersAsync(new Peer[] { swarmC.AsPeer }, null);
                await swarmC.AddPeersAsync(new Peer[] { swarmD.AsPeer }, null);

                foundPeer = await swarmA.FindSpecificPeerAsync(
                    swarmA.AsPeer.Address,
                    swarmB.AsPeer.Address,
                    -1,
                    null,
                    TimeSpan.FromMilliseconds(3000),
                    default(CancellationToken));

                Assert.Equal(swarmB.AsPeer.Address, foundPeer.Address);

                foundPeer = await swarmA.FindSpecificPeerAsync(
                    swarmA.AsPeer.Address,
                    swarmD.AsPeer.Address,
                    -1,
                    null,
                    TimeSpan.FromMilliseconds(3000),
                    default(CancellationToken));

                Assert.Equal(swarmD.AsPeer.Address, foundPeer.Address);
            }
            finally
            {
                await StopAsync(swarmA);
                await StopAsync(swarmB);
                await StopAsync(swarmC);
                await StopAsync(swarmD);
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task DoNotFillMultipleTimes()
        {
            Swarm<DumbAction> receiver = _swarms[0];
            Swarm<DumbAction> sender1 = _swarms[1];
            Swarm<DumbAction> sender2 = _swarms[2];

            await StartAsync(receiver);
            await StartAsync(sender1);
            await StartAsync(sender2);

            Block<DumbAction> b1 =
                TestUtils.MineNext(receiver.BlockChain.Genesis, difficulty: 1024);

            try
            {
                await BootstrapAsync(sender1, receiver.AsPeer);
                await BootstrapAsync(sender2, receiver.AsPeer);

                sender1.BlockChain.Append(b1);
                sender2.BlockChain.Append(b1);

                sender1.BroadcastBlock(b1);
                sender2.BroadcastBlock(b1);

                // Make sure that receiver swarm only filled once for same block
                // that were broadcasted simultaneously.
                await receiver.BlockReceived.WaitAsync();

                // Awaits 1 second because receiver swarm may tried to fill again after filled.
                await Task.Delay(1000);
                var transport = receiver.Transport as NetMQTransport;
                Log.Debug("Messages: {@Message}", transport.MessageHistory);
                Assert.Single(
                    transport.MessageHistory.Where(msg => msg is Libplanet.Net.Messages.Blocks));

                Transaction<DumbAction> tx = Transaction<DumbAction>.Create(
                    0,
                    new PrivateKey(),
                    sender1.BlockChain.Genesis.Hash,
                    new DumbAction[] { }
                );
                sender1.BlockChain.StageTransaction(tx);
                sender2.BlockChain.StageTransaction(tx);

                // Make sure that receiver swarm only filled once for same transaction
                // that were broadcasted simultaneously.
                sender1.BroadcastTxs(new[] { tx });
                sender2.BroadcastTxs(new[] { tx });

                await receiver.TxReceived.WaitAsync();

                // Awaits 1 second because receiver swarm may tried to fill again after filled.
                await Task.Delay(1000);
                Assert.Single(
                    transport.MessageHistory.Where(msg => msg is Libplanet.Net.Messages.Tx));
            }
            finally
            {
                await StopAsync(receiver);
                await StopAsync(sender1);
                await StopAsync(sender2);
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task GetPeerChainStateAsync()
        {
            Swarm<DumbAction> swarm1 = _swarms[0];
            Swarm<DumbAction> swarm2 = _swarms[1];
            Swarm<DumbAction> swarm3 = _swarms[2];

            var peerChainState = await swarm1.GetPeerChainStateAsync(
                TimeSpan.FromSeconds(1), default);
            Assert.Empty(peerChainState);

            try
            {
                await StartAsync(swarm2);
                await StartAsync(swarm3);

                await BootstrapAsync(swarm1, swarm2.AsPeer);

                peerChainState = await swarm1.GetPeerChainStateAsync(
                    TimeSpan.FromSeconds(1), default);
                Assert.Equal(
                    new PeerChainState((BoundPeer)swarm2.AsPeer, 0, 0),
                    peerChainState.First()
                );

                await swarm2.BlockChain.MineBlock(_fx1.Address1);
                peerChainState = await swarm1.GetPeerChainStateAsync(
                    TimeSpan.FromSeconds(1), default);
                Assert.Equal(
                    new PeerChainState((BoundPeer)swarm2.AsPeer, 1, 1024),
                    peerChainState.First()
                );

                await BootstrapAsync(swarm1, swarm3.AsPeer);
                peerChainState = await swarm1.GetPeerChainStateAsync(
                    TimeSpan.FromSeconds(1), default);
                Assert.Equal(
                    new[]
                    {
                        new PeerChainState((BoundPeer)swarm2.AsPeer, 1, 1024),
                        new PeerChainState((BoundPeer)swarm3.AsPeer, 0, 0),
                    }.ToHashSet(),
                    peerChainState.ToHashSet()
                );
            }
            finally
            {
                await StopAsync(swarm2);
                await StopAsync(swarm3);
            }
        }

        private async Task<Task> StartAsync<T>(
            Swarm<T> swarm,
            IImmutableSet<Address> trustedStateValidators = null,
            CancellationToken cancellationToken = default
        )
            where T : IAction, new()
        {
            Task task = swarm.StartAsync(200, 200, trustedStateValidators, cancellationToken);
            await swarm.WaitForRunningAsync();
            return task;
        }

        private Task StopAsync<T>(Swarm<T> swarm)
            where T : IAction, new()
        {
            return swarm.StopAsync(TimeSpan.FromMilliseconds(10));
        }

        private Task BootstrapAsync<T>(
            Swarm<T> swarm,
            Peer seed,
            CancellationToken cancellationToken = default
        )
            where T : IAction, new() =>
            BootstrapAsync(swarm, new[] { seed }, cancellationToken);

        private async Task BootstrapAsync<T>(
            Swarm<T> swarm,
            IEnumerable<Peer> seeds,
            CancellationToken cancellationToken = default
        )
            where T : IAction, new()
        {
            await swarm.BootstrapAsync(
                seeds,
                null,
                findNeighborsTimeout: TimeSpan.FromSeconds(3),
                cancellationToken: cancellationToken);
        }

        private async Task TurnProxy(
            int port,
            Uri turnUri,
            CancellationToken cancellationToken)
        {
            var server = new TcpListener(IPAddress.Loopback, port);
            server.Start();
            var tasks = new List<Task>();
            var clients = new List<TcpClient>();

            cancellationToken.Register(() => server.Stop());
            while (!cancellationToken.IsCancellationRequested)
            {
                TcpClient client;
                try
                {
                    client = await server.AcceptTcpClientAsync();
                }
                catch (ObjectDisposedException)
                {
                    break;
                }

                clients.Add(client);

                tasks.Add(Task.Run(
                    async () =>
                    {
                        const int bufferSize = 8192;
                        NetworkStream stream = client.GetStream();

                        using (TcpClient remoteClient = new TcpClient(turnUri.Host, turnUri.Port))
                        {
                            var remoteStream = remoteClient.GetStream();
                            await await Task.WhenAny(
                                remoteStream.CopyToAsync(stream, bufferSize, cancellationToken),
                                stream.CopyToAsync(remoteStream, bufferSize, cancellationToken));
                        }

                        client.Dispose();
                    },
                    cancellationToken));
            }

            foreach (var client in clients)
            {
                client?.Dispose();
            }

            Log.Debug("TurnProxy is canceled.");

            await Task.WhenAny(tasks);
        }

        private class Sleep : IAction
        {
            public IValue PlainValue => default(Null);

            public IAccountStateDelta Execute(IActionContext context)
            {
                Thread.Sleep(10);
                return context.PreviousStates;
            }

            public void LoadPlainValue(IValue plainValue)
            {
            }

            public void Render(IActionContext context, IAccountStateDelta nextStates)
            {
            }

            public void RenderError(IActionContext context, Exception exception)
            {
            }

            public void Unrender(IActionContext context, IAccountStateDelta nextStates)
            {
            }

            public void UnrenderError(IActionContext context, Exception exception)
            {
            }
        }
    }
}
