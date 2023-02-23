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
            Assert.Empty(ByteUtil.Hex(default(ImmutableArray<byte>)));
        }

        [Fact]
        public void ParseHex()
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

            Assert.Throws<ArgumentOutOfRangeException>(
                () => ByteUtil.ParseHex("abc")
            );
            Assert.Throws<FormatException>(
                () => ByteUtil.ParseHex("abcdefgh")
            );
        }

        [Fact]
        public void ParseHexToImmutable()
        {
            const string hex = "45a22187e2d8850bb357886958bc3e8560929ccc";
            Assert.Equal(
                new byte[20]
                {
                    0x45, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57,
                    0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                },
                ByteUtil.ParseHexToImmutable(hex)
            );

            Assert.Throws<ArgumentOutOfRangeException>(() => ByteUtil.ParseHexToImmutable("abc"));
            Assert.Throws<FormatException>(() => ByteUtil.ParseHexToImmutable("abcdefgh"));
        }

        [Fact]
        public void CanCalculateHashCode()
        {
            var bytes = new byte[20]
            {
                0x45, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57,
                0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
            };

            Assert.Equal(-1026516859, ByteUtil.CalculateHashCode(bytes));

            var otherBytes = TestUtils.GetRandomBytes(20);
            otherBytes[19] = 0xdd;

            Assert.NotEqual(
                ByteUtil.CalculateHashCode(bytes),
                ByteUtil.CalculateHashCode(otherBytes)
            );
        }

        [Fact]
        public void TimingSafelyCompare()
        {
            Assert.True(ByteUtil.TimingSafelyCompare(new byte[0], new byte[0]));
            Assert.False(ByteUtil.TimingSafelyCompare(new byte[] { 0 }, new byte[] { 1 }));
            Assert.True(ByteUtil.TimingSafelyCompare(new byte[] { 1 }, new byte[] { 1 }));
            Assert.True(
                ByteUtil.TimingSafelyCompare(new byte[] { 1, 2, 3, 4 }, new byte[] { 1, 2, 3, 4 })
            );
            Assert.False(
                ByteUtil.TimingSafelyCompare(new byte[] { 1, 2, 3, 4 }, new byte[] { 1, 2, 3, 5 })
            );
            Assert.False(
                ByteUtil.TimingSafelyCompare(new byte[] { 1, 2, 3, 4 }, new byte[] { 1, 2, 3 })
            );
        }

        [Fact]
        public void Satisfies()
        {
            Func<string, byte[]> hash = ByteUtil.ParseHex;
            var emp = new byte[0];
            var dl1 = hash("8ec2f5285c8fc2f5285c8fc2f5285c8fc2f5285c8fc2f5285c8fc2f5285c8f00");
            var dl2 = hash("e94a399c4fd6d508f022bbee8781a9c44754408bb92ca5b509fa824b00000000");
            var dl4 = hash("a85f4662e531e44d161346dcaa256af7923c87291b5408b109fa820000000000");

            Assert.True(ByteUtil.Satisfies(emp, 0));
            Assert.True(ByteUtil.Satisfies(dl1, 0));
            Assert.True(ByteUtil.Satisfies(dl2, 0));
            Assert.True(ByteUtil.Satisfies(dl4, 0));

            Assert.False(ByteUtil.Satisfies(emp, 1));
            Assert.True(ByteUtil.Satisfies(dl1, 1));
            Assert.True(ByteUtil.Satisfies(dl2, 1));
            Assert.True(ByteUtil.Satisfies(dl4, 1));

            Assert.False(ByteUtil.Satisfies(emp, 457));
            Assert.True(ByteUtil.Satisfies(dl1, 457));
            Assert.True(ByteUtil.Satisfies(dl2, 457));
            Assert.True(ByteUtil.Satisfies(dl4, 457));

            Assert.False(ByteUtil.Satisfies(emp, 458));
            Assert.False(ByteUtil.Satisfies(dl1, 458));
            Assert.True(ByteUtil.Satisfies(dl2, 458));
            Assert.True(ByteUtil.Satisfies(dl4, 458));

            Assert.False(ByteUtil.Satisfies(emp, 14560825400));
            Assert.False(ByteUtil.Satisfies(dl1, 14560825400));
            Assert.True(ByteUtil.Satisfies(dl2, 14560825400));
            Assert.True(ByteUtil.Satisfies(dl4, 14560825400));

            Assert.False(ByteUtil.Satisfies(emp, 14560825401));
            Assert.False(ByteUtil.Satisfies(dl1, 14560825401));
            Assert.False(ByteUtil.Satisfies(dl2, 14560825401));
            Assert.True(ByteUtil.Satisfies(dl4, 14560825401));
        }
    }
}
