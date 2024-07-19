using BenchmarkDotNet.Attributes;
using Libplanet.Action;
using Libplanet.Action.Loader;
using Libplanet.Action.Tests.Common;
using Libplanet.Blockchain.Policies;
using Libplanet.Crypto;
using Libplanet.Types.Blocks;
using Libplanet.Tests;
using Libplanet.Tests.Store;
using System.Collections.Immutable;

namespace Libplanet.Benchmarks
{
    public class AppendBlock
    {
        private Libplanet.Blockchain.BlockChain _blockChain;
        private PrivateKey _privateKey;
        private BlockCommit _lastCommit;
        private Block _block;
        private BlockCommit _commit;

        public AppendBlock()
        {
            var fx = new DefaultStoreFixture();
            _blockChain = Libplanet.Blockchain.BlockChain.Create(
                new NullBlockPolicy(),
                new VolatileStagePolicy(),
                fx.Store,
                fx.StateStore,
                fx.GenesisBlock,
                new ActionEvaluator(
                    policyActionsRegistry: new PolicyActionsRegistry(),
                    stateStore: fx.StateStore,
                    actionTypeLoader: new SingleActionLoader(typeof(DumbAction))));
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
            var address = privateKey.Address;
            var actions = new[]
            {
                DumbAction.Create((address, "foo")),
                DumbAction.Create((address, "bar")),
                DumbAction.Create((address, "baz")),
                DumbAction.Create((address, "qux")),
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
                var address = privateKey.Address;
                var actions = new[]
                {
                    DumbAction.Create((address, "foo")),
                    DumbAction.Create((address, "bar")),
                    DumbAction.Create((address, "baz")),
                    DumbAction.Create((address, "qux")),
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
            _block = _blockChain.ProposeBlock(_privateKey, _lastCommit);
            _commit = TestUtils.CreateBlockCommit(_block);
        }
    }
}
