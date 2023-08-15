using System.Collections.Immutable;
using System.Security.Cryptography;
using Libplanet.Action.State;
using Libplanet.Common;
using Libplanet.Crypto;

namespace Libplanet.Action.Tests.Mocks
{
    public class MockWorldState : IWorldState
    {
        private readonly IImmutableDictionary<Address, IAccount> _accounts;

        public MockWorldState(IImmutableDictionary<Address, IAccount> accounts)
        {
            _accounts = accounts;
            Legacy = true;
        }

        public MockWorldState()
        {
            _accounts = ImmutableDictionary<Address, IAccount>.Empty;
            Legacy = true;
        }

        public HashDigest<SHA256> StateRootHash => default;

        public bool Legacy { get; private set; }

        public IAccount GetAccount(Address address)
            => _accounts.TryGetValue(address, out IAccount account)
            ? account
            : Account.Create(new MockAccountState(address));

        public IWorldState SetAccount(Address address, IAccount account) =>
            new MockWorldState(_accounts.SetItem(address, account));
    }
}
