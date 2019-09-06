using System;
using System.Collections.Async;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Net;
using System.Security.Cryptography;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Net;
using Libplanet.Net.Messages;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Store;
using Libplanet.Tx;
using NetMQ;
using NetMQ.Sockets;
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

        private readonly List<BlockChain<DumbAction>> _blockchains;
        private readonly List<Swarm<DumbAction>> _swarms;

        public SwarmTest(ITestOutputHelper output)
        {
            const string outputTemplate =
                "{Timestamp:HH:mm:ss}[@{SwarmId}][{ThreadId}] - {Message}";
            Log.Logger = new LoggerConfiguration()
                .MinimumLevel.Debug()
                .Enrich.WithThreadId()
                .WriteTo.TestOutput(output, outputTemplate: outputTemplate)
                .CreateLogger()
                .ForContext<SwarmTest>();

            Log.Logger.Debug($"Started to initialize a {nameof(SwarmTest)} instance.");

            _output = output;

            var policy = new BlockPolicy<DumbAction>(new MinerReward(1));
            _fx1 = new LiteDBStoreFixture();
            _fx2 = new LiteDBStoreFixture();
            _fx3 = new LiteDBStoreFixture();

            _blockchains = new List<BlockChain<DumbAction>>
            {
                new BlockChain<DumbAction>(policy, _fx1.Store),
                new BlockChain<DumbAction>(policy, _fx2.Store),
                new BlockChain<DumbAction>(policy, _fx3.Store),
            };

            _swarms = new List<Swarm<DumbAction>>
            {
                new Swarm<DumbAction>(
                    _blockchains[0],
                    new PrivateKey(),
                    appProtocolVersion: 1,
                    host: IPAddress.Loopback.ToString()),
                new Swarm<DumbAction>(
                    _blockchains[1],
                    new PrivateKey(),
                    appProtocolVersion: 1,
                    host: IPAddress.Loopback.ToString()),
                new Swarm<DumbAction>(
                    _blockchains[2],
                    new PrivateKey(),
                    appProtocolVersion: 1,
                    host: IPAddress.Loopback.ToString()),
            };

            Log.Logger.Debug($"Finished to initialize a {nameof(SwarmTest)} instance.");
        }

        public void Dispose()
        {
            Log.Logger.Debug($"Started to {nameof(Dispose)}() a {nameof(SwarmTest)} instance.");

            try
            {
                Log.Logger.Debug(
                    $"Started to {nameof(Dispose)}() {nameof(Swarm<DumbAction>)} instances."
                );
                int i = 1;
                foreach (Swarm<DumbAction> s in _swarms)
                {
                    s.StopAsync().Wait(DisposeTimeout);
                    Log.Logger.Debug(
                        $"Finished to {nameof(Dispose)}() a {nameof(Swarm<DumbAction>)} " +
                        "instance #{{0}}.",
                        i
                    );
                    i++;
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

            await swarm.StopAsync();
        }

        [Fact(Timeout = Timeout)]
        public async Task HandleReconnection()
        {
            Swarm<DumbAction> seed = new Swarm<DumbAction>(
                blockChain: _blockchains[0],
                privateKey: new PrivateKey(),
                appProtocolVersion: 1,
                host: IPAddress.Loopback.ToString());

            BlockChain<DumbAction> blockChain = _blockchains[1];
            PrivateKey privateKey = new PrivateKey();
            string host = IPAddress.Loopback.ToString();

            Swarm<DumbAction> swarmA = new Swarm<DumbAction>(
                blockChain: blockChain,
                privateKey: privateKey,
                appProtocolVersion: 1,
                host: host);
            Swarm<DumbAction> swarmB = new Swarm<DumbAction>(
                blockChain: blockChain,
                privateKey: privateKey,
                appProtocolVersion: 1,
                host: host);

            try
            {
                await StartAsync(seed);
                await StartAsync(swarmA);
                await StartAsync(swarmB);
                await swarmA.AddPeersAsync(new[] { seed.AsPeer }, null);
                await swarmA.StopAsync();
                await swarmB.AddPeersAsync(new[] { seed.AsPeer }, null);

                Assert.Contains(swarmB.AsPeer, seed.Peers);
                Assert.Contains(seed.AsPeer, swarmB.Peers);
            }
            finally
            {
                await seed.StopAsync();
                await swarmA.StopAsync();
                await swarmB.StopAsync();
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task BroadcastBlockToReconnectedPeer()
        {
            BlockChain<DumbAction> chainWithBlocks = _blockchains[0];
            Swarm<DumbAction> seed = new Swarm<DumbAction>(
                blockChain: chainWithBlocks,
                privateKey: new PrivateKey(),
                appProtocolVersion: 1,
                host: IPAddress.Loopback.ToString());

            PrivateKey privateKey = new PrivateKey();
            string host = IPAddress.Loopback.ToString();

            Swarm<DumbAction> swarmA = new Swarm<DumbAction>(
                blockChain: _blockchains[1],
                privateKey: privateKey,
                appProtocolVersion: 1,
                host: host);
            Swarm<DumbAction> swarmB = new Swarm<DumbAction>(
                blockChain: _blockchains[2],
                privateKey: privateKey,
                appProtocolVersion: 1,
                host: host);

            foreach (int i in Enumerable.Range(0, 10))
            {
                chainWithBlocks.MineBlock(_fx1.Address1);
                await Task.Delay(100);
            }

            try
            {
                await StartAsync(seed);
                await StartAsync(swarmA);
                await StartAsync(swarmB);

                Assert.Equal(swarmA.AsPeer, swarmB.AsPeer);

                await swarmA.AddPeersAsync(new[] { seed.AsPeer }, null);
                await swarmA.StopAsync();
                await swarmB.AddPeersAsync(new[] { seed.AsPeer }, null);

                Assert.Contains(swarmB.AsPeer, seed.Peers);
                Assert.Contains(seed.AsPeer, swarmB.Peers);

                seed.BroadcastBlocks(new[] { chainWithBlocks.Last() });

                await swarmB.BlockReceived.WaitAsync();

                Assert.NotEqual(chainWithBlocks.AsEnumerable(), _blockchains[1]);
                Assert.Equal(chainWithBlocks.AsEnumerable(), _blockchains[2]);
            }
            finally
            {
                await seed.StopAsync();
                await swarmA.StopAsync();
                await swarmB.StopAsync();
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task StopAsync()
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

            await swarm.StopAsync();
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
                Assert.Equal(0, b.Peers.Count);
            }
            finally
            {
                await a.StopAsync();
                await b.StopAsync();
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
                await a.StopAsync();
                await b.StopAsync();
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task PingToClosedPeer()
        {
            Swarm<DumbAction> swarmA = new Swarm<DumbAction>(
                    _blockchains[0],
                    new PrivateKey(),
                    appProtocolVersion: 1,
                    host: IPAddress.Loopback.ToString());
            Swarm<DumbAction> swarmB = new Swarm<DumbAction>(
                    _blockchains[1],
                    new PrivateKey(),
                    appProtocolVersion: 1,
                    host: IPAddress.Loopback.ToString());
            Swarm<DumbAction> swarmC = new Swarm<DumbAction>(
                    _blockchains[2],
                    new PrivateKey(),
                    appProtocolVersion: 1,
                    host: IPAddress.Loopback.ToString());

            try
            {
                await StartAsync(swarmA);
                await StartAsync(swarmB);
                await StartAsync(swarmC);

                Peer peer = swarmC.AsPeer;
                await swarmA.AddPeersAsync(new[] { swarmB.AsPeer, peer }, null);

                Assert.Contains(swarmB.AsPeer, swarmA.Peers);
                Assert.Contains(peer, swarmA.Peers);

                await swarmC.StopAsync();
                await Assert.ThrowsAsync<TimeoutException>(
                    () => swarmA.AddPeersAsync(new[] { peer }, TimeSpan.FromSeconds(3)));
                await swarmA.AddPeersAsync(new[] { swarmB.AsPeer }, null);

                Assert.Contains(swarmB.AsPeer, swarmA.Peers);
                Assert.DoesNotContain(peer, swarmA.Peers);
            }
            finally
            {
                await swarmA.StopAsync();
                await swarmB.StopAsync();
                if (swarmC.Running)
                {
                    await swarmC.StopAsync();
                }
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task BootstrapException()
        {
            Swarm<DumbAction> swarmA = _swarms[0];
            Swarm<DumbAction> swarmB = _swarms[1];

            try
            {
                await Assert.ThrowsAsync<SwarmException>(
                    () => swarmB.BootstrapAsync(new[] { swarmA.AsPeer }, 3000, 3000));

                await StartAsync(swarmA);
            }
            finally
            {
                await swarmA.StopAsync();
                await swarmB.StopAsync();
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task BootstrapAsyncTest()
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
                await swarmA.StopAsync();
                await swarmB.StopAsync();
                await swarmC.StopAsync();
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
                Assert.Equal(0, swarmB.Peers.Count);

                await StartAsync(swarmA);
                Assert.Contains(swarmA.AsPeer, swarmB.Peers);
            }
            finally
            {
                await swarmA.StopAsync();
                await swarmB.StopAsync();
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task BootstrapManyAsync()
        {
            int size = 10;

            var policy = new BlockPolicy<DumbAction>();
            StoreFixture[] fxs = new StoreFixture[size];
            BlockChain<DumbAction>[] blockchains = new BlockChain<DumbAction>[size];
            Swarm<DumbAction>[] swarms = new Swarm<DumbAction>[size];

            for (int i = 0; i < size; i++)
            {
                fxs[i] = new LiteDBStoreFixture();
                blockchains[i] = new BlockChain<DumbAction>(policy, fxs[i].Store);
                swarms[i] = new Swarm<DumbAction>(
                    blockchains[i],
                    new PrivateKey(),
                    appProtocolVersion: 1,
                    host: IPAddress.Loopback.ToString());
            }

            try
            {
                for (int i = 0; i < size - 1; i++)
                {
                    await StartAsync(swarms[i]);
                }

                for (int i = 1; i < size; i++)
                {
                    await BootstrapAsync(swarms[i], swarms[0].AsPeer);
                }

                Log.Debug(swarms[size - 1].TraceTable());

                for (int i = 0; i < size - 1; i++)
                {
                    Assert.Contains(swarms[i].AsPeer, swarms[size - 1].Peers);
                }
            }
            finally
            {
                for (int i = 0; i < size; i++)
                {
                    await swarms[i].StopAsync();
                    fxs[i].Dispose();
                }
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
                        var block = chain.MineBlock(_fx1.Address1);
                        Log.Debug(
                            $"Block mined. " +
                            $"[Swarm: {swarm.Address}, Block: {block.Hash}]");
                        swarm.BroadcastBlocks(new[] { block });
                        await Task.Delay(delay);
                    }

                    swarm.BroadcastBlocks(new[] { chain.Last() });
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
                await a.StopAsync();
                await b.StopAsync();
            }

            Log.Debug($"chainA: {string.Join(",", chainA)}");
            Log.Debug($"chainB: {string.Join(",", chainB)}");

            Assert.Subset(
                chainA.AsEnumerable().ToHashSet(),
                chainB.AsEnumerable().ToHashSet());
        }

        [Fact(Timeout = Timeout)]
        public async Task DetectAppProtocolVersion()
        {
            var a = new Swarm<DumbAction>(
                _blockchains[0],
                new PrivateKey(),
                host: IPAddress.Loopback.ToString(),
                appProtocolVersion: 2);
            var b = new Swarm<DumbAction>(
                _blockchains[1],
                new PrivateKey(),
                host: IPAddress.Loopback.ToString(),
                appProtocolVersion: 3);

            var c = new Swarm<DumbAction>(
                _blockchains[2],
                new PrivateKey(),
                host: IPAddress.Loopback.ToString(),
                appProtocolVersion: 2);
            var d = new Swarm<DumbAction>(
                new BlockChain<DumbAction>(_blockchains[0].Policy, new LiteDBStoreFixture().Store),
                new PrivateKey(),
                host: IPAddress.Loopback.ToString(),
                appProtocolVersion: 3);

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
                await c.StopAsync();
                await d.StopAsync();
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

            var a = new Swarm<DumbAction>(
                _blockchains[0],
                new PrivateKey(),
                host: IPAddress.Loopback.ToString(),
                appProtocolVersion: 2,
                differentVersionPeerEncountered: GameHandler);
            var b = new Swarm<DumbAction>(
                _blockchains[1],
                new PrivateKey(),
                host: IPAddress.Loopback.ToString(),
                appProtocolVersion: 3);

            try
            {
                await StartAsync(b);

                await Assert.ThrowsAsync<SwarmException>(() => BootstrapAsync(a, b.AsPeer));

                Assert.True(isCalled);
            }
            finally
            {
                await a.StopAsync();
                await b.StopAsync();
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

            Block<DumbAction> genesis = chainA.MineBlock(_fx1.Address1);
            chainB.Append(genesis); // chainA and chainB shares genesis block.
            Block<DumbAction> block1 = chainA.MineBlock(_fx1.Address1);
            Block<DumbAction> block2 = chainA.MineBlock(_fx1.Address1);

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
                await swarmA.StopAsync();
                await swarmB.StopAsync();
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task GetMultipleBlocksAtOnce()
        {
            var privateKey = new PrivateKey();

            BlockChain<DumbAction> chainA = _blockchains[0];
            BlockChain<DumbAction> chainB = _blockchains[1];

            Swarm<DumbAction> swarmA = _swarms[0];
            Swarm<DumbAction> swarmB = new Swarm<DumbAction>(
                chainB,
                privateKey,
                1,
                host: IPAddress.Loopback.ToString());

            Block<DumbAction> genesis = chainA.MineBlock(_fx1.Address1);
            chainB.Append(genesis); // chainA and chainB shares genesis block.
            chainA.MineBlock(_fx1.Address1);
            chainA.MineBlock(_fx1.Address1);

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
                    await socket.SendMultipartMessageAsync(
                        request.ToNetMQMessage(privateKey, swarmB.AsPeer));

                    NetMQMessage response = await socket.ReceiveMultipartMessageAsync();
                    Message parsedMessage = Message.Parse(response, true);
                    Libplanet.Net.Messages.Blocks blockMessage =
                        (Libplanet.Net.Messages.Blocks)parsedMessage;

                    Assert.Equal(2, blockMessage.Payloads.Count);

                    response = await socket.ReceiveMultipartMessageAsync();
                    parsedMessage = Message.Parse(response, true);
                    blockMessage = (Libplanet.Net.Messages.Blocks)parsedMessage;

                    Assert.Single(blockMessage.Payloads);
                }
            }
            finally
            {
                await swarmA.StopAsync();
                await swarmB.StopAsync();
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
            chainB.MineBlock(_fx1.Address1);

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
                await swarmA.StopAsync();
                await swarmB.StopAsync();
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
            chainA.MineBlock(_fx1.Address1);

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

                Assert.Equal(tx, chainB.Transactions[tx.Id]);
                Assert.Equal(tx, chainC.Transactions[tx.Id]);
            }
            finally
            {
                await swarmA.StopAsync();
                await swarmB.StopAsync();
                await swarmC.StopAsync();
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
                Assert.Equal(tx, chainB.Transactions[tx.Id]);

                await swarmA.StopAsync();

                // Re-Broadcast received tx swarmB to swarmC
                await swarmB.AddPeersAsync(new[] { swarmC.AsPeer }, null);

                await swarmC.TxReceived.WaitAsync();
                Assert.Equal(tx, chainC.Transactions[tx.Id]);
            }
            finally
            {
                await swarmA.StopAsync();
                await swarmB.StopAsync();
                await swarmC.StopAsync();
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task BroadcastTxAsyncMany()
        {
            int size = 5;

            var policy = new BlockPolicy<DumbAction>();
            StoreFixture[] fxs = new StoreFixture[size];
            BlockChain<DumbAction>[] blockchains = new BlockChain<DumbAction>[size];
            Swarm<DumbAction>[] swarms = new Swarm<DumbAction>[size];

            for (int i = 0; i < size; i++)
            {
                fxs[i] = new LiteDBStoreFixture();
                blockchains[i] = new BlockChain<DumbAction>(policy, fxs[i].Store);
                swarms[i] = new Swarm<DumbAction>(
                    blockchains[i],
                    new PrivateKey(),
                    appProtocolVersion: 1,
                    host: IPAddress.Loopback.ToString());
            }

            Transaction<DumbAction> tx = Transaction<DumbAction>.Create(
                0,
                new PrivateKey(),
                new DumbAction[] { }
            );

            blockchains[size - 1]
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

                Log.Debug(swarms[size - 1].TraceTable());

                for (int i = 0; i < size; i++)
                {
                    Assert.Equal(tx, blockchains[i].Transactions[tx.Id]);
                }
            }
            finally
            {
                for (int i = 0; i < size; i++)
                {
                    await swarms[i].StopAsync();
                    fxs[i].Dispose();
                }
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task CanBroadcastBlock()
        {
            Swarm<DumbAction> swarmA = _swarms[0];
            Swarm<DumbAction> swarmB = _swarms[1];
            Swarm<DumbAction> swarmC = _swarms[2];

            BlockChain<DumbAction> chainA = _blockchains[0];
            BlockChain<DumbAction> chainB = _blockchains[1];
            BlockChain<DumbAction> chainC = _blockchains[2];

            // chainA, chainB and chainC shares genesis block.
            Block<DumbAction> genesis = chainA.MineBlock(_fx1.Address1);
            chainB.Append(genesis);
            chainC.Append(genesis);

            foreach (int i in Enumerable.Range(0, 10))
            {
                chainA.MineBlock(_fx1.Address1);
                await Task.Delay(100);
            }

            foreach (int i in Enumerable.Range(0, 3))
            {
                chainB.MineBlock(_fx2.Address1);
                await Task.Delay(100);
            }

            try
            {
                await StartAsync(swarmA);
                await StartAsync(swarmB);
                await StartAsync(swarmC);

                await BootstrapAsync(swarmB, swarmA.AsPeer);
                await BootstrapAsync(swarmC, swarmA.AsPeer);

                Log.Debug(swarmA.TraceTable());
                Log.Debug(swarmB.TraceTable());
                Log.Debug(swarmC.TraceTable());

                swarmB.BroadcastBlocks(new[] { chainB.Last() });

                await Task.Delay(5000);

                // chainB doesn't applied to chainA since chainB is shorter
                // than chainA
                Assert.NotEqual(chainB.AsEnumerable(), chainA);

                swarmA.BroadcastBlocks(new[] { chainA.Last() });

                await Task.Delay(10000);

                Assert.Equal(chainA.AsEnumerable(), chainB);
                Assert.Equal(chainA.AsEnumerable(), chainC);
            }
            finally
            {
                await swarmA.StopAsync();
                await swarmB.StopAsync();
                await swarmC.StopAsync();
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task IgnoreExistingBlocks()
        {
            Swarm<DumbAction> swarmA = _swarms[0];
            Swarm<DumbAction> swarmB = _swarms[1];

            BlockChain<DumbAction> chainA = _blockchains[0];
            BlockChain<DumbAction> chainB = _blockchains[1];

            Block<DumbAction> genesis = chainA.MineBlock(_fx1.Address1);
            chainB.Append(genesis);

            foreach (int i in Enumerable.Range(0, 3))
            {
                chainA.MineBlock(_fx1.Address1);
                await Task.Delay(100);
            }

            try
            {
                await StartAsync(swarmA);
                await StartAsync(swarmB);

                await BootstrapAsync(swarmB, swarmA.AsPeer);
                swarmA.BroadcastBlocks(new[] { chainA.Last() });
                await swarmB.BlockReceived.WaitAsync();

                Assert.Equal(chainA.AsEnumerable(), chainB);

                CancellationTokenSource cts = new CancellationTokenSource();
                swarmA.BroadcastBlocks(new[] { chainA.Last() });
                Task t = swarmB.BlockReceived.WaitAsync(cts.Token);

                // Actually, previous code may pass this test if message is
                // delayed over 5 seconds.
                await Task.Delay(5000);
                Assert.False(t.IsCompleted);

                cts.Cancel();
            }
            finally
            {
                await swarmA.StopAsync();
                await swarmB.StopAsync();
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
            Swarm<DumbAction> s = new Swarm<DumbAction>(
                _blockchains[0],
                new PrivateKey(),
                1,
                host: "1.2.3.4",
                listenPort: 5678);

            Assert.Equal(expected, s.EndPoint);
            Assert.Equal(expected, (s.AsPeer as BoundPeer)?.EndPoint);
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
            Swarm<DumbAction> swarm = new Swarm<DumbAction>(
                _blockchains[0],
                new PrivateKey(),
                1,
                host: IPAddress.Loopback.ToString()
            );

            Assert.IsNotType<BoundPeer>(swarm.AsPeer);

            await StartAsync(swarm);
            Assert.IsType<BoundPeer>(swarm.AsPeer);
            await swarm.StopAsync();
        }

        [FactOnlyTurnAvailable(Timeout = Timeout)]
        public async Task ExchangeWithIceServer()
        {
            Uri turnUrl = FactOnlyTurnAvailable.TurnUri;
            string username = FactOnlyTurnAvailable.Username;
            string password = FactOnlyTurnAvailable.Password;

            IEnumerable<IceServer> iceServers = new[]
            {
                new IceServer(
                    urls: new[] { turnUrl },
                    username: username,
                    credential: password),
            };

            var seed = new Swarm<DumbAction>(
                _blockchains[0],
                new PrivateKey(),
                1,
                host: "localhost");
            var swarmA = new Swarm<DumbAction>(
                _blockchains[1],
                new PrivateKey(),
                1,
                iceServers: iceServers);
            var swarmB = new Swarm<DumbAction>(
                _blockchains[2],
                new PrivateKey(),
                1,
                iceServers: iceServers);

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
                await seed.StopAsync();
                await swarmA.StopAsync();
                await swarmB.StopAsync();
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
                minerChain.MineBlock(_fx1.Address1);
            }

            try
            {
                await StartAsync(minerSwarm);
                await receiverSwarm.AddPeersAsync(new[] { minerSwarm.AsPeer }, null);

                await receiverSwarm.PreloadAsync();

                Assert.Equal(minerChain.AsEnumerable(), receiverChain.AsEnumerable());
            }
            finally
            {
                await minerSwarm.StopAsync();
                await receiverSwarm.StopAsync();
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
            minerChain.MineBlock(_fx1.Address1);

            minerChain.MakeTransaction(key, new[] { new DumbAction(address, "bar") });
            minerChain.MineBlock(_fx1.Address1);

            minerChain.MakeTransaction(key, new[] { new DumbAction(address, "baz") });
            minerChain.MineBlock(_fx1.Address1);

            try
            {
                await StartAsync(minerSwarm);
                await receiverSwarm.AddPeersAsync(new[] { minerSwarm.AsPeer }, null);

                var trustedStateValidators = new[] { minerSwarm.Address }.ToImmutableHashSet();

                await receiverSwarm.PreloadAsync(trustedStateValidators: trustedStateValidators);
                await receiverSwarm.PreloadAsync(true);
                var states = receiverChain.GetStates(new[] { address });

                Assert.Equal("foo,bar,baz", states[address]);
                Assert.Equal(minerChain.AsEnumerable(), receiverChain.AsEnumerable());
            }
            finally
            {
                await minerSwarm.StopAsync();
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task Preload()
        {
            Swarm<DumbAction> minerSwarm = _swarms[0];
            Swarm<DumbAction> receiverSwarm = _swarms[1];

            BlockChain<DumbAction> minerChain = _blockchains[0];
            BlockChain<DumbAction> receiverChain = _blockchains[1];

            foreach (int i in Enumerable.Range(0, 10))
            {
                minerChain.MineBlock(_fx1.Address1);
                await Task.Delay(100);
            }

            var actualStates = new List<PreloadState>();
            var progress = new Progress<PreloadState>(state =>
            {
                lock (actualStates)
                {
                    actualStates.Add(state);

                    if (actualStates.Count == 8)
                    {
                        minerChain.MineBlock(_fx1.Address1);
                    }
                }
            });

            try
            {
                await StartAsync(minerSwarm);

                await receiverSwarm.AddPeersAsync(new[] { minerSwarm.AsPeer }, null);

                minerSwarm.FindNextHashesChunkSize = 2;
                await receiverSwarm.PreloadAsync(progress);

                Assert.Equal(minerChain.AsEnumerable(), receiverChain.AsEnumerable());

                PreloadState[] expectedStates = minerChain.Select((b, i) =>
                {
                    return new BlockDownloadState
                    {
                        ReceivedBlockHash = b.Hash,
                        TotalBlockCount = 10,
                        ReceivedBlockCount = i + 1,
                    };
                }).ToArray();
                (expectedStates[10] as BlockDownloadState).TotalBlockCount = 11;

                expectedStates = expectedStates.Concat(minerChain.Select(
                    (b, i) => new ActionExecutionState()
                    {
                        ExecutedBlockHash = b.Hash,
                        TotalBlockCount = 11,
                        ExecutedBlockCount = i + 1,
                    })).ToArray();

                Assert.True(expectedStates.ToImmutableHashSet()
                        .SetEquals(actualStates.ToImmutableHashSet()));
            }
            finally
            {
                await minerSwarm.StopAsync();
                await receiverSwarm.StopAsync();
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task PreloadFromNominer()
        {
            Swarm<DumbAction> minerSwarm = _swarms[0];
            Swarm<DumbAction> receiverSwarm = _swarms[1];
            var fxForNominers = new StoreFixture[2];
            fxForNominers[0] = new LiteDBStoreFixture();
            fxForNominers[1] = new LiteDBStoreFixture();
            var policy = new BlockPolicy<DumbAction>();
            var blockChainsForNominers = new BlockChain<DumbAction>[2];
            blockChainsForNominers[0] = new BlockChain<DumbAction>(policy, fxForNominers[0].Store);
            blockChainsForNominers[1] = new BlockChain<DumbAction>(policy, fxForNominers[1].Store);
            var nominerSwarm0 = new Swarm<DumbAction>(
                blockChain: blockChainsForNominers[0],
                privateKey: new PrivateKey(),
                appProtocolVersion: 1,
                host: IPAddress.Loopback.ToString());
            var nominerSwarm1 = new Swarm<DumbAction>(
                blockChain: blockChainsForNominers[1],
                privateKey: new PrivateKey(),
                appProtocolVersion: 1,
                host: IPAddress.Loopback.ToString());

            BlockChain<DumbAction> minerChain = _blockchains[0];
            BlockChain<DumbAction> receiverChain = _blockchains[1];

            foreach (int i in Enumerable.Range(0, 10))
            {
                minerChain.MineBlock(_fx1.Address1);
                await Task.Delay(100);
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
                await receiverSwarm.PreloadAsync(progress);

                Assert.Equal(minerChain.AsEnumerable(), receiverChain.AsEnumerable());

                PreloadState[] expectedStates = minerChain.Select((b, i) =>
                {
                    return new BlockDownloadState
                    {
                        ReceivedBlockHash = b.Hash,
                        TotalBlockCount = 10,
                        ReceivedBlockCount = i + 1,
                    };
                }).ToArray();

                expectedStates = expectedStates.Concat(minerChain.Select(
                    (b, i) => new ActionExecutionState()
                    {
                        ExecutedBlockHash = b.Hash,
                        TotalBlockCount = 10,
                        ExecutedBlockCount = i + 1,
                    })).ToArray();

                // FIXME: this test does not ensures block download in order
                Assert.Equal(
                    expectedStates.ToHashSet(),
                    actualStates.ToHashSet());
            }
            finally
            {
                await minerSwarm.StopAsync();
                await nominerSwarm0.StopAsync();
                await nominerSwarm1.StopAsync();
                await receiverSwarm.StopAsync();

                fxForNominers[0].Dispose();
                fxForNominers[1].Dispose();
            }
        }

        [Theory(Timeout = Timeout)]
        [InlineData(true)]
        [InlineData(false)]
        public async Task PreloadWithTrustedPeers(bool trust)
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

            for (int i = 0; i < 3; i++)
            {
                int j = 0;
                Block<DumbAction> block = null;
                foreach ((PrivateKey signer, Address target) in fixturePairs)
                {
                    minerChain.MakeTransaction(
                        signer,
                        new[] { new DumbAction(target, $"Item{i}.{j}") }
                    );
                    block = minerChain.MineBlock(minerSwarm.Address);
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
                Assert.Equal(minerChain.AsEnumerable(), receiverChain.AsEnumerable());
                int i = 0;
                foreach (Address target in targets)
                {
                    foreach (BlockChain<DumbAction> chain in new[] { minerChain, receiverChain })
                    {
                        var chainType = ReferenceEquals(chain, minerChain) ? "M" : "R";
                        var states = chain.GetStates(
                            new[] { target },
                            completeStates: false
                        );
                        Assert.Single(states);
                        Assert.Equal(
                            $"({chainType}) Item0.{i},Item1.{i},Item2.{i}",
                            $"({chainType}) {states[target]}"
                        );
                    }

                    AddressStateMap TryToGetDeepStates() => receiverChain.GetStates(
                        new[] { target },
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
                        var deepStates = TryToGetDeepStates();
                        Assert.Single(deepStates);
                        Assert.Equal($"Item0.{i},Item1.{i}", deepStates[target]);
                    }

                    i++;
                }

                foreach (BlockChain<DumbAction> chain in new[] { minerChain, receiverChain })
                {
                    var minerState = chain.GetStates(
                        new[] { minerSwarm.Address },
                        completeStates: false);
                    Assert.Single(minerState);
                    Assert.Equal(30, minerState[minerSwarm.Address]);
                }
            }
            finally
            {
                await minerSwarm.StopAsync();
                await receiverSwarm.StopAsync();

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

            Block<DumbAction> g = TestUtils.MineGenesis<DumbAction>(senderSwarm.Address),
                bp = TestUtils.MineNext(g, difficulty: 1024),
                b2send = TestUtils.MineNext(bp, difficulty: 1024),
                b2recv = TestUtils.MineNext(bp, difficulty: 1024),
                b3 = TestUtils.MineNext(b2send, difficulty: 1024);

            senderChain.Append(g);
            senderChain.Append(bp);
            senderChain.Append(b2send);
            senderChain.Append(b3);

            receiverChain.Append(g);
            receiverChain.Append(bp);
            receiverChain.Append(b2recv);

            var receivedBlockStates = new HashSet<HashDigest<SHA256>>();

            try
            {
                await StartAsync(senderSwarm);
                await receiverSwarm.AddPeersAsync(new[] { senderSwarm.AsPeer }, null);
                await receiverSwarm.PreloadAsync(
                    progress: new Progress<PreloadState>(state =>
                    {
                        if (state is BlockStateDownloadState s)
                        {
                            receivedBlockStates.Add(s.ReceivedBlockHash);
                        }
                    }),
                    trustedStateValidators: ImmutableHashSet<Address>.Empty.Add(senderSwarm.Address)
                );
            }
            finally
            {
                await senderSwarm.StopAsync();
            }

            Assert.Equal(senderChain, receiverChain);
            Assert.DoesNotContain(g.Hash, receivedBlockStates);
            Assert.DoesNotContain(bp.Hash, receivedBlockStates);
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
                MakeFixtureBlocksForPreloadAsyncCancellationTest();

            foreach (Block<DumbAction> block in blocks)
            {
                minerChain.Append(block);
            }

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
                Assert.Null(receiverChain.Tip);
                Assert.Null(receiverChain.GetStates(new[] { address }).GetValueOrDefault(address));
            }
            else
            {
                Assert.NotEqual(receiverChainId, receiverChain.Id);
                Assert.Equal(minerChain.Tip, receiverChain.Tip);
                Assert.Equal(
                    string.Join(
                        ",",
                        Enumerable.Range(0, 20).Select(i =>
                            string.Join(",", Enumerable.Range(0, 5).Select(j => $"Item{i}.{j}"))
                        )
                    ),
                    receiverChain.GetStates(new[] { address })[address]
                );
            }
        }

        private static (Address, Block<DumbAction>[])
            MakeFixtureBlocksForPreloadAsyncCancellationTest()
        {
            Block<DumbAction>[] blocks = _fixtureBlocksForPreloadAsyncCancellationTest;

            if (blocks is null)
            {
                var policy = new BlockPolicy<DumbAction>(new MinerReward(1));
                using (var storeFx = new LiteDBStoreFixture())
                {
                    var chain = new BlockChain<DumbAction>(policy, storeFx.Store);
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

                        Block<DumbAction> block = chain.MineBlock(miner);
                        Log.Logger.Information("  #{0,2} {1}", block.Index, block.Hash);
                    }

                    blocks = chain.ToArray();
                    _fixtureBlocksForPreloadAsyncCancellationTest = blocks;
                }
            }

            return (blocks[0].Transactions.First().Actions.First().TargetAddress, blocks);
        }

        private async Task<Task> StartAsync(
            Swarm<DumbAction> swarm,
            CancellationToken cancellationToken = default
        )
        {
            Task task = swarm.StartAsync(200, cancellationToken);
            await swarm.WaitForRunningAsync();
            return task;
        }

        private async Task BootstrapAsync(
            Swarm<DumbAction> swarm,
            Peer seed,
            CancellationToken cancellationToken = default
            )
        {
            await swarm.BootstrapAsync(
                new[] { seed },
                null,
                TimeSpan.FromSeconds(3),
                cancellationToken);
        }
    }
}
