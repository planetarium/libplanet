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
        /// <param name="txid">The invalid <see cref="Transaction{T}"/>'s
        /// <see cref="Transaction{T}.Id"/>.  It is automatically included to
        /// the <see cref="Exception.Message"/> string.</param>
        /// <param name="message">Specifies an <see cref="Exception.Message"/>.
        /// </param>
        public InvalidTxPublicKeyException(TxId txid, string message)
            : base(txid, message)
        {
        }
    }
}
