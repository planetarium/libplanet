using System;
using System.Runtime.Serialization;
using Libplanet.Blockchain.Policies;

namespace Libplanet.Blocks
{
    /// <summary>
    /// An exception <em>returned</em> when a <see cref="Block{T}"/> violates
    /// a <see cref="IBlockPolicy{T}"/>.
    /// </summary>
    [Serializable]
    public class BlockPolicyViolationException : InvalidBlockException
    {
        /// <summary>
        /// Creates a new <see cref="BlockPolicyViolationException"/> instance.
        /// </summary>
        /// <param name="message">A description for the reason of violation
        /// given by an implementation of <see cref="IBlockPolicy{T}"/>.
        /// </param>
        public BlockPolicyViolationException(string message)
            : base(message)
        {
        }

        protected BlockPolicyViolationException(SerializationInfo info, StreamingContext context)
            : base(info, context)
        {
        }
    }
}
