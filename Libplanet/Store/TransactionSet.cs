using System.Collections.Generic;
using System.Diagnostics;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Threading;
using Libplanet.Action;
using Libplanet.Tx;

namespace Libplanet.Store
{
    public class TransactionSet<T> : BaseIndex<TxId, Transaction<T>>
        where T : IAction, new()
    {
        private readonly ReaderWriterLockSlim _lock;

        public TransactionSet(IStore store)
            : base(store)
        {
            _lock = new ReaderWriterLockSlim(LockRecursionPolicy.NoRecursion);
        }

        public override ICollection<TxId> Keys =>
            Store.IterateTransactionIds().ToList();

        public override ICollection<Transaction<T>> Values
        {
            get
            {
                _lock.EnterReadLock();
                List<Transaction<T>> txs = Keys
                    .Select(k => Store.GetTransaction<T>(k))
                    .ToList();
                _lock.ExitReadLock();
                return txs;
            }
        }

        public override int Count
        {
            get
            {
                _lock.EnterReadLock();
                int count = (int)Store.CountTransactions();
                _lock.ExitReadLock();
                return count;
            }
        }

        public override bool IsReadOnly => true;

        public override Transaction<T> this[TxId key]
        {
            get
            {
                _lock.EnterReadLock();
                Transaction<T> tx = Store.GetTransaction<T>(key);
                _lock.ExitReadLock();

                if (tx == null)
                {
                    throw new KeyNotFoundException();
                }

                Trace.Assert(key.Equals(tx?.Id));
                tx?.Validate();

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
                _lock.EnterWriteLock();
                Store.PutTransaction(value);
                _lock.ExitWriteLock();
            }
        }

        public override bool Contains(KeyValuePair<TxId, Transaction<T>> item)
        {
            _lock.EnterReadLock();
            bool contains = Store.IterateTransactionIds().Contains(item.Key);
            _lock.ExitReadLock();
            return contains;
        }

        public override bool ContainsKey(TxId key)
        {
            _lock.EnterReadLock();
            Transaction<T> tx = Store.GetTransaction<T>(key);
            _lock.ExitReadLock();
            return !(tx is null);
        }

        public override bool Remove(TxId key)
        {
            _lock.EnterWriteLock();
            bool removed = Store.DeleteTransaction(key);
            _lock.ExitWriteLock();
            return removed;
        }
    }
}
