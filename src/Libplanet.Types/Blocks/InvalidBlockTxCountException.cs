using System;

namespace Libplanet.Types.Blocks
{
    /// <summary>
    /// An exception thrown when the count of <see cref="Block.Transactions"/>
    /// does not follow the constraint provided by <see cref="IBlockPolicy"/>.
    /// </summary>
    [Serializable]
    public sealed class InvalidBlockTxCountException : BlockPolicyViolationException
    {
        /// <summary>
        /// Initializes a new instance of <see cref="InvalidBlockTxCountException"/> class.
        /// </summary>
        /// <param name="message">The message that describes the error.</param>
        /// <param name="txCount">The invalid count of <see cref="Block.Transactions"/>
        /// according to <see cref="IBlockPolicy"/>.</param>
        public InvalidBlockTxCountException(string message, int txCount)
            : base(message)
        {
            TxCount = txCount;
        }

        public int TxCount { get; private set; }
    }
}
