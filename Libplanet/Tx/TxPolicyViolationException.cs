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
        /// Creates a new <see cref="TxPolicyViolationException"/> instance. Use
        /// <see cref="TxPolicyViolationException(string, TxId, Exception)"/> if innerException
        /// is required.
        /// </summary>
        /// <param name="message">A description for the reason of violation
        /// given by an implementation of <see cref="IBlockPolicy{T}"/>.
        /// </param>
        /// <param name="txid">The <see cref="Transaction{T}.Id"/> of the
        /// <see cref="Transaction{T}"/> violating a <see cref="IBlockPolicy{T}"/>.
        /// Gets prepended to <paramref name="message"/>.</param>
        public TxPolicyViolationException(string message, TxId txid)
            : base(message, txid)
        {
        }

        /// <inheritdoc cref="TxPolicyViolationException(string, TxId)"/>
        /// <param name="message">A description for the reason of violation
        /// given by an implementation of <see cref="IBlockPolicy{T}"/>. </param>
        /// <param name="txid">The <see cref="Transaction{T}.Id"/> of the
        /// <see cref="Transaction{T}"/> violating a <see cref="IBlockPolicy{T}"/>.
        /// Gets prepended to <paramref name="message"/>.</param>
        /// <param name="innerException">The <see cref="Exception"/> for
        /// <see cref="Exception.InnerException"/>.</param>
        public TxPolicyViolationException(
            string message,
            TxId txid,
            Exception innerException)
            : base(message, txid, innerException)
        {
        }
    }
}
