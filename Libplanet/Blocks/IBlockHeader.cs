using System.Collections.Immutable;
using System.Security.Cryptography;
using Libplanet.Crypto;
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

        /// <summary>
        /// The digital signature of the whole block content (except for
        /// <see cref="IBlockExcerpt.Hash"/>, which is derived from the signature and other
        /// contents).  This is made by the <see cref="IBlockMetadata.Miner"/>'s
        /// <see cref="PrivateKey"/>.
        /// <para>As the block signature is introduced since the protocol version 2, it is
        /// <see langword="null"/> for blocks with earlier protocol versions than 2.  Although
        /// the property is type-wise, the block signature is mandatory since the protocol
        /// version 2.</para>
        /// </summary>
        ImmutableArray<byte>? Signature { get; }
    }
}
