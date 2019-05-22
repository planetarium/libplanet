using System;
using System.Diagnostics.CodeAnalysis;
using Libplanet.Blockchain;

namespace Libplanet.Tx
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
        /// <param name="improperNonce">The actual
        /// <see cref="Transaction{T}.Nonce"/>.</param>
        /// <param name="message">The message that describes the error.</param>
        [SuppressMessage(
            "Microsoft.StyleCop.CSharp.ReadabilityRules",
            "SA1118",
            Justification = "A long error message should be multiline.")]
        public InvalidTxNonceException(
            TxId txid,
            long expectedNonce,
            long improperNonce,
            string message)
            : base(
                txid,
                $"{message}\n" +
                $"Expected nonce: {expectedNonce}\n" +
                $"Improper nonce: {improperNonce}")
        {
            ExpectedNonce = expectedNonce;
            ImproperNonce = improperNonce;
        }

        /// <summary>
        /// <see cref="BlockChain{T}.GetNonce"/> result of the
        /// <see cref="Transaction{T}.Signer"/>.
        /// </summary>
        public long ExpectedNonce { get; }

        /// <summary>
        /// The actual <see cref="Transaction{T}.Nonce"/>, which is improper.
        /// </summary>
        public long ImproperNonce { get; }
    }
}
