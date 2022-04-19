namespace Libplanet.Net.Messages
{
    public class ConsensusPropose : ConsensusMessage
    {
        public ConsensusPropose(long nodeId, long round, byte[] data)
        : base(nodeId, round, data)
        {
        }

        public ConsensusPropose(byte[][] dataframes)
        : base(dataframes)
        {
        }

        public override MessageType Type => MessageType.ConsensusPropose;
    }
}
