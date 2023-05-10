using System;
using Bencodex.Types;
using Libplanet.Action.Loader;

namespace Libplanet.Action
{
    /// <summary>
    /// The <see cref="Exception"/> that is thrown when an <see cref="IValue"/> that is
    /// supposedly a serialized <see cref="IAction"/> cannot be deserialized via an
    /// <see cref="IActionLoader"/>.
    /// </summary>
    /// <seealso cref="IActionLoader"/>
    [Serializable]
    public sealed class InvalidActionException : Exception
    {
        /// <summary>
        /// Creates a new <see cref="InvalidActionException"/> object.
        /// </summary>
        /// <param name="message">Specifies an <see cref="Exception.Message"/>.</param>
        /// <param name="plainValue">The <see cref="IValue"/> that cannot be loaded
        /// to an <see cref="IAction"/>.</param>
        /// <param name="innerException">The <see cref="Exception"/> for
        /// <see cref="Exception.InnerException"/>.</param>
        public InvalidActionException(string message, IValue plainValue, Exception innerException)
            : base(message, innerException)
        {
            PlainValue = plainValue;
        }

        /// <summary>
        /// The <see cref="IValue"/> that cannot be deserialized to an <see cref="IAction"/>.
        /// </summary>
        public IValue PlainValue { get; }
    }
}
