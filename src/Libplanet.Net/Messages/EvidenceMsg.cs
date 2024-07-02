using System.Collections.Generic;

namespace Libplanet.Net.Messages
{
    internal class EvidenceMsg : MessageContent
    {
        public EvidenceMsg(byte[] payload)
        {
            Payload = payload;
        }

        public EvidenceMsg(byte[][] dataFrames)
        {
            Payload = dataFrames[0];
        }

        public byte[] Payload { get; }

        public override MessageType Type => MessageType.Evidence;

        public override IEnumerable<byte[]> DataFrames => new[] { Payload, };
    }
}
