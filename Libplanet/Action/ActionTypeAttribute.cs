using System;
using System.Linq;
using System.Reflection;
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

        /// <summary>
        /// Gets the <see cref="TypeIdentifier"/> for a given action class.
        /// </summary>
        /// <param name="actionType">A <see cref="Type"/> object of an action
        /// class to know its annotated <see cref="TypeIdentifier"/>.</param>
        /// <returns>The <see cref="TypeIdentifier"/> of the given
        /// <paramref name="actionType"/> if it's annotated with
        /// <see cref="ActionTypeAttribute"/>.  If it's not annotated returns
        /// <see langword="null"/>.</returns>
        public static IValue? ValueOf(Type actionType) =>
            actionType
                .GetCustomAttributes()
                .OfType<ActionTypeAttribute>()
                .Select(attr => attr.TypeIdentifier)
                .FirstOrDefault();
    }
}
