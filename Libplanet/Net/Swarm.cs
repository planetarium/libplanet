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
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Net.Messages;
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
    public class Swarm<T>
        where T : IAction, new()
    {
        private static readonly TimeSpan TurnAllocationLifetime =
            TimeSpan.FromSeconds(777);

        // TURN Permission lifetime was defined in RFC 5766
        // see also https://tools.ietf.org/html/rfc5766#section-8
        private static readonly TimeSpan TurnPermissionLifetime =
            TimeSpan.FromMinutes(5);

        private readonly IDictionary<Peer, DateTimeOffset> _peers;
        private readonly IDictionary<Peer, DateTimeOffset> _removedPeers;

        private readonly BlockChain<T> _blockChain;
        private readonly PrivateKey _privateKey;
        private readonly RouterSocket _router;
        private readonly IDictionary<Address, DealerSocket> _dealers;
        private readonly int _appProtocolVersion;

        private readonly TimeSpan _dialTimeout;
        private readonly AsyncLock _runningMutex;
        private readonly AsyncLock _blockSyncMutex;
        private readonly string _host;
        private readonly IList<IceServer> _iceServers;
        private readonly TimeSpan _linger;

        private readonly NetMQQueue<Message> _replyQueue;
        private readonly NetMQQueue<Message> _broadcastQueue;
        private readonly NetMQPoller _poller;

        private readonly ILogger _logger;

        private TaskCompletionSource<object> _runningEvent;
        private int? _listenPort;
        private TurnClient _turnClient;
        private CancellationTokenSource _workerCancellationTokenSource;
        private CancellationToken _cancellationToken;
        private IPAddress _publicIPAddress;

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
            int millisecondsDialTimeout = 15000,
            int millisecondsLinger = 1000,
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
                  TimeSpan.FromMilliseconds(millisecondsDialTimeout),
                  TimeSpan.FromMilliseconds(millisecondsLinger),
                  host,
                  listenPort,
                  createdAt,
                  iceServers,
                  differentVersionPeerEncountered)
        {
        }

        public Swarm(
            BlockChain<T> blockChain,
            PrivateKey privateKey,
            int appProtocolVersion,
            TimeSpan dialTimeout,
            TimeSpan linger,
            string host = null,
            int? listenPort = null,
            DateTimeOffset? createdAt = null,
            IEnumerable<IceServer> iceServers = null,
            EventHandler<DifferentProtocolVersionEventArgs>
                differentVersionPeerEncountered = null)
        {
            Running = false;

            _blockChain = blockChain ?? throw new ArgumentNullException(nameof(blockChain));
            _privateKey = privateKey ?? throw new ArgumentNullException(nameof(privateKey));
            _dialTimeout = dialTimeout;
            _peers = new ConcurrentDictionary<Peer, DateTimeOffset>();
            _removedPeers = new ConcurrentDictionary<Peer, DateTimeOffset>();
            LastSeenTimestamps =
                new ConcurrentDictionary<Peer, DateTimeOffset>();

            DateTimeOffset now = createdAt.GetValueOrDefault(
                DateTimeOffset.UtcNow);
            LastDistributed = now;
            LastReceived = now;
            DeltaDistributed = new AsyncAutoResetEvent();
            DeltaReceived = new AsyncAutoResetEvent();
            TxReceived = new AsyncAutoResetEvent();
            BlockReceived = new AsyncAutoResetEvent();
            DifferentVersionPeerEncountered = differentVersionPeerEncountered;

            _dealers = new ConcurrentDictionary<Address, DealerSocket>();
            _router = new RouterSocket();
            _router.Options.RouterHandover = true;
            _replyQueue = new NetMQQueue<Message>();
            _broadcastQueue = new NetMQQueue<Message>();
            _poller = new NetMQPoller { _router, _replyQueue, _broadcastQueue };

            _blockSyncMutex = new AsyncLock();
            _runningMutex = new AsyncLock();

            _host = host;
            _listenPort = listenPort;
            _appProtocolVersion = appProtocolVersion;
            _linger = linger;

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

            _router.ReceiveReady += ReceiveMessage;
            _replyQueue.ReceiveReady += DoReply;
            _broadcastQueue.ReceiveReady += DoBroadcast;
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

        public Peer AsPeer =>
            EndPoint != null
            ? new Peer(
                _privateKey.PublicKey,
                EndPoint,
                _appProtocolVersion,
                _publicIPAddress)
            : throw new SwarmException(
                "Can't translate unbound Swarm to Peer.");

        public AsyncAutoResetEvent DeltaReceived { get; }

        public AsyncAutoResetEvent DeltaDistributed { get; }

        public AsyncAutoResetEvent TxReceived { get; }

        public AsyncAutoResetEvent BlockReceived { get; }

        public DateTimeOffset LastReceived { get; private set; }

        public DateTimeOffset LastDistributed { get; private set; }

        public IDictionary<Peer, DateTimeOffset> LastSeenTimestamps
        {
            get;
            private set;
        }

        /// <summary>
        /// The <see cref="BlockChain{T}"/> instance this <see cref="Swarm{T}"/> instance
        /// synchronizes with.
        /// </summary>
        public BlockChain<T> BlockChain => _blockChain;

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

        internal ICollection<Peer> Peers => _peers.Keys;

        /// <summary>
        /// Waits until this <see cref="Swarm{T}"/> instance gets started to run.
        /// </summary>
        /// <returns>A <see cref="Task"/> completed when <see cref="Running"/>
        /// property becomes <c>true</c>.</returns>
        public Task WaitForRunningAsync() => _runningEvent.Task;

        public async Task<ISet<Peer>> AddPeersAsync(
            IEnumerable<Peer> peers,
            DateTimeOffset? timestamp = null,
            CancellationToken cancellationToken = default(CancellationToken))
        {
            if (timestamp is null)
            {
                timestamp = DateTimeOffset.UtcNow;
            }

            var peersAsArray = peers as Peer[] ?? peers.ToArray();
            foreach (Peer peer in peersAsArray)
            {
                if (_removedPeers.ContainsKey(peer))
                {
                    _removedPeers.Remove(peer);
                }
            }

            PublicKey publicKey = _privateKey.PublicKey;
            var addedPeers = new HashSet<Peer>();

            foreach (Peer peer in peersAsArray)
            {
                if (peer.PublicKey.Equals(publicKey))
                {
                    continue;
                }

                if (!IsUnknownPeer(peer))
                {
                    _logger.Debug($"Peer[{peer}] is already exists, ignored.");
                    continue;
                }

                if (Running)
                {
                    try
                    {
                        _logger.Debug($"Trying to DialPeerAsync({peer})...");
                        Pong pong = await DialPeerAsync(peer, cancellationToken);
                        _logger.Debug($"DialPeerAsync({peer}) is complete.");

                        Peer peerWithVersion = peer.WithAppProtocolVersion(pong.AppProtocolVersion);
                        _peers[peerWithVersion] = timestamp.Value;
                        addedPeers.Add(peerWithVersion);
                    }
                    catch (IOException e)
                    {
                        _logger.Error(
                            e,
                            $"DialPeerAsync({peer}) failed. ignored."
                        );
                    }
                    catch (TimeoutException e)
                    {
                        _logger.Error(
                            e,
                            $"DialPeerAsync({peer}) failed. ignored."
                        );
                    }
                    catch (DifferentAppProtocolVersionException e)
                    {
                        _logger.Error(
                            e,
                            $"DialPeerAsync({peer}) failed. ignored."
                        );
                    }
                }
                else
                {
                    _peers[peer] = timestamp.Value;
                }
            }

            return addedPeers;
        }

        public async Task StopAsync(
            CancellationToken cancellationToken = default(CancellationToken))
        {
            _workerCancellationTokenSource?.Cancel();
            _logger.Debug("Stopping...");
            using (await _runningMutex.LockAsync())
            {
                if (Running)
                {
                    _removedPeers[AsPeer] = DateTimeOffset.UtcNow;
                    DistributeDelta(false);

                    if (_broadcastQueue.Any() || _replyQueue.Any())
                    {
                        await Task.Delay(_linger, cancellationToken);
                    }

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

                    foreach (DealerSocket s in _dealers.Values)
                    {
                        s.Dispose();
                    }

                    _dealers.Clear();

                    Running = false;
                }
            }

            _logger.Debug("Stopped.");
        }

        public async Task StartAsync(
            int millisecondsDistributeInterval = 1500,
            int millisecondsBroadcastTxInterval = 5000,
            CancellationToken cancellationToken = default(CancellationToken))
        {
            await StartAsync(
                TimeSpan.FromMilliseconds(millisecondsDistributeInterval),
                TimeSpan.FromMilliseconds(millisecondsBroadcastTxInterval),
                cancellationToken
            );
        }

        /// <summary>
        /// Joins to the peer-to-peer network and starts to periodically synchronize
        /// the <see cref="BlockChain"/>.
        /// </summary>
        /// <param name="distributeInterval">The time period of peer exchange.</param>
        /// <param name="broadcastTxInterval">The time period of exchange of staged transactions.
        /// </param>
        /// <param name="cancellationToken">A cancellation token used to propagate notification
        /// that this operation should be canceled.</param>
        /// <returns>An awaitable task without value.</returns>
        /// <exception cref="SwarmException">Thrown when this <see cref="Swarm{T}"/> instance is
        /// already <see cref="Running"/>.</exception>
        /// <remarks>If the <see cref="BlockChain"/> has no blocks at all or there are long behind
        /// blocks to caught in the network this method could lead to unexpected behaviors, because
        /// this tries to <see cref="IAction.Render"/> <em>all</em> actions in the behind blocks
        /// so that there are a lot of calls to <see cref="IAction.Render"/> method in a short
        /// period of time.  This can lead a game startup slow.  If you want to omit rendering of
        /// these actions in the behind blocks use <see cref=
        /// "PreloadAsync(IProgress{BlockDownloadState}, IImmutableSet{Address}, CancellationToken)"
        /// /> method too.</remarks>
        public async Task StartAsync(
            TimeSpan distributeInterval,
            TimeSpan broadcastTxInterval,
            CancellationToken cancellationToken = default(CancellationToken))
        {
            if (Running)
            {
                throw new SwarmException("Swarm is already running.");
            }

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

            var behindNAT = false;

            if (!(_turnClient is null))
            {
                _publicIPAddress = (await _turnClient.GetMappedAddressAsync())
                    .Address;

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
                EndPoint = new DnsEndPoint(
                    turnEp.Address.ToString(), turnEp.Port);
            }
            else
            {
                EndPoint = new DnsEndPoint(_host, _listenPort.Value);
            }

            try
            {
                _workerCancellationTokenSource = new CancellationTokenSource();
                CancellationToken workerCancellationToken =
                    CancellationTokenSource.CreateLinkedTokenSource(
                        _workerCancellationTokenSource.Token, cancellationToken
                    ).Token;
                _cancellationToken = workerCancellationToken;

                using (await _runningMutex.LockAsync())
                {
                    Running = true;
                    await PreloadAsync(render: true, cancellationToken: _cancellationToken);
                }

                var tasks = new List<Task>
                {
                    RepeatDeltaDistributionAsync(distributeInterval, _cancellationToken),
                    BroadcastTxAsync(broadcastTxInterval, _cancellationToken),
                    Task.Run(() => _poller.Run(), _cancellationToken),
                };

                if (behindNAT)
                {
                    tasks.Add(BindingProxies(_cancellationToken));
                    tasks.Add(RefreshAllocate(_cancellationToken));
                    tasks.Add(RefreshPermissions(_cancellationToken));
                }

                await await Task.WhenAny(tasks);
            }
            catch (TaskCanceledException e)
            {
                _logger.Information(e, "Task was canceled.");
            }
            catch (Exception e)
            {
                _logger.Error(
                    e,
                    "An unexpected exception occured during StartAsync()");
                throw;
            }
        }

        public void BroadcastBlocks(IEnumerable<Block<T>> blocks)
        {
            _logger.Debug("Trying to broadcast blocks...");
            var message = new BlockHashes(
                Address,
                blocks.Select(b => b.Hash)
            );
            _broadcastQueue.Enqueue(message);
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
            IProgress<BlockDownloadState> progress = null,
            IImmutableSet<Address> trustedStateValidators = null,
            CancellationToken cancellationToken = default(CancellationToken)
        )
        {
            return PreloadAsync(
                render: false,
                progress: progress,
                trustedStateValidators: trustedStateValidators,
                cancellationToken: cancellationToken
            );
        }

        internal async Task PreloadAsync(
            bool render,
            IProgress<BlockDownloadState> progress = null,
            IImmutableSet<Address> trustedStateValidators = null,
            CancellationToken cancellationToken = default(CancellationToken)
        )
        {
            if (trustedStateValidators is null)
            {
                trustedStateValidators = ImmutableHashSet<Address>.Empty;
            }

            IList<(Peer, long? TipIndex)> peersWithHeight =
                await DialToExistingPeers(cancellationToken).Select(pp =>
                    (pp.Item1, pp.Item2.TipIndex)
                ).ToListAsync(cancellationToken);
            await SyncBehindsBlocksFromPeersAsync(
                peersWithHeight,
                progress,
                cancellationToken,
                render
            );

            if (_blockChain.Tip is null)
            {
                // If there is no blocks in the network (or no consensus at least)
                // it doesn't need to receive states from other peers at all.
                return;
            }

            var height = _blockChain.Tip.Index;

            IEnumerable<(Peer, HashDigest<SHA256> Hash)> trustedPeersWithTip =
                peersWithHeight.Where(pair =>
                    trustedStateValidators.Contains(pair.Item1.Address) &&
                    !(pair.Item2 is null) &&
                    pair.Item2 <= height
                ).OrderByDescending(pair =>
                    pair.Item2
                ).Select(pair =>
                    (pair.Item1, _blockChain[pair.Item2.Value].Hash)
                );

            // FIXME: This method should take an IProcess<T>.
            bool received = await SyncRecentStatesFromTrustedPeersAsync(
                trustedPeersWithTip.ToImmutableList(),
                cancellationToken
            );

            if (!received)
            {
                foreach (Block<T> block in _blockChain)
                {
                    _blockChain.ExecuteActions(block, render: false);
                }
            }
        }

        internal async Task<IEnumerable<HashDigest<SHA256>>>
            GetBlockHashesAsync(
                Peer peer,
                BlockLocator locator,
                HashDigest<SHA256>? stop,
                CancellationToken token = default(CancellationToken)
            )
        {
            if (!_peers.ContainsKey(peer))
            {
                throw new PeerNotFoundException(
                    $"The peer[{peer.Address}] could not be found.");
            }

            var request = new GetBlockHashes(locator, stop);

            using (var socket = new DealerSocket(ToNetMQAddress(peer)))
            {
                await socket.SendMultipartMessageAsync(
                    request.ToNetMQMessage(_privateKey),
                    cancellationToken: token);

                NetMQMessage response =
                    await socket.ReceiveMultipartMessageAsync(
                        cancellationToken: token);
                Message parsedMessage = Message.Parse(response, reply: true);
                if (parsedMessage is BlockHashes blockHashes)
                {
                    return blockHashes.Hashes;
                }

                throw new InvalidMessageException(
                    $"The response of GetBlockHashes isn't BlockHashes. " +
                    $"but {parsedMessage}");
            }
        }

        internal IAsyncEnumerable<Block<T>> GetBlocksAsync(
            Peer peer,
            IEnumerable<HashDigest<SHA256>> blockHashes)
        {
            if (!_peers.ContainsKey(peer))
            {
                throw new PeerNotFoundException(
                    $"The peer[{peer.Address}] could not be found.");
            }

            return new AsyncEnumerable<Block<T>>(async yield =>
            {
                CancellationToken yieldToken = yield.CancellationToken;
                using (var socket = new DealerSocket(ToNetMQAddress(peer)))
                {
                    var blockHashesAsArray =
                        blockHashes as HashDigest<SHA256>[] ??
                        blockHashes.ToArray();
                    var request = new GetBlocks(blockHashesAsArray);
                    await socket.SendMultipartMessageAsync(
                        request.ToNetMQMessage(_privateKey),
                        cancellationToken: yieldToken);

                    int hashCount = blockHashesAsArray.Count();
                    _logger.Debug(
                        $"Required block count: {hashCount}. {yieldToken}");
                    while (hashCount > 0 && !yieldToken.IsCancellationRequested)
                    {
                        _logger.Debug("Starts to receive blocks from {0}.", peer);
                        NetMQMessage response =
                        await socket.ReceiveMultipartMessageAsync(
                            cancellationToken: yieldToken);
                        Message parsedMessage = Message.Parse(response, true);
                        if (parsedMessage is Messages.Blocks blockMessage)
                        {
                            IList<byte[]> payloads = blockMessage.Payloads;
                            _logger.Debug("Received {0} blocks from {0}.", payloads.Count, peer);
                            foreach (byte[] payload in payloads)
                            {
                                Block<T> block = Block<T>.FromBencodex(payload);
                                await yield.ReturnAsync(block);
                                hashCount--;
                            }
                        }
                        else
                        {
                            throw new InvalidMessageException(
                                $"The response of GetData isn't a Block. " +
                                $"but {parsedMessage}");
                        }
                    }
                }
            });
        }

        internal IAsyncEnumerable<Transaction<T>> GetTxsAsync(
            Peer peer,
            IEnumerable<TxId> txIds,
            CancellationToken cancellationToken = default(CancellationToken))
        {
            if (!_peers.ContainsKey(peer))
            {
                throw new PeerNotFoundException(
                    $"The peer[{peer.Address}] could not be found.");
            }

            return new AsyncEnumerable<Transaction<T>>(async yield =>
            {
                using (var socket = new DealerSocket(ToNetMQAddress(peer)))
                {
                    var txIdsAsArray = txIds as TxId[] ?? txIds.ToArray();
                    var request = new GetTxs(txIdsAsArray);
                    await socket.SendMultipartMessageAsync(
                        request.ToNetMQMessage(_privateKey),
                        cancellationToken: cancellationToken);

                    int hashCount = txIdsAsArray.Count();
                    _logger.Debug($"Required tx count: {hashCount}.");
                    while (hashCount > 0)
                    {
                        _logger.Debug("Receiving tx...");
                        NetMQMessage response =
                        await socket.ReceiveMultipartMessageAsync(
                            cancellationToken: cancellationToken);
                        Message parsedMessage = Message.Parse(response, true);
                        if (parsedMessage is Messages.Tx parsed)
                        {
                            Transaction<T> tx = Transaction<T>.FromBencodex(
                                parsed.Payload);
                            await yield.ReturnAsync(tx);
                            hashCount--;
                        }
                        else
                        {
                            throw new InvalidMessageException(
                                $"The response of getdata isn't block. " +
                                $"but {parsedMessage}");
                        }
                    }
                }
            });
        }

        private static IEnumerable<Peer> FilterPeers(
            IDictionary<Peer, DateTimeOffset> peers,
            DateTimeOffset before,
            DateTimeOffset? after = null,
            bool remove = false)
        {
            foreach (KeyValuePair<Peer, DateTimeOffset> kv in peers.ToList())
            {
                if (after != null && kv.Value <= after)
                {
                    continue;
                }

                if (kv.Value <= before)
                {
                    if (remove)
                    {
                        peers.Remove(kv.Key);
                    }

                    yield return kv.Key;
                }
            }
        }

        private async Task BindingProxies(CancellationToken cancellationToken)
        {
            while (!cancellationToken.IsCancellationRequested)
            {
                try
                {
                    NetworkStream stream =
                        await _turnClient.AcceptRelayedStreamAsync();

                    // TODO We should expose the interface so that library users
                    // can limit / manage the task.
#pragma warning disable CS4014
                    Task.Run(async () =>
                    {
                        using (var proxy = new NetworkStreamProxy(stream))
                        {
                            Debug.Assert(
                                _listenPort != null,
                                nameof(_listenPort) + " != null");
                            await proxy.StartAsync(
                                IPAddress.Loopback,
                                _listenPort.Value);
                        }
                    });
#pragma warning restore CS4014
                }
                catch (Exception e)
                {
                    _logger.Error(
                        e,
                        "An unexpected exception occured. try again..."
                    );
                }
            }
        }

        private IAsyncEnumerable<(Peer, Pong)> DialToExistingPeers(
            CancellationToken cancellationToken)
        {
            return new AsyncEnumerable<(Peer, Pong)>(async yield =>
            {
                foreach (Peer peer in _peers.Keys)
                {
                    try
                    {
                        await yield.ReturnAsync(
                            (peer, await DialPeerAsync(peer, cancellationToken))
                        );
                    }
                    catch (TimeoutException e)
                    {
                        _logger.Error(
                            e,
                            $"TimeoutException occured ({peer})."
                        );
                    }
                    catch (IOException e)
                    {
                        _logger.Error(
                            e,
                            $"IOException occured ({peer})."
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

        private async Task SyncBehindsBlocksFromPeersAsync(
            IEnumerable<(Peer, long?)> peersWithHeight,
            IProgress<BlockDownloadState> progress,
            CancellationToken cancellationToken,
            bool render
        )
        {
            // Implement it directly with AggregateAsync()
            // because there is no IAsyncEnumerable<T>.MaxAsync().
            (Peer, long?)? longestPeerWithLength = peersWithHeight.Aggregate(
                default((Peer, long?)?),
                (p, c) => p?.Item2 > c.Item2 ? p : c
            );

            if (longestPeerWithLength != null &&
                !(_blockChain.Tip?.Index >= longestPeerWithLength?.Item2))
            {
                BlockChain<T> synced = await SyncPreviousBlocksAsync(
                    longestPeerWithLength?.Item1,
                    null,
                    progress,
                    evaluateActions: render,
                    cancellationToken: cancellationToken
                );
                if (!synced.Id.Equals(_blockChain.Id))
                {
                    _blockChain.Swap(synced, render);
                }
            }
        }

        private async Task<bool> SyncRecentStatesFromTrustedPeersAsync(
            IReadOnlyList<(Peer, HashDigest<SHA256>)> trustedPeersWithTip,
            CancellationToken cancellationToken)
        {
            _logger.Debug(
                "Starts to find a peer to request recent states (candidates: {0} trusted peers).",
                trustedPeersWithTip.Count
            );
            foreach ((Peer peer, var blockHash) in trustedPeersWithTip)
            {
                var request = new GetRecentStates(blockHash);
                _logger.Debug("Makes a dealer socket to a trusted peer ({0}).", peer);
                using (var socket = new DealerSocket(ToNetMQAddress(peer)))
                {
                    _logger.Debug("Requests recent states to a peer ({0}).", peer);
                    await socket.SendMultipartMessageAsync(
                        request.ToNetMQMessage(_privateKey),
                        cancellationToken: cancellationToken
                    );
                    _logger.Debug("Requested recent states to a peer ({0}).", peer);
                    NetMQMessage reply;
                    try
                    {
                        reply = await socket.ReceiveMultipartMessageAsync(
                            timeout: TimeSpan.FromSeconds(30),
                            cancellationToken: cancellationToken
                        );
                        _logger.Debug("Received recent states from a peer ({0}).", peer);
                    }
                    catch (TimeoutException e)
                    {
                        _logger.Error(
                            "Failed to receive recent states from a peer ({0}): {1}",
                            peer,
                            e
                        );
                        continue;
                    }

                    Message parsedMessage = Message.Parse(reply, reply: true);
                    if (parsedMessage is RecentStates recentStates && !recentStates.Missing)
                    {
                        ReaderWriterLockSlim rwlock = BlockChain._rwlock;
                        rwlock.EnterWriteLock();
                        try
                        {
                            // FIXME: Swarm should not directly access to the IStore instance,
                            // but BlockChain<T> should have an indirect interface to its underlying
                            // store.
                            IStore store = BlockChain.Store;
                            string ns = BlockChain.Id.ToString();

                            _logger.Debug("Starts to store state refs received from {0}.", peer);
                            foreach (var pair in recentStates.StateReferences)
                            {
                                IImmutableSet<Address> address = ImmutableHashSet.Create(pair.Key);
                                foreach (HashDigest<SHA256> bHash in pair.Value)
                                {
                                    Block<T> block = store.GetBlock<T>(bHash);
                                    store.StoreStateReference(ns, address, block);
                                }
                            }

                            _logger.Debug("Starts to store block states received from {0}.", peer);
                            foreach (var pair in recentStates.BlockStates)
                            {
                                store.SetBlockStates(pair.Key, new AddressStateMap(pair.Value));
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
                        "A message received from {0} is not a RecentStates but {1}.",
                        peer,
                        parsedMessage
                    );
                }
            }

            _logger.Warning("Failed to receive states from trusted peers.");
            return false;
        }

        private async Task RefreshAllocate(CancellationToken cancellationToken)
        {
            TimeSpan lifetime = TurnAllocationLifetime;
            while (!cancellationToken.IsCancellationRequested)
            {
                await Task.Delay(lifetime - TimeSpan.FromMinutes(1));
                lifetime = await _turnClient.RefreshAllocationAsync(lifetime);
            }
        }

        private async Task RefreshPermissions(
            CancellationToken cancellationToken)
        {
            TimeSpan lifetime = TurnPermissionLifetime;
            while (!cancellationToken.IsCancellationRequested)
            {
                await Task.Delay(lifetime - TimeSpan.FromMinutes(1));
                await Task.WhenAll(
                    _peers.Keys.Select(CreatePermission));
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
                            List<TxId> txIds = _blockChain
                                .GetStagedTransactionIds(true)
                                .ToList();

                            if (txIds.Any())
                            {
                                BroadcastTxIds(txIds);
                            }
                        }, cancellationToken);
                }
                catch (Exception e)
                {
                    _logger.Error(e, "An unexpected exception occured during BroadcastTxAsync()");
                    throw;
                }
            }
        }

        private void BroadcastTxIds(IEnumerable<TxId> txIds)
        {
            var message = new TxIds(Address, txIds);
            _broadcastQueue.Enqueue(message);
        }

        private async Task ProcessMessageAsync(
            Message message,
            CancellationToken cancellationToken)
        {
            switch (message)
            {
                case Ping ping:
                    {
                        _logger.Debug($"Ping received.");
                        var reply = new Pong(
                            _appProtocolVersion,
                            _blockChain.Tip?.Index)
                        {
                            Identity = ping.Identity,
                        };
                        _replyQueue.Enqueue(reply);
                        _logger.Debug($"Pong was queued.");
                        break;
                    }

                case Messages.PeerSetDelta peerSetDelta:
                    {
                        await ProcessDeltaAsync(
                            peerSetDelta.Delta, cancellationToken);
                        break;
                    }

                case GetBlockHashes getBlockHashes:
                    {
                        IEnumerable<HashDigest<SHA256>> hashes =
                            _blockChain.FindNextHashes(
                                getBlockHashes.Locator,
                                getBlockHashes.Stop);
                        var reply = new BlockHashes(Address, hashes)
                        {
                            Identity = getBlockHashes.Identity,
                        };
                        _replyQueue.Enqueue(reply);
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
            if (!(message.Sender is Address from))
            {
                throw new NullReferenceException(
                    "BlockHashes doesn't have sender address.");
            }

            Peer peer = _peers.Keys.FirstOrDefault(p => p.Address.Equals(from));
            if (peer == null)
            {
                _logger.Information(
                    "BlockHashes was sent from unknown peer. ignored.");
                return;
            }

            _logger.Debug(
                $"Trying to GetBlocksAsync() " +
                $"(using {message.Hashes.Count()} hashes)");
            IAsyncEnumerable<Block<T>> fetched = GetBlocksAsync(
                peer,
                message.Hashes
            );

            List<Block<T>> blocks = await fetched.ToListAsync(
                cancellationToken
            );
            _logger.Debug("GetBlocksAsync() complete.");

            try
            {
                using (await _blockSyncMutex.LockAsync(cancellationToken))
                {
                    await AppendBlocksAsync(peer, blocks, cancellationToken);
                    _logger.Debug("Append complete.");
                }
            }
            catch (Exception e)
            {
                _logger.Error(e, $"Append Failed. exception: {e}");
                throw;
            }
        }

        private async Task<BlockChain<T>> SyncPreviousBlocksAsync(
            Peer peer,
            HashDigest<SHA256>? stop,
            IProgress<BlockDownloadState> progress,
            bool evaluateActions,
            CancellationToken cancellationToken
        )
        {
            // Fix the tip here because it may change while receiving the block
            // hashes.
            Block<T> tip = _blockChain.Tip;

            _logger.Debug("Trying to find branchpoint...");
            BlockLocator locator = _blockChain.GetBlockLocator();
            _logger.Debug($"Locator's count: {locator.Count()}");
            IEnumerable<HashDigest<SHA256>> hashes = (
                await GetBlockHashesAsync(
                    peer, locator, stop, cancellationToken)
            ).ToArray();

            if (!hashes.Any())
            {
                _logger.Debug(
                    $"Peer[{peer}] didn't return any hashes. " +
                    $"ignored.");
                return _blockChain;
            }

            HashDigest<SHA256> branchPoint = hashes.First();

            _logger.Debug(
                $"Branchpoint is " +
                $"{ByteUtil.Hex(branchPoint.ToByteArray())}"
            );

            BlockChain<T> synced;
            if (tip is null || branchPoint.Equals(tip.Hash))
            {
                _logger.Debug("it doesn't need fork.");
                synced = _blockChain;
            }

            // FIXME BlockChain.Blocks.ContainsKey() can be very
            // expensive.
            // we can omit this clause if assume every chain shares
            // same genesis block...
            else if (!_blockChain.Blocks.ContainsKey(branchPoint))
            {
                // Create a whole new chain because the branch point doesn't exist on
                // the current chain.
                synced = new BlockChain<T>(_blockChain.Policy, _blockChain.Store, Guid.NewGuid());
            }
            else
            {
                _logger.Debug("Forking needed. trying to fork...");
                synced = _blockChain.Fork(branchPoint);
                _logger.Debug("Forking complete. ");
            }

            _logger.Debug("Trying to fill up previous blocks...");

            int retry = 3;
            while (true)
            {
                try
                {
                    await FillBlocksAsync(
                        peer,
                        synced,
                        stop,
                        progress,
                        evaluateActions,
                        cancellationToken
                    );
                    break;
                }

                // We can't recover with TaskCanceledException and
                // ObjectDisposedException. so just re-throw them.
                catch (ObjectDisposedException)
                {
                    throw;
                }
                catch (TaskCanceledException)
                {
                    throw;
                }
                catch (Exception e)
                {
                    if (retry > 0)
                    {
                        _logger.Error(
                            e,
                            "FillBlockAsync() failed. retrying..."
                        );
                        retry--;
                    }
                    else
                    {
                        throw;
                    }
                }
            }

            return synced;
        }

        private async Task AppendBlocksAsync(
            Peer peer,
            List<Block<T>> blocks,
            CancellationToken cancellationToken
        )
        {
            // We assume that the blocks are sorted in order.
            Block<T> oldest = blocks.First();
            Block<T> latest = blocks.Last();
            Block<T> tip = _blockChain.Tip;

            if (tip is null || latest.Index > tip.Index)
            {
                _logger.Debug("Trying to fill up previous blocks...");
                BlockChain<T> previousBlocks = await SyncPreviousBlocksAsync(
                    peer,
                    oldest.PreviousHash,
                    null,
                    evaluateActions: true,
                    cancellationToken: cancellationToken
                );
                _logger.Debug("Filled up. trying to concatenation...");

                foreach (Block<T> block in blocks)
                {
                    previousBlocks.Append(block);
                }

                _logger.Debug("Sync is done.");
                if (!previousBlocks.Id.Equals(_blockChain.Id))
                {
                    _logger.Debug("trying to swapping chain...");
                    _blockChain.Swap(previousBlocks, render: true);
                    _logger.Debug("Swapping complete");
                }
            }
            else
            {
                _logger.Information(
                    "Received index is older than current chain's tip." +
                    " ignored.");
            }

            BlockReceived.Set();
        }

        private async Task FillBlocksAsync(
            Peer peer,
            BlockChain<T> blockChain,
            HashDigest<SHA256>? stop,
            IProgress<BlockDownloadState> progress,
            bool evaluateActions,
            CancellationToken cancellationToken
        )
        {
            while (!cancellationToken.IsCancellationRequested)
            {
                BlockLocator locator = blockChain.GetBlockLocator();
                IEnumerable<HashDigest<SHA256>> hashes =
                    await GetBlockHashesAsync(
                        peer, locator, stop, cancellationToken);
                if (blockChain.Tip != null)
                {
                    hashes = hashes.Skip(1);
                }

                var hashesAsArray =
                    hashes as HashDigest<SHA256>[] ?? hashes.ToArray();
                if (!hashesAsArray.Any())
                {
                    break;
                }

                int hashCount = hashesAsArray.Count();
                int received = 0;
                _logger.Debug(
                    $"Required hashes (count: {hashCount}). " +
                    $"(tip: {blockChain.Tip?.Hash})"
                );

                await GetBlocksAsync(peer, hashesAsArray)
                    .ForEachAsync(
                    block =>
                    {
                        _logger.Debug(
                            $"Trying to append block[{block.Hash}]...");

                        // As actions in this block should be rendered
                        // after actions in stale blocks are unrendered,
                        // given the `render: false` option here.
                        blockChain.Append(
                            block,
                            DateTimeOffset.UtcNow,
                            evaluateActions: evaluateActions,
                            renderActions: false
                        );

                        received++;
                        progress?.Report(new BlockDownloadState
                        {
                            TotalBlockCount = hashCount,
                            ReceivedBlockCount = received,
                            ReceivedBlockHash = block.Hash,
                        });
                        _logger.Debug($"Block[{block.Hash}] is appended.");
                    },
                    cancellationToken);
            }
        }

        private void TransferTxs(GetTxs getTxs)
        {
            IDictionary<TxId, Transaction<T>> txs = _blockChain.Transactions;
            foreach (var txid in getTxs.TxIds)
            {
                if (txs.TryGetValue(txid, out Transaction<T> tx))
                {
                    Message response = new Messages.Tx(tx.ToBencodex(true))
                    {
                        Identity = getTxs.Identity,
                    };
                    _replyQueue.Enqueue(response);
                }
            }
        }

        private async Task ProcessTxIds(
            TxIds message,
            CancellationToken cancellationToken = default(CancellationToken))
        {
            _logger.Debug("Trying to fetch txs...");

            ImmutableHashSet<TxId> newTxIds = message.Ids
                .Where(id => !_blockChain.Transactions.ContainsKey(id))
                .ToImmutableHashSet();

            if (!newTxIds.Any())
            {
                _logger.Debug("No txs to require.");
                return;
            }

            if (!(message.Sender is Address from))
            {
                throw new NullReferenceException(
                    "TxIds doesn't have sender address.");
            }

            Peer peer = _peers.Keys.FirstOrDefault(p => p.Address.Equals(from));
            if (peer == null)
            {
                _logger.Information(
                    "TxIds was sent from unknown peer. ignored.");
                return;
            }

            IAsyncEnumerable<Transaction<T>> fetched = GetTxsAsync(
                peer, newTxIds, cancellationToken);
            List<Transaction<T>> txs = await fetched.ToListAsync(cancellationToken);
            var toStage = txs.ToDictionary(tx => tx, _ => true);

            _blockChain.StageTransactions(toStage);
            TxReceived.Set();
            _logger.Debug("Txs staged successfully.");
        }

        private void TransferBlocks(GetBlocks getData)
        {
            _logger.Debug("Trying to transfer blocks...");

            var blocks = new List<byte[]>();

            foreach (HashDigest<SHA256> hash in getData.BlockHashes)
            {
                if (_blockChain.Blocks.TryGetValue(hash, out Block<T> block))
                {
                    byte[] payload = block.ToBencodex(true, true);
                    blocks.Add(payload);
                }

                if (blocks.Count == getData.ChunkSize)
                {
                    var response = new Messages.Blocks(blocks)
                    {
                        Identity = getData.Identity,
                    };
                    _replyQueue.Enqueue(response);
                    blocks.Clear();
                }
            }

            if (blocks.Any())
            {
                var response = new Messages.Blocks(blocks)
                {
                    Identity = getData.Identity,
                };
                _replyQueue.Enqueue(response);
            }

            _logger.Debug("Transfer complete.");
        }

        private void TransferRecentStates(GetRecentStates getRecentStates)
        {
            HashDigest<SHA256> blockHash = getRecentStates.BlockHash;
            IImmutableDictionary<HashDigest<SHA256>,
                IImmutableDictionary<Address, object>
            > blockStates = null;
            IImmutableDictionary<Address, IImmutableList<HashDigest<SHA256>>>
                stateRefs = null;

            if (_blockChain.Blocks.ContainsKey(blockHash))
            {
                ReaderWriterLockSlim rwlock = _blockChain._rwlock;
                rwlock.EnterReadLock();
                try
                {
                    // FIXME: Swarm should not directly access to the IStore instance,
                    // but BlockChain<T> should have an indirect interface to its underlying
                    // store.
                    IStore store = _blockChain.Store;
                    string ns = _blockChain.Id.ToString();

                    stateRefs = store.ListAllStateReferences(ns);

                    blockStates = stateRefs.Values
                        .Select(refs => refs.Last())
                        .ToImmutableHashSet()
                        .Select(bh =>
                            new KeyValuePair<
                                HashDigest<SHA256>,
                                IImmutableDictionary<Address, object>
                            >(bh, store.GetBlockStates(bh))
                        )
                        .ToImmutableDictionary();
                }
                finally
                {
                    rwlock.ExitReadLock();
                }
            }

            var reply = new RecentStates(blockHash, blockStates, stateRefs)
            {
                Identity = getRecentStates.Identity,
            };
            _replyQueue.Enqueue(reply);
        }

        private async Task ProcessDeltaAsync(
            PeerSetDelta delta,
            CancellationToken cancellationToken
        )
        {
            Peer sender = delta.Sender;

            if (IsUnknownPeer(sender))
            {
                _logger.Debug("The sender of delta is unknown.");
                if (IsDifferentProtocolVersion(sender) &&
                    sender.AppProtocolVersion is int senderVersion)
                {
                    var args = new DifferentProtocolVersionEventArgs
                        {
                            ExpectedVersion = _appProtocolVersion,
                            ActualVersion = senderVersion,
                        };
                    DifferentVersionPeerEncountered?.Invoke(this, args);
                    return;
                }

                if (!delta.RemovedPeers.Contains(delta.Sender))
                {
                    delta = new PeerSetDelta(
                        delta.Sender,
                        delta.Timestamp,
                        delta.AddedPeers.Add(sender),
                        delta.RemovedPeers,
                        delta.ExistingPeers
                    );
                }
            }

            if (IsDifferentProtocolVersion(sender))
            {
                delta = new PeerSetDelta(
                    delta.Sender,
                    delta.Timestamp,
                    new Peer[] { }.ToImmutableHashSet(),
                    delta.RemovedPeers,
                    new Peer[] { }.ToImmutableHashSet());
            }

            _logger.Debug($"Received the delta[{delta}].");

            await ApplyDelta(delta, cancellationToken);

            bool alreadyReceived =
                LastSeenTimestamps.TryGetValue(
                    delta.Sender,
                    out DateTimeOffset existingTimestamp) &&
                existingTimestamp > delta.Timestamp;

            if (!alreadyReceived)
            {
                LastReceived = delta.Timestamp;
                LastSeenTimestamps[delta.Sender] = delta.Timestamp;
            }

            DeltaReceived.Set();

            _logger.Debug($"The delta[{delta}] has been applied.");
        }

        private bool IsUnknownPeer(Peer sender)
        {
            Peer existing = _peers.Keys
                .FirstOrDefault(p => sender.PublicKey.Equals(p.PublicKey));

            if (existing is null)
            {
                return true;
            }

            if (!existing.EndPoint.Equals(sender.EndPoint))
            {
                // Clear outdated existing peer.
                _peers.Remove(existing);
                CloseDealer(existing);

                return true;
            }

            return false;
        }

        private bool IsDifferentProtocolVersion(Peer sender)
        {
            return sender.AppProtocolVersion != _appProtocolVersion;
        }

        private async Task ApplyDelta(
            PeerSetDelta delta,
            CancellationToken cancellationToken
        )
        {
            bool firstEncounter = IsUnknownPeer(delta.Sender);
            RemovePeers(delta.RemovedPeers, delta.Timestamp);
            var addedPeers = new HashSet<Peer>(delta.AddedPeers);

            if (delta.ExistingPeers != null)
            {
                ImmutableHashSet<PublicKey> removedPublicKeys = _removedPeers
                    .Keys.Select(p => p.PublicKey)
                    .ToImmutableHashSet();
                addedPeers.UnionWith(
                    delta.ExistingPeers.Where(
                        p => !removedPublicKeys.Contains(p.PublicKey)
                    )
                );
            }

            _logger.Debug("Trying to add peers...");
            ISet<Peer> added = await AddPeersAsync(
                addedPeers, delta.Timestamp, cancellationToken);
            if (_logger.IsEnabled(LogEventLevel.Debug))
            {
                DumpDiffs(
                    delta,
                    added,
                    addedPeers.Except(added),
                    delta.RemovedPeers
                );
            }

            if (firstEncounter)
            {
                DistributeDelta(true);
            }
        }

        private void DumpDiffs(
            PeerSetDelta delta,
            IEnumerable<Peer> added,
            IEnumerable<Peer> existing,
            IEnumerable<Peer> removed)
        {
            DateTimeOffset timestamp = delta.Timestamp;

            foreach (Peer peer in added)
            {
                _logger.Debug($"{timestamp} {delta.Sender} > +{peer}");
            }

            foreach (Peer peer in existing)
            {
                _logger.Debug($"{timestamp} {delta.Sender} > {peer}");
            }

            foreach (Peer peer in removed)
            {
                _logger.Debug($"{timestamp} {delta.Sender} > -{peer}");
            }
        }

        private void RemovePeers(
            IEnumerable<Peer> peers, DateTimeOffset timestamp)
        {
            PublicKey publicKey = _privateKey.PublicKey;
            var peersAsArray = peers as Peer[] ?? peers.ToArray();
            foreach (Peer peer in peersAsArray)
            {
                if (peer.PublicKey != publicKey)
                {
                    continue;
                }

                _removedPeers[peer] = timestamp;
            }

            Dictionary<PublicKey, Peer[]> existingPeers =
                _peers.Keys.ToDictionary(
                    p => p.PublicKey,
                    p => new[] { p }
                );

            foreach (Peer peer in peersAsArray)
            {
                _peers.Remove(peer);

                _logger.Debug(
                    $"Trying to close dealers associated {peer}."
                );
                if (Running)
                {
                    CloseDealer(peer);
                }

                var pubKey = peer.PublicKey;

                if (existingPeers.TryGetValue(pubKey, out Peer[] remains))
                {
                    foreach (Peer key in remains)
                    {
                        _peers.Remove(key);

                        if (Running)
                        {
                            CloseDealer(key);
                        }
                    }
                }

                _logger.Debug($"Dealers associated {peer} were closed.");
            }
        }

        private void CloseDealer(Peer peer)
        {
            CheckStarted();
            if (_dealers.TryGetValue(peer.Address, out DealerSocket dealer))
            {
                dealer.Dispose();
                _dealers.Remove(peer.Address);
            }
        }

        private async Task<Pong> DialAsync(
            string address,
            DealerSocket dealer,
            CancellationToken cancellationToken
        )
        {
            dealer.Connect(address);

            _logger.Debug($"Trying to Ping to [{address}]...");
            var ping = new Ping();
            await dealer.SendMultipartMessageAsync(
                ping.ToNetMQMessage(_privateKey),
                cancellationToken: cancellationToken);

            _logger.Debug($"Waiting for Pong from [{address}]...");
            NetMQMessage message = await dealer.ReceiveMultipartMessageAsync(
                timeout: _dialTimeout,
                cancellationToken: cancellationToken);

            Message parsedMessage = Message.Parse(message, true);
            if (parsedMessage is Pong pong)
            {
                _logger.Debug($"Pong received.");
                return pong;
            }

            throw new InvalidMessageException(
                $"The response of Ping isn't Pong. " +
                $"but {parsedMessage}");
        }

        private async Task<Pong> DialPeerAsync(
            Peer peer, CancellationToken cancellationToken)
        {
            if (_turnClient != null)
            {
                await CreatePermission(peer);
            }

            // We create a new DealerSocket for each DialPeerAsync()
            // because NetMQ doesn't handle properly previosuly connected sockets.
            if (_dealers.TryGetValue(peer.Address, out DealerSocket dealer))
            {
                dealer.Dispose();
            }

            dealer = new DealerSocket();
            dealer.Options.Identity = Address.ToByteArray();

            try
            {
                _logger.Debug($"Trying to DialAsync({peer.EndPoint})...");
                Pong pong = await DialAsync(
                    ToNetMQAddress(peer),
                    dealer,
                    cancellationToken);
                _logger.Debug($"DialAsync({peer.EndPoint}) is complete.");

                if (pong.AppProtocolVersion != _appProtocolVersion)
                {
                    dealer.Dispose();

                    DifferentProtocolVersionEventArgs args =
                        new DifferentProtocolVersionEventArgs
                        {
                            ExpectedVersion = _appProtocolVersion,
                            ActualVersion = pong.AppProtocolVersion,
                        };

                    DifferentVersionPeerEncountered?.Invoke(this, args);

                    throw new DifferentAppProtocolVersionException(
                        $"Peer protocol version is different.",
                        _appProtocolVersion,
                        pong.AppProtocolVersion);
                }

                _dealers[peer.Address] = dealer;

                return pong;
            }
            catch (IOException)
            {
                dealer.Dispose();
                throw;
            }
            catch (TimeoutException)
            {
                dealer.Dispose();
                throw;
            }
        }

        private void DistributeDelta(bool all)
        {
            CheckStarted();

            DateTimeOffset now = DateTimeOffset.UtcNow;
            var addedPeers = FilterPeers(
                _peers,
                before: now,
                after: LastDistributed).ToImmutableHashSet();
            var removedPeers = FilterPeers(
                _removedPeers,
                before: now,
                remove: true).ToImmutableHashSet();
            var existingPeers = all
                    ? _peers.Keys.ToImmutableHashSet().Except(addedPeers)
                    : null;
            var delta = new PeerSetDelta(
                sender: AsPeer,
                timestamp: now,
                addedPeers: addedPeers,
                removedPeers: removedPeers,
                existingPeers: existingPeers
            );

            _logger.Debug(
                $"Trying to distribute own delta " +
                $"(+{delta.AddedPeers.Count}, -{delta.RemovedPeers.Count})..."
            );
            if (delta.AddedPeers.Any() || delta.RemovedPeers.Any() || all)
            {
                LastDistributed = now;

                var message = new Messages.PeerSetDelta(delta);
                _logger.Debug("Send the delta to dealers...");
                _broadcastQueue.Enqueue(message);

                _logger.Debug("The delta has been sent.");
                DeltaDistributed.Set();
            }
        }

        private async Task RepeatDeltaDistributionAsync(
            TimeSpan interval, CancellationToken cancellationToken)
        {
            int i = 1;
            while (!cancellationToken.IsCancellationRequested)
            {
                DistributeDelta(i % 10 == 0);
                await Task.Delay(interval, cancellationToken);
                i = (i + 1) % 10;
            }
        }

        private void ReceiveMessage(object sender, NetMQSocketEventArgs e)
        {
            try
            {
                NetMQMessage raw = e.Socket.ReceiveMultipartMessage();

                _logger.Verbose($"The raw message[{raw}] has received.");
                Message message = Message.Parse(raw, reply: false);
                _logger.Debug($"The message[{message}] has parsed.");

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
                            _logger.Error("Something went wrong during message parsing: {0}", exc);
                            throw;
                        }
                    },
                    _cancellationToken);
            }
            catch (InvalidMessageException ex)
            {
                _logger.Error(ex, "Could not parse NetMQMessage properly; ignore.");
            }
            catch (Exception ex)
            {
                _logger.Error(ex, "An unexpected exception occured during ReceiveMessage().");
                throw;
            }
        }

        private void DoBroadcast(object sender, NetMQQueueEventArgs<Message> e)
        {
            Message msg = e.Queue.Dequeue();
            NetMQMessage netMQMessage = msg.ToNetMQMessage(_privateKey);

            // FIXME Should replace with PUB/SUB model.
            try
            {
                Task.WhenAll(
                    _dealers.Values.Select(s =>
                        Task.Run(() => s.SendMultipartMessage(netMQMessage))
                    )
                ).Wait();
            }
            catch (TimeoutException ex)
            {
                _logger.Error(ex, "TimeoutException occured.");
            }
            catch (Exception ex)
            {
                _logger.Error(
                    ex,
                    "An unexpected exception occured during DoBroadcast()"
                );
            }

            _logger.Debug($"broadcasted: {msg}");
        }

        private void DoReply(object sender, NetMQQueueEventArgs<Message> e)
        {
            Message msg = e.Queue.Dequeue();
            _logger.Debug($"Reply {msg} to {ByteUtil.Hex(msg.Identity)}...");
            NetMQMessage netMQMessage = msg.ToNetMQMessage(_privateKey);
            _router.SendMultipartMessage(netMQMessage);
            _logger.Debug($"Replied.");
        }

        private void CheckStarted()
        {
            if (!Running)
            {
                throw new NoSwarmContextException("Swarm hasn't started yet.");
            }
        }

        private string ToNetMQAddress(Peer peer)
        {
            if (peer == null)
            {
                throw new ArgumentNullException(nameof(peer));
            }

            return $"tcp://{peer.EndPoint.Host}:{peer.EndPoint.Port}";
        }

        private async Task CreatePermission(Peer peer)
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
    }
}
