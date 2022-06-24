using System.Collections.Generic;
using Libplanet.Consensus;

namespace Libplanet.Net.Messages
{
    public class ConsensusVote : ConsensusMessage
    {
        public ConsensusVote(Vote vote)
            : base(vote.Height, vote.Round, vote.BlockHash)
        {
            ProposeVote = vote;
        }

        public ConsensusVote(byte[][] dataframes)
            : this(new Vote(dataframes[0]))
        {
        }

        public Vote ProposeVote { get; }

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

        public override MessageType Type => MessageType.ConsensusVote;
    }
}
