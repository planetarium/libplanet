using System;
using System.Diagnostics.Metrics;
using System.Security.Cryptography;
using Bencodex.Types;
using BitFaster.Caching;
using BitFaster.Caching.Lru;
using Libplanet.Common;
using Libplanet.Store.Trie;

namespace Libplanet.Store
{
    /// <summary>
    /// A class used for internally caching hashed nodes of <see cref="MerkleTrie"/>s.
    /// </summary>
    public class HashNodeCache
    {
        private readonly Meter _hashNodeCacheMeter = new Meter("Libplanet.Store.HashNodeCache");

        // FIXME: Tuned to 9c mainnet.  Should be refactored to accept cache size as an argument.
        private const int _cacheSize = 524_288;

        private ICache<HashDigest<SHA256>, IValue> _cache;

        internal HashNodeCache()
        {
            _cache = new ConcurrentLruBuilder<HashDigest<SHA256>, IValue>()
                .WithMetrics()
                .WithExpireAfterAccess(TimeSpan.FromMinutes(10))
                .WithCapacity(_cacheSize)
                .Build();

            if (_cache.Metrics.Value is null)
            {
                return;
            }

            _hashNodeCacheMeter.CreateObservableGauge(
                "CacheSize",
                () => _cache.Count);
            _hashNodeCacheMeter.CreateObservableCounter(
                "CacheHit",
                () => _cache.Metrics.Value.Hits);
            _hashNodeCacheMeter.CreateObservableCounter(
                "CacheMiss",
                () => _cache.Metrics.Value.Misses);
            _hashNodeCacheMeter.CreateObservableCounter(
                "CacheEviction",
                () => _cache.Metrics.Value.Evicted);
            _hashNodeCacheMeter.CreateObservableCounter(
                "CacheTotal",
                () => _cache.Metrics.Value.Total);
        }

        public bool TryGetValue(HashDigest<SHA256> hash, out IValue? value)
        {
            return _cache.TryGet(hash, out value);
        }

        public void AddOrUpdate(HashDigest<SHA256> hash, IValue value)
        {
            _cache.AddOrUpdate(hash, value);
        }
    }
}
