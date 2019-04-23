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

        private readonly Task _messageProcessor;
        private TcpClient _control;
        private TaskCompletionSource<ConnectionAttempt> _connectAttempted;

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
            _control.Connect(_host, _port);

            _responses =
                new Dictionary<byte[], TaskCompletionSource<StunMessage>>(
                    new ByteArrayComparer());
            _messageProcessor = ProcessMessage();
        }

        public string Username { get; }

        public string Password { get; }

        public string Realm { get; private set; }

        public byte[] Nonce { get; private set; }

        public async Task<IPEndPoint> AllocateRequestAsync(TimeSpan lifetime)
        {
            NetworkStream stream = _control.GetStream();
            StunMessage response;
            int retry = 0;
            do
            {
                var request = new AllocateRequest((int)lifetime.TotalSeconds);
                await SendMessageAsync(stream, request);
                response = await _responses[request.TransactionId].Task;

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

        public async Task CreatePermissionAsync(IPEndPoint peerAddress)
        {
            NetworkStream stream = _control.GetStream();
            var request = new CreatePermissionRequest(peerAddress);
            await SendMessageAsync(stream, request);
            StunMessage response =
                await _responses[request.TransactionId].Task;

            if (response is CreatePermissionErrorResponse)
            {
                throw new TurnClientException(
                    "CreatePermission failed.",
                    response);
            }
        }

        public async Task<NetworkStream> AcceptRelayedStreamAsync()
        {
            NetworkStream stream = _control.GetStream();
            while (true)
            {
                _connectAttempted =
                    new TaskCompletionSource<ConnectionAttempt>();
                ConnectionAttempt attempt = await _connectAttempted.Task;

                byte[] id = attempt.ConnectionId;
                var relayedClient = new TcpClient(_host, _port);
                NetworkStream relayedStream = relayedClient.GetStream();

                var bindRequest = new ConnectionBindRequest(id);
                await SendMessageAsync(relayedStream, bindRequest);
                StunMessage bindResponse =
                    await StunMessage.Parse(relayedStream);

                if (bindResponse is ConnectionBindSuccessResponse)
                {
                    _relayedClients.Add(relayedClient);
                    return relayedStream;
                }

                throw new TurnClientException(
                        "ConnectionBind failed.",
                        bindResponse);
            }
        }

        public async Task<IPEndPoint> GetMappedAddressAsync()
        {
            NetworkStream stream = _control.GetStream();
            var request = new BindingRequest();
            await SendMessageAsync(stream, request);
            StunMessage response =
                await _responses[request.TransactionId].Task;

            if (response is BindingSuccessResponse success)
            {
                return success.MappedAddress;
            }

            throw new TurnClientException(
                "BindingRequest failed.",
                response);
        }

        public async Task<TimeSpan> RefreshAllocationAsync(TimeSpan lifetime)
        {
            NetworkStream stream = _control.GetStream();
            var request = new RefreshRequest((int)lifetime.TotalSeconds);
            await SendMessageAsync(stream, request);

            StunMessage response =
                await _responses[request.TransactionId].Task;
            if (response is RefreshSuccessResponse success)
            {
                return TimeSpan.FromSeconds(success.Lifetime);
            }
            else if (
                response is RefreshErrorResponse error &&
                error.ErrorCode == 438)
            {
                // Retry refreshing when stale nonce error(438) occured.
                Nonce = error.Nonce;
                return await RefreshAllocationAsync(lifetime);
            }

            throw new TurnClientException("RefreshRequest failed.", response);
        }

        public async Task<bool> IsBehindNAT()
        {
            IPEndPoint mapped = await GetMappedAddressAsync();
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
                _messageProcessor.GetAwaiter().GetResult();
            }
            catch (IOException)
            {
            }
        }

        private async Task SendMessageAsync(
            NetworkStream stream,
            StunMessage message)
        {
            _responses[message.TransactionId] =
                new TaskCompletionSource<StunMessage>();
            var asBytes = message.Encode(this);
            await stream.WriteAsync(asBytes, 0, asBytes.Length);
        }

        private async Task ProcessMessage()
        {
            NetworkStream stream = _control.GetStream();
            while (true)
            {
                try
                {
                    StunMessage message = await StunMessage.Parse(stream);

                    if (_connectAttempted != null &&
                        message is ConnectionAttempt attempt)
                    {
                        _connectAttempted.SetResult(attempt);
                    }
                    else if (_responses.TryGetValue(
                        message.TransactionId,
                        out TaskCompletionSource<StunMessage> tcs))
                    {
                        tcs.SetResult(message);
                        _responses.Remove(message.TransactionId);
                    }
                }
                catch (Exception)
                {
                    // Ignore the exception and retry.
                    // FIXME add logging framework and a proper log message.
                }
            }
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
