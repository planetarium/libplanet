using System;
using System.Collections.Generic;
using System.Linq;
using Libplanet.Tx;

namespace Libplanet.Net.Messages
{
    internal class GetTxsMsg : Message
    {
        public GetTxsMsg(IEnumerable<TxId> txIds)
        {
            TxIds = txIds;
        }

        public GetTxsMsg(byte[][] dataFrames)
        {
            int txCount = BitConverter.ToInt32(dataFrames[0], 0);
            TxIds = dataFrames
                .Skip(1).Take(txCount)
                .Select(ba => new TxId(ba))
                .ToList();
        }

        public IEnumerable<TxId> TxIds { get; }

        public override MessageType Type => MessageType.GetTxs;

        public override IEnumerable<byte[]> DataFrames
        {
            get
            {
                var frames = new List<byte[]>();
                frames.Add(BitConverter.GetBytes(TxIds.Count()));
                frames.AddRange(TxIds.Select(id => id.ToByteArray()));
                return frames;
            }
        }
    }
}
