using System;

namespace Libplanet.PoS
{
    public class NullRedelegationException : Exception
    {
        public NullRedelegationException(Address address)
            : base($"Redelegation {address} not found")
        {
        }
    }
}
