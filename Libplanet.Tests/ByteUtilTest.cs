using System;
using System.Collections.Immutable;
using Xunit;

namespace Libplanet.Tests
{
    public class ByteUtilTest
    {
        [Fact]
        public void HexTest()
        {
            var bs = new byte[]
            {
                0x45, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57,
                0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
            };
            const string expectedHex = "45a22187e2d8850bb357886958bc3e8560929ccc";
            Assert.Equal(expectedHex, ByteUtil.Hex(bs));
            Assert.Equal(expectedHex, ByteUtil.Hex(ImmutableArray.Create(bs)));
        }

        [Fact]
        public void ParseTest()
        {
            const string hex = "45a22187e2d8850bb357886958bc3e8560929ccc";
            Assert.Equal(
                new byte[20]
                {
                    0x45, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57,
                    0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                },
                ByteUtil.ParseHex(hex)
            );

            Assert.Throws<ArgumentNullException>(() => ByteUtil.ParseHex(null));
            Assert.Throws<ArgumentOutOfRangeException>(
                () => ByteUtil.ParseHex("abc")
            );
            Assert.Throws<FormatException>(
                () => ByteUtil.ParseHex("abcdefgh")
            );
        }

        [Fact]
        public void CanCalculateHashCode()
        {
            var bytes = new byte[20]
            {
                0x45, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57,
                0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
            };

            Assert.Equal(465595541, ByteUtil.CalculateHashCode(bytes));

            var otherBytes = TestUtils.GetRandomBytes(20);
            otherBytes[19] = 0xdd;

            Assert.NotEqual(
                ByteUtil.CalculateHashCode(bytes),
                ByteUtil.CalculateHashCode(otherBytes)
            );
        }
    }
}
