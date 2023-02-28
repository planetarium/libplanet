using System;
using Libplanet.Blockchain;
using Libplanet.Blocks;

namespace Libplanet.Tx
{
    /// <summary>
    /// An exception that is thrown when the <see cref="Transaction{T}.Nonce"/>
    /// of a <see cref="Transaction{T}"/> included in a <see cref="Block{T}"/>
    /// is inconsistent with the expected nonce for the <see cref="Transaction{T}.Signer"/>
    /// when appending to a <see cref="BlockChain{T}"/>.
    /// </summary>
    [Serializable]
    public sealed class InvalidTxNonceException : InvalidTxException
    {
        /// <summary>
        /// Initializes a new instance of the
        /// <see cref="InvalidTxNonceException"/> class.
        /// </summary>
        /// <param name="message">The message that describes the error.</param>
        /// <param name="txId">The invalid <see cref="Transaction{T}"/>'s
        /// <see cref="Transaction{T}.Id"/>.  It is automatically included to
        /// the <see cref="Exception.Message"/> string.</param>
        /// <param name="expectedNonce">The expected <see cref="Transaction{T}.Nonce"/> value
        /// for the <see cref="Transaction{T}"/>.</param>
        /// <param name="improperNonce">The actual <see cref="Transaction{T}.Nonce"/>.</param>
        public InvalidTxNonceException(
            string message,
            TxId txId,
            long expectedNonce,
            long improperNonce)
            : base(message, txId)
        {
            ExpectedNonce = expectedNonce;
            ImproperNonce = improperNonce;
        }

        /// <summary>
        /// The expected <see cref="Transaction{T}.Nonce"/> value
        /// for the <see cref="Transaction{T}"/> with <see cref="TxId"/>
        /// as its <see cref="Transaction{T}.Id"/>.
        /// </summary>
        public long ExpectedNonce { get; }

        /// <summary>
        /// The actual <see cref="Transaction{T}.Nonce"/>, which is improper.
        /// </summary>
        public long ImproperNonce { get; }
    }
}
