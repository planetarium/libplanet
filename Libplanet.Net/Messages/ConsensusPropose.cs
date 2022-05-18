using Libplanet.Blocks;

namespace Libplanet.Net.Messages
{
    public class ConsensusPropose : ConsensusMessage
    {
        public ConsensusPropose(long nodeId, long height, long round, BlockHash blockHash)
        : base(nodeId, height, round, blockHash)
        {
        }

        public ConsensusPropose(byte[][] dataframes)
        : base(dataframes)
        {
        }

        public override MessageType Type => MessageType.ConsensusPropose;
    }
}
