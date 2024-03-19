using System.Collections.Immutable;
using System.Linq;
using Libplanet.Crypto;

namespace Libplanet.Action.State
{
    public class WorldDelta : IWorldDelta
    {
        private readonly IImmutableDictionary<Address, IAccount> _accounts;

        public WorldDelta()
        {
            _accounts = ImmutableDictionary<Address, IAccount>.Empty;
        }

        private WorldDelta(IImmutableDictionary<Address, IAccount> accounts)
        {
            _accounts = accounts;
        }

        /// <inheritdoc cref="IWorldDelta.Accounts"/>
        public IImmutableDictionary<Address, IAccount> Accounts => _accounts;

        /// <inheritdoc cref="IWorldDelta.SetAccount"/>
        public IWorldDelta SetAccount(Address address, IAccount account)
            => new WorldDelta(_accounts.SetItem(address, account));
    }
}
