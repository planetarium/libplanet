using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using Serilog;

namespace Libplanet.Net.Protocols
{
    /// <summary>
    /// Kademlia distributed hash table.
    /// </summary>
    public class RoutingTable
    {
        private readonly Address _address;
        private readonly KBucket[] _buckets;
        private readonly PeerState[] _staticPeerStates;

        private readonly ILogger _logger;

        /// <summary>
        /// Creates a Kademlia distributed hash table instance.
        /// </summary>
        /// <param name="address"><see cref="Address"/> of this peer.</param>
        /// <param name="tableSize">The number of buckets in the table.</param>
        /// <param name="bucketSize">The size of a single bucket.</param>
        /// <param name="staticPeers">
        /// The list of <see cref="Peer"/>s to keep in routing table permanently.
        /// The <see cref="Peer"/>s in the list won't be removed in any cases.</param>
        /// <exception cref="ArgumentOutOfRangeException">
        /// Thrown when <paramref name="tableSize"/> or <paramref name="bucketSize"/> is
        /// less then or equal to 0.</exception>
        public RoutingTable(
            Address address,
            int tableSize = Kademlia.TableSize,
            int bucketSize = Kademlia.BucketSize,
            IImmutableSet<BoundPeer> staticPeers = null)
        {
            if (tableSize <= 0)
            {
                throw new ArgumentOutOfRangeException(nameof(tableSize));
            }

            if (bucketSize <= 0)
            {
                throw new ArgumentOutOfRangeException(nameof(bucketSize));
            }

            _address = address;
            TableSize = tableSize;
            BucketSize = bucketSize;
            _logger = Log.ForContext<RoutingTable>();

            var random = new Random();
            _buckets = new KBucket[TableSize];
            for (int i = 0; i < TableSize; i++)
            {
                _buckets[i] = new KBucket(BucketSize, random, _logger);
            }

            var initialized = DateTimeOffset.UtcNow;
            _staticPeerStates = staticPeers is null
                ? new PeerState[0]
                : staticPeers.Select(boundPeer => new PeerState(boundPeer, initialized)).ToArray();
        }

        /// <summary>
        /// The number of buckets in the table.
        /// </summary>
        public int TableSize { get; }

        /// <summary>
        /// The size of a single bucket.
        /// </summary>
        public int BucketSize { get; }

        /// <summary>
        /// The number of peers in the table.
        /// </summary>
        public int Count => _buckets.Sum(bucket => bucket.Count) + _staticPeerStates.Length;

        /// <summary>
        /// An <see cref="IEnumerable{T}"/> of static peers in the table.
        /// </summary>
        public IEnumerable<BoundPeer> StaticPeers => _staticPeerStates
            .Select(state => state.Peer)
            .ToArray();

        /// <summary>
        /// An <see cref="IEnumerable{T}"/> of peers in the table.
        /// </summary>
        public IEnumerable<BoundPeer> Peers => StaticPeers
            .Union(NonEmptyBuckets.SelectMany(bucket => bucket.Peers))
            .ToArray();

        /// <summary>
        /// An <see cref="IEnumerable{T}"/> of <see cref="PeerState"/> of static peers in the table.
        /// </summary>
        public IEnumerable<PeerState> StaticPeerStates => _staticPeerStates.ToArray();

        /// <summary>
        /// An <see cref="IEnumerable{T}"/> of <see cref="PeerState"/> of peers in the table.
        /// </summary>
        public IEnumerable<PeerState> PeerStates => StaticPeerStates
            .Union(NonEmptyBuckets.SelectMany(bucket => bucket.PeerStates))
            .ToArray();

        // For unit tests
        internal IEnumerable<BoundPeer> NonStaticPeers =>
            NonEmptyBuckets.SelectMany(bucket => bucket.Peers).ToArray();

        internal IEnumerable<IEnumerable<BoundPeer>> CachesToCheck
        {
            get
            {
                return NonFullBuckets.Select(
                    bucket => bucket.ReplacementCache
                        .OrderBy(kv => kv.Value)
                        .Select(kv => kv.Key)
                );
            }
        }

        internal IEnumerable<KBucket> NonFullBuckets
        {
            get
            {
                return _buckets.Where(bucket => !bucket.IsFull());
            }
        }

        internal IEnumerable<KBucket> NonEmptyBuckets
        {
            get
            {
                return _buckets.Where(bucket => !bucket.IsEmpty());
            }
        }

        /// <summary>
        /// Adds the <paramref name="peer"/> to the table.
        /// </summary>
        /// <param name="peer">The <see cref="BoundPeer"/> to add.</param>
        /// <exception cref="ArgumentNullException">Thrown when <paramref name="peer"/> is
        /// <see langword="null"/>.</exception>
        /// <exception cref="ArgumentException">Thrown when <paramref name="peer"/>'s
        /// <see cref="Address"/> is equal to the <see cref="Address"/> of self.</exception>
        public void AddPeer(BoundPeer peer) => AddPeer(peer, DateTimeOffset.UtcNow);

        public bool RemovePeer(BoundPeer peer)
        {
            if (peer is null)
            {
                throw new ArgumentNullException(nameof(peer));
            }

            if (peer.Address.Equals(_address))
            {
                throw new ArgumentException(
                    "A peer is disallowed to remove itself to its routing table.",
                    nameof(peer)
                );
            }

            _logger.Debug("Removing peer {Peer} from routing table.", peer);
            return BucketOf(peer).RemovePeer(peer);
        }

        /// <summary>
        /// Determines whether the <see cref="RoutingTable"/> contains the specified key.
        /// </summary>
        /// <param name="peer">Key to locate in the <see cref="RoutingTable"/>.</param>
        /// <returns><see langword="true"/> if the <see cref="RoutingTable" /> contains
        /// an element with the specified key; otherwise, <see langword="false"/>.</returns>
        public bool Contains(BoundPeer peer)
        {
            return BucketOf(peer).Contains(peer) ||
                   _staticPeerStates.Any(state => state.Peer.Address.Equals(peer.Address));
        }

        /// <summary>
        /// Finds a <seealso cref="BoundPeer"/> whose <see cref="Address"/> matches with
        /// the given <paramref name="addr"/> if it exits.
        /// </summary>
        /// <param name="addr">The <see cref="Address"/> to search.</param>
        /// <returns>A <see cref="BoundPeer"/> whose <see cref="Address"/> matches
        /// the given <paramref name="addr"/>.</returns>
        public BoundPeer GetPeer(Address addr) =>
            Peers.FirstOrDefault(peer => peer.Address.Equals(addr));

        /// <summary>
        /// Removes all peers in the table. This method does not affect static peers.
        /// </summary>
        public void Clear()
        {
            foreach (KBucket bucket in _buckets)
            {
                bucket.Clear();
            }
        }

        /// <summary>
        /// Returns <paramref name="k"/> nearest peers to given parameter peer from routing table.
        /// Return value is already sorted with respect to target.
        /// </summary>
        /// <param name="target"><see cref="Peer"/> to look up.</param>
        /// <param name="k">Number of peers to return.</param>
        /// <param name="includeTarget">A boolean value indicates to include a peer with
        /// <see cref="Address"/> of <paramref name="target"/> in return value or not.</param>
        /// <returns>An enumerable of <see cref="BoundPeer"/>.</returns>
        public IEnumerable<BoundPeer> Neighbors(Peer target, int k, bool includeTarget)
        {
            return Neighbors(target.Address, k, includeTarget);
        }

        /// <summary>
        /// Returns at most 2 * <paramref name="k"/> (2 * <paramref name="k"/> + 1 if
        /// <paramref name="includeTarget"/> is <c>true</c>) nearest peers to given parameter peer
        /// from routing table. Return value is sorted with respect to target.
        /// <seealso cref="Kademlia.SortByDistance(IEnumerable{BoundPeer}, Address)"/>
        /// </summary>
        /// <param name="target"><see cref="Address"/> to look up.</param>
        /// <param name="k">Number of peers to return.</param>
        /// <param name="includeTarget">A boolean value indicates to include a peer with
        /// <see cref="Address"/> of <paramref name="target"/> in return value or not.</param>
        /// <returns>An enumerable of <see cref="BoundPeer"/>.</returns>
        public IEnumerable<BoundPeer> Neighbors(Address target, int k, bool includeTarget)
        {
            // TODO: Should include static peers?
            var sorted = _buckets
                .Where(b => !b.IsEmpty())
                .SelectMany(b => b.Peers)
                .ToList();

            sorted = Kademlia.SortByDistance(sorted, target).ToList();

            // Select maximum k * 2 peers excluding the target itself.
            bool containsTarget = sorted.Any(peer => peer.Address.Equals(target));
            int maxCount = (includeTarget && containsTarget) ? k * 2 + 1 : k * 2;

            IEnumerable<BoundPeer> peers = includeTarget
                ? sorted
                : sorted.Where(peer => !peer.Address.Equals(target));

            return peers.Take(maxCount);
        }

        /// <summary>
        /// Marks <paramref name="peer"/> checked and refreshes last checked time of the peer.
        /// </summary>
        /// <param name="peer">The <see cref="Peer"/> to check.</param>
        /// <param name="start"><see cref="DateTimeOffset"/> at the beginning of the check.</param>
        /// <param name="end"><see cref="DateTimeOffset"/> at the end of the check.</param>
        /// <exception cref="ArgumentNullException">
        /// Thrown when <paramref name="peer"/> is <see langword="null"/>.</exception>
        public void Check(BoundPeer peer, DateTimeOffset start, DateTimeOffset end)
        {
            if (peer is null)
            {
                throw new ArgumentNullException(nameof(peer));
            }

            PeerState staticState =
                _staticPeerStates.FirstOrDefault(state => state.Peer.Address.Equals(peer.Address));
            if (staticState is null)
            {
                BucketOf(peer).Check(peer, start, end);
            }
            else
            {
                staticState.LastChecked = start;
                staticState.Latency = end - start;
            }
        }

        internal void AddPeer(BoundPeer peer, DateTimeOffset updated)
        {
            if (peer is null)
            {
                throw new ArgumentNullException(nameof(peer));
            }

            if (peer.Address.Equals(_address))
            {
                throw new ArgumentException(
                    "A peer is disallowed to add itself to its routing table.",
                    nameof(peer)
                );
            }

            PeerState staticState =
                _staticPeerStates.FirstOrDefault(state => state.Peer.Address.Equals(peer.Address));
            if (staticState is null)
            {
                _logger.Debug(
                    "Adding a peer {Peer} to peer {Address}'s routing table...",
                    peer,
                    _address);
                BucketOf(peer).AddPeer(peer, updated);
            }
            else
            {
                _logger.Verbose("The peer {Peer} to be added is already in static peer.", peer);

                // This done because peer's other attribute except public key might be changed.
                // (eg. public IP address, endpoint)
                staticState.Peer = peer;
                staticState.LastUpdated = updated;
            }
        }

        internal IEnumerable<BoundPeer> PeersToBroadcast(Address? except, int min = 10)
        {
            List<BoundPeer> peers = NonEmptyBuckets
                .Select(bucket => bucket.GetRandomPeer(except))
                .Where(peer => !(peer is null)).ToList();
            int count;
            if (_staticPeerStates.Any())
            {
                var random = new Random();
                var excepted = _staticPeerStates.Where(
                    state => except is null || !state.Peer.Address.Equals(except));
                var selected = _staticPeerStates[random.Next(_staticPeerStates.Length)];
                peers.Add(selected.Peer);

                count = peers.Count;
                if (count < min)
                {
                    peers.AddRange(
                        excepted.Where(state => peers.Contains(state.Peer)).Take(min - peers.Count)
                            .Select(state => state.Peer));
                }
            }

            count = peers.Count;
            if (count < min)
            {
                peers.AddRange(Peers
                    .Where(peer =>
                        !peers.Contains(peer) &&
                        (except is null || !peer.Address.Equals(except.Value)))
                    .Take(min - count));
            }

            return peers;
        }

        internal IEnumerable<BoundPeer> PeersToRefresh(TimeSpan maxAge) => NonEmptyBuckets
            .Where(bucket => bucket.Tail.LastUpdated + maxAge < DateTimeOffset.UtcNow)
            .Select(bucket => bucket.Tail.Peer)
            .Union(
                _staticPeerStates
                    .Where(state => state.LastUpdated + maxAge < DateTimeOffset.UtcNow)
                    .Select(state => state.Peer).Take(1));

        internal bool RemoveCache(BoundPeer peer)
        {
            KBucket bucket = BucketOf(peer);
            return bucket.ReplacementCache.TryRemove(peer, out var dateTimeOffset);
        }

        internal KBucket BucketOf(BoundPeer peer)
        {
            int index = GetBucketIndexOf(peer.Address);
            return BucketOf(index);
        }

        internal KBucket BucketOf(int level)
        {
            return _buckets[level];
        }

        internal int GetBucketIndexOf(Address addr)
        {
            int plength = Kademlia.CommonPrefixLength(addr, _address);
            return Math.Min(plength, TableSize - 1);
        }
    }
}
