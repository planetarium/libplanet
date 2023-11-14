using System.Diagnostics;
using System.Security.Cryptography;
using System.Threading;
using Bencodex.Types;
using Libplanet.Common;
using LruCacheNet;
using Serilog;

namespace Libplanet.Store
{
    public class HashNodeCache
    {
        // FIXME: Tuned to 9c mainnet.  Should be refactored to accept cache size as an argument.
        private const int _cahceSize = 1_048_576;
        private const int _reportPeriod = 60_000;

        private LruCache<HashDigest<SHA256>, IValue> _cache;
        private Stopwatch _stopwatch;
        private int _attempts;
        private int _hits;
        private object _reportLock;

        public HashNodeCache()
        {
            _cache = new LruCache<HashDigest<SHA256>, IValue>(_cahceSize);
            _stopwatch = new Stopwatch();
            _attempts = 0;
            _hits = 0;
            _reportLock = new object();
            _stopwatch.Start();
        }

        public bool TryGetValue(HashDigest<SHA256> hash, out IValue? value)
        {
            lock (_reportLock)
            {
                Report();
            }

            Interlocked.Increment(ref _attempts);
            if (_cache.TryGetValue(hash, out value))
            {
                Interlocked.Increment(ref _hits);
                return true;
            }
            else
            {
                value = null;
                return false;
            }
        }

        public void AddOrUpdate(HashDigest<SHA256> hash, IValue value)
        {
            _cache.AddOrUpdate(hash, value);
        }

        private void Report()
        {
            long period = _stopwatch.ElapsedMilliseconds;
            if (period > _reportPeriod)
            {
                Log
                    .ForContext("Source", nameof(HashNodeCache))
                    .ForContext("Tag", "Metric")
                    .ForContext("Subtag", "HashNodeCacheReport")
                    .Debug(
                        "Successfully fetched {HitCount} cached values out of last " +
                        "{AttemptCount} attempts with hitrate of {HitRate} and " +
                        "{CacheUsed}/{CacheSize} cache in use during last {PeriodMs} ms",
                        _hits,
                        _attempts,
                        (double)_hits / _attempts,
                        _cache.Count,
                        _cache.Capacity,
                        period);

                _stopwatch.Restart();
                Interlocked.Exchange(ref _attempts, 0);
                Interlocked.Exchange(ref _hits, 0);
            }
        }
    }
}
