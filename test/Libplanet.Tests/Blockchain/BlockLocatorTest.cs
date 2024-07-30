using System;
using System.Collections.Generic;
using System.Linq;
using Libplanet.Blockchain;
using Libplanet.Types.Blocks;
using Xunit;

namespace Libplanet.Tests.Blockchain
{
    public class BlockLocatorTest
    {
        [Fact]
        public void Constructor()
        {
            Assert.Throws<ArgumentException>(() =>
                new BlockLocator(new List<BlockHash>()));
        }

        [Fact]
        public void Create()
        {
            // Generate fixture block hashes looks like 0x00...00 0x00...01, 0x00...02, and so on,
            // for the sake of easier debugging.
            const int count = 0x10;
            List<long> indices = Enumerable.Range(0, count).Select(i => (long)i).ToList();
            Func<long, BlockHash> indexToBlockHash = i =>
            {
                byte[] bytes = GetBigEndianBytes(i);
                var buffer = new byte[32];
                bytes.CopyTo(buffer, buffer.Length - bytes.Length);
                return new BlockHash(buffer);
            };
            List<BlockHash> hashes = indices.Select(i => indexToBlockHash(i)).ToList();

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
                hashes[0xf],
                hashes[0x0],
            };

            Assert.Equal(expected, locator);

            locator = BlockLocator.Create(
                startIndex: hashes.Count - 3,
                indexToBlockHash: i => (BlockHash?)indexToBlockHash(i),
                sampleAfter: 0);
            expected = new BlockHash[]
            {
                hashes[0xd],
                hashes[0x0],
            };

            Assert.Equal(expected, locator);

            locator = BlockLocator.Create(
                startIndex: 0,
                indexToBlockHash: i => (BlockHash?)indexToBlockHash(i),
                sampleAfter: 0);
            expected = new BlockHash[]
            {
                hashes[0x0],
            };

            Assert.Equal(expected, locator);

            locator = BlockLocator.Create(
                startIndex: count,
                indexToBlockHash: i => i >= count ? null : (BlockHash?)indexToBlockHash(i),
                sampleAfter: 0);
            expected = new BlockHash[]
            {
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
