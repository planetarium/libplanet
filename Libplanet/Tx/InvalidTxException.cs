using System;

namespace Libplanet.Tx
{
    /// <summary>
    /// Serves as the base class for exceptions relevant to
    /// <see cref="Transaction{T}"/>.
    /// </summary>
    public abstract class InvalidTxException : Exception
    {
        /// <summary>
        /// Instantiates a new exception object with proper metadata.
        /// </summary>
        /// <param name="txid">The invalid <see cref="Transaction{T}"/>'s
        /// <see cref="Transaction{T}.Id"/>.  It is automatically included to
        /// the <see cref="Exception.Message"/> string.</param>
        /// <param name="message">A descriptive error message for programmers.
        /// </param>
        protected InvalidTxException(TxId txid, string message)
            : base($"{txid.ToHex()}: {message}")
        {
            TxId = txid;
        }

        /// <summary>
        /// The <see cref="TxId"/> of the invalid <see cref="Transaction{T}"/>.
        /// </summary>
        public TxId TxId { get; }
    }
}
