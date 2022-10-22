using System;

namespace Libplanet.Blocks
{
    /// <summary>
    /// Convenient extension methods for <see cref="IBlockMetadata"/>.
    /// </summary>
    public static class IBlockMetadataExtensions
    {
        private static readonly TimeSpan TimestampThreshold = TimeSpan.FromSeconds(15);

        /// <summary>
        /// Checks if the given <paramref name="metadata"/>'s
        /// <see cref="IBlockMetadata.Timestamp"/> is valid.  No-op if valid.
        /// </summary>
        /// <param name="metadata">The block metadata to validate.</param>
        /// <exception cref="InvalidBlockTimestampException">Thrown when
        /// <see cref="IBlockMetadata.Timestamp"/> is invalid.  For example,
        /// if <see cref="IBlockMetadata.Timestamp"/> is too far in the future
        /// compared to the current time.</exception>
        public static void ValidateTimestamp(this IBlockMetadata metadata) =>
            ValidateTimestamp(metadata, DateTimeOffset.UtcNow);

        /// <summary>
        /// Checks if the given <paramref name="metadata"/>'s
        /// <see cref="IBlockMetadata.Timestamp"/> is valid.  No-op if valid.
        /// </summary>
        /// <param name="metadata">The block metadata to validate.</param>
        /// <param name="currentTime">Explicitly specify the current time.</param>
        /// <exception cref="InvalidBlockTimestampException">Thrown when
        /// <see cref="IBlockMetadata.Timestamp"/> is invalid.  For example,
        /// if <see cref="IBlockMetadata.Timestamp"/> is too far in the future
        /// compared to <paramref name="currentTime"/>.</exception>
        public static void ValidateTimestamp(
            this IBlockMetadata metadata, DateTimeOffset currentTime)
        {
            if (currentTime + TimestampThreshold < metadata.Timestamp)
            {
                string hash = metadata is IBlockExcerpt h
                    ? $" {h.Hash}"
                    : string.Empty;
                throw new InvalidBlockTimestampException(
                    $"The block #{metadata.Index}{hash}'s timestamp " +
                    $"({metadata.Timestamp}) is later than now ({currentTime}, " +
                    $"threshold: {TimestampThreshold}).");
            }
        }
    }
}
