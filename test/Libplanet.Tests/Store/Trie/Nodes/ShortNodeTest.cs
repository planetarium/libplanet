using Bencodex.Types;
using Libplanet.Store.Trie;
using Libplanet.Store.Trie.Nodes;
using Xunit;

namespace Libplanet.Tests.Store.Trie.Nodes
{
    public class ShortNodeTest
    {
        [Fact]
        public void ToBencodex()
        {
            var shortNode = new ShortNode(
                Nibbles.Parse("beef"),
                new ValueNode((Text)"foo")
            );

            var expected =
                new List(new IValue[]
                {
                    (Binary)Nibbles.Parse("beef").ByteArray,
                    new List(new IValue[] { Null.Value, (Text)"foo" }),
                });
            var encoded = shortNode.ToBencodex();
            Assert.IsType<List>(encoded);
            Assert.Equal(expected.Count, ((List)encoded).Count);
            Assert.Equal(expected, encoded);
        }
    }
}
