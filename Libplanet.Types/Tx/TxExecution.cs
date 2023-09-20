using System.Diagnostics.Contracts;
using Bencodex;
using Libplanet.Types.Blocks;

namespace Libplanet.Types.Tx
{
    /// <summary>
    /// Summarizes an execution result of a <see cref="Transaction"/>.
    /// <para>Note that <see cref="Transaction"/>s cannot be executed without belonging to
    /// a <see cref="Block"/>, and even if it's the same <see cref="Transaction"/> its
    /// result can vary depending on <see cref="Block"/> that it is executed within.</para>
    /// </summary>
    /// <seealso cref="TxSuccess"/>
    /// <seealso cref="TxFailure"/>
    public abstract class TxExecution
    {
        protected static readonly Codec _codec = new Codec();

        private protected TxExecution(BlockHash blockHash, TxId txId)
        {
            BlockHash = blockHash;
            TxId = txId;
        }

        /// <summary>
        /// The <see cref="Block.Hash"/> of the <see cref="Block"/> that
        /// the <see cref="Transaction"/> is executed within.
        /// </summary>
        [Pure]
        public BlockHash BlockHash { get; }

        /// <summary>
        /// The executed <see cref="Transaction"/>'s <see cref="Transaction.Id"/>.
        /// </summary>
        [Pure]
        public TxId TxId { get; }
    }
}
