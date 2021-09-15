using System.Collections.Generic;
using Bencodex;
using Libplanet.Blocks;
using NetMQ;

namespace Libplanet.Net.Messages
{
    internal class BlockHeaderMessage : Message
    {
        private static readonly Codec Codec = new Codec();

        public BlockHeaderMessage(BlockHash genesisHash, BlockHeader header)
        {
            GenesisHash = genesisHash;
            HeaderDictionary = header.ToBencodex();
        }

        public BlockHeaderMessage(NetMQFrame[] frames)
        {
            GenesisHash = new BlockHash(frames[0].Buffer);
            HeaderDictionary = (Bencodex.Types.Dictionary)Codec.Decode(frames[1].Buffer);
        }

        public BlockHash GenesisHash { get; }

        public Bencodex.Types.Dictionary HeaderDictionary { get; }

        protected override MessageType Type => MessageType.BlockHeaderMessage;

        protected override IEnumerable<NetMQFrame> DataFrames
        {
            get
            {
                yield return new NetMQFrame(GenesisHash.ToByteArray());
                yield return new NetMQFrame(Codec.Encode(HeaderDictionary));
            }
        }

        public BlockHeader GetHeader(HashAlgorithmGetter hashAlgorithmGetter) =>
            new BlockHeader(hashAlgorithmGetter, HeaderDictionary);
    }
}
