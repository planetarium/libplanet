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
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Store;
using Libplanet.Tx;
using NetMQ;
using Serilog;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Tests.Net
{
    public class SwarmTest : IDisposable
    {
        private const int Timeout = 60 * 1000;
        private const int DisposeTimeout = 5 * 1000;

        private readonly FileStoreFixture _fx1;
        private readonly FileStoreFixture _fx2;
        private readonly FileStoreFixture _fx3;

        private readonly List<BlockChain<DumbAction>> _blockchains;
        private readonly List<Swarm> _swarms;

        public SwarmTest(ITestOutputHelper output)
        {
            Log.Logger = new LoggerConfiguration()
                .MinimumLevel.Debug()
                .Enrich.WithThreadId()
                .WriteTo.TestOutput(output, outputTemplate: "{Timestamp:HH:mm:ss}[@{SwarmId}][{ThreadId}] - {Message}")
                .CreateLogger()
                .ForContext<SwarmTest>();

            var policy = new BlockPolicy<DumbAction>();
            _fx1 = new FileStoreFixture();
            _fx2 = new FileStoreFixture();
            _fx3 = new FileStoreFixture();

            _blockchains = new List<BlockChain<DumbAction>>
            {
                new BlockChain<DumbAction>(policy, _fx1.Store),
                new BlockChain<DumbAction>(policy, _fx2.Store),
                new BlockChain<DumbAction>(policy, _fx3.Store),
            };

            _swarms = new List<Swarm>
            {
                new Swarm(
                    new PrivateKey(),
                    appProtocolVersion: 1,
                    host: IPAddress.Loopback.ToString()),
                new Swarm(
                    new PrivateKey(),
                    appProtocolVersion: 1,
                    host: IPAddress.Loopback.ToString()),
                new Swarm(
                    new PrivateKey(),
                    appProtocolVersion: 1,
                    host: IPAddress.Loopback.ToString()),
            };
        }

        public void Dispose()
        {
            _fx1.Dispose();
            _fx2.Dispose();
            _fx3.Dispose();

            foreach (Swarm s in _swarms)
            {
                s.StopAsync().Wait(DisposeTimeout);
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task CanNotStartTwice()
        {
            Swarm swarm = _swarms[0];
            BlockChain<DumbAction> chain = _blockchains[0];

            Task t = await Task.WhenAny(
                swarm.StartAsync(chain),
                swarm.StartAsync(chain));

            Assert.True(swarm.Running);
            Assert.True(t.IsFaulted);
            Assert.IsType<SwarmException>(t.Exception.InnerException);

            await swarm.StopAsync();
        }

        [Fact(Timeout = Timeout)]
        public async Task CanStop()
        {
            Swarm swarm = _swarms[0];
            BlockChain<DumbAction> chain = _blockchains[0];

            await swarm.StopAsync();
            Task task = await StartAsync(swarm, chain);

            Assert.True(swarm.Running);
            await swarm.StopAsync();

            Assert.False(swarm.Running);
            await task;
        }

        [Fact(Timeout = Timeout)]
        public async Task CanWaitForRunning()
        {
            Swarm swarm = _swarms[0];
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
                await swarm.StartAsync(chain);
            });

            await consumerTask;
            Assert.True(swarm.Running);

            await swarm.StopAsync();
            Assert.False(swarm.Running);
        }

        [Fact(Timeout = Timeout)]
        public async Task BroadcastWhileMining()
        {
            Swarm a = _swarms[0];
            Swarm b = _swarms[1];

            BlockChain<DumbAction> chainA = _blockchains[0];
            BlockChain<DumbAction> chainB = _blockchains[1];

            Task CreateMiner(
                Swarm swarm,
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

            var minerCanceller = new CancellationTokenSource();
            Task miningA = CreateMiner(a, chainA, 5000, minerCanceller.Token);
            Task miningB = CreateMiner(b, chainB, 8000, minerCanceller.Token);

            try
            {
                await StartAsync(a, chainA);
                await StartAsync(b, chainB);

                await b.AddPeersAsync(new[] { a.AsPeer });
                await EnsureExchange(a, b);

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
        public async Task CanExchangePeer()
        {
            Swarm a = _swarms[0];
            Swarm b = _swarms[1];
            Swarm c = _swarms[2];

            BlockChain<DumbAction> chain = _blockchains[0];

            DateTimeOffset lastDistA;
            Peer aAsPeer;

            try
            {
                try
                {
                    await StartAsync(a, chain);
                    await StartAsync(b, chain);
                    await StartAsync(c, chain);

                    await b.AddPeersAsync(new[] { a.AsPeer });
                    await EnsureExchange(a, b);
                    Assert.Equal(new[] { b.AsPeer }.ToImmutableHashSet(), a.ToImmutableHashSet());
                    Assert.Equal(new[] { a.AsPeer }.ToImmutableHashSet(), b.ToImmutableHashSet());

                    await c.AddPeersAsync(new[] { a.AsPeer });
                    await EnsureExchange(a, c);
                    await EnsureExchange(a, b);

                    Assert.Equal(new[] { b.AsPeer, c.AsPeer }.ToImmutableHashSet(), a.ToImmutableHashSet());
                    Assert.Equal(new[] { a.AsPeer, c.AsPeer }.ToImmutableHashSet(), b.ToImmutableHashSet());
                    Assert.Equal(new[] { a.AsPeer, b.AsPeer }.ToImmutableHashSet(), c.ToImmutableHashSet());

                    lastDistA = a.LastDistributed;
                    aAsPeer = a.AsPeer;
                }
                finally
                {
                    await a.StopAsync();
                }

                Assert.True(lastDistA < a.LastDistributed);

                await EnsureRecvAsync(b, aAsPeer, a.LastDistributed);
                await EnsureRecvAsync(c, aAsPeer, a.LastDistributed);
                await EnsureExchange(b, c);

                Assert.Equal(new[] { c.AsPeer }.ToImmutableHashSet(), b.ToImmutableHashSet());
                Assert.Equal(new[] { b.AsPeer }.ToImmutableHashSet(), c.ToImmutableHashSet());
            }
            finally
            {
                await b.StopAsync();
                await c.StopAsync();
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task WorksAsCollection()
        {
            Swarm a = _swarms[0];
            Swarm b = _swarms[1];
            Swarm c = _swarms[2];

            // Obtaining swarm's endpoint...
            await Task.WhenAll(
                StartAsync(a, _blockchains[0]),
                StartAsync(b, _blockchains[1]),
                StartAsync(c, _blockchains[2]));

            Assert.Empty(a);
            Assert.Empty(b);
            Assert.Empty(c);

            a.Add(b.AsPeer);
            a.Add(c.AsPeer);
            Assert.Contains(b.AsPeer, a);
            Assert.Contains(c.AsPeer, a);

            Peer[] peers = null;
            Assert.Throws<ArgumentNullException>(() =>
            {
                a.CopyTo(peers, 0);
            });

            peers = new Peer[3];
            Assert.Throws<ArgumentOutOfRangeException>(() =>
            {
                a.CopyTo(peers, -1);
            });
            Assert.Throws<ArgumentException>(() =>
            {
                a.CopyTo(peers, 2);
            });

            a.CopyTo(peers, 1);

            Assert.Equal(
                new HashSet<Peer> { null, b.AsPeer, c.AsPeer },
                peers.ToHashSet());
        }

        [Fact(Timeout = Timeout)]
        public async Task DetectAppProtocolVersion()
        {
            var a = new Swarm(
                new PrivateKey(),
                host: IPAddress.Loopback.ToString(),
                appProtocolVersion: 2);
            var b = new Swarm(
                new PrivateKey(),
                host: IPAddress.Loopback.ToString(),
                appProtocolVersion: 3);

            var c = new Swarm(
                new PrivateKey(),
                host: IPAddress.Loopback.ToString(),
                appProtocolVersion: 2);
            var d = new Swarm(
                new PrivateKey(),
                host: IPAddress.Loopback.ToString(),
                appProtocolVersion: 3);

            BlockChain<DumbAction> chain = _blockchains[0];

            try
            {
                await StartAsync(a, chain);
                await StartAsync(b, chain);
                await StartAsync(c, chain);
                await StartAsync(d, chain);

                var peers = new[] { c.AsPeer, d.AsPeer };

                foreach (var peer in peers)
                {
                    a.Add(peer);
                    b.Add(peer);
                }

                Assert.Equal(new[] { c.AsPeer }, a.ToArray());
                Assert.Equal(new[] { d.AsPeer }, b.ToArray());
            }
            finally
            {
                await a.StopAsync();
                await b.StopAsync();
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

            var a = new Swarm(
                new PrivateKey(),
                host: IPAddress.Loopback.ToString(),
                appProtocolVersion: 2,
                differentVersionPeerEncountered: GameHandler);
            var b = new Swarm(
                new PrivateKey(),
                host: IPAddress.Loopback.ToString(),
                appProtocolVersion: 3);

            BlockChain<DumbAction> chain = _blockchains[0];

            try
            {
                await StartAsync(a, chain);
                await StartAsync(b, chain);

                a.Add(b.AsPeer);

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
            Swarm swarm = _swarms[0];
            BlockChain<DumbAction> chain = _blockchains[0];
            var cts = new CancellationTokenSource();

            Task task = await StartAsync(
                swarm,
                chain,
                cancellationToken: cts.Token
            );

            cts.Cancel();
            await task;
        }

        [Fact(Timeout = Timeout)]
        public async Task CanGetBlock()
        {
            Swarm swarmA = _swarms[0];
            Swarm swarmB = _swarms[1];

            BlockChain<DumbAction> chainA = _blockchains[0];
            BlockChain<DumbAction> chainB = _blockchains[1];

            Block<DumbAction> genesis = chainA.MineBlock(_fx1.Address1);
            chainB.Append(genesis); // chainA and chainB shares genesis block.
            Block<DumbAction> block1 = chainA.MineBlock(_fx1.Address1);
            Block<DumbAction> block2 = chainA.MineBlock(_fx1.Address1);

            try
            {
                await StartAsync(swarmA, chainA);
                await StartAsync(swarmB, chainA);

                await Assert.ThrowsAsync<PeerNotFoundException>(
                    async () => await swarmB.GetBlockHashesAsync(
                        swarmA.AsPeer,
                        new BlockLocator(new[] { genesis.Hash }),
                        null));

                await swarmB.AddPeersAsync(new[] { swarmA.AsPeer });

                IEnumerable<HashDigest<SHA256>> inventories1 =
                    await swarmB.GetBlockHashesAsync(
                        swarmA.AsPeer,
                        new BlockLocator(new[] { genesis.Hash }),
                        null);
                Assert.Equal(
                    new[] { genesis.Hash, block1.Hash, block2.Hash },
                    inventories1);

                IEnumerable<HashDigest<SHA256>> inventories2 =
                    await swarmB.GetBlockHashesAsync(
                        swarmA.AsPeer,
                        new BlockLocator(new[] { genesis.Hash }),
                        block1.Hash);
                Assert.Equal(
                    new[] { genesis.Hash, block1.Hash },
                    inventories2);

                List<Block<DumbAction>> receivedBlocks =
                    await swarmB.GetBlocksAsync<DumbAction>(
                        swarmA.AsPeer, inventories1
                    ).ToListAsync();

                Assert.Equal(
                    new[] { genesis, block1, block2 },
                    receivedBlocks);
            }
            finally
            {
                await Task.WhenAll(
                    swarmA.StopAsync(),
                    swarmB.StopAsync());
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task GetTx()
        {
            Swarm swarmA = _swarms[0];
            Swarm swarmB = _swarms[1];

            BlockChain<DumbAction> chainA = _blockchains[0];
            BlockChain<DumbAction> chainB = _blockchains[1];

            Transaction<DumbAction> tx = Transaction<DumbAction>.Create(
                new PrivateKey(),
                new DumbAction[0]
            );
            chainB.StageTransactions(new[] { tx }.ToHashSet());
            chainB.MineBlock(_fx1.Address1);

            try
            {
                await StartAsync(swarmA, chainA);
                await StartAsync(swarmB, chainB);

                Assert.Throws<PeerNotFoundException>(
                    () => swarmB.GetTxsAsync<DumbAction>(
                        swarmA.AsPeer, new[] { tx.Id }));

                await swarmA.AddPeersAsync(new[] { swarmB.AsPeer });

                List<Transaction<DumbAction>> txs =
                    await swarmA.GetTxsAsync<DumbAction>(
                        swarmB.AsPeer, new[] { tx.Id }
                    ).ToListAsync();

                Assert.Equal(new[] { tx }, txs);
            }
            finally
            {
                await Task.WhenAll(
                    swarmA.StopAsync(),
                    swarmB.StopAsync());
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task BroadcastTx()
        {
            Swarm swarmA = _swarms[0];
            Swarm swarmB = _swarms[1];
            Swarm swarmC = _swarms[2];

            BlockChain<DumbAction> chainA = _blockchains[0];
            BlockChain<DumbAction> chainB = _blockchains[1];
            BlockChain<DumbAction> chainC = _blockchains[2];

            Transaction<DumbAction> tx = Transaction<DumbAction>.Create(
                new PrivateKey(),
                new DumbAction[] { }
            );

            chainA.StageTransactions(new[] { tx }.ToHashSet());
            chainA.MineBlock(_fx1.Address1);

            try
            {
                await StartAsync(swarmA, chainA);
                await StartAsync(swarmB, chainB);
                await StartAsync(swarmC, chainC);

                await swarmA.AddPeersAsync(new[] { swarmB.AsPeer });
                await swarmA.AddPeersAsync(new[] { swarmC.AsPeer });

                await EnsureExchange(swarmA, swarmB);
                await EnsureExchange(swarmA, swarmC);
                await EnsureExchange(swarmB, swarmC);

                swarmA.BroadcastTxs(new[] { tx });

                await swarmC.TxReceived.WaitAsync();
                await swarmB.TxReceived.WaitAsync();

                Assert.Equal(tx, chainB.Transactions[tx.Id]);
                Assert.Equal(tx, chainC.Transactions[tx.Id]);
            }
            finally
            {
                await Task.WhenAll(
                    swarmA.StopAsync(),
                    swarmB.StopAsync(),
                    swarmC.StopAsync());
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task CanBroadcastBlock()
        {
            Swarm swarmA = _swarms[0];
            Swarm swarmB = _swarms[1];
            Swarm swarmC = _swarms[2];

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
                await StartAsync(swarmA, chainA);
                await StartAsync(swarmB, chainB);
                await StartAsync(swarmC, chainC);

                await swarmA.AddPeersAsync(new[] { swarmB.AsPeer });
                await swarmA.AddPeersAsync(new[] { swarmC.AsPeer });

                await EnsureExchange(swarmA, swarmB);
                await EnsureExchange(swarmA, swarmC);
                await EnsureExchange(swarmB, swarmC);

                swarmB.BroadcastBlocks(new[] { chainB.Last() });

                await swarmC.BlockReceived.WaitAsync();
                await swarmA.BlockReceived.WaitAsync();

                Assert.Equal(chainB.AsEnumerable(), chainC);

                // chainB doesn't applied to chainA since chainB is shorter
                // than chainA
                Assert.NotEqual(chainB.AsEnumerable(), chainA);

                swarmA.BroadcastBlocks(new[] { chainA.Last() });

                await swarmB.BlockReceived.WaitAsync();
                await swarmC.BlockReceived.WaitAsync();

                Assert.Equal(chainA.AsEnumerable(), chainB);
                Assert.Equal(chainA.AsEnumerable(), chainC);
            }
            finally
            {
                await Task.WhenAll(
                    swarmA.StopAsync(),
                    swarmB.StopAsync(),
                    swarmC.StopAsync());
            }
        }

        [Fact(Timeout = Timeout)]
        public void ThrowArgumentExceptionInConstructor()
        {
            Assert.Throws<ArgumentNullException>(() =>
            {
                new Swarm(null, 1);
            });

            // Swarm needs host or iceServers.
            Assert.Throws<ArgumentException>(() =>
            {
                new Swarm(new PrivateKey(), 1);
            });

            // Swarm needs host or iceServers.
            Assert.Throws<ArgumentException>(() =>
            {
                new Swarm(
                    new PrivateKey(),
                    1,
                    iceServers: new IceServer[] { });
            });
        }

        [Fact(Timeout = Timeout)]
        public void CanResolveEndPoint()
        {
            var expected = new DnsEndPoint("1.2.3.4", 5678);
            Swarm s = new Swarm(
                new PrivateKey(),
                1,
                host: "1.2.3.4",
                listenPort: 5678);

            Assert.Equal(expected, s.EndPoint);
            Assert.Equal(expected, s.AsPeer.EndPoint);
        }

        [Fact(Timeout = Timeout)]
        public async Task CanStopGracefullyWhileStarting()
        {
            Swarm a = _swarms[0];
            Swarm b = _swarms[1];

            await StartAsync(b, _blockchains[1]);
            await a.AddPeersAsync(new[] { b.AsPeer });

            Task t = await StartAsync(a, _blockchains[0]);
            await Task.WhenAll(a.StopAsync(), t);
        }

        [Fact(Timeout = Timeout)]
        public async Task AsPeerThrowSwarmExceptionWhenUnbound()
        {
            Swarm swarm = new Swarm(
                new PrivateKey(),
                1,
                host: IPAddress.Loopback.ToString()
            );
            Assert.Throws<SwarmException>(() => swarm.AsPeer);

            await StartAsync(swarm, _blockchains[0]);
            Assert.Equal(swarm.EndPoint, swarm.AsPeer.EndPoint);
        }

        [Trait("RequireTurnServer", "true")]
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

            var seed = new Swarm(new PrivateKey(), 1, host: "localhost");
            var swarmA = new Swarm(new PrivateKey(), 1, iceServers: iceServers);
            var swarmB = new Swarm(new PrivateKey(), 1, iceServers: iceServers);

            try
            {
                await StartAsync(seed, _blockchains[0]);
                await StartAsync(swarmA, _blockchains[1]);
                await StartAsync(swarmB, _blockchains[2]);

                await swarmA.AddPeersAsync(new[] { seed.AsPeer });
                await swarmB.AddPeersAsync(new[] { seed.AsPeer });

                await EnsureExchange(swarmA, swarmB);

                Assert.Contains(swarmA.AsPeer, swarmB);
                Assert.Contains(swarmB.AsPeer, swarmA);
            }
            finally
            {
                await Task.WhenAll(
                    seed.StopAsync(),
                    swarmA.StopAsync(),
                    swarmB.StopAsync());
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task InitialBlockDownload()
        {
            Swarm minerSwarm = _swarms[0];
            Swarm receiverSwarm = _swarms[1];

            BlockChain<DumbAction> minerChain = _blockchains[0];
            BlockChain<DumbAction> receiverChain = _blockchains[1];

            foreach (int i in Enumerable.Range(0, 10))
            {
                minerChain.MineBlock(_fx1.Address1);
            }

            try
            {
                await StartAsync(minerSwarm, minerChain);
                receiverSwarm.Add(minerSwarm.AsPeer);

                await StartAsync(receiverSwarm, receiverChain);

                await Task.Delay(TimeSpan.FromSeconds(10));

                Assert.Equal(minerChain.AsEnumerable(), receiverChain.AsEnumerable());
            }
            finally
            {
                await Task.WhenAll(
                    minerSwarm.StopAsync(),
                    receiverSwarm.StopAsync());
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task Preload()
        {
            Swarm minerSwarm = _swarms[0];
            Swarm receiverSwarm = _swarms[1];

            BlockChain<DumbAction> minerChain = _blockchains[0];
            BlockChain<DumbAction> receiverChain = _blockchains[1];

            foreach (int i in Enumerable.Range(0, 10))
            {
                minerChain.MineBlock(_fx1.Address1);
            }

            var actualStates = new List<BlockDownloadState>();
            var progress = new Progress<BlockDownloadState>(state =>
            {
                lock (actualStates)
                {
                    actualStates.Add(state);
                }
            });

            try
            {
                await StartAsync(minerSwarm, minerChain);
                receiverSwarm.Add(minerSwarm.AsPeer);

                await receiverSwarm.PreloadAsync(receiverChain, progress);

                Assert.Equal(minerChain.AsEnumerable(), receiverChain.AsEnumerable());

                IEnumerable<BlockDownloadState> expectedStates = minerChain.Select((b, i) =>
                {
                    return new BlockDownloadState()
                    {
                        ReceivedBlockHash = b.Hash,
                        TotalBlockCount = 10,
                        ReceivedBlockCount = i + 1,
                    };
                });

                Assert.Equal(expectedStates, actualStates);
            }
            finally
            {
                await Task.WhenAll(
                    minerSwarm.StopAsync(),
                    receiverSwarm.StopAsync());
            }
        }

        private async Task<Task> StartAsync<T>(
            Swarm swarm,
            BlockChain<T> blockChain,
            CancellationToken cancellationToken = default
        )
            where T : IAction, new()
        {
            Task task = Task.Run(
                async () => await swarm.StartAsync(
                    blockChain,
                    200,
                    cancellationToken
                )
            );
            await swarm.WaitForRunningAsync();
            return task;
        }

        private async Task EnsureRecvAsync(Swarm swarm, Peer peer = null, DateTimeOffset? lastReceived = null)
        {
            Log.Debug($"Waiting to ensure recv... [{swarm.AsPeer}]");
            while (true)
            {
                await swarm.DeltaReceived.WaitAsync();

                DateTimeOffset? lastSeen = null;
                if (peer == null)
                {
                    lastSeen = swarm.LastReceived;
                }
                else
                {
                    if (swarm.LastSeenTimestamps.ContainsKey(peer))
                    {
                        lastSeen = swarm.LastSeenTimestamps[peer];
                    }
                    else
                    {
                        IEnumerable<KeyValuePair<Peer, DateTimeOffset>> pairs =
                            swarm.LastSeenTimestamps.ToArray();
                        foreach (KeyValuePair<Peer, DateTimeOffset> kv in pairs)
                        {
                            if (peer.PublicKey == kv.Key.PublicKey)
                            {
                                lastSeen = kv.Value;
                                break;
                            }
                        }
                    }
                }

                bool seenLater =
                    (lastReceived is null) || (lastSeen >= lastReceived);

                if (!(lastSeen is null) && seenLater)
                {
                    break;
                }
            }

            Log.Debug($"Received. [{swarm.AsPeer}]");
        }

        private async Task EnsureExchange(Swarm a, Swarm b)
        {
            await a.WaitForRunningAsync();
            await b.WaitForRunningAsync();

            Log.Debug($"Waiting for a[{a.AsPeer}] to distribute... ");
            await a.DeltaDistributed.WaitAsync();
            Log.Debug($"Waiting for b[{b.AsPeer}] to receive a[{a.AsPeer}]...");
            await EnsureRecvAsync(b, a.AsPeer);
            Log.Debug($"Waiting for b[{b.AsPeer}] to distribute...");
            await b.DeltaDistributed.WaitAsync();
            Log.Debug($"Waiting for a[{a.AsPeer}] to receive b[{b.AsPeer}]...");
            await EnsureRecvAsync(a, b.AsPeer);
        }
    }
}
