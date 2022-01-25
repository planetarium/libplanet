using System.Collections.Immutable;
using System.Linq;
using System.Security.Cryptography;
using Bencodex.Types;

namespace Libplanet.Store.Trie.Nodes
{
    internal static class NodeDecoder
    {
        internal static INode? Decode(IValue value)
        {
            if (value is Bencodex.Types.List list)
            {
                switch (list.Count)
                {
                    // Children hashes... | value
                    case FullNode.ChildrenCount:
                        return DecodeFull(list);

                    // path | value
                    case 2:
                        if (list[0] is Binary)
                        {
                            return DecodeShort(list);
                        }

                        if (list[0] is Null)
                        {
                            return new ValueNode(list[1]);
                        }

                        break;

                    default:
                        throw new InvalidTrieNodeException(
                            $"Can't decode a node from the bencodex value: {value.Inspect(false)}");
                }
            }

            return DecodeRef(value);
        }

        private static FullNode DecodeFull(List list)
        {
            // Assume they will be always Bencodex.Types.Binary (i.e., HashNode) and
            // Bencodex.Types.Null (i.e., null) because FullNode's value and children can be null,
            // but there is no way to present null.
            return new FullNode(list
                .Select(DecodeRef)
                .Take(FullNode.ChildrenCount)
                .ToImmutableArray());
        }

        private static ShortNode DecodeShort(List list)
        {
            if (!(list[0] is Binary path))
            {
                throw new InvalidTrieNodeException(
                    $"Expected `{nameof(ShortNode)}.{nameof(ShortNode.Key)}`'s serialization type" +
                    $" was {nameof(Binary)}, but it was {list[0].GetType().FullName}");
            }

            // Get referenced node corresponding.
            var refNode = DecodeRef(list[1]);

            return new ShortNode(path.ByteArray, refNode);
        }

        private static INode? DecodeRef(IValue value)
        {
            switch (value)
            {
                case List list:
                    if (list.EncodingLength > HashDigest<SHA256>.Size)
                    {
                        throw new InvalidTrieNodeException("Invalid embedded node exists.");
                    }

                    return Decode(list);

                case Binary binary:
                    if (binary.ByteArray.Length == HashDigest<SHA256>.Size)
                    {
                        var hashDigest = new HashDigest<SHA256>(binary.ByteArray);

                        // Get referenced node corresponding.
                        return new HashNode(hashDigest);
                    }

                    break;

                case Null _:
                    return null;
            }

            throw new InvalidTrieNodeException("Failed to decode reference node or embedded node.");
        }
    }
}
