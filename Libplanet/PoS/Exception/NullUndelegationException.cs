using System;

namespace Libplanet.PoS
{
    public class NullUndelegationException : Exception
    {
        public NullUndelegationException(Address address)
            : base($"Undelegation {address} not found")
        {
        }
    }
}
