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
        private readonly ConcurrentDictionary<Address, PeerState> _peerStates;

        private readonly ILogger _logger;

        private DateTimeOffset _lastUpdated;

        public KBucket(int size, Random random, ILogger logger)
        {
            _size = size;
            _random = random;
            _logger = logger;
            _peerStates = new ConcurrentDictionary<Address, PeerState>();
            ReplacementCache = new ConcurrentDictionary<BoundPeer, DateTimeOffset>();

            _lastUpdated = DateTimeOffset.UtcNow;
        }

        public int Count => _peerStates.Count;

        /// <summary>
        /// Most recently used peer.
        /// </summary>
        public PeerState Head
        {
            get
            {
                return _peerStates.Aggregate(
                    (x, y) =>
                        x.Value.LastUpdated > y.Value.LastUpdated ? x : y
                ).Value;
            }
        }

        /// <summary>
        /// Least recently used peer.
        /// </summary>
        public PeerState Tail
        {
            get
            {
                return _peerStates.Aggregate(
                    (x, y) =>
                        x.Value.LastUpdated < y.Value.LastUpdated ? x : y
                ).Value;
            }
        }

        public IEnumerable<BoundPeer> Peers => _peerStates.Values.Select(state => state.Peer);

        public IEnumerable<PeerState> PeerStates => _peerStates.Values;

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

            if (_peerStates.ContainsKey(peer.Address))
            {
                _logger.Verbose("Bucket already contains peer {Peer}", peer);

                // This done because peer's other attribute except public key might be changed.
                // (eg. public IP address, endpoint)
                var peerDigest = _peerStates[peer.Address];
                peerDigest.Peer = peer;
                peerDigest.LastUpdated = updated;
            }
            else
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
                    if (_peerStates.TryAdd(peer.Address, new PeerState(peer, updated)))
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
        }

        public bool Contains(BoundPeer peer)
        {
            return _peerStates.ContainsKey(peer.Address);
        }

        public void Clear()
        {
            _peerStates.Clear();
            _lastUpdated = DateTimeOffset.UtcNow;
        }

        public bool RemovePeer(BoundPeer peer)
        {
            if (_peerStates.ContainsKey(peer.Address))
            {
                if (_peerStates.TryRemove(peer.Address, out var digest))
                {
                    _logger.Verbose("Removed peer {Peer} from bucket.", peer);
                    return true;
                }
                else
                {
                    _logger.Verbose("Failed to remove peer {Peer} from bucket.", peer);
                    return false;
                }
            }
            else
            {
                return false;
            }
        }

        public bool IsEmpty()
        {
            return _peerStates.Count == 0;
        }

        public bool IsFull()
        {
            return _peerStates.Count >= _size;
        }

        public BoundPeer GetRandomPeer(Address? except)
        {
            BoundPeer[] peers;
            if (except is null)
            {
                peers = _peerStates.Values.Select(d => d.Peer).ToArray();
            }
            else
            {
                peers = _peerStates
                    .Where(kv => !kv.Key.Equals(except.Value))
                    .Select(kv => kv.Value.Peer)
                    .ToArray();
            }

            int size = peers.Length;

            return size == 0 ? null : peers[_random.Next(size)];
        }

        public void Check(BoundPeer peer, DateTimeOffset start, DateTimeOffset end)
        {
            if (_peerStates.ContainsKey(peer.Address))
            {
                var state = _peerStates[peer.Address];
                state.LastChecked = start;
                state.Latency = end - start;
            }
        }
    }
}
