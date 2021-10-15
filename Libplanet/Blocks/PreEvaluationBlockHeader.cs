#nullable enable
using System;
using System.Collections.Immutable;
using System.Numerics;
using System.Security.Cryptography;
using System.Threading;
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

        /// <summary>
        /// Creates a <see cref="PreEvaluationBlockHeader"/>  by copying the fields of another
        /// pre-evaluation block <paramref name="header"/>.
        /// </summary>
        /// <param name="header">A pre-evaluation block header to copy.</param>
        /// <exception cref="InvalidBlockProtocolVersionException">Thrown when
        /// the <paramref name="header"/>'s to set is <see cref="IBlockMetadata.ProtocolVersion"/>
        /// is less than 0, or greater than <see cref="BlockMetadata.CurrentProtocolVersion"/>,
        /// the latest known protocol version.</exception>
        /// <exception cref="InvalidBlockIndexException">Thrown when the <paramref name="header"/>
        /// has a negative <see cref="IBlockMetadata.Index"/>.</exception>
        /// <exception cref="InvalidBlockDifficultyException">Thrown when
        /// the <paramref name="header"/>'s <see cref="IBlockMetadata.Difficulty"/> is negative.
        /// </exception>
        /// <exception cref="InvalidBlockTotalDifficultyException">Thrown when
        /// the <paramref name="header"/>'s <see cref="IBlockMetadata.TotalDifficulty"/> is less
        /// than its <see cref="IBlockMetadata.Difficulty"/>.</exception>
        /// <exception cref="InvalidBlockPreEvaluationHashException">Thrown when the given
        /// pre-evaluation <paramref name="header"/>'s
        /// <seealso cref="IPreEvaluationBlockHeader.PreEvaluationHash"/> is invalid.</exception>
        /// <exception cref="InvalidBlockNonceException">Thrown when the given
        /// pre-evaluation <paramref name="header"/>'s
        /// <seealso cref="IPreEvaluationBlockHeader.Nonce"/> does not satisfy the required
        /// <see cref="IBlockMetadata.Difficulty"/>.
        /// </exception>
        public PreEvaluationBlockHeader(IPreEvaluationBlockHeader header)
            : this(header, header.HashAlgorithm, header.Nonce, header.PreEvaluationHash)
        {
        }

        /// <summary>
        /// Creates a <see cref="PreEvaluationBlockHeader"/> instance with its
        /// <paramref name="metadata"/> and a valid proof-of-work <paramref name="nonce"/> which
        /// satisfies the required <see cref="Difficulty"/>.
        /// </summary>
        /// <param name="metadata">Block's metadata.</param>
        /// <param name="hashAlgorithm">The hash algorithm used for calculating
        /// <see cref="PreEvaluationHash"/>.</param>
        /// <param name="nonce">A valid proof-of-work nonce which satisfies the required
        /// <see cref="Difficulty"/>.</param>
        /// <exception cref="InvalidBlockProtocolVersionException">Thrown when
        /// the <paramref name="metadata"/>'s to set is <see cref="IBlockMetadata.ProtocolVersion"/>
        /// is less than 0, or greater than <see cref="BlockMetadata.CurrentProtocolVersion"/>,
        /// the latest known protocol version.</exception>
        /// <exception cref="InvalidBlockIndexException">Thrown when the <paramref name="metadata"/>
        /// has a negative <see cref="IBlockMetadata.Index"/>.</exception>
        /// <exception cref="InvalidBlockDifficultyException">Thrown when
        /// the <paramref name="metadata"/>'s <see cref="IBlockMetadata.Difficulty"/> is negative.
        /// </exception>
        /// <exception cref="InvalidBlockTotalDifficultyException">Thrown when
        /// the <paramref name="metadata"/>'s <see cref="IBlockMetadata.TotalDifficulty"/> is less
        /// than its <see cref="IBlockMetadata.Difficulty"/>.</exception>
        /// <exception cref="InvalidBlockNonceException">Thrown when the given proof-of-work
        /// <paramref name="nonce"/> does not satisfy the required <see cref="Difficulty"/>.
        /// </exception>
        /// <remarks><see cref="PreEvaluationHash"/> is automatically derived from the given
        /// arguments.</remarks>
        public PreEvaluationBlockHeader(
            IBlockMetadata metadata,
            HashAlgorithmType hashAlgorithm,
            Nonce nonce
        )
            : this(new BlockMetadata(metadata), hashAlgorithm, nonce)
        {
        }

        /// <summary>
        /// Creates a <see cref="PreEvaluationBlockHeader"/> instance with its
        /// <paramref name="metadata"/>, a valid proof-of-work <paramref name="nonce"/> which
        /// satisfies the required <see cref="Difficulty"/>, and
        /// a <paramref name="preEvaluationHash"/> digest derived from them.
        /// </summary>
        /// <param name="metadata">Block's metadata.</param>
        /// <param name="hashAlgorithm">The hash algorithm used for calculating
        /// <see cref="PreEvaluationHash"/>.</param>
        /// <param name="nonce">A valid proof-of-work nonce which satisfies the required
        /// <see cref="Difficulty"/>.</param>
        /// <param name="preEvaluationHash">The hash digest of the <paramref name="hashAlgorithm"/>
        /// derived from the given arguments.</param>
        /// <exception cref="InvalidBlockProtocolVersionException">Thrown when
        /// the <paramref name="metadata"/>'s to set is <see cref="IBlockMetadata.ProtocolVersion"/>
        /// is less than 0, or greater than <see cref="BlockMetadata.CurrentProtocolVersion"/>,
        /// the latest known protocol version.</exception>
        /// <exception cref="InvalidBlockIndexException">Thrown when the <paramref name="metadata"/>
        /// has a negative <see cref="IBlockMetadata.Index"/>.</exception>
        /// <exception cref="InvalidBlockDifficultyException">Thrown when
        /// the <paramref name="metadata"/>'s <see cref="IBlockMetadata.Difficulty"/> is negative.
        /// </exception>
        /// <exception cref="InvalidBlockTotalDifficultyException">Thrown when
        /// the <paramref name="metadata"/>'s <see cref="IBlockMetadata.TotalDifficulty"/> is less
        /// than its <see cref="IBlockMetadata.Difficulty"/>.</exception>
        /// <exception cref="InvalidBlockPreEvaluationHashException">Thrown when the given
        /// <paramref name="preEvaluationHash"/> is invalid.</exception>
        /// <exception cref="InvalidBlockNonceException">Thrown when the given proof-of-work
        /// <paramref name="nonce"/> does not satisfy the required <see cref="Difficulty"/>.
        /// </exception>
        public PreEvaluationBlockHeader(
            IBlockMetadata metadata,
            HashAlgorithmType hashAlgorithm,
            Nonce nonce,
            ImmutableArray<byte> preEvaluationHash
        )
            : this(new BlockMetadata(metadata), hashAlgorithm, nonce, preEvaluationHash)
        {
        }

        /// <summary>
        /// Unsafely creates a <see cref="PreEvaluationBlockHeader"/> instance with its
        /// <paramref name="metadata"/>, and a <paramref name="proof"/> which is probably
        /// considered as to be valid.
        /// </summary>
        /// <param name="metadata">Block's metadata.</param>
        /// <param name="hashAlgorithm">The hash algorithm used for calculating
        /// <see cref="PreEvaluationHash"/>.</param>
        /// <param name="proof">A pair of the valid proof-of-work nonce which is probably considered
        /// as to satisfy the required <see cref="Difficulty"/>, and the hash digest which is
        /// probably considered as to be derived from the block <paramref name="metadata"/> and the
        /// nonce.</param>
        /// <exception cref="InvalidBlockPreEvaluationHashException">Thrown when the given proof's
        /// hash is invalid.</exception>
        /// <remarks>This does not verify if a <paramref name="proof"/>'s hash is derived from
        /// the block <paramref name="metadata"/> and the proof nonce.  Therefore, this unsafe
        /// constructor shouldn't be used except for <see
        /// cref="BlockContent{T}.Mine(HashAlgorithmType, CancellationToken)"/> method.</remarks>
        internal PreEvaluationBlockHeader(
            BlockMetadata metadata,
            HashAlgorithmType hashAlgorithm,
            in (Nonce Nonce, ImmutableArray<byte> PreEvaluationHash) proof
        )
        {
            if (metadata.Index == 0L && metadata.PreviousHash is { } ph)
            {
                throw new InvalidBlockPreviousHashException(
                    $"Genesis block must not have {nameof(PreviousHash)}: {ph}."
                );
            }
            else if (metadata.Index > 0L && metadata.PreviousHash is null)
            {
                throw new InvalidBlockPreviousHashException(
                    $"Block #{metadata.Index} must have its {nameof(PreviousHash)} " +
                    "(except for genesis)."
                );
            }
            else if (metadata.ProtocolVersion >= 2 && metadata.PublicKey is null)
            {
                throw new InvalidBlockPublicKeyException(
                    metadata.PublicKey,
                    "Block's public key cannot be null unless its protocol version is less than 2."
                );
            }
            else if (metadata.ProtocolVersion < 2 && metadata.PublicKey is { })
            {
                string msg =
                    "As blocks became to have public keys since the protocol version 2, blocks " +
                    $"with a protocol version {metadata.ProtocolVersion} cannot have public keys.";
                throw new InvalidBlockPublicKeyException(metadata.PublicKey, msg);
            }
            else if (metadata.PublicKey is { } pubKey && !metadata.Miner.Equals(pubKey.ToAddress()))
            {
                string msg =
                    $"The miner address {metadata.Miner} is not consistent with its public key " +
                    $"{pubKey}.";
                throw new InvalidBlockPublicKeyException(pubKey, msg);
            }
            else if (!ByteUtil.Satisfies(proof.PreEvaluationHash, metadata.Difficulty))
            {
                throw new InvalidBlockNonceException(
                    $"Block #{metadata.Index}'s {nameof(PreEvaluationHash)} " +
                    $"({ByteUtil.Hex(proof.PreEvaluationHash)}) with nonce ({proof.Nonce}) does " +
                    $"not satisfy its difficulty level {metadata.Difficulty}."
                );
            }
            else if (metadata.Index == 0L && metadata.Difficulty > 0L)
            {
                throw new InvalidBlockDifficultyException(
                    $"Genesis block must have zero difficulty: {metadata.Difficulty}."
                );
            }
            else if (metadata.Index == 0L && metadata.TotalDifficulty > BigInteger.Zero)
            {
                throw new InvalidBlockTotalDifficultyException(
                    metadata.Difficulty,
                    metadata.TotalDifficulty,
                    $"Genesis block's total difficulty must be zero: {metadata.TotalDifficulty}."
                );
            }
            else if (metadata.Index > 0L && metadata.Difficulty < 1L)
            {
                throw new InvalidBlockDifficultyException(
                    $"Block #{metadata.Index}'s difficulty must be more than zero (except for " +
                    $"genesis block): {metadata.Difficulty}."
                );
            }

            Metadata = metadata;
            Nonce = proof.Nonce;
            HashAlgorithm = hashAlgorithm;
            PreEvaluationHash = proof.PreEvaluationHash;
        }

        protected PreEvaluationBlockHeader(
            BlockMetadata metadata,
            HashAlgorithmType hashAlgorithm,
            Nonce nonce
        )
            : this(
                metadata,
                hashAlgorithm,
                (nonce, metadata.DerivePreEvaluationHash(hashAlgorithm, nonce))
            )
        {
        }

        protected PreEvaluationBlockHeader(
            BlockMetadata metadata,
            HashAlgorithmType hashAlgorithm,
            Nonce nonce,
            ImmutableArray<byte> preEvaluationHash
        )
            : this(
                metadata,
                hashAlgorithm,
                CheckPreEvaluationHash(hashAlgorithm, metadata, nonce, preEvaluationHash)
            )
        {
        }

        /// <inheritdoc cref="IBlockMetadata.ProtocolVersion"/>
        public int ProtocolVersion => Metadata.ProtocolVersion;

        /// <inheritdoc cref="IBlockMetadata.Index"/>
        public long Index => Metadata.Index;

        /// <inheritdoc cref="IBlockMetadata.Timestamp"/>
        public DateTimeOffset Timestamp => Metadata.Timestamp;

        /// <inheritdoc cref="IPreEvaluationBlockHeader.Nonce"/>
        public Nonce Nonce { get; }

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

        /// <inheritdoc cref="IPreEvaluationBlockHeader.HashAlgorithm"/>
        public HashAlgorithmType HashAlgorithm { get; }

        /// <inheritdoc cref="IPreEvaluationBlockHeader.PreEvaluationHash"/>
        public ImmutableArray<byte> PreEvaluationHash { get; }

        /// <summary>
        /// The internal block metadata.
        /// </summary>
        protected BlockMetadata Metadata { get; }

        /// <summary>
        /// Serializes data of a possible candidate shifted from it into a Bencodex dictionary.
        /// This data is used as the input to calculate the block <see cref="Block{T}.Hash"/>,
        /// rather than transmitting the block over the network.
        /// </summary>
        /// <param name="stateRootHash">The <see cref="Libplanet.Store.Trie.ITrie.Hash"/> of
        /// the resulting states after evaluating transactions and
        /// a <see cref="Blockchain.Policies.IBlockPolicy{T}.BlockAction"/> (if exists).</param>
        /// <param name="signature">The block signature created using <see cref="MakeSignature"/>
        /// method with the <paramref name="stateRootHash"/>.  This must be <c>null</c> for
        /// blocks with earlier <seealso cref="ProtocolVersion"/>s than 2.</param>
        /// <returns>The serialized block header in a Bencodex dictionary.</returns>
        public Bencodex.Types.Dictionary MakeCandidateData(
            HashDigest<SHA256> stateRootHash,
            ImmutableArray<byte>? signature = null
        )
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
            HashDigest<SHA256> stateRootHash
        )
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
        /// method with the <paramref name="stateRootHash"/>.  This must be <c>null</c> for
        /// blocks with earlier <seealso cref="ProtocolVersion"/>s than 2.</param>
        /// <param name="stateRootHash">The state root hash included in the original message
        /// of the signature.</param>
        /// <returns><c>true</c> if the signature is valid.  <c>false</c> otherwise.</returns>
        public bool VerifySignature(
            ImmutableArray<byte>? signature,
            HashDigest<SHA256> stateRootHash
        )
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
        /// method with the <paramref name="stateRootHash"/>.  This must be <c>null</c> for
        /// blocks with earlier <seealso cref="ProtocolVersion"/>s than 2.</param>
        /// <returns>A block hash.</returns>
        public BlockHash DeriveBlockHash(
            in HashDigest<SHA256> stateRootHash,
            ImmutableArray<byte>? signature
        ) =>
            BlockHash.DeriveFrom(Codec.Encode(MakeCandidateData(stateRootHash, signature)));

        /// <summary>
        /// Verifies if the <paramref name="preEvaluationHash"/> is the proper hash digest of
        /// the <paramref name="hashAlgorithm"/> derived from the given block
        /// <paramref name="metadata"/> and <paramref name="nonce"/>.
        /// If it's incorrect throws an <see cref="InvalidBlockPreEvaluationHashException"/>.
        /// Throws nothing and returns a pair of the <paramref name="nonce"/> and
        /// <paramref name="preEvaluationHash"/> instead.
        /// </summary>
        /// <param name="hashAlgorithm">The hash algorithm used for calculating
        /// <paramref name="preEvaluationHash"/>.</param>
        /// <param name="metadata">The block metadata.</param>
        /// <param name="nonce">The proof-of-work nonce.</param>
        /// <param name="preEvaluationHash">The pre-evaluation hash digest of the <paramref
        /// name="hashAlgorithm"/> to verify.</param>
        /// <returns>A pair of the <paramref name="nonce"/> and <paramref name="preEvaluationHash"/>
        /// if the <paramref name="preEvaluationHash"/> is verified to be correct.</returns>
        /// <exception cref="InvalidBlockPreEvaluationHashException">Thrown when the given
        /// <paramref name="preEvaluationHash"/> is incorrect.</exception>
        private static (Nonce Nonce, ImmutableArray<byte> PreEvaluationHash) CheckPreEvaluationHash(
            HashAlgorithmType hashAlgorithm,
            BlockMetadata metadata,
            in Nonce nonce,
            in ImmutableArray<byte> preEvaluationHash
        )
        {
            // Since PreEvaluationHash comparison between the actual and the expected was not
            // implemented in ProtocolVersion == 0, we need to maintain this bug on
            // ProtocolVersion < 1 for backward compatibility:
            if (metadata.ProtocolVersion < 1)
            {
                return (nonce, preEvaluationHash);
            }

            ImmutableArray<byte> expectedPreEvaluationHash =
                metadata.DerivePreEvaluationHash(hashAlgorithm, nonce);
            if (!ByteUtil.TimingSafelyCompare(preEvaluationHash, expectedPreEvaluationHash))
            {
                string message =
                    $"The expected pre-evaluation hash of block #{metadata.Index} is " +
                    ByteUtil.Hex(expectedPreEvaluationHash) +
                    $", but its pre-evaluation hash is {ByteUtil.Hex(preEvaluationHash)}.";
                throw new InvalidBlockPreEvaluationHashException(
                    preEvaluationHash,
                    expectedPreEvaluationHash,
                    message
                );
            }

            return (nonce, preEvaluationHash);
        }
    }
}
