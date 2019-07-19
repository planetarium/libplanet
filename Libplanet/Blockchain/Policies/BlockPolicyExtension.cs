using System;
using System.Collections.Generic;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Tx;

namespace Libplanet.Blockchain.Policies
{
    /// <summary>
    /// This extension class enables some convenient methods (sugar for
    /// the most part) to deal with <see cref="IBlockPolicy{TTxAction, TBlockAction}"/>.
    /// </summary>
    /// <seealso cref="IBlockPolicy{TTxAction, TBlockAction}"/>
    public static class BlockPolicyExtension
    {
        /// <summary>
        /// Checks if <paramref name="blocks"/> are invalid, and if that
        /// returns the reason.
        /// <para>Note that it returns <c>null</c> when blocks are
        /// <em>valid</em>.</para>
        /// </summary>
        /// <param name="policy"><see cref="IBlockPolicy{TTxAction, TBlockAction}"/> to used for
        /// validation <paramref name="blocks"/>.</param>
        /// <param name="blocks">Consecutive <see cref="Block{T}"/>s to
        /// validate.</param>
        /// <param name="currentTime">The current time to be used to validate
        /// of <see cref="Block{T}.Timestamp"/>s.
        /// Usually <see cref="DateTimeOffset.UtcNow"/> is used.</param>
        /// <returns>The reason why the given <paramref name="blocks"/> are
        /// <em>invalid</em>, or <c>null</c> if <paramref name="blocks"/> are
        /// <em>valid</em>.</returns>
        /// <typeparam name="TTxAction">An <see cref="IAction"/> type used for
        /// <see cref="Transaction{T}"/>.  It should match to <see cref="Block{T}"/>'s type
        /// parameter.</typeparam>
        /// <typeparam name="TBlockAction">An <see cref="IAction"/> type for
        /// <see cref="IBlockPolicy{TTxAction,TBlockAction}.BlockAction"/>.</typeparam>
        /// <seealso cref="IBlockPolicy{TTxAction, TBlockAction}"/>
        /// <seealso cref="IBlockPolicy{TTxAction, TBlockAction}.ValidateNextBlock"/>
        public static InvalidBlockException ValidateBlocks<TTxAction, TBlockAction>(
            this IBlockPolicy<TTxAction, TBlockAction> policy,
            IReadOnlyList<Block<TTxAction>> blocks,
            DateTimeOffset currentTime)
            where TTxAction : IAction, new()
            where TBlockAction : IAction, new()
        {
            var tempBlocks = new List<Block<TTxAction>>();
            foreach (Block<TTxAction> block in blocks)
            {
                InvalidBlockException exception =
                    policy.ValidateNextBlock(tempBlocks, block);
                if (!(exception is null))
                {
                    return exception;
                }

                tempBlocks.Add(block);
            }

            return null;
        }
    }
}
