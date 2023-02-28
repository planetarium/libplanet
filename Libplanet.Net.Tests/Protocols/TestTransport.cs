#nullable disable
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Crypto;
using Libplanet.Net.Messages;
using Libplanet.Net.Protocols;
using Libplanet.Net.Transports;
using Nito.AsyncEx;
using Serilog;

namespace Libplanet.Net.Tests.Protocols
{
    internal class TestTransport : ITransport
    {
        private static readonly AppProtocolVersion _appProtocolVersion =
            AppProtocolVersion.Sign(new PrivateKey(), 1);

        private readonly Dictionary<Address, TestTransport> _transports;
        private readonly ILogger _logger;
        private readonly ConcurrentDictionary<byte[], Address> _peersToReply;
        private readonly ConcurrentDictionary<byte[], Message> _replyToReceive;
        private readonly AsyncCollection<Request> _requests;
        private readonly List<string> _ignoreTestMessageWithData;
        private readonly PrivateKey _privateKey;
        private readonly Random _random;
        private readonly bool _blockBroadcast;

        private TaskCompletionSource<object> _runningEvent;
        private CancellationTokenSource _swarmCancellationTokenSource;
        private TimeSpan _networkDelay;
        private bool _disposed;

        public TestTransport(
            Dictionary<Address, TestTransport> transports,
            PrivateKey privateKey,
            bool blockBroadcast,
            int tableSize,
            int bucketSize,
            TimeSpan? networkDelay)
        {
            _runningEvent = new TaskCompletionSource<object>();
            _privateKey = privateKey;
            _blockBroadcast = blockBroadcast;
            var loggerId = _privateKey.ToAddress().ToHex();
            _logger = Log.ForContext<TestTransport>()
                .ForContext("Address", loggerId);

            _peersToReply = new ConcurrentDictionary<byte[], Address>();
            _replyToReceive = new ConcurrentDictionary<byte[], Message>();
            ReceivedMessages = new ConcurrentBag<Message>();
            MessageReceived = new AsyncAutoResetEvent();
            _transports = transports;
            _transports[privateKey.ToAddress()] = this;
            _networkDelay = networkDelay ?? TimeSpan.Zero;
            _requests = new AsyncCollection<Request>();
            _ignoreTestMessageWithData = new List<string>();
            _random = new Random();
            Table = new RoutingTable(Address, tableSize, bucketSize);
            ProcessMessageHandler = new AsyncDelegate<Message>();
            Protocol = new KademliaProtocol(Table, this, Address);
            MessageHistory = new FixedSizedQueue<Message>(30);
        }

        public AsyncDelegate<Message> ProcessMessageHandler { get; }

        public AsyncAutoResetEvent MessageReceived { get; }

        public Address Address => _privateKey.ToAddress();

        public BoundPeer AsPeer => new BoundPeer(
            _privateKey.PublicKey,
            new DnsEndPoint("127.0.0.1", 1234));

        public IReadOnlyList<BoundPeer> Peers => Table.Peers;

        public DateTimeOffset? LastMessageTimestamp { get; private set; }

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

        public ConcurrentQueue<Message> MessageHistory { get; }

        public AppProtocolVersion AppProtocolVersion => _appProtocolVersion;

        public IImmutableSet<PublicKey> TrustedAppProtocolVersionSigners =>
            ImmutableHashSet<PublicKey>.Empty;

        public DifferentAppProtocolVersionEncountered DifferentAppProtocolVersionEncountered =>
            (peer, peerVersion, localVersion) => { };

        internal ConcurrentBag<Message> ReceivedMessages { get; }

        internal RoutingTable Table { get; }

        internal IProtocol Protocol { get; }

        public void Dispose()
        {
            if (!_disposed)
            {
                _swarmCancellationTokenSource?.Cancel();
                Running = false;
                _disposed = true;
            }
        }

        public async Task StartAsync(
            CancellationToken cancellationToken = default)
        {
            if (_disposed)
            {
                throw new ObjectDisposedException(nameof(TestTransport));
            }

            _logger.Debug("Starting transport of {Peer}", AsPeer);
            _swarmCancellationTokenSource = new CancellationTokenSource();
            CancellationToken token = cancellationToken.Equals(CancellationToken.None)
                ? _swarmCancellationTokenSource.Token
                : CancellationTokenSource
                    .CreateLinkedTokenSource(
                        _swarmCancellationTokenSource.Token, cancellationToken)
                    .Token;
            Running = true;
            await ProcessRuntime(token);
        }

        public async Task StopAsync(
            TimeSpan waitFor,
            CancellationToken cancellationToken = default)
        {
            if (_disposed)
            {
                throw new ObjectDisposedException(nameof(TestTransport));
            }

            if (Running)
            {
                _logger.Debug("Stopping transport of {Peer}", AsPeer);
                _swarmCancellationTokenSource.Cancel();
                Running = false;
            }

            await Task.Delay(waitFor, cancellationToken);
        }

        /// <inheritdoc cref="ITransport.WaitForRunningAsync"/>
        public Task WaitForRunningAsync() => _runningEvent.Task;

#pragma warning disable S4457 // Cannot split the method since method is in interface
        public async Task BootstrapAsync(
            IEnumerable<BoundPeer> bootstrapPeers,
            TimeSpan? pingSeedTimeout = null,
            int depth = 3,
            CancellationToken cancellationToken = default)
        {
            if (_disposed)
            {
                throw new ObjectDisposedException(nameof(TestTransport));
            }

            if (!Running)
            {
                throw new TransportException("Start transport before use.");
            }

            if (bootstrapPeers is null)
            {
                throw new ArgumentNullException(nameof(bootstrapPeers));
            }

            await Protocol.BootstrapAsync(
                bootstrapPeers.ToImmutableList(),
                pingSeedTimeout,
                Kademlia.MaxDepth,
                cancellationToken);
        }

        public Task SendMessageAsync(
            BoundPeer peer,
            MessageContent content,
            CancellationToken cancellationToken)
            => SendMessageAsync(
                peer,
                content,
                TimeSpan.FromSeconds(3),
                cancellationToken);

        public Task AddPeersAsync(
            IEnumerable<BoundPeer> peers,
            TimeSpan? timeout,
            CancellationToken cancellationToken = default)
        {
            if (_disposed)
            {
                throw new ObjectDisposedException(nameof(TestTransport));
            }

            if (!Running)
            {
                throw new TransportException("Start transport before use.");
            }

            if (peers is null)
            {
                throw new ArgumentNullException(nameof(peers));
            }

            async Task DoAddPeersAsync()
            {
                try
                {
                    KademliaProtocol kp = (KademliaProtocol)Protocol;

                    var tasks = new List<Task>();
                    foreach (var peer in peers)
                    {
                        if (peer is BoundPeer boundPeer)
                        {
                            tasks.Add(
                                kp.PingAsync(
                                    boundPeer,
                                    timeout: timeout,
                                    cancellationToken: cancellationToken));
                        }
                    }

                    _logger.Verbose("Trying to ping all {PeersNumber} peers", tasks.Count);
                    await Task.WhenAll(tasks);
                    _logger.Verbose("Update complete");
                }
                catch (DifferentAppProtocolVersionException)
                {
                    _logger.Debug(
                        "Different version encountered during {MethodName}()",
                        nameof(AddPeersAsync));
                }
                catch (PingTimeoutException)
                {
                    var msg =
                        $"Timeout occurred during {nameof(AddPeersAsync)}() after {timeout}";
                    _logger.Debug(msg);
                    throw new TimeoutException(msg);
                }
                catch (TaskCanceledException)
                {
                    _logger.Debug(
                        "Task was cancelled during {MethodName}()",
                        nameof(AddPeersAsync));
                }
                catch (Exception e)
                {
                    _logger.Error(
                        e,
                        "Unexpected exception occurred during {MethodName}()",
                        nameof(AddPeersAsync));
                    throw;
                }
            }

            return DoAddPeersAsync();
        }

        public void SendPing(BoundPeer peer, TimeSpan? timeSpan = null)
        {
            if (_disposed)
            {
                throw new ObjectDisposedException(nameof(TestTransport));
            }

            if (!Running)
            {
                throw new TransportException("Start transport before use.");
            }

            Task.Run(() =>
            {
                _ = (Protocol as KademliaProtocol).PingAsync(
                    peer,
                    timeSpan,
                    default);
            });
        }

        public void BroadcastTestMessage(Address? except, string data)
        {
            if (_disposed)
            {
                throw new ObjectDisposedException(nameof(TestTransport));
            }

            if (!Running)
            {
                throw new TransportException("Start transport before use.");
            }

            var message = new TestMessage(data);
            _ignoreTestMessageWithData.Add(data);
            BroadcastMessage(Table.PeersToBroadcast(except), message);
        }

        public void BroadcastMessage(IEnumerable<BoundPeer> peers, MessageContent content)
        {
            if (_disposed)
            {
                throw new ObjectDisposedException(nameof(TestTransport));
            }

            var peersList = peers.ToList();
            var peersString = string.Join(", ", peersList.Select(peer => peer.Address));
            _logger.Debug(
                "Broadcasting test message {Data} to {Count} peers which are: {Peers}",
                ((TestMessage)content).Data,
                peersList.Count,
                peersString);
            foreach (var peer in peersList)
            {
                _ = SendMessageAsync(peer, content, null, _swarmCancellationTokenSource.Token);
            }
        }

#pragma warning disable S4457 // Cannot split the method since method is in interface
        public async Task<Message> SendMessageAsync(
            BoundPeer peer,
            MessageContent content,
            TimeSpan? timeout,
            CancellationToken cancellationToken)
        {
            if (_disposed)
            {
                throw new ObjectDisposedException(nameof(TestTransport));
            }

            if (!Running)
            {
                throw new TransportException("Start transport before use.");
            }

            var bytes = new byte[10];
            _random.NextBytes(bytes);
            var sendTime = DateTimeOffset.UtcNow;
            var identity = _privateKey.ToAddress().ByteArray.Concat(bytes).ToArray();
            _logger.Debug("Adding request of {Content} of {Identity}", content, identity);
            await _requests.AddAsync(
                new Request
                {
                    Message = new Message(
                        content,
                        AppProtocolVersion,
                        AsPeer,
                        sendTime,
                        identity),
                    Target = peer,
                },
                cancellationToken);

            while (!cancellationToken.IsCancellationRequested &&
                   !_replyToReceive.ContainsKey(identity))
            {
                if (DateTimeOffset.UtcNow - sendTime > (timeout ?? TimeSpan.MaxValue))
                {
                    _logger.Error(
                        "Reply of {Content} of {identity} did not received in " +
                        "expected timespan {TimeSpan}",
                        content,
                        identity,
                        timeout ?? TimeSpan.MaxValue);
                    throw new CommunicationFailException(
                        $"Timeout occurred during {nameof(SendMessageAsync)}().",
                        content.Type,
                        peer);
                }

                await Task.Delay(10, cancellationToken);
            }

            if (cancellationToken.IsCancellationRequested)
            {
                throw new OperationCanceledException(
                    $"Operation is canceled during {nameof(SendMessageAsync)}().");
            }

            if (_replyToReceive.TryRemove(identity, out Message reply))
            {
                _logger.Debug(
                    "Received reply {Content} of message with identity {identity}",
                    reply.Content,
                    identity);
                LastMessageTimestamp = DateTimeOffset.UtcNow;
                ReceivedMessages.Add(reply);
                MessageHistory.Enqueue(reply);
                MessageReceived.Set();
                return reply;
            }
            else
            {
                _logger.Error(
                    "Unexpected error occurred during " +
                    $"{nameof(SendMessageAsync)}()");
                throw new SwarmException();
            }
        }
#pragma warning restore S4457 // Cannot split the method since method is in interface

        public async Task<IEnumerable<Message>> SendMessageAsync(
            BoundPeer peer,
            MessageContent content,
            TimeSpan? timeout,
            int expectedResponses,
            bool returnWhenTimeout,
            CancellationToken cancellationToken = default)
        {
            return new[]
            {
                await SendMessageAsync(peer, content, timeout, cancellationToken),
            };
        }

        public async Task ReplyMessageAsync(
            MessageContent content,
            byte[] identity,
            CancellationToken cancellationToken)
        {
            if (_disposed)
            {
                throw new ObjectDisposedException(nameof(TestTransport));
            }

            if (!Running)
            {
                throw new TransportException("Start transport before use.");
            }

            _logger.Debug("Replying {Content}...", content);
            var message = new Message(
                content,
                AppProtocolVersion,
                AsPeer,
                DateTimeOffset.UtcNow,
                identity);
            await Task.Delay(_networkDelay, cancellationToken);
            _transports[_peersToReply[identity]].ReceiveReply(message);
            _peersToReply.TryRemove(identity, out Address addr);
        }

        public async Task WaitForTestMessageWithData(
            string data,
            CancellationToken token = default)
        {
            if (_disposed)
            {
                throw new ObjectDisposedException(nameof(TestTransport));
            }

            if (!Running)
            {
                throw new TransportException("Start transport before use.");
            }

            while (!token.IsCancellationRequested && !ReceivedTestMessageOfData(data))
            {
                await Task.Delay(10, token);
            }
        }

        public bool ReceivedTestMessageOfData(string data)
        {
            if (_disposed)
            {
                throw new ObjectDisposedException(nameof(TestTransport));
            }

            return ReceivedMessages.Select(m => m.Content)
                .OfType<TestMessage>()
                .Any(c => c.Data == data);
        }

        private void ReceiveMessage(Message message)
        {
            if (_swarmCancellationTokenSource.IsCancellationRequested)
            {
                return;
            }

            MessageHistory.Enqueue(message);
            if (message.Content is TestMessage testMessage)
            {
                if (_ignoreTestMessageWithData.Contains(testMessage.Data))
                {
                    _logger.Debug("Ignore received test message {Data}", testMessage.Data);
                }
                else
                {
                    _logger.Debug("Received test message with {Data}", testMessage.Data);
                    _ignoreTestMessageWithData.Add(testMessage.Data);
                    // If this transport is blocked for testing, do not broadcast.
                    if (!_blockBroadcast)
                    {
                        BroadcastTestMessage(message.Remote.Address, testMessage.Data);
                    }
                }
            }
            else
            {
                if (message.Identity is null)
                {
                    throw new ArgumentNullException("message.Identity");
                }

                _peersToReply[message.Identity] = message.Remote.Address;
            }

            LastMessageTimestamp = DateTimeOffset.UtcNow;
            ReceivedMessages.Add(message);
            _ = ProcessMessageHandler.InvokeAsync(message);
            MessageReceived.Set();
        }

        private void ReceiveReply(Message message)
        {
            if (message.Identity is null)
            {
                throw new ArgumentNullException("message.Identity");
            }

            _replyToReceive[message.Identity] = message;
        }

        private async Task ProcessRuntime(CancellationToken cancellationToken)
        {
            while (!cancellationToken.IsCancellationRequested)
            {
                Request req = await _requests.TakeAsync(cancellationToken);

                if (req.Message.Timestamp + _networkDelay <= DateTimeOffset.UtcNow)
                {
                    _logger.Debug(
                        "Send {Content} with identity {Identity} to {Peer}",
                        req.Message.Content,
                        req.Message.Identity,
                        req.Target);
                    _transports[req.Target.Address].ReceiveMessage(req.Message);
                }
                else
                {
                    await _requests.AddAsync(req, cancellationToken);
                    await Task.Delay(10, cancellationToken);
                }
            }
        }

        private struct Request
        {
            public BoundPeer Target;

            public Message Message;
        }
    }
}
