using System;
using Libplanet.Blocks;

namespace Libplanet.Net
{
    /// <summary>
    /// Indicates a progress of executing block actions.
    /// </summary>
    public class ActionExecutionState : PreloadState, IEquatable<ActionExecutionState>
    {
        /// <summary>
        /// Total number of blocks to execute in the current batch.
        /// </summary>
        public int TotalBlockCount { get; internal set; }

        /// <summary>
        /// The number of currently executed blocks.
        /// </summary>
        public int ExecutedBlockCount { get; internal set; }

        /// <summary>
        /// The hash digest of the block just executed.
        /// </summary>
        public BlockHash ExecutedBlockHash { get; internal set; }

        /// <inheritdoc />
        public override int CurrentPhase => 5;

        public static bool operator ==(ActionExecutionState left, ActionExecutionState right) =>
            left.Equals(right);

        public static bool operator !=(ActionExecutionState left, ActionExecutionState right) =>
            !left.Equals(right);

        public bool Equals(ActionExecutionState? other)
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
                   ExecutedBlockCount == other.ExecutedBlockCount &&
                   ExecutedBlockHash.Equals(other.ExecutedBlockHash);
        }

        public override bool Equals(object? obj) =>
            obj is ActionExecutionState other && Equals(other);

        public override int GetHashCode() => HashCode.Combine(
                base.GetHashCode(),
                TotalBlockCount,
                ExecutedBlockCount,
                ExecutedBlockHash);
    }
}
