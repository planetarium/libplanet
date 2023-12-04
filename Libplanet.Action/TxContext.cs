using Libplanet.Crypto;
using Libplanet.Types.Blocks;
using Libplanet.Types.Tx;

namespace Libplanet.Action
{
    internal class TxContext : ITxContext
    {
        public TxContext(
            IPreEvaluationBlockHeader blockHeader,
            ITransaction? transaction)
        {
            Signer = transaction?.Signer ?? blockHeader.Miner;
            TxId = transaction?.Id;
            Miner = blockHeader.Miner;
            BlockIndex = blockHeader.Index;
            BlockProtocolVersion = blockHeader.ProtocolVersion;
        }

        /// <inheritdoc cref="IActionContext.Signer"/>
        public Address Signer { get; }

        /// <inheritdoc cref="IActionContext.TxId"/>
        public TxId? TxId { get; }

        /// <inheritdoc cref="IActionContext.Miner"/>
        public Address Miner { get; }

        /// <inheritdoc cref="IActionContext.BlockIndex"/>
        public long BlockIndex { get; }

        /// <inheritdoc cref="IActionContext.BlockProtocolVersion"/>
        public int BlockProtocolVersion { get; }
    }
}
