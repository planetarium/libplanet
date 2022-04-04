using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Sockets;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Crypto;
using Libplanet.Net.Messages;
using Libplanet.Stun;
using Nito.AsyncEx;
using Serilog;

namespace Libplanet.Net.Transports
{
    public class TcpTransport : ITransport
    {
        public static readonly byte[] MagicCookie = { 0x4c, 0x50 }; // 'L', 'P'

        private const int ListenerBacklog = 100;
        private const int MaxReplyStreams = 3000;

        // TODO: Should be configurable (ex. SwarmOptions.MaxTimeout)
        private static readonly TimeSpan ListenerLifetime = TimeSpan.FromMinutes(2);

        // TURN Permission lifetime was defined in RFC 5766
        // see also https://tools.ietf.org/html/rfc5766#section-8
        private static readonly TimeSpan TurnPermissionLifetime = TimeSpan.FromMinutes(5);

        private readonly PrivateKey _privateKey;
        private readonly AppProtocolVersion _appProtocolVersion;
        private readonly IImmutableSet<PublicKey>? _trustedAppProtocolVersionSigners;
        private readonly string? _host;
        private readonly DifferentAppProtocolVersionEncountered?
            _differentAppProtocolVersionEncountered;

        private readonly IList<IceServer>? _iceServers;
        private readonly ILogger _logger;
        private readonly TcpMessageCodec _messageCodec;

        private readonly ConcurrentDictionary<Guid, ReplyStream> _streams;

        private TaskCompletionSource<object> _runningEvent;
        private CancellationTokenSource _runtimeCancellationTokenSource;
        private CancellationTokenSource _turnCancellationTokenSource;

        private TcpListener _listener;
        private int _listenPort;
        private TurnClient? _turnClient;
        private DnsEndPoint? _hostEndPoint;

        private bool _disposed;

        public TcpTransport(
            PrivateKey privateKey,
            AppProtocolVersion appProtocolVersion,
            IImmutableSet<PublicKey> trustedAppProtocolVersionSigners,
            string? host,
            int? listenPort,
            IEnumerable<IceServer> iceServers,
            DifferentAppProtocolVersionEncountered? differentAppProtocolVersionEncountered,
            TimeSpan? messageTimestampBuffer = null)
        {
            _logger = Log
                .ForContext<TcpTransport>()
                .ForContext("Source", nameof(TcpTransport));

            if (host is null && !iceServers.Any())
            {
                throw new ArgumentException(
                    $"Swarm requires either {nameof(host)} or {nameof(iceServers)}.");
            }

            _runningEvent = null!;
            Running = false;

            _privateKey = privateKey;
            _appProtocolVersion = appProtocolVersion;
            _trustedAppProtocolVersionSigners = trustedAppProtocolVersionSigners;
            _host = host;
            _iceServers = iceServers.ToList();
            _differentAppProtocolVersionEncountered = differentAppProtocolVersionEncountered;
            _messageCodec = new TcpMessageCodec(
                _appProtocolVersion, _trustedAppProtocolVersionSigners, messageTimestampBuffer);
            _streams = new ConcurrentDictionary<Guid, ReplyStream>();
            _runtimeCancellationTokenSource = new CancellationTokenSource();
            _turnCancellationTokenSource = new CancellationTokenSource();
            _listenPort = listenPort ?? 0;
            _listener = new TcpListener(new IPEndPoint(IPAddress.Any, _listenPort));

            ProcessMessageHandler = new AsyncDelegate<Message>();
        }

        /// <inheritdoc cref="ITransport.ProcessMessageHandler"/>
        public AsyncDelegate<Message> ProcessMessageHandler { get; }

        /// <inheritdoc cref="ITransport.AsPeer"/>
        public Peer AsPeer => EndPoint is null
            ? new Peer(_privateKey.PublicKey, PublicIPAddress)
            : new BoundPeer(_privateKey.PublicKey, EndPoint, PublicIPAddress);

        /// <inheritdoc cref="ITransport.Running"/>
        public DateTimeOffset? LastMessageTimestamp { get; private set; }

        public bool Running
        {
            get => _runningEvent?.Task.Status == TaskStatus.RanToCompletion;

            private set
            {
                if (value)
                {
                    _runningEvent?.TrySetResult(null!);
                }
                else
                {
                    _runningEvent = new TaskCompletionSource<object>();
                }
            }
        }

        internal IPAddress? PublicIPAddress => _turnClient?.PublicAddress;

        internal DnsEndPoint? EndPoint => _turnClient?.EndPoint ?? _hostEndPoint;

        /// <inheritdoc cref="ITransport.StartAsync"/>
        public async Task StartAsync(CancellationToken cancellationToken = default)
        {
            if (_disposed)
            {
                throw new ObjectDisposedException(nameof(TcpTransport));
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

            List<Task> tasks = new List<Task>();

            tasks.Add(ReceiveMessageAsync(_runtimeCancellationTokenSource.Token));
            tasks.Add(ProcessRuntime(_runtimeCancellationTokenSource.Token));

            Running = true;
            _logger.Debug("Started to run. TurnClient: {Client}", _turnClient);

            await await Task.WhenAny(tasks);
        }

        public async Task StopAsync(TimeSpan waitFor, CancellationToken cancellationToken = default)
        {
            if (_disposed)
            {
                throw new ObjectDisposedException(nameof(TcpTransport));
            }

            if (Running)
            {
                await Task.Delay(waitFor, cancellationToken);
                _listener.Stop();
                _runtimeCancellationTokenSource.Cancel();
                _turnCancellationTokenSource.Cancel();
                await StopAllStreamsAsync();
                Running = false;
            }
        }

        public void Dispose()
        {
            if (!_disposed)
            {
                _listener.Stop();
                _runtimeCancellationTokenSource.Cancel();
                _turnCancellationTokenSource.Cancel();

                _runtimeCancellationTokenSource.Dispose();
                _turnCancellationTokenSource.Dispose();
                StopAllStreamsAsync().Wait();
                Running = false;
                _disposed = true;
            }
        }

        /// <inheritdoc cref="ITransport.WaitForRunningAsync"/>
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
            CancellationToken cancellationToken = default)
        {
            if (_disposed)
            {
                throw new ObjectDisposedException(nameof(TcpTransport));
            }

            if (expectedResponses < 0)
            {
                throw new ArgumentOutOfRangeException(nameof(expectedResponses));
            }

            Guid reqId;
            if (message.Identity is null)
            {
                reqId = Guid.NewGuid();
                message.Identity = reqId.ToByteArray();
            }
            else
            {
                reqId = new Guid(message.Identity);
            }

            _logger.Verbose(
                "Start to request {RequestId} to {Peer}: {Message}. (expected responses: {Count})",
                reqId,
                peer,
                message,
                expectedResponses
            );

            using CancellationTokenSource linkedTokenSource =
                CancellationTokenSource.CreateLinkedTokenSource(
                    cancellationToken,
                    _runtimeCancellationTokenSource.Token);
            var client = new TcpClient { LingerState = new LingerOption(true, 1) };
            try
            {
                await client.ConnectAsync(peer.EndPoint.Host, peer.EndPoint.Port);
                _logger.Verbose(
                    "SendMessageAsync client: {EndPoint}",
                    (IPEndPoint)client.Client.LocalEndPoint);
                client.ReceiveTimeout = timeout?.Milliseconds ?? 0;
                await WriteMessageAsync(message, client, linkedTokenSource.Token);
                _logger.Verbose(
                    "Successfully sent request {RequestId} to {Peer}: {Message}.",
                    reqId,
                    peer,
                    message
                );

                var replies = new List<Message>();
                using var timeoutCts = new CancellationTokenSource();
                if (expectedResponses != 0 && !(timeout is null))
                {
                    timeoutCts.CancelAfter(
                        (int)timeout.Value.TotalMilliseconds * expectedResponses);
                }

                using CancellationTokenSource timeoutTokenSource =
                    CancellationTokenSource.CreateLinkedTokenSource(
                        timeoutCts.Token,
                        linkedTokenSource.Token);
                while (expectedResponses > 0)
                {
                    try
                    {
                        Message received = await ReadMessageAsync(
                            client,
                            timeoutTokenSource.Token);
                        _logger.Verbose(
                            "Received message was {Message}. Total: {Count}",
                            received,
                            replies.Count);
                        replies.Add(received);
                        expectedResponses--;
                    }
                    catch (TaskCanceledException)
                    {
                        if (timeoutCts.IsCancellationRequested)
                        {
                            var msg =
                                $"{nameof(SendMessageAsync)}() timed out after " +
                                "{Timeout} of waiting a reply to {MessageType} ({RequestId}) " +
                                "from {PeerAddress}.";
                            _logger.Debug(
                                msg,
                                timeout,
                                message.GetType().Name,
                                reqId,
                                peer.Address);
                            if (returnWhenTimeout)
                            {
                                break;
                            }

                            throw new TimeoutException();
                        }

                        throw;
                    }
                }

                if (replies.Any())
                {
                    const string logMsg =
                        "Received {ReplyMessageCount} reply messages to {RequestId} " +
                        "from the {Peer}: {ReplyMessages}.";
                    _logger.Debug(logMsg, replies.Count, reqId, peer, replies);
                }

                return replies;
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
            catch (ArgumentException e)
            {
                // This exception is thrown on .NET framework when the given peer is invalid.
                _logger.Error(
                    e,
                    "ArgumentException occurred during {FName} to {RequestId}.",
                    nameof(SendMessageAsync),
                    reqId);

                // To match with previous implementation, throws TimeoutException when it failed to
                // find peer to send message.
                throw new TimeoutException($"Cannot find peer {peer}.", e);
            }
            catch (SocketException e)
            {
                // This exception is thrown on .NET core when the given peer is invalid.
                _logger.Error(
                    e,
                    "SocketException occurred during {FName} to {Peer}.",
                    nameof(SendMessageAsync),
                    peer);

                // To match with previous implementation, throws TimeoutException when it failed to
                // find peer to send message.
                throw new TimeoutException($"Cannot find peer {peer}.", e);
            }
            catch (InvalidMagicCookieException e)
            {
                _logger.Verbose(
                    "Magic cookie mismatch, ignored. (Expected: {Expected}, Actual: {Actual})",
                    e.Expected,
                    e.Actual);
                throw;
            }
            finally
            {
                _ = Task.Run(
                    async () =>
                    {
                        try
                        {
                            // Wait 15 seconds to close client to receive ACK from TURN.
                            await Task.Delay(15 * 1000, _runtimeCancellationTokenSource.Token);
                        }
                        finally
                        {
                            client.Dispose();
                        }
                    },
                    _runtimeCancellationTokenSource.Token);
            }
        }

        public void BroadcastMessage(IEnumerable<BoundPeer> peers, Message message)
        {
            if (_disposed)
            {
                throw new ObjectDisposedException(nameof(TcpTransport));
            }

            peers.AsParallel().ForAll(
                peer => Task.Run(() => SendMessageAsync(
                    peer,
                    message,
                    TimeSpan.FromSeconds(1),
                    _runtimeCancellationTokenSource.Token)));
        }

        public async Task ReplyMessageAsync(Message message, CancellationToken cancellationToken)
        {
            if (_disposed)
            {
                throw new ObjectDisposedException(nameof(TcpTransport));
            }

            if (message.Identity is null)
            {
                throw new ArgumentException(
                    "Message format is invalid. Reply must have identity.",
                    nameof(message));
            }

            var id = new Guid(message.Identity);
            using CancellationTokenSource linkedTokenSource =
                CancellationTokenSource.CreateLinkedTokenSource(
                    cancellationToken,
                    _runtimeCancellationTokenSource.Token);
            _logger.Verbose("Trying to reply message. ID: {Id}", id);
            if (_streams.TryGetValue(id, out ReplyStream stream))
            {
                _logger.Verbose("Send reply message {Message}", message);
                try
                {
                    _logger.Verbose("Start to writing reply {Message}.", message);
                    using var @lock = stream.Lock.Lock();
                    await WriteMessageAsync(message, stream.Client, linkedTokenSource.Token);
                }
                catch (IOException)
                {
                    _logger.Error(
                        "Failed to reply message {Message} with {Id}. Connection is lost",
                        message,
                        id);
                    _ = TryRemoveStreamAsync(id, _runtimeCancellationTokenSource.Token);
                }
            }
            else
            {
                _logger.Error(
                    "Failed to reply message {Message} with {Id}. Corresponding stream is removed.",
                    message,
                    id);
            }
        }

        internal async Task Initialize(CancellationToken cancellationToken = default)
        {
            _listener.Start(ListenerBacklog);
            _listenPort = ((IPEndPoint)_listener.LocalEndpoint).Port;

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

        internal async Task WriteMessageAsync(
            Message message,
            TcpClient client,
            CancellationToken cancellationToken)
        {
            if (cancellationToken.IsCancellationRequested)
            {
                throw new TaskCanceledException();
            }

            byte[] serialized = _messageCodec.Encode(
                message,
                _privateKey,
                AsPeer,
                DateTimeOffset.UtcNow);
            int length = serialized.Length;
            var buffer = new byte[MagicCookie.Length + sizeof(int) + length];
            MagicCookie.CopyTo(buffer, 0);
            BitConverter.GetBytes(length).CopyTo(buffer, MagicCookie.Length);
            serialized.CopyTo(buffer, MagicCookie.Length + sizeof(int));
            NetworkStream stream = client.GetStream();

            // NOTE: Stream is forced to be closed because NetStream.WriteAsync()'s
            // cancellation token never works in .NET Framework.
            using (cancellationToken.Register(() => stream.Close()))
            {
                try
                {
                    await stream.WriteAsync(buffer, 0, buffer.Length, default);
                }
                catch (Exception)
                {
                    if (cancellationToken.IsCancellationRequested)
                    {
                        throw new TaskCanceledException();
                    }

                    throw;
                }
            }
        }

        internal async Task<Message> ReadMessageAsync(
            TcpClient client,
            CancellationToken cancellationToken)
        {
            if (cancellationToken.IsCancellationRequested)
            {
                throw new TaskCanceledException();
            }

            var content = new List<byte>();
            byte[] buffer = new byte[1000];
            NetworkStream stream = client.GetStream();

            // NOTE: Stream is forced to be closed because NetStream.ReadAsync()'s
            // cancellation token never works in .NET Framework.
            using (cancellationToken.Register(() => stream.Close()))
            {
                try
                {
                    // May read shorter than MagicCookie's length just by network condition
                    int bytesRead = await stream.ReadAsync(buffer, 0, MagicCookie.Length, default);
                    if (bytesRead < MagicCookie.Length ||
                        !buffer.Take(MagicCookie.Length).SequenceEqual(MagicCookie))
                    {
                        throw new InvalidMagicCookieException(MagicCookie, buffer.Take(bytesRead));
                    }

                    await stream.ReadAsync(buffer, 0, sizeof(int), default);
                    int bytesLeft = BitConverter.ToInt32(buffer.Take(sizeof(int)).ToArray(), 0);

                    while (bytesLeft != 0)
                    {
                        bytesRead = await stream.ReadAsync(
                            buffer,
                            0,
                            bytesLeft < buffer.Length ? bytesLeft : buffer.Length,
                            default);
                        content.AddRange(buffer.Take(bytesRead));
                        bytesLeft -= bytesRead;
                    }
                }
                catch (InvalidMagicCookieException)
                {
                    if (cancellationToken.IsCancellationRequested)
                    {
                        throw new TaskCanceledException();
                    }

                    throw;
                }
                catch (Exception e)
                {
                    if (cancellationToken.IsCancellationRequested)
                    {
                        throw new TaskCanceledException();
                    }

                    _logger.Error(
                        e,
                        "Error occurred during {FName}().",
                        nameof(ReadMessageAsync));
                    throw;
                }
            }

            _logger.Verbose("Received {Bytes} bytes from network stream.", content.Count);

            Message message = _messageCodec.Decode(
                content.ToArray(),
                false,
                AppProtocolVersionValidator,
                _differentAppProtocolVersionEncountered);

            _logger.Verbose(
                "ReadMessageAsync success. Received message {Message} from network stream.",
                message);
            return message;
        }

        private void AppProtocolVersionValidator(
            byte[] identity,
            Peer remotePeer,
            AppProtocolVersion remoteVersion)
        {
            if (remoteVersion.Equals(_appProtocolVersion))
            {
                return;
            }

            bool trusted = !(
                _trustedAppProtocolVersionSigners is { } tapvs &&
                tapvs.All(publicKey => !remoteVersion.Verify(publicKey)));
            if (trusted && _differentAppProtocolVersionEncountered is { } dapve)
            {
                dapve(remotePeer, remoteVersion, _appProtocolVersion);
            }

            throw new DifferentAppProtocolVersionException(
                "The version of the received message is not valid.",
                identity,
                _appProtocolVersion,
                remoteVersion,
                trusted);
        }

        private async Task ReceiveMessageAsync(CancellationToken cancellationToken)
        {
            while (!cancellationToken.IsCancellationRequested)
            {
                try
                {
                    TcpClient client = await _listener.AcceptTcpClientAsync();
                    client.LingerState = new LingerOption(true, 1);
                    _logger.Verbose(
                        "Connected to tcp client {Address}.",
                        (IPEndPoint)client.Client.RemoteEndPoint);
                    Guid guid = Guid.NewGuid();
                    _logger.Verbose("Start to accept message of {Id}.", guid);

                    // TODO: Maximum message processor should be limited.
                    _ = AcceptAsync(client, cancellationToken)
                        .ContinueWith<Task>(
                            async t =>
                            {
                                _logger.Verbose("Ended to accept message of {Id}.", guid);
                                try
                                {
                                    // Wait 15 seconds to close client to receive ACK from TURN.
                                    await Task.Delay(
                                        15 * 1000,
                                        _runtimeCancellationTokenSource.Token);
                                }
                                finally
                                {
                                    client.Close();
                                }
                            },
                            cancellationToken);
                }
                catch (ObjectDisposedException)
                {
                    _logger.Warning("TCPListener is disposed.");
                    break;
                }
            }
        }

        private async Task AcceptAsync(
            TcpClient client,
            CancellationToken cancellationToken)
        {
            try
            {
                _logger.Verbose("Trying to receive message");
                Message message = await ReadMessageAsync(client, cancellationToken);
                LastMessageTimestamp = DateTimeOffset.UtcNow;
                _logger.Debug(
                    "A message has parsed: {Message}, from {Remove}",
                    message,
                    message.Remote);

                if (message.Identity is null)
                {
                    throw new InvalidMessageException(
                        "Identity of the message cannot be null.",
                        message);
                }

                var id = new Guid(message.Identity);
                await TryAddStreamAsync(id, client, cancellationToken);
                await ProcessMessageHandler.InvokeAsync(message);
            }
            catch (DifferentAppProtocolVersionException dapve)
            {
                _logger.Debug("Message from peer with different version received.");
                var differentVersion = new DifferentVersion
                {
                    Identity = dapve.Identity,
                };

                await WriteMessageAsync(differentVersion, client, cancellationToken);
            }
            catch (IOException)
            {
                _logger.Verbose("Connection is lost.");
            }
            catch (InvalidMagicCookieException e)
            {
                _logger.Verbose(
                    "Magic cookie mismatch, ignored. (Expected: {Expected}, Actual: {Actual})",
                    e.Expected,
                    e.Actual);
            }
            catch (Exception e)
            {
                _logger.Error(
                    e,
                    "Unexpected exception occurred during {FName}().",
                    nameof(AcceptAsync));
                throw;
            }
        }

        private async Task ProcessRuntime(CancellationToken cancellationToken)
        {
            while (!cancellationToken.IsCancellationRequested)
            {
                foreach (KeyValuePair<Guid, ReplyStream> pair in _streams)
                {
                    // FIXME: This lifetime related disposing logic can be tested?
                    if (pair.Value.SpawnAt + ListenerLifetime < DateTimeOffset.UtcNow)
                    {
                        _ = TryRemoveStreamAsync(pair.Key, cancellationToken);
                    }
                }

                await Task.Delay(100, cancellationToken);
            }
        }

        private async Task TryAddStreamAsync(
            Guid id,
            TcpClient client,
            CancellationToken cancellationToken)
        {
            while (_streams.Count > MaxReplyStreams && !cancellationToken.IsCancellationRequested)
            {
                await Task.Delay(100, cancellationToken);
            }

            _streams.TryAdd(id, new ReplyStream(client, DateTimeOffset.UtcNow));
            _logger.Verbose("Added stream to the collection. {Id}", id);
        }

        private async Task TryRemoveStreamAsync(Guid id, CancellationToken cancellationToken)
        {
            if (!_streams.TryRemove(id, out ReplyStream stream))
            {
                return;
            }

            using var @lock = await stream.Lock.LockAsync(cancellationToken);
            try
            {
                stream.Client.Close();
                stream.Client.Dispose();
            }
            catch (ObjectDisposedException)
            {
            }

            _logger.Verbose("Removed stream from the collection. {Id}", id);
        }

        private async Task StopAllStreamsAsync()
        {
            var tasks = new List<Task>();
            foreach (Guid id in _streams.Keys)
            {
                tasks.Add(TryRemoveStreamAsync(id, default));
            }

            await Task.WhenAll(tasks);
        }

        private struct ReplyStream
        {
            public ReplyStream(TcpClient client, DateTimeOffset spawnAt)
            {
                Client = client;
                SpawnAt = spawnAt;
                Lock = new AsyncLock();
            }

            public DateTimeOffset SpawnAt { get; }

            public TcpClient Client { get; }

            public AsyncLock Lock { get; }
        }
    }
}
