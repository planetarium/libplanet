#nullable enable
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Threading;
using Libplanet.Action;
using Libplanet.Tx;

namespace Libplanet.Blockchain.Policies
{
    /// <summary>
    /// In-memory staged transactions.
    /// </summary>
    /// <typeparam name="T">An <see cref="IAction"/> type.  It should match
    /// to <see cref="BlockChain{T}"/>'s type parameter.</typeparam>
    public class VolatileStagePolicy<T> : IStagePolicy<T>
        where T : IAction, new()
    {
        private readonly ConcurrentDictionary<TxId, Transaction<T>> _set;

        private readonly List<TxId> _queue;

        private readonly ReaderWriterLockSlim _lock;

        /// <summary>
        /// Creates a new <see cref="VolatileStagePolicy{T}"/> instance.
        /// </summary>
        public VolatileStagePolicy()
        {
            _set = new ConcurrentDictionary<TxId, Transaction<T>>();
            _queue = new List<TxId>();
            _lock = new ReaderWriterLockSlim(LockRecursionPolicy.NoRecursion);
        }

        /// <inheritdoc cref="IStagePolicy{T}.Stage(BlockChain{T}, Transaction{T})"/>
        public void Stage(BlockChain<T> blockChain, Transaction<T> transaction)
        {
            bool stageAgain = !_set.TryAdd(transaction.Id, transaction);
            if (stageAgain)
            {
                bool staged;
                _lock.EnterUpgradeableReadLock();
                try
                {
                    staged = _queue.Contains(transaction.Id);
                }
                catch (Exception)
                {
                    _lock.ExitUpgradeableReadLock();
                    throw;
                }

                if (staged)
                {
                    _lock.ExitUpgradeableReadLock();
                    return;
                }
            }

            _lock.EnterWriteLock();
            try
            {
                _queue.Add(transaction.Id);
            }
            finally
            {
                _lock.ExitWriteLock();
                if (stageAgain)
                {
                    _lock.ExitUpgradeableReadLock();
                }
            }
        }

        /// <inheritdoc cref="IStagePolicy{T}.Unstage(BlockChain{T}, TxId)"/>
        public void Unstage(BlockChain<T> blockChain, TxId id)
        {
            _lock.EnterWriteLock();
            _queue.Remove(id);
            _lock.ExitWriteLock();
        }

        /// <inheritdoc cref="IStagePolicy{T}.HasStaged(BlockChain{T}, TxId, bool)"/>
        public bool HasStaged(BlockChain<T> blockChain, TxId id, bool includeUnstaged)
        {
            if (includeUnstaged)
            {
                return _set.ContainsKey(id);
            }

            _lock.EnterReadLock();
            try
            {
                return _queue.Contains(id);
            }
            finally
            {
                _lock.ExitReadLock();
            }
        }

        /// <inheritdoc cref="IStagePolicy{T}.Get(BlockChain{T}, TxId, bool)"/>
        public Transaction<T>? Get(BlockChain<T> blockChain, TxId id, bool includeUnstaged)
        {
            if (_set.TryGetValue(id, out Transaction<T>? tx))
            {
                if (includeUnstaged)
                {
                    return tx;
                }

                _lock.EnterReadLock();
                bool queued;
                try
                {
                    queued = _queue.Contains(tx.Id);
                }
                finally
                {
                    _lock.ExitReadLock();
                }

                return queued ? tx : null;
            }

            return null;
        }

        /// <inheritdoc cref="IStagePolicy{T}.Iterate(BlockChain{T})"/>
        public IEnumerable<Transaction<T>> Iterate(BlockChain<T> blockChain)
        {
            _lock.EnterReadLock();
            TxId[] queue;
            try
            {
                queue = _queue.ToArray();
            }
            finally
            {
                _lock.ExitReadLock();
            }

            foreach (TxId txid in queue)
            {
                if (_set.TryGetValue(txid, out Transaction<T>? tx))
                {
                    yield return tx;
                }
            }
        }
    }
}
