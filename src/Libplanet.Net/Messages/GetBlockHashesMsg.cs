using System;
using System.Collections.Generic;
using System.Linq;
using Libplanet.Blockchain;
using Libplanet.Types.Blocks;

namespace Libplanet.Net.Messages
{
    internal class GetBlockHashesMsg : MessageContent
    {
        public GetBlockHashesMsg(BlockLocator locator)
        {
            Locator = locator;
        }

        public GetBlockHashesMsg(byte[][] dataFrames)
        {
            int requestedHashCount = BitConverter.ToInt32(dataFrames[0], 0);
            Locator = new BlockLocator(
                dataFrames.Skip(1).Take(requestedHashCount)
                .Select(frame => new BlockHash(frame)));
        }

        public BlockLocator Locator { get; }

        public override MessageType Type => MessageType.GetBlockHashes;

        public override IEnumerable<byte[]> DataFrames
        {
            get
            {
                var frames = new List<byte[]>();
                frames.Add(BitConverter.GetBytes(Locator.Count()));
                frames.AddRange(Locator.Select(hash => hash.ToByteArray()));
                return frames;
            }
        }
    }
}
