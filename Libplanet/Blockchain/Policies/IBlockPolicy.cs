using System.Collections.Generic;
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
    /// <typeparam name="TTxAction">An <see cref="IAction"/> type used for
    /// <see cref="Transaction{T}"/>.  It should match to <see cref="Block{T}"/>'s type parameter.
    /// </typeparam>
    /// <typeparam name="TBlockAction">An <see cref="IAction"/> type used when mining.
    /// It should match to <see cref="Block{T}"/>'s type parameter.
    /// </typeparam>
    /// <seealso cref="BlockPolicyExtension"/>
    public interface IBlockPolicy<TTxAction, out TBlockAction>
        where TTxAction : IAction, new()
        where TBlockAction : IAction, new()
    {
        /// <summary>
        /// Gets a block action to execute when appending a block.
        /// </summary>
        /// <returns>A list of <see cref="IAction"/>s for a miner.</returns>
        TBlockAction BlockAction { get; }

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
        /// <seealso cref="BlockPolicyExtension.ValidateBlocks{TTxAction, TBlockAction}"/>
        InvalidBlockException ValidateNextBlock(
            IReadOnlyList<Block<TTxAction>> blocks,
            Block<TTxAction> nextBlock);

        /// <summary>
        /// Determines a right <see cref="Block{T}.Difficulty"/>
        /// for a new <see cref="Block{T}"/> to be mined
        /// right after the given <paramref name="blocks"/>.
        /// </summary>
        /// <param name="blocks">Consecutive <see cref="Block{T}"/>s to be
        /// followed by a new <see cref="Block{T}"/> to be mined.</param>
        /// <returns>A right <see cref="Block{T}.Difficulty"/>
        /// for a new <see cref="Block{T}"/> to be mined.</returns>
        long GetNextBlockDifficulty(IReadOnlyList<Block<TTxAction>> blocks);
    }
}
