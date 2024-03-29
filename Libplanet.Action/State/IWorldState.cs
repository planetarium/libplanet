using System.Collections.Generic;
using System.Diagnostics.Contracts;
using Libplanet.Crypto;
using Libplanet.Store.Trie;
using Libplanet.Types.Assets;
using Libplanet.Types.Consensus;

namespace Libplanet.Action.State
{
    /// <summary>
    /// An interface to fetch world states.
    /// <para>It is like a readonly map which is virtually initialized such
    /// that every possible <see cref="Address"/> exists and
    /// is mapped to <see langword="null"/>.  That means that:</para>
    /// <list type="bullet">
    /// <item>
    /// <description>it does not have length,</description>
    /// </item>
    /// <item>
    /// <description>its index getter never throws
    /// <see cref="KeyNotFoundException"/>,
    /// but returns <see langword="null"/> instead, and</description>
    /// </item>
    /// <item>
    /// <description>filling an <see cref="Address"/> with
    /// <see langword="null"/> state cannot be distinguished from
    /// the <see cref="Address"/> having never been set to
    /// any state.</description>
    /// </item>
    /// </list>
    /// </summary>
    public interface IWorldState
    {
        /// <summary>
        /// The <see cref="ITrie"/> of the <see cref="IWorldState"/>.
        /// </summary>
        public ITrie Trie { get; }

        /// <summary>
        /// Whether <see cref="IWorldState"/> is in legacy state or not.
        /// </summary>
        bool Legacy { get; }

        /// <summary>
        /// Gets the <see cref="IAccountState"/> of the given <paramref name="address"/>.
        /// </summary>
        /// <param name="address">The <see cref="Address"/> referring
        /// the world to get its state.</param>
        /// <returns>The <see cref="IAccountState"/> of the given <paramref name="address"/>.
        /// If it has never been set to any state it returns <see langword="null"/>
        /// instead.</returns>
        [Pure]
        IAccountState GetAccountState(Address address);

        /// <summary>
        /// Queries <paramref name="address"/>'s balance of the <paramref name="currency"/>.
        /// </summary>
        /// <param name="address">The owner address to query.</param>
        /// <param name="currency">The currency type to query.</param>
        /// <returns>
        /// The <paramref name="address"/>'s balance of the <paramref name="currency"/>.
        /// </returns>
        [Pure]
        FungibleAssetValue GetBalance(Address address, Currency currency);

        /// <summary>
        /// Returns the total supply of a <paramref name="currency"/>.
        /// </summary>
        /// <param name="currency">The currency type to query.</param>
        /// <returns>The total supply of the <paramref name="currency"/>.
        /// </returns>
        /// <exception cref="TotalSupplyNotTrackableException">Thrown when the total supply of the
        /// given <paramref name="currency"/> is not trackable.</exception>
        /// <seealso cref="Currency.MaximumSupply"/>
        [Pure]
        FungibleAssetValue GetTotalSupply(Currency currency);

        /// <summary>
        /// Returns the validator set.
        /// </summary>
        /// <returns>The validator set of type <see cref="ValidatorSet"/>.
        /// </returns>
        [Pure]
        ValidatorSet GetValidatorSet();
    }
}
