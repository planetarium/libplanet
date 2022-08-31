using System;

namespace Libplanet.PoS
{
    public class MaximumUndelegationEntriesException : Exception
    {
        public MaximumUndelegationEntriesException(Address address, long count)
            : base($"Undelegation {address} reached maximum entry size : {count}")
        {
        }
    }
}
