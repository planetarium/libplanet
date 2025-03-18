using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Common;

namespace Libplanet.Store.Trie.Nodes;

public static class NodeDecoder
{
    public const NodeTypes AnyNodeTypes =
        NodeTypes.Null | NodeTypes.Value | NodeTypes.Short | NodeTypes.Full | NodeTypes.Hash;

    public const NodeTypes FullValueNodeTypes =
        NodeTypes.Null | NodeTypes.Value | NodeTypes.Hash;

    public const NodeTypes FullChildNodeTypes =
        NodeTypes.Null | NodeTypes.Value | NodeTypes.Short | NodeTypes.Full | NodeTypes.Hash;

    public const NodeTypes ShortValueNodeTypes =
        NodeTypes.Value | NodeTypes.Short | NodeTypes.Full | NodeTypes.Hash;

    public const NodeTypes HashEmbeddedNodeTypes =
        NodeTypes.Value | NodeTypes.Short | NodeTypes.Full;

    public static INode? Decode(IValue value, NodeTypes nodeTypes)
    {
        if (value is List list)
        {
            if (list.Count == FullNode.ChildrenCount + 1)
            {
                if ((nodeTypes & NodeTypes.Full) == NodeTypes.Full)
                {
                    return DecodeFull(list);
                }
            }
            else if (list.Count == 2)
            {
                if (list[0] is Binary)
                {
                    if ((nodeTypes & NodeTypes.Short) == NodeTypes.Short)
                    {
                        return DecodeShort(list);
                    }
                }
                else if (list[0] is Null)
                {
                    if ((nodeTypes & NodeTypes.Value) == NodeTypes.Value)
                    {
                        return DecodeValue(list);
                    }
                }
            }
        }
        else if (value is Binary binary)
        {
            if ((nodeTypes & NodeTypes.Hash) == NodeTypes.Hash)
            {
                return DecodeHash(binary);
            }
        }
        else if (value is Null)
        {
            if ((nodeTypes & NodeTypes.Null) == NodeTypes.Null)
            {
                return null;
            }
        }

        throw new InvalidTrieNodeException($"Can't decode a node from value {value.Inspect()}");
    }

    // The length and the first element are already checked.
    private static ValueNode DecodeValue(List list) => new(list[1]);

    // The length and the first element are already checked.
    private static ShortNode DecodeShort(List list)
    {
        if (list[0] is not Binary binary)
        {
            var message = "The first element of the given list is not a binary.";
            throw new InvalidTrieNodeException(message);
        }

        if (Decode(list[1], ShortValueNodeTypes) is not { } node)
        {
            var message = $"Failed to decode a {nameof(ShortNode)} from given " +
                          $"{nameof(list)}: {list}";
            throw new NullReferenceException(message);
        }

        var key = new Nibbles(binary.ByteArray);
        return new ShortNode(key, node);
    }

    // The length is already checked.
    private static FullNode DecodeFull(List list)
    {
        var builder = ImmutableDictionary.CreateBuilder<byte, INode?>();
        for (var i = 0; i < list.Count - 1; i++)
        {
            var node = Decode(list[i], FullChildNodeTypes);
            builder.Add((byte)i, node);
        }

        var value = Decode(list[FullNode.ChildrenCount], FullValueNodeTypes);

        return new FullNode(builder.ToImmutable(), value);
    }

    private static HashNode DecodeHash(Binary binary) => new(new HashDigest<SHA256>(binary));
}
