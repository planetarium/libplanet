using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Numerics;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Action.Loader;
using Libplanet.Action.State;
using Libplanet.Common;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Types.Blocks;
using Libplanet.Types.Tx;
using Serilog;

namespace Libplanet.Action
{
    /// <summary>
    /// Class responsible for handling of <see cref="IAction"/> evaluations.
    /// </summary>
    public class ActionEvaluator : IActionEvaluator
    {
        private readonly ILogger _logger;
        private readonly IPolicyActionsRegistry _policyActionsRegistry;
        private readonly IStateStore _stateStore;
        private readonly IActionLoader _actionLoader;

        /// <summary>
        /// Creates a new <see cref="ActionEvaluator"/>.
        /// </summary>
        /// <param name="policyActionsRegistry">
        /// A <see cref="PolicyActionsRegistry"/> containing delegators
        /// to get policy actions to evaluate at each situation.
        /// </param>
        /// <param name="stateStore">The <see cref="IStateStore"/> to use to retrieve
        /// the states for a provided <see cref="HashDigest{SHA256}"/>.</param>
        /// <param name="actionTypeLoader"> A <see cref="IActionLoader"/> implementation using
        /// action type lookup.</param>
        public ActionEvaluator(
            IPolicyActionsRegistry policyActionsRegistry,
            IStateStore stateStore,
            IActionLoader actionTypeLoader)
        {
            _logger = Log.ForContext<ActionEvaluator>()
                .ForContext("Source", nameof(ActionEvaluator));
            _policyActionsRegistry = policyActionsRegistry;
            _stateStore = stateStore;
            _actionLoader = actionTypeLoader;
        }

        private delegate (ITrie, int) StateCommitter(
            ITrie worldTrie, IActionEvaluation evaluation);

        /// <inheritdoc cref="IActionEvaluator.ActionLoader"/>
        [Pure]
        public IActionLoader ActionLoader => _actionLoader;

        /// <summary>
        /// Creates a random seed.
        /// </summary>
        /// <param name="preEvaluationHashBytes">The pre-evaluation hash as bytes.
        /// </param>
        /// <param name="signature">The signature of the <see cref="Transaction"/> the target
        /// <see cref="IAction"/> belongs to.  Must be empty if the target <see cref="IAction"/>
        /// is a block action.</param>
        /// <param name="actionOffset">The offset of the target <see cref="IAction"/>.</param>
        /// <returns>An integer of the random seed.
        /// </returns>
        /// <exception cref="ArgumentException">Thrown when
        /// <paramref name="preEvaluationHashBytes"/> is empty.</exception>
        [Pure]
        public static int GenerateRandomSeed(
            byte[] preEvaluationHashBytes,
            byte[] signature,
            int actionOffset)
        {
            using (var sha1 = SHA1.Create())
            {
                unchecked
                {
                    return ((preEvaluationHashBytes.Length > 0
                        ? BitConverter.ToInt32(preEvaluationHashBytes, 0)
                        : throw new ArgumentException(
                            $"Given {nameof(preEvaluationHashBytes)} cannot be empty",
                            nameof(preEvaluationHashBytes)))
                    ^ (signature.Any()
                        ? BitConverter.ToInt32(sha1.ComputeHash(signature), 0)
                        : 0))
                    + actionOffset;
                }
            }
        }

        /// <inheritdoc cref="IActionEvaluator.Evaluate"/>
        [Pure]
        public IReadOnlyList<ICommittedActionEvaluation> Evaluate(
            IPreEvaluationBlock block,
            HashDigest<SHA256>? baseStateRootHash)
        {
            if (block.ProtocolVersion < BlockMetadata.PBFTProtocolVersion)
            {
                throw new BlockProtocolVersionNotSupportedException(
                    $"The native implementation does not support an evaluation of a block " +
                    $"#{block.Index} pre-evaluation hash {block.PreEvaluationHash} " +
                    $"with protocol version less than {BlockMetadata.PBFTProtocolVersion}: " +
                    $"{block.ProtocolVersion}",
                    block.ProtocolVersion);
            }

            _logger.Information(
                "Evaluating actions in the block #{BlockIndex} " +
                "pre-evaluation hash {PreEvaluationHash}...",
                block.Index,
                ByteUtil.Hex(block.PreEvaluationHash.ByteArray)
            );
            Stopwatch stopwatch = new Stopwatch();
            stopwatch.Start();
            try
            {
                IWorld previousState = _stateStore.GetWorld(baseStateRootHash);
                previousState = _stateStore.MigrateWorld(previousState, block.ProtocolVersion);

                var evaluations = ImmutableList<ActionEvaluation>.Empty;
                if (_policyActionsRegistry.BeginBlockActions.Length > 0)
                {
                    evaluations = evaluations.AddRange(EvaluatePolicyBeginBlockActions(
                        block, previousState
                    ));
                    previousState = evaluations.Last().OutputState;
                }

                evaluations = evaluations.AddRange(
                    EvaluateBlock(block, previousState).ToImmutableList()
                );

                if (_policyActionsRegistry.EndBlockActions.Length > 0)
                {
                    previousState = evaluations.Count > 0
                        ? evaluations.Last().OutputState
                        : previousState;
                    evaluations = evaluations.AddRange(EvaluatePolicyEndBlockActions(
                        block, previousState
                    ));
                }

                var committed = ToCommittedEvaluation(block, evaluations, baseStateRootHash);
                return committed;
            }
            catch (Exception e)
            {
                const string errorMessage =
                    "Failed to evaluate block #{BlockIndex} pre-evaluation hash " +
                    "pre-evaluation has {PreEvaluationHash}";
                _logger.Error(
                    e,
                    errorMessage,
                    block.Index,
                    ByteUtil.Hex(block.PreEvaluationHash.ByteArray));
                throw;
            }
            finally
            {
                _logger
                    .ForContext("Tag", "Metric")
                    .ForContext("Subtag", "BlockEvaluationDuration")
                    .Information(
                        "Actions in {TxCount} transactions for block #{BlockIndex} " +
                        "pre-evaluation hash {PreEvaluationHash} evaluated in {DurationMs} ms",
                        block.Transactions.Count,
                        block.Index,
                        ByteUtil.Hex(block.PreEvaluationHash.ByteArray),
                        stopwatch.ElapsedMilliseconds);
            }
        }

        /// <summary>
        /// Executes <see cref="IAction"/>s in <paramref name="actions"/>.  All other evaluation
        /// calls resolve to this method.
        /// </summary>
        /// <param name="block">The <see cref="IPreEvaluationBlock"/> to evaluate.</param>
        /// <param name="tx">The <see cref="Transaction"/> that <paramref name="actions"/>
        /// belong to.  This should be <see langword="null"/> if <paramref name="actions"/>
        /// do not belong to a <see cref="Transaction"/>, i.e.
        /// <see cref="IBlockPolicy.BlockAction"/>.</param>
        /// <param name="previousState">The states immediately before <paramref name="actions"/>
        /// being executed.</param>
        /// <param name="actions">Actions to evaluate.</param>
        /// <param name="stateStore">An <see cref="IStateStore"/> to use.</param>
        /// <param name="isPolicyAction">
        /// Flag indicates that whether the action is a policy action.</param>
        /// <param name="logger">An optional logger.</param>
        /// <returns>An enumeration of <see cref="ActionEvaluation"/>s for each
        /// <see cref="IAction"/> in <paramref name="actions"/>.
        /// </returns>
        [Pure]
        internal static IEnumerable<ActionEvaluation> EvaluateActions(
            IPreEvaluationBlock block,
            ITransaction? tx,
            IWorld previousState,
            IImmutableList<IAction> actions,
            IStateStore stateStore,
            bool isPolicyAction,
            ILogger? logger = null)
        {
            IActionContext CreateActionContext(
                IWorld prevState,
                int randomSeed,
                long actionGasLimit)
            {
                return new ActionContext(
                    signer: tx?.Signer ?? block.Miner,
                    txid: tx?.Id ?? null,
                    miner: block.Miner,
                    blockIndex: block.Index,
                    blockProtocolVersion: block.ProtocolVersion,
                    txs: block.Transactions,
                    previousState: prevState,
                    isPolicyAction: isPolicyAction,
                    randomSeed: randomSeed,
                    gasLimit: actionGasLimit,
                    evidence: block.Evidence);
            }

            long gasLimit = tx?.GasLimit ?? long.MaxValue;

            byte[] preEvaluationHashBytes = block.PreEvaluationHash.ToByteArray();
            byte[] signature = tx?.Signature ?? Array.Empty<byte>();
            int seed = GenerateRandomSeed(preEvaluationHashBytes, signature, 0);

            IWorld state = previousState;
            foreach (IAction action in actions)
            {
                IActionContext context = CreateActionContext(state, seed, gasLimit);
                (ActionEvaluation Evaluation, long NextGasLimit) result = EvaluateAction(
                    block,
                    tx,
                    context,
                    action,
                    stateStore,
                    isPolicyAction,
                    logger);

                yield return result.Evaluation;

                state = result.Evaluation.OutputState;
                gasLimit = result.NextGasLimit;

                unchecked
                {
                    seed++;
                }
            }
        }

        internal static (ActionEvaluation Evaluation, long NextGasLimit) EvaluateAction(
            IPreEvaluationBlock block,
            ITransaction? tx,
            IActionContext context,
            IAction action,
            IStateStore stateStore,
            bool isPolicyAction,
            ILogger? logger = null)
        {
            if (!context.PreviousState.Trie.Recorded)
            {
                throw new InvalidOperationException(
                    $"Given {nameof(context)} must have its previous state's " +
                    $"{nameof(ITrie)} recorded.");
            }

            IActionContext inputContext = context;
            IWorld state = inputContext.PreviousState;
            Exception? exc = null;
            IFeeCollector feeCollector = new FeeCollector(context, tx?.MaxGasPrice);

            IActionContext CreateActionContext(IWorld newPrevState)
            {
                return new ActionContext(
                    signer: inputContext.Signer,
                    txid: inputContext.TxId,
                    miner: inputContext.Miner,
                    blockIndex: inputContext.BlockIndex,
                    blockProtocolVersion: inputContext.BlockProtocolVersion,
                    previousState: newPrevState,
                    randomSeed: inputContext.RandomSeed,
                    isPolicyAction: isPolicyAction,
                    gasLimit: inputContext.GasLimit(),
                    txs: inputContext.Txs,
                    evidence: inputContext.Evidence);
            }

            try
            {
                Stopwatch stopwatch = new Stopwatch();
                stopwatch.Start();
                AccountMetrics.Initialize();
                state = feeCollector.Mortgage(state);
                context = CreateActionContext(state);
                feeCollector = feeCollector.Next(context);
                state = action.Execute(context);
                logger?
                    .ForContext("Tag", "Metric")
                    .ForContext("Subtag", "ActionExecutionTime")
                    .Information(
                        "Action {Action} took {DurationMs} ms to execute, " +
                        "GetState called {GetStateCount} times " +
                        "and took {GetStateDurationMs} ms",
                        action,
                        stopwatch.ElapsedMilliseconds,
                        AccountMetrics.GetStateCount.Value,
                        AccountMetrics.GetStateTimer.Value?.ElapsedMilliseconds);
            }
            catch (OutOfMemoryException e)
            {
                // Because OutOfMemory is thrown non-deterministically depending on the state
                // of the node, we should throw without further handling.
                var message =
                    "Action {Action} of tx {TxId} of block #{BlockIndex} with " +
                    "pre-evaluation hash {PreEvaluationHash} threw an exception " +
                    "during execution";
                logger?.Error(
                    e,
                    message,
                    action,
                    tx?.Id,
                    block.Index,
                    ByteUtil.Hex(block.PreEvaluationHash.ByteArray));
                throw;
            }
            catch (Exception e)
            {
                var message =
                    "Action {Action} of tx {TxId} of block #{BlockIndex} with " +
                    "pre-evaluation hash {PreEvaluationHash} threw an exception " +
                    "during execution";
                logger?.Error(
                    e,
                    message,
                    action,
                    tx?.Id,
                    block.Index,
                    ByteUtil.Hex(block.PreEvaluationHash.ByteArray));
                var innerMessage =
                    $"The action {action} (block #{block.Index}, " +
                    $"pre-evaluation hash " +
                    $"{ByteUtil.Hex(block.PreEvaluationHash.ByteArray)}, " +
                    $"tx {tx?.Id} threw an exception during execution.  " +
                    "See also this exception's InnerException property";
                logger?.Error(
                    "{Message}\nInnerException: {ExcMessage}", innerMessage, e.Message);
                exc = new UnexpectedlyTerminatedActionException(
                    innerMessage,
                    block.PreEvaluationHash,
                    block.Index,
                    tx?.Id,
                    null,
                    action,
                    e);
            }

            state = feeCollector.Refund(state);
            state = feeCollector.Reward(state);
            state = stateStore.CommitWorld(state);

            if (!state.Trie.Recorded)
            {
                throw new InvalidOperationException(
                    $"Failed to record {nameof(IAccount)}'s {nameof(ITrie)}.");
            }

            return (
                new ActionEvaluation(
                    action: action,
                    inputContext: inputContext,
                    outputState: state,
                    exception: exc),
                context.GasLimit() - context.GasUsed());
        }

        /// <summary>
        /// Deterministically shuffles <paramref name="txs"/> for evaluation using
        /// <paramref name="preEvaluationHashBytes"/> as a random seed.
        /// </summary>
        /// <param name="protocolVersion">The <see cref="IBlockMetadata.ProtocolVersion"/>
        /// that <paramref name="txs"/> belong to.</param>
        /// <param name="txs">The list of <see cref="ITransaction"/>s to shuffle.</param>
        /// <param name="preEvaluationHashBytes">The
        /// <see cref="IPreEvaluationBlockHeader.PreEvaluationHash"/>
        /// to use as a random seed when
        /// shuffling.</param>
        /// <returns>An <see cref="IEnumerable{T}"/> of <see cref="ITransaction"/>s in evaluation
        /// order with the following properties:
        /// <list type="bullet">
        /// <item><see cref="ITransaction"/>s with the same <see cref="ITxSigningMetadata.Signer"/>
        /// value appear consecutive in the list.</item>
        /// <item><see cref="ITransaction"/>s with the same <see cref="ITxSigningMetadata.Signer"/>
        /// value are ordered by <see cref="ITxSigningMetadata.Nonce"/> value in ascending order.
        /// </item>
        /// </list>
        /// </returns>
        /// <remarks>
        /// This is to prevent an attempt to gain a first move advantage by participants.
        /// </remarks>
        [Pure]
        internal static IEnumerable<ITransaction> OrderTxsForEvaluation(
            int protocolVersion,
            IEnumerable<ITransaction> txs,
            ImmutableArray<byte> preEvaluationHashBytes)
        {
            return protocolVersion >= BlockMetadata.TransactionOrderingFixProtocolVersion
                ? OrderTxsForEvaluationV3(txs, preEvaluationHashBytes)
                : OrderTxsForEvaluationV0(txs, preEvaluationHashBytes);
        }

        /// <summary>
        /// Evaluates <see cref="IAction"/>s in <see cref="IBlockContent.Transactions"/>
        /// of a given <see cref="IPreEvaluationBlock"/>.
        /// </summary>
        /// <param name="block">The <see cref="IPreEvaluationBlock"/> to evaluate.</param>
        /// <param name="previousState">The states immediately before an execution of any
        /// <see cref="IAction"/>s.</param>
        /// <returns>An <see cref="IEnumerable{T}"/> of <see cref="ActionEvaluation"/>s
        /// where each <see cref="ActionEvaluation"/> is the evaluation of an <see cref="IAction"/>.
        /// </returns>
        [Pure]
        internal IEnumerable<ActionEvaluation> EvaluateBlock(
            IPreEvaluationBlock block,
            IWorld previousState)
        {
            IWorld delta = previousState;
            IEnumerable<ITransaction> orderedTxs = OrderTxsForEvaluation(
                block.ProtocolVersion,
                block.Transactions,
                block.PreEvaluationHash.ByteArray);

            foreach (ITransaction tx in orderedTxs)
            {
                Stopwatch stopwatch = new Stopwatch();
                stopwatch.Start();

                IEnumerable<ActionEvaluation> evaluations = EvaluateTx(
                    block: block,
                    tx: tx,
                    previousState: delta);

                var actions = new List<IAction>();
                foreach (ActionEvaluation evaluation in evaluations)
                {
                    yield return evaluation;
                    delta = evaluation.OutputState;
                    actions.Add(evaluation.Action);
                }

                // FIXME: This is dependant on when the returned value is enumerated.
                ILogger logger = _logger
                    .ForContext("Tag", "Metric")
                    .ForContext("Subtag", "TxEvaluationDuration");
                logger.Information(
                    "Took {DurationMs} ms to evaluate {ActionCount} actions {ActionTypes} " +
                    "in transaction {TxId} by {Signer} as a part of block #{Index} " +
                    "pre-evaluation hash {PreEvaluationHash}",
                    stopwatch.ElapsedMilliseconds,
                    actions.Count,
                    actions.Select(action => action.ToString()!.Split('.')
                        .LastOrDefault()?.Replace(">", string.Empty)),
                    tx.Id,
                    tx.Signer,
                    block.Index,
                    ByteUtil.Hex(block.PreEvaluationHash.ByteArray));
            }
        }

        [Pure]
        internal IEnumerable<ActionEvaluation> EvaluateTx(
            IPreEvaluationBlock block,
            ITransaction tx,
            IWorld previousState)
        {
            var evaluations = ImmutableList<ActionEvaluation>.Empty;
            if (_policyActionsRegistry.BeginTxActions.Length > 0)
            {
                evaluations = evaluations.AddRange(
                    EvaluatePolicyBeginTxActions(block, tx, previousState));
                previousState = evaluations.Last().OutputState;
            }

            ImmutableList<IAction> actions =
                ImmutableList.CreateRange(LoadActions(block.Index, tx));
            evaluations = evaluations.AddRange(EvaluateActions(
                block: block,
                tx: tx,
                previousState: previousState,
                actions: actions,
                stateStore: _stateStore,
                isPolicyAction: false,
                logger: _logger));

            if (_policyActionsRegistry.EndTxActions.Length > 0)
            {
                previousState = evaluations.Count > 0
                    ? evaluations.Last().OutputState
                    : previousState;
                evaluations = evaluations.AddRange(
                    EvaluatePolicyEndTxActions(block, tx, previousState));
            }

            return evaluations;
        }

        /// <summary>
        /// Evaluates the <see cref="IBlockPolicy.BeginBlockActions"/> set by the policy when
        /// this <see cref="ActionEvaluator"/> was instantiated for a given
        /// <see cref="IPreEvaluationBlockHeader"/>.
        /// </summary>
        /// <param name="block">The <see cref="IPreEvaluationBlock"/> to evaluate.</param>
        /// <param name="previousState">The states immediately before the evaluation of
        /// the <see cref="IBlockPolicy.BeginBlockActions"/> held by the instance.</param>
        /// <returns>The <see cref="ActionEvaluation"/> of evaluating
        /// the <see cref="IBlockPolicy.BeginBlockActions"/> held by the instance
        /// for the <paramref name="block"/>.</returns>
        [Pure]
        internal ActionEvaluation[] EvaluatePolicyBeginBlockActions(
            IPreEvaluationBlock block,
            IWorld previousState)
        {
            _logger.Information(
                $"Evaluating policy begin block actions for block #{block.Index} " +
                $"{ByteUtil.Hex(block.PreEvaluationHash.ByteArray)}");

            return EvaluateActions(
                block: block,
                tx: null,
                previousState: previousState,
                actions: _policyActionsRegistry.BeginBlockActions,
                stateStore: _stateStore,
                isPolicyAction: true,
                logger: _logger).ToArray();
        }

        /// <summary>
        /// Evaluates the <see cref="IBlockPolicy.EndBlockActions"/> set by the policy when
        /// this <see cref="ActionEvaluator"/> was instantiated for a given
        /// <see cref="IPreEvaluationBlockHeader"/>.
        /// </summary>
        /// <param name="block">The <see cref="IPreEvaluationBlock"/> to evaluate.</param>
        /// <param name="previousState">The states immediately before the evaluation of
        /// the <see cref="IBlockPolicy.EndBlockActions"/> held by the instance.</param>
        /// <returns>The <see cref="ActionEvaluation"/> of evaluating
        /// the <see cref="IBlockPolicy.EndBlockActions"/> held by the instance
        /// for the <paramref name="block"/>.</returns>
        [Pure]
        internal ActionEvaluation[] EvaluatePolicyEndBlockActions(
            IPreEvaluationBlock block,
            IWorld previousState)
        {
            _logger.Information(
                $"Evaluating policy end block actions for block #{block.Index} " +
                $"{ByteUtil.Hex(block.PreEvaluationHash.ByteArray)}");

            return EvaluateActions(
                block: block,
                tx: null,
                previousState: previousState,
                actions: _policyActionsRegistry.EndBlockActions,
                stateStore: _stateStore,
                isPolicyAction: true,
                logger: _logger).ToArray();
        }

        /// <summary>
        /// Evaluates the <see cref="IBlockPolicy.BeginTxActions"/> set by the policy when
        /// this <see cref="ActionEvaluator"/> was instantiated for a given
        /// <see cref="IPreEvaluationBlockHeader"/>.
        /// </summary>
        /// <param name="block">The <see cref="IPreEvaluationBlock"/> to evaluate.</param>
        /// <param name="transaction">The transaction that the tx action belongs to.</param>
        /// <param name="previousState">The states immediately before the evaluation of
        /// the <see cref="IBlockPolicy.BlockAction"/> held by the instance.</param>
        /// <returns>The <see cref="ActionEvaluation"/> of evaluating
        /// the <see cref="IBlockPolicy.BlockAction"/> held by the instance
        /// for the <paramref name="block"/>.</returns>
        [Pure]
        internal ActionEvaluation[] EvaluatePolicyBeginTxActions(
            IPreEvaluationBlock block,
            ITransaction transaction,
            IWorld previousState)
        {
            _logger.Information(
                $"Evaluating policy begin tx actions for block #{block.Index} " +
                $"{ByteUtil.Hex(block.PreEvaluationHash.ByteArray)}");

            return EvaluateActions(
                block: block,
                tx: transaction,
                previousState: previousState,
                actions: _policyActionsRegistry.BeginTxActions,
                stateStore: _stateStore,
                isPolicyAction: true,
                logger: _logger).ToArray();
        }

        /// <summary>
        /// Evaluates the <see cref="IBlockPolicy.BeginTxActions"/> set by the policy when
        /// this <see cref="ActionEvaluator"/> was instantiated for a given
        /// <see cref="IPreEvaluationBlockHeader"/>.
        /// </summary>
        /// <param name="block">The <see cref="IPreEvaluationBlock"/> to evaluate.</param>
        /// <param name="transaction">The transaction that the tx action belongs to.</param>
        /// <param name="previousState">The states immediately before the evaluation of
        /// the <see cref="IBlockPolicy.BlockAction"/> held by the instance.</param>
        /// <returns>The <see cref="ActionEvaluation"/> of evaluating
        /// the <see cref="IBlockPolicy.BlockAction"/> held by the instance
        /// for the <paramref name="block"/>.</returns>
        [Pure]
        internal ActionEvaluation[] EvaluatePolicyEndTxActions(
            IPreEvaluationBlock block,
            ITransaction transaction,
            IWorld previousState)
        {
            _logger.Information(
                $"Evaluating policy end tx actions for block #{block.Index} " +
                $"{ByteUtil.Hex(block.PreEvaluationHash.ByteArray)}");

            return EvaluateActions(
                block: block,
                tx: transaction,
                previousState: previousState,
                actions: _policyActionsRegistry.EndTxActions,
                stateStore: _stateStore,
                isPolicyAction: true,
                logger: _logger).ToArray();
        }

        internal IReadOnlyList<ICommittedActionEvaluation>
            ToCommittedEvaluation(
                IPreEvaluationBlock block,
                IReadOnlyList<IActionEvaluation> evaluations,
                HashDigest<SHA256>? baseStateRootHash)
        {
            Stopwatch stopwatch = new Stopwatch();
            stopwatch.Start();

            var committedEvaluations = new List<CommittedActionEvaluation>();
            foreach (var evaluation in evaluations)
            {
#pragma warning disable SA1118
                var committedEvaluation = new CommittedActionEvaluation(
                    action: evaluation.Action,
                    inputContext: new CommittedActionContext(
                        signer: evaluation.InputContext.Signer,
                        txId: evaluation.InputContext.TxId,
                        miner: evaluation.InputContext.Miner,
                        blockIndex: evaluation.InputContext.BlockIndex,
                        blockProtocolVersion: evaluation.InputContext.BlockProtocolVersion,
                        previousState: evaluation.InputContext.PreviousState.Trie.Recorded
                            ? evaluation.InputContext.PreviousState.Trie.Hash
                            : throw new ArgumentException("Trie is not recorded"),
                        randomSeed: evaluation.InputContext.RandomSeed,
                        isPolicyAction: evaluation.InputContext.IsPolicyAction),
                    outputState: evaluation.OutputState.Trie.Recorded
                        ? evaluation.OutputState.Trie.Hash
                        : throw new ArgumentException("Trie is not recorded"),
                    exception: evaluation.Exception);
                committedEvaluations.Add(committedEvaluation);
#pragma warning restore SA1118
            }

            return committedEvaluations;
        }

        [Pure]
        private static IEnumerable<ITransaction> OrderTxsForEvaluationV0(
            IEnumerable<ITransaction> txs,
            ImmutableArray<byte> preEvaluationHashBytes)
        {
            // As the order of transactions should be unpredictable until a block is mined,
            // the sorter key should be derived from both a block hash and a txid.
            var maskInteger = new BigInteger(preEvaluationHashBytes.ToArray());

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
        private static IEnumerable<ITransaction> OrderTxsForEvaluationV3(
            IEnumerable<ITransaction> txs,
            ImmutableArray<byte> preEvaluationHashBytes)
        {
            using SHA256 sha256 = SHA256.Create();

            // Some deterministic preordering is necessary.
            var groups = txs.GroupBy(tx => tx.Signer).OrderBy(group => group.Key).ToList();

            // Although strictly not necessary, additional hash computation removes zero padding
            // just in case.
            byte[] reHash = sha256.ComputeHash(preEvaluationHashBytes.ToArray());

            // As BigInteger uses little-endian, we take the last byte for parity to prevent
            // the value of reverse directly tied to the parity of startIndex below.
            bool reverse = reHash.Last() % 2 == 1;

            // This assumes the entropy of preEvaluationHash, thus reHash, is large enough and
            // its range with BigInteger conversion also is large enough that selection of
            // startIndex is approximately uniform.
            int startIndex = groups.Count <= 1
                ? 0
                : (int)(new BigInteger(reHash) % groups.Count);
            startIndex = startIndex >= 0 ? startIndex : -startIndex;

            var result = groups
                .Skip(startIndex)
                .Concat(groups.Take(startIndex));
            if (reverse)
            {
                result = result.Reverse();
            }

            return result.SelectMany(group => group.OrderBy(tx => tx.Nonce));
        }

        private IEnumerable<IAction> LoadActions(long index, ITransaction tx)
        {
            if (tx.Actions is { } actions)
            {
                foreach (IValue rawAction in actions)
                {
                    yield return _actionLoader.LoadAction(index, rawAction);
                }
            }
        }
    }
}
