using System;

namespace Libplanet.Tx
{
    /// <summary>
    /// Serves as the base class for exceptions thrown by
    /// <see cref="Transaction{T}.Validate()"/>.
    /// </summary>
    public abstract class InvalidTxException : Exception
    {
        /// <summary>
        /// Instantiates a new exception object with proper metadata. Use
        /// <see cref="InvalidTxException(TxId, string, Exception)"/> if innerException
        /// is required.
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

        /// <inheritdoc cref="InvalidTxException(TxId, string)"/>
        /// <param name="txid">The invalid <see cref="Transaction{T}"/>'s
        /// <see cref="Transaction{T}.Id"/>.  It is automatically included to
        /// the <see cref="Exception.Message"/> string.</param>
        /// <param name="message">A descriptive error message for programmers.
        /// </param>
        /// <param name="innerException">The <see cref="Exception"/> for
        /// <see cref="Exception.InnerException"/>.</param>
        protected InvalidTxException(
            TxId txid,
            string message,
            Exception innerException)
            : base($"{txid.ToHex()}: {message}", innerException)
        {
            TxId = txid;
        }

        /// <summary>
        /// The <see cref="TxId"/> of the invalid <see cref="Transaction{T}"/>.
        /// </summary>
        public TxId TxId { get; }
    }
}
