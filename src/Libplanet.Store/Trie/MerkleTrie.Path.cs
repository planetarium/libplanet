using Bencodex.Types;
using Libplanet.Store.Trie.Nodes;

namespace Libplanet.Store.Trie;

public partial class MerkleTrie
{
    private IValue? ResolveToValue(INode? node, in PathCursor cursor) => node switch
    {
        null => null,
        ValueNode valueNode => cursor.IsEnd ? valueNode.Value : null,
        ShortNode shortNode => cursor.NextNibbles.StartsWith(shortNode.Key)
            ? ResolveToValue(shortNode.Value, cursor.Next(shortNode.Key.Length))
            : null,
        FullNode fullNode => !cursor.IsEnd
            ? ResolveToValue(
                fullNode.GetChild(cursor.Current),
                cursor.Next(1))
            : ResolveToValue(
                fullNode.Value,
                cursor),
        HashNode hashNode => ResolveToValue(hashNode.Expand(keyValueStore), cursor),
        _ => throw new InvalidTrieNodeException(
            $"Invalid node value: {node.ToBencodex().Inspect()}"),
    };

    private INode? ResolveToNode(INode? node, in PathCursor cursor)
    {
        if (!cursor.IsEnd)
        {
            return node switch
            {
                null or ValueNode _ => null,
                ShortNode shortNode
                    => cursor.NextNibbles.StartsWith(shortNode.Key)
                        ? ResolveToNode(shortNode.Value, cursor.Next(shortNode.Key.Length))
                        : null,
                FullNode fullNode
                    => ResolveToNode(fullNode.GetChild(cursor.Current), cursor.Next(1)),
                HashNode hashNode => ResolveToNode(hashNode.Expand(keyValueStore), cursor),
                _ => throw new InvalidTrieNodeException(
                        $"An unknown type of node was encountered " +
                        $"at {cursor.SubNibbles(cursor.Position):h}: {node.GetType()}"),
            };
        }
        else
        {
            return node;
        }
    }
}
