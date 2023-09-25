using System.Collections.Immutable;
using Libplanet.Action.State;
using Libplanet.Crypto;
using Libplanet.Store;
using Libplanet.Store.Trie;

namespace Libplanet.Action.Tests.Mocks
{
    public class MockWorldState : IWorldState
    {
        private readonly IImmutableDictionary<Address, IAccount> _accounts;

        public MockWorldState()
            : this(ImmutableDictionary<Address, IAccount>.Empty)
        {
        }

        public MockWorldState(IImmutableDictionary<Address, IAccount> accounts)
            : this(new TrieStateStore(new MemoryKeyValueStore()).GetStateRoot(null), accounts)
        {
        }

        public MockWorldState(ITrie trie, IImmutableDictionary<Address, IAccount> accounts)
        {
            Trie = trie;
            Legacy = true;
            _accounts = accounts;
        }

        public ITrie Trie { get; }

        public bool Legacy { get; private set; }

        public IAccount GetAccount(Address address)
            => _accounts.TryGetValue(address, out IAccount account)
            ? account
            : new Account(new MockAccountState());

        public IWorldState SetAccount(Address address, IAccount account) =>
            new MockWorldState(_accounts.SetItem(address, account));
    }
}
