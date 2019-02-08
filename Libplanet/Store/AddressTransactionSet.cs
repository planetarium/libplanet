using System;
using System.Collections.Generic;
using System.Linq;
using Libplanet.Action;
using Libplanet.Tx;

namespace Libplanet.Store
{
    public class AddressTransactionSet<T>
        : BaseIndex<Address, IEnumerable<Transaction<T>>>
        where T : IAction
    {
        public AddressTransactionSet(IStore store)
            : base(store)
        {
        }

        public override ICollection<Address> Keys
        {
            get
            {
                return Store.IterateAddresses().ToList();
            }
        }

        public override ICollection<IEnumerable<Transaction<T>>> Values
        {
            get
            {
                return Keys.Select(k => this[k]).ToList();
            }
        }

        public override int Count => Store.CountAddresses();

        public override bool IsReadOnly => true;

        public override IEnumerable<Transaction<T>> this[Address key]
        {
            get
            {
                IEnumerable<TxId> txIds = Store.GetAddressTransactionIds(key);
                if (txIds.Count() == 0)
                {
                    throw new KeyNotFoundException();
                }

                var x = txIds
                    .Select(id => Store.GetTransaction<T>(id));

                return txIds
                    .Select(id => Store.GetTransaction<T>(id))
                    .OfType<Transaction<T>>();
            }

            set
            {
                throw new NotSupportedException();
            }
        }

        public override bool Remove(Address key)
        {
            throw new NotSupportedException();
        }
    }
}
