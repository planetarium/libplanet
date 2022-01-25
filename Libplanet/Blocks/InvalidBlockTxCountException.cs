using System;
using System.Runtime.Serialization;
using Libplanet.Blockchain.Policies;

namespace Libplanet.Blocks
{
    /// <summary>
    /// An exception thrown when the count of <see cref="Block{T}.Transactions"/>
    /// does not follow the constraint provided by <see cref="IBlockPolicy{T}"/>.
    /// </summary>
    [Serializable]
    public sealed class InvalidBlockTxCountException : BlockPolicyViolationException
    {
        /// <summary>
        /// Initializes a new instance of <see cref="InvalidBlockTxCountException"/> class.
        /// </summary>
        /// <param name="message">The message that describes the error.</param>
        /// <param name="txCount">The invalid count of <see cref="Block{T}.Transactions"/>
        /// according to <see cref="IBlockPolicy{T}"/>.</param>
        public InvalidBlockTxCountException(string message, int txCount)
            : base(message)
        {
            TxCount = txCount;
        }

        private InvalidBlockTxCountException(SerializationInfo info, StreamingContext context)
            : base(info.GetString(nameof(Message)) ?? string.Empty)
        {
            TxCount = info.GetInt32(nameof(TxCount));
        }

        public int TxCount { get; private set; }

        public override void GetObjectData(SerializationInfo info, StreamingContext context)
        {
            base.GetObjectData(info, context);
            info.AddValue(nameof(TxCount), TxCount);
        }
    }
}
