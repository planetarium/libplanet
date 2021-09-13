#nullable enable
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Numerics;
using System.Security.Cryptography;
using System.Threading;
using Bencodex;
using Libplanet.Action;
using Libplanet.Tx;

namespace Libplanet.Blocks
{
    /// <summary>
    /// A block candidate without evaluating actions (in its <see cref="Transactions"/> and
    /// a possible <see cref="Blockchain.Policies.IBlockPolicy{T}.BlockAction"/>) and state root
    /// hash.
    /// </summary>
    /// <typeparam name="T">A class implementing <see cref="IAction"/> to include.  This type
    /// parameter is aligned with <see cref="Transaction{T}"/>'s type parameter.</typeparam>
    /// <remarks>It guarantees that every instance of this type has a valid proof-of-work
    /// <see cref="Nonce"/> which satisfies its <see cref="Difficulty"/>.</remarks>
    public sealed class PreEvaluationBlock<T>
        where T : IAction, new()
    {
        private const int CurrentProtocolVersion = BlockHeader.CurrentProtocolVersion;
        private static readonly Codec Codec = new Codec();

        private readonly BlockContent<T> _content;

        /// <summary>
        /// Creates a <see cref="PreEvaluationBlock{T}"/> instance with its
        /// <paramref name="content"/> data and a valid proof-of-work <paramref name="nonce"/>
        /// which satisfies the required <see cref="Difficulty"/>.
        /// </summary>
        /// <param name="content">Block's content data.</param>
        /// <param name="hashAlgorithm">The hash algorithm used for calculating
        /// <see cref="PreEvaluationHash"/>.</param>
        /// <param name="nonce">A valid proof-of-work nonce which satisfies the required
        /// <see cref="Difficulty"/>.</param>
        /// <exception cref="InvalidBlockNonceException">Thrown when the given proof-of-work
        /// <paramref name="nonce"/> does not satisfy the required <see cref="Difficulty"/>.
        /// </exception>
        /// <remarks><see cref="PreEvaluationHash"/> is automatically derived from the given
        /// arguments.</remarks>
        public PreEvaluationBlock(
            BlockContent<T> content,
            HashAlgorithmType hashAlgorithm,
            Nonce nonce
        )
            : this(
                content,
                hashAlgorithm,
                (nonce, DerivePreEvaluationHash(hashAlgorithm, content, nonce))
            )
        {
        }

        /// <summary>
        /// Creates a <see cref="PreEvaluationBlock{T}"/> instance with its
        /// <paramref name="content"/> data, a valid proof-of-work <paramref name="nonce"/>
        /// which satisfies the required <see cref="Difficulty"/>, and
        /// a <paramref name="preEvaluationHash"/> digest derived from them.
        /// </summary>
        /// <param name="content">Block's content data.</param>
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
        public PreEvaluationBlock(
            BlockContent<T> content,
            HashAlgorithmType hashAlgorithm,
            Nonce nonce,
            ImmutableArray<byte> preEvaluationHash
        )
            : this(
                content,
                hashAlgorithm,
                CheckPreEvaluationHash(content, hashAlgorithm, nonce, preEvaluationHash)
            )
        {
        }

        /// <summary>
        /// Unsafely creates a <see cref="PreEvaluationBlock{T}"/> instance with its
        /// <paramref name="content"/> data, and a <paramref name="proof"/> which is probably
        /// considered as to be valid.
        /// </summary>
        /// <param name="content">Block's content data.</param>
        /// <param name="hashAlgorithm">The hash algorithm used for calculating
        /// <see cref="PreEvaluationHash"/>.</param>
        /// <param name="proof">A pair of the valid proof-of-work nonce which is probably considered
        /// as to satisfy the required <see cref="Difficulty"/>, and the hash digest which is
        /// probably considered as to be derived from the block <paramref name="content"/> and the
        /// nonce.</param>
        /// <exception cref="InvalidBlockPreEvaluationHashException">Thrown when the given proof's
        /// hash is invalid.</exception>
        /// <remarks>This does not verify if if a proof's hash is derived from the block
        /// <paramref name="content"/> and the proof nonce.</remarks>
        internal PreEvaluationBlock(
            BlockContent<T> content,
            HashAlgorithmType hashAlgorithm,
            in (Nonce Nonce, ImmutableArray<byte> PreEvaluationHash) proof
        )
        {
            if (content.Index == 0L && content.PreviousHash is { } ph)
            {
                throw new InvalidBlockPreviousHashException(
                    $"Genesis block must not have {nameof(PreviousHash)}: {ph}."
                );
            }
            else if (content.Index > 0L && content.PreviousHash is null)
            {
                throw new InvalidBlockPreviousHashException(
                    $"Block #{content.Index} must have its {nameof(PreviousHash)} " +
                    "(except for genesis)."
                );
            }
            else if (!ByteUtil.Satisfies(proof.PreEvaluationHash, content.Difficulty))
            {
                throw new InvalidBlockNonceException(
                    $"Block #{content.Index}'s {nameof(PreEvaluationHash)} " +
                    $"({ByteUtil.Hex(proof.PreEvaluationHash)}) with nonce ({proof.Nonce}) does " +
                    $"not satisfy its difficulty level {content.Difficulty}."
                );
            }
            else if (content.Index == 0L && content.Difficulty > 0L)
            {
                throw new InvalidBlockDifficultyException(
                    $"Genesis block must have zero difficulty: {content.Difficulty}."
                );
            }
            else if (content.Index == 0L && content.TotalDifficulty > BigInteger.Zero)
            {
                throw new InvalidBlockTotalDifficultyException(
                    content.Difficulty,
                    content.TotalDifficulty,
                    $"Genesis block's total difficulty must be zero: {content.TotalDifficulty}."
                );
            }
            else if (content.Index > 0L && content.Difficulty < 1L)
            {
                throw new InvalidBlockDifficultyException(
                    $"Block #{content.Index}'s difficulty must be more than zero (except for " +
                    $"genesis block): {content.Difficulty}."
                );
            }

            _content = content.Clone();
            Nonce = proof.Nonce;
            TxHash = content.TxHash;
            HashAlgorithm = hashAlgorithm;
            PreEvaluationHash = proof.PreEvaluationHash;
        }

        /// <summary>
        /// The protocol version number.
        /// </summary>
        public int ProtocolVersion => _content.ProtocolVersion;

        /// <summary>
        /// The height of the block.
        /// </summary>
        /// <remarks>Zero means it is a genesis block.  Disallowed to be negative.</remarks>
        public long Index => _content.Index;

        /// <summary>
        /// The time the block is created.
        /// </summary>
        /// <remarks>This is always UTC.</remarks>
        public DateTimeOffset Timestamp => _content.Timestamp;

        /// <summary>
        /// The proof-of-work nonce which satisfies the required <see cref="Difficulty"/>.
        /// </summary>
        public Nonce Nonce { get; }

        /// <summary>
        /// The address of the miner.
        /// </summary>
        public Address Miner => _content.Miner;

        /// <summary>
        /// The mining difficulty that the block's <see cref="Nonce"/> has to satisfy.
        /// </summary>
        public long Difficulty => _content.Difficulty;

        /// <summary>
        /// The total mining difficulty since the genesis including the block's difficulty.
        /// </summary>
        public BigInteger TotalDifficulty => _content.TotalDifficulty;

        /// <summary>
        /// The previous block's hash.  If it's a genesis block (i.e., its <see cref="Index"/> is 0)
        /// this should be <c>null</c>.
        /// </summary>
        public BlockHash? PreviousHash => _content.PreviousHash;

        /// <summary>
        /// Transactions belonging to the block.
        /// </summary>
        /// <remarks>This is always ordered by <see cref="Transaction{T}.Id"/>.</remarks>
        public IReadOnlyList<Transaction<T>> Transactions => _content.Transactions;

        /// <summary>
        /// The hash of all transactions in the block.  This is <c>null</c> if the block has no
        /// transactions.
        /// </summary>
        public HashDigest<SHA256>? TxHash { get; }

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
        /// Derives a hash digest of <paramref name="hashAlgorithm"/> from the given block
        /// <paramref name="content"/> data and <paramref name="nonce"/>.
        /// </summary>
        /// <param name="hashAlgorithm">The hash algorithm to use.</param>
        /// <param name="content">The block content data.</param>
        /// <param name="nonce">The proof-of-work nonce.</param>
        /// <returns>A pre-evaluation block hash.</returns>
        private static ImmutableArray<byte> DerivePreEvaluationHash(
            HashAlgorithmType hashAlgorithm,
            BlockContent<T> content,
            in Nonce nonce
        ) =>
            hashAlgorithm.Digest(Codec.Encode(content.ToBencodex(nonce))).ToImmutableArray();

        /// <summary>
        /// Verifies if the <paramref name="preEvaluationHash"/> is the proper hash digest of
        /// the <paramref name="hashAlgorithm"/> derived from the given <paramref name="content"/>
        /// and <paramref name="nonce"/>.  If it's incorrect throws an
        /// <see cref="InvalidBlockPreEvaluationHashException"/>.  Throws nothing and returns
        /// a pair of the <paramref name="nonce"/> and <paramref name="preEvaluationHash"/> instead.
        /// </summary>
        /// <param name="content">The block content.</param>
        /// <param name="hashAlgorithm">The hash algorithm used for calculating
        /// <paramref name="preEvaluationHash"/>.</param>
        /// <param name="nonce">The proof-of-work nonce.</param>
        /// <param name="preEvaluationHash">The pre-evaluation hash digest of the <paramref
        /// name="hashAlgorithm"/> to verify.</param>
        /// <returns>A pair of the <paramref name="nonce"/> and <paramref name="preEvaluationHash"/>
        /// if the <paramref name="preEvaluationHash"/> is verified to be correct.</returns>
        /// <exception cref="InvalidBlockPreEvaluationHashException">Thrown when the given
        /// <paramref name="preEvaluationHash"/> is incorrect.</exception>
        private static (Nonce Nonce, ImmutableArray<byte> PreEvaluationHash) CheckPreEvaluationHash(
            BlockContent<T> content,
            HashAlgorithmType hashAlgorithm,
            in Nonce nonce,
            in ImmutableArray<byte> preEvaluationHash
        )
        {
            // Since PreEvaluationHash comparison between the actual and the expected was not
            // implemented in ProtocolVersion == 0, we need to maintain this bug on
            // ProtocolVersion < 1 for backward compatibility:
            if (content.ProtocolVersion < 1)
            {
                return (nonce, preEvaluationHash);
            }

            ImmutableArray<byte> expectedPreEvaluationHash =
                DerivePreEvaluationHash(hashAlgorithm, content, nonce);
            if (!ByteUtil.TimingSafelyCompare(preEvaluationHash, expectedPreEvaluationHash))
            {
                string message =
                    $"The expected pre-evaluation hash of block #{content.Index} is " +
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
