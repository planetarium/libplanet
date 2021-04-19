using System.Numerics;
using Libplanet.Blocks;

namespace Libplanet.Tests.Blocks
{
    public struct SimpleBlockExcerpt : IBlockExcerpt
    {
        public SimpleBlockExcerpt(
            int protocolVersion,
            long index,
            BlockHash hash,
            BigInteger totalDifficulty
        )
        {
            ProtocolVersion = protocolVersion;
            Index = index;
            Hash = hash;
            TotalDifficulty = totalDifficulty;
        }

        public int ProtocolVersion { get; set; }

        public long Index { get; set; }

        public BlockHash Hash { get; set; }

        public BigInteger TotalDifficulty { get; set; }

        public override string ToString() => this.ToExcerptString();
    }
}
