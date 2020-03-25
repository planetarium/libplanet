using System.Security.Cryptography;

namespace Libplanet.Net
{
    /// <summary>
    /// Indicates a progress of verifying blocks.
    /// </summary>
    [Equals]
    public class BlockVerificationState : PreloadState
    {
        /// <summary>
        /// Total number of blocks to verify in the current batch.
        /// </summary>
        public long TotalBlockCount { get; internal set; }

        /// <summary>
        /// The number of blocks that completed verification.
        /// </summary>
        public long VerifiedBlockCount { get; internal set; }

        /// <summary>
        /// The hash digest of the block just verified.
        /// </summary>
        public HashDigest<SHA256> VerifiedBlockHash { get; internal set; }

        /// <inheritdoc />
        public override int CurrentPhase => 3;

        public static bool operator ==(BlockVerificationState left, BlockVerificationState right) =>
            Operator.Weave(left, right);

        public static bool operator !=(BlockVerificationState left, BlockVerificationState right) =>
            Operator.Weave(left, right);
    }
}
