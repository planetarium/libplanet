using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using BenchmarkDotNet.Attributes;
using Libplanet.Blockchain;
using Libplanet.Tests.Blockchain;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Store;

namespace Libplanet.Benchmarks
{
    public class BlockChain
    {
        private StoreFixture _fx;
        private BlockChain<DumbAction> _blockChain;

        public BlockChain()
        {
        }

        [IterationCleanup]
        public void FinalizeFixture()
        {
            _fx.Dispose();
        }

        [IterationSetup(Target = nameof(ContainsBlock))]
        public void SetupChain()
        {
            _fx = new DefaultStoreFixture();
            _blockChain = new BlockChain<DumbAction>(new NullPolicy<DumbAction>(), _fx.Store);
            for (var i = 0; i < 500; i++)
            {
                _blockChain.MineBlock(_fx.Address1).Wait();
            }
        }

        [Benchmark]
        public void ContainsBlock()
        {
            _blockChain.ContainsBlock(_blockChain.Tip.Hash);
        }
    }
}
