using System;
using System.Collections.Generic;
using System.Diagnostics.Contracts;
using System.Runtime.Serialization;
using Bencodex;
using Libplanet.Blocks;
using Libplanet.Serialization;

namespace Libplanet.Tx
{
    /// <summary>
    /// Summarizes an execution result of a <see cref="Transaction{T}"/>.
    /// <para>Note that <see cref="Transaction{T}"/>s cannot be executed without belonging to
    /// a <see cref="Block{T}"/>, and even if it's the same <see cref="Transaction{T}"/> its
    /// result can vary depending on <see cref="Block{T}"/> that it is executed within.</para>
    /// </summary>
    /// <seealso cref="TxSuccess"/>
    /// <seealso cref="TxFailure"/>
    [Serializable]
    public abstract class TxExecution : ISerializable
    {
        protected static readonly Codec _codec = new Codec();

        protected TxExecution(SerializationInfo info, StreamingContext context)
            : this(
                info.GetValue<BlockHash>(nameof(BlockHash)),
                info.GetValue<TxId>(nameof(TxId)),
                info.GetValue<List<List<string>>>(nameof(ActionsLogsList)))
        {
        }

        private protected TxExecution(
            BlockHash blockHash,
            TxId txId,
            List<List<string>>? actionsLogsList)
        {
            BlockHash = blockHash;
            TxId = txId;
            ActionsLogsList = actionsLogsList;
        }

        /// <summary>
        /// The <see cref="Block{T}.Hash"/> of the <see cref="Block{T}"/> that
        /// the <see cref="Transaction{T}"/> is executed within.
        /// </summary>
        [Pure]
        public BlockHash BlockHash { get; }

        /// <summary>
        /// The executed <see cref="Transaction{T}"/>'s <see cref="Transaction{T}.Id"/>.
        /// </summary>
        [Pure]
        public TxId TxId { get; }

        /// <summary>
        /// The logs recorded while executing <see cref="Transaction{T}"/>'s actions.
        /// </summary>
        [Pure]
        public List<List<string>>? ActionsLogsList { get; }

        /// <inheritdoc cref="ISerializable.GetObjectData(SerializationInfo, StreamingContext)"/>
        public virtual void GetObjectData(SerializationInfo info, StreamingContext context)
        {
            info.AddValue(nameof(BlockHash), BlockHash);
            info.AddValue(nameof(TxId), TxId);
            info.AddValue(nameof(ActionsLogsList), ActionsLogsList);
        }
    }
}
