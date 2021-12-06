#nullable enable
using System.Collections.Generic;
using Libplanet.Action;
using Libplanet.Tx;

namespace Libplanet.Blockchain.Policies
{
    /// <summary>
    /// An interface to configure a <see cref="BlockChain{T}"/>'s strategy to deal with staged
    /// transactions.
    /// </summary>
    /// <typeparam name="T">An <see cref="IAction"/> type.  It should match
    /// the <see cref="BlockChain{T}"/>'s type parameter.</typeparam>
    /// <remarks>
    /// Every operation of an implementation of this <c>interface</c> must be thread-safe.
    /// </remarks>
    public interface IStagePolicy<T>
        where T : IAction, new()
    {
        /// <summary>
        /// Stages a <paramref name="transaction"/>.
        /// </summary>
        /// <param name="blockChain">The chain to stage the <paramref name="transaction"/>.
        /// </param>
        /// <param name="transaction">The <seealso cref="Transaction{T}"/> to be staged.</param>
        /// <remarks>
        /// <para>
        /// This does not throw any exception regardless of whether <paramref name="transaction"/>
        /// was successfully staged or not.
        /// </para>
        /// <para>
        /// If the <see cref="Transaction{T}.Id"/> of <paramref name="transaction"/> is marked
        /// as ignored, <paramref name="transaction"/> will not be staged.
        /// </para>
        /// </remarks>
        public void Stage(BlockChain<T> blockChain, Transaction<T> transaction);

        /// <summary>
        /// Unstages a transaction <paramref name="id"/>.
        /// </summary>
        /// <param name="blockChain">The chain to unstage the <paramref name="id"/>.</param>
        /// <param name="id">The <seealso cref="Transaction{T}.Id"/> to unstage.</param>
        /// <remarks>
        /// This does not throw any exception regardless of whether <paramref name="id"/> was
        /// successfully unstaged or not.
        /// </remarks>
        public void Unstage(BlockChain<T> blockChain, TxId id);

        /// <summary>
        /// Marks given <paramref name="id"/> as ignored.
        /// </summary>
        /// <param name="blockChain">The chain that the stage belongs to.</param>
        /// <param name="id">The <see cref="Transaction{T}.Id"/> to ignore.</param>
        /// <remarks>
        /// If the <see cref="Transaction{T}"/> associated with <paramref name="id"/> is already
        /// staged, this also unstages the <see cref="Transaction{T}"/>.
        /// </remarks>
        public void Ignore(BlockChain<T> blockChain, TxId id);

        /// <summary>
        /// Checks if given <paramref name="id"/> is marked as ignored.
        /// </summary>
        /// <param name="blockChain">The chain that the stage belongs to.</param>
        /// <param name="id">The <see cref="Transaction{T}.Id"/> to check.</param>
        /// <returns><c>true</c> if <paramref name="id"/> is marked as ignored,
        /// <c>false</c> otherwise.</returns>
        public bool Ignores(BlockChain<T> blockChain, TxId id);

        /// <summary>
        /// Retrieves a staged <see cref="Transaction{T}"/> by its <paramref name="id"/>.
        /// </summary>
        /// <param name="blockChain">The chain that the stage belongs to.</param>
        /// <param name="id">The <see cref="Transaction{T}.Id"/> to get.</param>
        /// <param name="includeUnstaged">Whether to include transactions that had once staged but
        /// unstaged then.</param>
        /// <returns>The staged <see cref="Transaction{T}"/> associated with <paramref name="id"/>
        /// if found,  <c>null</c> otherwise.</returns>
        public Transaction<T>? Get(BlockChain<T> blockChain, TxId id, bool includeUnstaged);

        /// <summary>
        /// Enumerates all staged <see cref="Transaction{T}"/>s.
        /// </summary>
        /// <returns>All staged transactions.  No ordering is guaranteed.</returns>
        public IEnumerable<Transaction<T>> Iterate();

        /// <summary>
        /// Calculates the next nonce according for given <paramref name="address"/>.
        /// </summary>
        /// <param name="address">The <see cref="Address"/> to calculate the next nonce for.
        /// </param>
        /// <param name="minedTxs">The number of mined <see cref="Transaction{T}"/>s by
        /// <paramref name="address"/> included in the <see cref="BlockChain{T}"/>.</param>
        /// <returns>The next appropriate nonce for <paramref name="address"/>.</returns>
        public long GetNextTxNonce(Address address, long minedTxs);
    }
}
