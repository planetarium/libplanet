using System;
using System.Collections.Async;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Sockets;
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
using Libplanet.Stun;
using Libplanet.Tx;
using NetMQ;
using NetMQ.Sockets;
using Nito.AsyncEx;
using Serilog;
using Serilog.Events;

namespace Libplanet.Net
{
    public class Swarm<T> : ISwarm, IDisposable
        where T : IAction, new()
    {
        private static readonly TimeSpan TurnAllocationLifetime =
            TimeSpan.FromSeconds(777);

        // TURN Permission lifetime was defined in RFC 5766
        // see also https://tools.ietf.org/html/rfc5766#section-8
        private static readonly TimeSpan TurnPermissionLifetime =
            TimeSpan.FromMinutes(5);

        private static readonly TimeSpan MaxTimeout = TimeSpan.FromSeconds(150);
        private static readonly TimeSpan BlockRecvTimeout = TimeSpan.FromSeconds(15);
        private static readonly TimeSpan TxRecvTimeout = TimeSpan.FromSeconds(3);
        private static readonly TimeSpan RecentStateRecvTimeout = TimeSpan.FromSeconds(150);
        private readonly PrivateKey _privateKey;
        private readonly int _appProtocolVersion;

        private readonly AsyncLock _runningMutex;
        private readonly AsyncLock _blockSyncMutex;
        private readonly string _host;
        private readonly IList<IceServer> _iceServers;

        private readonly ILogger _logger;

        private RouterSocket _router;
        private NetMQQueue<Message> _replyQueue;
        private NetMQQueue<(Address?, Message)> _broadcastQueue;
        private AsyncCollection<MessageRequest> _requests;
        private NetMQPoller _poller;

        private TaskCompletionSource<object> _runningEvent;
        private int? _listenPort;
        private TurnClient _turnClient;
        private bool _behindNAT;
        private CancellationTokenSource _workerCancellationTokenSource;
        private CancellationTokenSource _runtimeCancellationTokenSource;
        private CancellationToken _cancellationToken;
        private IPAddress _publicIPAddress;
        private Task _runtimeProcessor;

        private IStore _store;

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
            Running = false;

            BlockChain = blockChain ?? throw new ArgumentNullException(nameof(blockChain));
            _store = BlockChain.Store;
            _privateKey = privateKey ?? throw new ArgumentNullException(nameof(privateKey));
            LastSeenTimestamps =
                new ConcurrentDictionary<Peer, DateTimeOffset>();

            DateTimeOffset now = createdAt.GetValueOrDefault(
                DateTimeOffset.UtcNow);
            LastReceived = now;
            TxReceived = new AsyncAutoResetEvent();
            BlockAppended = new AsyncAutoResetEvent();
            BlockReceived = new AsyncAutoResetEvent();
            DifferentVersionPeerEncountered = differentVersionPeerEncountered;

            _blockSyncMutex = new AsyncLock();
            _runningMutex = new AsyncLock();

            _host = host;
            _listenPort = listenPort;
            _appProtocolVersion = appProtocolVersion;

            if (_host != null && _listenPort is int listenPortAsInt)
            {
                EndPoint = new DnsEndPoint(_host, listenPortAsInt);
            }

            _iceServers = iceServers?.ToList();
            if (_host == null && (_iceServers == null || !_iceServers.Any()))
            {
                throw new ArgumentException(
                    $"Swarm requires either {nameof(host)} or " +
                    $"{nameof(iceServers)}."
                );
            }

            string loggerId = _privateKey.PublicKey.ToAddress().ToHex();
            _logger = Log.ForContext<Swarm<T>>()
                .ForContext("SwarmId", loggerId);

            Protocol = new KademliaProtocol(
                this,
                _privateKey.PublicKey.ToAddress(),
                _appProtocolVersion,
                _logger,
                tableSize,
                bucketSize);

            _requests = new AsyncCollection<MessageRequest>();
            _runtimeCancellationTokenSource = new CancellationTokenSource();
            _runtimeProcessor = Task.Factory.StartNew(
                () =>
                {
                    // Ignore NetMQ related exceptions during NetMQRuntime.Dispose() to stabilize
                    // tests
                    try
                    {
                        using (var runtime = new NetMQRuntime())
                        {
                            var workerTasks = new Task[workers];

                            for (int i = 0; i < workers; i++)
                            {
                                workerTasks[i] = ProcessRuntime(
                                    _runtimeCancellationTokenSource.Token
                                );
                            }

                            runtime.Run(workerTasks);
                        }
                    }
                    catch (NetMQException e)
                    {
                        _logger.Error(
                            e,
                            $"NetMQException occurred in {nameof(_runtimeProcessor)}."
                        );
                    }
                    catch (ObjectDisposedException e)
                    {
                        _logger.Error(
                            e,
                            $"ObjectDisposedException occurred in {nameof(_runtimeProcessor)}."
                        );
                    }
                },
                CancellationToken.None,
                TaskCreationOptions.DenyChildAttach | TaskCreationOptions.LongRunning,
                TaskScheduler.Default
            );
        }

        ~Swarm()
        {
            // FIXME If possible, we should stop Swarm appropriately here.
            if (Running)
            {
                _logger.Warning(
                    "Swarm is scheduled to destruct, but it's still running.");
            }
        }

        /// <summary>
        /// The <see cref="EventHandler" /> triggered when the different version of
        /// <see cref="Peer" /> is discovered.
        /// </summary>
        public event EventHandler<DifferentProtocolVersionEventArgs>
            DifferentVersionPeerEncountered;

        public DnsEndPoint EndPoint { get; private set; }

        public Address Address => _privateKey.PublicKey.ToAddress();

        public Peer AsPeer => EndPoint is null
            ? new Peer(
                _privateKey.PublicKey,
                _appProtocolVersion,
                _publicIPAddress)
            : new BoundPeer(
                _privateKey.PublicKey,
                EndPoint,
                _appProtocolVersion,
                _publicIPAddress);

        public DateTimeOffset LastReceived { get; private set; }

        public IDictionary<Peer, DateTimeOffset> LastSeenTimestamps
        {
            get;
            private set;
        }

        /// <summary>
        /// The <see cref="BlockChain{T}"/> instance this <see cref="Swarm{T}"/> instance
        /// synchronizes with.
        /// </summary>
        public BlockChain<T> BlockChain { get; private set; }

        /// <summary>
        /// Whether this <see cref="Swarm{T}"/> instance is running.
        /// </summary>
        public bool Running
        {
            get => _runningEvent.Task.Status == TaskStatus.RanToCompletion;

            private set
            {
                if (value)
                {
                    _runningEvent.TrySetResult(null);
                }
                else
                {
                    _runningEvent = new TaskCompletionSource<object>();
                }
            }
        }

        public IEnumerable<BoundPeer> Peers => Protocol.Peers;

        internal AsyncAutoResetEvent TxReceived { get; }

        internal AsyncAutoResetEvent BlockReceived { get; }

        // FIXME: Should have a unit test.
        internal AsyncAutoResetEvent BlockAppended { get; }

        internal TimeSpan BlockHashRecvTimeout { get; set; } = TimeSpan.FromSeconds(30);

        internal IProtocol Protocol { get; private set; }

        // FIXME: We need some sort of configuration method for it.
        internal int FindNextHashesChunkSize { get; set; } = 500;

        internal int FindNextStatesChunkSize { get; set; } = 1000;

        internal AsyncAutoResetEvent PreloadStarted { get; } = new AsyncAutoResetEvent();

        internal AsyncAutoResetEvent FillBlocksAsyncStarted { get; } = new AsyncAutoResetEvent();

        internal AsyncAutoResetEvent FillBlocksAsyncFailed { get; } = new AsyncAutoResetEvent();

        /// <summary>
        /// Waits until this <see cref="Swarm{T}"/> instance gets started to run.
        /// </summary>
        /// <returns>A <see cref="Task"/> completed when <see cref="Running"/>
        /// property becomes <c>true</c>.</returns>
        public Task WaitForRunningAsync() => _runningEvent.Task;

        public void Dispose()
        {
            _runtimeCancellationTokenSource.Cancel();

            _runtimeProcessor.Wait();
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
                if (Running)
                {
                    await Task.Delay(waitFor, cancellationToken);

                    _broadcastQueue.ReceiveReady -= DoBroadcast;
                    _replyQueue.ReceiveReady -= DoReply;
                    _router.ReceiveReady -= ReceiveMessage;

                    if (_poller.IsRunning)
                    {
                        _poller.Dispose();
                    }

                    _broadcastQueue.Dispose();
                    _replyQueue.Dispose();
                    _router.Dispose();
                    _turnClient?.Dispose();

                    Running = false;
                }
            }

            _logger.Debug("Stopped.");
        }

        public async Task StartAsync(
            int millisecondsDialTimeout = 15000,
            int millisecondsBroadcastTxInterval = 5000,
            EventHandler<PreloadBlockDownloadFailEventArgs> preloadBlockDownloadFailed = null,
            CancellationToken cancellationToken = default(CancellationToken))
        {
            await StartAsync(
                TimeSpan.FromMilliseconds(millisecondsDialTimeout),
                TimeSpan.FromMilliseconds(millisecondsBroadcastTxInterval),
                preloadBlockDownloadFailed: preloadBlockDownloadFailed,
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
        /// <param name="preloadBlockDownloadFailed">
        /// The <see cref="EventHandler" /> triggered when
        /// <see cref="PreloadAsync(TimeSpan?, IProgress{PreloadState}, IImmutableSet{Address},
        /// EventHandler{PreloadBlockDownloadFailEventArgs}, CancellationToken)" />
        /// fails to download blocks.
        /// </param>
        /// /// <param name="cancellationToken">
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
            EventHandler<PreloadBlockDownloadFailEventArgs> preloadBlockDownloadFailed = null,
            CancellationToken cancellationToken = default(CancellationToken))
        {
            if (Running)
            {
                throw new SwarmException("Swarm is already running.");
            }

            _router = new RouterSocket();
            _router.Options.RouterHandover = true;

            if (_host is null && !(_iceServers is null))
            {
                _turnClient = await IceServer.CreateTurnClient(_iceServers);
            }

            if (_listenPort == null)
            {
                _listenPort = _router.BindRandomPort("tcp://*");
            }
            else
            {
                _router.Bind($"tcp://*:{_listenPort}");
            }

            _logger.Information($"Listen on {_listenPort}");

            _workerCancellationTokenSource = new CancellationTokenSource();
            CancellationToken workerCancellationToken =
                CancellationTokenSource.CreateLinkedTokenSource(
                    _workerCancellationTokenSource.Token, cancellationToken
                ).Token;
            _cancellationToken = workerCancellationToken;
            var tasks = new List<Task>();

            if (!(_turnClient is null))
            {
                _publicIPAddress = (await _turnClient.GetMappedAddressAsync()).Address;

                if (await _turnClient.IsBehindNAT())
                {
                    _behindNAT = true;
                }
            }

            if (_behindNAT)
            {
                IPEndPoint turnEp = await _turnClient.AllocateRequestAsync(
                    TurnAllocationLifetime
                );
                EndPoint = new DnsEndPoint(turnEp.Address.ToString(), turnEp.Port);

                // FIXME should be parameterized
                tasks.Add(BindingProxies(_cancellationToken));
                tasks.Add(BindingProxies(_cancellationToken));
                tasks.Add(BindingProxies(_cancellationToken));
                tasks.Add(RefreshAllocate(_cancellationToken));
                tasks.Add(RefreshPermissions(_cancellationToken));
            }
            else if (_host is null)
            {
                EndPoint = new DnsEndPoint(_publicIPAddress.ToString(), _listenPort.Value);
            }
            else
            {
                EndPoint = new DnsEndPoint(_host, _listenPort.Value);
            }

            _replyQueue = new NetMQQueue<Message>();
            _broadcastQueue = new NetMQQueue<(Address?, Message)>();
            _poller = new NetMQPoller { _router, _replyQueue, _broadcastQueue };

            _router.ReceiveReady += ReceiveMessage;
            _replyQueue.ReceiveReady += DoReply;
            _broadcastQueue.ReceiveReady += DoBroadcast;

            _logger.Debug("Starting swarm...");
            _logger.Debug("Peer information : {Peer}", AsPeer);

            using (await _runningMutex.LockAsync())
            {
                await PreloadAsync(
                    dialTimeout: dialTimeout,
                    render: true,
                    cancellationToken: _cancellationToken
                );
                Running = true;
            }

            try
            {
                tasks.Add(BroadcastTxAsync(broadcastTxInterval, _cancellationToken));
                tasks.Add(
                    RefreshTableAsync(
                        TimeSpan.FromSeconds(10),
                        TimeSpan.FromSeconds(10),
                        _cancellationToken));
                tasks.Add(RebuildConnectionAsync(TimeSpan.FromMinutes(30), _cancellationToken));
                tasks.Add(
                    Task.Run(() =>
                    {
                        // Ignore NetMQ related exceptions during NetMQPoller.Run() to stabilize
                        // tests.
                        try
                        {
                            _poller.Run();
                        }
                        catch (TerminatingException)
                        {
                            _logger.Error($"TerminatingException occurred in {nameof(_poller)}");
                        }
                        catch (ObjectDisposedException)
                        {
                            _logger.Error($"ObjectDisposedException occurred in {nameof(_poller)}");
                        }
                    }));
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

            await Protocol.BootstrapAsync(
                peers.ToImmutableList(),
                pingSeedTimeout,
                findNeighborsTimeout,
                depth,
                cancellationToken);
        }

        public void BroadcastBlocks(IEnumerable<Block<T>> blocks)
        {
            BroadcastBlocks(null, blocks);
        }

        public void BroadcastTxs(IEnumerable<Transaction<T>> txs)
        {
            BroadcastTxs(null, txs);
        }

        public string TraceTable()
        {
            return Protocol is null ? string.Empty : Protocol.Trace();
        }

        async Task<Message> ISwarm.SendMessageWithReplyAsync(
            BoundPeer peer,
            Message message,
            TimeSpan? timeout,
            CancellationToken cancellationToken)
        {
            IEnumerable<Message> replies =
                await SendMessageWithReplyAsync(peer, message, timeout, 1, cancellationToken);
            Message reply = replies.First();
            ValidateSender(reply.Remote);

            return reply;
        }

        void ISwarm.ReplyMessage(Message message)
        {
            _replyQueue.Enqueue(message);
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
        /// <remarks>This does not render downloaded <see cref="IAction"/>s, but fills states only.
        /// If you want to render all <see cref="IAction"/>s from the genesis block to the recent
        /// blocks use
        /// <see cref="StartAsync(TimeSpan, TimeSpan, EventHandler{PreloadBlockDownloadFailEventArgs}, CancellationToken)"/>
        /// method instead.</remarks>
        /// <exception cref="AggregateException">Thrown when the given the block downloading is
        /// failed and if <paramref name="blockDownloadFailed "/> is <c>null</c>.</exception>
#pragma warning restore MEN002 // Line is too long
        public Task PreloadAsync(
            TimeSpan? dialTimeout = null,
            IProgress<PreloadState> progress = null,
            IImmutableSet<Address> trustedStateValidators = null,
            EventHandler<PreloadBlockDownloadFailEventArgs> blockDownloadFailed = null,
            CancellationToken cancellationToken = default(CancellationToken)
        )
        {
            return PreloadAsync(
                render: false,
                dialTimeout: dialTimeout,
                progress: progress,
                trustedStateValidators: trustedStateValidators,
                blockDownloadFailed: blockDownloadFailed,
                cancellationToken: cancellationToken
            );
        }

        public async Task<BoundPeer> FindSpecificPeerAsync(
            Address target,
            Address searchAddress,
            int depth,
            BoundPeer viaPeer,
            TimeSpan? timeout,
            CancellationToken cancellationToken)
        {
            KademliaProtocol kp = (KademliaProtocol)Protocol;
            return await kp.FindSpecificPeerAsync(
                new ConcurrentBag<BoundPeer>(),
                target,
                viaPeer,
                depth,
                searchAddress,
                timeout,
                cancellationToken);
        }

        // FIXME: It is not guaranteed that states will be reported in order. see issue #436, #430
        internal async Task PreloadAsync(
            bool render,
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
                        await SyncBehindsBlocksFromPeerAsync(
                            workspace,
                            peerWithHeight,
                            progress,
                            cancellationToken,
                            render
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
                else if (render)
                {
                    // If it's already rendered by SyncBehindsBlocksFromPeersAsync() method
                    // it means states are already calculated so that it does not need to receive
                    // calculated states from trusted peers.
                    complete = true;
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

        internal async Task AddPeersAsync(
            IEnumerable<Peer> peers,
            TimeSpan? timeout,
            CancellationToken cancellationToken = default(CancellationToken))
        {
            if (Protocol is null)
            {
                throw new ArgumentNullException(nameof(Protocol));
            }

            if (cancellationToken == default(CancellationToken))
            {
                cancellationToken = _cancellationToken;
            }

            try
            {
                KademliaProtocol kp = (KademliaProtocol)Protocol;

                var tasks = new List<Task>();
                foreach (Peer peer in peers)
                {
                    if (peer is BoundPeer boundPeer)
                    {
                        tasks.Add(kp.PingAsync(
                            boundPeer,
                            timeout: timeout,
                            cancellationToken: cancellationToken));
                    }
                }

                _logger.Verbose("Trying to ping all {PeersNumber} peers.", tasks.Count);
                await Task.WhenAll(tasks);
                _logger.Verbose("Update complete.");
            }
            catch (DifferentAppProtocolVersionException)
            {
                _logger.Debug("Different version encountered during AddPeersAsync().");
            }
            catch (TimeoutException)
            {
                _logger.Debug(
                    $"Timeout occurred during {nameof(AddPeersAsync)}() after {timeout}.");
                throw;
            }
            catch (TaskCanceledException)
            {
                _logger.Debug($"Task is cancelled during {nameof(AddPeersAsync)}().");
            }
            catch (Exception e)
            {
                _logger.Error(
                    e,
                    $"Unexpected exception occurred during {nameof(AddPeersAsync)}().");
                throw;
            }
        }

        internal async Task SendMessageAsync(BoundPeer peer, Message message)
        {
            await SendMessageWithReplyAsync(peer, message, TimeSpan.FromSeconds(3), 0);
        }

        internal virtual async Task<IEnumerable<Message>> SendMessageWithReplyAsync(
            BoundPeer peer,
            Message message,
            TimeSpan? timeout,
            int expectedResponses,
            CancellationToken cancellationToken = default(CancellationToken)
        )
        {
            if (_behindNAT)
            {
                await CreatePermission(peer);
            }

            Guid reqId = Guid.NewGuid();
            try
            {
                _logger.Verbose(
                    "Enqueue a request {RequestId} to {PeerAddress}: {Message}.",
                    reqId,
                    peer.Address,
                    message
                );
                var tcs = new TaskCompletionSource<IEnumerable<Message>>();
                await _requests.AddAsync(
                    new MessageRequest(reqId, message, peer, timeout, expectedResponses, tcs)
                );
                _logger.Verbose(
                    "Enqueued a request {RequestId} to {PeerAddress}: {Message}.",
                    reqId,
                    peer.Address,
                    message
                );

                var reply = (await tcs.Task).ToList();
                const string logMsg =
                    "Received {ReplyMessageCount} reply messages to {RequestId} " +
                    "from {PeerAddress}: {ReplyMessages}.";
                _logger.Debug(logMsg, reply.Count, reqId, peer.Address, reply);

                return reply;
            }
            catch (DifferentAppProtocolVersionException e)
            {
                const string logMsg =
                    "{PeerAddress} sent a reply to {RequestId} with " +
                    "a different app protocol version; " +
                    "expected: {ExpectedVersion}; actual: {ActualVersion}.";
                _logger.Error(e, logMsg, peer.Address, reqId, e.ExpectedVersion, e.ActualVersion);
                throw;
            }
            catch (TimeoutException)
            {
                _logger.Debug(
                    $"{nameof(Swarm<T>)}.{nameof(SendMessageWithReplyAsync)}() timed out " +
                    "after {Timeout} of waiting a reply to {RequestId} from {PeerAddress}.",
                    timeout,
                    reqId,
                    peer.Address
                );
                throw;
            }
            catch (TaskCanceledException)
            {
                _logger.Debug(
                    $"{nameof(Swarm<T>)}.{nameof(SendMessageWithReplyAsync)}() was cancelled to " +
                    "wait a reply to {RequestId} from {PeerAddress}.",
                    reqId,
                    peer.Address
                );
                throw;
            }
            catch (Exception e)
            {
                var msg =
                    $"{nameof(Swarm<T>)}.{nameof(SendMessageWithReplyAsync)}() encountered " +
                    "an unexpected exception during sending a request {RequestId} to " +
                    "{PeerAddress} and waiting a reply to it: {Exception}.";
                _logger.Error(e, msg, reqId, peer.Address, e);
                throw;
            }
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

            Message parsedMessage = await (this as ISwarm).SendMessageWithReplyAsync(
                peer,
                request,
                timeout: BlockHashRecvTimeout,
                cancellationToken: token
            );

            Protocol.ReceiveMessage(parsedMessage);
            ValidateSender(parsedMessage.Remote);

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

                IEnumerable<Message> replies = await SendMessageWithReplyAsync(
                    peer,
                    request,
                    blockRecvTimeout,
                    ((hashCount - 1) / request.ChunkSize) + 1,
                    yieldToken
                );

                foreach (Message message in replies)
                {
                    Protocol.ReceiveMessage(message);
                    ValidateSender(message.Remote);
                    if (message is Messages.Blocks blockMessage)
                    {
                        IList<byte[]> payloads = blockMessage.Payloads;
                        _logger.Debug(
                            "Received {0} blocks from {1}.",
                            payloads.Count,
                            message.Remote.PublicKey.ToAddress().ToHex());
                        foreach (byte[] payload in payloads)
                        {
                            Block<T> block = Block<T>.FromBencodex(payload);
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

                IEnumerable<Message> replies = await SendMessageWithReplyAsync(
                    peer,
                    request,
                    txRecvTimeout,
                    txCount,
                    cancellationToken
                );

                foreach (Message message in replies)
                {
                    Protocol.ReceiveMessage(message);
                    ValidateSender(message.Remote);
                    if (message is Messages.Tx parsed)
                    {
                        Transaction<T> tx = Transaction<T>.FromBencodex(
                            parsed.Payload);
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

        private void BroadcastBlocks(Address? except, IEnumerable<Block<T>> blocks)
        {
            _logger.Debug("Trying to broadcast blocks...");
            var message = new BlockHashes(
                Address,
                blocks.Select(b => b.Hash)
            );
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
            _broadcastQueue.Enqueue((except, message));
        }

        private async Task BindingProxies(CancellationToken cancellationToken)
        {
            while (!cancellationToken.IsCancellationRequested)
            {
                try
                {
#pragma warning disable IDE0067  // We'll dispose of `stream` in proxy task.
                    NetworkStream stream = await _turnClient.AcceptRelayedStreamAsync();
#pragma warning restore IDE0067

                    // TODO We should expose the interface so that library users
                    // can limit / manage the task.
#pragma warning disable CS4014
                    Task.Run(async () =>
                    {
                        using (var proxy = new NetworkStreamProxy(stream))
                        {
                            await proxy.StartAsync(IPAddress.Loopback, _listenPort.Value);
                        }
                    }).ContinueWith(_ => stream.Dispose());
#pragma warning restore CS4014
                }
                catch (Exception e)
                {
                    _logger.Error(e, "An unexpected exception occurred. try again...");
                }
            }
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
                        Message reply = await (this as ISwarm).SendMessageWithReplyAsync(
                            peer,
                            new Ping(),
                            dialTimeout,
                            cancellationToken
                        );
                        if (reply is Pong pong)
                        {
                            Protocol.ReceiveMessage(reply);
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
                        reply = await (this as ISwarm).SendMessageWithReplyAsync(
                            peer,
                            request,
                            timeout: RecentStateRecvTimeout,
                            cancellationToken: cancellationToken
                        );

                        // Do not call Protocol.ReceiveMessage since swarm is not started
                        // when synchronizing previous states.
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

                    ValidateSender(reply.Remote);

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
                                IImmutableSet<Address> addresses = pair.Value.ToImmutableHashSet();
                                if (_store.GetBlockIndex(hash) is long index)
                                {
                                    _store.StoreStateReference(chainId, addresses, hash, index);
                                }
                            }

                            _logger.Debug(
                                "Starts to store block states received from {Peer}.",
                                peer);
                            foreach (var pair in recentStates.BlockStates)
                            {
                                cancellationToken.ThrowIfCancellationRequested();
                                _store.SetBlockStates(pair.Key, pair.Value);
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

        private async Task RefreshAllocate(CancellationToken cancellationToken)
        {
            TimeSpan lifetime = TurnAllocationLifetime;
            while (!cancellationToken.IsCancellationRequested)
            {
                try
                {
                    await Task.Delay(lifetime - TimeSpan.FromMinutes(1), cancellationToken);
                    lifetime = await _turnClient.RefreshAllocationAsync(lifetime);
                    cancellationToken.ThrowIfCancellationRequested();
                }
                catch (OperationCanceledException e)
                {
                    _logger.Warning(e, $"{nameof(RefreshAllocate)}() is cancelled.");
                    throw;
                }
                catch (Exception e)
                {
                    _logger.Error(
                        e,
                        $"An unexpected exception occurred during {nameof(RefreshAllocate)}(): {e}"
                    );
                }
            }
        }

        private async Task RefreshPermissions(
            CancellationToken cancellationToken)
        {
            TimeSpan lifetime = TurnPermissionLifetime;
            while (!cancellationToken.IsCancellationRequested)
            {
                try
                {
                    await Task.Delay(lifetime - TimeSpan.FromMinutes(1), cancellationToken);
                    await Task.WhenAll(Peers.Select(CreatePermission));
                    cancellationToken.ThrowIfCancellationRequested();
                }
                catch (OperationCanceledException e)
                {
                    _logger.Warning(e, $"{nameof(RefreshPermissions)}() is cancelled.");
                    throw;
                }
                catch (Exception e)
                {
                    var msg = "An unexpected exception occurred during " +
                              $"{nameof(RefreshPermissions)}(): {{0}}";
                    _logger.Error(e, msg, e);
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

        private async Task ProcessMessageAsync(
            Message message,
            CancellationToken cancellationToken)
        {
            Protocol.ReceiveMessage(message);
            switch (message)
            {
                case Ping ping:
                    {
                        _logger.Debug($"Ping received.");
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
                        var reply = new BlockHashes(Address, hashes)
                        {
                            Identity = getBlockHashes.Identity,
                        };
                        (this as ISwarm).ReplyMessage(reply);
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
                        await ProcessTxIds(txIds, cancellationToken);
                        break;
                    }

                case BlockHashes blockHashes:
                    {
                        await ProcessBlockHashes(blockHashes, cancellationToken);
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

            if (!newHashes.Any())
            {
                _logger.Debug($"No blocks to require. Ignore {nameof(BlockHashes)}.");
                return;
            }

            _logger.Debug(
                $"Trying to {nameof(GetBlocksAsync)}() using {{0}} hashes.",
                newHashes.Count);

            System.Collections.Async.IAsyncEnumerable<Block<T>> fetched = GetBlocksAsync(
                peer,
                newHashes
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
                        BroadcastBlocks(message.Remote.Address, blocks);
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
                Message response = new Messages.Tx(tx.ToBencodex(true))
                {
                    Identity = getTxs.Identity,
                };
                (this as ISwarm).ReplyMessage(response);
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
                    byte[] payload = block.ToBencodex(true, true);
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
                    (this as ISwarm).ReplyMessage(response);
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
                (this as ISwarm).ReplyMessage(response);
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
            IImmutableDictionary<Address, IImmutableList<HashDigest<SHA256>>>
                stateRefs = null;
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
                    _logger.Verbose(
                        "List state references from {From} to {To}.",
                        lowestIndex,
                        highestIndex);

                    // GetBlockStates may return null since swarm may not have deep states.
                    blockStates = stateRefs.Values
                        .Select(refs => refs.Last())
                        .Select(bh =>
                            new KeyValuePair<
                                HashDigest<SHA256>,
                                IImmutableDictionary<Address, IValue>
                            >(bh, _store.GetBlockStates(bh)))
                        .Where(kv => !(kv.Value is null))
                        .ToImmutableDictionary();
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
                                kv.Key.ToString(),
                                string.Join(", ", kv.Value.Select(v => v.ToString()))
                            )
                        ).ToArray(),
                        baseString,
                        targetString
                    );
                    _logger.Verbose(
                        "Block states to send (preload): {BlockStates} ({Base}-{Target})",
                        blockStates.Select(kv => (kv.Key.ToString(), kv.Value)).ToArray(),
                        baseString,
                        targetString
                    );
                }
                else
                {
                    _logger.Verbose("Nothing to reply because {TargetHash} doesn't exist.", target);
                }
            }

            var reply = new RecentStates(target, nextOffset, iteration, blockStates, stateRefs)
            {
                Identity = getRecentStates.Identity,
            };
            (this as ISwarm).ReplyMessage(reply);
        }

        private void ReceiveMessage(object sender, NetMQSocketEventArgs e)
        {
            try
            {
                NetMQMessage raw = e.Socket.ReceiveMultipartMessage();

                _logger.Verbose(
                    "A raw message [frame count: {0}] has received.",
                    raw.FrameCount
                );
                Message message = Message.Parse(raw, reply: false);
                _logger.Debug("A message has parsed: {0}, from {1}", message, message.Remote);
                if (!(message is Ping))
                {
                    ValidateSender(message.Remote);
                }

                // it's still async because some method it relies are async yet.
                Task.Run(
                    async () =>
                    {
                        try
                        {
                            await ProcessMessageAsync(message, _cancellationToken);
                        }
                        catch (Exception exc)
                        {
                            _logger.Error(
                                exc,
                                "Something went wrong during message parsing: {0}",
                                exc);
                            throw;
                        }
                    },
                    _cancellationToken);
            }
            catch (DifferentAppProtocolVersionException)
            {
                _logger.Debug("Ignore message from peer with different version.");
            }
            catch (InvalidMessageException ex)
            {
                _logger.Error(ex, $"Could not parse NetMQMessage properly; ignore: {ex}");
            }
            catch (Exception ex)
            {
                _logger.Error(
                    ex,
                    $"An unexpected exception occurred during ReceiveMessage(): {ex}"
                );
            }
        }

        private void DoBroadcast(object sender, NetMQQueueEventArgs<(Address?, Message)> e)
        {
            (Address? except, Message msg) = e.Queue.Dequeue();

            // FIXME Should replace with PUB/SUB model.
            try
            {
                var peers = Protocol.PeersToBroadcast(except).ToList();
                _logger.Debug($"Broadcasting message [{msg}]");
                _logger.Debug($"Peers to broadcast : {peers.Count}");
                peers.ParallelForEachAsync(async peer =>
                {
                    await SendMessageAsync(peer, msg);
                });

                _logger.Debug($"[{msg}] broadcasting completed.");
            }
            catch (TimeoutException ex)
            {
                _logger.Error(ex, $"TimeoutException occurred during {nameof(DoBroadcast)}().");
            }
            catch (Exception ex)
            {
                _logger.Error(
                    ex,
                    $"An unexpected exception occurred during {nameof(DoBroadcast)}()."
                );
            }
        }

        private void DoReply(object sender, NetMQQueueEventArgs<Message> e)
        {
            Message msg = e.Queue.Dequeue();

            // FIXME: this works, but should be fixed.
            if (msg is Pong pong)
            {
                pong.TipIndex = BlockChain.Tip?.Index;
                msg = pong;
            }

            string identityHex = ByteUtil.Hex(msg.Identity);
            _logger.Debug("Reply {Message} to {Identity}...", msg, identityHex);
            NetMQMessage netMQMessage = msg.ToNetMQMessage(_privateKey, AsPeer);

            // FIXME The current timeout value(1 sec) is arbitrary.
            // We should make this configurable or fix it to an unneeded structure.
            if (_router.TrySendMultipartMessage(TimeSpan.FromSeconds(1), netMQMessage))
            {
                _logger.Debug("A reply sent to {Identity}: {Message}", msg, identityHex);
            }
            else
            {
                _logger.Debug("Failed to reply to {Identity}: {Message}", msg, identityHex);
            }
        }

        private async Task ProcessRuntime(
            CancellationToken cancellationToken = default(CancellationToken))
        {
            while (!cancellationToken.IsCancellationRequested)
            {
                _logger.Verbose("Waiting for a new request...");
                MessageRequest req = await _requests.TakeAsync(cancellationToken);

                try
                {
                    await ProcessRequest(req, cancellationToken);
                }
                catch (OperationCanceledException)
                {
                    _logger.Information("Cancellation requsted; shutdown runtime...");
                    throw;
                }
                catch (Exception e)
                {
                    if (req.Retryable)
                    {
                        const int retryAfter = 100;
                        _logger.Debug(
                            $"Unexpected exception occurred during {nameof(ProcessRuntime)}(): " +
                            "{Exception}; retry after {DelayMs} ms...",
                            e,
                            retryAfter
                        );
                        await _requests.AddAsync(req.Retry(), cancellationToken);
                        await Task.Delay(retryAfter, cancellationToken);
                    }
                    else
                    {
                        _logger.Error("Failed to process request[{req}]; discard it.", req);
                    }
                }
            }
        }

        private async Task ProcessRequest(MessageRequest req, CancellationToken cancellationToken)
        {
            _logger.Verbose("Request {RequestId} taken.", req.Id);

            using (var dealer = new DealerSocket(ToNetMQAddress(req.Peer)))
            {
                // FIXME 1 min is an arbitrary value.
                // See also https://github.com/planetarium/libplanet/pull/599 and
                // https://github.com/planetarium/libplanet/pull/709
                dealer.Options.Linger = TimeSpan.FromMinutes(1);

                _logger.Debug(
                    "Trying to send {Message} to {Peer}...",
                    req.Message,
                    req.Peer
                );
                var message = req.Message.ToNetMQMessage(_privateKey, AsPeer);
                var result = new List<Message>();
                TaskCompletionSource<IEnumerable<Message>> tcs = req.TaskCompletionSource;
                try
                {
                    await dealer.SendMultipartMessageAsync(
                        message,
                        timeout: req.Timeout,
                        cancellationToken: cancellationToken
                    );

                    _logger.Debug("A message {Message} sent.", req.Message);

                    foreach (var i in Enumerable.Range(0, req.ExpectedResponses))
                    {
                        NetMQMessage raw = await dealer.ReceiveMultipartMessageAsync(
                            timeout: req.Timeout,
                            cancellationToken: cancellationToken
                        );
                        _logger.Verbose(
                            "A raw message ({FrameCount} frames) has replied.",
                            raw.FrameCount
                        );
                        Message reply = Message.Parse(raw, true);
                        _logger.Debug(
                            "A reply has parsed: {Reply} from {ReplyRemote}",
                            reply,
                            reply.Remote
                        );

                        result.Add(reply);
                    }

                    tcs.SetResult(result);
                }
                catch (TimeoutException te)
                {
                    tcs.SetException(te);
                }

                // Delaying dealer disposing to avoid ObjectDisposedException on NetMQPoller
                await Task.Delay(100, cancellationToken);
            }
        }

        private void CheckStarted()
        {
            if (!Running)
            {
                throw new NoSwarmContextException("Swarm hasn't started yet.");
            }
        }

        private string ToNetMQAddress(BoundPeer peer)
        {
            return $"tcp://{peer.EndPoint.Host}:{peer.EndPoint.Port}";
        }

        private async Task CreatePermission(BoundPeer peer)
        {
            IPAddress[] ips;
            if (peer.PublicIPAddress is null)
            {
                string peerHost = peer.EndPoint.Host;
                if (IPAddress.TryParse(peerHost, out IPAddress asIp))
                {
                    ips = new[] { asIp };
                }
                else
                {
                    ips = await Dns.GetHostAddressesAsync(peerHost);
                }
            }
            else
            {
                ips = new[] { peer.PublicIPAddress };
            }

            foreach (IPAddress ip in ips)
            {
                var ep = new IPEndPoint(ip, peer.EndPoint.Port);
                if (IPAddress.IsLoopback(ip))
                {
                    // This translation is only used in test case because a
                    // seed node exposes loopback address as public address to
                    // other node in test case
                    ep = await _turnClient.GetMappedAddressAsync();
                }

                // FIXME Can we really ignore IPv6 case?
                if (ip.AddressFamily.Equals(AddressFamily.InterNetwork))
                {
                    await _turnClient.CreatePermissionAsync(ep);
                }
            }
        }

        private void ValidateSender(Peer peer)
        {
            if (peer.AppProtocolVersion != _appProtocolVersion)
            {
                DifferentProtocolVersionEventArgs args =
                    new DifferentProtocolVersionEventArgs
                    {
                        ExpectedVersion = _appProtocolVersion,
                        ActualVersion = peer.AppProtocolVersion,
                    };

                DifferentVersionPeerEncountered?.Invoke(this, args);

                throw new DifferentAppProtocolVersionException(
                    $"Peer protocol version is different.",
                    _appProtocolVersion,
                    peer.AppProtocolVersion);
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
                    await Task.Delay(period, cancellationToken);
                    await Protocol.RefreshTableAsync(maxAge, cancellationToken);
                    await Protocol.CheckReplacementCacheAsync(cancellationToken);
                }
                catch (OperationCanceledException e)
                {
                    _logger.Warning(e, $"{nameof(RefreshTableAsync)}() is cancelled.");
                    throw;
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
                    await Protocol.RebuildConnectionAsync(cancellationToken);
                    await Task.Delay(period, cancellationToken);
                }
                catch (OperationCanceledException e)
                {
                    _logger.Warning(e, $"{nameof(RebuildConnectionAsync)}() is cancelled.");
                    throw;
                }
            }
        }

        private readonly struct MessageRequest
        {
            private readonly int _retried;

            public MessageRequest(
                in Guid id,
                Message message,
                BoundPeer peer,
                in TimeSpan? timeout,
                in int expectedResponses,
                TaskCompletionSource<IEnumerable<Message>> taskCompletionSource)
                : this(
                      id,
                      message,
                      peer,
                      timeout,
                      expectedResponses,
                      taskCompletionSource,
                      0
                    )
            {
            }

            internal MessageRequest(
                in Guid id,
                Message message,
                BoundPeer peer,
                in TimeSpan? timeout,
                in int expectedResponses,
                TaskCompletionSource<IEnumerable<Message>> taskCompletionSource,
                int retried)
            {
                Id = id;
                Message = message;
                Peer = peer;
                Timeout = timeout;
                ExpectedResponses = expectedResponses;
                TaskCompletionSource = taskCompletionSource;
                _retried = retried;
            }

            public Guid Id { get; }

            public Message Message { get; }

            public BoundPeer Peer { get; }

            public TimeSpan? Timeout { get; }

            public int ExpectedResponses { get; }

            public TaskCompletionSource<IEnumerable<Message>> TaskCompletionSource { get; }

            public bool Retryable => _retried < 10;

            public MessageRequest Retry()
            {
                return new MessageRequest(
                    Id,
                    Message,
                    Peer,
                    Timeout,
                    ExpectedResponses,
                    TaskCompletionSource,
                    _retried + 1
                );
            }
        }
    }
}
