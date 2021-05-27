using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Security.Cryptography;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;
using Libplanet.Store.Trie;
using Libplanet.Tx;
using Serilog;

namespace Libplanet.Action
{
    /// <summary>
    /// A record type to represent an evaluation plan and result of
    /// a single action.
    /// </summary>
    public class ActionEvaluation
    {
        /// <summary>
        /// Creates an <see cref="ActionEvaluation"/> instance
        /// with filling properties.
        /// </summary>
        /// <param name="action">An action to evaluate.</param>
        /// <param name="inputContext">An input <see cref="IActionContext"/> to
        /// evaluate <paramref name="action"/>.</param>
        /// <param name="outputStates">The result states that
        /// <paramref name="action"/> makes.</param>
        /// <param name="exception">An exception that has risen during evaluating a given
        /// <paramref name="action"/>.</param>
        public ActionEvaluation(
            IAction action,
            IActionContext inputContext,
            IAccountStateDelta outputStates,
            Exception exception = null
        )
        {
            Action = action;
            InputContext = inputContext;
            OutputStates = outputStates;
            Exception = exception;
        }

        /// <summary>
        /// An action to evaluate.
        /// </summary>
        public IAction Action { get; }

        /// <summary>
        /// An input <see cref="IActionContext"/> to evaluate
        /// <see cref="Action"/>.
        /// </summary>
        /// <remarks>Its <see cref="IActionContext.Random"/> property
        /// is not consumed yet.</remarks>
        public IActionContext InputContext { get; }

        /// <summary>
        /// The result states that <see cref="Action"/> makes.
        /// </summary>
        public IAccountStateDelta OutputStates { get; }

        /// <summary>
        /// An exception that had risen during evaluation.
        /// </summary>
        public Exception Exception { get; }

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
            ITrie previousBlockStatesTrie = null,
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
                    blockIndex: blockIndex,
                    previousStates: prevStates,
                    randomSeed: randomSeed,
                    rehearsal: rehearsal,
                    previousBlockStatesTrie: previousBlockStatesTrie,
                    blockAction: blockAction
                );

            byte[] hashedSignature;
            using (var hasher = SHA1.Create())
            {
                hashedSignature = hasher.ComputeHash(signature);
            }

            byte[] preEvalHashBytes = preEvaluationHash.ToByteArray();
            int seed =
                (preEvalHashBytes.Length > 0 ? BitConverter.ToInt32(preEvalHashBytes, 0) : 0) ^
                (signature.Any() ? BitConverter.ToInt32(hashedSignature, 0) : 0);

            IAccountStateDelta states = previousStates;
            ILogger logger = Log.ForContext<ActionEvaluation>();
            foreach (IAction action in actions)
            {
                Exception exc = null;
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
                            null, null, null, null, action, msg, e
                        );
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
                            e, logMsg, action, blockIndex, preEvaluationHash, txid, stateRootHash, e
                        );
                        var msg =
                            $"The action {action} (block #{blockIndex}, pre-evaluation hash " +
                            $"{preEvaluationHash}, tx {txid}, previous state root hash " +
                            $"{stateRootHash}) threw an exception during execution.  " +
                            "See also this exception's InnerException property.";
                        exc = new UnexpectedlyTerminatedActionException(
                            preEvaluationHash, blockIndex, txid, stateRootHash, action, msg, e
                        );
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
    }
}
