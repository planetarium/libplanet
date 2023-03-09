using BenchmarkDotNet.Attributes;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Tests;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Store;

namespace Libplanet.Benchmarks
{
    public class AppendBlock
    {
        private BlockChain<DumbAction> _blockChain;
        private PrivateKey _privateKey;
        private BlockCommit _lastCommit;
        private Block<DumbAction> _block;
        private BlockCommit _commit;

        public AppendBlock()
        {
            var fx = new DefaultStoreFixture();
            _blockChain = BlockChain<DumbAction>.Create(
                new NullBlockPolicy<DumbAction>(),
                new VolatileStagePolicy<DumbAction>(),
                fx.Store,
                fx.StateStore,
                fx.GenesisBlock);
            _privateKey = new PrivateKey();
        }

        [IterationSetup(Target = nameof(AppendBlockOneTransactionNoAction))]
        public void PrepareAppendMakeOneTransactionNoAction()
        {
            _blockChain.MakeTransaction(_privateKey, new DumbAction[] { });
            PrepareAppend();
        }

        [IterationSetup(Target = nameof(AppendBlockTenTransactionsNoAction))]
        public void PrepareAppendMakeTenTransactionsNoAction()
        {
            for (var i = 0; i < 10; i++)
            {
                _blockChain.MakeTransaction(new PrivateKey(), new DumbAction[] { });
            }
            PrepareAppend();
        }

        [IterationSetup(Target = nameof(AppendBlockOneTransactionWithActions))]
        public void PrepareAppendMakeOneTransactionWithActions()
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
            PrepareAppend();
        }

        [IterationSetup(Target = nameof(AppendBlockTenTransactionsWithActions))]
        public void PrepareAppendMakeTenTransactionsWithActions()
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
            PrepareAppend();
        }

        [Benchmark]
        public void AppendBlockOneTransactionNoAction()
        {
            _blockChain.Append(_block, blockCommit: _commit);
        }

        [Benchmark]
        public void AppendBlockTenTransactionsNoAction()
        {
            _blockChain.Append(_block, blockCommit: _commit);
        }

        [Benchmark]
        public void AppendBlockOneTransactionWithActions()
        {
            _blockChain.Append(_block, blockCommit: _commit);
        }

        [Benchmark]
        public void AppendBlockTenTransactionsWithActions()
        {
            _blockChain.Append(_block, blockCommit: _commit);
        }

        private void PrepareAppend()
        {
            _lastCommit = TestUtils.CreateBlockCommit(_blockChain.Tip);
            _block = _blockChain.ProposeBlock(_privateKey, lastCommit: _lastCommit);
            _commit = TestUtils.CreateBlockCommit(_block);
        }
    }
}
