using System.Threading.Tasks;
using BenchmarkDotNet.Attributes;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Tests.Blockchain;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Store;

namespace Libplanet.Benchmarks
{
    public class MineBlock
    {
        private BlockChain<DumbAction> _blockChain;
        private PrivateKey _privateKey;

        public MineBlock()
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
        public async Task<Block<DumbAction>> MineBlockEmpty()
        {
            return await _blockChain.MineBlock(_privateKey);
        }

        [IterationSetup(Target = "MineBlockOneTransactionNoAction")]
        public void MakeOneTransactionNoAction()
        {
            _blockChain.MakeTransaction(_privateKey, new DumbAction[] { });
        }

        [Benchmark]
        public async Task<Block<DumbAction>> MineBlockOneTransactionNoAction()
        {
            return await _blockChain.MineBlock(_privateKey);
        }

        [IterationSetup(Target = "MineBlockTenTransactionsNoAction")]
        public void MakeTenTransactionsNoAction()
        {
            for (var i = 0; i < 10; i++)
            {
                _blockChain.MakeTransaction(new PrivateKey(), new DumbAction[] { });
            }
        }

        [Benchmark]
        public async Task<Block<DumbAction>> MineBlockTenTransactionsNoAction()
        {
            return await _blockChain.MineBlock(_privateKey);
        }

        [IterationSetup(Target = "MineBlockOneTransactionWithActions")]
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
        public async Task<Block<DumbAction>> MineBlockOneTransactionWithActions()
        {
            return await _blockChain.MineBlock(_privateKey);
        }

        [IterationSetup(Target = "MineBlockTenTransactionsWithActions")]
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
        public async Task<Block<DumbAction>> MineBlockTenTransactionsWithActions()
        {
            return await _blockChain.MineBlock(_privateKey);
        }
    }
}
