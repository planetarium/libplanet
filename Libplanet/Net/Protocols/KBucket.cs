using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using Serilog;

namespace Libplanet.Net.Protocols
{
    internal class KBucket
    {
        private readonly int _size;
        private readonly Random _random;
        private readonly List<(DateTimeOffset, BoundPeer)> _peers;

        private readonly ILogger _logger;

        private DateTimeOffset _lastUpdated;

        public KBucket(int size, Random random, ILogger logger)
        {
            _size = size;
            _random = random;
            _logger = logger;
            _peers = new List<(DateTimeOffset, BoundPeer)>();
            ReplacementCache = new List<BoundPeer>();

            _lastUpdated = DateTimeOffset.UtcNow;
        }

        public int Count => _peers.Count;

        // get most recently used peer.
        public (DateTimeOffset, BoundPeer) Head =>
            IsEmpty() ? (DateTimeOffset.MinValue, null) : _peers[_peers.Count - 1];

        // get least recently used peer.
        public (DateTimeOffset, BoundPeer) Tail =>
            IsEmpty() ? (DateTimeOffset.MinValue, null) : _peers[0];

        public ImmutableList<BoundPeer> Peers => IsEmpty() ?
            ImmutableList<BoundPeer>.Empty :
            _peers.Select(peerInfo => peerInfo.Item2).ToImmutableList();

        // replacement candidate stored in this cache when
        // the bucket is full and least recently used peer responds.
        public List<BoundPeer> ReplacementCache { get; }

        // returns head if the bucket is full and doest not containing target.
        public BoundPeer AddPeer(BoundPeer peer)
        {
            _lastUpdated = DateTimeOffset.UtcNow;
            int exists =
                _peers.FindIndex(p => p.Item2.Address.Equals(peer.Address));

            if (exists != -1)
            {
                _logger.Verbose("Bucket already contains [{peer}]", peer);
                _peers.RemoveAt(exists);
                _peers.Add((DateTimeOffset.UtcNow, peer));
                return null;
            }
            else if (IsFull())
            {
                _logger.Verbose("Bucket is full to add [{peer}]", peer);
                if (!ReplacementCache.Contains(peer))
                {
                    ReplacementCache.Add(peer);
                    _logger.Verbose(
                        "Added [{peer}] to replacement cache. (total: {count})",
                        peer,
                        ReplacementCache.Count);
                }

                return Tail.Item2;
            }
            else
            {
                _logger.Verbose("Bucket does not contains [{peer}]", peer);
                if (ReplacementCache.Remove(peer))
                {
                    _logger.Verbose(
                        "Removed [{peer}] from replacement cache. (total: {count})",
                        peer,
                        ReplacementCache.Count);
                }

                _peers.Add((DateTimeOffset.UtcNow, peer));
                return null;
            }
        }

        public bool Contains(BoundPeer peer)
        {
            return _peers.FindIndex(item => item.Item2.Equals(peer)) != -1;
        }

        public void Clear()
        {
            _peers.Clear();
            _lastUpdated = DateTimeOffset.UtcNow;
        }

        public bool RemovePeer(BoundPeer peer)
        {
            int index = _peers.FindIndex(item => item.Item2.Address.Equals(peer.Address));
            if (index == -1)
            {
                return false;
            }

            _peers.RemoveAt(index);
            return true;
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
            int size = _peers.Count;

            return size == 0 ? null : _peers[_random.Next(size)].Item2;
        }
    }
}
