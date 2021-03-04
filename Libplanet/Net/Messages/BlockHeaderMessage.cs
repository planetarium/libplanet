using System.Collections.Generic;
using Libplanet.Blocks;
using NetMQ;

namespace Libplanet.Net.Messages
{
    internal class BlockHeaderMessage : Message
    {
        public BlockHeaderMessage(BlockHash genesisHash, BlockHeader header)
        {
            GenesisHash = genesisHash;
            Header = header;
        }

        public BlockHeaderMessage(NetMQFrame[] frames)
        {
            GenesisHash = new BlockHash(frames[0].Buffer);
            Header = BlockHeader.Deserialize(frames[1].Buffer);
        }

        public BlockHash GenesisHash { get; }

        public BlockHeader Header { get; }

        protected override MessageType Type => MessageType.BlockHeaderMessage;

        protected override IEnumerable<NetMQFrame> DataFrames
        {
            get
            {
                yield return new NetMQFrame(GenesisHash.ToByteArray());
                yield return new NetMQFrame(Header.Serialize());
            }
        }
    }
}
