using System.Collections.Immutable;
using System.Linq;
using System.Numerics;
using Bencodex.Types;
using Libplanet.Assets;
using Libplanet.Consensus;

namespace Libplanet.State
{
    internal class Delta : IDelta
    {
        internal Delta()
        {
            States = ImmutableDictionary<Address, IValue>.Empty;
            Fungibles = ImmutableDictionary<(Address, Currency), BigInteger>.Empty;
            TotalSupplies = ImmutableDictionary<Currency, BigInteger>.Empty;
            ValidatorSet = null;
        }

        internal Delta(
            IImmutableDictionary<Address, IValue> statesDelta,
            IImmutableDictionary<(Address, Currency), BigInteger> fungiblesDelta,
            IImmutableDictionary<Currency, BigInteger> totalSuppliesDelta,
            ValidatorSet? validatorSetDelta)
        {
            States = statesDelta;
            Fungibles = fungiblesDelta;
            TotalSupplies = totalSuppliesDelta;
            ValidatorSet = validatorSetDelta;
        }

        /// <inheritdoc cref="IDelta.UpdatedAddresses"/>
        public IImmutableSet<Address> UpdatedAddresses =>
            StateUpdatedAddresses.Union(FungibleUpdatedAddresses);

        /// <inheritdoc cref="IDelta.StateUpdatedAddresses"/>
        public IImmutableSet<Address> StateUpdatedAddresses =>
            States.Keys.ToImmutableHashSet();

        /// <inheritdoc cref="IDelta.States"/>
        public IImmutableDictionary<Address, IValue> States { get; }

        /// <inheritdoc cref="IDelta.FungibleUpdatedAddresses"/>
        public IImmutableSet<Address> FungibleUpdatedAddresses =>
            Fungibles.Keys.Select(pair => pair.Item1).ToImmutableHashSet();

        /// <inheritdoc cref="IDelta.UpdatedFungibleAssets"/>
        public IImmutableSet<(Address, Currency)> UpdatedFungibleAssets =>
            Fungibles.Keys.ToImmutableHashSet();

        /// <inheritdoc cref="IDelta.Fungibles"/>
        public IImmutableDictionary<(Address, Currency), BigInteger> Fungibles { get; }

        /// <inheritdoc cref="IDelta.UpdatedTotalSupplyCurrencies"/>
        public IImmutableSet<Currency> UpdatedTotalSupplyCurrencies =>
            TotalSupplies.Keys.ToImmutableHashSet();

        /// <inheritdoc cref="IDelta.TotalSupplies"/>
        public IImmutableDictionary<Currency, BigInteger> TotalSupplies { get; }

        /// <inheritdoc cref="IDelta.ValidatorSet"/>
        public ValidatorSet? ValidatorSet { get; }
    }
}
