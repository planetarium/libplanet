using System.Collections.Generic;
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
        public const int TableSize = Address.Size * sizeof(byte) * 8;

        /// <summary>
        /// The number of concurrency in peer discovery.
        /// </summary>
        public const int FindConcurrency = 3;

        /// <summary>
        /// Depth of the peer discovery operation.
        /// </summary>
        public const int MaxDepth = 3;

        /// <summary>
        /// Calculates xor distance between two address.
        /// </summary>
        /// <param name="left">First element to calculate distance.</param>
        /// <param name="right">Second element to calculate distance.</param>
        /// <returns>Distance between two addresses in <see cref="Address"/>.</returns>
        public static Address CalculateDistance(Address left, Address right)
        {
            var dba = new byte[Address.Size];
            var aba = left.ToByteArray();
            var bba = right.ToByteArray();

            for (var i = 0; i < Address.Size; i++)
            {
                dba[i] = (byte)(aba[i] ^ bba[i]);
            }

            return new Address(dba);
        }

        /// <summary>
        /// Calculates length of common prefix length
        /// by finding the index of first bit of xor value.
        /// </summary>
        /// <param name="left">First element to calculate common prefix length.</param>
        /// <param name="right">Second element to calculate common prefix length.</param>
        /// <returns>Length of the common prefix length.</returns>
        public static int CommonPrefixLength(Address left, Address right)
        {
            Address distance = CalculateDistance(left, right);
            var length = 0;

            foreach (var x in distance.ToByteArray())
            {
                var mask = 1 << 7;
                while (length < 160 && mask != 0)
                {
                    if ((mask & x) != 0)
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
        /// the distance with <paramref name="targetAddr"/>.
        /// </summary>
        /// <param name="peers">A sequence of values to order.</param>
        /// <param name="targetAddr">
        /// <see cref="Address"/> to calculate distance of element.</param>
        /// <returns>>An <see cref="IEnumerable{T}"/> whose elements are sorted
        /// according to the distance with <paramref name="targetAddr"/>.</returns>
        public static IEnumerable<BoundPeer> SortByDistance(
            IEnumerable<BoundPeer> peers,
            Address targetAddr)
        {
            return peers.OrderBy(peer =>
                CalculateDistance(
                    peer.Address,
                    targetAddr).ToHex());
        }
    }
}
