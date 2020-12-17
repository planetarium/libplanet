using System.Linq;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Crypto;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Store;
using Libplanet.Tx;
using Xunit;

namespace Libplanet.Tests.Blockchain.Policies
{
    public class VolatileStagePolicyTest
    {
        private readonly BlockPolicy<DumbAction> _policy;
        private readonly VolatileStagePolicy<DumbAction> _stagePolicy;
        private readonly DefaultStoreFixture _fx;
        private readonly BlockChain<DumbAction> _chain;
        private readonly Transaction<DumbAction>[] _txs;

        public VolatileStagePolicyTest()
        {
            _policy = new BlockPolicy<DumbAction>();
            _stagePolicy = new VolatileStagePolicy<DumbAction>();
            _fx = new DefaultStoreFixture(memory: true);
            _chain = new BlockChain<DumbAction>(
                _policy,
                _stagePolicy,
                _fx.Store,
                _fx.StateStore,
                _fx.GenesisBlock
            );
            var key = new PrivateKey();
            _txs = Enumerable.Range(0, 5).Select(i =>
                Transaction<DumbAction>.Create(
                    i,
                    key,
                    _fx.GenesisBlock.Hash,
                    Enumerable.Empty<DumbAction>()
                )
            ).ToArray();
        }

        [Fact]
        public void Stage()
        {
            Assert.Empty(_stagePolicy.Iterate(_chain));

            _stagePolicy.Stage(_chain, _txs[0]);
            Assert.Equal(_txs.Take(1), _stagePolicy.Iterate(_chain));

            _stagePolicy.Stage(_chain, _txs[1]);
            Assert.Equal(_txs.Take(2), _stagePolicy.Iterate(_chain));

            // Even if already staged one is passed it throws no exception and silently ignored.
            _stagePolicy.Stage(_chain, _txs[0]);
            Assert.Equal(_txs.Take(2), _stagePolicy.Iterate(_chain));

            _stagePolicy.Stage(_chain, _txs[2]);
            Assert.Equal(_txs.Take(3), _stagePolicy.Iterate(_chain));
        }

        [Fact]
        public void Unstage()
        {
            foreach (Transaction<DumbAction> tx in _txs)
            {
                _stagePolicy.Stage(_chain, tx);
            }

            Assert.Equal(_txs, _stagePolicy.Iterate(_chain));

            _stagePolicy.Unstage(_chain, _txs[0].Id);
            Assert.Equal(_txs.Skip(1), _stagePolicy.Iterate(_chain));

            _stagePolicy.Unstage(_chain, _txs.Last().Id);
            Assert.Equal(_txs.Skip(1).SkipLast(1), _stagePolicy.Iterate(_chain));

            _stagePolicy.Unstage(_chain, _txs[2].Id);
            Assert.Equal(new[] { _txs[1], _txs[3] }, _stagePolicy.Iterate(_chain));
        }

        [Fact]
        public void HasStaged()
        {
            foreach (Transaction<DumbAction> tx in _txs)
            {
                Assert.False(_stagePolicy.HasStaged(_chain, tx.Id, includeUnstaged: false));
                Assert.False(_stagePolicy.HasStaged(_chain, tx.Id, includeUnstaged: true));
            }

            _stagePolicy.Stage(_chain, _txs[0]);

            Assert.True(_stagePolicy.HasStaged(_chain, _txs[0].Id, includeUnstaged: false));
            Assert.True(_stagePolicy.HasStaged(_chain, _txs[0].Id, includeUnstaged: true));
            foreach (Transaction<DumbAction> tx in _txs.Skip(1))
            {
                Assert.False(_stagePolicy.HasStaged(_chain, tx.Id, includeUnstaged: false));
                Assert.False(_stagePolicy.HasStaged(_chain, tx.Id, includeUnstaged: true));
            }

            _stagePolicy.Unstage(_chain, _txs[0].Id);

            Assert.False(_stagePolicy.HasStaged(_chain, _txs[0].Id, includeUnstaged: false));
            Assert.True(_stagePolicy.HasStaged(_chain, _txs[0].Id, includeUnstaged: true));
            foreach (Transaction<DumbAction> tx in _txs.Skip(1))
            {
                Assert.False(_stagePolicy.HasStaged(_chain, tx.Id, includeUnstaged: false));
                Assert.False(_stagePolicy.HasStaged(_chain, tx.Id, includeUnstaged: true));
            }
        }

        [Fact]
        public void Get()
        {
            foreach (Transaction<DumbAction> tx in _txs)
            {
                Assert.Null(_stagePolicy.Get(_chain, tx.Id, includeUnstaged: false));
                Assert.Null(_stagePolicy.Get(_chain, tx.Id, includeUnstaged: true));
            }

            _stagePolicy.Stage(_chain, _txs[0]);

            Assert.Equal(_txs[0], _stagePolicy.Get(_chain, _txs[0].Id, includeUnstaged: false));
            Assert.Equal(_txs[0], _stagePolicy.Get(_chain, _txs[0].Id, includeUnstaged: true));
            foreach (Transaction<DumbAction> tx in _txs.Skip(1))
            {
                Assert.Null(_stagePolicy.Get(_chain, tx.Id, includeUnstaged: false));
                Assert.Null(_stagePolicy.Get(_chain, tx.Id, includeUnstaged: true));
            }

            _stagePolicy.Unstage(_chain, _txs[0].Id);

            Assert.Null(_stagePolicy.Get(_chain, _txs[0].Id, includeUnstaged: false));
            Assert.Equal(_txs[0], _stagePolicy.Get(_chain, _txs[0].Id, includeUnstaged: true));
            foreach (Transaction<DumbAction> tx in _txs.Skip(1))
            {
                Assert.Null(_stagePolicy.Get(_chain, tx.Id, includeUnstaged: false));
                Assert.Null(_stagePolicy.Get(_chain, tx.Id, includeUnstaged: true));
            }
        }
    }
}
