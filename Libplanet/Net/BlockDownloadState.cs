using System.Security.Cryptography;

namespace Libplanet.Net
{
    /// <summary>
    /// A container that indicates the progress of a block download.
    /// </summary>
    [Equals]
    public class BlockDownloadState
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
    }
}
