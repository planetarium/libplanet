using System.Collections.Generic;
using System.Linq;
using Libplanet.Blockchain;
using Libplanet.Blocks;
using NetMQ;

namespace Libplanet.Net.Messages
{
    internal class GetBlockHashes : Message
    {
        public GetBlockHashes(BlockLocator locator, BlockHash? stop)
        {
            Locator = locator;
            Stop = stop;
        }

        public GetBlockHashes(NetMQFrame[] frames)
        {
            int requestedHashCount = frames[0].ConvertToInt32();
            Locator = new BlockLocator(
                frames.Skip(1).Take(requestedHashCount)
                .Select(NetMQFrameExtensions.ConvertToBlockHash));
            Stop = frames[1 + requestedHashCount].IsEmpty
                ? default(BlockHash?)
                : frames[1 + requestedHashCount].ConvertToBlockHash();
        }

        public BlockLocator Locator { get; }

        public BlockHash? Stop { get; }

        protected override MessageType Type => MessageType.GetBlockHashes;

        protected override IEnumerable<NetMQFrame> DataFrames
        {
            get
            {
                yield return new NetMQFrame(
                    NetworkOrderBitsConverter.GetBytes(Locator.Count()));

                foreach (BlockHash hash in Locator)
                {
                    yield return new NetMQFrame(hash.ToByteArray());
                }

                yield return Stop is { } stop
                    ? new NetMQFrame(stop.ToByteArray())
                    : NetMQFrame.Empty;
            }
        }
    }
}
