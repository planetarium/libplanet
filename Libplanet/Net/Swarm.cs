using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Net;
using System.Runtime.CompilerServices;
using System.Security.Cryptography;
using System.Threading;
using System.Threading.Tasks;
using AsyncIO;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Net.Messages;
using Libplanet.Net.Protocols;
using Libplanet.Store;
using Libplanet.Tx;
using Nito.AsyncEx;
using Serilog;
using Serilog.Events;

namespace Libplanet.Net
{
    public class Swarm<T> : IDisposable
        where T : IAction, new()
    {
        private const int InitialBlockDownloadWindow = 100;
        private static readonly TimeSpan MaxTimeout = TimeSpan.FromSeconds(150);
        private static readonly TimeSpan BlockRecvTimeout = TimeSpan.FromSeconds(15);
        private static readonly TimeSpan TxRecvTimeout = TimeSpan.FromSeconds(3);
        private static readonly TimeSpan RecentStateRecvTimeout = TimeSpan.FromSeconds(150);
        private readonly PrivateKey _privateKey;
        private readonly AppProtocolVersion _appProtocolVersion;

        private readonly AsyncLock _blockSyncMutex;
        private readonly AsyncLock _runningMutex;

        private readonly ILogger _logger;
        private readonly IStore _store;

        private CancellationTokenSource _workerCancellationTokenSource;
        private CancellationToken _cancellationToken;

        private (long, BoundPeer, HashDigest<SHA256>)? _demandBlockHash;
        private ConcurrentDictionary<TxId, BoundPeer> _demandTxIds;

        static Swarm()
        {
            if (!(Type.GetType("Mono.Runtime") is null))
            {
                ForceDotNet.Force();
            }
        }

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
        public Swarm(
            BlockChain<T> blockChain,
            PrivateKey privateKey,
            AppProtocolVersion appProtocolVersion,
            int workers = 5,
            string host = null,
            int? listenPort = null,
            IEnumerable<IceServer> iceServers = null,
            DifferentAppProtocolVersionEncountered differentAppProtocolVersionEncountered = null,
            IEnumerable<PublicKey> trustedAppProtocolVersionSigners = null)
            : this(
                blockChain,
                privateKey,
                appProtocolVersion,
                null,
                null,
                workers,
                host,
                listenPort,
                null,
                iceServers,
                differentAppProtocolVersionEncountered,
                trustedAppProtocolVersionSigners)
        {
        }

        internal Swarm(
            BlockChain<T> blockChain,
            PrivateKey privateKey,
            AppProtocolVersion appProtocolVersion,
            int? tableSize,
            int? bucketSize,
            int workers = 5,
            string host = null,
            int? listenPort = null,
            DateTimeOffset? createdAt = null,
            IEnumerable<IceServer> iceServers = null,
            DifferentAppProtocolVersionEncountered differentAppProtocolVersionEncountered = null,
            IEnumerable<PublicKey> trustedAppProtocolVersionSigners = null)
        {
            BlockChain = blockChain ?? throw new ArgumentNullException(nameof(blockChain));
            _store = BlockChain.Store;
            _privateKey = privateKey ?? throw new ArgumentNullException(nameof(privateKey));
            LastSeenTimestamps =
                new ConcurrentDictionary<Peer, DateTimeOffset>();

            DateTimeOffset now = createdAt.GetValueOrDefault(
                DateTimeOffset.UtcNow);
            LastReceived = now;
            TxReceived = new AsyncAutoResetEvent();
            BlockHeaderReceived = new AsyncAutoResetEvent();
            BlockAppended = new AsyncAutoResetEvent();
            BlockReceived = new AsyncAutoResetEvent();

            _blockSyncMutex = new AsyncLock();
            _runningMutex = new AsyncLock();

            _appProtocolVersion = appProtocolVersion;
            TrustedAppProtocolVersionSigners =
                trustedAppProtocolVersionSigners?.ToImmutableHashSet();

            string loggerId = _privateKey.ToAddress().ToHex();
            _logger = Log.ForContext<Swarm<T>>()
                .ForContext("SwarmId", loggerId);

            Transport = new NetMQTransport(
                _privateKey,
                _appProtocolVersion,
                TrustedAppProtocolVersionSigners,
                tableSize,
                bucketSize,
                workers,
                host,
                listenPort,
                iceServers,
                differentAppProtocolVersionEncountered,
                ProcessMessageHandler,
                _logger);
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

        public DateTimeOffset LastReceived { get; private set; }

        public IDictionary<Peer, DateTimeOffset> LastSeenTimestamps
        {
            get;
            private set;
        }

        public IEnumerable<BoundPeer> Peers => Transport.Peers;

        /// <summary>
        /// The <see cref="BlockChain{T}"/> instance this <see cref="Swarm{T}"/> instance
        /// synchronizes with.
        /// </summary>
        public BlockChain<T> BlockChain { get; private set; }

        public IImmutableSet<PublicKey> TrustedAppProtocolVersionSigners { get; }

        internal ITransport Transport { get; private set; }

        internal IProtocol Protocol => (Transport as NetMQTransport)?.Protocol;

        internal AsyncAutoResetEvent TxReceived { get; }

        internal AsyncAutoResetEvent BlockHeaderReceived { get; }

        internal AsyncAutoResetEvent BlockReceived { get; }

        // FIXME: Should have a unit test.
        internal AsyncAutoResetEvent BlockAppended { get; }

        internal TimeSpan BlockHashRecvTimeout { get; set; } = TimeSpan.FromSeconds(30);

        // FIXME: We need some sort of configuration method for it.
        internal int FindNextHashesChunkSize { get; set; } = 500;

        internal int FindNextStatesChunkSize { get; set; } = 2500;

        internal AsyncAutoResetEvent PreloadStarted { get; } = new AsyncAutoResetEvent();

        internal AsyncAutoResetEvent FillBlocksAsyncStarted { get; } = new AsyncAutoResetEvent();

        internal AsyncAutoResetEvent FillBlocksAsyncFailed { get; } = new AsyncAutoResetEvent();

        /// <summary>
        /// Waits until this <see cref="Swarm{T}"/> instance gets started to run.
        /// </summary>
        /// <returns>A <see cref="Task"/> completed when <see cref="NetMQTransport.Running"/>
        /// property becomes <c>true</c>.</returns>
        public Task WaitForRunningAsync() => (Transport as NetMQTransport)?.WaitForRunningAsync();

        public void Dispose()
        {
            Transport.Dispose();
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
            _workerCancellationTokenSource?.Cancel();
            _logger.Debug($"Stopping {nameof(Swarm<T>)}...");
            using (await _runningMutex.LockAsync())
            {
                await Transport.StopAsync(waitFor, cancellationToken);
            }

            _logger.Debug($"{nameof(Swarm<T>)} stopped.");
        }

        public async Task StartAsync(
            int millisecondsDialTimeout = 15000,
            int millisecondsBroadcastTxInterval = 5000,
            CancellationToken cancellationToken = default(CancellationToken))
        {
            await StartAsync(
                TimeSpan.FromMilliseconds(millisecondsDialTimeout),
                TimeSpan.FromMilliseconds(millisecondsBroadcastTxInterval),
                cancellationToken
            );
        }

        /// <summary>
        /// Starts to periodically synchronize the <see cref="BlockChain"/>.
        /// </summary>
        /// <param name="dialTimeout">
        /// A timeout value for dialing.
        /// </param>
        /// <param name="broadcastTxInterval">The time period of exchange of staged transactions.
        /// </param>
        /// <param name="cancellationToken">
        /// A cancellation token used to propagate notification that this
        /// operation should be canceled.
        /// </param>
        /// <returns>An awaitable task without value.</returns>
        /// <exception cref="SwarmException">Thrown when this <see cref="Swarm{T}"/> instance is
        /// already <see cref="Running"/>.</exception>
        /// <remarks>If the <see cref="BlockChain"/> has no blocks at all or there are long behind
        /// blocks to caught in the network this method could lead to unexpected behaviors, because
        /// this tries to <see cref="IAction.Render"/> <em>all</em> actions in the behind blocks
        /// so that there are a lot of calls to <see cref="IAction.Render"/> method in a short
        /// period of time.  This can lead a game startup slow.  If you want to omit rendering of
        /// these actions in the behind blocks use <see cref=
        /// "PreloadAsync(TimeSpan?, IProgress{PreloadState}, IImmutableSet{Address},
        /// EventHandler{PreloadBlockDownloadFailEventArgs}, CancellationToken)"
        /// /> method too.</remarks>
        public async Task StartAsync(
            TimeSpan dialTimeout,
            TimeSpan broadcastTxInterval,
            CancellationToken cancellationToken = default(CancellationToken))
        {
            var tasks = new List<Task>();
            _workerCancellationTokenSource = new CancellationTokenSource();
            _cancellationToken = CancellationTokenSource.CreateLinkedTokenSource(
                    _workerCancellationTokenSource.Token, cancellationToken
                ).Token;
            _demandBlockHash = null;
            _demandTxIds = new ConcurrentDictionary<TxId, BoundPeer>();
            await Transport.StartAsync(_cancellationToken);

            _logger.Debug("Starting swarm...");
            _logger.Debug("Peer information : {Peer}", AsPeer);

            try
            {
                tasks.Add(Transport.RunAsync(_cancellationToken));
                tasks.Add(BroadcastTxAsync(broadcastTxInterval, _cancellationToken));
                tasks.Add(ProcessFillblock(_cancellationToken));
                tasks.Add(ProcessFillTxs(_cancellationToken));
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

            await Transport.BootstrapAsync(
                peers,
                pingSeedTimeout,
                findNeighborsTimeout,
                depth,
                cancellationToken);
        }

        public void BroadcastBlock(Block<T> block)
        {
            BroadcastBlock(null, block);
        }

        public void BroadcastTxs(IEnumerable<Transaction<T>> txs)
        {
            BroadcastTxs(null, txs);
        }

        public string TraceTable()
        {
            return Transport is null ? string.Empty : (Transport as NetMQTransport)?.Trace();
        }

        /// <summary>
        /// Preemptively downloads blocks from registered <see cref="Peer"/>s.
        /// </summary>
        /// <param name="dialTimeout">
        /// A timeout value for dialing.
        /// </param>
        /// <param name="progress">
        /// An instance that receives progress updates for block downloads.
        /// </param>
        /// <param name="trustedStateValidators">
        /// If any peer in this set is reachable and there are no built-up
        /// blocks in a current node, <see cref="Swarm{T}"/> receives the latest
        /// states of the major blockchain from that trusted peer,
        /// which is also calculated by that peer, instead of autonomously
        /// calculating the states from scratch. Note that this option is
        /// intended to be exposed to end users through a feasible user
        /// interface so that they can decide whom to trust for themselves.
        /// </param>
        /// <param name="blockDownloadFailed">
        /// The <see cref="EventHandler" /> triggered when block downloading fails.
        /// </param>
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
        /// failed and if <paramref name="blockDownloadFailed "/> is <c>null</c>.</exception>
        [SuppressMessage(
            "Microsoft.StyleCop.CSharp.ReadabilityRules",
            "MEN003",
            Justification = "Many lines are just for writing logs.")]
        public async Task PreloadAsync(
            TimeSpan? dialTimeout = null,
            IProgress<PreloadState> progress = null,
            IImmutableSet<Address> trustedStateValidators = null,
            EventHandler<PreloadBlockDownloadFailEventArgs> blockDownloadFailed = null,
            CancellationToken cancellationToken = default(CancellationToken)
        )
        {
            cancellationToken.Register(() =>
                _logger.Information("Preloading is requested to be cancelled.")
            );

            trustedStateValidators ??= ImmutableHashSet<Address>.Empty;

            Block<T> initialTip = BlockChain.Tip;
            BlockLocator initialLocator = BlockChain.GetBlockLocator();
            _logger.Debug(
                "The tip before preloading begins: #{TipIndex} {TipHash}",
                BlockChain.Tip.Index,
                BlockChain.Tip.Hash
            );

            var peersWithHeight = (await DialToExistingPeers(dialTimeout, cancellationToken))
                .Where(pp => pp.Item2.TipIndex > (initialTip?.Index ?? -1))
                .Select(pp => (pp.Item1, pp.Item2.TipIndex))
                .ToList();

            if (!peersWithHeight.Any())
            {
                _logger.Information("There is no appropriate peer for preloading.");
                return;
            }

            peersWithHeight = peersWithHeight.OrderByDescending(p => p.Item2).ToList();

            PreloadStarted.Set();

            // As preloading takes long, the blockchain data can corrupt if a program suddenly
            // terminates during preloading is going on.  In order to make preloading done
            // all or nothing (i.e., atomic), we first fork the chain and stack up preloaded data
            // upon that forked workspace, and then if preloading ends replace the existing
            // blockchain with it.
            BlockChain<T> workspace = initialTip is Block<T> tip
                ? BlockChain.Fork(tip.Hash)
                : new BlockChain<T>(BlockChain.Policy, _store, Guid.NewGuid(), BlockChain.Genesis);
            Guid wId = workspace.Id;
            IStore wStore = workspace.Store;

            var complete = false;

            try
            {
                FillBlocksAsyncStarted.Set();

                var blockCompletion = new BlockCompletion<BoundPeer, T>(
                    completionPredicate: workspace.ContainsBlock,
                    window: InitialBlockDownloadWindow
                );

                long totalBlocksToDownload = 0L;
                long receivedBlockCount = 0L;
                short lapCount = 0;
                Block<T> tipCandidate = initialTip;

                Block<T> tempTip = tipCandidate;

                try
                {
                    // From the second lap, as it's catching up the latest blocks made
                    // in very short time, do not report the progress.  Even if it's reported,
                    // it can be very confusing, because it looks like BlockHashDownloadState
                    // recurring after later phases like BlockDownloadState.
                    IProgress<PreloadState> demandProgress = lapCount++ < 1 ? progress : null;

                    var demandBlockHashes = GetDemandBlockHashes(
                        workspace,
                        peersWithHeight,
                        demandProgress,
                        cancellationToken
                    ).WithCancellation(cancellationToken);

                    await foreach (var pair in demandBlockHashes)
                    {
                        (long index, HashDigest<SHA256> hash) = pair;
                        cancellationToken.ThrowIfCancellationRequested();

                        if (index == 0 && !hash.Equals(workspace.Genesis.Hash))
                        {
                            // FIXME: This behavior can unexpectedly terminate the swarm
                            // (and the game app) if it encounters a peer having a different
                            // blockchain, and therefore can be exploited to remotely shut
                            // down other nodes as well.
                            // Since the intention of this behavior is to prevent mistakes
                            // to try to connect incorrect seeds (by a user),
                            // this behavior should be limited for only seed peers.
                            var msg =
                                $"Since the genesis block is fixed to {workspace.Genesis} " +
                                "protocol-wise, the blockchain which does not share " +
                                "any mutual block is not acceptable.";
                            var e = new InvalidGenesisBlockException(
                                hash,
                                workspace.Genesis.Hash,
                                msg);
                            throw new AggregateException(msg, e);
                        }

                        _logger.Verbose(
                            "Enqueue #{BlockIndex} {BlockHash} to demands queue...",
                            index,
                            hash
                        );
                        if (blockCompletion.Demand(hash))
                        {
                            totalBlocksToDownload++;
                        }
                    }
                }
                catch (AggregateException e)
                {
                    cancellationToken.ThrowIfCancellationRequested();

                    if (blockDownloadFailed is null)
                    {
                        throw new AggregateException(e.Message, e.InnerExceptions);
                    }

                    blockDownloadFailed.Invoke(
                        this,
                        new PreloadBlockDownloadFailEventArgs
                        {
                            InnerExceptions = e.InnerExceptions,
                        }
                    );

                    return;
                }

                IAsyncEnumerable<Tuple<Block<T>, BoundPeer>> completedBlocks =
                    blockCompletion.Complete(
                        peers: peersWithHeight.Select(pair => pair.Item1).ToList(),
                        blockFetcher: GetBlocksAsync,
                        cancellationToken: cancellationToken
                    );
                await foreach (var pair in completedBlocks)
                {
                    pair.Deconstruct(out Block<T> block, out BoundPeer sourcePeer);
                    _logger.Verbose(
                        "Got #{BlockIndex} {BlockHash} from {Pair}.",
                        block.Index,
                        block.Hash,
                        sourcePeer
                    );
                    cancellationToken.ThrowIfCancellationRequested();

                    if (block.Index == 0 && !block.Hash.Equals(workspace.Genesis.Hash))
                    {
                        // FIXME: This behavior can unexpectedly terminate the swarm
                        // (and the game app) if it encounters a peer having a different
                        // blockchain, and therefore can be exploited to remotely shut
                        // down other nodes as well.
                        // Since the intention of this behavior is to prevent mistakes
                        // to try to connect incorrect seeds (by a user),
                        // this behavior should be limited for only seed peers.
                        var msg =
                            $"Since the genesis block is fixed to {workspace.Genesis} " +
                            "protocol-wise, the blockchain which does not share " +
                            "any mutual block is not acceptable.";

                        // Although it's actually not aggregated, but to be consistent with
                        // above code throwing InvalidGenesisBlockException, makes this
                        // to wrap an exception with AggregateException... Not sure if
                        // it show be wrapped from the very beginning.
                        throw new AggregateException(
                            msg,
                            new InvalidGenesisBlockException(
                                block.Hash,
                                workspace.Genesis.Hash,
                                msg
                            )
                        );
                    }

                    _logger.Verbose(
                        "Add a block #{BlockIndex} {BlockHash}...",
                        block.Index,
                        block.Hash
                    );
                    wStore.PutBlock(block);
                    if (tempTip is null || block.Index > tempTip.Index)
                    {
                        tempTip = block;
                    }

                    receivedBlockCount++;
                    progress?.Report(new BlockDownloadState
                    {
                        TotalBlockCount = Math.Max(
                            totalBlocksToDownload,
                            receivedBlockCount),
                        ReceivedBlockCount = receivedBlockCount,
                        ReceivedBlockHash = block.Hash,
                        SourcePeer = sourcePeer,
                    });
                    _logger.Debug(
                        "Appended a block #{BlockIndex} {BlockHash} " +
                        "to the workspace chain.",
                        block.Index,
                        block.Hash
                    );
                }

                tipCandidate = tempTip;

                if (tipCandidate is null)
                {
                    // If there is no blocks in the network (or no consensus at least)
                    // it doesn't need to receive states from other peers at all.
                    return;
                }

                var deltaBlocks = new LinkedList<Block<T>>();
                while (true)
                {
                    Block<T> blockToAdd;
                    if (deltaBlocks.First is LinkedListNode<Block<T>> node)
                    {
                        Block<T> b = node.Value;
                        if (b.PreviousHash is HashDigest<SHA256> p)
                        {
                            blockToAdd = wStore.GetBlock<T>(p);
                        }
                        else
                        {
                            break;
                        }
                    }
                    else
                    {
                        blockToAdd = tipCandidate;
                    }

                    if (!(initialTip is null) &&
                        blockToAdd.Index <= initialTip.Index &&
                        wStore.IndexBlockHash(wId, blockToAdd.Index).Equals(blockToAdd.Hash))
                    {
                        break;
                    }

                    deltaBlocks.AddFirst(blockToAdd);
                }

                cancellationToken.ThrowIfCancellationRequested();

                if (deltaBlocks.First is LinkedListNode<Block<T>> deltaBottom)
                {
                    Block<T> bottomBlock = deltaBottom.Value;
                    if (bottomBlock.PreviousHash is HashDigest<SHA256> bp)
                    {
                        BlockChain<T> fork = workspace.Fork(bp);
                        try
                        {
                            long verifiedBlockCount = 0;
                            foreach (Block<T> deltaBlock in deltaBlocks)
                            {
                                cancellationToken.ThrowIfCancellationRequested();
                                fork.Append(
                                    deltaBlock,
                                    DateTimeOffset.UtcNow,
                                    evaluateActions: false,
                                    renderActions: false
                                );
                                progress?.Report(new BlockVerificationState
                                {
                                    TotalBlockCount = deltaBlocks.Count,
                                    VerifiedBlockCount = ++verifiedBlockCount,
                                    VerifiedBlockHash = deltaBlock.Hash,
                                });
                            }
                        }
                        catch (Exception e)
                        {
                            _logger.Error(
                                e,
                                "An exception occurred during appending blocks: {Exception}",
                                e
                            );
                            throw;
                        }

                        cancellationToken.ThrowIfCancellationRequested();
                        workspace.Swap(fork, render: false);
                        wId = fork.Id;
                    }
                    else
                    {
                        Block<T> first = deltaBlocks.First.Value, last = deltaBlocks.Last.Value;
                        HashDigest<SHA256> g = wStore.IndexBlockHash(wId, 0L).Value;
                        throw new SwarmException(
                            $"Downloaded blocks (#{first.Index} {first.Hash}\u2013" +
                            $"#{last.Index} {last.Hash}) are incompatible with the existing " +
                            $"chain (#0 {g}\u2013#{initialTip.Index} {initialTip.Hash})."
                        );
                    }
                }

                long height = workspace.Tip.Index;

                IEnumerable<(BoundPeer, HashDigest<SHA256> Hash)> trustedPeersWithTip =
                    peersWithHeight.Where(pair =>
                            trustedStateValidators.Contains(pair.Item1.Address) &&
                            !(pair.Item2 is null) &&
                            pair.Item2 <= height)
                        .OrderByDescending(pair => pair.Item2)
                        .Select(pair => (pair.Item1, workspace[pair.Item2.Value].Hash));

                // FIXME: It is not guaranteed that states will be reported in order.
                // see issue #436, #430
                long? receivedStateHeight = await SyncRecentStatesFromTrustedPeersAsync(
                    workspace,
                    progress,
                    trustedPeersWithTip.ToImmutableList(),
                    initialLocator,
                    cancellationToken
                );

                if (receivedStateHeight is null || receivedStateHeight < height)
                {
                    PreloadExecuteActions(
                        workspace,
                        initialTip,
                        receivedStateHeight,
                        progress,
                        cancellationToken);
                }

                complete = true;
            }
            finally
            {
                if (cancellationToken.IsCancellationRequested)
                {
                    _logger.Information($"{nameof(PreloadAsync)}() is canceled.");
                }

                if (!complete
                    || workspace.Tip == BlockChain.Tip
                    || cancellationToken.IsCancellationRequested)
                {
                    _logger.Debug(
                        "Preloading is aborted; delete the temporary working chain ({0}: {1}), " +
                        "and make the existing chain ({2}: {3}) remains.",
                        wId,
                        workspace.Tip,
                        BlockChain.Id,
                        BlockChain.Tip
                    );
                }
                else
                {
                    _logger.Debug(
                        "Preloading finished; replace the existing chain ({0}: {1}) with " +
                        "the working chain ({2}: {3}).",
                        BlockChain.Id,
                        BlockChain.Tip,
                        wId,
                        workspace.Tip
                    );
                    BlockChain.Swap(workspace, render: false);
                }

                foreach (Guid chainId in wStore.ListChainIds().ToList())
                {
                    if (!chainId.Equals(BlockChain.Id))
                    {
                        _logger.Verbose("Delete an unused chain: {ChainId}", chainId);
                        wStore.DeleteChainId(chainId);
                    }
                }

                _logger.Verbose("Remaining chains: {@ChainIds}", wStore.ListChainIds());
            }
        }

        public async Task<BoundPeer> FindSpecificPeerAsync(
            Address target,
            Address searchAddress,
            int depth,
            BoundPeer viaPeer,
            TimeSpan? timeout,
            CancellationToken cancellationToken)
        {
            NetMQTransport netMQTransport = (NetMQTransport)Transport;
            return await netMQTransport.FindSpecificPeerAsync(
                target,
                searchAddress,
                depth,
                viaPeer,
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
            cancellationToken = CancellationTokenSource
                .CreateLinkedTokenSource(cancellationToken, _cancellationToken).Token;

            var netMQTransport = (NetMQTransport)Transport;
            await netMQTransport.CheckAllPeersAsync(cancellationToken, timeout);
        }

        internal async Task AddPeersAsync(
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

            await ((NetMQTransport)Transport).AddPeersAsync(peers, timeout, cancellationToken);
        }

        // FIXME: This would be better if it's merged with GetDemandBlockHashes
        internal async IAsyncEnumerable<Tuple<long, HashDigest<SHA256>>> GetBlockHashes(
            BoundPeer peer,
            BlockLocator locator,
            HashDigest<SHA256>? stop,
            [EnumeratorCancellation] CancellationToken cancellationToken = default
        )
        {
            var request = new GetBlockHashes(locator, stop);

            Message parsedMessage = await Transport.SendMessageWithReplyAsync(
                peer,
                request,
                timeout: BlockHashRecvTimeout,
                cancellationToken: cancellationToken
            );

            if (parsedMessage is BlockHashes blockHashes)
            {
                if (blockHashes.StartIndex is long idx)
                {
                    HashDigest<SHA256>[] hashes = blockHashes.Hashes.ToArray();
                    _logger.Debug(
                        $"Received a {nameof(BlockHashes)} message with an offset index " +
                        "{OffsetIndex} (total {HashesLength} hashes).",
                        idx,
                        hashes.LongLength
                    );
                    foreach (HashDigest<SHA256> hash in hashes)
                    {
                        yield return new Tuple<long, HashDigest<SHA256>>(idx, hash);
                        idx++;
                    }
                }
                else
                {
                    _logger.Debug(
                        $"Received a {nameof(BlockHashes)} message, but it has zero hashes."
                    );
                }

                yield break;
            }

            throw new InvalidMessageException(
                $"The response of {nameof(GetBlockHashes)} is expected to be " +
                $"{nameof(BlockHashes)}, not {parsedMessage.GetType().Name}: {parsedMessage}"
            );
        }

        internal async IAsyncEnumerable<Block<T>> GetBlocksAsync(
            BoundPeer peer,
            IEnumerable<HashDigest<SHA256>> blockHashes,
            [EnumeratorCancellation] CancellationToken cancellationToken
        )
        {
            _logger.Information(
                "Try to download blocks from {EndPoint}@{Address}...",
                peer.EndPoint,
                peer.Address.ToHex()
            );

            var blockHashesAsArray = blockHashes as HashDigest<SHA256>[] ?? blockHashes.ToArray();
            var request = new GetBlocks(blockHashesAsArray);
            int hashCount = blockHashesAsArray.Count();

            if (hashCount < 1)
            {
                yield break;
            }

            TimeSpan blockRecvTimeout = BlockRecvTimeout + TimeSpan.FromSeconds(hashCount);
            if (blockRecvTimeout > MaxTimeout)
            {
                blockRecvTimeout = MaxTimeout;
            }

            IEnumerable<Message> replies = await Transport.SendMessageWithReplyAsync(
                peer,
                request,
                blockRecvTimeout,
                ((hashCount - 1) / request.ChunkSize) + 1,
                cancellationToken
            );

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
                    }
                }
                else
                {
                    throw new InvalidMessageException(
                        $"Expected a {nameof(Blocks)} message as a response of " +
                        $"the {nameof(GetBlocks)} message, but got a {message.GetType().Name} " +
                        $"message instead: {message}"
                    );
                }
            }

            _logger.Information(
                "Downloaded blocks from {EndPoint}@{Address}.",
                peer.EndPoint,
                peer.Address.ToHex()
            );
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

            var txRecvTimeout = TxRecvTimeout + TimeSpan.FromSeconds(txCount);
            if (txRecvTimeout > MaxTimeout)
            {
                txRecvTimeout = MaxTimeout;
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
                    throw new InvalidMessageException(
                        $"Expected {nameof(Tx)} messages as response of " +
                        $"the {nameof(GetTxs)} message, but got a {message.GetType().Name} " +
                        $"message instead: {message}"
                    );
                }
            }
        }

        private void BroadcastBlock(Address? except, Block<T> block)
        {
            _logger.Debug("Trying to broadcast blocks...");
            var message = new BlockHeaderMessage(block.GetBlockHeader());
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

        private Task<(BoundPeer, Pong)[]> DialToExistingPeers(
            TimeSpan? dialTimeout,
            CancellationToken cancellationToken
        )
        {
            IEnumerable<Task<(BoundPeer, Pong)>> tasks = Peers.Select(
                peer => Transport.SendMessageWithReplyAsync(
                    peer, new Ping(), dialTimeout, cancellationToken
                ).ContinueWith<(BoundPeer, Pong)>(
                    t =>
                    {
                        if (t.IsFaulted || t.IsCanceled || !(t.Result is Pong pong))
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
                                    _logger.Error(
                                        e,
                                        $"An unexpected exception occurred during dial to ({peer})."
                                    );
                                    break;
                                default:
                                    break;
                            }

                            // Mark to skip
                            return (null, null);
                        }
                        else
                        {
                            return (peer, pong);
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

                    return t.Result.Where(pair => !(pair.Item1 is null)).ToArray();
                },
                cancellationToken
            );
        }

        private async IAsyncEnumerable<(long, HashDigest<SHA256>)> GetDemandBlockHashes(
            BlockChain<T> blockChain,
            IList<(BoundPeer, long?)> peersWithHeight,
            IProgress<PreloadState> progress,
            [EnumeratorCancellation] CancellationToken cancellationToken
        )
        {
            long currentTipIndex = blockChain.Tip?.Index ?? -1;
            BlockLocator locator = blockChain.GetBlockLocator();
            int peersCount = peersWithHeight.Count;
            int i = 0;
            var exceptions = new List<Exception>();
            foreach ((BoundPeer peer, long? peerHeight) in peersWithHeight)
            {
                i++;
                long peerIndex = peerHeight ?? -1;

                if (peer is null || currentTipIndex >= peerIndex)
                {
                    continue;
                }

                long totalBlocksToDownload = peerIndex - currentTipIndex;
                var pairsToYield = new List<Tuple<long, HashDigest<SHA256>>>();
                Exception error = null;
                try
                {
                    var downloaded = new List<HashDigest<SHA256>>();
                    while (downloaded.Count < totalBlocksToDownload)
                    {
                        _logger.Verbose(
                            "Request block hashes to {Peer} (height: {PeerHeight}) using " +
                            "the locator {@Locator}... ({CurrentIndex}/{EstimatedTotalCount})",
                            peer,
                            peerHeight,
                            locator.Select(h => h.ToString()),
                            downloaded.Count,
                            totalBlocksToDownload
                        );

                        IAsyncEnumerable<Tuple<long, HashDigest<SHA256>>> blockHashes =
                            GetBlockHashes(peer, locator, null, cancellationToken);
                        await foreach (Tuple<long, HashDigest<SHA256>> pair in blockHashes)
                        {
                            pair.Deconstruct(out long dlIndex, out HashDigest<SHA256> dlHash);
                            _logger.Verbose(
                                "Received a block hash from {Peer}: #{BlockIndex} {BlockHash}",
                                peer,
                                dlIndex,
                                dlHash
                            );

                            if (downloaded.Contains(dlHash) || blockChain.ContainsBlock(dlHash))
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
                                if (idx < 0)
                                {
                                    idx = currentTipIndex + downloaded.Count + 1 + idx;
                                }

                                if (idx <= currentTipIndex)
                                {
                                    return blockChain.Store.IndexBlockHash(blockChain.Id, idx);
                                }

                                int relIdx = (int)(idx - currentTipIndex - 1);
                                return downloaded[relIdx];
                            },
                            hash => blockChain.Store.GetBlock<T>(hash) is Block<T> b
                                ? b.Index
                                : currentTipIndex + 1 + downloaded.IndexOf(hash)
                        );
                    }
                }
                catch (Exception e)
                {
                    error = e;
                }

                foreach (Tuple<long, HashDigest<SHA256>> pair in pairsToYield)
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
                    BoundPeer[] peers = peersWithHeight.Select(p => p.Item1).ToArray();
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

        private async Task<long?> SyncRecentStatesFromTrustedPeersAsync(
            BlockChain<T> blockChain,
            IProgress<PreloadState> progress,
            IReadOnlyList<(BoundPeer, HashDigest<SHA256>)> trustedPeersWithTip,
            BlockLocator baseLocator,
            CancellationToken cancellationToken)
        {
            _logger.Debug(
                "Starts to find a peer to request recent states (candidates: {0} trusted peers).",
                trustedPeersWithTip.Count
            );

            long offset = 0;
            int count = 0;
            foreach ((BoundPeer peer, var blockHash) in trustedPeersWithTip)
            {
                long topIndex = blockChain[blockHash].Index;
                while (!cancellationToken.IsCancellationRequested && offset != -1)
                {
                    cancellationToken.ThrowIfCancellationRequested();
                    var request = new GetRecentStates(baseLocator, blockHash, offset);

                    _logger.Debug(
                        "Requests recent states to a peer ({Peer}) {Offset}.",
                        peer,
                        offset);
                    Message reply;
                    try
                    {
                        reply = await Transport.SendMessageWithReplyAsync(
                            peer,
                            request,
                            timeout: RecentStateRecvTimeout,
                            cancellationToken: cancellationToken
                        );

                        _logger.Debug("Received recent states from a peer ({Peer}).", peer);
                    }
                    catch (TimeoutException e)
                    {
                        _logger.Error(
                            "Failed to receive recent states from a peer ({Peer}): " + e,
                            peer
                        );
                        break;
                    }

                    if (reply is RecentStates recentStates && !recentStates.Missing)
                    {
                        int totalCount = recentStates.Iteration;
                        _logger.Debug(
                            "Received {StateRefCount} state refs and {BlockStateCount} block" +
                            " states.",
                            recentStates.StateReferences.Count,
                            recentStates.BlockStates.Count);
                        count++;

                        ReaderWriterLockSlim rwlock = blockChain._rwlock;
                        rwlock.EnterWriteLock();
                        try
                        {
                            Guid chainId = blockChain.Id;

                            _logger.Debug("Starts to store state refs received from {Peer}.", peer);

                            var d = new Dictionary<HashDigest<SHA256>, ISet<Address>>();
                            foreach (var pair in recentStates.StateReferences)
                            {
                                cancellationToken.ThrowIfCancellationRequested();
                                IImmutableSet<Address> address = ImmutableHashSet.Create(pair.Key);
                                foreach (HashDigest<SHA256> bHash in pair.Value)
                                {
                                    if (!d.ContainsKey(bHash))
                                    {
                                        d[bHash] = new HashSet<Address>();
                                    }

                                    d[bHash].UnionWith(address);
                                }
                            }

                            foreach (KeyValuePair<HashDigest<SHA256>, ISet<Address>> pair in d)
                            {
                                HashDigest<SHA256> hash = pair.Key;
                                IImmutableSet<string> stateKeys = pair.Value
                                    .Select(a => a.ToHex().ToLowerInvariant())
                                    .ToImmutableHashSet();
                                if (_store.GetBlockIndex(hash) is long index)
                                {
                                    _store.StoreStateReference(chainId, stateKeys, hash, index);
                                }
                            }

                            _logger.Debug(
                                "Starts to store block states received from {Peer}.",
                                peer);
                            foreach (var pair in recentStates.BlockStates)
                            {
                                cancellationToken.ThrowIfCancellationRequested();
                                IImmutableDictionary<string, IValue> states =
                                    pair.Value.ToImmutableDictionary(
                                        kv => kv.Key.ToHex().ToLowerInvariant(),
                                        kv => kv.Value
                                    );
                                _store.SetBlockStates(pair.Key, states);
                            }

                            progress?.Report(new StateDownloadState()
                            {
                                TotalIterationCount = totalCount,
                                ReceivedIterationCount = count,
                            });
                        }
                        finally
                        {
                            rwlock.ExitWriteLock();
                        }

                        _logger.Debug(
                            "Stored state refs and block states. {Offset}",
                            offset);

                        offset = recentStates.Offset;
                    }
                    else
                    {
                        _logger.Debug(
                            "A message received from {Peer} is not a RecentStates but {Reply}.",
                            peer,
                            reply
                        );
                        break;
                    }
                }

                if (offset == -1)
                {
                    _logger.Debug("Received states from trusted peers.");
                    return topIndex;
                }
            }

            _logger.Warning("Failed to receive states from trusted peers.");
            return null;
        }

        private void PreloadExecuteActions(
            BlockChain<T> workspace,
            Block<T> initialTip,
            long? receivedStateHeight,
            IProgress<PreloadState> progress,
            CancellationToken cancellationToken)
        {
            long initHeight;
            if (receivedStateHeight is null)
            {
                initHeight = initialTip is null || !workspace[initialTip.Index].Equals(initialTip)
                    ? 0
                    : initialTip.Index + 1;
            }
            else
            {
                initHeight = receivedStateHeight.Value + 1;
            }

            int count = 0, totalCount = (int)(workspace.Count - initHeight);
            _logger.Debug("Starts to execute actions of {0} blocks.", totalCount);
            var blockHashes = workspace.IterateBlockHashes((int)initHeight);
            foreach (HashDigest<SHA256> hash in blockHashes)
            {
                cancellationToken.ThrowIfCancellationRequested();

                Block<T> block = workspace[hash];
                if (block.Index < initHeight)
                {
                    continue;
                }

                workspace.ExecuteActions(block);
                _logger.Debug("Executed actions in the block {0}.", block.Hash);
                progress?.Report(new ActionExecutionState()
                {
                    TotalBlockCount = totalCount,
                    ExecutedBlockCount = ++count,
                    ExecutedBlockHash = block.Hash,
                });
            }

            _logger.Debug("Finished to execute actions.");
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

        private void ProcessMessageHandler(object target, Message message)
        {
            switch (message)
            {
                case Ping ping:
                    {
                        _logger.Debug($"Ping received.");

                        Pong pong = new Pong(BlockChain.Tip?.Index)
                        {
                            Identity = ping.Identity,
                        };

                        Transport.ReplyMessage(pong);
                        break;
                    }

                case FindNeighbors findPeer:
                    {
                        _logger.Debug($"FindNeighbors received.");
                        break;
                    }

                case GetBlockHashes getBlockHashes:
                    {
                        BlockChain.FindNextHashes(
                            getBlockHashes.Locator,
                            getBlockHashes.Stop,
                            FindNextHashesChunkSize
                        ).Deconstruct(
                            out long? offset,
                            out IReadOnlyList<HashDigest<SHA256>> hashes
                        );
                        var reply = new BlockHashes(offset, hashes)
                        {
                            Identity = getBlockHashes.Identity,
                        };
                        Transport.ReplyMessage(reply);
                        break;
                    }

                case GetRecentStates getRecentStates:
                    {
                        TransferRecentStates(getRecentStates);
                        break;
                    }

                case GetBlocks getBlocks:
                    {
                        TransferBlocks(getBlocks);
                        break;
                    }

                case GetTxs getTxs:
                    {
                        TransferTxs(getTxs);
                        break;
                    }

                case TxIds txIds:
                    {
                        ProcessTxIds(txIds);
                        break;
                    }

                case BlockHashes blockHashes:
                    {
                        _logger.Error("BlockHashes message is only for IBD.");
                        break;
                    }

                case BlockHeaderMessage blockHeader:
                    {
                        Task.Run(
                            async () => await ProcessBlockHeader(blockHeader, _cancellationToken),
                            _cancellationToken);
                        break;
                    }

                default:
                    throw new InvalidMessageException($"Can't handle message: {message}", message);
            }
        }

        private async Task ProcessBlockHeader(
            BlockHeaderMessage message,
            CancellationToken cancellationToken = default(CancellationToken))
        {
            if (!(message.Remote is BoundPeer peer))
            {
                _logger.Information(
                    "BlockHeaderMessage was sent from invalid peer " +
                    "{PeerAddress}; ignored.",
                    message.Remote.Address);
                return;
            }

            BlockHeaderReceived.Set();
            BlockHeader header = message.Header;

            _logger.Debug(
                "Block header of hash [{Hash}] (index: {Index}) received.",
                ByteUtil.Hex(header.Hash),
                header.Index,
                Address.ToHex());

            using (await _blockSyncMutex.LockAsync(cancellationToken))
            {
                // FIXME: this should be changed into total difficulty.
                if (header.Index > BlockChain.Tip.Index &&
                    (_demandBlockHash is null || _demandBlockHash.Value.Item1 < header.Index))
                {
                    _demandBlockHash =
                        (header.Index, peer, new HashDigest<SHA256>(header.Hash.ToArray()));
                }
                else
                {
                    _logger.Debug(
                        "No blocks are required " +
                        "(current: {Current}, demand: {Demand}, received: {Received});" +
                        $" {nameof(BlockHeaderMessage)} is ignored.",
                        BlockChain.Tip.Index,
                        _demandBlockHash?.Item1,
                        header.Index);
                }
            }
        }

        private async Task SyncPreviousBlocksAsync(
            BlockChain<T> blockChain,
            BoundPeer peer,
            HashDigest<SHA256>? stop,
            IProgress<BlockDownloadState> progress,
            long totalBlockCount,
            bool evaluateActions,
            CancellationToken cancellationToken
        )
        {
            int retry = 3;
            long previousTipIndex = blockChain.Tip?.Index ?? -1;
            BlockChain<T> synced = null;

            try
            {
                while (true)
                {
                    cancellationToken.ThrowIfCancellationRequested();

                    try
                    {
                        long currentTipIndex = blockChain.Tip?.Index ?? -1;
                        long receivedBlockCount = currentTipIndex - previousTipIndex;

                        FillBlocksAsyncStarted.Set();
                        synced = await FillBlocksAsync(
                            peer,
                            blockChain,
                            stop,
                            progress,
                            totalBlockCount,
                            receivedBlockCount,
                            evaluateActions,
                            cancellationToken
                        );
                        break;
                    }
                    catch (TimeoutException e)
                    {
                        if (retry > 0)
                        {
                            _logger.Error(
                                e,
                                $"{nameof(FillBlocksAsync)}() failed; retrying...: {e}"
                            );
                            retry--;
                        }
                        else
                        {
                            FillBlocksAsyncFailed.Set();
                            throw;
                        }
                    }
                    catch (Exception)
                    {
                        FillBlocksAsyncFailed.Set();
                        throw;
                    }
                }
            }
            finally
            {
                if (synced is BlockChain<T> syncedNotNull
                    && !syncedNotNull.Id.Equals(blockChain?.Id))
                {
                    blockChain.Swap(synced, evaluateActions);
                }
            }
        }

        private async Task<BlockChain<T>> FillBlocksAsync(
            BoundPeer peer,
            BlockChain<T> blockChain,
            HashDigest<SHA256>? stop,
            IProgress<BlockDownloadState> progress,
            long totalBlockCount,
            long receivedBlockCount,
            bool evaluateActions,
            CancellationToken cancellationToken
        )
        {
            BlockChain<T> workspace = blockChain;
            var scope = new List<Guid>();
            bool renderActions = evaluateActions;

            try
            {
                while (!cancellationToken.IsCancellationRequested)
                {
                    Block<T> tip = workspace?.Tip;

                    _logger.Debug("Trying to find branchpoint...");
                    BlockLocator locator = workspace.GetBlockLocator();
                    _logger.Debug("Locator's count: {LocatorCount}", locator.Count());
                    IAsyncEnumerable<Tuple<long, HashDigest<SHA256>>> hashesAsync =
                        GetBlockHashes(peer, locator, stop, cancellationToken);
                    IEnumerable<Tuple<long, HashDigest<SHA256>>> hashes =
                        await hashesAsync.ToArrayAsync();

                    if (!hashes.Any())
                    {
                        _logger.Debug(
                            "Peer [{0}] didn't return any hashes; ignored.",
                            peer.Address.ToHex()
                        );
                        return workspace;
                    }

                    hashes.First().Deconstruct(
                        out long branchIndex,
                        out HashDigest<SHA256> branchPoint
                    );

                    _logger.Debug(
                        "Branch point is #{BranchIndex} {BranchHash}.",
                        branchIndex,
                        branchPoint
                    );

                    if (tip is null || branchPoint.Equals(tip.Hash))
                    {
                        _logger.Debug("It doesn't need to fork.");
                    }

                    // We can omit this clause if assume every chain shares
                    // same genesis block...
                    else if (!BlockChain.ContainsBlock(branchPoint))
                    {
                        // FIXME: This behavior can unexpectedly terminate the swarm (and the game
                        // app) if it encounters a peer having a different blockchain, and therefore
                        // can be exploited to remotely shut down other nodes as well.
                        // Since the intention of this behavior is to prevent mistakes to try to
                        // connect incorrect seeds (by a user), this behavior should be limited for
                        // only seed peers.
                        var msg =
                            $"Since the genesis block is fixed to {BlockChain.Genesis} " +
                            "protocol-wise, the blockchain which does not share " +
                            "any mutual block is not acceptable.";
                        throw new InvalidGenesisBlockException(
                            branchPoint,
                            workspace.Genesis.Hash,
                            msg);
                    }
                    else
                    {
                        _logger.Debug("Forking needed. Trying to fork...");
                        workspace = workspace.Fork(branchPoint);
                        IStore workStore = workspace.Store;
                        Guid workChainId = workspace.Id;
                        scope.Add(workChainId);
                        renderActions = false;
                        _logger.Debug("Forking complete.");
                    }

                    if (!(workspace.Tip is null))
                    {
                        hashes = hashes.Skip(1);
                    }

                    _logger.Debug("Trying to fill up previous blocks...");

                    var hashesAsArray =
                        hashes as Tuple<long, HashDigest<SHA256>>[] ?? hashes.ToArray();
                    if (!hashesAsArray.Any())
                    {
                        break;
                    }

                    int hashCount = hashesAsArray.Count();
                    _logger.Debug(
                        $"Required hashes (count: {hashCount}). " +
                        $"(tip: {workspace.Tip?.Hash})"
                    );

                    totalBlockCount = Math.Max(totalBlockCount, receivedBlockCount + hashCount);

                    IAsyncEnumerable<Block<T>> blocks = GetBlocksAsync(
                        peer,
                        hashesAsArray.Select(pair => pair.Item2),
                        cancellationToken
                    );

                    await foreach (Block<T> block in blocks)
                    {
                        _logger.Debug(
                            "Try to append a block #{BlockIndex} {BlockHash}...",
                            block.Index,
                            block.Hash
                        );

                        cancellationToken.ThrowIfCancellationRequested();

                        workspace.Append(
                            block,
                            DateTimeOffset.UtcNow,
                            evaluateActions: evaluateActions,
                            renderActions: renderActions
                        );
                        receivedBlockCount++;
                        progress?.Report(new BlockDownloadState
                        {
                            TotalBlockCount = totalBlockCount,
                            ReceivedBlockCount = receivedBlockCount,
                            ReceivedBlockHash = block.Hash,
                            SourcePeer = peer,
                        });
                        _logger.Debug(
                            "Block #{BlockIndex} {BlockHash} was appended.",
                            block.Index,
                            block.Hash
                        );
                    }
                }
            }
            catch
            {
                if (workspace?.Id is Guid workspaceId && scope.Contains(workspaceId))
                {
                    _store.DeleteChainId(workspaceId);
                }

                throw;
            }
            finally
            {
                foreach (var id in scope.Where(guid => guid != workspace?.Id))
                {
                    _store.DeleteChainId(id);
                }
            }

            return workspace;
        }

        private void TransferTxs(GetTxs getTxs)
        {
            IEnumerable<Transaction<T>> txs = getTxs.TxIds
                .Where(txId => _store.ContainsTransaction(txId))
                .Select(BlockChain.GetTransaction);

            foreach (Transaction<T> tx in txs)
            {
                Message response = new Messages.Tx(tx.Serialize(true))
                {
                    Identity = getTxs.Identity,
                };
                Transport.ReplyMessage(response);
            }
        }

        private void ProcessTxIds(TxIds message)
        {
            if (!(message.Remote is BoundPeer peer))
            {
                _logger.Information(
                    "TxIds was sent from invalid peer " +
                    $"[{message.Remote?.Address.ToHex()}]. ignored.");
                return;
            }

            _logger.Debug(
                "Received TxIds: [{txIds}]",
                string.Join(", ", message.Ids));

            ImmutableHashSet<TxId> newTxIds = message.Ids
                .Where(id => !_demandTxIds.ContainsKey(id))
                .Where(id => !_store.ContainsTransaction(id))
                .ToImmutableHashSet();

            if (!newTxIds.Any())
            {
                _logger.Debug("No txs to require.");
                return;
            }

            _logger.Debug("Txs to require: {@txIds}", newTxIds.Select(txid => txid.ToString()));
            foreach (var txid in newTxIds)
            {
                _demandTxIds.TryAdd(txid, peer);
            }
        }

        private void TransferBlocks(GetBlocks getData)
        {
            string identityHex = ByteUtil.Hex(getData.Identity);
            _logger.Verbose("Preparing a blocks reply to request {Identity}...", identityHex);

            var blocks = new List<byte[]>();

            List<HashDigest<SHA256>> hashes = getData.BlockHashes.ToList();
            int i = 1;
            int total = hashes.Count;
            const string logMsg =
                "Fetching a block #{Index}/{Total} ({Hash}) to include to " +
                "a reply to {Identity}...";
            foreach (HashDigest<SHA256> hash in hashes)
            {
                _logger.Verbose(logMsg, i, total, hash, identityHex);
                if (_store.ContainsBlock(hash))
                {
                    Block<T> block = _store.GetBlock<T>(hash);
                    byte[] payload = block.Serialize();
                    blocks.Add(payload);
                }

                if (blocks.Count == getData.ChunkSize)
                {
                    var response = new Messages.Blocks(blocks)
                    {
                        Identity = getData.Identity,
                    };
                    _logger.Verbose(
                        "Enqueuing a blocks reply (...{Index}/{Total})...",
                        i,
                        total
                    );
                    Transport.ReplyMessage(response);
                    blocks.Clear();
                }

                i++;
            }

            if (blocks.Any())
            {
                var response = new Messages.Blocks(blocks)
                {
                    Identity = getData.Identity,
                };
                _logger.Verbose(
                    "Enqueuing a blocks reply (...{Index}/{Total}) to {Identity}...",
                    total,
                    total,
                    identityHex
                );
                Transport.ReplyMessage(response);
            }

            _logger.Debug("Blocks were transferred to {Identity}.", identityHex);
        }

        private void TransferRecentStates(GetRecentStates getRecentStates)
        {
            BlockLocator baseLocator = getRecentStates.BaseLocator;
            HashDigest<SHA256>? @base = BlockChain.FindBranchPoint(baseLocator);
            HashDigest<SHA256> target = getRecentStates.TargetBlockHash;
            IImmutableDictionary<HashDigest<SHA256>,
                IImmutableDictionary<Address, IValue>
            > blockStates = null;
            IImmutableDictionary<string, IImmutableList<HashDigest<SHA256>>> stateRefs = null;
            long nextOffset = -1;
            int iteration = 0;

            if (BlockChain.ContainsBlock(target))
            {
                ReaderWriterLockSlim rwlock = BlockChain._rwlock;
                rwlock.EnterReadLock();
                try
                {
                    Guid chainId = BlockChain.Id;

                    _logger.Debug(
                        "Getting state references from {Offset}",
                        getRecentStates.Offset);

                    long baseIndex =
                        (@base is HashDigest<SHA256> bbh &&
                         _store.GetBlockIndex(bbh) is long bbIdx)
                            ? bbIdx
                            : 0;
                    long lowestIndex = baseIndex + getRecentStates.Offset;
                    long targetIndex =
                        (target is HashDigest<SHA256> tgt &&
                         _store.GetBlockIndex(tgt) is long tgtIdx)
                            ? tgtIdx
                            : long.MaxValue;

                    iteration =
                        (int)Math.Ceiling(
                            (double)(targetIndex - baseIndex + 1) / FindNextStatesChunkSize);
                    _logger.Verbose("Iteration is : {Iteration}", iteration);

                    long highestIndex = lowestIndex + FindNextStatesChunkSize - 1 > targetIndex
                        ? targetIndex
                        : lowestIndex + FindNextStatesChunkSize - 1;

                    nextOffset = highestIndex == targetIndex
                        ? -1
                        : getRecentStates.Offset + FindNextStatesChunkSize;

                    stateRefs = _store.ListAllStateReferences(
                        chainId,
                        lowestIndex: lowestIndex,
                        highestIndex: highestIndex
                    );
                    if (_logger.IsEnabled(LogEventLevel.Verbose))
                    {
                        _logger.Verbose(
                            "List state references from {From} to {To}:\n{StateReferences}",
                            lowestIndex,
                            highestIndex,
                            string.Join(
                                "\n",
                                stateRefs.Select(kv => $"{kv.Key}: {string.Join(", ", kv.Value)}")
                            )
                        );
                    }

                    // GetBlockStates may return null since swarm may not have deep states.
                    blockStates = stateRefs.Values
                        .Select(refs => refs.Last())
                        .ToImmutableHashSet()
                        .Select(bh => (bh, _store.GetBlockStates(bh)))
                        .Where(pair => !(pair.Item2 is null))
                        .ToImmutableDictionary(
                            pair => pair.Item1,
                            pair => (IImmutableDictionary<Address, IValue>)pair.Item2
                                .ToImmutableDictionary(kv => new Address(kv.Key), kv => kv.Value)
                        );
                }
                finally
                {
                    rwlock.ExitReadLock();
                }
            }

            if (_logger.IsEnabled(LogEventLevel.Verbose))
            {
                if (_store.ContainsBlock(target))
                {
                    var baseString = @base is HashDigest<SHA256> h
                        ? $"{BlockChain[h].Index}:{h}"
                        : null;
                    var targetString = $"{BlockChain[target].Index}:{target}";
                    _logger.Verbose(
                        "State references to send (preload): {StateReferences} ({Base}-{Target})",
                        stateRefs.Select(kv =>
                            (
                                kv.Key,
                                string.Join(", ", kv.Value.Select(v => v.ToString()))
                            )
                        ).ToArray(),
                        baseString,
                        targetString
                    );
                    _logger.Verbose(
                        "Block states to send (preload): {BlockStates} ({Base}-{Target})",
                        blockStates.Select(kv => (kv.Key, kv.Value)).ToArray(),
                        baseString,
                        targetString
                    );
                }
                else
                {
                    _logger.Verbose("Nothing to reply because {TargetHash} doesn't exist.", target);
                }
            }

            var reply = new RecentStates(
                target,
                nextOffset,
                iteration,
                blockStates,
                stateRefs.ToImmutableDictionary(kv => new Address(kv.Key), kv => kv.Value))
            {
                Identity = getRecentStates.Identity,
            };

            Transport.ReplyMessage(reply);
        }

        private async Task ProcessFillblock(CancellationToken cancellationToken)
        {
            while (!cancellationToken.IsCancellationRequested)
            {
                if (_demandBlockHash is null ||
                    _demandBlockHash.Value.Item1 <= BlockChain.Tip.Index)
                {
                    await Task.Delay(100, cancellationToken);
                    continue;
                }

                (long index, BoundPeer peer, HashDigest<SHA256> blockHash) =
                    _demandBlockHash.Value;
                try
                {
                    await SyncPreviousBlocksAsync(
                        BlockChain,
                        peer,
                        blockHash,
                        null,
                        0,
                        true,
                        cancellationToken);

                    // FIXME: Clean up events
                    BlockReceived.Set();
                    BlockAppended.Set();
                    BroadcastBlock(peer.Address, BlockChain.Tip);
                }
                catch (TimeoutException)
                {
                    _logger.Debug($"Timeout occurred during {nameof(ProcessFillblock)}");
                    await Task.Delay(100, cancellationToken);
                }
                catch (Exception e)
                {
                    var msg =
                        $"Unexpected exception occurred during" +
                        $" {nameof(ProcessFillblock)}: {{e}}";
                    _logger.Error(e, msg, e);
                }
            }
        }

        private async Task ProcessFillTxs(CancellationToken cancellationToken)
        {
            while (!cancellationToken.IsCancellationRequested)
            {
                if (_demandTxIds.IsEmpty)
                {
                    await Task.Delay(100, cancellationToken);
                    continue;
                }

                _logger.Debug(
                    "Processing txids: {@txIds}",
                    _demandTxIds.Keys.Select(txid => txid.ToString()));
                var demandTxIds = _demandTxIds.ToArray();
                var demands = new Dictionary<BoundPeer, HashSet<TxId>>();

                foreach (var kv in demandTxIds)
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

                    if (!BlockChain.Policy.DoesTransactionFollowsPolicy(tx))
                    {
                        BlockChain.UnstageTransaction(tx);
                    }
                }

                TxReceived.Set();
                _logger.Debug(
                    "Txs staged successfully: {@txIds}",
                    txs.Select(tx => tx.Id.ToString()));

                // FIXME: Should exclude peers of source of the transaction ids.
                BroadcastTxs(null, txs);

                foreach (var kv in demandTxIds)
                {
                    _demandTxIds.TryRemove(kv.Key, out BoundPeer value);
                }
            }
        }
    }
}
