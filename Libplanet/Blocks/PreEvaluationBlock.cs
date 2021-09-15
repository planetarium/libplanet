#nullable enable
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Security.Cryptography;
using System.Threading;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Assets;
using Libplanet.Blockchain;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Tx;
using static Libplanet.Blockchain.KeyConverters;

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

        /// <summary>
        /// Evaluates all actions in the <see cref="Transactions"/> and
        /// a <paramref name="blockAction"/> (if any), and returns a <see cref="Block{T}"/> instance
        /// combined with the <see cref="Block{T}.StateRootHash"/> determined from ground zero
        /// (i.e., empty state root).
        /// </summary>
        /// <param name="blockAction">An optional
        /// <see cref="Blockchain.Policies.IBlockPolicy{T}.BlockAction"/>.</param>
        /// <param name="stateStore">The <see cref="BlockChain{T}.StateStore"/>.</param>
        /// <returns>The block combined with the resulting <see cref="Block{T}.StateRootHash"/>.
        /// </returns>
        /// <remarks>This can be used with only genesis blocks.  For blocks with indices greater
        /// than zero, use <see cref="DetermineStateRootHash(BlockChain{T})"/> overloaded one
        /// instead.</remarks>
        /// <exception cref="InvalidOperationException">Thrown when its
        /// <see cref="IBlockMetadata.Index"/> is not zero.</exception>
        public Block<T> Evaluate(IAction? blockAction, IStateStore stateStore) =>
            new Block<T>(this, DetermineStateRootHash(blockAction, stateStore));

        /// <summary>
        /// Evaluates all actions in the <see cref="Transactions"/> and an optional
        /// <see cref="Blockchain.Policies.IBlockPolicy{T}.BlockAction"/>, and returns
        /// a <see cref="Block{T}"/> instance combined with the <see cref="Block{T}.StateRootHash"/>
        /// determined from ground zero (i.e., empty state root).
        /// </summary>
        /// <param name="blockChain">The blockchain on which actions are evaluated based.</param>
        /// <returns>The block combined with the resulting <see cref="Block{T}.StateRootHash"/>.
        /// </returns>
        // FIXME: Take narrower input instead of a whole BlockChain<T>.
        public Block<T> Evaluate(BlockChain<T> blockChain) =>
            EvaluateActions(blockChain).Block;

        /// <summary>
        /// Evaluates all actions in the <see cref="Transactions"/> and
        /// a <paramref name="blockAction"/> (if any), and determines
        /// the <see cref="Block{T}.StateRootHash"/> from ground zero (i.e., empty state root).
        /// </summary>
        /// <param name="blockAction">An optional
        /// <see cref="Blockchain.Policies.IBlockPolicy{T}.BlockAction"/>.</param>
        /// <param name="stateStore">The <see cref="BlockChain{T}.StateStore"/>.</param>
        /// <returns>The resulting <see cref="Block{T}.StateRootHash"/>.</returns>
        /// <remarks>This can be used with only genesis blocks.  For blocks with indices greater
        /// than zero, use <see cref="DetermineStateRootHash(BlockChain{T})"/> overloaded one
        /// instead.</remarks>
        /// <exception cref="InvalidOperationException">Thrown when its
        /// <see cref="IBlockMetadata.Index"/> is not zero.</exception>
        public HashDigest<SHA256> DetermineStateRootHash(
            IAction? blockAction,
            IStateStore stateStore
        )
        {
            // FIXME: Extract the mutual logic with other overloaded methods into a smaller method.
            if (Index > 0)
            {
                throw new InvalidOperationException(
                    $"{nameof(DetermineStateRootHash)}({nameof(IAction)}?, {nameof(IStateStore)})" +
                    " method can be used with only genesis blocks; try other overloaded method" +
                    " instead."
                );
            }

            var actionEvaluator = new ActionEvaluator<T>(
                _ => HashAlgorithm,
                blockAction,
                stateGetter: (address, digest, stateCompleter) => null,
                balanceGetter: (address, currency, hash, fungibleAssetStateCompleter)
                    => new FungibleAssetValue(currency),
                trieGetter: null
            );
            IReadOnlyList<ActionEvaluation> actionEvaluations =
                actionEvaluator.Evaluate(this, StateCompleterSet<T>.Reject);
            ImmutableDictionary<string, IValue> totalDelta =
                actionEvaluations.GetTotalDelta(ToStateKey, ToFungibleAssetKey);
            ITrie trie = stateStore.Commit(stateStore.GetStateRoot(null).Hash, totalDelta);
            return trie.Hash;
        }

        /// <summary>
        /// Evaluates all actions in the <see cref="Transactions"/> and an optional
        /// <see cref="Blockchain.Policies.IBlockPolicy{T}.BlockAction"/>, and determines
        /// the <see cref="Block{T}.StateRootHash"/>.
        /// </summary>
        /// <param name="blockChain">The blockchain on which actions are evaluated based.</param>
        /// <returns>The resulting <see cref="Block{T}.StateRootHash"/>.</returns>
        public HashDigest<SHA256> DetermineStateRootHash(BlockChain<T> blockChain) =>
            CalculateStateRootHash(blockChain).StateRootHash;

        internal (Block<T> Block, IReadOnlyList<ActionEvaluation> ActionEvaluations)
        EvaluateActions(BlockChain<T> blockChain)
        {
            // FIXME: Take narrower input instead of a whole BlockChain<T>.
            (HashDigest<SHA256> stateRootHash, IReadOnlyList<ActionEvaluation> evals) =
                CalculateStateRootHash(blockChain);
            return (new Block<T>(this, stateRootHash), evals);
        }

        internal (
            HashDigest<SHA256> StateRootHash,
            IReadOnlyList<ActionEvaluation> ActionEvaluations
        ) CalculateStateRootHash(BlockChain<T> blockChain)
        {
            // FIXME: Take narrower input instead of a whole BlockChain<T>.
            // FIXME: Add a dedicate unit test for this method.
            blockChain._rwlock.EnterUpgradeableReadLock();
            try
            {
                IReadOnlyList<ActionEvaluation> actionEvaluations =
                    blockChain.ActionEvaluator.Evaluate(this, StateCompleterSet<T>.Recalculate);
                ImmutableDictionary<string, IValue> totalDelta =
                    actionEvaluations.GetTotalDelta(ToStateKey, ToFungibleAssetKey);
                blockChain._rwlock.EnterWriteLock();
                try
                {
                    ITrie trie = blockChain.StateStore.Commit(
                        blockChain.Store.GetStateRootHash(PreviousHash),
                        totalDelta
                    );
                    return (trie.Hash, actionEvaluations);
                }
                finally
                {
                    blockChain._rwlock.ExitWriteLock();
                }
            }
            finally
            {
                blockChain._rwlock.ExitUpgradeableReadLock();
            }
        }
    }
}
