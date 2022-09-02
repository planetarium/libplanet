using System;

namespace Libplanet.Tx
{
    /// <summary>
    /// The exception that is thrown when a given <see cref="TxId"/> cannot be
    /// found.
    /// </summary>
    /// <remarks>This does <em>not</em> mean a given value is an invalid
    /// encoding of <see cref="TxId"/>, but there is no corresponding entry to
    /// a given <see cref="TxId"/>, which is <em>valid</em>.</remarks>
    [Serializable]
    public class InvalidTxIdException : InvalidTxException
    {
        /// <summary>
        /// Creates a new <see cref="InvalidTxIdException"/> object.
        /// </summary>
        /// <param name="message">Specifies an <see cref="Exception.Message"/>.
        /// </param>
        /// <param name="txid">The invalid <see cref="TxId"/>.
        /// It is automatically included to the <see cref="Exception.Message"/>
        /// string.</param>
        public InvalidTxIdException(string message, TxId txid)
            : base(message, txid)
        {
        }
    }
}
