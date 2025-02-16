using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Common;

namespace Libplanet.Store.Trie.Nodes;

/// <summary>
/// <see cref="HashDigest{T}"/>'s wrapper class, used in <see cref="ITrie"/> interface.
/// </summary>
public sealed record class HashNode(HashDigest<SHA256> HashDigest) : INode
{
    public HashDigest<SHA256> Hash => HashDigest;

    /// <inheritdoc cref="INode.ToBencodex()"/>
    public IValue ToBencodex() => HashDigest.Bencoded;

    public override int GetHashCode() => HashDigest.GetHashCode();
}
