using System;

namespace Libplanet.Types.Blocks
{
    /// <summary>
    /// An exception thrown when the encoded bytes of <see cref="Block.Transactions"/> exceeds
    /// <see cref="IBlockPolicy.GetMaxTransactionsBytes(long)"/>.
    /// </summary>
    public sealed class InvalidBlockBytesLengthException : BlockPolicyViolationException
    {
        /// <summary>
        /// Initializes a new instance of <see cref="InvalidBlockBytesLengthException"/> class.
        /// </summary>
        /// <param name="message">The message that describes the error.</param>
        /// <param name="bytesLength">The actual encoded length of
        /// <see cref="Block.Transactions"/> as bytes.</param>
        public InvalidBlockBytesLengthException(string message, long bytesLength)
            : base(message)
        {
            BytesLength = bytesLength;
        }

        /// <summary>
        /// The actual encoded length of <see cref="Block.Transactions"/> as bytes.
        /// </summary>
        public long BytesLength { get; private set; }
    }
}
