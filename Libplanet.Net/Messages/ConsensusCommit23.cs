namespace Libplanet.Net.Messages
{
    public class ConsensusCommit23 : ConsensusMessage
    {
          public ConsensusCommit23(long nodeId, long round, byte[] data)
          : base(nodeId, round, data)
          {
          }

          public ConsensusCommit23(byte[][] dataframes)
          : base(dataframes)
          {
          }

          public override MessageType Type => MessageType.ConsensusCommit23;
    }
}
