using System;

namespace Libplanet.PoS
{
    public class PostmatureUndelegationEntryException : Exception
    {
        public PostmatureUndelegationEntryException(
            long blockHeight, long completionBlockHeight, Address address)
            : base($"UndelegationEntry {address} is postmatured, " +
                  $"blockHeight : {blockHeight} > completionBlockHeight : {completionBlockHeight}")
        {
        }
    }
}
