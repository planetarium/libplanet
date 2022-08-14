using Bencodex.Types;
using Libplanet.Explorer.GraphTypes;

namespace Libplanet.Explorer.GraphTypes
{
    public class TxResult
    {
        public TxResult(
            TxStatus status,
            long? blockIndex,
            string? blockHash,
            string? exceptionName,
            IValue? exceptionMetadata
        )
        {
            TxStatus = status;
            BlockIndex = blockIndex;
            BlockHash = blockHash;
            ExceptionName = exceptionName;
            ExceptionMetadata = exceptionMetadata;
        }

        public TxStatus TxStatus { get; private set; }

        public long? BlockIndex { get; private set; }

        public string? BlockHash { get; private set; }

        public string? ExceptionName { get; private set; }

        public IValue? ExceptionMetadata { get; private set; }
    }
}
