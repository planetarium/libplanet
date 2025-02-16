using Libplanet.Store.Trie;
using Xunit;

namespace Libplanet.Tests.Store.Trie;

public class NibblesTest
{
    [Fact]
    public void Default()
    {
        Nibbles nibbles = default;
        Assert.Equal(0, nibbles.Length);
        Assert.Empty(nibbles.ByteArray);
        Assert.Equal(string.Empty, nibbles.Hex);
    }

    [Fact]
    public void Constructor()
    {
        var nibbleBytes = new byte[] { 2, 4, 13, 8, 3 };
        var nibbles = new Nibbles([.. nibbleBytes]);
        Assert.Equal(5, nibbles.Length);
        Assert.Equal(nibbleBytes, nibbles.ByteArray);
        Assert.Equal("24d83", nibbles.Hex);
    }

    [Fact]
    public void FromHex()
    {
        var hex = "92fc1";
        var nibbles = Nibbles.Parse(hex);
        Assert.Equal(5, nibbles.Length);
        Assert.Equal(new byte[] { 9, 2, 15, 12, 1 }, nibbles.ByteArray);
        Assert.Equal(hex, nibbles.Hex);
    }

    [Fact]
    public void FromKeyBytes()
    {
        var keyBytes = KeyBytes.Create(0x2f, 0x1c);
        var nibbles = Nibbles.FromKeyBytes(keyBytes);
        Assert.Equal(4, nibbles.Length);
        Assert.Equal("2f1c", nibbles.Hex);
    }

    [Fact]
    public void Add()
    {
        var hex = "6912f";
        var nibbles = Nibbles.Parse(hex);
        Assert.Equal(5, nibbles.Length);
        Assert.Equal(hex, nibbles.Hex);

        nibbles = nibbles.Add(2);
        Assert.Equal(6, nibbles.Length);
        Assert.Equal("6912f2", nibbles.Hex);

        nibbles = nibbles.AddRange([1, 12]);
        Assert.Equal(8, nibbles.Length);
        Assert.Equal("6912f21c", nibbles.Hex);

        nibbles = nibbles.AddRange(Nibbles.Parse("b82"));
        Assert.Equal(11, nibbles.Length);
        Assert.Equal("6912f21cb82", nibbles.Hex);
    }
}
