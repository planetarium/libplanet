#nullable enable
using System.Collections.Concurrent;
using System.Collections.Generic;
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
        private ConcurrentDictionary<TxId, Transaction<T>> _set;

        private List<TxId> _queue;

        /// <summary>
        /// Creates a new <see cref="VolatileStagePolicy{T}"/> instance.
        /// </summary>
        public VolatileStagePolicy()
        {
            _set = new ConcurrentDictionary<TxId, Transaction<T>>();
            _queue = new List<TxId>();
        }

        /// <inheritdoc cref="IStagePolicy{T}.Stage(BlockChain{T}, Transaction{T})"/>
        public void Stage(BlockChain<T> blockChain, Transaction<T> transaction)
        {
            if (_set.TryAdd(transaction.Id, transaction))
            {
                _queue.Add(transaction.Id);
            }
        }

        /// <inheritdoc cref="IStagePolicy{T}.Unstage(BlockChain{T}, TxId)"/>
        public void Unstage(BlockChain<T> blockChain, TxId id) =>
            _queue.Remove(id);

        /// <inheritdoc cref="IStagePolicy{T}.HasStaged(BlockChain{T}, TxId, bool)"/>
        public bool HasStaged(BlockChain<T> blockChain, TxId id, bool includeUnstaged) =>
            includeUnstaged ? _set.ContainsKey(id) : _queue.Contains(id);

        /// <inheritdoc cref="IStagePolicy{T}.Get(BlockChain{T}, TxId, bool)"/>
        public Transaction<T>? Get(BlockChain<T> blockChain, TxId id, bool includeUnstaged)
        {
            if (_set.TryGetValue(id, out Transaction<T>? tx))
            {
                return includeUnstaged || _queue.Contains(tx.Id) ? tx : null;
            }

            return null;
        }

        /// <inheritdoc cref="IStagePolicy{T}.Iterate(BlockChain{T})"/>
        public IEnumerable<Transaction<T>> Iterate(BlockChain<T> blockChain)
        {
            foreach (TxId txid in _queue)
            {
                if (_set.TryGetValue(txid, out Transaction<T>? tx))
                {
                    yield return tx;
                }
            }
        }
    }
}
