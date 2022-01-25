using System.Security.Cryptography;
using Bencodex;

namespace Libplanet.Store.Trie.Nodes
{
    // FIXME: As it's not an interface, it should be renamed to NodeExtensions.
    internal static class INodeExtensions
    {
        private static readonly Codec Codec = new Codec();

        internal static HashDigest<SHA256> Hash(this INode node)
        {
            return node is HashNode hashNode
                ? hashNode.HashDigest
                : HashDigest<SHA256>.DeriveFrom(Codec.Encode(node.ToBencodex()));
        }
    }
}
