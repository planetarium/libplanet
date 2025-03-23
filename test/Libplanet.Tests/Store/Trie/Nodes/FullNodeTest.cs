#nullable enable
using System.Collections.Immutable;
using System.Linq;
using Bencodex.Types;
using Libplanet.Store.Trie;
using Libplanet.Store.Trie.Nodes;
using Xunit;

namespace Libplanet.Tests.Store.Trie.Nodes;

public class FullNodeTest
{
    [Fact]
    public void ToBencodex()
    {
        var fullNode = new FullNode(
            Children: ImmutableDictionary<byte, INode>.Empty,
            Value: new ValueNode(Dictionary.Empty));

        var expected =
            new List(Enumerable.Repeat<IValue>(Null.Value, 16).ToImmutableArray()
                .Add(new List(Null.Value, Dictionary.Empty)));
        var encoded = fullNode.ToBencodex();
        Assert.IsType<List>(encoded);
        Assert.Equal(expected.Count, ((List)encoded).Count);
        Assert.Equal(expected, encoded);
    }
}
