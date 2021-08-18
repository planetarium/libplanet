using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Net;
using System.Runtime.CompilerServices;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Action;
using Libplanet.Blockchain;
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
        private readonly PrivateKey _privateKey;
        private readonly AppProtocolVersion _appProtocolVersion;

        private readonly AsyncLock _runningMutex;

        private readonly ILogger _logger;
        private readonly IStore _store;

        private CancellationTokenSource _workerCancellationTokenSource;
        private CancellationToken _cancellationToken;
        private ConcurrentDictionary<TxId, BoundPeer> _demandTxIds;

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
        /// <param name="differentAppProtocolVersionEncountered">A delegate called back when a peer
        /// with one different from <paramref name="appProtocolVersion"/>, and their version is
        /// signed by a trusted party (i.e., <paramref name="trustedAppProtocolVersionSigners"/>).
        /// If this callback returns <c>false</c> an encountered peer is ignored.  If this callback
        /// is omitted all peers with different <see cref="AppProtocolVersion"/>s are ignored.
        /// </param>
        /// <param name="trustedAppProtocolVersionSigners"><see cref="PublicKey"/>s of parties
        /// to trust <see cref="AppProtocolVersion"/>s they signed.  To trust any party, pass
        /// <c>null</c>, which is default.</param>
        /// <param name="options">Options for <see cref="Swarm{T}"/>.</param>
        public Swarm(
            BlockChain<T> blockChain,
            PrivateKey privateKey,
            AppProtocolVersion appProtocolVersion,
            int workers = 5,
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
                new ConcurrentDictionary<Peer, DateTimeOffset>();

            TxReceived = new AsyncAutoResetEvent();
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
                .ForContext("Source", $"[{nameof(Swarm<T>)}] ")
                .ForContext("SwarmId", loggerId);

            Options = options ?? new SwarmOptions();
            RoutingTable = new RoutingTable(Address, Options.TableSize, Options.BucketSize);
            Transport = new NetMQTransport(
                RoutingTable,
                _privateKey,
                _appProtocolVersion,
                TrustedAppProtocolVersionSigners,
                workers,
                host,
                listenPort,
                iceServers,
                differentAppProtocolVersionEncountered,
                Options.MinimumBroadcastTarget,
                Options.MessageLifespan);
            Transport.ProcessMessageHandler += ProcessMessageHandler;
            PeerDiscovery = new KademliaProtocol(RoutingTable, Transport, Address);
        }

        ~Swarm()
        {
            // FIXME If possible, we should stop Swarm appropriately here.
            if (Running)
            {
                _logger.Warning(
                    "Swarm is scheduled to destruct, but NetMQTransport progress is still running."
                );
            }
        }

        public bool Running => Transport is NetMQTransport p && p.Running;

        public DnsEndPoint EndPoint => AsPeer is BoundPeer boundPeer ? boundPeer.EndPoint : null;

        public Address Address => _privateKey.ToAddress();

        public Peer AsPeer => Transport.AsPeer;

        /// <summary>
        /// The last time when any message was arrived.
        /// It can be <c>null</c> if no message has been arrived yet.
        /// </summary>
        public DateTimeOffset? LastMessageTimestamp =>
            Running ? Transport.LastMessageTimestamp : (DateTimeOffset?)null;

        public IDictionary<Peer, DateTimeOffset> LastSeenTimestamps { get; private set; }

        public IReadOnlyList<BoundPeer> Peers => RoutingTable.Peers;

        public IReadOnlyList<PeerState> PeersStates => RoutingTable.PeerStates;

        /// <summary>
        /// The <see cref="BlockChain{T}"/> instance this <see cref="Swarm{T}"/> instance
        /// synchronizes with.
        /// </summary>
        public BlockChain<T> BlockChain { get; private set; }

        public IImmutableSet<PublicKey> TrustedAppProtocolVersionSigners { get; }

        public AppProtocolVersion AppProtocolVersion => _appProtocolVersion;

        internal RoutingTable RoutingTable { get; }

        internal IProtocol PeerDiscovery { get; }

        internal ITransport Transport { get; private set; }

        internal AsyncAutoResetEvent TxReceived { get; }

        internal AsyncAutoResetEvent BlockHeaderReceived { get; }

        internal AsyncAutoResetEvent BlockReceived { get; }

        // FIXME: Should have a unit test.
        internal AsyncAutoResetEvent BlockAppended { get; }

        // FIXME: We need some sort of configuration method for it.
        internal int FindNextHashesChunkSize { get; set; } = 500;

        internal AsyncAutoResetEvent PreloadStarted { get; } = new AsyncAutoResetEvent();

        internal AsyncAutoResetEvent BlockDownloadStarted { get; } = new AsyncAutoResetEvent();

        internal SwarmOptions Options { get; }

        /// <summary>
        /// Waits until this <see cref="Swarm{T}"/> instance gets started to run.
        /// </summary>
        /// <seealso cref="NetMQTransport.WaitForRunningAsync()"/>
        /// <returns>A <see cref="Task"/> completed when <see cref="NetMQTransport.Running"/>
        /// property becomes <c>true</c>.</returns>
        public Task WaitForRunningAsync() => (Transport as NetMQTransport)?.WaitForRunningAsync();

        public void Dispose()
        {
            if (!_disposed)
            {
                _workerCancellationTokenSource?.Cancel();
                Transport.Dispose();
                _workerCancellationTokenSource?.Dispose();
                _disposed = true;
            }
        }

        public async Task StopAsync(
            CancellationToken cancellationToken = default(CancellationToken)
        )
        {
            await StopAsync(TimeSpan.FromSeconds(1), cancellationToken);
        }

        public async Task StopAsync(
            TimeSpan waitFor,
            CancellationToken cancellationToken = default(CancellationToken)
        )
        {
            _logger.Debug($"Stopping {nameof(Swarm<T>)}...");
            using (await _runningMutex.LockAsync())
            {
                await Transport.StopAsync(waitFor, cancellationToken);
            }

            BlockDemands = new ConcurrentDictionary<BoundPeer, BlockDemand>();
            _logger.Debug($"{nameof(Swarm<T>)} stopped.");
        }

        /// <summary>
        /// Starts to periodically synchronize the <see cref="BlockChain"/>.
        /// </summary>
        /// <param name="millisecondsDialTimeout">
        /// When the <see cref="Swarm{T}"/> tries to dial each peer in <see cref="Peers"/>,
        /// the dial-up is cancelled after this timeout, and it tries another peer.
        /// If <c>null</c> is given it never gives up dial-ups.
        /// </param>
        /// <param name="millisecondsBroadcastBlockInterval">Time interval between each broadcast
        /// of chain tip.</param>
        /// <param name="millisecondsBroadcastTxInterval">Time interval between each broadcast
        /// of staged transactions.</param>
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
        /// these actions in the behind blocks use <see cref=
        /// "PreloadAsync(TimeSpan?, IProgress{PreloadState}, bool, CancellationToken)"
        /// /> method too.</remarks>
        public async Task StartAsync(
            int millisecondsDialTimeout = 15000,
            int millisecondsBroadcastBlockInterval = 15000,
            int millisecondsBroadcastTxInterval = 5000,
            CancellationToken cancellationToken = default(CancellationToken))
        {
            await StartAsync(
                TimeSpan.FromMilliseconds(millisecondsDialTimeout),
                TimeSpan.FromMilliseconds(millisecondsBroadcastBlockInterval),
                TimeSpan.FromMilliseconds(millisecondsBroadcastTxInterval),
                cancellationToken
            );
        }

        /// <summary>
        /// Starts to periodically synchronize the <see cref="BlockChain"/>.
        /// </summary>
        /// <param name="dialTimeout">
        /// When the <see cref="Swarm{T}"/> tries to dial each peer in <see cref="Peers"/>,
        /// the dial-up is cancelled after this timeout, and it tries another peer.
        /// If <c>null</c> is given it never gives up dial-ups.
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
        /// these actions in the behind blocks use <see cref=
        /// "PreloadAsync(TimeSpan?, IProgress{PreloadState}, bool, CancellationToken)"
        /// /> method too.</remarks>
        public async Task StartAsync(
            TimeSpan dialTimeout,
            TimeSpan broadcastBlockInterval,
            TimeSpan broadcastTxInterval,
            CancellationToken cancellationToken = default(CancellationToken))
        {
            var tasks = new List<Task>();
            _workerCancellationTokenSource = new CancellationTokenSource();
            _cancellationToken = CancellationTokenSource.CreateLinkedTokenSource(
                    _workerCancellationTokenSource.Token, cancellationToken
                ).Token;
            BlockDemands = new ConcurrentDictionary<BoundPeer, BlockDemand>();
            _demandTxIds = new ConcurrentDictionary<TxId, BoundPeer>();
            try
            {
                await Transport.StartAsync(_cancellationToken);
            }
            catch (TransportException te)
            {
                throw new SwarmException("Swarm is already running.", innerException: te);
            }

            _logger.Debug("Starting swarm...");
            _logger.Debug("Peer information : {Peer}", AsPeer);

            try
            {
                tasks.Add(
                    RefreshTableAsync(
                        Options.RefreshPeriod,
                        Options.RefreshLifespan,
                        _cancellationToken));
                tasks.Add(RebuildConnectionAsync(TimeSpan.FromMinutes(30), _cancellationToken));
                tasks.Add(Transport.RunAsync(_cancellationToken));
                tasks.Add(BroadcastBlockAsync(broadcastBlockInterval, _cancellationToken));
                tasks.Add(BroadcastTxAsync(broadcastTxInterval, _cancellationToken));
                tasks.Add(
                    FillBlocksAsync(
                        dialTimeout,
                        Options.PollInterval,
                        Options.MaximumPollPeers,
                        _cancellationToken));
                tasks.Add(ProcessFillTxs(_cancellationToken));
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
                    $"An unexpected exception occurred during {nameof(StartAsync)}(): {e}"
                );
                throw;
            }
        }

        public async Task BootstrapAsync(
           IEnumerable<Peer> seedPeers,
           double pingSeedTimeout,
           double findPeerTimeout,
           int depth = Kademlia.MaxDepth,
           CancellationToken cancellationToken = default(CancellationToken))
        {
            await BootstrapAsync(
                seedPeers,
                TimeSpan.FromMilliseconds(pingSeedTimeout),
                TimeSpan.FromMilliseconds(findPeerTimeout),
                depth,
                cancellationToken);
        }

        /// <summary>
        /// Join to the peer-to-peer network using seed peers.
        /// </summary>
        /// <param name="seedPeers">List of seed peers.</param>
        /// <param name="pingSeedTimeout">Timeout for connecting to seed peers.</param>
        /// <param name="findNeighborsTimeout">Timeout for requesting neighbors.</param>
        /// <param name="depth">Depth to find neighbors of current <see cref="Peer"/>
        /// from seed peers.</param>
        /// <param name="cancellationToken">A cancellation token used to propagate notification
        /// that this operation should be canceled.</param>
        /// <returns>An awaitable task without value.</returns>
        /// <exception cref="SwarmException">Thrown when this <see cref="Swarm{T}"/> instance is
        /// not <see cref="Running"/>.</exception>
        public async Task BootstrapAsync(
            IEnumerable<Peer> seedPeers,
            TimeSpan? pingSeedTimeout,
            TimeSpan? findNeighborsTimeout,
            int depth = Kademlia.MaxDepth,
            CancellationToken cancellationToken = default(CancellationToken))
        {
            if (seedPeers is null)
            {
                throw new ArgumentNullException(nameof(seedPeers));
            }

            IEnumerable<BoundPeer> peers = seedPeers.OfType<BoundPeer>();
            IReadOnlyList<BoundPeer> peersBeforeBootstrap = RoutingTable.Peers;

            if (Options.StaticPeers.Any())
            {
                await AddPeersAsync(Options.StaticPeers, pingSeedTimeout, cancellationToken);
            }

            await PeerDiscovery.BootstrapAsync(
                peers,
                pingSeedTimeout,
                findNeighborsTimeout,
                depth,
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
        /// If <c>null</c> is given it never gives up dial-ups.
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
            return (await DialToExistingPeers(dialTimeout, int.MaxValue, cancellationToken))
                .Select(pp =>
                    new PeerChainState(
                        pp.Item1,
                        pp.Item2?.TipIndex ?? -1,
                        pp.Item2?.TotalDifficulty ?? -1));
        }

        /// <summary>
        /// Preemptively downloads blocks from registered <see cref="Peer"/>s.
        /// </summary>
        /// <param name="dialTimeout">
        /// When the <see cref="Swarm{T}"/> tries to dial each peer in <see cref="Peers"/>,
        /// the dial-up is cancelled after this timeout, and it tries another peer.
        /// If <c>null</c> is given it never gives up dial-ups.
        /// </param>
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
        [SuppressMessage(
            "Microsoft.StyleCop.CSharp.ReadabilityRules",
            "MEN003",
            Justification = "Many lines are just for writing logs.")]
        public async Task PreloadAsync(
            TimeSpan? dialTimeout = null,
            IProgress<PreloadState> progress = null,
            bool render = false,
            CancellationToken cancellationToken = default(CancellationToken)
        )
        {
            using CancellationTokenRegistration ctr = cancellationToken.Register(() =>
                _logger.Information("Preloading is requested to be cancelled.")
            );

            _logger.Debug(
                "The tip before preloading begins: #{TipIndex} {TipHash}",
                BlockChain.Tip.Index,
                BlockChain.Tip.Hash
            );

            var peersWithExcerpts = await GetPeersWithExcerpts(
                BlockChain.Tip, dialTimeout, int.MaxValue, cancellationToken);

            if (!peersWithExcerpts.Any())
            {
                _logger.Information("There is no appropriate peer for preloading.");
                return;
            }

            PreloadStarted.Set();

            BlockChain<T> workspace = BlockChain.Fork(BlockChain.Tip.Hash, inheritRenderers: false);
            var renderSwap = await SyncBlocksAsync(
                peersWithExcerpts,
                workspace,
                progress,
                true,
                render,
                cancellationToken);
            renderSwap();
        }

        /// <summary>
        /// Use <see cref="FindNeighbors"/> messages to to find a <see cref="BoundPeer"/> with
        /// <see cref="Address"/> of <paramref name="target"/>.
        /// </summary>
        /// <param name="target">The <see cref="Address"/> to find.</param>
        /// <param name="depth">Target depth of recursive operation. If -1 is given,
        /// will recursive until the closest <see cref="BoundPeer"/> to the
        /// <paramref name="target"/> is found.</param>
        /// <param name="timeout">
        /// <see cref="TimeSpan"/> for waiting reply of <see cref="FindNeighbors"/>.
        /// If <c>null</c> is given, <see cref="TimeoutException"/> will not be thrown.
        /// </param>
        /// <param name="cancellationToken">A cancellation token used to propagate notification
        /// that this operation should be canceled.</param>
        /// <returns>
        /// A <see cref="BoundPeer"/> with <see cref="Address"/> of <paramref name="target"/>.
        /// Returns <c>null</c> if the peer with address does not exist.
        /// </returns>
        public async Task<BoundPeer> FindSpecificPeerAsync(
            Address target,
            int depth = 3,
            TimeSpan? timeout = null,
            CancellationToken cancellationToken = default(CancellationToken))
        {
            KademliaProtocol kademliaProtocol = (KademliaProtocol)PeerDiscovery;
            return await kademliaProtocol.FindSpecificPeerAsync(
                target,
                depth,
                timeout,
                cancellationToken);
        }

        /// <summary>
        /// Validates all <see cref="Peer"/>s in the routing table by sending a simple message.
        /// </summary>
        /// <param name="timeout">Timeout for this operation. If it is set to <c>null</c>,
        /// wait infinitely until the requested operation is finished.</param>
        /// <param name="cancellationToken">A cancellation token used to propagate notification
        /// that this operation should be canceled.</param>
        /// <returns>An awaitable task without value.</returns>
        public async Task CheckAllPeersAsync(
            TimeSpan? timeout = null,
            CancellationToken cancellationToken = default(CancellationToken))
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
        /// <param name="timeout">Timeout for this operation. If it is set to <c>null</c>,
        /// wait infinitely until the requested operation is finished.</param>
        /// <param name="cancellationToken">A cancellation token used to propagate notification
        /// that this operation should be canceled.</param>
        /// <returns>An awaitable task without value.</returns>
        public async Task AddPeersAsync(
            IEnumerable<Peer> peers,
            TimeSpan? timeout,
            CancellationToken cancellationToken = default(CancellationToken))
        {
            if (Transport is null)
            {
                throw new ArgumentNullException(nameof(Transport));
            }

            if (cancellationToken == default(CancellationToken))
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
            var request = new GetBlockHashes(locator, stop);

            TimeSpan transportTimeout = timeout is { } t && t > Options.BlockHashRecvTimeout
                ? t
                : Options.BlockHashRecvTimeout;
            const string sendMsg =
                "{SessionId}/{SubSessionId}: Sending a " + nameof(GetBlockHashes) +
                " message (locator: {Locator}, stop: {Stop})...";
            _logger.Debug(sendMsg, logSessionId, subSessionId, locator, stop);
            Message parsedMessage = await Transport.SendMessageWithReplyAsync(
                peer,
                request,
                timeout: transportTimeout,
                cancellationToken: cancellationToken
            );

            if (parsedMessage is BlockHashes blockHashes)
            {
                if (blockHashes.StartIndex is long idx)
                {
                    BlockHash[] hashes = blockHashes.Hashes.ToArray();
                    const string msg =
                        "{SessionId}/{SubSessionId}: Received a " + nameof(BlockHashes) +
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
                        "{SessionId}/{SubSessionId}: Received a " + nameof(BlockHashes) +
                        " message, but it has zero hashes.";
                    _logger.Debug(msg, logSessionId, subSessionId);
                }

                yield break;
            }

            string errorMessage =
                $"The response of {nameof(GetBlockHashes)} is expected to be " +
                $"{nameof(BlockHashes)}, not {parsedMessage.GetType().Name}: {parsedMessage}";
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

            var request = new GetBlocks(blockHashesAsArray);
            int hashCount = blockHashesAsArray.Count();

            if (hashCount < 1)
            {
                yield break;
            }

            TimeSpan blockRecvTimeout = Options.BlockRecvTimeout
                                        + TimeSpan.FromSeconds(hashCount);
            if (blockRecvTimeout > Options.MaxTimeout)
            {
                blockRecvTimeout = Options.MaxTimeout;
            }

            IEnumerable<Message> replies = await Transport.SendMessageWithReplyAsync(
                peer,
                request,
                blockRecvTimeout,
                ((hashCount - 1) / request.ChunkSize) + 1,
                cancellationToken
            );

            _logger.Debug("Received replies from {Peer}.", peer);
            int count = 0;

            foreach (Message message in replies)
            {
                cancellationToken.ThrowIfCancellationRequested();

                if (message is Messages.Blocks blockMessage)
                {
                    IList<byte[]> payloads = blockMessage.Payloads;
                    _logger.Debug(
                        "Received {Number} blocks from {Peer}.",
                        payloads.Count,
                        message.Remote);
                    foreach (byte[] payload in payloads)
                    {
                        cancellationToken.ThrowIfCancellationRequested();
                        Block<T> block = Block<T>.Deserialize(payload);

                        yield return block;
                        count++;
                    }
                }
                else
                {
                    string errorMessage =
                        $"Expected a {nameof(Blocks)} message as a response of " +
                        $"the {nameof(GetBlocks)} message, but got a {message.GetType().Name} " +
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
            var request = new GetTxs(txIdsAsArray);
            int txCount = txIdsAsArray.Count();

            _logger.Debug("Required tx count: {Count}.", txCount);

            var txRecvTimeout = Options.TxRecvTimeout + TimeSpan.FromSeconds(txCount);
            if (txRecvTimeout > Options.MaxTimeout)
            {
                txRecvTimeout = Options.MaxTimeout;
            }

            IEnumerable<Message> replies = await Transport.SendMessageWithReplyAsync(
                peer,
                request,
                txRecvTimeout,
                txCount,
                cancellationToken
            );

            foreach (Message message in replies)
            {
                if (message is Messages.Tx parsed)
                {
                    Transaction<T> tx = Transaction<T>.Deserialize(parsed.Payload);
                    yield return tx;
                }
                else
                {
                    string errorMessage =
                        $"Expected {nameof(Tx)} messages as response of " +
                        $"the {nameof(GetTxs)} message, but got a {message.GetType().Name} " +
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
            int i = 0;
            var exceptions = new List<Exception>();
            IComparer<BlockPerception> canonComparer = BlockChain.Policy.CanonicalChainComparer;
            foreach ((BoundPeer peer, IBlockExcerpt excerpt) in peersWithExcerpts)
            {
                i++;
                long peerIndex = excerpt.Index;

                long branchIndex = -1;
                BlockHash branchPoint = default;

                if (!IsBlockNeeded(excerpt))
                {
                    _logger.Verbose(
                        "Skip peer {Peer} because its block excerpt is not needed.",
                        Peers);
                    continue;
                }

                long totalBlocksToDownload = -1;
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
                            break;
                        }

                        previousDownloadedCount = downloaded.Count;

                        // FIXME: First value of totalBlocksToDownload is -1.
                        _logger.Verbose(
                            "Request block hashes to {Peer} (height: {PeerHeight}) using " +
                            "the locator {@Locator}... ({CurrentIndex}/{EstimatedTotalCount})",
                            peer,
                            peerIndex,
                            locator.Select(h => h.ToString()),
                            downloaded.Count,
                            totalBlocksToDownload
                        );

                        IAsyncEnumerable<Tuple<long, BlockHash>> blockHashes =
                            GetBlockHashes(peer, locator, null, null, null, cancellationToken);

                        if (branchIndex == -1 &&
                            await blockHashes.FirstAsync(cancellationToken) is { } t)
                        {
                            t.Deconstruct(out branchIndex, out branchPoint);
                            totalBlocksToDownload = peerIndex - branchIndex;
                        }

                        await foreach (Tuple<long, BlockHash> pair in blockHashes)
                        {
                            pair.Deconstruct(out long dlIndex, out BlockHash dlHash);
                            _logger.Verbose(
                                "Received a block hash from {Peer}: #{BlockIndex} {BlockHash}",
                                peer,
                                dlIndex,
                                dlHash
                            );

                            if (downloaded.Contains(dlHash) || dlHash.Equals(branchPoint))
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
                                        totalBlocksToDownload,
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
                                    idx = branchIndex + downloaded.Count + 1 + idx;
                                }

                                if (idx <= branchIndex)
                                {
                                    return blockChain.Store.IndexBlockHash(blockChain.Id, idx);
                                }

                                int relIdx = (int)(idx - branchIndex - 1);

                                try
                                {
                                    return downloaded[relIdx];
                                }
                                catch (ArgumentOutOfRangeException e)
                                {
                                    const string msg =
                                        "Failed to look up a block hash by its index {Index} " +
                                        "(branchpoint index: {BranchpointIndex}; " +
                                        "downloaded: {Downloaded}).";
                                    _logger.Error(e, msg, arg, branchIndex, downloaded.Count);
                                    return null;
                                }
                            },
                            hash => blockChain.Store.GetBlock<T>(hash) is Block<T> b
                                ? b.Index
                                : branchIndex + 1 + downloaded.IndexOf(hash)
                        );
                    }
                    while (downloaded.Count < totalBlocksToDownload);
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
                    break;
                }

                exceptions.Add(error);
                if (i == peersCount)
                {
                    BoundPeer[] peers = peersWithExcerpts.Select(p => p.Item1).ToArray();
                    _logger.Warning(
                        error,
                        "Failed to fetch demand block hashes from peers: {Peers}",
                        peers
                    );
                    throw new AggregateException(
                        "Failed to fetch demand block hashes from peers: " +
                        string.Join(", ", peers.Select(p => p.ToString())),
                        exceptions
                    );
                }

                const string message =
                    "Failed to fetch demand block hashes from {Peer}; " +
                    "retry with another peer...\n";
                _logger.Debug(error, message, peer, error);
            }
        }

        private void BroadcastBlock(Address? except, Block<T> block)
        {
            _logger.Debug("Trying to broadcast blocks...");
            var message = new BlockHeaderMessage(BlockChain.Genesis.Hash, block.Header);
            BroadcastMessage(except, message);
            _logger.Debug("Block broadcasting complete.");
        }

        private void BroadcastTxs(Address? except, IEnumerable<Transaction<T>> txs)
        {
            List<TxId> txIds = txs.Select(tx => tx.Id).ToList();
            _logger.Debug("Broadcast {TransactionsNumber} txs...", txIds.Count);
            BroadcastTxIds(except, txIds);
        }

        private void BroadcastMessage(Address? except, Message message)
        {
            Transport.BroadcastMessage(except, message);
        }

        private Task<(BoundPeer Peer, ChainStatus ChainStatus)[]> DialToExistingPeers(
            TimeSpan? dialTimeout,
            int max,
            CancellationToken cancellationToken
        )
        {
            // FIXME: It would be better if it returns IAsyncEnumerable<(BoundPeer, ChainStatus)>
            // instead.
            var rnd = new System.Random();
            IEnumerable<Task<(BoundPeer, ChainStatus)>> tasks = Peers.OrderBy(x => rnd.Next())
                .Take(max)
                .Select(
                    peer => Transport.SendMessageWithReplyAsync(
                        peer,
                        new GetChainStatus(),
                        dialTimeout,
                        cancellationToken
                    ).ContinueWith<(BoundPeer, ChainStatus)>(
                        t =>
                        {
                            if (t.IsFaulted || t.IsCanceled ||
                                !(t.Result is ChainStatus chainStatus))
                            {
                                switch (t.Exception?.InnerException)
                                {
                                    case TimeoutException te:
                                        _logger.Debug(
                                            $"TimeoutException occurred during dial to ({peer})."
                                        );
                                        break;
                                    case DifferentAppProtocolVersionException dapve:
                                        _logger.Error(
                                            dapve,
                                            $"Protocol Version is different ({peer}).");
                                        break;
                                    case Exception e:
                                        string msg =
                                            "An unexpected exception occurred during dial to " +
                                            "({Peer}).";
                                        _logger.Error(e, msg, peer);
                                        break;
                                    default:
                                        break;
                                }

                                // Mark to skip
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
                t =>
                {
                    if (t.IsFaulted)
                    {
                        throw t.Exception;
                    }

                    return t.Result
                        .Where(pair => !(pair.Item1 is null || pair.Item2 is null))
                        .ToArray();
                },
                cancellationToken
            );
        }

        private async Task<List<(BoundPeer, IBlockExcerpt)>> GetPeersWithExcerpts(
            Block<T> initialTip,
            TimeSpan? dialTimeout,
            int max,
            CancellationToken cancellationToken)
        {
            BlockHash genesisHash = BlockChain.Genesis.Hash;
            IComparer<BlockPerception> canonComparer = BlockChain.Policy.CanonicalChainComparer;
            BlockPerception tipPerception = BlockChain.PerceiveBlock(initialTip);
            var peersWithChainStatusAndDiff =
                (await DialToExistingPeers(dialTimeout, max, cancellationToken))
                .Where(
                    pp =>
                    {
                        if (!(pp.ChainStatus is ChainStatus chainStatus))
                        {
                            return false;
                        }

                        return genesisHash.Equals(chainStatus.GenesisHash) && canonComparer.Compare(
                            BlockChain.PerceiveBlock(chainStatus, chainStatus.Timestamp),
                            tipPerception
                        ) > 0;
                    })
                .Select(pp => (pp.Peer, pp.ChainStatus, pp.ChainStatus.TotalDifficulty))
                .ToList();

            return peersWithChainStatusAndDiff
                .OrderByDescending(p => p.Item3)
                .Select(p => (p.Item1, (IBlockExcerpt)p.Item2))
                .ToList();
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
                        $"An unexpected exception occurred during {fname}(): {e}"
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
                                    "Broadcast Staged Transactions: [{txIds}]",
                                    string.Join(", ", txIds));
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
                        $"An unexpected exception occurred during {nameof(BroadcastTxAsync)}(): {e}"
                    );
                }
            }
        }

        private void BroadcastTxIds(Address? except, IEnumerable<TxId> txIds)
        {
            var message = new TxIds(Address, txIds);
            BroadcastMessage(except, message);
        }

        private bool IsBlockNeeded(IBlockExcerpt target)
        {
            IComparer<BlockPerception> canonComparer = BlockChain.Policy.CanonicalChainComparer;
            var perception = BlockChain.PerceiveBlock(target);
            return canonComparer.Compare(perception, BlockChain.PerceiveBlock(BlockChain.Tip)) > 0;
        }

        private bool IsDemandNeeded(BoundPeer peer, BlockHeader target)
        {
            IComparer<BlockPerception> canonComparer = BlockChain.Policy.CanonicalChainComparer;
            var perception = BlockChain.PerceiveBlock(target);
            bool needed =
                IsBlockNeeded(target) &&
                (!BlockDemands.ContainsKey(peer) ||
                (!(BlockDemands[peer] is var demand)
                    || (demand.Timestamp + Options.BlockDemandLifespan <
                        DateTimeOffset.UtcNow && !demand.Peer.Equals(peer))
                    || canonComparer.Compare(
                            BlockChain.PerceiveBlock(demand.Header, demand.Timestamp),
                            perception
                        ) < 0));
            _logger.Verbose(
                "Determining if a demand is actually needed: {Need}\nDemand: {Demand}" +
                "\nTip: {Tip}\nBlockDemand: {BlockDemand}\nCanonicalChainComparer: {Comparer}",
                needed ? "Need" : "Not need",
                target.ToExcerptString(),
                BlockChain.Tip.ToExcerptString(),
                BlockDemands.ContainsKey(peer) ? BlockDemands[peer].Header.ToExcerptString() : null,
                canonComparer
            );
            return needed;
        }

        private async Task ProcessFillTxs(CancellationToken cancellationToken)
        {
            while (!cancellationToken.IsCancellationRequested)
            {
                if (_demandTxIds.IsEmpty)
                {
                    await Task.Delay(1, cancellationToken);
                    continue;
                }

                _logger.Debug(
                    "Processing txids: {@txIds}",
                    _demandTxIds.Keys.Select(txid => txid.ToString()));
                var demandTxIds = _demandTxIds.ToArray();
                var demands = new Dictionary<BoundPeer, HashSet<TxId>>();

                foreach (KeyValuePair<TxId, BoundPeer> kv in demandTxIds)
                {
                    if (!demands.ContainsKey(kv.Value))
                    {
                        demands[kv.Value] = new HashSet<TxId>();
                    }

                    demands[kv.Value].Add(kv.Key);
                }

                var txs = new HashSet<Transaction<T>>();
                var tasks = new List<Task<List<Transaction<T>>>>();
                foreach (var kv in demands)
                {
                    IAsyncEnumerable<Transaction<T>> fetched =
                        GetTxsAsync(kv.Key, kv.Value, cancellationToken);
                    ValueTask<List<Transaction<T>>> vt = fetched.ToListAsync(cancellationToken);

                    if (vt.IsCompletedSuccessfully)
                    {
                        txs.UnionWith(vt.Result);
                    }
                    else
                    {
                        tasks.Add(vt.AsTask());
                    }
                }

                try
                {
                    await tasks.WhenAll();
                }
                catch (Exception)
                {
                    _logger.Information(
                        $"Some tasks faulted during {nameof(GetTxsAsync)}().");
                }

                foreach (Task<List<Transaction<T>>> task in tasks)
                {
                    if (!task.IsFaulted)
                    {
                        // `task.Result` is okay because we've already waited.
                        txs.UnionWith(task.Result);
                    }
                }

                txs = new HashSet<Transaction<T>>(
                    txs.Where(tx => BlockChain.Policy.DoesTransactionFollowsPolicy(tx, BlockChain))
                );

                foreach (Transaction<T> tx in txs)
                {
                    try
                    {
                        BlockChain.StageTransaction(tx);
                    }
                    catch (InvalidTxException ite)
                    {
                        _logger.Error(
                            ite,
                            "{TxId} will not be staged since it is invalid.",
                            tx.Id
                        );
                    }
                }

                if (txs.Any())
                {
                    TxReceived.Set();
                    _logger.Debug(
                        "Txs staged successfully: {@txIds}",
                        txs.Select(tx => tx.Id.ToString()));

                    // FIXME: Should exclude peers of source of the transaction ids.
                    BroadcastTxs(null, txs);
                }
                else
                {
                    _logger.Information(
                        "Failed to get transactions to stage: {@txIds}",
                        demandTxIds.Select(txId => txId.ToString()));
                }

                foreach (var kv in demandTxIds)
                {
                    _demandTxIds.TryRemove(kv.Key, out BoundPeer value);
                }
            }
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
            while (!cancellationToken.IsCancellationRequested)
            {
                await Task.Delay(period, cancellationToken);
                Options.StaticPeers.AsParallel().ForAll(async boundPeer =>
                {
                    if (!RoutingTable.Contains(boundPeer))
                    {
                        await AddPeersAsync(
                            new[] { boundPeer },
                            TimeSpan.FromSeconds(3),
                            cancellationToken);
                    }
                });
            }
        }
    }
}
