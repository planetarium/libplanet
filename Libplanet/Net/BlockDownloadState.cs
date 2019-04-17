using System.Security.Cryptography;

namespace Libplanet.Net
{
    /// <summary>
    /// A container that indicates the progress of a block download.
    /// </summary>
    [Uno.GeneratedEquality]
    public partial class BlockDownloadState
    {
        /// <summary>
        /// Total number of blocks to receive in the current batch.
        /// </summary>
        [Uno.EqualityHash]
        public int TotalBlockCount { get; internal set; }

        /// <summary>
        /// The number of currently received blocks.
        /// </summary>
        [Uno.EqualityHash]
        public int ReceivedBlockCount { get; internal set; }

        /// <summary>
        /// The hash digest of the block just received.
        /// </summary>
        [Uno.EqualityHash]
        public HashDigest<SHA256> ReceivedBlockHash { get; internal set; }
    }
}
