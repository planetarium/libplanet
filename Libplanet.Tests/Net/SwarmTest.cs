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

        private readonly FileStoreFixture _fx1;
        private readonly FileStoreFixture _fx2;
        private readonly FileStoreFixture _fx3;

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

            var policy = new BlockPolicy<DumbAction>(new MinerReward(1));
            _fx1 = new FileStoreFixture();
            _fx2 = new FileStoreFixture();
            _fx3 = new FileStoreFixture();

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
        }

        public void Dispose()
        {
            _fx1.Dispose();
            _fx2.Dispose();
            _fx3.Dispose();

            foreach (Swarm<DumbAction> s in _swarms)
            {
                s.StopAsync().Wait(DisposeTimeout);
            }

            NetMQConfig.Cleanup(false);
        }

        [Fact]
        public void BlockChain()
        {
            Assert.Same(_blockchains[0], _swarms[0].BlockChain);
            Assert.Same(_blockchains[1], _swarms[1].BlockChain);
            Assert.Same(_blockchains[2], _swarms[2].BlockChain);
        }

        [Fact(Timeout = Timeout)]
        public async Task CannotStartTwice()
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

            var minerCanceller = new CancellationTokenSource();
            Task miningA = CreateMiner(a, chainA, 5000, minerCanceller.Token);
            Task miningB = CreateMiner(b, chainB, 8000, minerCanceller.Token);

            try
            {
                await StartAsync(a);
                await StartAsync(b);

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
            BlockChain<DumbAction> chain = _blockchains[0];

            var a = new Swarm<DumbAction>(
                chain,
                new PrivateKey(),
                1,
                host: IPAddress.Loopback.ToString());
            var b = new Swarm<DumbAction>(
                chain,
                new PrivateKey(),
                1,
                host: IPAddress.Loopback.ToString());
            var c = new Swarm<DumbAction>(
                chain,
                new PrivateKey(),
                1,
                host: IPAddress.Loopback.ToString());

            DateTimeOffset lastDistA;
            Peer aAsPeer;

            try
            {
                try
                {
                    await StartAsync(a);
                    await StartAsync(b);
                    await StartAsync(c);

                    await b.AddPeersAsync(new[] { a.AsPeer });
                    await EnsureExchange(a, b);
                    Assert.Equal(
                        new[] { b.AsPeer }.ToImmutableHashSet(),
                        a.Peers.ToImmutableHashSet());
                    Assert.Equal(
                        new[] { a.AsPeer }.ToImmutableHashSet(),
                        b.Peers.ToImmutableHashSet());

                    await c.AddPeersAsync(new[] { a.AsPeer });
                    await EnsureExchange(a, c);
                    await EnsureExchange(a, b);

                    Assert.Equal(
                        new[] { b.AsPeer, c.AsPeer }.ToImmutableHashSet(),
                        a.Peers.ToImmutableHashSet()
                    );
                    Assert.Equal(
                        new[] { a.AsPeer, c.AsPeer }.ToImmutableHashSet(),
                        b.Peers.ToImmutableHashSet()
                    );
                    Assert.Equal(
                        new[] { a.AsPeer, b.AsPeer }.ToImmutableHashSet(),
                        c.Peers.ToImmutableHashSet()
                    );

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

                Assert.Equal(new[] { c.AsPeer }.ToImmutableHashSet(), b.Peers.ToImmutableHashSet());
                Assert.Equal(new[] { b.AsPeer }.ToImmutableHashSet(), c.Peers.ToImmutableHashSet());
            }
            finally
            {
                await b.StopAsync();
                await c.StopAsync();
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task DetectAppProtocolVersion()
        {
            BlockChain<DumbAction> chain = _blockchains[0];

            var a = new Swarm<DumbAction>(
                chain,
                new PrivateKey(),
                host: IPAddress.Loopback.ToString(),
                appProtocolVersion: 2);
            var b = new Swarm<DumbAction>(
                chain,
                new PrivateKey(),
                host: IPAddress.Loopback.ToString(),
                appProtocolVersion: 3);

            var c = new Swarm<DumbAction>(
                chain,
                new PrivateKey(),
                host: IPAddress.Loopback.ToString(),
                appProtocolVersion: 2);
            var d = new Swarm<DumbAction>(
                chain,
                new PrivateKey(),
                host: IPAddress.Loopback.ToString(),
                appProtocolVersion: 3);

            try
            {
                await StartAsync(a);
                await StartAsync(b);
                await StartAsync(c);
                await StartAsync(d);

                var peers = new[] { c.AsPeer, d.AsPeer };

                foreach (var peer in peers)
                {
                    await a.AddPeersAsync(new[] { peer });
                    await b.AddPeersAsync(new[] { peer });
                }

                Assert.Equal(new[] { c.AsPeer }, a.Peers.ToArray());
                Assert.Equal(new[] { d.AsPeer }, b.Peers.ToArray());
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

            BlockChain<DumbAction> chain = _blockchains[0];

            var a = new Swarm<DumbAction>(
                chain,
                new PrivateKey(),
                host: IPAddress.Loopback.ToString(),
                appProtocolVersion: 2,
                differentVersionPeerEncountered: GameHandler);
            var b = new Swarm<DumbAction>(
                chain,
                new PrivateKey(),
                host: IPAddress.Loopback.ToString(),
                appProtocolVersion: 3);

            try
            {
                await StartAsync(a);
                await StartAsync(b);

                await a.AddPeersAsync(new[] { b.AsPeer });

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
            await task;
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
                    await swarmB.GetBlocksAsync(
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

                var peer = swarmA.AsPeer;

                await swarmB.AddPeersAsync(new[] { peer });

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
                        request.ToNetMQMessage(privateKey));

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
                await Task.WhenAll(
                    swarmA.StopAsync(),
                    swarmB.StopAsync());
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task GetTx()
        {
            Swarm<DumbAction> swarmA = _swarms[0];
            Swarm<DumbAction> swarmB = _swarms[1];

            BlockChain<DumbAction> chainA = _blockchains[0];
            BlockChain<DumbAction> chainB = _blockchains[1];

            Transaction<DumbAction> tx = Transaction<DumbAction>.Create(
                0,
                new PrivateKey(),
                new DumbAction[0]
            );
            chainB.StageTransactions(
                new Dictionary<Transaction<DumbAction>, bool> { { tx, true } });
            chainB.MineBlock(_fx1.Address1);

            try
            {
                await StartAsync(swarmA);
                await StartAsync(swarmB);

                Assert.Throws<PeerNotFoundException>(
                    () => swarmB.GetTxsAsync(
                        swarmA.AsPeer, new[] { tx.Id }));

                await swarmA.AddPeersAsync(new[] { swarmB.AsPeer });

                List<Transaction<DumbAction>> txs =
                    await swarmA.GetTxsAsync(
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

            chainA.StageTransactions(
                new Dictionary<Transaction<DumbAction>, bool> { { tx, true } });
            chainA.MineBlock(_fx1.Address1);

            try
            {
                await StartAsync(swarmA);
                await StartAsync(swarmB);
                await StartAsync(swarmC);

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
        public async Task TxStagedNotToBroadcast()
        {
            Swarm<DumbAction> swarmA = _swarms[0];
            Swarm<DumbAction> swarmB = _swarms[1];

            BlockChain<DumbAction> chainA = _blockchains[0];
            BlockChain<DumbAction> chainB = _blockchains[1];

            Transaction<DumbAction> txA = chainA.MakeTransaction(
                new PrivateKey(),
                new DumbAction[] { },
                broadcast: true);
            Transaction<DumbAction> txB = chainA.MakeTransaction(
                new PrivateKey(),
                new DumbAction[] { },
                broadcast: false);

            try
            {
                await StartAsync(swarmA);
                await StartAsync(swarmB);

                await swarmA.AddPeersAsync(new[] { swarmB.AsPeer });
                await swarmB.TxReceived.WaitAsync();
                Assert.Equal(txA, chainB.Transactions[txA.Id]);
                Assert.False(chainB.Transactions.ContainsKey(txB.Id));
            }
            finally
            {
                await Task.WhenAll(
                    swarmA.StopAsync(),
                    swarmB.StopAsync());
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

            chainA.StageTransactions(
                new Dictionary<Transaction<DumbAction>, bool> { { tx, true } });

            try
            {
                await StartAsync(swarmA);
                await StartAsync(swarmB);
                await StartAsync(swarmC);

                // Broadcast tx swarmA to swarmB
                await swarmA.AddPeersAsync(new[] { swarmB.AsPeer });
                await swarmB.TxReceived.WaitAsync();
                Assert.Equal(tx, chainB.Transactions[tx.Id]);

                await swarmA.StopAsync();

                // Re-Broadcast received tx swarmB to swarmC
                await swarmB.AddPeersAsync(new[] { swarmC.AsPeer });
                await swarmC.TxReceived.WaitAsync();
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
            Assert.Equal(expected, s.AsPeer.EndPoint);
        }

        [Fact(Timeout = Timeout)]
        public async Task CanStopGracefullyWhileStarting()
        {
            Swarm<DumbAction> a = _swarms[0];
            Swarm<DumbAction> b = _swarms[1];

            await StartAsync(b);
            await a.AddPeersAsync(new[] { b.AsPeer });

            Task t = await StartAsync(a);
            await Task.WhenAll(a.StopAsync(), t);
        }

        [Fact(Timeout = Timeout)]
        public async Task AsPeerThrowSwarmExceptionWhenUnbound()
        {
            Swarm<DumbAction> swarm = new Swarm<DumbAction>(
                _blockchains[0],
                new PrivateKey(),
                1,
                host: IPAddress.Loopback.ToString()
            );
            Assert.Throws<SwarmException>(() => swarm.AsPeer);

            await StartAsync(swarm);
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

                await swarmA.AddPeersAsync(new[] { seed.AsPeer });
                await swarmB.AddPeersAsync(new[] { seed.AsPeer });

                await EnsureExchange(swarmA, swarmB);

                Assert.Contains(swarmA.AsPeer, swarmB.Peers);
                Assert.Contains(swarmB.AsPeer, swarmA.Peers);
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
                await receiverSwarm.AddPeersAsync(new[] { minerSwarm.AsPeer });

                await receiverSwarm.PreloadAsync();

                Assert.Equal(minerChain.AsEnumerable(), receiverChain.AsEnumerable());
            }
            finally
            {
                await minerSwarm.StopAsync();
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
                await receiverSwarm.AddPeersAsync(new[] { minerSwarm.AsPeer });

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
                await receiverSwarm.AddPeersAsync(new[] { minerSwarm.AsPeer });

                minerChain.FindNextHashesChunkSize = 2;
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

                Assert.Equal(expectedStates, actualStates);
            }
            finally
            {
                await Task.WhenAll(
                    minerSwarm.StopAsync(),
                    receiverSwarm.StopAsync());
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

            for (int i = 0; i < 2; i++)
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

                if (i < 1)
                {
                    deepBlockHash = block?.Hash;
                }
            }

            Assert.NotNull(deepBlockHash);

            try
            {
                await StartAsync(minerSwarm);
                await receiverSwarm.AddPeersAsync(new[] { minerSwarm.AsPeer });

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
                            $"({chainType}) Item0.{i},Item1.{i}",
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
                        Assert.Equal($"Item0.{i}", deepStates[target]);
                    }

                    i++;
                }

                foreach (BlockChain<DumbAction> chain in new[] { minerChain, receiverChain })
                {
                    var minerState = chain.GetStates(
                        new[] { minerSwarm.Address },
                        completeStates: false);
                    Assert.Single(minerState);
                    Assert.Equal(20, minerState[minerSwarm.Address]);
                }
            }
            finally
            {
                await minerSwarm.StopAsync();
                DumbAction.RenderRecords.Value = ImmutableList<RenderRecord>.Empty;
                MinerReward.RenderRecords.Value = ImmutableList<RenderRecord>.Empty;
            }
        }

        [Fact]
        public async Task PreloadAsyncCancellation()
        {
            Swarm<DumbAction> minerSwarm = _swarms[0];
            Swarm<DumbAction> receiverSwarm = _swarms[1];

            BlockChain<DumbAction> minerChain = _blockchains[0];
            BlockChain<DumbAction> receiverChain = _blockchains[1];

            var signer = new PrivateKey();
            Address address = signer.PublicKey.ToAddress();
            for (int i = 0; i < 10; i++)
            {
                for (int j = 0; j < 10; j++)
                {
                    minerChain.MakeTransaction(
                        signer,
                        new[] { new DumbAction(address, $"Item{i}.{j}") }
                    );
                }

                minerChain.MineBlock(minerSwarm.Address);
            }

            await StartAsync(minerSwarm);
            await receiverSwarm.AddPeersAsync(new[] { minerSwarm.AsPeer });

            CancellationTokenSource cts = new CancellationTokenSource();
            cts.CancelAfter(1000);
            try
            {
                await receiverSwarm.PreloadAsync(
                    trustedStateValidators: new[] { minerSwarm.Address }.ToImmutableHashSet(),
                    cancellationToken: cts.Token
                );
            }
            catch (TaskCanceledException)
            {
            }

            cts.Dispose();

            Assert.Null(receiverChain.Tip);
            Assert.Null(receiverChain.GetStates(new[] { address }).GetValueOrDefault(address));
        }

        private async Task<Task> StartAsync(
            Swarm<DumbAction> swarm,
            CancellationToken cancellationToken = default
        )
        {
            Task task = swarm.StartAsync(
                200,
                200,
                cancellationToken
            );
            await swarm.WaitForRunningAsync();
            return task;
        }

        private async Task EnsureRecvAsync(
            Swarm<DumbAction> swarm,
            Peer peer = null,
            DateTimeOffset? lastReceived = null)
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

        private async Task EnsureExchange(Swarm<DumbAction> a, Swarm<DumbAction> b)
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
