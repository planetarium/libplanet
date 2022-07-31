using System;
using System.Collections.Generic;
using System.Linq;
using Libplanet.Blockchain;
using Libplanet.Blocks;

namespace Libplanet.Net.Messages
{
    internal class GetBlockHashesMsg : Message
    {
        public GetBlockHashesMsg(BlockLocator locator, BlockHash? stop)
        {
            Locator = locator;
            Stop = stop;
        }

        public GetBlockHashesMsg(byte[][] dataFrames)
        {
            int requestedHashCount = BitConverter.ToInt32(dataFrames[0], 0);
            Locator = new BlockLocator(
                dataFrames.Skip(1).Take(requestedHashCount)
                .Select(frame => new BlockHash(frame)));
            Stop = dataFrames[1 + requestedHashCount].Length == 0
                ? default(BlockHash?)
                : new BlockHash(dataFrames[1 + requestedHashCount]);
        }

        public BlockLocator Locator { get; }

        public BlockHash? Stop { get; }

        public override MessageType Type => MessageType.GetBlockHashes;

        public override IEnumerable<byte[]> DataFrames
        {
            get
            {
                var frames = new List<byte[]>();
                frames.Add(BitConverter.GetBytes(Locator.Count()));
                frames.AddRange(Locator.Select(hash => hash.ToByteArray()));
                frames.Add(Stop is { } s
                    ? s.ToByteArray()
                    : new byte[] { });
                return frames;
            }
        }
    }
}
