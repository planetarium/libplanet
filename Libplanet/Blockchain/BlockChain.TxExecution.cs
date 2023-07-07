using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics;
using System.Globalization;
using System.Linq;
using Libplanet.Action;
using Libplanet.Assets;
using Libplanet.Blocks;
using Libplanet.State;
using Libplanet.Tx;

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
            foreach (IGrouping<TxId, IActionEvaluation> txEvals in evaluationsPerTxs)
            {
                TxId txid = txEvals.Key;
                IAccountStateDelta inputState = txEvals.First().InputContext.PreviousState;
                IActionEvaluation evalSum = txEvals.Last();
                IAccountDelta deltaSum = txEvals
                    .Select(eval => eval.OutputState.Delta)
                    .ToList()
                    .OrderedSum();
                var actionsLogsList = txEvals.Select(ae => ae.Logs).ToList();
                TxExecution txExecution;

                if (txEvals
                    .Select(eval => eval.Exception)
                    .FirstOrDefault() is { } e)
                {
                    txExecution = new TxFailure(
                        block.Hash,
                        txid,
                        actionsLogsList,
                        e.InnerException ?? e);
                }
                else
                {
                    IAccountStateDelta outputState = evalSum.OutputState;
                    txExecution = new TxSuccess(
                        block.Hash,
                        txid,
                        actionsLogsList,
                        deltaSum.States,
                        deltaSum.Fungibles
                            .GroupBy(kv => kv.Key.Item1)
                            .ToImmutableDictionary(
                                group => group.Key,
                                group => (IImmutableDictionary<Currency, FungibleAssetValue>)group
                                    .ToImmutableDictionary(
                                        kv => kv.Key.Item2,
                                        kv => FungibleAssetValue.FromRawValue(
                                            kv.Key.Item2, kv.Value) -
                                            inputState.GetBalance(group.Key, kv.Key.Item2))),
                        deltaSum.Fungibles
                            .GroupBy(kv => kv.Key.Item1)
                            .ToImmutableDictionary(
                                group => group.Key,
                                group => (IImmutableDictionary<Currency, FungibleAssetValue>)group
                                    .ToImmutableDictionary(
                                        kv => kv.Key.Item2,
                                        kv => FungibleAssetValue.FromRawValue(
                                            kv.Key.Item2, kv.Value))));
                }

                yield return txExecution;
                count++;
            }

            _logger.Verbose(
                "Prepared " + nameof(TxExecution) +
                "s for {Txs} transactions within the block #{BlockIndex} {BlockHash}",
                count,
                block.Index,
                block.Hash
            );
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
