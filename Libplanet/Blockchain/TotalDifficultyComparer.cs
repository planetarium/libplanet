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
        /// <inheritdoc cref="IComparer{T}.Compare(T, T)"/>
        public int Compare(BlockPerception x, BlockPerception y)
        {
            IBlockExcerpt xBlock = x.BlockExcerpt, yBlock = y.BlockExcerpt;
            int vcmp = xBlock.ProtocolVersion.CompareTo(yBlock.ProtocolVersion);
            return vcmp == 0 ? xBlock.TotalDifficulty.CompareTo(yBlock.TotalDifficulty) : vcmp;
        }
    }
}
