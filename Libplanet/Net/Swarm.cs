using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.IO;
using System.Linq;
using System.Runtime.Serialization.Formatters.Binary;
using System.Threading.Tasks;
using Libplanet.Crypto;
using NetMQ;
using NetMQ.Sockets;
using Nito.AsyncEx;
using Serilog;
using Serilog.Events;

namespace Libplanet.Net
{
    [Uno.GeneratedEquality]
    public partial class Swarm : ICollection<Peer>, IDisposable
    {
        private const int DefaultDialTimeout = 15;
        private readonly IDictionary<Peer, DateTime> _peers;
        private readonly IDictionary<Peer, DateTime> _removedPeers;

        private readonly PrivateKey _privateKey;
        private readonly RouterSocket _router;
        private readonly NetMQQueue<PeerSetDelta> _deltas;
        private readonly IDictionary<Uri, DealerSocket> _dealers;

        private readonly Uri _listenUrl;
        private readonly int _dialTimeout;
        private readonly AsyncLock _distributeMutex;
        private readonly AsyncLock _receiveMutex;

        private readonly ILogger _logger;

        private bool _contextInitialized;

        public Swarm(
            PrivateKey privateKey,
            Uri listenUrl,
            int dialTimeout = DefaultDialTimeout,
            DateTime? createdAt = null)
        {
            _privateKey = privateKey;
            _listenUrl = listenUrl;
            _dialTimeout = dialTimeout;
            _peers = new Dictionary<Peer, DateTime>();
            _removedPeers = new Dictionary<Peer, DateTime>();
            LastSeenTimestamps = new Dictionary<Peer, DateTime>();

            DateTime now = createdAt.GetValueOrDefault(DateTime.UtcNow);
            LastDistributed = now;
            LastReceived = now;
            DeltaDistributed = new AsyncManualResetEvent();
            DeltaReceived = new AsyncManualResetEvent();

            _dealers = new Dictionary<Uri, DealerSocket>();
            _router = new RouterSocket();
            _deltas = new NetMQQueue<PeerSetDelta>();

            _distributeMutex = new AsyncLock();
            _receiveMutex = new AsyncLock();

            _logger = Log.ForContext<Swarm>()
                .ForContext("Swarm_listenUrl", _listenUrl.ToString());
            _contextInitialized = false;
        }

        private enum MessageType : byte
        {
            Ping = 0x01,
            Pong = 0x02,
            PeerSetDelta = 0x03,
        }

        public int Count => _peers.Count;

        public bool IsReadOnly => false;

        [Uno.EqualityKey]
        public Peer AsPeer => new Peer(
            _privateKey.PublicKey,
            (_listenUrl != null) ? new[] { _listenUrl } : new Uri[] { });

        [Uno.EqualityIgnore]
        public AsyncManualResetEvent DeltaReceived { get; }

        [Uno.EqualityIgnore]
        public AsyncManualResetEvent DeltaDistributed { get; }

        public DateTime LastReceived { get; private set; }

        public DateTime LastDistributed { get; private set; }

        public IDictionary<Peer, DateTime> LastSeenTimestamps { get; private set; }

        public async Task<ISet<Peer>> AddPeersAsync(IEnumerable<Peer> peers, DateTime? timestamp = null)
        {
            if (timestamp == null)
            {
                timestamp = DateTime.UtcNow;
            }

            foreach (Peer peer in peers)
            {
                if (_removedPeers.ContainsKey(peer))
                {
                    _removedPeers.Remove(peer);
                }
            }

            var existingKeys = new HashSet<PublicKey>(_peers.Keys.Select(p => p.PublicKey));
            PublicKey publicKey = _privateKey.PublicKey;
            var addedPeers = new HashSet<Peer>();

            foreach (Peer peer in peers)
            {
                Peer addedPeer = peer;
                if (peer.PublicKey == publicKey)
                {
                    continue;
                }

                if (existingKeys.Contains(peer.PublicKey))
                {
                    continue;
                }

                if (_contextInitialized)
                {
                    try
                    {
                        _logger.Debug($"Trying to DialPeerAsync({peer})...");
                        addedPeer = await DialPeerAsync(peer);
                        _logger.Debug($"DialPeerAsync({peer}) is complete.");
                    }
                    catch (IOException e)
                    {
                        _logger.Error(e, $"IOException occured in DialPeerAsync({peer}).");
                        continue;
                    }
                }

                _peers[addedPeer] = timestamp.Value;
                addedPeers.Add(addedPeer);
            }

            return addedPeers;
        }

        public async Task<Swarm> InitContextAsync()
        {
            _router.Bind(_listenUrl.ToString());
            foreach (Peer peer in _peers.Keys)
            {
                try
                {
                    Peer replacedPeer = await DialPeerAsync(peer);
                    if (replacedPeer != peer)
                    {
                        _peers[replacedPeer] = _peers[peer];
                        _peers.Remove(peer);
                    }
                }
                catch (IOException e)
                {
                    _logger.Error(e, $"IOException occured in DialPeerAsync({peer}).");
                    continue;
                }
            }

            _contextInitialized = true;
            return this;
        }

        public void Add(Peer item)
        {
            if (_contextInitialized)
            {
                Peer dialed = DialPeerAsync(item).Result;
                _peers[dialed] = DateTime.UtcNow;
            }
            else
            {
                _peers[item] = DateTime.UtcNow;
            }
        }

        public void Clear()
        {
            _peers.Clear();
        }

        public bool Contains(Peer item)
        {
            return _peers.ContainsKey(item);
        }

        public void CopyTo(Peer[] array, int arrayIndex)
        {
            if (array == null)
            {
                throw new ArgumentNullException(nameof(array));
            }

            if (arrayIndex < 0)
            {
                throw new ArgumentOutOfRangeException();
            }

            if (array.Length < Count + arrayIndex)
            {
                throw new ArgumentException();
            }

            int index = arrayIndex;
            foreach (Peer peer in this)
            {
                array[index] = peer;
                index++;
            }
        }

        public async Task DisposeAsync()
        {
            _logger.Debug("Disposing...");
            if (_contextInitialized)
            {
                _removedPeers[AsPeer] = DateTime.UtcNow;
                await DistributeDeltaAsync(false);

                _router.Dispose();
                _deltas.Dispose();
                foreach (DealerSocket s in _dealers.Values)
                {
                    s.Dispose();
                }

                _dealers.Clear();

                _contextInitialized = false;
            }

            _logger.Debug("Disposed.");
        }

        public void Dispose()
        {
            DisposeAsync().Wait();
        }

        public IEnumerator<Peer> GetEnumerator()
        {
            return _peers.Keys.GetEnumerator();
        }

        public bool Remove(Peer item)
        {
            return _peers.Remove(item);
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return GetEnumerator();
        }

        public async Task RunAsync(int distributeInterval)
        {
            CheckEntered();

            await Task.WhenAll(
                RepeatDeltaDistributionAsync(distributeInterval),
                ReceiveMessageAsync(),
                ProcessDeltaAsync());
        }

        public async Task ReceiveMessageAsync()
        {
            CheckEntered();

            while (true)
            {
                NetMQMessage message = await _router.ReceiveMultipartMessageAsync();
                _logger.Debug($"Message received.[f-count: {message.FrameCount}]");
                byte[] addr = message[0].ToByteArray();
                var type = (MessageType)message[1].Buffer[0];

                switch (type)
                {
                    case MessageType.Ping:
                        _logger.Debug($"Ping received.");
                        NetMQMessage reply = CreateMessage(MessageType.Pong, addr);
                        await _router.SendMultipartMessageAsync(reply);
                        break;

                    case MessageType.PeerSetDelta:
                        byte[] payload = message[2].ToByteArray();
                        var (publicKey, msg) = VerifyMessage(payload);
                        using (var stream = new MemoryStream(msg))
                        {
                            var formatter = new BinaryFormatter();
                            _deltas.Enqueue((PeerSetDelta)formatter.Deserialize(stream));
                        }

                        break;
                    default:
                        _logger.Warning($"Can't recognize message type[{type}]. ignored.");
                        break;
                }
            }
        }

        public async Task ProcessDeltaAsync()
        {
            while (true)
            {
                PeerSetDelta delta;
                while (!_deltas.TryDequeue(out delta, TimeSpan.FromMilliseconds(100)))
                {
                    await Task.Delay(100);
                }

                Peer sender = delta.Sender;
                PublicKey senderKey = sender.PublicKey;

                if (!_peers.ContainsKey(sender) && _peers.Keys.All(p => senderKey != p.PublicKey))
                {
                    delta = new PeerSetDelta(
                        delta.Sender,
                        delta.Timestamp,
                        delta.AddedPeers.Add(sender),
                        delta.RemovedPeers,
                        delta.ExistingPeers
                    );
                }

                _logger.Debug($"Received the delta[{delta}].");

                using (await _receiveMutex.LockAsync())
                {
                    DeltaReceived.Reset();
                    _logger.Debug($"Trying to apply the delta[{delta}]...");
                    await ApplyDelta(delta);

                    LastReceived = delta.Timestamp;
                    LastSeenTimestamps[delta.Sender] = delta.Timestamp;

                    DeltaReceived.Set();
                }

                _logger.Debug($"The delta[{delta}] has been applied.");
            }
        }

        private static (PublicKey publicKey, byte[] bytes) VerifyMessage(byte[] bytes)
        {
            var formatter = new BinaryFormatter();
            using (var stream = new MemoryStream(bytes))
            {
                var d = (Dictionary<string, byte[]>)formatter.Deserialize(stream);

                if (!d.TryGetValue("sig", out byte[] signature))
                {
                    throw new InvalidMessageException("the message lacks key for signature: 'sig'");
                }

                if (!d.TryGetValue("msg", out byte[] message))
                {
                    throw new InvalidMessageException("the message lacks key for original message: 'msg'");
                }

                if (!d.TryGetValue("key", out byte[] keyBytes))
                {
                    throw new InvalidMessageException("the message lacks key for public key: 'key'");
                }

                var publicKey = new PublicKey(keyBytes);
                if (!publicKey.Verify(message, signature))
                {
                    throw new InvalidMessageException("the message signature is invalid");
                }

                return (publicKey, message);
            }
        }

        private static NetMQMessage CreateMessage(
            MessageType type, byte[] addr = null, params byte[][] frames)
        {
            var message = new NetMQMessage();
            if (addr != null)
            {
                message.Append(addr);
            }

            message.Append(new[] { (byte)type });
            foreach (byte[] frame in frames)
            {
                message.Append(frame);
            }

            return message;
        }

        private static IEnumerable<Peer> FilterPeers(
            IDictionary<Peer, DateTime> peers,
            DateTime before,
            DateTime? after = null,
            bool remove = false)
        {
            foreach (KeyValuePair<Peer, DateTime> kv in peers.ToList())
            {
                if (after != null && kv.Value <= after)
                {
                    continue;
                }

                if (kv.Value <= before)
                {
                    if (remove)
                    {
                        peers.Remove(kv.Key);
                    }

                    yield return kv.Key;
                }
            }
        }

        private byte[] SignMessage(byte[] bytes)
        {
            var payload = new Dictionary<string, byte[]>
            {
                ["sig"] = _privateKey.Sign(bytes),
                ["msg"] = bytes,
                ["key"] = _privateKey.PublicKey.Format(true),
            };

            var formatter = new BinaryFormatter();
            using (var stream = new MemoryStream())
            {
                formatter.Serialize(stream, payload);
                return stream.ToArray();
            }
        }

        private async Task ApplyDelta(PeerSetDelta delta)
        {
            PublicKey senderPublicKey = delta.Sender.PublicKey;
            bool firstEncounter = _peers.Keys.All(p => p.PublicKey != senderPublicKey);
            RemovePeers(delta.RemovedPeers, delta.Timestamp);
            var addedPeers = new HashSet<Peer>(delta.AddedPeers);

            if (delta.ExistingPeers != null)
            {
                ImmutableHashSet<PublicKey> removedPublicKeys = _removedPeers
                    .Keys.Select(p => p.PublicKey)
                    .ToImmutableHashSet();
                addedPeers.UnionWith(
                    delta.ExistingPeers.Where(
                        p => !removedPublicKeys.Contains(p.PublicKey)
                    )
                );
            }

            _logger.Debug("Trying to add peers...");
            ISet<Peer> added = await AddPeersAsync(addedPeers, delta.Timestamp);
            if (_logger.IsEnabled(LogEventLevel.Debug))
            {
                DumpDiffs(
                    delta,
                    added,
                    addedPeers.Except(added),
                    delta.RemovedPeers
                );
            }

            if (firstEncounter)
            {
                await DistributeDeltaAsync(true);
            }
        }

        private void DumpDiffs(
            PeerSetDelta delta,
            IEnumerable<Peer> added,
            IEnumerable<Peer> existing,
            IEnumerable<Peer> removed)
        {
            DateTime timestamp = delta.Timestamp;

            foreach (Peer peer in added)
            {
                _logger.Debug($"{timestamp} {delta.Sender} > +{peer}");
            }

            foreach (Peer peer in existing)
            {
                _logger.Debug($"{timestamp} {delta.Sender} > {peer}");
            }

            foreach (Peer peer in removed)
            {
                _logger.Debug($"{timestamp} {delta.Sender} > -{peer}");
            }
        }

        private void RemovePeers(IEnumerable<Peer> peers, DateTime timestamp)
        {
            PublicKey publicKey = _privateKey.PublicKey;
            foreach (Peer peer in peers)
            {
                if (peer.PublicKey != publicKey)
                {
                    continue;
                }

                _removedPeers[peer] = timestamp;
            }

            Dictionary<PublicKey, Peer[]> existingPeers = _peers.Keys.ToDictionary(
                p => p.PublicKey,
                p => new[] { p }
            );

            using (_distributeMutex.Lock())
            {
                foreach (Peer peer in peers)
                {
                    _peers.Remove(peer);

                    _logger.Debug($"Trying to close dealers associated {peer}.");
                    if (_contextInitialized)
                    {
                        CloseDealers(peer.Urls.ToImmutableHashSet());
                    }

                    if (existingPeers.TryGetValue(peer.PublicKey, out Peer[] remains))
                    {
                        foreach (Peer key in remains)
                        {
                            _peers.Remove(key);

                            if (_contextInitialized)
                            {
                                CloseDealers(key.Urls.ToImmutableHashSet());
                            }
                        }
                    }

                    _logger.Debug($"Dealers associated {peer} were closed.");
                }
            }
        }

        private void CloseDealers(IEnumerable<Uri> urls)
        {
            CheckEntered();

            foreach (Uri url in urls)
            {
                if (_dealers.TryGetValue(url, out DealerSocket sock))
                {
                    sock.Dispose();
                    _dealers.Remove(url);
                }
            }
        }

        private async Task<DealerSocket> DialAsync(Uri address)
        {
            CheckEntered();

            if (!_dealers.TryGetValue(address, out DealerSocket dialer))
            {
                dialer = new DealerSocket(address.ToString());
            }

            _logger.Debug($"Trying to Ping to [{address}]...");
            await dialer.SendFrameAsync(new[] { (byte)MessageType.Ping });

            _logger.Debug($"Waiting for Pong from [{address}]...");
            await dialer.ReceiveMultipartMessageAsync(_dialTimeout);

            _logger.Debug($"Pong received.");

            return dialer;
        }

        private async Task<Peer> DialPeerAsync(Peer peer)
        {
            Peer original = peer;
            DealerSocket dealer = null;

            foreach (var (url, i) in peer.Urls.Select((url, i) => (url, i)))
            {
                try
                {
                    _logger.Debug($"Trying to DialAsync({url})...");
                    dealer = await DialAsync(url);
                    _logger.Debug($"DialAsync({url}) is complete.");
                }
                catch (IOException e)
                {
                    _logger.Error(e, $"IOException occured in DialAsync({url}).");
                    continue;
                }

                if (i > 0)
                {
                    peer = new Peer(peer.PublicKey, peer.Urls.Skip(i));
                }

                _dealers[url] = dealer;
                break;
            }

            if (dealer == null)
            {
                throw new IOException($"not reachable at all to {original}");
            }

            return peer;
        }

        private async Task DistributeDeltaAsync(bool all)
        {
            CheckEntered();

            DateTime now = DateTime.UtcNow;
            var addedPeers = FilterPeers(
                _peers,
                before: now,
                after: LastDistributed).ToImmutableHashSet();
            var removedPeers = FilterPeers(
                _removedPeers,
                before: now,
                remove: true).ToImmutableHashSet();
            var delta = new PeerSetDelta(
                sender: AsPeer,
                timestamp: now,
                addedPeers: addedPeers,
                removedPeers: removedPeers,
                existingPeers: all ? _peers.Keys.ToImmutableHashSet().Except(addedPeers) : null
            );

            _logger.Debug($"Trying to distribute own delta[{delta.AddedPeers.Count}]...");
            if (delta.AddedPeers.Any() || delta.RemovedPeers.Any() || all)
            {
                using (var stream = new MemoryStream())
                {
                    var formatter = new BinaryFormatter();
                    formatter.Serialize(stream, delta);
                    LastDistributed = now;

                    using (await _distributeMutex.LockAsync())
                    {
                        DeltaDistributed.Reset();
                        var message = CreateMessage(
                            MessageType.PeerSetDelta,
                            null,
                            SignMessage(stream.ToArray()));
                        _logger.Debug("Send the delta to dealers...");

                        try
                        {
                            await BroadcastMesage(message, 300);
                        }
                        catch (TimeoutException e)
                        {
                            _logger.Error(e, "TimeoutException occured.");
                        }

                        _logger.Debug("The delta has been sent.");
                        DeltaDistributed.Set();
                    }
                }
            }
        }

        private Task BroadcastMesage(NetMQMessage message, int timeout)
        {
            return Task.WhenAll(
                _dealers.Values.Select(
                    s => s.SendMultipartMessageAsync(message, timeout)));
        }

        private async Task RepeatDeltaDistributionAsync(int interval)
        {
            int i = 1;
            while (true)
            {
                await DistributeDeltaAsync(i % 10 == 0);
                await Task.Delay(interval);
                i = (i + 1) % 10;
            }
        }

        private void CheckEntered()
        {
            if (!_contextInitialized)
            {
                throw new NoSwarmContextException(
                    "the object is not entered to the context yet"
                );
            }
        }
    }
}
