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
            ImmutableArray<BlockHash> hashes = Enumerable.Range(0, 0x10).Select(i =>
            {
                byte[] bytes = GetBigEndianBytes(i);
                var buffer = new byte[32];
                bytes.CopyTo(buffer, buffer.Length - bytes.Length);
                return new BlockHash(buffer);
            }).ToImmutableArray();

            var locator = BlockLocator.Create(
                startIndex: hashes.Length - 1,
                indexToBlockHash: idx => hashes[(int)idx],
                sampleAfter: 5);

            foreach (BlockHash hash in locator)
            {
                _output.WriteLine(hash.ToString());
            }

            var expected = new BlockHash[]
            {
                hashes[0xf],
                hashes[0xe],
                hashes[0xd],
                hashes[0xc],
                hashes[0xb],
                hashes[0xa],    // Sampling starts here.
                hashes[0x8],
                hashes[0x4],
                hashes[0x0],
            };

            Assert.Equal(expected, locator);
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
