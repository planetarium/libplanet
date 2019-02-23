using System;

namespace Libplanet.Tx
{
    /// <summary>
    /// The exception that is thrown when a <see cref="Transaction{T}"/>'s
    /// <see cref="Transaction{T}.Signer"/> is not derived from its
    /// <see cref="Transaction{T}.PublicKey"/>.
    /// </summary>
    [Serializable]
    public class InvalidTxPublicKeyException : InvalidTxException
    {
        /// <summary>
        /// Creates a new <see cref="InvalidTxPublicKeyException"/> object.
        /// </summary>
        /// <param name="message">Specifies an <see cref="Exception.Message"/>.
        /// </param>
        public InvalidTxPublicKeyException(string message)
            : base(message)
        {
        }
    }
}
