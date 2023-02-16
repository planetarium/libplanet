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
    public class RoutingTable : IRoutingTable
    {
        private readonly Address _address;
        private readonly KBucket[] _buckets;

        private readonly ILogger _logger;

        /// <summary>
        /// Creates a Kademlia distributed hash table instance.
        /// </summary>
        /// <param name="address"><see cref="Address"/> of this peer.</param>
        /// <param name="tableSize">The number of buckets in the table.</param>
        /// <param name="bucketSize">The size of a single bucket.</param>
        /// <exception cref="ArgumentOutOfRangeException">
        /// Thrown when <paramref name="tableSize"/> or <paramref name="bucketSize"/> is
        /// less then or equal to 0.</exception>
        public RoutingTable(
            Address address,
            int tableSize = Kademlia.TableSize,
            int bucketSize = Kademlia.BucketSize)
        {
            if (tableSize <= 0)
            {
                throw new ArgumentOutOfRangeException(
                    $"The value of {nameof(tableSize)} must be positive.");
            }
            else if (bucketSize <= 0)
            {
                throw new ArgumentOutOfRangeException(
                    $"The value of {nameof(bucketSize)} must be positive.");
            }

            _address = address;
            TableSize = tableSize;
            BucketSize = bucketSize;
            _logger = Log
                .ForContext<RoutingTable>()
                .ForContext("Source", nameof(RoutingTable));

            var random = new Random();
            _buckets = new KBucket[TableSize];
            for (int i = 0; i < TableSize; i++)
            {
                _buckets[i] = new KBucket(BucketSize, random, _logger);
            }
        }

        /// <summary>
        /// The number of buckets in the table.
        /// </summary>
        public int TableSize { get; }

        /// <summary>
        /// The size of a single bucket.
        /// </summary>
        public int BucketSize { get; }

        /// <inheritdoc />
        public int Count => _buckets.Sum(bucket => bucket.Count);

        /// <inheritdoc />
        public IReadOnlyList<BoundPeer> Peers =>
            NonEmptyBuckets.SelectMany(bucket => bucket.Peers).ToImmutableArray();

        /// <summary>
        /// An <see cref="IReadOnlyList{T}"/> of <see cref="PeerState"/> of peers in the table.
        /// </summary>
        public IReadOnlyList<PeerState> PeerStates =>
            NonEmptyBuckets.SelectMany(bucket => bucket.PeerStates).ToImmutableArray();

        internal IReadOnlyList<IReadOnlyList<BoundPeer>> CachesToCheck
        {
            get
            {
                return NonFullBuckets.Select(
                    bucket => bucket.ReplacementCache.PeerStates
                        .OrderBy(peerState => peerState.LastUpdated)
                        .Select(peerState => peerState.Peer)
                        .ToArray()
                ).ToArray();
            }
        }

        internal IReadOnlyList<KBucket> NonFullBuckets
        {
            get
            {
                return _buckets.Where(bucket => !bucket.IsFull).ToArray();
            }
        }

        internal IReadOnlyList<KBucket> NonEmptyBuckets
        {
            get
            {
                return _buckets.Where(bucket => !bucket.IsEmpty).ToArray();
            }
        }

        /// <inheritdoc />
        public void AddPeer(BoundPeer peer) => AddPeer(peer, DateTimeOffset.UtcNow);

        /// <inheritdoc />
        public bool RemovePeer(BoundPeer peer)
        {
            if (peer.Address.Equals(_address))
            {
                throw new ArgumentException(
                    "A node is disallowed to remove itself from its routing table.",
                    nameof(peer)
                );
            }

            _logger.Debug("Removing peer {Peer} from the routing table", peer);
            return BucketOf(peer).RemovePeer(peer);
        }

        /// <inheritdoc />
        public bool Contains(BoundPeer peer)
        {
            return BucketOf(peer).Contains(peer);
        }

        /// <summary>
        /// Finds a <seealso cref="BoundPeer"/> whose <see cref="Address"/> matches with
        /// the given <paramref name="addr"/> if it exits.
        /// </summary>
        /// <param name="addr">The <see cref="Address"/> to search.</param>
        /// <returns>A <see cref="BoundPeer"/> whose <see cref="Address"/> matches
        /// the given <paramref name="addr"/>.</returns>
        public BoundPeer? GetPeer(Address addr) =>
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
        /// <param name="target"><see cref="BoundPeer"/> to look up.</param>
        /// <param name="k">Number of peers to return.</param>
        /// <param name="includeTarget">A boolean value indicates to include a peer with
        /// <see cref="Address"/> of <paramref name="target"/> in return value or not.</param>
        /// <returns>An enumerable of <see cref="BoundPeer"/>.</returns>
        public IReadOnlyList<BoundPeer> Neighbors(BoundPeer target, int k, bool includeTarget)
            => Neighbors(target.Address, k, includeTarget);

        /// <summary>
        /// Returns at most 2 * <paramref name="k"/> (2 * <paramref name="k"/> + 1 if
        /// <paramref name="includeTarget"/> is <see langword="true"/>) nearest peers to given
        /// parameter peer from routing table. Return value is sorted with respect to target.
        /// <seealso cref="Kademlia.SortByDistance(IEnumerable{BoundPeer}, Address)"/>
        /// </summary>
        /// <param name="target"><see cref="Address"/> to look up.</param>
        /// <param name="k">Number of peers to return.</param>
        /// <param name="includeTarget">A boolean value indicates to include a peer with
        /// <see cref="Address"/> of <paramref name="target"/> in return value or not.</param>
        /// <returns>An enumerable of <see cref="BoundPeer"/>.</returns>
        public IReadOnlyList<BoundPeer> Neighbors(Address target, int k, bool includeTarget)
        {
            // TODO: Should include static peers?
            var sorted = _buckets
                .Where(b => !b.IsEmpty)
                .SelectMany(b => b.Peers)
                .ToList();

            sorted = Kademlia.SortByDistance(sorted, target).ToList();

            // Select maximum k * 2 peers excluding the target itself.
            bool containsTarget = sorted.Any(peer => peer.Address.Equals(target));
            int maxCount = (includeTarget && containsTarget) ? k * 2 + 1 : k * 2;

            IEnumerable<BoundPeer> peers = includeTarget
                ? sorted
                : sorted.Where(peer => !peer.Address.Equals(target));

            return peers.Take(maxCount).ToArray();
        }

        /// <summary>
        /// Marks <paramref name="peer"/> checked and refreshes last checked time of the peer.
        /// </summary>
        /// <param name="peer">The <see cref="BoundPeer"/> to check.</param>
        /// <param name="start"><see cref="DateTimeOffset"/> at the beginning of the check.</param>
        /// <param name="end"><see cref="DateTimeOffset"/> at the end of the check.</param>
        /// <exception cref="ArgumentNullException">
        /// Thrown when <paramref name="peer"/> is <see langword="null"/>.</exception>
        public void Check(BoundPeer peer, DateTimeOffset start, DateTimeOffset end)
            => BucketOf(peer).Check(peer, start, end);

        internal void AddPeer(BoundPeer peer, DateTimeOffset updated)
        {
            if (peer.Address.Equals(_address))
            {
                throw new ArgumentException(
                    "A node is disallowed to add itself to its routing table.",
                    nameof(peer));
            }

            _logger.Debug("Adding peer {Peer} to the routing table...", peer);
            BucketOf(peer).AddPeer(peer, updated);
        }

        internal IReadOnlyList<BoundPeer> PeersToBroadcast(Address? except, int min = 10)
        {
            List<BoundPeer> peers = NonEmptyBuckets
                .Select(bucket => bucket.GetRandomPeer(except))
                .OfType<BoundPeer>()
                .ToList();
            int count = peers.Count;
            if (count < min)
            {
                peers.AddRange(Peers
                    .Where(peer =>
                        !peers.Contains(peer) &&
                            (!(except is Address e) || !peer.Address.Equals(e)))
                    .Take(min - count));
            }

            return peers;
        }

        internal IReadOnlyList<BoundPeer> PeersToRefresh(TimeSpan maxAge) => NonEmptyBuckets
            .Where(bucket =>
                bucket.Tail is PeerState peerState &&
                    peerState.LastUpdated + maxAge < DateTimeOffset.UtcNow)
            .Select(bucket => bucket.Tail!.Peer)
            .ToList();

        internal bool RemoveCache(BoundPeer peer)
        {
            KBucket bucket = BucketOf(peer);
            return bucket.ReplacementCache.Remove(peer);
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
