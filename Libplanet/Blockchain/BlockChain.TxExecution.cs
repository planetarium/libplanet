using System;
using System.Collections.Generic;
using System.Linq;
using Libplanet.Action;
using Libplanet.Action.State;
using Libplanet.Store.Trie;
using Libplanet.Types.Blocks;
using Libplanet.Types.Tx;

namespace Libplanet.Blockchain
{
    public partial class BlockChain
    {
        /// <summary>
        /// Makes <see cref="TxExecution"/> instances from the given <paramref name="evaluations"/>.
        /// </summary>
        /// <param name="block">The block that evaluated actions belong to.</param>
        /// <param name="evaluations">The result of evaluated actions.</param>
        /// <returns>The corresponding <see cref="TxExecution"/>s.</returns>
        internal IEnumerable<TxExecution> MakeTxExecutions(
            Block block,
            IReadOnlyList<IActionEvaluation> evaluations
        )
        {
            List<(TxId?, List<IActionEvaluation>)> groupedEvals =
                new List<(TxId?, List<IActionEvaluation>)>();
            foreach (IActionEvaluation eval in evaluations)
            {
                if (groupedEvals.Count == 0)
                {
                    groupedEvals.Add(
                        (eval.InputContext.TxId, new List<IActionEvaluation>() { eval }));
                }
                else
                {
                    if (groupedEvals.Last().Item1.Equals(eval.InputContext.TxId))
                    {
                        groupedEvals.Last().Item2.Add(eval);
                    }
                    else
                    {
                        groupedEvals.Add(
                            (eval.InputContext.TxId, new List<IActionEvaluation>() { eval }));
                    }
                }
            }

            ITrie trie = GetAccountState(block.PreviousHash).Trie;

            int count = 0;
            foreach (var group in groupedEvals)
            {
                if (group.Item1 is { } txId)
                {
                    ITrie nextTrie = trie;
                    foreach (var eval in group.Item2)
                    {
                        foreach (var kv in eval.OutputState.Delta.ToRawDelta())
                        {
                            nextTrie = nextTrie.Set(kv.Key, kv.Value);
                        }
                    }

                    nextTrie = StateStore.Commit(nextTrie);

                    List<Exception?> exceptions = group.Item2
                        .Select(eval => eval.Exception)
                        .Select(exception => exception is { } e && e.InnerException is { } i
                            ? i
                            : exception)
                        .ToList();

                    yield return new TxExecution(
                        block.Hash,
                        txId,
                        exceptions.Any(exception => exception is { }),
                        trie.Hash,
                        nextTrie.Hash,
                        exceptions.ToList());

                    count++;
                    trie = nextTrie;
                }
                else
                {
                    ITrie nextTrie = trie;
                    foreach (var eval in group.Item2)
                    {
                        foreach (var kv in eval.OutputState.Delta.ToRawDelta())
                        {
                            nextTrie = nextTrie.Set(kv.Key, kv.Value);
                        }
                    }

                    nextTrie = StateStore.Commit(nextTrie);
                    trie = nextTrie;
                }
            }

            _logger.Verbose(
                "Prepared " + nameof(TxExecution) +
                "s for {Txs} transactions within the block #{BlockIndex} {BlockHash}",
                count,
                block.Index,
                block.Hash);
        }

        internal void UpdateTxExecutions(IEnumerable<TxExecution> txExecutions)
        {
            int count = 0;
            foreach (TxExecution txExecution in txExecutions)
            {
                Store.PutTxExecution(txExecution);
                count++;

                _logger.Verbose(
                    "Updated " + nameof(TxExecution) + " for tx {TxId} within block {BlockHash}",
                    txExecution.TxId,
                    txExecution.BlockHash);
            }

            _logger.Verbose(
                "Updated " + nameof(TxExecution) + "s for {Txs} transactions",
                count
            );
        }
    }
}
