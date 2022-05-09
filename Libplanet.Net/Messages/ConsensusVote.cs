namespace Libplanet.Net.Messages
{
    public class ConsensusVote : ConsensusMessage
    {
        public ConsensusVote(long nodeId, long height, long round, byte[] data)
            : base(nodeId, height, round, data)
        {
        }

        public ConsensusVote(byte[][] dataframes)
            : base(dataframes)
        {
        }

        public override MessageType Type => MessageType.ConsensusVote;
    }
}
