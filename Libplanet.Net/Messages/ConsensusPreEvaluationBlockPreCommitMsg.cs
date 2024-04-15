using System;
using System.Collections.Generic;
using Libplanet.Net.Consensus;
using Libplanet.Types.Consensus;

namespace Libplanet.Net.Messages
{
    public class ConsensusPreEvaluationBlockPreCommitMsg : ConsensusPreEvaluationBlockVoteMsg
    {
        private static Bencodex.Codec _codec = new Bencodex.Codec();

        public ConsensusPreEvaluationBlockPreCommitMsg(PreEvaluationBlockVote vote)
            : base(
                  vote.ValidatorPublicKey,
                  vote.Height,
                  vote.Round,
                  vote.PreEvaluationBlockHash,
                  vote.Flag)
        {
            if (vote.Flag != VoteFlag.PreCommit)
            {
                throw new ArgumentException(
                    $"Given {nameof(vote)}'s flag must be {VoteFlag.PreCommit}.", nameof(vote));
            }

            PreCommit = vote;
        }

        public ConsensusPreEvaluationBlockPreCommitMsg(byte[][] dataframes)
            : this(new PreEvaluationBlockVote(_codec.Decode(dataframes[0])))
        {
        }

        public PreEvaluationBlockVote PreCommit { get; }

        /// <inheritdoc cref="MessageContent.DataFrames"/>
        public override IEnumerable<byte[]> DataFrames =>
            new List<byte[]> { _codec.Encode(PreCommit.Bencoded) };

        /// <inheritdoc cref="MessageContent.MessageType"/>
        public override MessageType Type => MessageType.ConsensusCommit;

        /// <inheritdoc/>
        public override bool Equals(ConsensusMsg? other)
        {
            return other is ConsensusPreCommitMsg message &&
                PreCommit.Equals(message.PreCommit);
        }

        /// <inheritdoc/>
        public override bool Equals(object? obj)
        {
            return obj is ConsensusMsg other && Equals(other);
        }

        /// <inheritdoc/>
        public override int GetHashCode()
        {
            return HashCode.Combine(Type, PreCommit);
        }
    }
}
