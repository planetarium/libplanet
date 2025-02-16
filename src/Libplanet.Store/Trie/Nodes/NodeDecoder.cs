using System;
using System.Collections.Generic;
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
            if (list.Count == FullNode.ChildrenCount)
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
        var nodeList = new List<INode?>(list.Count);
        for (var i = 0; i < list.Count; i++)
        {
            var value = list[i];
            var nodeType = i < FullNode.ChildrenCount - 1 ? FullChildNodeTypes : FullValueNodeTypes;
            var node = Decode(value, nodeType);
            nodeList.Add(node);
        }

        return new FullNode([.. nodeList]);
    }

    private static HashNode DecodeHash(Binary binary) => new(new HashDigest<SHA256>(binary));
}
