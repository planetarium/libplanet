using System;
using System.Collections.Generic;

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
        /// <param name="logs">The logs recorded while executing action.</param>
        /// <param name="exception">An exception that has risen during evaluating a given
        /// <paramref name="action"/>.</param>
        public ActionEvaluation(
            IAction action,
            IActionContext inputContext,
            IAccountStateDelta outputStates,
            Exception? exception = null,
            List<string>? logs = null)
        {
            Action = action;
            InputContext = inputContext;
            OutputStates = outputStates;
            Logs = logs ?? new List<string>();
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
        public Exception? Exception { get; }

        /// <summary>
        /// Logs recorded while executing an action through
        /// <see cref="IActionContext.PutLog(string)"/>.
        /// </summary>
        public List<string> Logs { get; }
    }
}
