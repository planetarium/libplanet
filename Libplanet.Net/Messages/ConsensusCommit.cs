using System.Collections.Generic;
using Libplanet.Consensus;

namespace Libplanet.Net.Messages
{
    public class ConsensusCommit : ConsensusMessage
    {
        public ConsensusCommit(Vote vote)
            : base(vote.Height, vote.Round, vote.BlockHash)
        {
            CommitVote = vote;
        }

        public ConsensusCommit(byte[][] dataframes)
            : this(new Vote(dataframes[0]))
        {
        }

        public Vote CommitVote { get; }

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

        public override MessageType Type => MessageType.ConsensusCommit;
    }
}
