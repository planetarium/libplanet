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
    public sealed class BlockInsufficientTxsException : BlockPolicyViolationException
    {
        /// <summary>
        /// Initializes a new instance of <see cref="InvalidBlockBytesLengthException"/> class.
        /// </summary>
        /// <param name="message">The message that describes the error.</param>
        /// <param name="transactionCount">The invalid <see cref="Block{T}"/>'s
        /// <see cref="Block{T}.Transactions"/> Count.  It is automatically included to the
        /// <see cref="Exception.Message"/> string.</param>
        /// <param name="minTransactionsPerBlock">The minimum allowed transactions.  It is
        /// automatically included to the <see cref="Exception.Message"/> string.</param>
        public BlockInsufficientTxsException(
            string message,
            int transactionCount,
            int minTransactionsPerBlock
        )
            : base(message)
        {
            TransactionCount = transactionCount;
            MinTransactionsPerBlock = minTransactionsPerBlock;
        }

        private BlockInsufficientTxsException(SerializationInfo info, StreamingContext context)
            : base(info.GetString(nameof(Message)) ?? string.Empty)
        {
            TransactionCount = info.GetInt32(nameof(TransactionCount));
            MinTransactionsPerBlock = info.GetInt32(nameof(MinTransactionsPerBlock));
        }

        /// <summary>
        /// The bytes length of the actual block.
        /// </summary>
        public int TransactionCount { get; private set; }

        /// <summary>
        /// The maximum allowed length of a block in bytes.
        /// </summary>
        /// <seealso cref="IBlockPolicy{T}.GetMaxBlockBytes(long)"/>
        public int MinTransactionsPerBlock { get; private set; }

        public override void GetObjectData(SerializationInfo info, StreamingContext context)
        {
            base.GetObjectData(info, context);
            info.AddValue(nameof(TransactionCount), TransactionCount);
            info.AddValue(nameof(MinTransactionsPerBlock), MinTransactionsPerBlock);
        }
    }
}
