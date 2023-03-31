#nullable disable
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics;
using System.Diagnostics.Contracts;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Assets;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;
using Libplanet.Store;
using Libplanet.Store.Trie;
using static Libplanet.Blockchain.KeyConverters;

namespace Libplanet.Blockchain
{
    public partial class BlockChain<T>
    {
        /// <summary>
        /// Determines the state root hash of <paramref name="preEvaluationBlock"/>
        /// by evaluating on top of empty states.
        /// </summary>
        /// <param name="preEvaluationBlock">The <see cref="IPreEvaluationBlock"/> for which
        /// to determine the state root hash.</param>
        /// <param name="blockAction">The <see cref="IBlockPolicy{T}.BlockAction"/> to use.</param>
        /// <param name="nativeTokenPredicate">The predicate function to determine whether
        /// the specified <see cref="Currency"/> is a native token defined by chain's
        /// <see cref="Libplanet.Blockchain.Policies.IBlockPolicy{T}.NativeTokens"/> or not.</param>
        /// <param name="evaluations">The evaluation result from <see cref="EvaluateGenesis"/>
        /// for <paramref name="preEvaluationBlock"/>.</param>
        /// <returns>The state root hash calculated by committing <paramref name="evaluations"/> to
        /// an empty <see cref="IStateStore"/>.</returns>
        /// <remarks>
        /// This method computes the state root hash by commiting <paramref name="evaluations"/>
        /// to an ephemeral empty <see cref="IStateStore"/>.
        /// </remarks>
        /// <seealso cref="EvaluateGenesis"/>
        [Pure]
        public static HashDigest<SHA256> DetermineGenesisStateRootHash(
            IPreEvaluationBlock preEvaluationBlock,
            IAction blockAction,
            Predicate<Currency> nativeTokenPredicate,
            out IReadOnlyList<ActionEvaluation> evaluations)
        {
            evaluations = EvaluateGenesis(preEvaluationBlock, blockAction, nativeTokenPredicate);
            ImmutableDictionary<string, IValue> delta = evaluations.GetTotalDelta(
                ToStateKey, ToFungibleAssetKey, ToTotalSupplyKey, ValidatorSetKey);
            IStateStore stateStore = new TrieStateStore(new DefaultKeyValueStore(null));
            ITrie trie = stateStore.Commit(stateStore.GetStateRoot(null).Hash, delta);
            return trie.Hash;
        }

        /// <summary>
        /// Evaluates <paramref name="preEvaluationBlock"/> on top of empty states.
        /// </summary>
        /// <param name="preEvaluationBlock">The <see cref="IPreEvaluationBlock"/> to
        /// evaluate.</param>
        /// <param name="blockAction">The <see cref="IBlockPolicy{T}.BlockAction"/> to use.</param>
        /// <param name="nativeTokenPredicate">A predicate function to determine whether
        /// the specified <see cref="Currency"/> is a native token defined by chain's
        /// <see cref="Libplanet.Blockchain.Policies.IBlockPolicy{T}.NativeTokens"/> or not.</param>
        /// <returns>An <see cref="IReadOnlyList{T}"/> of <see cref="ActionEvaluation"/>s
        /// resulting from evaluating <paramref name="preEvaluationBlock"/> using
        /// <paramref name="blockAction"/> and <paramref name="nativeTokenPredicate"/>.</returns>
        /// <exception cref="ArgumentException">Thrown if <paramref name="preEvaluationBlock"/>s
        /// <see cref="IBlockMetadata.Index"/> is not zero.</exception>
        [Pure]
        public static IReadOnlyList<ActionEvaluation> EvaluateGenesis(
            IPreEvaluationBlock preEvaluationBlock,
            IAction blockAction,
            Predicate<Currency> nativeTokenPredicate)
        {
            if (preEvaluationBlock.Index > 0)
            {
                throw new ArgumentException(
                    $"Given {preEvaluationBlock} must have index 0: {preEvaluationBlock.Index}",
                    nameof(preEvaluationBlock));
            }

            var actionEvaluator = new ActionEvaluator(
                _ => blockAction,
                blockChainStates: NullChainStates.Instance,
                trieGetter: null,
                genesisHash: null,
                nativeTokenPredicate: nativeTokenPredicate,
                actionTypeLoader: StaticActionTypeLoader.Create<T>(),
                feeCalculator: null);
            return actionEvaluator.Evaluate(preEvaluationBlock);
        }

        /// <summary>
        /// Determines the state root hash given <paramref name="block"/> and
        /// <paramref name="evaluations"/>.
        /// </summary>
        /// <param name="block">The <see cref="IPreEvaluationBlock"/> to execute for
        /// <paramref name="evaluations"/>.</param>
        /// <param name="evaluations">The list of <see cref="ActionEvaluation"/>s
        /// from which to extract the states to commit.</param>
        /// <returns>The state root hash given <paramref name="block"/> and
        /// its <paramref name="evaluations"/>.
        /// </returns>
        /// <remarks>
        /// Since the state root hash can only be calculated by making a commit
        /// to an <see cref="IStateStore"/>, this always has a side-effect to
        /// <see cref="StateStore"/> regardless of whether the state root hash
        /// obdatined through commiting to <see cref="StateStore"/>
        /// matches the <paramref name="block"/>'s <see cref="Block{T}.StateRootHash"/> or not.
        /// </remarks>
        /// <seealso cref="EvaluateBlock"/>
        /// <seealso cref="ValidateBlockStateRootHash"/>
        public HashDigest<SHA256> DetermineBlockStateRootHash(
            IPreEvaluationBlock block, out IReadOnlyList<ActionEvaluation> evaluations)
        {
            _rwlock.EnterWriteLock();
            try
            {
                Stopwatch stopwatch = new Stopwatch();
                stopwatch.Start();
                evaluations = EvaluateBlock(block);
                var totalDelta =
                    evaluations.GetTotalDelta(
                        ToStateKey,
                        ToFungibleAssetKey,
                        ToTotalSupplyKey,
                        ValidatorSetKey);
                _logger.Debug(
                    "Took {DurationMs} ms to summarize the states delta with {KeyCount} key " +
                    "changes made by block #{BlockIndex} pre-evaluation hash {PreEvaluationHash}",
                    stopwatch.ElapsedMilliseconds,
                    totalDelta.Count,
                    block.Index,
                    block.PreEvaluationHash);

                HashDigest<SHA256>? prevStateRootHash = Store.GetStateRootHash(block.PreviousHash);
                ITrie stateRoot = StateStore.Commit(prevStateRootHash, totalDelta);
                HashDigest<SHA256> rootHash = stateRoot.Hash;
                _logger
                    .ForContext("Tag", "Metric")
                    .ForContext("Subtag", "StateUpdateDuration")
                    .Information(
                        "Took {DurationMs} ms to update the states with {KeyCount} key changes " +
                        "and resulting in state root hash {StateRootHash} for " +
                        "block #{BlockIndex} pre-evaluation hash {PreEvaluationHash}",
                        stopwatch.ElapsedMilliseconds,
                        totalDelta.Count,
                        rootHash,
                        block.Index,
                        block.PreEvaluationHash);

                return rootHash;
            }
            finally
            {
                _rwlock.ExitWriteLock();
            }
        }

        /// <summary>
        /// Evaluates the <see cref="IAction"/>s in given <paramref name="block"/>.
        /// </summary>
        /// <param name="block">The <see cref="IPreEvaluationBlock"/> to execute.</param>
        /// <returns>An <see cref="IReadOnlyList{T}"/> of <ses cref="ActionEvaluation"/>s for
        /// given <paramref name="block"/>.</returns>
        /// <seealso cref="ValidateBlockStateRootHash"/>
        [Pure]
        public IReadOnlyList<ActionEvaluation> EvaluateBlock(IPreEvaluationBlock block) =>
            ActionEvaluator.Evaluate(block);
   }
}