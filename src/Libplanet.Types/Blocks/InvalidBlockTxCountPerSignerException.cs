using System;
using Libplanet.Crypto;
using Libplanet.Types.Tx;

namespace Libplanet.Types.Blocks
{
    /// <summary>
    /// An exception thrown when the count of <see cref="Block.Transactions"/>
    /// does not follow the constraint provided by <see cref="IBlockPolicy"/>.
    /// </summary>
    [Serializable]
    public sealed class InvalidBlockTxCountPerSignerException : BlockPolicyViolationException
    {
        /// <summary>
        /// Initializes a new instance of <see cref="InvalidBlockTxCountPerSignerException"/> class.
        /// </summary>
        /// <param name="message">The message that describes the error.</param>
        /// <param name="signer">An offending <see cref="Address"/> with too many
        /// <see cref="Transaction"/>'s in a <see cref="Block"/>.</param>
        /// <param name="txCount">The invalid count of <see cref="Block.Transactions"/>
        /// by <paramref name="signer"/> according to the <see cref="IBlockPolicy"/>.</param>
        public InvalidBlockTxCountPerSignerException(string message, Address signer, int txCount)
            : base(message)
        {
            Signer = signer;
            TxCount = txCount;
        }

        public Address Signer { get; private set; }

        public int TxCount { get; private set; }
    }
}
