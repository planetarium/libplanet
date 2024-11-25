using System;
using Libplanet.Consensus;

namespace Libplanet.Net.Consensus
{
    /// <summary>
    /// An exception thrown when a received <see cref="Proposal"/> is invalid.  In particular,
    /// this is thrown pre-emptively before a <see cref="Proposal"/> is processed, i.e.
    /// does not change the state of a <see cref="Context"/> in a meaningful way.
    /// </summary>
    [Serializable]
    public class InvalidProposalException : Exception
    {
        /// <summary>
        /// Initializes a new instance of <see cref="InvalidConsensusMessageException"/> class.
        /// </summary>
        /// <param name="message">The error message that explains the reason for the exception.
        /// </param>
        /// <param name="proposal">The <see cref="Proposal"/> that caused this exception.
        /// </param>
        /// <param name="innerException">The exception that is the cause of the current exception.
        /// </param>
        public InvalidProposalException(
            string message,
            Proposal proposal,
            Exception innerException)
            : base(message, innerException)
        {
            Proposal = proposal;
        }

        /// <summary>
        /// Initializes a new instance of <see cref="InvalidConsensusMessageException"/> class.
        /// </summary>
        /// <param name="message">The error message that explains the reason for the exception.
        /// </param>
        /// <param name="proposal">The <see cref="Proposal"/> that caused this exception.
        /// </param>
        public InvalidProposalException(string message, Proposal proposal)
            : base(message)
        {
            Proposal = proposal;
        }

        public Proposal Proposal { get; }
    }
}
