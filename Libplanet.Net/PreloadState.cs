using System;

namespace Libplanet.Net
{
    // <summary>
    // Indicates a progress of preloading things from the network.
    // </summary>
    public abstract class PreloadState : IEquatable<PreloadState>
    {
        /// <summary>
        /// The number of total phases.
        /// </summary>
        public const int TotalPhase = 5;

        /// <summary>
        /// The current phase.
        /// </summary>
        public abstract int CurrentPhase { get; }

        public static bool operator ==(PreloadState left, PreloadState right) => left.Equals(right);

        public static bool operator !=(PreloadState left, PreloadState right) =>
            !left.Equals(right);

        public bool Equals(PreloadState? other)
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

        public override bool Equals(object? obj) => obj is PreloadState other && Equals(other);

        public override int GetHashCode() => CurrentPhase;
    }
}
