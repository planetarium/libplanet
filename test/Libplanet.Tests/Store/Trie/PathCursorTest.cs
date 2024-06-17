using System;
using Libplanet.Store.Trie;
using Xunit;
using static Libplanet.Tests.TestUtils;

namespace Libplanet.Tests.Store.Trie
{
    public class PathCursorTest
    {
        [Fact]
        public void Constructor()
        {
            KeyBytes keyBytes = KeyBytes.FromHex("cfed4460");
            var cursor = new PathCursor(keyBytes);
            Assert.Equal(Nibbles.FromKeyBytes(keyBytes), cursor.Nibbles);
            Assert.Equal(8, cursor.Length);
            Assert.Equal(0, cursor.Offset);
        }

        [Fact]
        public void Next()
        {
            var cursor = new PathCursor(KeyBytes.FromHex("cfed4460"));
            Assert.Equal(0, cursor.Offset);
            Assert.Equal(8, cursor.RemainingNibbleLength);
            Assert.Equal((byte)0xc, cursor.NextNibble);
            AssertBytesEqual(
                Nibbles.FromHex("cfed4460").ByteArray, cursor.GetRemainingNibbles().ByteArray);

            Assert.Throws<ArgumentOutOfRangeException>(() => { cursor = cursor.Next(-1); });
            Assert.Equal(0, cursor.Offset);
            Assert.Equal(8, cursor.RemainingNibbleLength);

            Assert.Throws<ArgumentOutOfRangeException>(() => { cursor = cursor.Next(9); });
            Assert.Equal(0, cursor.Offset);
            Assert.Equal(8, cursor.RemainingNibbleLength);

            var next = cursor.Next(1);
            Assert.Equal(0, cursor.Offset);
            Assert.Equal(8, cursor.RemainingNibbleLength);
            Assert.Equal((byte)0xc, cursor.NextNibble);
            AssertBytesEqual(
                Nibbles.FromHex("cfed4460").ByteArray, cursor.GetRemainingNibbles().ByteArray);
            Assert.Equal(1, next.Offset);
            Assert.Equal((byte)0xf, next.NextNibble);
            Assert.Equal(7, next.RemainingNibbleLength);
            AssertBytesEqual(
                Nibbles.FromHex("fed4460").ByteArray, next.GetRemainingNibbles().ByteArray);

            Assert.Throws<ArgumentOutOfRangeException>(() => { next = next.Next(-1); });
            Assert.Equal(1, next.Offset);
            Assert.Equal(7, next.RemainingNibbleLength);

            Assert.Throws<ArgumentOutOfRangeException>(() => { next = next.Next(8); });
            Assert.Equal(1, next.Offset);
            Assert.Equal(7, next.RemainingNibbleLength);

            var next2 = next.Next(5);
            Assert.Equal(0, cursor.Offset);
            Assert.Equal(8, cursor.RemainingNibbleLength);
            Assert.Equal((byte)0xc, cursor.NextNibble);
            AssertBytesEqual(
                Nibbles.FromHex("cfed4460").ByteArray, cursor.GetRemainingNibbles().ByteArray);
            Assert.Equal(1, next.Offset);
            Assert.Equal(7, next.RemainingNibbleLength);
            Assert.Equal((byte)0xf, next.NextNibble);
            AssertBytesEqual(
                Nibbles.FromHex("fed4460").ByteArray, next.GetRemainingNibbles().ByteArray);
            Assert.Equal(6, next2.Offset);
            Assert.Equal(2, next2.RemainingNibbleLength);
            Assert.Equal((byte)0x6, next2.NextNibble);
            AssertBytesEqual(
                Nibbles.FromHex("60").ByteArray, next2.GetRemainingNibbles().ByteArray);
        }

        [Fact]
        public void CountCommonStartingNibbles()
        {
            var cursor = new PathCursor(KeyBytes.FromHex("cfed4460"));
            Assert.Equal(
                0,
                cursor.CountCommonStartingNibbles(Nibbles.Empty));
            Assert.Equal(
                0,
                cursor.CountCommonStartingNibbles(Nibbles.FromHex("abcd")));
            Assert.Equal(
                3,
                cursor.CountCommonStartingNibbles(Nibbles.FromHex("cfeffff")));
            Assert.Equal(
                8,
                cursor.CountCommonStartingNibbles(Nibbles.FromHex("cfed4460abcd")));

            PathCursor next = cursor.Next(3);
            Assert.Equal(
                0,
                next.CountCommonStartingNibbles(Nibbles.Empty));
            Assert.Equal(
                0,
                next.CountCommonStartingNibbles(Nibbles.FromHex("cfeffff")));
            Assert.Equal(
                3,
                next.CountCommonStartingNibbles(Nibbles.FromHex("d44abc")));
            Assert.Equal(
                5,
                next.CountCommonStartingNibbles(Nibbles.FromHex("d4460abcd")));
        }

        [Fact]
        public void RemainingNibblesStartWith()
        {
            var cursor = new PathCursor(KeyBytes.FromHex("cfed4460"));
            Assert.True(cursor.RemainingNibblesStartWith(Nibbles.FromHex("cfed4")));
            Assert.False(
                cursor.RemainingNibblesStartWith(Nibbles.FromHex("cfed4460a")));
            Assert.False(cursor.RemainingNibblesStartWith(Nibbles.FromHex("cfedfff")));

            PathCursor next = cursor.Next(3);
            Assert.True(next.RemainingNibblesStartWith(Nibbles.FromHex("d44")));
            Assert.False(next.RemainingNibblesStartWith(Nibbles.FromHex("d4460abcd")));
            Assert.False(next.RemainingNibblesStartWith(Nibbles.FromHex("d4abc")));
        }
    }
}
