using System;
using System.Security.Cryptography;
#pragma warning disable S1128 // Remove this unnecessary 'using'
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;
#pragma warning restore S1128 // Remove this unnecessary 'using'
using Libplanet.Tx;

namespace Libplanet.Action
{
    /// <summary>
    /// The exception that is thrown during an <see cref="IAction"/> is being evaluated.
    /// <para>The actual exception that the <see cref="Action"/> threw
    /// is stored in the <see cref="Exception.InnerException"/> property.</para>
    /// </summary>
    [Serializable]
    public sealed class UnexpectedlyTerminatedActionException : Exception
    {
        /// <summary>
        /// Creates a new <see cref="UnexpectedlyTerminatedActionException"/> object.
        /// </summary>
        /// <param name="blockHash">The <see cref="Block{T}.Hash"/> of the <see cref="Block{T}"/>
        /// that <paramref name="action"/> belongs to.  This can be <c>null</c> on rehearsal mode.
        /// </param>
        /// <param name="blockIndex">The <see cref="Block{T}.Index"/> of the <see cref="Block{T}"/>
        /// that <paramref name="action"/> belongs to.  This can be <c>null</c> on rehearsal mode.
        /// </param>
        /// <param name="txid">The <see cref="Transaction{T}.Id"/> of
        /// the <see cref="Transaction{T}"/> that <paramref name="action"/> belongs to.
        /// This can be <c>null</c> on rehearsal mode or if <paramref name="action"/> is
        /// a <see cref="IBlockPolicy{T}.BlockAction"/>.
        /// </param>
        /// <param name="action">The <see cref="IAction"/> object which threw an exception.</param>
        /// <param name="message">Specifies a <see cref="Exception.Message"/>.</param>
        /// <param name="innerException">The actual exception that the <see cref="Action"/> threw.
        /// </param>
        public UnexpectedlyTerminatedActionException(
            HashDigest<SHA256>? blockHash,
            long? blockIndex,
            TxId? txid,
            IAction action,
            string message,
            Exception innerException
        )
            : base(message, innerException)
        {
            BlockHash = blockHash;
            BlockIndex = blockIndex;
            TxId = txid;
            Action = action;
        }

        /// <summary>
        /// The <see cref="Block{T}.Hash"/> of the <see cref="Block{T}"/> that <see cref="Action"/>
        /// belongs to.  This can be <c>null</c> on rehearsal mode.
        /// </summary>
        public HashDigest<SHA256>? BlockHash { get; }

        /// <summary>
        /// The <see cref="Block{T}.Index"/> of the <see cref="Block{T}"/> that <see cref="Action"/>
        /// belongs to.  This can be <c>null</c> on rehearsal mode.
        /// </summary>
        public long? BlockIndex { get; }

        /// <summary>
        /// The <see cref="Transaction{T}.Id"/> of the <see cref="Transaction{T}"/> that
        /// <see cref="Action"/> belongs to.  This can be <c>null</c> on rehearsal mode or
        /// if <see cref="Action"/> is a <see cref="IBlockPolicy{T}.BlockAction"/>.
        /// </summary>
        public TxId? TxId { get; }

        /// <summary>
        /// The <see cref="IAction"/> object which threw an exception.
        /// </summary>
        public IAction Action { get; }
    }
}
