using System;
using System.Collections.Immutable;
using System.Linq;
using Libplanet.Blockchain;
using Libplanet.Blocks;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Tests.Blockchain
{
    public class BlockLocatorTest
    {
        private readonly ITestOutputHelper _output;

        public BlockLocatorTest(ITestOutputHelper output)
        {
            _output = output;
        }

        [Fact]
        public void Constructor()
        {
            // Generate fixture block hashes looks like 0x000...1, 0x000...2, 0x000...3, and so on,
            // for the sake of easier debugging.
            ImmutableArray<BlockHash> blocks = Enumerable.Range(0, 0x10).Select(i =>
            {
                byte[] bytes = GetBigEndianBytes(i);
                var buffer = new byte[32];
                bytes.CopyTo(buffer, buffer.Length - bytes.Length);
                return new BlockHash(buffer);
            }).ToImmutableArray();

            var locator = new BlockLocator(
                indexBlockHash: idx => blocks[(int)(idx < 0 ? blocks.Length + idx : idx)],
                indexByBlockHash: hash => blocks.IndexOf(hash),
                sampleAfter: 5
            );

            foreach (BlockHash hash in locator)
            {
                _output.WriteLine(hash.ToString());
            }

            Assert.Equal(
                new[]
                {
                    blocks[0xf],
                    blocks[0xe],
                    blocks[0xd],
                    blocks[0xc],
                    blocks[0xb],
                    blocks[0xa],
                    blocks[0x8],
                    blocks[0x4],
                    blocks[0x0],
                },
                locator
            );
        }

        private static byte[] GetBigEndianBytes(long value)
        {
            byte[] bytes = BitConverter.GetBytes(value);
            if (BitConverter.IsLittleEndian)
            {
                Array.Reverse(bytes);
            }

            return bytes;
        }
    }
}
