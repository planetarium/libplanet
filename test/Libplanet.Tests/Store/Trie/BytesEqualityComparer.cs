using System.Collections.Generic;
using System.Linq;

namespace Libplanet.Tests.Store.Trie
{
    internal class BytesEqualityComparer : IEqualityComparer<byte[]>
    {
        public bool Equals(byte[] x, byte[] y) =>
            x is byte[] xb && y is byte[] yb &&
            xb.LongLength == yb.LongLength &&
            xb.SequenceEqual(yb);

        public int GetHashCode(byte[] obj)
        {
            int hash = 17;
            unchecked
            {
                foreach (byte b in obj)
                {
                    hash *= 31 + b;
                }
            }

            return hash;
        }
    }
}
