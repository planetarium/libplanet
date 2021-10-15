using NetMQ;

namespace Libplanet.Net.Messages
{
    public class ConsensusVote : ConsensusMessage
    {
        public ConsensusVote(long nodeId, long round, byte[] data)
            : base(nodeId, round, data)
        {
        }

        public ConsensusVote(NetMQFrame[] frames)
            : base(frames)
        {
        }

        protected override MessageType Type => MessageType.ConsensusVote;
    }
}
