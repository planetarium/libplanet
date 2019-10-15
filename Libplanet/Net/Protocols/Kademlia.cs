using System;
using System.Collections.Generic;
using System.Linq;

namespace Libplanet.Net.Protocols
{
    internal static class Kademlia
    {
        public const int BucketSize = 16;
        public const int TableSize = Address.Size * sizeof(byte) * 8;
        public const int FindConcurrency = 3;
        public const int MaxDepth = 3;
        public const int IdleRequestTimeout = 5000;

        public static Address CalculateDistance(Address a, Address b)
        {
            var dba = new byte[Address.Size];
            var aba = a.ToByteArray();
            var bba = b.ToByteArray();

            for (var i = 0; i < Address.Size; i++)
            {
                dba[i] = (byte)(aba[i] ^ bba[i]);
            }

            return new Address(dba);
        }

        // calculate length of common prefix length
        // by finding first bit of xor value
        public static int CommonPrefixLength(Address a, Address b)
        {
            Address distance = CalculateDistance(a, b);
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

        // sort list from closest to farthest.
        public static List<BoundPeer> SortByDistance(
            IEnumerable<BoundPeer> peers,
            Address targetAddr)
        {
            return peers.OrderBy(peer =>
                CalculateDistance(
                    peer.Address,
                    targetAddr).ToHex()
                ).ToList();
        }
    }
}
