#nullable enable
using System.Security.Cryptography;
using Bencodex;

namespace Libplanet.Store.Trie.Nodes
{
    internal static class INodeExtensions
    {
        private static readonly Codec Codec = new Codec();

        internal static HashDigest<SHA256> Hash(this INode node)
        {
            return node is HashNode hashNode
                ? hashNode.HashDigest
                : Hashcash.Hash(node.Serialize());
        }

        internal static byte[] Serialize(this INode node)
        {
            return Codec.Encode(node.ToBencodex());
        }
    }
}
