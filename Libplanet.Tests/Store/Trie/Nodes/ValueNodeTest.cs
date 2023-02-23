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
                Null.Value,
                (Binary)ByteUtil.ParseHexToImmutable("beef"),
                (Integer)0xbeef,
                Dictionary.Empty,
                List.Empty,
            };

            foreach (var value in values)
            {
                var valueNode = new ValueNode(value);
                var expected = new List(new[]
                {
                    Null.Value, value,
                });
                Assert.Equal(expected, valueNode.ToBencodex());
            }
        }
    }
}
