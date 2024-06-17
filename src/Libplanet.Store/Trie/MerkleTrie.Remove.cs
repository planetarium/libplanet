using System;
using System.Collections.Immutable;
using System.Linq;
using Libplanet.Store.Trie.Nodes;

namespace Libplanet.Store.Trie
{
    public partial class MerkleTrie
    {
        private INode? RemoveFromRoot(in PathCursor cursor)
        {
            if (Root is null)
            {
                return Root;
            }
            else
            {
                return Remove(Root, cursor);
            }
        }

        private INode? Remove(INode node, in PathCursor cursor)
        {
            switch (node)
            {
                case HashNode hashNode:
                    return RemoveFromHashNode(hashNode, cursor);
                case ValueNode valueNode:
                    return RemoveFromValueNode(valueNode, cursor);
                case ShortNode shortNode:
                    return RemoveFromShortNode(shortNode, cursor);
                case FullNode fullNode:
                    return RemoveFromFullNode(fullNode, cursor);
                default:
                    throw new InvalidOperationException();
            }
        }

        private INode? RemoveFromHashNode(HashNode hashNode, PathCursor cursor) =>
            Remove(UnhashNode(hashNode), cursor);

        private INode? RemoveFromValueNode(ValueNode valueNode, PathCursor cursor) =>
            cursor.RemainingAnyNibbles
                ? valueNode
                : null;

        private INode? RemoveFromShortNode(ShortNode shortNode, PathCursor cursor)
        {
            // Two cases are possible:
            // - common prefix length == short node's key length: remove directly from short node's
            //   value
            // - common prefix length < short node's key length: do nothing since it is
            //   trying to remove value from a non-existent path
            Nibbles commonNibbles = cursor.GetCommonStartingNibbles(shortNode.Key);
            PathCursor nextCursor = cursor.Next(commonNibbles.Length);

            if (commonNibbles.Length == shortNode.Key.Length)
            {
                INode? processedValue = Remove(shortNode.Value, nextCursor);
                if (processedValue is { } node)
                {
                    switch (node)
                    {
                        case HashNode _:
                            throw new ArgumentException();
                        case ValueNode vn:
                            return new ShortNode(shortNode.Key, vn);
                        case FullNode fn:
                            return new ShortNode(shortNode.Key, fn);
                        case ShortNode sn:
                            return new ShortNode(shortNode.Key.AddRange(sn.Key), sn.Value);
                        default:
                            throw new InvalidTrieNodeException(
                                $"Unsupported node value: {node.ToBencodex().Inspect()}");
                    }
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
            if (cursor.RemainingAnyNibbles)
            {
                byte nextNibble = cursor.NextNibble;
                if (fullNode.Children[nextNibble] is { } child)
                {
                    INode? processedChild = Remove(child, cursor.Next(1));
                    return processedChild is { } node
                        ? fullNode.SetChild(
                            nextNibble,
                            node)
                        : ReduceFullNode(fullNode.RemoveChild(nextNibble));
                }
                else
                {
                    return fullNode;
                }
            }
            else
            {
                return ReduceFullNode(fullNode.RemoveChild(FullNode.ChildrenCount - 1));
            }
        }

        private INode ReduceFullNode(FullNode fullNode)
        {
            (INode, int)[] childrenWithIndices = fullNode.Children
                .Select((child, i) => (child, i))
                .Where(pair => pair.child is INode)
                .ToArray()!;
            int childrenCount = childrenWithIndices.Length;
            if (childrenCount == 0)
            {
                throw new ArgumentException(
                    $"Given {nameof(fullNode)} must have at least 1 child: {childrenCount}");
            }
            else if (childrenCount == 1)
            {
                // Possible cases:
                // - If only the value remains, it is equivalent to a value node.
                // - If only nibble + child remains:
                //   - If the child is a short node, combine with a nibble to make
                //     a "longer" short node.
                //   - If the child is either a value node or a full node, return a short node
                //     with the nibble as its key.
                (INode child, int index) = childrenWithIndices.Single();
                child = child is HashNode hn ? UnhashNode(hn) : child;
                return index == FullNode.ChildrenCount - 1
                    ? child
                    : child is ShortNode sn
                        ? new ShortNode(
                            new Nibbles(new byte[] { (byte)index }.ToImmutableArray())
                                .AddRange(sn.Key),
                            sn.Value)
                        : new ShortNode(
                            new Nibbles(new byte[] { (byte)index }.ToImmutableArray()),
                            child);
            }
            else
            {
                return fullNode;
            }
        }
    }
}
