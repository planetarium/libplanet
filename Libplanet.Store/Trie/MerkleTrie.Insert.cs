using System;
using Libplanet.Store.Trie.Nodes;

namespace Libplanet.Store.Trie
{
    public partial class MerkleTrie
    {
        private INode Insert(
            INode? node,
            in PathCursor cursor,
            ValueNode value,
            bool allowNull)
        {
            switch (node)
            {
                case HashNode hashNode:
                    return InsertToHashNode(hashNode, cursor, value, allowNull);

                case null:
                    return allowNull
                        ? InsertToNullNode(cursor, value)
                        : throw new NullReferenceException(
                            $"Given {nameof(node)} is not allowed to be null");

                case ValueNode valueNode:
                    return InsertToValueNode(valueNode, cursor, value);

                case ShortNode shortNode:
                    return InsertToShortNode(shortNode, cursor, value);

                case FullNode fullNode:
                    return InsertToFullNode(fullNode, cursor, value);

                default:
                    throw new InvalidTrieNodeException(
                        $"Unsupported node value: {node.ToBencodex().Inspect()}");
            }
        }

        // Note: Should not be called on short node or full node's value.
        private INode InsertToNullNode(PathCursor cursor, ValueNode value)
        {
            if (cursor.RemainingAnyNibbles)
            {
                return new ShortNode(cursor.GetRemainingNibbles(), value);
            }
            else
            {
                return value;
            }
        }

        // Note: Should not be called on full node's value.
        private INode InsertToValueNode(ValueNode valueNode, PathCursor cursor, ValueNode value)
        {
            if (cursor.RemainingAnyNibbles)
            {
                return FullNode.Empty
                    .SetChild(FullNode.ChildrenCount - 1, valueNode)
                    .SetChild(cursor.NextNibble, InsertToNullNode(cursor.Next(1), value));
            }
            else
            {
                // Overwrite existing value
                return value;
            }
        }

        private INode InsertToShortNode(ShortNode shortNode, in PathCursor cursor, ValueNode value)
        {
            // Two cases are possible:
            // - common prefix length == short node's key length: insert directly into short node's
            //   value
            // - common prefix length < short node's key length: branch off and handle remaining
            //   short node and remaining path
            //   - in this case, a full node is created at current cursor + common prefix nibbles
            Nibbles commonNibbles = cursor.GetCommonStartingNibbles(shortNode.Key);
            PathCursor nextCursor = cursor.Next(commonNibbles.Length);

            if (commonNibbles.Length == shortNode.Key.Length)
            {
                return new ShortNode(
                    shortNode.Key,
                    Insert(shortNode.Value, nextCursor, value, false));
            }
            else
            {
                FullNode fullNode = FullNode.Empty;
                byte newChildIndex = shortNode.Key[commonNibbles.Length];
                Nibbles newShortNodeKey = shortNode.Key.Skip(commonNibbles.Length + 1);

                // Handles modified short node.
                fullNode = newShortNodeKey.Length > 0
                    ? fullNode.SetChild(
                        newChildIndex,
                        new ShortNode(newShortNodeKey, shortNode.Value))
                    : fullNode.SetChild(newChildIndex, shortNode.Value);

                // Handles value node.
                // Assumes next cursor nibble (including non-remaining case)
                // does not conflict with short node above.
                fullNode = nextCursor.RemainingNibbleLength > 0
                    ? fullNode.SetChild(
                        nextCursor.NextNibble,
                        InsertToNullNode(nextCursor.Next(1), value))
                    : fullNode.SetChild(
                        FullNode.ChildrenCount - 1,
                        value);

                // Full node is created at the branching point and may not be at the original root.
                if (commonNibbles.Length == 0)
                {
                    return fullNode;
                }
                else
                {
                    return new ShortNode(
                        commonNibbles,
                        fullNode);
                }
            }
        }

        private INode InsertToFullNode(FullNode fullNode, PathCursor cursor, ValueNode value)
        {
            if (cursor.RemainingAnyNibbles)
            {
                byte nextNibble = cursor.NextNibble;
                return fullNode.SetChild(
                    nextNibble,
                    Insert(fullNode.Children[nextNibble], cursor.Next(1), value, true));
            }
            else
            {
                // Overwrite existing value
                return fullNode.SetChild(FullNode.ChildrenCount - 1, value);
            }
        }

        private INode InsertToHashNode(
            HashNode hashNode,
            PathCursor cursor,
            ValueNode value,
            bool allowNull)
        {
            INode unhashedNode = UnhashNode(hashNode);
            return Insert(unhashedNode, cursor, value, allowNull);
        }
    }
}
