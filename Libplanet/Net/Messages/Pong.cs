using System.Collections.Generic;
using NetMQ;

namespace Libplanet.Net.Messages
{
    internal class Pong : Message
    {
        protected override MessageType Type => MessageType.Pong;

        protected override IEnumerable<NetMQFrame> DataFrames
        {
            get
            {
                yield break;
            }
        }
    }
}
