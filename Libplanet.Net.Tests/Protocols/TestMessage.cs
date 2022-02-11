#nullable disable
using System.Collections.Generic;
using System.Text;
using Libplanet.Net.Messages;

namespace Libplanet.Net.Tests.Protocols
{
    internal class TestMessage : Message
    {
        public TestMessage(string data)
        {
            Data = data;
        }

        public TestMessage(byte[][] dataFrames)
        {
            Data = Encoding.UTF8.GetString(dataFrames[0]);
        }

        public string Data { get; }

        public override MessageType Type => MessageType.Ping;

        public override IEnumerable<byte[]> DataFrames => new[] { Encoding.UTF8.GetBytes(Data), };
    }
}
