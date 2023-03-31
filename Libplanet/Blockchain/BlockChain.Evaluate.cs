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
using Libplanet.Tx;
using static Libplanet.Blockchain.KeyConverters;

namespace Libplanet.Blockchain
{
    public partial class BlockChain<T>
    {
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
        /// Determines the state root hash of committing <paramref name="evaluations"/> to
        /// an empty <see cref="IStateStore"/>.
        /// </summary>
        /// <param name="evaluations">Supposed evaluation result obtained from
        /// <see cref="EvaluateGenesis"/> for a genesis <see cref="IPreEvaluationBlock"/>.</param>
        /// <returns>The state root hash calculated by committing <paramref name="evaluations"/> to
        /// an empty <see cref="IStateStore"/>.</returns>
        /// <remarks>
        /// This method computes the state root hash by commiting <paramref name="evaluations"/>
        /// to an ephemeral empty <see cref="IStateStore"/>.
        /// </remarks>
        /// <seealso cref="EvaluateGenesis"/>
        [Pure]
        public static HashDigest<SHA256> DetermineGenesisStateRootHash(
            IReadOnlyList<ActionEvaluation> evaluations)
        {
            ImmutableDictionary<string, IValue> delta = evaluations.GetTotalDelta(
                ToStateKey, ToFungibleAssetKey, ToTotalSupplyKey, ValidatorSetKey);
            IStateStore stateStore = new TrieStateStore(new DefaultKeyValueStore(null));
            ITrie trie = stateStore.Commit(stateStore.GetStateRoot(null).Hash, delta);
            return trie.Hash;
        }

        /// <summary>
        /// Evaluates the <see cref="IAction"/>s in given <paramref name="block"/>.
        /// </summary>
        /// <param name="block">The <see cref="Block{T}"/> to execute.</param>
        /// <returns>An <see cref="IReadOnlyList{T}"/> of <ses cref="ActionEvaluation"/>s for
        /// given <paramref name="block"/>.</returns>
        /// <seealso cref="CommitEvaluations"/>
        [Pure]
        public IReadOnlyList<ActionEvaluation> ExecuteActions(Block<T> block) =>
            ActionEvaluator.Evaluate(block);

        /// <summary>
        /// Attempts to commit a result obtained from <see cref="ExecuteActions"/>
        /// to the <see cref="IStateStore"/>.
        /// </summary>
        /// <param name="block">The <see cref="Block{T}"/> to validate against.</param>
        /// <param name="evaluations">The list of <see cref="ActionEvaluation"/>s
        /// from which to extract the states to commit.</param>
        /// <exception cref="InvalidBlockStateRootHashException">If the state root hash
        /// calculated by commiting to the <see cref="IStateStore"/> does not match
        /// the <paramref name="block"/>'s <see cref="Block{T}.StateRootHash"/>.</exception>
        /// <remarks>
        /// Since the state root hash for can only be calculated from making a commit
        /// to an <see cref="IStateStore"/>, this always has a side-effect to the
        /// <see cref="IStateStore"/> regardless of whether the state root hash
        /// obdatined through commiting to the <see cref="IStateStore"/>
        /// matches the <paramref name="block"/>'s <see cref="Block{T}.StateRootHash"/> or not.
        /// </remarks>
        /// <seealso cref="ExecuteActions"/>
        public void CommitEvaluations(Block<T> block, IReadOnlyList<ActionEvaluation> evaluations)
        {
            _rwlock.EnterWriteLock();
            try
            {
                // Update states
                Stopwatch stopwatch = new Stopwatch();
                stopwatch.Start();
                var totalDelta =
                    evaluations.GetTotalDelta(
                        ToStateKey,
                        ToFungibleAssetKey,
                        ToTotalSupplyKey,
                        ValidatorSetKey);
                const string deltaMsg =
                    "Summarized the states delta with {KeyCount} key changes " +
                    "made by block #{BlockIndex} {BlockHash}";
                _logger.Debug(deltaMsg, totalDelta.Count, block.Index, block.Hash);

                HashDigest<SHA256>? prevStateRootHash = Store.GetStateRootHash(block.PreviousHash);
                ITrie stateRoot = StateStore.Commit(prevStateRootHash, totalDelta);
                HashDigest<SHA256> rootHash = stateRoot.Hash;
                const string rootHashMsg =
                    "Calculated the root hash of the states made by block #{BlockIndex} " +
                    "{BlockHash} for " + nameof(TrieStateStore) + ": {StateRootHash}";
                _logger.Debug(rootHashMsg, block.Index, block.Hash, rootHash);

                if (!rootHash.Equals(block.StateRootHash))
                {
                    var message = $"Block #{block.Index} {block.Hash}'s state root hash " +
                        $"is {block.StateRootHash}, but the execution result is {rootHash}.";
                    throw new InvalidBlockStateRootHashException(
                        message,
                        block.StateRootHash,
                        rootHash);
                }

                _logger
                    .ForContext("Tag", "Metric")
                    .ForContext("Subtag", "StateUpdateDuration")
                    .Information(
                        "Finished updating the states with {KeyCount} key changes affected by " +
                        "block #{BlockIndex} {BlockHash} in {DurationMs} ms",
                        totalDelta.Count,
                        block.Index,
                        block.Hash,
                        stopwatch.ElapsedMilliseconds);

                IEnumerable<TxExecution> txExecutions = MakeTxExecutions(block, evaluations);
                UpdateTxExecutions(txExecutions);
            }
            finally
            {
                _rwlock.ExitWriteLock();
            }
        }
    }
}