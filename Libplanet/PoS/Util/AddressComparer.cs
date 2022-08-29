using System.Collections.Generic;
using System.Numerics;

namespace Libplanet.PoS
{
    internal class AddressComparer : IComparer<Address>
    {
        public int Compare(Address x, Address y)
        {
            int result
                = (new BigInteger(x.ToByteArray())
                - new BigInteger(y.ToByteArray())).Sign;

            return -result;
        }
    }
}
