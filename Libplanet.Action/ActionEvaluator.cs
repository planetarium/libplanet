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
using Libplanet.Crypto;
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
        private readonly PolicyBlockActionGetter _policyBlockActionGetter;
        private readonly IBlockChainStates _blockChainStates;
        private readonly IActionLoader _actionLoader;

        /// <summary>
        /// Creates a new <see cref="ActionEvaluator"/>.
        /// </summary>
        /// <param name="policyBlockActionGetter">A delegator to get policy block action to evaluate
        /// at the end for each <see cref="IPreEvaluationBlock"/> that gets evaluated.</param>
        /// <param name="blockChainStates">The <see cref="IBlockChainStates"/> to use to retrieve
        /// the states for a provided <see cref="Address"/>.</param>
        /// <param name="actionTypeLoader"> A <see cref="IActionLoader"/> implementation using
        /// action type lookup.</param>
        public ActionEvaluator(
            PolicyBlockActionGetter policyBlockActionGetter,
            IBlockChainStates blockChainStates,
            IActionLoader actionTypeLoader)
        {
            _logger = Log.ForContext<ActionEvaluator>()
                .ForContext("Source", nameof(ActionEvaluator));
            _policyBlockActionGetter = policyBlockActionGetter;
            _blockChainStates = blockChainStates;
            _actionLoader = actionTypeLoader;
        }

        /// <inheritdoc cref="IActionEvaluator.ActionLoader"/>
        [Pure]
        public IActionLoader ActionLoader => _actionLoader;

        /// <summary>
        /// Creates a random seed.
        /// </summary>
        /// <param name="preEvaluationHashBytes">The previous evaluation hash turned into bytes.
        /// </param>
        /// <param name="hashedSignature">The hashed signature.</param>
        /// <param name="signature">The signature.</param>
        /// <param name="actionOffset">The offset of the action.</param>
        /// <returns>An integer of the random seed.
        /// </returns>
        [Pure]
        public static int GenerateRandomSeed(
            byte[] preEvaluationHashBytes,
            byte[] hashedSignature,
            byte[] signature,
            int actionOffset)
        {
            return (preEvaluationHashBytes.Length > 0
                    ? BitConverter.ToInt32(preEvaluationHashBytes, 0) : 0)
                ^ (signature.Any() ? BitConverter.ToInt32(hashedSignature, 0) : 0) - actionOffset;
        }

        /// <inheritdoc cref="IActionEvaluator.Evaluate"/>
        [Pure]
        public IReadOnlyList<IActionEvaluation> Evaluate(IPreEvaluationBlock block)
        {
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
                IWorld previousState = PrepareInitialDelta(block);
                ImmutableList<ActionEvaluation> evaluations =
                    EvaluateBlock(block, previousState).ToImmutableList();

                var policyBlockAction = _policyBlockActionGetter(block);
                if (policyBlockAction is null)
                {
                    return evaluations;
                }
                else
                {
                    previousState = evaluations.Count > 0
                        ? evaluations.Last().OutputState
                        : previousState;
                    return evaluations.Add(
                        EvaluatePolicyBlockAction(block, previousState)
                    );
                }
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
        /// <param name="blockHeader">The <see cref="IPreEvaluationBlockHeader"/> of
        /// the <see cref="Block"/> that <paramref name="actions"/> belong to.</param>
        /// <param name="tx">The <see cref="Transaction"/> that <paramref name="actions"/>
        /// belong to.  This should be <see langword="null"/> if <paramref name="actions"/>
        /// do not belong to a <see cref="Transaction"/>, i.e.
        /// <see cref="IBlockPolicy.BlockAction"/>.</param>
        /// <param name="previousState">The states immediately before <paramref name="actions"/>
        /// being executed.</param>
        /// <param name="actions">Actions to evaluate.</param>
        /// <param name="logger">An optional logger.</param>
        /// <returns>An enumeration of <see cref="ActionEvaluation"/>s for each
        /// <see cref="IAction"/> in <paramref name="actions"/>.
        /// </returns>
        /// <remarks>
        /// <para>Each <see cref="IActionContext.Random"/> object has an unconsumed state.</para>
        /// <para>
        /// The returned enumeration has the following properties:
        /// <list type="bullet">
        /// <item><description>
        ///     The first <see cref="ActionEvaluation"/> in the enumerated result,
        ///     if any, has <see cref="ActionEvaluation.OutputState"/> with
        ///     <see cref="IAccount.Delta"/> that is a
        ///     "superset" of <paramref name="previousState"/>'s
        ///     <see cref="IAccount.Delta"/> (possibly except for
        ///     <see cref="IAccountDelta.ValidatorSet"/>).
        /// </description></item>
        /// <item><description>
        ///     Each <see cref="ActionEvaluation"/> in the enumerated result
        ///     has <see cref="ActionEvaluation.OutputState"/> with
        ///     <see cref="IAccount.Delta"/> that is a "superset"
        ///     of the previous one, if any (possibly except for
        ///     <see cref="IAccountDelta.ValidatorSet"/>).
        /// </description></item>
        /// </list>
        /// </para>
        /// </remarks>
        [Pure]
        internal static IEnumerable<ActionEvaluation> EvaluateActions(
            IPreEvaluationBlockHeader blockHeader,
            ITransaction? tx,
            IWorld previousState,
            IImmutableList<IAction> actions,
            ILogger? logger = null)
        {
            IActionContext CreateActionContext(
                IWorld prevState,
                int randomSeed,
                long actionGasLimit)
            {
                return new ActionContext(
                    signer: tx?.Signer ?? blockHeader.Miner,
                    txid: tx?.Id ?? null,
                    miner: blockHeader.Miner,
                    blockIndex: blockHeader.Index,
                    blockProtocolVersion: blockHeader.ProtocolVersion,
                    previousState: prevState,
                    randomSeed: randomSeed,
                    gasLimit: actionGasLimit);
            }

            long gasLimit = tx?.GasLimit ?? long.MaxValue;

            byte[] signature = tx?.Signature ?? new byte[0];
            byte[] hashedSignature;
            using (var hasher = SHA1.Create())
            {
                hashedSignature = hasher.ComputeHash(signature);
            }

            byte[] preEvaluationHashBytes = blockHeader.PreEvaluationHash.ToByteArray();
            int seed = GenerateRandomSeed(preEvaluationHashBytes, hashedSignature, signature, 0);

            IWorld state = previousState;
            foreach (IAction action in actions)
            {
                IActionContext context = CreateActionContext(state, seed, gasLimit);
                (ActionEvaluation Evaluation, long NextGasLimit) result = EvaluateAction(
                    blockHeader,
                    tx,
                    context,
                    action,
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
            IPreEvaluationBlockHeader blockHeader,
            ITransaction? tx,
            IActionContext context,
            IAction action,
            ILogger? logger = null)
        {
            // Make a copy since ActionContext is stateful.
            IActionContext inputContext = context.GetUnconsumedContext();
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
                    randomSeed: inputContext.Random.Seed,
                    gasLimit: inputContext.GasLimit());
            }

            try
            {
                Stopwatch stopwatch = new Stopwatch();
                stopwatch.Start();
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
                    blockHeader.Index,
                    ByteUtil.Hex(blockHeader.PreEvaluationHash.ByteArray));
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
                    blockHeader.Index,
                    ByteUtil.Hex(blockHeader.PreEvaluationHash.ByteArray));
                var innerMessage =
                    $"The action {action} (block #{blockHeader.Index}, " +
                    $"pre-evaluation hash " +
                    $"{ByteUtil.Hex(blockHeader.PreEvaluationHash.ByteArray)}, " +
                    $"tx {tx?.Id} threw an exception during execution.  " +
                    "See also this exception's InnerException property";
                logger?.Error(
                    "{Message}\nInnerException: {ExcMessage}", innerMessage, e.Message);
                exc = new UnexpectedlyTerminatedActionException(
                    innerMessage,
                    blockHeader.PreEvaluationHash,
                    blockHeader.Index,
                    tx?.Id,
                    null,
                    action,
                    e);
            }

            state = feeCollector.Refund(state);
            state = feeCollector.Reward(state);

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
            return protocolVersion >= 3
                ? OrderTxsForEvaluationV3(txs, preEvaluationHashBytes)
                : OrderTxsForEvaluationV0(txs, preEvaluationHashBytes);
        }

        /// <summary>
        /// Evaluates <see cref="IAction"/>s in <see cref="IBlockContent.Transactions"/>
        /// of a given <see cref="IPreEvaluationBlock"/>.
        /// </summary>
        /// <param name="block">The block to evaluate.</param>
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
                delta = World.Flush(delta);

                IEnumerable<ActionEvaluation> evaluations = EvaluateTx(
                    blockHeader: block,
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
            IPreEvaluationBlockHeader blockHeader,
            ITransaction tx,
            IWorld previousState)
        {
            ImmutableList<IAction> actions =
                ImmutableList.CreateRange(LoadActions(blockHeader.Index, tx));
            return EvaluateActions(
                blockHeader: blockHeader,
                tx: tx,
                previousState: previousState,
                actions: actions,
                logger: _logger);
        }

        /// <summary>
        /// Evaluates the <see cref="IBlockPolicy.BlockAction"/> set by the policy when
        /// this <see cref="ActionEvaluator"/> was instantiated for a given
        /// <see cref="IPreEvaluationBlockHeader"/>.
        /// </summary>
        /// <param name="blockHeader">The header of the block to evaluate.</param>
        /// <param name="previousState">The states immediately before the evaluation of
        /// the <see cref="IBlockPolicy.BlockAction"/> held by the instance.</param>
        /// <returns>The <see cref="ActionEvaluation"/> of evaluating
        /// the <see cref="IBlockPolicy.BlockAction"/> held by the instance
        /// for the <paramref name="blockHeader"/>.</returns>
        [Pure]
        internal ActionEvaluation EvaluatePolicyBlockAction(
            IPreEvaluationBlockHeader blockHeader,
            IWorld previousState)
        {
            var policyBlockAction = _policyBlockActionGetter(blockHeader);
            if (policyBlockAction is null)
            {
                var message =
                    "To evaluate policy block action, " +
                    "policyBlockAction must not be null.";
                throw new InvalidOperationException(message);
            }

            _logger.Information(
                $"Evaluating policy block action for block #{blockHeader.Index} " +
                $"{ByteUtil.Hex(blockHeader.PreEvaluationHash.ByteArray)}");

            return EvaluateActions(
                blockHeader: blockHeader,
                tx: null,
                previousState: previousState,
                actions: new[] { policyBlockAction }.ToImmutableList()).Single();
        }

        /// <summary>
        /// Prepares the initial <see cref="IAccount"/> to for evaluating
        /// <paramref name="block"/>.
        /// </summary>
        /// <param name="block">The <see cref="Block"/> to evaluate..</param>
        /// <returns>The initial <see cref="IAccount"/> to be used
        /// for evaluating <paramref name="block"/>.
        /// </returns>
        internal IWorld PrepareInitialDelta(IPreEvaluationBlock block)
        {
            return Account.Create(_blockChainStates.GetBlockState(block.PreviousHash));
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
