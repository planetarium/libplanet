#nullable enable
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Assets;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Store.Trie;
using Libplanet.Tx;
using Serilog;

namespace Libplanet.Action
{
    internal class ActionEvaluator<T>
        where T : IAction, new()
    {
        private readonly ILogger _logger;
        private readonly IAction? _policyBlockAction;
        private readonly Func<Address, BlockHash?, StateCompleter<T>, IValue?> _stateGetter;
        private readonly Func<Address, Currency, BlockHash?,
            FungibleAssetStateCompleter<T>, FungibleAssetValue> _balanceGetter;

        private readonly Func<BlockHash, ITrie>? _trieGetter;
        private readonly AccountStateGetter _defaultAccountStateGetter = address => null;
        private readonly AccountBalanceGetter _defaultAccountBalanceGetter =
            (address, currency) => new FungibleAssetValue(currency);

        internal ActionEvaluator(
            IAction? policyBlockAction,
            Func<Address, BlockHash?, StateCompleter<T>, IValue?> stateGetter,
            Func<Address, Currency, BlockHash?,
                FungibleAssetStateCompleter<T>, FungibleAssetValue> balanceGetter,
            Func<BlockHash, ITrie>? trieGetter)
        {
            _logger = Log.ForContext(typeof(ActionEvaluator<T>));
            _policyBlockAction = policyBlockAction;
            _stateGetter = stateGetter;
            _balanceGetter = balanceGetter;
            _trieGetter = trieGetter;
        }

        /// <summary>
        /// Executes the <paramref name="actions"/> step by step, and emits
        /// <see cref="ActionEvaluation"/> for each step.
        /// </summary>
        /// <param name="preEvaluationHash">The <see cref="Block{T}.PreEvaluationHash"/> of
        /// <see cref="Block{T}"/> that <paramref name="actions"/> belongs to.</param>
        /// <param name="blockIndex">The <see cref="Block{T}.Index"/> of <see cref="Block{T}"/> that
        /// <paramref name="actions"/> belongs to.</param>
        /// <param name="txid">The <see cref="Transaction{T}.Id"/> of <see cref="Transaction{T}"/>
        /// that <paramref name="actions"/> belongs to.  This can be <c>null</c> on rehearsal mode
        /// or if an action is a <see cref="IBlockPolicy{T}.BlockAction"/>.</param>
        /// <param name="previousStates">The states immediately before <paramref name="actions"/>
        /// being executed.  Note that its <see cref="IAccountStateDelta.UpdatedAddresses"/> are
        /// remained to the returned next states.</param>
        /// <param name="minerAddress">An address of block miner.</param>
        /// <param name="signer">Signer of the <paramref name="actions"/>.</param>
        /// <param name="signature"><see cref="Transaction{T}"/> signature used to generate random
        /// seeds.</param>
        /// <param name="actions">Actions to evaluate.</param>
        /// <param name="rehearsal">Pass <c>true</c> if it is intended
        /// to be dry-run (i.e., the returned result will be never used).
        /// The default value is <c>false</c>.</param>
        /// <param name="previousBlockStatesTrie">The trie to contain states at previous block.
        /// </param>
        /// <param name="blockAction">Pass <c>true</c> if it is
        /// <see cref="IBlockPolicy{T}.BlockAction"/>.</param>
        /// <returns>Enumerates <see cref="ActionEvaluation"/>s for each one in
        /// <paramref name="actions"/>.  The order is the same to the <paramref name="actions"/>.
        /// Note that each <see cref="IActionContext.Random"/> object
        /// has a unconsumed state.
        /// </returns>
        [Pure]
        internal static IEnumerable<ActionEvaluation> EvaluateActionsGradually(
            BlockHash preEvaluationHash,
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
                    blockHash: preEvaluationHash,
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

            byte[] preEvaluationHashBytes = preEvaluationHash.ToByteArray();
            int seed =
                (preEvaluationHashBytes.Length > 0
                    ? BitConverter.ToInt32(preEvaluationHashBytes, 0) : 0)
                ^ (signature.Any() ? BitConverter.ToInt32(hashedSignature, 0) : 0);

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
                            $"The action {action} (block #{blockIndex} " +
                            $"pre-evaluation hash {preEvaluationHash}, " +
                            $"tx {txid}, state root hash {stateRootHash}) threw an exception " +
                            "during execution.  See also this exception's InnerException property.";
                        logger.Error("{Message}\nInnerException: {ExcMessage}", msg, e.Message);
                        exc = new UnexpectedlyTerminatedActionException(
                            preEvaluationHash, blockIndex, txid, stateRootHash, action, msg, e);
                    }
                }

                // As IActionContext.Random is stateful, we cannot reuse
                // the context which is once consumed by Execute().
                ActionContext equivalentContext = CreateActionContext(states, seed);

                yield return new ActionEvaluation(
                    action,
                    equivalentContext,
                    nextStates,
                    exc);

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

        /// <summary>
        /// Executes every <see cref="IAction"/> in <see cref="Block{T}.Transactions"/>
        /// and <see cref="IBlockPolicy{T}.BlockAction"/>.  Mainly calls <see cref="EvaluateBlock"/>
        /// and appends the result of <see cref="EvaluatePolicyBlockAction"/> at the end.
        /// </summary>
        /// <param name="block">A <see cref="Block{T}"/> instance to evaluate.</param>
        /// <param name="stateCompleters">A <see cref="StateCompleterSet{T}"/> to use.</param>
        /// <returns>A list of <see cref="ActionEvaluation"/>s for every <see cref="IAction"/>
        /// related to given <paramref name="block"/>.</returns>
        /// <seealso cref="EvaluateBlock"/>
        /// <seealso cref="EvaluatePolicyBlockAction"/>
        internal IReadOnlyList<ActionEvaluation> EvaluateActions(
            Block<T> block,
            StateCompleterSet<T> stateCompleters)
        {
            AccountStateGetter accountStateGetter;
            AccountBalanceGetter accountBalanceGetter;
            if (block.PreviousHash is null)
            {
                accountStateGetter = _defaultAccountStateGetter;
                accountBalanceGetter = _defaultAccountBalanceGetter;
            }
            else
            {
                accountStateGetter = address => _stateGetter(
                    address,
                    block.PreviousHash,
                    stateCompleters.StateCompleter);
                accountBalanceGetter = (address, currency) => _balanceGetter(
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
                block: block,
                currentTime: DateTimeOffset.UtcNow,
                accountStateGetter: accountStateGetter,
                accountBalanceGetter: accountBalanceGetter,
                previousBlockStatesTrie: previousBlockStatesTrie);
            return _policyBlockAction is null
                ? txEvaluations
                : txEvaluations.Add(
                    EvaluatePolicyBlockAction(
                        block, txEvaluations, stateCompleters, previousBlockStatesTrie));
        }

        /// <summary>
        /// Executes every <see cref="IAction"/> in <see cref="Block{T}.Transactions"/>
        /// and gets result states of each step of every <see cref="Transaction{T}"/>.
        /// <para>It throws an <see cref="InvalidBlockException"/> or
        /// an <see cref="InvalidTxException"/> if there is any
        /// integrity error.</para>
        /// <para>Otherwise it enumerates an <see cref="ActionEvaluation"/>
        /// for each <see cref="IAction"/>.</para>
        /// </summary>
        /// <param name="block">A <see cref="Block{T}"/> instance to evaluate.</param>
        /// <param name="currentTime">The current time to validate
        /// time-wise conditions.</param>
        /// <param name="accountStateGetter">An <see cref="AccountStateGetter"/> delegate to get
        /// a previous state. This affects the execution of <see cref="Transaction{T}.Actions"/>.
        /// </param>
        /// <param name="accountBalanceGetter">An <see cref="AccountBalanceGetter"/> delegate to
        /// get previous account balance. This affects the execution of
        /// <see cref="Transaction{T}.Actions"/>.
        /// </param>
        /// <param name="previousBlockStatesTrie">The trie to contain states at previous block.
        /// </param>
        /// <returns>An <see cref="ActionEvaluation"/> for each
        /// <see cref="IAction"/>.</returns>
        /// <exception cref="InvalidBlockHashException">Thrown when
        /// the <paramref name="block.Hash"/> is invalid.</exception>
        /// <exception cref="InvalidBlockTimestampException">Thrown when
        /// the <paramref name="block.Timestamp"/> is invalid, for example, it is the far
        /// future than the given <paramref name="currentTime"/>.</exception>
        /// <exception cref="InvalidBlockIndexException">Thrown when
        /// the <paramref name="block.Index"/>is invalid, for example, it is a negative
        /// integer.</exception>
        /// <exception cref="InvalidBlockDifficultyException">Thrown when
        /// the <paramref name="block.Difficulty"/> is not properly configured,
        /// for example, it is too easy.</exception>
        /// <exception cref="InvalidBlockPreviousHashException">Thrown when
        /// <paramref name="block.PreviousHash"/> is invalid so that
        /// the <see cref="Block{T}"/>s are not continuous.</exception>
        /// <exception cref="InvalidBlockNonceException">Thrown when
        /// the <paramref name="block.Nonce"/> does not satisfy its
        /// <paramref name="block.Difficulty"/> level.</exception>
        /// <exception cref="InvalidBlockTxHashException">Thrown when
        /// the <paramref name="block.TxHash" /> does not match with its
        /// <paramref name="block.Transactions"/>.</exception>
        /// <exception cref="InvalidTxUpdatedAddressesException">Thrown when
        /// any <see cref="IAction"/> of <paramref name="block.Transactions"/> tries
        /// to update the states of <see cref="Address"/>es not included
        /// in <see cref="Transaction{T}.UpdatedAddresses"/>.</exception>
        /// <exception cref="InvalidTxSignatureException">Thrown when its
        /// <see cref="Transaction{T}.Signature"/> is invalid or not signed by
        /// the account who corresponds to its <see cref="PublicKey"/>.
        /// </exception>
        /// <exception cref="InvalidTxPublicKeyException">Thrown when its
        /// <see cref="Transaction{T}.Signer"/> is not derived from its
        /// <see cref="Transaction{T}.PublicKey"/>.</exception>
        [Pure]
        internal ImmutableList<ActionEvaluation> EvaluateBlock(
            Block<T> block,
            DateTimeOffset currentTime,
            AccountStateGetter accountStateGetter,
            AccountBalanceGetter accountBalanceGetter,
            ITrie? previousBlockStatesTrie = null)
        {
            // FIXME: Probably not the best place to have Validate().
            block.Validate(currentTime);

            IEnumerable<Tuple<Transaction<T>, ActionEvaluation>> txEvaluations =
                EvaluateTransactions(
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

        /// <summary>
        /// Executes every <see cref="IAction"/> in a given
        /// <see cref="Block{T}.Transactions"/> step by step, and emits a
        /// <see cref="Transaction{T}"/> and an <see cref="ActionEvaluation"/> as a pair
        /// for each step.
        /// </summary>
        /// <param name="block">A <see cref="Block{T}"/> instance to evaluate.</param>
        /// <param name="accountStateGetter">An <see cref="AccountStateGetter"/>
        /// delegate to get a previous state.</param>
        /// <param name="accountBalanceGetter">An <see cref="AccountBalanceGetter"/> delegate to
        /// get previous account balance.</param>
        /// <param name="previousBlockStatesTrie">The trie to contain states at previous block.
        /// </param>
        /// <returns>Enumerates pair of a transaction, and <see cref="ActionEvaluation"/>
        /// for each action.  The order of pairs are the same to
        /// the <paramref name="block.Transactions"/> and their <see cref="Transaction{T}.Actions"/>
        /// (e.g., tx&#xb9;-act&#xb9;, tx&#xb9;-act&#xb2;, tx&#xb2;-act&#xb9;, tx&#xb2;-act&#xb2;,
        /// &#x2026;).
        /// <para>If a <see cref="Transaction{T}"/> has multiple
        /// <see cref="Transaction{T}.Actions"/>, each <see cref="ActionEvaluation"/> includes
        /// all previous <see cref="ActionEvaluation"/>s' delta in the same
        /// <see cref="Transaction{T}"/> besides its own delta.</para>
        /// <para>Note that each <see cref="IActionContext.Random"/> object has a unconsumed state.
        /// </para>
        /// </returns>
        [Pure]
        internal IEnumerable<Tuple<Transaction<T>, ActionEvaluation>> EvaluateTransactions(
            Block<T> block,
            AccountStateGetter accountStateGetter,
            AccountBalanceGetter accountBalanceGetter,
            ITrie? previousBlockStatesTrie = null)
        {
            IAccountStateDelta delta;
            foreach (Transaction<T> tx in block.Transactions)
            {
                delta = block.ProtocolVersion > 0
                    ? new AccountStateDeltaImpl(accountStateGetter, accountBalanceGetter, tx.Signer)
                    : new AccountStateDeltaImplV0(
                        accountStateGetter, accountBalanceGetter, tx.Signer);
                IEnumerable<ActionEvaluation> evaluations = EvaluateTransaction(
                    tx: tx,
                    preEvaluationHash: block.PreEvaluationHash,
                    blockIndex: block.Index,
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

        [Pure]
        internal IEnumerable<ActionEvaluation> EvaluateTransaction(
            Transaction<T> tx,
            BlockHash preEvaluationHash,
            long blockIndex,
            IAccountStateDelta previousStates,
            Address minerAddress,
            bool rehearsal = false,
            ITrie? previousBlockStatesTrie = null)
        {
            return EvaluateActionsGradually(
                preEvaluationHash: preEvaluationHash,
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

        [Pure]
        internal ActionEvaluation EvaluatePolicyBlockAction(
            Block<T> block,
            IReadOnlyList<ActionEvaluation> txActionEvaluations,
            StateCompleterSet<T> stateCompleters,
            ITrie? previousBlockStatesTrie)
        {
            if (_policyBlockAction is null)
            {
                var message =
                    "To evaluate policy block action, " +
                    "_policyBlockAction must not be null.";
                throw new InvalidOperationException(message);
            }

            _logger.Debug(
                $"Evaluating block action in block {block.Index}: {block.Hash}");

            IAccountStateDelta lastStates;
            Address miner = block.Miner.GetValueOrDefault();

            if (txActionEvaluations.Count > 0)
            {
                lastStates = txActionEvaluations[txActionEvaluations.Count - 1].OutputStates;
            }
            else if (block.PreviousHash is null)
            {
                lastStates = block.ProtocolVersion > 0
                    ? new AccountStateDeltaImpl(
                        _defaultAccountStateGetter, _defaultAccountBalanceGetter, miner)
                    : new AccountStateDeltaImplV0(
                        _defaultAccountStateGetter, _defaultAccountBalanceGetter, miner);
            }
            else
            {
                AccountStateGetter accountStateGetter = address =>
                    _stateGetter(address, block.PreviousHash, stateCompleters.StateCompleter);
                AccountBalanceGetter accountBalanceGetter = (address, currency) =>
                    _balanceGetter(
                        address,
                        currency,
                        block.PreviousHash,
                        stateCompleters.FungibleAssetStateCompleter);
                lastStates = block.ProtocolVersion > 0
                    ? new AccountStateDeltaImpl(accountStateGetter, accountBalanceGetter, miner)
                    : new AccountStateDeltaImplV0(accountStateGetter, accountBalanceGetter, miner);
            }

            return EvaluateActionsGradually(
                preEvaluationHash: block.PreEvaluationHash,
                blockIndex: block.Index,
                txid: null,
                previousStates: lastStates,
                minerAddress: miner,
                signer: miner,
                signature: Array.Empty<byte>(),
                actions: new[] { _policyBlockAction }.ToImmutableList(),
                rehearsal: false,
                previousBlockStatesTrie: previousBlockStatesTrie,
                blockAction: true).First();
        }
    }
}
