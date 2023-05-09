using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using BenchmarkDotNet.Attributes;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Crypto;
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
            _blockChain = BlockChain<DumbAction>.Create(
                new NullBlockPolicy<DumbAction>(),
                new VolatileStagePolicy<DumbAction>(),
                _fx.Store,
                _fx.StateStore,
                _fx.GenesisBlock,
                new ActionEvaluator(
                    policyBlockActionGetter: _ => null,
                    blockChainStates: new BlockChainStates(_fx.Store, _fx.StateStore),
                    trieGetter: hash => _fx.StateStore.GetStateRoot(
                        _fx.Store.GetBlockDigest(hash)?.StateRootHash
                    ),
                    genesisHash: _fx.GenesisBlock.Hash,
                    nativeTokenPredicate: _ => false,
                    actionTypeLoader: StaticActionLoader.Create<DumbAction>(),
                    feeCalculator: null
                )
            );
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
