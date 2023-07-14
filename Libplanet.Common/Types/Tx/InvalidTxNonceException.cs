using System;
using Libplanet.Common.Types.Blocks;

namespace Libplanet.Common.Types.Tx
{
    /// <summary>
    /// An exception that is thrown when the <see cref="Transaction.Nonce"/>
    /// of a <see cref="Transaction"/> included in a <see cref="Block"/>
    /// is inconsistent with the expected nonce for the <see cref="Transaction.Signer"/>
    /// when appending to a <see cref="BlockChain"/>.
    /// </summary>
    [Serializable]
    public sealed class InvalidTxNonceException : InvalidTxException
    {
        /// <summary>
        /// Initializes a new instance of the
        /// <see cref="InvalidTxNonceException"/> class.
        /// </summary>
        /// <param name="message">The message that describes the error.</param>
        /// <param name="txId">The invalid <see cref="Transaction"/>'s
        /// <see cref="Transaction.Id"/>.  It is automatically included to
        /// the <see cref="Exception.Message"/> string.</param>
        /// <param name="expectedNonce">The expected <see cref="Transaction.Nonce"/> value
        /// for the <see cref="Transaction"/>.</param>
        /// <param name="improperNonce">The actual <see cref="Transaction.Nonce"/>.</param>
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
        /// The expected <see cref="Transaction.Nonce"/> value
        /// for the <see cref="Transaction"/> with <see cref="TxId"/>
        /// as its <see cref="Transaction.Id"/>.
        /// </summary>
        public long ExpectedNonce { get; }

        /// <summary>
        /// The actual <see cref="Transaction.Nonce"/>, which is improper.
        /// </summary>
        public long ImproperNonce { get; }
    }
}
