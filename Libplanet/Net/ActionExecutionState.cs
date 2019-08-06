using System.Security.Cryptography;
using Libplanet.Blocks;

namespace Libplanet.Net
{
    /// <summary>
    /// A container that indicates the progress of a block execution.
    /// </summary>
    [Equals]
    public class ActionExecutionState : PreloadState
    {
        public ActionExecutionState()
            : base(PreloadPhase.BlockEvaluate, 4)
        {
        }

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
        public HashDigest<SHA256> ExecutedBlockHash { get; internal set; }
    }
}
