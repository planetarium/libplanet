using System;
using Libplanet.Store.Trie;
using Xunit;

namespace Libplanet.Tests.Store.Trie;

public class PathCursorTest
{
    [Theory]
    [InlineData("")]
    [InlineData("cfed4460")]
    public void Base_Test(string hex)
    {
        var nibbles = hex == string.Empty ? Nibbles.Empty : Nibbles.Parse(hex);
        var cursor = new PathCursor(nibbles);
        Assert.Equal(nibbles, cursor.Nibbles);
        Assert.Equal(hex.Length, cursor.Length);
        Assert.Equal(0, cursor.Position);
    }

    [Theory]
    [InlineData("")]
    [InlineData("cfed4460")]
    public void Create_Test(string hex)
    {
        var keyBytes = hex == string.Empty ? KeyBytes.Empty : KeyBytes.Parse(hex);
        var nibbles = Nibbles.FromKeyBytes(keyBytes);
        var cursor = PathCursor.Create(keyBytes);
        Assert.Equal(nibbles, cursor.Nibbles);
        Assert.Equal(hex.Length, cursor.Length);
        Assert.Equal(0, cursor.Position);
    }

    [Theory]
    [InlineData("cfed4460", -1)]
    [InlineData("cfed4460", 9)]
    public void Next_ThrowTest(string hex, int offset)
    {
        var cursor = PathCursor.Create(KeyBytes.Parse(hex));
        Assert.Throws<ArgumentOutOfRangeException>(() => { cursor = cursor.Next(offset); });
        Assert.Equal(0, cursor.Position);
        Assert.Equal(cursor.Length - cursor.Position, cursor.Length - cursor.Position);
    }

    [Theory]
    [InlineData("cfed4460", 0, 0, 8, 0xc, "cfed4460")]
    [InlineData("cfed4460", 1, 1, 7, 0xf, "fed4460")]
    [InlineData("cfed4460", 5, 5, 3, 0x4, "460")]
    public void Next_Test(
        string hex,
        int offset,
        int expectedOffset,
        int expectedNextLength,
        byte expectedCurrent,
        string expectedNextNibbles)
    {
        var cursor = PathCursor.Create(KeyBytes.Parse(hex));
        var next = cursor.Next(offset);
        Assert.Equal(cursor.Nibbles, next.Nibbles);
        Assert.Equal(cursor.Length, next.Length);
        Assert.Equal(cursor.Position + offset, next.Position);

        Assert.Equal(expectedOffset, next.Position);
        Assert.Equal(next.Length - next.Position, expectedNextLength);
        Assert.Equal(expectedCurrent, next.Current);
        Assert.Equal(expectedNextNibbles, $"{next.NextNibbles}");
    }

    [Fact]
    public void Next()
    {
        var cursor = PathCursor.Create(KeyBytes.Parse("cfed4460"));
        Assert.Equal(0, cursor.Position);
        Assert.Equal(8, cursor.Length - cursor.Position);
        Assert.Equal((byte)0xc, cursor.Current);
        Assert.Equal<byte>(
            Nibbles.Parse("cfed4460").ByteArray, cursor.NextNibbles.ByteArray);

        Assert.Throws<ArgumentOutOfRangeException>(() => { cursor = cursor.Next(-1); });
        Assert.Equal(0, cursor.Position);
        Assert.Equal(8, cursor.Length - cursor.Position);

        Assert.Throws<ArgumentOutOfRangeException>(() => { cursor = cursor.Next(9); });
        Assert.Equal(0, cursor.Position);
        Assert.Equal(8, cursor.Length - cursor.Position);

        var next = cursor.Next(1);
        Assert.Equal(0, cursor.Position);
        Assert.Equal(8, cursor.Length - cursor.Position);
        Assert.Equal((byte)0xc, cursor.Current);
        Assert.Equal<byte>(
            Nibbles.Parse("cfed4460").ByteArray, cursor.NextNibbles.ByteArray);
        Assert.Equal(1, next.Position);
        Assert.Equal((byte)0xf, next.Current);
        Assert.Equal(7, next.Length - next.Position);
        Assert.Equal<byte>(
            Nibbles.Parse("fed4460").ByteArray, next.NextNibbles.ByteArray);

        Assert.Throws<ArgumentOutOfRangeException>(() => { next = next.Next(-1); });
        Assert.Equal(1, next.Position);
        Assert.Equal(7, next.Length - next.Position);

        Assert.Throws<ArgumentOutOfRangeException>(() => { next = next.Next(8); });
        Assert.Equal(1, next.Position);
        Assert.Equal(7, next.Length - next.Position);

        var next2 = next.Next(5);
        Assert.Equal(0, cursor.Position);
        Assert.Equal(8, cursor.Length - cursor.Position);
        Assert.Equal((byte)0xc, cursor.Current);
        Assert.Equal<byte>(
            Nibbles.Parse("cfed4460").ByteArray, cursor.NextNibbles.ByteArray);
        Assert.Equal(1, next.Position);
        Assert.Equal(7, next.Length - next.Position);
        Assert.Equal((byte)0xf, next.Current);
        Assert.Equal<byte>(
            Nibbles.Parse("fed4460").ByteArray, next.NextNibbles.ByteArray);
        Assert.Equal(6, next2.Position);
        Assert.Equal(2, next2.Length - next2.Position);
        Assert.Equal((byte)0x6, next2.Current);
        Assert.Equal<byte>(
            Nibbles.Parse("60").ByteArray, next2.NextNibbles.ByteArray);
    }
}
