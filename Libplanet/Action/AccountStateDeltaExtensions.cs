using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using Bencodex.Types;
using Libplanet.Assets;
using static Libplanet.Blockchain.KeyConverters;

namespace Libplanet.Action
{
    internal static class AccountStateDeltaExtensions
    {
        internal static IImmutableDictionary<Address, IValue?> GetUpdatedStates(
            this IAccountStateDelta delta
        )
        {
            return delta.StateUpdatedAddresses.Select(address =>
                new KeyValuePair<Address, IValue?>(
                    address,
                    delta.GetState(address)
                )
            ).ToImmutableDictionary();
        }

        internal static IImmutableDictionary<(Address, Currency), FungibleAssetValue>
            GetUpdatedBalances(this IAccountStateDelta delta) =>
            delta.UpdatedFungibleAssets.SelectMany(kv =>
                kv.Value.Select(currency =>
                    new KeyValuePair<(Address, Currency), FungibleAssetValue>(
                        (kv.Key, currency),
                        delta.GetBalance(kv.Key, currency)
                    )
                )
            ).ToImmutableDictionary();

        internal static IImmutableDictionary<Currency, FungibleAssetValue>
            GetUpdatedTotalSupplies(this IAccountStateDelta delta) =>
            delta.TotalSupplyUpdatedCurrencies.Select(currency =>
                    new KeyValuePair<Currency, FungibleAssetValue>(
                        currency,
                        delta.GetTotalSupply(currency)))
                .ToImmutableDictionary();

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
                            delta.GetValidatorSet().Encoded),
                    });
            }

            return dict.ToImmutableDictionary();
        }
    }
}
