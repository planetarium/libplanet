using System.Collections.Generic;
using System.Linq;
using Libplanet.Action;
using Libplanet.Tx;

namespace Libplanet.Store
{
    public class TransactionSet<T> : BaseIndex<TxId, Transaction<T>>
        where T : IAction, new()
    {
        public TransactionSet(IStore store)
            : base(store)
        {
        }

        public override ICollection<TxId> Keys =>
            Store.IterateTransactionIds().ToList();

        public override ICollection<Transaction<T>> Values
        {
            get
            {
                return Keys
                    .Select(k => Store.GetTransaction<T>(k))
                    .ToList();
            }
        }

        public override int Count => (int)Store.CountTransactions();

        public override bool IsReadOnly => true;

        public override Transaction<T> this[TxId key]
        {
            get
            {
                Transaction<T> tx = Store.GetTransaction<T>(key);

                if (tx == null)
                {
                    throw new KeyNotFoundException();
                }

                if (!key.Equals(tx.Id))
                {
                    throw new InvalidTxIdException(
                        tx.Id,
                        $"The given TxId[{key}] was not equal to actual[{tx.Id}].");
                }

                tx.Validate();

                return tx;
            }

            set
            {
                if (!key.Equals(value.Id))
                {
                    throw new InvalidTxIdException(
                        value.Id,
                        $"{value}.id does not match to {key}."
                    );
                }

                value.Validate();
                Store.PutTransaction(value);
            }
        }

        public override bool Contains(KeyValuePair<TxId, Transaction<T>> item)
        {
            return Store.ContainsTransaction(item.Key);
        }

        public override bool ContainsKey(TxId key)
        {
            return Store.ContainsTransaction(key);
        }

        public override bool Remove(TxId key)
        {
            return Store.DeleteTransaction(key);
        }
    }
}
