#nullable enable
using System.Collections.Generic;
using Libplanet.Action;
using Libplanet.Tx;

namespace Libplanet.Blockchain.Policies
{
    /// <summary>
    /// The interface to configure a <see cref="BlockChain{T}"/>'s strategy to deal with staged
    /// transactions.
    /// </summary>
    /// <typeparam name="T">An <see cref="IAction"/> type.  It should match
    /// to <see cref="BlockChain{T}"/>'s type parameter.</typeparam>
    public interface IStagePolicy<T>
        where T : IAction, new()
    {
        /// <summary>
        /// Stages a <paramref name="transaction"/>.
        /// </summary>
        /// <param name="blockChain">The chain to stage the <paramref name="transaction"/>.
        /// </param>
        /// <param name="transaction">The <seealso cref="Transaction{T}"/> to be staged.</param>
        /// <remarks>It does not throw any exception even if the <paramref name="transaction"/> has
        /// already been staged.</remarks>
        public void Stage(BlockChain<T> blockChain, Transaction<T> transaction);

        /// <summary>
        /// Removes a transaction <paramref name="id"/> from the stage.
        /// </summary>
        /// <param name="blockChain">The chain to unstage the <paramref name="id"/>.</param>
        /// <param name="id">The <seealso cref="Transaction{T}.Id"/> to remove.</param>
        /// <remarks>It does not throw any exception even if the <paramref name="id"/> has never
        /// been staged.</remarks>
        public void Unstage(BlockChain<T> blockChain, TxId id);

        /// <summary>
        /// Checks if a transaction <paramref name="id"/> has staged.
        /// </summary>
        /// <param name="blockChain">The chain that the stage belongs to.</param>
        /// <param name="id">The <see cref="Transaction{T}.Id"/> to check.</param>
        /// <param name="includeUnstaged">Whether to include transactions that had once staged but
        /// unstaged then.</param>
        /// <returns><c>true</c> if a transaction is staged.  For transactions that had once staged
        /// but unstaged then, it returns <c>true</c> iff <paramref name="includeUnstaged"/> is
        /// turned on; otherwise it returns <c>false</c> for those cases.  For transactions
        /// that have never staged, it returns <c>false</c>.</returns>
        public bool HasStaged(BlockChain<T> blockChain, TxId id, bool includeUnstaged);

        /// <summary>
        /// Gets a staged <see cref="Transaction{T}"/> by its <paramref name="id"/>.
        /// </summary>
        /// <param name="blockChain">The chain that the stage belongs to.</param>
        /// <param name="id">The <see cref="Transaction{T}.Id"/> to get.</param>
        /// <param name="includeUnstaged">Whether to include transactions that had once staged but
        /// unstaged then.</param>
        /// <returns>A staged transaction if found.  If it had never staged <c>null</c> is
        /// returned.</returns>
        public Transaction<T>? Get(BlockChain<T> blockChain, TxId id, bool includeUnstaged);

        /// <summary>
        /// Enumerates all staged transaction IDs.
        /// </summary>
        /// <param name="blockChain">The chain of the stage to enumerate.</param>
        /// <returns>Staged transactions.  The earliest staged transaction goes first,
        /// and the latest staged transaction goes last.</returns>
        public IEnumerable<Transaction<T>> Iterate(BlockChain<T> blockChain);
    }
}
