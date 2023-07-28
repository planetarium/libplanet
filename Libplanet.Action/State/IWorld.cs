using System.Diagnostics.Contracts;
using Libplanet.Crypto;

namespace Libplanet.Action.State
{
    internal interface IWorld : IWorldState
    {
        [Pure]
        IWorldDelta Delta { get; }

        [Pure]
        IWorld SetAccount(Address address, IAccount account);
    }
}
