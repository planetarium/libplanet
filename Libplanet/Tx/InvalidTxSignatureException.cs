using System;

namespace Libplanet.Tx
{
    /// <summary>
    /// The exception that is thrown when a <see cref="Transaction{T}"/>'s
    /// <see cref="Transaction{T}.Signature"/> is invalid.
    /// </summary>
    [Serializable]
    public class InvalidTxSignatureException : InvalidTxException
    {
        /// <summary>
        /// Creates a new <see cref="InvalidTxSignatureException"/> object.
        /// </summary>
        /// <param name="message">Specifies an <see cref="Exception.Message"/>.
        /// </param>
        public InvalidTxSignatureException(string message)
            : base(message)
        {
        }
    }
}
