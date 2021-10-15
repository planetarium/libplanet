using System.Collections.Generic;
using NetMQ;

namespace Libplanet.Net.Messages
{
    public abstract class ConsensusMessage : Message
    {
        protected ConsensusMessage(long nodeId, long round, byte[] data)
        {
            Round = round;
            Data = data;
            NodeId = nodeId;
        }

        protected ConsensusMessage(NetMQFrame[] frames)
        {
            NodeId = frames[0].ConvertToInt64();
            Round = frames[1].ConvertToInt64();
            Data = frames[2].ToByteArray();
        }

        public long Round { get; set; }

        public long NodeId { get; set; }

        public byte[] Data { get; set; }

        protected override IEnumerable<NetMQFrame> DataFrames
        {
            get
            {
                yield return new NetMQFrame(NetworkOrderBitsConverter.GetBytes(NodeId));
                yield return new NetMQFrame(NetworkOrderBitsConverter.GetBytes(Round));
                yield return new NetMQFrame(Data);
            }
        }
    }
}
