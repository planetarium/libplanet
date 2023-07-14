using System;

namespace Libplanet.Common.Types.Tx
{
    /// <summary>
    /// The exception that is thrown when a <see cref="Transaction"/>'s
    /// <see cref="Transaction.Signature"/> is invalid.
    /// </summary>
    [Serializable]
    public class InvalidTxSignatureException : InvalidTxException
    {
        /// <summary>
        /// Creates a new <see cref="InvalidTxSignatureException"/> object.
        /// </summary>
        /// <param name="message">Specifies an <see cref="Exception.Message"/>.</param>
        /// <param name="txid">The invalid <see cref="Transaction"/>'s
        /// <see cref="Transaction.Id"/>.  It is automatically included to
        /// the <see cref="Exception.Message"/> string.</param>
        public InvalidTxSignatureException(string message, TxId txid)
            : base(message, txid)
        {
        }
    }
}
