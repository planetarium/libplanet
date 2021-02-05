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
    public abstract class StagePolicyTest
    {
        protected readonly BlockPolicy<DumbAction> _policy;
        protected readonly DefaultStoreFixture _fx;
        protected readonly BlockChain<DumbAction> _chain;
        protected readonly PrivateKey _key;
        protected readonly Transaction<DumbAction>[] _txs;

        protected StagePolicyTest()
        {
            _policy = new BlockPolicy<DumbAction>();
            _fx = new DefaultStoreFixture(memory: true);
            _chain = new BlockChain<DumbAction>(
                _policy,
                StagePolicy,
                _fx.Store,
                _fx.StateStore,
                _fx.GenesisBlock
            );
            _key = new PrivateKey();
            _txs = Enumerable.Range(0, 5).Select(i =>
                Transaction<DumbAction>.Create(
                    i,
                    _key,
                    _fx.GenesisBlock.Hash,
                    Enumerable.Empty<DumbAction>()
                )
            ).ToArray();
        }

        protected abstract IStagePolicy<DumbAction> StagePolicy { get; }

        [Fact]
        public void Stage()
        {
            Assert.Empty(StagePolicy.Iterate(_chain));

            StagePolicy.Stage(_chain, _txs[0]);
            Assert.Equal(_txs.Take(1), StagePolicy.Iterate(_chain));

            StagePolicy.Stage(_chain, _txs[1]);
            Assert.Equal(_txs.Take(2), StagePolicy.Iterate(_chain));

            // Even if already staged one is passed it throws no exception and silently ignored.
            StagePolicy.Stage(_chain, _txs[0]);
            Assert.Equal(_txs.Take(2), StagePolicy.Iterate(_chain));

            StagePolicy.Stage(_chain, _txs[2]);
            Assert.Equal(_txs.Take(3), StagePolicy.Iterate(_chain));

            // If a transaction had been unstaged, it can be staged again.
            StagePolicy.Unstage(_chain, _txs[2].Id);
            Assert.Equal(_txs.Take(2), StagePolicy.Iterate(_chain));
            StagePolicy.Stage(_chain, _txs[2]);
            Assert.Equal(_txs.Take(3), StagePolicy.Iterate(_chain));

            // If a transaction is marked as ignored, it cannot be staged.
            StagePolicy.Ignore(_chain, _txs[3].Id);
            StagePolicy.Stage(_chain, _txs[3]);
            Assert.Null(StagePolicy.Get(_chain, _txs[3].Id, includeUnstaged: true));
        }

        [Fact]
        public void Unstage()
        {
            foreach (Transaction<DumbAction> tx in _txs)
            {
                StagePolicy.Stage(_chain, tx);
            }

            Assert.Equal(_txs, StagePolicy.Iterate(_chain));

            StagePolicy.Unstage(_chain, _txs[0].Id);
            Assert.Equal(_txs.Skip(1), StagePolicy.Iterate(_chain));

            StagePolicy.Unstage(_chain, _txs.Last().Id);
            Assert.Equal(_txs.Skip(1).SkipLast(1), StagePolicy.Iterate(_chain));

            StagePolicy.Unstage(_chain, _txs[2].Id);
            Assert.Equal(new[] { _txs[1], _txs[3] }, StagePolicy.Iterate(_chain));
        }

        [Fact]
        public void Ignore()
        {
            StagePolicy.Ignore(_chain, _txs[0].Id);
            Assert.True(StagePolicy.Ignores(_chain, _txs[0].Id));
            Assert.Null(StagePolicy.Get(_chain, _txs[0].Id, includeUnstaged: true));

            // If a transaction is in the stage, it is not ignored.
            StagePolicy.Stage(_chain, _txs[1]);
            StagePolicy.Ignore(_chain, _txs[1].Id);
            Assert.Equal(_txs[1], StagePolicy.Get(_chain, _txs[1].Id, includeUnstaged: true));
        }

        [Fact]
        public void Ignores()
        {
            foreach (Transaction<DumbAction> tx in _txs)
            {
                Assert.False(StagePolicy.Ignores(_chain, tx.Id));
            }

            StagePolicy.Stage(_chain, _txs[0]);

            Assert.True(StagePolicy.Ignores(_chain, _txs[0].Id));
            foreach (Transaction<DumbAction> tx in _txs.Skip(1))
            {
                Assert.False(StagePolicy.Ignores(_chain, tx.Id));
            }

            StagePolicy.Unstage(_chain, _txs[0].Id);

            Assert.True(StagePolicy.Ignores(_chain, _txs[0].Id));
            foreach (Transaction<DumbAction> tx in _txs.Skip(1))
            {
                Assert.False(StagePolicy.Ignores(_chain, tx.Id));
            }

            StagePolicy.Ignore(_chain, _txs[1].Id);

            Assert.True(StagePolicy.Ignores(_chain, _txs[0].Id));
            Assert.True(StagePolicy.Ignores(_chain, _txs[1].Id));
            foreach (Transaction<DumbAction> tx in _txs.Skip(2))
            {
                Assert.False(StagePolicy.Ignores(_chain, tx.Id));
            }
        }

        [Fact]
        public void Get()
        {
            foreach (Transaction<DumbAction> tx in _txs)
            {
                Assert.Null(StagePolicy.Get(_chain, tx.Id, includeUnstaged: false));
                Assert.Null(StagePolicy.Get(_chain, tx.Id, includeUnstaged: true));
            }

            StagePolicy.Stage(_chain, _txs[0]);

            Assert.Equal(_txs[0], StagePolicy.Get(_chain, _txs[0].Id, includeUnstaged: false));
            Assert.Equal(_txs[0], StagePolicy.Get(_chain, _txs[0].Id, includeUnstaged: true));
            foreach (Transaction<DumbAction> tx in _txs.Skip(1))
            {
                Assert.Null(StagePolicy.Get(_chain, tx.Id, includeUnstaged: false));
                Assert.Null(StagePolicy.Get(_chain, tx.Id, includeUnstaged: true));
            }

            StagePolicy.Unstage(_chain, _txs[0].Id);

            Assert.Null(StagePolicy.Get(_chain, _txs[0].Id, includeUnstaged: false));
            Assert.Equal(_txs[0], StagePolicy.Get(_chain, _txs[0].Id, includeUnstaged: true));
            foreach (Transaction<DumbAction> tx in _txs.Skip(1))
            {
                Assert.Null(StagePolicy.Get(_chain, tx.Id, includeUnstaged: false));
                Assert.Null(StagePolicy.Get(_chain, tx.Id, includeUnstaged: true));
            }
        }
    }
}
