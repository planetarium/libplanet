using System;
using System.Runtime.Serialization;
using Libplanet.Consensus;

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
        /// Initializes a new instance of <see cref="InvalidConsensusMessageException"/> class.
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
        /// Initializes a new instance of <see cref="InvalidConsensusMessageException"/> class.
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

        /// <summary>
        /// Initializes a new instance of the <see cref="InvalidConsensusMessageException"/>
        /// class with serialized data.
        /// </summary>
        /// <param name="info">The <see cref="SerializationInfo"/>
        /// that holds the serialized object data about the exception being thrown.
        /// </param>
        /// <param name="context">The <see cref="StreamingContext"/>
        /// that contains contextual information about the source or destination.
        /// </param>
        protected InvalidVoteException(SerializationInfo info, StreamingContext context)
        {
            Vote =
                info.GetValue(nameof(Vote), typeof(Vote)) as Vote ??
                throw new SerializationException(
                    $"{nameof(Vote)} is expected to be a non-null {nameof(Vote)}.");
        }

        public Vote Vote { get; }

        public override void GetObjectData(
            SerializationInfo info, StreamingContext context)
        {
            base.GetObjectData(info, context);
            info.AddValue(nameof(Vote), Vote);
        }
    }
}
