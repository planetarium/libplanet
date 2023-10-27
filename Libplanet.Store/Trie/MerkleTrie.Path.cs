using Bencodex.Types;
using Libplanet.Store.Trie.Nodes;

namespace Libplanet.Store.Trie
{
    public partial class MerkleTrie
    {
        private IValue? ResolveToValue(INode? node, in PathCursor cursor) =>
            node switch
            {
                null => null,
                ValueNode valueNode => !cursor.RemainingAnyNibbles
                    ? valueNode.Value
                    : null,
                ShortNode shortNode => cursor.RemainingNibblesStartWith(shortNode.Key)
                    ? ResolveToValue(shortNode.Value, cursor.Next(shortNode.Key.Length))
                    : null,
                FullNode fullNode => cursor.RemainingAnyNibbles
                    ? ResolveToValue(
                        fullNode.Children[cursor.NextNibble],
                        cursor.Next(1))
                    : ResolveToValue(
                        fullNode.Value,
                        cursor),
                HashNode hashNode => ResolveToValue(UnhashNode(hashNode), cursor),
                _ => throw new InvalidTrieNodeException(
                    $"Invalid node value: {node.ToBencodex().Inspect()}"),
            };

        private INode? ResolveToNode(INode? node, in PathCursor cursor)
        {
            if (cursor.RemainingAnyNibbles)
            {
                switch (node)
                {
                    case null:
                    case ValueNode _:
                        return null;
                    case ShortNode shortNode:
                        return cursor.RemainingNibblesStartWith(shortNode.Key)
                            ? ResolveToNode(shortNode.Value, cursor.Next(shortNode.Key.Length))
                            : null;
                    case FullNode fullNode:
                        return ResolveToNode(fullNode.Children[cursor.NextNibble], cursor.Next(1));
                    case HashNode hashNode:
                        return ResolveToNode(UnhashNode(hashNode), cursor);
                    default:
                        throw new InvalidTrieNodeException(
                            $"An unknown type of node was encountered " +
                            $"at {cursor.GetConsumedNibbles().Hex}: {node.GetType()}");
                }
            }
            else
            {
                return node;
            }
        }
    }
}
