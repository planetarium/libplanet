#nullable enable
using System;
using System.Runtime.Serialization;
using Libplanet.Blockchain.Policies;

namespace Libplanet.Blocks
{
    /// <summary>
    /// The exception that is thrown when a <see cref="Block{T}"/>'s
    /// <see cref="Block{T}.BytesLength"/> (i.e., the length of bytes in its serialized format)
    /// is too long.
    /// </summary>
    [Serializable]
    public sealed class InvalidBlockBytesLengthException : InvalidBlockException, ISerializable
    {
        /// <summary>
        /// Initializes a new instance of <see cref="InvalidBlockBytesLengthException"/> class.
        /// </summary>
        /// <param name="blockBytesLength">The invalid <see cref="Block{T}"/>'s
        /// <see cref="Block{T}.BytesLength"/>.  It is automatically included to the
        /// <see cref="Exception.Message"/> string.</param>
        /// <param name="maxBlockBytesLength">The maximum allowed length of bytes.  It is
        /// automatically included to the <see cref="Exception.Message"/> string.</param>
        /// <param name="message">The message that describes the error.</param>
        public InvalidBlockBytesLengthException(
            int blockBytesLength,
            int maxBlockBytesLength,
            string message
        )
            : base(
                $"{message}\n" +
                $"Actual: {blockBytesLength} bytes\n" +
                $"Allowed (max): {maxBlockBytesLength} bytes")
        {
            BlockBytesLength = blockBytesLength;
            MaxBlockBytesLength = maxBlockBytesLength;
        }

        private InvalidBlockBytesLengthException(SerializationInfo info, StreamingContext context)
            : base(info.GetString(nameof(Message)) ?? string.Empty)
        {
            BlockBytesLength = info.GetInt32(nameof(BlockBytesLength));
            MaxBlockBytesLength = info.GetInt32(nameof(MaxBlockBytesLength));
        }

        /// <summary>
        /// The bytes length of the actual block.
        /// </summary>
        public int BlockBytesLength { get; set; }

        /// <summary>
        /// The maximum allowed length of a block in bytes.
        /// </summary>
        /// <seealso cref="IBlockPolicy{T}.GetMaxBlockBytes(long)"/>
        public int MaxBlockBytesLength { get; set; }

        public override void GetObjectData(SerializationInfo info, StreamingContext context)
        {
            base.GetObjectData(info, context);
            info.AddValue(nameof(Message), Message);
            info.AddValue(nameof(BlockBytesLength), BlockBytesLength);
            info.AddValue(nameof(MaxBlockBytesLength), MaxBlockBytesLength);
        }
    }
}
