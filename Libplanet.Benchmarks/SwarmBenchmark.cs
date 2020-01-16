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
            _keys = new PrivateKey[SwarmNumber];
            _fxs = new DefaultStoreFixture[SwarmNumber];
            _blockChains = new BlockChain<DumbAction>[SwarmNumber];
            _swarms = new Swarm<DumbAction>[SwarmNumber];

            // Private keys to make swarms broadcast blocks in relay.
            _keys[0] = new PrivateKey(new byte[]
            {
                0x98, 0x66, 0x98, 0x50, 0x72, 0x8c, 0x6c, 0x41, 0x0b, 0xf4,
                0x2c, 0x45, 0xfe, 0x7c, 0x49, 0x23, 0x2d, 0x14, 0xcf, 0xb5,
                0x5b, 0x78, 0x4d, 0x81, 0x35, 0xae, 0x40, 0x4c, 0x7c, 0x24,
                0x3f, 0xc7,
            });
            _keys[1] = new PrivateKey(new byte[]
            {
                0xd2, 0x47, 0x6f, 0xf3, 0x1a, 0xf3, 0x4f, 0x00, 0x5a, 0xe2,
                0xd9, 0x24, 0x18, 0x60, 0xe9, 0xb9, 0xd0, 0x42, 0x9a, 0x30,
                0x67, 0x81, 0x2b, 0x00, 0xf0, 0x45, 0x87, 0x70, 0x3f, 0xd5,
                0x51, 0x93,
            });
            _keys[2] = new PrivateKey(new byte[]
            {
                0x9e, 0xd4, 0xdb, 0x20, 0xfd, 0x4d, 0x1c, 0x52, 0x55, 0x24,
                0x80, 0x52, 0xc6, 0x1f, 0x95, 0x1c, 0xf1, 0x49, 0x4a, 0xd6,
                0xf9, 0x1d, 0x29, 0xb9, 0xa3, 0x0b, 0x0e, 0x0c, 0xc8, 0xaa,
                0xb0, 0x79,
            });
            _keys[3] = new PrivateKey(new byte[]
            {
                0x0a, 0x4f, 0x84, 0xeb, 0x69, 0x4d, 0xc1, 0xf0, 0xf3, 0x15,
                0x97, 0xcc, 0x95, 0x53, 0x66, 0x01, 0x27, 0x2a, 0xc1, 0xcd,
                0x0f, 0xf6, 0x02, 0x6f, 0x08, 0x29, 0x1d, 0xd0, 0x79, 0xda,
                0xcc, 0x36,
            });
            _keys[4] = new PrivateKey(new byte[]
            {
                0x68, 0xbd, 0xc3, 0xda, 0xf1, 0xa1, 0x67, 0x9c, 0xa1, 0x1e,
                0x5a, 0x64, 0x10, 0xe6, 0x74, 0x95, 0x77, 0xbc, 0x47, 0x1c,
                0x55, 0xd7, 0x38, 0xa3, 0x67, 0x48, 0x73, 0x08, 0xcd, 0x74,
                0x3c, 0x4b,
            });
            _keys[5] = new PrivateKey(new byte[]
            {
                0x02, 0x40, 0xa6, 0x72, 0xdd, 0xc0, 0x65, 0x04, 0x54, 0xfb,
                0x34, 0x29, 0x05, 0xaa, 0xa6, 0x1e, 0x94, 0x30, 0x89, 0x26,
                0xfd, 0x30, 0xd1, 0x61, 0x8c, 0x1b, 0x75, 0x79, 0x86, 0xf8,
                0x8a, 0x6a,
            });
            _keys[6] = new PrivateKey(new byte[]
            {
                0x74, 0x6d, 0x07, 0xb0, 0xb9, 0x7e, 0x0d, 0xb9, 0x1f, 0x96,
                0x59, 0xe1, 0x20, 0x8d, 0x31, 0xac, 0x94, 0xcd, 0xc8, 0xaa,
                0x0c, 0x0d, 0xeb, 0x35, 0xab, 0x93, 0x95, 0x65, 0xae, 0x5f,
                0xc1, 0x4b,
            });
            _keys[7] = new PrivateKey(new byte[]
            {
                0xc5, 0x1e, 0xc4, 0x6c, 0x81, 0x6a, 0x9d, 0x41, 0xc2, 0xae,
                0x61, 0x51, 0x0f, 0x97, 0xd0, 0x0e, 0x3a, 0x7b, 0x86, 0xd3,
                0xbd, 0xf1, 0x1e, 0xfe, 0x55, 0x67, 0x8f, 0x31, 0x92, 0xc1,
                0xdf, 0xe4,
            });
            _keys[8] = new PrivateKey(new byte[]
            {
                0x0a, 0x9e, 0x67, 0x59, 0x4b, 0xfc, 0xdd, 0x81, 0xcd, 0x86,
                0xa0, 0xf1, 0x79, 0x74, 0x56, 0x0f, 0x56, 0x85, 0xff, 0x3f,
                0x75, 0xd3, 0xbc, 0xaa, 0xf0, 0xa2, 0xec, 0xdb, 0x05, 0xa5,
                0x59, 0x79,
            });
            _keys[9] = new PrivateKey(new byte[]
            {
                0x3d, 0xae, 0x2d, 0x2f, 0x87, 0x1b, 0x11, 0xaa, 0x41, 0xbd,
                0xec, 0x81, 0x4c, 0x4d, 0x27, 0xf3, 0xba, 0xd9, 0x1f, 0x61,
                0xc3, 0x57, 0xab, 0x43, 0xa0, 0x0c, 0x63, 0x1b, 0x2b, 0x15,
                0x13, 0xf2,
            });

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
