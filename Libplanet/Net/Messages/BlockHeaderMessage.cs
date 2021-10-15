#nullable enable
using System.Collections.Generic;
using Bencodex;
using Libplanet.Blocks;

namespace Libplanet.Net.Messages
{
    internal class BlockHeaderMessage : Message
    {
        private static readonly Codec Codec = new Codec();

        public BlockHeaderMessage(BlockHash genesisHash, BlockHeader header)
        {
            GenesisHash = genesisHash;
            HeaderDictionary = header.MarshalBlockHeader();
        }

        public BlockHeaderMessage(byte[][] dataFrames)
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

        public BlockHeader GetHeader(HashAlgorithmGetter hashAlgorithmGetter)
        {
            return BlockMarshaler.UnmarshalBlockHeader(hashAlgorithmGetter, HeaderDictionary);
        }
    }
}
