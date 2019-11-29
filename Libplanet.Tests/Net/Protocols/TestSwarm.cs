using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Crypto;
using Libplanet.Net;
using Libplanet.Net.Messages;
using Libplanet.Net.Protocols;
using Nito.AsyncEx;
using Serilog;

namespace Libplanet.Tests.Net.Protocols
{
    public class TestSwarm : ISwarm
    {
        private readonly Dictionary<Address, TestSwarm> _swarms;
        private readonly ILogger _logger;
        private readonly ConcurrentDictionary<byte[], Address> _peersToReply;
        private readonly ConcurrentDictionary<byte[], Message> _replyToReceive;
        private readonly AsyncCollection<Request> _requests;
        private readonly List<string> _ignoreTestMessageWithData;
        private readonly PrivateKey _privateKey;
        private readonly Random _random;

        private CancellationTokenSource swarmCancellationTokenSource;
        private TimeSpan _networkDelay;

        public TestSwarm(
            Dictionary<Address, TestSwarm> swarms,
            PrivateKey privateKey,
            int? tableSize,
            int? bucketSize,
            TimeSpan? networkDelay)
        {
            _privateKey = privateKey;
            var loggerId = _privateKey.PublicKey.ToAddress().ToHex();
            _logger = Log.ForContext<TestSwarm>()
                .ForContext("Address", loggerId);
            Protocol = new KademliaProtocol(this, Address, 0, _logger, tableSize, bucketSize);
            _peersToReply = new ConcurrentDictionary<byte[], Address>();
            _replyToReceive = new ConcurrentDictionary<byte[], Message>();
            ReceivedMessages = new ConcurrentBag<Message>();
            MessageReceived = new AsyncAutoResetEvent();
            _swarms = swarms;
            _swarms[privateKey.PublicKey.ToAddress()] = this;
            _networkDelay = networkDelay ?? TimeSpan.Zero;
            _requests = new AsyncCollection<Request>();
            _ignoreTestMessageWithData = new List<string>();
            _random = new Random();
        }

        public IEnumerable<BoundPeer> Peers => Protocol.Peers;

        public AsyncAutoResetEvent MessageReceived { get; }

        public Address Address => _privateKey.PublicKey.ToAddress();

        public BoundPeer AsPeer => new BoundPeer(
            _privateKey.PublicKey,
            new DnsEndPoint("localhost", 1234),
            0);

        internal ConcurrentBag<Message> ReceivedMessages { get; }

        internal IProtocol Protocol { get; }

        internal bool Running => !(swarmCancellationTokenSource is null);

        public void Dispose()
        {
        }

        public async void Start()
        {
            swarmCancellationTokenSource = new CancellationTokenSource();
            await ProcessRuntime(swarmCancellationTokenSource.Token);
        }

        public Task BootstrapAsync(
            IEnumerable<BoundPeer> peers,
            TimeSpan? pingSeedTimeout = null,
            TimeSpan? findPeerTimeout = null,
            CancellationToken cancellationToken = default(CancellationToken))
        {
            if (!Running)
            {
                throw new SwarmException("Start swarm before use.");
            }

            if (peers is null)
            {
                throw new ArgumentNullException(nameof(peers));
            }

            async Task DoBootstrapAsync()
            {
                await Protocol.BootstrapAsync(
                    peers.ToImmutableList(),
                    pingSeedTimeout,
                    findPeerTimeout,
                    Kademlia.MaxDepth,
                    cancellationToken);
            }

            return DoBootstrapAsync();
        }

        public Task AddPeersAsync(
            IEnumerable<BoundPeer> peers,
            TimeSpan? timeout,
            CancellationToken cancellationToken = default(CancellationToken))
        {
            if (!Running)
            {
                throw new SwarmException("Start swarm before use.");
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
                    foreach (BoundPeer peer in peers)
                    {
                        tasks.Add(kp.PingAsync(
                            peer,
                            timeout: timeout,
                            cancellationToken: cancellationToken));
                    }

                    _logger.Verbose("Trying to ping all {PeersNumber} peers.", tasks.Count);
                    await Task.WhenAll(tasks);
                    _logger.Verbose("Update complete.");
                }
                catch (DifferentAppProtocolVersionException)
                {
                    _logger.Debug("Different version encountered during AddPeersAsync().");
                }
                catch (TimeoutException)
                {
                    _logger.Debug(
                        $"Timeout occurred during {nameof(AddPeersAsync)}() after {timeout}.");
                    throw;
                }
                catch (TaskCanceledException)
                {
                    _logger.Debug($"Task is cancelled during {nameof(AddPeersAsync)}().");
                }
                catch (Exception e)
                {
                    _logger.Error(
                        e,
                        $"Unexpected exception occurred during {nameof(AddPeersAsync)}().");
                    throw;
                }
            }

            return DoAddPeersAsync();
        }

        public void Stop()
        {
            swarmCancellationTokenSource.Cancel();
        }

        public void SendPing(Peer target, TimeSpan? timeSpan = null)
        {
            if (!Running)
            {
                throw new SwarmException("Start swarm before use.");
            }

            if (!(target is BoundPeer boundPeer))
            {
                throw new ArgumentException("Target peer does not have endpoint.", nameof(target));
            }

            Task.Run(() =>
            {
                (Protocol as KademliaProtocol).PingAsync(
                    boundPeer,
                    timeSpan,
                    default(CancellationToken));
            });
        }

        public void BroadcastTestMessage(string data)
        {
            if (!Running)
            {
                throw new SwarmException("Start swarm before use.");
            }

            var message = new TestMessage(data) { Remote = AsPeer };
            var peers = Protocol.PeersToBroadcast.ToList();
            _ignoreTestMessageWithData.Add(data);
            _logger.Debug(
                "Broadcasting test message {Data} to {Count} peers.",
                data,
                peers.Count);
            foreach (var peer in peers)
            {
                _requests.Add(new Request()
                {
                    RequestTime = DateTimeOffset.UtcNow,
                    Message = message,
                    Target = peer,
                });
            }
        }

#pragma warning disable 4014, S4457
        async Task<Message> ISwarm.SendMessageWithReplyAsync(
            BoundPeer peer,
            Message message,
            TimeSpan? timeout,
            CancellationToken cancellationToken)
        {
            if (!Running)
            {
                throw new SwarmException("Start swarm before use.");
            }

            if (!(peer is BoundPeer boundPeer))
            {
                throw new ArgumentException("Target peer is not a BoundPeer.");
            }

            message.Remote = AsPeer;
            var bytes = new byte[10];
            _random.NextBytes(bytes);
            message.Identity = _privateKey.PublicKey.ToAddress().ByteArray.Concat(bytes).ToArray();
            var sendTime = DateTimeOffset.UtcNow;
            _logger.Debug("Adding request of {Message} of {Identity}.", message, message.Identity);
            await _requests.AddAsync(
                new Request()
                {
                    RequestTime = sendTime,
                    Message = message,
                    Target = peer,
                }, cancellationToken);

            while (!cancellationToken.IsCancellationRequested &&
                   !_replyToReceive.ContainsKey(message.Identity))
            {
                if (DateTimeOffset.UtcNow - sendTime > (timeout ?? TimeSpan.MaxValue))
                {
                    _logger.Error(
                        "Reply of {Message} of {identity} did not received in " +
                        "expected timespan {TimeSpan}.",
                        message,
                        message.Identity,
                        timeout ?? TimeSpan.MaxValue);
                    throw new TimeoutException(
                        $"Timeout occurred during {nameof(ISwarm.SendMessageWithReplyAsync)}().");
                }

                await Task.Delay(10, cancellationToken);
            }

            if (cancellationToken.IsCancellationRequested)
            {
                throw new OperationCanceledException(
                    $"Operation is canceled during {nameof(ISwarm.SendMessageWithReplyAsync)}().");
            }

            if (_replyToReceive.TryRemove(message.Identity, out Message reply))
            {
                _logger.Debug(
                    "Received reply {Reply} of message with identity {identity}.",
                    reply,
                    message.Identity);
                ReceivedMessages.Add(reply);
                MessageReceived.Set();
                return reply;
            }
            else
            {
                _logger.Error(
                    "Unexpected error occurred during " +
                    $"{nameof(ISwarm.SendMessageWithReplyAsync)}()");
                throw new SwarmException();
            }
        }
#pragma warning restore 4014, S4457

        void ISwarm.ReplyMessage(Message message)
        {
            if (!Running)
            {
                throw new SwarmException("Start swarm before use.");
            }

            _logger.Debug("Replying {Message}...", message);
            message.Remote = AsPeer;
            Task.Run(async () =>
            {
                await Task.Delay(_networkDelay);
                _swarms[_peersToReply[message.Identity]].ReceiveReply(message);
                _peersToReply.TryRemove(message.Identity, out Address addr);
            });
        }

        public async Task WaitForTestMessageWithData(string data)
        {
            if (!Running)
            {
                throw new SwarmException("Start swarm before use.");
            }

            while (!ReceivedTestMessageOfData(data))
            {
                await Task.Delay(10);
            }
        }

        public bool ReceivedTestMessageOfData(string data)
        {
            if (!Running)
            {
                throw new SwarmException("Start swarm before use.");
            }

            return ReceivedMessages.OfType<TestMessage>().Select(msg => msg.Data == data).Any();
        }

        private void ReceiveMessage(Message message)
        {
            if (swarmCancellationTokenSource.IsCancellationRequested)
            {
                return;
            }

            if (!(message.Remote is BoundPeer boundPeer))
            {
                throw new ArgumentException("Sender of message is not a BoundPeer.");
            }

            if (message is TestMessage testMessage)
            {
                if (_ignoreTestMessageWithData.Contains(testMessage.Data))
                {
                    _logger.Debug("Ignore received test message {Data}.", testMessage.Data);
                    return;
                }
                else
                {
                    _logger.Debug("Received test message with {Data}.", testMessage.Data);
                    _ignoreTestMessageWithData.Add(testMessage.Data);
                    BroadcastTestMessage(testMessage.Data);
                }
            }
            else
            {
                _peersToReply[message.Identity] = boundPeer.Address;
            }

            ReceivedMessages.Add(message);
            MessageReceived.Set();

            Protocol.ReceiveMessage(message);
        }

        private void ReceiveReply(Message message)
        {
            _replyToReceive[message.Identity] = message;
        }

        private async Task ProcessRuntime(CancellationToken cancellationToken)
        {
            while (!cancellationToken.IsCancellationRequested)
            {
                Request req = await _requests.TakeAsync(cancellationToken);

                if (req.RequestTime + _networkDelay <= DateTimeOffset.UtcNow)
                {
                    _logger.Debug(
                        "Send {Message} with {Identity} to {Peer}.",
                        req.Message,
                        req.Message.Identity,
                        req.Target);
                    _swarms[req.Target.Address].ReceiveMessage(req.Message);
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
            public DateTimeOffset RequestTime;

            public BoundPeer Target;

            public Message Message;
        }
    }
}
