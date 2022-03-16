#nullable disable
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Net;
using System.Threading;
using System.Threading.Channels;
using System.Threading.Tasks;
using AsyncIO;
using Libplanet.Crypto;
using Libplanet.Net.Messages;
using Libplanet.Stun;
using NetMQ;
using NetMQ.Sockets;
using Serilog;

namespace Libplanet.Net.Transports
{
    /// <summary>
    /// Implementation of <see cref="ITransport"/> interface using NetMQ.
    /// </summary>
    public class NetMQTransport : ITransport
    {
        private readonly PrivateKey _privateKey;
        private readonly AppProtocolVersion _appProtocolVersion;
        private readonly IImmutableSet<PublicKey> _trustedAppProtocolVersionSigners;
        private readonly string _host;
        private readonly IList<IceServer> _iceServers;
        private readonly ILogger _logger;
        private readonly NetMQMessageCodec _messageCodec;

        private NetMQQueue<Message> _replyQueue;
        private NetMQQueue<(IEnumerable<BoundPeer>, Message)> _broadcastQueue;

        private RouterSocket _router;
        private NetMQPoller _routerPoller;
        private NetMQPoller _broadcastPoller;
        private int _listenPort;
        private TurnClient _turnClient;
        private DnsEndPoint _hostEndPoint;

        private Channel<MessageRequest> _requests;
        private CancellationTokenSource _runtimeProcessorCancellationTokenSource;
        private CancellationTokenSource _runtimeCancellationTokenSource;
        private CancellationTokenSource _turnCancellationTokenSource;
        private Task _runtimeProcessor;

        private TaskCompletionSource<object> _runningEvent;
        private ConcurrentDictionary<string, TaskCompletionSource<object>> _replyCompletionSources;

        // Used only for logging.
        private long _requestCount;
        private long _socketCount;

        /// <summary>
        /// The <see cref="EventHandler"/> triggered when the different version of
        /// <see cref="Peer"/> is discovered.
        /// </summary>
        private DifferentAppProtocolVersionEncountered _differentAppProtocolVersionEncountered;

        private bool _disposed;

        static NetMQTransport()
        {
            if (!(Type.GetType("Mono.Runtime") is null))
            {
                ForceDotNet.Force();
            }
        }

        /// <summary>
        /// Creates <see cref="NetMQTransport"/> instance.
        /// </summary>
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
        /// <param name="messageTimestampBuffer">The amount in <see cref="TimeSpan"/>
        /// that is allowed for the timestamp of a <see cref="Message"/> to differ from
        /// the current time of a local node.  Every <see cref="Message"/> with its timestamp
        /// differing greater than <paramref name="messageTimestampBuffer"/> will be ignored.
        /// If <c>null</c>, any timestamp is accepted.</param>
        /// <exception cref="ArgumentException">Thrown when both <paramref name="host"/> and
        /// <paramref name="iceServers"/> are <c>null</c>.</exception>
        public NetMQTransport(
            PrivateKey privateKey,
            AppProtocolVersion appProtocolVersion,
            IImmutableSet<PublicKey> trustedAppProtocolVersionSigners,
            int workers,
            string host,
            int? listenPort,
            IEnumerable<IceServer> iceServers,
            DifferentAppProtocolVersionEncountered differentAppProtocolVersionEncountered,
            TimeSpan? messageTimestampBuffer = null)
        {
            _logger = Log
                .ForContext<NetMQTransport>()
                .ForContext("Source", nameof(NetMQTransport));

            if (host is null && (iceServers is null || !iceServers.Any()))
            {
                throw new ArgumentException(
                    $"Swarm requires either {nameof(host)} or {nameof(iceServers)}.");
            }

            Running = false;

            _socketCount = 0;
            _privateKey = privateKey;
            _appProtocolVersion = appProtocolVersion;
            _trustedAppProtocolVersionSigners = trustedAppProtocolVersionSigners;
            _host = host;
            _iceServers = iceServers?.ToList();
            _listenPort = listenPort ?? 0;
            _differentAppProtocolVersionEncountered = differentAppProtocolVersionEncountered;
            _messageCodec = new NetMQMessageCodec(messageTimestampBuffer);

            _requests = Channel.CreateUnbounded<MessageRequest>();
            _runtimeProcessorCancellationTokenSource = new CancellationTokenSource();
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
                        Task[] workerTasks = Enumerable
                            .Range(0, workers)
                            .Select(_ =>
                                ProcessRuntime(_runtimeProcessorCancellationTokenSource.Token))
                            .ToArray();
                        runtime.Run(workerTasks);
                    }
                    catch (Exception e)
                        when (e is NetMQException nme || e is ObjectDisposedException ode)
                    {
                        _logger.Error(
                            e,
                            "An exception has occurred while running {TaskName}.",
                            nameof(_runtimeProcessor));
                    }
                },
                CancellationToken.None,
                TaskCreationOptions.DenyChildAttach | TaskCreationOptions.LongRunning,
                TaskScheduler.Default
            );

            ProcessMessageHandler = new AsyncDelegate<Message>();
            _replyCompletionSources =
                new ConcurrentDictionary<string, TaskCompletionSource<object>>();
        }

        /// <inheritdoc/>
        public AsyncDelegate<Message> ProcessMessageHandler { get; }

        /// <inheritdoc/>
        public Peer AsPeer => EndPoint is null
            ? new Peer(_privateKey.PublicKey, PublicIPAddress)
            : new BoundPeer(_privateKey.PublicKey, EndPoint, PublicIPAddress);

        /// <inheritdoc/>
        public DateTimeOffset? LastMessageTimestamp { get; private set; }

        /// <inheritdoc/>
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

        internal IPAddress PublicIPAddress => _turnClient?.PublicAddress;

        internal DnsEndPoint EndPoint => _turnClient?.EndPoint ?? _hostEndPoint;

        /// <inheritdoc/>
        public async Task StartAsync(CancellationToken cancellationToken = default)
        {
            if (_disposed)
            {
                throw new ObjectDisposedException(nameof(NetMQTransport));
            }

            if (Running)
            {
                throw new TransportException("Transport is already running.");
            }

            await Initialize(cancellationToken);

            _runtimeCancellationTokenSource =
                CancellationTokenSource.CreateLinkedTokenSource(cancellationToken);
            _turnCancellationTokenSource =
                CancellationTokenSource.CreateLinkedTokenSource(cancellationToken);

            _replyQueue = new NetMQQueue<Message>();
            _broadcastQueue = new NetMQQueue<(IEnumerable<BoundPeer>, Message)>();
            _routerPoller = new NetMQPoller { _router, _replyQueue };
            _broadcastPoller = new NetMQPoller { _broadcastQueue };

            _router.ReceiveReady += ReceiveMessage;
            _replyQueue.ReceiveReady += DoReply;
            _broadcastQueue.ReceiveReady += DoBroadcast;

            List<Task> tasks = new List<Task>();

            tasks.Add(RunPoller(_routerPoller));
            tasks.Add(RunPoller(_broadcastPoller));

            Running = true;

            await await Task.WhenAny(tasks);
        }

        /// <inheritdoc/>
        public async Task StopAsync(
            TimeSpan waitFor,
            CancellationToken cancellationToken = default
        )
        {
            if (_disposed)
            {
                throw new ObjectDisposedException(nameof(NetMQTransport));
            }

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

                _runtimeCancellationTokenSource.Cancel();
                Running = false;
            }
        }

        /// <inheritdoc/>
        public void Dispose()
        {
            if (!_disposed)
            {
                _requests.Writer.Complete();
                _runtimeProcessorCancellationTokenSource.Cancel();
                _runtimeCancellationTokenSource.Cancel();
                _turnCancellationTokenSource.Cancel();
                _runtimeProcessor.Wait();

                _runtimeProcessorCancellationTokenSource.Dispose();
                _runtimeCancellationTokenSource.Dispose();
                _turnCancellationTokenSource.Dispose();
                _disposed = true;
            }
        }

        /// <inheritdoc/>
        public Task WaitForRunningAsync() => _runningEvent.Task;

        /// <inheritdoc/>
        public async Task<Message> SendMessageAsync(
            BoundPeer peer,
            Message message,
            TimeSpan? timeout,
            CancellationToken cancellationToken)
        {
            IEnumerable<Message> replies =
                await SendMessageAsync(
                    peer,
                    message,
                    timeout,
                    1,
                    false,
                    cancellationToken);
            Message reply = replies.First();

            return reply;
        }

        /// <inheritdoc/>
        public async Task<IEnumerable<Message>> SendMessageAsync(
            BoundPeer peer,
            Message message,
            TimeSpan? timeout,
            int expectedResponses,
            bool returnWhenTimeout,
            CancellationToken cancellationToken
        )
        {
            if (_disposed)
            {
                throw new ObjectDisposedException(nameof(NetMQTransport));
            }

            using CancellationTokenSource cts =
                CancellationTokenSource.CreateLinkedTokenSource(
                    _runtimeCancellationTokenSource.Token,
                    cancellationToken);
            Guid reqId = Guid.NewGuid();
            try
            {
                DateTimeOffset now = DateTimeOffset.UtcNow;
                _logger.Verbose(
                    "Enqueue a request {RequestId} to {Peer}: {@Message}.",
                    reqId,
                    peer,
                    message
                );
                var tcs = new TaskCompletionSource<IEnumerable<Message>>();
                Interlocked.Increment(ref _requestCount);

                // FIXME should we also cancel tcs sender side too?
                using CancellationTokenRegistration ctr =
                    cts.Token.Register(() => tcs.TrySetCanceled());
                MessageRequest req = new MessageRequest(
                    reqId,
                    message,
                    peer,
                    now,
                    timeout,
                    expectedResponses,
                    returnWhenTimeout,
                    tcs);
                await _requests.Writer.WriteAsync(
                    req,
                    cts.Token
                );
                _logger.Verbose(
                    "Enqueued a request {RequestId} to the peer {Peer}: {@Message}; " +
                    "{LeftRequests} left.",
                    reqId,
                    peer,
                    message,
                    Interlocked.Read(ref _requestCount)
                );

                if (expectedResponses > 0)
                {
                    var replies = (await tcs.Task).ToList();
                    const string dbgMsg =
                        "Received {ReplyMessageCount} reply messages to {RequestId} " +
                        "from {Peer}: {ReplyMessages}.";
                    _logger.Debug(dbgMsg, replies.Count, reqId, peer, replies);

                    return replies;
                }
                else
                {
                    return new Message[0];
                }
            }
            catch (DifferentAppProtocolVersionException dapve)
            {
                const string errMsg =
                    "{Peer} sent a reply to {Message} {RequestId} " +
                    "with a different app protocol version.";
                _logger.Error(dapve, errMsg, message, peer, reqId);
                throw;
            }
            catch (InvalidMessageTimestampException imte)
            {
                const string errMsg =
                    "{Peer} sent a reply to {Message} {RequestId} with a stale timestamp.";
                _logger.Error(imte, errMsg, message, peer, reqId);
                throw;
            }
            catch (TimeoutException toe)
            {
                const string dbgMsg =
                    "{FName}() timed out after {Timeout} while waiting for a reply to " +
                    "{Message} {RequestId} from {Peer}.";
                _logger.Debug(
                    toe, dbgMsg, nameof(SendMessageAsync), timeout, message, reqId, peer);
                throw;
            }
            catch (TaskCanceledException tce)
            {
                const string dbgMsg =
                    "{FName}() was cancelled while waiting for a reply to " +
                    "{Message} {RequestId} from {Peer}.";
                _logger.Debug(
                    tce, dbgMsg, nameof(SendMessageAsync), message, reqId, peer);
                throw;
            }
            catch (Exception e)
            {
                const string errMsg =
                    "{FName}() encountered an unexpected exception while waiting for a reply to " +
                    "{Message} {RequestId} from {Peer}.";
                _logger.Error(
                    e, errMsg, nameof(SendMessageAsync), message, reqId, peer.Address);
                throw;
            }
        }

        /// <inheritdoc/>
        public void BroadcastMessage(IEnumerable<BoundPeer> peers, Message message)
        {
            if (_disposed)
            {
                throw new ObjectDisposedException(nameof(NetMQTransport));
            }

            _broadcastQueue.Enqueue((peers, message));
        }

        /// <inheritdoc/>
        public async Task ReplyMessageAsync(Message message, CancellationToken cancellationToken)
        {
            if (_disposed)
            {
                throw new ObjectDisposedException(nameof(NetMQTransport));
            }

            string identityHex = ByteUtil.Hex(message.Identity);
            var tcs = new TaskCompletionSource<object>();
            using CancellationTokenRegistration ctr =
                cancellationToken.Register(() => tcs.TrySetCanceled());
            _replyCompletionSources.TryAdd(identityHex, tcs);
            _logger.Debug("Reply {Message} to {Identity}...", message, identityHex);
            _replyQueue.Enqueue(message);

            await tcs.Task;
            _replyCompletionSources.TryRemove(identityHex, out _);
        }

        internal async Task Initialize(CancellationToken cancellationToken = default)
        {
            _router = new RouterSocket();
            _router.Options.RouterHandover = true;

            if (_listenPort == 0)
            {
                _listenPort = _router.BindRandomPort("tcp://*");
            }
            else
            {
                _router.Bind($"tcp://*:{_listenPort}");
            }

            _logger.Information("Listening on {Port}...", _listenPort);

            if (_host is { } host)
            {
                _hostEndPoint = new DnsEndPoint(host, _listenPort);
            }
            else if (_iceServers is { } iceServers)
            {
                _turnClient = await IceServer.CreateTurnClient(_iceServers);
                await _turnClient.StartAsync(_listenPort, cancellationToken);
                if (!_turnClient.BehindNAT)
                {
                    _hostEndPoint = new DnsEndPoint(
                        _turnClient.PublicAddress.ToString(), _listenPort);
                }
            }
        }

        private void AppProtocolVersionValidator(
            byte[] identity,
            Peer remotePeer,
            AppProtocolVersion remoteVersion)
        {
            bool valid;
            if (remoteVersion.Equals(_appProtocolVersion))
            {
                valid = true;
            }
            else if (!(_trustedAppProtocolVersionSigners is null) &&
                     !_trustedAppProtocolVersionSigners.Any(remoteVersion.Verify))
            {
                valid = false;
            }
            else if (_differentAppProtocolVersionEncountered is null)
            {
                valid = false;
            }
            else
            {
                valid = _differentAppProtocolVersionEncountered(
                    remotePeer,
                    remoteVersion,
                    _appProtocolVersion);
            }

            if (!valid)
            {
                throw new DifferentAppProtocolVersionException(
                    "The version of the received message is not valid.",
                    identity,
                    _appProtocolVersion,
                    remoteVersion);
            }
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

                if (_runtimeCancellationTokenSource.IsCancellationRequested)
                {
                    return;
                }

                Message message = _messageCodec.Decode(
                    raw,
                    false,
                    AppProtocolVersionValidator);
                _logger.Debug(
                    "A message from {Peer} has parsed: {Message}", message.Remote, message);
                _logger.Debug("Received peer is boundpeer? {0}", message.Remote is BoundPeer);

                LastMessageTimestamp = DateTimeOffset.UtcNow;

                Task.Run(() =>
                {
                    try
                    {
                        _ = ProcessMessageHandler.InvokeAsync(message);
                    }
                    catch (Exception exc)
                    {
                        _logger.Error(
                            exc,
                            "Something went wrong during message parsing.");
                        throw;
                    }
                });
            }
            catch (DifferentAppProtocolVersionException dapve)
            {
                var differentVersion = new DifferentVersion()
                {
                    Identity = dapve.Identity,
                };
                _ = ReplyMessageAsync(differentVersion, _runtimeCancellationTokenSource.Token);
                _logger.Debug("Message from peer with a different version received.");
            }
            catch (InvalidMessageTimestampException imte)
            {
                const string logMsg =
                    "Received message has an invalid timestamp: " +
                    "(timestamp: {Timestamp}, buffer: {Buffer}, current: {Current})";
                _logger.Debug(logMsg, imte.CreatedOffset, imte.Buffer, imte.CurrentOffset);
            }
            catch (InvalidMessageException ex)
            {
                _logger.Error(ex, "Could not parse NetMQMessage properly; ignore.");
            }
            catch (Exception ex)
            {
                _logger.Error(
                    ex,
                    $"An unexpected exception occurred during " + nameof(ReceiveMessage) + "().");
            }
        }

        private void DoBroadcast(
            object sender,
            NetMQQueueEventArgs<(IEnumerable<BoundPeer>, Message)> e)
        {
            try
            {
                (IEnumerable<BoundPeer> peers, Message message) = e.Queue.Dequeue();

                // FIXME Should replace with PUB/SUB model.
                IReadOnlyList<BoundPeer> peersList = peers.ToList();
                _logger.Debug("Broadcasting message: {Message} as {AsPeer}", message, AsPeer);
                _logger.Debug("Peers to broadcast: {PeersCount}", peersList.Count);

                peersList.AsParallel().ForAll(
                    peer => Task.Run(() => SendMessageAsync(
                        peer,
                        message,
                        TimeSpan.FromSeconds(1),
                        _runtimeCancellationTokenSource.Token)));
            }
            catch (Exception exc)
            {
                _logger.Error(
                    exc,
                    "Unexpected error occurred during {FName}().",
                    nameof(DoBroadcast));
            }
        }

        private void DoReply(object sender, NetMQQueueEventArgs<Message> e)
        {
            Message message = e.Queue.Dequeue();
            string identityHex = ByteUtil.Hex(
                message.Identity is { } bytes
                    ? bytes
                    : new byte[] { });
            _logger.Verbose("Dequeued reply message {Message} {Identity}", message, identityHex);
            NetMQMessage netMqMessage = _messageCodec.Encode(
                            message,
                            _privateKey,
                            AsPeer,
                            DateTimeOffset.UtcNow,
                            _appProtocolVersion);

            // FIXME The current timeout value(1 sec) is arbitrary.
            // We should make this configurable or fix it to an unneeded structure.
            if (_router.TrySendMultipartMessage(TimeSpan.FromSeconds(1), netMqMessage))
            {
                _logger.Debug(
                    "{Message} as a reply to {Identity} sent.", message, identityHex);
            }
            else
            {
                _logger.Debug(
                    "Failed to send {Message} as a reply to {Identity}.", message, identityHex);
            }

            _replyCompletionSources.TryGetValue(identityHex, out TaskCompletionSource<object> tcs);
            tcs?.TrySetResult(null);
        }

        private async Task ProcessRuntime(
            CancellationToken cancellationToken = default)
        {
            const string waitMsg = "Waiting for a new request...";
#if NETCOREAPP3_0 || NETCOREAPP3_1 || NET
            _logger.Verbose(waitMsg);
            await foreach (MessageRequest req in _requests.Reader.ReadAllAsync(cancellationToken))
            {
#else
            while (!cancellationToken.IsCancellationRequested)
            {
                _logger.Verbose(waitMsg);
                MessageRequest req = await _requests.Reader.ReadAsync(cancellationToken);
#endif
                long left = Interlocked.Decrement(ref _requestCount);
                _logger.Debug("Request taken; {Count} requests left.", left);

                try
                {
                    await ProcessRequest(req, cancellationToken);
                }
                catch (OperationCanceledException)
                {
                    _logger.Information(
                        "Cancellation requested; shutting down {FName}()...",
                        nameof(ProcessRuntime));
                    throw;
                }
                catch (Exception e)
                {
                    _logger.Error(
                        e,
                        "Failed to process {Message} {RequestId}; discarding it.",
                        req.Message,
                        req.Id);
                }

#if NETCOREAPP3_0 || NETCOREAPP3_1 || NET
                _logger.Verbose(waitMsg);
#endif
            }
        }

        private DealerSocket GetRequestDealerSocket(MessageRequest request)
        {
            try
            {
                DealerSocket dealer = new DealerSocket(request.Peer.ToNetMQAddress());
                long incrementedSocketCount = Interlocked.Increment(ref _socketCount);
                _logger
                    .ForContext("Tag", "Metric")
                    .ForContext("Subtag", "SocketCount")
                    .Debug(
                    "{SocketCount} sockets open for processing request {Message} {RequestId}.",
                    incrementedSocketCount,
                    request.Message,
                    request.Id);
                return dealer;
            }
            catch (NetMQException nme)
            {
                const string logMsg =
                    "{SocketCount} sockets open for processing requests; " +
                    "failed to create an additional socket for request {Message} {RequestId}.";
                _logger
                    .ForContext("Tag", "Metric")
                    .ForContext("Subtag", "SocketCount")
                    .Debug(
                    nme,
                    logMsg,
                    Interlocked.Read(ref _socketCount),
                    request.Message,
                    request.Id);
                throw;
            }
        }

        private async Task ProcessRequest(MessageRequest req, CancellationToken cancellationToken)
        {
            DateTimeOffset startedTime = DateTimeOffset.UtcNow;
            _logger.Debug(
                "Request {Message} {RequestId} is ready to be processed in {TimeSpan}.",
                req.Message,
                req.Id,
                DateTimeOffset.UtcNow - req.RequestedTime);

            using var dealer = GetRequestDealerSocket(req);
            TaskCompletionSource<IEnumerable<Message>> tcs = req.TaskCompletionSource;
            CancellationTokenSource timerCts =
                CancellationTokenSource.CreateLinkedTokenSource(cancellationToken);
            if (req.Timeout is TimeSpan timespan)
            {
                timerCts.CancelAfter(timespan);
            }

            _logger.Debug(
                "Trying to send request {Message} {RequestId} to {Peer} with timeout {Timeout}...",
                req.Message,
                req.Id,
                req.Peer,
                req.Timeout);
            var message = _messageCodec.Encode(
                req.Message,
                _privateKey,
                AsPeer,
                DateTimeOffset.UtcNow,
                _appProtocolVersion);
            var result = new List<Message>();

            // Normal OperationCanceledException initiated from outside should bubble up.
            try
            {
                if (dealer.TrySendMultipartMessage(message))
                {
                    _logger.Debug(
                        "Request {Message} {RequestId} sent to {Peer}.",
                        req.Message,
                        req.Id,
                        req.Peer);
                }
                else
                {
                    _logger.Debug(
                        "Failed to send {Message} {RequestId} to {Peer}.",
                        req.Message,
                        req.Id,
                        req.Peer);

                    throw new MessageSendFailedException(
                        $"{nameof(DealerSocket)} failed to accept {req.Message}",
                        req.Message.Type,
                        req.Peer);
                }

                foreach (var i in Enumerable.Range(0, req.ExpectedResponses))
                {
                    try
                    {
                        NetMQMessage raw = await dealer.ReceiveMultipartMessageAsync(
                            cancellationToken: timerCts.Token);
                        _logger.Verbose(
                            "Received a raw message with {FrameCount} frames as a reply to " +
                            "request {RequestId} from {Peer}.",
                            raw.FrameCount,
                            req.Id,
                            req.Peer
                        );
                        Message reply = _messageCodec.Decode(
                            raw,
                            true,
                            AppProtocolVersionValidator);
                        _logger.Debug(
                            "A reply to request {Message} {RequestId} from {Peer} " +
                            "has parsed: {Reply}.",
                            req.Message,
                            req.Id,
                            reply.Remote,
                            reply);

                        result.Add(reply);
                    }
                    catch (OperationCanceledException oce)
                    {
                        if (timerCts.IsCancellationRequested)
                        {
                            if (req.ReturnWhenTimeout)
                            {
                                break;
                            }
                            else
                            {
                                throw new TimeoutException(
                                    $"The operation was canceled due to timeout {req.Timeout}.",
                                    oce);
                            }
                        }
                        else
                        {
                            throw;
                        }
                    }
                }

                tcs.TrySetResult(result);
            }
            catch (Exception e) when (
                e is DifferentAppProtocolVersionException ||
                e is InvalidMessageTimestampException ||
                e is InvalidMessageSignatureException ||
                e is MessageSendFailedException ||
                e is TimeoutException)
            {
                tcs.TrySetException(e);
            }
            finally
            {
                if (req.ExpectedResponses == 0)
                {
                    // FIXME: Temporary fix to wait for a message to be sent.
                    await Task.Delay(1000);
                }

                Interlocked.Decrement(ref _socketCount);
                timerCts.Dispose();

                _logger
                    .ForContext("Tag", "Metric")
                    .ForContext("Subtag", "RequestStatus")
                    .Debug(
                        "Request {Message} {RequestId} with timeout {TimeoutMs:F0}ms " +
                        "processed in {DurationMs:F0}ms with {ReceivedCount} replies received " +
                        "out of {ExpectedCount} expected replies.",
                        req.Message,
                        req.Id,
                        req.Timeout is TimeSpan t ? t.TotalMilliseconds : 0.0,
                        (DateTimeOffset.UtcNow - startedTime).TotalMilliseconds,
                        result.Count,
                        req.ExpectedResponses);
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
                        _logger.Error("TerminatingException occurred during poller.Run()");
                    }
                    catch (ObjectDisposedException)
                    {
                        _logger.Error(
                            "ObjectDisposedException occurred during poller.Run()");
                    }
                    catch (Exception e)
                    {
                        _logger.Error(
                            e, "An unexpected exception ocurred during poller.Run().");
                    }
                },
                CancellationToken.None,
                TaskCreationOptions.DenyChildAttach | TaskCreationOptions.LongRunning,
                TaskScheduler.Default
            );

        private readonly struct MessageRequest
        {
            public MessageRequest(
                in Guid id,
                Message message,
                BoundPeer peer,
                DateTimeOffset requestedTime,
                in TimeSpan? timeout,
                in int expectedResponses,
                bool returnWhenTimeout,
                TaskCompletionSource<IEnumerable<Message>> taskCompletionSource)
            {
                Id = id;
                Message = message;
                Peer = peer;
                RequestedTime = requestedTime;
                Timeout = timeout;
                ExpectedResponses = expectedResponses;
                ReturnWhenTimeout = returnWhenTimeout;
                TaskCompletionSource = taskCompletionSource;
            }

            public Guid Id { get; }

            public Message Message { get; }

            public BoundPeer Peer { get; }

            public DateTimeOffset RequestedTime { get; }

            public TimeSpan? Timeout { get; }

            public int ExpectedResponses { get; }

            public bool ReturnWhenTimeout { get; }

            public TaskCompletionSource<IEnumerable<Message>> TaskCompletionSource { get; }
        }
    }
}
