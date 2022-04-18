using System;
using Libplanet.Blockchain.Policies;

namespace Libplanet.Tx
{
    /// <summary>
    /// An exception <em>returned</em> when a <see cref="Transaction{T}"/> violates
    /// a <see cref="IBlockPolicy{T}"/>.
    /// </summary>
    [Serializable]
    public class TxPolicyViolationException : InvalidTxException
    {
        /// <summary>
        /// Creates a new <see cref="TxPolicyViolationException"/> instance.
        /// </summary>
        /// <param name="txid">The <see cref="Transaction{T}.Id"/> of the
        /// <see cref="Transaction{T}"/> violating a <see cref="IBlockPolicy{T}"/>.
        /// Gets prepended to <paramref name="message"/>.</param>
        /// <param name="message">A description for the reason of violation
        /// given by an implementation of <see cref="IBlockPolicy{T}"/>.
        /// </param>
        public TxPolicyViolationException(TxId txid, string message)
            : base(txid, message)
        {
        }

        /// <inheritdoc cref="Libplanet.Tx.TxPolicyViolationException" />
        /// <param name="txid">The <see cref="Transaction{T}.Id"/> of the
        /// <see cref="Transaction{T}"/> violating a <see cref="IBlockPolicy{T}"/>.
        /// Gets prepended to <paramref name="message"/>.</param>
        /// <param name="message">A description for the reason of violation
        /// given by an implementation of <see cref="IBlockPolicy{T}"/>.
        /// </param> <param name="innerException">The <see cref="Exception"/> for
        /// <see cref="Exception.InnerException"/>.</param>
        public TxPolicyViolationException(
            TxId txid,
            string message,
            Exception innerException)
            : base(txid, message, innerException)
        {
        }
    }
}
