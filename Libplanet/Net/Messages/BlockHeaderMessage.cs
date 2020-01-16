using System.Collections.Generic;
using Libplanet.Blocks;
using NetMQ;

namespace Libplanet.Net.Messages
{
    internal class BlockHeaderMessage : Message
    {
        public BlockHeaderMessage(
            Address sender, BlockHeader header)
        {
            Header = header;
        }

        public BlockHeaderMessage(NetMQFrame[] frames)
        {
            Header = BlockHeader.Deserialize(frames[0].Buffer);
        }

        public BlockHeader Header { get; }

        protected override MessageType Type => MessageType.BlockHeaderMessage;

        protected override IEnumerable<NetMQFrame> DataFrames
        {
            get
            {
                yield return new NetMQFrame(Header.Serialize());
            }
        }
    }
}
