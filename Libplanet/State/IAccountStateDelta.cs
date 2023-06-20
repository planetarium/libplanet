using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Numerics;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Assets;
using Libplanet.Blocks;
using Libplanet.Consensus;

namespace Libplanet.State
{
    /// <summary>
    /// An interface to manipulate account states with
    /// maintaining the set of <see cref="UpdatedAddresses"/>.
    /// <para>It is like a map which is virtually initialized such
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
    /// <remarks>
    /// This interface is immutable.  <see cref="SetState(Address, IValue)"/>
    /// method does not manipulate the instance, but returns a new
    /// <see cref="IAccountStateDelta"/> instance with updated states.
    /// </remarks>
    public interface IAccountStateDelta : IAccountStateView
    {
        IDelta Delta { get; }

        /// <summary>
        /// <para>
        /// A set of <seealso cref="Address"/>es where each <see cref="Address"/> has
        /// either its state changed or its <see cref="FungibleAssetValue"/> changed.
        /// </para>
        /// <para>
        /// This is equivalent to the union of <see cref="StateUpdatedAddresses"/> and
        /// <see cref="FungibleUpdatedAddresses"/>.
        /// </para>
        /// </summary>
        /// <seealso cref="StateUpdatedAddresses"/>
        /// <seealso cref="FungibleUpdatedAddresses"/>
        [Pure]
        IImmutableSet<Address> UpdatedAddresses { get; }

        /// <summary>
        /// <para>
        /// A set of <seealso cref="Address"/>es where each <see cref="Address"/> has
        /// its state changed.
        /// </para>
        /// <para>
        /// This is equivalent to the set of keys in <see cref="StatesDelta"/>.
        /// </para>
        /// </summary>
        /// <seealso cref="StatesDelta"/>
        [Pure]
        IImmutableSet<Address> StateUpdatedAddresses { get; }

        /// <summary>
        /// A dictionary representing changed states for each <see cref="Address"/>.
        /// </summary>
        [Pure]
        IImmutableDictionary<Address, IValue> StatesDelta { get; }

        /// <summary>
        /// <para>
        /// A set of <see cref="Address"/>es where each <see cref="Address"/> has
        /// its <see cref="FungibleAssetValue"/> changed.
        /// </para>
        /// <para>
        /// This is equivalent to the set of <see cref="Address"/>es that appear in
        /// <see cref="UpdatedFungibleAssets"/>, and in turn those that appear in
        /// <see cref="FungiblesDelta"/>.
        /// </para>
        /// </summary>
        /// <seealso cref="UpdatedFungibleAssets"/>
        /// <seealso cref="FungiblesDelta"/>
        [Pure]
        IImmutableSet<Address> FungibleUpdatedAddresses { get; }

        /// <summary>
        /// <para>
        /// A set of <see cref="Address"/> and <see cref="Currency"/> pairs where
        /// each pair has its asoociated <see cref="FungibleAssetValue"/> changed.
        /// </para>
        /// <para>
        /// For example, if A transfers 10 FOO to B and B transfers 20 BAR to C,
        /// <see cref="UpdatedFungibleAssets"/> become likes
        /// <c>{ (A, FOO), (B, FOO), (B, BAR), (C, BAR) }</c>.
        /// </para>
        /// <para>
        /// Furthermore, this represents any pair that has been "touched", i.e.,
        /// if A transfers 10 FOO to B and B transfers 10 FOO back to A,
        /// this becomes <c>{ (A, FOO), (B, BAR) }</c> not an empty set.
        /// </para>
        /// <para>
        /// This is equivalent to the keys of <see cref="FungiblesDelta"/>.
        /// </para>
        /// </summary>
        /// <seealso cref="FungibleUpdatedAddresses"/>
        /// <seealso cref="FungiblesDelta"/>
        [Pure]
        IImmutableSet<(Address, Currency)> UpdatedFungibleAssets { get; }

        /// <summary>
        /// A dictionary representing the changed <see cref="FungibleAssetValue"/>s for each
        /// <see cref="Address"/> and <see cref="Currency"/> pair.
        /// </summary>
        /// <seealso cref="UpdatedFungibleAssets"/>
        [Pure]
        IImmutableDictionary<(Address, Currency), BigInteger> FungiblesDelta { get; }

        /// <summary>
        /// A set of <see cref="Address"/>es and associated sets of <see cref="Currency"/>
        /// that have been updated since the previous <see cref="Block"/>'s output states.
        /// </summary>
        /// <remarks>
        /// Due to a bug in old implementation, this does not work properly under
        /// <see cref="Block.ProtocolVersion"/> zero.
        /// </remarks>
        [Pure]
        IImmutableDictionary<Address, IImmutableSet<Currency>> TotalUpdatedFungibleAssets { get; }

        /// <summary>
        /// <para>
        /// The set of <see cref="Currency">Currencies</see> with their total supplies updated.
        /// </para>
        /// <para>
        /// This is equivalent to the set of keys in <see cref="TotalSuppliesDelta"/>.
        /// </para>
        /// </summary>
        /// <seealso cref="TotalSuppliesDelta"/>
        [Pure]
        IImmutableSet<Currency> UpdatedTotalSupplyCurrencies { get; }

        /// <summary>
        /// A dictionary representing the changed total supply for each <see cref="Currency"/>.
        /// </summary>
        /// <seealso cref="UpdatedTotalSupplyCurrencies"/>
        [Pure]
        IImmutableDictionary<Currency, BigInteger> TotalSuppliesDelta { get; }

        /// <summary>
        /// A <see cref="ValidatorSet"/> representing a change in <see cref="ValidatorSet"/>,
        /// if not <see langword="null"/>.
        /// </summary>
        ValidatorSet? ValidatorSetDelta { get; }

        /// <summary>
        /// Gets a new instance that the account state of the given
        /// <paramref name="address"/> is set to the given
        /// <paramref name="state"/>.
        /// </summary>
        /// <param name="address">The <see cref="Address"/> referring
        /// the account to set its state.</param>
        /// <param name="state">The new state to fill the account with.</param>
        /// <returns>A new <see cref="IAccountStateDelta"/> instance that
        /// the account state of the given <paramref name="address"/>
        /// is set to the given <paramref name="state"/>.</returns>
        /// <remarks>
        /// This method method does not manipulate the instance,
        /// but returns a new <see cref="IAccountStateDelta"/> instance
        /// with updated states instead.
        /// </remarks>
        [Pure]
        IAccountStateDelta SetState(Address address, IValue state);

        /// <summary>
        /// Mints the fungible asset <paramref name="value"/> (i.e., in-game monetary),
        /// and give it to the <paramref name="recipient"/>.
        /// </summary>
        /// <param name="context">The <see cref="IActionContext"/> of the <see cref="IAction"/>
        /// executing this method.</param>
        /// <param name="recipient">The address who receives the minted asset.</param>
        /// <param name="value">The asset value to mint.</param>
        /// <returns>A new <see cref="IAccountStateDelta"/> instance that the given <paramref
        /// name="value"/> is added to <paramref name="recipient"/>'s balance.</returns>
        /// <exception cref="ArgumentOutOfRangeException">Thrown when the <paramref name="value"/>
        /// is less than or equal to 0.</exception>
        /// <exception cref="CurrencyPermissionException">Thrown when a transaction signer
        /// (or a miner in case of block actions) is not a member of the <see
        /// cref="FungibleAssetValue.Currency"/>'s <see cref="Currency.Minters"/>.</exception>
        /// <exception cref="SupplyOverflowException">Thrown when the sum of the
        /// <paramref name="value"/> to be minted and the current total supply amount of the
        /// <see cref="FungibleAssetValue.Currency"/> exceeds the
        /// <see cref="Currency.MaximumSupply"/>.</exception>
        [Pure]
        IAccountStateDelta MintAsset(
            IActionContext context, Address recipient, FungibleAssetValue value);

        /// <summary>
        /// Transfers the fungible asset <paramref name="value"/> (i.e., in-game monetary)
        /// from the <paramref name="sender"/> to the <paramref name="recipient"/>.
        /// </summary>
        /// <param name="context">The <see cref="IActionContext"/> of the <see cref="IAction"/>
        /// executing this method.</param>
        /// <param name="sender">The address who sends the fungible asset to
        /// the <paramref name="recipient"/>.</param>
        /// <param name="recipient">The address who receives the fungible asset from
        /// the <paramref name="sender"/>.</param>
        /// <param name="value">The asset value to transfer.</param>
        /// <param name="allowNegativeBalance">Turn on to allow <paramref name="sender"/>'s balance
        /// less than zero.  Turned off by default.</param>
        /// <returns>A new <see cref="IAccountStateDelta"/> instance that the given <paramref
        /// name="value"/>  is subtracted from <paramref name="sender"/>'s balance and added to
        /// <paramref name="recipient"/>'s balance.</returns>
        /// <exception cref="ArgumentOutOfRangeException">Thrown when the <paramref name="value"/>
        /// is less than or equal to zero.</exception>
        /// <exception cref="InsufficientBalanceException">Thrown when the <paramref name="sender"/>
        /// has insufficient balance than <paramref name="value"/> to transfer and
        /// the <paramref name="allowNegativeBalance"/> option is turned off.</exception>
        [Pure]
        IAccountStateDelta TransferAsset(
            IActionContext context,
            Address sender,
            Address recipient,
            FungibleAssetValue value,
            bool allowNegativeBalance = false
        );

        /// <summary>
        /// Burns the fungible asset <paramref name="value"/> (i.e., in-game monetary) from
        /// <paramref name="owner"/>'s balance.
        /// </summary>
        /// <param name="context">The <see cref="IActionContext"/> of the <see cref="IAction"/>
        /// executing this method.</param>
        /// <param name="owner">The address who owns the fungible asset to burn.</param>
        /// <param name="value">The fungible asset <paramref name="value"/> to burn.</param>
        /// <returns>A new <see cref="IAccountStateDelta"/> instance that the given <paramref
        /// name="value"/> is subtracted from <paramref name="owner"/>'s balance.</returns>
        /// <exception cref="ArgumentOutOfRangeException">Thrown when the <paramref name="value"/>
        /// is less than or equal to zero.</exception>
        /// <exception cref="CurrencyPermissionException">Thrown when a transaction signer
        /// (or a miner in case of block actions) is not a member of the <see
        /// cref="FungibleAssetValue.Currency"/>'s <see cref="Currency.Minters"/>.</exception>
        /// <exception cref="InsufficientBalanceException">Thrown when the <paramref name="owner"/>
        /// has insufficient balance than <paramref name="value"/> to burn.</exception>
        [Pure]
        IAccountStateDelta BurnAsset(
            IActionContext context, Address owner, FungibleAssetValue value);
    }
}
