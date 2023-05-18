using System;

namespace Libplanet.Net
{
    // <summary>
    // Indicates a progress of preloading things from the network.
    // </summary>
    public abstract class BlockSyncState : IEquatable<BlockSyncState>
    {
        /// <summary>
        /// The number of total phases.
        /// </summary>
        public const int TotalPhase = 5;

        /// <summary>
        /// The current phase.
        /// </summary>
        public abstract int CurrentPhase { get; }

        public static bool operator ==(BlockSyncState left, BlockSyncState right) =>
            left.Equals(right);

        public static bool operator !=(BlockSyncState left, BlockSyncState right) =>
            !left.Equals(right);

        public bool Equals(BlockSyncState? other)
        {
            if (other is null)
            {
                return false;
            }

            if (ReferenceEquals(this, other))
            {
                return true;
            }

            return CurrentPhase == other.CurrentPhase;
        }

        public override bool Equals(object? obj) => obj is BlockSyncState other && Equals(other);

        public override int GetHashCode() => CurrentPhase;
    }
}
