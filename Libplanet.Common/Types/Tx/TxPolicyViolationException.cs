using System;

namespace Libplanet.Common.Types.Tx
{
    /// <summary>
    /// An exception <em>returned</em> when a <see cref="Transaction"/> violates
    /// a <see cref="IBlockPolicy"/>.
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
        /// given by an implementation of <see cref="IBlockPolicy"/>.
        /// </param>
        /// <param name="txid">The <see cref="Transaction.Id"/> of the
        /// <see cref="Transaction"/> violating a <see cref="IBlockPolicy"/>.
        /// Gets prepended to <paramref name="message"/>.</param>
        public TxPolicyViolationException(string message, TxId txid)
            : base(message, txid)
        {
        }

        /// <inheritdoc cref="TxPolicyViolationException(string, TxId)"/>
        /// <param name="message">A description for the reason of violation
        /// given by an implementation of <see cref="IBlockPolicy"/>. </param>
        /// <param name="txid">The <see cref="Transaction.Id"/> of the
        /// <see cref="Transaction"/> violating a <see cref="IBlockPolicy"/>.
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
