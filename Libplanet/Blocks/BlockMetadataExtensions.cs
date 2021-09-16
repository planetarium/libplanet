#nullable enable
using System;

namespace Libplanet.Blocks
{
    /// <summary>
    /// Convenient extension methods for <see cref="IBlockMetadata"/>.
    /// </summary>
    public static class BlockMetadataExtensions
    {
        private static readonly TimeSpan TimestampThreshold = TimeSpan.FromSeconds(15);

        /// <summary>
        /// Creates a <see cref="BlockMetadata"/> by copying the fields of another block
        /// <paramref name="metadata"/>.
        /// <para>This is a shortcut of <see cref="BlockMetadata(IBlockMetadata)"/> constructor.
        /// </para>
        /// </summary>
        /// <param name="metadata">This source of the block metadata to copy.  This hasn't be
        /// a actual <see cref="BlockMetadata"/> instance, but can be any object which implements
        /// <see cref="IBlockMetadata"/> instance.</param>
        /// <returns>The copied block metadata.</returns>
        /// <exception cref="InvalidBlockProtocolVersionException">Thrown when
        /// the <paramref name="metadata"/>'s to set is <see cref="IBlockMetadata.ProtocolVersion"/>
        /// is less than 0, or greater than <see cref="BlockMetadata.CurrentProtocolVersion"/>,
        /// the latest known protocol version.</exception>
        /// <exception cref="InvalidBlockIndexException">Thrown when the <paramref name="metadata"/>
        /// has a negative <see cref="IBlockMetadata.Index"/>.</exception>
        /// <exception cref="InvalidBlockDifficultyException">Thrown when
        /// the <paramref name="metadata"/>'s <see cref="IBlockMetadata.Difficulty"/> is negative.
        /// </exception>
        /// <exception cref="InvalidBlockTotalDifficultyException">Thrown when
        /// the <paramref name="metadata"/>'s <see cref="IBlockMetadata.TotalDifficulty"/> is less
        /// than its <see cref="IBlockMetadata.Difficulty"/>.</exception>
        /// <seealso cref="BlockMetadata(IBlockMetadata)"/>
        public static BlockMetadata Copy(this IBlockMetadata metadata) =>
            new BlockMetadata(metadata);

        /// <summary>
        /// Checks if the given <paramref name="blockMetadata"/>'s
        /// <see cref="IBlockMetadata.Timestamp"/> is valid.  No-op if valid.
        /// </summary>
        /// <param name="blockMetadata">The block metadata to validate.</param>
        /// <exception cref="InvalidBlockTimestampException">Thrown when
        /// <see cref="IBlockMetadata.Timestamp"/> is invalid.  For example,
        /// if <see cref="IBlockMetadata.Timestamp"/> is too far in the future
        /// compared to the current time.</exception>
        public static void ValidateTimestamp(this IBlockMetadata blockMetadata) =>
            ValidateTimestamp(blockMetadata, DateTimeOffset.UtcNow);

        /// <summary>
        /// Checks if the given <paramref name="blockMetadata"/>'s
        /// <see cref="IBlockMetadata.Timestamp"/> is valid.  No-op if valid.
        /// </summary>
        /// <param name="blockMetadata">The block metadata to validate.</param>
        /// <param name="currentTime">Explicitly specify the current time.</param>
        /// <exception cref="InvalidBlockTimestampException">Thrown when
        /// <see cref="IBlockMetadata.Timestamp"/> is invalid.  For example,
        /// if <see cref="IBlockMetadata.Timestamp"/> is too far in the future
        /// compared to <paramref name="currentTime"/>.</exception>
        public static void ValidateTimestamp(
            this IBlockMetadata blockMetadata,
            DateTimeOffset currentTime
        )
        {
            if (currentTime + TimestampThreshold < blockMetadata.Timestamp)
            {
                string hash = blockMetadata is IBlockExcerpt h
                    ? $" {h.Hash}"
                    : string.Empty;
                throw new InvalidBlockTimestampException(
                    $"The block #{blockMetadata.Index}{hash}'s timestamp " +
                    $"({blockMetadata.Timestamp}) is later than now ({currentTime}, " +
                    $"threshold: {TimestampThreshold})."
                );
            }
        }
    }
}
