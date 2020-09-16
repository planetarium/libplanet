using System.Collections.Generic;
using System.Security.Cryptography;
using Libplanet.Blocks;
using NetMQ;

namespace Libplanet.Net.Messages
{
    internal class BlockHeaderMessage : Message
    {
        public BlockHeaderMessage(HashDigest<SHA256> genesisHash, BlockHeader header)
        {
            GenesisHash = genesisHash;
            Header = header;
        }

        public BlockHeaderMessage(NetMQFrame[] frames)
        {
            GenesisHash = new HashDigest<SHA256>(frames[0].Buffer);
            Header = BlockHeader.Deserialize(frames[1].Buffer);
        }

        public HashDigest<SHA256> GenesisHash { get; }

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
