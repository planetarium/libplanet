using System.Collections.Generic;

namespace Libplanet.Explorer.GraphTypes
{
    public class TxResult
    {
        public TxResult(
            TxStatus status,
            long? blockIndex,
            string? blockHash,
            List<string?>? exceptionNames)
        {
            TxStatus = status;
            BlockIndex = blockIndex;
            BlockHash = blockHash;
            ExceptionNames = exceptionNames;
        }

        public TxStatus TxStatus { get; private set; }

        public long? BlockIndex { get; private set; }

        public string? BlockHash { get; private set; }

        public List<string?>? ExceptionNames { get; private set; }
    }
}
