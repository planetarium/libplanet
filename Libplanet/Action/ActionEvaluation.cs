using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Security.Cryptography;
using Libplanet.Tx;

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
        public ActionEvaluation(
            IAction action,
            IActionContext inputContext,
            IAccountStateDelta outputStates
        )
        {
            Action = action;
            InputContext = inputContext;
            OutputStates = outputStates;
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
        /// Executes the <paramref name="actions"/> step by step, and emits
        /// <see cref="ActionEvaluation"/> for each step.
        /// </summary>
        /// <param name="blockHash">The <see cref="Libplanet.Blocks.Block{T}.Hash"/> of
        /// <see cref="Libplanet.Blocks.Block{T}"/> that this <see cref="Transaction{T}"/> will
        /// belong to.</param>
        /// <param name="blockIndex">The <see cref="Libplanet.Blocks.Block{T}.Index"/> of
        /// <see cref="Libplanet.Blocks.Block{T}"/> that this <see cref="Transaction{T}"/> will
        /// belong to.</param>
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
        /// <returns>Enumerates <see cref="ActionEvaluation"/>s for each one in
        /// <paramref name="actions"/>.  The order is the same to the <paramref name="actions"/>.
        /// Note that each <see cref="IActionContext.Random"/> object
        /// has a unconsumed state.
        /// </returns>
        /// <exception cref="UnexpectedlyTerminatedTxRehearsalException">
        /// Thrown when one of <paramref name="actions"/> throws some
        /// exception during <paramref name="rehearsal"/> mode.
        /// The actual exception that an <see cref="IAction"/> threw
        /// is stored in its <see cref="Exception.InnerException"/> property.
        /// It is never thrown if the <paramref name="rehearsal"/> option is
        /// <c>false</c>.
        /// </exception>
        internal static IEnumerable<ActionEvaluation> EvaluateActionsGradually(
            HashDigest<SHA256> blockHash,
            long blockIndex,
            IAccountStateDelta previousStates,
            Address minerAddress,
            Address signer,
            byte[] signature,
            IImmutableList<IAction> actions,
            bool rehearsal = false)
        {
            ActionContext CreateActionContext(
                IAccountStateDelta prevStates,
                int randomSeed
            ) =>
                new ActionContext(
                    signer: signer,
                    miner: minerAddress,
                    blockIndex: blockIndex,
                    previousStates: prevStates,
                    randomSeed: randomSeed,
                    rehearsal: rehearsal
                );

            int seed =
                BitConverter.ToInt32(blockHash.ToByteArray(), 0) ^
                (signature.Any() ? BitConverter.ToInt32(signature, 0) : 0);
            IAccountStateDelta states = previousStates;
            foreach (IAction action in actions)
            {
                ActionContext context =
                    CreateActionContext(states, seed);
                IAccountStateDelta nextStates;
                try
                {
                    nextStates = action.Execute(context);
                }
                catch (Exception e)
                {
                    if (!rehearsal)
                    {
                        throw;
                    }

                    var msg =
                        $"The action {action} threw an exception during its " +
                        "rehearsal.  It is probably because the logic of the " +
                        $"action {action} is not enough generic so that it " +
                        "can cover every case including rehearsal mode.\n" +
                        "The IActionContext.Rehearsal property also might be " +
                        "useful to make the action can deal with the case of " +
                        "rehearsal mode.\n" +
                        "See also this exception's InnerException property.";
                    throw new UnexpectedlyTerminatedTxRehearsalException(
                        action, msg, e
                    );
                }

                // As IActionContext.Random is stateful, we cannot reuse
                // the context which is once consumed by Execute().
                ActionContext equivalentContext =
                    CreateActionContext(states, seed);

                yield return new ActionEvaluation(
                    action,
                    equivalentContext,
                    nextStates
                );
                states = nextStates;
                unchecked
                {
                    seed++;
                }
            }
        }
    }
}
