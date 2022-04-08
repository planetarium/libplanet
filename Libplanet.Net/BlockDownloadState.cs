using System;
using Libplanet.Blocks;

namespace Libplanet.Net
{
    /// <summary>
    /// Indicates a progress of downloading blocks.
    /// </summary>
    public class BlockDownloadState : PreloadState, IEquatable<BlockDownloadState>
    {
        /// <summary>
        /// Total number of blocks to receive in the current batch.
        /// </summary>
        public long TotalBlockCount { get; internal set; }

        /// <summary>
        /// The number of currently received blocks.
        /// </summary>
        public long ReceivedBlockCount { get; internal set; }

        /// <summary>
        /// The hash digest of the block just received.
        /// </summary>
        public BlockHash ReceivedBlockHash { get; internal set; }

        /// <inheritdoc />
        public override int CurrentPhase => 2;

        /// <summary>
        /// The peer which sent the block.
        /// </summary>
        public BoundPeer? SourcePeer { get; internal set; }

        public static bool operator ==(BlockDownloadState left, BlockDownloadState right) =>
            left.Equals(right);

        public static bool operator !=(BlockDownloadState left, BlockDownloadState right) =>
            !left.Equals(right);

        public bool Equals(BlockDownloadState? other)
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
                   ReceivedBlockCount == other.ReceivedBlockCount &&
                   ReceivedBlockHash.Equals(other.ReceivedBlockHash) &&
                   ((SourcePeer is null && other.SourcePeer is null) ||
                    (SourcePeer is { } p1 && other.SourcePeer is { } p2 && p1.Equals(p2)));
        }

        public override bool Equals(object? obj) =>
            obj is BlockDownloadState other && Equals(other);

        public override int GetHashCode() => HashCode.Combine(
                base.GetHashCode(),
                TotalBlockCount,
                ReceivedBlockCount,
                ReceivedBlockHash,
                SourcePeer);
    }
}
