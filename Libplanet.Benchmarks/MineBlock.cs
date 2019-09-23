using System.Threading.Tasks;
using BenchmarkDotNet.Attributes;
using Libplanet.Blockchain;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Tests.Blockchain;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Store;

namespace Libplanet.Benchmarks
{
    public class MineBlock
    {
        private StoreFixture _fx;
        private BlockChain<DumbAction> _blockChain;

        public MineBlock()
        {
            _fx = new LiteDBStoreFixture();
            _blockChain = new BlockChain<DumbAction>(
                new NullPolicy<DumbAction>(),
                _fx.Store
            );
        }

        [Benchmark]
        public async Task<Block<DumbAction>> MineBlockEmpty()
        {
            return await _blockChain.MineBlock(_fx.Address1);
        }

        [IterationSetup(Target = "MineBlockOneTransactionNoAction")]
        public void MakeOneTransactionNoAction()
        {
            _blockChain.MakeTransaction(new PrivateKey(), new DumbAction[] { });
        }

        [Benchmark]
        public async Task<Block<DumbAction>> MineBlockOneTransactionNoAction()
        {
            return await _blockChain.MineBlock(_fx.Address1);
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
            return await _blockChain.MineBlock(_fx.Address1);
        }

        [IterationSetup(Target = "MineBlockOneTransactionWithActions")]
        public void MakeOneTransactionWithActions()
        {
            var privateKey = new PrivateKey();
            var address = privateKey.PublicKey.ToAddress();
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
            return await _blockChain.MineBlock(_fx.Address1);
        }

        [IterationSetup(Target = "MineBlockTenTransactionsWithActions")]
        public void MakeTenTransactionsWithActions()
        {
            for (var i = 0; i < 10; i++)
            {
                var privateKey = new PrivateKey();
                var address = privateKey.PublicKey.ToAddress();
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
            return await _blockChain.MineBlock(_fx.Address1);
        }
    }
}
