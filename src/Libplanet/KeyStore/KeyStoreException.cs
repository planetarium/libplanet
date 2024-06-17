using System;

namespace Libplanet.KeyStore
{
    /// <summary>
    /// Serves as the base class for exceptions thrown by <see cref="IKeyStore"/>
    /// implementations.
    /// </summary>
    public abstract class KeyStoreException : Exception
    {
        /// <summary>
        /// Initializes a new instance with the given <paramref name="message"/>.
        /// </summary>
        /// <param name="message">A descriptive error message for programmers.
        /// Goes to <see cref="System.Exception.Message"/>.</param>
        protected KeyStoreException(string message)
            : base(message)
        {
        }
    }
}
