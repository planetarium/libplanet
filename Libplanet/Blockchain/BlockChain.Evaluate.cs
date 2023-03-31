#nullable disable
using System.Collections.Generic;
using System.Diagnostics;
using System.Diagnostics.Contracts;
using System.Security.Cryptography;
using Libplanet.Action;
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