using BenchmarkDotNet.Attributes;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Store;

namespace Libplanet.Benchmarks
{
    public class ProposeBlock
    {
        private BlockChain<DumbAction> _blockChain;
        private PrivateKey _privateKey;

        public ProposeBlock()
        {
            var fx = new DefaultStoreFixture();
            _blockChain = new BlockChain<DumbAction>(
                new NullBlockPolicy<DumbAction>(),
                new VolatileStagePolicy<DumbAction>(),
                fx.Store,
                fx.StateStore,
                fx.GenesisBlock
            );
            _privateKey = new PrivateKey();
        }

        [Benchmark]
        public Block<DumbAction> ProposeBlockEmpty()
        {
            return _blockChain.ProposeBlock(_privateKey);
        }

        [IterationSetup(Target = "ProposeBlockOneTransactionNoAction")]
        public void MakeOneTransactionNoAction()
        {
            _blockChain.MakeTransaction(_privateKey, new DumbAction[] { });
        }

        [Benchmark]
        public Block<DumbAction> ProposeBlockOneTransactionNoAction()
        {
            return _blockChain.ProposeBlock(_privateKey);
        }

        [IterationSetup(Target = "ProposeBlockTenTransactionsNoAction")]
        public void MakeTenTransactionsNoAction()
        {
            for (var i = 0; i < 10; i++)
            {
                _blockChain.MakeTransaction(new PrivateKey(), new DumbAction[] { });
            }
        }

        [Benchmark]
        public Block<DumbAction> ProposeBlockTenTransactionsNoAction()
        {
            return _blockChain.ProposeBlock(_privateKey);
        }

        [IterationSetup(Target = "ProposeBlockOneTransactionWithActions")]
        public void MakeOneTransactionWithActions()
        {
            var privateKey = new PrivateKey();
            var address = privateKey.ToAddress();
            var actions = new[]
            {
                new DumbAction(address, "foo"),
                new DumbAction(address, "bar"),
                new DumbAction(address, "baz"),
                new DumbAction(address, "qux"),
            };
            _blockChain.MakeTransaction(privateKey, actions);
        }

        [Benchmark]
        public Block<DumbAction> ProposeBlockOneTransactionWithActions()
        {
            return _blockChain.ProposeBlock(_privateKey);
        }

        [IterationSetup(Target = "ProposeBlockTenTransactionsWithActions")]
        public void MakeTenTransactionsWithActions()
        {
            for (var i = 0; i < 10; i++)
            {
                var privateKey = new PrivateKey();
                var address = privateKey.ToAddress();
                var actions = new[]
                {
                    new DumbAction(address, "foo"),
                    new DumbAction(address, "bar"),
                    new DumbAction(address, "baz"),
                    new DumbAction(address, "qux"),
                };
                _blockChain.MakeTransaction(privateKey, actions);
            }
        }

        [Benchmark]
        public Block<DumbAction> ProposeBlockTenTransactionsWithActions()
        {
            return _blockChain.ProposeBlock(_privateKey);
        }
    }
}
