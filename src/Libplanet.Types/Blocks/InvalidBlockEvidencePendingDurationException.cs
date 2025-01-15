using System;
using Libplanet.Types.Blocks;

namespace Libplanet.Blocks
{
    /// <summary>
    /// An exception thrown when the height of <see cref="Consensus.Evidence"/>
    /// has been expired by the constraint provided by <see cref="IBlockPolicy"/>.
    /// </summary>
    public sealed class InvalidBlockEvidencePendingDurationException
        : BlockPolicyViolationException
    {
        /// <summary>
        /// Initializes a new instance of
        /// <see cref="InvalidBlockEvidencePendingDurationException"/> class.
        /// </summary>
        /// <param name="message">The message that describes the error.</param>
        public InvalidBlockEvidencePendingDurationException(string message)
            : base(message)
        {
        }
    }
}
