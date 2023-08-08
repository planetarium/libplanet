using System.Collections.Immutable;
using Libplanet.Action.State;
using Libplanet.Crypto;

namespace Libplanet.Action.Tests.Mocks
{
    public class MockWorldState : IWorldState
    {
        private readonly IImmutableDictionary<Address, IAccount> _accounts;

        public MockWorldState(IImmutableDictionary<Address, IAccount> accounts)
        {
            _accounts = accounts;
        }

        public MockWorldState()
        {
            _accounts = ImmutableDictionary<Address, IAccount>.Empty;
        }

        public bool Legacy { get; private set; }

        public IAccount GetAccount(Address address)
        {
            _accounts.TryGetValue(address, out IAccount account);
            return account;
        }

        public IWorldState SetAccount(Address address, IAccount account) =>
            new MockWorldState(_accounts.SetItem(address, account));
    }
}
