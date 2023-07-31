using System;
using Bencodex.Types;
using Libplanet.Action.State;

namespace Libplanet.Action
{
    public interface IActionEvaluation
    {
        /// <summary>
        /// An action data to evaluate. When the
        /// <see cref="InputContext"/>.<see cref="IActionContext.BlockAction"/> is true,
        /// use <see cref="IBlockPolicy.BlockAction"/> instead of trying deserialization.
        /// </summary>
        public IValue Action { get; }

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
        public IAccount OutputState { get; }

        /// <summary>
        /// An exception that had risen during evaluation.
        /// </summary>
        public Exception? Exception { get; }
    }
}
