using Libplanet.Blocks;

namespace Libplanet.Net.Messages
{
    public class ConsensusVote : ConsensusMessage
    {
        public ConsensusVote(long nodeId, long height, long round, BlockHash blockHash)
            : base(nodeId, height, round, blockHash)
        {
        }

        public ConsensusVote(byte[][] dataframes)
            : base(dataframes)
        {
        }

        public override MessageType Type => MessageType.ConsensusVote;
    }
}
