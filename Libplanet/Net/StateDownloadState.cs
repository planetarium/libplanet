namespace Libplanet.Net
{
    /// <summary>
    /// Indicates a progress of downloading states.
    /// </summary>
    public class StateDownloadState : PreloadState
    {
        /// <summary>
        /// Total number of messages to receive in the current batch.
        /// </summary>
        public int TotalIterationCount { get; internal set; }

        /// <summary>
        /// The number of received messages until now.
        /// </summary>
        public int ReceivedIterationCount { get; internal set; }

        /// <inheritdoc />
        public override int CurrentPhase => 4;
    }
}
