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
        /// Instantiates a new exception object with proper metadata.
        /// </summary>
        /// <param name="txid">The invalid <see cref="Transaction{T}"/>'s
        /// <see cref="Transaction{T}.Id"/>.  It is automatically included to
        /// the <see cref="Exception.Message"/> string.</param>
        /// <param name="message">A descriptive error message for programmers.
        /// </param> <param name="inner">A Inner-exception.
        /// </param>
#nullable enable
        protected InvalidTxException(TxId txid, string message, Exception? inner)
            : base($"{txid.ToHex()}: {message}", inner)
        {
            TxId = txid;
        }
#nullable disable
        /// <summary>
        /// The <see cref="TxId"/> of the invalid <see cref="Transaction{T}"/>.
        /// </summary>
        public TxId TxId { get; }
    }
}
