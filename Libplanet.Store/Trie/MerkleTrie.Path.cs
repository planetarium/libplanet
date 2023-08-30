using Bencodex.Types;
using Libplanet.Store.Trie.Nodes;

namespace Libplanet.Store.Trie
{
    public partial class MerkleTrie
    {
        private IValue? ResolvePath(INode? node, in PathCursor cursor) =>
            node switch
            {
                null => null,
                ValueNode valueNode => valueNode.Value,
                ShortNode shortNode => cursor.RemainingNibblesStartWith(shortNode.Key)
                    ? ResolvePath(shortNode.Value, cursor.Next(shortNode.Key.Length))
                    : null,
                FullNode fullNode => cursor.RemainingAnyNibbles
                    ? ResolvePath(
                        fullNode.Children[cursor.NextNibble],
                        cursor.Next(1))
                    : ResolvePath(
                        fullNode.Value,
                        cursor),
                HashNode hashNode => ResolvePath(GetNode(hashNode.HashDigest), cursor),
                _ => throw new InvalidTrieNodeException(
                    $"Invalid node value: {node.ToBencodex().Inspect(false)}"),
            };
    }
}
