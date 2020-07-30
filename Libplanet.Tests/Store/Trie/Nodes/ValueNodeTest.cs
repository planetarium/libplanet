using Bencodex.Types;
using Libplanet.Store.Trie.Nodes;
using Xunit;

namespace Libplanet.Tests.Store.Trie.Nodes
{
    public class ValueNodeTest
    {
        [Fact]
        public void ToBencodex()
        {
            var values = new IValue[]
            {
                default(Null),
                (Binary)ByteUtil.ParseHex("beef"),
                (Integer)0xbeef,
                Dictionary.Empty,
                default(List),
            };

            foreach (var value in values)
            {
                var valueNode = new ValueNode(value);
                Assert.Equal(value, valueNode.ToBencodex());
            }
        }
    }
}
