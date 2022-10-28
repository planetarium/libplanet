using System;
using System.Collections.Generic;
using Libplanet.Consensus;

namespace Libplanet.Net.Messages
{
    /// <summary>
    /// A message class for <see cref="Consensus.Step.PreCommit"/>.
    /// </summary>
    public class ConsensusPreCommitMsg : ConsensusMsg
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ConsensusPreCommitMsg"/> class.
        /// </summary>
        /// <param name="vote">The <see cref="Vote"/> for <see cref="Consensus.Step.PreCommit"/>
        /// to attach.
        /// </param>
        /// <exception cref="ArgumentException">Thrown when given <paramref name="vote"/>'s
        /// <see cref="Vote.Flag"/> is not <see cref="VoteFlag.PreCommit"/>.</exception>
        public ConsensusPreCommitMsg(Vote vote)
            : base(vote.Validator, vote.Height, vote.Round, vote.BlockHash)
        {
            if (vote.Flag != VoteFlag.PreCommit)
            {
                throw new ArgumentException(
                    $"Given {nameof(vote)}'s flag must be {VoteFlag.PreCommit}.", nameof(vote));
            }

            PreCommit = vote;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="ConsensusPreCommitMsg"/> class
        /// with marshalled message.
        /// </summary>
        /// <param name="dataframes">A marshalled message.</param>
        public ConsensusPreCommitMsg(byte[][] dataframes)
            : this(new Vote(dataframes[0]))
        {
        }

        /// <summary>
        /// A <see cref="Vote"/> for <see cref="Consensus.Step.PreCommit"/>.  This will always
        /// have its <see cref="Vote.Flag"/> set to <see cref="VoteFlag.PreCommit"/>.
        /// </summary>
        public Vote PreCommit { get; }

        /// <inheritdoc cref="ConsensusMsg.DataFrames"/>
        public override IEnumerable<byte[]> DataFrames
        {
            get
            {
                var frames = new List<byte[]> { PreCommit.ByteArray };
                return frames;
            }
        }

        /// <inheritdoc cref="Message.MessageType"/>
        public override MessageType Type => MessageType.ConsensusCommit;

        public override bool Equals(ConsensusMsg? other)
        {
            return other is ConsensusPreCommitMsg message &&
                PreCommit.Equals(message.PreCommit);
        }

        public override bool Equals(object? obj)
        {
            return obj is ConsensusMsg other && Equals(other);
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(Type, PreCommit);
        }
    }
}
