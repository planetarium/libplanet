using System;
using System.Collections.Generic;
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
            Assert.Throws<ArgumentException>(() =>
                new BlockLocator(new List<BlockHash>()));
        }

        [Fact]
        public void Factory()
        {
            // Generate fixture block hashes looks like 0x00...00 0x00...01, 0x00...02, and so on,
            // for the sake of easier debugging.
            List<long> indices = Enumerable.Range(0, 0x10).Select(i => (long)i).ToList();
            Func<long, BlockHash> indexToBlockHash = i =>
            {
                byte[] bytes = GetBigEndianBytes(i);
                var buffer = new byte[32];
                bytes.CopyTo(buffer, buffer.Length - bytes.Length);
                return new BlockHash(buffer);
            };
            List<BlockHash> hashes = indices.Select(i => indexToBlockHash(i)).ToList();
            Action<BlockLocator> printLocator = loc =>
            {
                _output.WriteLine(
                    string.Join(", ", loc
                        .Select(hash => hash.ToString())
                        .Select(str => str.Substring(str.Length - 2))
                        .Select(str => $"0x00..{str}")));
            };

            Assert.Throws<ArgumentOutOfRangeException>(() =>
                BlockLocator.Create(
                    startIndex: -1,
                    indexToBlockHash: i => (BlockHash?)indexToBlockHash(i),
                    sampleAfter: 0));
            Assert.Throws<ArgumentException>(() =>
                BlockLocator.Create(
                    startIndex: 0,
                    indexToBlockHash: i => i == 0 ? null : (BlockHash?)indexToBlockHash(i),
                    sampleAfter: 0));

            var locator = BlockLocator.Create(
                startIndex: hashes.Count - 1,
                indexToBlockHash: i => (BlockHash?)indexToBlockHash(i),
                sampleAfter: 0);
            var expected = new BlockHash[]
            {
                hashes[0xf],    // Sampling starts here.
                hashes[0xe],
                hashes[0xc],
                hashes[0x8],
                hashes[0x0],
            };

            printLocator(locator);
            Assert.Equal(expected, locator);

            locator = BlockLocator.Create(
                startIndex: hashes.Count - 1,
                indexToBlockHash: i => (BlockHash?)indexToBlockHash(i),
                sampleAfter: 1);
            expected = new BlockHash[]
            {
                hashes[0xf],
                hashes[0xe],    // Sampling starts here.
                hashes[0xd],
                hashes[0xb],
                hashes[0x7],
                hashes[0x0],
            };

            printLocator(locator);
            Assert.Equal(expected, locator);

            locator = BlockLocator.Create(
                startIndex: hashes.Count - 1,
                indexToBlockHash: i => (BlockHash?)indexToBlockHash(i),
                sampleAfter: 5);
            expected = new BlockHash[]
            {
                hashes[0xf],
                hashes[0xe],
                hashes[0xd],
                hashes[0xc],
                hashes[0xb],
                hashes[0xa],    // Sampling starts here.
                hashes[0x9],
                hashes[0x7],
                hashes[0x3],
                hashes[0x0],
            };

            printLocator(locator);
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
