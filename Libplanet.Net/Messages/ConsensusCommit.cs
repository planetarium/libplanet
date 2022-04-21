namespace Libplanet.Net.Messages
{
    public class ConsensusCommit : ConsensusMessage
    {
         public ConsensusCommit(long nodeId, long round, byte[] data)
         : base(nodeId, round, data)
         {
         }

         public ConsensusCommit(byte[][] dataframes)
         : base(dataframes)
         {
         }

         public override MessageType Type => MessageType.ConsensusCommit;
    }
}
