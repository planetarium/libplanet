namespace Libplanet.Net.Messages
{
    public class ConsensusVote23 : ConsensusMessage
    {
        public ConsensusVote23(long nodeId, long round, byte[] data)
            : base(nodeId, round, data)
        {
        }

        public ConsensusVote23(byte[][] dataframes)
            : base(dataframes)
        {
        }

        public override MessageType Type => MessageType.ConsensusVote23;
    }
}
