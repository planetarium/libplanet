#nullable enable
using System.Collections.Generic;
using System.Collections.Immutable;
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
                TxExecution txExecution;
                if (evalSum.Exception is { } e)
                {
                    txExecution = new TxFailure(block.Hash, txid, e.InnerException ?? e);
                }
                else
                {
                    IAccountStateDelta outputStates = evalSum.OutputStates;
                    txExecution = new TxSuccess(
                        block.Hash,
                        txid,
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
                "s for {Txs} transactions within the block #{BlockIndex} {BlockHash}.",
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
                            " for the tx {TxId} within the block {BlockIndex} {BlockHash}.",
                            s.TxId,
                            s.BlockHash
                        );
                        break;
                    case TxFailure f:
                        Store.PutTxExecution(f);  // IStore.PutTxExecution(TxFailure)
                        _logger.Verbose(
                            "Updated " + nameof(TxFailure) +
                            " for the tx {TxId} within the block {BlockIndex} {BlockHash}.",
                            f.TxId,
                            f.BlockHash
                        );
                        break;
                }

                count++;
            }

            _logger.Verbose(
                "Updated " + nameof(TxExecution) + "s for {Txs} transactions.",
                count
            );
        }
    }
}
