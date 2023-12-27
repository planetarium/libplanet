using System;
using System.Collections.Immutable;
using System.Linq;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Common;

namespace Libplanet.Store.Trie.Nodes
{
    public static class NodeDecoder
    {
        public const NodeType AnyNodeType =
            NodeType.Null | NodeType.Value | NodeType.Short | NodeType.Full | NodeType.Hash;

        public const NodeType FullValueNodeType =
            NodeType.Null | NodeType.Value | NodeType.Hash;

        public const NodeType FullChildNodeType =
            NodeType.Null | NodeType.Value | NodeType.Short | NodeType.Full | NodeType.Hash;

        public const NodeType ShortValueNodeType =
            NodeType.Value | NodeType.Short | NodeType.Full | NodeType.Hash;

        public const NodeType HashEmbeddedNodeType =
            NodeType.Value | NodeType.Short | NodeType.Full;

        [Flags]
        public enum NodeType : short
        {
            /// <summary>
            /// A null node represented as <see langword="null"/>.
            /// </summary>
            Null = 1,

            /// <summary>
            /// A <see cref=ValueNode"/>.
            /// </summary>
            Value = 2,

            /// <summary>
            /// A <see cref="ShortNode"/>.
            /// </summary>
            Short = 4,

            /// <summary>
            /// A <see cref="FullNode"/>.
            /// </summary>
            Full = 8,

            /// <summary>
            /// A <see cref="HashNode"/>.
            /// </summary>
            Hash = 16,
        }

        public static INode? Decode(IValue value, NodeType allowed)
        {
            if (value is List list)
            {
                if (list.Count == FullNode.ChildrenCount)
                {
                    return (allowed & NodeType.Full) == NodeType.Full
                        ? DecodeFull(list)
                        : throw new InvalidTrieNodeException(
                            $"Can't decode a node from value {value.Inspect()}");
                }
                else if (list.Count == 2)
                {
                    if (list[0] is Binary)
                    {
                        return (allowed & NodeType.Short) == NodeType.Short
                            ? DecodeShort(list)
                            : throw new InvalidTrieNodeException(
                                $"Can't decode a node from value {value.Inspect()}");
                    }
                    else if (list[0] is Null)
                    {
                        return (allowed & NodeType.Value) == NodeType.Value
                            ? DecodeValue(list)
                            : throw new InvalidTrieNodeException(
                                $"Can't decode a node from value {value.Inspect()}");
                    }
                    else
                    {
                        throw new InvalidTrieNodeException(
                                $"Can't decode a node from value {value.Inspect()}");
                    }
                }
                else
                {
                    throw new InvalidTrieNodeException(
                        $"Can't decode a node from the bencodex value: {value.Inspect()}");
                }
            }
            else if (value is Binary binary)
            {
                return (allowed & NodeType.Hash) == NodeType.Hash
                    ? DecodeHash(binary)
                    : throw new InvalidTrieNodeException(
                        $"Can't decode a node from value {value.Inspect()}");
            }
            else if (value is Null)
            {
                return (allowed & NodeType.Null) == NodeType.Null
                    ? (INode?)null
                    : throw new InvalidTrieNodeException(
                        $"Can't decode a node from value {value.Inspect()}");
            }
            else
            {
                throw new InvalidTrieNodeException(
                    $"Can't decode a node from value {value.Inspect()}");
            }
        }

        // The length and the first element are already checked.
        private static ValueNode DecodeValue(List list)
        {
            return new ValueNode(list[1]);
        }

        // The length and the first element are already checked.
        private static ShortNode DecodeShort(List list)
        {
            // FIXME: This assumes encoded binary is a valid sequence of nibbles.
            INode value = Decode(list[1], ShortValueNodeType) ??
                throw new NullReferenceException(
                    $"Failed to decode a {nameof(ShortNode)} from given {nameof(list)}: {list}");
            return new ShortNode(
                new Nibbles(((Binary)list[0]).ByteArray), value);
        }

        // The length is already checked.
        private static FullNode DecodeFull(List list)
        {
            return new FullNode(list
                .Select((child, i) => i < FullNode.ChildrenCount - 1
                    ? Decode(child, FullChildNodeType)
                    : Decode(child, FullValueNodeType))
                .ToImmutableArray());
        }

        private static HashNode DecodeHash(Binary binary)
        {
            return new HashNode(new HashDigest<SHA256>(binary.ByteArray));
        }
    }
}
