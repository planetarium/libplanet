using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Sockets;
using System.Runtime.CompilerServices;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Stun.Messages;
using Nito.AsyncEx;
using Serilog;

[assembly: InternalsVisibleTo("Libplanet.Stun.Tests")]
namespace Libplanet.Stun
{
    public class TurnClient : IStunContext, IDisposable
    {
        public const int TurnDefaultPort = 3478;
        private const int AllocateRetry = 5;
        private readonly string _host;
        private readonly int _port;
        private readonly IList<TcpClient> _relayedClients;
        private readonly IDictionary<byte[], TaskCompletionSource<StunMessage>>
            _responses;

        private readonly AsyncProducerConsumerQueue<ConnectionAttempt> _connectionAttempts;
        private readonly TcpClient _control;
        private readonly AsyncLock _connMutex;

        private Task _messageProcessor;

        public TurnClient(
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
            _control = new TcpClient();
            _connectionAttempts =
                new AsyncProducerConsumerQueue<ConnectionAttempt>();
            _responses =
                new Dictionary<byte[], TaskCompletionSource<StunMessage>>(
                    new ByteArrayComparer());
            _connMutex = new AsyncLock();
        }

        public string Username { get; }

        public string Password { get; }

        public string Realm { get; private set; }

        public byte[] Nonce { get; private set; }

        public async Task<IPEndPoint> AllocateRequestAsync(
            TimeSpan lifetime,
            CancellationToken cancellationToken = default(CancellationToken))
        {
            await EnsureConnection();

            NetworkStream stream = _control.GetStream();
            StunMessage response;
            int retry = 0;
            do
            {
                var request = new AllocateRequest((int)lifetime.TotalSeconds);
                await SendMessageAsync(stream, request, cancellationToken);
                response = await ReceiveMessage(request.TransactionId);

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
            CancellationToken cancellationToken = default(CancellationToken))
        {
            await EnsureConnection();

            NetworkStream stream = _control.GetStream();
            var request = new CreatePermissionRequest(peerAddress);
            await SendMessageAsync(stream, request, cancellationToken);
            StunMessage response = await ReceiveMessage(request.TransactionId);

            if (response is CreatePermissionErrorResponse)
            {
                throw new TurnClientException(
                    "CreatePermission failed.",
                    response);
            }
        }

        public async Task<NetworkStream> AcceptRelayedStreamAsync(
            CancellationToken cancellationToken = default(CancellationToken))
        {
            while (true)
            {
                await EnsureConnection();

                ConnectionAttempt attempt =
                    await _connectionAttempts.DequeueAsync(cancellationToken);

                byte[] id = attempt.ConnectionId;
                var bindRequest = new ConnectionBindRequest(id);
                var relayedClient = new TcpClient(_host, _port);
                NetworkStream relayedStream = relayedClient.GetStream();

                try
                {
                    await SendMessageAsync(relayedStream, bindRequest, cancellationToken);
                    StunMessage bindResponse = await StunMessage.Parse(relayedStream);

                    if (bindResponse is ConnectionBindSuccessResponse)
                    {
                        _relayedClients.Add(relayedClient);
                        return relayedStream;
                    }

                    throw new TurnClientException("ConnectionBind failed.", bindResponse);
                }
                catch (IOException e)
                {
                    Log.Warning(e, "The connection seems to disconnect before parsing. ignored.");
                    continue;
                }
            }
        }

        public async Task<IPEndPoint> GetMappedAddressAsync(
            CancellationToken cancellationToken = default(CancellationToken))
        {
            await EnsureConnection();

            NetworkStream stream = _control.GetStream();
            var request = new BindingRequest();
            await SendMessageAsync(stream, request, cancellationToken);
            StunMessage response = await ReceiveMessage(request.TransactionId);

            if (response is BindingSuccessResponse success)
            {
                return success.MappedAddress;
            }

            throw new TurnClientException(
                "BindingRequest failed.",
                response);
        }

        public async Task<TimeSpan> RefreshAllocationAsync(
            TimeSpan lifetime,
            CancellationToken cancellationToken = default(CancellationToken))
        {
            await EnsureConnection();

            NetworkStream stream = _control.GetStream();
            var request = new RefreshRequest((int)lifetime.TotalSeconds);
            await SendMessageAsync(stream, request, cancellationToken);

            StunMessage response = await ReceiveMessage(request.TransactionId);
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
            CancellationToken cancellationToken = default(CancellationToken))
        {
            IPEndPoint mapped = await GetMappedAddressAsync(cancellationToken);
            return !_control.Client.LocalEndPoint.Equals(mapped);
        }

        public void Dispose()
        {
            _control?.Dispose();
            foreach (TcpClient c in _relayedClients)
            {
                c.Dispose();
            }

            try
            {
                _messageProcessor?.GetAwaiter().GetResult();
            }
            catch (IOException)
            {
            }
        }

        private async Task SendMessageAsync(
            NetworkStream stream,
            StunMessage message,
            CancellationToken cancellationToken)
        {
            _responses[message.TransactionId] =
                new TaskCompletionSource<StunMessage>(cancellationToken);
            var asBytes = message.Encode(this);
            await stream.WriteAsync(
                asBytes,
                0,
                asBytes.Length,
                cancellationToken);
        }

        private async Task ProcessMessage()
        {
            NetworkStream stream = _control.GetStream();
            while (_control.Connected)
            {
                try
                {
                    StunMessage message = await StunMessage.Parse(stream);

                    if (message is ConnectionAttempt attempt)
                    {
                        await _connectionAttempts.EnqueueAsync(attempt);
                    }
                    else if (_responses.TryGetValue(
                        message.TransactionId,
                        out TaskCompletionSource<StunMessage> tcs))
                    {
                        tcs.SetResult(message);
                    }
                }
                catch (Exception e)
                {
                    Log.Error(
                        e,
                        $"An unexpected exception occurred during {nameof(ProcessMessage)}(): {e}"
                    );
                }
            }
        }

        private async Task EnsureConnection()
        {
            using (await _connMutex.LockAsync())
            {
                if (!_control.Connected)
                {
                    await _control.ConnectAsync(_host, _port);
                    _messageProcessor = ProcessMessage();
                }
            }
        }

        private async Task<StunMessage> ReceiveMessage(byte[] transactionId)
        {
            StunMessage response = await _responses[transactionId].Task;
            _responses.Remove(transactionId);

            return response;
        }

        private class ByteArrayComparer : IEqualityComparer<byte[]>
        {
            public bool Equals(byte[] left, byte[] right)
            {
                if (left == null || right == null)
                {
                    return left == right;
                }

                return left.SequenceEqual(right);
            }

            public int GetHashCode(byte[] key)
            {
                if (key == null)
                {
                    throw new ArgumentNullException(nameof(key));
                }

                return key.Sum(b => b);
            }
        }
    }
}
