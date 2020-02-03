using System.Collections.Generic;
using NetMQ;

namespace Libplanet.Net.Messages
{
    internal class Pong : Message
    {
        public Pong(long? tipIndex)
            : base(true)
        {
            TipIndex = tipIndex;
        }

        public Pong(NetMQFrame[] body)
        {
            TipIndex = body[0].ConvertToInt64();

            if (TipIndex < 0)
            {
                TipIndex = null;
            }
        }

        public long? TipIndex { get; set; }

        protected override MessageType Type => MessageType.Pong;

        protected override IEnumerable<NetMQFrame> DataFrames
        {
            get
            {
                yield return new NetMQFrame(
                    NetworkOrderBitsConverter.GetBytes(TipIndex ?? -1));
            }
        }
    }
}
