using System;
using System.Collections.Immutable;
using System.Numerics;
using System.Security.Cryptography;
using Bencodex;
using Bencodex.Types;
using Libplanet.Crypto;

namespace Libplanet.Blocks
{
    /// <summary>
    /// A block candidate without evaluating actions (in its transactions and a possible
    /// <see cref="Blockchain.Policies.IBlockPolicy{T}.BlockAction"/>) and state root hash.
    /// </summary>
    /// <remarks>It guarantees that every instance of this type has a valid proof-of-work
    /// <see cref="Nonce"/> which satisfies its <see cref="Difficulty"/>.</remarks>
    public class PreEvaluationBlockHeader : IPreEvaluationBlockHeader
    {
        protected static readonly Codec Codec = new Codec();

        private readonly BlockMetadata _metadata;
        private readonly Nonce _nonce;
        private readonly ImmutableArray<byte> _preEvaluationHash;

        /// <summary>
        /// Creates a <see cref="PreEvaluationBlockHeader"/> by copying the fields of another
        /// pre-evaluation block <paramref name="header"/>.
        /// </summary>
        /// <remarks>
        /// <para>
        /// As <paramref name="header"/> needn't be an actual <see cref="PreEvaluationBlockHeader"/>
        /// instance, but simply any object implementing <see cref="IPreEvaluationBlockHeader"/>
        /// interface, it can't be trusted to satisfy all the constraints for a valid
        /// <see cref="PreEvaluationBlockHeader"/> instance.  As such, conditions are checked again
        /// whilst creating a copy.  This is a relatively heavy operation, so must be used
        /// sparingly.
        /// </para>
        /// <para>
        /// In particular, this creates a new instance of
        /// <see cref="BlockMetadata"/> with data extracted from <paramref name="header"/>.
        /// Thus any <see cref="Exception"/>s that can be thrown from a
        /// <see cref="BlockMetadata"/>'s constructors may also be thrown in addition to the ones
        /// explicitly listed below.
        /// </para>
        /// </remarks>
        /// <param name="header">The pre-evaluation block header to copy.</param>
        /// <exception cref="InvalidBlockPreEvaluationHashException">Thrown when the given
        /// pre-evaluation <paramref name="header"/>'s
        /// <see cref="IPreEvaluationBlockHeader.PreEvaluationHash"/> is invalid.</exception>
        /// <exception cref="InvalidBlockNonceException">Thrown when the given
        /// pre-evaluation <paramref name="header"/>'s
        /// <see cref="IPreEvaluationBlockHeader.Nonce"/> does not satisfy the required
        /// <see cref="IBlockMetadata.Difficulty"/>.
        /// </exception>
        /// <seealso cref="BlockMetadata"/>
        public PreEvaluationBlockHeader(IPreEvaluationBlockHeader header)
            : this(new BlockMetadata(header), (header.Nonce, header.PreEvaluationHash))
        {
        }

        /// <summary>
        /// Creates a <see cref="PreEvaluationBlockHeader"/> instance with its
        /// <paramref name="metadata"/> and a valid <paramref name="proof"/>.  All other public
        /// constructors should be redirected to this one.
        /// </summary>
        /// <param name="metadata">Block's metadata.</param>
        /// <param name="proof">A pair of the valid proof-of-work nonce which is probably considered
        /// as to satisfy the required <see cref="Difficulty"/>, and the hash digest which is
        /// probably considered as to be derived from the block <paramref name="metadata"/> and the
        /// nonce.</param>
        /// <exception cref="InvalidBlockPreEvaluationHashException">Thrown when
        /// <paramref name="proof.PreEvaluationHash"/> is invalid.</exception>
        /// <exception cref="InvalidBlockNonceException">Thrown when <paramref name="proof.Nonce"/>
        /// does not satisfy the required <see cref="IBlockMetadata.Difficulty"/>.</exception>
        public PreEvaluationBlockHeader(
            BlockMetadata metadata,
            in (Nonce Nonce, ImmutableArray<byte> PreEvaluationHash) proof)
        {
            CheckPreEvaluationHash(metadata, proof.Nonce, proof.PreEvaluationHash);
            if (!ByteUtil.Satisfies(proof.PreEvaluationHash, metadata.Difficulty))
            {
                throw new InvalidBlockNonceException(
                    $"Block #{metadata.Index}'s {nameof(PreEvaluationHash)} " +
                    $"({ByteUtil.Hex(proof.PreEvaluationHash)}) with nonce ({proof.Nonce}) does " +
                    $"not satisfy its difficulty level {metadata.Difficulty}."
                );
            }

            _metadata = metadata;
            _nonce = proof.Nonce;
            _preEvaluationHash = proof.PreEvaluationHash;
        }

        /// <summary>
        /// Internal <see cref="BlockMetadata"/>.
        /// </summary>
        public BlockMetadata Metadata => _metadata;

        /// <inheritdoc cref="IBlockMetadata.ProtocolVersion"/>
        public int ProtocolVersion => Metadata.ProtocolVersion;

        /// <inheritdoc cref="IBlockMetadata.Index"/>
        public long Index => Metadata.Index;

        /// <inheritdoc cref="IBlockMetadata.Timestamp"/>
        public DateTimeOffset Timestamp => Metadata.Timestamp;

        /// <inheritdoc cref="IBlockMetadata.Miner"/>
        public Address Miner => Metadata.Miner;

        /// <inheritdoc cref="IBlockMetadata.PublicKey"/>
        public PublicKey? PublicKey => Metadata.PublicKey;

        /// <inheritdoc cref="IBlockMetadata.Difficulty"/>
        public long Difficulty => Metadata.Difficulty;

        /// <inheritdoc cref="IBlockMetadata.TotalDifficulty"/>
        public BigInteger TotalDifficulty => Metadata.TotalDifficulty;

        /// <inheritdoc cref="IBlockMetadata.PreviousHash"/>
        public BlockHash? PreviousHash => Metadata.PreviousHash;

        /// <inheritdoc cref="IBlockMetadata.TxHash"/>
        public HashDigest<SHA256>? TxHash => Metadata.TxHash;

        /// <inheritdoc cref="IPreEvaluationBlockHeader.Nonce"/>
        public Nonce Nonce => _nonce;

        /// <inheritdoc cref="IPreEvaluationBlockHeader.PreEvaluationHash"/>
        public ImmutableArray<byte> PreEvaluationHash => _preEvaluationHash;

        /// <summary>
        /// Serializes data of a possible candidate shifted from it into a Bencodex dictionary.
        /// This data is used as the input to calculate the block <see cref="Block{T}.Hash"/>,
        /// rather than transmitting the block over the network.
        /// </summary>
        /// <param name="stateRootHash">The <see cref="Libplanet.Store.Trie.ITrie.Hash"/> of
        /// the resulting states after evaluating transactions and
        /// a <see cref="Blockchain.Policies.IBlockPolicy{T}.BlockAction"/> (if exists).</param>
        /// <param name="signature">The block signature created using <see cref="MakeSignature"/>
        /// method with the <paramref name="stateRootHash"/>.  This must be <see langword="null"/>
        /// for blocks with earlier <seealso cref="ProtocolVersion"/>s than 2.</param>
        /// <returns>The serialized block header in a Bencodex dictionary.</returns>
        public Bencodex.Types.Dictionary MakeCandidateData(
            HashDigest<SHA256> stateRootHash,
            ImmutableArray<byte>? signature = null)
        {
            Dictionary dict = Metadata.MakeCandidateData(Nonce)
                .Add("state_root_hash", stateRootHash.ByteArray);
            if (signature is { } sig)
            {
                dict = dict.Add("signature", sig);
            }

            return dict;
        }

        /// <summary>
        /// Makes a signature of the block content with a <paramref name="stateRootHash"/> using
        /// the given <paramref name="privateKey"/>.
        /// </summary>
        /// <param name="privateKey">The miner's private key.  This must match to the block's
        /// <see cref="Miner"/> and <see cref="PublicKey"/>.</param>
        /// <param name="stateRootHash">The state root hash to include to the input message to
        /// sign.</param>
        /// <returns>The signature of the block content with a <paramref name="stateRootHash"/>
        /// using the given <paramref name="privateKey"/>.</returns>
        /// <exception cref="InvalidOperationException">Thrown when the block's
        /// <see cref="ProtocolVersion"/> is less than 2.</exception>
        /// <exception cref="ArgumentException">Thrown when the given <paramref name="privateKey"/>
        /// does not match to the block miner's <see cref="PublicKey"/>.</exception>
        /// <remarks>As blocks have their signatures since the <see cref="ProtocolVersion"/> 2,
        /// it is not usable with blocks of the earlier <see cref="ProtocolVersion"/>s than 2.
        /// </remarks>
        public ImmutableArray<byte> MakeSignature(
            PrivateKey privateKey,
            HashDigest<SHA256> stateRootHash)
        {
            if (PublicKey is null)
            {
                throw new InvalidOperationException(
                    "The block with the protocol version < 2 cannot be signed, because it lacks " +
                    "its miner's public key so that others cannot verify its signature."
                );
            }
            else if (!privateKey.PublicKey.Equals(PublicKey))
            {
                string m = "The given private key does not match to the miner's public key." +
                    $"Block's public key: {PublicKey}\n" +
                    $"Derived public key: {privateKey.PublicKey}\n";
                throw new ArgumentException(m, nameof(privateKey));
            }

            byte[] msg = Codec.Encode(MakeCandidateData(stateRootHash));
            byte[] sig = privateKey.Sign(msg);
            return ImmutableArray.Create(sig);
        }

        /// <summary>
        /// Verifies if the given block <paramref name="signature"/> is valid with the block
        /// content and the specified <paramref name="stateRootHash"/>.
        /// </summary>
        /// <param name="signature">The block signature created using <see cref="MakeSignature"/>
        /// method with the <paramref name="stateRootHash"/>.  This must be <see langword="null"/>
        /// for blocks with earlier <seealso cref="ProtocolVersion"/>s than 2.</param>
        /// <param name="stateRootHash">The state root hash included in the original message
        /// of the signature.</param>
        /// <returns><see langword="true"/> if the signature is valid.  <see langword="false"/>
        /// otherwise.</returns>
        public bool VerifySignature(
            ImmutableArray<byte>? signature,
            HashDigest<SHA256> stateRootHash)
        {
            if (PublicKey is { } pubKey && signature is { } sig)
            {
                byte[] msg = Codec.Encode(MakeCandidateData(stateRootHash));
                return pubKey.Verify(msg, sig);
            }
            else if (PublicKey is null)
            {
                return signature is null;
            }

            return false;
        }

        /// <summary>
        /// Derives a hash digest from the given pre-evaluation block header and
        /// <paramref name="stateRootHash"/>.
        /// </summary>
        /// <param name="stateRootHash">The state root hash.</param>
        /// <param name="signature">The block signature created using <see cref="MakeSignature"/>
        /// method with the <paramref name="stateRootHash"/>.  This must be <see langword="null"/>
        /// for blocks with earlier <seealso cref="ProtocolVersion"/>s than 2.</param>
        /// <returns>A block hash.</returns>
        public BlockHash DeriveBlockHash(
            in HashDigest<SHA256> stateRootHash,
            in ImmutableArray<byte>? signature
        ) =>
            BlockHash.DeriveFrom(Codec.Encode(MakeCandidateData(stateRootHash, signature)));

        /// <summary>
        /// Verifies if the <paramref name="preEvaluationHash"/> is the proper hash digest
        /// derived from the given block <paramref name="metadata"/> and <paramref name="nonce"/>.
        /// If it's incorrect throws an <see cref="InvalidBlockPreEvaluationHashException"/>.
        /// Throws nothing and returns a pair of the <paramref name="nonce"/> and
        /// <paramref name="preEvaluationHash"/> instead.
        /// </summary>
        /// <param name="metadata">The block metadata.</param>
        /// <param name="nonce">The proof-of-work nonce.</param>
        /// <param name="preEvaluationHash">The pre-evaluation hash digest to verify.</param>
        /// <exception cref="InvalidBlockPreEvaluationHashException">Thrown when the given
        /// <paramref name="preEvaluationHash"/> is incorrect.</exception>
        private static void CheckPreEvaluationHash(
            BlockMetadata metadata,
            in Nonce nonce,
            in ImmutableArray<byte> preEvaluationHash)
        {
            // Since PreEvaluationHash comparison between the actual and the expected was not
            // implemented in ProtocolVersion == 0, we need to maintain this bug on
            // ProtocolVersion < 1 for backward compatibility:
            if (metadata.ProtocolVersion < 1)
            {
                return;
            }

            ImmutableArray<byte> expectedPreEvaluationHash =
                metadata.DerivePreEvaluationHash(nonce);
            if (!ByteUtil.TimingSafelyCompare(preEvaluationHash, expectedPreEvaluationHash))
            {
                string message =
                    $"The expected pre-evaluation hash of block #{metadata.Index} is " +
                    ByteUtil.Hex(expectedPreEvaluationHash) +
                    $", but its pre-evaluation hash is {ByteUtil.Hex(preEvaluationHash)}.";
                throw new InvalidBlockPreEvaluationHashException(
                    message,
                    preEvaluationHash,
                    expectedPreEvaluationHash
                );
            }
        }
    }
}
