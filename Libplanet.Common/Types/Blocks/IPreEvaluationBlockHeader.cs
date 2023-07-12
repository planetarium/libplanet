using System.Security.Cryptography;

namespace Libplanet.Common.Types.Blocks
{
    /// <summary>
    /// A common interface for blocks that have their proof-of-work <see cref="Nonce"/>s,
    /// but are not evaluated yet (i.e., state root hash is not yet determined).
    /// </summary>
    public interface IPreEvaluationBlockHeader : IBlockMetadata
    {
        /// <summary>
        /// The hash derived from the block <em>except of</em> its state root hash (i.e., without
        /// action evaluation).  Used for validating <see cref="Nonce"/>.
        /// </summary>
        /// <seealso cref="Nonce"/>
        HashDigest<SHA256> PreEvaluationHash { get; }
    }
}
