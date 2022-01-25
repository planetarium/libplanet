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
            if (size <= 0)
            {
                throw new ArgumentOutOfRangeException(
                    $"The value of {nameof(size)} must be positive.");
            }

            _size = size;
            _random = random;
            _logger = logger;
            _peerStates = new ConcurrentDictionary<Address, PeerState>();
            ReplacementCache = new ConcurrentDictionary<BoundPeer, DateTimeOffset>();

            _lastUpdated = DateTimeOffset.UtcNow;
        }

        public int Count => _peerStates.Count;

        public bool IsEmpty => _peerStates.Count == 0;

        public bool IsFull => _peerStates.Count >= _size;

        /// <summary>
        /// The <see cref="PeerState"/> used most recently. If the bucket is empty,
        /// this is <c>null</c>.
        /// </summary>
        public PeerState? Head => _peerStates.Values
            .OrderBy(peerState => peerState.LastUpdated)
            .LastOrDefault();

        /// <summary>
        /// The <see cref="PeerState"/> used longest time ago. If the bucket is empty,
        /// this is <c>null</c>.
        /// </summary>
        public PeerState? Tail => _peerStates.Values
            .OrderBy(peerState => peerState.LastUpdated)
            .FirstOrDefault();

        public IEnumerable<BoundPeer> Peers => _peerStates.Values.Select(state => state.Peer);

        public IEnumerable<PeerState> PeerStates => _peerStates.Values;

        // replacement candidate stored in this cache when
        // the bucket is full and least recently used peer responds.
        public ConcurrentDictionary<BoundPeer, DateTimeOffset> ReplacementCache { get; }

        public void AddPeer(BoundPeer peer, DateTimeOffset updated)
        {
            if (_peerStates.ContainsKey(peer.Address))
            {
                _logger.Verbose("Bucket already contains peer {Peer}", peer);

                // This done because peer's other attribute except public key might be changed.
                // (eg. public IP address, endpoint)
                PeerState state = _peerStates[peer.Address];
                state.Peer = peer;
                state.LastUpdated = updated;
            }
            else
            {
                if (IsFull)
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

        /// <summary>
        /// Checks whether the bucket contains given <paramref name="peer"/>.
        /// </summary>
        /// <param name="peer">The <see cref="BoundPeer"/> to check.</param>
        /// <returns><c>true</c> if the bucket contains <paramref name="peer"/>,
        /// <c>false</c> otherwise.</returns>
        public bool Contains(BoundPeer peer)
        {
            return _peerStates.ContainsKey(peer.Address);
        }

        /// <summary>
        /// Empties the bucket.
        /// </summary>
        public void Clear()
        {
            _peerStates.Clear();
            _lastUpdated = DateTimeOffset.UtcNow;
        }

        /// <summary>
        /// Removes given <paramref name="peer"/> from the bucket.
        /// </summary>
        /// <param name="peer">The <see cref="BoundPeer"/> to remove.</param>
        /// <returns>
        /// <c>true</c> if <paramref name="peer"/> was removed, <c>false</c> otherwise.
        /// </returns>
        public bool RemovePeer(BoundPeer peer)
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

        /// <summary>
        /// Selects a random <see cref="BoundPeer"/> in the bucket excluding
        /// <paramref name="except"/>.
        /// </summary>
        /// <param name="except">The <see cref="BoundPeer"/> to exclude when selecting.</param>
        /// <returns>
        /// A randomly selected <see cref="BoundPeer"/> in the bucket excluding
        /// <paramref name="except"/>. If no <see cref="BoundPeer"/> can be selected,
        /// <c>null</c> is returned.
        /// </returns>
        public BoundPeer? GetRandomPeer(Address? except = null)
        {
            List<BoundPeer> peers = _peerStates.Values
                .Select(d => d.Peer)
                .Where(p => (!(except is Address e) || !p.Address.Equals(e)))
                .ToList();
            return peers.Count > 0 ? peers[_random.Next(peers.Count)] : null;
        }

        public void Check(BoundPeer peer, DateTimeOffset start, DateTimeOffset end)
        {
            if (_peerStates.ContainsKey(peer.Address))
            {
                PeerState state = _peerStates[peer.Address];
                state.LastChecked = start;
                state.Latency = end - start;
            }
        }
    }
}
