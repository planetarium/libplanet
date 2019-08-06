using System.Security.Cryptography;
using Libplanet.Blocks;

namespace Libplanet.Net
{
    /// <summary>
    /// A container that indicates the progress of a block-state download.
    /// </summary>
    [Equals]
    public class BlockStateDownloadState : PreloadState
    {
        public BlockStateDownloadState()
            : base(PreloadPhase.BlockStatesDownload, 3)
        {
        }

        /// <summary>
        /// Total number of block-states to receive in the current batch.
        /// </summary>
        public int TotalBlockStateCount { get; internal set; }

        /// <summary>
        /// The number of currently received block-states.
        /// </summary>
        public int ReceivedBlockStateCount { get; internal set; }

        /// <summary>
        /// The hash digest of the block of the block-states just received.
        /// </summary>
        public HashDigest<SHA256> ReceivedBlockHash { get; internal set; }
    }
}
