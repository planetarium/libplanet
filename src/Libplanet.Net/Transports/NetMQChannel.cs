using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Threading;
using System.Threading.Channels;
using System.Threading.Tasks;
using NetMQ;
using NetMQ.Sockets;
using Serilog;

namespace Libplanet.Net.Transports
{
    public class NetMQChannel
    {
        private readonly BoundPeer _peer;
        private readonly Channel<MessageRequest> _requests;
        private readonly CancellationTokenSource _cancellationTokenSource;
        private readonly ILogger _logger;

        private DateTimeOffset _lastUpdated;

        public NetMQChannel(BoundPeer peer)
        {
            _peer = peer;
            _requests = Channel.CreateUnbounded<MessageRequest>();
            _cancellationTokenSource = new CancellationTokenSource();
            _logger = Log.Logger
                .ForContext<NetMQChannel>()
                .ForContext("Source", nameof(NetMQTransport));
        }

        public event EventHandler? Closed;

#pragma warning disable SA1005, SA1515, S125
        //public event EventHandler? Faulted;
#pragma warning restore SA1005, SA1515, S125

        public event EventHandler? Opened;

        public void Abort()
        {
            _cancellationTokenSource.Cancel();
        }

        public void Close()
        {
            _cancellationTokenSource.Cancel();
            Closed?.Invoke(this, EventArgs.Empty);
        }

        public void Open()
        {
            TaskCreationOptions taskCreationOptions =
                TaskCreationOptions.DenyChildAttach |
                TaskCreationOptions.LongRunning |
                TaskCreationOptions.HideScheduler;
            Task.Factory.StartNew(
                () => ProcessRuntime(_cancellationTokenSource.Token),
                _cancellationTokenSource.Token,
                taskCreationOptions,
                TaskScheduler.Default);
            Opened?.Invoke(this, EventArgs.Empty);
        }

        public async IAsyncEnumerable<NetMQMessage> SendMessageAsync(
            NetMQMessage message,
            int expectedResponses,
            [EnumeratorCancellation] CancellationToken cancellationToken)
        {
            var channel = Channel.CreateUnbounded<NetMQMessage>();
            await _requests.Writer.WriteAsync(
                new MessageRequest(
                    message,
                    expectedResponses,
                    channel,
                    cancellationToken),
                cancellationToken);

            foreach (var unused in Enumerable.Range(0, expectedResponses))
            {
                // FIXME: Can be replaced with Channel.Reader.Completion?
                yield return await channel.Reader.ReadAsync(cancellationToken);
            }
        }

        private async Task ProcessRuntime(CancellationToken ct)
        {
            using var dealer = new DealerSocket();
            dealer.Options.DisableTimeWait = true;
            dealer.Connect(await _peer.ResolveNetMQAddressAsync());
            while (!ct.IsCancellationRequested)
            {
                MessageRequest req = await _requests.Reader.ReadAsync(ct);
                _lastUpdated = DateTimeOffset.UtcNow;
                CancellationTokenSource linked =
                    CancellationTokenSource.CreateLinkedTokenSource(ct, req.CancellationToken);
                _logger.Debug("[NetMQChannel] Trying to send message {Message}", req.Message);
                if (!dealer.TrySendMultipartMessage(req.Message))
                {
                    _logger.Debug(
                        "[NetMQChannel] Failed to send {Message} to {Peer}",
                        req.Message,
                        _peer);
                    continue;
                }

                _logger.Debug("[NetMQChannel] Message {Message} successfully sent.", req.Message);

                foreach (var i in Enumerable.Range(0, req.ExpectedResponses))
                {
                    NetMQMessage raw = await dealer.ReceiveMultipartMessageAsync(
                        cancellationToken: linked.Token
                    );
                    _lastUpdated = DateTimeOffset.UtcNow;

                    await req.Channel.Writer.WriteAsync(raw, linked.Token);
                }

                req.Channel.Writer.Complete();
            }
        }

        private readonly struct MessageRequest
        {
            public MessageRequest(
                NetMQMessage message,
                in int expectedResponses,
                Channel<NetMQMessage> channel,
                CancellationToken cancellationToken)
            {
                Message = message;
                ExpectedResponses = expectedResponses;
                Channel = channel;
                CancellationToken = cancellationToken;
            }

            public NetMQMessage Message { get; }

            public int ExpectedResponses { get; }

            public Channel<NetMQMessage> Channel { get; }

            public CancellationToken CancellationToken { get; }
        }
    }
}
