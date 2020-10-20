using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Security.Cryptography;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;
using Libplanet.Store.Trie;
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
        /// <param name="blockHash">The <see cref="Block{T}.Hash"/> of <see cref="Block{T}"/> that
        /// <paramref name="actions"/> belongs to.</param>
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
        /// <returns>Enumerates <see cref="ActionEvaluation"/>s for each one in
        /// <paramref name="actions"/>.  The order is the same to the <paramref name="actions"/>.
        /// Note that each <see cref="IActionContext.Random"/> object
        /// has a unconsumed state.
        /// </returns>
        internal static IEnumerable<ActionEvaluation> EvaluateActionsGradually(
            HashDigest<SHA256> blockHash,
            long blockIndex,
            TxId? txid,
            IAccountStateDelta previousStates,
            Address minerAddress,
            Address signer,
            byte[] signature,
            IImmutableList<IAction> actions,
            bool rehearsal = false,
            ITrie previousBlockStatesTrie = null)
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
                    rehearsal: rehearsal,
                    previousBlockStatesTrie: previousBlockStatesTrie
                );

            byte[] hashedSignature;
            using (var hasher = SHA1.Create())
            {
                hashedSignature = hasher.ComputeHash(signature);
            }

            int seed =
                BitConverter.ToInt32(blockHash.ToByteArray(), 0) ^
                (signature.Any() ? BitConverter.ToInt32(hashedSignature, 0) : 0);

            IAccountStateDelta states = previousStates;
            Exception exc = null;
            foreach (IAction action in actions)
            {
                ActionContext context = CreateActionContext(states, seed);
                IAccountStateDelta nextStates = context.PreviousStates;
                try
                {
                    nextStates = action.Execute(context);
                }
                catch (Exception e)
                {
                    string msg;
                    if (!rehearsal)
                    {
                        // FIXME: The below "exc" object seems never used; Hong Minhee believes
                        // this code's behavior does not follow the intention.
                        msg = $"The action {action} (block #{blockIndex} {blockHash}, tx {txid}) " +
                              "threw an exception during execution.  See also this exception's " +
                              "InnerException property.";
                        exc = new UnexpectedlyTerminatedActionException(
                            blockHash, blockIndex, txid, action, msg, e
                        );
                    }

                    msg =
                        $"The action {action} threw an exception during its " +
                        "rehearsal.  It is probably because the logic of the " +
                        $"action {action} is not enough generic so that it " +
                        "can cover every case including rehearsal mode.\n" +
                        "The IActionContext.Rehearsal property also might be " +
                        "useful to make the action can deal with the case of " +
                        "rehearsal mode.\n" +
                        "See also this exception's InnerException property.";
                    exc = new UnexpectedlyTerminatedActionException(
                        null, null, null, action, msg, e
                    );
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

                states = nextStates;
                unchecked
                {
                    seed++;
                }
            }
        }
    }
}
