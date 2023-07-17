using System;
using System.Collections.Immutable;
using System.Linq;

namespace Libplanet.Action
{
    /// <summary>
    /// An exception that is thrown when multiple action types are associated with the same
    /// <see cref="ActionTypeAttribute.TypeIdentifier"/>.
    /// </summary>
    /// <remarks>Note this cannot be serialized as it holds a set of <see cref="Type"/> objects
    /// which are not serializable either.</remarks>
    public sealed class DuplicateActionTypeIdentifierException : Exception
    {
        /// <summary>
        /// Creates a new <see cref="DuplicateActionTypeIdentifierException"/> instance.
        /// </summary>
        /// <param name="message">Specifies an <see cref="Exception.Message"/>.  Note that extra
        /// informative text will be appended to this.</param>
        /// <param name="typeIdentifier">The <see cref="ActionTypeAttribute.TypeIdentifier"/> string
        /// that the <paramref name="duplicateActionTypes"/> are associated with.</param>
        /// <param name="duplicateActionTypes">The set of multiple action types that are associated
        /// with the same <paramref name="typeIdentifier"/>.</param>
        public DuplicateActionTypeIdentifierException(
            string message,
            string typeIdentifier,
            IImmutableSet<Type> duplicateActionTypes
        )
            : base($"{message}\n\n{GetExtraMessage(typeIdentifier, duplicateActionTypes)}")
        {
            TypeIdentifier = typeIdentifier;
            DuplicateActionTypes = duplicateActionTypes;
        }

        /// <summary>
        /// The <see cref="ActionTypeAttribute.TypeIdentifier"/> string that
        /// the <see cref="DuplicateActionTypes"/> are associated with.
        /// </summary>
        public string TypeIdentifier { get; }

        /// <summary>
        /// The set of multiple action types that are associated with the same
        /// <see cref="TypeIdentifier"/>.
        /// </summary>
        public IImmutableSet<Type> DuplicateActionTypes { get; }

        private static string GetExtraMessage(
            string typeIdentifier,
            IImmutableSet<Type> duplicateActionTypes)
        {
            var types = duplicateActionTypes
                .Select(t => t.FullName ?? $"{t.AssemblyQualifiedName ?? string.Empty}.(Unnamed)")
                .OrderBy(s => s, StringComparer.InvariantCultureIgnoreCase);
            return $"Type ID: {typeIdentifier}\nAssociated types:\n  {string.Join("\n  ", types)}";
        }
    }
}
