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
using Libplanet.Assets;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.State;
using Libplanet.Tx;
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
        private readonly IFeeCalculator? _feeCalculator;

#pragma warning disable MEN002
#pragma warning disable CS1573
        /// <summary>
        /// Creates a new <see cref="ActionEvaluator"/>.
        /// </summary>
        /// <param name="policyBlockActionGetter">A delegator to get policy block action to evaluate
        /// at the end for each <see cref="IPreEvaluationBlock"/> that gets evaluated.</param>
        /// <param name="blockChainStates">The <see cref="IBlockChainStates"/> to use to retrieve
        /// the states for a provided <see cref="Address"/>.</param>
        /// <param name="actionTypeLoader"> A <see cref="IActionLoader"/> implementation using action type lookup.</param>
        /// <param name="feeCalculator">Fee calculator.</param>
        public ActionEvaluator(
            PolicyBlockActionGetter policyBlockActionGetter,
            IBlockChainStates blockChainStates,
            IActionLoader actionTypeLoader,
            IFeeCalculator? feeCalculator
        )
#pragma warning restore MEN002
#pragma warning restore CS1573
        {
            _logger = Log.ForContext<ActionEvaluator>()
                .ForContext("Source", nameof(ActionEvaluator));
            _policyBlockActionGetter = policyBlockActionGetter;
            _blockChainStates = blockChainStates;
            _actionLoader = actionTypeLoader;
            _feeCalculator = feeCalculator;
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
                IAccountStateDelta previousStates = GetPreviousBlockOutputStates(block);

                ImmutableList<ActionEvaluation> evaluations = EvaluateBlock(
                    block: block,
                    previousStates: previousStates).ToImmutableList();

                var policyBlockAction = _policyBlockActionGetter(block);
                if (policyBlockAction is null)
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
                            blockHeader: block,
                            previousStates: previousStates)
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

        [Pure]
        internal static FungibleAssetValue NullTotalSupplyGetter(Currency currency)
        {
            if (!currency.TotalSupplyTrackable)
            {
                throw TotalSupplyNotTrackableException.WithDefaultMessage(currency);
            }

            return currency * 0;
        }

        [Pure]
        internal static ValidatorSet NullValidatorSetGetter()
        {
            return new ValidatorSet();
        }

        /// <summary>
        /// Executes <see cref="IAction"/>s in <paramref name="actions"/>.  All other evaluation
        /// calls resolve to this method.
        /// </summary>
        /// <param name="preEvaluationHash">The
        /// <see cref="IPreEvaluationBlockHeader.PreEvaluationHash"/> of
        /// the <see cref="IPreEvaluationBlock"/> that <paramref name="actions"/> belong to.</param>
        /// <param name="blockIndex">The <see cref="Block.Index"/> of the <see cref="Block"/>
        /// that <paramref name="actions"/> belong to.</param>
        /// <param name="txid">The <see cref="ITransaction.Id"/> of the
        /// <see cref="ITransaction"/> that <paramref name="actions"/> belong to.</param>
        /// <param name="previousStates">The states immediately before <paramref name="actions"/>
        /// being executed.</param>
        /// <param name="miner">An address of block miner.</param>
        /// <param name="signer">Signer of the <paramref name="actions"/>.</param>
        /// <param name="signature"><see cref="ITransaction"/> signature used to generate random
        /// seeds.</param>
        /// <param name="actions">Actions to evaluate.</param>
        /// <param name="gasLimit">
        /// The maximum amount of gas that can be consumed by the transaction.
        /// </param>
        /// <param name="maxGasPrice">
        /// The maximum gas price that can be used by the transaction.
        /// </param>
        /// <param name="blockAction">Pass <see langword="true"/> if it is
        /// <see cref="IBlockPolicy.BlockAction"/>.</param>
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
            HashDigest<SHA256> preEvaluationHash,
            long blockIndex,
            TxId? txid,
            IAccountStateDelta previousStates,
            Address miner,
            Address signer,
            byte[] signature,
            IImmutableList<IAction> actions,
            long gasLimit = long.MaxValue,
            FungibleAssetValue? maxGasPrice = null,
            bool blockAction = false,
            ILogger? logger = null)
        {
            ActionContext CreateActionContext(
                IAccountStateDelta prevStates,
                int randomSeed,
                long actionGasLimit = long.MaxValue,
                List<string>? logs = null
            )
            {
                return new ActionContext(
                    signer: signer,
                    txid: txid,
                    miner: miner,
                    blockIndex: blockIndex,
                    previousStates: prevStates,
                    randomSeed: randomSeed,
                    blockAction: blockAction,
                    gasLimit: actionGasLimit,
                    logs: logs);
            }

            byte[] hashedSignature;
            using (var hasher = SHA1.Create())
            {
                hashedSignature = hasher.ComputeHash(signature);
            }

            byte[] preEvaluationHashBytes = preEvaluationHash.ToByteArray();
            int seed = GenerateRandomSeed(preEvaluationHashBytes, hashedSignature, signature, 0);

            IAccountStateDelta states = previousStates;
            foreach (IAction action in actions)
            {
                Exception? exc = null;
                IAccountStateDelta nextStates = states;
                long nextGasLimit = gasLimit;

                ActionContext context = CreateActionContext(nextStates, seed, nextGasLimit);
                IFeeCollector feeCollector = new FeeCollector(context, maxGasPrice);
                try
                {
                    Stopwatch stopwatch = new Stopwatch();
                    stopwatch.Start();
                    nextStates = feeCollector.Mortgage(nextStates);
                    context = CreateActionContext(nextStates, seed, nextGasLimit);
                    feeCollector = feeCollector.Next(context);
                    nextStates = action.Execute(context);
                    logger?
                        .ForContext("Tag", "Metric")
                        .ForContext("Subtag", "ActionExecutionTime")
                        .Information(
                            "Action {Action} took {DurationMs} ms to execute, " +
                            "GetState called {GetStateCount} times " +
                            "and took {GetStateDurationMs} ms",
                            action,
                            stopwatch.ElapsedMilliseconds,
                            ActionContext.GetStateCount.Value,
                            ActionContext.GetStateTimer.Value?.ElapsedMilliseconds);
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
                        txid,
                        blockIndex,
                        ByteUtil.Hex(preEvaluationHash.ByteArray));
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
                        txid,
                        blockIndex,
                        ByteUtil.Hex(preEvaluationHash.ByteArray));
                    var innerMessage =
                        $"The action {action} (block #{blockIndex}, " +
                        $"pre-evaluation hash {ByteUtil.Hex(preEvaluationHash.ByteArray)}, " +
                        $"tx {txid} threw an exception during execution.  " +
                        "See also this exception's InnerException property";
                    logger?.Error(
                        "{Message}\nInnerException: {ExcMessage}", innerMessage, e.Message);
                    exc = new UnexpectedlyTerminatedActionException(
                        innerMessage,
                        preEvaluationHash,
                        blockIndex,
                        txid,
                        null,
                        action,
                        e);
                }

                nextStates = feeCollector.Refund(nextStates);
                nextStates = feeCollector.Reward(nextStates);
                nextGasLimit = context.GasLimit() - context.GasUsed();

                // As IActionContext.Random is stateful, we cannot reuse
                // the context which is once consumed by Execute().
                ActionContext equivalentContext = CreateActionContext(states, seed);

                yield return new ActionEvaluation(
                    action: action,
                    inputContext: equivalentContext,
                    outputStates: nextStates,
                    exception: exc,
                    logs: context.Logs);

                if (exc is { })
                {
                    yield break;
                }

                states = nextStates;
                gasLimit = nextGasLimit;
                unchecked
                {
                    seed++;
                }
            }
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
        /// <param name="previousStates">The states immediately before an execution of any
        /// <see cref="IAction"/>s.</param>
        /// <returns>An <see cref="IEnumerable{T}"/> of <see cref="ActionEvaluation"/>s
        /// where each <see cref="ActionEvaluation"/> is the evaluation of an <see cref="IAction"/>.
        /// </returns>
        [Pure]
        internal IEnumerable<ActionEvaluation> EvaluateBlock(
            IPreEvaluationBlock block,
            IAccountStateDelta previousStates)
        {
            IAccountStateDelta delta = previousStates;
            IEnumerable<ITransaction> orderedTxs = OrderTxsForEvaluation(
                block.ProtocolVersion,
                block.Transactions,
                block.PreEvaluationHash.ByteArray
            ).WithMeasuringTime(
                sw => _logger.Verbose(
                    "Took {ElapsedMilliseconds} ms to order transactions",
                    sw.ElapsedMilliseconds
                )
            );

            foreach (ITransaction tx in orderedTxs)
            {
                Stopwatch stopwatch = new Stopwatch();
                stopwatch.Start();
                delta = AccountStateDeltaImpl.ChooseVersion(
                    block.ProtocolVersion,
                    delta.GetStates,
                    delta.GetBalance,
                    delta.GetTotalSupply,
                    delta.GetValidatorSet,
                    tx.Signer);

                IEnumerable<ActionEvaluation> evaluations = EvaluateTx(
                    blockHeader: block,
                    tx: tx,
                    previousStates: delta);

                var actions = new List<IAction>();
                foreach (ActionEvaluation evaluation in evaluations)
                {
                    yield return evaluation;
                    delta = evaluation.OutputStates;
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
            IAccountStateDelta previousStates)
        {
            ImmutableList<IAction> actions =
                ImmutableList.CreateRange(LoadActions(blockHeader.Index, tx));
            return EvaluateActions(
                preEvaluationHash: blockHeader.PreEvaluationHash,
                blockIndex: blockHeader.Index,
                txid: tx.Id,
                previousStates: previousStates,
                miner: blockHeader.Miner,
                signer: tx.Signer,
                signature: tx.Signature,
                actions: actions,
                gasLimit: tx.GasLimit ?? long.MaxValue,
                maxGasPrice: tx.MaxGasPrice,
                logger: _logger);
        }

        /// <summary>
        /// Evaluates the <see cref="IBlockPolicy.BlockAction"/> set by the policy when
        /// this <see cref="ActionEvaluator"/> was instantiated for a given
        /// <see cref="IPreEvaluationBlockHeader"/>.
        /// </summary>
        /// <param name="blockHeader">The header of the block to evaluate.</param>
        /// <param name="previousStates">The states immediately before the evaluation of
        /// the <see cref="IBlockPolicy.BlockAction"/> held by the instance.</param>
        /// <returns>The <see cref="ActionEvaluation"/> of evaluating
        /// the <see cref="IBlockPolicy.BlockAction"/> held by the instance
        /// for the <paramref name="blockHeader"/>.</returns>
        [Pure]
        internal ActionEvaluation EvaluatePolicyBlockAction(
            IPreEvaluationBlockHeader blockHeader,
            IAccountStateDelta previousStates)
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
                preEvaluationHash: blockHeader.PreEvaluationHash,
                blockIndex: blockHeader.Index,
                txid: null,
                previousStates: previousStates,
                miner: blockHeader.Miner,
                signer: blockHeader.Miner,
                signature: Array.Empty<byte>(),
                actions: new[] { policyBlockAction }.ToImmutableList(),
                blockAction: true
            ).Single();
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

        /// <summary>
        /// Retrieves the last previous states for the previous block of
        /// <paramref name="blockHeader"/>.
        /// </summary>
        /// <param name="blockHeader">The header of block to reference.</param>
        /// <returns>The last previous <see cref="IAccountStateDelta"/> for the previous
        /// <see cref="Block"/>.
        /// </returns>
        private IAccountStateDelta GetPreviousBlockOutputStates(
            IPreEvaluationBlockHeader blockHeader)
        {
            var (accountStateGetter, accountBalanceGetter, totalSupplyGetter, validatorSetGetter) =
                InitializeAccountGettersPair(blockHeader);
            Address miner = blockHeader.Miner;

            return AccountStateDeltaImpl.ChooseVersion(
                blockHeader.ProtocolVersion,
                accountStateGetter,
                accountBalanceGetter,
                totalSupplyGetter,
                validatorSetGetter,
                miner);
        }

        private (AccountStateGetter, AccountBalanceGetter, TotalSupplyGetter, ValidatorSetGetter)
            InitializeAccountGettersPair(
            IPreEvaluationBlockHeader blockHeader)
        {
            AccountStateGetter accountStateGetter;
            AccountBalanceGetter accountBalanceGetter;
            TotalSupplyGetter totalSupplyGetter;
            ValidatorSetGetter validatorSetGetter;

            if (blockHeader.PreviousHash is { } previousHash)
            {
                accountStateGetter = addresses => _blockChainStates.GetStates(
                    addresses,
                    previousHash
                );
                accountBalanceGetter = (address, currency) => _blockChainStates.GetBalance(
                    address,
                    currency,
                    previousHash
                );
                totalSupplyGetter = currency => _blockChainStates.GetTotalSupply(
                    currency,
                    previousHash
                );
                validatorSetGetter = () => _blockChainStates.GetValidatorSet(previousHash);
            }
            else
            {
                accountStateGetter = NullAccountStateGetter;
                accountBalanceGetter = NullAccountBalanceGetter;
                totalSupplyGetter = NullTotalSupplyGetter;
                validatorSetGetter = NullValidatorSetGetter;
            }

            return (accountStateGetter, accountBalanceGetter, totalSupplyGetter,
                validatorSetGetter);
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
