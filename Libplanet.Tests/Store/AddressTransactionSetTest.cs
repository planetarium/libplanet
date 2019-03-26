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
            _set = new AddressTransactionSet<BaseAction>(
                _fx.Store, _fx.StoreNamespace
            );
        }

        [Fact]
        public void CanNotStore()
        {
            Assert.Throws<NotSupportedException>(() =>
            {
                _set[_fx.Address1] = new List<Transaction<BaseAction>>()
                {
                    _fx.Transaction1,
                };
            });
        }

        [Fact]
        public void GetItem()
        {
            Assert.Throws<KeyNotFoundException>(() => { var x = _set[_fx.Address1]; });
            _fx.Store.PutTransaction(_fx.Transaction1);
            _fx.Store.AppendAddressTransactionId(
                _fx.StoreNamespace,
                _fx.Address1,
                _fx.Transaction1.Id
            );

            Assert.Equal(
                new List<Transaction<BaseAction>>()
                { _fx.Transaction1 },
                _set[_fx.Address1]);
        }

        [Fact]
        public void IterateItems()
        {
            Assert.Empty(_set);
            Assert.Empty(_set.Keys);
            Assert.Empty(_set.Values);

            foreach (Address a in _fx.Transaction1.UpdatedAddresses)
            {
                _fx.Store.AppendAddressTransactionId(
                    _fx.StoreNamespace,
                    a,
                    _fx.Transaction1.Id
                );
            }

            foreach (Address a in _fx.Transaction2.UpdatedAddresses)
            {
                _fx.Store.AppendAddressTransactionId(
                    _fx.StoreNamespace,
                    a,
                    _fx.Transaction2.Id
                );
            }

            _fx.Store.PutTransaction(_fx.Transaction1);
            _fx.Store.PutTransaction(_fx.Transaction2);

            Assert.Equal(
                _fx.Transaction1.UpdatedAddresses.Union(
                    _fx.Transaction2.UpdatedAddresses
                ),
                _set.Keys.ToHashSet()
            );
        }

        [Fact]
        public void CanCountItem()
        {
            Assert.Equal(0, _set.Count);

            _fx.Store.AppendAddressTransactionId(
                _fx.StoreNamespace,
                _fx.Address1,
                _fx.Transaction1.Id
            );
            Assert.Equal(1, _set.Count);

            _fx.Store.AppendAddressTransactionId(
                _fx.StoreNamespace,
                _fx.Address2,
                _fx.Transaction2.Id
            );
            Assert.Equal(2, _set.Count);
        }

        [Fact]
        public void CanCheckContainsKey()
        {
            Assert.False(_set.ContainsKey(_fx.Address1));

            _fx.Store.AppendAddressTransactionId(
                _fx.StoreNamespace,
                _fx.Address1,
                _fx.Transaction1.Id
            );

            Assert.True(_set.ContainsKey(_fx.Address1));
        }

        [Fact]
        public void CanNotRemoveItem()
        {
            Assert.Throws<NotSupportedException>(() =>
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
