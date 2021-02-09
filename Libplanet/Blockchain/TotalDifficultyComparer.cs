#nullable enable
using System;
using System.Collections.Generic;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;

namespace Libplanet.Blockchain
{
    /// <summary>
    /// The default canonical chain comparer (which purpose to be a <see
    /// cref="IBlockPolicy{T}.CanonicalChainComparer"/>).
    /// <para>The chain which has the most <see cref="Block{T}.TotalDifficulty"/> is considered
    /// the greatest, i.e., canonical chain.</para>
    /// </summary>
    /// <remarks>Although this compares blocks' total difficulty, if two blocks have different
    /// protocol version, it always consider the higher version greater.</remarks>
    /// <seealso cref="IBlockPolicy{T}.CanonicalChainComparer"/>
    /// <seealso cref="IBlockExcerpt"/>
    public class TotalDifficultyComparer : IComparer<BlockPerception>
    {
        private readonly Func<DateTimeOffset> _currentTimeGetter;

        /// <summary>
        /// Creates a <see cref="TotalDifficultyComparer"/> instance.
        /// </summary>
        /// <param name="outdateAfter">Blocks taken this time since they are perceived are
        /// considered outdated, so that chains having these blocks as their tips become stale.
        /// </param>
        public TotalDifficultyComparer(TimeSpan outdateAfter)
            : this(outdateAfter, () => DateTimeOffset.UtcNow)
        {
        }

        /// <summary>
        /// Creates a <see cref="TotalDifficultyComparer"/> instance.
        /// </summary>
        /// <param name="outdateAfter">Blocks taken this time since they are perceived are
        /// considered outdated, so that chains having these blocks as their tips become stale.
        /// </param>
        /// <param name="currentTimeGetter">Configures the way to get the current time instead of
        /// <see cref="DateTimeOffset.UtcNow"/> property.</param>
        public TotalDifficultyComparer(
            TimeSpan outdateAfter,
            Func<DateTimeOffset> currentTimeGetter
        )
        {
            _currentTimeGetter = currentTimeGetter;
            OutdateAfter = outdateAfter;
        }

        /// <summary>
        /// Blocks taken this time since they are perceived are considered outdated, so that
        /// chains having these blocks as their tips become stale.
        /// </summary>
        public TimeSpan OutdateAfter { get; }

        /// <inheritdoc cref="IComparer{T}.Compare(T, T)"/>
        public int Compare(BlockPerception x, BlockPerception y)
        {
            DateTimeOffset outdateBefore = _currentTimeGetter() - OutdateAfter;
            bool xOutdated = x.PerceivedTime <= outdateBefore,
                 yOutdated = y.PerceivedTime <= outdateBefore;
            if (xOutdated != yOutdated)
            {
                return xOutdated ? -1 : 1;
            }

            IBlockExcerpt xBlock = x.BlockExcerpt, yBlock = y.BlockExcerpt;
            int vcmp = xBlock.ProtocolVersion.CompareTo(yBlock.ProtocolVersion);
            return vcmp == 0 ? xBlock.TotalDifficulty.CompareTo(yBlock.TotalDifficulty) : vcmp;
        }
    }
}
