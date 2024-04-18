using System.Collections.Immutable;
using BenchmarkDotNet.Attributes;
using Libplanet.Action;
using Libplanet.Action.Loader;
using Libplanet.Action.Tests.Common;
using Libplanet.Blockchain.Policies;
using Libplanet.Crypto;
using Libplanet.Tests.Store;

namespace Libplanet.Benchmarks
{
    public class BlockChain
    {
        private StoreFixture _fx;
        private Libplanet.Blockchain.BlockChain _blockChain;

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
            _blockChain = Libplanet.Blockchain.BlockChain.Create(
                new NullBlockPolicy(),
                new VolatileStagePolicy(),
                _fx.Store,
                _fx.StateStore,
                _fx.GenesisBlock,
                new ActionEvaluator(
                    policyActionsRegistry: new PolicyActionsRegistry(
                        beginBlockActionsGetter: _ => ImmutableArray<IAction>.Empty,
                        endBlockActionsGetter: _ => ImmutableArray<IAction>.Empty,
                        beginTxActionsGetter: _ => ImmutableArray<IAction>.Empty,
                        endTxActionsGetter: _ => ImmutableArray<IAction>.Empty),
                    stateStore: _fx.StateStore,
                    actionTypeLoader: new SingleActionLoader(typeof(DumbAction))));
            var key = new PrivateKey();
            for (var i = 0; i < 500; i++)
            {
                _blockChain.ProposeBlock(key);
            }
        }

        [Benchmark]
        public void ContainsBlock()
        {
            _blockChain.ContainsBlock(_blockChain.Tip.Hash);
        }
    }
}
