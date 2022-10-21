using System;
using System.Collections.Generic;
using Libplanet.Consensus;

namespace Libplanet.Net.Messages
{
    /// <summary>
    /// A message class for <see cref="Consensus.Step.PreVote"/>.
    /// </summary>
    public class ConsensusPreVoteMsg : ConsensusMsg
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ConsensusPreVoteMsg"/> class.
        /// </summary>
        /// <param name="vote">The <see cref="Vote"/> for <see cref="Consensus.Step.PreVote"/>
        /// to attach.
        /// </param>
        public ConsensusPreVoteMsg(Vote vote)
            : base(vote.Validator, vote.Height, vote.Round, vote.BlockHash)
        {
            if (vote.Flag != VoteFlag.PreVote)
            {
                throw new InvalidMessageException("Vote flag must be PreVote.", this);
            }

            PreVote = vote;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="ConsensusPreVoteMsg"/> class
        /// with marshalled message.
        /// </summary>
        /// <param name="dataframes">A marshalled message.</param>
        public ConsensusPreVoteMsg(byte[][] dataframes)
            : this(new Vote(dataframes[0]))
        {
        }

        /// <summary>
        /// A <see cref="Vote"/> for <see cref="Consensus.Step.PreVote"/>.  This will always
        /// have its <see cref="Vote.Flag"/> set to <see cref="VoteFlag.PreVote"/>.
        /// </summary>
        public Vote PreVote { get; }

        /// <inheritdoc cref="ConsensusMsg.DataFrames"/>
        public override IEnumerable<byte[]> DataFrames
        {
            get
            {
                var frames = new List<byte[]> { PreVote.ByteArray };
                return frames;
            }
        }

        /// <inheritdoc cref="Message.MessageType"/>
        public override MessageType Type => MessageType.ConsensusVote;

        public override bool Equals(ConsensusMsg? other)
        {
            return other is ConsensusPreVoteMsg message &&
                PreVote.Equals(message.PreVote);
        }

        public override bool Equals(object? obj)
        {
            return obj is ConsensusMsg other && Equals(other);
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(Type, PreVote);
        }
    }
}
