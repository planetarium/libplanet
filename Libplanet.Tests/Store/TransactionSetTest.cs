using System;
using System.Collections.Generic;
using Libplanet.Store;
using Libplanet.Tests.Common.Action;
using Libplanet.Tx;
using Xunit;

namespace Libplanet.Tests.Store
{
    public class TransactionSetTest : IDisposable
    {
        private readonly StoreFixture _fx;
        private readonly TransactionSet<DumbAction> _set;

        public TransactionSetTest()
        {
            _fx = new LiteDBStoreFixture();
            _set = new TransactionSet<DumbAction>(_fx.Store);
        }

        [Fact]
        public void CanStoreItem()
        {
            _set[_fx.Transaction1.Id] = _fx.Transaction1;
            Assert.Equal(_set[_fx.Transaction1.Id], _fx.Transaction1);
        }

        [Fact]
        public void CanIterateItems()
        {
            Assert.Empty(_set);
            Assert.Empty(_set.Keys);
            Assert.Empty(_set.Values);
            _set[_fx.Transaction1.Id] = _fx.Transaction1;
            _set[_fx.Transaction2.Id] = _fx.Transaction2;

            Assert.Equal(
                new HashSet<TxId>()
                {
                    _fx.Transaction1.Id,
                    _fx.Transaction2.Id,
                },
                _set.Keys.ToHashSet());

            Assert.Equal(
                new HashSet<Transaction<DumbAction>>()
                {
                    _fx.Transaction1,
                    _fx.Transaction2,
                },
                _set.Values.ToHashSet());
        }

        [Fact]
        public void CanCountItem()
        {
            Assert.Equal(0, _set.Count);

            _set[_fx.Transaction1.Id] = _fx.Transaction1;
            Assert.Equal(1, _set.Count);

            _set[_fx.Transaction2.Id] = _fx.Transaction2;
            Assert.Equal(2, _set.Count);
        }

        [Fact]
        public void CanDetectInvalidTx()
        {
            Assert.Throws<InvalidTxIdException>(
                () => _set[_fx.Transaction1.Id] = _fx.Transaction2);
        }

        [Fact]
        public void CanCheckContainsKey()
        {
            Assert.False(_set.ContainsKey(_fx.Transaction1.Id));
            Assert.False(_set.ContainsKey(_fx.Transaction2.Id));

            _set[_fx.Transaction1.Id] = _fx.Transaction1;

            Assert.True(_set.ContainsKey(_fx.Transaction1.Id));
            Assert.False(_set.ContainsKey(_fx.Transaction2.Id));
        }

        [Fact]
        public void CanRemoveItem()
        {
            Assert.False(_set.Remove(_fx.Transaction1.Id));
            _set[_fx.Transaction1.Id] = _fx.Transaction1;
            Assert.True(_set.Remove(_fx.Transaction1.Id));
            Assert.Throws<KeyNotFoundException>(() => { var val = _set[_fx.Transaction1.Id]; });
        }

        public void Dispose()
        {
            _fx.Dispose();
        }
    }
}
