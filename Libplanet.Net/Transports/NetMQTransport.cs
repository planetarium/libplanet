#nullable disable
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
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
    /// Implementation of <see cref="ITransport"/> interface using NetMQ.
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
        private readonly Task _runtimeProcessor;
        private readonly AsyncManualResetEvent _runningEvent;

        private NetMQQueue<(AsyncManualResetEvent, NetMQMessage)> _replyQueue;

        private RouterSocket _router;
        private NetMQPoller _routerPoller;
        private TurnClient _turnClient;
        private DnsEndPoint _hostEndPoint;

        private CancellationTokenSource _runtimeCancellationTokenSource;
        private CancellationTokenSource _turnCancellationTokenSource;

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

            _socketCount = 0;
            _privateKey = privateKey;
            _hostOptions = hostOptions;
            _appProtocolVersionOptions = appProtocolVersionOptions;
            _messageValidator = new MessageValidator(
                _appProtocolVersionOptions, messageTimestampBuffer);
            _messageCodec = new NetMQMessageCodec();

            _requests = Channel.CreateUnbounded<MessageRequest>();
            _runtimeCancellationTokenSource = new CancellationTokenSource();
            _turnCancellationTokenSource = new CancellationTokenSource();
            _requestCount = 0;
            CancellationToken runtimeCt = _runtimeCancellationTokenSource.Token;
            _runtimeProcessor = Task.Factory.StartNew(
                () =>
                {
                    // Ignore NetMQ related exceptions during NetMQRuntime.Dispose() to stabilize
                    // tests
                    try
                    {
                        using var runtime = new NetMQRuntime();
                        runtime.Run(ProcessRuntime(runtimeCt));
                    }
                    catch (Exception e)
                        when (e is NetMQException || e is ObjectDisposedException)
                    {
                        _logger.Error(
                            e,
                            "An exception has occurred while running {TaskName}",
                            nameof(_runtimeProcessor));
                    }
                },
                runtimeCt,
                TaskCreationOptions.DenyChildAttach | TaskCreationOptions.LongRunning,
                TaskScheduler.Default
            );

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

        /// <inheritdoc/>
        public AppProtocolVersion AppProtocolVersion =>
            _appProtocolVersionOptions.AppProtocolVersion;

        /// <inheritdoc/>
        public IImmutableSet<PublicKey> TrustedAppProtocolVersionSigners =>
            _appProtocolVersionOptions.TrustedAppProtocolVersionSigners;

        /// <inheritdoc/>
        public DifferentAppProtocolVersionEncountered DifferentAppProtocolVersionEncountered =>
            _appProtocolVersionOptions.DifferentAppProtocolVersionEncountered;

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

            _runtimeCancellationTokenSource =
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

            await pollerTask.ConfigureAwait(false);
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

                _replyQueue.ReceiveReady -= DoReply;
                _router.ReceiveReady -= ReceiveMessage;

                if (_routerPoller.IsRunning)
                {
                    _routerPoller.Dispose();
                }

                _replyQueue.Dispose();

                _runtimeCancellationTokenSource.Cancel();
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
                _runtimeCancellationTokenSource.Cancel();
                _turnCancellationTokenSource.Cancel();
                _runtimeProcessor.WaitWithoutException();

                _runtimeCancellationTokenSource.Dispose();
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

            using var timerCts = new CancellationTokenSource();
            if (timeout is { } timeoutNotNull)
            {
                timerCts.CancelAfter(timeoutNotNull);
            }

            using CancellationTokenSource linkedCts =
                CancellationTokenSource.CreateLinkedTokenSource(
                    _runtimeCancellationTokenSource.Token,
                    cancellationToken,
                    timerCts.Token
                );
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
                var req = new MessageRequest(
                    reqId,
                    rawMessage,
                    peer,
                    now,
                    expectedResponses,
                    channel,
                    linkedCt);
                Interlocked.Increment(ref _requestCount);
                await _requests.Writer.WriteAsync(
                    req,
                    linkedCt).ConfigureAwait(false);
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

                    _logger.Information(
                        "Received {Reply} as a reply to request {Message} {RequestId} from {Peer}",
                        reply,
                        message,
                        req.Id,
                        reply.Remote);
                    try
                    {
                        _messageValidator.ValidateTimestamp(reply);
                        _messageValidator.ValidateAppProtocolVersion(reply);
                    }
                    catch (InvalidMessageTimestampException imte)
                    {
                        const string imteMsge =
                            "Received reply {Reply} from {Peer} to request {Message} " +
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
                            "Received reply {Reply} from {Peer} to request {Message} " +
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

                _logger.Information(
                    "Received {ReplyMessageCount} reply messages to {RequestId} " +
                    "from {Peer}: {ReplyMessages}",
                    replies.Count,
                    reqId,
                    peer,
                    replies);
                return replies;
            }
            catch (OperationCanceledException oce) when (timerCts.IsCancellationRequested)
            {
                if (returnWhenTimeout)
                {
                    return replies;
                }

                throw WrapCommunicationFailException(
                    new TimeoutException(
                        $"The operation was canceled due to timeout {timeout!.ToString()}.",
                        oce
                    ),
                    peer,
                    message,
                    reqId
                );
            }
            catch (OperationCanceledException oce2)
            {
                const string dbgMsg =
                    "{MethodName}() was cancelled while waiting for a reply to " +
                    "{Message} {RequestId} from {Peer}";
                _logger.Debug(
                    oce2, dbgMsg, nameof(SendMessageAsync), message, reqId, peer);

                // Wrapping to match the previous behavior of `SendMessageAsync()`.
                throw new TaskCanceledException(dbgMsg, oce2);
            }
            catch (ChannelClosedException ce)
            {
                throw WrapCommunicationFailException(ce.InnerException, peer, message, reqId);
            }
            catch (Exception e)
            {
                const string errMsg =
                    "{MethodName}() encountered an unexpected exception while waiting for " +
                    "a reply to {Message} {RequestId} from {Peer}";
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

            CancellationToken ct = _runtimeCancellationTokenSource.Token;
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
                "Broadcasting message {Message} as {AsPeer} to {PeerCount} peers",
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

            string reqId = !(message.Identity is null) && message.Identity.Length == 16 ?
                new Guid(message.Identity).ToString() : "unknown";
            _logger.Debug("Reply {Message} to {Identity}...", message, reqId);

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

        /// <summary>
        /// Initializes a <see cref="NetMQTransport"/> as to make it ready to
        /// send request <see cref="Message"/>s and recieve reply <see cref="Message"/>s.
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
                        "A raw message [frame count: {0}] has received",
                        raw.FrameCount
                    );

                    if (_runtimeCancellationTokenSource.IsCancellationRequested)
                    {
                        return;
                    }

                    LastMessageTimestamp = DateTimeOffset.UtcNow;

                    // Duplicate received message before distributing.
                    var copied = new NetMQMessage(raw.Select(f => f.Duplicate()));

                    Task.Factory.StartNew(
                        async () =>
                        {
                            try
                            {
                                Message message = _messageCodec.Decode(copied, false);
                                string reqId = copied[0].Buffer.Length == 16 ?
                                    new Guid(copied[0].ToByteArray()).ToString() : "unknown";
                                _logger
                                    .ForContext("Tag", "Metric")
                                    .ForContext("Subtag", "InboundMessageReport")
                                    .Information(
                                        "Received Request {RequestId} {Message} from {Peer}",
                                        reqId,
                                        message,
                                        message.Remote);
                                try
                                {
                                    _messageValidator.ValidateTimestamp(message);
                                    _messageValidator.ValidateAppProtocolVersion(message);
                                    await ProcessMessageHandler.InvokeAsync(message);
                                }
                                catch (InvalidMessageTimestampException imte)
                                {
                                    const string logMsg =
                                        "Received {RequestId} {Message} from " +
                                        "{Peer} has an invalid timestamp";
                                    _logger.Debug(
                                        imte,
                                        logMsg,
                                        reqId,
                                        message,
                                        message.Remote);
                                }
                                catch (DifferentAppProtocolVersionException dapve)
                                {
                                    const string logMsg =
                                        "Received Request {RequestId} {Message} " +
                                        "from {Peer} has an invalid APV";
                                    _logger.Debug(
                                        dapve,
                                        logMsg,
                                        reqId,
                                        message,
                                        message.Remote);
                                    var diffVersion = new DifferentVersionMsg()
                                    {
                                        Identity = message.Identity,
                                    };
                                    _logger.Debug(
                                        "Replying to Request {RequestId} {Peer} with {Reply}",
                                        reqId,
                                        message.Remote,
                                        diffVersion);
                                    await ReplyMessageAsync(
                                        diffVersion,
                                        _runtimeCancellationTokenSource.Token
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
                        },
                        CancellationToken.None,
                        TaskCreationOptions.HideScheduler | TaskCreationOptions.DenyChildAttach,
                        TaskScheduler.Default
                    ).Unwrap();
                }
            }
            catch (Exception ex)
            {
                _logger.Error(
                    ex,
                    "An unexpected exception occurred during {MethodName}()",
                    nameof(ReceiveMessage));
            }
        }

        private void DoReply(
            object sender,
            NetMQQueueEventArgs<(AsyncManualResetEvent, NetMQMessage)> e
        )
        {
            (AsyncManualResetEvent ev, NetMQMessage message) = e.Queue.Dequeue();
            string reqId = message[0].Buffer.Length == 16 ?
                new Guid(message[0].ToByteArray()).ToString() : "unknown";
            string messageType = _messageCodec.ParseMessageType(message, false).ToString();

            // FIXME The current timeout value(1 sec) is arbitrary.
            // We should make this configurable or fix it to an unneeded structure.
            if (_router.TrySendMultipartMessage(TimeSpan.FromSeconds(1), message))
            {
                _logger.Debug(
                    "{Message} as a reply to {Identity} sent", messageType, reqId);
            }
            else
            {
                _logger.Debug(
                    "Failed to send {Message} as a reply to {Identity}", messageType, reqId);
            }

            ev.Set();
        }

        private async Task ProcessRuntime(CancellationToken cancellationToken)
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
                _logger.Information("Request taken; {Count} requests left", left);

                _ = SynchronizationContext.Current.PostAsync(
                    () => ProcessRequest(req, req.CancellationToken)
                );

#if NETCOREAPP3_0 || NETCOREAPP3_1 || NET
                _logger.Verbose(waitMsg);
#endif
            }
        }

        private async Task ProcessRequest(MessageRequest req, CancellationToken cancellationToken)
        {
            string messageType = _messageCodec.ParseMessageType(req.Message, true).ToString();

            DateTimeOffset startedTime = DateTimeOffset.UtcNow;
            _logger.Debug(
                "Request {Message} {RequestId} is ready to be processed in {TimeSpan}",
                messageType,
                req.Id,
                DateTimeOffset.UtcNow - req.RequestedTime);

            Channel<NetMQMessage> channel = req.Channel;

            _logger.Debug(
                "Trying to send request {Message} {RequestId} to {Peer}",
                messageType,
                req.Id,
                req.Peer
            );
            int receivedCount = 0;
            long? incrementedSocketCount = null;

            // Normal OperationCanceledException initiated from outside should bubble up.
            try
            {
                cancellationToken.ThrowIfCancellationRequested();

                using var dealer = new DealerSocket();
                dealer.Options.DisableTimeWait = true;
                dealer.Options.Identity = req.Id.ToByteArray();
                try
                {
                    _logger.Debug("Trying to connect {RequestId}", req.Id);
                    dealer.Connect(await req.Peer.ResolveNetMQAddressAsync());
                    incrementedSocketCount = Interlocked.Increment(ref _socketCount);
                    _logger
                        .ForContext("Tag", "Metric")
                        .ForContext("Subtag", "SocketCount")
                        .Debug(
                            "{SocketCount} sockets open for processing request " +
                            "{Message} {RequestId}",
                            incrementedSocketCount,
                            messageType,
                            req.Id);
                }
                catch (NetMQException nme)
                {
                    const string logMsg =
                        "{SocketCount} sockets open for processing requests; " +
                        "failed to create an additional socket for request {Message} {RequestId}";
                    _logger
                        .ForContext("Tag", "Metric")
                        .ForContext("Subtag", "SocketCount")
                        .Debug(
                            nme,
                            logMsg,
                            Interlocked.Read(ref _socketCount),
                            messageType,
                            req.Id);
                    throw;
                }

                if (dealer.TrySendMultipartMessage(req.Message))
                {
                    _logger.Debug(
                        "Request {RequestId} {Message} sent to {Peer}",
                        req.Id,
                        messageType,
                        req.Peer);
                }
                else
                {
                    _logger.Debug(
                        "Failed to send {RequestId} {Message} to {Peer}",
                        req.Id,
                        messageType,
                        req.Peer);

                    throw new SendMessageFailException(
                        $"Failed to send {messageType} to {req.Peer}.",
                        req.Peer);
                }

                foreach (var i in Enumerable.Range(0, req.ExpectedResponses))
                {
                    NetMQMessage raw = await dealer.ReceiveMultipartMessageAsync(
                        cancellationToken: cancellationToken
                    );

                    _logger.Verbose(
                        "Received a raw message with {FrameCount} frames as a reply to " +
                        "request {RequestId} from {Peer}",
                        raw.FrameCount,
                        req.Id,
                        req.Peer
                    );
                    await channel.Writer.WriteAsync(raw, cancellationToken);
                    receivedCount += 1;
                }

                channel.Writer.Complete();
            }
            catch (Exception e)
            {
                _logger.Error(
                    e,
                    "Failed to process {RequestId} {Message}; discarding it",
                    messageType,
                    req.Id);
                channel.Writer.TryComplete(e);
            }
            finally
            {
                if (req.ExpectedResponses == 0)
                {
                    // FIXME: Temporary fix to wait for a message to be sent.
                    await Task.Delay(1000);
                }

                if (incrementedSocketCount is { })
                {
                    Interlocked.Decrement(ref _socketCount);
                }

                _logger
                    .ForContext("Tag", "Metric")
                    .ForContext("Subtag", "OutboundMessageReport")
                    .Information(
                        "Request {RequestId} {Message} " +
                        "processed in {DurationMs:F0}ms with {ReceivedCount} replies received " +
                        "out of {ExpectedCount} expected replies",
                        req.Id,
                        messageType,
                        (DateTimeOffset.UtcNow - startedTime).TotalMilliseconds,
                        receivedCount,
                        req.ExpectedResponses);
            }
        }

        private async Task RunPoller(NetMQPoller poller)
        {
            TaskCreationOptions taskCreationOptions =
                TaskCreationOptions.DenyChildAttach |
                TaskCreationOptions.LongRunning |
                TaskCreationOptions.HideScheduler;
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
                            e, "An unexpected exception ocurred during poller.Run()");
                    }
                },
                CancellationToken.None,
                taskCreationOptions,
                TaskScheduler.Default
            );
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
                CancellationToken cancellationToken)
            {
                Id = id;
                Message = message;
                Peer = peer;
                RequestedTime = requestedTime;
                ExpectedResponses = expectedResponses;
                Channel = channel;
                CancellationToken = cancellationToken;
            }

            public Guid Id { get; }

            public NetMQMessage Message { get; }

            public BoundPeer Peer { get; }

            public DateTimeOffset RequestedTime { get; }

            public int ExpectedResponses { get; }

            public Channel<NetMQMessage> Channel { get; }

            public CancellationToken CancellationToken { get; }
        }
    }
}
