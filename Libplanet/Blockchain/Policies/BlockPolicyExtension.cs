using System;
using System.Collections.Generic;
using Libplanet.Action;
using Libplanet.Blocks;

namespace Libplanet.Blockchain.Policies
{
    /// <summary>
    /// This extension class enables some convenient methods (sugar for
    /// the most part) to deal with <see cref="IBlockPolicy{T}"/>.
    /// </summary>
    /// <seealso cref="IBlockPolicy{T}"/>
    public static class BlockPolicyExtension
    {
        /// <summary>
        /// Checks if <paramref name="blocks"/> are invalid, and if that
        /// returns the reason.
        /// <para>Note that it returns <c>null</c> when blocks are
        /// <em>valid</em>.</para>
        /// </summary>
        /// <param name="policy"><see cref="IBlockPolicy{T}"/> to used for
        /// validation <paramref name="blocks"/>.</param>
        /// <param name="blocks">Consecutive <see cref="Block{T}"/>s to
        /// validate.</param>
        /// <param name="currentTime">The current time to be used to validate
        /// of <see cref="Block{T}.Timestamp"/>s.
        /// Usually <see cref="DateTimeOffset.UtcNow"/> is used.</param>
        /// <returns>The reason why the given <paramref name="blocks"/> are
        /// <em>invalid</em>, or <c>null</c> if <paramref name="blocks"/> are
        /// <em>valid</em>.</returns>
        /// <typeparam name="T">An <see cref="IAction"/> type.  It should match
        /// to <see cref="Block{T}"/>'s type parameter.</typeparam>
        /// <seealso cref="IBlockPolicy{T}"/>
        /// <seealso cref="IBlockPolicy{T}.ValidateNextBlock"/>
        public static InvalidBlockException ValidateBlocks<T>(
            this IBlockPolicy<T> policy,
            IReadOnlyList<Block<T>> blocks,
            DateTimeOffset currentTime)
            where T : IAction, new()
        {
            var tempBlocks = new List<Block<T>>();
            foreach (Block<T> block in blocks)
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
