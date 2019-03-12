using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Sockets;
using System.Threading.Tasks;
using Libplanet.Net.Stun.Messages;

namespace Libplanet.Net.Stun
{
    internal class TurnClient : IStunContext, IDisposable
    {
        public const int TurnDefaultPort = 3478;
        private const int AllocateRetry = 5;
        private readonly string _host;
        private readonly int _port;
        private readonly IList<TcpClient> _relayedClients;

        private TcpClient _control;

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
            _control.Connect(_host, port);
        }

        public string Username { get; }

        public string Password { get; }

        public string Realm { get; private set; }

        public byte[] Nonce { get; private set; }

        public async Task<IPEndPoint> AllocateRequestAsync(int lifetime)
        {
            NetworkStream stream = _control.GetStream();
            StunMessage response;
            int retry = 0;
            do
            {
                var request = new AllocateRequest(lifetime);
                await SendMessageAsync(stream, request);
                response = await StunMessage.Parse(stream);

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
            StunMessage response = await StunMessage.Parse(stream);

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
                StunMessage received = await StunMessage.Parse(stream);
                if (received is ConnectionAttempt attempt)
                {
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
        }

        public async Task<IPEndPoint> GetMappedAddressAsync()
        {
            NetworkStream stream = _control.GetStream();
            var request = new BindingRequest();
            await SendMessageAsync(stream, request);
            var response = await StunMessage.Parse(stream);

            if (response is BindingSuccessResponse success)
            {
                return success.MappedAddress;
            }

            throw new TurnClientException(
                "BindingRequest failed.",
                response);
        }

        public void Dispose()
        {
            _control?.Dispose();
            foreach (TcpClient c in _relayedClients)
            {
                c.Dispose();
            }
        }

        private async Task SendMessageAsync(
            NetworkStream stream,
            StunMessage message)
        {
            var asBytes = message.Encode(this);
            await stream.WriteAsync(asBytes, 0, asBytes.Length);
        }
    }
}
