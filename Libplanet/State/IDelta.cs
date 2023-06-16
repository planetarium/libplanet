using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Numerics;
using Bencodex.Types;
using Libplanet.Assets;
using Libplanet.Consensus;

namespace Libplanet.State
{
    public interface IDelta
    {
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
        /// This is equivalent to the set of keys in <see cref="States"/>.
        /// </para>
        /// </summary>
        /// <seealso cref="States"/>
        [Pure]
        IImmutableSet<Address> StateUpdatedAddresses { get; }

        /// <summary>
        /// A dictionary representing changed states for each <see cref="Address"/>.
        /// </summary>
        [Pure]
        IImmutableDictionary<Address, IValue> States { get; }

        /// <summary>
        /// <para>
        /// A set of <see cref="Address"/>es where each <see cref="Address"/> has
        /// its <see cref="FungibleAssetValue"/> changed.
        /// </para>
        /// <para>
        /// This is equivalent to the set of <see cref="Address"/>es that appear in
        /// <see cref="UpdatedFungibleAssets"/>, and in turn those that appear in
        /// <see cref="Fungibles"/>.
        /// </para>
        /// </summary>
        /// <seealso cref="UpdatedFungibleAssets"/>
        /// <seealso cref="Fungibles"/>
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
        /// This is equivalent to the keys of <see cref="Fungibles"/>.
        /// </para>
        /// </summary>
        /// <seealso cref="FungibleUpdatedAddresses"/>
        /// <seealso cref="Fungibles"/>
        [Pure]
        IImmutableSet<(Address, Currency)> UpdatedFungibleAssets { get; }

        /// <summary>
        /// A dictionary representing the changed <see cref="FungibleAssetValue"/>s for each
        /// <see cref="Address"/> and <see cref="Currency"/> pair.
        /// </summary>
        /// <seealso cref="UpdatedFungibleAssets"/>
        [Pure]
        IImmutableDictionary<(Address, Currency), BigInteger> Fungibles { get; }

        /// <summary>
        /// <para>
        /// The set of <see cref="Currency">Currencies</see> with their total supplies updated.
        /// </para>
        /// <para>
        /// This is equivalent to the set of keys in <see cref="TotalSupplies"/>.
        /// </para>
        /// </summary>
        /// <seealso cref="TotalSupplies"/>
        [Pure]
        IImmutableSet<Currency> UpdatedTotalSupplyCurrencies { get; }

        /// <summary>
        /// A dictionary representing the changed total supply for each <see cref="Currency"/>.
        /// </summary>
        /// <seealso cref="UpdatedTotalSupplyCurrencies"/>
        [Pure]
        IImmutableDictionary<Currency, BigInteger> TotalSupplies { get; }

        /// <summary>
        /// A <see cref="Consensus.ValidatorSet"/> representing a change in
        /// <see cref="Consensus.ValidatorSet"/>, if not <see langword="null"/>.
        /// </summary>
        ValidatorSet? ValidatorSet { get; }
    }
}
