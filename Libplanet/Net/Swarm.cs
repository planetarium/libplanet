using System;
using System.Collections.Async;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.IO;
using System.Linq;
using System.Net;
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
        private static readonly TimeSpan MaxTimeout = TimeSpan.FromSeconds(150);
        private static readonly TimeSpan BlockRecvTimeout = TimeSpan.FromSeconds(15);
        private static readonly TimeSpan TxRecvTimeout = TimeSpan.FromSeconds(3);
        private static readonly TimeSpan RecentStateRecvTimeout = TimeSpan.FromSeconds(150);
        private readonly PrivateKey _privateKey;
        private readonly int _appProtocolVersion;

        private readonly AsyncLock _blockSyncMutex;
        private readonly AsyncLock _runningMutex;

        private readonly ILogger _logger;

        private readonly ITransport _transport;
        private readonly IStore _store;

        private CancellationTokenSource _workerCancellationTokenSource;
        private CancellationToken _cancellationToken;

        static Swarm()
        {
            if (!(Type.GetType("Mono.Runtime") is null))
            {
                ForceDotNet.Force();
            }
        }

        public Swarm(
            BlockChain<T> blockChain,
            PrivateKey privateKey,
            int appProtocolVersion,
            int workers = 5,
            string host = null,
            int? listenPort = null,
            DateTimeOffset? createdAt = null,
            IEnumerable<IceServer> iceServers = null,
            EventHandler<DifferentProtocolVersionEventArgs>
                differentVersionPeerEncountered = null)
            : this(
                blockChain,
                privateKey,
                appProtocolVersion,
                null,
                null,
                workers,
                host,
                listenPort,
                createdAt,
                iceServers,
                differentVersionPeerEncountered)
        {
        }

        internal Swarm(
            BlockChain<T> blockChain,
            PrivateKey privateKey,
            int appProtocolVersion,
            int? tableSize,
            int? bucketSize,
            int workers = 5,
            string host = null,
            int? listenPort = null,
            DateTimeOffset? createdAt = null,
            IEnumerable<IceServer> iceServers = null,
            EventHandler<DifferentProtocolVersionEventArgs> differentVersionPeerEncountered = null)
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

            string loggerId = _privateKey.PublicKey.ToAddress().ToHex();
            _logger = Log.ForContext<Swarm<T>>()
                .ForContext("SwarmId", loggerId);

            _transport = new NetMQTransport(
                _privateKey,
                _appProtocolVersion,
                tableSize,
                bucketSize,
                workers,
                host,
                listenPort,
                iceServers,
                differentVersionPeerEncountered,
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

        public bool Running => _transport is NetMQTransport p && p.Running;

        public DnsEndPoint EndPoint => AsPeer is BoundPeer boundPeer ? boundPeer.EndPoint : null;

        public Address Address => _privateKey.PublicKey.ToAddress();

        public Peer AsPeer => _transport.AsPeer;

        public DateTimeOffset LastReceived { get; private set; }

        public IDictionary<Peer, DateTimeOffset> LastSeenTimestamps
        {
            get;
            private set;
        }

        public IEnumerable<BoundPeer> Peers => _transport.Peers;

        /// <summary>
        /// The <see cref="BlockChain{T}"/> instance this <see cref="Swarm{T}"/> instance
        /// synchronizes with.
        /// </summary>
        public BlockChain<T> BlockChain { get; private set; }

        internal IProtocol Protocol => (_transport as NetMQTransport)?.Protocol;

        internal AsyncAutoResetEvent TxReceived { get; }

        internal AsyncAutoResetEvent BlockHeaderReceived { get; }

        internal AsyncAutoResetEvent BlockReceived { get; }

        // FIXME: Should have a unit test.
        internal AsyncAutoResetEvent BlockAppended { get; }

        internal TimeSpan BlockHashRecvTimeout { get; set; } = TimeSpan.FromSeconds(30);

        // FIXME: We need some sort of configuration method for it.
        internal int FindNextHashesChunkSize { get; set; } = 500;

        internal int FindNextStatesChunkSize { get; set; } = 1000;

        internal AsyncAutoResetEvent PreloadStarted { get; } = new AsyncAutoResetEvent();

        internal AsyncAutoResetEvent FillBlocksAsyncStarted { get; } = new AsyncAutoResetEvent();

        internal AsyncAutoResetEvent FillBlocksAsyncFailed { get; } = new AsyncAutoResetEvent();

        /// <summary>
        /// Waits until this <see cref="Swarm{T}"/> instance gets started to run.
        /// </summary>
        /// <returns>A <see cref="Task"/> completed when <see cref="NetMQTransport.Running"/>
        /// property becomes <c>true</c>.</returns>
        public Task WaitForRunningAsync() => (_transport as NetMQTransport)?.WaitForRunningAsync();

        public void Dispose()
        {
            _transport.Dispose();
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
            _logger.Debug("Stopping...");
            using (await _runningMutex.LockAsync())
            {
                await _transport.StopAsync(waitFor, cancellationToken);
            }

            _logger.Debug("Stopped.");
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
            await _transport.StartAsync(_cancellationToken);

            _logger.Debug("Starting swarm...");
            _logger.Debug("Peer information : {Peer}", AsPeer);

            try
            {
                tasks.Add(_transport.RunAsync(_cancellationToken));
                tasks.Add(BroadcastTxAsync(broadcastTxInterval, _cancellationToken));
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

            await _transport.BootstrapAsync(
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
            return _transport is null ? string.Empty : (_transport as NetMQTransport)?.Trace();
        }

#pragma warning disable MEN002 // Line is too long
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
        /// <exception cref="AggregateException">Thrown when the given the block downloading is
        /// failed and if <paramref name="blockDownloadFailed "/> is <c>null</c>.</exception>
#pragma warning restore MEN002 // Line is too long
        public async Task PreloadAsync(
            TimeSpan? dialTimeout = null,
            IProgress<PreloadState> progress = null,
            IImmutableSet<Address> trustedStateValidators = null,
            EventHandler<PreloadBlockDownloadFailEventArgs> blockDownloadFailed = null,
            CancellationToken cancellationToken = default(CancellationToken)
        )
        {
            trustedStateValidators = trustedStateValidators ?? ImmutableHashSet<Address>.Empty;

            Block<T> initialTip = BlockChain.Tip;
            BlockLocator initialLocator = BlockChain.GetBlockLocator();
            _logger.Debug($"initialTip? : {BlockChain.Tip}");

            IList<(BoundPeer, long?)> peersWithHeight =
                await DialToExistingPeers(dialTimeout, cancellationToken)
                .Where(pp => pp.Item2.TipIndex > (initialTip?.Index ?? -1))
                .Select(pp => (pp.Item1, pp.Item2.TipIndex))
                .ToListAsync(cancellationToken);

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

            var complete = false;

            try
            {
                var exceptions = new List<Exception>();
                var blockDownloadComplete = false;
                foreach ((BoundPeer Peer, long? Height) peerWithHeight in peersWithHeight)
                {
                    try
                    {
                        _logger.Information(
                            "Try to download blocks from {EndPoint}@{Address}.",
                            peerWithHeight.Peer.EndPoint,
                            peerWithHeight.Peer.Address.ToHex());

                        // FIXME: It is not guaranteed that states will be reported in order.
                        // see issue #436, #430
                        await SyncBehindsBlocksFromPeerAsync(
                            workspace,
                            peerWithHeight,
                            progress,
                            cancellationToken,
                            false
                        );
                    }
                    catch (Exception e)
                    {
                        _logger.Error(
                            "Exception was thrown during downloading blocks from "
                            + "{EndPoint}@{Address}.\n{Exception}",
                            peerWithHeight.Peer.EndPoint,
                            peerWithHeight.Peer.Address.ToHex(),
                            e);
                        exceptions.Add(e);
                        continue;
                    }

                    _logger.Information(
                        "Finished to download blocks from {EndPoint}@{Address}.",
                        peerWithHeight.Peer.EndPoint,
                        peerWithHeight.Peer.Address.ToHex());
                    blockDownloadComplete = true;
                    break;
                }

                if (!blockDownloadComplete)
                {
                    if (blockDownloadFailed is null)
                    {
                        throw new AggregateException(
                            "Failed to download blocks from peers.",
                            exceptions);
                    }
                    else
                    {
                        blockDownloadFailed.Invoke(
                            this,
                            new PreloadBlockDownloadFailEventArgs { InnerExceptions = exceptions });
                    }
                }

                if (workspace.Tip is null)
                {
                    // If there is no blocks in the network (or no consensus at least)
                    // it doesn't need to receive states from other peers at all.
                    return;
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
                        workspace.Id,
                        workspace.Tip,
                        BlockChain.Id,
                        BlockChain.Tip
                    );
                    _store.DeleteChainId(workspace.Id);
                }
                else
                {
                    _logger.Debug(
                        "Preloading finished; replace the existing chain ({0}: {1}) with " +
                        "the working chain ({2}: {3}).",
                        BlockChain.Id,
                        BlockChain.Tip,
                        workspace.Id,
                        workspace.Tip
                    );
                    BlockChain.Swap(workspace, render: false);
                }

                cancellationToken.ThrowIfCancellationRequested();
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
            NetMQTransport netMQTransport = (NetMQTransport)_transport;
            return await netMQTransport.FindSpecificPeerAsync(
                target,
                searchAddress,
                depth,
                viaPeer,
                timeout,
                cancellationToken);
        }

        public async Task CheckAllPeersAsync(
            CancellationToken cancellationToken = default(CancellationToken))
        {
            if (cancellationToken == default(CancellationToken))
            {
                cancellationToken = _cancellationToken;
            }

            NetMQTransport netMQTransport = (NetMQTransport)_transport;
            await netMQTransport.CheckAllPeersAsync(cancellationToken);
        }

        internal async Task AddPeersAsync(
            IEnumerable<Peer> peers,
            TimeSpan? timeout,
            CancellationToken cancellationToken = default(CancellationToken))
        {
            if (_transport is null)
            {
                throw new ArgumentNullException(nameof(_transport));
            }

            if (cancellationToken == default(CancellationToken))
            {
                cancellationToken = _cancellationToken;
            }

            await ((NetMQTransport)_transport).AddPeersAsync(peers, timeout, cancellationToken);
        }

        internal async Task<IEnumerable<HashDigest<SHA256>>>
            GetBlockHashesAsync(
                BoundPeer peer,
                BlockLocator locator,
                HashDigest<SHA256>? stop,
                CancellationToken token = default(CancellationToken)
            )
        {
            var request = new GetBlockHashes(locator, stop);

            Message parsedMessage = await _transport.SendMessageWithReplyAsync(
                peer,
                request,
                timeout: BlockHashRecvTimeout,
                cancellationToken: token
            );

            if (parsedMessage is BlockHashes blockHashes)
            {
                return blockHashes.Hashes;
            }

            throw new InvalidMessageException(
                $"The response of GetBlockHashes isn't BlockHashes. " +
                $"but {parsedMessage}");
        }

        internal System.Collections.Async.IAsyncEnumerable<Block<T>> GetBlocksAsync(
            BoundPeer peer,
            IEnumerable<HashDigest<SHA256>> blockHashes)
        {
            return new AsyncEnumerable<Block<T>>(async yield =>
            {
                CancellationToken yieldToken = yield.CancellationToken;
                var blockHashesAsArray =
                    blockHashes as HashDigest<SHA256>[] ??
                    blockHashes.ToArray();
                var request = new GetBlocks(blockHashesAsArray);
                int hashCount = blockHashesAsArray.Count();

                if (hashCount < 1)
                {
                    yield.Break();
                }

                TimeSpan blockRecvTimeout = BlockRecvTimeout + TimeSpan.FromSeconds(hashCount);
                if (blockRecvTimeout > MaxTimeout)
                {
                    blockRecvTimeout = MaxTimeout;
                }

                IEnumerable<Message> replies = await _transport.SendMessageWithReplyAsync(
                    peer,
                    request,
                    blockRecvTimeout,
                    ((hashCount - 1) / request.ChunkSize) + 1,
                    yieldToken
                );

                foreach (Message message in replies)
                {
                    if (message is Messages.Blocks blockMessage)
                    {
                        IList<byte[]> payloads = blockMessage.Payloads;
                        _logger.Debug(
                            "Received {0} blocks from {1}.",
                            payloads.Count,
                            message.Remote.PublicKey.ToAddress().ToHex());
                        foreach (byte[] payload in payloads)
                        {
                            Block<T> block = Block<T>.Deserialize(payload);
                            await yield.ReturnAsync(block);
                        }
                    }
                    else
                    {
                        throw new InvalidMessageException(
                            $"The response of GetData isn't a Block. " +
                            $"but {message}");
                    }
                }
            });
        }

        internal System.Collections.Async.IAsyncEnumerable<Transaction<T>> GetTxsAsync(
            BoundPeer peer,
            IEnumerable<TxId> txIds,
            CancellationToken cancellationToken = default(CancellationToken))
        {
            return new AsyncEnumerable<Transaction<T>>(async yield =>
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

                IEnumerable<Message> replies = await _transport.SendMessageWithReplyAsync(
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
                        await yield.ReturnAsync(tx);
                    }
                    else
                    {
                        throw new InvalidMessageException(
                            $"The response of GetTxs should be Tx, not {message}.");
                    }
                }
            });
        }

        private void BroadcastBlock(Address? except, Block<T> block)
        {
            _logger.Debug("Trying to broadcast blocks...");
            var message = new BlockHeaderMessage(block.GetBlockHeader());
            BroadcastMessage(except, message);
            _logger.Debug("Block broadcasting complete.");
        }

        private void BroadcastTxs(Address? excpet, IEnumerable<Transaction<T>> txs)
        {
            _logger.Debug("Broadcast Txs.");
            List<TxId> txIds = txs.Select(tx => tx.Id).ToList();
            BroadcastTxIds(excpet, txIds);
        }

        private void BroadcastMessage(Address? except, Message message)
        {
            _transport.BroadcastMessage(except, message);
        }

        private System.Collections.Async.IAsyncEnumerable<(BoundPeer, Pong)> DialToExistingPeers(
            TimeSpan? dialTimeout,
            CancellationToken cancellationToken)
        {
            return new AsyncEnumerable<(BoundPeer, Pong)>(async yield =>
            {
                foreach (BoundPeer peer in Peers)
                {
                    try
                    {
                        Message reply = await _transport.SendMessageWithReplyAsync(
                            peer,
                            new Ping(),
                            dialTimeout,
                            cancellationToken
                        );
                        if (reply is Pong pong)
                        {
                            await yield.ReturnAsync((peer, pong));
                        }
                    }
                    catch (TimeoutException)
                    {
                        _logger.Debug($"TimeoutException occurred during dial to ({peer}).");
                    }
                    catch (IOException e)
                    {
                        _logger.Error(
                            e,
                            $"IOException occurred ({peer})."
                        );
                    }
                    catch (DifferentAppProtocolVersionException e)
                    {
                        _logger.Error(
                            e,
                            $"Protocol Version is different ({peer}).");
                    }
                }
            });
        }

        private async Task SyncBehindsBlocksFromPeerAsync(
            BlockChain<T> blockChain,
            (BoundPeer, long?) peerWithLength,
            IProgress<BlockDownloadState> progress,
            CancellationToken cancellationToken,
            bool render
        )
        {
            if (peerWithLength.Item1 != null &&
                !(blockChain.Tip?.Index >= (peerWithLength.Item2 ?? -1)))
            {
                long currentTipIndex = blockChain.Tip?.Index ?? -1;
                long peerIndex = peerWithLength.Item2 ?? -1;
                long totalBlockCount = peerIndex - currentTipIndex;

                _logger.Debug("Synchronizing previous blocks from " +
                    $"[{peerWithLength.Item1.Address.ToHex()}]");
                await SyncPreviousBlocksAsync(
                    blockChain,
                    peerWithLength.Item1,
                    null,
                    progress,
                    totalBlockCount,
                    evaluateActions: render,
                    cancellationToken: cancellationToken
                );
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
                        reply = await _transport.SendMessageWithReplyAsync(
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

                        _transport.ReplyMessage(pong);
                        break;
                    }

                case FindNeighbors findPeer:
                    {
                        _logger.Debug($"FindNeighbors received.");
                        break;
                    }

                case GetBlockHashes getBlockHashes:
                    {
                        IEnumerable<HashDigest<SHA256>> hashes =
                            BlockChain.FindNextHashes(
                                getBlockHashes.Locator,
                                getBlockHashes.Stop,
                                FindNextHashesChunkSize);
                        var reply = new BlockHashes(hashes)
                        {
                            Identity = getBlockHashes.Identity,
                        };
                        _transport.ReplyMessage(reply);
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
                        Task.Run(
                            async () => await ProcessTxIds(txIds, _cancellationToken),
                            _cancellationToken);
                        break;
                    }

                case BlockHashes blockHashes:
                    {
                        Task.Run(
                            async () => await ProcessBlockHashes(blockHashes, _cancellationToken),
                            _cancellationToken);
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

        private async Task ProcessBlockHashes(
            BlockHashes message,
            CancellationToken cancellationToken = default(CancellationToken))
        {
            if (!(message.Remote is BoundPeer peer))
            {
                _logger.Information(
                    "BlockHashes was sent from invalid peer " +
                    $"[{message.Remote.Address.ToHex()}]. ignored.");
                return;
            }

            ImmutableList<HashDigest<SHA256>> newHashes = message.Hashes
                .Where(hash => !_store.ContainsBlock(hash))
                .ToImmutableList();

            if (newHashes.Any())
            {
                await FetchBlocks(peer, newHashes, cancellationToken);
            }
            else
            {
               _logger.Debug($"No blocks are required; {nameof(BlockHashes)} is ignored.");
            }
        }

        private async Task ProcessBlockHeader(
            BlockHeaderMessage message,
            CancellationToken cancellationToken = default(CancellationToken))
        {
            if (!(message.Remote is BoundPeer peer))
            {
                _logger.Information(
                    "BlockHashes was sent from invalid peer " +
                    $"[{message.Remote.Address.ToHex()}]. ignored.");
                return;
            }

            BlockHeaderReceived.Set();
            BlockHeader header = message.Header;

            // FIXME: this should be changed into total difficulty.
            if (header.Index > BlockChain.Tip.Index)
            {
                await FetchBlocks(
                    peer,
                    new[] { new HashDigest<SHA256>(header.Hash.ToArray()) },
                    cancellationToken);
            }
            else
            {
                _logger.Debug($"No blocks are required; {nameof(BlockHeaderMessage)} is ignored.");
            }
        }

        private async Task FetchBlocks(
            BoundPeer peer,
            IReadOnlyCollection<HashDigest<SHA256>> hashes,
            CancellationToken cancellationToken)
        {
            _logger.Debug(
                $"Trying to {nameof(GetBlocksAsync)}() using {{0}} hashes.",
                hashes.Count);

            System.Collections.Async.IAsyncEnumerable<Block<T>> fetched = GetBlocksAsync(
                peer,
                hashes
            );

            List<Block<T>> blocks = await fetched.ToListAsync(
                cancellationToken
            );
            _logger.Debug($"{nameof(GetBlocksAsync)}() complete.");

            if (!blocks.Any())
            {
                _logger.Debug("No blocks fetched.");
                return;
            }

            LastReceived = DateTimeOffset.UtcNow;
            BlockReceived.Set();

            try
            {
                using (await _blockSyncMutex.LockAsync(cancellationToken))
                {
                    if (await AppendBlocksAsync(peer, blocks, cancellationToken))
                    {
                        BroadcastBlock(peer.Address, blocks.Last());
                    }

                    _logger.Debug("Append complete.");
                }
            }
            catch (TimeoutException)
            {
                // As we have more chances, ignore this.
                _logger.Debug($"Timeout occurred during {nameof(ProcessBlockHashes)}().");
            }
            catch (Exception e)
            {
                _logger.Error(
                    e,
                    $"Append failed during {nameof(ProcessBlockHashes)}() due to exception: {{0}}",
                    e);
                throw;
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
                if (synced is BlockChain<T> syncedNotNull)
                {
                    if (syncedNotNull.Id.Equals(blockChain?.Id))
                    {
                        if (evaluateActions)
                        {
                            blockChain.RenderBlocks(previousTipIndex + 1);
                        }
                    }
                    else
                    {
                        blockChain.Swap(synced, evaluateActions);
                    }
                }
            }
        }

        private async Task<bool> AppendBlocksAsync(
            BoundPeer peer,
            List<Block<T>> blocks,
            CancellationToken cancellationToken
        )
        {
            // We assume that the blocks are sorted in order.
            Block<T> oldest = blocks.First();
            Block<T> latest = blocks.Last();
            Block<T> tip = BlockChain.Tip;

            if (tip is null || latest.Index > tip.Index)
            {
                List<Block<T>> blocksToAppend;
                if (oldest.PreviousHash is null)
                {
                    _logger.Debug("The oldest block[{block}] seems to be genesis.", oldest);
                    blocksToAppend = blocks;
                }
                else if (!(tip is null) &&
                         blocks.Any(block => block.PreviousHash.Equals(tip.Hash)))
                {
                    // FIXME: This may not work as expected in multi-miner environment.
                    _logger.Debug("Does not need to fill.");
                    blocksToAppend = blocks.Where(block => block.Index > tip.Index).ToList();
                }
                else
                {
                    _logger.Debug("Trying to fill up previous blocks...");
                    await SyncPreviousBlocksAsync(
                        BlockChain,
                        peer,
                        oldest.PreviousHash,
                        null,
                        blocks.Count,
                        evaluateActions: true,
                        cancellationToken: cancellationToken
                    );
                    _logger.Debug("Filled up; trying to concatenation...");
                    blocksToAppend = blocks;
                }

                foreach (Block<T> block in blocksToAppend)
                {
                    BlockChain.Append(block);
                }

                _logger.Debug("Sync is done.");

                BlockAppended.Set();

                var blockHashes =
                    blocks.Aggregate(string.Empty, (current, block) =>
                        current + $"[{block.Hash.ToString()}]");
                _logger.Debug(
                    $"Re-broadcast {nameof(BlockHashes)} with {{0}} blocks, which are {{1}}.",
                    blocks.Count,
                    blockHashes);
                return true;
            }
            else
            {
                _logger.Information(
                    "Received index is older than current chain's tip." +
                    " ignored.");
                return false;
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

            try
            {
                while (!cancellationToken.IsCancellationRequested)
                {
                    Block<T> tip = workspace?.Tip;

                    _logger.Debug("Trying to find branchpoint...");
                    BlockLocator locator = workspace.GetBlockLocator();
                    _logger.Debug("Locator's count: {LocatorCount}", locator.Count());
                    IEnumerable<HashDigest<SHA256>> hashes = (
                        await GetBlockHashesAsync(peer, locator, stop, cancellationToken)
                    ).ToArray();

                    if (!hashes.Any())
                    {
                        _logger.Debug(
                            "Peer [{0}] didn't return any hashes; ignored.",
                            peer.PublicKey.ToAddress().ToHex()
                        );
                        return workspace;
                    }

                    HashDigest<SHA256> branchPoint = hashes.First();

                    _logger.Debug("Branchpoint is {0}.", ByteUtil.Hex(branchPoint.ToByteArray()));

                    if (tip is null || branchPoint.Equals(tip.Hash))
                    {
                        _logger.Debug("It doesn't need to fork.");
                    }

                    // We can omit this clause if assume every chain shares
                    // same genesis block...
                    else if (!BlockChain.ContainsBlock(branchPoint))
                    {
                        var msg =
                            $"Since the genesis block is fixed to {BlockChain.Genesis} " +
                            "protocol-wise, the blockchain which does not share " +
                            "any mutual block is not acceptable.";
                        _logger.Debug(msg);
                        throw new InvalidGenesisBlockException(
                            branchPoint,
                            workspace.Genesis.Hash,
                            msg);
                    }
                    else
                    {
                        _logger.Debug("Forking needed. Trying to fork...");
                        workspace = workspace.Fork(branchPoint);
                        scope.Add(workspace.Id);
                        _logger.Debug("Forking complete.");
                    }

                    if (!(workspace.Tip is null))
                    {
                        hashes = hashes.Skip(1);
                    }

                    _logger.Debug("Trying to fill up previous blocks...");

                    var hashesAsArray =
                        hashes as HashDigest<SHA256>[] ?? hashes.ToArray();
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

                    await GetBlocksAsync(peer, hashesAsArray)
                        .ForEachAsync(
                            block =>
                            {
                                _logger.Debug(
                                    $"Trying to append block[{block.Hash}]...");

                                cancellationToken.ThrowIfCancellationRequested();

                                // As actions in this block should be rendered
                                // after actions in stale blocks are unrendered,
                                // given the `render: false` option here.
                                workspace.Append(
                                    block,
                                    DateTimeOffset.UtcNow,
                                    evaluateActions: evaluateActions,
                                    renderActions: false
                                );
                                receivedBlockCount++;
                                progress?.Report(new BlockDownloadState
                                {
                                    TotalBlockCount = totalBlockCount,
                                    ReceivedBlockCount = receivedBlockCount,
                                    ReceivedBlockHash = block.Hash,
                                    SourcePeer = peer,
                                });
                                _logger.Debug($"Block[{block.Hash}] is appended.");
                            },
                            cancellationToken);
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
                _transport.ReplyMessage(response);
            }
        }

        private async Task ProcessTxIds(
            TxIds message,
            CancellationToken cancellationToken = default(CancellationToken))
        {
            if (!(message.Remote is BoundPeer peer))
            {
                _logger.Information(
                    "TxIds was sent from invalid peer " +
                    $"[{message.Remote?.Address.ToHex()}]. ignored.");
                return;
            }

            _logger.Debug("Trying to fetch txs...");
            _logger.Debug(
                "Received TxIds: [{txIds}]",
                string.Join(", ", message.Ids));

            ImmutableHashSet<TxId> newTxIds = message.Ids
                .Where(id => !_store.ContainsTransaction(id))
                .ToImmutableHashSet();

            if (!newTxIds.Any())
            {
                _logger.Debug("No txs to require.");
                return;
            }

            List<Transaction<T>> txs;
            try
            {
                System.Collections.Async.IAsyncEnumerable<Transaction<T>> fetched = GetTxsAsync(
                    peer, newTxIds, cancellationToken);
                txs = await fetched.ToListAsync(cancellationToken);
            }
            catch (TimeoutException)
            {
                _logger.Debug($"Timeout occurred during {nameof(ProcessTxIds)}().");
                return;
            }

            BlockChain.StageTransactions(txs.ToImmutableHashSet());
            TxReceived.Set();
            _logger.Debug("Txs staged successfully.");

            BroadcastTxs(message.Remote.Address, txs);
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
                    _transport.ReplyMessage(response);
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
                _transport.ReplyMessage(response);
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

            _transport.ReplyMessage(reply);
        }
    }
}
