#nullable enable
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Numerics;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Assets;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;
using Libplanet.Store.Trie;
using Libplanet.Tx;
using Serilog;

namespace Libplanet.Action
{
    /// <summary>
    /// Class responsible for handling of <see cref="IAction"/> evaluations.
    /// </summary>
    /// <typeparam name="T">An <see cref="IAction"/> type.  It should match
    /// the <see cref="Block{T}"/>'s type parameter.</typeparam>
    public class ActionEvaluator<T>
        where T : IAction, new()
    {
        private readonly ILogger _logger;
        private readonly IAction? _policyBlockAction;
        private readonly IBlockChainStates<T> _blockChainStates;
        private readonly Func<BlockHash, ITrie>? _trieGetter;

        /// <summary>
        /// Creates a new <see cref="ActionEvaluator{T}"/>.
        /// </summary>
        /// <param name="policyBlockAction">The <see cref="IAction"/> provided by
        /// <see cref="IBlockPolicy{T}.BlockAction"/> to evaluate at the end for each
        /// <see cref="Block{T}"/> that gets evaluated.</param>
        /// <param name="blockChainStates">The <see cref="IBlockChainStates{T}"/> to use to retrieve
        /// the states for a provided <see cref="Address"/>.</param>
        /// <param name="trieGetter">The function to retrieve a trie for
        /// a provided <see cref="BlockHash"/>.</param>
        public ActionEvaluator(
            IAction? policyBlockAction,
            IBlockChainStates<T> blockChainStates,
            Func<BlockHash, ITrie>? trieGetter)
        {
            _logger = Log.ForContext<ActionEvaluator<T>>();
            _policyBlockAction = policyBlockAction;
            _blockChainStates = blockChainStates;
            _trieGetter = trieGetter;
        }

        /// <summary>
        /// The main entry point for evaluating a <see cref="Block{T}"/>.
        /// </summary>
        /// <param name="block">The block to evaluate.</param>
        /// <param name="stateCompleterSet">The <see cref="StateCompleterSet{T}"/> to use.</param>
        /// <returns> The result of evaluating every <see cref="IAction"/> related to
        /// <paramref name="block"/> as an <see cref="IReadOnlyList{T}"/> of
        /// <see cref="ActionEvaluation"/>s.</returns>
        /// <remarks>
        /// <para>Publicly exposed for benchmarking.</para>
        /// <para>First evaluates all <see cref="IAction"/>s in <see cref="Block{T}.Transactions"/>
        /// of <paramref name="block"/> and appends the evaluation of
        /// the <see cref="IBlockPolicy{T}.BlockAction"/> held by the instance at the end.</para>
        /// </remarks>
        [Pure]
        public IReadOnlyList<ActionEvaluation> Evaluate(
            IPreEvaluationBlock<T> block,
            StateCompleterSet<T> stateCompleterSet)
        {
            ITrie? previousBlockStatesTrie = !(_trieGetter is null) && block.PreviousHash is { } h
                ? _trieGetter(h)
                : null;
            IAccountStateDelta previousStates =
                GetPreviousBlockOutputStates(block, stateCompleterSet);

            ImmutableList<ActionEvaluation> evaluations = EvaluateBlock(
                block: block,
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

        [Pure]
        internal static IReadOnlyList<IValue?> NullAccountStateGetter(
            IReadOnlyList<Address> addresses
        ) =>
            new IValue?[addresses.Count];

        [Pure]
        internal static FungibleAssetValue NullAccountBalanceGetter(
            Address address,
            Currency currency
        ) =>
            currency * 0;

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
            IEnumerable<ActionEvaluation> evaluations = EvaluateActions(
                preEvaluationHash: ImmutableArray<byte>.Empty,
                blockIndex: default,
                txid: tx.Id,
                previousStates: previousStates,
                miner: default,
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
        /// Executes <see cref="IAction"/>s in <paramref name="actions"/>.  All other evaluation
        /// calls resolve to this method.
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
        /// being executed.</param>
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
        /// <param name="logger">An optional logger.</param>
        /// <returns>An enumeration of <see cref="ActionEvaluation"/>s for each
        /// <see cref="IAction"/> in <paramref name="actions"/>.
        /// </returns>
        /// <remarks>
        /// <para>Each <see cref="IActionContext.Random"/> object has an unconsumed state.</para>
        /// <para>
        /// The returned enumeration has the following properties:
        /// <list type="bullet">
        /// <item><description>The first <see cref="ActionEvaluation"/> in the enumerated result,
        /// if any, has <see cref="ActionEvaluation.OutputStates"/> with
        /// <see cref="IAccountStateDelta.UpdatedAddresses"/> that is a
        /// superset of <paramref name="previousStates"/>'s
        /// <see cref="IAccountStateDelta.UpdatedAddresses"/>.</description></item>
        /// <item><description>Each <see cref="ActionEvaluation"/> in the enumerated result
        /// has <see cref="ActionEvaluation.OutputStates"/> with
        /// <see cref="IAccountStateDelta.UpdatedAddresses"/> that is a super set
        /// of the previous one, if any.</description></item>
        /// </list>
        /// </para>
        /// </remarks>
        [Pure]
        internal static IEnumerable<ActionEvaluation> EvaluateActions(
            ImmutableArray<byte> preEvaluationHash,
            long blockIndex,
            TxId? txid,
            IAccountStateDelta previousStates,
            Address miner,
            Address signer,
            byte[] signature,
            IImmutableList<IAction> actions,
            bool rehearsal = false,
            ITrie? previousBlockStatesTrie = null,
            bool blockAction = false,
            ILogger? logger = null)
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

            byte[] preEvaluationHashBytes = preEvaluationHash.ToBuilder().ToArray();
            int seed =
                (preEvaluationHashBytes.Length > 0
                    ? BitConverter.ToInt32(preEvaluationHashBytes, 0) : 0)
                ^ (signature.Any() ? BitConverter.ToInt32(hashedSignature, 0) : 0);

            IAccountStateDelta states = previousStates;
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
                    logger?.Verbose($"{action} execution spent {spent.TotalMilliseconds} ms.");
                }
                catch (OutOfMemoryException e)
                {
                    // Because OutOfMemory is thrown non-deterministically depending on the state
                    // of the node, we should throw without further handling.
                    var message =
                        "Action {Action} of tx {TxId} of block #{BlockIndex} with " +
                        "pre-evaluation hash {PreEvaluationHash} threw an exception " +
                        "during execution.";
                    logger?.Error(
                        e,
                        message,
                        action,
                        txid,
                        blockIndex,
                        ByteUtil.Hex(preEvaluationHash));
                    throw;
                }
                catch (Exception e)
                {
                    if (rehearsal)
                    {
                        var message =
                            $"The action {action} threw an exception during its " +
                            "rehearsal.  It is probably because the logic of the " +
                            $"action {action} is not enough generic so that it " +
                            "can cover every case including rehearsal mode.\n" +
                            "The IActionContext.Rehearsal property also might be " +
                            "useful to make the action can deal with the case of " +
                            "rehearsal mode.\n" +
                            "See also this exception's InnerException property.";
                        exc = new UnexpectedlyTerminatedActionException(
                            null, null, null, null, action, message, e);
                    }
                    else
                    {
                        var stateRootHash = context.PreviousStateRootHash;
                        var message =
                            "Action {Action} of tx {TxId} of block #{BlockIndex} with " +
                            "pre-evaluation hash {PreEvaluationHash} and previous " +
                            "state root hash {StateRootHash} threw an exception " +
                            "during execution.";
                        logger?.Error(
                            e,
                            message,
                            action,
                            txid,
                            blockIndex,
                            ByteUtil.Hex(preEvaluationHash),
                            stateRootHash);
                        var innerMessage =
                            $"The action {action} (block #{blockIndex}, " +
                            $"pre-evaluation hash {ByteUtil.Hex(preEvaluationHash)}, tx {txid}, " +
                            $"previous state root hash {stateRootHash}) threw " +
                            "an exception during execution.  " +
                            "See also this exception's InnerException property.";
                        logger?.Error(
                            "{Message}\nInnerException: {ExcMessage}", innerMessage, e.Message);
                        exc = new UnexpectedlyTerminatedActionException(
                            preEvaluationHash,
                            blockIndex,
                            txid,
                            stateRootHash,
                            action,
                            innerMessage,
                            e);
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
        /// Deterministically shuffles <paramref name="txs"/> for evaluation using
        /// <paramref name="preEvaluationHash"/> as a random seed.
        /// </summary>
        /// <param name="protocolVersion">The <see cref="Block{T}.ProtocolVersion"/> that
        /// <paramref name="txs"/> belong to.</param>
        /// <param name="txs">The list of <see cref="Transaction{T}"/>s to shuffle.</param>
        /// <param name="preEvaluationHash">The <see cref="Block{T}.PreEvaluationHash"/> to use
        /// as a random seed when shuffling.</param>
        /// <returns>An <see cref="IEnumerable{T}"/> of <see cref="Transaction{T}"/>s in evaluation
        /// order with the following properties:
        /// <list type="bullet">
        /// <item><see cref="Transaction{T}"/>s with the same <see cref="Transaction{T}.Signer"/>
        /// value appear consecutive in the list.</item>
        /// <item><see cref="Transaction{T}"/>s with the same <see cref="Transaction{T}.Signer"/>
        /// value are ordered by <see cref="Transaction{T}.Nonce"/> value in ascending order.</item>
        /// </list>
        /// </returns>
        /// <remarks>
        /// This is to prevent an attempt to gain a first move advantage by participants.
        /// </remarks>
        [Pure]
        internal static IEnumerable<Transaction<T>> OrderTxsForEvaluation(
            int protocolVersion,
            IEnumerable<Transaction<T>> txs,
            ImmutableArray<byte> preEvaluationHash)
        {
            return protocolVersion >= 3
                ? OrderTxsForEvaluationV3(txs, preEvaluationHash)
                : OrderTxsForEvaluationV0(txs, preEvaluationHash);
        }

        /// <summary>
        /// Evaluates <see cref="IAction"/>s in <see cref="IBlockContent{T}.Transactions"/>
        /// of a given <see cref="Block{T}"/>.
        /// </summary>
        /// <param name="block">The block to evaluate.</param>
        /// <param name="previousStates">The states immediately before an execution of any
        /// <see cref="IAction"/>s.</param>
        /// <param name="previousBlockStatesTrie">The <see cref="ITrie"/> containing the states
        /// at the previous block of <paramref name="block"/>.</param>
        /// <returns>An <see cref="IEnumerable{T}"/> of <see cref="ActionEvaluation"/>s
        /// where each <see cref="ActionEvaluation"/> is the evaluation of an <see cref="IAction"/>.
        /// </returns>
        /// <seealso cref="EvaluateTxs"/>
        [Pure]
        internal IEnumerable<ActionEvaluation> EvaluateBlock(
            IPreEvaluationBlock<T> block,
            IAccountStateDelta previousStates,
            ITrie? previousBlockStatesTrie = null)
        =>
            EvaluateTxs(
                block: block,
                previousStates: previousStates,
                previousBlockStatesTrie: previousBlockStatesTrie);

        /// <summary>
        /// Evaluates every <see cref="IAction"/> in <see cref="IBlockContent{T}.Transactions"
        /// /> of a given <see cref="IPreEvaluationBlock{T}"/>.
        /// </summary>
        /// <param name="block">The block to evaluate.</param>
        /// <param name="previousStates">The states immediately before any <see cref="IAction"/>s
        /// being evaluated.</param>
        /// <param name="previousBlockStatesTrie">The trie to contain states at previous block.
        /// </param>
        /// <returns>Enumerates an <see cref="ActionEvaluation"/> for each action where
        /// the order is determined by <see cref="IBlockContent{T}.Transactions"/> of
        /// <paramref name="block"/> and each respective <see cref="Transaction{T}.Actions"/>.
        /// </returns>
        [Pure]
        internal IEnumerable<ActionEvaluation> EvaluateTxs(
            IPreEvaluationBlock<T> block,
            IAccountStateDelta previousStates,
            ITrie? previousBlockStatesTrie = null)
        {
            IAccountStateDelta delta = previousStates;
            IEnumerable<Transaction<T>> orderedTxs = OrderTxsForEvaluation(
                block.ProtocolVersion,
                block.Transactions,
                block.PreEvaluationHash
            ).WithMeasuringTime(
                sw => _logger.Verbose(
                    "Took {ElapsedMilliseconds}ms to order transactions.",
                    sw.ElapsedMilliseconds
                )
            );
            foreach (Transaction<T> tx in orderedTxs)
            {
                delta = block.ProtocolVersion > 0
                    ? new AccountStateDeltaImpl(delta.GetStates, delta.GetBalance, tx.Signer)
                    : new AccountStateDeltaImplV0(delta.GetStates, delta.GetBalance, tx.Signer);
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
        /// <param name="block">The block that <paramref name="tx"/> belongs to.</param>
        /// <param name="tx">A <see cref="Transaction{T}"/> instance to evaluate.</param>
        /// <param name="previousStates">The states immediately before
        /// <see cref="Transaction{T}.Actions"/> of <paramref name="tx"/> being executed.</param>
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
            IPreEvaluationBlock<T> block,
            Transaction<T> tx,
            IAccountStateDelta previousStates,
            bool rehearsal = false,
            ITrie? previousBlockStatesTrie = null) => EvaluateActions(
                preEvaluationHash: block.PreEvaluationHash,
                blockIndex: block.Index,
                txid: tx.Id,
                previousStates: previousStates,
                miner: block.Miner,
                signer: tx.Signer,
                signature: tx.Signature,
                actions: tx.Actions.Cast<IAction>().ToImmutableList(),
                rehearsal: rehearsal,
                previousBlockStatesTrie: previousBlockStatesTrie);

        /// <summary>
        /// Evaluates <see cref="Transaction{T}.Actions"/> of a given
        /// <see cref="Transaction{T}"/> and gets the resulting states.
        /// </summary>
        /// <param name="block">The <see cref="IPreEvaluationBlock{T}"/> that <paramref name="tx"/>
        /// belongs to.</param>
        /// <param name="tx">The <see cref="Transaction{T}"/> to evaluate.</param>
        /// <param name="previousStates">The states immediately before evaluating
        /// <paramref name="tx"/>.</param>
        /// <param name="rehearsal">Pass <c>true</c> if it is intended
        /// to be a dry-run (i.e., the returned result will be never used).
        /// The default value is <c>false</c>.</param>
        /// <returns>The resulting states of evaluating the <see cref="IAction"/>s in
        /// <see cref="Transaction{T}.Actions"/> of <paramref name="tx"/>.  Note that it maintains
        /// <see cref="IAccountStateDelta.UpdatedAddresses"/> of the given
        /// <paramref name="previousStates"/> as well.</returns>
        [Pure]
        internal IAccountStateDelta EvaluateTxResult(
            IPreEvaluationBlock<T> block,
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
        /// <param name="block">The block to evaluate.</param>
        /// <param name="previousStates">The states immediately before the evaluation of
        /// the <see cref="IBlockPolicy{T}.BlockAction"/> held by the instance.</param>
        /// <param name="previousBlockStatesTrie">The trie to contain states at previous block.
        /// </param>
        /// <returns>The <see cref="ActionEvaluation"/> of evaluating
        /// the <see cref="IBlockPolicy{T}.BlockAction"/> held by the instance
        /// for the <paramref name="block"/>.</returns>
        [Pure]
        internal ActionEvaluation EvaluatePolicyBlockAction(
            IPreEvaluationBlock<T> block,
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
                miner: block.Miner,
                signer: block.Miner,
                signature: Array.Empty<byte>(),
                actions: new[] { _policyBlockAction }.ToImmutableList(),
                rehearsal: false,
                previousBlockStatesTrie: previousBlockStatesTrie,
                blockAction: true).Single();
        }

        [Pure]
        private static IEnumerable<Transaction<T>> OrderTxsForEvaluationV0(
            IEnumerable<Transaction<T>> txs,
            ImmutableArray<byte> preEvaluationHash)
        {
            // As the order of transactions should be unpredictable until a block is mined,
            // the sorter key should be derived from both a block hash and a txid.
            var maskInteger = new BigInteger(preEvaluationHash.ToBuilder().ToArray());

            // Transactions with the same signers are grouped first and the ordering of the groups
            // is determined by the XOR aggregate of the txid's in the group with XOR bitmask
            // applied using the pre-evaluation hash provided.  Then within each group,
            // transactions are ordered by nonce.
            return txs
                .GroupBy(tx => tx.Signer)
                .OrderBy(
                    group => maskInteger ^ group
                        .Select(tx => new BigInteger(tx.Id.ToByteArray()))
                        .Aggregate((first, second) => first ^ second))
                .SelectMany(group => group.OrderBy(tx => tx.Nonce));
        }

        [Pure]
        private static IEnumerable<Transaction<T>> OrderTxsForEvaluationV3(
            IEnumerable<Transaction<T>> txs,
            ImmutableArray<byte> preEvaluationHash)
        {
            using SHA256 sha256 = SHA256.Create();

            var groups = txs
                .GroupBy(tx => tx.Signer)
                .OrderBy(group => group.Key)
                .ToList();

            // First hash assumes preEvaluationHash has enough entropy to make sampling of
            // startIndex uniform enough.  Second hash is used to obfuscate parity.
            byte[] firstHash = sha256.ComputeHash(preEvaluationHash.ToBuilder().ToArray());
            byte[] secondHash = sha256.ComputeHash(firstHash);

            int startIndex = (int)(new BigInteger(firstHash) % groups.Count);
            startIndex = startIndex >= 0 ? startIndex : -startIndex;
            bool reverse = secondHash[0] % 2 == 1;

            var result = groups.Skip(startIndex).Concat(groups.Take(startIndex));
            if (reverse)
            {
                result = result.Reverse();
            }

            return result.SelectMany(group => group.OrderBy(tx => tx.Nonce));
        }

        /// <summary>
        /// Retrieves the last previous states for the previous block of <paramref name="block"/>.
        /// </summary>
        /// <param name="block">The block to reference.</param>
        /// <param name="stateCompleterSet">The <see cref="StateCompleterSet{T}"/> to use.</param>
        /// <returns>The last previous <see cref="IAccountStateDelta"/> for the previous
        /// <see cref="Block{T}"/>.
        /// </returns>
        private IAccountStateDelta GetPreviousBlockOutputStates(
            IPreEvaluationBlock<T> block,
            StateCompleterSet<T> stateCompleterSet)
        {
            (AccountStateGetter accountStateGetter, AccountBalanceGetter accountBalanceGetter) =
                InitializeAccountGettersPair(block, stateCompleterSet);
            Address miner = block.Miner;

            return block.ProtocolVersion > 0
                ? new AccountStateDeltaImpl(accountStateGetter, accountBalanceGetter, miner)
                : new AccountStateDeltaImplV0(accountStateGetter, accountBalanceGetter, miner);
        }

        private (AccountStateGetter, AccountBalanceGetter) InitializeAccountGettersPair(
            IPreEvaluationBlock<T> block,
            StateCompleterSet<T> stateCompleterSet)
        {
            AccountStateGetter accountStateGetter;
            AccountBalanceGetter accountBalanceGetter;

            if (block.PreviousHash is { } previousHash)
            {
                accountStateGetter = addresses => _blockChainStates.GetStates(
                    addresses,
                    previousHash,
                    stateCompleterSet.StateCompleter);
                accountBalanceGetter = (address, currency) => _blockChainStates.GetBalance(
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
