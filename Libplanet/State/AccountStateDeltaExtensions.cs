using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using Bencodex.Types;
using Libplanet.Assets;
using static Libplanet.Blockchain.KeyConverters;

namespace Libplanet.State
{
    internal static class AccountStateDeltaExtensions
    {
        internal static IImmutableDictionary<Address, IValue> GetUpdatedStates(
            this IAccountStateDelta delta) => delta.StatesDelta;

        internal static IImmutableDictionary<(Address, Currency), FungibleAssetValue>
            GetUpdatedBalances(this IAccountStateDelta delta) =>
            delta.FungiblesDelta.ToImmutableDictionary(
                kv => kv.Key,
                kv => FungibleAssetValue.FromRawValue(kv.Key.Item2, kv.Value));

        internal static IImmutableDictionary<Currency, FungibleAssetValue>
            GetUpdatedTotalSupplies(this IAccountStateDelta delta) =>
            delta.TotalSuppliesDelta.ToImmutableDictionary(
                kv => kv.Key,
                kv => FungibleAssetValue.FromRawValue(kv.Key, kv.Value));

        internal static IImmutableDictionary<string, IValue?> GetUpdatedRawStates(
            this IAccountStateDelta delta)
        {
            var dict = delta.GetUpdatedStates()
                .Select(
                    pair =>
                        new KeyValuePair<string, IValue?>(
                            ToStateKey(pair.Key),
                            pair.Value))
                .Union(
                    delta.GetUpdatedBalances()
                        .Select(
                            pair =>
                                new KeyValuePair<string, IValue?>(
                                    ToFungibleAssetKey(pair.Key),
                                    (Integer)pair.Value.RawValue)))
                .Union(
                    delta.GetUpdatedTotalSupplies()
                        .Select(
                            pair =>
                                new KeyValuePair<string, IValue?>(
                                    ToTotalSupplyKey(pair.Key),
                                    (Integer)pair.Value.RawValue)));

            if (delta.GetValidatorSet().Validators.Any())
            {
                dict = dict.Union(
                    new[]
                    {
                        new KeyValuePair<string, IValue?>(
                            ValidatorSetKey,
                            delta.GetValidatorSet().Bencoded),
                    });
            }

            return dict.ToImmutableDictionary();
        }
    }
}
