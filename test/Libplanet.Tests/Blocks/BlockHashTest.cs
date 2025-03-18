using System;
using System.Collections.Immutable;
using System.Security.Cryptography;
using Libplanet.Common;
using Libplanet.Types.Blocks;
using Xunit;
using static Libplanet.Tests.TestUtils;

namespace Libplanet.Tests.Blocks
{
    public class BlockHashTest
    {
        [Fact]
        public void DefaultConstructor()
        {
            BlockHash def = default;
            AssertBytesEqual(new byte[32].ToImmutableArray(), def.ByteArray);
            AssertBytesEqual(new byte[32], def.ToByteArray());
        }

        [Fact]
        public void LengthCheck()
        {
            Assert.Throws<ArgumentOutOfRangeException>(() => new BlockHash(new byte[0]));
            Assert.Throws<ArgumentOutOfRangeException>(() => new BlockHash(new byte[1]));
            Assert.Throws<ArgumentOutOfRangeException>(() => new BlockHash(new byte[31]));
            Assert.Throws<ArgumentOutOfRangeException>(() => new BlockHash(new byte[33]));
        }

        [Fact]
        public void FromString()
        {
            byte[] b =
            {
                0x28, 0x31, 0xd4, 0xc2, 0x4a, 0xe5, 0xd1, 0x93, 0x1a, 0x16, 0xde,
                0x0a, 0x06, 0x6e, 0x23, 0x3e, 0x0e, 0xed, 0x1d, 0x3f, 0xdf, 0x6d,
                0x57, 0x2a, 0xd5, 0x8d, 0x1c, 0x37, 0x05, 0xc8, 0xcb, 0xfc,
            };
            var expected = new BlockHash(b);
            BlockHash actual = BlockHash.Parse(
                "2831d4c24ae5d1931a16de0a066e233e0eed1d3fdf6d572ad58d1c3705c8cbfc"
            );
            Assert.Equal(expected, actual);

            Assert.Throws<ArgumentNullException>(() => BlockHash.Parse(null));
            Assert.Throws<ArgumentOutOfRangeException>(() => BlockHash.Parse(string.Empty));
            Assert.Throws<ArgumentOutOfRangeException>(() => BlockHash.Parse("abc"));
            Assert.Throws<ArgumentOutOfRangeException>(() => BlockHash.Parse("ab"));
            Assert.Throws<ArgumentOutOfRangeException>(() =>
                BlockHash.Parse(
                    "2831d4c24ae5d1931a16de0a066e233e0eed1d3fdf6d572ad58d1c3705c8cb"
                )
            );
            Assert.Throws<ArgumentOutOfRangeException>(() =>
                BlockHash.Parse(
                    "2831d4c24ae5d1931a16de0a066e233e0eed1d3fdf6d572ad58d1c3705c8cbfc00"
                )
            );
            Assert.Throws<FormatException>(() => BlockHash.Parse("asdf"));
        }

        [Fact]
        public void FromHashDigest()
        {
            byte[] b =
            {
                0x28, 0x31, 0xd4, 0xc2, 0x4a, 0xe5, 0xd1, 0x93, 0x1a, 0x16, 0xde,
                0x0a, 0x06, 0x6e, 0x23, 0x3e, 0x0e, 0xed, 0x1d, 0x3f, 0xdf, 0x6d,
                0x57, 0x2a, 0xd5, 0x8d, 0x1c, 0x37, 0x05, 0xc8, 0xcb, 0xfc,
            };
            var expected = new BlockHash(b);
            BlockHash actual = BlockHash.Create(new HashDigest<SHA256>(b));
            Assert.Equal(expected, actual);

            Assert.Equal(
                new BlockHash(new byte[32]),
                BlockHash.Create(default)
            );
        }

        [Fact]
        public void DeriveFrom()
        {
            byte[] foo = { 0x66, 0x6f, 0x6f }, bar = { 0x62, 0x61, 0x72 };
            AssertBytesEqual(
                BlockHash.Parse(
                    "2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae"),
                BlockHash.DeriveFrom(foo)
            );
            AssertBytesEqual(
                BlockHash.Parse(
                    "fcde2b2edba56bf408601fb721fe9b5c338d10ee429ea04fae5511b68fbf8fb9"),
                BlockHash.DeriveFrom(bar)
            );
        }

        [Fact]
        public void FromImmutableArrayConstructor()
        {
            byte[] b =
            {
                0x28, 0x31, 0xd4, 0xc2, 0x4a, 0xe5, 0xd1, 0x93, 0x1a, 0x16, 0xde,
                0x0a, 0x06, 0x6e, 0x23, 0x3e, 0x0e, 0xed, 0x1d, 0x3f, 0xdf, 0x6d,
                0x57, 0x2a, 0xd5, 0x8d, 0x1c, 0x37, 0x05, 0xc8, 0xcb, 0xfc,
            };
            var bAsArray = b.ToImmutableArray();

            var expected = new BlockHash(b);
            var actual = new BlockHash(bAsArray);
            Assert.Equal(expected, actual);
        }

        [SkippableFact]
        public void JsonSerialization()
        {
            BlockHash hash = BlockHash.Parse(
                "2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae");
            AssertJsonSerializable(
                hash,
                "\"2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae\""
            );
        }
    }
}
