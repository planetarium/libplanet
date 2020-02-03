using System;
using System.Collections.Generic;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using BenchmarkDotNet.Attributes;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Net;
using Libplanet.Tests;
using Libplanet.Tests.Blockchain;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Store;
using NetMQ;

namespace Libplanet.Benchmarks
{
    public class SwarmBenchmark
    {
        private const int SwarmNumber = 10;
        private const int WaitTimeout = 5 * 1000;
        private readonly NullPolicy<DumbAction> _policy;
        private readonly List<Block<DumbAction>> _blocks;
        private PrivateKey[] _keys;
        private DefaultStoreFixture[] _fxs;
        private BlockChain<DumbAction>[] _blockChains;
        private Swarm<DumbAction>[] _swarms;

        public SwarmBenchmark()
        {
            _policy = new NullPolicy<DumbAction>();
            _blocks = new List<Block<DumbAction>>
            {
                TestUtils.MineGenesis<DumbAction>(),
            };
            _blocks.Add(TestUtils.MineNext(_blocks[0]));
            _blocks.Add(TestUtils.MineNext(_blocks[1]));
            _blocks.Add(TestUtils.MineNext(_blocks[2]));
            _blocks.Add(TestUtils.MineNext(_blocks[3]));
        }

        [IterationSetup(Targets = new[] {"BroadcastBlock", "BroadcastBlockWithoutFill"})]
        public void InitializeSwarms()
        {
            _keys = TestUtils.AdjacentKeys;
            _fxs = new DefaultStoreFixture[SwarmNumber];
            _blockChains = new BlockChain<DumbAction>[SwarmNumber];
            _swarms = new Swarm<DumbAction>[SwarmNumber];

            var genesisBlock = BlockChain<DumbAction>.MakeGenesisBlock();
            var tasks = new List<Task>();
            for (int i = 0; i < SwarmNumber; i++)
            {
                _keys[i] = _keys[i] ?? new PrivateKey();
                _fxs[i] = new DefaultStoreFixture(memory: true);
                _blockChains[i] = new BlockChain<DumbAction>(_policy, _fxs[i].Store, _blocks[0]);
                _swarms[i] = new Swarm<DumbAction>(
                    _blockChains[i],
                    _keys[i],
                    0,
                    host: IPAddress.Loopback.ToString());
                tasks.Add(StartAsync(_swarms[i]));
            }

            Task.WaitAll(tasks.ToArray());

            for (int i = 0; i < SwarmNumber - 1; i++)
            {
                _swarms[i].AddPeersAsync(new[] { _swarms[i + 1].AsPeer }, null)
                    .Wait(WaitTimeout);
            }

            _blockChains[0].Append(_blocks[1]);
            _blockChains[0].Append(_blocks[2]);
            _blockChains[0].Append(_blocks[3]);
            _blockChains[0].Append(_blocks[4]);
        }

        [IterationCleanup(Targets = new[] {"BroadcastBlock", "BroadcastBlockWithoutFill"})]
        public void FinalizeSwarmas()
        {
            try
            {
                foreach (var swarm in _swarms)
                {
                    StopAsync(swarm).Wait(WaitTimeout);
                    swarm.Dispose();
                }

                NetMQConfig.Cleanup(false);
            }
            finally
            {
                foreach (var fx in _fxs)
                {
                    fx.Dispose();
                }
            }
        }

        [Benchmark]
        public async Task BroadcastBlock()
        {
            Task t = _swarms[SwarmNumber - 1].BlockAppended.WaitAsync();
            _swarms[0].BroadcastBlock(_blockChains[0][-1]);
            await t;
        }

        [Benchmark]
        public async Task BroadcastBlockWithoutFill()
        {
            Task t = _swarms[SwarmNumber - 1].BlockAppended.WaitAsync();
            _swarms[0].BroadcastBlock(_blockChains[0][1]);
            await t;
        }

        private async Task<Task> StartAsync<T>(
            Swarm<T> swarm,
            CancellationToken cancellationToken = default
        )
            where T : IAction, new()
        {
            Task task = swarm.StartAsync(200, 200, cancellationToken);
            await swarm.WaitForRunningAsync();
            return task;
        }

        private Task StopAsync<T>(Swarm<T> swarm)
            where T : IAction, new()
        {
            return swarm.StopAsync(TimeSpan.FromMilliseconds(10));
        }
    }
}
