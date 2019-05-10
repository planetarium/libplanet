using System;

namespace Libplanet.Store
{
    /// <summary>
    /// The exception that is thrown when the namespace of
    /// <see cref="Libplanet.Store"/> does not exist.
    /// </summary>
    [Serializable]
    public sealed class NamespaceNotFoundException : Exception
    {
        /// <summary>
        /// Initializes a new instance of the
        /// <see cref="NamespaceNotFoundException"/> class.
        /// </summary>
        /// <param name="namespace">The namespace not found.</param>
        /// <param name="message">The message that describes the error.</param>
        public NamespaceNotFoundException(string @namespace, string message)
            : base($"{@namespace}: {message}")
        {
            Namespace = @namespace;
        }

        /// <summary>
        /// Gets the namespace not found.
        /// </summary>
        public string Namespace { get; }
    }
}
