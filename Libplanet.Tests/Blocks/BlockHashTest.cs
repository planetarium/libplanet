using System;
using System.Collections.Immutable;
using System.IO;
using System.Runtime.Serialization.Formatters.Binary;
using System.Security.Cryptography;
using Libplanet.Blocks;
using Xunit;

namespace Libplanet.Tests.Blocks
{
    public class BlockHashTest
    {
        [Fact]
        public void DefaultConstructor()
        {
            BlockHash def = default;
            Assert.Equal(default, def);
            Assert.Equal(new BlockHash(new byte[0]), def);
            Assert.Equal(new BlockHash(default(ImmutableArray<byte>)), def);
            Assert.Equal(new BlockHash(ImmutableArray<byte>.Empty), def);
        }

        [Fact]
        public void DisallowNull()
        {
            Assert.Throws<ArgumentNullException>(() => new BlockHash(null));
        }

        [Fact]
        public void FromString()
        {
            byte[] b =
            {
                0x45, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57,
                0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
            };
            var expected = new BlockHash(b);
            BlockHash actual = BlockHash.FromString("45a22187e2d8850bb357886958bc3e8560929ccc");
            Assert.Equal(expected, actual);

            Assert.Throws<ArgumentNullException>(() => BlockHash.FromString(null));
            Assert.Throws<ArgumentOutOfRangeException>(() => BlockHash.FromString("abc"));
            Assert.Throws<FormatException>(() => BlockHash.FromString("asdf"));
        }

        [Fact]
        public void FromHashDigest()
        {
            byte[] b =
            {
                0x45, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57,
                0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
            };
            var expected = new BlockHash(b);
            BlockHash actual = BlockHash.FromHashDigest(new HashDigest<SHA1>(b));
            Assert.Equal(expected, actual);

            Assert.Equal(
                new BlockHash(new byte[HashDigest<SHA256>.Size]),
                BlockHash.FromHashDigest(default(HashDigest<SHA256>))
            );
        }

        [Fact]
        public void FromImmutableArrayConstructor()
        {
            byte[] b =
            {
                0x45, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57,
                0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
            };
            var bAsArray = b.ToImmutableArray();

            var expected = new BlockHash(b);
            var actual = new BlockHash(bAsArray);
            Assert.Equal(expected, actual);
        }

        [Fact]
        public void Length()
        {
            byte[] b10 =
            {
                0x45, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57,
            };
            Assert.Equal(10, new BlockHash(b10).BytesLength);

            byte[] b20 =
            {
                0x45, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57,
                0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
            };
            Assert.Equal(20, new BlockHash(b20).BytesLength);
        }

        [Fact]
        public void SerializeAndDeserialize()
        {
            byte[] b =
            {
                0x45, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57,
                0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                0x45, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57,
                0x88, 0x69,
            };

            var expected = new BlockHash(b);
            BlockHash deserialized;
            BinaryFormatter formatter = new BinaryFormatter();
            using (var memoryStream = new MemoryStream())
            {
                formatter.Serialize(memoryStream, expected);
                memoryStream.Seek(0, SeekOrigin.Begin);
                deserialized = (BlockHash)formatter.Deserialize(memoryStream);
            }

            Assert.Equal(deserialized, expected);
        }
    }
}
