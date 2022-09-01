using System;

namespace Libplanet.PoS
{
    public class MaximumRedelegationEntriesException : Exception
    {
        public MaximumRedelegationEntriesException(Address address, long count)
            : base($"Redelegation {address} reached maximum entry size : {count}")
        {
        }
    }
}
