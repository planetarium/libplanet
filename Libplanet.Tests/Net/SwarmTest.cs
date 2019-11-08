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
using Libplanet.Tests.Blockchain;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Store;
using Libplanet.Tx;
using NetMQ;
using NetMQ.Sockets;
using Serilog;
using Xunit;
using Xunit.Abstractions;
using Xunit.Sdk;

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
                .MinimumLevel.Verbose()
                .Enrich.WithThreadId()
                .WriteTo.TestOutput(output, outputTemplate: outputTemplate)
                .CreateLogger()
                .ForContext<SwarmTest>();

            Log.Logger.Debug($"Started to initialize a {nameof(SwarmTest)} instance.");

            _output = output;

            var policy = new BlockPolicy<DumbAction>(new MinerReward(1));
            _fx1 = new LiteDBStoreFixture(memory: true);
            _fx2 = new LiteDBStoreFixture(memory: true);
            _fx3 = new LiteDBStoreFixture(memory: true);

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

                seed.Dispose();
                swarmA.Dispose();
                swarmB.Dispose();
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
                await chainWithBlocks.MineBlock(_fx1.Address1);
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

                seed.BroadcastBlocks(new[] { chainWithBlocks.Tip });

                await swarmB.BlockReceived.WaitAsync();

                Assert.NotEqual(chainWithBlocks.BlockHashes, _blockchains[1].BlockHashes);
                Assert.Equal(chainWithBlocks.BlockHashes, _blockchains[2].BlockHashes);
            }
            finally
            {
                await seed.StopAsync();
                await swarmA.StopAsync();
                await swarmB.StopAsync();

                seed.Dispose();
                swarmA.Dispose();
                swarmB.Dispose();
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

                await swarmA.AddPeersAsync(new[] { swarmB.AsPeer, swarmC.AsPeer }, null);

                Assert.Contains(swarmB.AsPeer, swarmA.Peers);
                Assert.Contains(swarmC.AsPeer, swarmA.Peers);

                await swarmC.StopAsync();
                await Assert.ThrowsAsync<TimeoutException>(
                    () => swarmA.AddPeersAsync(new[] { swarmC.AsPeer }, TimeSpan.FromSeconds(3)));
                await swarmA.AddPeersAsync(new[] { swarmB.AsPeer }, null);

                Assert.Contains(swarmB.AsPeer, swarmA.Peers);
            }
            finally
            {
                await swarmA.StopAsync();
                await swarmB.StopAsync();
                if (swarmC.Running)
                {
                    await swarmC.StopAsync();
                }

                swarmA.Dispose();
                swarmB.Dispose();
                swarmC.Dispose();
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task RemoveStalePeers()
        {
            var swarmA = _swarms[0];
            var swarmB = _swarms[1];
            try
            {
                await StartAsync(swarmA);
                await StartAsync(swarmB);

                await swarmA.AddPeersAsync(new[] { swarmB.AsPeer }, null);
                Assert.Single(swarmA.Peers);

                await swarmB.StopAsync();
                await swarmA.Protocol.RefreshTableAsync(TimeSpan.Zero, default(CancellationToken));
                Assert.Empty(swarmA.Peers);
            }
            finally
            {
                await swarmA.StopAsync();
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task RoutingTableFull()
        {
            var policy = new BlockPolicy<DumbAction>(new MinerReward(1));
            var fx = new LiteDBStoreFixture(memory: true);

            var blockchain = new BlockChain<DumbAction>(policy, fx.Store);

            var swarm = new Swarm<DumbAction>(
                blockchain,
                new PrivateKey(),
                appProtocolVersion: 1,
                tableSize: 1,
                bucketSize: 1,
                host: IPAddress.Loopback.ToString());
            var swarmA = _swarms[0];
            var swarmB = _swarms[1];
            var swarmC = _swarms[2];

            try
            {
                await StartAsync(swarm);
                await StartAsync(swarmA);
                await StartAsync(swarmB);
                await StartAsync(swarmC);

                await swarmA.AddPeersAsync(new[] { swarm.AsPeer }, null);
                await swarmB.AddPeersAsync(new[] { swarm.AsPeer }, null);
                await swarmC.AddPeersAsync(new[] { swarm.AsPeer }, null);

                Assert.Equal(1, swarmA.Peers.Count);
                Assert.Contains(swarmA.AsPeer, swarm.Peers);
                Assert.DoesNotContain(swarmB.AsPeer, swarm.Peers);
                Assert.DoesNotContain(swarmC.AsPeer, swarm.Peers);
            }
            finally
            {
                await swarm.StopAsync();
                await swarmA.StopAsync();
                await swarmB.StopAsync();
                await swarmC.StopAsync();
                fx.Dispose();
                swarm.Dispose();
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task ReplacementCache()
        {
            var policy = new BlockPolicy<DumbAction>(new MinerReward(1));
            var fx = new LiteDBStoreFixture(memory: true);

            var blockchain = new BlockChain<DumbAction>(policy, fx.Store);

            var swarm = new Swarm<DumbAction>(
                blockchain,
                new PrivateKey(),
                appProtocolVersion: 1,
                tableSize: 1,
                bucketSize: 1,
                host: IPAddress.Loopback.ToString());
            var swarmA = _swarms[0];
            var swarmB = _swarms[1];
            var swarmC = _swarms[2];

            try
            {
                await StartAsync(swarm);
                await StartAsync(swarmA);
                await StartAsync(swarmB);
                await StartAsync(swarmC);

                await swarmA.AddPeersAsync(new[] { swarm.AsPeer }, null);
                await swarmB.AddPeersAsync(new[] { swarm.AsPeer }, null);

                Assert.Single(swarmA.Peers);
                Assert.Contains(swarmA.AsPeer, swarm.Peers);
                Assert.DoesNotContain(swarmB.AsPeer, swarm.Peers);

                await swarmA.StopAsync();
                await swarmC.AddPeersAsync(new[] { swarm.AsPeer }, null);
                await swarm.Protocol.RefreshTableAsync(TimeSpan.Zero, default(CancellationToken));
                await swarm.Protocol.CheckReplacementCacheAsync(default(CancellationToken));

                Assert.Single(swarm.Peers);
                Assert.DoesNotContain(swarmA.AsPeer, swarm.Peers);
                Assert.Contains(swarmB.AsPeer, swarm.Peers);
                Assert.DoesNotContain(swarmC.AsPeer, swarm.Peers);
            }
            finally
            {
                await swarm.StopAsync();
                await swarmB.StopAsync();
                await swarmC.StopAsync();
                fx.Dispose();
                swarm.Dispose();
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task RemoveDeadReplacementCache()
        {
            var policy = new BlockPolicy<DumbAction>(new MinerReward(1));
            var fx = new LiteDBStoreFixture(memory: true);

            var blockchain = new BlockChain<DumbAction>(policy, fx.Store);

            var swarm = new Swarm<DumbAction>(
                blockchain,
                new PrivateKey(),
                appProtocolVersion: 1,
                tableSize: 1,
                bucketSize: 1,
                host: IPAddress.Loopback.ToString());
            var swarmA = _swarms[0];
            var swarmB = _swarms[1];
            var swarmC = _swarms[2];

            try
            {
                await StartAsync(swarm);
                await StartAsync(swarmA);
                await StartAsync(swarmB);
                await StartAsync(swarmC);

                await swarmA.AddPeersAsync(new[] { swarm.AsPeer }, null);
                await swarmB.AddPeersAsync(new[] { swarm.AsPeer }, null);

                Assert.Single(swarm.Peers);
                Assert.Contains(swarmA.AsPeer, swarm.Peers);
                Assert.DoesNotContain(swarmB.AsPeer, swarm.Peers);

                await swarmA.StopAsync();
                await swarmB.StopAsync();

                await swarmC.AddPeersAsync(new[] { swarm.AsPeer }, null);
                await swarm.Protocol.RefreshTableAsync(TimeSpan.Zero, default(CancellationToken));
                await swarm.Protocol.CheckReplacementCacheAsync(default(CancellationToken));

                Assert.Single(swarm.Peers);
                Assert.DoesNotContain(swarmA.AsPeer, swarm.Peers);
                Assert.DoesNotContain(swarmB.AsPeer, swarm.Peers);
                Assert.Contains(swarmC.AsPeer, swarm.Peers);
            }
            finally
            {
                await swarm.StopAsync();
                await swarmC.StopAsync();
                fx.Dispose();
                swarm.Dispose();
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
                fxs[i] = new LiteDBStoreFixture(memory: true);
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
                    swarms[i].Dispose();
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
                        try
                        {
                            var block = await chain.MineBlock(_fx1.Address1);

                            Log.Debug(
                                "Block mined. [Node: {0}, Block: {1}]",
                                swarm.Address,
                                block.Hash);
                            swarm.BroadcastBlocks(new[] { block });
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

                    swarm.BroadcastBlocks(new[] { chain[-1] });
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

            Assert.Equal(chainA.BlockHashes, chainB.BlockHashes);
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
                new BlockChain<DumbAction>(
                    _blockchains[0].Policy, new LiteDBStoreFixture(memory: true).Store),
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
                await swarmA.StopAsync();
                await swarmB.StopAsync();

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
                Assert.Equal(tx, chainB.GetTransaction(tx.Id));

                await swarmA.StopAsync();

                // Re-Broadcast received tx swarmB to swarmC
                await swarmB.AddPeersAsync(new[] { swarmC.AsPeer }, null);

                await swarmC.TxReceived.WaitAsync();
                Assert.Equal(tx, chainC.GetTransaction(tx.Id));
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
                fxs[i] = new LiteDBStoreFixture(memory: true);
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

                for (int i = 0; i < size; i++)
                {
                    Assert.Equal(tx, blockchains[i].GetTransaction(tx.Id));
                }
            }
            finally
            {
                for (int i = 0; i < size; i++)
                {
                    await swarms[i].StopAsync();
                    fxs[i].Dispose();
                    swarms[i].Dispose();
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
            Block<DumbAction> genesis = await chainA.MineBlock(_fx1.Address1);
            chainB.Append(genesis);
            chainC.Append(genesis);

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

                swarmB.BroadcastBlocks(new[] { chainB[-1] });

                await Task.Delay(5000);

                // chainB doesn't applied to chainA since chainB is shorter
                // than chainA
                Assert.NotEqual(chainB, chainA);

                swarmA.BroadcastBlocks(new[] { chainA[-1] });

                await Task.Delay(20000);

                Log.Debug("Compare chainA and chainB");
                Assert.Equal(chainA.BlockHashes, chainB.BlockHashes);
                Log.Debug("Compare chainA and chainC");
                Assert.Equal(chainA.BlockHashes, chainC.BlockHashes);
            }
            finally
            {
                await swarmA.StopAsync();
                await swarmB.StopAsync();
                await swarmC.StopAsync();
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task BroadcastBlockWithSkip()
        {
            var policy = new BlockPolicy<DumbAction>(new MinerReward(1));
            var fx = new LiteDBStoreFixture(memory: true);
            var blockChain = new BlockChain<DumbAction>(policy, fx.Store);
            var privateKey = new PrivateKey();
            var minerSwarm = new Swarm<DumbAction>(
                blockChain,
                privateKey,
                appProtocolVersion: 1,
                host: IPAddress.Loopback.ToString());
            Swarm<DumbAction> receiverSwarm = _swarms[0];

            DumbAction.RenderRecords.Value = ImmutableList<RenderRecord>.Empty;
            MinerReward.RenderRecords.Value = ImmutableList<RenderRecord>.Empty;

            int renderCount = 0;

            void RenderHandler(object target, IAction action)
            {
                renderCount += 1;
            }

            DumbAction.RenderEventHandler += RenderHandler;

            Block<DumbAction> genesis = TestUtils.MineGenesis<DumbAction>(fx.Address1);
            blockChain.Append(genesis);
            _blockchains[0].Append(genesis);
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
                    genesis,
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
                minerSwarm.BroadcastBlocks(new[] { block2 });
                await receiverSwarm.BlockReceived.WaitAsync();

                Assert.Equal(3, _blockchains[0].Count);
                Assert.Equal(4, renderCount);
            }
            finally
            {
                await minerSwarm.StopAsync();
                await receiverSwarm.StopAsync();
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
                swarmA.BroadcastBlocks(new[] { chainA[-1] });

                await swarmB.BlockReceived.WaitAsync();

                Assert.Equal(chainB.BlockHashes, chainA.BlockHashes);

                await chainA.MineBlock(_fx1.Address1);
                swarmA.BroadcastBlocks(new[] { chainA[-1] });

                await swarmB.BlockReceived.WaitAsync();

                Assert.Equal(chainB.BlockHashes, chainA.BlockHashes);
            }
            finally
            {
                await swarmA.StopAsync();
                await swarmB.StopAsync();
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
                swarmA.BroadcastBlocks(new[] { chainA[-1] });
                await swarmB.BlockReceived.WaitAsync();

                Assert.Equal(chainA.BlockHashes, chainB.BlockHashes);

                CancellationTokenSource cts = new CancellationTokenSource();
                swarmA.BroadcastBlocks(new[] { chainA[-1] });
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
            using (Swarm<DumbAction> s = new Swarm<DumbAction>(
                _blockchains[0],
                new PrivateKey(),
                1,
                host: "1.2.3.4",
                listenPort: 5678))
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
            using (Swarm<DumbAction> swarm = new Swarm<DumbAction>(
                _blockchains[0],
                new PrivateKey(),
                1,
                host: IPAddress.Loopback.ToString()
            ))
            {
                Assert.IsNotType<BoundPeer>(swarm.AsPeer);

                await StartAsync(swarm);
                Assert.IsType<BoundPeer>(swarm.AsPeer);
                await swarm.StopAsync();
            }
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
                await receiverSwarm.PreloadAsync(true);
                var states = receiverChain.GetState(address);

                Assert.Equal("foo,bar,baz", (Text)states[address]);
                Assert.Equal(minerChain.BlockHashes, receiverChain.BlockHashes);
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
                await minerChain.MineBlock(_fx1.Address1);
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
                await receiverSwarm.PreloadAsync(TimeSpan.FromSeconds(15), progress);

                Assert.Equal(minerChain.BlockHashes, receiverChain.BlockHashes);

                var expectedStates = new List<PreloadState>();

                for (var i = 0; i < minerChain.Count; i++)
                {
                    var b = minerChain[i];
                    var state = new BlockDownloadState
                    {
                        ReceivedBlockHash = b.Hash,
                        TotalBlockCount = 10,
                        ReceivedBlockCount = i + 1,
                        SourcePeer = minerSwarm.AsPeer as BoundPeer,
                    };
                    expectedStates.Add(state);
                }

                ((BlockDownloadState)expectedStates[10]).TotalBlockCount = 11;

                for (var i = 0; i < minerChain.Count; i++)
                {
                    var b = minerChain[i];
                    var state = new ActionExecutionState
                    {
                        ExecutedBlockHash = b.Hash,
                        TotalBlockCount = 11,
                        ExecutedBlockCount = i + 1,
                    };
                    expectedStates.Add(state);
                }

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
            fxForNominers[0] = new LiteDBStoreFixture(memory: true);
            fxForNominers[1] = new LiteDBStoreFixture(memory: true);
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

                Assert.Equal(minerChain.BlockHashes, receiverChain.BlockHashes);

                var expectedStates = new List<PreloadState>();

                for (var i = 0; i < minerChain.Count; i++)
                {
                    var b = minerChain[i];
                    var state = new BlockDownloadState
                    {
                        ReceivedBlockHash = b.Hash,
                        TotalBlockCount = 10,
                        ReceivedBlockCount = i + 1,
                        SourcePeer = nominerSwarm1.AsPeer as BoundPeer,
                    };
                    expectedStates.Add(state);
                }

                for (var i = 0; i < minerChain.Count; i++)
                {
                    var b = minerChain[i];
                    var state = new ActionExecutionState
                    {
                        ExecutedBlockHash = b.Hash,
                        TotalBlockCount = 10,
                        ExecutedBlockCount = i + 1,
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
                await minerSwarm.StopAsync();
                await nominerSwarm0.StopAsync();
                await nominerSwarm1.StopAsync();
                await receiverSwarm.StopAsync();

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
                        var states = chain.GetState(
                            target,
                            completeStates: false
                        );
                        Assert.Single(states);
                        Assert.Equal(
                            $"({chainType}) Item0.{i},Item1.{i},Item2.{i}",
                            $"({chainType}) {states[target]}"
                        );
                    }

                    AddressStateMap TryToGetDeepStates() => receiverChain.GetState(
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
                        var deepStates = TryToGetDeepStates();
                        Assert.Single(deepStates);
                        Assert.Equal($"Item0.{i},Item1.{i}", (Text)deepStates[target]);
                    }

                    i++;
                }

                if (genesisWithAction)
                {
                    foreach (BlockChain<DumbAction> chain in new[] { minerChain, receiverChain })
                    {
                        var states = chain.GetState(
                            genesisTarget,
                            completeStates: false
                        );
                        Assert.Single(states);
                        Assert.Equal("Genesis", (Text)states[genesisTarget]);
                    }
                }

                foreach (BlockChain<DumbAction> chain in new[] { minerChain, receiverChain })
                {
                    var minerState = chain.GetState(
                        minerSwarm.Address,
                        completeStates: false);
                    Assert.Single(minerState);
                    Assert.Equal(
                        (Integer)((genesisWithAction ? 1 : 0) + repeat * fixturePairs.Length),
                        (Integer)minerState[minerSwarm.Address]
                    );
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

            Assert.Equal(senderChain.BlockHashes, receiverChain.BlockHashes);
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
                    string.Join(",", Enumerable.Range(0, 5).Select(j => $"Item0.{j}")),
                    receiverChain.GetState(address).GetValueOrDefault(address)?.ToString()
                );
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
                    receiverChain.GetState(address)[address].ToString()
                );
            }
        }

        [Fact]
        public async Task RemoveForkedChainWhenFillBlocksAsyncFail()
        {
            // This test makes 2 different policies to reproduce an exception
            // while FillBlocksAsync.
            var policy1 = new BlockPolicy<DumbAction>();
            var policy2 = new NullPolicy<DumbAction>();
            var fx1 = new LiteDBStoreFixture();
            var fx2 = new LiteDBStoreFixture();

            var chain1 = new BlockChain<DumbAction>(policy1, fx1.Store);
            var chain2 = new BlockChain<DumbAction>(policy2, fx2.Store);

            var block1 = await chain2.MineBlock(_fx1.Address1);
            chain1.Append(block1);

            await chain1.MineBlock(_fx1.Address1);
            await chain2.MineBlock(_fx1.Address1);

            var block3 = await chain2.MineBlock(_fx1.Address1);

            var swarm1 = new Swarm<DumbAction>(
                chain1,
                new PrivateKey(),
                1,
                host: IPAddress.Loopback.ToString());
            var swarm2 = new Swarm<DumbAction>(
                chain2,
                new PrivateKey(),
                1,
                host: IPAddress.Loopback.ToString());

            try
            {
                await StartAsync(swarm1);
                await StartAsync(swarm2);
                await swarm1.AddPeersAsync(new[] { swarm2.AsPeer }, null);

                swarm2.BroadcastBlocks(new[] { block3 });
                await Task.Delay(2000);

                List<Guid> chainIds = fx1.Store.ListChainIds().ToList();
                Assert.Single(chainIds);
            }
            finally
            {
                await swarm1.StopAsync();
                await swarm2.StopAsync();

                swarm1.Dispose();
                swarm2.Dispose();
            }
        }

        [Fact]
        public async Task HandleReorgInSynchronizing()
        {
            var policy = new BlockPolicy<Sleep>(new MinerReward(1));
            var miner1 = new Swarm<Sleep>(
                new BlockChain<Sleep>(
                    policy,
                    _fx1.Store
                ),
                new PrivateKey(),
                appProtocolVersion: 1,
                host: IPAddress.Loopback.ToString()
            );
            var miner2 = new Swarm<Sleep>(
                new BlockChain<Sleep>(
                    policy,
                    _fx2.Store
                ),
                new PrivateKey(),
                appProtocolVersion: 1,
                host: IPAddress.Loopback.ToString()
            );
            var receiver = new Swarm<Sleep>(
                new BlockChain<Sleep>(
                    policy,
                    _fx3.Store
                ),
                new PrivateKey(),
                appProtocolVersion: 1,
                host: IPAddress.Loopback.ToString()
            );

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

                var t = receiver.PreloadAsync(render: true);
                await miner1.BlockChain.MineBlock(miner1.Address);
                await miner2.BlockChain.MineBlock(miner2.Address);
                Block<Sleep> latest = await miner2.BlockChain.MineBlock(miner2.Address);
                miner2.BroadcastBlocks(new[] { latest });
                await t;

                Assert.Equal(miner1.BlockChain.Tip, miner2.BlockChain.Tip);
                Assert.Equal(miner1.BlockChain.Tip, receiver.BlockChain.Tip);
            }
            finally
            {
                await miner1.StopAsync();
                await miner2.StopAsync();
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

            var minerSwarmA = new Swarm<DumbAction>(
                _blockchains[0],
                new PrivateKey(keyA),
                1,
                host: IPAddress.Loopback.ToString());
            var minerSwarmB = new Swarm<DumbAction>(
                _blockchains[1],
                new PrivateKey(keyB),
                1,
                host: IPAddress.Loopback.ToString());
            var receiverSwarm = new Swarm<DumbAction>(
                _blockchains[2],
                new PrivateKey(keyC),
                1,
                host: IPAddress.Loopback.ToString());

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
                minerSwarmA.BroadcastBlocks(new[] { b1 });
                await receiverSwarm.BlockReceived.WaitAsync();
                Assert.Equal(receiverChain.Tip, minerChainA.Tip);

                // Broadcast SwarmB's second block.
                await minerChainA.MineBlock(_fx1.Address1);
                var b2 = await minerChainB.MineBlock(_fx1.Address1);
                minerSwarmB.BroadcastBlocks(new[] { b2 });
                await receiverSwarm.BlockReceived.WaitAsync();
                Assert.Equal(receiverChain.Tip, minerChainB.Tip);

                // Broadcast SwarmA's third block.
                var b3 = await minerChainA.MineBlock(_fx1.Address1);
                await minerChainB.MineBlock(_fx1.Address1);
                minerSwarmA.BroadcastBlocks(new[] { b3 });
                await receiverSwarm.BlockReceived.WaitAsync();
                Assert.Equal(receiverChain.Tip, minerChainA.Tip);
            }
            finally
            {
                await minerSwarmA.StopAsync();
                await minerSwarmB.StopAsync();
                await receiverSwarm.StopAsync();
                minerSwarmA.Dispose();
                minerSwarmB.Dispose();
                receiverSwarm.Dispose();
            }
        }

        private static async Task<(Address, Block<DumbAction>[])>
            MakeFixtureBlocksForPreloadAsyncCancellationTest()
        {
            Block<DumbAction>[] blocks = _fixtureBlocksForPreloadAsyncCancellationTest;

            if (blocks is null)
            {
                var policy = new BlockPolicy<DumbAction>(new MinerReward(1));
                using (var storeFx = new LiteDBStoreFixture(memory: true))
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

                        Block<DumbAction> block = await chain.MineBlock(miner);
                        Log.Logger.Information("  #{0,2} {1}", block.Index, block.Hash);
                    }

                    var blockList = new List<Block<DumbAction>>();
                    for (var i = 0; i < chain.Count; i++)
                    {
                        Block<DumbAction> block = chain[i];
                        blockList.Add(block);
                    }

                    blocks = blockList.ToArray();

                    _fixtureBlocksForPreloadAsyncCancellationTest = blocks;
                }
            }

            return (blocks[0].Transactions.First().Actions.First().TargetAddress, blocks);
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
                cancellationToken);
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
