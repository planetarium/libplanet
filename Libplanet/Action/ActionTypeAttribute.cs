using System;
using Bencodex.Types;

namespace Libplanet.Action
{
    /// <summary>
    /// Indicates that an action class (i.e., a class implementing
    /// <see cref="IAction"/>) can be held by transactions and blocks.
    /// It also gives an action class a <see cref="TypeIdentifier"/> for
    /// serialization and deserialization.
    /// </summary>
    [AttributeUsage(AttributeTargets.Class, AllowMultiple = false)]
    public class ActionTypeAttribute : Attribute
    {
        /// <summary>
        /// Creates an <see cref="ActionTypeAttribute"/> with a given
        /// <paramref name="typeIdentifier"/>.
        /// </summary>
        /// <param name="typeIdentifier">An action class's unique
        /// identifier for serialization and deserialization.</param>
        public ActionTypeAttribute(string typeIdentifier)
        {
            TypeIdentifier = new Text(typeIdentifier);
        }

        public ActionTypeAttribute(int typeIdentifier)
        {
            TypeIdentifier = new Integer(typeIdentifier);
        }

        /// <summary>
        /// An action class's unique identifier for serialization and
        /// deserialization.
        /// </summary>
        public IValue TypeIdentifier { get; }
    }
}
