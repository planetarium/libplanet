using System;
using Libplanet.Types.Consensus;

namespace Libplanet.Types.Evidence
{
    /// <summary>
    /// An exception thrown when a duadskf <see cref="Vote"/> is invalid.  In particular,
    /// this is thrown pre-emptively before a <see cref="Vote"/> is processed, i.e.
    /// does not change the state of a <see cref="Context"/> in a meaningful way.
    /// </summary>
    public class DuplicateVoteException : EvidenceException
    {
        /// <summary>
        /// Initializes a new instance of <see cref="InvalidConsensusMessageException"/> class.
        /// </summary>
        /// <param name="message">The error message that explains the reason for the exception.
        /// </param>
        /// <param name="voteRef">The 1<see cref="Vote"/> that caused this exception.
        /// </param>
        /// <param name="voteDup">The 2<see cref="Vote"/> that caused this exception.
        /// </param>
        /// <param name="innerException">The exception that is the cause of the current exception.
        /// </param>
        public DuplicateVoteException(
            string message,
            Vote voteRef,
            Vote voteDup,
            Exception innerException)
            : base(message, innerException)
        {
            VoteRef = voteRef;
            VoteDup = voteDup;
        }

        /// <summary>
        /// Initializes a new instance of <see cref="InvalidConsensusMessageException"/> class.
        /// </summary>
        /// <param name="message">The error message that explains the reason for the exception.
        /// </param>
        /// <param name="voteRef">The <see cref="Vote"/> that caused this exception.
        /// </param>
        /// <param name="voteDup">The 1<see cref="Vote"/> that caused this exception.
        /// </param>
        public DuplicateVoteException(string message, Vote voteRef, Vote voteDup)
            : base(message)
        {
            VoteRef = voteRef;
            VoteDup = voteDup;
        }

        public Vote VoteRef { get; }

        public Vote VoteDup { get; }

        public override long Height => VoteRef.Height;

        protected override EvidenceBase OnCreateEvidence(IEvidenceContext evidenceContext)
        {
            var voteRef = VoteRef;
            var voteDup = VoteDup;
            (_, Vote dup) = DuplicateVoteEvidence.OrderDuplicateVotePair(voteRef, voteDup);

            var validatorSet = evidenceContext.ValidatorSet;

            return new DuplicateVoteEvidence(
                voteRef: voteRef,
                voteDup: voteDup,
                validatorSet: validatorSet,
                timestamp: dup.Timestamp);
        }
    }
}
