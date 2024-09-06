using System.Collections.Generic;
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
            Locator = new BlockLocator(new BlockHash(dataFrames[0]));
        }

        public BlockLocator Locator { get; }

        public override MessageType Type => MessageType.GetBlockHashes;

        public override IEnumerable<byte[]> DataFrames
        {
            get
            {
                var frames = new List<byte[]>();
                frames.Add(Locator.Hash.ToByteArray());
                return frames;
            }
        }
    }
}
