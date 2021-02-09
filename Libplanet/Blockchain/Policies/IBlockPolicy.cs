#nullable enable
using System.Collections.Generic;
using System.Diagnostics.Contracts;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Tx;

namespace Libplanet.Blockchain.Policies
{
    /// <summary>
    /// An interface to determine if consecutive <see cref="Block{T}"/>s are
    /// valid, and to suggest how difficult a <see cref="Block{T}.Nonce"/>
    /// for a <see cref="Block{T}"/> to be mined.
    /// </summary>
    /// <typeparam name="T">An <see cref="IAction"/> type.  It should match
    /// to <see cref="Block{T}"/>'s type parameter.</typeparam>
    public interface IBlockPolicy<T>
        where T : IAction, new()
    {
        /// <summary>
        /// A comparer to determine which branch is the canonical chain (i.e., best chain).
        /// The most greater one according to this comparer is considered to be the canon.
        /// </summary>
        /// <seealso cref="IBlockExcerpt"/>
        /// <seealso cref="TotalDifficultyComparer"/>
        IComparer<BlockPerception> CanonicalChainComparer { get; }

        /// <summary>
        /// A block action to execute and be rendered for every block.
        /// </summary>
        IAction BlockAction { get; }

        /// <summary>
        /// The maximum number of <see cref="Block{T}.Transactions"/> that a <see cref="Block{T}"/>
        /// can accept.  This value must not be negative and must be deterministic (i.e., must not
        /// change after an object is once instantiated).
        /// </summary>
        /// <remarks>If the value is less then 1, it's treated as 1.</remarks>
        [Pure]
        int MaxTransactionsPerBlock { get; }

        /// <summary>
        /// A predicate that determines if the transaction follows the block policy.
        /// </summary>
        /// <param name="transaction">A <see cref="Transaction{T}"/> to determine.</param>
        /// <param name="blockChain">A <see cref="BlockChain{T}" /> for given
        /// <paramref name="transaction" />.</param>
        /// <returns><c>true</c> if <paramref name="transaction"/>is valid; otherwise, <c>false</c>.
        /// </returns>
        bool DoesTransactionFollowsPolicy(
            Transaction<T> transaction,
            BlockChain<T> blockChain
        );

        /// <summary>
        /// Checks if <paramref name="nextBlock"/> is invalid, and if that
        /// returns the reason.
        /// <para>Note that it returns <c>null</c> when
        /// <paramref name="nextBlock"/> is <em>valid</em>.</para>
        /// </summary>
        /// <param name="blocks">Consecutive <see cref="Block{T}"/>s to
        /// append <paramref name="nextBlock"/>.</param>
        /// <param name="nextBlock">The next block to append to
        /// <paramref name="blocks"/>.</param>
        /// <returns>The reason why the given <paramref name="blocks"/> are
        /// <em>invalid</em>, or <c>null</c> if <paramref name="blocks"/> are
        /// <em>valid</em>.</returns>
        InvalidBlockException? ValidateNextBlock(BlockChain<T> blocks, Block<T> nextBlock);

        /// <summary>
        /// Determines a right <see cref="Block{T}.Difficulty"/>
        /// for a new <see cref="Block{T}"/> to be mined
        /// right after the given <paramref name="blocks"/>.
        /// </summary>
        /// <param name="blocks">Consecutive <see cref="Block{T}"/>s to be
        /// followed by a new <see cref="Block{T}"/> to be mined.</param>
        /// <returns>A right <see cref="Block{T}.Difficulty"/>
        /// for a new <see cref="Block{T}"/> to be mined.</returns>
        long GetNextBlockDifficulty(BlockChain<T> blocks);

        /// <summary>
        /// Gets the maximum length of a <see cref="Block{T}"/> in bytes.  It can vary depending on
        /// a given <paramref name="index"/>, but should be deterministic; for the same
        /// <paramref name="index"/>, the same value must be returned.
        /// </summary>
        /// <param name="index">An <see cref="Block{T}.Index"/> of a block to mine or receive.
        /// </param>
        /// <returns>The maximum length of a <see cref="Block{T}"/> in bytes to accept.</returns>
        /// <remarks>If it returns less then 1, it is treated as 1, because there is no block
        /// taking 0 bytes or negative length of bytes.</remarks>
        int GetMaxBlockBytes(long index);
    }
}
