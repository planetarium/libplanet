using BenchmarkDotNet.Attributes;
using Libplanet.Action;
using Libplanet.Action.Loader;
using Libplanet.Action.Tests.Common;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Crypto;
using Libplanet.Types.Blocks;
using Libplanet.Tests;
using Libplanet.Tests.Store;

namespace Libplanet.Benchmarks
{
    public class ProposeBlock
    {
        private Libplanet.Blockchain.BlockChain _blockChain;
        private PrivateKey _privateKey;
        private BlockCommit _lastCommit;
        private Block _block;

        public ProposeBlock()
        {
            var fx = new DefaultStoreFixture();
            _blockChain = Libplanet.Blockchain.BlockChain.Create(
                new NullBlockPolicy(),
                new VolatileStagePolicy(),
                fx.Store,
                fx.StateStore,
                fx.GenesisBlock,
                new ActionEvaluator(
                    policyBlockActionGetter: _ => null,
                    stateStore: fx.StateStore,
                    actionTypeLoader: new SingleActionLoader(typeof(DumbAction))));
            _privateKey = new PrivateKey();
        }

        [IterationSetup(Target = nameof(ProposeBlockEmpty))]
        public void PreparePropose()
        {
            _lastCommit = TestUtils.CreateBlockCommit(_blockChain.Tip);
        }

        [IterationCleanup(
            Targets = new []
            {
                nameof(ProposeBlockEmpty),
                nameof(ProposeBlockOneTransactionNoAction),
                nameof(ProposeBlockTenTransactionsNoAction),
                nameof(ProposeBlockOneTransactionWithActions),
                nameof(ProposeBlockTenTransactionsWithActions),
            }
        )]
        public void CleanupPropose()
        {
            // To unstaging transactions, a block is appended to blockchain.
            _blockChain.Append(_block, TestUtils.CreateBlockCommit(_block));
        }

        [IterationSetup(Target = nameof(ProposeBlockOneTransactionNoAction))]
        public void MakeOneTransactionNoAction()
        {
            PreparePropose();
            _blockChain.MakeTransaction(_privateKey, new DumbAction[] { });
        }

        [IterationSetup(Target = nameof(ProposeBlockTenTransactionsNoAction))]
        public void MakeTenTransactionsNoAction()
        {
            for (var i = 0; i < 10; i++)
            {
                _blockChain.MakeTransaction(new PrivateKey(), new DumbAction[] { });
            }
            PreparePropose();
        }

        [IterationSetup(Target = nameof(ProposeBlockOneTransactionWithActions))]
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
            PreparePropose();
        }

        [IterationSetup(Target = nameof(ProposeBlockTenTransactionsWithActions))]
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
            PreparePropose();
        }

        [Benchmark]
        public void ProposeBlockEmpty()
        {
            _block = _blockChain.ProposeBlock(_privateKey, _lastCommit);
        }

        [Benchmark]
        public void ProposeBlockOneTransactionNoAction()
        {
            _block = _blockChain.ProposeBlock(_privateKey, _lastCommit);
        }

        [Benchmark]
        public void ProposeBlockTenTransactionsNoAction()
        {
            _block = _blockChain.ProposeBlock(_privateKey, _lastCommit);
        }

        [Benchmark]
        public void ProposeBlockOneTransactionWithActions()
        {
            _block = _blockChain.ProposeBlock(_privateKey, _lastCommit);
        }

        [Benchmark]
        public void ProposeBlockTenTransactionsWithActions()
        {
            _block = _blockChain.ProposeBlock(_privateKey, _lastCommit);
        }
    }
}
