#nullable enable
using System.Security.Cryptography;
using Bencodex.Types;

namespace Libplanet.Store.Trie.Nodes
{
    /// <summary>
    /// Wrapper class.
    /// </summary>
    [Equals]
    internal class HashNode : INode
    {
        public HashNode(HashDigest<SHA256> hashDigest)
        {
            HashDigest = hashDigest;
        }

        public HashDigest<SHA256> HashDigest { get; }

        public static bool operator ==(HashNode left, HashNode right) =>
            Operator.Weave(left, right);

        public static bool operator !=(HashNode left, HashNode right) =>
            Operator.Weave(left, right);

        public byte[] Serialize()
        {
            return HashDigest.ToByteArray();
        }

        public IValue ToBencodex()
        {
            return (Binary)HashDigest.ToByteArray();
        }

        public override int GetHashCode()
        {
            return HashDigest.GetHashCode();
        }
    }
}
