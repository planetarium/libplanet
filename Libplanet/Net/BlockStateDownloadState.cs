using System.Security.Cryptography;
using Libplanet.Blocks;

namespace Libplanet.Net
{
    /// <summary>
    /// Indicates a progress of downloading block states.
    /// </summary>
    [Equals]
    public class BlockStateDownloadState : PreloadState
    {
        /// <summary>
        /// Total number of block states to receive in the current batch.
        /// </summary>
        public int TotalBlockStateCount { get; internal set; }

        /// <summary>
        /// The number of received block states until now.
        /// </summary>
        public int ReceivedBlockStateCount { get; internal set; }

        /// <summary>
        /// The blcok hash of the states just received.
        /// </summary>
        public HashDigest<SHA256> ReceivedBlockHash { get; internal set; }

        /// <inheritdoc />
        public override int CurrentPhase => 3;
    }
}
