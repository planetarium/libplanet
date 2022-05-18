using Libplanet.Blocks;

namespace Libplanet.Net.Messages
{
    public class ConsensusCommit : ConsensusMessage
    {
         public ConsensusCommit(long nodeId, long height, long round, BlockHash blockHash)
         : base(nodeId, height, round, blockHash)
         {
         }

         public ConsensusCommit(byte[][] dataframes)
         : base(dataframes)
         {
         }

         public override MessageType Type => MessageType.ConsensusCommit;
    }
}
