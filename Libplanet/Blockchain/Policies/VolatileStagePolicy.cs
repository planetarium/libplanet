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
        // Use it as a set; values are unused.
        private ConcurrentDictionary<TxId, bool> _set;

        private List<TxId> _queue;

        /// <summary>
        /// Creates a new <see cref="VolatileStagePolicy{T}"/> instance.
        /// </summary>
        public VolatileStagePolicy()
        {
            _set = new ConcurrentDictionary<TxId, bool>();
            _queue = new List<TxId>();
        }

        /// <inheritdoc cref="IStagePolicy{T}.Stage(BlockChain{T}, TxId)"/>
        public void Stage(BlockChain<T> blockChain, TxId id)
        {
            if (_set.TryAdd(id, false))
            {
                _queue.Add(id);
            }
        }

        /// <inheritdoc cref="IStagePolicy{T}.Unstage(BlockChain{T}, TxId)"/>
        public void Unstage(BlockChain<T> blockChain, TxId id)
        {
            if (_set.TryRemove(id, out _))
            {
                _queue.Remove(id);
            }
        }

        /// <inheritdoc cref="IStagePolicy{T}.Iterate(BlockChain{T})"/>
        public IEnumerable<TxId> Iterate(BlockChain<T> blockChain) =>
            _queue;
    }
}
