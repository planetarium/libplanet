using System;
using System.Diagnostics.CodeAnalysis;
using Libplanet.Common.Types.Blocks;

namespace Libplanet.Common.Types.Tx
{
    /// <summary>
    /// The exception that is thrown when the <see cref="Transaction.GenesisHash"/>
    /// is different from the <see cref="HashDigest{T}"/> of
    /// <see cref="BlockChain.Genesis"/>.
    /// </summary>
    [Serializable]
    public sealed class InvalidTxGenesisHashException : InvalidTxException
    {
        /// <summary>
        /// Initializes a new instance of the
        /// <see cref="InvalidTxGenesisHashException"/> class.
        /// </summary>
        /// <param name="message">The message that describes the error.</param>
        /// <param name="txid">The invalid <see cref="Transaction"/>'s
        /// <see cref="Transaction.Id"/>.  It is automatically included to
        /// the <see cref="Exception.Message"/> string.</param>
        /// <param name="expectedGenesisHash">The <see cref="HashDigest{SHA256}"/>
        /// value of <see cref="BlockChain.Genesis"/>.</param>
        /// <param name="improperGenesisHash">The actual
        /// <see cref="Transaction.GenesisHash"/>.  This can be <see langword="null"/>.</param>
        [SuppressMessage(
            "Microsoft.StyleCop.CSharp.ReadabilityRules",
            "SA1118",
            Justification = "A long error message should be multiline.")]
        public InvalidTxGenesisHashException(
            string message,
            TxId txid,
            BlockHash expectedGenesisHash,
            BlockHash? improperGenesisHash)
            : base(
                $"{message}\n" +
                $"Expected genesis hash: {expectedGenesisHash}\n" +
                $"Improper genesis hash: {improperGenesisHash}",
                txid)
        {
            ExpectedGenesisHash = expectedGenesisHash;
            ImproperGenesisHash = improperGenesisHash;
        }

        /// <summary>
        /// The <see cref="HashDigest{SHA256}"/> value of
        /// <see cref="BlockChain.Genesis"/>.
        /// </summary>
        public BlockHash ExpectedGenesisHash { get; }

        /// <summary>
        /// The actual <see cref="Transaction.GenesisHash"/>, which is improper.
        /// </summary>
        public BlockHash? ImproperGenesisHash { get; }
    }
}
