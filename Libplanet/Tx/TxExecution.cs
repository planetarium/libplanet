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
    /// Summarizes an execution result of a <see cref="Transaction"/>.
    /// <para>Note that <see cref="Transaction"/>s cannot be executed without belonging to
    /// a <see cref="Block"/>, and even if it's the same <see cref="Transaction"/> its
    /// result can vary depending on <see cref="Block"/> that it is executed within.</para>
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
                info.GetValue<List<IReadOnlyList<string>>>(nameof(ActionsLogsList)))
        {
        }

        private protected TxExecution(
            BlockHash blockHash,
            TxId txId,
            List<IReadOnlyList<string>>? actionsLogsList)
        {
            BlockHash = blockHash;
            TxId = txId;
            ActionsLogsList = actionsLogsList;
        }

        /// <summary>
        /// The <see cref="Block.Hash"/> of the <see cref="Block"/> that
        /// the <see cref="Transaction"/> is executed within.
        /// </summary>
        [Pure]
        public BlockHash BlockHash { get; }

        /// <summary>
        /// The executed <see cref="Transaction"/>'s <see cref="Transaction.Id"/>.
        /// </summary>
        [Pure]
        public TxId TxId { get; }

        /// <summary>
        /// The logs recorded while executing <see cref="Transaction"/>'s actions.
        /// </summary>
        [Pure]
        public List<IReadOnlyList<string>>? ActionsLogsList { get; }

        /// <inheritdoc cref="ISerializable.GetObjectData(SerializationInfo, StreamingContext)"/>
        public virtual void GetObjectData(SerializationInfo info, StreamingContext context)
        {
            info.AddValue(nameof(BlockHash), BlockHash);
            info.AddValue(nameof(TxId), TxId);
            info.AddValue(nameof(ActionsLogsList), ActionsLogsList);
        }
    }
}
