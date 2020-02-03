using System.Collections.Generic;
using NetMQ;

namespace Libplanet.Net.Messages
{
    internal class Ping : Message
    {
        public Ping()
            : base(true)
        {
        }

        public Ping(NetMQFrame[] body)
        {
        }

        protected override MessageType Type => MessageType.Ping;

        protected override IEnumerable<NetMQFrame> DataFrames
        {
            get
            {
                yield break;
            }
        }
    }
}
