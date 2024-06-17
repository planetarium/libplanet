using System;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Common;

namespace Libplanet.Store.Trie.Nodes
{
    /// <summary>
    /// <see cref="HashDigest{T}"/>'s wrapper class, used in <see cref="ITrie"/> interface.
    /// </summary>
    public class HashNode : INode, IEquatable<HashNode>
    {
        public HashNode(HashDigest<SHA256> hashDigest)
        {
            HashDigest = hashDigest;
        }

        public HashDigest<SHA256> HashDigest { get; }

        public static bool operator ==(HashNode left, HashNode right) => left.Equals(right);

        public static bool operator !=(HashNode left, HashNode right) => !left.Equals(right);

        /// <inheritdoc cref="IEquatable{T}.Equals"/>
        public bool Equals(HashNode? other) =>
            other is { } node && HashDigest.Equals(node.HashDigest);

        public override bool Equals(object? obj) => obj is HashNode other && Equals(other);

        public byte[] Serialize()
        {
            return HashDigest.ToByteArray();
        }

        /// <inheritdoc cref="INode.ToBencodex()"/>
        public IValue ToBencodex() =>
            new Binary(HashDigest.ToByteArray());

        public override int GetHashCode() => HashDigest.GetHashCode();
    }
}
