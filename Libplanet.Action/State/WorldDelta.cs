using System.Collections.Immutable;
using System.Linq;
using Libplanet.Crypto;

namespace Libplanet.Action.State
{
    public class WorldDelta : IWorldDelta
    {
        private IImmutableDictionary<Address, AccountItem> _accounts;

        public WorldDelta()
        {
            _accounts = ImmutableDictionary<Address, AccountItem>.Empty;
        }

        private WorldDelta(IImmutableDictionary<Address, AccountItem> accounts)
        {
            _accounts = accounts;
        }

        /// <inheritdoc cref="IWorldDelta.Accounts"/>
        public IImmutableDictionary<Address, IAccount> Accounts
            => _accounts
                .ToImmutableDictionary(item => item.Key, item => item.Value.Account);

        /// <inheritdoc cref="IWorldDelta.Uncommitted"/>
        public IImmutableDictionary<Address, IAccount> Uncommitted
            => _accounts
                .Where(item => !item.Value.Committed)
                .ToImmutableDictionary(item => item.Key, item => item.Value.Account);

        /// <inheritdoc cref="IWorldDelta.SetAccount"/>
        public IWorldDelta SetAccount(Address address, IAccount account)
            => new WorldDelta(_accounts.SetItem(address, new AccountItem(account, false)));

        /// <inheritdoc cref="IWorldDelta.CommitAccount"/>
        public IWorldDelta CommitAccount(Address address)
            => _accounts.TryGetValue(address, out AccountItem accountItem)
                ? new WorldDelta(
                    _accounts.SetItem(address, new AccountItem(accountItem.Account, true)))
                : this;

        internal struct AccountItem
        {
            public AccountItem(IAccount account, bool committed)
            {
                Account = account;
                Committed = committed;
            }

            public IAccount Account { get; }

            public bool Committed { get; set; }
        }
    }
}
