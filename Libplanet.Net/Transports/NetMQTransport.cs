#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading;
using System.Threading.Channels;
using System.Threading.Tasks;
using AsyncIO;
using Dasync.Collections;
using Libplanet.Crypto;
using Libplanet.Net.Messages;
using Libplanet.Stun;
using NetMQ;
using NetMQ.Sockets;
using Nito.AsyncEx;
using Nito.AsyncEx.Synchronous;
using Serilog;

namespace Libplanet.Net.Transports
{
    /// <summary>
    /// Implementation of <see cref="ITransport"/> interface using NetMQ. When the
    /// <see cref="NetMQTransport"/> is created, it starts a ambient request processor. This will
    /// allow to send a message to a peer without having to <see cref="StartAsync"/>
    /// (e.g., Preload). The ambient request processor will be stopped only if when the
    /// <see cref="NetMQTransport"/> is disposed.
    /// </summary>
    public class NetMQTransport : ITransport
    {
        private readonly PrivateKey _privateKey;
        private readonly ILogger _logger;
        private readonly AppProtocolVersionOptions _appProtocolVersionOptions;
        private readonly HostOptions _hostOptions;
        private readonly MessageValidator _messageValidator;
        private readonly NetMQMessageCodec _messageCodec;
        private readonly Channel<MessageRequest> _requests;
        private readonly AsyncManualResetEvent _runningEvent;
        private readonly Task _consumerTask;
        private readonly CancellationTokenSource _consumerCancellationTokenSource;

        // This ensures creating a task concurrently and scheduling ProcessRequest() to avoid
        // allocating a socket more than MaxSocketSize.
        private readonly LimitedConcurrencyLevelTaskScheduler _taskScheduler;

        private NetMQQueue<(AsyncManualResetEvent, NetMQMessage)> _replyQueue;

        private RouterSocket _router;
        private NetMQPoller _routerPoller;
        private TurnClient _turnClient;
        private DnsEndPoint _hostEndPoint;

        private CancellationTokenSource _turnCancellationTokenSource;
        private CancellationTokenSource _requestCancellationTokenSource;

        // Used only for logging.
        private long _requestCount;
        private long _socketCount;
        private bool _disposed = false;

        static NetMQTransport()
        {
            NetMQConfig.ThreadPoolSize = 3;
            ForceDotNet.Force();
        }

        /// <summary>
        /// Creates a <see cref="NetMQTransport"/> instance.
        /// </summary>
        /// <param name="privateKey"><see cref="PrivateKey"/> of the transport layer.</param>
        /// <param name="appProtocolVersionOptions">The <see cref="AppProtocolVersionOptions"/>
        /// to use when handling an <see cref="AppProtocolVersion"/> attached to
        /// a <see cref="Message"/>.</param>
        /// <param name="hostOptions">The <see cref="HostOptions"/> to use when binding
        /// to the network.</param>
        /// <param name="messageTimestampBuffer">The amount in <see cref="TimeSpan"/>
        /// that is allowed for the timestamp of a <see cref="Message"/> to differ from
        /// the current time of a local node.  Every <see cref="Message"/> with its timestamp
        /// differing greater than <paramref name="messageTimestampBuffer"/> will be ignored.
        /// If <see langword="null"/>, any timestamp is accepted.</param>
        private NetMQTransport(
            PrivateKey privateKey,
            AppProtocolVersionOptions appProtocolVersionOptions,
            HostOptions hostOptions,
            TimeSpan? messageTimestampBuffer = null)
        {
            _logger = Log
                .ForContext<NetMQTransport>()
                .ForContext("Source", nameof(NetMQTransport));

            // ProcessRequest task + Poller task, This can be interpreted as the maximum number of
            // requests that can be processed concurrently.
            _taskScheduler = new LimitedConcurrencyLevelTaskScheduler(NetMQConfig.MaxSockets + 1);
            _logger.Verbose("Task Scheduler Id : {TaskSchedulerId}", _taskScheduler.Id);

            _socketCount = 0;
            _privateKey = privateKey;
            _hostOptions = hostOptions;
            _appProtocolVersionOptions = appProtocolVersionOptions;
            _messageValidator = new MessageValidator(
                _appProtocolVersionOptions, messageTimestampBuffer);
            _messageCodec = new NetMQMessageCodec();

            _requests = Channel.CreateUnbounded<MessageRequest>();
            _turnCancellationTokenSource = new CancellationTokenSource();
            _requestCancellationTokenSource = new CancellationTokenSource();
            _consumerCancellationTokenSource = new CancellationTokenSource();
            _requestCount = 0;
            _consumerTask = Task.Run(
                () => ConsumeRequestAsync(_consumerCancellationTokenSource.Token));

            _runningEvent = new AsyncManualResetEvent();
            ProcessMessageHandler = new AsyncDelegate<Message>();
        }

        /// <inheritdoc/>
        public AsyncDelegate<Message> ProcessMessageHandler { get; }

        /// <inheritdoc/>
        public BoundPeer AsPeer => _turnClient is TurnClient turnClient
            ? new BoundPeer(_privateKey.PublicKey, turnClient.EndPoint, turnClient.PublicAddress)
            : new BoundPeer(_privateKey.PublicKey, _hostEndPoint);

        /// <inheritdoc/>
        public DateTimeOffset? LastMessageTimestamp { get; private set; }

        /// <inheritdoc/>
        public bool Running => _routerPoller?.IsRunning ?? false;

        /// <summary>
        /// Creates an initialized <see cref="NetMQTransport"/> instance.
        /// </summary>
        /// <param name="privateKey"><see cref="PrivateKey"/> of the transport layer.</param>
        /// <param name="appProtocolVersionOptions">The <see cref="AppProtocolVersionOptions"/>
        /// to use when handling an <see cref="AppProtocolVersion"/> attached to
        /// a <see cref="Message"/>.</param>
        /// <param name="hostOptions">The <see cref="HostOptions"/> to use when binding
        /// to the network.</param>
        /// <param name="messageTimestampBuffer">The amount in <see cref="TimeSpan"/>
        /// that is allowed for the timestamp of a <see cref="Message"/> to differ from
        /// the current time of a local node.  Every <see cref="Message"/> with its timestamp
        /// differing greater than <paramref name="messageTimestampBuffer"/> will be ignored.
        /// If <see langword="null"/>, any timestamp is accepted.</param>
        /// <returns>
        /// An awaitable <see cref="Task"/> returning a <see cref="NetMQTransport"/>
        /// when awaited that is ready to send request <see cref="Message"/>s and
        /// receive reply <see cref="Message"/>s.
        /// </returns>
        public static async Task<NetMQTransport> Create(
            PrivateKey privateKey,
            AppProtocolVersionOptions appProtocolVersionOptions,
            HostOptions hostOptions,
            TimeSpan? messageTimestampBuffer = null)
        {
            var transport = new NetMQTransport(
                privateKey,
                appProtocolVersionOptions,
                hostOptions,
                messageTimestampBuffer);
            await transport.Initialize();
            return transport;
        }

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

            _requestCancellationTokenSource =
                CancellationTokenSource.CreateLinkedTokenSource(cancellationToken);
            _turnCancellationTokenSource =
                CancellationTokenSource.CreateLinkedTokenSource(cancellationToken);

            _replyQueue = new NetMQQueue<(AsyncManualResetEvent, NetMQMessage)>();
            _routerPoller = new NetMQPoller { _router, _replyQueue };

            _router.ReceiveReady += ReceiveMessage;
            _replyQueue.ReceiveReady += DoReply;

            Task pollerTask = RunPoller(_routerPoller);
            new Task(async () =>
            {
                while (!_routerPoller.IsRunning)
                {
                    await Task.Yield();
                }

                _runningEvent.Set();
            }).Start(_routerPoller);

            await Task.WhenAny(_consumerTask, pollerTask).ConfigureAwait(false);
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

                _requestCancellationTokenSource.Cancel();
                _replyQueue.ReceiveReady -= DoReply;
                _router.ReceiveReady -= ReceiveMessage;

                if (_routerPoller.IsRunning)
                {
                    _routerPoller.Dispose();
                }

                _replyQueue.Dispose();
                _runningEvent.Reset();
            }
        }

        /// <inheritdoc/>
        public void Dispose()
        {
            if (Running)
            {
                StopAsync(TimeSpan.Zero).WaitWithoutException();
            }

            if (!_disposed)
            {
                _requests.Writer.TryComplete();
                _requestCancellationTokenSource.Cancel();
                _consumerCancellationTokenSource.Cancel();
                _consumerTask.WaitWithoutException();
                _consumerTask.Dispose();
                _turnCancellationTokenSource.Cancel();

                _requestCancellationTokenSource.Dispose();
                _turnCancellationTokenSource.Dispose();

                if (_router is { } router && !router.IsDisposed)
                {
                    // We omitted _router.Unbind() with intention due to hangs.
                    // See also: https://github.com/planetarium/libplanet/pull/2311
                    _router.Dispose();
                    _turnClient?.Dispose();
                }

                _disposed = true;
            }
        }

        /// <inheritdoc/>
        public Task WaitForRunningAsync() => _runningEvent.WaitAsync();

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
                    cancellationToken).ConfigureAwait(false);
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

            using CancellationTokenSource linkedCts =
                CancellationTokenSource.CreateLinkedTokenSource(
                    _requestCancellationTokenSource.Token,
                    cancellationToken);
            CancellationToken linkedCt = linkedCts.Token;

            Guid reqId = Guid.NewGuid();
            var replies = new List<Message>();

            Channel<NetMQMessage> channel = Channel.CreateUnbounded<NetMQMessage>();

            try
            {
                DateTimeOffset now = DateTimeOffset.UtcNow;
                NetMQMessage rawMessage = _messageCodec.Encode(
                    message,
                    _privateKey,
                    _appProtocolVersionOptions.AppProtocolVersion,
                    AsPeer,
                    DateTimeOffset.UtcNow
                );
                _logger.Verbose(
                    "Enqueue a request {RequestId} to {Peer}: {@Message}",
                    reqId,
                    peer,
                    message
                );
                Interlocked.Increment(ref _requestCount);
                var req = new MessageRequest(
                    reqId,
                    rawMessage,
                    peer,
                    now,
                    expectedResponses,
                    channel,
                    timeout ?? TimeSpan.FromSeconds(1),
                    linkedCt
                );
                await _requests.Writer.WriteAsync(
                    req,
                    linkedCt
                ).ConfigureAwait(false);
                _logger.Verbose(
                    "Enqueued a request {RequestId} to the peer {Peer}: {@Message}; " +
                    "{LeftRequests} left",
                    reqId,
                    peer,
                    message,
                    Interlocked.Read(ref _requestCount)
                );

                foreach (var i in Enumerable.Range(0, expectedResponses))
                {
                    NetMQMessage raw = await channel.Reader
                        .ReadAsync(linkedCt)
                        .ConfigureAwait(false);
                    Message reply = _messageCodec.Decode(raw, true);

                    _logger.Debug(
                        "A reply to request {@Message} {RequestId} from {Peer} " +
                        "has parsed: {@Reply}",
                        req.Message,
                        req.Id,
                        reply.Remote,
                        reply);
                    try
                    {
                        _messageValidator.ValidateTimestamp(reply);
                        _messageValidator.ValidateAppProtocolVersion(reply);
                    }
                    catch (InvalidMessageTimestampException imte)
                    {
                        const string imteMsge =
                            "Received reply {@Reply} from {Peer} to request {@Message} " +
                            "{RequestId} has an invalid timestamp";
                        _logger.Debug(
                            imte,
                            imteMsge,
                            reply,
                            reply.Remote,
                            message,
                            req.Id);
                        channel.Writer.Complete(imte);
                    }
                    catch (DifferentAppProtocolVersionException dapve)
                    {
                        const string dapveMsg =
                            "Received reply {@Reply} from {Peer} to request {@Message} " +
                            "{RequestId} has an invalid APV";
                        _logger.Debug(
                            dapve,
                            dapveMsg,
                            reply,
                            reply.Remote,
                            message,
                            req.Id);
                        channel.Writer.Complete(dapve);
                    }

                    replies.Add(reply);
                }

                const string dbgMsg =
                    "Received {ReplyMessageCount} reply messages to {RequestId} " +
                    "from {Peer}: {ReplyMessages}";
                _logger.Debug(dbgMsg, replies.Count, reqId, peer, replies);

                return replies;
            }
            catch (OperationCanceledException oce)
            {
                string dbgMsg =
                    $"{nameof(SendMessageAsync)} was cancelled while waiting for a reply to " +
                    $"{message} {reqId} from {peer}";
                _logger.Debug(oce, dbgMsg);

                // Wrapping to match the previous behavior of `SendMessageAsync()`.
                throw new TaskCanceledException(dbgMsg, oce);
            }
            catch (ChannelClosedException ce)
            {
                if (returnWhenTimeout)
                {
                    return replies;
                }

                throw WrapCommunicationFailException(ce.InnerException, peer, message, reqId);
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
            finally
            {
                channel.Writer.TryComplete();
            }
        }

        /// <inheritdoc/>
        public void BroadcastMessage(IEnumerable<BoundPeer> peers, Message message)
        {
            if (_disposed)
            {
                throw new ObjectDisposedException(nameof(NetMQTransport));
            }

            CancellationToken ct = _requestCancellationTokenSource.Token;
            List<BoundPeer> boundPeers = peers.ToList();
            Task.Run(
                async () =>
                {
                    await boundPeers.ParallelForEachAsync(
                        peer => SendMessageAsync(peer, message, TimeSpan.FromSeconds(1), ct),
                        ct
                    );
                },
                ct
            );

            _logger.Debug(
                "Broadcasting message {@Message} as {AsPeer} to {PeerCount} peers",
                message,
                AsPeer,
                boundPeers.Count
            );
        }

        /// <inheritdoc/>
        public async Task ReplyMessageAsync(Message message, CancellationToken cancellationToken)
        {
            if (_disposed)
            {
                throw new ObjectDisposedException(nameof(NetMQTransport));
            }

            string identityHex = ByteUtil.Hex(message.Identity);
            _logger.Debug("Reply {@Message} to {Identity}...", message, identityHex);

            var ev = new AsyncManualResetEvent();
            _replyQueue.Enqueue(
                (
                    ev,
                    _messageCodec.Encode(
                        message,
                        _privateKey,
                        _appProtocolVersionOptions.AppProtocolVersion,
                        AsPeer,
                        DateTimeOffset.UtcNow
                    )
                )
            );

            await ev.WaitAsync(cancellationToken);
        }

        private static Task SendNetMQMessageAsync(
            IOutgoingSocket socket,
            NetMQMessage message,
            TimeSpan timeout,
            CancellationToken cancellationToken) =>
            Task.Factory.StartNew(
                () =>
                {
                    if (!socket.TrySendMultipartMessage(timeout, message))
                    {
                        throw new TimeoutException(
                            $"Timeout occurred during receiving a message from {socket}.");
                    }

                    return Task.CompletedTask;
                },
                cancellationToken,
                TaskCreationOptions.HideScheduler | TaskCreationOptions.DenyChildAttach,
                TaskScheduler.Default);

        private static Task<NetMQMessage> ReceiveNetMQMessageAsync(
            IReceivingSocket socket,
            TimeSpan timeout,
            CancellationToken cancellationToken) =>
            Task.Factory.StartNew(
                () =>
                {
                    NetMQMessage message = new NetMQMessage();

                    if (!socket.TryReceiveMultipartMessage(timeout, ref message))
                    {
                        throw new TimeoutException(
                            $"Timeout occurred during receiving a message from {socket}.");
                    }

                    return message;
                },
                cancellationToken,
                TaskCreationOptions.HideScheduler | TaskCreationOptions.DenyChildAttach,
                TaskScheduler.Default);

        /// <summary>
        /// Initializes a <see cref="NetMQTransport"/> as to make it ready to
        /// send request <see cref="Message"/>s and receives reply <see cref="Message"/>s.
        /// </summary>
        /// <param name="cancellationToken">The cancellation token to propagate a notification
        /// that this operation should be canceled.</param>
        /// <returns>An awaitable <see cref="Task"/> without value.</returns>
        private async Task Initialize(CancellationToken cancellationToken = default)
        {
            _router = new RouterSocket();
            _router.Options.RouterHandover = true;
            int listenPort = 0;

            if (_hostOptions.Port == 0)
            {
                listenPort = _router.BindRandomPort("tcp://*");
            }
            else
            {
                listenPort = _hostOptions.Port;
                _router.Bind($"tcp://*:{listenPort}");
            }

            _logger.Information("Listening on {Port}...", listenPort);

            if (_hostOptions.Host is { } host)
            {
                _hostEndPoint = new DnsEndPoint(host, listenPort);
            }
            else
            {
                _turnClient = await TurnClient.Create(_hostOptions.IceServers, cancellationToken);
                await _turnClient.StartAsync(listenPort, cancellationToken);
                if (!_turnClient.BehindNAT)
                {
                    _hostEndPoint = new DnsEndPoint(
                        _turnClient.PublicAddress.ToString(), listenPort);
                }
            }
        }

        private void ReceiveMessage(object sender, NetMQSocketEventArgs e)
        {
            try
            {
                var raw = new NetMQMessage();

                // execution limit to avoid starvation.
                for (var i = 0; i < 1_000; i++)
                {
                    if (!e.Socket.TryReceiveMultipartMessage(TimeSpan.Zero, ref raw))
                    {
                        break;
                    }

                    _logger.Verbose(
                        "A raw message [frame count: {0}] has received.",
                        raw.FrameCount
                    );

                    if (_requestCancellationTokenSource.IsCancellationRequested)
                    {
                        return;
                    }

                    LastMessageTimestamp = DateTimeOffset.UtcNow;

                    // Duplicate received message before distributing.
                    var copied = new NetMQMessage(raw.Select(f => f.Duplicate()));

                    Task.Factory.StartNew(
                        () => PostProcessMessage(copied),
                        _requestCancellationTokenSource.Token,
                        TaskCreationOptions.DenyChildAttach,
                        _taskScheduler);
                }
            }
            catch (Exception ex)
            {
                _logger.Error(
                    ex,
                    "An unexpected exception occurred during {FName}()",
                    nameof(ReceiveMessage));
            }
        }

        private async Task PostProcessMessage(NetMQMessage copied)
        {
            try
            {
                Message message = _messageCodec.Decode(copied, false);
                _logger
                    .ForContext("Tag", "Metric")
                    .ForContext("Subtag", "InboundMessageReport")
                    .Debug("Received message {@Message} from {Peer}", message, message.Remote);
                try
                {
                    _messageValidator.ValidateTimestamp(message);
                    _messageValidator.ValidateAppProtocolVersion(message);
                    await ProcessMessageHandler.InvokeAsync(message);
                }
                catch (InvalidMessageTimestampException imte)
                {
                    _logger.Debug(
                        imte,
                        "Received {@Message} from {Peer} has an invalid timestamp",
                        message,
                        message.Remote);
                }
                catch (DifferentAppProtocolVersionException dapve)
                {
                    _logger.Debug(
                        dapve,
                        "Received {@Message} from {Peer} has an invalid APV",
                        message,
                        message.Remote);
                    var diffVersion = new DifferentVersionMsg()
                    {
                        Identity = message.Identity,
                    };
                    _logger.Debug(
                        "Replying to {Peer} with {@Reply}",
                        message.Remote,
                        diffVersion);
                    await ReplyMessageAsync(
                        diffVersion,
                        _requestCancellationTokenSource.Token
                    );
                }
            }
            catch (InvalidMessageException ex)
            {
                _logger.Error(ex, "Could not parse NetMQMessage properly; ignore");
            }
            catch (Exception exc)
            {
                _logger.Error(
                    exc,
                    "Something went wrong during message processing");
            }
        }

        private void DoReply(
            object sender,
            NetMQQueueEventArgs<(AsyncManualResetEvent, NetMQMessage)> e
        )
        {
            (AsyncManualResetEvent ev, NetMQMessage message) = e.Queue.Dequeue();
            string identityHex = ByteUtil.Hex(message[0].Buffer);

            // FIXME The current timeout value(1 sec) is arbitrary.
            // We should make this configurable or fix it to an unneeded structure.
            if (_router.TrySendMultipartMessage(TimeSpan.FromSeconds(1), message))
            {
                _logger.Debug(
                    "{@Message} as a reply to {Identity} sent", message, identityHex);
            }
            else
            {
                _logger.Debug(
                    "Failed to send {@Message} as a reply to {Identity}", message, identityHex);
            }

            ev.Set();
        }

        private async Task ConsumeRequestAsync(CancellationToken cancellationToken)
        {
            const string waitMsg = "Waiting for a new request...";
            ChannelReader<MessageRequest> reader = _requests.Reader;
#if NETCOREAPP3_0 || NETCOREAPP3_1 || NET
            _logger.Verbose(waitMsg);
            await foreach (MessageRequest req in reader.ReadAllAsync(cancellationToken))
            {
#else
            while (true)
            {
                cancellationToken.ThrowIfCancellationRequested();
                _logger.Verbose(waitMsg);
                MessageRequest req = await reader.ReadAsync(cancellationToken);
#endif
                long left = Interlocked.Decrement(ref _requestCount);
                _logger.Debug("Request taken; {Count} requests left", left);

                _ = Task.Factory.StartNew(
                    () => ProcessRequest(req, req.CancellationToken),
                    req.CancellationToken,
                    TaskCreationOptions.DenyChildAttach | TaskCreationOptions.PreferFairness,
                    _taskScheduler);

#if NETCOREAPP3_0 || NETCOREAPP3_1 || NET
                _logger.Verbose(waitMsg);
#endif
            }
        }

        private async Task ProcessRequest(MessageRequest req, CancellationToken cancellationToken)
        {
            DateTimeOffset startedTime = DateTimeOffset.UtcNow;
            _logger.Debug(
                "Request {RequestId} is ready to be processed in {TimeSpan}",
                req.Id,
                DateTimeOffset.UtcNow - req.RequestedTime);

            Channel<NetMQMessage> channel = req.Channel;

            var linkedCts = CancellationTokenSource.CreateLinkedTokenSource(
                cancellationToken,
                _requestCancellationTokenSource.Token);
            CancellationToken linkedCt = linkedCts.Token;

            _logger.Debug(
                "Trying to send request {RequestId} to {Peer}",
                req.Id,
                req.Peer
            );
            int receivedCount = 0;
            long? incrementedSocketCount = null;

            // Normal OperationCanceledException initiated from outside should bubble up.
            try
            {
                linkedCt.ThrowIfCancellationRequested();

                using var dealer = new DealerSocket();
                dealer.Options.DisableTimeWait = true;
                try
                {
                    _logger.Debug("Trying to connect {RequestId}", req.Id);
                    dealer.Connect(req.Peer.ToNetMQAddress());
                    incrementedSocketCount = Interlocked.Increment(ref _socketCount);
                    _logger
                        .ForContext("Tag", "Metric")
                        .ForContext("Subtag", "SocketCount")
                        .Debug(
                        "{SocketCount} sockets open for processing request {@Message} {RequestId}",
                        incrementedSocketCount,
                        req.Message,
                        req.Id);
                }
                catch (NetMQException nme)
                {
                    const string logMsg =
                        "{SocketCount} sockets open for processing requests; " +
                        "failed to create an additional socket for request {@Message} {RequestId}";
                    _logger
                        .ForContext("Tag", "Metric")
                        .ForContext("Subtag", "SocketCount")
                        .Debug(
                        nme,
                        logMsg,
                        Interlocked.Read(ref _socketCount),
                        req.Message,
                        req.Id);
                    throw;
                }

                await SendNetMQMessageAsync(dealer, req.Message, req.Timeout, linkedCt);

                _logger.Debug(
                    "Request {@RequestId} sent to {Peer}",
                    req.Id,
                    req.Peer);

                foreach (var i in Enumerable.Range(0, req.ExpectedResponses))
                {
                    NetMQMessage raw =
                        await ReceiveNetMQMessageAsync(dealer, req.Timeout, linkedCt);

                    _logger.Verbose(
                        "Received a raw message with {FrameCount} frames as a reply to " +
                        "request {RequestId} from {Peer}",
                        raw.FrameCount,
                        req.Id,
                        req.Peer);

                    await channel.Writer.WriteAsync(raw, linkedCt);
                    receivedCount += 1;
                }

                if (req.ExpectedResponses == 0)
                {
                    _logger.Warning(
                        "Expecting no response; completing channel for request {RequestId}",
                        req.Id);
                }

                // FIXME: If expectedResponse 0 is given, then completing channel in
                // SendMessageAsync() competing with here.
                channel.Writer.TryComplete();
            }
            catch (Exception e)
            {
                _logger.Error(
                    e,
                    "Failed to process {RequestId}; discarding it. {Exception}",
                    req.Id,
                    e
                );
                channel.Writer.TryComplete(e);
            }
            finally
            {
                if (incrementedSocketCount is { })
                {
                    Interlocked.Decrement(ref _socketCount);
                }

                _logger
                    .ForContext("Tag", "Metric")
                    .ForContext("Subtag", "OutboundMessageReport")
                    .Debug(
                        "Request {RequestId} " +
                        "processed in {DurationMs:F0}ms with {ReceivedCount} replies received " +
                        "out of {ExpectedCount} expected replies",
                        req.Id,
                        (DateTimeOffset.UtcNow - startedTime).TotalMilliseconds,
                        receivedCount,
                        req.ExpectedResponses);
            }
        }

        private async Task RunPoller(NetMQPoller poller)
        {
            TaskCreationOptions taskCreationOptions =
                TaskCreationOptions.DenyChildAttach |
                TaskCreationOptions.LongRunning;
            await Task.Factory.StartNew(
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
                            e,
                            "An unexpected exception occurred during poller.Run()");
                    }
                },
                CancellationToken.None,
                taskCreationOptions,
                _taskScheduler);
        }

        private CommunicationFailException WrapCommunicationFailException(
            Exception innerException,
            BoundPeer peer,
            Message message,
            Guid reqId
        )
        {
            const string errMsg =
                "Failed to send and receive replies from {Peer} for request " +
                "{Message} {RequestId}.";
            _logger.Error(innerException, errMsg, peer, message, reqId);
            return new CommunicationFailException(
                $"Failed to send and receive replies from {peer} for request {message}.",
                message.Type,
                peer,
                innerException
            );
        }

        private readonly struct MessageRequest
        {
            public MessageRequest(
                in Guid id,
                NetMQMessage message,
                BoundPeer peer,
                DateTimeOffset requestedTime,
                in int expectedResponses,
                Channel<NetMQMessage> channel,
                TimeSpan timeout,
                CancellationToken cancellationToken)
            {
                Id = id;
                Message = message;
                Peer = peer;
                RequestedTime = requestedTime;
                ExpectedResponses = expectedResponses;
                Channel = channel;
                Timeout = timeout;
                CancellationToken = cancellationToken;
            }

            public Guid Id { get; }

            public NetMQMessage Message { get; }

            public BoundPeer Peer { get; }

            public DateTimeOffset RequestedTime { get; }

            public int ExpectedResponses { get; }

            public Channel<NetMQMessage> Channel { get; }

            public TimeSpan Timeout { get; }

            public CancellationToken CancellationToken { get; }
        }
    }
}
