using System.Collections.Generic;
using System.Threading;
using Bencodex.Types;
using Libplanet.Common.Crypto;
using LruCacheNet;
using Serilog;

namespace Libplanet.Blocks
{
    internal class BlockStateCache
    {
        public const int CacheSize = 1_000;
        public const int ReportPeriod = 1_000;

        private LruCache<Address, IValue?> _cache;
        private int _getAttempts;
        private int _getSuccesses;

        public BlockStateCache()
        {
            _cache = new LruCache<Address, IValue?>(CacheSize);
            _getAttempts = 0;
            _getSuccesses = 0;
        }

        public bool TryGetValue(Address address, out IValue? value)
        {
            bool result;
            int getAttempts = Interlocked.Increment(ref _getAttempts);
            if (_cache.TryGetValue(address, out value))
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
                    .ForContext("Source", nameof(BlockStateCache))
                    .ForContext("Tag", "Metric")
                    .ForContext("Subtag", "StatesCacheReport")
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

        public void AddOrUpdate(Address address, IValue? value)
        {
            if (value is { } v)
            {
                _cache.AddOrUpdate(address, v);
            }
        }

        public void AddOrUpdate(IReadOnlyList<(Address, IValue?)> bulk)
        {
            foreach ((Address a, IValue? v) in bulk)
            {
                AddOrUpdate(a, v);
            }
        }
    }
}
