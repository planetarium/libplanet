using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Security.Cryptography;
using Bencodex.Types;

namespace Libplanet.Store.Trie.Nodes
{
    internal static class NodeDecoder
    {
        internal static INode Decode(IValue value)
        {
            switch (value)
            {
                case List list:
                    switch (list.Count)
                    {
                        // Children hashes... | value
                        case 17:
                            return DecodeFull(list);

                        // path | value
                        case 2:
                            return DecodeShort(list);
                    }

                    break;
            }

            throw new InvalidTrieNodeException($"Invalid node came.");
        }

        private static FullNode DecodeFull(List list)
        {
            return new FullNode(list
                .Select(DecodeChild)
                .Take(FullNode.ChildrenCount - 1)
                .Concat(new[] { new ValueNode(list[list.Count - 1]) })
                .ToImmutableArray());
        }

        // FIXME: replace with DecodeRef after resolving full-node-null issues.
        private static INode DecodeChild(IValue value)
        {
            if (value is Binary binary)
            {
                return new HashNode(new HashDigest<SHA256>(binary));
            }

            if (value is Null)
            {
                return null;
            }

            throw new InvalidTrieNodeException($"Invalid child node came. raw: {value.Inspection}");
        }

        private static ShortNode DecodeShort(List list)
        {
            if (!(list[0] is Binary path))
            {
                throw new InvalidTrieNodeException($"Invalid node came.");
            }

            if (HasValueNodeFlag(path))
            {
                // TODO: Check embedded node.
                return new ShortNode(RemoveValueNodeFlag(path), new ValueNode(list[1]));
            }

            if (!(list[1] is Binary binary))
            {
                throw new InvalidTrieNodeException($"Invalid node came.");
            }

            // Get referenced node corresponding.
            var refNode = DecodeRef(binary);

            return new ShortNode(path, refNode);
        }

        private static INode DecodeRef(IValue value)
        {
            switch (value)
            {
                case List list:
                    if (EstimateSize(list) > HashDigest<SHA256>.Size)
                    {
                        throw new InvalidTrieNodeException("Invalid embedded node exists.");
                    }

                    return Decode(list);

                case Binary binary:
                    if (binary.Value.Length == HashDigest<SHA256>.Size)
                    {
                        var hashDigest = new HashDigest<SHA256>(binary.Value);

                        // Get referenced node corresponding.
                        return new HashNode(hashDigest);
                    }

                    break;
            }

            throw new InvalidTrieNodeException("Invalid embedded node exists.");
        }

        private static long EstimateSize(IValue value)
        {
            long size = 0;
            foreach (var chunk in value.EncodeIntoChunks())
            {
                size += chunk.Length;
            }

            return size;
        }

        [Pure]
        private static bool HasValueNodeFlag(byte[] path)
        {
            // path[path.Length - 1] can't be 16 without value node flag,
            // because hexadecimal values are in 0..15 range.
            return path.Length > 0 && path[path.Length - 1] == 16;
        }

        // NOTE: Add ValueNodeFlag for storing.
        [Pure]
        private static byte[] RemoveValueNodeFlag(byte[] path)
        {
            return path.Take(path.Length - 1).ToArray();
        }
    }
}
