using System.Security.Cryptography;

namespace Libplanet.Net
{
    /// <summary>
    /// Indicates a progress of downloading blocks.
    /// </summary>
    [Equals]
    public class BlockDownloadState : PreloadState
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
        public HashDigest<SHA256> ReceivedBlockHash { get; internal set; }

        /// <inheritdoc />
        public override int CurrentPhase => 2;

        /// <summary>
        /// The peer which sent the block.
        /// </summary>
        public BoundPeer SourcePeer { get; internal set; }
    }
}
