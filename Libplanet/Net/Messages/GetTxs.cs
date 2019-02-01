using System.Collections.Generic;
using System.Linq;
using Libplanet.Tx;
using NetMQ;

namespace Libplanet.Net.Messages
{
    internal class GetTxs : Message
    {
        public GetTxs(IEnumerable<TxId> txIds)
        {
            TxIds = txIds;
        }

        public GetTxs(NetMQFrame[] frames)
        {
            int txCount = frames[0].ConvertToInt32();
            TxIds = frames
                .Skip(1).Take(txCount)
                .Select(f => f.ConvertToTxId())
                .ToList();
        }

        public IEnumerable<TxId> TxIds { get; }

        protected override MessageType Type => MessageType.GetTxs;

        protected override IEnumerable<NetMQFrame> DataFrames
        {
            get
            {
                yield return new NetMQFrame(
                    NetworkOrderBitsConverter.GetBytes(TxIds.Count()));

                foreach (TxId id in TxIds)
                {
                    yield return new NetMQFrame(id.ToByteArray());
                }
            }
        }
    }
}
