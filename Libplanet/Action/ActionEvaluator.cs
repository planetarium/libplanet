#nullable enable
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Security.Cryptography;
using Libplanet.Assets;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;
using Libplanet.Store.Trie;
using Libplanet.Tx;
using Serilog;

namespace Libplanet.Action
{
    public class ActionEvaluator<T>
        where T : IAction, new()
    {
        internal static readonly StateGetter<T> NullStateGetter =
            (address, hashDigest, stateCompleter) => null;

        internal static readonly BalanceGetter<T> NullBalanceGetter =
            (address, currency, hashDigest, fungibleAssetStateCompleter)
                => new FungibleAssetValue(currency);

        internal static readonly AccountStateGetter NullAccountStateGetter = address => null;
        internal static readonly AccountBalanceGetter NullAccountBalanceGetter =
            (address, currency) => new FungibleAssetValue(currency);

        // FIXME: Although used for dummy context, this can be confusing.
        internal static readonly Block<T> NullBlock = new Block<T>(
            index: 0,
            difficulty: 0,
            totalDifficulty: 0,
            nonce: new Nonce(new byte[0]),
            miner: null,
            previousHash: null,
            timestamp: DateTimeOffset.UtcNow,
            transactions: ImmutableArray<Transaction<T>>.Empty);

        private readonly ILogger _logger;
        private readonly IAction? _policyBlockAction;
        private readonly StateGetter<T> _stateGetter;
        private readonly BalanceGetter<T> _balanceGetter;
        private readonly Func<BlockHash, ITrie>? _trieGetter;

        public ActionEvaluator(
            IAction? policyBlockAction,
            StateGetter<T> stateGetter,
            BalanceGetter<T> balanceGetter,
            Func<BlockHash, ITrie>? trieGetter)
        {
            _logger = Log.ForContext<ActionEvaluator<T>>();
            _policyBlockAction = policyBlockAction;
            _stateGetter = stateGetter;
            _balanceGetter = balanceGetter;
            _trieGetter = trieGetter;
        }

        /// <summary>
        /// The main entry point for evaluating a <see cref="Block{T}"/>.
        /// </summary>
        /// <param name="block">The <see cref="Block{T}"/> to evaluate.</param>
        /// <param name="stateCompleterSet">The <see cref="StateCompleterSet{T}"/> to use.</param>
        /// <returns> The result of evaluating every <see cref="IAction"/> related to
        /// <paramref name="block"/> as an <see cref="IReadOnlyList{T}"/> of
        /// <see cref="ActionEvaluation"/>s.</returns>
        /// <remarks>
        /// <para>Publicly exposed for benchmarking.</para>
        /// <para>First evaluates all <see cref="IAction"/>s in <see cref="Block{T}.Transactions"/>
        /// of <paramref name="block"/> and appends the evaluation of
        /// <see cref="_policyBlockAction"/> at the end.</para>
        /// </remarks>
        /// <seealso cref="EvaluateBlock"/>
        /// <seealso cref="EvaluatePolicyBlockAction"/>
        [Pure]
        public IReadOnlyList<ActionEvaluation> Evaluate(
            Block<T> block,
            StateCompleterSet<T> stateCompleterSet)
        {
            ITrie? previousBlockStatesTrie = !(_trieGetter is null) && block.PreviousHash is { } h
                ? _trieGetter(h)
                : null;
            IAccountStateDelta previousStates =
                GetPreviousBlockOutputStates(block, stateCompleterSet);

            ImmutableList<ActionEvaluation> evaluations = EvaluateBlock(
                block: block,
                currentTime: DateTimeOffset.UtcNow,
                previousStates: previousStates,
                previousBlockStatesTrie: previousBlockStatesTrie).ToImmutableList();

            if (_policyBlockAction is null)
            {
                return evaluations;
            }
            else
            {
                previousStates = evaluations.Count > 0
                    ? evaluations.Last().OutputStates
                    : previousStates;
                return evaluations.Add(
                    EvaluatePolicyBlockAction(
                        block: block,
                        previousStates: previousStates,
                        previousBlockStatesTrie: previousBlockStatesTrie));
            }
        }

        /// <summary>
        /// Retrieves the set of <see cref="Address"/>es that will be updated when
        /// a given <see cref="Transaction{T}"/> is evaluated.
        /// </summary>
        /// <param name="tx">The <see cref="Transaction{T}"/> to evaluate.</param>
        /// <returns>An <see cref="IImmutableSet{T}"/> of updated <see cref="Address"/>es.
        /// </returns>
        /// <remarks>
        /// A mock evaluation is performed on <paramref name="tx"/> using a mock
        /// <see cref="Block{T}"/> for its evaluation context and a mock
        /// <see cref="IAccountStateDelta"/> as its previous state to obtain the
        /// <see cref="IImmutableSet{T}"/> of updated <see cref="Address"/>es.
        /// </remarks>
        internal static IImmutableSet<Address> GetUpdatedAddresses(Transaction<T> tx)
        {
            IAccountStateDelta previousStates = new AccountStateDeltaImpl(
                NullAccountStateGetter,
                NullAccountBalanceGetter,
                tx.Signer);
            IEnumerable<ActionEvaluation> evaluations = ActionEvaluator<T>.EvaluateActions(
                preEvaluationHash: NullBlock.PreEvaluationHash,
                blockIndex: NullBlock.Index,
                txid: tx.Id,
                previousStates: previousStates,
                miner: NullBlock.Miner.GetValueOrDefault(),
                signer: tx.Signer,
                signature: tx.Signature,
                actions: tx.Actions.Cast<IAction>().ToImmutableList(),
                rehearsal: true,
                previousBlockStatesTrie: null);

            if (evaluations.Any())
            {
                return evaluations.Last().OutputStates.UpdatedAddresses;
            }
            else
            {
                return previousStates.UpdatedAddresses;
            }
        }

        /// <summary>
        /// Executes <see cref="IAction"/>s in <paramref name="actions"/>.
        /// </summary>
        /// <param name="preEvaluationHash">The <see cref="Block{T}.PreEvaluationHash"/> of
        /// the <see cref="Block{T}"/> that <paramref name="actions"/> belong to.</param>
        /// <param name="blockIndex">The <see cref="Block{T}.Index"/> of the <see cref="Block{T}"/>
        /// that <paramref name="actions"/> belong to.</param>
        /// <param name="txid">The <see cref="Transaction{T}.Id"/> of the
        /// <see cref="Transaction{T}"/> that <paramref name="actions"/> belong to.
        /// This can be <c>null</c> on rehearsal mode or if an <see cref="IAction"/> is a
        /// <see cref="IBlockPolicy{T}.BlockAction"/>.</param>
        /// <param name="previousStates">The states immediately before <paramref name="actions"/>
        /// being executed.  Note that <see cref="IAccountStateDelta.UpdatedAddresses"/> of
        /// <paramref name="previousStates"/> are remained to the returned next states.</param>
        /// <param name="miner">An address of block miner.</param>
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
        internal static IEnumerable<ActionEvaluation> EvaluateActions(
            BlockHash preEvaluationHash,
            long blockIndex,
            TxId? txid,
            IAccountStateDelta previousStates,
            Address miner,
            Address signer,
            byte[] signature,
            IImmutableList<IAction> actions,
            bool rehearsal = false,
            ITrie? previousBlockStatesTrie = null,
            bool blockAction = false)
        {
            ActionContext CreateActionContext(IAccountStateDelta prevStates, int randomSeed)
            {
                return new ActionContext(
                    signer: signer,
                    txid: txid,
                    miner: miner,
                    blockIndex: blockIndex,
                    previousStates: prevStates,
                    randomSeed: randomSeed,
                    rehearsal: rehearsal,
                    previousBlockStatesTrie: previousBlockStatesTrie,
                    blockAction: blockAction);
            }

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
                        const string logMsg =
                            "The action {Action} (block #{BlockIndex}, pre-evaluation hash " +
                            "{PreEvaluationHash}, tx {TxId}, previous state root hash " +
                            "{StateRootHash}) threw an exception during execution:\n" +
                            "{InnerException}";
                        logger.Error(
                            e,
                            logMsg,
                            action,
                            blockIndex,
                            preEvaluationHash,
                            txid,
                            stateRootHash,
                            e);
                        var msg =
                            $"The action {action} (block #{blockIndex}, " +
                            $"pre-evaluation hash {preEvaluationHash}, tx {txid}, " +
                            $"previous state root hash {stateRootHash}) threw " +
                            "an exception during execution.  " +
                            "See also this exception's InnerException property.";
                        logger.Error("{Message}\nInnerException: {ExcMessage}", msg, e.Message);
                        exc = new UnexpectedlyTerminatedActionException(
                            preEvaluationHash, blockIndex, txid, stateRootHash, action, msg, e);
                    }
                }

                // As IActionContext.Random is stateful, we cannot reuse
                // the context which is once consumed by Execute().
                ActionContext equivalentContext = CreateActionContext(states, seed);

                yield return new ActionEvaluation(
                    action: action,
                    inputContext: equivalentContext,
                    outputStates: nextStates,
                    exception: exc);

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
        /// Evaluates <see cref="IAction"/>s in <see cref="Block{T}.Transactions"/>
        /// of a given <see cref="Block{T}"/>.
        /// </summary>
        /// <param name="block">The <see cref="Block{T}"/> to evaluate.</param>
        /// <param name="currentTime">The current time to validate time-wise conditions.</param>
        /// <param name="previousStates">The states immediately before an execution of any
        /// <see cref="IAction"/>s.  Note that its <see cref="IAccountStateDelta.UpdatedAddresses"/>
        /// are remained to the returned next states.</param>
        /// <param name="previousBlockStatesTrie">The <see cref="ITrie"/> containing the states
        /// at the previous block of <paramref name="block"/>.</param>
        /// <returns>An <see cref="IEnumerable{T}"/> of <see cref="ActionEvaluation"/>s
        /// where each <see cref="ActionEvaluation"/> is the evaluation of an <see cref="IAction"/>.
        /// </returns>
        /// <remarks>
        /// This passes on an <see cref="InvalidBlockException"/> or an
        /// <see cref="InvalidTxException"/> thrown by a call to <see cref="Block{T}.Validate"/>
        /// of <paramref name="block"/>.
        /// </remarks>
        /// <exception cref="InvalidTxUpdatedAddressesException">Thrown when any
        /// <see cref="IAction"/> in <see cref="Block{T}.Transactions"/> of <paramref name="block"/>
        /// tries to update the states of <see cref="Address"/>es not included in
        /// <see cref="Transaction{T}.UpdatedAddresses"/>.</exception>
        /// <seealso cref="Block{T}.Validate"/>
        /// <seealso cref="EvaluateTxs"/>
        [Pure]
        internal IEnumerable<ActionEvaluation> EvaluateBlock(
            Block<T> block,
            DateTimeOffset currentTime,
            IAccountStateDelta previousStates,
            ITrie? previousBlockStatesTrie = null)
        {
            // FIXME: Probably not the best place to have Validate().
            block.Validate(currentTime);

            return EvaluateTxs(
                block: block,
                previousStates: previousStates,
                previousBlockStatesTrie: previousBlockStatesTrie);
        }

        /// <summary>
        /// Evaluates every <see cref="IAction"/> in <see cref="Block{T}.Transactions"/> of
        /// a given <see cref="Block{T}"/>.
        /// </summary>
        /// <param name="block">The <see cref="Block{T}"/> instance to evaluate.</param>
        /// <param name="previousStates">The states immediately before any <see cref="IAction"/>s
        /// being evaluated.  Note that its <see cref="IAccountStateDelta.UpdatedAddresses"/>
        /// are remained to the returned next states.</param>
        /// <param name="previousBlockStatesTrie">The trie to contain states at previous block.
        /// </param>
        /// <returns>Enumerates an <see cref="ActionEvaluation"/> for each action where
        /// the order is determined by <see cref="Block{T}.Transactions"/> of
        /// <paramref name="block"/> and each respective <see cref="Transaction{T}.Actions"/>.
        /// </returns>
        [Pure]
        internal IEnumerable<ActionEvaluation> EvaluateTxs(
            Block<T> block,
            IAccountStateDelta previousStates,
            ITrie? previousBlockStatesTrie = null)
        {
            IAccountStateDelta delta = previousStates;
            foreach (Transaction<T> tx in block.Transactions)
            {
                delta = block.ProtocolVersion > 0
                    ? new AccountStateDeltaImpl(delta.GetState, delta.GetBalance, tx.Signer)
                    : new AccountStateDeltaImplV0(delta.GetState, delta.GetBalance, tx.Signer);
                IEnumerable<ActionEvaluation> evaluations = EvaluateTx(
                    block: block,
                    tx: tx,
                    previousStates: delta,
                    rehearsal: false,
                    previousBlockStatesTrie: previousBlockStatesTrie);
                foreach (var evaluation in evaluations)
                {
                    yield return evaluation;
                    delta = evaluation.OutputStates;
                }
            }
        }

        /// <summary>
        /// Evaluates <see cref="Transaction{T}.Actions"/> of a given <see cref="Transaction{T}"/>.
        /// </summary>
        /// <param name="block">The <see cref="Block{T}"/> instance that <paramref name="tx"/>
        /// belongs to.</param>
        /// <param name="tx">A <see cref="Transaction{T}"/> instance to evaluate.</param>
        /// <param name="previousStates">The states immediately before
        /// <see cref="Transaction{T}.Actions"/> of <paramref name="tx"/> being executed.
        /// Note that its <see cref="IAccountStateDelta.UpdatedAddresses"/> are remained
        /// to the returned next states.</param>
        /// <param name="rehearsal">Pass <c>true</c> if it is intended
        /// to be dry-run (i.e., the returned result will be never used).
        /// The default value is <c>false</c>.</param>
        /// <param name="previousBlockStatesTrie">The trie to contain states at previous block.
        /// </param>
        /// <returns>An <see cref="IEnumerable{T}"/> of <see cref="ActionEvaluation"/>s for each
        /// <see cref="IAction"/> in <see cref="Transaction{T}.Actions"/> of <paramref name="tx"/>
        /// where the order of <see cref="ActionEvaluation"/>s is the same as the corresponding
        /// <see cref="Transaction{T}.Actions"/>.</returns>
        /// <remarks>
        /// <para>If only the final states are needed, use <see cref="EvaluateTxResult"/> instead.
        /// </para>
        /// <para>If a <see cref="Transaction{T}.Actions"/> of <paramref name="tx"/> has more than
        /// one <see cref="IAction"/>s, each <see cref="ActionEvaluation"/> includes all previous
        /// <see cref="ActionEvaluation"/>s' delta besides its own delta.</para>
        /// </remarks>
        /// <seealso cref="EvaluateTxResult"/>
        [Pure]
        internal IEnumerable<ActionEvaluation> EvaluateTx(
            Block<T> block,
            Transaction<T> tx,
            IAccountStateDelta previousStates,
            bool rehearsal = false,
            ITrie? previousBlockStatesTrie = null)
        {
            IEnumerable<ActionEvaluation> evaluations = EvaluateActions(
                preEvaluationHash: block.PreEvaluationHash,
                blockIndex: block.Index,
                txid: tx.Id,
                previousStates: previousStates,
                miner: block.Miner.GetValueOrDefault(),
                signer: tx.Signer,
                signature: tx.Signature,
                actions: tx.Actions.Cast<IAction>().ToImmutableList(),
                rehearsal: rehearsal,
                previousBlockStatesTrie: previousBlockStatesTrie);
            foreach (var evaluation in evaluations)
            {
                if (!tx.UpdatedAddresses.IsSupersetOf(evaluation.OutputStates.UpdatedAddresses))
                {
                    const string msg =
                        "Actions in the transaction try to update " +
                        "the addresses not granted.";
                    throw new InvalidTxUpdatedAddressesException(
                        tx.Id, tx.UpdatedAddresses, evaluation.OutputStates.UpdatedAddresses, msg);
                }

                yield return evaluation;
            }
        }

        /// <summary>
        /// Evaluates <see cref="Transaction{T}.Actions"/> of a given
        /// <see cref="Transaction{T}"/> and gets the resulting states.
        /// </summary>
        /// <param name="block">The <see cref="Block{T}"/> that <paramref name="tx"/>
        /// belongs to.</param>
        /// <param name="tx">The <see cref="Transaction{T}"/> to evaluate.</param>
        /// <param name="previousStates">The states immediately before evaluating
        /// <paramref name="tx"/>.  Note that its <see cref="IAccountStateDelta.UpdatedAddresses"/>
        /// are remained to the returned next states.</param>
        /// <param name="rehearsal">Pass <c>true</c> if it is intended
        /// to be a dry-run (i.e., the returned result will be never used).
        /// The default value is <c>false</c>.</param>
        /// <returns>The resulting states of evaluating the <see cref="IAction"/>s in
        /// <see cref="Transaction{T}.Actions"/> of <paramref name="tx"/>.  Note that it maintains
        /// <see cref="IAccountStateDelta.UpdatedAddresses"/> of the given
        /// <paramref name="previousStates"/> as well.</returns>
        [Pure]
        internal IAccountStateDelta EvaluateTxResult(
            Block<T> block,
            Transaction<T> tx,
            IAccountStateDelta previousStates,
            bool rehearsal = false)
        {
            ImmutableList<ActionEvaluation> evaluations = EvaluateTx(
                block: block,
                tx: tx,
                previousStates: previousStates,
                rehearsal: rehearsal).ToImmutableList();

            if (evaluations.Count > 0)
            {
                return evaluations.Last().OutputStates;
            }
            else
            {
                return previousStates;
            }
        }

        /// <summary>
        /// Evaluates the <see cref="IBlockPolicy{T}.BlockAction"/> set by the policy when
        /// this <see cref="ActionEvaluator{T}"/> was instantiated for a given
        /// <see cref="Block{T}"/>.
        /// </summary>
        /// <param name="block">The <see cref="Block{T}"/> instance to evaluate.</param>
        /// <param name="previousStates">The states immediately before the evaluation of
        /// <see cref="_policyBlockAction"/>.</param>
        /// <param name="previousBlockStatesTrie">The trie to contain states at previous block.
        /// </param>
        /// <returns>The <see cref="ActionEvaluation"/> of evaluating
        /// <see cref="_policyBlockAction"/> for the <paramref name="block"/>.</returns>
        [Pure]
        internal ActionEvaluation EvaluatePolicyBlockAction(
            Block<T> block,
            IAccountStateDelta previousStates,
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
                $"Evaluating policy block action for block #{block.Index} " +
                $"{block.PreEvaluationHash}");

            return EvaluateActions(
                preEvaluationHash: block.PreEvaluationHash,
                blockIndex: block.Index,
                txid: null,
                previousStates: previousStates,
                miner: block.Miner.GetValueOrDefault(),
                signer: block.Miner.GetValueOrDefault(),
                signature: Array.Empty<byte>(),
                actions: new[] { _policyBlockAction }.ToImmutableList(),
                rehearsal: false,
                previousBlockStatesTrie: previousBlockStatesTrie,
                blockAction: true).Single();
        }

        /// <summary>
        /// Retrieves the last previous states for the previous block of <paramref name="block"/>.
        /// </summary>
        /// <param name="block">The <see cref="Block{T}"/> instance to reference.</param>
        /// <param name="stateCompleterSet">The <see cref="StateCompleterSet{T}"/> to use.</param>
        /// <returns>The last previous <see cref="IAccountStateDelta"/> for the previous
        /// <see cref="Block{T}"/>.
        /// </returns>
        private IAccountStateDelta GetPreviousBlockOutputStates(
            Block<T> block,
            StateCompleterSet<T> stateCompleterSet)
        {
            (AccountStateGetter accountStateGetter, AccountBalanceGetter accountBalanceGetter) =
                InitializeAccountGettersPair(block, stateCompleterSet);
            Address miner = block.Miner.GetValueOrDefault();

            return block.ProtocolVersion > 0
                ? new AccountStateDeltaImpl(accountStateGetter, accountBalanceGetter, miner)
                : new AccountStateDeltaImplV0(accountStateGetter, accountBalanceGetter, miner);
        }

        private (AccountStateGetter, AccountBalanceGetter) InitializeAccountGettersPair(
            Block<T> block,
            StateCompleterSet<T> stateCompleterSet)
        {
            AccountStateGetter accountStateGetter;
            AccountBalanceGetter accountBalanceGetter;

            if (block.PreviousHash is { } previousHash)
            {
                accountStateGetter = address => _stateGetter(
                    address,
                    previousHash,
                    stateCompleterSet.StateCompleter);
                accountBalanceGetter = (address, currency) => _balanceGetter(
                    address,
                    currency,
                    previousHash,
                    stateCompleterSet.FungibleAssetStateCompleter);
            }
            else
            {
                accountStateGetter = NullAccountStateGetter;
                accountBalanceGetter = NullAccountBalanceGetter;
            }

            return (accountStateGetter, accountBalanceGetter);
        }
    }
}
