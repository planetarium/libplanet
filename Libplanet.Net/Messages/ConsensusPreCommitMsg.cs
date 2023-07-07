using System;
using System.Collections.Generic;
using Libplanet.Consensus;
using Libplanet.Net.Consensus;

namespace Libplanet.Net.Messages
{
    /// <summary>
    /// A message class for <see cref="ConsensusStep.PreCommit"/>.
    /// </summary>
    public class ConsensusPreCommitMsg : ConsensusVoteMsg
    {
        private static Bencodex.Codec _codec = new Bencodex.Codec();

        /// <summary>
        /// Initializes a new instance of the <see cref="ConsensusPreCommitMsg"/> class.
        /// </summary>
        /// <param name="vote">The <see cref="Vote"/> for <see cref="ConsensusStep.PreCommit"/>
        /// to attach.
        /// </param>
        /// <exception cref="ArgumentException">Thrown when given <paramref name="vote"/>'s
        /// <see cref="Vote.Flag"/> is not <see cref="VoteFlag.PreCommit"/>.</exception>
        public ConsensusPreCommitMsg(Vote vote)
            : base(vote.ValidatorPublicKey, vote.Height, vote.Round, vote.BlockHash, vote.Flag)
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
            : this(new Vote(_codec.Decode(dataframes[0])))
        {
        }

        /// <summary>
        /// A <see cref="Vote"/> for <see cref="ConsensusStep.PreCommit"/>.  This will always
        /// have its <see cref="Vote.Flag"/> set to <see cref="VoteFlag.PreCommit"/>.
        /// </summary>
        public Vote PreCommit { get; }

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
