using System;
using System.Security.Cryptography;
using Bencodex;
using Bencodex.Types;
using Libplanet.Common;

namespace Libplanet.Store.Trie.Nodes;

/// <summary>
/// <see cref="HashDigest{T}"/>'s wrapper class, used in <see cref="ITrie"/> interface.
/// </summary>
internal sealed record class HashNode(in HashDigest<SHA256> HashDigest) : INode
{
    private static readonly Codec _codec = new();

    public HashDigest<SHA256> HashDigest { get; } = ValidateHashDigest(HashDigest);

    public static HashNode? CreateOrDefault(in HashDigest<SHA256> hashDigest)
        => hashDigest == default ? null : new HashNode(hashDigest);

    /// <inheritdoc cref="INode.ToBencodex()"/>
    public IValue ToBencodex() => HashDigest.Bencoded;

    public override int GetHashCode() => HashDigest.GetHashCode();

    public INode Expand(IKeyValueStore keyValueStore)
    {
        IValue intermediateEncoding;
        if (HashNodeCache.TryGetValue(HashDigest, out var value))
        {
            intermediateEncoding = value!;
        }
        else
        {
            var keyBytes = new KeyBytes(HashDigest.ByteArray);
            intermediateEncoding = _codec.Decode(keyValueStore[keyBytes]);
            HashNodeCache.AddOrUpdate(HashDigest, intermediateEncoding);
        }

        return NodeDecoder.Decode(intermediateEncoding, NodeDecoder.HashEmbeddedNodeTypes)
            ?? throw new NullReferenceException();
    }

    private static HashDigest<SHA256> ValidateHashDigest(in HashDigest<SHA256> hashDigest)
    {
        if (hashDigest == default)
        {
            throw new ArgumentException(
                $"{nameof(hashDigest)} cannot be default.", nameof(hashDigest));
        }

        return hashDigest;
    }
}
