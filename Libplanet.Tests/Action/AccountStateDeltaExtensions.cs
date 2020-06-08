using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using Bencodex.Types;
using Libplanet.Action;

namespace Libplanet.Tests.Action
{
    public static class AccountStateDeltaExtensions
    {
        public static IImmutableDictionary<Address, IValue> GetUpdatedStates(
            this IAccountStateDelta delta
        )
        {
            return delta.UpdatedAddresses.Select(address =>
                new KeyValuePair<Address, IValue>(
                    address,
                    delta.GetState(address)
                )
            ).ToImmutableDictionary();
        }
    }
}
