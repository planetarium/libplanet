#nullable enable
using System;
using System.Runtime.Serialization;
using Libplanet.Blockchain.Policies;

namespace Libplanet.Blocks
{
    /// <summary>
    /// The exception that is thrown when a <see cref="Block{T}"/>'s
    /// <see cref="Block{T}.BytesLength"/> is too long.
    /// </summary>
    [Serializable]
    public sealed class InvalidBlockBytesLengthException : BlockPolicyViolationException
    {
        /// <summary>
        /// Initializes a new instance of <see cref="InvalidBlockBytesLengthException"/> class.
        /// </summary>
        /// <param name="message">The message that describes the error.</param>
        /// <param name="bytesLength">The invalid <see cref="Block{T}"/>'s
        /// <see cref="Block{T}.BytesLength"/>.  It is automatically included to the
        /// <see cref="Exception.Message"/> string.</param>
        /// <param name="maxBlockBytesLength">The maximum allowed length of bytes.  It is
        /// automatically included to the <see cref="Exception.Message"/> string.</param>
        public InvalidBlockBytesLengthException(
            string message,
            int bytesLength,
            int maxBlockBytesLength
        )
            : base(message)
        {
            BytesLength = bytesLength;
            MaxBlockBytesLength = maxBlockBytesLength;
        }

        private InvalidBlockBytesLengthException(SerializationInfo info, StreamingContext context)
            : base(info.GetString(nameof(Message)) ?? string.Empty)
        {
            BytesLength = info.GetInt32(nameof(BytesLength));
            MaxBlockBytesLength = info.GetInt32(nameof(MaxBlockBytesLength));
        }

        /// <summary>
        /// The bytes length of the actual block.
        /// </summary>
        public int BytesLength { get; private set; }

        /// <summary>
        /// The maximum allowed length of a block in bytes.
        /// </summary>
        /// <seealso cref="IBlockPolicy{T}.GetMaxBlockBytes(long)"/>
        public int MaxBlockBytesLength { get; private set; }

        public override void GetObjectData(SerializationInfo info, StreamingContext context)
        {
            base.GetObjectData(info, context);
            info.AddValue(nameof(BytesLength), BytesLength);
            info.AddValue(nameof(MaxBlockBytesLength), MaxBlockBytesLength);
        }
    }
}
