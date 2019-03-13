using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using Libplanet.Action;
using Libplanet.Tx;

namespace Libplanet.Store
{
    public class TransactionSet<T> : BaseIndex<TxId, Transaction<T>>
        where T : IAction
    {
        public TransactionSet(IStore store, string @namespace)
            : base(store, @namespace)
        {
        }

        public override ICollection<TxId> Keys
        {
            get
            {
                return Store.IterateTransactionIds(StoreNamespace).ToList();
            }
        }

        public override ICollection<Transaction<T>> Values
        {
            get
            {
                return Keys
                    .Select(k => Store.GetTransaction<T>(StoreNamespace, k))
                    .OfType<Transaction<T>>()
                    .ToList();
            }
        }

        public override int Count => Store.CountTransactions(StoreNamespace);

        public override bool IsReadOnly => true;

        public override Transaction<T> this[TxId key]
        {
            get
            {
                Transaction<T> tx = Store.GetTransaction<T>(
                    StoreNamespace, key
                );

                if (tx == null)
                {
                    throw new KeyNotFoundException();
                }

                Trace.Assert(tx?.Id == key);
                tx?.Validate();

                return tx;
            }

            set
            {
                if (value.Id != key)
                {
                    throw new InvalidTxIdException(
                        value.Id,
                        $"{value}.id does not match to {key}."
                    );
                }

                value.Validate();
                Store.PutTransaction(StoreNamespace, value);
            }
        }

        public override bool Remove(TxId key)
        {
            return Store.DeleteTransaction(StoreNamespace, key);
        }
    }
}
