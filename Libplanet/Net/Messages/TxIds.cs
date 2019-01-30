using System.Collections.Generic;
using System.Linq;
using Libplanet.Tx;
using NetMQ;

namespace Libplanet.Net.Messages
{
    internal class TxIds : Message
    {
        public TxIds(IEnumerable<TxId> txIds)
        {
            Ids = txIds;
        }

        public IEnumerable<TxId> Ids { get; }

        protected override MessageType Type => MessageType.TxIds;

        protected override IEnumerable<NetMQFrame> DataFrames
        {
            get
            {
                yield return new NetMQFrame(
                    NetworkOrderBitsConverter.GetBytes(Ids.Count()));

                foreach (TxId id in Ids)
                {
                    yield return new NetMQFrame(id.ToByteArray());
                }
            }
        }

        internal static Message Parse(NetMQFrame[] frames)
        {
            int txCount = frames[0].ConvertToInt32();
            IEnumerable<TxId> txIds = frames
                .Skip(1).Take(txCount)
                .Select(f => f.ConvertToTxId())
                .ToList();

            return new TxIds(txIds);
        }
    }
}
