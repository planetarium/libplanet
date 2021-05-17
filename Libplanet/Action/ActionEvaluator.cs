#nullable enable
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using Bencodex.Types;
using Libplanet.Assets;
using Libplanet.Blockchain;
using Libplanet.Blocks;
using Libplanet.Store.Trie;
using Libplanet.Tx;
using Serilog;

namespace Libplanet.Action
{
    internal class ActionEvaluator<T>
        where T : IAction, new()
    {
        private readonly ILogger _logger;
        private readonly IAction? _blockAction;
        private readonly Func<Address, BlockHash?, StateCompleter<T>, IValue?> _stateGetter;

        private readonly Func<Address, Currency, BlockHash?,
            FungibleAssetStateCompleter<T>, FungibleAssetValue> _balanceGetter;

        private readonly Func<BlockHash, ITrie>? _trieGetter;

        internal ActionEvaluator(
            IAction? blockAction,
            Func<Address, BlockHash?, StateCompleter<T>, IValue?> stateGetter,
            Func<Address, Currency, BlockHash?,
                FungibleAssetStateCompleter<T>, FungibleAssetValue> balanceGetter,
            Func<BlockHash, ITrie>? trieGetter)
        {
            _logger = Log.ForContext(typeof(ActionEvaluator<T>));
            _blockAction = blockAction;
            _stateGetter = stateGetter;
            _balanceGetter = balanceGetter;
            _trieGetter = trieGetter;
        }

        internal IReadOnlyList<ActionEvaluation> EvaluateActions(
            Block<T> block,
            StateCompleterSet<T> stateCompleters)
        {
            AccountStateGetter stateGetter;
            AccountBalanceGetter balanceGetter;
            if (block.PreviousHash is null)
            {
                stateGetter = address => null;
                balanceGetter = (address, currency) => new FungibleAssetValue(currency);
            }
            else
            {
                stateGetter = address => _stateGetter(
                    address,
                    block.PreviousHash,
                    stateCompleters.StateCompleter);
                balanceGetter = (address, currency) => _balanceGetter(
                    address,
                    currency,
                    block.PreviousHash,
                    stateCompleters.FungibleAssetStateCompleter);
            }

            ITrie? previousBlockStatesTrie =
                !(_trieGetter is null) && block.PreviousHash is { } h
                    ? _trieGetter(h)
                    : null;

            ImmutableList<ActionEvaluation> txEvaluations = EvaluateBlock(
                block,
                DateTimeOffset.UtcNow,
                stateGetter,
                balanceGetter,
                previousBlockStatesTrie);
            return _blockAction is null
                ? txEvaluations
                : txEvaluations.Add(
                    EvaluateBlockAction(
                        block, txEvaluations, stateCompleters, previousBlockStatesTrie));
        }

        internal ImmutableList<ActionEvaluation> EvaluateBlock(
            Block<T> block,
            DateTimeOffset currentTime,
            AccountStateGetter? accountStateGetter = null,
            AccountBalanceGetter? accountBalanceGetter = null,
            ITrie? previousBlockStatesTrie = null)
        {
            accountStateGetter ??= address => null;
            accountBalanceGetter ??= (address, currency) => new FungibleAssetValue(currency);

            // FIXME: Probably not the best place to have Validate().
            block.Validate(currentTime);

            IEnumerable<Tuple<Transaction<T>, ActionEvaluation>> txEvaluations =
                EvaluateActionsPerTx(
                    block, accountStateGetter, accountBalanceGetter, previousBlockStatesTrie);
            var updatedTxAddressPairs = txEvaluations
                    .GroupBy(tuple => tuple.Item1)
                    .Select(
                        grp => (
                            grp.Key,
                            grp.Last().Item2.OutputStates.UpdatedAddresses));
            foreach (
                (Transaction<T> tx, IImmutableSet<Address> updatedAddresses)
                in updatedTxAddressPairs)
            {
                if (!tx.UpdatedAddresses.IsSupersetOf(updatedAddresses))
                {
                    const string msg =
                        "Actions in the transaction try to update " +
                        "the addresses not granted.";
                    throw new InvalidTxUpdatedAddressesException(
                        tx.Id,
                        tx.UpdatedAddresses,
                        updatedAddresses,
                        msg);
                }
            }

            return txEvaluations.Select(te => te.Item2).ToImmutableList();
        }

        internal IEnumerable<Tuple<Transaction<T>, ActionEvaluation>> EvaluateActionsPerTx(
            Block<T> block,
            AccountStateGetter? accountStateGetter = null,
            AccountBalanceGetter? accountBalanceGetter = null,
            ITrie? previousBlockStatesTrie = null)
        {
            accountStateGetter ??= address => null;
            accountBalanceGetter ??= (address, currency) => new FungibleAssetValue(currency);

            IAccountStateDelta delta;
            foreach (Transaction<T> tx in block.Transactions)
            {
                delta = block.ProtocolVersion > 0
                    ? new AccountStateDeltaImpl(accountStateGetter, accountBalanceGetter, tx.Signer)
                    : new AccountStateDeltaImplV0(
                        accountStateGetter, accountBalanceGetter, tx.Signer);
                IEnumerable<ActionEvaluation> evaluations =
                    ActionEvaluation.EvaluateActionsGradually(
                        blockHash: block.PreEvaluationHash,
                        blockIndex: block.Index,
                        txid: tx.Id,
                        previousStates: delta,
                        minerAddress: block.Miner!.Value,
                        signer: tx.Signer,
                        signature: tx.Signature,
                        actions: tx.Actions.Cast<IAction>().ToImmutableList(),
                        rehearsal: false,
                        previousBlockStatesTrie: previousBlockStatesTrie);
                foreach (var evaluation in evaluations)
                {
                    yield return Tuple.Create(tx, evaluation);
                    delta = evaluation.OutputStates;
                }

                accountStateGetter = delta.GetState;
                accountBalanceGetter = delta.GetBalance;
            }
        }

        internal IEnumerable<ActionEvaluation> EvaluateTransaction(
            Transaction<T> tx,
            long blockIndex,
            BlockHash preEvaluationHash,
            IAccountStateDelta previousStates,
            Address minerAddress,
            bool rehearsal = false,
            ITrie? previousBlockStatesTrie = null)
        {
            return ActionEvaluation.EvaluateActionsGradually(
                blockHash: preEvaluationHash,
                blockIndex: blockIndex,
                txid: tx.Id,
                previousStates: previousStates,
                minerAddress: minerAddress,
                signer: tx.Signer,
                signature: tx.Signature,
                actions: tx.Actions.Cast<IAction>().ToImmutableList(),
                rehearsal: rehearsal,
                previousBlockStatesTrie: previousBlockStatesTrie);
        }

        internal ActionEvaluation EvaluateBlockAction(
            Block<T> block,
            IReadOnlyList<ActionEvaluation> txActionEvaluations,
            StateCompleterSet<T> stateCompleters,
            ITrie? previousBlockStatesTrie)
        {
            if (_blockAction is null)
            {
                var message = "To evaluate block action, Policy.BlockAction must not be null.";
                throw new InvalidOperationException(message);
            }

            _logger.Debug(
                "Evaluating block action in block {blockIndex}: {block}", block?.Index, block);

            IAccountStateDelta? lastStates = null;

            if (!(txActionEvaluations is null) && txActionEvaluations.Count > 0)
            {
                lastStates = txActionEvaluations[txActionEvaluations.Count - 1].OutputStates;
            }

            Address miner = block!.Miner.GetValueOrDefault();

            if (lastStates is null)
            {
                IValue? GetState(Address address) =>
                    _stateGetter(address, block.PreviousHash, stateCompleters.StateCompleter);

                FungibleAssetValue GetBalance(Address address, Currency currency) =>
                    _balanceGetter(
                        address,
                        currency,
                        block.PreviousHash,
                        stateCompleters.FungibleAssetStateCompleter);
                lastStates = block.ProtocolVersion > 0
                    ? new AccountStateDeltaImpl(GetState, GetBalance, miner)
                    : new AccountStateDeltaImplV0(GetState, GetBalance, miner);
            }

            return ActionEvaluation.EvaluateActionsGradually(
                blockHash: block.PreEvaluationHash,
                blockIndex: block.Index,
                txid: null,
                previousStates: lastStates,
                minerAddress: miner,
                signer: miner,
                signature: Array.Empty<byte>(),
                actions: new[] { _blockAction }.ToImmutableList(),
                rehearsal: false,
                previousBlockStatesTrie: previousBlockStatesTrie,
                blockAction: true).First();
        }
    }
}
