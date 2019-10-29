using System;
using System.Collections.Async;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics;
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
    public class Swarm<T> : IDisposable
        where T : IAction, new()
    {
        private static readonly TimeSpan TurnAllocationLifetime =
            TimeSpan.FromSeconds(777);

        // TURN Permission lifetime was defined in RFC 5766
        // see also https://tools.ietf.org/html/rfc5766#section-8
        private static readonly TimeSpan TurnPermissionLifetime =
            TimeSpan.FromMinutes(5);

        private static readonly TimeSpan BlockHashRecvTimeout = TimeSpan.FromSeconds(3);
        private static readonly TimeSpan BlockRecvTimeout = TimeSpan.FromSeconds(15);
        private static readonly TimeSpan TxRecvTimeout = TimeSpan.FromSeconds(3);
        private readonly PrivateKey _privateKey;
        private readonly int _appProtocolVersion;

        private readonly AsyncLock _runningMutex;
        private readonly AsyncLock _blockSyncMutex;
        private readonly string _host;
        private readonly IList<IceServer> _iceServers;

        private readonly ILogger _logger;

        private RouterSocket _router;
        private NetMQQueue<Message> _replyQueue;
        private NetMQQueue<Message> _broadcastQueue;
        private AsyncCollection<MessageRequest> _requests;
        private NetMQPoller _poller;

        private TaskCompletionSource<object> _runningEvent;
        private int? _listenPort;
        private TurnClient _turnClient;
        private CancellationTokenSource _workerCancellationTokenSource;
        private CancellationTokenSource _runtimeCancellationTokenSource;
        private CancellationToken _cancellationToken;
        private IPAddress _publicIPAddress;
        private Task _runtimeProcessor;

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
            string host = null,
            int? listenPort = null,
            DateTimeOffset? createdAt = null,
            IEnumerable<IceServer> iceServers = null,
            EventHandler<DifferentProtocolVersionEventArgs>
                differentVersionPeerEncountered = null)
        {
            Running = false;

            BlockChain = blockChain ?? throw new ArgumentNullException(nameof(blockChain));
            _privateKey = privateKey ?? throw new ArgumentNullException(nameof(privateKey));
            LastSeenTimestamps =
                new ConcurrentDictionary<Peer, DateTimeOffset>();

            DateTimeOffset now = createdAt.GetValueOrDefault(
                DateTimeOffset.UtcNow);
            LastReceived = now;
            TxReceived = new AsyncAutoResetEvent();
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

            Protocol = new KademliaProtocol<T>(
                this,
                _privateKey.PublicKey.ToAddress(),
                _appProtocolVersion,
                _logger,
                tableSize,
                bucketSize);

            _requests = new AsyncCollection<MessageRequest>();
            _runtimeCancellationTokenSource = new CancellationTokenSource();
            _runtimeProcessor = Task.Run(() =>
            {
                // Ignore NetMQ related exceptions during NetMQRuntime.Dispose() to stabilize tests
                try
                {
                    using (var runtime = new NetMQRuntime())
                    {
                        runtime.Run(
                            ProcessRuntime(_runtimeCancellationTokenSource.Token),
                            ProcessRuntime(_runtimeCancellationTokenSource.Token),
                            ProcessRuntime(_runtimeCancellationTokenSource.Token),
                            ProcessRuntime(_runtimeCancellationTokenSource.Token),
                            ProcessRuntime(_runtimeCancellationTokenSource.Token)
                        );
                    }
                }
                catch (NetMQException)
                {
                }
                catch (ObjectDisposedException)
                {
                }
            });
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
        /// The <see cref="EventHandler" /> called when the different version of
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

        public AsyncAutoResetEvent TxReceived { get; }

        public AsyncAutoResetEvent BlockReceived { get; }

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

        internal ICollection<BoundPeer> Peers => Protocol.Peers;

        internal IProtocol Protocol { get; private set; }

        internal int FindNextHashesChunkSize { get; set; } = 500;

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
            CancellationToken cancellationToken = default(CancellationToken))
        {
            await StartAsync(
                TimeSpan.FromMilliseconds(millisecondsDialTimeout),
                TimeSpan.FromMilliseconds(millisecondsBroadcastTxInterval),
                cancellationToken
            );
        }

#pragma warning disable MEN002 // Line is too long
        /// <summary>
        /// Starts to periodically synchronize the <see cref="BlockChain"/>.
        /// </summary>
        /// <param name="dialTimeout">
        /// A timeout value for dialing.
        /// </param>
        /// <param name="broadcastTxInterval">The time period of exchange of staged transactions.
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
        /// "PreloadAsync(TimeSpan?, IProgress{PreloadState}, IImmutableSet{Address}, CancellationToken)"
        /// /> method too.</remarks>
#pragma warning restore MEN002 // Line is too long
        public async Task StartAsync(
            TimeSpan dialTimeout,
            TimeSpan broadcastTxInterval,
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
            var behindNAT = false;

            if (!(_turnClient is null))
            {
                _publicIPAddress = (await _turnClient.GetMappedAddressAsync()).Address;

                if (await _turnClient.IsBehindNAT())
                {
                    behindNAT = true;
                }
            }

            if (behindNAT)
            {
                IPEndPoint turnEp = await _turnClient.AllocateRequestAsync(
                    TurnAllocationLifetime
                );
                EndPoint = new DnsEndPoint(turnEp.Address.ToString(), turnEp.Port);

                tasks.Add(BindingProxies(_cancellationToken));
                tasks.Add(RefreshAllocate(_cancellationToken));
                tasks.Add(RefreshPermissions(_cancellationToken));
            }
            else
            {
                EndPoint = new DnsEndPoint(_host, _listenPort.Value);
            }

            _replyQueue = new NetMQQueue<Message>();
            _broadcastQueue = new NetMQQueue<Message>();
            _poller = new NetMQPoller { _router, _replyQueue, _broadcastQueue };

            _router.ReceiveReady += ReceiveMessage;
            _replyQueue.ReceiveReady += DoReply;
            _broadcastQueue.ReceiveReady += DoBroadcast;

            _logger.Debug("Starting swarm...");

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
                        }
                        catch (ObjectDisposedException)
                        {
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
           CancellationToken cancellationToken = default(CancellationToken))
        {
            await BootstrapAsync(
                seedPeers,
                TimeSpan.FromMilliseconds(pingSeedTimeout),
                TimeSpan.FromMilliseconds(findPeerTimeout),
                cancellationToken);
        }

        /// <summary>
        /// Join to the peer-to-peer network using seed peers.
        /// </summary>
        /// <param name="seedPeers">List of seed peers.</param>
        /// <param name="pingSeedTimeout">Timeout for connecting to seed peers.</param>
        /// <param name="findNeighborsTimeout">Timeout for requesting neighbors.</param>
        /// <param name="cancellationToken">A cancellation token used to propagate notification
        /// that this operation should be canceled.</param>
        /// <returns>An awaitable task without value.</returns>
        /// <exception cref="SwarmException">Thrown when this <see cref="Swarm{T}"/> instance is
        /// not <see cref="Running"/>.</exception>
        public async Task BootstrapAsync(
            IEnumerable<Peer> seedPeers,
            TimeSpan? pingSeedTimeout,
            TimeSpan? findNeighborsTimeout,
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
                cancellationToken);
        }

        public void BroadcastBlocks(IEnumerable<Block<T>> blocks)
        {
            _logger.Debug("Trying to broadcast blocks...");
            var message = new BlockHashes(
                Address,
                blocks.Select(b => b.Hash)
            );
            BroadcastMessage(message);
            _logger.Debug("Block broadcasting complete.");
        }

        public void BroadcastTxs(IEnumerable<Transaction<T>> txs)
        {
            _logger.Debug("Broadcast Txs.");
            List<TxId> txIds = txs.Select(tx => tx.Id).ToList();
            BroadcastTxIds(txIds);
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
        /// blocks use <see cref="StartAsync(TimeSpan, TimeSpan, CancellationToken)"/> method
        /// instead.</remarks>
        public Task PreloadAsync(
            TimeSpan? dialTimeout = null,
            IProgress<PreloadState> progress = null,
            IImmutableSet<Address> trustedStateValidators = null,
            CancellationToken cancellationToken = default(CancellationToken)
        )
        {
            return PreloadAsync(
                render: false,
                dialTimeout: dialTimeout,
                progress: progress,
                trustedStateValidators: trustedStateValidators,
                cancellationToken: cancellationToken
            );
        }

        // FIXME: It is not guaranteed that states will be reported in order. see issue #436, #430
        internal async Task PreloadAsync(
            bool render,
            TimeSpan? dialTimeout = null,
            IProgress<PreloadState> progress = null,
            IImmutableSet<Address> trustedStateValidators = null,
            CancellationToken cancellationToken = default(CancellationToken)
        )
        {
            if (trustedStateValidators is null)
            {
                trustedStateValidators = ImmutableHashSet<Address>.Empty;
            }

            Block<T> initialTip = BlockChain.Tip;
            BlockLocator initialLocator = BlockChain.GetBlockLocator();
            _logger.Debug($"initialTip? : {BlockChain.Tip}");

            IList<(BoundPeer, long?)> peersWithHeight =
                await DialToExistingPeers(
                    dialTimeout,
                    cancellationToken
                )
                .Where(
                    pp => pp.Item2.TipIndex > (initialTip?.Index ?? -1)
                )
                .Select(pp =>
                    (pp.Item1, pp.Item2.TipIndex)
                ).ToListAsync(cancellationToken);

            if (!peersWithHeight.Any())
            {
                _logger.Information("There is no appropriate peer for preloading.");
                return;
            }

            // As preloading takes long, the blockchain data can corrupt if a program suddenly
            // terminates during preloading is going on.  In order to make preloading done
            // all or nothing (i.e., atomic), we first fork the chain and stack up preloaded data
            // upon that forked workspace, and then if preloading ends replace the existing
            // blockchain with it.
            BlockChain<T> workspace = initialTip is Block<T> tip
                ? BlockChain.Fork(tip.Hash)
                : new BlockChain<T>(BlockChain.Policy, BlockChain.Store, Guid.NewGuid());

            var complete = false;

            try
            {
                await SyncBehindsBlocksFromPeerAsync(
                    workspace,
                    peersWithHeight.First(),
                    progress,
                    cancellationToken,
                    render
                );

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
                        pair.Item2 <= height
                    ).OrderByDescending(pair =>
                        pair.Item2
                    ).Select(pair =>
                        (pair.Item1, workspace[pair.Item2.Value].Hash)
                    );

                bool received = await SyncRecentStatesFromTrustedPeersAsync(
                    workspace,
                    progress,
                    trustedPeersWithTip.ToImmutableList(),
                    initialLocator,
                    cancellationToken
                );

                if (!received)
                {
                    long initHeight =
                        initialTip is null || !workspace[initialTip.Index].Equals(initialTip)
                        ? 0
                        : initialTip.Index + 1;
                    int count = 0, totalCount = workspace.Count() - (int)initHeight;
                    _logger.Debug("Starts to execute actions of {0} blocks.", totalCount);
                    foreach (HashDigest<SHA256> hash in workspace.BlockHashes.Skip((int)initHeight))
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
                    workspace.Store.DeleteChainId(workspace.Id);
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

        // FIXME: This method became public just for testing
#pragma warning disable SA1202
        public string TraceTable()
        {
            return Protocol is null ? string.Empty : Protocol.Trace();
        }
#pragma warning restore SA1202

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
                KademliaProtocol<T> kp = (KademliaProtocol<T>)Protocol;

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

        internal async Task<Message> SendMessageWithReplyAsync(
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

        internal async Task<IEnumerable<Message>> SendMessageWithReplyAsync(
            BoundPeer peer,
            Message message,
            TimeSpan? timeout,
            int expectedResponses,
            CancellationToken cancellationToken = default(CancellationToken)
        )
        {
            if (!(_turnClient is null))
            {
                await CreatePermission(peer);
            }

            Guid reqId = Guid.NewGuid();
            try
            {
                _logger.Verbose("Adding request ({RequestId}) to queue...", reqId);
                var tcs = new TaskCompletionSource<IEnumerable<Message>>();
                await _requests.AddAsync(
                    new MessageRequest(reqId, message, peer, timeout, expectedResponses, tcs)
                );
                _logger.Verbose("Request Added. waiting for reply...");
                IEnumerable<Message> reply = await tcs.Task;

                _logger.Debug(
                    "Received {Reply} from {PeerAddress}...",
                    reply,
                    peer.Address);

                return reply;
            }
            catch (DifferentAppProtocolVersionException e)
            {
                _logger.Error(e, "Different version received.");
                throw;
            }
            catch (TimeoutException)
            {
                _logger.Debug(
                    $"Timeout occurred during {nameof(SendMessageWithReplyAsync)}() " +
                    "after {0}.",
                    timeout);
                throw;
            }
            catch (TaskCanceledException)
            {
                _logger.Debug($"Task canceled during {nameof(SendMessageWithReplyAsync)}().");
                throw;
            }
            catch (Exception e)
            {
                var msg = "An unexpected exception occurred during " +
                        $"{nameof(SendMessageWithReplyAsync)}(). {{0}}";
                _logger.Error(
                    e, msg, e);
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

            Message parsedMessage = await SendMessageWithReplyAsync(
                peer,
                request,
                timeout: BlockHashRecvTimeout,
                cancellationToken: token
            );

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

                IEnumerable<Message> replies = await SendMessageWithReplyAsync(
                    peer,
                    request,
                    BlockRecvTimeout,
                    ((hashCount - 1) / request.ChunkSize) + 1,
                    yieldToken
                );

                foreach (Message message in replies)
                {
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

                IEnumerable<Message> replies = await SendMessageWithReplyAsync(
                    peer,
                    request,
                    TxRecvTimeout,
                    txCount,
                    cancellationToken
                );

                foreach (Message message in replies)
                {
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

        internal void ReplyMessage(Message message)
        {
            _replyQueue.Enqueue(message);
        }

        private void BroadcastMessage(Message message)
        {
            _broadcastQueue.Enqueue(message);
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
                            Debug.Assert(_listenPort != null, nameof(_listenPort) + " != null");
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
                        Message reply = await SendMessageWithReplyAsync(
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

        private async Task<bool> SyncRecentStatesFromTrustedPeersAsync(
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
            foreach ((BoundPeer peer, var blockHash) in trustedPeersWithTip)
            {
                cancellationToken.ThrowIfCancellationRequested();
                var request = new GetRecentStates(baseLocator, blockHash);

                _logger.Debug("Requests recent states to a peer ({Peer}).", peer);
                Message reply;
                try
                {
                    reply = await SendMessageWithReplyAsync(
                        peer,
                        request,
                        timeout: TimeSpan.FromSeconds(30),
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
                    continue;
                }

                ValidateSender(reply.Remote);

                if (reply is RecentStates recentStates && !recentStates.Missing)
                {
                    ReaderWriterLockSlim rwlock = blockChain._rwlock;
                    rwlock.EnterWriteLock();
                    try
                    {
                        IStore store = blockChain.Store;
                        Guid chainId = blockChain.Id;

                        int count = 0, totalCount = recentStates.StateReferences.Count;
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

                        totalCount = d.Count;
                        foreach (KeyValuePair<HashDigest<SHA256>, ISet<Address>> pair in d)
                        {
                            HashDigest<SHA256> hash = pair.Key;
                            IImmutableSet<Address> addresses = pair.Value.ToImmutableHashSet();
                            if (store.GetBlockIndex(hash) is long index)
                            {
                                store.StoreStateReference(chainId, addresses, hash, index);

                                progress?.Report(new StateReferenceDownloadState()
                                {
                                    TotalStateReferenceCount = totalCount,
                                    ReceivedStateReferenceCount = ++count,
                                });
                            }
                        }

                        count = 0;
                        totalCount = recentStates.BlockStates.Count;
                        _logger.Debug("Starts to store block states received from {Peer}.", peer);
                        foreach (var pair in recentStates.BlockStates)
                        {
                            cancellationToken.ThrowIfCancellationRequested();
                            store.SetBlockStates(pair.Key, new AddressStateMap(pair.Value));
                            progress?.Report(new BlockStateDownloadState()
                            {
                                TotalBlockStateCount = totalCount,
                                ReceivedBlockStateCount = ++count,
                                ReceivedBlockHash = pair.Key,
                            });
                        }
                    }
                    finally
                    {
                        rwlock.ExitWriteLock();
                    }

                    _logger.Debug(
                        "Finished to store received state refs and block states.");
                    return true;
                }

                _logger.Debug(
                    "A message received from {Peer} is not a RecentStates but {Reply}.",
                    peer,
                    reply
                );
            }

            _logger.Warning("Failed to receive states from trusted peers.");
            return false;
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
                    continue;
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
                    continue;
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
                                BroadcastTxIds(txIds);
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

        private void BroadcastTxIds(IEnumerable<TxId> txIds)
        {
            var message = new TxIds(Address, txIds);
            BroadcastMessage(message);
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
                        ReplyMessage(reply);
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
                    Trace.Fail($"Can't handle message. [{message}]");
                    break;
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
                .Where(hash => !BlockChain.Contains(hash))
                .ToImmutableList();

            if (!newHashes.Any())
            {
                _logger.Debug($"No blocks to require. Ignore {nameof(BlockHashes)}.");
                return;
            }

            _logger.Debug(
                $"Trying to {nameof(GetBlocksAsync)}() using {{0}} hashes.",
                newHashes.Count());

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

            try
            {
                using (await _blockSyncMutex.LockAsync(cancellationToken))
                {
                    await AppendBlocksAsync(peer, blocks, cancellationToken);
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

                    // We can't recover with OperationCanceledException and
                    // ObjectDisposedException. so just re-throw them.
                    catch (ObjectDisposedException)
                    {
                        throw;
                    }
                    catch (OperationCanceledException)
                    {
                        throw;
                    }
                    catch (Exception e)
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
                            throw;
                        }
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

                IStore store = BlockChain.Store;
                foreach (Guid chainId in store.ListChainIds().ToList())
                {
                    if (!chainId.Equals(blockChain.Id))
                    {
                        store.DeleteChainId(chainId);
                    }
                }
            }
        }

        private async Task AppendBlocksAsync(
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
                if (oldest.PreviousHash is null)
                {
                    _logger.Debug("The oldest block[{block}] seems to be genesis.", oldest);
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
                }

                foreach (Block<T> block in blocks)
                {
                    BlockChain.Append(block);
                }

                _logger.Debug("Sync is done.");

                var blockHashes =
                    blocks.Aggregate(string.Empty, (current, block) =>
                        current + $"[{block.Hash.ToString()}]");
                _logger.Debug(
                    $"Re-broadcast {nameof(BlockHashes)} with {{0}} blocks, which are {{1}}.",
                    blocks.Count,
                    blockHashes);

                // FIXME: Moved to more appropriate place
                BroadcastBlocks(blocks);
            }
            else
            {
                _logger.Information(
                    "Received index is older than current chain's tip." +
                    " ignored.");
            }

            BlockReceived.Set();
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

                // FIXME BlockChain<T>.Contains() can be very
                // expensive.
                // we can omit this clause if assume every chain shares
                // same genesis block...
                else if (!workspace.Contains(branchPoint))
                {
                    // Create a whole new chain because the branch point doesn't exist on
                    // the current chain.
                    workspace = new BlockChain<T>(
                        workspace.Policy,
                        workspace.Store,
                        Guid.NewGuid()
                    );
                }
                else
                {
                    _logger.Debug("Forking needed. Trying to fork...");
                    workspace = workspace.Fork(branchPoint);
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
                        });
                        _logger.Debug($"Block[{block.Hash}] is appended.");
                    },
                    cancellationToken);
            }

            return workspace;
        }

        private void TransferTxs(GetTxs getTxs)
        {
            IEnumerable<Transaction<T>> txs = getTxs.TxIds
                .Where(txId => BlockChain.Contains(txId))
                .Select(BlockChain.GetTransaction);

            foreach (Transaction<T> tx in txs)
            {
                Message response = new Messages.Tx(tx.ToBencodex(true))
                {
                    Identity = getTxs.Identity,
                };
                ReplyMessage(response);
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

            ImmutableHashSet<TxId> newTxIds = message.Ids
                .Where(id => !BlockChain.Contains(id))
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

            BroadcastTxs(txs);
        }

        private void TransferBlocks(GetBlocks getData)
        {
            _logger.Debug("Trying to transfer blocks...");

            var blocks = new List<byte[]>();

            foreach (HashDigest<SHA256> hash in getData.BlockHashes)
            {
                if (BlockChain.Contains(hash))
                {
                    Block<T> block = BlockChain[hash];
                    byte[] payload = block.ToBencodex(true, true);
                    blocks.Add(payload);
                }

                if (blocks.Count == getData.ChunkSize)
                {
                    var response = new Messages.Blocks(blocks)
                    {
                        Identity = getData.Identity,
                    };
                    ReplyMessage(response);
                    blocks.Clear();
                }
            }

            if (blocks.Any())
            {
                var response = new Messages.Blocks(blocks)
                {
                    Identity = getData.Identity,
                };
                ReplyMessage(response);
            }

            _logger.Debug("Transfer complete.");
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

            if (BlockChain.Contains(target))
            {
                ReaderWriterLockSlim rwlock = BlockChain._rwlock;
                rwlock.EnterReadLock();
                try
                {
                    // FIXME: Swarm should not directly access to the IStore instance,
                    // but BlockChain<T> should have an indirect interface to its underlying
                    // store.
                    IStore store = BlockChain.Store;
                    Guid chainId = BlockChain.Id;

                    stateRefs = store.ListAllStateReferences(
                        chainId,
                        onlyAfter: @base,
                        ignoreAfter: target
                    );

                    blockStates = stateRefs.Values
                        .Select(refs => refs.Last())
                        .ToImmutableHashSet()
                        .Select(bh =>
                            new KeyValuePair<
                                HashDigest<SHA256>,
                                IImmutableDictionary<Address, IValue>
                            >(bh, store.GetBlockStates(bh))
                        )
                        .ToImmutableDictionary();
                }
                finally
                {
                    rwlock.ExitReadLock();
                }
            }

            if (_logger.IsEnabled(LogEventLevel.Debug))
            {
                if (BlockChain.Contains(target))
                {
                    var baseString = @base is HashDigest<SHA256> h
                        ? $"{BlockChain[h].Index}:{h}"
                        : null;
                    var targetString = $"{BlockChain[target].Index}:{target}";
                    _logger.Debug(
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
                    _logger.Debug(
                        "Block states to send (preload): {BlockStates} ({Base}-{Target})",
                        blockStates.Select(kv => (kv.Key.ToString(), kv.Value)).ToArray(),
                        baseString,
                        targetString
                    );
                }
                else
                {
                    _logger.Debug("Nothing to reply because {TargetHash} doesn't exist.", target);
                }
            }

            var reply = new RecentStates(target, blockStates, stateRefs)
            {
                Identity = getRecentStates.Identity,
            };
            ReplyMessage(reply);
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

        private void DoBroadcast(object sender, NetMQQueueEventArgs<Message> e)
        {
            Message msg = e.Queue.Dequeue();

            // FIXME Should replace with PUB/SUB model.
            try
            {
                _logger.Debug($"Broadcasting message [{msg}]");
                _logger.Debug($"Peers to broadcast : {Protocol.PeersToBroadcast.Count}");
                Protocol.PeersToBroadcast.ParallelForEachAsync(async peer =>
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

            _logger.Debug($"Reply {msg} to {ByteUtil.Hex(msg.Identity)}...");
            NetMQMessage netMQMessage = msg.ToNetMQMessage(_privateKey, AsPeer);

            // FIXME The current timeout value(1 sec) is arbitrary.
            // We should make this configurable or fix it to an unneeded structure.
            if (_router.TrySendMultipartMessage(TimeSpan.FromSeconds(1), netMQMessage))
            {
                _logger.Debug($"Message[{msg}] replied.");
            }
            else
            {
                _logger.Debug($"Message[{msg}] replying failed.");
            }
        }

        private async Task ProcessRuntime(
            CancellationToken cancellationToken = default(CancellationToken))
        {
            while (!cancellationToken.IsCancellationRequested)
            {
                _logger.Verbose("Waiting for new request...");
                MessageRequest req = await _requests.TakeAsync(cancellationToken);

                try
                {
                    await ProcessRequest(req, cancellationToken);
                }
                catch (Exception e)
                {
                    _logger.Debug(
                        "Unexpected exception occurred during {ProcessRuntime}(). {e}",
                        nameof(ProcessRuntime),
                        e);
                    await _requests.AddAsync(req, cancellationToken);
                    await Task.Delay(100, cancellationToken);
                }
            }
        }

        private async Task ProcessRequest(MessageRequest req, CancellationToken cancellationToken)
        {
            _logger.Verbose("Request {RequestId} taken.", req.Id);

            using (var dealer = new DealerSocket(ToNetMQAddress(req.Peer)))
            {
                dealer.Options.Linger = Timeout.InfiniteTimeSpan;
                _logger.Debug(
                    "Trying to send {Message} to {PeerAddress}...",
                    req.Message,
                    req.Peer.Address
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

                await _turnClient.CreatePermissionAsync(ep);
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
            public MessageRequest(
                Guid id,
                Message message,
                BoundPeer peer,
                TimeSpan? timeout,
                int expectedResponses,
                TaskCompletionSource<IEnumerable<Message>> taskCompletionSource)
            {
                Id = id;
                Message = message;
                Peer = peer;
                Timeout = timeout;
                ExpectedResponses = expectedResponses;
                TaskCompletionSource = taskCompletionSource;
            }

            public Guid Id { get; }

            public Message Message { get; }

            public BoundPeer Peer { get; }

            public TimeSpan? Timeout { get; }

            public int ExpectedResponses { get; }

            public TaskCompletionSource<IEnumerable<Message>> TaskCompletionSource { get; }
        }
    }
}
