namespace Libplanet.Net.Messages
{
    public class ConsensusCommit : ConsensusMessage
    {
         public ConsensusCommit(long nodeId, long height, long round, byte[] data)
         : base(nodeId, height, round, data)
         {
         }

         public ConsensusCommit(byte[][] dataframes)
         : base(dataframes)
         {
         }

         public override MessageType Type => MessageType.ConsensusCommit;
    }
}
