using System;
using System.Security.Cryptography;
using Bencodex.Types;

namespace Libplanet.Store.Trie.Nodes
{
    /// <summary>
    /// Wrapper class.
    /// </summary>
    public class HashNode : INode, IEquatable<HashNode>
    {
        public HashNode(HashDigest<SHA256> hashDigest)
        {
            HashDigest = hashDigest;
        }

        public HashDigest<SHA256> HashDigest { get; }

        public byte[] Serialize()
        {
            return HashDigest.ToByteArray();
        }

        public IValue ToBencodex()
        {
            return (Binary)HashDigest.ToByteArray();
        }

        public bool Equals(HashNode other)
        {
            return !(other is null) && GetHashCode() == other.GetHashCode();
        }

        public override bool Equals(object obj)
        {
            return ReferenceEquals(this, obj) || (obj is HashNode hashNode && Equals(hashNode));
        }

        public override int GetHashCode()
        {
            return HashDigest.GetHashCode();
        }
    }
}
