using System.Collections.Generic;
using Bencodex;
using Libplanet.Blocks;

namespace Libplanet.Net.Messages
{
    internal class BlockHeaderMsg : Message
    {
        private static readonly Codec Codec = new Codec();

        public BlockHeaderMsg(BlockHash genesisHash, BlockHeader header)
        {
            GenesisHash = genesisHash;
            HeaderDictionary = header.MarshalBlockHeader();
        }

        public BlockHeaderMsg(byte[][] dataFrames)
        {
            GenesisHash = new BlockHash(dataFrames[0]);
            HeaderDictionary = (Bencodex.Types.Dictionary)Codec.Decode(dataFrames[1]);
        }

        public BlockHash GenesisHash { get; }

        public Bencodex.Types.Dictionary HeaderDictionary { get; }

        public long HeaderIndex => BlockMarshaler.UnmarshalBlockMetadataIndex(HeaderDictionary);

        public BlockHash HeaderHash => BlockMarshaler.UnmarshalBlockHeaderHash(HeaderDictionary);

        public override MessageType Type => MessageType.BlockHeaderMessage;

        public override IEnumerable<byte[]> DataFrames => new[]
        {
            GenesisHash.ToByteArray(),
            Codec.Encode(HeaderDictionary),
        };

        public BlockHeader GetHeader()
        {
            return BlockMarshaler.UnmarshalBlockHeader(HeaderDictionary);
        }
    }
}
