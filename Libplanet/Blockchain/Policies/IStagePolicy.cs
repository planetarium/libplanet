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
        /// Stages a transaction <paramref name="id"/>.
        /// </summary>
        /// <param name="blockChain">The chain to stage the <paramref name="id"/>.</param>
        /// <param name="id">The <seealso cref="Transaction{T}.Id"/> to be staged.</param>
        /// <remarks>It does not throw any exception even if the <paramref name="id"/> has already
        /// been staged.</remarks>
        public void Stage(BlockChain<T> blockChain, TxId id);

        /// <summary>
        /// Removes a transaction <paramref name="id"/> from the stage.
        /// </summary>
        /// <param name="blockChain">The chain to unstage the <paramref name="id"/>.</param>
        /// <param name="id">The <seealso cref="Transaction{T}.Id"/> to remove.</param>
        /// <remarks>It does not throw any exception even if the <paramref name="id"/> has never
        /// been staged.</remarks>
        public void Unstage(BlockChain<T> blockChain, TxId id);

        /// <summary>
        /// Enumerates all staged transaction IDs.
        /// </summary>
        /// <param name="blockChain">The chain of the stage to enumerate.</param>
        /// <returns>Staged transaction IDs.  The earliest staged transaction ID goes first,
        /// and the latest staged transaction ID goes last.</returns>
        public IEnumerable<TxId> Iterate(BlockChain<T> blockChain);
    }
}
