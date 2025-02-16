using System.Security.Cryptography;
using Bencodex;
using Bencodex.Types;
using Libplanet.Common;

namespace Libplanet.Store.Trie.Nodes;

public sealed record class RootNode : INode
{
    private static readonly Codec _codec = new();
    private static readonly HashDigest<SHA256> _hash;

    static RootNode()
    {
        _hash = HashDigest<SHA256>.DeriveFrom(_codec.Encode(Null.Value));
    }

    public static RootNode Default { get; } = new();

    public HashDigest<SHA256> Hash => _hash;

    public IValue ToBencodex() => Null.Value;
}
