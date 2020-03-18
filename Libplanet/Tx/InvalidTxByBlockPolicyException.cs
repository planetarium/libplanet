using System;
using Libplanet.Blockchain.Policies;

namespace Libplanet.Tx
{
    /// <summary>
    /// The exception that is thrown when a <see cref="Transaction{T}"/> is determined that it is
    /// not valid by <see cref="IBlockPolicy{T}.IsTransactionValid"/> method.
    /// </summary>
    [Serializable]
    public class InvalidTxByBlockPolicyException : InvalidTxException
    {
        /// <summary>
        /// Creates a new <see cref="InvalidTxByBlockPolicyException"/> object.
        /// </summary>
        /// <param name="txid">The invalid <see cref="TxId"/>.
        /// It is automatically included to the <see cref="Exception.Message"/>
        /// string.</param>
        /// <param name="message">Specifies an <see cref="Exception.Message"/>.
        /// </param>
        public InvalidTxByBlockPolicyException(TxId txid, string message)
            : base(txid, message)
        {
        }
    }
}
