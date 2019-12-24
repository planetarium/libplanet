using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using Serilog;

namespace Libplanet.Net.Protocols
{
    internal class KBucket
    {
        private readonly int _size;
        private readonly Random _random;
        private readonly ConcurrentDictionary<BoundPeer, DateTimeOffset> _peers;

        private readonly ILogger _logger;

        private DateTimeOffset _lastUpdated;

        public KBucket(int size, Random random, ILogger logger)
        {
            _size = size;
            _random = random;
            _logger = logger;
            _peers = new ConcurrentDictionary<BoundPeer, DateTimeOffset>();
            ReplacementCache = new ConcurrentDictionary<BoundPeer, DateTimeOffset>();

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
                return _peers.Aggregate(
                    new KeyValuePair<BoundPeer, DateTimeOffset>(
                        null,
                        DateTimeOffset.MinValue
                    ),
                    (l, r) => l.Value > r.Value ? l : r
                );
            }
        }

        /// <summary>
        /// Least recently used peer.
        /// </summary>
        public KeyValuePair<BoundPeer, DateTimeOffset> Tail
        {
            get
            {
                return _peers.Aggregate(
                    new KeyValuePair<BoundPeer, DateTimeOffset>(
                        null,
                        DateTimeOffset.MaxValue
                    ),
                    (l, r) => l.Value < r.Value ? l : r
                );
            }
        }

        public IEnumerable<BoundPeer> Peers => _peers.Keys;

        // replacement candidate stored in this cache when
        // the bucket is full and least recently used peer responds.
        public ConcurrentDictionary<BoundPeer, DateTimeOffset> ReplacementCache { get; }

        // returns head if the bucket is full and doest not containing target.
        public void AddPeer(BoundPeer peer)
        {
            if (peer is null)
            {
                throw new ArgumentNullException(nameof(peer));
            }

            var updated = DateTimeOffset.UtcNow;
            BoundPeer hasPeer =
                _peers.FirstOrDefault(kv => kv.Key.PublicKey.Equals(peer.PublicKey)).Key;

            if (hasPeer is null)
            {
                if (IsFull())
                {
                    _logger.Verbose("Bucket is full to add peer {Peer}", peer);
                    if (ReplacementCache.TryAdd(peer, updated))
                    {
                        _logger.Verbose(
                            "Added {Peer} to replacement cache. (total: {Count})",
                            peer,
                            ReplacementCache.Count);
                    }
                }
                else
                {
                    _logger.Verbose("Bucket does not contains peer {Peer}", peer);
                    _lastUpdated = updated;
                    if (_peers.TryAdd(peer, updated))
                    {
                        _logger.Verbose("Peer {Peer} is added to bucket", peer);
                        _lastUpdated = updated;

                        if (ReplacementCache.TryRemove(peer, out var dateTimeOffset))
                        {
                            _logger.Verbose(
                                "Removed peer {Peer} from replacement cache. (total: {Count})",
                                peer,
                                ReplacementCache.Count);
                        }
                    }
                    else
                    {
                        _logger.Verbose("Failed to add peer {Peer} to bucket", peer);
                    }
                }
            }
            else
            {
                _logger.Verbose("Bucket already contains peer {Peer}", peer);

                // This done because peer's other attribute except public key might be changed.
                // (eg. public IP address, endpoint)
                _peers.TryRemove(hasPeer, out var dateTimeOffset);
                if (_peers.TryAdd(peer, updated))
                {
                    _lastUpdated = updated;
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

        public bool RemovePeer(BoundPeer peer)
        {
            BoundPeer hasPeer = _peers.FirstOrDefault(
                kv => kv.Key.PublicKey.Equals(peer.PublicKey)).Key;
            if (hasPeer is null)
            {
                return false;
            }

            if (_peers.TryRemove(hasPeer, out var dateTimeOffset))
            {
                _logger.Verbose("Removed peer {Peer} from bucket.", peer);
                return true;
            }
            else
            {
                _logger.Verbose("Failded to remove peer {Peer} from bucket.", peer);
                return false;
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

        public BoundPeer GetRandomPeer(Address? except)
        {
            BoundPeer[] peers;
            if (except is null)
            {
                peers = _peers.Keys.ToArray();
            }
            else
            {
                peers = _peers.Keys
                    .Where(peer => !peer.Address.Equals(except.Value))
                    .ToArray();
            }

            int size = peers.Length;

            return size == 0 ? null : peers[_random.Next(size)];
        }
    }
}
