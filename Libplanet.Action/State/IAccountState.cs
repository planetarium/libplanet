using System.Collections.Generic;
using System.Diagnostics.Contracts;
using Bencodex.Types;
using Libplanet.Crypto;
using Libplanet.Types.Assets;
using Libplanet.Types.Consensus;

namespace Libplanet.Action.State
{
    /// <summary>
    /// An interface to fetch account states.
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
    public interface IAccountState
    {
        /// <summary>
        /// The <see cref="Crypto.Address"/> of this <see cref="IAccountState"/>.
        /// </summary>
        Address Address { get; }

        /// <summary>
        /// Gets the account state of the given <paramref name="address"/>.
        /// </summary>
        /// <param name="address">The <see cref="Address"/> referring
        /// the account to get its state.</param>
        /// <returns>The account state of the given <paramref name="address"/>.
        /// If it has never been set to any state it returns <see langword="null"/>
        /// instead.</returns>
        [Pure]
        IValue? GetState(Address address);

        /// <summary>
        /// Gets multiple account states associated with the specified <paramref name="addresses"/>
        /// at once.
        /// </summary>
        /// <param name="addresses">The <see cref="Address"/>es associated with states to get.
        /// </param>
        /// <returns>The states associated to the specified <paramref name="addresses"/>.
        /// Associated values are ordered in the same way to the corresponding
        /// <paramref name="addresses"/>.  Absent states are represented as <see langword="null"/>.
        /// </returns>
        [Pure]
        IReadOnlyList<IValue?> GetStates(IReadOnlyList<Address> addresses);

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
