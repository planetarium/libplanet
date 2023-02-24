using System;
using System.Collections.Generic;
using System.Linq;
using Serilog;

namespace Libplanet.Net.Protocols
{
    internal class KBucket
    {
        private readonly int _size;
        private readonly Random _random;
        private readonly KBucketDictionary _peerStates;
        private readonly KBucketDictionary _replacementCache;
        private readonly ILogger _logger;

        public KBucket(int size, Random random, ILogger logger)
        {
            if (size <= 0)
            {
                throw new ArgumentOutOfRangeException(
                    $"The value of {nameof(size)} must be positive.");
            }

            _size = size;
            _random = random;
            _logger = logger;
            _peerStates = new KBucketDictionary(_size, false, logger);
            _replacementCache = new KBucketDictionary(_size, true, logger);
        }

        public int Count => _peerStates.Count;

        public bool IsEmpty => _peerStates.Count == 0;

        public bool IsFull => _peerStates.Count >= _size;

        /// <summary>
        /// The <see cref="PeerState"/> used most recently. If the bucket is empty,
        /// this is <see langword="null"/>.
        /// </summary>
        public PeerState? Head => _peerStates.Head;

        /// <summary>
        /// The <see cref="PeerState"/> used longest time ago. If the bucket is empty,
        /// this is <see langword="null"/>.
        /// </summary>
        public PeerState? Tail => _peerStates.Tail;

        public IEnumerable<BoundPeer> Peers => _peerStates.Peers;

        public IEnumerable<PeerState> PeerStates => _peerStates.PeerStates;

        // replacement candidate stored in this cache when
        // the bucket is full and least recently used peer responds.
        public KBucketDictionary ReplacementCache => _replacementCache;

        public void AddPeer(BoundPeer peer, DateTimeOffset updated)
        {
            if (!_peerStates.AddOrUpdate(peer, new PeerState(peer, updated)))
            {
                ReplacementCache.AddOrUpdate(peer, new PeerState(peer, updated));
            }
        }

        /// <summary>
        /// Checks whether the bucket contains given <paramref name="peer"/>.
        /// </summary>
        /// <param name="peer">The <see cref="BoundPeer"/> to check.</param>
        /// <returns><see langword="true"/> if the bucket contains <paramref name="peer"/>,
        /// <see langword="false"/> otherwise.</returns>
        public bool Contains(BoundPeer peer)
        {
            return _peerStates.Contains(peer.Address);
        }

        /// <summary>
        /// Empties the bucket.
        /// </summary>
        public void Clear()
        {
            _peerStates.Clear();
        }

        /// <summary>
        /// Removes given <paramref name="peer"/> from the bucket.
        /// </summary>
        /// <param name="peer">The <see cref="BoundPeer"/> to remove.</param>
        /// <returns>
        /// <see langword="true"/> if <paramref name="peer"/> was removed,
        /// <see langword="false"/> otherwise.</returns>
        public bool RemovePeer(BoundPeer peer)
        {
            if (_peerStates.Remove(peer.Address))
            {
                _logger.Verbose("Removed peer {Peer} from bucket", peer);
                return true;
            }
            else
            {
                _logger.Verbose("Failed to remove peer {Peer} from bucket", peer);
                return false;
            }
        }

        /// <summary>
        /// Selects a random <see cref="BoundPeer"/> in the bucket excluding
        /// <paramref name="except"/>.
        /// </summary>
        /// <param name="except">The <see cref="BoundPeer"/> to exclude when selecting.</param>
        /// <returns>
        /// A randomly selected <see cref="BoundPeer"/> in the bucket excluding
        /// <paramref name="except"/>. If no <see cref="BoundPeer"/> can be selected,
        /// <see langword="null"/> is returned.
        /// </returns>
        public BoundPeer? GetRandomPeer(Address? except = null)
        {
            List<BoundPeer> peers = _peerStates.Peers
                .Where(p => (!(except is Address e) || !p.Address.Equals(e)))
                .ToList();
            return peers.Count > 0 ? peers[_random.Next(peers.Count)] : null;
        }

        public void Check(BoundPeer peer, DateTimeOffset start, DateTimeOffset end)
        {
            if (_peerStates.Get(peer.Address) is PeerState peerState)
            {
                peerState.LastChecked = start;
                peerState.Latency = end - start;
            }
        }
    }
}
