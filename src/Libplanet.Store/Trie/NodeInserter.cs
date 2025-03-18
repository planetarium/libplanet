using System.Collections.Immutable;
using Libplanet.Store.Trie.Nodes;

namespace Libplanet.Store.Trie;

internal sealed class NodeInserter(IKeyValueStore keyValueStore)
{
    public INode Insert(INode? node, in PathCursor cursor, ValueNode value) => node switch
    {
        null => InsertToNullNode(cursor, value),
        HashNode hashNode => InsertToHashNode(hashNode, cursor, value),
        ValueNode valueNode => InsertToValueNode(valueNode, cursor, value),
        ShortNode shortNode => InsertToShortNode(shortNode, cursor, value),
        FullNode fullNode => InsertToFullNode(fullNode, cursor, value),
        _ => throw new InvalidTrieNodeException(
            $"Unsupported node value: {node.ToBencodex().Inspect()}"),
    };

    private INode InsertToNullNode(in PathCursor cursor, ValueNode value)
        => cursor.IsEnd ? value : new ShortNode(cursor.NextNibbles, value);

    private INode InsertToValueNode(ValueNode valueNode, in PathCursor cursor, ValueNode value)
    {
        if (cursor.IsEnd)
        {
            return value;
        }

        var builder = ImmutableDictionary.CreateBuilder<byte, INode?>();
        builder[cursor.Current] = InsertToNullNode(cursor.Next(1), value);
        return new FullNode(builder.ToImmutable(), valueNode);
    }

    private INode InsertToShortNode(ShortNode shortNode, in PathCursor cursor, ValueNode value)
    {
        var key = shortNode.Key;
        var nextCursor = cursor.SkipCommonPrefix(cursor.Position, key);
        var commonLength = nextCursor.Position - cursor.Position;

        if (commonLength == key.Length)
        {
            var node = Insert(shortNode.Value, nextCursor, value);
            return new ShortNode(key, node);
        }
        else
        {
            var commonNibbles = cursor.SubNibbles(cursor.Position, commonLength);
            var nextIndex = key[commonNibbles.Length];
            var nextKey = key.Skip(commonNibbles.Length + 1);
            var builder = ImmutableDictionary.CreateBuilder<byte, INode?>();

            if (nextKey.Length > 0)
            {
                builder[nextIndex] = new ShortNode(nextKey, shortNode.Value);
            }
            else
            {
                builder[nextIndex] = shortNode.Value;
            }

            if (nextCursor.Position < nextCursor.Length)
            {
                builder[nextCursor.Current] = InsertToNullNode(nextCursor.Next(1), value);
            }

            var v = nextCursor.Position >= nextCursor.Length ? value : null;
            var fullNode = new FullNode(builder.ToImmutable(), v);

            return commonNibbles.Length == 0 ? fullNode : new ShortNode(commonNibbles, fullNode);
        }
    }

    private INode InsertToFullNode(FullNode fullNode, in PathCursor cursor, ValueNode value)
    {
        if (cursor.IsEnd)
        {
            return new FullNode(fullNode.Children, value);
        }

        var index = cursor.Current;
        var node = Insert(fullNode.GetChild(index), cursor.Next(1), value);
        return fullNode.SetChild(index, node);
    }

    private INode InsertToHashNode(HashNode hashNode, in PathCursor cursor, ValueNode value)
    {
        var unhashedNode = hashNode.Expand(keyValueStore);
        return Insert(unhashedNode, cursor, value);
    }
}
