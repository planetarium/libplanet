using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Assets;

namespace Libplanet.Tests.Action
{
    public static class AccountStateDeltaExtensions
    {
        public static IImmutableDictionary<Address, IValue> GetUpdatedStates(
            this IAccountStateDelta delta
        )
        {
            return delta.StateUpdatedAddresses.Select(address =>
                new KeyValuePair<Address, IValue>(
                    address,
                    delta.GetState(address)
                )
            ).ToImmutableDictionary();
        }

        public static IImmutableDictionary<(Address, Currency), FungibleAssetValue>
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
