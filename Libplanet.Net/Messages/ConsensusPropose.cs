namespace Libplanet.Net.Messages
{
    public class ConsensusPropose : ConsensusMessage
    {
        public ConsensusPropose(long nodeId, long height, long round, byte[] data)
        : base(nodeId, height, round, data)
        {
        }

        public ConsensusPropose(byte[][] dataframes)
        : base(dataframes)
        {
        }

        public override MessageType Type => MessageType.ConsensusPropose;
    }
}
