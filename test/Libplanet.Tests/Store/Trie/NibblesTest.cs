#pragma warning disable S125 // Sections of code should not be commented out
using System;
using Libplanet.Store.Trie;
using Xunit;

namespace Libplanet.Tests.Store.Trie;

public class NibblesTest
{
    [Fact]
    public void Base_Test()
    {
        var nibbleBytes = new byte[] { 2, 4, 13, 8, 3 };
        var nibbles = new Nibbles([.. nibbleBytes]);
        Assert.Equal(5, nibbles.Length);
        Assert.Equal(nibbleBytes, nibbles.ByteArray);
        Assert.Equal("24d83", $"{nibbles}");
        Assert.Equal("24d83", $"{nibbles:h}");
        Assert.Equal("24D83", $"{nibbles:H}");
    }

    [Theory]
    [InlineData("", new byte[] { })]
    [InlineData("f", new byte[] { 15 })]
    [InlineData("1A2b3C", new byte[] { 1, 10, 2, 11, 3, 12 })]
    public void Parse_Test(string hex, byte[] expected)
    {
        var nibbles = Nibbles.Parse(hex);
        Assert.Equal(expected, nibbles.ByteArray);
        Assert.Equal(hex.ToLowerInvariant(), nibbles.ToString());
    }

    [Theory]
    [InlineData("cd123", "cd4123", "cd")]
    [InlineData("cfed4460", "", "")]
    [InlineData("cfed4460", "abcd", "")]
    [InlineData("cfed4460", "cfeffff", "cfe")]
    [InlineData("cfed4460", "cfed4460abcd", "cfed4460")]
    [InlineData("", "cfed4460abcd", "")]
    [InlineData("", "", "")]
    public void Take_Test(string hex1, string hex2, string expectedHex)
    {
        var nibbles1 = Nibbles.Parse(hex1);
        var nibbles2 = Nibbles.Parse(hex2);
        var expected = Nibbles.Parse(expectedHex);
        var actual = nibbles1.Take(nibbles2);
        Assert.Equal(expected, actual);
    }

    // [Fact]
    // public void Default()
    // {
    //     Nibbles nibbles = default;
    //     Assert.Equal(0, nibbles.Length);
    //     Assert.Empty(nibbles.ByteArray);
    //     Assert.Equal(string.Empty, nibbles.Hex);
    // }

    // [Fact]
    // public void FromHex()
    // {
    //     var hex = "92fc1";
    //     var nibbles = Nibbles.Parse(hex);
    //     Assert.Equal(5, nibbles.Length);
    //     Assert.Equal(new byte[] { 9, 2, 15, 12, 1 }, nibbles.ByteArray);
    //     Assert.Equal(hex, nibbles.Hex);
    // }

    // [Fact]
    // public void FromKeyBytes()
    // {
    //     var keyBytes = KeyBytes.Create(0x2f, 0x1c);
    //     var nibbles = Nibbles.FromKeyBytes(keyBytes);
    //     Assert.Equal(4, nibbles.Length);
    //     Assert.Equal("2f1c", nibbles.Hex);
    // }

    // [Fact]
    // public void Add()
    // {
    //     var hex = "6912f";
    //     var nibbles = Nibbles.Parse(hex);
    //     Assert.Equal(5, nibbles.Length);
    //     Assert.Equal(hex, nibbles.Hex);

    //     nibbles = nibbles.Add(2);
    //     Assert.Equal(6, nibbles.Length);
    //     Assert.Equal("6912f2", nibbles.Hex);

    //     nibbles = nibbles.AddRange([1, 12]);
    //     Assert.Equal(8, nibbles.Length);
    //     Assert.Equal("6912f21c", nibbles.Hex);

    //     nibbles = nibbles.AddRange(Nibbles.Parse("b82"));
    //     Assert.Equal(11, nibbles.Length);
    //     Assert.Equal("6912f21cb82", nibbles.Hex);
    // }
}
