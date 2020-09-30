#nullable enable
using System;

namespace Libplanet.Action
{
    /// <summary>
    /// The exception that is thrown when an action class without
    /// <see cref="ActionTypeAttribute"/> is tried to used with
    /// <see cref="PolymorphicAction{T}"/>.
    /// </summary>
    /// <seealso cref="PolymorphicAction{T}"/>
    [Serializable]
    public sealed class MissingActionTypeException : Exception
    {
        /// <summary>
        /// Creates a new <see cref="MissingActionTypeException"/> object.
        /// </summary>
        /// <param name="actionType">The action type that lacks
        /// <see cref="ActionTypeAttribute"/>.  It is automatically included to
        /// the <see cref="Exception.Message"/> string.</param>
        /// <param name="message">Specifies an <see cref="Exception.Message"/>.
        /// </param>
        public MissingActionTypeException(Type actionType, string message)
            : base($"{actionType}: {message}")
        {
            ActionType = actionType;
        }

        /// <summary>
        /// The action type that lacks <see cref="ActionTypeAttribute"/>.
        /// </summary>
        public Type ActionType { get; }
    }
}
