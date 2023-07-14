using System.Diagnostics.Contracts;
using Libplanet.Action;
using Libplanet.Common.Types.Blocks;
using Libplanet.Common.Types.Tx;

namespace Libplanet.Blockchain.Policies
{
    /// <summary>
    /// <para>
    /// An interface to determine if consecutive <see cref="Block"/>s are valid.
    /// </para>
    /// <para>
    /// An implementation of this interface should perform <em>all policy dependent checks</em>,
    /// such as whether a <see cref="Block"/> has the right difficulty,
    /// a <see cref="Transaction"/> has the right signer, etc.
    /// </para>
    /// <para>
    /// Note that all index dependent sub-policies are ignored for genesis <see cref="Block"/>s.
    /// </para>
    /// </summary>
    public interface IBlockPolicy
    {
        /// <summary>
        /// An <see cref="IAction"/> to execute and be rendered for every block, if any.
        /// </summary>
        IAction? BlockAction { get; }

        /// <summary>
        /// Checks if a <see cref="Transaction"/> can be included in a yet to be mined
        /// <see cref="Block"/> that can be appended to the given <see cref="BlockChain"/>.
        /// </summary>
        /// <param name="blockChain">The target <see cref="BlockChain"/> to include
        /// given <paramref name="transaction"/>.</param>
        /// <param name="transaction">The <see cref="Transaction"/> to consider.</param>
        /// <returns>A <see cref="TxPolicyViolationException"/> with a description
        /// as to why given <paramref name="transaction"/> is <em>invalid</em>,
        /// or <see langword="null"/> if <paramref name="transaction"/> is <em>valid</em>.</returns>
        /// <remarks>
        /// This is used in two different cases:
        /// <list type="bullet">
        /// <item>
        ///     <description>When selecting which <see cref="Transaction"/> to include
        ///     when mining a next <see cref="Block"/>.</description>
        /// </item>
        /// <item>
        ///     <description>When appending a <see cref="Block"/>
        ///     with <paramref name="transaction"/> to a <see cref="BlockChain"/>.</description>
        /// </item>
        /// </list>
        /// This is called separately from <see cref="ValidateNextBlock"/> from
        /// a <see cref="BlockChain"/>.
        /// </remarks>
        TxPolicyViolationException? ValidateNextBlockTx(
            BlockChain blockChain, Transaction transaction);

        /// <summary>
        /// Checks if a <see cref="Block"/> can be appended to
        /// the given <see cref="BlockChain"/>.
        /// </summary>
        /// <param name="blockChain">The target <see cref="BlockChain"/> to
        /// append <paramref name="nextBlock"/>.</param>
        /// <param name="nextBlock">The next block to append to
        /// <paramref name="blockChain"/>.</param>
        /// <returns>A <see cref="BlockPolicyViolationException"/> with a description
        /// as to why given <paramref name="nextBlock"/> is <em>invalid</em>,
        /// or <see langword="null"/> if <paramref name="nextBlock"/> is <em>valid</em>.</returns>
        /// <remarks>
        /// Note that <see cref="ValidateNextBlockTx"/> will be called separately from
        /// a <see cref="BlockChain"/> when appending a <see cref="Block"/>.
        /// Hence, to reduce redundancy, an implementation of this interface should not
        /// call <see cref="ValidateNextBlockTx"/>.
        /// </remarks>
        BlockPolicyViolationException? ValidateNextBlock(
            BlockChain blockChain, Block nextBlock);

        /// <summary>
        /// Gets the maximum length of <see cref="Block.Transactions"/> in bytes.
        /// </summary>
        /// <param name="index">The <see cref="Block.Index"/> of the <see cref="Block"/>
        /// for which this constraint should apply.</param>
        /// <returns>The maximum length of <see cref="Block.Transactions"/> in bytes
        /// to accept.</returns>
        long GetMaxTransactionsBytes(long index);

        /// <summary>
        /// Gets the minimum number of <see cref="Transaction"/>s allowed for
        /// a valid <see cref="Block"/>.
        /// </summary>
        /// <param name="index">The <see cref="Block.Index"/> of the <see cref="Block"/>
        /// for which this constraint should apply.</param>
        /// <returns>The minimum number of <see cref="Transaction"/>s allowed for
        /// a valid <see cref="Block"/> can accept.</returns>
        [Pure]
        int GetMinTransactionsPerBlock(long index);

        /// <summary>
        /// Gets the maximum number of <see cref="Transaction"/>s allowed for
        /// a valid <see cref="Block"/>.
        /// </summary>
        /// <param name="index">The <see cref="Block.Index"/> of the <see cref="Block"/>
        /// for which this constraint should apply.</param>
        /// <returns>The maximum number of <see cref="Transaction"/>s allowed for
        /// a valid <see cref="Block"/> can accept.</returns>
        [Pure]
        int GetMaxTransactionsPerBlock(long index);

        /// <summary>
        /// Gets the maximum number of <see cref="Transaction"/>s allowed per signer for
        /// a valid <see cref="Block"/>.
        /// </summary>
        /// <param name="index">The <see cref="Block.Index"/> of the <see cref="Block"/>
        /// for which this constraint should apply.</param>
        /// <returns>The maximum number of <see cref="Transaction"/>s allowed per signer for
        /// a valid <see cref="Block"/> can accept.</returns>
        [Pure]
        int GetMaxTransactionsPerSignerPerBlock(long index);
    }
}
