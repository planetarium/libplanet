using System;
using System.Collections.Generic;
using Libplanet.Action;
using Libplanet.Blocks;

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
        where T : IAction
    {
        /// <summary>
        /// Checks if <paramref name="blocks"/> are invalid, and if that
        /// returns the reason.
        /// <para>Note that it returns <c>null</c> when blocks are
        /// <em>valid</em>.</para>
        /// </summary>
        /// <param name="blocks">Consecutive <see cref="Block{T}"/>s to
        /// validate.</param>
        /// <param name="currentTime">The current time to be used to validate
        /// of <see cref="Block{T}.Timestamp"/>s.
        /// Usually <see cref="DateTime.UtcNow"/> is used.</param>
        /// <returns>The reason why the given <paramref name="blocks"/> are
        /// <em>invalid</em>, or <c>null</c> if <paramref name="blocks"/> are
        /// <em>valid</em>.</returns>
        InvalidBlockException ValidateBlocks(
            IEnumerable<Block<T>> blocks,
            DateTime currentTime
        );

        /// <summary>
        /// Determines a right <see cref="Block{T}.Difficulty"/>
        /// for a new <see cref="Block{T}"/> to be mined
        /// right after the given <paramref name="blocks"/>.
        /// </summary>
        /// <param name="blocks">Consecutive <see cref="Block{T}"/>s to be
        /// followed by a new <see cref="Block{T}"/> to be mined.</param>
        /// <returns>A right <see cref="Block{T}.Difficulty"/>
        /// for a new <see cref="Block{T}"/> to be mined.</returns>
        uint GetNextBlockDifficulty(IEnumerable<Block<T>> blocks);
    }
}
