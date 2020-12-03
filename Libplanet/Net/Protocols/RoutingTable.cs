using System;
using System.Collections.Generic;
using System.Linq;
using Serilog;

namespace Libplanet.Net.Protocols
{
    public class RoutingTable
    {
        // FIXME: This would be configurable.
        private const int MinPeersToBroadcast = 10;

        private readonly Address _address;
        private readonly KBucket[] _buckets;

        private readonly ILogger _logger;

        public RoutingTable(
            Address address,
            int? tableSize,
            int? bucketSize,
            ILogger logger)
        {
            tableSize ??= Kademlia.TableSize;
            bucketSize ??= Kademlia.BucketSize;

            if (tableSize <= 0)
            {
                throw new ArgumentOutOfRangeException(nameof(tableSize));
            }

            if (bucketSize <= 0)
            {
                throw new ArgumentOutOfRangeException(nameof(bucketSize));
            }

            _address = address;
            TableSize = tableSize.Value;
            BucketSize = bucketSize.Value;
            _logger = logger;

            var random = new Random();
            _buckets = new KBucket[TableSize];
            for (int i = 0; i < TableSize; i++)
            {
                _buckets[i] = new KBucket(BucketSize, random, _logger);
            }
        }

        public int TableSize { get; }

        public int BucketSize { get; }

        public int Count => _buckets.Sum(bucket => bucket.Count);

        public IEnumerable<BoundPeer> Peers => NonEmptyBuckets
            .SelectMany((bucket, _) => bucket.Peers)
            .ToList();

        public IEnumerable<IEnumerable<BoundPeer>> CachesToCheck
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

        private IEnumerable<KBucket> NonFullBuckets
        {
            get
            {
                return _buckets.Where(bucket => !bucket.IsFull());
            }
        }

        private IEnumerable<KBucket> NonEmptyBuckets
        {
            get
            {
                return _buckets.Where(bucket => !bucket.IsEmpty());
            }
        }

        public IEnumerable<BoundPeer> PeersToBroadcast(Address? except)
        {
            List<BoundPeer> peers = NonEmptyBuckets
                .Select(bucket => bucket.GetRandomPeer(except))
                .Where(peer => !(peer is null)).ToList();
            var count = peers.Count;
            if (count < MinPeersToBroadcast)
            {
                peers.AddRange(Peers
                    .Where(peer =>
                        !peers.Contains(peer) &&
                        (except is null || !peer.Address.Equals(except.Value)))
                    .Take(MinPeersToBroadcast - count));
            }

            return peers;
        }

        public IEnumerable<BoundPeer> PeersToRefresh(TimeSpan maxAge)
        {
            return NonEmptyBuckets
                .Where(bucket => bucket.Tail.LastUpdated + maxAge < DateTimeOffset.UtcNow)
                .Select(bucket => bucket.Tail.Peer);
        }

        public void AddPeer(BoundPeer peer)
        {
            if (peer is null)
            {
                throw new ArgumentNullException(nameof(peer));
            }

            if (peer.Address.Equals(_address))
            {
                throw new ArgumentException("Cannot add self to routing table.");
            }

            _logger.Debug("Adding peer {Peer} to routing table.", peer);
            BucketOf(peer).AddPeer(peer);
        }

        public bool RemovePeer(BoundPeer peer)
        {
            if (peer is null)
            {
                throw new ArgumentNullException(nameof(peer));
            }

            if (peer.Address.Equals(_address))
            {
                throw new ArgumentException("Cannot remove self from routing table.");
            }

            _logger.Debug("Removing peer {Peer} from routing table.", peer);
            return BucketOf(peer).RemovePeer(peer);
        }

        public bool RemoveCache(BoundPeer peer)
        {
            KBucket bucket = BucketOf(peer);
            return bucket.ReplacementCache.TryRemove(peer, out var dateTimeOffset);
        }

        public bool Contains(BoundPeer peer)
        {
            return BucketOf(peer).Contains(peer);
        }

        public BoundPeer GetPeer(Address addr) =>
            _buckets
                .Where(b => !b.IsEmpty())
                .SelectMany(b => b.Peers)
                .FirstOrDefault(peer => peer.Address.Equals(addr));

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
            var sorted = _buckets
                .Where(b => !b.IsEmpty())
                .SelectMany(b => b.Peers)
                .ToList();

            sorted = Kademlia.SortByDistance(sorted, target);

            // Select maximum k * 2 peers excluding the target itself.
            bool containsTarget = sorted.Any(peer => peer.Address.Equals(target));
            int maxCount = (includeTarget && containsTarget) ? k * 2 + 1 : k * 2;

            IEnumerable<BoundPeer> peers = includeTarget
                ? sorted
                : sorted.Where(peer => !peer.Address.Equals(target));

            return peers.Take(maxCount);
        }

        public void Check(BoundPeer peer, DateTimeOffset start, DateTimeOffset end)
        {
            if (peer is null)
            {
                throw new ArgumentNullException(nameof(peer));
            }

            BucketOf(peer).Check(peer, start, end);
        }

        internal KBucket BucketOf(BoundPeer peer)
        {
            int index = GetBucketIndexOf(peer);
            return _buckets[index];
        }

        internal KBucket BucketOf(int level)
        {
            return _buckets[level];
        }

        private int GetBucketIndexOf(Peer peer)
        {
            int plength = Kademlia.CommonPrefixLength(peer.Address, _address);
            return Math.Min(plength, TableSize - 1);
        }
    }
}
