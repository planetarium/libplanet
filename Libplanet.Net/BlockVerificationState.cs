using System;
using Libplanet.Blocks;

namespace Libplanet.Net
{
    /// <summary>
    /// Indicates a progress of verifying blocks.
    /// </summary>
    public class BlockVerificationState : PreloadState, IEquatable<BlockVerificationState>
    {
        /// <summary>
        /// Total number of blocks to verify in the current batch.
        /// </summary>
        public long TotalBlockCount { get; internal set; }

        /// <summary>
        /// The number of blocks that completed verification.
        /// </summary>
        public long VerifiedBlockCount { get; internal set; }

        /// <summary>
        /// The hash digest of the block just verified.
        /// </summary>
        public BlockHash VerifiedBlockHash { get; internal set; }

        /// <inheritdoc />
        public override int CurrentPhase => 3;

        public static bool operator ==(BlockVerificationState left, BlockVerificationState right) =>
            left.Equals(right);

        public static bool operator !=(BlockVerificationState left, BlockVerificationState right) =>
            !left.Equals(right);

        public bool Equals(BlockVerificationState? other)
        {
            if (other is null)
            {
                return false;
            }

            if (ReferenceEquals(this, other))
            {
                return true;
            }

            return base.Equals(other) &&
                   TotalBlockCount == other.TotalBlockCount &&
                   VerifiedBlockCount == other.VerifiedBlockCount &&
                   VerifiedBlockHash.Equals(other.VerifiedBlockHash);
        }

        public override bool Equals(object? obj) =>
            obj is BlockVerificationState other && Equals(other);

        public override int GetHashCode() => HashCode.Combine(
            base.GetHashCode(),
            TotalBlockCount,
            VerifiedBlockCount,
            VerifiedBlockHash);
    }
}
