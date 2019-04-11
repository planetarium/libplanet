using System.Collections.Generic;
using NetMQ;

namespace Libplanet.Net.Messages
{
    internal class Pong : Message
    {
        public Pong(int appProtocolVersion, long? tipIndex)
        {
            AppProtocolVersion = appProtocolVersion;
            TipIndex = tipIndex;
        }

        public Pong(NetMQFrame[] body)
        {
            AppProtocolVersion = body[0].ConvertToInt32();
            TipIndex = body[1].ConvertToInt64();

            if (TipIndex < 0)
            {
                TipIndex = null;
            }
        }

        public int AppProtocolVersion { get; }

        public long? TipIndex { get; }

        protected override MessageType Type => MessageType.Pong;

        protected override IEnumerable<NetMQFrame> DataFrames
        {
            get
            {
                yield return new NetMQFrame(
                    NetworkOrderBitsConverter.GetBytes(AppProtocolVersion));
                yield return new NetMQFrame(
                    NetworkOrderBitsConverter.GetBytes(TipIndex ?? -1));
            }
        }
    }
}
