#nullable enable
using System;
using System.Runtime.Serialization;
using Libplanet.Blockchain.Policies;

namespace Libplanet.Blocks
{
    /// <summary>
    /// An exception thrown when a <see cref="Block{T}"/>'s encoded bytes exceeds
    /// <see cref="IBlockPolicy{T}.GetMaxBlockBytes(long)"/>.
    /// </summary>
    [Serializable]
    public sealed class InvalidBlockBytesLengthException : BlockPolicyViolationException
    {
        /// <summary>
        /// Initializes a new instance of <see cref="InvalidBlockBytesLengthException"/> class.
        /// </summary>
        /// <param name="message">The message that describes the error.</param>
        /// <param name="bytesLength">The actual length of the <see cref="Block{T}"/>'s encoded
        /// bytes.</param>
        public InvalidBlockBytesLengthException(string message, long bytesLength)
            : base(message)
        {
            BytesLength = bytesLength;
        }

        private InvalidBlockBytesLengthException(SerializationInfo info, StreamingContext context)
            : base(info.GetString(nameof(Message)) ?? string.Empty)
        {
            BytesLength = info.GetInt64(nameof(BytesLength));
        }

        /// <summary>
        /// The actual length of the <see cref="Block{T}"/>'s encoded bytes.
        /// </summary>
        public long BytesLength { get; private set; }

        /// <inheritdoc cref="ISerializable.GetObjectData(SerializationInfo, StreamingContext)"/>
        public override void GetObjectData(SerializationInfo info, StreamingContext context)
        {
            base.GetObjectData(info, context);
            info.AddValue(nameof(BytesLength), BytesLength);
        }
    }
}
