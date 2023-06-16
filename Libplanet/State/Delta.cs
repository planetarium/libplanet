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
            StatesDelta = ImmutableDictionary<Address, IValue>.Empty;
            FungiblesDelta = ImmutableDictionary<(Address, Currency), BigInteger>.Empty;
            TotalSuppliesDelta = ImmutableDictionary<Currency, BigInteger>.Empty;
            ValidatorSetDelta = null;
        }

        internal Delta(
            ImmutableDictionary<Address, IValue> statesDelta,
            ImmutableDictionary<(Address, Currency), BigInteger> fungiblesDelta,
            ImmutableDictionary<Currency, BigInteger> totalSuppliesDelta,
            ValidatorSet? validatorSetDelta)
        {
            StatesDelta = statesDelta;
            FungiblesDelta = fungiblesDelta;
            TotalSuppliesDelta = totalSuppliesDelta;
            ValidatorSetDelta = validatorSetDelta;
        }

        /// <inheritdoc cref="IDelta.UpdatedAddresses"/>
        public IImmutableSet<Address> UpdatedAddresses =>
            StateUpdatedAddresses.Union(FungibleUpdatedAddresses);

        /// <inheritdoc cref="IDelta.StateUpdatedAddresses"/>
        public IImmutableSet<Address> StateUpdatedAddresses =>
            StatesDelta.Keys.ToImmutableHashSet();

        /// <inheritdoc cref="IDelta.StatesDelta"/>
        public IImmutableDictionary<Address, IValue> StatesDelta { get; }

        /// <inheritdoc cref="IDelta.FungibleUpdatedAddresses"/>
        public IImmutableSet<Address> FungibleUpdatedAddresses =>
            FungiblesDelta.Keys.Select(pair => pair.Item1).ToImmutableHashSet();

        /// <inheritdoc cref="IDelta.UpdatedFungibleAssets"/>
        public IImmutableSet<(Address, Currency)> UpdatedFungibleAssets =>
            FungiblesDelta.Keys.ToImmutableHashSet();

        /// <inheritdoc cref="IDelta.FungiblesDelta"/>
        public IImmutableDictionary<(Address, Currency), BigInteger> FungiblesDelta { get; }

        /// <inheritdoc cref="IDelta.UpdatedTotalSupplyCurrencies"/>
        public IImmutableSet<Currency> UpdatedTotalSupplyCurrencies =>
            TotalSuppliesDelta.Keys.ToImmutableHashSet();

        /// <inheritdoc cref="IDelta.TotalSuppliesDelta"/>
        public IImmutableDictionary<Currency, BigInteger> TotalSuppliesDelta { get; }

        /// <inheritdoc cref="IDelta.ValidatorSetDelta"/>
        public ValidatorSet? ValidatorSetDelta { get; }
    }
}
