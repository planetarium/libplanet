#nullable enable
using System.Numerics;
using System.Security.Cryptography;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;

namespace Libplanet.Blocks
{
    /// <summary>
    /// The very essential metadata extracted from a block.  This purposes to determine
    /// the canonical chain.
    /// </summary>
    /// <seealso cref="IBlockPolicy{T}.CanonicalChainComparer"/>
    /// <seealso cref="TotalDifficultyComparer"/>
    public interface IBlockExcerpt
    {
        /// <summary>
        /// A block's protocol version.
        /// </summary>
        /// <seealso cref="Block{T}.ProtocolVersion"/>
        public int ProtocolVersion { get; }

        /// <summary>
        /// A block's index (height).
        /// </summary>
        /// <seealso cref="Block{T}.Index"/>
        public long Index { get; }

        /// <summary>
        /// A block's hash.
        /// </summary>
        /// <seealso cref="Block{T}.Hash"/>
        public HashDigest<SHA256> Hash { get; }

        /// <summary>
        /// The sum of a block and its all ancestors' difficulties.
        /// </summary>
        /// <seealso cref="Block{T}.TotalDifficulty"/>
        public BigInteger TotalDifficulty { get; }
    }
}
