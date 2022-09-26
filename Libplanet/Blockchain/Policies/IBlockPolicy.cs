using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using Libplanet.Action;
using Libplanet.Assets;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Tx;

namespace Libplanet.Blockchain.Policies
{
    /// <summary>
    /// <para>
    /// An interface to determine if consecutive <see cref="Block{T}"/>s are valid.
    /// </para>
    /// <para>
    /// An implementation of this interface should perform <em>all policy dependent checks</em>,
    /// such as whether a <see cref="Block{T}"/> has the right difficulty,
    /// a <see cref="Transaction{T}"/> has the right signer, etc.
    /// </para>
    /// </summary>
    /// <typeparam name="T">An <see cref="IAction"/> type.  It should match
    /// <see cref="Block{T}"/>'s type parameter.</typeparam>
    public interface IBlockPolicy<T>
        where T : IAction, new()
    {
        /// <summary>
        /// An <see cref="IAction"/> to execute and be rendered for every block, if any.
        /// </summary>
        IAction? BlockAction { get; }

        /// <summary>
        /// A fixed set of <see cref="Currency"/> objects that are supported by the blockchain
        /// as first-class assets.
        /// </summary>
        [Pure]
        IImmutableSet<Currency> NativeTokens { get; }

        /// <summary>
        /// Checks if a <see cref="Transaction{T}"/> can be included in a yet to be mined
        /// <see cref="Block{T}"/> that can be appended to the given <see cref="BlockChain{T}"/>.
        /// </summary>
        /// <param name="blockChain">The target <see cref="BlockChain{T}"/> to include
        /// given <paramref name="transaction"/>.</param>
        /// <param name="transaction">The <see cref="Transaction{T}"/> to consider.</param>
        /// <returns>A <see cref="TxPolicyViolationException"/> with a description
        /// as to why given <paramref name="transaction"/> is <em>invalid</em>,
        /// or <c>null</c> if <paramref name="transaction"/> is <em>valid</em>.</returns>
        /// <remarks>
        /// This is used in two different cases:
        /// <list type="bullet">
        /// <item>
        ///     <description>When selecting which <see cref="Transaction{T}"/> to include
        ///     when mining a next <see cref="Block{T}"/>.</description>
        /// </item>
        /// <item>
        ///     <description>When appending a <see cref="Block{T}"/>
        ///     with <paramref name="transaction"/> to a <see cref="BlockChain{T}"/>.</description>
        /// </item>
        /// </list>
        /// This is called separately from <see cref="ValidateNextBlock"/> from
        /// a <see cref="BlockChain{T}"/>.
        /// </remarks>
        TxPolicyViolationException? ValidateNextBlockTx(
            BlockChain<T> blockChain, Transaction<T> transaction);

        /// <summary>
        /// Checks if a <see cref="Block{T}"/> can be appended to
        /// the given <see cref="BlockChain{T}"/>.
        /// </summary>
        /// <param name="blockChain">The target <see cref="BlockChain{T}"/> to
        /// append <paramref name="nextBlock"/>.</param>
        /// <param name="nextBlock">The next block to append to
        /// <paramref name="blockChain"/>.</param>
        /// <returns>A <see cref="BlockPolicyViolationException"/> with a description
        /// as to why given <paramref name="nextBlock"/> is <em>invalid</em>,
        /// or <c>null</c> if <paramref name="nextBlock"/> is <em>valid</em>.</returns>
        /// <remarks>
        /// Note that <see cref="ValidateNextBlockTx"/> will be called separately from
        /// a <see cref="BlockChain{T}"/> when appending a <see cref="Block{T}"/>.
        /// Hence, to reduce redundancy, an implementation of this interface should not
        /// call <see cref="ValidateNextBlockTx"/>.
        /// </remarks>
        BlockPolicyViolationException? ValidateNextBlock(
            BlockChain<T> blockChain, Block<T> nextBlock);

        /// <summary>
        /// Gets the maximum length of <see cref="Block{T}.Transactions"/> in bytes.
        /// </summary>
        /// <param name="index">The <see cref="Block{T}.Index"/> of the <see cref="Block{T}"/>
        /// for which this constraint should apply.</param>
        /// <returns>The maximum length of <see cref="Block{T}.Transactions"/> in bytes
        /// to accept.</returns>
        long GetMaxTransactionsBytes(long index);

        /// <summary>
        /// Gets the minimum number of <see cref="Transaction{T}"/>s allowed for
        /// a valid <see cref="Block{T}"/>.
        /// </summary>
        /// <param name="index">The <see cref="Block{T}.Index"/> of the <see cref="Block{T}"/>
        /// for which this constraint should apply.</param>
        /// <returns>The minimum number of <see cref="Transaction{T}"/>s allowed for
        /// a valid <see cref="Block{T}"/> can accept.</returns>
        [Pure]
        int GetMinTransactionsPerBlock(long index);

        /// <summary>
        /// Gets the maximum number of <see cref="Transaction{T}"/>s allowed for
        /// a valid <see cref="Block{T}"/>.
        /// </summary>
        /// <param name="index">The <see cref="Block{T}.Index"/> of the <see cref="Block{T}"/>
        /// for which this constraint should apply.</param>
        /// <returns>The maximum number of <see cref="Transaction{T}"/>s allowed for
        /// a valid <see cref="Block{T}"/> can accept.</returns>
        [Pure]
        int GetMaxTransactionsPerBlock(long index);

        /// <summary>
        /// Gets the maximum number of <see cref="Transaction{T}"/>s allowed per signer for
        /// a valid <see cref="Block{T}"/>.
        /// </summary>
        /// <param name="index">The <see cref="Block{T}.Index"/> of the <see cref="Block{T}"/>
        /// for which this constraint should apply.</param>
        /// <returns>The maximum number of <see cref="Transaction{T}"/>s allowed per signer for
        /// a valid <see cref="Block{T}"/> can accept.</returns>
        [Pure]
        int GetMaxTransactionsPerSignerPerBlock(long index);

        /// <summary>
        /// Gets <see cref="IEnumerable{T}"/> of validator.
        /// </summary>
        /// <param name="index">The <see cref="Block{T}.Index"/> of the <see cref="Block{T}"/>
        /// for which this constraint should apply.</param>
        /// <returns><see cref="IEnumerable{T}"/> of validator.</returns>
        [Pure]
        IEnumerable<PublicKey> GetValidators(long index);
    }
}
