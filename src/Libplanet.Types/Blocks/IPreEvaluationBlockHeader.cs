using System.Security.Cryptography;
using Libplanet.Common;

namespace Libplanet.Types.Blocks
{
    /// <summary>
    /// A common interface for blocks that are not evaluated yet
    /// (i.e., state root hash is not yet determined).
    /// </summary>
    public interface IPreEvaluationBlockHeader : IBlockMetadata
    {
        /// <summary>
        /// The hash derived from the block <em>except of</em> its state root hash (i.e., without
        /// action evaluation).
        /// </summary>
        HashDigest<SHA256> PreEvaluationHash { get; }
    }
}
