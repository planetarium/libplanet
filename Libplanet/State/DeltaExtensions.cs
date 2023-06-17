using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Numerics;
using Bencodex.Types;
using Libplanet.Assets;
using Libplanet.Consensus;

namespace Libplanet.State
{
    internal static class DeltaExtensions
    {
        public static IDelta GetTotalDelta(this IReadOnlyList<IDelta> deltas) =>
            new Delta(
                deltas.Aggregate(
                    ImmutableDictionary<Address, IValue>.Empty,
                    (prev, next) => prev.SetItems(next.States)),
                deltas.Aggregate(
                    ImmutableDictionary<(Address, Currency), BigInteger>.Empty,
                    (prev, next) => prev.SetItems(next.Fungibles)),
                deltas.Aggregate(
                    ImmutableDictionary<Currency, BigInteger>.Empty,
                    (prev, next) => prev.SetItems(next.TotalSupplies)),
                deltas.Aggregate(
                    (ValidatorSet?)null,
                    (prev, next) => next.ValidatorSet is { } validatorSet
                        ? validatorSet
                        : prev));

        public static IImmutableDictionary<string, IValue> GetRawDelta(
            this IDelta delta,
            Func<Address, string> toStateKey,
            Func<(Address, Currency), string> toFungibleAssetKey,
            Func<Currency, string> toTotalSupplyKey,
            string validatorSetKey)
        {
            IEnumerable<KeyValuePair<string, IValue>> rawSTates =
                delta.States.Select(kv => new KeyValuePair<string, IValue>(
                    toStateKey(kv.Key), kv.Value));
            IEnumerable<KeyValuePair<string, IValue>> rawFungibles =
                delta.Fungibles.Select(kv => new KeyValuePair<string, IValue>(
                    toFungibleAssetKey(kv.Key), new Integer(kv.Value)));
            IEnumerable<KeyValuePair<string, IValue>> rawTotalSupplies =
                delta.TotalSupplies.Select(kv => new KeyValuePair<string, IValue>(
                    toTotalSupplyKey(kv.Key), new Integer(kv.Value)));
            IEnumerable<KeyValuePair<string, IValue>> rawValidatorSet =
                delta.ValidatorSet is { } validatorSet
                    ? new[]
                        {
                            new KeyValuePair<string, IValue>(
                                validatorSetKey,
                                validatorSet.Bencoded),
                        }
                    : new KeyValuePair<string, IValue>[0];

            return rawSTates
                .Concat(rawFungibles)
                .Concat(rawTotalSupplies)
                .Concat(rawValidatorSet)
                .ToImmutableDictionary();
        }
    }
}
