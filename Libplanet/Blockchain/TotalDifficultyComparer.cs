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
    public class TotalDifficultyComparer : IComparer<IBlockExcerpt>
    {
        /// <summary>
        /// Creates a <see cref="TotalDifficultyComparer"/> instance.
        /// </summary>
        public TotalDifficultyComparer()
        {
        }

        /// <inheritdoc cref="IComparer{T}.Compare(T, T)"/>
        public int Compare(IBlockExcerpt? x, IBlockExcerpt? y)
        {
            // FIXME: This deviates from the documented behavior of IComparer<T>.
            if (x is null || y is null)
            {
                throw new ArgumentNullException(
                    $"Neither {nameof(x)} nor {nameof(y)} should be null.");
            }
            else
            {
                int vcmp = x.ProtocolVersion.CompareTo(y.ProtocolVersion);
                return vcmp == 0 ? x.TotalDifficulty.CompareTo(y.TotalDifficulty) : vcmp;
            }
        }
    }
}
