using System.Collections.Generic;
using NetMQ;

namespace Libplanet.Net.Messages
{
    internal class GetChainStatus : Message
    {
        public GetChainStatus()
        {
        }

        public GetChainStatus(NetMQFrame[] body)
        {
        }

        protected override MessageType Type => MessageType.GetChainStatus;

        protected override IEnumerable<NetMQFrame> DataFrames
        {
            get
            {
                yield break;
            }
        }
    }
}
