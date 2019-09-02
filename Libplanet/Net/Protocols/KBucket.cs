using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Collections.Immutable;

namespace Libplanet.Net.Protocols
{
    internal class KBucket
    {
        private readonly int _size;
        private readonly Random _random;
        private readonly List<BoundPeer> _peers;

        private DateTimeOffset _lastUpdated;

        public KBucket(int size, Random random)
        {
            _size = size;
            _random = random;
            _peers = new List<BoundPeer>();
            ReplacementCache = new List<BoundPeer>();

            _lastUpdated = DateTimeOffset.UtcNow;
        }

        public int Count => _peers.Count;

        // get most recently used peer.
        public BoundPeer Head => IsEmpty() ? null : _peers[_peers.Count - 1];

        // get least recently used peer.
        public BoundPeer Tail => IsEmpty() ? null : _peers[0];

        public ImmutableList<BoundPeer> Peers => _peers.ToImmutableList();

        // replacement candidate stored in this cache when
        // the bucket is full and least recently used peer responds.
        public List<BoundPeer> ReplacementCache { get; }

        // returns head if the bucket is full and doest not containing target.
        public BoundPeer AddPeer(BoundPeer peer)
        {
            _lastUpdated = DateTimeOffset.UtcNow;
            ReplacementCache.Remove(peer);
            BoundPeer exists = _peers.Find(p => p.PublicKey.Equals(peer.PublicKey));

            if (!(exists is null))
            {
                _peers.Remove(exists);
                _peers.Add(peer);
                return null;
            }
            else if (IsFull())
            {
                return Tail;
            }
            else
            {
                _peers.Add(peer);
                return null;
            }
        }

        public bool Contains(BoundPeer peer)
        {
            return _peers.Contains(peer);
        }

        public void Clear()
        {
            _peers.Clear();
            _lastUpdated = DateTimeOffset.UtcNow;
        }

        public bool RemovePeer(BoundPeer peer)
        {
            return _peers.Remove(peer);
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

            return size == 0 ? null : _peers[_random.Next(size)];
        }
    }
}
