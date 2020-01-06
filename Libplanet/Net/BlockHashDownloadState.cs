namespace Libplanet.Net
{
    /// <summary>
    /// Indicates a progress of downloading block hashes.
    /// </summary>
    [Equals]
    public class BlockHashDownloadState : PreloadState
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
        public BoundPeer SourcePeer { get; internal set; }

        /// <inheritdoc />
        public override int CurrentPhase => 1;
    }
}
