using System;

namespace Libplanet.PoS
{
    public class NullDelegationException : Exception
    {
        public NullDelegationException(Address address)
            : base($"Delegation {address} not found")
        {
        }
    }
}
