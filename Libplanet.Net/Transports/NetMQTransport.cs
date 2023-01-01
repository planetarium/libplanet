#nullable disable
using System;
using System.Collections.Generic;
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
        private readonly string _host;
        private readonly IList<IceServer> _iceServers;
        private readonly ILogger _logger;
        private readonly AppProtocolVersionOptions _appProtocolVersionOptions;
        private readonly MessageValidator _messageValidator;
        private readonly NetMQMessageCodec _messageCodec;
        private readonly Channel<MessageRequest> _requests;
        private readonly Task _runtimeProcessor;

        private NetMQQueue<NetMQMessage> _replyQueue;

        private RouterSocket _router;
        private NetMQPoller _routerPoller;
        private int _listenPort;
        private TurnClient _turnClient;
        private DnsEndPoint _hostEndPoint;

        private CancellationTokenSource _runtimeCancellationTokenSource;
        private CancellationTokenSource _turnCancellationTokenSource;

        private TaskCompletionSource<object> _runningEvent;

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
        /// <param name="workers">The number of background workers (i.e., threads).</param>
        /// <param name="host">A hostname to be a part of a public endpoint, that peers use when
        /// they connect to this node.  Note that this is not a hostname to listen to;
        /// <see cref="NetMQTransport"/> always listens to 0.0.0.0 &amp; ::/0.</param>
        /// <param name="listenPort">A port number to listen to.</param>
        /// <param name="iceServers">
        /// <a href="https://en.wikipedia.org/wiki/Interactive_Connectivity_Establishment">ICE</a>
        /// servers to use for TURN/STUN.  Purposes to traverse NAT.</param>
        /// <param name="messageTimestampBuffer">The amount in <see cref="TimeSpan"/>
        /// that is allowed for the timestamp of a <see cref="Message"/> to differ from
        /// the current time of a local node.  Every <see cref="Message"/> with its timestamp
        /// differing greater than <paramref name="messageTimestampBuffer"/> will be ignored.
        /// If <see langword="null"/>, any timestamp is accepted.</param>
        /// <exception cref="ArgumentException">Thrown when both <paramref name="host"/> and
        /// <paramref name="iceServers"/> are <see langword="null"/>.</exception>
        private NetMQTransport(
            PrivateKey privateKey,
            AppProtocolVersionOptions appProtocolVersionOptions,
            int workers,
            string host,
            int? listenPort,
            IEnumerable<IceServer> iceServers,
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
            _host = host;
            _iceServers = iceServers?.ToList();
            _listenPort = listenPort ?? 0;
            _appProtocolVersionOptions = appProtocolVersionOptions;
            _messageValidator = new MessageValidator(
                _appProtocolVersionOptions, messageTimestampBuffer);
            _messageCodec = new NetMQMessageCodec();

            _requests = Channel.CreateUnbounded<MessageRequest>();
            _runtimeCancellationTokenSource = new CancellationTokenSource();
            _turnCancellationTokenSource = new CancellationTokenSource();
            _requestCount = 0;
            CancellationToken runtimeCt = _runtimeCancellationTokenSource.Token;
            _runtimeProcessor = Task.WhenAll(
                Enumerable.Range(0, Environment.ProcessorCount)
                    .Select(_ => Task.Factory.StartNew(
                        () =>
                        {
                            using var runtime = new NetMQRuntime();
                            runtime.Run(ProcessRuntime(runtimeCt));
                        },
                        runtimeCt,
                        TaskCreationOptions.DenyChildAttach | TaskCreationOptions.LongRunning,
                        TaskScheduler.Default))
                    .ToArray());

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

        /// <summary>
        /// Creates an initialized <see cref="NetMQTransport"/> instance.
        /// </summary>
        /// <param name="privateKey"><see cref="PrivateKey"/> of the transport layer.</param>
        /// <param name="appProtocolVersionOptions">The <see cref="AppProtocolVersionOptions"/>
        /// to use when handling an <see cref="AppProtocolVersion"/> attached to
        /// a <see cref="Message"/>.</param>
        /// <param name="workers">The number of background workers (i.e., threads).</param>
        /// <param name="host">A hostname to be a part of a public endpoint, that peers use when
        /// they connect to this node.  Note that this is not a hostname to listen to;
        /// <see cref="NetMQTransport"/> always listens to 0.0.0.0 &amp; ::/0.</param>
        /// <param name="listenPort">A port number to listen to.</param>
        /// <param name="iceServers">
        /// <a href="https://en.wikipedia.org/wiki/Interactive_Connectivity_Establishment">ICE</a>
        /// servers to use for TURN/STUN.  Purposes to traverse NAT.</param>
        /// <param name="messageTimestampBuffer">The amount in <see cref="TimeSpan"/>
        /// that is allowed for the timestamp of a <see cref="Message"/> to differ from
        /// the current time of a local node.  Every <see cref="Message"/> with its timestamp
        /// differing greater than <paramref name="messageTimestampBuffer"/> will be ignored.
        /// If <see langword="null"/>, any timestamp is accepted.</param>
        /// <exception cref="ArgumentException">Thrown when both <paramref name="host"/> and
        /// <paramref name="iceServers"/> are <see langword="null"/>.</exception>
        /// <returns>
        /// An awaitable <see cref="Task"/> returning a <see cref="NetMQTransport"/>
        /// when awaited that is ready to send request <see cref="Message"/>s and
        /// receive reply <see cref="Message"/>s.
        /// </returns>
        public static async Task<NetMQTransport> Create(
            PrivateKey privateKey,
            AppProtocolVersionOptions appProtocolVersionOptions,
            int workers,
            string host,
            int? listenPort,
            IEnumerable<IceServer> iceServers,
            TimeSpan? messageTimestampBuffer = null)
        {
            var transport = new NetMQTransport(
                privateKey,
                appProtocolVersionOptions,
                workers,
                host,
                listenPort,
                iceServers,
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

            _replyQueue = new NetMQQueue<NetMQMessage>();
            _routerPoller = new NetMQPoller { _router, _replyQueue };

            _router.ReceiveReady += ReceiveMessage;
            _replyQueue.ReceiveReady += DoReply;

            Task pollerTask = RunPoller(_routerPoller);

            Running = true;

            await pollerTask;
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
                Running = false;
            }
        }

        /// <inheritdoc/>
        public void Dispose()
        {
            if (!_disposed)
            {
                _requests.Writer.TryComplete();
                _runtimeCancellationTokenSource.Cancel();
                _turnCancellationTokenSource.Cancel();
                _runtimeProcessor.Wait();

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
            Channel<Message> channel = Channel.CreateUnbounded<Message>(
                new UnboundedChannelOptions
                {
                    SingleReader = true,
                    SingleWriter = true,
                }
            );

            try
            {
                DateTimeOffset now = DateTimeOffset.UtcNow;
                _logger.Verbose(
                    "Enqueue a request {RequestId} to {Peer}: {@Message}.",
                    reqId,
                    peer,
                    message
                );
                Interlocked.Increment(ref _requestCount);
                var req = new MessageRequest(
                    reqId,
                    message,
                    peer,
                    now,
                    expectedResponses,
                    channel,
                    linkedCt
                );
                await _requests.Writer.WriteAsync(
                    req,
                    linkedCt
                ).ConfigureAwait(false);
                _logger.Verbose(
                    "Enqueued a request {RequestId} to the peer {Peer}: {@Message}; " +
                    "{LeftRequests} left.",
                    reqId,
                    peer,
                    message,
                    Interlocked.Read(ref _requestCount)
                );

                foreach (var i in Enumerable.Range(0, expectedResponses))
                {
                    Message reply = await channel.Reader
                        .ReadAsync(linkedCt)
                        .ConfigureAwait(false);
                    replies.Add(reply);
                }

                const string dbgMsg =
                    "Received {ReplyMessageCount} reply messages to {RequestId} " +
                    "from {Peer}: {ReplyMessages}.";
                _logger.Debug(dbgMsg, replies.Count, reqId, peer, replies);

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
                    "{FName}() was cancelled while waiting for a reply to " +
                    "{Message} {RequestId} from {Peer}.";
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

            Task<Message>[] sendTasks = peers.AsParallel()
                .Select(peer => SendMessageAsync(
                    peer,
                    message,
                    TimeSpan.FromSeconds(1),
                    _runtimeCancellationTokenSource.Token
                )).ToArray();
            _logger.Debug(
                "Broadcasting message {Message} as {AsPeer} to {PeerCount} peers",
                message,
                AsPeer,
                sendTasks.Length
            );

            Task.WhenAll(sendTasks);
        }

        /// <inheritdoc/>
        public Task ReplyMessageAsync(Message message, CancellationToken cancellationToken)
        {
            if (_disposed)
            {
                throw new ObjectDisposedException(nameof(NetMQTransport));
            }

            string identityHex = ByteUtil.Hex(message.Identity);
            _logger.Debug("Reply {Message} to {Identity}...", message, identityHex);
            _replyQueue.Enqueue(
                _messageCodec.Encode(
                    message,
                    _privateKey,
                    _appProtocolVersionOptions.AppProtocolVersion,
                    AsPeer,
                    DateTimeOffset.UtcNow
                )
            );

            return Task.CompletedTask;
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
                _turnClient = await TurnClient.Create(_iceServers, cancellationToken);
                await _turnClient.StartAsync(_listenPort, cancellationToken);
                if (!_turnClient.BehindNAT)
                {
                    _hostEndPoint = new DnsEndPoint(
                        _turnClient.PublicAddress.ToString(), _listenPort);
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

                    if (_runtimeCancellationTokenSource.IsCancellationRequested)
                    {
                        return;
                    }

                    LastMessageTimestamp = DateTimeOffset.UtcNow;

                    Message message = _messageCodec.Decode(raw, false);
                    Task.Run(() =>
                    {
                        try
                        {
                            _logger
                                .ForContext("Tag", "Metric")
                                .ForContext("Subtag", "InboundMessageReport")
                                .Debug(
                                    "Received message {Message} from {Peer}.",
                                    message,
                                    message.Remote);
                            try
                            {
                                _messageValidator.ValidateTimestamp(message);
                                _messageValidator.ValidateAppProtocolVersion(message);

                                _ = ProcessMessageHandler.InvokeAsync(message);
                            }
                            catch (InvalidMessageTimestampException imte)
                            {
                                _logger.Debug(
                                    imte,
                                    "Received {Message} from {Peer} has an invalid timestamp.",
                                    message,
                                    message.Remote);
                            }
                            catch (DifferentAppProtocolVersionException dapve)
                            {
                                _logger.Debug(
                                    dapve,
                                    "Received {Message} from {Peer} has an invalid APV.",
                                    message,
                                    message.Remote);
                                var diffVersion = new DifferentVersionMsg()
                                {
                                    Identity = message.Identity,
                                };
                                _logger.Debug(
                                    "Replying to {Peer} with {Reply}.",
                                    diffVersion);
                                _ = ReplyMessageAsync(
                                    diffVersion,
                                    _runtimeCancellationTokenSource.Token
                                );
                            }
                        }
                        catch (InvalidMessageException ex)
                        {
                            _logger.Error(ex, "Could not parse NetMQMessage properly; ignore.");
                        }
                        catch (Exception exc)
                        {
                            _logger.Error(
                                exc,
                                "Something went wrong during message processing.");
                            throw;
                        }
                    });
                }
            }
            catch (Exception ex)
            {
                _logger.Error(
                    ex,
                    $"An unexpected exception occurred during " + nameof(ReceiveMessage) + "().");
            }
        }

        private void DoReply(object sender, NetMQQueueEventArgs<NetMQMessage> e)
        {
            NetMQMessage message = e.Queue.Dequeue();
            string identityHex = ByteUtil.Hex(message[0].Buffer);

            // FIXME The current timeout value(1 sec) is arbitrary.
            // We should make this configurable or fix it to an unneeded structure.
            if (_router.TrySendMultipartMessage(TimeSpan.FromSeconds(1), message))
            {
                _logger.Debug(
                    "{Message} as a reply to {Identity} sent.", message, identityHex);
            }
            else
            {
                _logger.Debug(
                    "Failed to send {Message} as a reply to {Identity}.", message, identityHex);
            }
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
                _logger.Debug("Request taken; {Count} requests left.", left);

                _ = ProcessRequest(req, req.CancellationToken);

#if NETCOREAPP3_0 || NETCOREAPP3_1 || NET
                _logger.Verbose(waitMsg);
#endif
            }
        }

        private DealerSocket GetRequestDealerSocket(MessageRequest request)
        {
            try
            {
                var dealer = new DealerSocket();
                dealer.Options.DisableTimeWait = true;
                _logger.Debug("Trying to connect {RequestId}.", request.Id);
                dealer.Connect(request.Peer.ToNetMQAddress());
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
            cancellationToken.ThrowIfCancellationRequested();

            DateTimeOffset startedTime = DateTimeOffset.UtcNow;
            _logger.Debug(
                "Request {Message} {RequestId} is ready to be processed in {TimeSpan}.",
                req.Message,
                req.Id,
                DateTimeOffset.UtcNow - req.RequestedTime);

            Channel<Message> channel = req.Channel;

            _logger.Debug(
                "Trying to send request {Message} {RequestId} to {Peer}",
                req.Message,
                req.Id,
                req.Peer
            );
            var result = new List<Message>();

            // Normal OperationCanceledException initiated from outside should bubble up.
            try
            {
                using var dealer = GetRequestDealerSocket(req);
                NetMQMessage message = _messageCodec.Encode(
                    req.Message,
                    _privateKey,
                    _appProtocolVersionOptions.AppProtocolVersion,
                    AsPeer,
                    DateTimeOffset.UtcNow);

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

                    throw new SendMessageFailException(
                        $"Failed to send {req.Message} to {req.Peer}.", req.Peer);
                }

                foreach (var i in Enumerable.Range(0, req.ExpectedResponses))
                {
                    NetMQMessage raw = await dealer.ReceiveMultipartMessageAsync(
                        cancellationToken: cancellationToken
                    );
                    _logger.Verbose(
                        "Received a raw message with {FrameCount} frames as a reply to " +
                        "request {RequestId} from {Peer}.",
                        raw.FrameCount,
                        req.Id,
                        req.Peer
                    );
                    Message reply = _messageCodec.Decode(raw, true);
                    _logger.Debug(
                        "A reply to request {Message} {RequestId} from {Peer} " +
                        "has parsed: {Reply}.",
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
                        const string dbgMsg =
                            "Received reply {Reply} from {Peer} to request {Message} " +
                            "{RequestId} has an invalid timestamp.";
                        _logger.Debug(
                            imte,
                            dbgMsg,
                            reply,
                            reply.Remote,
                            message,
                            req.Id);
                        throw;
                    }
                    catch (DifferentAppProtocolVersionException dapve)
                    {
                        const string dbgMsg =
                            "Received reply {Reply} from {Peer} to request {Message} " +
                            "{RequestId} has an invalid APV.";
                        _logger.Debug(
                            dapve,
                            dbgMsg,
                            reply,
                            reply.Remote,
                            message,
                            req.Id);
                        throw;
                    }

                    await channel.Writer.WriteAsync(reply, cancellationToken);
                }

                channel.Writer.Complete();
            }
            catch (Exception e)
            {
                _logger.Error(
                    e,
                    "Failed to process {Message} {RequestId}; discarding it.",
                    req.Message,
                    req.Id
                );
                channel.Writer.TryComplete(e);
            }
            finally
            {
                if (req.ExpectedResponses == 0)
                {
                    // FIXME: Temporary fix to wait for a message to be sent.
                    await Task.Delay(1000);
                }

                Interlocked.Decrement(ref _socketCount);

                _logger
                    .ForContext("Tag", "Metric")
                    .ForContext("Subtag", "OutboundMessageReport")
                    .Debug(
                        "Request {Message} {RequestId} " +
                        "processed in {DurationMs:F0}ms with {ReceivedCount} replies received " +
                        "out of {ExpectedCount} expected replies.",
                        req.Message,
                        req.Id,
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
                Message message,
                BoundPeer peer,
                DateTimeOffset requestedTime,
                in int expectedResponses,
                Channel<Message> channel,
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

            public Message Message { get; }

            public BoundPeer Peer { get; }

            public DateTimeOffset RequestedTime { get; }

            public int ExpectedResponses { get; }

            public Channel<Message> Channel { get; }

            public CancellationToken CancellationToken { get; }
        }
    }
}
