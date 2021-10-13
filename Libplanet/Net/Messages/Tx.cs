#nullable enable
using System.Collections.Generic;

namespace Libplanet.Net.Messages
{
    internal class Tx : Message
    {
        public Tx(byte[] payload)
        {
            Payload = payload;
        }

        public Tx(byte[][] dataFrames)
        {
            Payload = dataFrames[0];
        }

        public byte[] Payload { get; }

        public override MessageType Type => MessageType.Tx;

        public override IEnumerable<byte[]> DataFrames => new[] { Payload, };
    }
}
