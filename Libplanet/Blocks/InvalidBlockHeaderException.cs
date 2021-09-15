#nullable enable
using System;
using System.Runtime.Serialization;

namespace Libplanet.Blocks
{
    /// <summary>
    /// The exception that is thrown when a block header is invalid so that a new
    /// <see cref="BlockHeader"/> instance with those data cannot be created.
    /// </summary>
    [Serializable]
    public class InvalidBlockHeaderException : Exception
    {
        /// <summary>
        /// Creates a new <see cref="InvalidBlockHeaderException"/> instance with
        /// optional <paramref name="blockIndex"/> and <paramref name="blockHash"/>.
        /// </summary>
        /// <param name="blockIndex">The index of the block header that has invalid data.
        /// It can be <c>null</c> if unknown.</param>
        /// <param name="blockHash">The hash of the block header that has invalid data.
        /// It can be <c>null</c> if unknown.</param>
        /// <param name="message">The message that explains the reason for the error.</param>
        /// <param name="innerException">The exception that is the cause of the current exception,
        /// or <c>null</c> if no inner exception is specified.  By default, <c>null</c>.</param>
        public InvalidBlockHeaderException(
            long? blockIndex,
            BlockHash? blockHash,
            string message,
            Exception? innerException = null
        )
            : base(BuildMessage(blockIndex, blockHash, message), innerException)
        {
            BlockIndex = blockIndex;
            BlockHash = blockHash;
        }

        private InvalidBlockHeaderException(SerializationInfo info, StreamingContext context)
            : base(info, context)
        {
            long index = info.GetInt64(nameof(BlockIndex));
            string? hash = info.GetString(nameof(BlockHash));
            BlockIndex = index < 0 ? (long?)null : index;
            try
            {
                BlockHash = hash is { } h ? Blocks.BlockHash.FromString(h) : (BlockHash?)null;
            }
            catch (Exception)
            {
                BlockHash = null;
            }
        }

        /// <summary>
        /// The index of the block header that has invalid data.  It can be <c>null</c> if unknown.
        /// </summary>
        public long? BlockIndex { get; }

        /// <summary>
        /// The hash of the block header that has invalid data.  It can be <c>null</c> if unknown.
        /// </summary>
        public BlockHash? BlockHash { get; }

        public override void GetObjectData(SerializationInfo info, StreamingContext context)
        {
            base.GetObjectData(info, context);
            info.AddValue(nameof(BlockIndex), BlockIndex ?? -1);
            info.AddValue(nameof(BlockHash), BlockHash?.ToString() ?? string.Empty);
        }

        private static string BuildMessage(long? blockIndex, BlockHash? blockHash, string message)
        {
            if (blockIndex is null && blockHash is null)
            {
                return message;
            }

            string prefix = (blockIndex is { } index ? $"#{index}" : string.Empty)
                + (blockIndex is null || blockHash is null ? string.Empty : " ")
                + (blockHash is { } hash ? hash.ToString() : string.Empty);
            return $"{prefix}: {message}";
        }
    }
}
