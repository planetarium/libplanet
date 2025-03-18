using System;
using System.Linq;
using Libplanet.Store.Trie.Nodes;

namespace Libplanet.Store.Trie;

internal sealed class NodeRemover(IKeyValueStore keyValueStore)
{
    public INode? Remove(INode node, in PathCursor cursor) => node switch
    {
        HashNode hashNode => RemoveFromHashNode(hashNode, cursor),
        ValueNode valueNode => RemoveFromValueNode(valueNode, cursor),
        ShortNode shortNode => RemoveFromShortNode(shortNode, cursor),
        FullNode fullNode => RemoveFromFullNode(fullNode, cursor),
        _ => throw new InvalidOperationException(),
    };

    private INode? RemoveFromHashNode(HashNode hashNode, PathCursor cursor) =>
        Remove(hashNode.Expand(keyValueStore), cursor);

    private INode? RemoveFromValueNode(ValueNode valueNode, PathCursor cursor)
        => cursor.IsEnd ? null : valueNode;

    private INode? RemoveFromShortNode(ShortNode shortNode, PathCursor cursor)
    {
        var key = shortNode.Key;
        var nextCursor = cursor.SkipCommonPrefix(cursor.Position, key);
        var commonLength = nextCursor.Position - cursor.Position;

        if (commonLength == key.Length)
        {
            INode? processedValue = Remove(shortNode.Value, nextCursor);
            if (processedValue is { } node)
            {
                return node switch
                {
                    HashNode _ => throw new ArgumentException(),
                    ValueNode vn => new ShortNode(shortNode.Key, vn),
                    FullNode fn => new ShortNode(shortNode.Key, fn),
                    ShortNode sn => new ShortNode(shortNode.Key.Append(sn.Key), sn.Value),
                    _ => throw new InvalidTrieNodeException(
                            $"Unsupported node value: {node.ToBencodex().Inspect()}"),
                };
            }
            else
            {
                return null;
            }
        }
        else
        {
            return shortNode;
        }
    }

    private INode RemoveFromFullNode(FullNode fullNode, PathCursor cursor)
    {
        if (!cursor.IsEnd)
        {
            byte nextNibble = cursor.Current;
            if (fullNode.Children[nextNibble] is { } child)
            {
                INode? processedChild = Remove(child, cursor.Next(1));
                return processedChild is { } node
                    ? fullNode.SetChild(
                        nextNibble,
                        node)
                    : ReduceFullNode(fullNode.SetChild(nextNibble, null));
            }
            else
            {
                return fullNode;
            }
        }
        else
        {
            return ReduceFullNode(new FullNode(fullNode.Children, null));
        }
    }

    private INode ReduceFullNode(FullNode fullNode)
    {
        var children = fullNode.Children;
        if (children.Count == 0)
        {
            if (fullNode.Value is not null)
            {
                return fullNode.Value;
            }
            else
            {
                throw new ArgumentException(
                $"Given {nameof(fullNode)} must have at least 1 child: {children.Count}");
            }
        }
        else if (children.Count == 1)
        {
            var (index, child) = children.Single();
            child = child is HashNode hn ? hn.Expand(keyValueStore) : child;
            return child is ShortNode sn
                    ? new ShortNode(new Nibbles([index]).Append(sn.Key), sn.Value)
                    : new ShortNode(new Nibbles([index]), child);
        }
        else
        {
            return fullNode;
        }
    }
}
