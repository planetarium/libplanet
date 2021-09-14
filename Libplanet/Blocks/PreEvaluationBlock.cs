#nullable enable
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading;
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
    /// <see cref="Nonce"/> which satisfies its <see cref="PreEvaluationBlockHeader.Difficulty"/>.
    /// </remarks>
    public sealed class PreEvaluationBlock<T> : PreEvaluationBlockHeader, IPreEvaluationBlock<T>
        where T : IAction, new()
    {
        /// <summary>
        /// Creates a <see cref="PreEvaluationBlock{T}"/> instance with its
        /// <paramref name="content"/> data and a valid proof-of-work <paramref name="nonce"/>
        /// which satisfies the required <see cref="PreEvaluationBlockHeader.Difficulty"/>.
        /// </summary>
        /// <param name="content">Block's content data.</param>
        /// <param name="hashAlgorithm">The hash algorithm used for calculating
        /// <see cref="PreEvaluationBlockHeader.PreEvaluationHash"/>.</param>
        /// <param name="nonce">A valid proof-of-work nonce which satisfies the required
        /// <see cref="PreEvaluationBlockHeader.Difficulty"/>.</param>
        /// <exception cref="InvalidBlockNonceException">Thrown when the given proof-of-work
        /// <paramref name="nonce"/> does not satisfy the required
        /// <see cref="PreEvaluationBlockHeader.Difficulty"/>.
        /// </exception>
        /// <remarks><see cref="PreEvaluationBlockHeader.PreEvaluationHash"/> is automatically
        /// derived from the given arguments.</remarks>
        public PreEvaluationBlock(
            BlockContent<T> content,
            HashAlgorithmType hashAlgorithm,
            Nonce nonce
        )
            : base(
                content,
                hashAlgorithm,
                nonce
            )
        {
        }

        /// <summary>
        /// Creates a <see cref="PreEvaluationBlock{T}"/> instance with its
        /// <paramref name="content"/> data, a valid proof-of-work <paramref name="nonce"/>
        /// which satisfies the required <see cref="PreEvaluationBlockHeader.Difficulty"/>,
        /// and a <paramref name="preEvaluationHash"/> digest derived from them.
        /// </summary>
        /// <param name="content">Block's content data.</param>
        /// <param name="hashAlgorithm">The hash algorithm used for calculating
        /// <see cref="PreEvaluationBlockHeader.PreEvaluationHash"/>.</param>
        /// <param name="nonce">A valid proof-of-work nonce which satisfies the required
        /// <see cref="PreEvaluationBlockHeader.Difficulty"/>.</param>
        /// <param name="preEvaluationHash">The hash digest of the <paramref name="hashAlgorithm"/>
        /// derived from the given arguments.</param>
        /// <exception cref="InvalidBlockPreEvaluationHashException">Thrown when the given
        /// <paramref name="preEvaluationHash"/> is invalid.</exception>
        /// <exception cref="InvalidBlockNonceException">Thrown when the given proof-of-work
        /// <paramref name="nonce"/> does not satisfy the required
        /// <see cref="PreEvaluationBlockHeader.Difficulty"/>.</exception>
        public PreEvaluationBlock(
            BlockContent<T> content,
            HashAlgorithmType hashAlgorithm,
            Nonce nonce,
            ImmutableArray<byte> preEvaluationHash
        )
            : base(content, hashAlgorithm, nonce, preEvaluationHash)
        {
        }

        /// <summary>
        /// Unsafely creates a <see cref="PreEvaluationBlock{T}"/> instance with its
        /// <paramref name="content"/> data, and a <paramref name="proof"/> which is probably
        /// considered as to be valid.
        /// </summary>
        /// <param name="content">Block's content data.</param>
        /// <param name="hashAlgorithm">The hash algorithm used for calculating
        /// <see cref="PreEvaluationBlockHeader.PreEvaluationHash"/>.</param>
        /// <param name="proof">A pair of the valid proof-of-work nonce which is probably considered
        /// as to satisfy the required <see cref="PreEvaluationBlockHeader.Difficulty"/>,
        /// and the hash digest which is probably considered as to be derived from
        /// the block <paramref name="content"/> and the nonce.</param>
        /// <exception cref="InvalidBlockPreEvaluationHashException">Thrown when the given proof's
        /// hash is invalid.</exception>
        /// <remarks>This does not verify if if a proof's hash is derived from the block
        /// <paramref name="content"/> and the proof nonce.  Therefore, this unsafe constructor
        /// shouldn't be used except for <see
        /// cref="BlockContent{T}.Mine(HashAlgorithmType, CancellationToken)"/> method.</remarks>
        internal PreEvaluationBlock(
            BlockContent<T> content,
            HashAlgorithmType hashAlgorithm,
            in (Nonce Nonce, ImmutableArray<byte> PreEvaluationHash) proof
        )
            : base(content, hashAlgorithm, proof)
        {
        }

        /// <inheritdoc cref="IBlockContent{T}.Transactions"/>
        public IReadOnlyList<Transaction<T>> Transactions => Content.Transactions;

        /// <summary>
        /// The internal block content.
        /// </summary>
        private BlockContent<T> Content => (BlockContent<T>)Metadata;
    }
}
