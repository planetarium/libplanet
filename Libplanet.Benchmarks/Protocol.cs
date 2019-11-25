using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using BenchmarkDotNet.Attributes;
using Libplanet.Crypto;
using Libplanet.Tests.Net.Protocols;

namespace Libplanet.Benchmarks
{
    public class Protocol
    {
        private readonly Dictionary<Address, TestSwarm> _swarms;

        public Protocol()
        {
            _swarms = new Dictionary<Address, TestSwarm>();
        }

        [Benchmark]
        public async Task BootstrapManyTestSwarms()
        {
            const int count = 100;
            var seed = CreateTestSwarm();
            seed.Start();
            var swarms = new TestSwarm[count];
            for (var i = 0; i < count; i++)
            {
                swarms[i] = CreateTestSwarm();
                swarms[i].Start();
            }

            foreach (var swarm in swarms)
            {
                await swarm.BootstrapAsync(new[] { seed.AsPeer });
            }
        }

        private TestSwarm CreateTestSwarm(
            PrivateKey privateKey = null,
            int? tableSize = null,
            int? bucketSize = null,
            TimeSpan? networkDelay = null)
        {
            return new TestSwarm(
                _swarms,
                privateKey ?? new PrivateKey(),
                tableSize,
                bucketSize,
                networkDelay);
        }
    }
}
