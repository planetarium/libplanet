using System;

namespace Libplanet.KeyStore
{
    /// <summary>
    /// The exception that is thrown when there is no <see cref="ProtectedPrivateKey"/>
    /// with a given key ID in an <see cref="IKeyStore"/>.
    /// </summary>
    public class NoKeyException : KeyStoreException
    {
        /// <summary>
        /// Instantiates a new exception object with proper metadata.
        /// </summary>
        /// <param name="message">A descriptive error message for programmers.
        /// Goes to <see cref="System.Exception.Message"/>.</param>
        /// <param name="keyId">The key ID tried to look for.
        /// It is automatically included to the <see cref="System.Exception.Message"/>
        /// string.
        /// </param>
        public NoKeyException(string message, Guid keyId)
            : base($"{message}: {keyId}")
        {
            KeyId = keyId;
        }

        /// <summary>
        /// The key ID tried to look for.
        /// </summary>
        public Guid KeyId { get; }
    }
}
