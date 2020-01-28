using System.Collections.Generic;
using System.Linq;
using Libplanet.Tx;
using NetMQ;

namespace Libplanet.Net.Messages
{
    internal class TxIds : Message
    {
        public TxIds(Address sender, IEnumerable<TxId> txIds)
            : base(LeaveTrail)
        {
            Sender = sender;
            Ids = txIds;
        }

        public TxIds(NetMQFrame[] frames)
        {
            Sender = new Address(frames[0].Buffer);
            int txCount = frames[1].ConvertToInt32();
            Ids = frames
                .Skip(2).Take(txCount)
                .Select(f => f.ConvertToTxId())
                .ToList();
        }

        public IEnumerable<TxId> Ids { get; }

        public Address Sender { get; }

        protected override MessageType Type => MessageType.TxIds;

        protected override IEnumerable<NetMQFrame> DataFrames
        {
            get
            {
                yield return new NetMQFrame(Sender.ToByteArray());

                yield return new NetMQFrame(
                    NetworkOrderBitsConverter.GetBytes(Ids.Count()));

                foreach (TxId id in Ids)
                {
                    yield return new NetMQFrame(id.ToByteArray());
                }
            }
        }
    }
}
