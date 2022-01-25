namespace Libplanet.Net
{
    // <summary>
    // Indicates a progress of preloading things from the network.
    // </summary>
    [Equals]
    public abstract class PreloadState
    {
        /// <summary>
        /// The number of total phases.
        /// </summary>
        public const int TotalPhase = 5;

        /// <summary>
        /// The current phase.
        /// </summary>
        public abstract int CurrentPhase { get; }

        public static bool operator ==(PreloadState left, PreloadState right) =>
            Operator.Weave(left, right);

        public static bool operator !=(PreloadState left, PreloadState right) =>
            Operator.Weave(left, right);
    }
}
