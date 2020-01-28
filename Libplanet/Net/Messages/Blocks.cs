using System;
using System.Collections.Generic;
using System.Linq;
using NetMQ;

namespace Libplanet.Net.Messages
{
    internal class Blocks : Message
    {
        public Blocks(IEnumerable<byte[]> payloads)
            : base(LeaveTrail)
        {
            if (payloads.Count() > int.MaxValue)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(payloads),
                    $"The number of payloads can't exceed {int.MaxValue}.");
            }

            Payloads = payloads.ToList();
        }

        public Blocks(NetMQFrame[] body)
        {
            int payloadCount = body[0].ConvertToInt32();
            Payloads = body.Skip(1).Take(payloadCount)
                .Select(f => f.ToByteArray())
                .ToList();
        }

        public List<byte[]> Payloads { get; }

        protected override MessageType Type => MessageType.Blocks;

        protected override IEnumerable<NetMQFrame> DataFrames
        {
            get
            {
                yield return new NetMQFrame(
                    NetworkOrderBitsConverter.GetBytes(Payloads.Count));

                foreach (var payload in Payloads)
                {
                    yield return new NetMQFrame(payload);
                }
            }
        }
    }
}
