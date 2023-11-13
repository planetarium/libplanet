using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Action.State;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Store;
using Libplanet.Store.Trie;
using static Libplanet.Action.State.KeyConverters;

namespace Libplanet.Action.Tests.Mocks
{
    public class MockWorldState : IWorldState
    {
        private readonly IStateStore _stateStore;

        public MockWorldState()
            : this(new TrieStateStore(new MemoryKeyValueStore()), null)
        {
        }

        public MockWorldState(
            IStateStore stateStore,
            HashDigest<SHA256>? stateRootHash = null)
        {
            Trie = stateStore.GetStateRoot(stateRootHash);
            Legacy = Trie
                .Get(new[]
                {
                    ToStateKey(ReservedAddresses.LegacyAccount),
                })
                .Any(v => v == null);
        }

        public ITrie Trie { get; }

        public bool Legacy { get; private set; }

        public IAccount GetAccount(Address address)
            => Legacy && address.Equals(ReservedAddresses.LegacyAccount)
            ? new Account(new MockAccountState(_stateStore, Trie.Hash))
            : new Account(new MockAccountState(
                _stateStore, new HashDigest<SHA256>(Trie.Get(ToStateKey(address)))));

        public IWorldState SetAccountState(Address address, IAccount account)
            => Legacy && address.Equals(ReservedAddresses.LegacyAccount)
            ? new MockWorldState(_stateStore, account.Trie.Hash)
            : new MockWorldState(
                _stateStore,
                _stateStore.Commit(
                    Trie.Set(ToStateKey(address), new Binary(account.Trie.Hash.ByteArray))).Hash);
    }
}
