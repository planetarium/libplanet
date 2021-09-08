#nullable enable
using System;
using System.Runtime.Serialization;
using Libplanet.Blockchain.Policies;

namespace Libplanet.Blocks
{
    /// <summary>
    /// The exception that is thrown when a <see cref="Block{T}"/>'s
    /// <see cref="Block{T}.Transactions"/> Count is too small.
    /// </summary>
    [Serializable]
    public sealed class InvalidBlockMinTxException : InvalidBlockException, ISerializable
    {
        /// <summary>
        /// Initializes a new instance of <see cref="InvalidBlockBytesLengthException"/> class.
        /// </summary>
        /// <param name="transactionCount">The invalid <see cref="Block{T}"/>'s
        /// <see cref="Block{T}.Transactions"/> Count.  It is automatically included to the
        /// <see cref="Exception.Message"/> string.</param>
        /// <param name="minTransactionsPerBlock">The minimum allowed transactions.  It is
        /// automatically included to the <see cref="Exception.Message"/> string.</param>
        /// <param name="message">The message that describes the error.</param>
        public InvalidBlockMinTxException(
            int transactionCount,
            int minTransactionsPerBlock,
            string message
        )
            : base(
                $"{message}\n" +
                $"Actual: {transactionCount} bytes\n" +
                $"Allowed (min): {minTransactionsPerBlock} bytes")
        {
            TransactionCount = transactionCount;
            MinTransactionsPerBlock = minTransactionsPerBlock;
        }

        private InvalidBlockMinTxException(SerializationInfo info, StreamingContext context)
            : base(info.GetString(nameof(Message)) ?? string.Empty)
        {
            TransactionCount = info.GetInt32(nameof(TransactionCount));
            MinTransactionsPerBlock = info.GetInt32(nameof(MinTransactionsPerBlock));
        }

        /// <summary>
        /// The bytes length of the actual block.
        /// </summary>
        public int TransactionCount { get; set; }

        /// <summary>
        /// The maximum allowed length of a block in bytes.
        /// </summary>
        /// <seealso cref="IBlockPolicy{T}.GetMaxBlockBytes(long)"/>
        public int MinTransactionsPerBlock { get; set; }

        public override void GetObjectData(SerializationInfo info, StreamingContext context)
        {
            base.GetObjectData(info, context);
            info.AddValue(nameof(Message), Message);
            info.AddValue(nameof(TransactionCount), TransactionCount);
            info.AddValue(nameof(MinTransactionsPerBlock), MinTransactionsPerBlock);
        }
    }
}
