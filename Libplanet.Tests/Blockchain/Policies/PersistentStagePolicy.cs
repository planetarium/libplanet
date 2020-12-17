using System.Collections.Generic;
using System.Collections.Immutable;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
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
        /// <inheritdoc cref="IStagePolicy{T}.Stage(BlockChain{T}, TxId)"/>
        public void Stage(BlockChain<T> blockChain, TxId id) =>
            blockChain?.Store.StageTransactionIds(ImmutableHashSet.Create(id));

        /// <inheritdoc cref="IStagePolicy{T}.Unstage(BlockChain{T}, TxId)"/>
        public void Unstage(BlockChain<T> blockChain, TxId id) =>
            blockChain?.Store.UnstageTransactionIds(ImmutableHashSet.Create(id));

        /// <inheritdoc cref="IStagePolicy{T}.Iterate(BlockChain{T})"/>
        public IEnumerable<TxId> Iterate(BlockChain<T> blockChain) =>
            blockChain?.Store.IterateStagedTransactionIds();
    }
}
