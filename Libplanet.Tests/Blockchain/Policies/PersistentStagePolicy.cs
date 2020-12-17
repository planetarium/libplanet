using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Store;
using Libplanet.Tx;

namespace Libplanet.Tests.Blockchain.Policies
{
    /// <summary>
    /// Stores staged transactions in <see cref="IStore"/>.
    /// </summary>
    /// <typeparam name="T">An <see cref="IAction"/> type.  It should match
    /// to <see cref="BlockChain{T}"/>'s type parameter.</typeparam>
    public class PersistentStagePolicy<T> : IStagePolicy<T>
        where T : IAction, new()
    {
        /// <inheritdoc cref="IStagePolicy{T}.Stage(BlockChain{T}, Transaction{T})"/>
        public void Stage(BlockChain<T> blockChain, Transaction<T> transaction)
        {
            if (blockChain?.Store is IStore store)
            {
                store.StageTransactionIds(ImmutableHashSet.Create(transaction.Id));
                store.PutTransaction(transaction);
            }
        }

        /// <inheritdoc cref="IStagePolicy{T}.Unstage(BlockChain{T}, TxId)"/>
        public void Unstage(BlockChain<T> blockChain, TxId id) =>
            blockChain?.Store.UnstageTransactionIds(ImmutableHashSet.Create(id));

        /// <inheritdoc cref="IStagePolicy{T}.HasStaged(BlockChain{T}, TxId, bool)"/>
        public bool HasStaged(BlockChain<T> blockChain, TxId id, bool includeUnstaged)
        {
            if (blockChain?.Store is IStore store)
            {
                return includeUnstaged
                    ? store.ContainsTransaction(id)
                    : store.IterateStagedTransactionIds().Contains(id);
            }

            return false;
        }

        /// <inheritdoc cref="IStagePolicy{T}.Get(BlockChain{T}, TxId, bool)"/>
        public Transaction<T> Get(BlockChain<T> blockChain, TxId id, bool includeUnstaged)
        {
            if (blockChain?.Store is IStore store &&
                store.GetTransaction<T>(id) is Transaction<T> tx)
            {
                if (includeUnstaged)
                {
                    return tx;
                }

                foreach (TxId txId in store.IterateStagedTransactionIds())
                {
                    if (txId.Equals(tx.Id))
                    {
                        return tx;
                    }
                }
            }

            return null;
        }

        /// <inheritdoc cref="IStagePolicy{T}.Iterate(BlockChain{T})"/>
        public IEnumerable<Transaction<T>> Iterate(BlockChain<T> blockChain) =>
            blockChain?.Store is IStore store
                ? store.IterateStagedTransactionIds()
                    .Select(txid => store?.GetTransaction<T>(txid))
                : Enumerable.Empty<Transaction<T>>();
    }
}
