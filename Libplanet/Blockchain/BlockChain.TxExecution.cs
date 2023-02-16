using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics;
using System.Globalization;
using System.Linq;
using Libplanet.Action;
using Libplanet.Assets;
using Libplanet.Blocks;
using Libplanet.Tx;

namespace Libplanet.Blockchain
{
    public partial class BlockChain<T>
    {
        /// <summary>
        /// Makes <see cref="TxExecution"/> instances from the given <paramref name="evaluations"/>.
        /// </summary>
        /// <param name="block">The block that evaluated actions belong to.</param>
        /// <param name="evaluations">The result of evaluated actions.</param>
        /// <returns>The corresponding <see cref="TxExecution"/>s.</returns>
        internal IEnumerable<TxExecution> MakeTxExecutions(
            Block<T> block,
            IReadOnlyList<ActionEvaluation> evaluations
        )
        {
            IEnumerable<IGrouping<TxId, ActionEvaluation>> evaluationsPerTxs = evaluations
                .Where(e => e.InputContext.TxId is { })
                .GroupBy(e => e.InputContext.TxId!.Value);
            int count = 0;
            foreach (IGrouping<TxId, ActionEvaluation> txEvals in evaluationsPerTxs)
            {
                TxId txid = txEvals.Key;
                IAccountStateDelta prevStates = txEvals.First().InputContext.PreviousStates;
                ActionEvaluation evalSum = txEvals.Last();
                var actionsLogsList = txEvals.Select(ae => ae.Logs).ToList();
                TxExecution txExecution;
                if (evalSum.Exception is { } e)
                {
                    txExecution = new TxFailure(
                        block.Hash,
                        txid,
                        actionsLogsList,
                        e.InnerException ?? e);
                }
                else
                {
                    IAccountStateDelta outputStates = evalSum.OutputStates;
                    txExecution = new TxSuccess(
                        block.Hash,
                        txid,
                        actionsLogsList,
                        outputStates.GetUpdatedStates(),
                        outputStates.UpdatedFungibleAssets.ToImmutableDictionary(
                            kv => kv.Key,
                            kv => (IImmutableDictionary<Currency, FungibleAssetValue>)kv.Value
                                .ToImmutableDictionary(
                                    currency => currency,
                                    currency => outputStates.GetBalance(kv.Key, currency) -
                                        prevStates.GetBalance(kv.Key, currency)
                                )
                        ),
                        outputStates.UpdatedFungibleAssets.ToImmutableDictionary(
                            kv => kv.Key,
                            kv => (IImmutableDictionary<Currency, FungibleAssetValue>)kv.Value
                                .ToImmutableDictionary(
                                    currency => currency,
                                    currency => outputStates.GetBalance(kv.Key, currency)
                                )
                        )
                    );
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
