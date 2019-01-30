using System.Collections.Generic;
using NetMQ;

namespace Libplanet.Net.Messages
{
    internal class Tx : Message
    {
        public Tx(byte[] payload)
        {
            Payload = payload;
        }

        public byte[] Payload { get; }

        protected override MessageType Type => MessageType.Tx;

        protected override IEnumerable<NetMQFrame> DataFrames
        {
            get
            {
                yield return new NetMQFrame(Payload);
            }
        }

        internal static Message Parse(NetMQFrame[] body)
        {
            return new Tx(body.ToByteArray());
        }
    }
}
