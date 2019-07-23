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
