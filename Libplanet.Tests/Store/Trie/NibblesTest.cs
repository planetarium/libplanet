using System.Collections.Immutable;
using Libplanet.Store.Trie;
using Xunit;

namespace Libplanet.Tests.Store.Trie
{
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
            byte[] nibbleBytes = new byte[] { 2, 4, 13, 8, 3 };
            Nibbles nibbles = new Nibbles(nibbleBytes.ToImmutableArray());
            Assert.Equal(5, nibbles.Length);
            Assert.Equal(nibbleBytes, nibbles.ByteArray);
            Assert.Equal("24d83", nibbles.Hex);
        }

        [Fact]
        public void FromHex()
        {
            string hex = "92fc1";
            Nibbles nibbles = Nibbles.FromHex(hex);
            Assert.Equal(5, nibbles.Length);
            Assert.Equal(new byte[] { 9, 2, 15, 12, 1 }, nibbles.ByteArray);
            Assert.Equal(hex, nibbles.Hex);
        }

        [Fact]
        public void Add()
        {
            string hex = "6912f";
            Nibbles nibbles = Nibbles.FromHex(hex);
            Assert.Equal(5, nibbles.Length);
            Assert.Equal(hex, nibbles.Hex);

            nibbles = nibbles.Add(2);
            Assert.Equal(6, nibbles.Length);
            Assert.Equal("6912f2", nibbles.Hex);

            nibbles = nibbles.AddRange(new byte[] { 1, 12 }.ToImmutableArray());
            Assert.Equal(8, nibbles.Length);
            Assert.Equal("6912f21c", nibbles.Hex);

            nibbles = nibbles.AddRange(Nibbles.FromHex("b82"));
            Assert.Equal(11, nibbles.Length);
            Assert.Equal("6912f21cb82", nibbles.Hex);
        }
    }
}
