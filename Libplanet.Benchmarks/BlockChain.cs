using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Threading.Tasks;
using BenchmarkDotNet.Attributes;
using Libplanet.Blockchain;
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

        private ImmutableArray<PrivateKey> _privateKeys;

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
            _blockChain = new BlockChain<DumbAction>(
                new NullPolicy<DumbAction>(),
                _fx.Store,
                _fx.StateStore,
                _fx.GenesisBlock);
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

        [IterationSetup(Target = nameof(GetNextTxNonce))]
        public void SetupChain_GetNextTxNonce()
        {
            _fx = new DefaultStoreFixture();
            _blockChain = new BlockChain<DumbAction>(
                new NullPolicy<DumbAction>(),
                _fx.Store,
                _fx.StateStore,
                _fx.GenesisBlock);

            const int privateKeyCount = 3;
            _privateKeys = Enumerable.Range(0, privateKeyCount)
                .Select(_ => new PrivateKey())
                .ToImmutableArray();
            foreach (PrivateKey privateKey in _privateKeys)
            {
                for (var i = 0; i < 2000; i++)
                {
                    _blockChain.MakeTransaction(privateKey, new DumbAction[0]);
                }
            }
        }

        [Benchmark]
        public void GetNextTxNonce()
        {
            _blockChain.GetNextTxNonce(_privateKeys[0].ToAddress());
            _blockChain.GetNextTxNonce(_privateKeys[1].ToAddress());
            _blockChain.GetNextTxNonce(_privateKeys[2].ToAddress());
        }
    }
}
