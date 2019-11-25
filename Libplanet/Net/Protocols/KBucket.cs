using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Nito.AsyncEx;
using Serilog;

namespace Libplanet.Net.Protocols
{
    internal class KBucket
    {
        private readonly int _size;
        private readonly Random _random;
        private readonly ConcurrentDictionary<BoundPeer, DateTimeOffset> _peers;
        private readonly AsyncLock _bucketMutex;

        private readonly ILogger _logger;

        private DateTimeOffset _lastUpdated;

        public KBucket(int size, Random random, ILogger logger)
        {
            _size = size;
            _random = random;
            _logger = logger;
            _peers = new ConcurrentDictionary<BoundPeer, DateTimeOffset>();
            ReplacementCache = new List<BoundPeer>();
            _bucketMutex = new AsyncLock();

            _lastUpdated = DateTimeOffset.UtcNow;
        }

        public int Count => _peers.Count;

        /// <summary>
        /// Most recently used peer.
        /// </summary>
        public KeyValuePair<BoundPeer, DateTimeOffset> Head
        {
            get
            {
                var mru = default(KeyValuePair<BoundPeer, DateTimeOffset>);
                DateTimeOffset max = DateTimeOffset.MinValue;
                foreach (var kv in _peers)
                {
                    if (kv.Value > max)
                    {
                        mru = kv;
                        max = kv.Value;
                    }
                }

                return mru;
            }
        }

        /// <summary>
        /// Least recently used peer.
        /// </summary>
        public KeyValuePair<BoundPeer, DateTimeOffset> Tail
        {
            get
            {
                var lru = default(KeyValuePair<BoundPeer, DateTimeOffset>);
                DateTimeOffset min = DateTimeOffset.MaxValue;
                foreach (var kv in _peers)
                {
                    if (kv.Value < min)
                    {
                        lru = kv;
                        min = kv.Value;
                    }
                }

                return lru;
            }
        }

        public IEnumerable<BoundPeer> Peers => _peers.Keys;

        // replacement candidate stored in this cache when
        // the bucket is full and least recently used peer responds.
        public List<BoundPeer> ReplacementCache { get; }

        // returns head if the bucket is full and doest not containing target.
        public async Task AddPeerAsync(
            BoundPeer peer,
            CancellationToken cancellationToken = default(CancellationToken))
        {
            if (peer is null)
            {
                throw new ArgumentNullException(nameof(peer));
            }

            using (await _bucketMutex.LockAsync(cancellationToken))
            {
                _lastUpdated = DateTimeOffset.UtcNow;
                BoundPeer hasPeer =
                    _peers.FirstOrDefault(kv => kv.Key.PublicKey.Equals(peer.PublicKey)).Key;

                if (hasPeer is null)
                {
                    if (IsFull())
                    {
                        _logger.Verbose("Bucket is full to add peer {Peer}", peer);
                        if (!ReplacementCache.Contains(peer))
                        {
                            ReplacementCache.Add(peer);
                            _logger.Verbose(
                                "Added {Peer} to replacement cache. (total: {Count})",
                                peer,
                                ReplacementCache.Count);
                        }
                    }
                    else
                    {
                        _logger.Verbose("Bucket does not contains peer {Peer}", peer);
                        if (ReplacementCache.Remove(peer))
                        {
                            _logger.Verbose(
                                "Removed peer {Peer} from replacement cache. (total: {Count})",
                                peer,
                                ReplacementCache.Count);
                        }

                        _peers[peer] = DateTimeOffset.UtcNow;
                    }
                }
                else
                {
                    _logger.Verbose("Bucket already contains peer {Peer}", peer);

                    // This done because peer's other attribute except public key might be changed.
                    // (eg. public IP address, endpoint)
                    _peers.TryRemove(hasPeer, out var dateTimeOffset);
                    _peers[peer] = DateTimeOffset.UtcNow;
                }
            }
        }

        public bool Contains(BoundPeer peer)
        {
            return _peers.Any(kv => kv.Key.PublicKey.Equals(peer.PublicKey));
        }

        public void Clear()
        {
            _peers.Clear();
            _lastUpdated = DateTimeOffset.UtcNow;
        }

        public async Task<bool> RemovePeerAsync(
            BoundPeer peer,
            CancellationToken cancellationToken = default(CancellationToken))
        {
            using (await _bucketMutex.LockAsync(cancellationToken))
            {
                BoundPeer hasPeer = _peers.FirstOrDefault(
                    kv => kv.Key.PublicKey.Equals(peer.PublicKey)).Key;
                if (hasPeer is null)
                {
                    return false;
                }

                _peers.TryRemove(hasPeer, out var dateTimeOffset);
                return true;
            }
        }

        public bool IsEmpty()
        {
            return _peers.Count == 0;
        }

        public bool IsFull()
        {
            return _peers.Count >= _size;
        }

        public BoundPeer GetRandomPeer()
        {
            var peers = _peers.Keys.ToArray();
            int size = _peers.Count;

            return size == 0 ? null : peers[_random.Next(size)];
        }
    }
}
