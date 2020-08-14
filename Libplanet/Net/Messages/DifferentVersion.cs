using System.Collections.Generic;
using NetMQ;

namespace Libplanet.Net.Messages
{
    internal class DifferentVersion : Message
    {
        public DifferentVersion()
        {
        }

        public DifferentVersion(NetMQFrame[] body)
        {
        }

        protected override MessageType Type => MessageType.DifferentVersion;

        protected override IEnumerable<NetMQFrame> DataFrames
        {
            get
            {
                yield break;
            }
        }
    }
}
