#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Sockets;
using System.Threading;
using System.Threading.Tasks;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blockchain.Renderers.Debug;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Net.Messages;
using Libplanet.Net.Protocols;
using Libplanet.Net.Transports;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Stun;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Store;
using Libplanet.Tx;
using Serilog;
using xRetry;
using Xunit;
using Xunit.Abstractions;
#if NETFRAMEWORK && (NET47 || NET471)
using static Libplanet.Tests.HashSetExtensions;
#endif
using static Libplanet.Tests.TestUtils;

namespace Libplanet.Net.Tests
{
    [Collection("NetMQConfiguration")]
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

            _logger = Log.ForContext<SwarmTest>();
            _output = output;

            _finalizers = new List<Func<Task>>();
        }

        public void Dispose()
        {
            Log.Logger.Debug("Starts to finalize {Resources} resources...", _finalizers.Count);
            int i = 1;
            foreach (Func<Task> finalize in _finalizers)
            {
                Log.Logger.Debug("Tries to finalize the resource #{Resource}...", i++);
                finalize().Wait(DisposeTimeout);
            }

            Log.Logger.Debug("Finished to finalize {Resources} resources.", _finalizers.Count);
        }

        [Fact(Timeout = Timeout)]
        public async Task CanNotStartTwice()
        {
            Swarm<DumbAction> swarm = CreateSwarm();

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
            Swarm<DumbAction> seed = CreateSwarm();

            var privateKey = new PrivateKey();
            Swarm<DumbAction> swarmA = CreateSwarm(privateKey: privateKey);
            Swarm<DumbAction> swarmB = CreateSwarm(privateKey: privateKey);

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
        public async Task RunConsensusReactorIfOptionGiven()
        {
            Swarm<DumbAction> swarmA = CreateSwarm();
            Swarm<DumbAction> swarmB = CreateConsensusSwarm();

            await StartAsync(swarmA);
            await StartAsync(swarmB);

            Assert.True(swarmA.Running);
            Assert.True(swarmB.Running);
            Assert.False(swarmA.ConsensusRunning);
            Assert.True(swarmB.ConsensusRunning);

            await StopAsync(swarmA);
            await StopAsync(swarmB);
        }

        [Fact(Timeout = Timeout)]
        public async Task StopAsyncTest()
        {
            Swarm<DumbAction> swarm = CreateSwarm();

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
            Swarm<DumbAction> swarm = CreateSwarm();

            Assert.False(swarm.Running);

            Task consumerTask = Task.Run(
                async () =>
                {
                    await swarm.WaitForRunningAsync();
                    Assert.True(swarm.Running);
                }
            );

            Task producerTask = Task.Run(async () => { await swarm.StartAsync(); });

            await consumerTask;
            Assert.True(swarm.Running);

            await StopAsync(swarm);
            Assert.False(swarm.Running);
        }

        [Fact(Timeout = Timeout)]
        public async Task AddPeersWithoutStart()
        {
            Swarm<DumbAction> a = CreateSwarm();
            Swarm<DumbAction> b = CreateSwarm();

            try
            {
                await StartAsync(b);

                await a.AddPeersAsync(new BoundPeer[] { b.AsPeer }, null);

                Assert.Contains(b.AsPeer, a.Peers);
                Assert.Contains(a.AsPeer, b.Peers);
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
            Swarm<DumbAction> a = CreateSwarm();
            Swarm<DumbAction> b = CreateSwarm();

            try
            {
                await StartAsync(a);
                await StartAsync(b);

                await a.AddPeersAsync(new BoundPeer[] { b.AsPeer }, null);

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
            Swarm<DumbAction> swarmA = CreateSwarm();
            Swarm<DumbAction> swarmB = CreateSwarm();

            try
            {
                await Assert.ThrowsAsync<PeerDiscoveryException>(
                    () => swarmB.BootstrapAsync(
                        new[] { swarmA.AsPeer },
                        TimeSpan.FromMilliseconds(3000),
                        Kademlia.MaxDepth));

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
            Swarm<DumbAction> swarmA = CreateSwarm();
            Swarm<DumbAction> swarmB = CreateSwarm();
            Swarm<DumbAction> swarmC = CreateSwarm();
            Swarm<DumbAction> swarmD = CreateSwarm();

            try
            {
                await StartAsync(swarmA);
                await StartAsync(swarmB);
                await StartAsync(swarmD);

                var bootstrappedAt = DateTimeOffset.UtcNow;
                swarmC.RoutingTable.AddPeer(swarmD.AsPeer);
                await BootstrapAsync(swarmB, swarmA.AsPeer);
                await BootstrapAsync(swarmC, swarmA.AsPeer);

                Assert.Contains(swarmB.AsPeer, swarmC.Peers);
                Assert.Contains(swarmC.AsPeer, swarmB.Peers);
                foreach (PeerState state in swarmB.RoutingTable.PeerStates)
                {
                    Assert.InRange(state.LastUpdated, bootstrappedAt, DateTimeOffset.UtcNow);
                }

                foreach (PeerState state in swarmC.RoutingTable.PeerStates)
                {
                    if (state.Peer.Address == swarmD.AsPeer.Address)
                    {
                        // Peers added before bootstrap should not be marked as stale.
                        Assert.InRange(state.LastUpdated, bootstrappedAt, DateTimeOffset.UtcNow);
                    }
                    else
                    {
                        Assert.Equal(DateTimeOffset.MinValue, state.LastUpdated);
                    }
                }
            }
            finally
            {
                await StopAsync(swarmA);
                await StopAsync(swarmB);
                await StopAsync(swarmC);
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task Cancel()
        {
            Swarm<DumbAction> swarm = CreateSwarm();
            var cts = new CancellationTokenSource();

            Task task = await StartAsync(
                swarm,
                cancellationToken: cts.Token
            );

            await Task.Delay(100);
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
            var keyA = new PrivateKey();
            var policy = new BlockPolicy<DumbAction>(new MinerReward(1));
            Block<DumbAction> genesis = BlockChain<DumbAction>.ProposeGenesisBlock(
                privateKey: new PrivateKey(), blockAction: policy.BlockAction);

            Swarm<DumbAction> swarmA = CreateSwarm(keyA, genesis: genesis, policy: policy);
            Swarm<DumbAction> swarmB = CreateSwarm(genesis: genesis, policy: policy);

            BlockChain<DumbAction> chainA = swarmA.BlockChain;
            BlockChain<DumbAction> chainB = swarmB.BlockChain;

            Block<DumbAction> block1 = chainA.ProposeBlock(keyA);
            chainA.Append(block1, TestUtils.CreateBlockCommit(block1));
            Block<DumbAction> block2 = chainA.ProposeBlock(
                keyA, lastCommit: CreateBlockCommit(block1));
            chainA.Append(block2, TestUtils.CreateBlockCommit(block2));

            try
            {
                await StartAsync(swarmA);
                await StartAsync(swarmB);

                await swarmA.AddPeersAsync(new[] { swarmB.AsPeer }, null);

                (long, BlockHash)[] inventories1 = (
                    await swarmB.GetBlockHashes(
                        swarmA.AsPeer,
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

                (long, BlockHash)[] inventories2 = (
                    await swarmB.GetBlockHashes(
                        swarmA.AsPeer,
                        new BlockLocator(new[] { genesis.Hash }),
                        block1.Hash
                    ).ToArrayAsync()
                ).Select(p => p.ToValueTuple()).ToArray();
                Assert.Equal(
                    new[] { (genesis.Index, genesis.Hash), (block1.Index, block1.Hash) },
                    inventories2);

                (Block<DumbAction>, BlockCommit)[] receivedBlocks =
                    await swarmB.GetBlocksAsync(
                        swarmA.AsPeer,
                        inventories1.Select(pair => pair.Item2),
                        cancellationToken: default
                    ).ToArrayAsync();
                Assert.Equal(
                    new[] { genesis, block1, block2 }, receivedBlocks.Select(pair => pair.Item1));
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
            var keyA = new PrivateKey();
            var keyB = new PrivateKey();

            var policy = new BlockPolicy<DumbAction>(new MinerReward(1));
            Block<DumbAction> genesis = BlockChain<DumbAction>.ProposeGenesisBlock(
                privateKey: new PrivateKey(), blockAction: policy.BlockAction);
            Swarm<DumbAction> swarmA = CreateSwarm(keyA, genesis: genesis, policy: policy);
            Swarm<DumbAction> swarmB = CreateSwarm(keyB, genesis: genesis, policy: policy);

            BlockChain<DumbAction> chainA = swarmA.BlockChain;
            BlockChain<DumbAction> chainB = swarmB.BlockChain;

            Block<DumbAction> block1 = chainA.ProposeBlock(
                keyA, lastCommit: CreateBlockCommit(chainA.Tip));
            chainA.Append(block1, TestUtils.CreateBlockCommit(block1));
            Block<DumbAction> block2 = chainA.ProposeBlock(
                keyA, lastCommit: CreateBlockCommit(chainA.Tip));
            chainA.Append(block2, TestUtils.CreateBlockCommit(block2));

            try
            {
                await StartAsync(swarmA);
                await StartAsync(swarmB);

                var peer = swarmA.AsPeer;

                await swarmB.AddPeersAsync(new[] { peer }, null);

                Tuple<long, BlockHash>[] hashes = await swarmB.GetBlockHashes(
                    peer,
                    new BlockLocator(new[] { genesis.Hash }),
                    null
                ).ToArrayAsync();

                ITransport transport = swarmB.Transport;

                var request = new GetBlocksMsg(hashes.Select(pair => pair.Item2), 2);
                Message[] responses = (await transport.SendMessageAsync(
                    swarmA.AsPeer,
                    request,
                    null,
                    2,
                    false,
                    default)).ToArray();
                var blockMessage = (Libplanet.Net.Messages.BlocksMsg)responses[0];

                Assert.Equal(2, responses.Length);
                Assert.Equal(4, blockMessage.Payloads.Count);

                blockMessage = (Libplanet.Net.Messages.BlocksMsg)responses[1];

                Assert.Equal(2, blockMessage.Payloads.Count);
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
            var keyB = new PrivateKey();

            var policy = new BlockPolicy<DumbAction>(new MinerReward(1));
            Block<DumbAction> genesis = BlockChain<DumbAction>.ProposeGenesisBlock(
                privateKey: new PrivateKey(), blockAction: policy.BlockAction);
            Swarm<DumbAction> swarmA = CreateSwarm(genesis: genesis, policy: policy);
            Swarm<DumbAction> swarmB = CreateSwarm(keyB, genesis: genesis, policy: policy);
            BlockChain<DumbAction> chainB = swarmB.BlockChain;

            Transaction<DumbAction> tx = Transaction<DumbAction>.Create(
                0,
                new PrivateKey(),
                chainB.Genesis.Hash,
                new DumbAction[0]
            );
            chainB.StageTransaction(tx);
            Block<DumbAction> block = chainB.ProposeBlock(keyB);
            chainB.Append(block, TestUtils.CreateBlockCommit(block));

            try
            {
                await StartAsync(swarmA);
                await StartAsync(swarmB);

                await swarmA.AddPeersAsync(new[] { swarmB.AsPeer }, null);

                List<Transaction<DumbAction>> txs =
                    await swarmA.GetTxsAsync(
                        swarmB.AsPeer,
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
        public void ThrowArgumentExceptionInConstructor()
        {
            var fx = new MemoryStoreFixture();
            var policy = new BlockPolicy<DumbAction>();
            var blockchain = MakeBlockChain(policy, fx.Store, fx.StateStore);
            var key = new PrivateKey();
            var consensusPrivateKey = new PrivateKey();
            AppProtocolVersion ver = AppProtocolVersion.Sign(key, 1);
            // TODO: Check Consensus Parameters.
            Assert.Throws<ArgumentNullException>(() =>
            {
                new Swarm<DumbAction>(
                    null,
                    key,
                    ver);
            });

            Assert.Throws<ArgumentNullException>(() =>
            {
                new Swarm<DumbAction>(
                    blockchain,
                    null,
                    ver);
            });

            // Swarm<DumbAction> needs host or iceServers.
            Assert.Throws<ArgumentException>(() =>
            {
                new Swarm<DumbAction>(
                    blockchain,
                    key,
                    ver);
            });

            // Swarm<DumbAction> needs host or iceServers.
            Assert.Throws<ArgumentException>(() =>
            {
                new Swarm<DumbAction>(
                    blockchain,
                    key,
                    ver,
                    iceServers: new IceServer[] { });
            });
        }

        [Fact(Timeout = Timeout)]
        public void CanResolveEndPoint()
        {
            var expected = new DnsEndPoint("1.2.3.4", 5678);
            using (Swarm<DumbAction> s = CreateSwarm(host: "1.2.3.4", listenPort: 5678))
            {
                Assert.Equal(expected, s.EndPoint);
                Assert.Equal(expected, s.AsPeer?.EndPoint);
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task StopGracefullyWhileStarting()
        {
            Swarm<DumbAction> a = CreateSwarm();

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
            Swarm<DumbAction> swarm = CreateSwarm();
            Assert.IsType<BoundPeer>(swarm.AsPeer);

            await StartAsync(swarm);
            Assert.IsType<BoundPeer>(swarm.AsPeer);
            await StopAsync(swarm);
        }

        [FactOnlyTurnAvailable(Timeout = Timeout)]
        public async Task ExchangeWithIceServer()
        {
            var iceServers = FactOnlyTurnAvailableAttribute.GetIceServers();
            var seed = CreateSwarm(host: "localhost");
            var swarmA = CreateSwarm(iceServers: iceServers);
            var swarmB = CreateSwarm(iceServers: iceServers);

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
                        swarmA.AsPeer,
                        swarmB.AsPeer,
                    },
                    seed.Peers.ToHashSet());
                Assert.Equal(
                    new HashSet<BoundPeer> { seed.AsPeer, swarmB.AsPeer },
                    swarmA.Peers.ToHashSet());
                Assert.Equal(
                    new HashSet<BoundPeer> { seed.AsPeer, swarmA.AsPeer },
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

        [FactOnlyTurnAvailable(10, 5000, Timeout = Timeout)]
        public async Task ReconnectToTurn()
        {
            int port;
            using (var socket = new Socket(SocketType.Stream, ProtocolType.Tcp))
            {
                socket.Bind(new IPEndPoint(IPAddress.Loopback, 0));
                port = ((IPEndPoint)socket.LocalEndPoint).Port;
            }

            Uri turnUrl = FactOnlyTurnAvailableAttribute.GetTurnUri();
            string[] userInfo = turnUrl.UserInfo.Split(':');
            string username = userInfo[0];
            string password = userInfo[1];
            var proxyUri = new Uri($"turn://{username}:{password}@localhost:{port}/");

            IEnumerable<IceServer> iceServers = new[]
            {
                new IceServer(url: proxyUri),
            };

            var cts = new CancellationTokenSource();
            var proxyTask = TurnProxy(port, turnUrl, cts.Token);

            var seedKey = new PrivateKey();
            var seed = CreateSwarm(seedKey, host: "localhost");
            var swarmA = CreateSwarm(iceServers: iceServers);

            async Task RefreshTableAsync(CancellationToken cancellationToken)
            {
                while (!cancellationToken.IsCancellationRequested)
                {
                    await Task.Delay(1000, cancellationToken);
                    try
                    {
                        await swarmA.PeerDiscovery.RefreshTableAsync(
                            TimeSpan.FromSeconds(1), cancellationToken);
                    }
                    catch (InvalidOperationException)
                    {
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
                    var block = seed.BlockChain.ProposeBlock(seedKey);
                    seed.BlockChain.Append(block, TestUtils.CreateBlockCommit(block));
                    seed.BroadcastBlock(block);
                    await Task.Delay(1000, cancellationToken);
                }
            }

            try
            {
                await StartAsync(seed);
                await StartAsync(swarmA);

                await swarmA.AddPeersAsync(new[] { seed.AsPeer }, null);

                cts.Cancel();
                await proxyTask;
                cts = new CancellationTokenSource();

                proxyTask = TurnProxy(port, turnUrl, cts.Token);
                _ = RefreshTableAsync(cts.Token);
                _ = MineAndBroadcast(cts.Token);

                await swarmA.BlockReceived.WaitAsync();
                cts.Cancel();
                await Task.Delay(1000);

                Assert.NotEqual(swarmA.BlockChain.Genesis, swarmA.BlockChain.Tip);
                Assert.Contains(
                    swarmA.BlockChain.Tip.Hash,
                    seed.BlockChain.BlockHashes
                );
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
        public async Task RenderInFork()
        {
            var policy = new BlockPolicy<DumbAction>(new MinerReward(1));
            var renderer = new RecordingActionRenderer<DumbAction>();
            var chain = MakeBlockChain(
                policy,
                new MemoryStore(),
                new TrieStateStore(new MemoryKeyValueStore()),
                renderers: new[] { renderer }
            );

            var key1 = new PrivateKey();
            var key2 = new PrivateKey();

            var miner1 = CreateSwarm(chain, key1);
            var miner2 = CreateSwarm(
                MakeBlockChain(
                    policy,
                    new MemoryStore(),
                    new TrieStateStore(new MemoryKeyValueStore())
                ),
                key2
            );

            int renderCount = 0;

            var privKey = new PrivateKey();
            var addr = miner1.Address;
            var item = "foo";

            miner1.BlockChain.MakeTransaction(privKey, new[] { new DumbAction(addr, item) });
            Block<DumbAction> block1 = miner1.BlockChain.ProposeBlock(
                key1, lastCommit: CreateBlockCommit(miner1.BlockChain.Tip));
            miner1.BlockChain.Append(block1, TestUtils.CreateBlockCommit(block1));

            miner2.BlockChain.MakeTransaction(privKey, new[] { new DumbAction(addr, item) });
            Block<DumbAction> block2 = miner2.BlockChain.ProposeBlock(
                key2, lastCommit: CreateBlockCommit(miner2.BlockChain.Tip));
            miner2.BlockChain.Append(block2, TestUtils.CreateBlockCommit(block2));

            miner2.BlockChain.MakeTransaction(privKey, new[] { new DumbAction(addr, item) });
            var latest = miner2.BlockChain.ProposeBlock(
                key2, lastCommit: CreateBlockCommit(miner2.BlockChain.Tip));
            miner2.BlockChain.Append(latest, TestUtils.CreateBlockCommit(latest));

            renderer.RenderEventHandler += (_, a) =>
                renderCount += a is DumbAction ? 1 : 0;

            await StartAsync(miner1);
            await StartAsync(miner2);

            await BootstrapAsync(miner2, miner1.AsPeer);

            miner2.BroadcastBlock(latest);

            await miner1.BlockReceived.WaitAsync();
            await miner1.BlockAppended.WaitAsync();

            Assert.Equal(miner1.BlockChain.Tip, miner2.BlockChain.Tip);
            Assert.Equal(miner1.BlockChain.Count, miner2.BlockChain.Count);
            Assert.Equal(2, renderCount);
        }

        [Fact(Skip = "This should be fixed to work deterministically.")]
        public async Task HandleReorgInSynchronizing()
        {
            var policy = new BlockPolicy<Sleep>(new MinerReward(1));

            Swarm<Sleep> MakeSwarm(PrivateKey key = null) =>
                CreateSwarm(
                    MakeBlockChain(
                        policy,
                        new MemoryStore(),
                        new TrieStateStore(new MemoryKeyValueStore())
                    ),
                    key
                );

            var key1 = new PrivateKey();
            var key2 = new PrivateKey();

            var miner1 = MakeSwarm(key1);
            var miner2 = MakeSwarm(key2);
            var receiver = MakeSwarm();

            foreach (var i in Enumerable.Range(0, 8))
            {
                miner1.BlockChain.StageTransaction(
                    Transaction<Sleep>.Create(
                        0,
                        new PrivateKey(),
                        miner1.BlockChain.Genesis.Hash,
                        customActions: new[] { new Sleep() }
                    )
                );
                var b = miner1.BlockChain.ProposeBlock(
                    key1,
                    lastCommit: CreateBlockCommit(
                        miner1.BlockChain.Tip.Hash,
                        miner1.BlockChain.Tip.Index,
                        0));
                miner1.BlockChain.Append(b, TestUtils.CreateBlockCommit(b));
                miner2.BlockChain.Append(b, TestUtils.CreateBlockCommit(b));
            }

            try
            {
                await StartAsync(miner1);
                await StartAsync(miner2);

                await BootstrapAsync(miner2, miner1.AsPeer);
                await BootstrapAsync(receiver, miner1.AsPeer);

                var t = receiver.PreloadAsync();
                Block<Sleep> block1 = miner1.BlockChain.ProposeBlock(key1);
                miner1.BlockChain.Append(block1, TestUtils.CreateBlockCommit(block1));
                Block<Sleep> block2 = miner2.BlockChain.ProposeBlock(key1);
                miner2.BlockChain.Append(block2, TestUtils.CreateBlockCommit(block2));
                Block<Sleep> latest = miner2.BlockChain.ProposeBlock(key2);
                miner2.BlockChain.Append(latest, TestUtils.CreateBlockCommit(latest));
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
            var keyA = new PrivateKey();
            var keyB = new PrivateKey();

            var minerA = CreateSwarm(keyA);
            var minerB = CreateSwarm(keyB);

            var privateKeyA = new PrivateKey();
            var privateKeyB = new PrivateKey();

            var targetAddress1 = new PrivateKey().ToAddress();
            var targetAddress2 = new PrivateKey().ToAddress();

            try
            {
                const string dumbItem = "item0.0";
                var txA = minerA.BlockChain.MakeTransaction(
                    privateKeyA,
                    new[] { new DumbAction(targetAddress1, dumbItem), });
                var txB = minerB.BlockChain.MakeTransaction(
                    privateKeyB,
                    new[] { new DumbAction(targetAddress2, dumbItem), });

                if (!restage)
                {
                    minerB.BlockChain.StageTransaction(txA);
                }

                Log.Debug("Make minerB's chain longer than minerA's chain.");
                Block<DumbAction> blockA = minerA.BlockChain.ProposeBlock(
                    keyA, lastCommit: CreateBlockCommit(minerA.BlockChain.Tip));
                minerA.BlockChain.Append(blockA, TestUtils.CreateBlockCommit(blockA));
                Block<DumbAction> blockB = minerB.BlockChain.ProposeBlock(
                    keyB, lastCommit: CreateBlockCommit(minerB.BlockChain.Tip));
                minerB.BlockChain.Append(blockB, TestUtils.CreateBlockCommit(blockB));
                Block<DumbAction> blockC = minerB.BlockChain.ProposeBlock(
                    keyB, lastCommit: CreateBlockCommit(minerB.BlockChain.Tip));
                minerB.BlockChain.Append(blockC, TestUtils.CreateBlockCommit(blockC));

                Assert.Equal((Text)dumbItem, minerA.BlockChain.GetState(targetAddress1));
                Assert.Equal((Text)dumbItem, minerB.BlockChain.GetState(targetAddress2));

                await StartAsync(minerA);
                await StartAsync(minerB);

                await BootstrapAsync(minerA, minerB.AsPeer);

                Log.Debug("Reorg occurs.");
                minerB.BroadcastBlock(blockC);
                await minerA.BlockAppended.WaitAsync();

                Assert.Equal(minerA.BlockChain.Tip, minerB.BlockChain.Tip);
                Assert.Equal(3, minerA.BlockChain.Count);
                Assert.Equal(
                    restage ? null : (Text?)dumbItem,
                    minerA.BlockChain.GetState(targetAddress1));
                Assert.Equal((Text)dumbItem, minerA.BlockChain.GetState(targetAddress2));

                Log.Debug("Check if txs in unrendered blocks staged again.");
                Assert.Equal(
                    restage,
                    minerA.BlockChain.GetStagedTransactionIds().Contains(txA.Id));

                Block<DumbAction> block = minerA.BlockChain.ProposeBlock(
                    keyA, lastCommit: CreateBlockCommit(minerA.BlockChain.Tip));
                minerA.BlockChain.Append(block, TestUtils.CreateBlockCommit(block));
                minerA.BroadcastBlock(minerA.BlockChain.Tip);
                await minerB.BlockAppended.WaitAsync();

                Assert.Equal(minerA.BlockChain.Tip, minerB.BlockChain.Tip);
                Assert.Equal((Text)dumbItem, minerA.BlockChain.GetState(targetAddress1));
                Assert.Equal((Text)dumbItem, minerA.BlockChain.GetState(targetAddress2));
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

            TxPolicyViolationException IsSignerValid(
                BlockChain<DumbAction> chain, Transaction<DumbAction> tx)
            {
                var validAddress = validKey.PublicKey.ToAddress();
                return tx.Signer.Equals(validAddress)
                    ? null
                    : new TxPolicyViolationException("invalid signer", tx.Id);
            }

            var policy = new BlockPolicy<DumbAction>(validateNextBlockTx: IsSignerValid);
            var fx1 = new MemoryStoreFixture();
            var fx2 = new MemoryStoreFixture();

            var swarmA = CreateSwarm(
                MakeBlockChain(policy, fx1.Store, fx1.StateStore, privateKey: validKey));
            var swarmB = CreateSwarm(
                MakeBlockChain(policy, fx2.Store, fx2.StateStore, privateKey: validKey));

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
                Assert.Throws<KeyNotFoundException>(
                    () => swarmB.BlockChain.GetTransaction(invalidTx.Id)
                );

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

        [RetryFact(Timeout = Timeout)]
        public async Task IgnoreTransactionFromDifferentGenesis()
        {
            var validKey = new PrivateKey();

            TxPolicyViolationException IsSignerValid(
                BlockChain<DumbAction> chain, Transaction<DumbAction> tx)
            {
                var validAddress = validKey.PublicKey.ToAddress();
                return tx.Signer.Equals(validAddress)
                    ? null
                    : new TxPolicyViolationException("invalid signer", tx.Id);
            }

            var policy = new BlockPolicy<DumbAction>(validateNextBlockTx: IsSignerValid);
            var fx1 = new MemoryStoreFixture();
            var fx2 = new MemoryStoreFixture();

            var swarmA = CreateSwarm(
                MakeBlockChain(
                    policy,
                    fx1.Store,
                    fx1.StateStore,
                    privateKey: validKey,
                    timestamp: DateTimeOffset.MinValue));
            var swarmB = CreateSwarm(
                MakeBlockChain(
                    policy,
                    fx2.Store,
                    fx2.StateStore,
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

        // NOTE: Possibly not a valid test scenario.
        [Fact(Timeout = Timeout)]
        public async Task CreateNewChainWhenBranchPointNotExist()
        {
            // If the bucket stored peers are the same, the block may not propagate,
            // so specify private keys to make the buckets different.
            PrivateKey keyA = PrivateKey.FromString(
                "8568eb6f287afedece2c7b918471183db0451e1a61535bb0381cfdf95b85df20");
            PrivateKey keyB = PrivateKey.FromString(
                "c34f7498befcc39a14f03b37833f6c7bb78310f1243616524eda70e078b8313c");
            PrivateKey keyC = PrivateKey.FromString(
                "941bc2edfab840d79914d80fe3b30840628ac37a5d812d7f922b5d2405a223d3");

            var policy = new NullBlockPolicy<DumbAction>();
            var policyA = new NullBlockPolicy<DumbAction>();
            var policyB = new NullBlockPolicy<DumbAction>();
            Block<DumbAction> genesis = ProposeGenesisBlock<DumbAction>(
                keyC,
                stateRootHash: MerkleTrie.EmptyRootHash);
            Block<DumbAction> aBlock1 = ProposeNextBlock(
                genesis,
                keyA,
                stateRootHash: MerkleTrie.EmptyRootHash);
            Block<DumbAction> aBlock2 = ProposeNextBlock(
                aBlock1,
                keyA,
                stateRootHash: MerkleTrie.EmptyRootHash,
                lastCommit: CreateBlockCommit(aBlock1));
            Block<DumbAction> aBlock3 = ProposeNextBlock(
                aBlock2,
                keyA,
                stateRootHash: MerkleTrie.EmptyRootHash,
                lastCommit: CreateBlockCommit(aBlock2));
            Block<DumbAction> bBlock1 = ProposeNextBlock(
                genesis,
                keyB,
                stateRootHash: MerkleTrie.EmptyRootHash);
            Block<DumbAction> bBlock2 = ProposeNextBlock(
                bBlock1,
                keyB,
                stateRootHash: MerkleTrie.EmptyRootHash,
                lastCommit: CreateBlockCommit(bBlock1));

            policyA.BlockedMiners.Add(keyB.ToAddress());
            policyB.BlockedMiners.Add(keyA.ToAddress());

            var minerSwarmA = CreateSwarm(keyA, policy: policyA, genesis: genesis);
            var minerSwarmB = CreateSwarm(keyB, policy: policyB, genesis: genesis);
            var receiverSwarm = CreateSwarm(keyC, policy: policy, genesis: genesis);

            BlockChain<DumbAction> minerChainA = minerSwarmA.BlockChain;
            BlockChain<DumbAction> minerChainB = minerSwarmB.BlockChain;
            BlockChain<DumbAction> receiverChain = receiverSwarm.BlockChain;

            try
            {
                await StartAsync(minerSwarmA, 5000);
                await StartAsync(minerSwarmB, 5000);
                await StartAsync(receiverSwarm);

                await BootstrapAsync(minerSwarmA, receiverSwarm.AsPeer);
                await BootstrapAsync(minerSwarmB, receiverSwarm.AsPeer);

                // Broadcast SwarmA's first block.
                minerChainA.Append(aBlock1, TestUtils.CreateBlockCommit(aBlock1));
                await receiverSwarm.BlockAppended.WaitAsync();
                await AssertThatEventually(
                    () => receiverChain.Tip.Equals(minerChainA.Tip),
                    15_000,
                    output: _output,
                    conditionLabel:
                        $"{nameof(receiverChain)}'s tip being same to " +
                        $"{nameof(minerChainA)}'s tip 1st"
                );
                minerChainB.Append(bBlock1, TestUtils.CreateBlockCommit(bBlock1));

                // Broadcast SwarmB's second block.
                minerChainB.Append(bBlock2, TestUtils.CreateBlockCommit(bBlock2));
                await receiverSwarm.BlockAppended.WaitAsync();
                await AssertThatEventually(
                    () => receiverChain.Tip.Equals(minerChainB.Tip),
                    15_000,
                    output: _output,
                    conditionLabel:
                        $"{nameof(receiverChain)}'s tip being same to " +
                        $"{nameof(minerChainB)}'s tip 2nd"
                );
                minerChainA.Append(aBlock2, TestUtils.CreateBlockCommit(aBlock2));

                // Broadcast SwarmA's third block.
                minerChainA.Append(aBlock3, TestUtils.CreateBlockCommit(aBlock3));
                await receiverSwarm.BlockAppended.WaitAsync();
                await AssertThatEventually(
                    () => receiverChain.Tip.Equals(minerChainA.Tip),
                    15_000,
                    output: _output,
                    conditionLabel:
                        $"{nameof(receiverChain)}'s tip being same to " +
                        $"{nameof(minerChainA)}'s tip 3rd"
                );
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

            var signerAddress = new PrivateKey().ToAddress();

            var actionsA = new[] { new DumbAction(signerAddress, "1") };
            var actionsB = new[] { new DumbAction(signerAddress, "2") };

            var genesisBlockA = BlockChain<DumbAction>.ProposeGenesisBlock(actionsA, privateKeyA);
            var genesisBlockB = BlockChain<DumbAction>.ProposeGenesisBlock(actionsB, privateKeyB);

            BlockChain<DumbAction> MakeGenesisChain(
                IStore store, IStateStore stateStore, Block<DumbAction> genesisBlock) =>
                new BlockChain<DumbAction>(
                    new BlockPolicy<DumbAction>(),
                    new VolatileStagePolicy<DumbAction>(),
                    store,
                    stateStore,
                    genesisBlock);

            var genesisChainA = MakeGenesisChain(
                new MemoryStore(),
                new TrieStateStore(new MemoryKeyValueStore()),
                genesisBlockA);
            var genesisChainB = MakeGenesisChain(
                new MemoryStore(),
                new TrieStateStore(new MemoryKeyValueStore()),
                genesisBlockB);
            var genesisChainC = MakeGenesisChain(
                new MemoryStore(),
                new TrieStateStore(new MemoryKeyValueStore()),
                genesisBlockA);

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

                var block = swarmA.BlockChain.ProposeBlock(privateKeyA);
                swarmA.BlockChain.Append(block, TestUtils.CreateBlockCommit(block));

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

                Assert.Equal("1", (Text)genesisChainA.GetState(signerAddress));
                Assert.Equal("2", (Text)genesisChainB.GetState(signerAddress));
                Assert.Equal("1", (Text)genesisChainC.GetState(signerAddress));
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
        public async Task FindSpecificPeerAsync()
        {
            Swarm<DumbAction> swarmA = CreateSwarm();
            Swarm<DumbAction> swarmB = CreateSwarm();
            Swarm<DumbAction> swarmC = CreateSwarm();
            Swarm<DumbAction> swarmD = CreateSwarm();
            try
            {
                await StartAsync(swarmA);
                await StartAsync(swarmB);
                await StartAsync(swarmC);
                await StartAsync(swarmD);

                await swarmA.AddPeersAsync(new BoundPeer[] { swarmB.AsPeer }, null);
                await swarmB.AddPeersAsync(new BoundPeer[] { swarmC.AsPeer }, null);
                await swarmC.AddPeersAsync(new BoundPeer[] { swarmD.AsPeer }, null);

                BoundPeer foundPeer = await swarmA.FindSpecificPeerAsync(
                    swarmB.AsPeer.Address,
                    -1,
                    TimeSpan.FromMilliseconds(3000));

                Assert.Equal(swarmB.AsPeer.Address, foundPeer.Address);
                Assert.DoesNotContain(swarmC.AsPeer, swarmA.Peers);

                foundPeer = await swarmA.FindSpecificPeerAsync(
                    swarmD.AsPeer.Address,
                    -1,
                    TimeSpan.FromMilliseconds(3000));

                Assert.Equal(swarmD.AsPeer.Address, foundPeer.Address);
                Assert.Contains(swarmC.AsPeer, swarmA.Peers);
                Assert.Contains(swarmD.AsPeer, swarmA.Peers);
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
        public async Task FindSpecificPeerAsyncFail()
        {
            Swarm<DumbAction> swarmA = CreateSwarm();
            Swarm<DumbAction> swarmB = CreateSwarm();
            Swarm<DumbAction> swarmC = CreateSwarm();
            try
            {
                await StartAsync(swarmA);
                await StartAsync(swarmB);
                await StartAsync(swarmC);

                await swarmA.AddPeersAsync(new BoundPeer[] { swarmB.AsPeer }, null);
                await swarmB.AddPeersAsync(new BoundPeer[] { swarmC.AsPeer }, null);

                await StopAsync(swarmB);

                BoundPeer foundPeer = await swarmA.FindSpecificPeerAsync(
                    swarmB.AsPeer.Address,
                    -1,
                    TimeSpan.FromMilliseconds(3000));

                Assert.Null(foundPeer);

                foundPeer = await swarmA.FindSpecificPeerAsync(
                    swarmC.AsPeer.Address,
                    -1,
                    TimeSpan.FromMilliseconds(3000));

                Assert.Null(foundPeer);
                Assert.DoesNotContain(swarmC.AsPeer, swarmA.Peers);
            }
            finally
            {
                await StopAsync(swarmA);
                await StopAsync(swarmB);
                await StopAsync(swarmC);
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task FindSpecificPeerAsyncDepthFail()
        {
            Swarm<DumbAction> swarmA = CreateSwarm();
            Swarm<DumbAction> swarmB = CreateSwarm();
            Swarm<DumbAction> swarmC = CreateSwarm();
            Swarm<DumbAction> swarmD = CreateSwarm();

            _output.WriteLine("{0}: {1}", nameof(swarmA), swarmA.AsPeer);
            _output.WriteLine("{0}: {1}", nameof(swarmB), swarmB.AsPeer);
            _output.WriteLine("{0}: {1}", nameof(swarmC), swarmC.AsPeer);
            _output.WriteLine("{0}: {1}", nameof(swarmD), swarmD.AsPeer);

            try
            {
                await StartAsync(swarmA);
                await StartAsync(swarmB);
                await StartAsync(swarmC);
                await StartAsync(swarmD);

                await swarmA.AddPeersAsync(new BoundPeer[] { swarmB.AsPeer }, null);
                await swarmB.AddPeersAsync(new BoundPeer[] { swarmC.AsPeer }, null);
                await swarmC.AddPeersAsync(new BoundPeer[] { swarmD.AsPeer }, null);

                BoundPeer foundPeer = await swarmA.FindSpecificPeerAsync(
                    swarmC.AsPeer.Address,
                    1,
                    TimeSpan.FromMilliseconds(3000));

                Assert.Equal(swarmC.AsPeer.Address, foundPeer.Address);
                swarmA.RoutingTable.Clear();
                Assert.Empty(swarmA.Peers);
                await swarmA.AddPeersAsync(new BoundPeer[] { swarmB.AsPeer }, null);

                foundPeer = await swarmA.FindSpecificPeerAsync(
                    swarmD.AsPeer.Address,
                    1,
                    TimeSpan.FromMilliseconds(3000));

                Assert.Null(foundPeer);
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
        public async Task DoNotFillWhenGetAllBlockAtFirstTimeFromSender()
        {
            Swarm<DumbAction> receiver = CreateSwarm();
            Swarm<DumbAction> sender = CreateSwarm();
            await StartAsync(receiver);
            await StartAsync(sender);

            receiver.FindNextHashesChunkSize = 8;
            sender.FindNextHashesChunkSize = 8;
            BlockChain<DumbAction> chain = sender.BlockChain;

            for (int i = 0; i < 6; i++)
            {
                Block<DumbAction> block = ProposeNext(
                    chain.Tip,
                    miner: ChainPrivateKey.PublicKey,
                    lastCommit: CreateBlockCommit(chain.Tip)
                ).Evaluate(ChainPrivateKey, chain);
                chain.Append(block, TestUtils.CreateBlockCommit(block));
            }

            Log.Debug("Sender's BlockChain Tip index: #{index}", sender.BlockChain.Tip.Index);

            try
            {
                await BootstrapAsync(sender, receiver.AsPeer);

                sender.BroadcastBlock(sender.BlockChain.Tip);

                await receiver.BlockReceived.WaitAsync();
                await receiver.BlockAppended.WaitAsync();
                Assert.Equal(
                    7,
                    receiver.BlockChain.Count);
            }
            finally
            {
                await StopAsync(receiver);
                await StopAsync(sender);
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task FillWhenGetAChunkOfBlocksFromSender()
        {
            Swarm<DumbAction> receiver = CreateSwarm();
            Swarm<DumbAction> sender = CreateSwarm();
            await StartAsync(receiver);
            await StartAsync(sender);

            receiver.FindNextHashesChunkSize = 2;
            sender.FindNextHashesChunkSize = 2;
            BlockChain<DumbAction> chain = sender.BlockChain;

            for (int i = 0; i < 6; i++)
            {
                Block<DumbAction> block = ProposeNext(
                    chain.Tip,
                    miner: ChainPrivateKey.PublicKey,
                    lastCommit: CreateBlockCommit(chain.Tip)
                ).Evaluate(ChainPrivateKey, chain);
                chain.Append(block, TestUtils.CreateBlockCommit(block));
            }

            Log.Debug("Sender's BlockChain Tip index: #{index}", sender.BlockChain.Tip.Index);

            try
            {
                await BootstrapAsync(sender, receiver.AsPeer);

                sender.BroadcastBlock(sender.BlockChain.Tip);

                await receiver.BlockReceived.WaitAsync();
                await receiver.BlockAppended.WaitAsync();
                Log.Debug("Count: {Count}", receiver.BlockChain.Count);
                Assert.Equal(
                    2,
                    receiver.BlockChain.Count);
            }
            finally
            {
                await StopAsync(receiver);
                await StopAsync(sender);
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task FillWhenGetAllBlocksFromSender()
        {
            Swarm<DumbAction> receiver = CreateSwarm();
            Swarm<DumbAction> sender = CreateSwarm();
            await StartAsync(receiver);
            await StartAsync(sender);

            receiver.FindNextHashesChunkSize = 2;
            sender.FindNextHashesChunkSize = 2;
            BlockChain<DumbAction> chain = sender.BlockChain;

            for (int i = 0; i < 6; i++)
            {
                Block<DumbAction> block = ProposeNext(
                    chain.Tip,
                    miner: ChainPrivateKey.PublicKey,
                    lastCommit: CreateBlockCommit(chain.Tip)
                ).Evaluate(ChainPrivateKey, chain);
                chain.Append(block, TestUtils.CreateBlockCommit(block));
            }

            Log.Debug("Sender's BlockChain Tip index: #{index}", sender.BlockChain.Tip.Index);

            try
            {
                await BootstrapAsync(sender, receiver.AsPeer);

                sender.BroadcastBlock(sender.BlockChain.Tip);

                await receiver.BlockReceived.WaitAsync();
                await receiver.BlockAppended.WaitAsync();
                Log.Debug("Count: {Count}", receiver.BlockChain.Count);
                sender.BroadcastBlock(sender.BlockChain.Tip);
                Assert.Equal(
                    2,
                    receiver.BlockChain.Count);

                sender.BroadcastBlock(sender.BlockChain.Tip);

                await receiver.BlockReceived.WaitAsync();
                await receiver.BlockAppended.WaitAsync();
                Log.Debug("Count: {Count}", receiver.BlockChain.Count);
                sender.BroadcastBlock(sender.BlockChain.Tip);
                Assert.Equal(
                    4,
                    receiver.BlockChain.Count);

                sender.BroadcastBlock(sender.BlockChain.Tip);

                await receiver.BlockReceived.WaitAsync();
                await receiver.BlockAppended.WaitAsync();
                Log.Debug("Count: {Count}", receiver.BlockChain.Count);
                sender.BroadcastBlock(sender.BlockChain.Tip);
                Assert.Equal(
                    6,
                    receiver.BlockChain.Count);
            }
            finally
            {
                await StopAsync(receiver);
                await StopAsync(sender);
            }
        }

        [RetryFact(10, Timeout = Timeout)]
        public async Task GetPeerChainStateAsync()
        {
            var key2 = new PrivateKey();

            Swarm<DumbAction> swarm1 = CreateSwarm();
            Swarm<DumbAction> swarm2 = CreateSwarm(key2);
            Swarm<DumbAction> swarm3 = CreateSwarm();

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
                    new PeerChainState(swarm2.AsPeer, 0),
                    peerChainState.First()
                );

                Block<DumbAction> block = swarm2.BlockChain.ProposeBlock(key2);
                swarm2.BlockChain.Append(block, TestUtils.CreateBlockCommit(block));
                peerChainState = await swarm1.GetPeerChainStateAsync(
                    TimeSpan.FromSeconds(1), default);
                Assert.Equal(
                    new PeerChainState(swarm2.AsPeer, 1),
                    peerChainState.First()
                );

                await BootstrapAsync(swarm1, swarm3.AsPeer);
                peerChainState = await swarm1.GetPeerChainStateAsync(
                    TimeSpan.FromSeconds(1), default);
                Assert.Equal(
                    new[]
                    {
                        new PeerChainState(swarm2.AsPeer, 1),
                        new PeerChainState(swarm3.AsPeer, 0),
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

        [Fact(Timeout = Timeout)]
        public async Task LastMessageTimestamp()
        {
            Swarm<DumbAction> swarm1 = CreateSwarm();
            Swarm<DumbAction> swarm2 = CreateSwarm();

            Assert.Null(swarm1.LastMessageTimestamp);

            try
            {
                await StartAsync(swarm1);
                Assert.Null(swarm1.LastMessageTimestamp);
                DateTimeOffset bootstrappedAt = DateTimeOffset.UtcNow;
                await BootstrapAsync(swarm2, swarm1.AsPeer);
                await StartAsync(swarm2);

                Assert.NotNull(swarm1.LastMessageTimestamp);
                Assert.InRange(
                    swarm1.LastMessageTimestamp.Value,
                    bootstrappedAt,
                    DateTimeOffset.UtcNow
                );
            }
            finally
            {
                await StopAsync(swarm1);
                await StopAsync(swarm2);
            }
        }

        private async Task<Task> StartAsync<T>(
            Swarm<T> swarm,
            int millisecondsBroadcastBlockInterval = 15 * 1000,
            CancellationToken cancellationToken = default
        )
            where T : IAction, new()
        {
            Task task = swarm.StartAsync(
                dialTimeout: TimeSpan.FromMilliseconds(200),
                broadcastBlockInterval:
                    TimeSpan.FromMilliseconds(millisecondsBroadcastBlockInterval),
                broadcastTxInterval: TimeSpan.FromMilliseconds(200),
                cancellationToken: cancellationToken
            );
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
            BoundPeer seed,
            CancellationToken cancellationToken = default
        )
            where T : IAction, new() =>
            BootstrapAsync(swarm, new[] { seed }, cancellationToken);

        private async Task BootstrapAsync<T>(
            Swarm<T> swarm,
            IEnumerable<BoundPeer> seeds,
            CancellationToken cancellationToken = default
        )
            where T : IAction, new()
        {
            await swarm.BootstrapAsync(
                seeds,
                dialTimeout: TimeSpan.FromSeconds(3),
                searchDepth: Kademlia.MaxDepth,
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
            public IValue PlainValue => Null.Value;

            public IAccountStateDelta Execute(IActionContext context)
            {
                Thread.Sleep(10);
                return context.PreviousStates;
            }

            public void LoadPlainValue(IValue plainValue)
            {
            }
        }

        private class EmulatingUnstableGetBlockStore : ProxyStore
        {
            public EmulatingUnstableGetBlockStore(IStore store)
                : base(store)
            {
            }

            public bool BlockGettable { get; set; } = true;

            public override Block<T> GetBlock<T>(BlockHash blockHash) =>
                BlockGettable ? base.GetBlock<T>(blockHash) : null;
        }
    }
}
