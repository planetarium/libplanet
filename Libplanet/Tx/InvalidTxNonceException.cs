using System;
using Libplanet.Blockchain;
using Libplanet.Tx;

namespace Libplanet.Net
{
    /// <summary>
    /// The exception that is thrown when the <see cref="Transaction{T}.Nonce"/>
    /// is different from <see cref="BlockChain{T}.GetNonce"/> result of
    /// the <see cref="Transaction{T}.Signer"/>.
    /// </summary>
    [Serializable]
    public sealed class InvalidTxNonceException : InvalidTxException
    {
        /// <summary>
        /// Initializes a new instance of the
        /// <see cref="InvalidTxNonceException"/> class.
        /// </summary>
        /// <param name="txid">The invalid <see cref="Transaction{T}"/>'s
        /// <see cref="Transaction{T}.Id"/>.  It is automatically included to
        /// the <see cref="Exception.Message"/> string.</param>
        /// <param name="expectedNonce"><see cref="BlockChain{T}.GetNonce"/>
        /// result of the <see cref="Transaction{T}.Signer"/>.</param>
        /// <param name="actualNonce">The actual
        /// <see cref="Transaction{T}.Nonce"/>.</param>
        /// <param name="message">The message that describes the error.</param>
        public InvalidTxNonceException(
            TxId txid,
            long expectedNonce,
            long actualNonce,
            string message)
            : base(
                txid,
                $"{message}, Expected: {expectedNonce}, Actual: {actualNonce}")
        {
            ExpectedNonce = expectedNonce;
            ActualNonce = actualNonce;
        }

        /// <summary>
        /// <see cref="BlockChain{T}.GetNonce"/> result of the
        /// <see cref="Transaction{T}.Signer"/>.
        /// </summary>
        public long ExpectedNonce { get; }

        /// <summary>
        /// The actual <see cref="Transaction{T}.Nonce"/>.
        /// </summary>
        public long ActualNonce { get; }
    }
}
