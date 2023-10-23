using System.Collections.Generic;
using System.Security.Cryptography;
using Libplanet.Common;

namespace Libplanet.Explorer.GraphTypes
{
    public class TxResult
    {
        public TxResult(
            TxStatus status,
            long? blockIndex,
            string? blockHash,
            HashDigest<SHA256>? inputState,
            HashDigest<SHA256>? outputState,
            List<string?>? exceptionNames)
        {
            TxStatus = status;
            BlockIndex = blockIndex;
            BlockHash = blockHash;
            InputState = inputState;
            OutputState = outputState;
            ExceptionNames = exceptionNames;
        }

        public TxStatus TxStatus { get; private set; }

        public long? BlockIndex { get; private set; }

        public string? BlockHash { get; private set; }

        public HashDigest<SHA256>? InputState { get; private set; }

        public HashDigest<SHA256>? OutputState { get; private set; }

        public List<string?>? ExceptionNames { get; private set; }
    }
}
