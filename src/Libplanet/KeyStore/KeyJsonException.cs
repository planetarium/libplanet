using System;

namespace Libplanet.KeyStore
{
    /// <summary>
    /// Serves as the base class for exceptions thrown by
    /// <see cref="ProtectedPrivateKey.FromJson"/> method.
    /// </summary>
    public abstract class KeyJsonException : Exception
    {
        /// <summary>
        /// Creates a new <see cref="KeyJsonException"/> instance with a message.
        /// </summary>
        /// <param name="message">A detailed exception message.</param>
        protected KeyJsonException(string message)
            : base(message)
        {
        }
    }
}
