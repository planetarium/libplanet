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
            this IAccountStateDelta stateDelta) => stateDelta.Delta.States;

        internal static IImmutableDictionary<(Address, Currency), FungibleAssetValue>
            GetUpdatedBalances(this IAccountStateDelta stateDelta) =>
            stateDelta.Delta.Fungibles.ToImmutableDictionary(
                kv => kv.Key,
                kv => FungibleAssetValue.FromRawValue(kv.Key.Item2, kv.Value));

        internal static IImmutableDictionary<Currency, FungibleAssetValue>
            GetUpdatedTotalSupplies(this IAccountStateDelta stateDelta) =>
            stateDelta.Delta.TotalSupplies.ToImmutableDictionary(
                kv => kv.Key,
                kv => FungibleAssetValue.FromRawValue(kv.Key, kv.Value));

        internal static IImmutableDictionary<string, IValue?> GetUpdatedRawStates(
            this IAccountStateDelta stateDelta)
        {
            var dict = stateDelta.GetUpdatedStates()
                .Select(
                    pair =>
                        new KeyValuePair<string, IValue?>(
                            ToStateKey(pair.Key),
                            pair.Value))
                .Union(
                    stateDelta.GetUpdatedBalances()
                        .Select(
                            pair =>
                                new KeyValuePair<string, IValue?>(
                                    ToFungibleAssetKey(pair.Key),
                                    (Integer)pair.Value.RawValue)))
                .Union(
                    stateDelta.GetUpdatedTotalSupplies()
                        .Select(
                            pair =>
                                new KeyValuePair<string, IValue?>(
                                    ToTotalSupplyKey(pair.Key),
                                    (Integer)pair.Value.RawValue)));

            if (stateDelta.GetValidatorSet().Validators.Any())
            {
                dict = dict.Union(
                    new[]
                    {
                        new KeyValuePair<string, IValue?>(
                            ValidatorSetKey,
                            stateDelta.GetValidatorSet().Bencoded),
                    });
            }

            return dict.ToImmutableDictionary();
        }
    }
}
