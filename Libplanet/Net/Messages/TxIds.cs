#nullable enable
using System;
using System.Collections.Generic;
using System.Linq;
using Libplanet.Tx;

namespace Libplanet.Net.Messages
{
    internal class TxIds : Message
    {
        public TxIds(Address sender, IEnumerable<TxId> txIds)
        {
            Sender = sender;
            Ids = txIds;
        }

        public TxIds(byte[][] dataFrames)
        {
            Sender = new Address(dataFrames[0]);
            int txCount = BitConverter.ToInt32(dataFrames[1], 0);
            Ids = dataFrames
                .Skip(2).Take(txCount)
                .Select(ba => new TxId(ba))
                .ToList();
        }

        public IEnumerable<TxId> Ids { get; }

        public Address Sender { get; }

        public override MessageType Type => MessageType.TxIds;

        public override IEnumerable<byte[]> DataFrames
        {
            get
            {
                var frames = new List<byte[]>();
                frames.Add(Sender.ToByteArray());
                frames.Add(BitConverter.GetBytes(Ids.Count()));
                frames.AddRange(Ids.Select(id => id.ToByteArray()));
                return frames;
            }
        }
    }
}
