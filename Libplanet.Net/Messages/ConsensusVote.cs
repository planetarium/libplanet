using System.Collections.Generic;
using Libplanet.Consensus;

namespace Libplanet.Net.Messages
{
    /// <summary>
    /// A message class for <see cref="Libplanet.Net.Consensus.Step.PreVote"/>.
    /// </summary>
    public class ConsensusVote : ConsensusMessage
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ConsensusVote"/> class.
        /// </summary>
        /// <param name="vote">A <see cref="Libplanet.Net.Consensus.Step.PreVote"/>
        /// <see cref="Vote"/> to attach.
        /// </param>
        public ConsensusVote(Vote vote)
            : base(vote.Validator, vote.Height, vote.Round, vote.BlockHash)
        {
            if (vote.Flag != VoteFlag.PreVote)
            {
                throw new InvalidMessageException("Vote flag must be PreVote.", this);
            }

            ProposeVote = vote;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="ConsensusVote"/> class with marshalled
        /// message.
        /// </summary>
        /// <param name="dataframes">A marshalled message.</param>
        public ConsensusVote(byte[][] dataframes)
            : this(new Vote(dataframes[0]))
        {
        }

        /// <summary>
        /// A <see cref="Libplanet.Net.Consensus.Step.PreVote"/> <see cref="Vote"/> the message is
        /// for.
        /// </summary>
        public Vote ProposeVote { get; }

        /// <inheritdoc cref="ConsensusMessage.DataFrames"/>
        public override IEnumerable<byte[]> DataFrames
        {
            get
            {
                var frames = new List<byte[]>
                {
                    ProposeVote.ByteArray,
                };
                return frames;
            }
        }

        /// <inheritdoc cref="Message.MessageType"/>
        public override MessageType Type => MessageType.ConsensusVote;
    }
}
