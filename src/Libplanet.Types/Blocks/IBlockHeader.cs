using System.Collections.Immutable;
using System.Security.Cryptography;
using Libplanet.Common;
using Libplanet.Crypto;

namespace Libplanet.Types.Blocks
{
    /// <summary>
    /// A common interface for blocks that have <see cref="StateRootHash"/>es, but no transactions.
    /// </summary>
    public interface IBlockHeader : IPreEvaluationBlockHeader, IBlockExcerpt
    {
        /// <summary>
        /// The <see cref="ITrie.Hash"/> of the resulting states after evaluating transactions and
        /// a <see cref="Blockchain.Policies.IBlockPolicy.BlockAction"/> (if exists).
        /// </summary>
        /// <seealso cref="ITrie.Hash"/>
        HashDigest<SHA256> StateRootHash { get; }

        /// <summary>
        /// <para>
        /// The digital signature of the whole block content (except for
        /// <see cref="IBlockExcerpt.Hash"/>, which is derived from the signature and other
        /// contents).  This is made by the <see cref="IBlockMetadata.Miner"/>'s
        /// <see cref="PrivateKey"/>.
        /// </para>
        /// <para>
        /// As the block signature is introduced since
        /// <see cref="BlockMetadata.SignatureProtocolVersion"/>, it is
        /// <see langword="null"/> for blocks with earlier protocol versions than
        /// <see cref="BlockMetadata.SignatureProtocolVersion"/>.  Although
        /// the property is type-wise, the block signature is mandatory since
        /// <see cref="BlockMetadata.SignatureProtocolVersion"/>.
        /// </para>
        /// </summary>
        ImmutableArray<byte>? Signature { get; }
    }
}
