using System;
using System.Collections.Async;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Net;
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
using Libplanet.Tests.Blockchain;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Store;
using Libplanet.Tx;
using NetMQ;
using NetMQ.Sockets;
using Nito.AsyncEx;
using Serilog;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Tests.Net
{
    public class SwarmTest : IDisposable
    {
        private const int Timeout = 60 * 1000;
        private const int DisposeTimeout = 5 * 1000;

        private static Block<DumbAction>[] _fixtureBlocksForPreloadAsyncCancellationTest;

        private readonly ITestOutputHelper _output;
        private readonly StoreFixture _fx1;
        private readonly StoreFixture _fx2;
        private readonly StoreFixture _fx3;
        private readonly StoreFixture _fx4;

        private readonly List<BlockChain<DumbAction>> _blockchains;
        private readonly List<Swarm<DumbAction>> _swarms;

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

            _output = output;

            var policy = new BlockPolicy<DumbAction>(new MinerReward(1));
            _fx1 = new DefaultStoreFixture(memory: true);
            _fx2 = new DefaultStoreFixture(memory: true);
            _fx3 = new DefaultStoreFixture(memory: true);
            _fx4 = new DefaultStoreFixture(memory: true);

            _blockchains = new List<BlockChain<DumbAction>>
            {
                TestUtils.MakeBlockChain(policy, _fx1.Store),
                TestUtils.MakeBlockChain(policy, _fx2.Store),
                TestUtils.MakeBlockChain(policy, _fx3.Store),
                TestUtils.MakeBlockChain(policy, _fx4.Store),
            };

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
                Log.Logger.Debug(
                    $"Started to {nameof(Dispose)}() {nameof(Swarm<DumbAction>)} instances."
                );
                int i = 1;
                foreach (Swarm<DumbAction> s in _swarms)
                {
                    StopAsync(s).Wait(DisposeTimeout);
                    Log.Logger.Debug(
                        $"Finished to {nameof(Dispose)}() a {nameof(Swarm<DumbAction>)} " +
                        "instance #{0}.",
                        i
                    );
                    i++;

                    s.Dispose();
                }

                Log.Logger.Debug(
                    $"Finished to {nameof(Dispose)}() {nameof(Swarm<DumbAction>)} instances."
                );

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

            Log.Debug($"chainA: {string.Join(",", chainA)}");
            Log.Debug($"chainB: {string.Join(",", chainB)}");

            Assert.Equal(chainA.BlockHashes, chainB.BlockHashes);
        }

        [Fact(Timeout = Timeout)]
        public async Task DetectAppProtocolVersion()
        {
            var blockChain = _blockchains[0];

            var a = CreateSwarm(blockChain, appProtocolVersion: 2);
            var b = CreateSwarm(blockChain, appProtocolVersion: 3);
            var c = CreateSwarm(blockChain, appProtocolVersion: 2);
            var d = CreateSwarm(blockChain, appProtocolVersion: 3);

            try
            {
                await StartAsync(c);
                await StartAsync(d);

                var peers = new[] { c.AsPeer, d.AsPeer };

                foreach (var peer in peers)
                {
                    await a.AddPeersAsync(new[] { peer }, null);
                    await b.AddPeersAsync(new[] { peer }, null);
                }

                Assert.Equal(new[] { c.AsPeer }, a.Peers.ToArray());
                Assert.Equal(new[] { d.AsPeer }, b.Peers.ToArray());
            }
            finally
            {
                await StopAsync(c);
                await StopAsync(d);

                a.Dispose();
                b.Dispose();
                c.Dispose();
                d.Dispose();
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task HandleDifferentAppProtocolVersion()
        {
            var isCalled = false;

            void GameHandler(object sender, DifferentProtocolVersionEventArgs e)
            {
                isCalled = true;
            }

            var a = CreateSwarm(
                _blockchains[0],
                appProtocolVersion: 2,
                differentVersionPeerEncountered: GameHandler);
            var b = CreateSwarm(_blockchains[1], appProtocolVersion: 3);

            try
            {
                await StartAsync(b);

                await Assert.ThrowsAsync<PeerDiscoveryException>(() => BootstrapAsync(a, b.AsPeer));

                Assert.True(isCalled);
            }
            finally
            {
                await StopAsync(a);
                await StopAsync(b);

                a.Dispose();
                b.Dispose();
            }
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
        public async Task CanGetBlock()
        {
            Swarm<DumbAction> swarmA = _swarms[0];
            Swarm<DumbAction> swarmB = _swarms[1];

            BlockChain<DumbAction> chainA = _blockchains[0];
            BlockChain<DumbAction> chainB = _blockchains[1];

            Block<DumbAction> genesis = await chainA.MineBlock(_fx1.Address1);
            chainB.Append(genesis); // chainA and chainB shares genesis block.
            Block<DumbAction> block1 = await chainA.MineBlock(_fx1.Address1);
            Block<DumbAction> block2 = await chainA.MineBlock(_fx1.Address1);

            try
            {
                await StartAsync(swarmA);
                await StartAsync(swarmB);

                await swarmA.AddPeersAsync(new[] { swarmB.AsPeer }, null);

                IEnumerable<HashDigest<SHA256>> inventories1 =
                    await swarmB.GetBlockHashesAsync(
                        swarmA.AsPeer as BoundPeer,
                        new BlockLocator(new[] { genesis.Hash }),
                        null);
                Assert.Equal(
                    new[] { genesis.Hash, block1.Hash, block2.Hash },
                    inventories1);

                IEnumerable<HashDigest<SHA256>> inventories2 =
                    await swarmB.GetBlockHashesAsync(
                        swarmA.AsPeer as BoundPeer,
                        new BlockLocator(new[] { genesis.Hash }),
                        block1.Hash);
                Assert.Equal(
                    new[] { genesis.Hash, block1.Hash },
                    inventories2);

                List<Block<DumbAction>> receivedBlocks =
                    await swarmB.GetBlocksAsync(
                        swarmA.AsPeer as BoundPeer, inventories1
                    ).ToListAsync();

                Assert.Equal(
                    new[] { genesis, block1, block2 },
                    receivedBlocks);
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

                IEnumerable<HashDigest<SHA256>> hashes =
                    await swarmB.GetBlockHashesAsync(
                        peer,
                        new BlockLocator(new[] { genesis.Hash }),
                        null);

                var netMQAddress = $"tcp://{peer.EndPoint.Host}:{peer.EndPoint.Port}";
                using (var socket = new DealerSocket(netMQAddress))
                {
                    var request = new GetBlocks(hashes, 2);
                    socket.SendMultipartMessage(
                        request.ToNetMQMessage(privateKey, swarmB.AsPeer)
                    );

                    NetMQMessage response = socket.ReceiveMultipartMessage();
                    Message parsedMessage = Message.Parse(response, true);
                    Libplanet.Net.Messages.Blocks blockMessage =
                        (Libplanet.Net.Messages.Blocks)parsedMessage;

                    Assert.Equal(2, blockMessage.Payloads.Count);

                    response = socket.ReceiveMultipartMessage();
                    parsedMessage = Message.Parse(response, true);
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
                new DumbAction[0]
            );
            chainB.StageTransactions(ImmutableHashSet<Transaction<DumbAction>>.Empty.Add(tx));
            await chainB.MineBlock(_fx1.Address1);

            try
            {
                await StartAsync(swarmA);
                await StartAsync(swarmB);

                await swarmA.AddPeersAsync(new[] { swarmB.AsPeer }, null);

                List<Transaction<DumbAction>> txs =
                    await swarmA.GetTxsAsync(
                        swarmB.AsPeer as BoundPeer, new[] { tx.Id }
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
                new DumbAction[] { }
            );

            chainA.StageTransactions(ImmutableHashSet<Transaction<DumbAction>>.Empty.Add(tx));
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
            var address = privateKey.PublicKey.ToAddress();

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
                new DumbAction[] { }
            );

            chainA.StageTransactions(ImmutableHashSet<Transaction<DumbAction>>.Empty.Add(tx));

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
                    fxs[i].GenesisBlock
                );
                swarms[i] = CreateSwarm(blockChains[i]);
            }

            Transaction<DumbAction> tx = Transaction<DumbAction>.Create(
                0,
                new PrivateKey(),
                new DumbAction[] { }
            );

            blockChains[size - 1]
                .StageTransactions(ImmutableHashSet<Transaction<DumbAction>>.Empty.Add(tx));

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

                await swarmC.BlockAppended.WaitAsync();

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
        public async Task PreventFillBlockWhenReceivedContinuousBlocks()
        {
            Swarm<DumbAction> swarmA = _swarms[0];
            Swarm<DumbAction> swarmB = _swarms[1];

            BlockChain<DumbAction> chainA = _blockchains[0];
            BlockChain<DumbAction> chainB = _blockchains[1];

            Block<DumbAction> block1 = await _blockchains[0].MineBlock(_fx1.Address1);
            await _blockchains[0].MineBlock(_fx1.Address1);
            Block<DumbAction> block2 = await _blockchains[0].MineBlock(_fx1.Address1);

            try
            {
                await StartAsync(swarmA);
                await StartAsync(swarmB);

                await BootstrapAsync(swarmA, swarmB.AsPeer);

                Task t = swarmB.BlockAppended.WaitAsync();
                swarmA.BroadcastBlock(block1);
                await t;
                // Make sure that FillBlocksAsync did not run.
                Assert.False(swarmB.FillBlocksAsyncStarted.IsSet);
                Assert.Equal(chainB.BlockHashes, new[] { chainA[0].Hash, chainA[1].Hash });

                t = swarmB.BlockAppended.WaitAsync();
                swarmA.BroadcastBlock(block2);
                await t;
                // Make sure that FillBlocksAsync is ran.
                Assert.True(swarmB.FillBlocksAsyncStarted.IsSet);
                Assert.Equal(chainB.BlockHashes, chainA.BlockHashes);
            }
            finally
            {
                await StopAsync(swarmA);
                await StopAsync(swarmB);

                swarmA.Dispose();
                swarmB.Dispose();
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

            DumbAction.RenderRecords.Value = ImmutableList<RenderRecord>.Empty;
            MinerReward.RenderRecords.Value = ImmutableList<RenderRecord>.Empty;

            int renderCount = 0;

            void RenderHandler(object target, IAction action)
            {
                renderCount += 1;
            }

            DumbAction.RenderEventHandler += RenderHandler;

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
            Assert.Throws<ArgumentNullException>(() =>
            {
                new Swarm<DumbAction>(null, new PrivateKey(), 1);
            });

            Assert.Throws<ArgumentNullException>(() =>
            {
                new Swarm<DumbAction>(_blockchains[0], null, 1);
            });

            // Swarm<DumbAction> needs host or iceServers.
            Assert.Throws<ArgumentException>(() =>
            {
                new Swarm<DumbAction>(_blockchains[0], new PrivateKey(), 1);
            });

            // Swarm<DumbAction> needs host or iceServers.
            Assert.Throws<ArgumentException>(() =>
            {
                new Swarm<DumbAction>(
                    _blockchains[0],
                    new PrivateKey(),
                    1,
                    iceServers: new IceServer[] { });
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

            Assert.True(canceled);
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

        [Fact(Timeout = Timeout)]
        public async Task InitialBlockDownload()
        {
            Swarm<DumbAction> minerSwarm = _swarms[0];
            Swarm<DumbAction> receiverSwarm = _swarms[1];

            BlockChain<DumbAction> minerChain = _blockchains[0];
            BlockChain<DumbAction> receiverChain = _blockchains[1];

            foreach (int i in Enumerable.Range(0, 10))
            {
                await minerChain.MineBlock(_fx1.Address1);
            }

            try
            {
                await StartAsync(minerSwarm);
                await receiverSwarm.AddPeersAsync(new[] { minerSwarm.AsPeer }, null);

                await receiverSwarm.PreloadAsync();

                Assert.Equal(minerChain.BlockHashes, receiverChain.BlockHashes);
            }
            finally
            {
                await StopAsync(minerSwarm);
                await StopAsync(receiverSwarm);
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task InitialBlockDownloadStates()
        {
            Swarm<DumbAction> minerSwarm = _swarms[0];
            Swarm<DumbAction> receiverSwarm = _swarms[1];

            BlockChain<DumbAction> minerChain = _blockchains[0];
            BlockChain<DumbAction> receiverChain = _blockchains[1];

            var key = new PrivateKey();
            var address = key.PublicKey.ToAddress();

            minerChain.MakeTransaction(key, new[] { new DumbAction(address, "foo") });
            await minerChain.MineBlock(_fx1.Address1);

            minerChain.MakeTransaction(key, new[] { new DumbAction(address, "bar") });
            await minerChain.MineBlock(_fx1.Address1);

            minerChain.MakeTransaction(key, new[] { new DumbAction(address, "baz") });
            await minerChain.MineBlock(_fx1.Address1);

            try
            {
                await StartAsync(minerSwarm);
                await receiverSwarm.AddPeersAsync(new[] { minerSwarm.AsPeer }, null);

                var trustedStateValidators = new[] { minerSwarm.Address }.ToImmutableHashSet();

                await receiverSwarm.PreloadAsync(trustedStateValidators: trustedStateValidators);
                await receiverSwarm.PreloadAsync();
                var state = receiverChain.GetState(address);

                Assert.Equal((Text)"foo,bar,baz", state);
                Assert.Equal(minerChain.BlockHashes, receiverChain.BlockHashes);
            }
            finally
            {
                await StopAsync(minerSwarm);
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task Preload()
        {
            Swarm<DumbAction> minerSwarm = _swarms[0];
            Swarm<DumbAction> receiverSwarm = _swarms[1];

            BlockChain<DumbAction> minerChain = _blockchains[0];
            BlockChain<DumbAction> receiverChain = _blockchains[1];

            var blocks = new List<Block<DumbAction>>();
            foreach (int i in Enumerable.Range(0, 11))
            {
                blocks.Add(TestUtils.MineNext(
                    previousBlock: i == 0 ? minerChain.Genesis : blocks[i - 1],
                    difficulty: 1024));
                if (i != 10)
                {
                    minerChain.Append(blocks[i]);
                }
            }

            var actualStates = new List<PreloadState>();
            var progress = new Progress<PreloadState>(state =>
            {
                lock (actualStates)
                {
                    actualStates.Add(state);

                    if (actualStates.Count == 9)
                    {
                        minerChain.Append(blocks[10]);
                    }
                }
            });

            try
            {
                await StartAsync(minerSwarm);

                await receiverSwarm.AddPeersAsync(new[] { minerSwarm.AsPeer }, null);

                minerSwarm.FindNextHashesChunkSize = 2;
                await receiverSwarm.PreloadAsync(TimeSpan.FromSeconds(15), progress);

                // Await 1 second to make sure all progresses is reported.
                await Task.Delay(1000);

                Assert.Equal(minerChain.BlockHashes, receiverChain.BlockHashes);

                var expectedStates = new List<PreloadState>();

                for (var i = 1; i < minerChain.Count; i++)
                {
                    var b = minerChain[i];
                    var state = new BlockDownloadState
                    {
                        ReceivedBlockHash = b.Hash,
                        TotalBlockCount = 10,
                        ReceivedBlockCount = i,
                        SourcePeer = minerSwarm.AsPeer as BoundPeer,
                    };
                    expectedStates.Add(state);
                }

                ((BlockDownloadState)expectedStates[9]).TotalBlockCount = 11;
                ((BlockDownloadState)expectedStates[10]).TotalBlockCount = 11;

                for (var i = 1; i < minerChain.Count; i++)
                {
                    var b = minerChain[i];
                    var state = new ActionExecutionState
                    {
                        ExecutedBlockHash = b.Hash,
                        TotalBlockCount = 11,
                        ExecutedBlockCount = i,
                    };
                    expectedStates.Add(state);
                }

                Assert.Equal(expectedStates.Count, actualStates.Count);
                foreach (var states in expectedStates.Zip(actualStates, ValueTuple.Create))
                {
                    Assert.Equal(states.Item1, states.Item2);
                }

                Log.Debug("{@expectedStates}", expectedStates);
                Log.Debug("{@actualStates}", actualStates);

                Assert.Equal(
                    expectedStates.ToImmutableHashSet(),
                    actualStates.ToImmutableHashSet());
            }
            finally
            {
                await StopAsync(minerSwarm);
                await StopAsync(receiverSwarm);
            }
        }

        [Fact]
        public async Task PreloadFailed()
        {
            Swarm<DumbAction> minerSwarm = _swarms[0];
            Swarm<DumbAction> receiverSwarm = _swarms[1];

            foreach (var unused in Enumerable.Range(0, 10))
            {
                await minerSwarm.BlockChain.MineBlock(_fx1.Address1);
            }

            receiverSwarm.BlockHashRecvTimeout = TimeSpan.FromMilliseconds(10);

            var isCalled = false;
            void Handler(object sender, PreloadBlockDownloadFailEventArgs e)
            {
                if (e.InnerExceptions.All(ex => ex is TimeoutException))
                {
                    isCalled = true;
                }
            }

            try
            {
                // SwarmException should be thrown if event handler doesn't exist.
                await StartAsync(minerSwarm);

                await receiverSwarm.AddPeersAsync(new[] { minerSwarm.AsPeer }, null);
                var t = receiverSwarm.PreloadAsync(TimeSpan.FromSeconds(15));
                await receiverSwarm.PreloadStarted.WaitAsync();
                await StopAsync(minerSwarm);
                await Assert.ThrowsAsync<AggregateException>(async () => await t);

                // Event handler should be called if it exists.
                await StartAsync(minerSwarm);

                t = receiverSwarm.PreloadAsync(
                    TimeSpan.FromSeconds(15),
                    blockDownloadFailed: Handler);
                await receiverSwarm.PreloadStarted.WaitAsync();
                await StopAsync(minerSwarm);
                await t;
                Assert.True(isCalled);
            }
            finally
            {
                await StopAsync(minerSwarm);
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task PreloadFromNominer()
        {
            Swarm<DumbAction> minerSwarm = _swarms[0];
            Swarm<DumbAction> receiverSwarm = _swarms[1];
            var fxForNominers = new StoreFixture[2];
            fxForNominers[0] = new DefaultStoreFixture(memory: true);
            fxForNominers[1] = new DefaultStoreFixture(memory: true);
            var policy = new BlockPolicy<DumbAction>();
            var blockChainsForNominers = new[]
            {
                TestUtils.MakeBlockChain(policy, fxForNominers[0].Store),
                TestUtils.MakeBlockChain(policy, fxForNominers[1].Store),
            };
            var nominerSwarm0 = CreateSwarm(blockChainsForNominers[0]);
            var nominerSwarm1 = CreateSwarm(blockChainsForNominers[1]);

            BlockChain<DumbAction> minerChain = _blockchains[0];
            BlockChain<DumbAction> receiverChain = _blockchains[1];

            foreach (int i in Enumerable.Range(0, 10))
            {
                await minerChain.MineBlock(_fx1.Address1);
            }

            var actualStates = new List<PreloadState>();
            var progress = new Progress<PreloadState>(state =>
            {
                lock (actualStates)
                {
                    actualStates.Add(state);
                }
            });

            try
            {
                await StartAsync(minerSwarm);
                await StartAsync(nominerSwarm0);
                await StartAsync(nominerSwarm1);
                minerSwarm.FindNextHashesChunkSize = 2;
                nominerSwarm0.FindNextHashesChunkSize = 2;
                nominerSwarm1.FindNextHashesChunkSize = 2;

                await nominerSwarm0.AddPeersAsync(new[] { minerSwarm.AsPeer }, null);
                await nominerSwarm0.PreloadAsync();
                await nominerSwarm1.AddPeersAsync(new[] { nominerSwarm0.AsPeer }, null);
                await nominerSwarm1.PreloadAsync();
                await receiverSwarm.AddPeersAsync(new[] { nominerSwarm1.AsPeer }, null);
                await receiverSwarm.PreloadAsync(TimeSpan.FromSeconds(15), progress);

                // Await 1 second to make sure all progresses is reported.
                await Task.Delay(1000);

                Assert.Equal(minerChain.BlockHashes, receiverChain.BlockHashes);

                var expectedStates = new List<PreloadState>();

                for (var i = 1; i < minerChain.Count; i++)
                {
                    var b = minerChain[i];
                    var state = new BlockDownloadState
                    {
                        ReceivedBlockHash = b.Hash,
                        TotalBlockCount = 10,
                        ReceivedBlockCount = i,
                        SourcePeer = nominerSwarm1.AsPeer as BoundPeer,
                    };
                    expectedStates.Add(state);
                }

                for (var i = 1; i < minerChain.Count; i++)
                {
                    var b = minerChain[i];
                    var state = new ActionExecutionState
                    {
                        ExecutedBlockHash = b.Hash,
                        TotalBlockCount = 10,
                        ExecutedBlockCount = i,
                    };
                    expectedStates.Add(state);
                }

                // FIXME: this test does not ensures block download in order
                Assert.Equal(
                    expectedStates.ToHashSet(),
                    actualStates.ToHashSet()
                );
            }
            finally
            {
                await StopAsync(minerSwarm);
                await StopAsync(nominerSwarm0);
                await StopAsync(nominerSwarm1);
                await StopAsync(receiverSwarm);

                nominerSwarm0.Dispose();
                nominerSwarm1.Dispose();

                fxForNominers[0].Dispose();
                fxForNominers[1].Dispose();
            }
        }

        [Theory(Timeout = Timeout)]
        [InlineData(4)]
        [InlineData(8)]
        [InlineData(16)]
        [InlineData(32)]
        public async Task PreloadRetryWithNextPeers(int blockCount)
        {
            Swarm<DumbAction> swarm0 = _swarms[0];
            Swarm<DumbAction> swarm1 = _swarms[1];
            Swarm<DumbAction> receiverSwarm = _swarms[2];

            receiverSwarm.BlockHashRecvTimeout = TimeSpan.FromMilliseconds(100);

            swarm0.FindNextHashesChunkSize = blockCount / 2;
            swarm1.FindNextHashesChunkSize = blockCount / 2;

            for (int i = 0; i < blockCount; ++i)
            {
                var block = await swarm0.BlockChain.MineBlock(swarm0.Address);
                swarm1.BlockChain.Append(block);
            }

            await StartAsync(swarm0);
            await StartAsync(swarm1);

            Assert.Equal(swarm0.BlockChain.BlockHashes, swarm1.BlockChain.BlockHashes);

            await receiverSwarm.AddPeersAsync(new[] { swarm0.AsPeer, swarm1.AsPeer }, null);
            Assert.Equal(
                new[] { swarm0.AsPeer, swarm1.AsPeer }.ToImmutableHashSet(),
                receiverSwarm.Peers.ToImmutableHashSet());

            var startedStop = false;
            var shouldStopSwarm =
                swarm0.AsPeer.Equals(receiverSwarm.Peers.First()) ? swarm0 : swarm1;
            await receiverSwarm.PreloadAsync(
                progress: new Progress<PreloadState>(async (state) =>
                {
                    if (startedStop)
                    {
                        return;
                    }

                    startedStop = true;
                    await shouldStopSwarm.StopAsync(TimeSpan.Zero);
                }));

            Assert.Equal(swarm1.BlockChain.BlockHashes, receiverSwarm.BlockChain.BlockHashes);
            Assert.Equal(swarm0.BlockChain.BlockHashes, receiverSwarm.BlockChain.BlockHashes);
        }

        [Theory(Timeout = Timeout)]
        [InlineData(true, false)]
        [InlineData(false, false)]
        [InlineData(true, true)]
        [InlineData(false, true)]
        public async Task PreloadWithTrustedPeers(bool trust, bool genesisWithAction)
        {
            Swarm<DumbAction> minerSwarm = _swarms[0];
            Swarm<DumbAction> receiverSwarm = _swarms[1];

            BlockChain<DumbAction> minerChain = _blockchains[0];
            BlockChain<DumbAction> receiverChain = _blockchains[1];
            PrivateKey[] signers =
                Enumerable.Repeat(0, 10).Select(_ => new PrivateKey()).ToArray();
            Address[] targets = Enumerable.Repeat(0, signers.Length).Select(_
                => new PrivateKey().PublicKey.ToAddress()
            ).ToArray();
            (PrivateKey, Address)[] fixturePairs =
                signers.Zip(targets, ValueTuple.Create).ToArray();

            HashDigest<SHA256>? deepBlockHash = null;

            Address genesisTarget = new PrivateKey().PublicKey.ToAddress();
            if (genesisWithAction)
            {
                minerChain.MakeTransaction(
                    signers[0],
                    new[] { new DumbAction(genesisTarget, "Genesis") }
                );
                await minerChain.MineBlock(minerSwarm.Address);
            }

            const int repeat = 3;
            for (int i = 0; i < repeat; i++)
            {
                int j = 0;
                Block<DumbAction> block = null;
                foreach ((PrivateKey signer, Address target) in fixturePairs)
                {
                    minerChain.MakeTransaction(
                        signer,
                        new[] { new DumbAction(target, $"Item{i}.{j}") }
                    );
                    block = await minerChain.MineBlock(minerSwarm.Address);
                    j++;
                }

                if (i < 2)
                {
                    deepBlockHash = block?.Hash;
                }
            }

            Assert.NotNull(deepBlockHash);

            try
            {
                await StartAsync(minerSwarm);
                await StartAsync(receiverSwarm);

                await receiverSwarm.AddPeersAsync(new[] { minerSwarm.AsPeer }, null);

                DumbAction.RenderRecords.Value = ImmutableList<RenderRecord>.Empty;
                MinerReward.RenderRecords.Value = ImmutableList<RenderRecord>.Empty;

                IImmutableSet<Address> trustedPeers = trust
                    ? new[] { minerSwarm.Address }.ToImmutableHashSet()
                    : ImmutableHashSet<Address>.Empty;
                await receiverSwarm.PreloadAsync(trustedStateValidators: trustedPeers);

                Assert.Empty(DumbAction.RenderRecords.Value);
                Assert.Empty(MinerReward.RenderRecords.Value);
                Assert.Equal(minerChain.BlockHashes, receiverChain.BlockHashes);
                int i = 0;
                foreach (Address target in targets)
                {
                    foreach (BlockChain<DumbAction> chain in new[] { minerChain, receiverChain })
                    {
                        var chainType = ReferenceEquals(chain, minerChain) ? "M" : "R";
                        var state = chain.GetState(target, completeStates: false);
                        Assert.NotNull(state);
                        Assert.Equal(
                            $"({chainType}) Item0.{i},Item1.{i},Item2.{i}",
                            $"({chainType}) {((Text)state).Value}"
                        );
                    }

                    IValue TryToGetDeepStates() => receiverChain.GetState(
                        target,
                        deepBlockHash,
                        completeStates: false
                    );

                    if (trust)
                    {
                        Assert.Throws<IncompleteBlockStatesException>(
                            () => TryToGetDeepStates()
                        );
                    }
                    else
                    {
                        IValue deepState = TryToGetDeepStates();
                        Assert.NotNull(deepState);
                        Assert.Equal((Text)$"Item0.{i},Item1.{i}", deepState);
                    }

                    i++;
                }

                if (genesisWithAction)
                {
                    foreach (BlockChain<DumbAction> chain in new[] { minerChain, receiverChain })
                    {
                        var state = chain.GetState(genesisTarget, completeStates: false);
                        Assert.NotNull(state);
                        Assert.Equal((Text)"Genesis", state);
                    }
                }

                foreach (BlockChain<DumbAction> chain in new[] { minerChain, receiverChain })
                {
                    var minerState = chain.GetState(minerSwarm.Address, completeStates: false);
                    Assert.NotNull(minerState);
                    Assert.Equal(
                        (Integer)((genesisWithAction ? 1 : 0) + repeat * fixturePairs.Length),
                        (Integer)minerState
                    );
                }
            }
            finally
            {
                await StopAsync(minerSwarm);
                await StopAsync(receiverSwarm);

                DumbAction.RenderRecords.Value = ImmutableList<RenderRecord>.Empty;
                MinerReward.RenderRecords.Value = ImmutableList<RenderRecord>.Empty;
            }
        }

        [Fact]
        public async Task PreloadWithBranchesAndTrustedPeers()
        {
            // Two miners; one trusts other one.  Test if it downloads the minimum range of blocks
            // (instead of the entire chain from the genesis to the tip) when there are branches.
            // See also: https://github.com/planetarium/libplanet/issues/465#issuecomment-525682219
            Swarm<DumbAction> senderSwarm = _swarms[0];
            Swarm<DumbAction> receiverSwarm = _swarms[1];

            BlockChain<DumbAction> senderChain = _blockchains[0];
            BlockChain<DumbAction> receiverChain = _blockchains[1];

            Block<DumbAction> g = senderChain.Genesis,
                bp = TestUtils.MineNext(g, difficulty: 1024),
                b2send = TestUtils.MineNext(bp, difficulty: 1024),
                b2recv = TestUtils.MineNext(bp, difficulty: 1024),
                b3 = TestUtils.MineNext(b2send, difficulty: 1024);

            Assert.Equal(senderChain.Genesis, receiverChain.Genesis);

            senderChain.Append(bp);
            senderChain.Append(b2send);
            senderChain.Append(b3);

            receiverChain.Append(bp);
            receiverChain.Append(b2recv);

            try
            {
                await StartAsync(senderSwarm);
                await receiverSwarm.AddPeersAsync(new[] { senderSwarm.AsPeer }, null);
                await receiverSwarm.PreloadAsync(
                    trustedStateValidators: ImmutableHashSet<Address>.Empty.Add(senderSwarm.Address)
                );
            }
            finally
            {
                await StopAsync(senderSwarm);
            }

            Assert.Equal(senderChain.BlockHashes, receiverChain.BlockHashes);
            // FIXME: these should be tested via storage
            /*
            Assert.DoesNotContain(g.Hash, receivedBlockStates)
            Assert.DoesNotContain(bp.Hash, receivedBlockStates)
            */
        }

        [Fact]
        public async Task PreloadWhilePeerTipIsChanging()
        {
            var key = new PrivateKey();
            var address = key.PublicKey.ToAddress();

            var policy = new NullPolicy<DumbAction>();

            var fxMiner = new DefaultStoreFixture(memory: true);
            var minerChain = new BlockChain<DumbAction>(
                policy, fxMiner.Store, fxMiner.GenesisBlock);
            var minerAddress = fxMiner.Address1;

            async Task MineBlocks()
            {
                for (var i = 0; i < 10; i++)
                {
                    var actions = new[] { new DumbAction(address, $"{i}") };
                    minerChain.MakeTransaction(key, actions);

                    await minerChain.MineBlock(minerAddress);
                }
            }

            await MineBlocks();

            var fxReceiver = new DefaultStoreFixture(memory: true);
            var receiverChain = new BlockChain<DumbAction>(
                policy, fxReceiver.Store, fxReceiver.GenesisBlock);

            var minerSwarm = CreateSwarm(minerChain);
            var receiverSwarm = CreateSwarm(receiverChain);

            try
            {
                await StartAsync(minerSwarm);
                await receiverSwarm.AddPeersAsync(new[] { minerSwarm.AsPeer }, null);
                var trustedStateValidators = new[] { minerSwarm.Address }.ToImmutableHashSet();

                var t = MineBlocks();
                await receiverSwarm.PreloadAsync(trustedStateValidators: trustedStateValidators);

                await t;

                var minerStateRefs = minerChain.Store
                    .ListAllStateReferences(minerChain.Id, 0, receiverChain.Count)
                    .FirstOrDefault().Value;

                var receiverStateRefs = receiverChain.Store
                    .ListAllStateReferences(receiverChain.Id, 0, receiverChain.Count)
                    .FirstOrDefault().Value;

                Assert.Equal(receiverChain.Count, receiverStateRefs.Count + 1);
                Assert.Equal(minerStateRefs, receiverStateRefs);
            }
            finally
            {
                await StopAsync(minerSwarm);
                await StopAsync(receiverSwarm);
                minerSwarm.Dispose();
                receiverSwarm.Dispose();
                fxMiner.Dispose();
                fxReceiver.Dispose();
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task PreloadSparseStateWithTrustedPeers()
        {
            // Test that preload states from chain where middle state reference is empty.
            // (filled with blocks with no any transactions at the middle of chain)
            var fx1 = new DefaultStoreFixture(memory: true);
            var fx2 = new DefaultStoreFixture(memory: true);
            var policy = new BlockPolicy<DumbAction>();

            BlockChain<DumbAction> minerChain =
                TestUtils.MakeBlockChain(policy, fx1.Store);
            BlockChain<DumbAction> receiverChain =
                TestUtils.MakeBlockChain(policy, fx2.Store);

            Swarm<DumbAction> minerSwarm = CreateSwarm(minerChain);
            Swarm<DumbAction> receiverSwarm = CreateSwarm(receiverChain);

            minerSwarm.FindNextStatesChunkSize = 21;

            PrivateKey[] signers =
                Enumerable.Repeat(0, 10).Select(_ => new PrivateKey()).ToArray();
            Address[] targets = Enumerable.Repeat(0, signers.Length).Select(_
                => new PrivateKey().PublicKey.ToAddress()
            ).ToArray();
            (PrivateKey, Address)[] fixturePairs =
                signers.Zip(targets, ValueTuple.Create).ToArray();

            HashDigest<SHA256>? deepBlockHash = null;

            Address genesisTarget = new PrivateKey().PublicKey.ToAddress();
            minerChain.MakeTransaction(
                signers[0],
                new[] { new DumbAction(genesisTarget, "Genesis") }
            );
            Block<DumbAction> genesis = await minerChain.MineBlock(minerSwarm.Address);
            receiverChain.Append(
                genesis,
                DateTimeOffset.UtcNow,
                evaluateActions: true,
                renderActions: true);

            const int repeat = 10;
            for (int i = 0; i < repeat; i++)
            {
                if (i < 4 || i == repeat - 1)
                {
                    int j = 0;
                    Block<DumbAction> block = null;
                    foreach ((PrivateKey signer, Address target) in fixturePairs)
                    {
                        minerChain.MakeTransaction(
                            signer,
                            new[] { new DumbAction(target, $"Item{i}.{j}") }
                        );
                        block = await minerChain.MineBlock(minerSwarm.Address);
                        j++;
                    }

                    if (i == 0)
                    {
                        deepBlockHash = block?.Hash;
                    }
                }
                else
                {
                    await minerChain.MineBlock(minerSwarm.Address);
                }
            }

            Assert.NotNull(deepBlockHash);

            try
            {
                await StartAsync(minerSwarm);
                await StartAsync(receiverSwarm);

                await receiverSwarm.AddPeersAsync(new[] { minerSwarm.AsPeer }, null);

                DumbAction.RenderRecords.Value = ImmutableList<RenderRecord>.Empty;

                IImmutableSet<Address> trustedPeers =
                    new[] { minerSwarm.Address }.ToImmutableHashSet();
                var downloadStates = new List<StateDownloadState>();
                int totalCount =
                    (int)Math.Ceiling((double)minerChain.Count /
                                      minerSwarm.FindNextStatesChunkSize);
                int currentCount = 0;
                var allProgressesReported = new AsyncAutoResetEvent();
                await receiverSwarm.PreloadAsync(
                    progress: new Progress<PreloadState>(state =>
                    {
                        if (state is StateDownloadState srds)
                        {
                            downloadStates.Add(srds);
                            currentCount++;

                            if (currentCount == totalCount)
                            {
                                allProgressesReported.Set();
                            }
                        }
                    }),
                    trustedStateValidators: trustedPeers);

                await allProgressesReported.WaitAsync();

                Assert.Empty(DumbAction.RenderRecords.Value);
                Assert.Equal(minerChain.BlockHashes, receiverChain.BlockHashes);
                int i = 0;
                foreach (Address target in targets)
                {
                    foreach (BlockChain<DumbAction> chain in new[] { minerChain, receiverChain })
                    {
                        var chainType = ReferenceEquals(chain, minerChain) ? "M" : "R";
                        var state = chain.GetState(target, completeStates: false);
                        Assert.NotNull(state);
                        Assert.Equal(
                            $"({chainType}) Item0.{i},Item1.{i},Item2.{i},Item3.{i},Item9.{i}",
                            $"({chainType}) {((Text)state).Value}"
                        );
                    }

                    IValue TryToGetDeepStates() => receiverChain.GetState(
                        target,
                        deepBlockHash,
                        completeStates: false
                    );

                    Assert.Throws<IncompleteBlockStatesException>(
                        () => TryToGetDeepStates()
                    );

                    i++;
                }

                foreach (BlockChain<DumbAction> chain in new[] { minerChain, receiverChain })
                {
                    var state = chain.GetState(genesisTarget, completeStates: false);
                    Assert.NotNull(state);
                    Assert.Equal((Text)"Genesis", state);
                }

                Assert.Equal(totalCount, downloadStates.Count);
                i = 1;
                foreach (StateDownloadState state in downloadStates)
                {
                    Assert.Equal(2, state.CurrentPhase);
                    Assert.Equal(totalCount, state.TotalIterationCount);
                    Assert.Equal(i++, state.ReceivedIterationCount);
                }
            }
            finally
            {
                await StopAsync(minerSwarm);
                await StopAsync(receiverSwarm);

                DumbAction.RenderRecords.Value = ImmutableList<RenderRecord>.Empty;

                fx1.Dispose();
                fx2.Dispose();

                minerSwarm.Dispose();
                receiverSwarm.Dispose();
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task PreloadWithDifferenctFindNextStatesChunkSize()
        {
            var blockHashes = new List<HashDigest<SHA256>>();

            Swarm<DumbAction> swarm0 = _swarms[0];
            Swarm<DumbAction> swarm1 = _swarms[1];
            Swarm<DumbAction> swarm2 = _swarms[2];

            BlockChain<DumbAction> chain0 = _blockchains[0];
            BlockChain<DumbAction> chain1 = _blockchains[1];
            BlockChain<DumbAction> chain2 = _blockchains[2];

            swarm0.FindNextStatesChunkSize = 4;
            swarm1.FindNextStatesChunkSize = 3;

            blockHashes.Add(chain0.Genesis.Hash);
            const int repeat = 14;
            for (int i = 0; i < repeat; i++)
            {
                Block<DumbAction> block = await chain0.MineBlock(swarm0.Address);
                blockHashes.Add(block.Hash);
            }

            try
            {
                await StartAsync(swarm0);
                await StartAsync(swarm1);
                await StartAsync(swarm2);

                await swarm1.AddPeersAsync(new[] { swarm0.AsPeer }, null);
                await swarm1.PreloadAsync(trustedStateValidators:
                    new[] { swarm0.Address }.ToImmutableHashSet());

                Assert.Equal(chain0.BlockHashes, chain1.BlockHashes);

                foreach (BlockChain<DumbAction> chain in new[] { chain0, chain1 })
                {
                    var blockActionState = chain.GetState(swarm0.Address, completeStates: false);
                    Assert.NotNull(blockActionState);
                    Assert.Equal((Integer)repeat, (Integer)blockActionState);
                }

                for (int i = 1; i <= repeat; i++)
                {
                    if (i == 3 || i == 7 || i == 11 || i == repeat)
                    {
                        var state = chain1.GetState(
                            swarm0.Address,
                            blockHashes[i],
                            completeStates: false
                        );
                        Assert.NotNull(state);
                        Assert.Equal((Integer)i, (Integer)state);
                    }
                    else
                    {
                        Assert.Throws<IncompleteBlockStatesException>(() =>
                        {
                            chain1.GetState(
                                swarm0.Address,
                                blockHashes[i],
                                completeStates: false
                            );
                        });
                    }
                }

                await swarm2.AddPeersAsync(new[] { swarm1.AsPeer }, null);
                await swarm2.PreloadAsync(trustedStateValidators:
                    new[] { swarm1.Address }.ToImmutableHashSet());

                Assert.Equal(chain1.BlockHashes, chain2.BlockHashes);

                foreach (BlockChain<DumbAction> chain in new[] { chain1, chain2 })
                {
                    var blockActionState = chain.GetState(swarm0.Address, completeStates: false);
                    Assert.NotNull(blockActionState);
                    Assert.Equal((Integer)repeat, (Integer)blockActionState);
                }

                for (int i = 1; i <= repeat; i++)
                {
                    if (i == 11 || i == repeat)
                    {
                        var state = chain2.GetState(
                            swarm0.Address,
                            blockHashes[i],
                            completeStates: false
                        );
                        Assert.NotNull(state);
                        Assert.Equal((Integer)i, (Integer)state);
                    }
                    else
                    {
                        Assert.Throws<IncompleteBlockStatesException>(() =>
                        {
                            chain2.GetState(
                                swarm0.Address,
                                blockHashes[i],
                                completeStates: false
                            );
                        });
                    }
                }
            }
            finally
            {
                await StopAsync(swarm0);
                await StopAsync(swarm1);
            }
        }

        [Theory]
        [InlineData(0)]
        [InlineData(50)]
        [InlineData(100)]
        [InlineData(500)]
        [InlineData(1000)]
        [InlineData(2500)]
        [InlineData(5000)]
        public async Task PreloadAsyncCancellation(int cancelAfter)
        {
            Swarm<DumbAction> minerSwarm = _swarms[0];
            Swarm<DumbAction> receiverSwarm = _swarms[1];
            Log.Logger.Information("Miner:    {0}", minerSwarm.Address);
            Log.Logger.Information("Receiver: {0}", receiverSwarm.Address);

            BlockChain<DumbAction> minerChain = _blockchains[0];
            BlockChain<DumbAction> receiverChain = _blockchains[1];

            Guid receiverChainId = _blockchains[1].Id;

            (Address address, IEnumerable<Block<DumbAction>> blocks) =
                await MakeFixtureBlocksForPreloadAsyncCancellationTest();

            var blockArray = blocks.ToArray();
            foreach (Block<DumbAction> block in blockArray)
            {
                minerChain.Append(block);
            }

            receiverChain.Append(blockArray[0]);

            Assert.NotNull(minerChain.Tip);

            minerSwarm.FindNextHashesChunkSize = 2;
            await StartAsync(minerSwarm);
            await receiverSwarm.AddPeersAsync(new[] { minerSwarm.AsPeer }, null);

            CancellationTokenSource cts = new CancellationTokenSource();
            cts.CancelAfter(cancelAfter);
            bool canceled = true;
            try
            {
                await receiverSwarm.PreloadAsync(
                    trustedStateValidators: new[] { minerSwarm.Address }.ToImmutableHashSet(),
                    cancellationToken: cts.Token
                );
                canceled = false;
                Log.Logger.Debug($"{nameof(receiverSwarm.PreloadAsync)}() normally finished.");
            }
            catch (OperationCanceledException)
            {
                Log.Logger.Debug($"{nameof(receiverSwarm.PreloadAsync)}() aborted.");
            }

            cts.Dispose();

            Assert.InRange(receiverChain.Store.ListChainIds().Count(), 0, 1);

            if (canceled)
            {
                Assert.Equal(receiverChainId, receiverChain.Id);
                Assert.Equal(blockArray[0], receiverChain.Tip);
                Assert.Equal(
                    (Text)string.Join(",", Enumerable.Range(0, 5).Select(j => $"Item0.{j}")),
                    receiverChain.GetState(address)
                );
            }
            else
            {
                Assert.NotEqual(receiverChainId, receiverChain.Id);
                Assert.Equal(minerChain.Tip, receiverChain.Tip);
                Assert.Equal(
                    (Text)string.Join(
                        ",",
                        Enumerable.Range(0, 20).Select(i =>
                            string.Join(",", Enumerable.Range(0, 5).Select(j => $"Item{i}.{j}"))
                        )
                    ),
                    receiverChain.GetState(address)
                );
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

            var block3 = await chain2.MineBlock(_fx1.Address1);

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

        [Fact(Skip="This should be fixed to work deterministically.")]
        public async Task HandleReorgInSynchronizing()
        {
            var policy = new BlockPolicy<Sleep>(new MinerReward(1));
            var miner1 = CreateSwarm(TestUtils.MakeBlockChain(policy, new DefaultStore(null)));
            var miner2 = CreateSwarm(TestUtils.MakeBlockChain(policy, new DefaultStore(null)));
            var receiver = CreateSwarm(TestUtils.MakeBlockChain(policy, new DefaultStore(null)));

            foreach (var i in Enumerable.Range(0, 8))
            {
                miner1.BlockChain.StageTransactions(
                    new[]
                    {
                        Transaction<Sleep>.Create(
                            0,
                            new PrivateKey(),
                            actions: new[] { new Sleep() }
                        ),
                    }.ToImmutableHashSet()
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
            swarmB.BlockHashRecvTimeout = TimeSpan.FromMilliseconds(10);

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
                new BlockChain<DumbAction>(new BlockPolicy<DumbAction>(), store, genesisBlock);

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

        private static async Task<(Address, Block<DumbAction>[])>
            MakeFixtureBlocksForPreloadAsyncCancellationTest()
        {
            Block<DumbAction>[] blocks = _fixtureBlocksForPreloadAsyncCancellationTest;

            if (blocks is null)
            {
                var policy = new BlockPolicy<DumbAction>(new MinerReward(1));
                using (var storeFx = new DefaultStoreFixture(memory: true))
                {
                    var chain = TestUtils.MakeBlockChain(policy, storeFx.Store);
                    Address miner = new PrivateKey().PublicKey.ToAddress();
                    var signer = new PrivateKey();
                    Address address = signer.PublicKey.ToAddress();
                    Log.Logger.Information("Fixture blocks:");
                    for (int i = 0; i < 20; i++)
                    {
                        for (int j = 0; j < 5; j++)
                        {
                            chain.MakeTransaction(
                                signer,
                                new[] { new DumbAction(address, $"Item{i}.{j}", idempotent: true) }
                            );
                        }

                        Block<DumbAction> block = await chain.MineBlock(miner);
                        Log.Logger.Information("  #{0,2} {1}", block.Index, block.Hash);
                    }

                    var blockList = new List<Block<DumbAction>>();
                    for (var i = 1; i < chain.Count; i++)
                    {
                        Block<DumbAction> block = chain[i];
                        blockList.Add(block);
                    }

                    blocks = blockList.ToArray();

                    _fixtureBlocksForPreloadAsyncCancellationTest = blocks;
                }
            }

            return (blocks[1].Transactions.First().Actions.First().TargetAddress, blocks);
        }

        private Swarm<T> CreateSwarm<T>(
            BlockChain<T> blockChain,
            PrivateKey privateKey = null,
            int appProtocolVersion = 1,
            int? tableSize = null,
            int? bucketSize = null,
            string host = null,
            int? listenPort = null,
            DateTimeOffset? createdAt = null,
            IEnumerable<IceServer> iceServers = null,
            EventHandler<DifferentProtocolVersionEventArgs> differentVersionPeerEncountered = null)
            where T : IAction, new()
        {
            if (host is null && !(iceServers?.Any() ?? false))
            {
                host = IPAddress.Loopback.ToString();
            }

            return new Swarm<T>(
                blockChain,
                privateKey ?? new PrivateKey(),
                appProtocolVersion,
                tableSize,
                bucketSize,
                5,
                host,
                listenPort,
                createdAt,
                iceServers,
                differentVersionPeerEncountered);
        }

        private async Task<Task> StartAsync<T>(
            Swarm<T> swarm,
            CancellationToken cancellationToken = default
        )
            where T : IAction, new()
        {
            Task task = swarm.StartAsync(200, 200, cancellationToken);
            await swarm.WaitForRunningAsync();
            return task;
        }

        private Task StopAsync<T>(Swarm<T> swarm)
            where T : IAction, new()
        {
            return swarm.StopAsync(TimeSpan.FromMilliseconds(10));
        }

        private async Task BootstrapAsync<T>(
            Swarm<T> swarm,
            Peer seed,
            CancellationToken cancellationToken = default
            )
            where T : IAction, new()
        {
            await swarm.BootstrapAsync(
                new[] { seed },
                null,
                TimeSpan.FromSeconds(3),
                cancellationToken: cancellationToken);
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

            public void Unrender(IActionContext context, IAccountStateDelta nextStates)
            {
            }
        }
    }
}
