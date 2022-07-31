using System.Collections.Generic;

namespace Libplanet.Net.Messages
{
    internal class TxMsg : Message
    {
        public TxMsg(byte[] payload)
        {
            Payload = payload;
        }

        public TxMsg(byte[][] dataFrames)
        {
            Payload = dataFrames[0];
        }

        public byte[] Payload { get; }

        public override MessageType Type => MessageType.Tx;

        public override IEnumerable<byte[]> DataFrames => new[] { Payload, };
    }
}
