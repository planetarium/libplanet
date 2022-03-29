using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;

namespace Libplanet.Net.Protocols
{
    /// <summary>
    /// Commonly used constants and static functions for Kademlia distributed hash table.
    /// </summary>
    public static class Kademlia
    {
        /// <summary>
        /// The size of a single bucket.
        /// </summary>
        public const int BucketSize = 16;

        /// <summary>
        /// The number of buckets in the table.
        /// </summary>
        public const int TableSize = Address.Size * 8;

        /// <summary>
        /// The number of concurrency in peer discovery.
        /// </summary>
        public const int FindConcurrency = 3;

        /// <summary>
        /// Depth of the peer discovery operation.
        /// </summary>
        public const int MaxDepth = 3;

        /// <summary>
        /// Calculates the xor distance between two <see cref="Address"/>es.
        /// </summary>
        /// <param name="left">The first element to calculate the distance.</param>
        /// <param name="right">The second element to calculate the distance.</param>
        /// <returns>The distance between two <see cref="Address"/>es.</returns>
        public static Address CalculateDistance(Address left, Address right)
        {
            byte[] dba = Enumerable.Zip(
                left.ByteArray, right.ByteArray, (l, r) => (byte)(l ^ r)).ToArray();
            return new Address(dba);
        }

        /// <summary>
        /// Calculates the length of the common prefix between two <see cref="Address"/>es
        /// by finding the index of the first non-zero bit of the xor between the two.
        /// </summary>
        /// <param name="left">The first element to calculate the common prefix length.</param>
        /// <param name="right">The second element to calculate the common prefix length.</param>
        /// <returns>The length of the common prefix between <paramref name="left"/> and
        /// <paramref name="right"/>.</returns>
        public static int CommonPrefixLength(Address left, Address right)
        {
            ImmutableArray<byte> bytes = CalculateDistance(left, right).ByteArray;
            int length = 0;

            foreach (byte b in bytes)
            {
                int mask = 1 << 7;
                while (mask != 0)
                {
                    if ((mask & b) != 0)
                    {
                        return length;
                    }

                    length++;
                    mask >>= 1;
                }
            }

            return length;
        }

        /// <summary>
        /// Sorts the element of the sequence from in ascending order of
        /// the distance with <paramref name="target"/>.
        /// </summary>
        /// <param name="peers">A sequence of values to order.</param>
        /// <param name="target">
        /// <see cref="Address"/> to calculate distance of element.</param>
        /// <returns>>An <see cref="IEnumerable{T}"/> whose elements are sorted
        /// according to the distance with <paramref name="target"/>.</returns>
        public static IEnumerable<BoundPeer> SortByDistance(
            IEnumerable<BoundPeer> peers,
            Address target)
        {
            return peers.OrderBy(peer => CalculateDistance(peer.Address, target).ToHex());
        }
    }
}
