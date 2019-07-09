using System.Collections.Generic;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Tx;

namespace Libplanet.Blockchain.Policies
{
    /// <summary>
    /// An interface to determine if consecutive <see cref="Block{TTxAction, TBlockAction}"/>s are
    /// valid, and to suggest how difficult a <see cref="Block{TTxAction, TBlockAction}.Nonce"/>
    /// for a <see cref="Block{TTxAction, TBlockAction}"/> to be mined.
    /// </summary>
    /// <typeparam name="TTxAction">An <see cref="IAction"/> type for <see cref="Transaction{T}"/>.
    /// It should match to <see cref="Block{TTxAction, TBlockAction}"/>'s type parameter.
    /// </typeparam>
    /// <typeparam name="TBlockAction">An <see cref="IAction"/> type for
    /// <see cref="Block{TTxAction,TBlockAction}"/>.  It should match to
    /// <see cref="Block{TTxAction, TBlockAction}"/>'s type parameter.</typeparam>
    /// <seealso cref="BlockPolicyExtension"/>
    public interface IBlockPolicy<TTxAction, TBlockAction>
        where TTxAction : IAction, new()
        where TBlockAction : IAction, new()
    {
        /// <summary>
        /// Checks if <paramref name="nextBlock"/> is invalid, and if that
        /// returns the reason.
        /// <para>Note that it returns <c>null</c> when
        /// <paramref name="nextBlock"/> is <em>valid</em>.</para>
        /// </summary>
        /// <param name="blocks">Consecutive <see cref="Block{TTxAction, TBlockAction}"/>s to
        /// append <paramref name="nextBlock"/>.</param>
        /// <param name="nextBlock">The next block to append to
        /// <paramref name="blocks"/>.</param>
        /// <returns>The reason why the given <paramref name="blocks"/> are
        /// <em>invalid</em>, or <c>null</c> if <paramref name="blocks"/> are
        /// <em>valid</em>.</returns>
        /// <seealso cref="BlockPolicyExtension.ValidateBlocks{TTxAction, TBlockAction}"/>
        InvalidBlockException ValidateNextBlock(
            IReadOnlyList<Block<TTxAction, TBlockAction>> blocks,
            Block<TTxAction, TBlockAction> nextBlock);

        /// <summary>
        /// Determines a right <see cref="Block{TTxAction, TBlockAction}.Difficulty"/>
        /// for a new <see cref="Block{TTxAction, TBlockAction}"/> to be mined
        /// right after the given <paramref name="blocks"/>.
        /// </summary>
        /// <param name="blocks">Consecutive <see cref="Block{TTxAction, TBlockAction}"/>s to be
        /// followed by a new <see cref="Block{TTxAction, TBlockAction}"/> to be mined.</param>
        /// <returns>A right <see cref="Block{TTxAction, TBlockAction}.Difficulty"/>
        /// for a new <see cref="Block{TTxAction, TBlockAction}"/> to be mined.</returns>
        long GetNextBlockDifficulty(IReadOnlyList<Block<TTxAction, TBlockAction>> blocks);
    }
}
