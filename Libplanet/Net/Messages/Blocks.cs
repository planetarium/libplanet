using System;
using System.Collections.Generic;
using System.Linq;

namespace Libplanet.Net.Messages
{
    internal class Blocks : Message
    {
        public Blocks(IEnumerable<byte[]> payloads)
        {
            Payloads = payloads.ToList();
        }

        public Blocks(byte[][] dataFrames)
        {
            var count = BitConverter.ToInt32(dataFrames.First(), 0);
            Payloads = dataFrames.Skip(1).Take(count).ToList();
        }

        public List<byte[]> Payloads { get; }

        public override MessageType Type => MessageType.Blocks;

        public override IEnumerable<byte[]> DataFrames
        {
            get
            {
                var frames = new List<byte[]>();
                frames.Add(BitConverter.GetBytes(Payloads.Count));
                frames.AddRange(Payloads);
                return frames;
            }
        }
    }
}
