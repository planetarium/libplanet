using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Sockets;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Stun.Messages;
using Nito.AsyncEx;
using Serilog;

namespace Libplanet.Stun
{
    public class TurnClient : IStunContext, IDisposable
    {
        public const int TurnDefaultPort = 3478;
        private const int ConnectableProbeLength = 2;
        private const int AllocateRetry = 5;
        private const int ProxyCount = 16;

        // TURN Permission lifetime was defined in RFC 5766
        // see also https://tools.ietf.org/html/rfc5766#section-8
        private static readonly TimeSpan TurnAllocationLifetime = TimeSpan.FromSeconds(777);
        private readonly string _host;
        private readonly int _port;
        private readonly IList<TcpClient> _relayedClients;
        private readonly IDictionary<byte[], TaskCompletionSource<StunMessage>>
            _responses;

        private readonly AsyncProducerConsumerQueue<ConnectionAttempt> _connectionAttempts;
        private readonly ILogger _logger;

        private TcpClient? _control;
        private Task _processMessage = Task.CompletedTask;
        private CancellationTokenSource _turnTaskCts;
        private List<Task> _turnTasks = new List<Task>();
        private IPAddress? _publicAddress;
        private DnsEndPoint? _endPoint;

        internal TurnClient(
            string host,
            string username,
            string password,
            int port = TurnDefaultPort)
        {
            _host = host;
            _port = port;
            Username = username;
            Password = password;

            _relayedClients = new List<TcpClient>();
            _connectionAttempts =
                new AsyncProducerConsumerQueue<ConnectionAttempt>();
            _responses =
                new ConcurrentDictionary<byte[], TaskCompletionSource<StunMessage>>(
                    new ByteArrayComparer());

            _turnTaskCts = new CancellationTokenSource();
            _logger = Log.ForContext<TurnClient>();
        }

        public string Username { get; }

        public string Password { get; }

        public string Realm { get; private set; } = string.Empty;

        public byte[] Nonce { get; private set; } = System.Array.Empty<byte>();

        public IPAddress PublicAddress => _publicAddress ??
            throw new InvalidOperationException($"{nameof(TurnClient)} has not been initialized.");

        public DnsEndPoint EndPoint => _endPoint ??
            throw new InvalidOperationException($"{nameof(TurnClient)} has not been initialized.");

        public bool BehindNAT { get; private set; }

        /// <summary>
        /// Creates a <see cref="TurnClient"/> that is connectable to one of
        /// the <see cref="IceServer"/>s given.
        /// </summary>
        /// <remarks>
        /// This is a blocking operation with a non-negligible amount of execution time as
        /// each <see cref="IceServer"/> in <paramref name="iceServers"/> is checked over
        /// the network to see if it can be connected to.
        /// </remarks>
        /// <param name="iceServers">The list of <see cref="IIceServer"/>s to check.</param>
        /// <param name="cancellationToken">A cancellation token used to propagate notification
        /// that this operation should be canceled.</param>
        /// <returns>An awaitable <see cref="Task"/> that returns <see cref="TurnClient"/>
        /// pointing to a connectable <see cref="IIceServer"/>.</returns>
        /// <exception cref="IceServerException">Thrown when no <see cref="TurnClient"/> can
        /// be created that can connect to any <see cref="IIceServer"/> among
        /// <paramref name="iceServers"/>.</exception>
        public static async Task<TurnClient> Create(
            IEnumerable<IIceServer> iceServers,
            CancellationToken cancellationToken = default)
        {
            foreach (IIceServer server in iceServers)
            {
                Uri url = server.Url;
                int port = url.IsDefaultPort
                    ? TurnClient.TurnDefaultPort
                    : url.Port;
                TurnClient turnClient = new TurnClient(
                    url.Host,
                    server.Username,
                    server.Credential,
                    port);

                if (await turnClient.IsConnectable(cancellationToken: cancellationToken))
                {
                    Log.Debug("TURN client created: {Host}:{Port}", url.Host, url.Port);
                    return turnClient;
                }
            }

            throw new IceServerException("Could not find a suitable ICE server.");
        }

        public async Task InitializeTurnAsync(CancellationToken cancellationToken)
        {
            _control = new TcpClient();
            await _control.ConnectAsync(_host, _port);
            _processMessage = ProcessMessage(_turnTaskCts.Token);

            BehindNAT = await IsBehindNAT(cancellationToken);
            _publicAddress = (await GetMappedAddressAsync(cancellationToken)).Address;

            IPEndPoint ep = await AllocateRequestAsync(TurnAllocationLifetime, cancellationToken);
            _endPoint = new DnsEndPoint(ep.Address.ToString(), ep.Port);
        }

        public async Task StartAsync(int listenPort, CancellationToken cancellationToken)
        {
            await InitializeTurnAsync(cancellationToken);
            _ = ReconnectTurn(listenPort, cancellationToken);
        }

        public async Task ReconnectTurn(int listenPort, CancellationToken cancellationToken)
        {
            while (!cancellationToken.IsCancellationRequested)
            {
                try
                {
                    if (BehindNAT)
                    {
                        _turnTasks = BindMultipleProxies(
                            listenPort, ProxyCount, _turnTaskCts.Token);
                        _turnTasks.Add(RefreshAllocate(_turnTaskCts.Token));
                    }

                    _turnTasks.Add(_processMessage);

                    await Task.WhenAny(_turnTasks);
                }
                catch (Exception e)
                {
                    _logger.Error(
                        e, $"An unexpected exception occurred during {nameof(StartAsync)}()");
                }
                finally
                {
                    _logger.Debug("TURN tasks cancelled. Re-initializing TURN...");
                    ClearSession();
                    _turnTaskCts = new CancellationTokenSource();

                    try
                    {
                        await InitializeTurnAsync(cancellationToken);
                    }
                    catch (Exception e)
                    {
                        _logger.Error(e, "Failed to initialize due to an error; retry...");
                        await Task.Delay(1000, cancellationToken);
                    }
                }
            }
        }

        public async Task<IPEndPoint> AllocateRequestAsync(
            TimeSpan lifetime,
            CancellationToken cancellationToken = default)
        {
            if (_control is null)
            {
                throw new InvalidOperationException(
                    $"{nameof(TurnClient)} has not been initialized.");
            }

            NetworkStream stream = _control.GetStream();
            StunMessage response;
            int retry = 0;
            do
            {
                var request = new AllocateRequest((int)lifetime.TotalSeconds);
                await SendMessageAsync(stream, request, cancellationToken);
                response = await ReceiveMessageAsync(request.TransactionId, cancellationToken);

                if (response is AllocateErrorResponse allocError)
                {
                    Realm = allocError.Realm;
                    Nonce = allocError.Nonce;
                }

                retry += 1;
            }
            while (response is AllocateErrorResponse && retry < AllocateRetry);

            if (response is AllocateSuccessResponse allocOk)
            {
                return allocOk.RelayedEndPoint;
            }
            else
            {
                throw new TurnClientException("Allocate failed.", response);
            }
        }

        public async Task CreatePermissionAsync(
            IPEndPoint peerAddress,
            CancellationToken cancellationToken = default)
        {
            if (_control is null)
            {
                throw new InvalidOperationException(
                    $"{nameof(TurnClient)} has not been initialized.");
            }

            NetworkStream stream = _control.GetStream();
            var request = new CreatePermissionRequest(peerAddress);
            await SendMessageAsync(stream, request, cancellationToken);
            StunMessage response = await ReceiveMessageAsync(
                request.TransactionId,
                cancellationToken);

            if (response is CreatePermissionErrorResponse)
            {
                throw new TurnClientException(
                    "CreatePermission failed.",
                    response);
            }
        }

        public async Task<NetworkStream> AcceptRelayedStreamAsync(
            CancellationToken cancellationToken = default)
        {
            while (true)
            {
                ConnectionAttempt attempt =
                    await _connectionAttempts.DequeueAsync(cancellationToken);

                byte[] id = attempt.ConnectionId;
                var bindRequest = new ConnectionBindRequest(id);
                var relayedClient = new TcpClient(_host, _port);
                _relayedClients.Add(relayedClient);
                NetworkStream relayedStream = relayedClient.GetStream();

                try
                {
                    await SendMessageAsync(relayedStream, bindRequest, cancellationToken);
                    StunMessage bindResponse =
                        await StunMessage.ParseAsync(relayedStream, cancellationToken);

                    if (bindResponse is ConnectionBindSuccessResponse)
                    {
                        return relayedStream;
                    }

                    throw new TurnClientException("ConnectionBind failed.", bindResponse);
                }
                catch (IOException e)
                {
                    _logger.Warning(
                        e,
                        "The connection seems to disconnect before parsing; ignored"
                    );
                }
            }
        }

        public async Task<IPEndPoint> GetMappedAddressAsync(
            CancellationToken cancellationToken = default)
        {
            if (_control is null)
            {
                throw new InvalidOperationException(
                    $"{nameof(TurnClient)} has not been initialized.");
            }

            NetworkStream stream = _control.GetStream();
            var request = new BindingRequest();
            await SendMessageAsync(stream, request, cancellationToken);
            StunMessage response = await ReceiveMessageAsync(
                request.TransactionId,
                cancellationToken);

            if (response is BindingSuccessResponse success)
            {
                _logger.Debug($"Mapped address: {success.MappedAddress}");
                return success.MappedAddress;
            }

            throw new TurnClientException(
                "BindingRequest failed.",
                response);
        }

        public async Task<TimeSpan> RefreshAllocationAsync(
            TimeSpan lifetime,
            CancellationToken cancellationToken = default)
        {
            if (_control is null)
            {
                throw new InvalidOperationException(
                    $"{nameof(TurnClient)} has not been initialized.");
            }

            NetworkStream stream = _control.GetStream();
            var request = new RefreshRequest((int)lifetime.TotalSeconds);
            await SendMessageAsync(stream, request, cancellationToken);

            StunMessage response = await ReceiveMessageAsync(
                request.TransactionId,
                cancellationToken);
            if (response is RefreshSuccessResponse success)
            {
                return TimeSpan.FromSeconds(success.Lifetime);
            }
            else if (
                response is RefreshErrorResponse error &&
                error.ErrorCode == 438)
            {
                // Retry refreshing when stale nonce error(438) occurred.
                Nonce = error.Nonce;
                return await RefreshAllocationAsync(lifetime);
            }

            throw new TurnClientException("RefreshRequest failed.", response);
        }

        public async Task<bool> IsBehindNAT(
            CancellationToken cancellationToken = default)
        {
            if (_control is null)
            {
                throw new InvalidOperationException(
                    $"{nameof(TurnClient)} has not been initialized.");
            }

            IPEndPoint mapped = await GetMappedAddressAsync(cancellationToken);
            return !_control.Client.LocalEndPoint.Equals(mapped);
        }

        public void Dispose()
        {
            _logger.Debug($"Disposing {nameof(TurnClient)}...");
            ClearSession();
            _logger.Debug($"{nameof(TurnClient)} is disposed");
        }

        private async Task<bool> IsConnectable(
            CancellationToken cancellationToken = default)
        {
            using var cts = CancellationTokenSource.CreateLinkedTokenSource(cancellationToken);
            try
            {
                using var client = new TcpClient();
#pragma warning disable PC001 // API not supported on all platforms
                client.Connect(_host, _port);
#pragma warning restore PC001 // API not supported on all platforms
                NetworkStream stream = client.GetStream();

                var request = new BindingRequest();
                byte[] asBytes = request.Encode(this);
                cts.CancelAfter(TimeSpan.FromSeconds(ConnectableProbeLength));
                await stream.WriteAsync(asBytes, 0, asBytes.Length, cts.Token);
                await StunMessage.ParseAsync(stream, cts.Token);
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }

        private List<Task> BindMultipleProxies(
            int listenPort,
            int count,
            CancellationToken cancellationToken = default)
        {
            return Enumerable.Range(1, count)
                .Select(x => BindProxies(listenPort, cancellationToken))
                .ToList();
        }

        private async Task BindProxies(
            int listenPort,
            CancellationToken cancellationToken = default)
        {
            while (!cancellationToken.IsCancellationRequested)
            {
                var tcpClient = new TcpClient();
#pragma warning disable PC001  // API not supported on all platforms
                tcpClient.Connect(new IPEndPoint(IPAddress.Loopback, listenPort));
#pragma warning restore PC001
                NetworkStream localStream = tcpClient.GetStream();
                NetworkStream turnStream = await AcceptRelayedStreamAsync(cancellationToken);
#pragma warning disable CS4014

                const int bufferSize = 8042;
                Task.WhenAny(
                    turnStream.CopyToAsync(localStream, bufferSize, cancellationToken),
                    localStream.CopyToAsync(turnStream, bufferSize, cancellationToken)
                ).ContinueWith(
                    t =>
                    {
                        turnStream.Dispose();
                        localStream.Dispose();
                        tcpClient.Dispose();
                    },
                    cancellationToken
                );
#pragma warning restore CS4014
            }
        }

        private async Task RefreshAllocate(CancellationToken cancellationToken)
        {
            TimeSpan lifetime = TurnAllocationLifetime;
            while (!cancellationToken.IsCancellationRequested)
            {
                try
                {
                    await Task.Delay(lifetime - TimeSpan.FromMinutes(1), cancellationToken);
                    _logger.Debug("Refreshing TURN allocation...");
                    lifetime = await RefreshAllocationAsync(lifetime);
                    cancellationToken.ThrowIfCancellationRequested();
                }
                catch (OperationCanceledException e)
                {
                    _logger.Warning(e, "{MethodName}() was cancelled", nameof(RefreshAllocate));
                    throw;
                }
                catch (Exception e)
                {
                    _logger.Error(
                        e,
                        $"An unexpected exception occurred during {nameof(RefreshAllocate)}()");
                }
            }
        }

        private async Task SendMessageAsync(
            NetworkStream stream,
            StunMessage message,
            CancellationToken cancellationToken)
        {
            var tcs = new TaskCompletionSource<StunMessage>();
            _responses[message.TransactionId] = tcs;
            var asBytes = message.Encode(this);
            await stream.WriteAsync(
                asBytes,
                0,
                asBytes.Length,
                cancellationToken);
        }

        private async Task ProcessMessage(CancellationToken cancellationToken)
        {
            while (!cancellationToken.IsCancellationRequested && _control!.Connected)
            {
                try
                {
                    NetworkStream stream = _control.GetStream();
                    StunMessage message;
                    message = await StunMessage.ParseAsync(stream, cancellationToken);
                    _logger.Debug("Parsed " + nameof(StunMessage) + ": {Message}", message);

                    if (message is ConnectionAttempt attempt)
                    {
                        await _connectionAttempts.EnqueueAsync(attempt, cancellationToken);
                    }
                    else if (_responses.TryGetValue(
                        message.TransactionId,
                        out var tcs))
                    {
                        // tcs may be already canceled.
                        tcs.TrySetResult(message);
                    }
                }
                catch (TurnClientException e)
                {
                    _logger.Error(e, "Failed to parse " + nameof(StunMessage));
                    ClearResponses();
                    break;
                }
                catch (Exception e)
                {
                    _logger.Error(
                        e,
                        $"An unexpected exception occurred during {nameof(ProcessMessage)}()");
                }
            }

            _logger.Debug($"{nameof(ProcessMessage)} is ended. Connected: {_control!.Connected}");
        }

        private async Task<StunMessage> ReceiveMessageAsync(
            byte[] transactionId,
            CancellationToken cancellationToken)
        {
            TaskCompletionSource<StunMessage> tcs = _responses[transactionId];
            using CancellationTokenRegistration ctr =
                cancellationToken.Register(() => tcs.TrySetCanceled());
            StunMessage response = await tcs.Task;
            _responses.Remove(transactionId);

            return response;
        }

        private void ClearSession()
        {
            _control?.Dispose();
            _turnTaskCts.Cancel();
            _turnTaskCts.Dispose();
            _turnTasks.Clear();
            ClearResponses();

            foreach (TcpClient relays in _relayedClients)
            {
                relays.Dispose();
            }
        }

        private void ClearResponses()
        {
            foreach (TaskCompletionSource<StunMessage> tcs in _responses.Values)
            {
                tcs.TrySetCanceled();
            }

            _responses.Clear();
        }

        private class ByteArrayComparer : IEqualityComparer<byte[]>
        {
            public bool Equals(byte[]? x, byte[]? y)
            {
                if (x == null || y == null)
                {
                    return x == y;
                }

                return x.SequenceEqual(y);
            }

            public int GetHashCode(byte[] obj)
            {
                if (obj == null)
                {
                    throw new ArgumentNullException(nameof(obj));
                }

                return obj.Sum(b => b);
            }
        }
    }
}
