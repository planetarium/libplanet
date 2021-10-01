#nullable enable
using System.Security.Cryptography;
using Libplanet.Store.Trie;

namespace Libplanet.Blocks
{
    /// <summary>
    /// A common interface for blocks that have their proof-of-work <see cref="Nonce"/>s and
    /// <see cref="StateRootHash"/>es, but no transactions.
    /// </summary>
    public interface IBlockHeader : IPreEvaluationBlockHeader, IBlockExcerpt
    {
        /// <summary>
        /// The <see cref="ITrie.Hash"/> of the resulting states after evaluating transactions and
        /// a <see cref="Blockchain.Policies.IBlockPolicy{T}.BlockAction"/> (if exists).
        /// </summary>
        /// <seealso cref="ITrie.Hash"/>
        HashDigest<SHA256> StateRootHash { get; }
    }
}
