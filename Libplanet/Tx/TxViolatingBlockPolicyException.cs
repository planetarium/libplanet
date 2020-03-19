using System;

namespace Libplanet.Tx
{
    /// <summary>
    /// The exception that is thrown when a <see cref="Transaction{T}"/> does not follow the
    /// block policy.
    /// </summary>
    [Serializable]
    public class TxViolatingBlockPolicyException : InvalidTxException
    {
        /// <summary>
        /// Creates a new <see cref="TxViolatingBlockPolicyException"/> object.
        /// </summary>
        /// <param name="txid">The invalid <see cref="TxId"/>.
        /// It is automatically included to the <see cref="Exception.Message"/>
        /// string.</param>
        /// <param name="message">Specifies an <see cref="Exception.Message"/>.
        /// </param>
        public TxViolatingBlockPolicyException(TxId txid, string message)
            : base(txid, message)
        {
        }
    }
}
