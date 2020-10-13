#nullable enable
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using Bencodex.Types;
using Libplanet.Assets;

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
    }
}
