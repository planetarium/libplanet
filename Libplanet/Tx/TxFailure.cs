#nullable enable
using System;
using System.Diagnostics.Contracts;
using System.Runtime.Serialization;
using Bencodex;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Serialization;

namespace Libplanet.Tx
{
    /// <summary>
    /// Summarizes an execution result of a <see cref="Transaction{T}"/> with any exception-throwing
    /// actions.
    /// </summary>
    [Serializable]
    public sealed class TxFailure : TxExecution
    {
        private static readonly Codec _codec = new Codec();

        internal TxFailure(BlockHash blockHash, TxId txId, Exception exception)
            : base(blockHash, txId)
        {
            Type excType = exception.GetType();
            ExceptionName = excType.FullName ?? string.Empty;
            ExceptionMetadata = exception.ExtractMetadata();
        }

        private TxFailure(SerializationInfo info, StreamingContext context)
            : base(info, context)
        {
            ExceptionName = info.GetString(nameof(ExceptionName)) ?? string.Empty;
            ExceptionMetadata
                = info.GetValue<byte[]?>(nameof(ExceptionMetadata)) is { } bytes
                ? _codec.Decode(bytes)
                : null;
        }

        /// <summary>
        /// The name of the exception type, e.g., <c>ArgumentException</c>.
        /// </summary>
        [Pure]
        public string ExceptionName { get; }

        /// <summary>
        /// Optional metadata about the exception.
        /// </summary>
        [Pure]
        public IValue? ExceptionMetadata { get; }

        /// <inheritdoc cref="ISerializable.GetObjectData(SerializationInfo, StreamingContext)"/>
        public override void GetObjectData(SerializationInfo info, StreamingContext context)
        {
            base.GetObjectData(info, context);
            info.AddValue(nameof(ExceptionName), ExceptionName);
            info.AddValue(
                nameof(ExceptionMetadata),
                ExceptionMetadata is { } m ? _codec.Encode(m) : null
            );
        }
    }
}
