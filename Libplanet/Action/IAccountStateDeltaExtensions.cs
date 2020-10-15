#nullable enable
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using Bencodex.Types;
using Libplanet.Assets;
using static Libplanet.Blockchain.KeyConverters;

namespace Libplanet.Action
{
    internal static class IAccountStateDeltaExtensions
    {
        internal static IImmutableDictionary<Address, IValue> GetUpdatedStates(
            this IAccountStateDelta delta
        )
        {
            return delta.StateUpdatedAddresses.Select(address =>
                new KeyValuePair<Address, IValue>(
                    address,
                    delta.GetState(address)!
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

        internal static IImmutableDictionary<string, IValue> GetUpdatedRawStates(
            this IAccountStateDelta delta) =>
            delta.GetUpdatedStates()
                .Select(pair =>
                    new KeyValuePair<string, IValue>(
                        ToStateKey(pair.Key),
                        pair.Value))
                .Union(
                    delta.GetUpdatedBalances().Select(pair =>
                        new KeyValuePair<string, IValue>(
                            ToFungibleAssetKey(pair.Key),
                            (Integer)pair.Value.RawValue))).ToImmutableDictionary();
    }
}
