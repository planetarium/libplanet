#nullable enable
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Security.Cryptography;
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

        internal static IEnumerable<ActionEvaluation> EvaluateActionsGradually(
            BlockHash blockHash,
            long blockIndex,
            TxId? txid,
            IAccountStateDelta previousStates,
            Address minerAddress,
            Address signer,
            byte[] signature,
            IImmutableList<IAction> actions,
            bool rehearsal = false,
            ITrie? previousBlockStatesTrie = null,
            bool blockAction = false)
        {
            ActionContext CreateActionContext(
                IAccountStateDelta prevStates,
                int randomSeed
            ) =>
                new ActionContext(
                    signer: signer,
                    txid: txid,
                    miner: minerAddress,
                    blockHash: blockHash,
                    blockIndex: blockIndex,
                    previousStates: prevStates,
                    randomSeed: randomSeed,
                    rehearsal: rehearsal,
                    previousBlockStatesTrie: previousBlockStatesTrie,
                    blockAction: blockAction);

            byte[] hashedSignature;
            using (var hasher = SHA1.Create())
            {
                hashedSignature = hasher.ComputeHash(signature);
            }

            byte[] blockHashBytes = blockHash.ToByteArray();
            int seed =
                (blockHashBytes.Length > 0 ? BitConverter.ToInt32(blockHashBytes, 0) : 0) ^
                (signature.Any() ? BitConverter.ToInt32(hashedSignature, 0) : 0);

            IAccountStateDelta states = previousStates;
            ILogger logger = Log.ForContext<ActionEvaluation>();
            foreach (IAction action in actions)
            {
                Exception? exc = null;
                ActionContext context = CreateActionContext(states, seed);
                IAccountStateDelta nextStates = context.PreviousStates;
                try
                {
                    DateTimeOffset actionExecutionStarted = DateTimeOffset.Now;
                    nextStates = action.Execute(context);
                    TimeSpan spent = DateTimeOffset.Now - actionExecutionStarted;
                    logger.Verbose($"{action} execution spent {spent.TotalMilliseconds} ms.");
                }
                catch (Exception e)
                {
                    if (rehearsal)
                    {
                        var msg =
                            $"The action {action} threw an exception during its " +
                            "rehearsal.  It is probably because the logic of the " +
                            $"action {action} is not enough generic so that it " +
                            "can cover every case including rehearsal mode.\n" +
                            "The IActionContext.Rehearsal property also might be " +
                            "useful to make the action can deal with the case of " +
                            "rehearsal mode.\n" +
                            "See also this exception's InnerException property.";
                        exc = new UnexpectedlyTerminatedActionException(
                            null, null, null, null, action, msg, e);
                    }
                    else
                    {
                        var stateRootHash = context.PreviousStateRootHash;
                        var msg =
                            $"The action {action} (block #{blockIndex} {blockHash}, tx {txid}, " +
                            $"state root hash {stateRootHash}) threw an exception " +
                            "during execution.  See also this exception's InnerException property.";
                        logger.Error("{Message}\nInnerException: {ExcMessage}", msg, e.Message);
                        exc = new UnexpectedlyTerminatedActionException(
                            blockHash, blockIndex, txid, stateRootHash, action, msg, e);
                    }
                }

                // As IActionContext.Random is stateful, we cannot reuse
                // the context which is once consumed by Execute().
                ActionContext equivalentContext = CreateActionContext(states, seed);

                yield return new ActionEvaluation(
                    action,
                    equivalentContext,
                    nextStates,
                    exc
                );

                if (exc is { })
                {
                    yield break;
                }

                states = nextStates;
                unchecked
                {
                    seed++;
                }
            }
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
                IEnumerable<ActionEvaluation> evaluations = EvaluateTransaction(
                    tx: tx,
                    blockIndex: block.Index,
                    preEvaluationHash: block.PreEvaluationHash,
                    previousStates: delta,
                    minerAddress: block.Miner!.Value,
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
            return EvaluateActionsGradually(
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
                $"Evaluating block action in block {block.Index}: {block.Hash}");

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

            return EvaluateActionsGradually(
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
