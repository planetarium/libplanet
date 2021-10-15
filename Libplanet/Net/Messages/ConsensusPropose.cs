using NetMQ;

namespace Libplanet.Net.Messages
{
    public class ConsensusPropose : ConsensusMessage
    {
        public ConsensusPropose(long nodeId, long round, byte[] data)
            : base(nodeId, round, data)
        {
        }

        public ConsensusPropose(NetMQFrame[] frames)
            : base(frames)
        {
        }

        protected override MessageType Type => MessageType.ConsensusPropose;
    }
}
