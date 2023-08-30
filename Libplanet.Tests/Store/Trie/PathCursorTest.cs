using System;
using System.Collections.Immutable;
using Libplanet.Store.Trie;
using Xunit;
using static Libplanet.Common.ByteUtil;
using static Libplanet.Tests.TestUtils;

namespace Libplanet.Tests.Store.Trie
{
    public class PathCursorTest
    {
        [Fact]
        public void Constructor()
        {
            KeyBytes keyBytes = KeyBytes.FromHex("cfed4460");
            var cursor = new PathCursor(keyBytes, false);
            Assert.Equal(Nibbles.FromBytes(keyBytes.ByteArray), cursor.Nibbles);
            Assert.Equal(8, cursor.NibbleLength);
            Assert.Equal(0, cursor.NibbleOffset);

            cursor = new PathCursor(keyBytes, true);
            ImmutableArray<byte> hash = ParseHexToImmutable(
                "42b7a23ca82b1d195f73ac729f216074c7781af7bd808bea825e38556eca13a6");
            Assert.Equal(Nibbles.FromBytes(hash), cursor.Nibbles);
            Assert.Equal(64, cursor.NibbleLength);
            Assert.Equal(0, cursor.NibbleOffset);
        }

        [Fact]
        public void Next()
        {
            var cursor = new PathCursor(KeyBytes.FromHex("cfed4460"), false);
            Assert.Equal(0, cursor.NibbleOffset);
            Assert.Equal(8, cursor.RemainingNibbleLength);
            Assert.Equal((byte)0xc, cursor.NextNibble);
            AssertBytesEqual(
                ParseHexToImmutable("0c0f0e0d04040600"), cursor.GetRemainingNibbles().ByteArray);

            Assert.Throws<ArgumentOutOfRangeException>(() => { cursor = cursor.Next(-1); });
            Assert.Equal(0, cursor.NibbleOffset);
            Assert.Equal(8, cursor.RemainingNibbleLength);

            Assert.Throws<ArgumentOutOfRangeException>(() => { cursor = cursor.Next(9); });
            Assert.Equal(0, cursor.NibbleOffset);
            Assert.Equal(8, cursor.RemainingNibbleLength);

            var next = cursor.Next(1);
            Assert.Equal(0, cursor.NibbleOffset);
            Assert.Equal(8, cursor.RemainingNibbleLength);
            Assert.Equal((byte)0xc, cursor.NextNibble);
            AssertBytesEqual(
                ParseHexToImmutable("0c0f0e0d04040600"), cursor.GetRemainingNibbles().ByteArray);
            Assert.Equal(1, next.NibbleOffset);
            Assert.Equal((byte)0xf, next.NextNibble);
            Assert.Equal(7, next.RemainingNibbleLength);
            AssertBytesEqual(
                ParseHexToImmutable("0f0e0d04040600"), next.GetRemainingNibbles().ByteArray);

            Assert.Throws<ArgumentOutOfRangeException>(() => { next = next.Next(-1); });
            Assert.Equal(1, next.NibbleOffset);
            Assert.Equal(7, next.RemainingNibbleLength);

            Assert.Throws<ArgumentOutOfRangeException>(() => { next = next.Next(8); });
            Assert.Equal(1, next.NibbleOffset);
            Assert.Equal(7, next.RemainingNibbleLength);

            var next2 = next.Next(5);
            Assert.Equal(0, cursor.NibbleOffset);
            Assert.Equal(8, cursor.RemainingNibbleLength);
            Assert.Equal((byte)0xc, cursor.NextNibble);
            AssertBytesEqual(
                ParseHexToImmutable("0c0f0e0d04040600"), cursor.GetRemainingNibbles().ByteArray);
            Assert.Equal(1, next.NibbleOffset);
            Assert.Equal(7, next.RemainingNibbleLength);
            Assert.Equal((byte)0xf, next.NextNibble);
            AssertBytesEqual(
                ParseHexToImmutable("0f0e0d04040600"), next.GetRemainingNibbles().ByteArray);
            Assert.Equal(6, next2.NibbleOffset);
            Assert.Equal(2, next2.RemainingNibbleLength);
            Assert.Equal((byte)0x6, next2.NextNibble);
            AssertBytesEqual(
                ParseHexToImmutable("0600"), next2.GetRemainingNibbles().ByteArray);
        }

        [Fact]
        public void CountCommonStartingNibbles()
        {
            var cursor = new PathCursor(KeyBytes.FromHex("cfed4460"), false);
            Assert.Equal(
                0,
                cursor.CountCommonStartingNibbles(new Nibbles(ImmutableArray<byte>.Empty)));
            Assert.Equal(
                0,
                cursor.CountCommonStartingNibbles(new Nibbles(ParseHexToImmutable("0a0b0c0d"))));
            Assert.Equal(
                3,
                cursor.CountCommonStartingNibbles(
                    new Nibbles(ParseHexToImmutable("0c0f0e0f0f0f0f"))));
            Assert.Equal(
                8,
                cursor.CountCommonStartingNibbles(
                    new Nibbles(ParseHexToImmutable("0c0f0e0d040406000a0b0c0d"))));

            PathCursor next = cursor.Next(3);
            Assert.Equal(
                0,
                next.CountCommonStartingNibbles(
                    new Nibbles(ImmutableArray<byte>.Empty)));
            Assert.Equal(
                0,
                next.CountCommonStartingNibbles(
                    new Nibbles(ParseHexToImmutable("0c0f0e0f0f0f0f"))));
            Assert.Equal(
                3,
                next.CountCommonStartingNibbles(
                    new Nibbles(ParseHexToImmutable("0d04040a0b0c"))));
            Assert.Equal(
                5,
                next.CountCommonStartingNibbles(
                    new Nibbles(ParseHexToImmutable("0d040406000a0b0c0d"))));
        }

        [Fact]
        public void RemainingNibblesStartWith()
        {
            var cursor = new PathCursor(KeyBytes.FromHex("cfed4460"), false);
            Assert.True(cursor.RemainingNibblesStartWith(
                new Nibbles(ParseHexToImmutable("0c0f0e0d04"))));
            Assert.False(
                cursor.RemainingNibblesStartWith(
                    new Nibbles(ParseHexToImmutable("0c0f0e0d040406000a"))));
            Assert.False(cursor.RemainingNibblesStartWith(
                new Nibbles(ParseHexToImmutable("0c0f0e0d0f0f0f"))));

            PathCursor next = cursor.Next(3);
            Assert.True(next.RemainingNibblesStartWith(
                new Nibbles(ParseHexToImmutable("0d0404"))));
            Assert.False(next.RemainingNibblesStartWith(
                new Nibbles(ParseHexToImmutable("0d040406000a0b0c0d"))));
            Assert.False(next.RemainingNibblesStartWith(
                new Nibbles(ParseHexToImmutable("0d040a0b0c"))));
        }
    }
}
