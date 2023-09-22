using System;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Common;

namespace Libplanet.Action
{
    /// <summary>
    /// A record type to represent an evaluation plan and result of
    /// a single action.
    /// </summary>
    public class CommittedActionEvaluation : ICommittedActionEvaluation
    {
        /// <summary>
        /// Creates an <see cref="CommittedActionEvaluation"/> instance
        /// with filling properties.
        /// </summary>
        /// <param name="action">An action to evaluate.</param>
        /// <param name="inputContext">An input <see cref="IActionContext"/> to
        /// evaluate <paramref name="action"/>.</param>
        /// <param name="outputState">The result states that
        /// <paramref name="action"/> makes.</param>
        /// <param name="exception">An exception that has risen during evaluating a given
        /// <paramref name="action"/>.</param>
        public CommittedActionEvaluation(
            IValue action,
            ICommittedActionContext inputContext,
            HashDigest<SHA256> outputState,
            Exception? exception = null)
        {
            Action = action;
            InputContext = inputContext;
            OutputState = outputState;
            Exception = exception;
        }

        /// <summary>
        /// An action to evaluate.
        /// </summary>
        public IValue Action { get; }

        /// <summary>
        /// An input <see cref="ICommittedActionContext"/> to evaluate
        /// <see cref="Action"/>.
        /// </summary>
        /// <remarks>Its <see cref="ICommittedActionContext.Random"/> property
        /// is not consumed yet.</remarks>
        public ICommittedActionContext InputContext { get; }

        /// <summary>
        /// The result states that <see cref="Action"/> makes.
        /// </summary>
        public HashDigest<SHA256> OutputState { get; }

        /// <summary>
        /// An exception that had risen during evaluation.
        /// </summary>
        public Exception? Exception { get; }
    }
}
