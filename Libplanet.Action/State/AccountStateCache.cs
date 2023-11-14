using System.Collections.Generic;
using System.Diagnostics;
using System.Threading;
using Bencodex.Types;
using Libplanet.Crypto;
using LruCacheNet;
using Serilog;

namespace Libplanet.Action.State
{
    internal class AccountStateCache
    {
        private const int _cahceSize = 10_000;
        private const int _reportPeriod = 1_000;

        private LruCache<Address, IValue?> _cache;
        private Stopwatch _stopwatch;
        private int _attempts;
        private int _hits;
        private object _reportLock;

        public AccountStateCache()
        {
            _cache = new LruCache<Address, IValue?>(_cahceSize);
            _stopwatch = new Stopwatch();
            _attempts = 0;
            _hits = 0;
            _reportLock = new object();
            _stopwatch.Start();
        }

        public bool TryGetValue(Address address, out IValue? value)
        {
            lock (_reportLock)
            {
                Report();
            }

            Interlocked.Increment(ref _attempts);
            if (_cache.TryGetValue(address, out value))
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

        private void Report()
        {
            long period = _stopwatch.ElapsedMilliseconds;
            if (period > _reportPeriod)
            {
                Log
                    .ForContext("Source", nameof(AccountStateCache))
                    .ForContext("Tag", "Metric")
                    .ForContext("Subtag", "AccountStateCacheReport")
                    .Debug(
                        "Successfully fetched {HitCount} cached values out of last " +
                        "{AttemptCount} attempts with hitrate of {HitRate} " +
                        "during last {PeriodMs} ms",
                        _hits,
                        _attempts,
                        (double)_hits / _attempts,
                        period);

                _stopwatch.Restart();
                Interlocked.Exchange(ref _attempts, 0);
                Interlocked.Exchange(ref _hits, 0);
            }
        }
    }
}
