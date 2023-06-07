using System;
using Libplanet.Blockchain.Policies;

namespace Libplanet.Blocks
{
    /// <summary>
    /// An exception thrown when the height of <see cref="Consensus.Evidence"/>
    /// has been expired by the constraint provided by <see cref="IBlockPolicy"/>.
    /// </summary>
    [Serializable]
    public sealed class InvalidBlockEvidencesPendingDurationException
        : BlockPolicyViolationException
    {
        /// <summary>
        /// Initializes a new instance of
        /// <see cref="InvalidBlockEvidencesPendingDurationException"/> class.
        /// </summary>
        /// <param name="message">The message that describes the error.</param>
        public InvalidBlockEvidencesPendingDurationException(string message)
            : base(message)
        {
        }
    }
}
