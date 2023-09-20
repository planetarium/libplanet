using System;
using System.Diagnostics.Contracts;
using Libplanet.Types.Blocks;

namespace Libplanet.Types.Tx
{
    /// <summary>
    /// Summarizes an execution result of a <see cref="Transaction"/> with any exception-throwing
    /// actions.
    /// </summary>
    public sealed class TxFailure : TxExecution
    {
        /// <summary>
        /// Creates a <see cref="TxFailure"/> instance.
        /// </summary>
        /// <param name="blockHash">The <see cref="Block.Hash"/> of the <see cref="Block"/>
        /// that the <see cref="Transaction"/> is executed within.</param>
        /// <param name="txId">The executed <see cref="Transaction"/>'s <see
        /// cref="Transaction.Id"/>.</param>
        /// <param name="exceptionName">The name of the exception type,
        /// e.g., <c>System.ArgumentException</c>.</param>
        /// <param name="exceptionMetadata">Optional metadata about the exception.</param>
        public TxFailure(
            BlockHash blockHash,
            TxId txId,
            string exceptionName
        )
            : base(blockHash, txId)
        {
            ExceptionName = exceptionName;
        }

        /// <summary>
        /// Creates a <see cref="TxFailure"/> instance.
        /// </summary>
        /// <param name="blockHash">The <see cref="Block.Hash"/> of the <see cref="Block"/>
        /// that the <see cref="Transaction"/> is executed within.</param>
        /// <param name="txId">The executed <see cref="Transaction"/>'s <see
        /// cref="Transaction.Id"/>.</param>
        /// <param name="exception">The uncaught exception thrown by an action in the transaction.
        /// </param>
        public TxFailure(
            BlockHash blockHash,
            TxId txId,
            Exception exception)
            : this(
                blockHash,
                txId,
                exception.GetType().FullName ?? string.Empty
            )
        {
        }

        /// <summary>
        /// The name of the exception type, e.g., <c>System.ArgumentException</c>.
        /// </summary>
        [Pure]
        public string ExceptionName { get; }
    }
}
