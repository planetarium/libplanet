using System.Collections.Generic;
using Libplanet.Consensus;

namespace Libplanet.Net.Messages
{
    /// <summary>
    /// A message class for <see cref="Libplanet.Net.Consensus.Step.PreCommit"/>.
    /// </summary>
    public class ConsensusCommit : ConsensusMessage
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ConsensusCommit"/> class.
        /// </summary>
        /// <param name="vote">A <see cref="Libplanet.Net.Consensus.Step.PreCommit"/>
        /// <see cref="Vote"/> to attach.
        /// </param>
        public ConsensusCommit(Vote vote)
            : base(vote.Validator, vote.Height, vote.Round, vote.BlockHash)
        {
            CommitVote = vote;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="ConsensusCommit"/> class with marshalled
        /// message.
        /// </summary>
        /// <param name="dataframes">A marshalled message.</param>
        public ConsensusCommit(byte[][] dataframes)
            : this(new Vote(dataframes[0]))
        {
        }

        /// <summary>
        /// A <see cref="Libplanet.Net.Consensus.Step.PreCommit"/> <see cref="Vote"/> the message is
        /// for.
        /// </summary>
        public Vote CommitVote { get; }

        /// <inheritdoc cref="ConsensusMessage.DataFrames"/>
        public override IEnumerable<byte[]> DataFrames
        {
            get
            {
                var frames = new List<byte[]>
                {
                    CommitVote.ByteArray,
                };
                return frames;
            }
        }

        /// <inheritdoc cref="Message.MessageType"/>
        public override MessageType Type => MessageType.ConsensusCommit;
    }
}
