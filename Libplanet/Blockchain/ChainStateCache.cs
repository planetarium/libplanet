using System;
using System.Collections.Generic;
using System.Threading;
using Bencodex.Types;
using Libplanet.Blocks;
using LruCacheNet;
using Serilog;

namespace Libplanet.Blockchain
{
    internal class ChainStateCache
    {
        public const int CacheSize = 1_000;
        public const int ReportPeriod = 1_000;

        private LruCache<CacheKey, IValue?> _cache;
        private int _getAttempts;
        private int _getSuccesses;

        public ChainStateCache()
        {
            _cache = new LruCache<CacheKey, IValue?>(CacheSize);
            _getAttempts = 0;
            _getSuccesses = 0;
        }

        public bool TryGetValue(BlockHash blockHash, Address address, out IValue? value)
        {
            bool result;
            int getAttempts = Interlocked.Increment(ref _getAttempts);
            if (_cache.TryGetValue(new CacheKey(blockHash, address), out value))
            {
                Interlocked.Increment(ref _getSuccesses);
                result = true;
            }
            else
            {
                value = null;
                result = false;
            }

            if (getAttempts == ReportPeriod)
            {
                // NOTE: This is only an estimation due to concurrency (or lack there of).
                Log
                    .ForContext("Source", nameof(ChainStateCache))
                    .ForContext("Tag", "Metric")
                    .ForContext("Subtag", "StateCacheReport")
                    .Debug(
                        "Successfully fetched {SuccessCount} cached values out of last " +
                        "{AttemptCount} attempts",
                        _getSuccesses,
                        getAttempts);
                _getAttempts = 0;
                _getSuccesses = 0;
            }

            return result;
        }

        public void AddOrUpdate(BlockHash blockHash, Address address, IValue? value)
        {
            if (value is { } v)
            {
                _cache.AddOrUpdate(new CacheKey(blockHash, address), v);
            }
        }

        public void AddOrUpdate(BlockHash blockHash, IReadOnlyList<(Address, IValue?)> bulk)
        {
            foreach ((Address a, IValue? v) in bulk)
            {
                AddOrUpdate(blockHash, a, v);
            }
        }

        private struct CacheKey
        {
            public CacheKey(BlockHash blockHash, Address address)
            {
                BlockHash = blockHash;
                Address = address;
            }

            public BlockHash BlockHash { get; }

            public Address Address { get; }

            public bool Equals(CacheKey? other) =>
                other is { } o && BlockHash.Equals(o.BlockHash) && Address.Equals(o.Address);

            public override bool Equals(object? obj) =>
                obj is CacheKey other && Equals(other);

            public override int GetHashCode() => HashCode.Combine(BlockHash, Address);
        }
    }
}
