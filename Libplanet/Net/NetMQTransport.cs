using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Net;
using System.Net.Sockets;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Crypto;
using Libplanet.Net.Messages;
using Libplanet.Net.Protocols;
using Libplanet.Stun;
using NetMQ;
using NetMQ.Sockets;
using Nito.AsyncEx;
using Serilog;

namespace Libplanet.Net
{
    /// <summary>
    /// Implementation of <see cref="ITransport"/> interface using NetMQ.
    /// </summary>
    public class NetMQTransport : ITransport
    {
        private const int MessageHistoryCapacity = 30;

        // TURN Permission lifetime was defined in RFC 5766
        // see also https://tools.ietf.org/html/rfc5766#section-8
        private static readonly TimeSpan TurnPermissionLifetime =
            TimeSpan.FromMinutes(5);

        private readonly PrivateKey _privateKey;
        private readonly AppProtocolVersion _appProtocolVersion;
        private readonly IImmutableSet<PublicKey> _trustedAppProtocolVersionSigners;
        private readonly string _host;
        private readonly IList<IceServer> _iceServers;
        private readonly ILogger _logger;
        private readonly TimeSpan? _messageLifespan;

        private NetMQQueue<NetMQMessage> _replyQueue;
        private NetMQQueue<(Address?, Message)> _broadcastQueue;

        private RouterSocket _router;
        private NetMQPoller _routerPoller;
        private NetMQPoller _broadcastPoller;

        private int? _listenPort;
        private TurnClient _turnClient;
        private DnsEndPoint _hostEndPoint;

        private AsyncCollection<MessageRequest> _requests;
        private long _requestCount;
        private CancellationTokenSource _runtimeCancellationTokenSource;
        private CancellationTokenSource _turnCancellationTokenSource;
        private Task _runtimeProcessor;

        private TaskCompletionSource<object> _runningEvent;
        private CancellationToken _cancellationToken;
        private ConcurrentDictionary<Address, DealerSocket> _dealers;

        private RoutingTable _table;

        /// <summary>
        /// The <see cref="EventHandler" /> triggered when the different version of
        /// <see cref="Peer" /> is discovered.
        /// </summary>
        private DifferentAppProtocolVersionEncountered _differentAppProtocolVersionEncountered;

        /// <summary>
        /// Creates <see cref="NetMQTransport"/> instance.
        /// </summary>
        /// <param name="table">
        /// The <see cref="RoutingTable"/> that manages <see cref="Peer"/>s which are connected
        /// with this <see cref="Peer"/>.
        /// </param>
        /// <param name="privateKey"><see cref="PrivateKey"/> of the transport layer.</param>
        /// <param name="appProtocolVersion"><see cref="AppProtocolVersion"/>-typed
        /// version of the transport layer.</param>
        /// <param name="trustedAppProtocolVersionSigners"><see cref="PublicKey"/>s of parties
        /// to trust <see cref="AppProtocolVersion"/>s they signed.  To trust any party, pass
        /// <c>null</c>.</param>
        /// <param name="workers">The number of background workers (i.e., threads).</param>
        /// <param name="host">A hostname to be a part of a public endpoint, that peers use when
        /// they connect to this node.  Note that this is not a hostname to listen to;
        /// <see cref="NetMQTransport"/> always listens to 0.0.0.0 &amp; ::/0.</param>
        /// <param name="listenPort">A port number to listen to.</param>
        /// <param name="iceServers">
        /// <a href="https://en.wikipedia.org/wiki/Interactive_Connectivity_Establishment">ICE</a>
        /// servers to use for TURN/STUN.  Purposes to traverse NAT.</param>
        /// <param name="differentAppProtocolVersionEncountered">A delegate called back when a peer
        /// with one different from <paramref name="appProtocolVersion"/>, and their version is
        /// signed by a trusted party (i.e., <paramref name="trustedAppProtocolVersionSigners"/>).
        /// If this callback returns <c>false</c>, an encountered peer is ignored.  If this callback
        /// is omitted, all peers with different <see cref="AppProtocolVersion"/>s are ignored.
        /// </param>
        /// <param name="messageLifespan">
        /// The lifespan of a message.
        /// Messages generated before this value from the current time are ignored.
        /// If <c>null</c> is given, messages will not be ignored by its timestamp.</param>
        /// <exception cref="ArgumentException">Thrown when both <paramref name="host"/> and
        /// <paramref name="iceServers"/> are <c>null</c>.</exception>
        public NetMQTransport(
            RoutingTable table,
            PrivateKey privateKey,
            AppProtocolVersion appProtocolVersion,
            IImmutableSet<PublicKey> trustedAppProtocolVersionSigners,
            int workers,
            string host,
            int? listenPort,
            IEnumerable<IceServer> iceServers,
            DifferentAppProtocolVersionEncountered differentAppProtocolVersionEncountered,
            TimeSpan? messageLifespan = null)
        {
            Running = false;

            _privateKey = privateKey;
            _appProtocolVersion = appProtocolVersion;
            _trustedAppProtocolVersionSigners = trustedAppProtocolVersionSigners;
            _host = host;
            _listenPort = listenPort;
            _differentAppProtocolVersionEncountered = differentAppProtocolVersionEncountered;
            _table = table;
            _messageLifespan = messageLifespan;

            if (_host != null && _listenPort is int listenPortAsInt)
            {
                _hostEndPoint = new DnsEndPoint(_host, listenPortAsInt);
            }

            _iceServers = iceServers?.ToList();
            if (_host == null && (_iceServers == null || !_iceServers.Any()))
            {
                throw new ArgumentException(
                    $"Swarm requires either {nameof(host)} or " +
                    $"{nameof(iceServers)}."
                );
            }

            _logger = Log.ForContext<NetMQTransport>();

            _requests = new AsyncCollection<MessageRequest>();
            _runtimeCancellationTokenSource = new CancellationTokenSource();
            _turnCancellationTokenSource = new CancellationTokenSource();
            _requestCount = 0;
            _runtimeProcessor = Task.Factory.StartNew(
                () =>
                {
                    // Ignore NetMQ related exceptions during NetMQRuntime.Dispose() to stabilize
                    // tests
                    try
                    {
                        using var runtime = new NetMQRuntime();
                        var workerTasks = new Task[workers];

                        for (int i = 0; i < workers; i++)
                        {
                            workerTasks[i] = ProcessRuntime(
                                _runtimeCancellationTokenSource.Token
                            );
                        }

                        runtime.Run(workerTasks);
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

            MessageHistory = new FixedSizedQueue<Message>(MessageHistoryCapacity);
            _dealers = new ConcurrentDictionary<Address, DealerSocket>();
        }

        /// <inheritdoc />
        public event EventHandler<Message> ProcessMessageHandler;

        /// <inheritdoc cref="ITransport.AsPeer"/>
        public Peer AsPeer => EndPoint is null
            ? new Peer(_privateKey.PublicKey, PublicIPAddress)
            : new BoundPeer(_privateKey.PublicKey, EndPoint, PublicIPAddress);

        /// <inheritdoc cref="ITransport.LastMessageTimestamp"/>
        public DateTimeOffset? LastMessageTimestamp { get; private set; }

        /// <summary>
        /// Whether this <see cref="NetMQTransport"/> instance is running.
        /// </summary>
        /// <returns>Boolean value indicates whether the instance is running.</returns>
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

        internal FixedSizedQueue<Message> MessageHistory { get; }

        internal IPAddress PublicIPAddress => _turnClient?.PublicAddress;

        internal DnsEndPoint EndPoint => _turnClient?.EndPoint ?? _hostEndPoint;

        /// <inheritdoc />
        public async Task StartAsync(CancellationToken cancellationToken)
        {
            if (Running)
            {
                throw new SwarmException("Swarm is already running.");
            }

            _router = new RouterSocket();
            _router.Options.RouterHandover = true;

            if (_listenPort == null)
            {
                _listenPort = _router.BindRandomPort("tcp://*");
            }
            else
            {
                _router.Bind($"tcp://*:{_listenPort}");
            }

            _logger.Information($"Listen on {_listenPort}");

            if (_host is null && !(_iceServers is null))
            {
                _turnClient = await IceServer.CreateTurnClient(_iceServers);
                await _turnClient.StartAsync(_listenPort.Value, _cancellationToken);

                _ = RefreshPermissions(_cancellationToken);
            }

            _cancellationToken = cancellationToken;

            if (_turnClient is null || !_turnClient.BehindNAT)
            {
                _hostEndPoint = new DnsEndPoint(
                    _host ?? PublicIPAddress.ToString(),
                    _listenPort.Value);
            }

            _replyQueue = new NetMQQueue<NetMQMessage>();
            _broadcastQueue = new NetMQQueue<(Address?, Message)>();
            _routerPoller = new NetMQPoller { _router, _replyQueue };
            _broadcastPoller = new NetMQPoller { _broadcastQueue };

            _router.ReceiveReady += ReceiveMessage;
            _replyQueue.ReceiveReady += DoReply;
            _broadcastQueue.ReceiveReady += DoBroadcast;
        }

        /// <inheritdoc />
        public async Task RunAsync(CancellationToken cancellationToken)
        {
            if (Running)
            {
                throw new SwarmException("Swarm is already running.");
            }

            Running = true;

            List<Task> tasks = new List<Task>();

            tasks.Add(DisposeUnusedDealerSockets(
                TimeSpan.FromSeconds(10),
                _cancellationToken));
            tasks.Add(RunPoller(_routerPoller));
            tasks.Add(RunPoller(_broadcastPoller));

            await await Task.WhenAny(tasks);
        }

        /// <inheritdoc />
        public async Task StopAsync(
            TimeSpan waitFor,
            CancellationToken cancellationToken = default(CancellationToken)
        )
        {
            if (Running)
            {
                await Task.Delay(waitFor, cancellationToken);

                _broadcastQueue.ReceiveReady -= DoBroadcast;
                _replyQueue.ReceiveReady -= DoReply;
                _router.ReceiveReady -= ReceiveMessage;
                _router.Unbind($"tcp://*:{_listenPort}");

                if (_routerPoller.IsRunning)
                {
                    _routerPoller.Dispose();
                }

                if (_broadcastPoller.IsRunning)
                {
                    _broadcastPoller.Dispose();
                }

                _broadcastQueue.Dispose();
                _replyQueue.Dispose();
                _router.Dispose();
                _turnClient?.Dispose();

                foreach (DealerSocket dealer in _dealers.Values)
                {
                    dealer.Dispose();
                }

                _dealers.Clear();

                Running = false;
            }
        }

        /// <inheritdoc />
        public void Dispose()
        {
            _runtimeCancellationTokenSource.Cancel();
            _turnCancellationTokenSource.Cancel();
            _runtimeProcessor.Wait();
        }

        /// <summary>
        /// Waits until this <see cref="NetMQTransport"/> instance gets started to run.
        /// </summary>
        /// <seealso cref="Swarm{T}.WaitForRunningAsync()"/>
        /// <returns>A <see cref="Task"/> completed when <see cref="Running"/>
        /// property becomes <c>true</c>.</returns>
        public Task WaitForRunningAsync() => _runningEvent.Task;

        /// <inheritdoc />
        public Task SendMessageAsync(
            BoundPeer peer,
            Message message,
            CancellationToken cancellationToken)
            => SendMessageWithReplyAsync(
                peer,
                message,
                TimeSpan.FromSeconds(3),
                0,
                cancellationToken);

        /// <inheritdoc />
        public async Task<Message> SendMessageWithReplyAsync(
            BoundPeer peer,
            Message message,
            TimeSpan? timeout,
            CancellationToken cancellationToken)
        {
            IEnumerable<Message> replies =
                await SendMessageWithReplyAsync(peer, message, timeout, 1, cancellationToken);
            Message reply = replies.First();

            return reply;
        }

        /// <inheritdoc />
        public async Task<IEnumerable<Message>> SendMessageWithReplyAsync(
            BoundPeer peer,
            Message message,
            TimeSpan? timeout,
            int expectedResponses,
            CancellationToken cancellationToken = default(CancellationToken)
        )
        {
            if (!(_turnClient is null) && _turnClient.BehindNAT)
            {
                await CreatePermission(peer);
            }

            Guid reqId = Guid.NewGuid();
            try
            {
                DateTimeOffset now = DateTimeOffset.UtcNow;
                _logger.Verbose(
                    "Enqueue a request {RequestId} to {PeerAddress}: {Message}.",
                    reqId,
                    peer.Address,
                    message
                );
                var tcs = new TaskCompletionSource<IEnumerable<Message>>();
                Interlocked.Increment(ref _requestCount);

                // FIXME should we also cancel tcs sender side too?
                cancellationToken.Register(() => tcs.TrySetCanceled());
                await _requests.AddAsync(
                    new MessageRequest(reqId, message, peer, now, timeout, expectedResponses, tcs),
                    cancellationToken
                );
                _logger.Verbose(
                    "Enqueued a request {RequestId} to {PeerAddress}: {Message}; " +
                    "{LeftRequests} left.",
                    reqId,
                    peer.Address,
                    message,
                    Interlocked.Read(ref _requestCount)
                );

                if (expectedResponses > 0)
                {
                    var reply = (await tcs.Task).ToList();
                    foreach (var msg in reply)
                    {
                        MessageHistory.Enqueue(msg);
                    }

                    const string logMsg =
                        "Received {ReplyMessageCount} reply messages to {RequestId} " +
                        "from {PeerAddress}: {ReplyMessages}.";
                    _logger.Debug(logMsg, reply.Count, reqId, peer.Address, reply);

                    return reply;
                }
                else
                {
                    return new Message[0];
                }
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
            catch (InvalidTimestampException ite)
            {
                const string logMsg =
                    "{PeerAddress} sent a reply to {RequestId} with stale timestamp; " +
                    "(timestamp: {Timestamp}, lifespan: {Lifespan}, current: {Current})";
                _logger.Error(
                    logMsg,
                    peer.Address,
                    reqId,
                    ite.CreatedOffset,
                    ite.Lifespan,
                    ite.CurrentOffset);
                throw;
            }
            catch (TimeoutException)
            {
                _logger.Debug(
                    $"{nameof(NetMQTransport)}.{nameof(SendMessageWithReplyAsync)}() timed out " +
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
                    $"{nameof(NetMQTransport)}.{nameof(SendMessageWithReplyAsync)}() was " +
                    "cancelled to  wait a reply to {RequestId} from {PeerAddress}.",
                    reqId,
                    peer.Address
                );
                throw;
            }
            catch (Exception e)
            {
                var msg =
                    $"{nameof(NetMQTransport)}.{nameof(SendMessageWithReplyAsync)}() encountered " +
                    "an unexpected exception during sending a request {RequestId} to " +
                    "{PeerAddress} and waiting a reply to it: {Exception}.";
                _logger.Error(e, msg, reqId, peer.Address, e);
                throw;
            }
        }

        /// <inheritdoc />
        public void BroadcastMessage(Address? except, Message message)
        {
            _broadcastQueue.Enqueue((except, message));
        }

        /// <inheritdoc />
        public void ReplyMessage(Message message)
        {
            string identityHex = ByteUtil.Hex(message.Identity);
            _logger.Debug("Reply {Message} to {Identity}...", message, identityHex);
            _replyQueue.Enqueue(message.ToNetMQMessage(
                _privateKey,
                AsPeer,
                DateTimeOffset.UtcNow,
                _appProtocolVersion));
        }

        private void ReceiveMessage(object sender, NetMQSocketEventArgs e)
        {
            NetMQMessage raw = new NetMQMessage();
            while (e.Socket.TryReceiveMultipartMessage(ref raw))
            {
                try
                {
                    if (_cancellationToken.IsCancellationRequested)
                    {
                        return;
                    }

                    _logger.Verbose(
                        "A raw message [frame count: {0}] has received.",
                        raw.FrameCount
                    );
                    Message message = Message.Parse(
                        raw,
                        false,
                        _appProtocolVersion,
                        _trustedAppProtocolVersionSigners,
                        _differentAppProtocolVersionEncountered,
                        _messageLifespan);
                    _logger.Debug("A message has parsed: {0}, from {1}", message, message.Remote);

                    MessageHistory.Enqueue(message);
                    LastMessageTimestamp = DateTimeOffset.UtcNow;

                    try
                    {
                        ProcessMessageHandler?.Invoke(this, message);
                    }
                    catch (Exception exc)
                    {
                        _logger.Error(
                            exc,
                            "Something went wrong during message parsing: {0}",
                            exc);
                        throw;
                    }
                }
                catch (DifferentAppProtocolVersionException dapve)
                {
                    var differentVersion = new DifferentVersion()
                    {
                        Identity = dapve.Identity,
                    };
                    ReplyMessage(differentVersion);
                    _logger.Debug("Message from peer with different version received.");
                }
                catch (InvalidTimestampException ite)
                {
                    const string logMsg = "The received message is stale. " +
                              "(timestamp: {Timestamp}, lifespan: {Lifespan}, current: {Current})";
                    _logger.Debug(logMsg, ite.CreatedOffset, ite.Lifespan, ite.CurrentOffset);
                }
                catch (InvalidMessageException ex)
                {
                    _logger.Error(ex, $"Could not parse NetMQMessage properly; ignore: {{0}}", ex);
                }
                catch (Exception ex)
                {
                    const string mname = nameof(ReceiveMessage);
                    _logger.Error(
                        ex,
                        $"An unexpected exception occurred during {mname}(): {{0}}",
                        ex
                    );
                }
            }
        }

        private void DoBroadcast(object sender, NetMQQueueEventArgs<(Address?, Message)> e)
        {
            try
            {
                (Address? except, Message msg) = e.Queue.Dequeue();

                // FIXME Should replace with PUB/SUB model.
                List<BoundPeer> peers = _table.PeersToBroadcast(except).ToList();
                _logger.Debug("Broadcasting message: {Message} as {AsPeer}", msg, AsPeer);
                _logger.Debug("Peers to broadcast: {PeersCount}", peers.Count);

                NetMQMessage message = msg.ToNetMQMessage(
                    _privateKey,
                    AsPeer,
                    DateTimeOffset.UtcNow,
                    _appProtocolVersion);

                foreach (BoundPeer peer in peers)
                {
                    string endpoint = ToNetMQAddress(peer);
                    if (!_dealers.TryGetValue(peer.Address, out DealerSocket dealer) ||
                        dealer.IsDisposed)
                    {
                        dealer = new DealerSocket(endpoint);
                        _dealers[peer.Address] = dealer;
                    }
                    else if (dealer.Options.LastEndpoint != endpoint)
                    {
                        dealer.Dispose();
                        dealer = new DealerSocket(endpoint);
                        _dealers[peer.Address] = dealer;
                    }

                    if (!dealer.TrySendMultipartMessage(TimeSpan.FromSeconds(3), message))
                    {
                        _logger.Warning(
                            "Broadcasting timed out. [Peer: {Peer}, Message: {Message}]",
                            peer,
                            msg
                        );

                        dealer.Dispose();
                        _dealers.TryRemove(peer.Address, out _);
                    }
                }
            }
            catch (Exception exc)
            {
                _logger.Error(
                    exc,
                    $"Unexpected error occurred during {nameof(DoBroadcast)}(). {{error}}",
                    exc);
                throw;
            }
        }

        private void DoReply(object sender, NetMQQueueEventArgs<NetMQMessage> e)
        {
            NetMQMessage msg = e.Queue.Dequeue();
            string identityHex = ByteUtil.Hex(msg[0].Buffer);

            // FIXME The current timeout value(1 sec) is arbitrary.
            // We should make this configurable or fix it to an unneeded structure.
            if (_router.TrySendMultipartMessage(TimeSpan.FromSeconds(1), msg))
            {
                _logger.Debug("A reply sent to {Identity}", identityHex);
            }
            else
            {
                _logger.Debug("Failed to reply to {Identity}", identityHex);
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
                    _logger.Debug("Refreshing permissions...");
                    await Task.WhenAll(_table.Peers.Select(CreatePermission));
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
                              $"{nameof(RefreshPermissions)}(): {{e}}";
                    _logger.Error(e, msg, e);
                }
            }
        }

        private async Task ProcessRuntime(
            CancellationToken cancellationToken = default(CancellationToken))
        {
            while (!cancellationToken.IsCancellationRequested)
            {
                _logger.Verbose("Waiting for a new request...");
                MessageRequest req = await _requests.TakeAsync(cancellationToken);
                Interlocked.Decrement(ref _requestCount);
                _logger.Debug(
                    "Request taken. {Count} requests are left.",
                    Interlocked.Read(ref _requestCount));

                try
                {
                    await ProcessRequest(req, cancellationToken);
                }
                catch (OperationCanceledException)
                {
                    _logger.Information(
                        $"Cancellation requested; shut down {nameof(NetMQTransport)}." +
                        $"{nameof(ProcessRuntime)}()..."
                    );
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
                        Interlocked.Increment(ref _requestCount);
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
            _logger.Verbose(
                "Request {Message}({RequestId}) is ready to be processed in {TimeSpan}.",
                req.Message,
                req.Id,
                DateTimeOffset.UtcNow - req.RequestedTime);
            DateTimeOffset startedTime = DateTimeOffset.UtcNow;

            using var dealer = new DealerSocket(ToNetMQAddress(req.Peer));

            _logger.Debug(
                "Trying to send {Message} to {Peer}...",
                req.Message,
                req.Peer
            );
            var message = req.Message.ToNetMQMessage(
                _privateKey,
                AsPeer,
                DateTimeOffset.UtcNow,
                _appProtocolVersion);
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
                    Message reply = Message.Parse(
                        raw,
                        true,
                        _appProtocolVersion,
                        _trustedAppProtocolVersionSigners,
                        _differentAppProtocolVersionEncountered,
                        _messageLifespan);
                    _logger.Debug(
                        "A reply has parsed: {Reply} from {ReplyRemote}",
                        reply,
                        reply.Remote
                    );

                    result.Add(reply);
                }

                tcs.TrySetResult(result);
            }
            catch (DifferentAppProtocolVersionException dapve)
            {
                tcs.TrySetException(dapve);
            }
            catch (InvalidTimestampException ite)
            {
                tcs.TrySetException(ite);
            }
            catch (TimeoutException te)
            {
                tcs.TrySetException(te);
            }

            _logger.Verbose(
                "Request {Message}({RequestId}) processed in {TimeSpan}.",
                req.Message,
                req.Id,
                DateTimeOffset.UtcNow - startedTime);
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
            var cts = new CancellationTokenSource();
            IPAddress[] ips;

            // Cancellation After 2.5 sec
            cts.CancelAfter(2500);
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

            try
            {
                foreach (IPAddress ip in ips)
                {
                    var ep = new IPEndPoint(ip, peer.EndPoint.Port);
                    if (IPAddress.IsLoopback(ip))
                    {
                        // This translation is only used in test case because a
                        // seed node exposes loopback address as public address to
                        // other node in test case
                        ep = await _turnClient.GetMappedAddressAsync(cts.Token);
                    }

                    // FIXME Can we really ignore IPv6 case?
                    if (ip.AddressFamily.Equals(AddressFamily.InterNetwork))
                    {
                        await _turnClient.CreatePermissionAsync(ep, cts.Token);
                    }
                }
            }
            catch (TaskCanceledException tce)
            {
                if (cts.IsCancellationRequested)
                {
                    _logger.Debug($"Timeout occurred during {nameof(CreatePermission)}: {tce}");
                }
                else
                {
                    throw;
                }
            }
            finally
            {
                cts.Dispose();
            }
        }

        private async Task DisposeUnusedDealerSockets(
            TimeSpan period,
            CancellationToken cancellationToken)
        {
            while (!cancellationToken.IsCancellationRequested)
            {
                try
                {
                    await Task.Delay(period, cancellationToken);
                    ImmutableHashSet<Address> peerAddresses =
                        _table.Peers.Select(p => p.Address).ToImmutableHashSet();
                    foreach (Address address in _dealers.Keys)
                    {
                        if (!peerAddresses.Contains(address) &&
                            _dealers.TryGetValue(address, out DealerSocket removed))
                        {
                            removed.Dispose();
                        }
                    }
                }
                catch (OperationCanceledException e)
                {
                    _logger.Warning(e, $"{nameof(DisposeUnusedDealerSockets)}() is cancelled.");
                    throw;
                }
                catch (Exception e)
                {
                    var msg = "Unexpected exception occurred during " +
                              $"{nameof(DisposeUnusedDealerSockets)}(): {{0}}";
                    _logger.Warning(e, msg, e);
                }
            }
        }

        private Task RunPoller(NetMQPoller poller) =>
            Task.Factory.StartNew(
                () =>
                {
                    // Ignore NetMQ related exceptions during NetMQPoller.Run() to stabilize
                    // tests.
                    try
                    {
                        poller.Run();
                    }
                    catch (TerminatingException)
                    {
                        _logger.Error($"TerminatingException occurred during poller.Run()");
                    }
                    catch (ObjectDisposedException)
                    {
                        _logger.Error(
                            $"ObjectDisposedException occurred during poller.Run()"
                        );
                    }
                },
                CancellationToken.None,
                TaskCreationOptions.DenyChildAttach | TaskCreationOptions.LongRunning,
                TaskScheduler.Default
            );

        private readonly struct MessageRequest
        {
            private readonly int _retried;

            public MessageRequest(
                in Guid id,
                Message message,
                BoundPeer peer,
                DateTimeOffset requestedTime,
                in TimeSpan? timeout,
                in int expectedResponses,
                TaskCompletionSource<IEnumerable<Message>> taskCompletionSource)
                : this(
                      id,
                      message,
                      peer,
                      requestedTime,
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
                DateTimeOffset requestedTime,
                in TimeSpan? timeout,
                in int expectedResponses,
                TaskCompletionSource<IEnumerable<Message>> taskCompletionSource,
                int retried)
            {
                Id = id;
                Message = message;
                Peer = peer;
                RequestedTime = requestedTime;
                Timeout = timeout;
                ExpectedResponses = expectedResponses;
                TaskCompletionSource = taskCompletionSource;
                _retried = retried;
            }

            public Guid Id { get; }

            public Message Message { get; }

            public BoundPeer Peer { get; }

            public DateTimeOffset RequestedTime { get; }

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
                    RequestedTime,
                    Timeout,
                    ExpectedResponses,
                    TaskCompletionSource,
                    _retried + 1
                );
            }
        }
    }
}
