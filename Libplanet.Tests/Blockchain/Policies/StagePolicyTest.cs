using System.Collections.Generic;
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
        protected readonly MemoryStoreFixture _fx;
        protected readonly BlockChain<DumbAction> _chain;
        protected readonly PrivateKey _key;
        protected readonly Transaction<DumbAction>[] _txs;

        protected StagePolicyTest()
        {
            _policy = new BlockPolicy<DumbAction>();
            _fx = new MemoryStoreFixture();
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
            void AssertTxSetEqual(
                IEnumerable<Transaction<DumbAction>> setOne,
                IEnumerable<Transaction<DumbAction>> setTwo)
            {
                Assert.Equal(setOne.OrderBy(tx => tx.Id), setTwo.OrderBy(tx => tx.Id));
            }

            var duplicateNonceTx = Transaction<DumbAction>.Create(
                2,
                _key,
                _fx.GenesisBlock.Hash,
                Enumerable.Empty<DumbAction>()
            );

            Assert.Empty(StagePolicy.Iterate(_chain));

            Assert.True(StagePolicy.Stage(_chain, _txs[0]));
            AssertTxSetEqual(_txs.Take(1), StagePolicy.Iterate(_chain));

            Assert.True(StagePolicy.Stage(_chain, _txs[1]));
            AssertTxSetEqual(_txs.Take(2), StagePolicy.Iterate(_chain));

            // If already staged, no exception is thrown.
            Assert.False(StagePolicy.Stage(_chain, _txs[0]));
            AssertTxSetEqual(_txs.Take(2), StagePolicy.Iterate(_chain));

            // Duplicate nonces can be staged.
            Assert.True(StagePolicy.Stage(_chain, _txs[2]));
            AssertTxSetEqual(_txs.Take(3), StagePolicy.Iterate(_chain));
            Assert.True(StagePolicy.Stage(_chain, duplicateNonceTx));
            AssertTxSetEqual(_txs.Take(3).Append(duplicateNonceTx), StagePolicy.Iterate(_chain));

            // If a transaction had been unstaged, it can be staged again.
            Assert.True(StagePolicy.Unstage(_chain, _txs[2].Id));
            AssertTxSetEqual(_txs.Take(2).Append(duplicateNonceTx), StagePolicy.Iterate(_chain));
            Assert.True(StagePolicy.Stage(_chain, _txs[2]));
            AssertTxSetEqual(
                _txs.Take(2).Append(duplicateNonceTx).Append(_txs[2]),
                StagePolicy.Iterate(_chain));
        }

        [Fact]
        public void Unstage()
        {
            void AssertTxSetEqual(
                IEnumerable<Transaction<DumbAction>> setOne,
                IEnumerable<Transaction<DumbAction>> setTwo)
            {
                Assert.Equal(setOne.OrderBy(tx => tx.Id), setTwo.OrderBy(tx => tx.Id));
            }

            foreach (Transaction<DumbAction> tx in _txs)
            {
                StagePolicy.Stage(_chain, tx);
            }

            AssertTxSetEqual(_txs, StagePolicy.Iterate(_chain));

            Assert.True(StagePolicy.Unstage(_chain, _txs[0].Id));
            AssertTxSetEqual(_txs.Skip(1), StagePolicy.Iterate(_chain));

            // If already unstaged, no exception is thrown.
            Assert.False(StagePolicy.Unstage(_chain, _txs[0].Id));
            AssertTxSetEqual(_txs.Skip(1), StagePolicy.Iterate(_chain));

            Assert.True(StagePolicy.Unstage(_chain, _txs.Last().Id));
            AssertTxSetEqual(_txs.Skip(1).SkipLast(1), StagePolicy.Iterate(_chain));

            Assert.True(StagePolicy.Unstage(_chain, _txs[2].Id));
            AssertTxSetEqual(new[] { _txs[1], _txs[3] }, StagePolicy.Iterate(_chain));
        }

        [Fact]
        public void Ignore()
        {
            // Ignore prevents staging.
            Assert.False(StagePolicy.Ignores(_chain, _txs[0].Id));
            StagePolicy.Ignore(_chain, _txs[0].Id);
            Assert.True(StagePolicy.Ignores(_chain, _txs[0].Id));
            Assert.False(StagePolicy.Stage(_chain, _txs[0]));
            Assert.Null(StagePolicy.Get(_chain, _txs[0].Id));

            // Ignore unstages.
            Assert.False(StagePolicy.Ignores(_chain, _txs[1].Id));
            Assert.True(StagePolicy.Stage(_chain, _txs[1]));
            Assert.Equal(_txs[1], StagePolicy.Get(_chain, _txs[1].Id));
            StagePolicy.Ignore(_chain, _txs[1].Id);
            Assert.True(StagePolicy.Ignores(_chain, _txs[1].Id));
            Assert.Null(StagePolicy.Get(_chain, _txs[1].Id));
        }

        [Fact]
        public void Ignores()
        {
            // By default, nothing is ignored.
            foreach (Transaction<DumbAction> tx in _txs)
            {
                Assert.False(StagePolicy.Ignores(_chain, tx.Id));
            }

            // Staging has no effect on ignores.
            Assert.True(StagePolicy.Stage(_chain, _txs[0]));
            Assert.False(StagePolicy.Ignores(_chain, _txs[0].Id));

            // Unstaging has no effect on ignores.
            Assert.True(StagePolicy.Unstage(_chain, _txs[0].Id));
            Assert.False(StagePolicy.Ignores(_chain, _txs[0].Id));

            // Only Ignore() ignores regardless of staged state.
            StagePolicy.Stage(_chain, _txs[1]);
            StagePolicy.Ignore(_chain, _txs[1].Id);
            StagePolicy.Ignore(_chain, _txs[2].Id);
            Assert.True(StagePolicy.Ignores(_chain, _txs[1].Id));
            Assert.True(StagePolicy.Ignores(_chain, _txs[2].Id));
        }

        [Fact]
        public void Get()
        {
            foreach (Transaction<DumbAction> tx in _txs)
            {
                Assert.Null(StagePolicy.Get(_chain, tx.Id));
            }

            StagePolicy.Stage(_chain, _txs[0]);
            Assert.Equal(_txs[0], StagePolicy.Get(_chain, _txs[0].Id));

            foreach (Transaction<DumbAction> tx in _txs.Skip(1))
            {
                Assert.Null(StagePolicy.Get(_chain, tx.Id));
            }

            StagePolicy.Unstage(_chain, _txs[0].Id);
            Assert.Null(StagePolicy.Get(_chain, _txs[0].Id));

            foreach (Transaction<DumbAction> tx in _txs.Skip(1))
            {
                Assert.Null(StagePolicy.Get(_chain, tx.Id));
            }
        }
    }
}
