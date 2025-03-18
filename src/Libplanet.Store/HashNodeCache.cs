using System;
using System.Diagnostics.CodeAnalysis;
using System.Security.Cryptography;
using Bencodex.Types;
using BitFaster.Caching;
using BitFaster.Caching.Lru;
using Libplanet.Common;
using Libplanet.Store.Trie;

namespace Libplanet.Store;

/// <summary>
/// A class used for internally caching hashed nodes of <see cref="MerkleTrie"/>s.
/// </summary>
internal sealed class HashNodeCache
{
    // FIXME: Tuned to 9c mainnet.  Should be refactored to accept cache size as an argument.
    private const int _cacheSize = 524_288;

    private static readonly ICache<HashDigest<SHA256>, IValue> _cache;

    static HashNodeCache()
    {
        _cache = new ConcurrentLruBuilder<HashDigest<SHA256>, IValue>()
            .WithMetrics()
            .WithExpireAfterAccess(TimeSpan.FromMinutes(10))
            .WithCapacity(_cacheSize)
            .Build();
    }

    public static bool TryGetValue(HashDigest<SHA256> hash, [MaybeNullWhen(false)] out IValue value)
        => _cache.TryGet(hash, out value);

    public static void AddOrUpdate(HashDigest<SHA256> hash, IValue value)
        => _cache.AddOrUpdate(hash, value);
}
