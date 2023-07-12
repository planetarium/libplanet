using System.Collections.Generic;
using Libplanet.Common.Crypto;
using Libplanet.Common.Types.Tx;

namespace Libplanet.Blockchain.Policies
{
    /// <summary>
    /// An interface to configure a <see cref="BlockChain"/>'s strategy to deal with staged
    /// transactions.
    /// </summary>
    /// <remarks>
    /// Every operation of an implementation of this <c>interface</c> must be thread-safe.
    /// </remarks>
    public interface IStagePolicy
    {
        /// <summary>
        /// Stages a <paramref name="transaction"/>.
        /// </summary>
        /// <param name="blockChain">The <see cref="BlockChain"/> that the stage belongs to.
        /// </param>
        /// <param name="transaction">The <seealso cref="Transaction"/> to be staged.</param>
        /// <returns><see langword="true"/> if staging was successful,
        /// <see langword="false"/> otherwise.</returns>
        /// <remarks>
        /// <para>
        /// This does not throw any exception regardless of whether <paramref name="transaction"/>
        /// was successfully staged or not.
        /// </para>
        /// <para>
        /// If the <see cref="Transaction.Id"/> of <paramref name="transaction"/> is marked
        /// as ignored, <paramref name="transaction"/> will not be staged.
        /// </para>
        /// </remarks>
        public bool Stage(BlockChain blockChain, Transaction transaction);

        /// <summary>
        /// Unstages a transaction <paramref name="id"/>.
        /// </summary>
        /// <param name="blockChain">The <see cref="BlockChain"/> that the stage belongs to.
        /// </param>
        /// <param name="id">The <seealso cref="Transaction.Id"/> to unstage.</param>
        /// <returns><see langword="true"/> if unstaging was successful,
        /// <see langword="false"/> otherwise.</returns>
        /// <remarks>
        /// This does not throw any exception regardless of whether <paramref name="id"/> was
        /// successfully unstaged or not.
        /// </remarks>
        public bool Unstage(BlockChain blockChain, TxId id);

        /// <summary>
        /// Marks given <paramref name="id"/> as ignored.
        /// </summary>
        /// <param name="blockChain">The <see cref="BlockChain"/> that the stage belongs to.
        /// </param>
        /// <param name="id">The <see cref="Transaction.Id"/> to ignore.</param>
        /// <remarks>
        /// If the <see cref="Transaction"/> associated with <paramref name="id"/> is already
        /// staged, this also unstages the <see cref="Transaction"/>.
        /// </remarks>
        public void Ignore(BlockChain blockChain, TxId id);

        /// <summary>
        /// Checks if given <paramref name="id"/> is marked as ignored.
        /// </summary>
        /// <param name="blockChain">The <see cref="BlockChain"/> that the stage belongs to.
        /// </param>
        /// <param name="id">The <see cref="Transaction.Id"/> to check.</param>
        /// <returns><see langword="true"/> if <paramref name="id"/> is marked as ignored,
        /// <see langword="false"/> otherwise.</returns>
        public bool Ignores(BlockChain blockChain, TxId id);

        /// <summary>
        /// Retrieves a staged <see cref="Transaction"/> by its <paramref name="id"/>.
        /// </summary>
        /// <param name="blockChain">The <see cref="BlockChain"/> that the stage belongs to.
        /// </param>
        /// <param name="id">The <see cref="Transaction.Id"/> to get.</param>
        /// <param name="filtered">Whether to filter masked staged <see cref="Transaction"/>s
        /// or not.  Set to <see langword="true"/> by default.</param>
        /// <returns>The staged <see cref="Transaction"/> associated with <paramref name="id"/>
        /// if found,  <see langword="null"/> otherwise.</returns>
        public Transaction? Get(BlockChain blockChain, TxId id, bool filtered = true);

        /// <summary>
        /// Enumerates all staged <see cref="Transaction"/>s.
        /// </summary>
        /// <param name="blockChain">The <see cref="BlockChain"/> that the stage belongs to.
        /// </param>
        /// <param name="filtered">Whether to filter masked staged <see cref="Transaction"/>s
        /// or not.  Set to <see langword="true"/> by default.</param>
        /// <returns>All staged transactions.  No ordering is guaranteed.</returns>
        public IEnumerable<Transaction> Iterate(BlockChain blockChain, bool filtered = true);

        /// <summary>
        /// Calculates the next nonce according for given <paramref name="address"/>.
        /// </summary>
        /// <param name="blockChain">The <see cref="BlockChain"/> that the stage belongs to.
        /// </param>
        /// <param name="address">The <see cref="Address"/> to calculate the next nonce for.
        /// </param>
        /// <returns>The next appropriate nonce for <paramref name="address"/>.</returns>
        public long GetNextTxNonce(BlockChain blockChain, Address address);
    }
}
