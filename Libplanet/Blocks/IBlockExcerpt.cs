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
        public long Index { get; }

        public HashDigest<SHA256> Hash { get; }

        public BigInteger TotalDifficulty { get; }
    }
}
