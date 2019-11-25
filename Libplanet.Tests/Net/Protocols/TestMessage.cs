using System.Collections.Generic;
using Libplanet.Net.Messages;
using NetMQ;

namespace Libplanet.Tests.Net.Protocols
{
    internal class TestMessage : Message
    {
        public TestMessage(string data)
        {
            Data = data;
        }

        public TestMessage(NetMQFrame[] body)
        {
        }

        public string Data { get; }

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
