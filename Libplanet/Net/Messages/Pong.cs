using System.Collections.Generic;
using NetMQ;

namespace Libplanet.Net.Messages
{
    internal class Pong : Message
    {
        public Pong(int protocolVersion)
        {
            this.ProtocolVersion = protocolVersion;
        }

        public Pong(NetMQFrame[] body)
        {
            ProtocolVersion = body[0].ConvertToInt32();
        }

        public int ProtocolVersion { get; }

        protected override MessageType Type => MessageType.Pong;

        protected override IEnumerable<NetMQFrame> DataFrames
        {
            get
            {
                yield return new NetMQFrame(
                    NetworkOrderBitsConverter.GetBytes(ProtocolVersion));
            }
        }
    }
}
