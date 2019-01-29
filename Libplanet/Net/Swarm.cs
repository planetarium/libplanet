using System;
using System.Collections;
using System.Collections.Async;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Net.Messages;
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
        private readonly IDictionary<Peer, DateTime> _peers;
        private readonly IDictionary<Peer, DateTime> _removedPeers;

        private readonly PrivateKey _privateKey;
        private readonly RouterSocket _router;
        private readonly NetMQQueue<PeerSetDelta> _deltas;
        private readonly IDictionary<Address, DealerSocket> _dealers;

        private readonly Uri _listenUrl;
        private readonly TimeSpan _dialTimeout;
        private readonly AsyncLock _distributeMutex;
        private readonly AsyncLock _receiveMutex;

        private readonly ILogger _logger;

        private bool _contextInitialized;

        public Swarm(
            PrivateKey privateKey,
            Uri listenUrl,
            int millisecondsDialTimeout = 15000,
            DateTime? createdAt = null)
            : this(
                  privateKey,
                  listenUrl,
                  TimeSpan.FromMilliseconds(millisecondsDialTimeout),
                  createdAt)
        {
        }

        public Swarm(
            PrivateKey privateKey,
            Uri listenUrl,
            TimeSpan? dialTimeout = null,
            DateTime? createdAt = null)
        {
            _privateKey = privateKey;
            _listenUrl = listenUrl;
            _dialTimeout = dialTimeout ?? TimeSpan.FromMilliseconds(15000);
            _peers = new Dictionary<Peer, DateTime>();
            _removedPeers = new Dictionary<Peer, DateTime>();
            LastSeenTimestamps = new Dictionary<Peer, DateTime>();

            DateTime now = createdAt.GetValueOrDefault(DateTime.UtcNow);
            LastDistributed = now;
            LastReceived = now;
            DeltaDistributed = new AsyncManualResetEvent();
            DeltaReceived = new AsyncManualResetEvent();

            _dealers = new Dictionary<Address, DealerSocket>();
            _router = new RouterSocket();
            _deltas = new NetMQQueue<PeerSetDelta>();

            _distributeMutex = new AsyncLock();
            _receiveMutex = new AsyncLock();

            _logger = Log.ForContext<Swarm>()
                .ForContext("Swarm_listenUrl", _listenUrl.ToString());
            _contextInitialized = false;
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

        public async Task<ISet<Peer>> AddPeersAsync(
            IEnumerable<Peer> peers,
            DateTime? timestamp = null,
            CancellationToken cancellationToken = default(CancellationToken))
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
                        addedPeer = await DialPeerAsync(peer, cancellationToken);
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

        public async Task<Swarm> InitContextAsync(
            CancellationToken cancellationToken = default(CancellationToken))
        {
            _router.Bind(_listenUrl.ToString());
            foreach (Peer peer in _peers.Keys)
            {
                try
                {
                    Peer replacedPeer = await DialPeerAsync(peer, cancellationToken);
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
                Peer dialed = DialPeerAsync(item, CancellationToken.None).Result;
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

        public async Task DisposeAsync(
            CancellationToken cancellationToken = default(CancellationToken))
        {
            _logger.Debug("Disposing...");
            if (_contextInitialized)
            {
                _removedPeers[AsPeer] = DateTime.UtcNow;
                await DistributeDeltaAsync(false, cancellationToken);

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

        public async Task RunAsync<T>(
            Blockchain<T> blockchain,
            int distributeInterval,
            CancellationToken cancellationToken = default(CancellationToken))
            where T : IAction
        {
            CheckEntered();

            await Task.WhenAll(
                RepeatDeltaDistributionAsync(
                    distributeInterval, cancellationToken),
                ReceiveMessageAsync(blockchain, cancellationToken),
                ProcessDeltaAsync(cancellationToken));
        }

        internal async Task<IEnumerable<HashDigest<SHA256>>> GetBlockHashesAsync(
            Peer peer,
            BlockLocator locator,
            HashDigest<SHA256>? stop,
            CancellationToken token = default(CancellationToken))
        {
            CheckEntered();

            if (!_dealers.TryGetValue(peer.Address, out DealerSocket sock))
            {
                throw new PeerNotFoundException(
                    $"The peer[{peer.Address}] could not be found.");
            }

            return await GetBlockHashesAsync(sock, locator, stop, token);
        }

        internal async Task<IEnumerable<HashDigest<SHA256>>> GetBlockHashesAsync(
            DealerSocket sock,
            BlockLocator locator,
            HashDigest<SHA256>? stop,
            CancellationToken cancellationToken)
        {
            var request = new GetBlocks(locator, stop);
            await sock.SendMultipartMessageAsync(
                request.ToNetMQMessage(_privateKey),
                cancellationToken: cancellationToken);

            NetMQMessage response = await sock.ReceiveMultipartMessageAsync();
            Message parsedMessage = Message.Parse(response, reply: true);
            if (parsedMessage is Inventory inv)
            {
                return inv.BlockHashes;
            }

            throw new InvalidMessageException(
                $"The response of getblock isn't inventory. " +
                $"but {parsedMessage}");
        }

        // TODO: Add TxIds
        internal IAsyncEnumerable<Block<T>> GetDataAsync<T>(
            Peer peer,
            IEnumerable<HashDigest<SHA256>> blockHashes,
            CancellationToken cancellationToken = default(CancellationToken))
            where T : IAction
        {
            CheckEntered();

            if (!_dealers.TryGetValue(peer.Address, out DealerSocket sock))
            {
                throw new PeerNotFoundException(
                    $"The peer[{peer.Address}] could not be found.");
            }

            return new AsyncEnumerable<Block<T>>(async yield =>
            {
                var request = new GetData(blockHashes);
                await sock.SendMultipartMessageAsync(
                    request.ToNetMQMessage(_privateKey),
                    cancellationToken: cancellationToken);

                int hashCount = blockHashes.Count();
                while (hashCount > 0)
                {
                    NetMQMessage response =
                    await sock.ReceiveMultipartMessageAsync();
                    Message parsedMessage = Message.Parse(response, true);
                    if (parsedMessage is Block blockMessage)
                    {
                        Block<T> block = Block<T>.FromBencodex(
                            blockMessage.Payload);
                        await yield.ReturnAsync(block);
                        hashCount--;
                    }
                    else
                    {
                        throw new InvalidMessageException(
                            $"The response of getdata isn't block. " +
                            $"but {parsedMessage}");
                    }
                }
            });
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

        private async Task ReceiveMessageAsync<T>(
            Blockchain<T> blockchain, CancellationToken cancellationToken)
            where T : IAction
        {
            CheckEntered();

            while (true)
            {
                NetMQMessage rawMessage = await
                    _router.ReceiveMultipartMessageAsync(
                        cancellationToken: cancellationToken);
                _logger.Debug(
                    $"Message received.[f-count: {rawMessage.FrameCount}]");

                try
                {
                    Message message = Message.Parse(rawMessage, reply: false);

                    // Queue a task per message to avoid blocking.
                    #pragma warning disable CS4014
                    Task.Run(async () =>
                    {
                        // it's still async because some method it relies are
                        // async yet.
                        await ProcessMessageAsync(blockchain, message, cancellationToken);
                    });
                    #pragma warning restore CS4014
                }
                catch (InvalidMessageException e)
                {
                    _logger.Error(e, "Can't parsed NetMQMessage properly. ignored.");
                }
            }
        }

        private async Task ProcessMessageAsync<T>(
            Blockchain<T> blockchain,
            Message message,
            CancellationToken cancellationToken)
            where T : IAction
        {
            switch (message)
            {
                case Ping ping:
                    _logger.Debug($"Ping received.");
                    var reply = new Pong
                    {
                        Identity = ping.Identity,
                    };
                    await ReplyAsync(reply, cancellationToken);
                    break;

                case Messages.PeerSetDelta peerSetDelta:
                    _deltas.Enqueue(peerSetDelta.Delta);
                    break;

                case GetBlocks getBlocks:
                    IEnumerable<HashDigest<SHA256>> inventories =
                        blockchain.FindNextHashes(
                            getBlocks.Locator, getBlocks.Stop, 500);

                    var inv = new Inventory(inventories)
                    {
                        Identity = getBlocks.Identity,
                    };
                    await ReplyAsync(inv, cancellationToken);
                    break;

                case GetData getData:
                    await TransferBlocks(
                        blockchain, getData, cancellationToken);
                    break;

                default:
                    Trace.Fail($"Can't handle message. [{message}]");
                    break;
            }
        }

        private async Task ReplyAsync(Message message, CancellationToken token)
        {
            NetMQMessage netMQMessage = message.ToNetMQMessage(_privateKey);
            await _router.SendMultipartMessageAsync(
                netMQMessage,
                cancellationToken: token);
        }

        private async Task TransferBlocks<T>(
            Blockchain<T> blockchain,
            GetData getData,
            CancellationToken cancellationToken)
            where T : IAction
        {
            foreach (HashDigest<SHA256> hash in getData.BlockHashes)
            {
                if (blockchain.Blocks.TryGetValue(hash, out Block<T> block))
                {
                    Message response = new Block(block.ToBencodex(true, true))
                    {
                        Identity = getData.Identity,
                    };
                    await ReplyAsync(response, cancellationToken);
                }
            }
        }

        private async Task ProcessDeltaAsync(CancellationToken cancellationToken)
        {
            while (true)
            {
                PeerSetDelta delta;
                while (!_deltas.TryDequeue(out delta, TimeSpan.FromMilliseconds(100)))
                {
                    await Task.Delay(100, cancellationToken);
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

                using (await _receiveMutex.LockAsync(cancellationToken))
                {
                    DeltaReceived.Reset();
                    _logger.Debug($"Trying to apply the delta[{delta}]...");
                    await ApplyDelta(delta, cancellationToken);

                    LastReceived = delta.Timestamp;
                    LastSeenTimestamps[delta.Sender] = delta.Timestamp;

                    DeltaReceived.Set();
                }

                _logger.Debug($"The delta[{delta}] has been applied.");
            }
        }

        private async Task ApplyDelta(PeerSetDelta delta, CancellationToken cancellationToken)
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
            ISet<Peer> added = await AddPeersAsync(
                addedPeers, delta.Timestamp, cancellationToken);
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
                await DistributeDeltaAsync(true, cancellationToken);
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
                        CloseDealer(peer);
                    }

                    if (existingPeers.TryGetValue(peer.PublicKey, out Peer[] remains))
                    {
                        foreach (Peer key in remains)
                        {
                            _peers.Remove(key);

                            if (_contextInitialized)
                            {
                                CloseDealer(key);
                            }
                        }
                    }

                    _logger.Debug($"Dealers associated {peer} were closed.");
                }
            }
        }

        private void CloseDealer(Peer peer)
        {
            CheckEntered();
            if (_dealers.TryGetValue(peer.Address, out DealerSocket dealer))
            {
                dealer.Dispose();
                _dealers.Remove(peer.Address);
            }
        }

        private async Task<DealerSocket> DialAsync(
            Uri address, DealerSocket dealer, CancellationToken cancellationToken)
        {
            CheckEntered();

            dealer.Connect(address.ToString());

            _logger.Debug($"Trying to Ping to [{address}]...");
            var ping = new Ping();
            await dealer.SendMultipartMessageAsync(
                ping.ToNetMQMessage(_privateKey),
                cancellationToken: cancellationToken);

            _logger.Debug($"Waiting for Pong from [{address}]...");
            await dealer.ReceiveMultipartMessageAsync(
                timeout: _dialTimeout,
                cancellationToken: cancellationToken);

            _logger.Debug($"Pong received.");

            return dealer;
        }

        private async Task<Peer> DialPeerAsync(
            Peer peer, CancellationToken cancellationToken)
        {
            Peer original = peer;
            if (!_dealers.TryGetValue(peer.Address, out DealerSocket dealer))
            {
                dealer = new DealerSocket();
                dealer.Options.Identity = _privateKey.PublicKey.ToAddress().ToByteArray();
            }

            foreach (var (url, i) in peer.Urls.Select((url, i) => (url, i)))
            {
                try
                {
                    _logger.Debug($"Trying to DialAsync({url})...");
                    await DialAsync(url, dealer, cancellationToken);
                    _logger.Debug($"DialAsync({url}) is complete.");
                }
                catch (IOException e)
                {
                    _logger.Error(e, $"IOException occured in DialAsync({url}).");
                    dealer.Disconnect(url.ToString());
                    continue;
                }

                if (i > 0)
                {
                    peer = new Peer(peer.PublicKey, peer.Urls.Skip(i));
                }

                _dealers[peer.Address] = dealer;
                break;
            }

            if (dealer == null)
            {
                throw new IOException($"not reachable at all to {original}");
            }

            return peer;
        }

        private async Task DistributeDeltaAsync(
            bool all, CancellationToken cancellationToken)
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
                LastDistributed = now;

                using (await _distributeMutex.LockAsync(cancellationToken))
                {
                    DeltaDistributed.Reset();
                    var message = new Messages.PeerSetDelta(delta);
                    _logger.Debug("Send the delta to dealers...");

                    try
                    {
                        await BroadcastMessage(
                            message.ToNetMQMessage(_privateKey),
                            TimeSpan.FromMilliseconds(300),
                            cancellationToken);
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

        private Task BroadcastMessage(
            NetMQMessage message,
            TimeSpan timeout,
            CancellationToken cancellationToken)
        {
            return Task.WhenAll(
                _dealers.Values.Select(
                    s => s.SendMultipartMessageAsync(
                        message,
                        timeout: timeout,
                        cancellationToken: cancellationToken)));
        }

        private async Task RepeatDeltaDistributionAsync(
            int interval, CancellationToken cancellationToken)
        {
            int i = 1;
            while (true)
            {
                await DistributeDeltaAsync(i % 10 == 0, cancellationToken);
                await Task.Delay(interval, cancellationToken);
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
