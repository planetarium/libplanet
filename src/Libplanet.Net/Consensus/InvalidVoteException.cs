using System;
using Libplanet.Types.Consensus;

namespace Libplanet.Net.Consensus
{
    /// <summary>
    /// An exception thrown when a received <see cref="Vote"/> is invalid.  In particular,
    /// this is thrown pre-emptively before a <see cref="Vote"/> is processed, i.e.
    /// does not change the state of a <see cref="Context"/> in a meaningful way.
    /// </summary>
    [Serializable]
    public class InvalidVoteException : Exception
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="InvalidVoteException"/> class.
        /// </summary>
        /// <param name="message">The error message that explains the reason for the exception.
        /// </param>
        /// <param name="vote">The <see cref="Vote"/> that caused this exception.
        /// </param>
        /// <param name="innerException">The exception that is the cause of the current exception.
        /// </param>
        public InvalidVoteException(
            string message,
            Vote vote,
            Exception innerException)
            : base(message, innerException)
        {
            Vote = vote;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="InvalidVoteException"/> class.
        /// </summary>
        /// <param name="message">The error message that explains the reason for the exception.
        /// </param>
        /// <param name="vote">The <see cref="Vote"/> that caused this exception.
        /// </param>
        public InvalidVoteException(string message, Vote vote)
            : base(message)
        {
            Vote = vote;
        }

        public Vote Vote { get; }
    }
}
