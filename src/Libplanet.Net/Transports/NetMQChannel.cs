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
        private bool _opened;

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

        public event EventHandler<Exception>? Faulted;

        public event EventHandler? Opened;

        public void Abort()
        {
            if (!_opened)
            {
                throw new InvalidOperationException("Cannot abort an unopened channel.");
            }

            _opened = false;
            _cancellationTokenSource.Cancel();
        }

        public void Close()
        {
            if (!_opened)
            {
                throw new InvalidOperationException("Cannot close an unopened channel.");
            }

            _opened = false;
            _cancellationTokenSource.Cancel();
            Closed?.Invoke(this, EventArgs.Empty);
        }

        public void Open()
        {
            _opened = true;
            Opened?.Invoke(this, EventArgs.Empty);
            DoOpen();
        }

        public async IAsyncEnumerable<NetMQMessage> SendMessageAsync(
            NetMQMessage message,
            TimeSpan? timeout,
            int expectedResponses,
            [EnumeratorCancellation] CancellationToken cancellationToken)
        {
            if (!_opened)
            {
                throw new InvalidOperationException(
                    "Cannot send message with an unopened channel.");
            }

            var channel = Channel.CreateUnbounded<NetMQMessage>();
            await _requests.Writer.WriteAsync(
                new MessageRequest(
                    message,
                    timeout,
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

        private void DoOpen()
        {
            TaskCreationOptions taskCreationOptions =
                TaskCreationOptions.DenyChildAttach |
                TaskCreationOptions.LongRunning |
                TaskCreationOptions.HideScheduler;
            Task.Factory.StartNew(
                ProcessRuntime,
                _cancellationTokenSource.Token,
                taskCreationOptions,
                TaskScheduler.Default);
        }

        private async Task ProcessRuntime()
        {
            var ct = _cancellationTokenSource.Token;
            using var dealer = new DealerSocket();
            dealer.Options.DisableTimeWait = true;
            var address = await _peer.ResolveNetMQAddressAsync();
            try
            {
                dealer.Connect(address);
            }
            catch (Exception e)
            {
                Faulted?.Invoke(this, e);
                Close();
            }

            while (!ct.IsCancellationRequested)
            {
                MessageRequest req = await _requests.Reader.ReadAsync(ct);
                try
                {
                    _lastUpdated = DateTimeOffset.UtcNow;
                    CancellationTokenSource linked =
                        CancellationTokenSource.CreateLinkedTokenSource(ct, req.CancellationToken);
                    if (!dealer.TrySendMultipartMessage(req.Message))
                    {
                        _requests.Writer.Complete();
                        dealer.Close();
                        DoOpen();
                        break;
                    }

                    foreach (var i in Enumerable.Range(0, req.ExpectedResponses))
                    {
                        var raw = new NetMQMessage();
                        if (!dealer.TryReceiveMultipartMessage(
                                req.Timeout ?? TimeSpan.FromSeconds(1),
                                ref raw))
                        {
                            break;
                        }

                        _lastUpdated = DateTimeOffset.UtcNow;

                        await req.Channel.Writer.WriteAsync(raw, linked.Token);
                    }

                    req.Channel.Writer.Complete();
                }
                catch (Exception)
                {
                    req.Channel.Writer.Complete();
                    dealer.Close();
                    DoOpen();
                    break;
                }
            }
        }

        private bool HandShake(DealerSocket dealerSocket)
        {
            var msg = default(Msg);
            return dealerSocket.TrySend(ref msg, TimeSpan.Zero, false);
        }

        private readonly struct MessageRequest
        {
            public MessageRequest(
                NetMQMessage message,
                TimeSpan? timeout,
                in int expectedResponses,
                Channel<NetMQMessage> channel,
                CancellationToken cancellationToken)
            {
                Message = message;
                Timeout = timeout;
                ExpectedResponses = expectedResponses;
                Channel = channel;
                CancellationToken = cancellationToken;
            }

            public NetMQMessage Message { get; }

            public TimeSpan? Timeout { get; }

            public int ExpectedResponses { get; }

            public Channel<NetMQMessage> Channel { get; }

            public CancellationToken CancellationToken { get; }
        }
    }
}
