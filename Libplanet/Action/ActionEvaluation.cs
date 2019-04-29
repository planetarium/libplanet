namespace Libplanet.Action
{
    /// <summary>
    /// A record type to represent an evaluation plan and result of
    /// a single action (<typeparamref name="T"/>).
    /// </summary>
    /// <typeparam name="T">A concrete type that implements
    /// <see cref="IAction"/>.</typeparam>
    public class ActionEvaluation<T>
        where T : IAction, new()
    {
        /// <summary>
        /// Creates an <see cref="ActionEvaluation{T}"/> instance
        /// with filling properties.
        /// </summary>
        /// <param name="action">An action to evaluate.</param>
        /// <param name="inputContext">An input <see cref="IActionContext"/> to
        /// evaluate <paramref name="action"/>.</param>
        /// <param name="outputStates">The result states that
        /// <paramref name="action"/> makes.</param>
        public ActionEvaluation(
            T action,
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
        public T Action { get; }

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
    }
}
