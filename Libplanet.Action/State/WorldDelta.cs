using System.Collections.Immutable;
using Libplanet.Crypto;

namespace Libplanet.Action.State
{
    internal class WorldDelta : IWorldDelta
    {
        internal WorldDelta()
        {
            Accounts = ImmutableDictionary<Address, IAccount>.Empty;
        }

        internal WorldDelta(IImmutableDictionary<Address, IAccount> accounts)
        {
            Accounts = accounts;
        }

        /// <inheritdoc cref="IWorldDelta.UpdatedAddresses"/>
        public IImmutableSet<Address> UpdatedAddresses => Accounts.Keys.ToImmutableHashSet();

        /// <inheritdoc cref="IWorldDelta.Accounts"/>
        public IImmutableDictionary<Address, IAccount> Accounts { get; }
    }
}
