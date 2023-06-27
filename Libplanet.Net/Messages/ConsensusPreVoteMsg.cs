using System;
using System.Collections.Generic;
using Libplanet.Consensus;
using Libplanet.Net.Consensus;

namespace Libplanet.Net.Messages
{
    /// <summary>
    /// A message class for <see cref="ConsensusStep.PreVote"/>.
    /// </summary>
    public class ConsensusPreVoteMsg : ConsensusVoteMsg
    {
        private static Bencodex.Codec _codec = new Bencodex.Codec();

        /// <summary>
        /// Initializes a new instance of the <see cref="ConsensusPreVoteMsg"/> class.
        /// </summary>
        /// <param name="vote">The <see cref="Vote"/> for <see cref="ConsensusStep.PreVote"/>
        /// to attach.
        /// </param>
        /// <exception cref="ArgumentException">Thrown when given <paramref name="vote"/>'s
        /// <see cref="Vote.Flag"/> is not <see cref="VoteFlag.PreVote"/>.</exception>
        public ConsensusPreVoteMsg(Vote vote)
            : base(vote.ValidatorPublicKey, vote.Height, vote.Round, vote.BlockHash)
        {
            if (vote.Flag != VoteFlag.PreVote)
            {
                throw new ArgumentException(
                    $"Given {nameof(vote)}'s flag must be {VoteFlag.PreVote}.", nameof(vote));
            }

            PreVote = vote;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="ConsensusPreVoteMsg"/> class
        /// with marshalled message.
        /// </summary>
        /// <param name="dataframes">A marshalled message.</param>
        public ConsensusPreVoteMsg(byte[][] dataframes)
            : this(new Vote(_codec.Decode(dataframes[0])))
        {
        }

        /// <summary>
        /// A <see cref="Vote"/> for <see cref="ConsensusStep.PreVote"/>.  This will always
        /// have its <see cref="Vote.Flag"/> set to <see cref="VoteFlag.PreVote"/>.
        /// </summary>
        public Vote PreVote { get; }

        /// <inheritdoc cref="MessageContent.DataFrames"/>
        public override IEnumerable<byte[]> DataFrames =>
            new List<byte[]> { _codec.Encode(PreVote.Bencoded) };

        /// <inheritdoc cref="MessageContent.MessageType"/>
        public override MessageType Type => MessageType.ConsensusVote;

        /// <inheritdoc cref="ConsensusMsg.Equals(ConsensusMsg?)"/>
        public override bool Equals(ConsensusMsg? other)
        {
            return other is ConsensusPreVoteMsg message &&
                PreVote.Equals(message.PreVote);
        }

        /// <inheritdoc cref="ConsensusMsg.Equals(object?)"/>
        public override bool Equals(object? obj)
        {
            return obj is ConsensusMsg other && Equals(other);
        }

        /// <inheritdoc cref="ConsensusMsg.GetHashCode"/>
        public override int GetHashCode()
        {
            return HashCode.Combine(Type, PreVote);
        }
    }
}
