using System;
using System.Collections.Generic;
using Libplanet.Store;
using Libplanet.Tests.Common.Action;
using Libplanet.Tx;
using Xunit;

namespace Libplanet.Tests.Store
{
    public class AddressTransactionSetTest : IDisposable
    {
        private readonly FileStoreFixture _fx;
        private readonly AddressTransactionSet<BaseAction> _set;

        public AddressTransactionSetTest()
        {
            _fx = new FileStoreFixture();
            _set = new AddressTransactionSet<BaseAction>(_fx.Store);
        }

        [Fact]
        public void CanNotStore()
        {
            Assert.Throws<NotImplementedException>(() =>
            {
                _set[_fx.Address1] = new List<Transaction<BaseAction>>()
                {
                    _fx.Transaction1,
                };
            });
        }

        [Fact]
        public void CanGetItem()
        {
            Assert.Throws<KeyNotFoundException>(() => { var x = _set[_fx.Address1]; });
            _fx.Store.PutTransaction(_fx.Transaction1);
            _fx.Store.AppendAddressTransactionId(_fx.Address1, _fx.Transaction1.Id);

            Assert.Equal(
                new List<Transaction<BaseAction>>()
                { _fx.Transaction1 },
                _set[_fx.Address1]);
        }

        [Fact]
        public void CanIterateItems()
        {
            Assert.Empty(_set);
            Assert.Empty(_set.Keys);
            Assert.Empty(_set.Values);

            _fx.Store.AppendAddressTransactionId(
                _fx.Transaction1.Recipient,
                _fx.Transaction1.Id
            );
            _fx.Store.AppendAddressTransactionId(
                _fx.Transaction2.Recipient,
                _fx.Transaction2.Id
            );
            _fx.Store.PutTransaction(_fx.Transaction1);
            _fx.Store.PutTransaction(_fx.Transaction2);

            Assert.Equal(
                new HashSet<Address>()
                {
                    _fx.Transaction1.Recipient,
                    _fx.Transaction2.Recipient,
                },
                _set.Keys.ToHashSet());
        }

        [Fact]
        public void CanCountItem()
        {
            Assert.Equal(0, _set.Count);

            _fx.Store.AppendAddressTransactionId(_fx.Address1, _fx.Transaction1.Id);
            Assert.Equal(1, _set.Count);

            _fx.Store.AppendAddressTransactionId(_fx.Address2, _fx.Transaction2.Id);
            Assert.Equal(2, _set.Count);
        }

        [Fact]
        public void CanCheckContainsKey()
        {
            Assert.False(_set.ContainsKey(_fx.Address1));

            _fx.Store.AppendAddressTransactionId(_fx.Address1, _fx.Transaction1.Id);

            Assert.True(_set.ContainsKey(_fx.Address1));
        }

        [Fact]
        public void CanNotRemoveItem()
        {
            Assert.Throws<NotImplementedException>(() =>
            {
                _set.Remove(_fx.Address1);
            });
        }

        public void Dispose()
        {
            _fx.Dispose();
        }
    }
}
