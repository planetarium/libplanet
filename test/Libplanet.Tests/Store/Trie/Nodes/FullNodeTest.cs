using System.Collections.Immutable;
using System.Linq;
using Bencodex.Types;
using Libplanet.Store.Trie.Nodes;
using Xunit;

namespace Libplanet.Tests.Store.Trie.Nodes
{
    public class FullNodeTest
    {
        [Fact]
        public void ToBencodex()
        {
            var fullNode = new FullNode(
                Enumerable.Repeat<INode>(null, 16).ToImmutableArray()
                    .Add(new ValueNode(Dictionary.Empty)).ToImmutableArray());

            var expected =
                new List(Enumerable.Repeat<IValue>(Null.Value, 16).ToImmutableArray()
                    .Add(new List(new IValue[] { Null.Value, Dictionary.Empty })));
            var encoded = fullNode.ToBencodex();
            Assert.IsType<List>(encoded);
            Assert.Equal(expected.Count, ((List)encoded).Count);
            Assert.Equal(expected, encoded);
        }
    }
}
