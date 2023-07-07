using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Numerics;
using Bencodex.Types;
using Libplanet.Assets;
using Libplanet.Consensus;
using Libplanet.Store;
using static Libplanet.State.KeyConverters;

namespace Libplanet.State
{
    public static class AccountDeltaExtensions
    {
        /// <summary>
        /// Aggregates a list of <see cref="IAccountDelta"/>s in order.
        /// </summary>
        /// <param name="deltas">The list of <see cref="IAccountStateDelta"/>s to aggregate.</param>
        /// <returns>The aggregate of <paramref name="deltas"/> as an
        /// <see cref="IAccountStateDelta"/>.
        /// </returns>
        /// <remarks>
        /// As aggregation is done by partially overwriting previous values,
        /// the order in which <paramref name="deltas"/> is important.
        /// </remarks>
        public static IAccountDelta OrderedSum(this IReadOnlyList<IAccountDelta> deltas)
        {
            IImmutableDictionary<Address, IValue> states = deltas.Aggregate(
                ImmutableDictionary<Address, IValue>.Empty,
                (prev, next) => prev.SetItems(next.States));
            IImmutableDictionary<(Address, Currency), BigInteger> fungibles = deltas.Aggregate(
                ImmutableDictionary<(Address, Currency), BigInteger>.Empty,
                (prev, next) => prev.SetItems(next.Fungibles));
            IImmutableDictionary<Currency, BigInteger> totalSupplies = deltas.Aggregate(
                ImmutableDictionary<Currency, BigInteger>.Empty,
                (prev, next) => prev.SetItems(next.TotalSupplies));
            ValidatorSet? validatorSet = deltas.Aggregate(
                (ValidatorSet?)null,
                (prev, next) => next.ValidatorSet is { } set ? set : prev);
            return new AccountDelta(
                states, fungibles, totalSupplies, validatorSet);
        }

        /// <summary>
        /// Gets a raw dictionary representation of <see cref="IAccountDelta"/> that gets
        /// actually written to an <see cref="IStateStore"/>.
        /// </summary>
        /// <param name="delta">The <see cref="IAccountDelta"/> to convert.</param>
        /// <returns>A raw dictionary representation of <see cref="IAccountDelta"/> to write
        /// to an <see cref="IStateStore"/>.</returns>
        public static IImmutableDictionary<string, IValue> ToRawDelta(this IAccountDelta delta)
        {
            var rawStates = delta.States.Select(
                kv => new KeyValuePair<string, IValue>(
                    ToStateKey(kv.Key), kv.Value));
            var rawFungibles = delta.Fungibles.Select(
                kv => new KeyValuePair<string, IValue>(
                    ToFungibleAssetKey(kv.Key), new Integer(kv.Value)));
            var rawTotalSupplies = delta.TotalSupplies.Select(
                kv => new KeyValuePair<string, IValue>(
                    ToTotalSupplyKey(kv.Key), new Integer(kv.Value)));

            var rawDelta = ImmutableDictionary<string, IValue>.Empty;
            rawDelta = rawDelta.SetItems(rawStates.Concat(rawFungibles).Concat(rawTotalSupplies));
            return delta.ValidatorSet is { } validatorSet
                ? rawDelta.SetItem(ValidatorSetKey, validatorSet.Bencoded)
                : rawDelta;
        }
    }
}
