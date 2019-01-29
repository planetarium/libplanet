using System.Collections.Generic;
using NetMQ;

namespace Libplanet.Net.Messages
{
    internal class Block : Message
    {
        public Block(byte[] payload)
        {
            Payload = payload;
        }

        public byte[] Payload { get; }

        protected override MessageType Type => MessageType.Block;

        protected override IEnumerable<NetMQFrame> DataFrames
        {
            get
            {
                yield return new NetMQFrame(Payload);
            }
        }

        internal static Message Parse(NetMQFrame[] body)
        {
            return new Block(body.ToByteArray());
        }
    }
}
