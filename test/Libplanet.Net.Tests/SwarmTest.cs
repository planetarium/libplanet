#nullable disable
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Net;
using System.Net.Sockets;
using System.Threading;
using System.Threading.Tasks;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Action.Loader;
using Libplanet.Action.State;
using Libplanet.Action.Tests.Common;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Net.Consensus;
using Libplanet.Net.Messages;
using Libplanet.Net.Options;
using Libplanet.Net.Protocols;
using Libplanet.Net.Transports;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Stun;
using Libplanet.Tests.Store;
using Libplanet.Types.Blocks;
using Libplanet.Types.Tx;
using NetMQ;
using Nito.AsyncEx;
using Nito.AsyncEx.Synchronous;
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

        private bool _disposed = false;

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

        ~SwarmTest()
        {
            Dispose(false);
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        [Fact(Timeout = Timeout)]
        public async Task CanNotStartTwice()
        {
            Swarm swarm = await CreateSwarm().ConfigureAwait(false);

            Task t = await Task.WhenAny(
                swarm.StartAsync(),
                swarm.StartAsync());

            Assert.True(swarm.Running);
            Assert.True(t.IsFaulted);
            Assert.True(
                t.Exception.InnerException is SwarmException,
                $"Expected SwarmException, but actual exception was: {t.Exception.InnerException}"
            );

            CleaningSwarm(swarm);
        }

        [Fact(Timeout = Timeout)]
        public async Task HandleReconnection()
        {
            Swarm seed = await CreateSwarm().ConfigureAwait(false);

            var privateKey = new PrivateKey();
            Swarm swarmA =
                await CreateSwarm(privateKey: privateKey).ConfigureAwait(false);
            Swarm swarmB =
                await CreateSwarm(privateKey: privateKey).ConfigureAwait(false);

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
                CleaningSwarm(seed);
                CleaningSwarm(swarmA);
                CleaningSwarm(swarmB);
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task RunConsensusReactorIfOptionGiven()
        {
            Swarm swarmA = await CreateSwarm().ConfigureAwait(false);
            Swarm swarmB = await CreateConsensusSwarm().ConfigureAwait(false);

            await StartAsync(swarmA);
            await StartAsync(swarmB);
            await Task.Delay(1000);

            Assert.True(swarmA.Running);
            Assert.True(swarmB.Running);
            Assert.False(swarmA.ConsensusRunning);
            Assert.True(swarmB.ConsensusRunning);

            CleaningSwarm(swarmA);
            CleaningSwarm(swarmB);
        }

        [Fact(Timeout = Timeout)]
        public async Task StopAsyncTest()
        {
            Swarm swarm = await CreateSwarm().ConfigureAwait(false);

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
            Swarm swarm = await CreateSwarm().ConfigureAwait(false);

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

            CleaningSwarm(swarm);
            Assert.False(swarm.Running);
        }

        [Fact(Timeout = Timeout)]
        public async Task AddPeersWithoutStart()
        {
            Swarm a = await CreateSwarm().ConfigureAwait(false);
            Swarm b = await CreateSwarm().ConfigureAwait(false);

            try
            {
                await StartAsync(b);

                await a.AddPeersAsync(new BoundPeer[] { b.AsPeer }, null);

                Assert.Contains(b.AsPeer, a.Peers);
                Assert.Contains(a.AsPeer, b.Peers);
            }
            finally
            {
                CleaningSwarm(a);
                CleaningSwarm(b);
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task AddPeersAsync()
        {
            Swarm a = await CreateSwarm().ConfigureAwait(false);
            Swarm b = await CreateSwarm().ConfigureAwait(false);

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
                CleaningSwarm(a);
                CleaningSwarm(b);
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task BootstrapException()
        {
            Swarm swarmA = await CreateSwarm().ConfigureAwait(false);
            Swarm swarmB = await CreateSwarm().ConfigureAwait(false);

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
                CleaningSwarm(swarmA);
                CleaningSwarm(swarmB);
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task BootstrapAsyncWithoutStart()
        {
            Swarm swarmA = await CreateSwarm().ConfigureAwait(false);
            Swarm swarmB = await CreateSwarm().ConfigureAwait(false);
            Swarm swarmC = await CreateSwarm().ConfigureAwait(false);
            Swarm swarmD = await CreateSwarm().ConfigureAwait(false);

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
                CleaningSwarm(swarmA);
                CleaningSwarm(swarmB);
                CleaningSwarm(swarmC);
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task MaintainStaticPeers()
        {
            var keyA = new PrivateKey();
            var hostOptionsA = new HostOptions(
                IPAddress.Loopback.ToString(), new IceServer[] { }, 20_000);
            var hostOptionsB = new HostOptions(
                IPAddress.Loopback.ToString(), new IceServer[] { }, 20_001);

            Swarm swarmA =
                await CreateSwarm(keyA, hostOptions: hostOptionsA).ConfigureAwait(false);
            Swarm swarmB =
                await CreateSwarm(hostOptions: hostOptionsB).ConfigureAwait(false);
            await StartAsync(swarmA);
            await StartAsync(swarmB);

            Swarm swarm = await CreateSwarm(
                options: new SwarmOptions
                {
                    StaticPeers = new[]
                    {
                        swarmA.AsPeer,
                        swarmB.AsPeer,
                        // Unreachable peer:
                        new BoundPeer(
                            new PrivateKey().PublicKey,
                            new DnsEndPoint("127.0.0.1", 65535)
                        ),
                    }.ToImmutableHashSet(),
                    StaticPeersMaintainPeriod = TimeSpan.FromMilliseconds(100),
                }).ConfigureAwait(false);

            await StartAsync(swarm);
            await AssertThatEventually(() => swarm.Peers.Contains(swarmA.AsPeer), 5_000);
            await AssertThatEventually(() => swarm.Peers.Contains(swarmB.AsPeer), 5_000);

            _logger.Debug("Address of swarmA: {Address}", swarmA.Address);
            CleaningSwarm(swarmA);
            swarmA.Dispose();
            await Task.Delay(100);
            await swarm.PeerDiscovery.RefreshTableAsync(
                TimeSpan.Zero,
                default);
            // Invoke once more in case of swarmA and swarmB is in the same bucket,
            // and swarmA is last updated.
            await swarm.PeerDiscovery.RefreshTableAsync(
                TimeSpan.Zero,
                default);
            Assert.DoesNotContain(swarmA.AsPeer, swarm.Peers);
            Assert.Contains(swarmB.AsPeer, swarm.Peers);

            Swarm swarmC =
                await CreateSwarm(keyA, hostOptions: hostOptionsA).ConfigureAwait(false);
            await StartAsync(swarmC);
            await AssertThatEventually(() => swarm.Peers.Contains(swarmB.AsPeer), 5_000);
            await AssertThatEventually(() => swarm.Peers.Contains(swarmC.AsPeer), 5_000);

            CleaningSwarm(swarm);
            CleaningSwarm(swarmB);
            CleaningSwarm(swarmC);
        }

        [Fact(Timeout = Timeout)]
        public async Task Cancel()
        {
            Swarm swarm = await CreateSwarm().ConfigureAwait(false);
            var cts = new CancellationTokenSource();

            Task task = await StartAsync(
                swarm,
                cancellationToken: cts.Token
            );

            await Task.Delay(100);
            cts.Cancel();
            await Assert.ThrowsAsync<TaskCanceledException>(async () => await task);
            CleaningSwarm(swarm);
        }

        [Fact(Timeout = Timeout)]
        public async Task BootstrapContext()
        {
            var collectedTwoMessages = Enumerable.Range(0, 4).Select(i =>
                new AsyncAutoResetEvent()).ToList();
            var stepChangedToPreCommits = Enumerable.Range(0, 4).Select(i =>
                new AsyncAutoResetEvent()).ToList();
            var roundChangedToOnes = Enumerable.Range(0, 4).Select(i =>
                new AsyncAutoResetEvent()).ToList();
            var roundOneProposed = new AsyncAutoResetEvent();
            var policy = new NullBlockPolicy();
            var genesis = new MemoryStoreFixture(policy.PolicyActionsRegistry).GenesisBlock;

            var consensusPeers = Enumerable.Range(0, 4).Select(i =>
                new BoundPeer(
                    TestUtils.PrivateKeys[i].PublicKey,
                    new DnsEndPoint("127.0.0.1", 6000 + i))).ToImmutableList();
            var reactorOpts = Enumerable.Range(0, 4).Select(i =>
                new ConsensusReactorOption
                {
                    ConsensusPeers = consensusPeers,
                    ConsensusPort = 6000 + i,
                    ConsensusPrivateKey = TestUtils.PrivateKeys[i],
                    ConsensusWorkers = 100,
                    TargetBlockInterval = TimeSpan.FromSeconds(10),
                    ContextOption = new ContextOption(),
                }).ToList();
            var swarms = new List<Swarm>();
            for (int i = 0; i < 4; i++)
            {
                swarms.Add(await CreateSwarm(
                    privateKey: TestUtils.PrivateKeys[i],
                    hostOptions: new HostOptions(
                        "127.0.0.1",
                        Array.Empty<IceServer>(),
                        9000 + i),
                    policy: policy,
                    genesis: genesis,
                    consensusReactorOption: reactorOpts[i]).ConfigureAwait(false));
            }

            try
            {
                // swarms[1] is the round 0 proposer for height 1.
                // swarms[2] is the round 1 proposer for height 2.
                _ = swarms[0].StartAsync();
                _ = swarms[3].StartAsync();

                swarms[0].ConsensusReactor.ConsensusContext.StateChanged += (_, eventArgs) =>
                {
                    if (eventArgs.VoteCount == 2)
                    {
                        collectedTwoMessages[0].Set();
                    }
                };

                // Make sure both swarms time out and swarm[0] collects two PreVotes.
                await collectedTwoMessages[0].WaitAsync();

                // Dispose swarm[3] to simulate shutdown during bootstrap.
                swarms[3].Dispose();

                // Bring swarm[2] online.
                _ = swarms[2].StartAsync();
                swarms[0].ConsensusReactor.ConsensusContext.StateChanged += (_, eventArgs) =>
                {
                    if (eventArgs.Step == ConsensusStep.PreCommit)
                    {
                        stepChangedToPreCommits[0].Set();
                    }
                };
                swarms[2].ConsensusReactor.ConsensusContext.StateChanged += (_, eventArgs) =>
                {
                    if (eventArgs.Step == ConsensusStep.PreCommit)
                    {
                        stepChangedToPreCommits[2].Set();
                    }
                };

                // Since we already have swarm[3]'s PreVote, when swarm[2] times out,
                // swarm[2] adds additional PreVote, making it possible to reach PreCommit.
                // Current network's context state should be:
                // Proposal: null
                // PreVote: swarm[0], swarm[2], swarm[3],
                // PreCommit: swarm[0], swarm[2]
                await Task.WhenAll(
                    stepChangedToPreCommits[0].WaitAsync(), stepChangedToPreCommits[2].WaitAsync());

                // After swarm[1] comes online, eventually it'll catch up to vote PreCommit,
                // at which point the round will move to 1 where swarm[2] is the proposer.
                _ = swarms[1].StartAsync();
                swarms[2].ConsensusReactor.ConsensusContext.MessagePublished += (_, eventArgs) =>
                {
                    if (eventArgs.Message is ConsensusProposalMsg proposalMsg &&
                        proposalMsg.Round == 1 &&
                        proposalMsg.ValidatorPublicKey.Equals(TestUtils.PrivateKeys[2].PublicKey))
                    {
                        roundOneProposed.Set();
                    }
                };

                await roundOneProposed.WaitAsync();

                await AssertThatEventually(() => swarms[0].BlockChain.Tip.Index == 1, int.MaxValue);
                Assert.Equal(1, swarms[0].BlockChain.GetBlockCommit(1).Round);
            }
            finally
            {
                CleaningSwarm(swarms[0]);
                CleaningSwarm(swarms[1]);
                CleaningSwarm(swarms[2]);
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task GetBlocks()
        {
            var keyA = new PrivateKey();

            Swarm swarmA =
                await CreateSwarm(keyA).ConfigureAwait(false);
            Block genesis = swarmA.BlockChain.Genesis;
            Swarm swarmB =
                await CreateSwarm(genesis: genesis).ConfigureAwait(false);

            BlockChain chainA = swarmA.BlockChain;

            Block block1 = chainA.ProposeBlock(keyA);
            chainA.Append(block1, TestUtils.CreateBlockCommit(block1));
            Block block2 = chainA.ProposeBlock(keyA, CreateBlockCommit(block1));
            chainA.Append(block2, TestUtils.CreateBlockCommit(block2));

            try
            {
                await StartAsync(swarmA);
                await StartAsync(swarmB);

                await swarmA.AddPeersAsync(new[] { swarmB.AsPeer }, null);

                List<BlockHash> inventories = await swarmB.GetBlockHashes(
                    swarmA.AsPeer,
                    new BlockLocator(genesis.Hash));
                Assert.Equal(
                    new[] { genesis.Hash, block1.Hash, block2.Hash },
                    inventories);

                (Block, BlockCommit)[] receivedBlocks =
                    await swarmB.GetBlocksAsync(
                        swarmA.AsPeer,
                        inventories,
                        cancellationToken: default
                    ).ToArrayAsync();
                Assert.Equal(
                    new[] { genesis, block1, block2 }, receivedBlocks.Select(pair => pair.Item1));
            }
            finally
            {
                CleaningSwarm(swarmA);
                CleaningSwarm(swarmB);
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task GetMultipleBlocksAtOnce()
        {
            var keyA = new PrivateKey();
            var keyB = new PrivateKey();

            Swarm swarmA = await CreateSwarm(keyA).ConfigureAwait(false);
            Block genesis = swarmA.BlockChain.Genesis;
            Swarm swarmB =
                await CreateSwarm(keyB, genesis: genesis).ConfigureAwait(false);

            BlockChain chainA = swarmA.BlockChain;
            BlockChain chainB = swarmB.BlockChain;

            Block block1 = chainA.ProposeBlock(
                keyA, CreateBlockCommit(chainA.Tip));
            chainA.Append(block1, TestUtils.CreateBlockCommit(block1));
            Block block2 = chainA.ProposeBlock(
                keyA, CreateBlockCommit(chainA.Tip));
            chainA.Append(block2, TestUtils.CreateBlockCommit(block2));

            try
            {
                await StartAsync(swarmA);
                await StartAsync(swarmB);

                var peer = swarmA.AsPeer;

                await swarmB.AddPeersAsync(new[] { peer }, null);

                List<BlockHash> hashes = await swarmB.GetBlockHashes(
                    peer,
                    new BlockLocator(genesis.Hash));

                ITransport transport = swarmB.Transport;

                var request = new GetBlocksMsg(hashes, 2);
                Message[] responses = (await transport.SendMessageAsync(
                    swarmA.AsPeer,
                    request,
                    null,
                    2,
                    false,
                    default)).ToArray();
                var blockMessage = (BlocksMsg)responses[0].Content;

                Assert.Equal(2, responses.Length);
                Assert.Equal(4, blockMessage.Payloads.Count);

                blockMessage = (BlocksMsg)responses[1].Content;

                Assert.Equal(2, blockMessage.Payloads.Count);
            }
            finally
            {
                CleaningSwarm(swarmA);
                CleaningSwarm(swarmB);
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task GetTx()
        {
            var keyB = new PrivateKey();

            Swarm swarmA = await CreateSwarm().ConfigureAwait(false);
            Block genesis = swarmA.BlockChain.Genesis;
            Swarm swarmB =
                await CreateSwarm(keyB, genesis: genesis).ConfigureAwait(false);
            BlockChain chainB = swarmB.BlockChain;

            Transaction tx = Transaction.Create(
                0,
                new PrivateKey(),
                chainB.Genesis.Hash,
                Array.Empty<DumbAction>().ToPlainValues()
            );
            chainB.StageTransaction(tx);
            Block block = chainB.ProposeBlock(keyB);
            chainB.Append(block, TestUtils.CreateBlockCommit(block));

            try
            {
                await StartAsync(swarmA);
                await StartAsync(swarmB);

                await swarmA.AddPeersAsync(new[] { swarmB.AsPeer }, null);

                List<Transaction> txs =
                    await swarmA.GetTxsAsync(
                        swarmB.AsPeer,
                        new[] { tx.Id },
                        cancellationToken: default
                    ).ToListAsync();

                Assert.Equal(new[] { tx }, txs);
            }
            finally
            {
                CleaningSwarm(swarmA);
                CleaningSwarm(swarmB);
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task ThrowArgumentExceptionInConstructor()
        {
            var fx = new MemoryStoreFixture();
            var policy = new BlockPolicy();
            var blockchain = MakeBlockChain(
                policy, fx.Store, fx.StateStore, new SingleActionLoader(typeof(DumbAction)));
            var key = new PrivateKey();
            var apv = AppProtocolVersion.Sign(key, 1);
            var apvOptions = new AppProtocolVersionOptions() { AppProtocolVersion = apv };
            var hostOptions = new HostOptions(
                IPAddress.Loopback.ToString(), new IceServer[] { });
            var transport = await NetMQTransport.Create(
                key,
                apvOptions,
                hostOptions);

            // TODO: Check Consensus Parameters.
            Assert.Throws<ArgumentNullException>(() =>
                new Swarm(null, key, transport));
            Assert.Throws<ArgumentNullException>(() =>
                new Swarm(blockchain, null, transport));
        }

        [Fact(Timeout = Timeout)]
        public async void CanResolveEndPoint()
        {
            var expected = new DnsEndPoint("1.2.3.4", 5678);
            var hostOptions = new HostOptions("1.2.3.4", new IceServer[] { }, 5678);
            Swarm s = await CreateSwarm(hostOptions: hostOptions).ConfigureAwait(false);
            Assert.Equal(expected, s.EndPoint);
            Assert.Equal(expected, s.AsPeer?.EndPoint);
            CleaningSwarm(s);
        }

        [Fact(Timeout = Timeout)]
        public async Task StopGracefullyWhileStarting()
        {
            Swarm a = await CreateSwarm().ConfigureAwait(false);

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
            CleaningSwarm(a);
        }

        [Fact(Timeout = Timeout)]
        public async Task AsPeer()
        {
            Swarm swarm = await CreateSwarm().ConfigureAwait(false);
            Assert.IsType<BoundPeer>(swarm.AsPeer);

            await StartAsync(swarm);
            Assert.IsType<BoundPeer>(swarm.AsPeer);
            CleaningSwarm(swarm);
        }

        [FactOnlyTurnAvailable(Timeout = Timeout)]
        public async Task ExchangeWithIceServer()
        {
            var iceServers = FactOnlyTurnAvailableAttribute.GetIceServers();
            var seedHostOptions = new HostOptions("127.0.0.1", ImmutableList<IceServer>.Empty, 0);
            var swarmHostOptions = new HostOptions(null, iceServers);
            var seed = await CreateSwarm(hostOptions: seedHostOptions).ConfigureAwait(false);
            var swarmA = await CreateSwarm(hostOptions: swarmHostOptions).ConfigureAwait(false);
            var swarmB = await CreateSwarm(hostOptions: swarmHostOptions).ConfigureAwait(false);

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
                CleaningSwarm(seed);
                CleaningSwarm(swarmA);
                CleaningSwarm(swarmB);
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
            var proxyUri = new Uri($"turn://{username}:{password}@127.0.0.1:{port}/");
            IEnumerable<IceServer> iceServers = new[] { new IceServer(url: proxyUri) };

            var cts = new CancellationTokenSource();
            var proxyTask = TurnProxy(port, turnUrl, cts.Token);

            var seedKey = new PrivateKey();
            var seedHostOptions = new HostOptions("127.0.0.1", ImmutableList<IceServer>.Empty, 0);
            var swarmHostOptions = new HostOptions(null, iceServers, 0);
            var seed =
                await CreateSwarm(seedKey, hostOptions: seedHostOptions).ConfigureAwait(false);
            var swarmA =
                await CreateSwarm(hostOptions: swarmHostOptions).ConfigureAwait(false);

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
                await StartAsync(swarmA, cancellationToken: cts.Token);

                await swarmA.AddPeersAsync(new[] { seed.AsPeer }, null);

                cts.Cancel();
                await proxyTask;
                cts = new CancellationTokenSource();

                proxyTask = TurnProxy(port, turnUrl, cts.Token);
                _ = RefreshTableAsync(cts.Token);
                _ = MineAndBroadcast(cts.Token);

                cts.CancelAfter(1500);
                await swarmA.BlockReceived.WaitAsync(cts.Token);
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
                CleaningSwarm(seed);
                CleaningSwarm(swarmA);
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task CannotBlockSyncWithForkedChain()
        {
            var policy = new NullBlockPolicy();
            var chain1 = MakeBlockChain(
                policy,
                new MemoryStore(),
                new TrieStateStore(new MemoryKeyValueStore()),
                new SingleActionLoader(typeof(DumbAction)));
            var chain2 = MakeBlockChain(
                policy,
                new MemoryStore(),
                new TrieStateStore(new MemoryKeyValueStore()),
                new SingleActionLoader(typeof(DumbAction)));

            var key1 = new PrivateKey();
            var key2 = new PrivateKey();

            var miner1 = await CreateSwarm(chain1, key1).ConfigureAwait(false);
            var miner2 = await CreateSwarm(chain2, key2).ConfigureAwait(false);

            var privKey = new PrivateKey();
            var addr = miner1.Address;
            var item = "foo";

            miner1.BlockChain.MakeTransaction(privKey, new[] { DumbAction.Create((addr, item)) });
            Block block1 = miner1.BlockChain.ProposeBlock(
                key1, CreateBlockCommit(miner1.BlockChain.Tip));
            miner1.BlockChain.Append(block1, TestUtils.CreateBlockCommit(block1));
            var miner1TipHash = miner1.BlockChain.Tip.Hash;

            miner2.BlockChain.MakeTransaction(privKey, new[] { DumbAction.Create((addr, item)) });
            Block block2 = miner2.BlockChain.ProposeBlock(
                key2, CreateBlockCommit(miner2.BlockChain.Tip));
            miner2.BlockChain.Append(block2, TestUtils.CreateBlockCommit(block2));

            miner2.BlockChain.MakeTransaction(privKey, new[] { DumbAction.Create((addr, item)) });
            var latest = miner2.BlockChain.ProposeBlock(
                key2, CreateBlockCommit(miner2.BlockChain.Tip));
            miner2.BlockChain.Append(latest, TestUtils.CreateBlockCommit(latest));

            await StartAsync(miner1);
            await StartAsync(miner2);

            await BootstrapAsync(miner2, miner1.AsPeer);

            miner2.BroadcastBlock(latest);

            await Task.Delay(5_000);
            Assert.Equal(miner1TipHash, miner1.BlockChain.Tip.Hash);

            CleaningSwarm(miner1);
            CleaningSwarm(miner2);
        }

        [Fact(Timeout = Timeout)]
        public async Task UnstageInvalidTransaction()
        {
            var validKey = new PrivateKey();

            TxPolicyViolationException IsSignerValid(
                BlockChain chain, Transaction tx)
            {
                var validAddress = validKey.Address;
                return tx.Signer.Equals(validAddress) ||
                       tx.Signer.Equals(GenesisProposer.Address)
                    ? null
                    : new TxPolicyViolationException("invalid signer", tx.Id);
            }

            var policy = new BlockPolicy(validateNextBlockTx: IsSignerValid);
            var fx1 = new MemoryStoreFixture();
            var fx2 = new MemoryStoreFixture();

            var swarmA = await CreateSwarm(
                MakeBlockChain(
                    policy,
                    fx1.Store,
                    fx1.StateStore,
                    new SingleActionLoader(typeof(DumbAction)),
                    privateKey: validKey))
                .ConfigureAwait(false);
            var swarmB = await CreateSwarm(
                MakeBlockChain(
                    policy,
                    fx2.Store,
                    fx2.StateStore,
                    new SingleActionLoader(typeof(DumbAction)),
                    privateKey: validKey))
                .ConfigureAwait(false);

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
                CleaningSwarm(swarmA);
                CleaningSwarm(swarmB);

                fx1.Dispose();
                fx2.Dispose();
            }
        }

        [RetryFact(Timeout = Timeout)]
        public async Task IgnoreTransactionFromDifferentGenesis()
        {
            var validKey = new PrivateKey();

            TxPolicyViolationException IsSignerValid(
                BlockChain chain, Transaction tx)
            {
                var validAddress = validKey.Address;
                return tx.Signer.Equals(validAddress) ||
                       tx.Signer.Equals(GenesisProposer.Address)
                    ? null
                    : new TxPolicyViolationException("invalid signer", tx.Id);
            }

            var policy = new BlockPolicy(validateNextBlockTx: IsSignerValid);
            var fx1 = new MemoryStoreFixture();
            var fx2 = new MemoryStoreFixture();

            var swarmA = await CreateSwarm(
                MakeBlockChain(
                    policy,
                    fx1.Store,
                    fx1.StateStore,
                    new SingleActionLoader(typeof(DumbAction)),
                    privateKey: validKey,
                    timestamp: DateTimeOffset.MinValue)).ConfigureAwait(false);
            var swarmB = await CreateSwarm(
                MakeBlockChain(
                    policy,
                    fx2.Store,
                    fx2.StateStore,
                    new SingleActionLoader(typeof(DumbAction)),
                    privateKey: validKey,
                    timestamp: DateTimeOffset.MinValue.AddSeconds(1))).ConfigureAwait(false);

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
                CleaningSwarm(swarmA);
                CleaningSwarm(swarmB);

                fx1.Dispose();
                fx2.Dispose();
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task DoNotReceiveBlockFromNodeHavingDifferentGenesisBlock()
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

            var signerAddress = new PrivateKey().Address;

            var actionsA = new[] { DumbAction.Create((signerAddress, "1")) };
            var actionsB = new[] { DumbAction.Create((signerAddress, "2")) };

            var genesisChainA = MakeBlockChain(
                new BlockPolicy(),
                new MemoryStore(),
                new TrieStateStore(new MemoryKeyValueStore()),
                new SingleActionLoader(typeof(DumbAction)),
                actionsA,
                null,
                privateKeyA);
            var genesisBlockA = genesisChainA.Genesis;
            var genesisChainB = MakeBlockChain(
                new BlockPolicy(),
                new MemoryStore(),
                new TrieStateStore(new MemoryKeyValueStore()),
                new SingleActionLoader(typeof(DumbAction)),
                actionsB,
                null,
                privateKeyB);
            var genesisChainC = MakeBlockChain(
                new BlockPolicy(),
                new MemoryStore(),
                new TrieStateStore(new MemoryKeyValueStore()),
                new SingleActionLoader(typeof(DumbAction)),
                genesisBlock: genesisBlockA);

            var swarmA =
                await CreateSwarm(genesisChainA, privateKeyA).ConfigureAwait(false);
            var swarmB =
                await CreateSwarm(genesisChainB, privateKeyB).ConfigureAwait(false);
            var swarmC =
                await CreateSwarm(genesisChainC, privateKeyC).ConfigureAwait(false);
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

                Assert.Equal(
                    "1",
                    (Text)genesisChainA
                        .GetNextWorldState()
                        .GetAccountState(ReservedAddresses.LegacyAccount)
                        .GetState(signerAddress));
                Assert.Equal(
                    "2",
                    (Text)genesisChainB
                        .GetNextWorldState()
                        .GetAccountState(ReservedAddresses.LegacyAccount)
                        .GetState(signerAddress));
                Assert.Equal(
                    "1",
                    (Text)genesisChainC
                        .GetNextWorldState()
                        .GetAccountState(ReservedAddresses.LegacyAccount)
                        .GetState(signerAddress));
            }
            finally
            {
                CleaningSwarm(swarmA);
                CleaningSwarm(swarmB);
                CleaningSwarm(swarmC);
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task FindSpecificPeerAsync()
        {
            Swarm swarmA = await CreateSwarm().ConfigureAwait(false);
            Swarm swarmB = await CreateSwarm().ConfigureAwait(false);
            Swarm swarmC = await CreateSwarm().ConfigureAwait(false);
            Swarm swarmD = await CreateSwarm().ConfigureAwait(false);
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
                CleaningSwarm(swarmA);
                CleaningSwarm(swarmB);
                CleaningSwarm(swarmC);
                CleaningSwarm(swarmD);
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task FindSpecificPeerAsyncFail()
        {
            Swarm swarmA = await CreateSwarm().ConfigureAwait(false);
            Swarm swarmB = await CreateSwarm().ConfigureAwait(false);
            Swarm swarmC = await CreateSwarm().ConfigureAwait(false);
            try
            {
                await StartAsync(swarmA);
                await StartAsync(swarmB);
                await StartAsync(swarmC);

                await swarmA.AddPeersAsync(new BoundPeer[] { swarmB.AsPeer }, null);
                await swarmB.AddPeersAsync(new BoundPeer[] { swarmC.AsPeer }, null);

                CleaningSwarm(swarmB);

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
                CleaningSwarm(swarmA);
                CleaningSwarm(swarmC);
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task FindSpecificPeerAsyncDepthFail()
        {
            Swarm swarmA = await CreateSwarm().ConfigureAwait(false);
            Swarm swarmB = await CreateSwarm().ConfigureAwait(false);
            Swarm swarmC = await CreateSwarm().ConfigureAwait(false);
            Swarm swarmD = await CreateSwarm().ConfigureAwait(false);

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
                CleaningSwarm(swarmA);
                CleaningSwarm(swarmB);
                CleaningSwarm(swarmC);
                CleaningSwarm(swarmD);
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task DoNotFillWhenGetAllBlockAtFirstTimeFromSender()
        {
            Swarm receiver = await CreateSwarm().ConfigureAwait(false);
            Swarm sender = await CreateSwarm().ConfigureAwait(false);
            await StartAsync(receiver);
            await StartAsync(sender);

            receiver.FindNextHashesChunkSize = 8;
            sender.FindNextHashesChunkSize = 8;
            BlockChain chain = sender.BlockChain;

            for (int i = 0; i < 6; i++)
            {
                Block block = chain.ProposeBlock(
                    GenesisProposer, TestUtils.CreateBlockCommit(chain.Tip));
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
                CleaningSwarm(receiver);
                CleaningSwarm(sender);
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task FillWhenGetAChunkOfBlocksFromSender()
        {
            Swarm receiver = await CreateSwarm().ConfigureAwait(false);
            Swarm sender = await CreateSwarm().ConfigureAwait(false);
            await StartAsync(receiver);
            await StartAsync(sender);

            receiver.FindNextHashesChunkSize = 2;
            sender.FindNextHashesChunkSize = 2;
            BlockChain chain = sender.BlockChain;

            for (int i = 0; i < 6; i++)
            {
                Block block = chain.ProposeBlock(
                    GenesisProposer, TestUtils.CreateBlockCommit(chain.Tip));
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
                CleaningSwarm(receiver);
                CleaningSwarm(sender);
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task FillWhenGetAllBlocksFromSender()
        {
            Swarm receiver = await CreateSwarm().ConfigureAwait(false);
            Swarm sender = await CreateSwarm().ConfigureAwait(false);
            await StartAsync(receiver);
            await StartAsync(sender);

            receiver.FindNextHashesChunkSize = 3;
            sender.FindNextHashesChunkSize = 3;
            BlockChain chain = sender.BlockChain;

            for (int i = 0; i < 6; i++)
            {
                Block block = chain.ProposeBlock(
                    GenesisProposer, CreateBlockCommit(chain.Tip));
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
                    3,
                    receiver.BlockChain.Count);

                sender.BroadcastBlock(sender.BlockChain.Tip);

                await receiver.BlockReceived.WaitAsync();
                await receiver.BlockAppended.WaitAsync();
                Log.Debug("Count: {Count}", receiver.BlockChain.Count);
                sender.BroadcastBlock(sender.BlockChain.Tip);
                Assert.Equal(
                    5,
                    receiver.BlockChain.Count);

                sender.BroadcastBlock(sender.BlockChain.Tip);

                await receiver.BlockReceived.WaitAsync();
                await receiver.BlockAppended.WaitAsync();
                Log.Debug("Count: {Count}", receiver.BlockChain.Count);
                sender.BroadcastBlock(sender.BlockChain.Tip);
                Assert.Equal(
                    7,
                    receiver.BlockChain.Count);
            }
            finally
            {
                CleaningSwarm(receiver);
                CleaningSwarm(sender);
            }
        }

        [RetryFact(10, Timeout = Timeout)]
        public async Task GetPeerChainStateAsync()
        {
            var key2 = new PrivateKey();

            Swarm swarm1 = await CreateSwarm().ConfigureAwait(false);
            Swarm swarm2 = await CreateSwarm(key2).ConfigureAwait(false);
            Swarm swarm3 = await CreateSwarm().ConfigureAwait(false);

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

                Block block = swarm2.BlockChain.ProposeBlock(key2);
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
                CleaningSwarm(swarm2);
                CleaningSwarm(swarm3);
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task LastMessageTimestamp()
        {
            Swarm swarm1 = await CreateSwarm().ConfigureAwait(false);
            Swarm swarm2 = await CreateSwarm().ConfigureAwait(false);

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
                CleaningSwarm(swarm1);
                CleaningSwarm(swarm2);
            }
        }

        [RetryFact(10, Timeout = Timeout)]
        public async Task RegulateGetBlocksMsg()
        {
            var options = new SwarmOptions
            {
                TaskRegulationOptions =
                {
                    MaxTransferBlocksTaskCount = 3,
                },
            };
            var apvOptions = new AppProtocolVersionOptions();

            var key = new PrivateKey();
            Swarm swarm = await CreateSwarm(
                    options: options,
                    appProtocolVersionOptions: apvOptions)
                .ConfigureAwait(false);
            NetMQTransport transport = await NetMQTransport.Create(
                key,
                apvOptions,
                new HostOptions("localhost", Enumerable.Empty<IceServer>()));

            try
            {
                await StartAsync(swarm);
                _ = transport.StartAsync();
                await transport.WaitForRunningAsync();
                var tasks = new List<Task>();
                var content = new GetBlocksMsg(new[] { swarm.BlockChain.Genesis.Hash });
                for (int i = 0; i < 5; i++)
                {
                    tasks.Add(
                        Task.Run(async () => await transport.SendMessageAsync(
                            swarm.AsPeer,
                            content,
                            TimeSpan.FromMilliseconds(1000),
                            1,
                            false,
                            default)));
                }

                try
                {
                    await Task.WhenAll(tasks);
                }
                catch (Exception)
                {
                    // ignored
                }

                Assert.Equal(
                    options.TaskRegulationOptions.MaxTransferBlocksTaskCount,
                    tasks.Count(t => t.IsCompletedSuccessfully));
            }
            finally
            {
                CleaningSwarm(swarm);
                await transport.StopAsync(TimeSpan.Zero);
            }
        }

        [RetryFact(10, Timeout = Timeout)]
        public async Task RegulateGetTxsMsg()
        {
            var options = new SwarmOptions
            {
                TaskRegulationOptions =
                {
                    MaxTransferTxsTaskCount = 3,
                },
            };
            var apvOptions = new AppProtocolVersionOptions();

            var key = new PrivateKey();
            Swarm swarm = await CreateSwarm(
                    options: options,
                    appProtocolVersionOptions: apvOptions)
                .ConfigureAwait(false);
            NetMQTransport transport = await NetMQTransport.Create(
                key,
                apvOptions,
                new HostOptions("localhost", Enumerable.Empty<IceServer>()));

            try
            {
                await StartAsync(swarm);
                var fx = new MemoryStoreFixture();
                _ = transport.StartAsync();
                await transport.WaitForRunningAsync();
                var tasks = new List<Task>();
                var content = new GetTxsMsg(new[] { fx.TxId1 });
                for (int i = 0; i < 5; i++)
                {
                    tasks.Add(
                        transport.SendMessageAsync(
                            swarm.AsPeer,
                            content,
                            TimeSpan.FromMilliseconds(1000),
                            1,
                            false,
                            default));
                }

                try
                {
                    await Task.WhenAll(tasks);
                }
                catch (Exception)
                {
                    // ignored
                }

                Assert.Equal(
                    options.TaskRegulationOptions.MaxTransferBlocksTaskCount,
                    tasks.Count(t => t.IsCompletedSuccessfully));
            }
            finally
            {
                CleaningSwarm(swarm);
                await transport.StopAsync(TimeSpan.Zero);
            }
        }

        protected void Dispose(bool disposing)
        {
            if (!_disposed)
            {
                if (disposing)
                {
                    _logger.Debug("Starts to finalize {Resources} resources...", _finalizers.Count);
                    int i = 1;
                    foreach (Func<Task> finalize in _finalizers)
                    {
                        _logger.Debug("Tries to finalize the resource #{Resource}...", i++);
                        finalize().WaitAndUnwrapException();
                    }

                    _logger.Debug("Finished to finalize {Resources} resources", _finalizers.Count);
                    NetMQConfig.Cleanup(false);
                }

                _disposed = true;
            }
        }

        private async Task<Task> StartAsync(
            Swarm swarm,
            int millisecondsBroadcastBlockInterval = 15 * 1000,
            CancellationToken cancellationToken = default)
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

        private Task StopAsync(Swarm swarm)
        {
            return swarm.StopAsync(TimeSpan.FromMilliseconds(10));
        }

        private void CleaningSwarm(Swarm swarm)
        {
            swarm.StopAsync(TimeSpan.FromMilliseconds(10)).WaitAndUnwrapException();
            swarm.Dispose();
        }

        private Task BootstrapAsync(
            Swarm swarm,
            BoundPeer seed,
            CancellationToken cancellationToken = default
        ) =>
            BootstrapAsync(swarm, new[] { seed }, cancellationToken);

        private async Task BootstrapAsync(
            Swarm swarm,
            IEnumerable<BoundPeer> seeds,
            CancellationToken cancellationToken = default)
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

            Log.Debug("TurnProxy is canceled");

            await Task.WhenAny(tasks);
        }

        private class Sleep : IAction
        {
            public IValue PlainValue => Null.Value;

            public IWorld Execute(IActionContext context)
            {
                Thread.Sleep(10);
                return context.PreviousState;
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

            public override Block GetBlock(BlockHash blockHash) =>
                BlockGettable ? base.GetBlock(blockHash) : null;
        }
    }
}
