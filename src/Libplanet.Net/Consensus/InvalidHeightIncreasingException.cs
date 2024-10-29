using System;
using Libplanet.Blockchain;

namespace Libplanet.Net.Consensus
{
    /// <summary>
    /// An exception thrown when a <see cref="ConsensusContext.NewHeight"/> has called with
    /// height is not the index of <see cref="BlockChain.Tip"/> + 1.
    /// </summary>
    [Serializable]
    public class InvalidHeightIncreasingException : Exception
    {
        /// <summary>
        /// Initializes a new instance of <see cref="InvalidHeightIncreasingException"/> class.
        /// </summary>
        /// <param name="message">The error message that explains the reason for the exception.
        /// </param>
        public InvalidHeightIncreasingException(string message)
            : base(message)
        {
        }
    }
}
