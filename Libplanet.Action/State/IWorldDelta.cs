using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using Libplanet.Crypto;

namespace Libplanet.Action.State
{
    public interface IWorldDelta
    {
        [Pure]
        IImmutableDictionary<Address, IAccount> Accounts { get; }

        [Pure]
        IImmutableSet<Address> UpdatedAccounts { get; }
    }
}
