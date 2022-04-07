using System;

namespace Libplanet.Net
{
    /// <summary>
    /// Indicates a progress of downloading block hashes.
    /// </summary>
    public class BlockHashDownloadState : PreloadState, IEquatable<BlockHashDownloadState>
    {
        /// <summary>
        /// The estimated number of block hashes to receive in the current batch.
        /// </summary>
        public long EstimatedTotalBlockHashCount { get; internal set; }

        /// <summary>
        /// The number of currently received block hashes.
        /// </summary>
        public long ReceivedBlockHashCount { get; internal set; }

        /// <summary>
        /// The peer which sent the block hashes.
        /// </summary>
        public BoundPeer? SourcePeer { get; internal set; }

        /// <inheritdoc />
        public override int CurrentPhase => 1;

        public static bool operator ==(BlockHashDownloadState left, BlockHashDownloadState right) =>
            left.Equals(right);

        public static bool operator !=(BlockHashDownloadState left, BlockHashDownloadState right) =>
            !left.Equals(right);

        public bool Equals(BlockHashDownloadState? other)
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
                   EstimatedTotalBlockHashCount == other.EstimatedTotalBlockHashCount &&
                   ReceivedBlockHashCount == other.ReceivedBlockHashCount &&
                   ((SourcePeer is null && other.SourcePeer is null) ||
                    (SourcePeer is { } p1 && other.SourcePeer is { } p2 && p1.Equals(p2)));
        }

        public override bool Equals(object? obj) =>
            obj is BlockHashDownloadState other && Equals(other);

        public override int GetHashCode() => HashCode.Combine(
                base.GetHashCode(),
                EstimatedTotalBlockHashCount,
                ReceivedBlockHashCount,
                SourcePeer);
    }
}
