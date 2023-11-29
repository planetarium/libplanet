using System.Diagnostics.Contracts;
using Libplanet.Crypto;
using Libplanet.Types.Blocks;
using Libplanet.Types.Tx;

namespace Libplanet.Action
{
    /// <summary>
    /// Contextual data determined by a transaction and a block.
    /// Passed to <see cref="IAction.Execute(IActionContext)"/> method.
    /// </summary>
    public interface ITxContext
    {
        /// <summary>
        /// The <see cref="Transaction.Signer"/> of the <see cref="Transaction"/> that contains
        /// the <see cref="IAction"/> to be executed.  If the <see cref="IAction"/> is
        /// not part of a <see cref="Transaction"/>, e.g. <see cref="IBlockPolicy.BlockAction"/>,
        /// this is set to <see cref="Block.Miner"/> instead.
        /// </summary>
        [Pure]
        Address Signer { get; }

        /// <summary>
        /// The <see cref="Transaction.Id"/> of the <see cref="Transaction"/> that contains
        /// the <see cref="IAction"/>.  If the <see cref="IAction"/> is not part of
        /// a <see cref="Transaction"/>, e.g. <see cref="IBlockPolicy.BlockAction"/>,
        /// this is set to <see langword="null"/>.
        /// </summary>
        [Pure]
        TxId? TxId { get; }

        /// <summary>
        /// The <see cref="Block.Miner"/> of the <see cref="Block"/> that contains
        /// the <see cref="IAction"/>.
        /// </summary>
        [Pure]
        Address Miner { get; }

        /// <summary>
        /// The <see cref="Block.Index"/> of the <see cref="Block"/> that contains
        /// the <see cref="IAction"/>.
        /// </summary>
        [Pure]
        long BlockIndex { get; }

        /// <summary>
        /// The <see cref="Block.ProtocolVersion"/> of the <see cref="Block"/> that contains
        /// the <see cref="IAction"/>.
        /// </summary>
        [Pure]
        int BlockProtocolVersion { get; }
    }
}
