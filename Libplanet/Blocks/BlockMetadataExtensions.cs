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
