using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics;
using System.Globalization;
using System.Linq;
using Libplanet.Action;
using Libplanet.Action.State;
using Libplanet.Store.Trie;
using Libplanet.Types.Assets;
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
            IEnumerable<IGrouping<TxId, IActionEvaluation>> evaluationsPerTxs = evaluations
                .Where(e => e.InputContext.TxId is { })
                .GroupBy(e => e.InputContext.TxId!.Value);
            int count = 0;

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

            foreach (var group in groupedEvals)
            {
                if (group.Item1 is { } txId)
                {
                    // make tx execution
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
                        .ToList();

                    yield return exceptions.Any(exception => exception is { })
                        ? new TxFailure(
                            block.Hash,
                            txId,
                            trie.Hash,
                            nextTrie.Hash,
                            exceptions)
                        : new TxSuccess(
                            block.Hash,
                            txId,
                            trie.Hash,
                            nextTrie.Hash,
                            exceptions);
                    count++;
                    trie = nextTrie;
                }
                else
                {
                    // move forward
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
                // Note that there are two overloaded methods of the same name PutTxExecution()
                // in IStore.  As those two have different signatures, run-time polymorphism
                // does not work.  Instead, we need the following hard-coded branch:
                switch (txExecution)
                {
                    case TxSuccess s:
                        Store.PutTxExecution(s);  // IStore.PutTxExecution(TxSuccess)
                        _logger.Verbose(
                            "Updated " + nameof(TxSuccess) +
                            " for tx {TxId} within block {BlockHash}",
                            s.TxId,
                            s.BlockHash
                        );
                        break;
                    case TxFailure f:
                        Store.PutTxExecution(f);  // IStore.PutTxExecution(TxFailure)
                        _logger.Verbose(
                            "Updated " + nameof(TxFailure) +
                            " for tx {TxId} within block {BlockHash}",
                            f.TxId,
                            f.BlockHash
                        );
                        break;
                    default:
                        // In theory, this case must not happen.  The following case is for just in
                        // case.  (For example, we might add a new subtype for TxExecution.)
                        const string msg = "Unexpected subtype of " + nameof(TxExecution) + ": {0}";
                        _logger.Fatal(msg, txExecution);
                        Trace.Assert(
                            false,
                            string.Format(CultureInfo.InvariantCulture, msg, txExecution)
                        );
                        break;
                }

                count++;
            }

            _logger.Verbose(
                "Updated " + nameof(TxExecution) + "s for {Txs} transactions",
                count
            );
        }
    }
}
