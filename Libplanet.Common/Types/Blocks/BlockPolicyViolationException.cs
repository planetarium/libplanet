using System;
using System.Runtime.Serialization;

namespace Libplanet.Common.Types.Blocks
{
    /// <summary>
    /// An exception <em>returned</em> when a <see cref="Block"/> violates
    /// a <see cref="IBlockPolicy"/>.
    /// </summary>
    [Serializable]
    public class BlockPolicyViolationException : InvalidBlockException
    {
        /// <summary>
        /// Creates a new <see cref="BlockPolicyViolationException"/> instance.
        /// </summary>
        /// <param name="message">A description for the reason of violation
        /// given by an implementation of <see cref="IBlockPolicy"/>.
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
