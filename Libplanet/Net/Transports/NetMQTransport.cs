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
using Libplanet.Net.Protocols;
using Libplanet.Stun;
using NetMQ;
using NetMQ.Sockets;
using Serilog;

namespace Libplanet.Net.Transports
{
    /// <summary>
    /// Implementation of <see cref="ITransport"/> interface using NetMQ.
    /// </summary>
    public partial class NetMQTransport : ITransport
    {
        private const int MessageHistoryCapacity = 30;

        private readonly PrivateKey _privateKey;
        private readonly AppProtocolVersion _appProtocolVersion;
        private readonly IImmutableSet<PublicKey> _trustedAppProtocolVersionSigners;
        private readonly string _host;
        private readonly IList<IceServer> _iceServers;
        private readonly ILogger _logger;
        private readonly int _minimumBroadcastTarget;
        private readonly NetMQMessageCodec _messageCodec;

        private NetMQQueue<NetMQMessage> _replyQueue;
        private NetMQQueue<(Address?, Message)> _broadcastQueue;

        private RouterSocket _router;
        private NetMQPoller _routerPoller;
        private NetMQPoller _broadcastPoller;
        private int _listenPort;
        private TurnClient _turnClient;
        private DnsEndPoint _hostEndPoint;

        private Channel<MessageRequest> _requests;
        private long _requestCount;
        private CancellationTokenSource _runtimeProcessorCancellationTokenSource;
        private CancellationTokenSource _runtimeCancellationTokenSource;
        private CancellationTokenSource _turnCancellationTokenSource;
        private Task _runtimeProcessor;

        private TaskCompletionSource<object> _runningEvent;
        private ConcurrentDictionary<Address, DealerSocket> _dealers;
        private ConcurrentDictionary<string, TaskCompletionSource<object>> _replyCompletionSources;

        private RoutingTable _table;

        /// <summary>
        /// The <see cref="EventHandler" /> triggered when the different version of
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
        /// <param name="minimumBroadcastTarget">
        /// The number of minimum peers to broadcast messages.
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
            int minimumBroadcastTarget,
            TimeSpan? messageLifespan = null)
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

            _privateKey = privateKey;
            _appProtocolVersion = appProtocolVersion;
            _trustedAppProtocolVersionSigners = trustedAppProtocolVersionSigners;
            _host = host;
            _iceServers = iceServers?.ToList();
            _listenPort = listenPort ?? 0;
            _differentAppProtocolVersionEncountered = differentAppProtocolVersionEncountered;
            _table = table;
            _minimumBroadcastTarget = minimumBroadcastTarget;
            _messageCodec = new NetMQMessageCodec(messageLifespan);

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
                        Task[] workerTasks = new Task[workers];

                        for (int i = 0; i < workers; i++)
                        {
                            workerTasks[i] = ProcessRequest(
                                _runtimeProcessorCancellationTokenSource.Token
                            );
                        }

                        runtime.Run(workerTasks);
                    }
                    catch (NetMQException nme)
                    {
                        _logger.Error(
                            nme,
                            $"NetMQException occurred in {nameof(_runtimeProcessor)}."
                        );
                    }
                    catch (ObjectDisposedException ode)
                    {
                        _logger.Error(
                            ode,
                            $"ObjectDisposedException occurred in {nameof(_runtimeProcessor)}."
                        );
                    }
                },
                CancellationToken.None,
                TaskCreationOptions.DenyChildAttach | TaskCreationOptions.LongRunning,
                TaskScheduler.Default
            );

            ProcessMessageHandler = new AsyncDelegate<Message>();
            _dealers = new ConcurrentDictionary<Address, DealerSocket>();
            _replyCompletionSources =
                new ConcurrentDictionary<string, TaskCompletionSource<object>>();
        }

        /// <inheritdoc/>
        public AsyncDelegate<Message> ProcessMessageHandler { get; }

        /// <inheritdoc cref="ITransport.AsPeer"/>
        public Peer AsPeer => EndPoint is null
            ? new Peer(_privateKey.PublicKey, PublicIPAddress)
            : new BoundPeer(_privateKey.PublicKey, EndPoint, PublicIPAddress);

        /// <inheritdoc cref="ITransport.LastMessageTimestamp"/>
        public DateTimeOffset? LastMessageTimestamp { get; private set; }

        /// <inheritdoc cref="ITransport.Running"/>
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

            _replyQueue = new NetMQQueue<NetMQMessage>();
            _broadcastQueue = new NetMQQueue<(Address?, Message)>();
            _routerPoller = new NetMQPoller { _router, _replyQueue };
            _broadcastPoller = new NetMQPoller { _broadcastQueue };

            _router.ReceiveReady += ReceiveMessage;
            _replyQueue.ReceiveReady += DoReply;
            _broadcastQueue.ReceiveReady += DoBroadcast;

            List<Task> tasks = new List<Task>();

            tasks.Add(DisposeUnusedDealerSockets(
                TimeSpan.FromSeconds(10),
                _runtimeCancellationTokenSource.Token));
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

                foreach (DealerSocket dealer in _dealers.Values)
                {
                    dealer.Dispose();
                }

                _dealers.Clear();
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
        public Task SendMessageAsync(
            BoundPeer peer,
            Message message,
            CancellationToken cancellationToken)
            => SendMessageWithReplyAsync(
                peer,
                message,
                TimeSpan.FromSeconds(3),
                0,
                false,
                cancellationToken);

        /// <inheritdoc/>
        public async Task<Message> SendMessageWithReplyAsync(
            BoundPeer peer,
            Message message,
            TimeSpan? timeout,
            CancellationToken cancellationToken)
        {
            IEnumerable<Message> replies =
                await SendMessageWithReplyAsync(
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
        public async Task<IEnumerable<Message>> SendMessageWithReplyAsync(
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
                    List<Message> replies = (await tcs.Task).ToList();
                    const string logMsg =
                        "Received {ReplyCount} reply messages to {RequestId} " +
                        "from the {Peer}: {@ReplyMessages}.";
                    _logger.Debug(logMsg, replies.Count, reqId, peer, replies);

                    return replies;
                }
                else
                {
                    return new Message[0];
                }
            }
            catch (DifferentAppProtocolVersionException dapve)
            {
                const string logMsg =
                    "{PeerAddress} sent a reply to {RequestId} with " +
                    "a different app protocol version.";
                _logger.Error(dapve, logMsg, peer.Address, reqId);
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
                    "{FName}() timed out after {Timeout} while waiting for a reply to " +
                    "{MessageType} {RequestId} from {PeerAddress}.",
                    nameof(SendMessageWithReplyAsync),
                    timeout,
                    message.Type,
                    reqId,
                    peer.Address);
                throw;
            }
            catch (TaskCanceledException)
            {
                _logger.Debug(
                    "{FName}() was cancelled while waiting for a reply to " +
                    "{MessageType} {RequestId} from {PeerAddress}.",
                    nameof(SendMessageWithReplyAsync),
                    message.Type,
                    reqId,
                    peer.Address);
                throw;
            }
            catch (Exception e)
            {
                var msg =
                    $"{nameof(NetMQTransport)}.{nameof(SendMessageWithReplyAsync)}() encountered " +
                    "an unexpected exception during sending a request {MessageType} {RequestId} " +
                    "to {PeerAddress} and waiting a reply to it.";
                _logger.Error(e, msg, message.Type, reqId, peer.Address);
                throw;
            }
        }

        /// <inheritdoc/>
        public void BroadcastMessage(Address? except, Message message)
        {
            if (_disposed)
            {
                throw new ObjectDisposedException(nameof(NetMQTransport));
            }

            _broadcastQueue.Enqueue((except, message));
        }

        /// <inheritdoc/>
        public async Task ReplyMessageAsync(Message message, CancellationToken cancellationToken)
        {
            if (_disposed)
            {
                throw new ObjectDisposedException(nameof(NetMQTransport));
            }

            string identityHex = ByteUtil.Hex(message.Identity);
            TaskCompletionSource<object> tcs = new TaskCompletionSource<object>();
            using CancellationTokenRegistration ctr =
                cancellationToken.Register(() => tcs.TrySetCanceled());
            _replyCompletionSources.TryAdd(identityHex, tcs);
            _logger.Debug("Reply {Message} to {Identity}...", message, identityHex);
            _replyQueue.Enqueue(_messageCodec.Encode(
                message,
                _privateKey,
                AsPeer,
                DateTimeOffset.UtcNow,
                _appProtocolVersion));

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
                _logger.Debug("A message has parsed: {0}, from {1}", message, message.Remote);
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
                DifferentVersion differentVersion = new DifferentVersion()
                {
                    Identity = dapve.Identity,
                };
                _ = ReplyMessageAsync(differentVersion, _runtimeCancellationTokenSource.Token);
                _logger.Debug("Message from peer with different version received.");
            }
            catch (InvalidTimestampException ite)
            {
                const string logMsg =
                    "The received message is stale. " +
                    "(timestamp: {Timestamp}, lifespan: {Lifespan}, current: {Current})";
                _logger.Debug(logMsg, ite.CreatedOffset, ite.Lifespan, ite.CurrentOffset);
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

        private void DoBroadcast(object sender, NetMQQueueEventArgs<(Address?, Message)> e)
        {
            try
            {
                (Address? except, Message message) = e.Queue.Dequeue();

                // FIXME Should replace with PUB/SUB model.
                IReadOnlyList<BoundPeer> peers =
                    _table.PeersToBroadcast(except, _minimumBroadcastTarget);
                _logger.Debug(
                    "Broadcasting {MessageType} to {PeerCount} peers as {AsPeer}...",
                    message,
                    peers.Count,
                    AsPeer);

                List<Task> tasks = peers
                    .Select(peer =>
                        SendMessageAsync(peer, message, _runtimeCancellationTokenSource.Token))
                    .ToList();
                Task aggregateTask = Task
                    .WhenAll(tasks)
                    .ContinueWith(task =>
                        {
                            if (task.IsFaulted)
                            {
                                AggregateException aggregateException = task.Exception;
                                _logger.Warning(
                                    aggregateException,
                                    "Failed to send {Message} to some peers while broadcasting.",
                                    message);
                            }
                            else if (task.IsCanceled)
                            {
                                _logger.Debug(
                                    "{FName}() was canceled during its operation.",
                                    nameof(DoBroadcast));
                            }
                        });
            }
            catch (Exception exc)
            {
                _logger.Error(
                    exc,
                    "Unexpected error occurred during {FName}().",
                    nameof(DoBroadcast));
            }
        }

        private void DoReply(object sender, NetMQQueueEventArgs<NetMQMessage> e)
        {
            NetMQMessage message = e.Queue.Dequeue();
            string identityHex = ByteUtil.Hex(message[0].Buffer);

            _logger.Verbose("Dequeued message. ({identity})", identityHex);

            // FIXME The current timeout value(1 sec) is arbitrary.
            // We should make this configurable or fix it to an unneeded structure.
            if (_router.TrySendMultipartMessage(TimeSpan.FromSeconds(1), message))
            {
                _logger.Debug("A reply sent to {Identity}", identityHex);
            }
            else
            {
                _logger.Debug("Failed to reply to {Identity}", identityHex);
            }

            _replyCompletionSources.TryGetValue(identityHex, out TaskCompletionSource<object> tcs);
            tcs?.TrySetResult(null);
        }

        private async Task ProcessRequest(
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
                        nameof(ProcessRequest)
                    );
                    throw;
                }
                catch (Exception e)
                {
                    if (req.Retryable)
                    {
                        const int retryAfter = 100;
                        const string retryMsg =
                            "An unexpected exception occurred during {FName}(); " +
                            "retrying after {DelayMs}ms...";
                        _logger.Debug(
                            e,
                            retryMsg,
                            nameof(ProcessRequest),
                            retryAfter
                        );
                        Interlocked.Increment(ref _requestCount);
                        _requests.Writer.TryWrite(req.Retry());
                        await Task.Delay(retryAfter, cancellationToken);
                    }
                    else
                    {
                        _logger.Error("Failed to process request [{req}]; discard it.", req);
                    }
                }

#if NETCOREAPP3_0 || NETCOREAPP3_1 || NET
                _logger.Verbose(waitMsg);
#endif
            }
        }

        private async Task ProcessRequest(
            MessageRequest request, CancellationToken cancellationToken = default)
        {
            _logger.Debug(
                "Request {Message} {RequestId} is ready to be processed in {TimeSpan}.",
                request.Message,
                request.Id,
                DateTimeOffset.UtcNow - request.RequestedTime
            );

            bool disposableDealer = request.ExpectedResponses > 0;
            DealerSocket dealer = disposableDealer
                ? new DealerSocket(request.Peer.ToNetMQAddress())
                : _dealers.AddOrUpdate(
                    request.Peer.Address,
                    address => new DealerSocket(request.Peer.ToNetMQAddress()),
                    (address, dealerSocket) =>
                        {
                            if (dealerSocket.IsDisposed)
                            {
                                return new DealerSocket(request.Peer.ToNetMQAddress());
                            }
                            else if (
                                dealerSocket.Options.LastEndpoint != request.Peer.ToNetMQAddress())
                            {
                                dealerSocket.Dispose();
                                return new DealerSocket(request.Peer.ToNetMQAddress());
                            }
                            else
                            {
                                return dealerSocket;
                            }
                        });

            try
            {
                await ProcessRequest(request, dealer, cancellationToken);
            }
            finally
            {
                if (disposableDealer)
                {
                    dealer.Dispose();
                }
            }
        }

        /// <summary>
        /// Send and receive messages using a given <see cref="DealerSocket"/>.
        /// </summary>
        /// <param name="request">The <see cref="MessageRequest"/> to process.</param>
        /// <param name="dealer">The <see cref="DealerSocket"/> to use.</param>
        /// <param name="cancellationToken">A cancellation token used to propagate notification
        /// that this operation should be canceled.</param>
        /// <returns>An awaitable <see cref="Task"/> without a value.</returns>
        private async Task ProcessRequest(
            MessageRequest request,
            DealerSocket dealer,
            CancellationToken cancellationToken = default)
        {
            DateTimeOffset startedTime = DateTimeOffset.UtcNow;

            _logger.Debug(
                "Trying to send request {RequestId} to {Peer}...: {Message}.",
                request.Id,
                request.Peer,
                request.Message
            );
            NetMQMessage message = _messageCodec.Encode(
                request.Message,
                _privateKey,
                AsPeer,
                DateTimeOffset.UtcNow,
                _appProtocolVersion);
            List<Message> result = new List<Message>();
            TaskCompletionSource<IEnumerable<Message>> tcs = request.TaskCompletionSource;
            try
            {
                await dealer.SendMultipartMessageAsync(
                    message,
                    timeout: request.Timeout,
                    cancellationToken: cancellationToken
                );

                _logger.Debug(
                    "Request {Message} {RequestId} sent to {Peer}.",
                    request.Message,
                    request.Id,
                    request.Peer
                );

                foreach (int i in Enumerable.Range(0, request.ExpectedResponses))
                {
                    try
                    {
                        NetMQMessage raw = await dealer.ReceiveMultipartMessageAsync(
                            timeout: request.Timeout,
                            cancellationToken: cancellationToken);
                        _logger.Verbose(
                            "Received a raw message with {FrameCount} frames as a reply to " +
                            "request {RequestId} from {Peer}.",
                            raw.FrameCount,
                            request.Id,
                            request.Peer
                        );
                        Message reply = _messageCodec.Decode(
                            raw,
                            true,
                            AppProtocolVersionValidator
                        );
                        _logger.Debug(
                            "A reply to request {Message} {RequestId} has parsed: " +
                            "{Reply} from {Peer}.",
                            request.Message,
                            request.Id,
                            reply,
                            reply.Remote
                        );

                        result.Add(reply);
                    }
                    catch (TimeoutException)
                    {
                        if (request.ReturnWhenTimeout)
                        {
                            break;
                        }

                        throw;
                    }
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

            _logger.Debug(
                "Request {Message} {RequestId} processed in {TimeSpan}.",
                request.Message,
                request.Id,
                DateTimeOffset.UtcNow - startedTime);
        }

        /// <summary>
        /// Periodically checks if each <see cref="Address"/> used for a cached
        /// <see cref="DealerSocket"/> is still in the <see cref="RoutingTable"/> and removes
        /// and disposes the associated <see cref="DealerSocket"/> accordingly.
        /// </summary>
        /// <param name="period">The amount of time to wait before checking cached
        /// <see cref="DealerSocket"/>s again.</param>
        /// <param name="cancellationToken">A cancellation token used to propagate notification
        /// that this operation should be canceled.</param>
        /// <returns>An awaitable <see cref="Task"/> without a value.</returns>
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
                            _dealers.TryRemove(address, out DealerSocket removed))
                        {
                            removed.Dispose();
                        }
                    }
                }
                catch (OperationCanceledException oce)
                {
                    _logger.Warning(
                        oce,
                        "{FName}() was cancelled.",
                        nameof(DisposeUnusedDealerSockets));
                    throw;
                }
                catch (Exception e)
                {
                    _logger.Warning(
                        e,
                        "Unexpected exception occurred during {FName}().",
                        nameof(DisposeUnusedDealerSockets));
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
                        _logger.Error("TerminatingException occurred during poller.Run()");
                    }
                    catch (ObjectDisposedException)
                    {
                        _logger.Error(
                            "ObjectDisposedException occurred during poller.Run()"
                        );
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
            private readonly int _retried;

            public MessageRequest(
                in Guid id,
                Message message,
                BoundPeer peer,
                DateTimeOffset requestedTime,
                in TimeSpan? timeout,
                in int expectedResponses,
                bool returnWhenTimeout,
                TaskCompletionSource<IEnumerable<Message>> taskCompletionSource)
                : this(
                      id,
                      message,
                      peer,
                      requestedTime,
                      timeout,
                      expectedResponses,
                      returnWhenTimeout,
                      taskCompletionSource,
                      0)
            {
            }

            internal MessageRequest(
                in Guid id,
                Message message,
                BoundPeer peer,
                DateTimeOffset requestedTime,
                in TimeSpan? timeout,
                in int expectedResponses,
                bool returnWhenTimeout,
                TaskCompletionSource<IEnumerable<Message>> taskCompletionSource,
                int retried)
            {
                Id = id;
                Message = message;
                Peer = peer;
                RequestedTime = requestedTime;
                Timeout = timeout;
                ExpectedResponses = expectedResponses;
                ReturnWhenTimeout = returnWhenTimeout;
                TaskCompletionSource = taskCompletionSource;
                _retried = retried;
            }

            public Guid Id { get; }

            public Message Message { get; }

            public BoundPeer Peer { get; }

            public DateTimeOffset RequestedTime { get; }

            public TimeSpan? Timeout { get; }

            public int ExpectedResponses { get; }

            public bool ReturnWhenTimeout { get; }

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
                    ReturnWhenTimeout,
                    TaskCompletionSource,
                    _retried + 1
                );
            }
        }
    }
}
