#nullable disable
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Net;
using System.Runtime.CompilerServices;
using System.Threading;
using System.Threading.Tasks;
using Bencodex;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Net.Messages;
using Libplanet.Net.Protocols;
using Libplanet.Net.Transports;
using Libplanet.Store;
using Libplanet.Tx;
using Nito.AsyncEx;
using Serilog;

namespace Libplanet.Net
{
    public partial class Swarm<T> : IDisposable
        where T : IAction, new()
    {
        private const int InitialBlockDownloadWindow = 100;
        private static readonly Codec Codec = new Codec();

        private readonly PrivateKey _privateKey;
        private readonly AppProtocolVersion _appProtocolVersion;

        private readonly AsyncLock _runningMutex;

        private readonly ILogger _logger;
        private readonly IStore _store;

        private CancellationTokenSource _workerCancellationTokenSource;
        private CancellationToken _cancellationToken;

        private bool _disposed;

        /// <summary>
        /// Creates a <see cref="Swarm{T}"/>.  This constructor in only itself does not start
        /// any communication with the network.
        /// </summary>
        /// <param name="blockChain">A blockchain to publicize on the network.</param>
        /// <param name="privateKey">A private key to sign messages.  The public part of
        /// this key become a part of its end address for being pointed by peers.</param>
        /// <param name="appProtocolVersion">An app protocol to comply.</param>
        /// <param name="workers">The number of background workers (i.e., threads).</param>
        /// <param name="host">A hostname to be a part of a public endpoint, that peers use when
        /// they connect to this node.  Note that this is not a hostname to listen to;
        /// <see cref="Swarm{T}"/> always listens to 0.0.0.0 &amp; ::/0.</param>
        /// <param name="listenPort">A port number to listen to.</param>
        /// <param name="iceServers">
        /// <a href="https://en.wikipedia.org/wiki/Interactive_Connectivity_Establishment">ICE</a>
        /// servers to use for TURN/STUN.  Purposes to traverse NAT.</param>
        /// <param name="differentAppProtocolVersionEncountered">A delegate called back when this
        /// node encounters a peer with one different from <paramref name="appProtocolVersion"/>,
        /// and their version is signed by a trusted party (i.e.,
        /// <paramref name="trustedAppProtocolVersionSigners"/>).
        /// </param>
        /// <param name="trustedAppProtocolVersionSigners"><see cref="PublicKey"/>s of parties who
        /// signed <see cref="AppProtocolVersion"/>s to trust.  To trust any party, pass
        /// <see langword="null"/>, which is the default.</param>
        /// <param name="options">Options for <see cref="Swarm{T}"/>.</param>
        public Swarm(
            BlockChain<T> blockChain,
            PrivateKey privateKey,
            AppProtocolVersion appProtocolVersion,
            int workers = 100,
            string host = null,
            int? listenPort = null,
            IEnumerable<IceServer> iceServers = null,
            DifferentAppProtocolVersionEncountered differentAppProtocolVersionEncountered = null,
            IEnumerable<PublicKey> trustedAppProtocolVersionSigners = null,
            SwarmOptions options = null)
        {
            BlockChain = blockChain ?? throw new ArgumentNullException(nameof(blockChain));
            _store = BlockChain.Store;
            _privateKey = privateKey ?? throw new ArgumentNullException(nameof(privateKey));
            LastSeenTimestamps =
                new ConcurrentDictionary<BoundPeer, DateTimeOffset>();
            BlockHeaderReceived = new AsyncAutoResetEvent();
            BlockAppended = new AsyncAutoResetEvent();
            BlockReceived = new AsyncAutoResetEvent();

            _runningMutex = new AsyncLock();

            _appProtocolVersion = appProtocolVersion;
            TrustedAppProtocolVersionSigners =
                trustedAppProtocolVersionSigners?.ToImmutableHashSet();

            string loggerId = _privateKey.ToAddress().ToHex();
            _logger = Log
                .ForContext<Swarm<T>>()
                .ForContext("Source", nameof(Swarm<T>))
                .ForContext("SwarmId", loggerId);

            Options = options ?? new SwarmOptions();
            TxCompletion = new TxCompletion<BoundPeer, T>(BlockChain, GetTxsAsync, BroadcastTxs);
            RoutingTable = new RoutingTable(Address, Options.TableSize, Options.BucketSize);

            // FIXME: after the initialization of NetMQTransport is fully converted to asynchronous
            // code, the portion initializing the swarm in Agent.cs in NineChronicles should be
            // fixed. for context, refer to
            // https://github.com/planetarium/libplanet/discussions/2303.
            Transport = NetMQTransport.Create(
                _privateKey,
                _appProtocolVersion,
                TrustedAppProtocolVersionSigners,
                workers,
                host,
                listenPort,
                iceServers ?? new List<IceServer>(),
                differentAppProtocolVersionEncountered,
                Options.MessageTimestampBuffer).ConfigureAwait(false).GetAwaiter().GetResult();
            Transport.ProcessMessageHandler.Register(ProcessMessageHandlerAsync);
            PeerDiscovery = new KademliaProtocol(RoutingTable, Transport, Address);
        }

        internal Swarm(
            BlockChain<T> blockChain,
            PrivateKey privateKey,
            AppProtocolVersion appProtocolVersion,
            RoutingTable routingTable,
            ITransport transport,
            IEnumerable<PublicKey> trustedAppProtocolVersionSigners = null,
            SwarmOptions options = null)
        {
            BlockChain = blockChain ?? throw new ArgumentNullException(nameof(blockChain));
            _store = BlockChain.Store;
            _privateKey = privateKey ?? throw new ArgumentNullException(nameof(privateKey));
            LastSeenTimestamps =
                new ConcurrentDictionary<BoundPeer, DateTimeOffset>();
            BlockHeaderReceived = new AsyncAutoResetEvent();
            BlockAppended = new AsyncAutoResetEvent();
            BlockReceived = new AsyncAutoResetEvent();

            _runningMutex = new AsyncLock();
            _appProtocolVersion = appProtocolVersion;
            TrustedAppProtocolVersionSigners =
                trustedAppProtocolVersionSigners?.ToImmutableHashSet();

            string loggerId = _privateKey.ToAddress().ToHex();
            _logger = Log
                .ForContext<Swarm<T>>()
                .ForContext("Source", nameof(Swarm<T>))
                .ForContext("SwarmId", loggerId);

            Options = options ?? new SwarmOptions();
            TxCompletion = new TxCompletion<BoundPeer, T>(BlockChain, GetTxsAsync, BroadcastTxs);
            RoutingTable = routingTable;
            Transport = transport;
            Transport.ProcessMessageHandler.Register(ProcessMessageHandlerAsync);
            PeerDiscovery = new KademliaProtocol(RoutingTable, Transport, Address);
        }

        ~Swarm()
        {
            // FIXME If possible, we should stop Swarm appropriately here.
            if (Running)
            {
                _logger.Warning(
                    "Swarm is scheduled to destruct, but Transport progress is still running."
                );
            }
        }

        public bool Running => Transport?.Running ?? false;

        public DnsEndPoint EndPoint => AsPeer is BoundPeer boundPeer ? boundPeer.EndPoint : null;

        public Address Address => _privateKey.ToAddress();

        public BoundPeer AsPeer => Transport?.AsPeer;

        /// <summary>
        /// The last time when any message was arrived.
        /// It can be <see langword="null"/> if no message has been arrived yet.
        /// </summary>
        public DateTimeOffset? LastMessageTimestamp =>
            Running ? Transport.LastMessageTimestamp : (DateTimeOffset?)null;

        public IDictionary<BoundPeer, DateTimeOffset> LastSeenTimestamps { get; private set; }

        public IReadOnlyList<BoundPeer> Peers => RoutingTable.Peers;

        /// <summary>
        /// The <see cref="BlockChain{T}"/> instance this <see cref="Swarm{T}"/> instance
        /// synchronizes with.
        /// </summary>
        public BlockChain<T> BlockChain { get; private set; }

        /// <summary>
        /// <see cref="PublicKey"/>s of parties who signed <see cref="AppProtocolVersion"/>s to
        /// trust.  In case of <see langword="null"/>, any parties are trusted.
        /// </summary>
        public IImmutableSet<PublicKey> TrustedAppProtocolVersionSigners { get; }

        /// <summary>
        /// The application protocol version to comply.
        /// </summary>
        public AppProtocolVersion AppProtocolVersion => _appProtocolVersion;

        internal RoutingTable RoutingTable { get; }

        internal IProtocol PeerDiscovery { get; }

        internal ITransport Transport { get; private set; }

        internal TxCompletion<BoundPeer, T> TxCompletion { get; }

        internal AsyncAutoResetEvent TxReceived => TxCompletion?.TxReceived;

        internal AsyncAutoResetEvent BlockHeaderReceived { get; }

        internal AsyncAutoResetEvent BlockReceived { get; }

        // FIXME: Should have a unit test.
        internal AsyncAutoResetEvent BlockAppended { get; }

        // FIXME: We need some sort of configuration method for it.
        internal int FindNextHashesChunkSize { get; set; } = 500;

        internal AsyncAutoResetEvent BlockDownloadStarted { get; } = new AsyncAutoResetEvent();

        internal SwarmOptions Options { get; }

        /// <summary>
        /// Waits until this <see cref="Swarm{T}"/> instance gets started to run.
        /// </summary>
        /// <seealso cref="ITransport.WaitForRunningAsync()"/>
        /// <returns>A <see cref="Task"/> completed when <see cref="ITransport.Running"/>
        /// property becomes <see langword="true"/>.</returns>
        public Task WaitForRunningAsync() => Transport?.WaitForRunningAsync();

        public void Dispose()
        {
            if (!_disposed)
            {
                _workerCancellationTokenSource?.Cancel();
                TxCompletion?.Dispose();
                Transport?.Dispose();
                _workerCancellationTokenSource?.Dispose();
                _disposed = true;
            }
        }

        public async Task StopAsync(
            CancellationToken cancellationToken = default
        )
        {
            await StopAsync(TimeSpan.FromSeconds(1), cancellationToken);
        }

        public async Task StopAsync(
            TimeSpan waitFor,
            CancellationToken cancellationToken = default
        )
        {
            _logger.Debug("Stopping watching " + nameof(BlockChain) + " for tip changes...");
            BlockChain.TipChanged -= OnBlockChainTipChanged;

            _logger.Debug($"Stopping {nameof(Swarm<T>)}...");
            using (await _runningMutex.LockAsync())
            {
                await Transport.StopAsync(waitFor, cancellationToken);
            }

            BlockDemandTable = new BlockDemandTable<T>(Options.BlockDemandLifespan);
            BlockCandidateTable = new BlockCandidateTable<T>();
            _logger.Debug($"{nameof(Swarm<T>)} stopped.");
        }

        /// <summary>
        /// Starts to periodically synchronize the <see cref="BlockChain"/>.
        /// </summary>
        /// <param name="cancellationToken">
        /// A cancellation token used to propagate notification that this
        /// operation should be canceled.
        /// </param>
        /// <returns>An awaitable task without value.</returns>
        /// <exception cref="SwarmException">Thrown when this <see cref="Swarm{T}"/> instance is
        /// already <see cref="Running"/>.</exception>
        /// <remarks>If the <see cref="BlockChain"/> has no blocks at all or there are long behind
        /// blocks to caught in the network this method could lead to unexpected behaviors, because
        /// this tries to render <em>all</em> actions in the behind blocks so that there are
        /// a lot of calls to methods of <see cref="BlockChain{T}.Renderers"/> in a short
        /// period of time.  This can lead a game startup slow.  If you want to omit rendering of
        /// these actions in the behind blocks use
        /// <see cref="PreloadAsync(IProgress{PreloadState}, bool, CancellationToken)"/>
        /// method too.</remarks>
        public async Task StartAsync(CancellationToken cancellationToken = default)
        {
            await StartAsync(
                Options.TimeoutOptions.DialTimeout,
                Options.BlockBroadcastInterval,
                Options.TxBroadcastInterval,
                cancellationToken);
        }

        /// <summary>
        /// Starts to periodically synchronize the <see cref="BlockChain"/>.
        /// </summary>
        /// <param name="dialTimeout">
        /// When the <see cref="Swarm{T}"/> tries to dial each peer in <see cref="Peers"/>,
        /// the dial-up is cancelled after this timeout, and it tries another peer.
        /// If <see langword="null"/> is given it never gives up dial-ups.
        /// </param>
        /// <param name="broadcastBlockInterval">Time interval between each broadcast of
        /// chain tip.</param>
        /// <param name="broadcastTxInterval">Time interval between each broadcast of staged
        /// transactions.</param>
        /// <param name="cancellationToken">
        /// A cancellation token used to propagate notification that this
        /// operation should be canceled.
        /// </param>
        /// <returns>An awaitable task without value.</returns>
        /// <exception cref="SwarmException">Thrown when this <see cref="Swarm{T}"/> instance is
        /// already <see cref="Running"/>.</exception>
        /// <remarks>If the <see cref="BlockChain"/> has no blocks at all or there are long behind
        /// blocks to caught in the network this method could lead to unexpected behaviors, because
        /// this tries to render <em>all</em> actions in the behind blocks so that there are
        /// a lot of calls to methods of <see cref="BlockChain{T}.Renderers"/> in a short
        /// period of time.  This can lead a game startup slow.  If you want to omit rendering of
        /// these actions in the behind blocks use
        /// <see cref="PreloadAsync(IProgress{PreloadState}, bool, CancellationToken)"/>
        /// method too.</remarks>
        public async Task StartAsync(
            TimeSpan dialTimeout,
            TimeSpan broadcastBlockInterval,
            TimeSpan broadcastTxInterval,
            CancellationToken cancellationToken = default)
        {
            var tasks = new List<Task>();
            _workerCancellationTokenSource = new CancellationTokenSource();
            _cancellationToken = CancellationTokenSource.CreateLinkedTokenSource(
                    _workerCancellationTokenSource.Token, cancellationToken
                ).Token;
            BlockDemandTable = new BlockDemandTable<T>(Options.BlockDemandLifespan);
            BlockCandidateTable = new BlockCandidateTable<T>();
            if (Transport.Running)
            {
                throw new SwarmException("Swarm is already running.");
            }

            _logger.Debug("Starting swarm...");
            _logger.Debug("Peer information : {Peer}", AsPeer);

            _logger.Debug("Watching the " + nameof(BlockChain) + " for tip changes...");
            BlockChain.TipChanged += OnBlockChainTipChanged;

            try
            {
                tasks.Add(
                    RefreshTableAsync(
                        Options.RefreshPeriod,
                        Options.RefreshLifespan,
                        _cancellationToken));
                tasks.Add(RebuildConnectionAsync(TimeSpan.FromMinutes(30), _cancellationToken));
                tasks.Add(Transport.StartAsync(_cancellationToken));
                tasks.Add(BroadcastBlockAsync(broadcastBlockInterval, _cancellationToken));
                tasks.Add(BroadcastTxAsync(broadcastTxInterval, _cancellationToken));
                tasks.Add(FillBlocksAsync(_cancellationToken));
                tasks.Add(ConsumeBlockCandidates(_cancellationToken));
                tasks.Add(
                    PollBlocksAsync(
                        dialTimeout,
                        Options.TipLifespan,
                        Options.MaximumPollPeers,
                        _cancellationToken
                    )
                );
                if (Options.StaticPeers.Any())
                {
                    tasks.Add(
                        MaintainStaticPeerAsync(
                            Options.StaticPeersMaintainPeriod,
                            _cancellationToken));
                }

                _logger.Debug("Swarm started.");

                await await Task.WhenAny(tasks);
            }
            catch (OperationCanceledException e)
            {
                _logger.Warning(e, $"{nameof(StartAsync)}() is canceled.");
                throw;
            }
            catch (Exception e)
            {
                _logger.Error(
                    e,
                    $"An unexpected exception occurred during {nameof(StartAsync)}()."
                );
                throw;
            }
        }

        /// <summary>
        /// Join to the peer-to-peer network using seed peers.
        /// </summary>
        /// <param name="cancellationToken">A cancellation token used to propagate notification
        /// that this operation should be canceled.</param>
        /// <returns>An awaitable task without value.</returns>
        /// <exception cref="SwarmException">Thrown when this <see cref="Swarm{T}"/> instance is
        /// not <see cref="Running"/>.</exception>
        public async Task BootstrapAsync(CancellationToken cancellationToken = default)
        {
            await BootstrapAsync(
                seedPeers: Options.BootstrapOptions.SeedPeers,
                dialTimeout: Options.BootstrapOptions.DialTimeout,
                searchDepth: Options.BootstrapOptions.SearchDepth,
                cancellationToken: cancellationToken);
        }

        /// <summary>
        /// Join to the peer-to-peer network using seed peers.
        /// </summary>
        /// <param name="seedPeers">List of seed peers.</param>
        /// <param name="dialTimeout">Timeout for connecting to peers.</param>
        /// <param name="searchDepth">Maximum recursion depth when finding neighbors of
        /// current <see cref="BoundPeer"/> from seed peers.</param>
        /// <param name="cancellationToken">A cancellation token used to propagate notification
        /// that this operation should be canceled.</param>
        /// <returns>An awaitable task without value.</returns>
        /// <exception cref="SwarmException">Thrown when this <see cref="Swarm{T}"/> instance is
        /// not <see cref="Running"/>.</exception>
        public async Task BootstrapAsync(
            IEnumerable<BoundPeer> seedPeers,
            TimeSpan? dialTimeout,
            int searchDepth,
            CancellationToken cancellationToken = default)
        {
            if (seedPeers is null)
            {
                throw new ArgumentNullException(nameof(seedPeers));
            }

            IReadOnlyList<BoundPeer> peersBeforeBootstrap = RoutingTable.Peers;

            if (Options.StaticPeers.Any())
            {
                await AddPeersAsync(Options.StaticPeers, dialTimeout, cancellationToken);
            }

            await PeerDiscovery.BootstrapAsync(
                seedPeers,
                dialTimeout,
                searchDepth,
                cancellationToken);

            if (!Transport.Running)
            {
                // Mark added peers as stale if bootstrap is called before transport is running
                // FIXME: Peers added before bootstrap might be updated.
                foreach (BoundPeer peer in RoutingTable.Peers.Except(peersBeforeBootstrap))
                {
                    RoutingTable.AddPeer(peer, DateTimeOffset.MinValue);
                }
            }
        }

        /// <summary>
        /// Broadcasts the given block to peers.
        /// <para>The message is immediately broadcasted, and it is done if the same block has
        /// already been broadcasted before.</para>
        /// </summary>
        /// <param name="block">The block to broadcast to peers.</param>
        /// <remarks>It does not have to be called manually, because <see cref="Swarm{T}"/> in
        /// itself watches <see cref="BlockChain"/> for <see cref="BlockChain{T}.Tip"/> changes and
        /// immediately broadcasts updates if anything changes.</remarks>
        public void BroadcastBlock(Block<T> block)
        {
            BroadcastBlock(null, block);
        }

        public void BroadcastTxs(IEnumerable<Transaction<T>> txs)
        {
            BroadcastTxs(null, txs);
        }

        /// <summary>
        /// Gets the <see cref="PeerChainState"/> of the connected <see cref="Peers"/>.
        /// </summary>
        /// <param name="dialTimeout">
        /// When the <see cref="Swarm{T}"/> tries to dial each peer in <see cref="Peers"/>,
        /// the dial-up is cancelled after this timeout, and it tries another peer.
        /// If <see langword="null"/> is given it never gives up dial-ups.
        /// </param>
        /// <param name="cancellationToken">
        /// A cancellation token used to propagate notification that this
        /// operation should be canceled.
        /// </param>
        /// <returns><see cref="PeerChainState"/> of the connected <see cref="Peers"/>.</returns>
        public async Task<IEnumerable<PeerChainState>> GetPeerChainStateAsync(
            TimeSpan? dialTimeout,
            CancellationToken cancellationToken
        )
        {
            // FIXME: It would be better if it returns IAsyncEnumerable<PeerChainState> instead.
            return (await DialExistingPeers(dialTimeout, int.MaxValue, cancellationToken))
                .Select(pp =>
                    new PeerChainState(
                        pp.Item1,
                        pp.Item2?.TipIndex ?? -1,
                        pp.Item2?.TotalDifficulty ?? -1));
        }

        /// <summary>
        /// Preemptively downloads blocks from registered <see cref="BoundPeer"/>s.
        /// </summary>
        /// <param name="progress">
        /// An instance that receives progress updates for block downloads.
        /// </param>
        /// <param name="render">
        /// The value indicates whether to render blocks and actions while preloading.</param>
        /// <param name="cancellationToken">
        /// A cancellation token used to propagate notification that this
        /// operation should be canceled.
        /// </param>
        /// <returns>
        /// A task without value.
        /// You only can <c>await</c> until the method is completed.
        /// </returns>
        /// <remarks>This does not render downloaded <see cref="IAction"/>s, but fills states only.
        /// </remarks>
        /// <exception cref="AggregateException">Thrown when the given the block downloading is
        /// failed.</exception>
        public async Task PreloadAsync(
            IProgress<PreloadState> progress = null,
            bool render = false,
            CancellationToken cancellationToken = default)
        {
            await PreloadAsync(
                Options.PreloadOptions.DialTimeout,
                Options.PreloadOptions.TipDeltaThreshold,
                progress,
                render,
                cancellationToken);
        }

        /// <summary>
        /// Preemptively downloads blocks from registered <see cref="BoundPeer"/>s.
        /// </summary>
        /// <param name="dialTimeout">
        /// When the <see cref="Swarm{T}"/> tries to dial each peer in <see cref="Peers"/>,
        /// the dial-up is cancelled after this timeout, and it tries another peer.
        /// If <see langword="null"/> is given it never gives up dial-ups.
        /// </param>
        /// <param name="tipDeltaThreshold">The threshold of the difference between the topmost tip
        /// among peers and the local tip.  If the local tip is still behind the topmost tip among
        /// peers by more than this threshold after a preloading is once done, the preloading
        /// is repeated.</param>
        /// <param name="progress">
        /// An instance that receives progress updates for block downloads.
        /// </param>
        /// <param name="render">
        /// The value indicates whether to render blocks and actions while preloading.</param>
        /// <param name="cancellationToken">
        /// A cancellation token used to propagate notification that this
        /// operation should be canceled.
        /// </param>
        /// <returns>
        /// A task without value.
        /// You only can <c>await</c> until the method is completed.
        /// </returns>
        /// <remarks>This does not render downloaded <see cref="IAction"/>s, but fills states only.
        /// </remarks>
        /// <exception cref="AggregateException">Thrown when the given the block downloading is
        /// failed.</exception>
        public async Task PreloadAsync(
            TimeSpan? dialTimeout,
            long tipDeltaThreshold,
            IProgress<PreloadState> progress = null,
            bool render = false,
            CancellationToken cancellationToken = default)
        {
            using CancellationTokenRegistration ctr = cancellationToken.Register(() =>
                _logger.Information("Preloading is requested to be cancelled.")
            );

            _logger.Debug(
                "Tip before preloading: #{TipIndex} {TipHash}",
                BlockChain.Tip.Index,
                BlockChain.Tip.Hash
            );

            // FIXME: Currently `IProgress<PreloadState>` can be rewinded to the previous stage
            // as it starts from the first stage when it's still not close enough to the topmost
            // tip in the network.
            for (int i = 0; !cancellationToken.IsCancellationRequested; i++)
            {
                _logger.Information(
                    "Fetching excerpts from {PeersCount} peers...",
                    Peers.Count);
                var peersWithExcerpts = await GetPeersWithExcerpts(
                    dialTimeout, int.MaxValue, cancellationToken);

                if (!peersWithExcerpts.Any())
                {
                    _logger.Information("There are no appropriate peers for preloading.");
                    break;
                }
                else
                {
                    _logger.Information(
                        "Fetched {PeersWithExcerptsCount} excerpts from {PeersCount} peers.",
                        peersWithExcerpts.Count,
                        Peers.Count);
                }

                Block<T> localTip = BlockChain.Tip;
                IBlockExcerpt topmostTip = peersWithExcerpts
                    .Select(pair => pair.Item2)
                    .Greatest(tip => tip.Index);
                if (topmostTip.Index - (i > 0 ? tipDeltaThreshold : 0L) <= localTip.Index)
                {
                    const string msg =
                        "As the local tip (#{LocalTipIndex} {LocalTipHash}) is close enough to " +
                        "the topmost tip in the network (#{TopmostTipIndex} {TopmostTipHash}), " +
                        "preloading is no longer needed.";
                    _logger.Information(
                        msg,
                        localTip.Index,
                        localTip.Hash,
                        topmostTip.Index,
                        topmostTip.Hash
                    );
                    break;
                }
                else
                {
                    const string msg =
                        "As the local tip (#{LocalTipIndex} {LocalTipHash}) is still not close " +
                        "enough to the topmost tip in the network " +
                        "(#{TopmostTipIndex} {TopmostTipHash}), preload one more time...";
                    _logger.Information(
                        msg,
                        localTip.Index,
                        localTip.Hash,
                        topmostTip.Index,
                        topmostTip.Hash
                    );
                }

                _logger.Information("Preloading (trial #{Trial}) started...", i + 1);
                BlockChain<T> workspace = BlockChain.Fork(localTip.Hash, inheritRenderers: false);
                var renderSwap = await CompleteBlocksAsync(
                    peersWithExcerpts,
                    workspace,
                    progress,
                    render: render,
                    cancellationToken: cancellationToken);
                renderSwap();
            }

            cancellationToken.ThrowIfCancellationRequested();
        }

        /// <summary>
        /// Use <see cref="FindNeighborsMsg"/> messages to to find a <see cref="BoundPeer"/> with
        /// <see cref="Address"/> of <paramref name="target"/>.
        /// </summary>
        /// <param name="target">The <see cref="Address"/> to find.</param>
        /// <param name="depth">Target depth of recursive operation. If -1 is given,
        /// will recursive until the closest <see cref="BoundPeer"/> to the
        /// <paramref name="target"/> is found.</param>
        /// <param name="timeout">
        /// <see cref="TimeSpan"/> for waiting reply of <see cref="FindNeighborsMsg"/>.
        /// If <see langword="null"/> is given, <see cref="TimeoutException"/> will not be thrown.
        /// </param>
        /// <param name="cancellationToken">A cancellation token used to propagate notification
        /// that this operation should be canceled.</param>
        /// <returns>
        /// A <see cref="BoundPeer"/> with <see cref="Address"/> of <paramref name="target"/>.
        /// Returns <see langword="null"/> if the peer with address does not exist.
        /// </returns>
        public async Task<BoundPeer> FindSpecificPeerAsync(
            Address target,
            int depth = 3,
            TimeSpan? timeout = null,
            CancellationToken cancellationToken = default)
        {
            KademliaProtocol kademliaProtocol = (KademliaProtocol)PeerDiscovery;
            return await kademliaProtocol.FindSpecificPeerAsync(
                target,
                depth,
                timeout,
                cancellationToken);
        }

        /// <summary>
        /// Validates all <see cref="BoundPeer"/>s in the routing table by sending a simple message.
        /// </summary>
        /// <param name="timeout">Timeout for this operation. If it is set to
        /// <see langword="null"/>, wait infinitely until the requested operation is finished.
        /// </param>
        /// <param name="cancellationToken">A cancellation token used to propagate notification
        /// that this operation should be canceled.</param>
        /// <returns>An awaitable task without value.</returns>
        public async Task CheckAllPeersAsync(
            TimeSpan? timeout = null,
            CancellationToken cancellationToken = default)
        {
            using CancellationTokenSource cts = CancellationTokenSource
                .CreateLinkedTokenSource(cancellationToken, _cancellationToken);
            cancellationToken = cts.Token;

            KademliaProtocol kademliaProtocol = (KademliaProtocol)PeerDiscovery;
            await kademliaProtocol.CheckAllPeersAsync(timeout, cancellationToken);
        }

        /// <summary>
        /// Adds <paramref name="peers"/> to routing table by sending a simple message.
        /// </summary>
        /// <param name="peers">A list of peers to add.</param>
        /// <param name="timeout">Timeout for this operation. If it is set to
        /// <see langword="null"/>, wait infinitely until the requested operation is finished.
        /// </param>
        /// <param name="cancellationToken">A cancellation token used to propagate notification
        /// that this operation should be canceled.</param>
        /// <returns>An awaitable task without value.</returns>
        public async Task AddPeersAsync(
            IEnumerable<BoundPeer> peers,
            TimeSpan? timeout,
            CancellationToken cancellationToken = default)
        {
            if (Transport is null)
            {
                throw new ArgumentNullException(nameof(Transport));
            }

            if (cancellationToken == default)
            {
                cancellationToken = _cancellationToken;
            }

            await PeerDiscovery.AddPeersAsync(peers, timeout, cancellationToken);
        }

        // FIXME: This would be better if it's merged with GetDemandBlockHashes
        internal async IAsyncEnumerable<Tuple<long, BlockHash>> GetBlockHashes(
            BoundPeer peer,
            BlockLocator locator,
            BlockHash? stop,
            TimeSpan? timeout = null,
            (int, int)? logSessionIds = null,
            [EnumeratorCancellation] CancellationToken cancellationToken = default
        )
        {
            var sessionRandom = new System.Random();
            int logSessionId = logSessionIds is (int i, _) ? i : sessionRandom.Next();
            int subSessionId = logSessionIds is (_, int j) ? j : sessionRandom.Next();
            var request = new GetBlockHashesMsg(locator, stop);

            TimeSpan transportTimeout = timeout is { } t
                && t > Options.TimeoutOptions.GetBlockHashesTimeout
                    ? t
                    : Options.TimeoutOptions.GetBlockHashesTimeout;
            const string sendMsg =
                "{SessionId}/{SubSessionId}: Sending a {MessageType} " +
                "message with locator [{LocatorHead}, ...] (stop: {Stop})...";
            _logger.Debug(
                sendMsg,
                logSessionId,
                subSessionId,
                nameof(Messages.GetBlockHashesMsg),
                locator.FirstOrDefault(),
                stop);
            Message parsedMessage = await Transport.SendMessageAsync(
                peer,
                request,
                timeout: transportTimeout,
                cancellationToken: cancellationToken
            );

            if (parsedMessage is BlockHashesMsg blockHashes)
            {
                if (blockHashes.StartIndex is long idx)
                {
                    BlockHash[] hashes = blockHashes.Hashes.ToArray();
                    const string msg =
                        "{SessionId}/{SubSessionId}: Received a " +
                        nameof(Messages.BlockHashesMsg) +
                        " message with an offset index {OffsetIndex} (total {Length} hashes).";
                    _logger.Debug(msg, logSessionId, subSessionId, idx, hashes.LongLength);
                    foreach (BlockHash hash in hashes)
                    {
                        yield return new Tuple<long, BlockHash>(idx, hash);
                        idx++;
                    }
                }
                else
                {
                    const string msg =
                        "{SessionId}/{SubSessionId}: Received a " +
                        nameof(Messages.BlockHashesMsg) +
                        " message, but it has zero hashes.";
                    _logger.Debug(msg, logSessionId, subSessionId);
                }

                yield break;
            }

            string errorMessage =
                $"The response of {nameof(GetBlockHashes)} is expected to be " +
                $"{nameof(BlockHashesMsg)}, not {parsedMessage.GetType().Name}: {parsedMessage}";
            throw new InvalidMessageException(errorMessage, parsedMessage);
        }

        internal async IAsyncEnumerable<Block<T>> GetBlocksAsync(
            BoundPeer peer,
            IEnumerable<BlockHash> blockHashes,
            [EnumeratorCancellation] CancellationToken cancellationToken
        )
        {
            var blockHashesAsArray = blockHashes as BlockHash[] ?? blockHashes.ToArray();
            _logger.Debug(
                "Try to download {BlockHashes} block(s) from {Peer}...",
                blockHashesAsArray.Length,
                peer
            );

            var request = new GetBlocksMsg(blockHashesAsArray);
            int hashCount = blockHashesAsArray.Count();

            if (hashCount < 1)
            {
                yield break;
            }

            TimeSpan blockRecvTimeout = Options.TimeoutOptions.GetBlocksBaseTimeout
                + Options.TimeoutOptions.GetBlocksPerBlockHashTimeout.Multiply(hashCount);
            if (blockRecvTimeout > Options.TimeoutOptions.MaxTimeout)
            {
                blockRecvTimeout = Options.TimeoutOptions.MaxTimeout;
            }

            IEnumerable<Message> replies = await Transport.SendMessageAsync(
                peer,
                request,
                blockRecvTimeout,
                ((hashCount - 1) / request.ChunkSize) + 1,
                false,
                cancellationToken
            );

            _logger.Debug("Received replies from {Peer}.", peer);
            int count = 0;

            foreach (Message message in replies)
            {
                cancellationToken.ThrowIfCancellationRequested();

                if (message is Messages.BlocksMsg blockMessage)
                {
                    IList<byte[]> payloads = blockMessage.Payloads;
                    _logger.Debug(
                        "Received {Number} blocks from {Peer}.",
                        payloads.Count,
                        message.Remote);
                    foreach (byte[] payload in payloads)
                    {
                        cancellationToken.ThrowIfCancellationRequested();
                        Block<T> block = BlockMarshaler.UnmarshalBlock<T>(
                            (Bencodex.Types.Dictionary)Codec.Decode(payload)
                        );

                        yield return block;
                        count++;
                    }
                }
                else
                {
                    string errorMessage =
                        $"Expected a {nameof(Blocks)} message as a response of " +
                        $"the {nameof(GetBlocksMsg)} message, but got a {message.GetType().Name} " +
                        $"message instead: {message}";
                    throw new InvalidMessageException(errorMessage, message);
                }
            }

            _logger.Debug("Downloaded {Blocks} block(s) from {Peer}.", count, peer);
        }

        internal async IAsyncEnumerable<Transaction<T>> GetTxsAsync(
            BoundPeer peer,
            IEnumerable<TxId> txIds,
            [EnumeratorCancellation] CancellationToken cancellationToken)
        {
            var txIdsAsArray = txIds as TxId[] ?? txIds.ToArray();
            var request = new GetTxsMsg(txIdsAsArray);
            int txCount = txIdsAsArray.Count();

            _logger.Debug("Required tx count: {Count}.", txCount);

            var txRecvTimeout = Options.TimeoutOptions.GetTxsBaseTimeout
                + Options.TimeoutOptions.GetTxsPerTxIdTimeout.Multiply(txCount);
            if (txRecvTimeout > Options.TimeoutOptions.MaxTimeout)
            {
                txRecvTimeout = Options.TimeoutOptions.MaxTimeout;
            }

            IEnumerable<Message> replies = await Transport.SendMessageAsync(
                peer,
                request,
                txRecvTimeout,
                txCount,
                true,
                cancellationToken
            );

            foreach (Message message in replies)
            {
                if (message is Messages.TxMsg parsed)
                {
                    Transaction<T> tx = Transaction<T>.Deserialize(parsed.Payload);
                    yield return tx;
                }
                else
                {
                    string errorMessage =
                        $"Expected {nameof(Tx)} messages as response of " +
                        $"the {nameof(GetTxsMsg)} message, but got a {message.GetType().Name} " +
                        $"message instead: {message}";
                    throw new InvalidMessageException(errorMessage, message);
                }
            }
        }

        internal async IAsyncEnumerable<(long, BlockHash)> GetDemandBlockHashes(
            BlockChain<T> blockChain,
            IList<(BoundPeer, IBlockExcerpt)> peersWithExcerpts,
            IProgress<PreloadState> progress,
            [EnumeratorCancellation] CancellationToken cancellationToken
        )
        {
            BlockLocator locator = blockChain.GetBlockLocator(Options.BranchpointThreshold);
            int peersCount = peersWithExcerpts.Count;
            var exceptions = new List<Exception>();
            IComparer<IBlockExcerpt> canonComparer = BlockChain.Policy.CanonicalChainComparer;
            foreach ((BoundPeer peer, IBlockExcerpt excerpt) in peersWithExcerpts)
            {
                long peerIndex = excerpt.Index;
                long branchingIndex = -1;
                BlockHash branchingBlock = default;

                if (!IsBlockNeeded(excerpt))
                {
                    _logger.Verbose(
                        "Skip peer {Peer} because its block excerpt is not needed.",
                        Peers);
                    continue;
                }

                long totalBlockHashesToDownload = -1;
                var pairsToYield = new List<Tuple<long, BlockHash>>();
                Exception error = null;
                try
                {
                    var downloaded = new List<BlockHash>();
                    int previousDownloadedCount = -1;
                    int stagnant = 0;
                    const int stagnationLimit = 3;
                    do
                    {
                        if (previousDownloadedCount == downloaded.Count &&
                            ++stagnant > stagnationLimit)
                        {
                            const string stagnationMessage =
                                "Stagnation limit of {StagnationLimit} reached while " +
                                "fetching hashes from {Peer}. Continuing operation with " +
                                "{DownloadCount} hashes downloaded so far.";
                            _logger.Information(
                                stagnationMessage,
                                stagnationLimit,
                                peer,
                                downloaded.Count);
                            break;
                        }

                        previousDownloadedCount = downloaded.Count;

                        // FIXME: First value of totalBlocksToDownload is -1.
                        _logger.Verbose(
                            "Request block hashes to {Peer} (height: {PeerHeight}) using " +
                            "locator [{LocatorHead}, ...] ({CurrentIndex}/{EstimatedTotalCount})",
                            peer,
                            peerIndex,
                            locator.FirstOrDefault(),
                            downloaded.Count,
                            totalBlockHashesToDownload
                        );

                        List<Tuple<long, BlockHash>> blockHashes =
                            await GetBlockHashes(
                                peer: peer,
                                locator: locator,
                                stop: null,
                                timeout: null,
                                logSessionIds: null,
                                cancellationToken: cancellationToken)
                                .ToListAsync(cancellationToken);

                        if (branchingIndex == -1 &&
                            blockHashes.FirstOrDefault() is { } t)
                        {
                            t.Deconstruct(out branchingIndex, out branchingBlock);
                            totalBlockHashesToDownload = peerIndex - branchingIndex;
                        }

                        foreach (Tuple<long, BlockHash> pair in blockHashes)
                        {
                            pair.Deconstruct(out long dlIndex, out BlockHash dlHash);
                            _logger.Verbose(
                                "Received a block hash from {Peer}: #{BlockIndex} {BlockHash}",
                                peer,
                                dlIndex,
                                dlHash
                            );

                            if (downloaded.Contains(dlHash) || dlHash.Equals(branchingBlock))
                            {
                                continue;
                            }

                            downloaded.Add(dlHash);

                            // As C# disallows to yield return inside try-catch block,
                            // we need to work around the limitation by having this buffer.
                            pairsToYield.Add(pair);
                            progress?.Report(
                                new BlockHashDownloadState
                                {
                                    EstimatedTotalBlockHashCount = Math.Max(
                                        totalBlockHashesToDownload,
                                        downloaded.Count),
                                    ReceivedBlockHashCount = downloaded.Count,
                                    SourcePeer = peer,
                                }
                            );
                        }

                        locator = new BlockLocator(
                            idx =>
                            {
                                long arg = idx;
                                if (idx < 0)
                                {
                                    idx = branchingIndex + downloaded.Count + 1 + idx;
                                }

                                if (idx <= branchingIndex)
                                {
                                    return blockChain.Store.IndexBlockHash(blockChain.Id, idx);
                                }

                                int relIdx = (int)(idx - branchingIndex - 1);

                                try
                                {
                                    return downloaded[relIdx];
                                }
                                catch (ArgumentOutOfRangeException e)
                                {
                                    const string msg =
                                        "Failed to look up a block hash by its index {Index} " +
                                        "(branching index: {BranchingIndex}; " +
                                        "downloaded: {Downloaded}).";
                                    _logger.Error(e, msg, arg, branchingIndex, downloaded.Count);
                                    return null;
                                }
                            },
                            hash =>
                            {
                                Block<T> block = blockChain.Store.GetBlock<T>(hash);
                                return block is { } b
                                    ? b.Index
                                    : branchingIndex + 1 + downloaded.IndexOf(hash);
                            });
                    }
                    while (downloaded.Count < totalBlockHashesToDownload);
                }
                catch (Exception e)
                {
                    error = e;
                }

                foreach (Tuple<long, BlockHash> pair in pairsToYield)
                {
                    yield return pair.ToValueTuple();
                }

                if (error is null)
                {
                    yield break;
                }
                else
                {
                    const string message =
                        "Failed to fetch demand block hashes from {Peer}; " +
                        "retry with another peer...\n";
                    _logger.Debug(error, message, peer, error);
                    exceptions.Add(error);
                }
            }

            BoundPeer[] peers = peersWithExcerpts.Select(p => p.Item1).ToArray();
            _logger.Warning(
                "Failed to fetch demand block hashes from peers: {Peers}",
                peers);
            throw new AggregateException(
                "Failed to fetch demand block hashes from peers: " +
                string.Join(", ", peers.Select(p => p.ToString())),
                exceptions);
        }

        private void BroadcastBlock(Address? except, Block<T> block)
        {
            _logger.Debug("Trying to broadcast blocks...");
            var message = new BlockHeaderMsg(BlockChain.Genesis.Hash, block.Header);
            BroadcastMessage(except, message);
            _logger.Debug("Block broadcasting complete.");
        }

        private void BroadcastTxs(BoundPeer except, IEnumerable<Transaction<T>> txs)
        {
            List<TxId> txIds = txs.Select(tx => tx.Id).ToList();
            _logger.Debug("Broadcasting {TxIdCount} txIds...", txIds.Count);
            BroadcastTxIds(except?.Address, txIds);
        }

        private void BroadcastMessage(Address? except, Message message)
        {
            Transport.BroadcastMessage(
                RoutingTable.PeersToBroadcast(except, Options.MinimumBroadcastTarget),
                message);
        }

        /// <summary>
        /// Gets <see cref="IBlockExcerpt"/>es from randomly selected <see cref="BoundPeer"/>s
        /// from <see cref="Peers"/> with each <see cref="IBlockExcerpt"/> tied to
        /// its originating <see cref="BoundPeer"/>.
        /// </summary>
        /// <param name="dialTimeout">Timeout for each dialing operation to
        /// a <see cref="BoundPeer"/> in <see cref="Peers"/>.  Not having a timeout limit
        /// is equivalent to setting this value to <see langword="null"/>.</param>
        /// <param name="maxPeersToDial">Maximum number of <see cref="BoundPeer"/>s to dial.</param>
        /// <param name="cancellationToken">A cancellation token used to propagate notification
        /// that this operation should be canceled.</param>
        /// <returns>An awaitable task with a <see cref="List{T}"/> of tuples
        /// of <see cref="BoundPeer"/> and <see cref="IBlockExcerpt"/> ordered by
        /// the <see cref="IBlockPolicy{T}.CanonicalChainComparer"/> given by
        /// <see cref="BlockChain{T}.Policy"/> in descending order.</returns>
        private async Task<List<(BoundPeer, IBlockExcerpt)>> GetPeersWithExcerpts(
            TimeSpan? dialTimeout,
            int maxPeersToDial,
            CancellationToken cancellationToken)
        {
            Block<T> tip = BlockChain.Tip;
            BlockHash genesisHash = BlockChain.Genesis.Hash;
            IComparer<IBlockExcerpt> canonComparer = BlockChain.Policy.CanonicalChainComparer;
            return (await DialExistingPeers(dialTimeout, maxPeersToDial, cancellationToken))
                .Where(
                    pair => pair.Item2 is { } chainStatus &&
                        genesisHash.Equals(chainStatus.GenesisHash) &&
                        canonComparer.Compare(chainStatus, tip) > 0)
                .Select(pair => (pair.Item1, (IBlockExcerpt)pair.Item2))
                .OrderByDescending(pair => pair.Item2, canonComparer)
                .ToList();
        }

        /// <summary>
        /// Gets <see cref="ChainStatusMsg"/>es from randomly selected <see cref="BoundPeer"/>s
        /// from <see cref="Peers"/> with each <see cref="ChainStatusMsg"/> tied to
        /// its originating <see cref="BoundPeer"/>.
        /// </summary>
        /// <param name="dialTimeout">Timeout for each dialing operation to
        /// a <see cref="BoundPeer"/> in <see cref="Peers"/>.  Not having a timeout limit
        /// is equivalent to setting this value to <see langword="null"/>.</param>
        /// <param name="maxPeersToDial">Maximum number of <see cref="BoundPeer"/>s to dial.</param>
        /// <param name="cancellationToken">A cancellation token used to propagate notification
        /// that this operation should be canceled.</param>
        /// <returns>An awaitable task with an <see cref="Array"/> of tuples
        /// of <see cref="BoundPeer"/> and <see cref="ChainStatusMsg"/> where
        /// <see cref="ChainStatusMsg"/> can be <see langword="null"/> if dialing fails for
        /// a selected <see cref="BoundPeer"/>.</returns>
        private Task<(BoundPeer, ChainStatusMsg)[]> DialExistingPeers(
            TimeSpan? dialTimeout,
            int maxPeersToDial,
            CancellationToken cancellationToken)
        {
            // FIXME: It would be better if it returns IAsyncEnumerable<(BoundPeer, ChainStatus)>
            // instead.
            void LogException(BoundPeer peer, Task<Message> task)
            {
                switch (task.Exception?.InnerException)
                {
                    case CommunicationFailException cfe:
                        _logger.Debug(
                            cfe,
                            "Failed to dail {Peer}.",
                            peer);
                        break;
                    case Exception e:
                        string msg =
                            "An unexpected exception occurred while dialing " +
                            "({Peer}).";
                        _logger.Error(e, msg, peer);
                        break;
                    default:
                        break;
                }
            }

            var rnd = new System.Random();
            IEnumerable<Task<(BoundPeer, ChainStatusMsg)>> tasks = Peers.OrderBy(_ => rnd.Next())
                .Take(maxPeersToDial)
                .Select(
                    peer => Transport.SendMessageAsync(
                        peer,
                        new GetChainStatusMsg(),
                        dialTimeout,
                        cancellationToken
                    ).ContinueWith<(BoundPeer, ChainStatusMsg)>(
                        task =>
                        {
                            if (task.IsFaulted || task.IsCanceled ||
                                !(task.Result is ChainStatusMsg chainStatus))
                            {
                                // Log and mark to skip
                                LogException(peer, task);
                                return (peer, null);
                            }
                            else
                            {
                                return (peer, chainStatus);
                            }
                        },
                        cancellationToken
                    )
                );

            return Task.WhenAll(tasks).ContinueWith(
                task =>
                {
                    if (task.IsFaulted)
                    {
                        throw task.Exception;
                    }

                    return task.Result.ToArray();
                },
                cancellationToken
            );
        }

        private async Task BroadcastBlockAsync(
            TimeSpan broadcastBlockInterval,
            CancellationToken cancellationToken)
        {
            const string fname = nameof(BroadcastBlockAsync);
            while (!cancellationToken.IsCancellationRequested)
            {
                try
                {
                    await Task.Delay(broadcastBlockInterval, cancellationToken);
                    if (BlockChain.Tip is { } tip)
                    {
                        BroadcastBlock(tip);
                    }
                }
                catch (OperationCanceledException e)
                {
                    _logger.Warning(e, $"{fname}() is canceled.");
                    throw;
                }
                catch (Exception e)
                {
                    _logger.Error(
                        e,
                        $"An unexpected exception occurred during {fname}()."
                    );
                }
            }
        }

        private async Task BroadcastTxAsync(
            TimeSpan broadcastTxInterval,
            CancellationToken cancellationToken)
        {
            while (!cancellationToken.IsCancellationRequested)
            {
                try
                {
                    await Task.Delay(broadcastTxInterval, cancellationToken);

                    await Task.Run(
                        () =>
                        {
                            List<TxId> txIds = BlockChain
                                .GetStagedTransactionIds()
                                .ToList();

                            if (txIds.Any())
                            {
                                _logger.Debug(
                                    "Broadcasting {TxCount} staged transactions...",
                                    txIds.Count);
                                BroadcastTxIds(null, txIds);
                            }
                        }, cancellationToken);
                }
                catch (OperationCanceledException e)
                {
                    _logger.Warning(e, $"{nameof(BroadcastTxAsync)}() is canceled.");
                    throw;
                }
                catch (Exception e)
                {
                    _logger.Error(
                        e,
                        $"An unexpected exception occurred during {nameof(BroadcastTxAsync)}()."
                    );
                }
            }
        }

        private void BroadcastTxIds(Address? except, IEnumerable<TxId> txIds)
        {
            var message = new TxIdsMsg(txIds);
            BroadcastMessage(except, message);
        }

        /// <summary>
        /// Checks if the corresponding <see cref="Block{T}"/> to a given
        /// <see cref="IBlockExcerpt"/> is needed for <see cref="BlockChain"/>.
        /// </summary>
        /// <param name="target">The <see cref="IBlockExcerpt"/> to compare to the current
        /// <see cref="BlockChain{T}.Tip"/> of <see cref="BlockChain"/>.</param>
        /// <returns><see langword="true"/> if the corresponding <see cref="Block{T}"/> to
        /// <paramref name="target"/> is needed, otherwise, <see langword="false"/>.</returns>
        private bool IsBlockNeeded(IBlockExcerpt target)
        {
            IComparer<IBlockExcerpt> canonComparer = BlockChain.Policy.CanonicalChainComparer;
            return canonComparer.Compare(target, BlockChain.Tip) > 0;
        }

        private async Task RefreshTableAsync(
            TimeSpan period,
            TimeSpan maxAge,
            CancellationToken cancellationToken)
        {
            while (!cancellationToken.IsCancellationRequested)
            {
                try
                {
                    await PeerDiscovery.RefreshTableAsync(maxAge, cancellationToken);
                    await PeerDiscovery.CheckReplacementCacheAsync(cancellationToken);
                    await Task.Delay(period, cancellationToken);
                }
                catch (OperationCanceledException e)
                {
                    _logger.Warning(e, $"{nameof(RefreshTableAsync)}() is cancelled.");
                    throw;
                }
                catch (Exception e)
                {
                    var msg = "Unexpected exception occurred during " +
                              $"{nameof(RefreshTableAsync)}(): {{0}}";
                    _logger.Warning(e, msg, e);
                }
            }
        }

        private async Task RebuildConnectionAsync(
            TimeSpan period,
            CancellationToken cancellationToken)
        {
            while (!cancellationToken.IsCancellationRequested)
            {
                try
                {
                    await Task.Delay(period, cancellationToken);
                    await PeerDiscovery.RebuildConnectionAsync(
                        Kademlia.MaxDepth,
                        cancellationToken);
                }
                catch (OperationCanceledException e)
                {
                    _logger.Warning(e, $"{nameof(RebuildConnectionAsync)}() is cancelled.");
                    throw;
                }
                catch (Exception e)
                {
                    var msg = "Unexpected exception occurred during " +
                              $"{nameof(RebuildConnectionAsync)}(): {{0}}";
                    _logger.Warning(e, msg, e);
                }
            }
        }

        private async Task MaintainStaticPeerAsync(
            TimeSpan period,
            CancellationToken cancellationToken)
        {
            TimeSpan timeout = TimeSpan.FromSeconds(3);
            while (!cancellationToken.IsCancellationRequested)
            {
                var tasks = Options.StaticPeers
                    .Where(peer => !RoutingTable.Contains(peer))
                    .Select(async peer =>
                    {
                        try
                        {
                            await AddPeersAsync(new[] { peer }, timeout, cancellationToken);
                        }
                        catch (TimeoutException)
                        {
                        }
                    });
                await Task.WhenAll(tasks);
                await Task.Delay(period, cancellationToken);
            }
        }
    }
}
