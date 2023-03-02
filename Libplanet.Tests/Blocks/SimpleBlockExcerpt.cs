using Libplanet.Blocks;

namespace Libplanet.Tests.Blocks
{
    public struct SimpleBlockExcerpt : IBlockExcerpt
    {
        public SimpleBlockExcerpt(
            int protocolVersion,
            long index,
            BlockHash hash
        )
        {
            ProtocolVersion = protocolVersion;
            Index = index;
            Hash = hash;
        }

        public int ProtocolVersion { get; set; }

        public long Index { get; set; }

        public BlockHash Hash { get; set; }

        public override string ToString() => this.ToExcerptString();
    }
}
