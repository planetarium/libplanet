using System;
using System.Collections.Generic;
using Libplanet.Net.Consensus;
using Libplanet.Types.Consensus;

namespace Libplanet.Net.Messages
{
    public class ConsensusPreEvaluationBlockPreVoteMsg : ConsensusPreEvaluationBlockVoteMsg
    {
        private static Bencodex.Codec _codec = new Bencodex.Codec();

        public ConsensusPreEvaluationBlockPreVoteMsg(PreEvaluationBlockVote vote)
            : base(
                  vote.ValidatorPublicKey,
                  vote.Height,
                  vote.Round,
                  vote.PreEvaluationBlockHash,
                  vote.Flag)
        {
            if (vote.Flag != VoteFlag.PreVote)
            {
                throw new ArgumentException(
                    $"Given {nameof(vote)}'s flag must be {VoteFlag.PreVote}.", nameof(vote));
            }

            PreVote = vote;
        }

        public ConsensusPreEvaluationBlockPreVoteMsg(byte[][] dataframes)
            : this(new PreEvaluationBlockVote(_codec.Decode(dataframes[0])))
        {
        }

        public PreEvaluationBlockVote PreVote { get; }

        /// <inheritdoc cref="MessageContent.DataFrames"/>
        public override IEnumerable<byte[]> DataFrames =>
            new List<byte[]> { _codec.Encode(PreVote.Bencoded) };

        /// <inheritdoc cref="MessageContent.MessageType"/>
        public override MessageType Type => MessageType.ConsensusVote;

        /// <inheritdoc/>
        public override bool Equals(ConsensusMsg? other)
        {
            return other is ConsensusPreVoteMsg message &&
                PreVote.Equals(message.PreVote);
        }

        /// <inheritdoc/>
        public override bool Equals(object? obj)
        {
            return obj is ConsensusMsg other && Equals(other);
        }

        /// <inheritdoc/>
        public override int GetHashCode()
        {
            return HashCode.Combine(Type, PreVote);
        }
    }
}
