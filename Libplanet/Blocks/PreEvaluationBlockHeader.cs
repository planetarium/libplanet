#nullable enable
using System;
using System.Collections.Immutable;
using System.Numerics;
using System.Security.Cryptography;
using System.Threading;
using Bencodex;

namespace Libplanet.Blocks
{
    /// <summary>
    /// A block candidate without evaluating actions (in its transactions and a possible
    /// <see cref="Blockchain.Policies.IBlockPolicy{T}.BlockAction"/>) and state root hash.
    /// </summary>
    /// <remarks>It guarantees that every instance of this type has a valid proof-of-work
    /// <see cref="Nonce"/> which satisfies its <see cref="Difficulty"/>.</remarks>
    public class PreEvaluationBlockHeader
    {
        protected static readonly Codec Codec = new Codec();

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
        /// <exception cref="InvalidBlockNonceException">Thrown when the given proof-of-work
        /// <paramref name="nonce"/> does not satisfy the required <see cref="Difficulty"/>.
        /// </exception>
        /// <remarks><see cref="PreEvaluationHash"/> is automatically derived from the given
        /// arguments.</remarks>
        public PreEvaluationBlockHeader(
            BlockMetadata metadata,
            HashAlgorithmType hashAlgorithm,
            Nonce nonce
        )
            : this(
                (BlockMetadata)((ICloneable)metadata).Clone(),
                hashAlgorithm,
                (nonce, DerivePreEvaluationHash(hashAlgorithm, metadata, nonce))
            )
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
        /// <exception cref="InvalidBlockPreEvaluationHashException">Thrown when the given
        /// <paramref name="preEvaluationHash"/> is invalid.</exception>
        /// <exception cref="InvalidBlockNonceException">Thrown when the given proof-of-work
        /// <paramref name="nonce"/> does not satisfy the required <see cref="Difficulty"/>.
        /// </exception>
        public PreEvaluationBlockHeader(
            BlockMetadata metadata,
            HashAlgorithmType hashAlgorithm,
            Nonce nonce,
            ImmutableArray<byte> preEvaluationHash
        )
            : this(
                (BlockMetadata)((ICloneable)metadata).Clone(),
                hashAlgorithm,
                CheckPreEvaluationHash(hashAlgorithm, metadata, nonce, preEvaluationHash)
            )
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
        /// <remarks>This does not verify if if a proof's hash is derived from the block
        /// <paramref name="metadata"/> and the proof nonce.  Therefore, this unsafe constructor
        /// shouldn't be used except for <see
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

        /// <summary>
        /// The protocol version number.
        /// </summary>
        public int ProtocolVersion => Metadata.ProtocolVersion;

        /// <summary>
        /// The height of the block.
        /// </summary>
        /// <remarks>Zero means it is a genesis block.  Disallowed to be negative.</remarks>
        public long Index => Metadata.Index;

        /// <summary>
        /// The time the block is created.
        /// </summary>
        /// <remarks>This is always UTC.</remarks>
        public DateTimeOffset Timestamp => Metadata.Timestamp;

        /// <summary>
        /// The proof-of-work nonce which satisfies the required <see cref="Difficulty"/>.
        /// </summary>
        public Nonce Nonce { get; }

        /// <summary>
        /// The address of the miner.
        /// </summary>
        public Address Miner => Metadata.Miner;

        /// <summary>
        /// The mining difficulty that the block's <see cref="Nonce"/> has to satisfy.
        /// </summary>
        public long Difficulty => Metadata.Difficulty;

        /// <summary>
        /// The total mining difficulty since the genesis including the block's difficulty.
        /// </summary>
        public BigInteger TotalDifficulty => Metadata.TotalDifficulty;

        /// <summary>
        /// The previous block's hash.  If it's a genesis block (i.e., its <see cref="Index"/> is 0)
        /// this should be <c>null</c>.
        /// </summary>
        public BlockHash? PreviousHash => Metadata.PreviousHash;

        /// <summary>
        /// The hash of all transactions in the block.  This is <c>null</c> if the block has no
        /// transactions.
        /// </summary>
        public HashDigest<SHA256>? TxHash => Metadata.TxHash;

        /// <summary>
        /// The hash algorithm used for calculating <see cref="PreEvaluationHash"/>.
        /// </summary>
        public HashAlgorithmType HashAlgorithm { get; }

        /// <summary>
        /// The hash derived from the block <em>except of</em> its state root hash (i.e., without
        /// action evaluation).  Used for validating <see cref="Nonce"/>.
        /// </summary>
        /// <seealso cref="Nonce"/>
        public ImmutableArray<byte> PreEvaluationHash { get; }

        /// <summary>
        /// The internal block metadata.
        /// </summary>
        protected BlockMetadata Metadata { get; }

        /// <summary>
        /// Serializes the block content into a Bencodex dictionary.  This data is used as
        /// the input to calculate the block <see cref="Block{T}.Hash"/>, rather than transmitting
        /// the block over the network.
        /// </summary>
        /// <param name="stateRootHash">The <see cref="Libplanet.Store.Trie.ITrie.Hash"/> of
        /// the resulting states after evaluating transactions and
        /// a <see cref="Blockchain.Policies.IBlockPolicy{T}.BlockAction"/> (if exists).</param>
        /// <returns>The serialized block header in a Bencodex dictionary.</returns>
        internal Bencodex.Types.Dictionary ToBencodex(HashDigest<SHA256> stateRootHash) =>
            Metadata.ToBencodex(Nonce).Add("state_root_hash", stateRootHash.ByteArray);

        /// <summary>
        /// Derives a hash digest of <paramref name="hashAlgorithm"/> from the given block
        /// <paramref name="metadata"/> and <paramref name="nonce"/>.
        /// </summary>
        /// <param name="hashAlgorithm">The hash algorithm to use.</param>
        /// <param name="metadata">The block metadata.</param>
        /// <param name="nonce">The proof-of-work nonce.</param>
        /// <returns>A pre-evaluation block hash.</returns>
        private static ImmutableArray<byte> DerivePreEvaluationHash(
            HashAlgorithmType hashAlgorithm,
            BlockMetadata metadata,
            in Nonce nonce
        ) =>
            hashAlgorithm.Digest(Codec.Encode(metadata.ToBencodex(nonce))).ToImmutableArray();

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
                DerivePreEvaluationHash(hashAlgorithm, metadata, nonce);
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
