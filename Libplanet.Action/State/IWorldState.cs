using System.Diagnostics.Contracts;
using Libplanet.Crypto;

namespace Libplanet.Action.State
{
    public interface IWorldState
    {
        [Pure]
        bool Legacy { get; }

        [Pure]
        IAccount? GetAccount(Address address);
    }
}
