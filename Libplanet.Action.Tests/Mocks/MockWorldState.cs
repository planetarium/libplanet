using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Action.State;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Types.Assets;
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
            _stateStore = stateStore;
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
                    _stateStore,
                    Trie.Get(ToStateKey(address)) is { } stateRootNotNull
                        ? new HashDigest<SHA256>(stateRootNotNull)
                        : null));

        public IAccountState GetAccountState(Address address)
            => Legacy && address.Equals(ReservedAddresses.LegacyAccount)
                ? new MockAccountState(_stateStore, Trie.Hash)
                : new MockAccountState(
                    _stateStore,
                    Trie.Get(ToStateKey(address)) is { } stateRootNotNull
                        ? new HashDigest<SHA256>(stateRootNotNull)
                        : null);

        public IWorldState SetAccountState(Address address, IAccount account)
            => Legacy && address.Equals(ReservedAddresses.LegacyAccount)
            ? new MockWorldState(_stateStore, account.Trie.Hash)
            : new MockWorldState(
                _stateStore,
                _stateStore.Commit(
                    Trie.Set(ToStateKey(address), new Binary(account.Trie.Hash.ByteArray))).Hash);

        public FungibleAssetValue GetBalance(Address address, Currency currency) =>
            GetAccountState(ReservedAddresses.LegacyAccount).Trie
                .Get(ToFungibleAssetKey(address, currency)) is Integer i
                    ? FungibleAssetValue.FromRawValue(currency, i)
                    : currency * 0;

        public FungibleAssetValue GetTotalSupply(Currency currency) =>
            GetAccountState(ReservedAddresses.LegacyAccount).Trie
                .Get(ToTotalSupplyKey(currency)) is Integer i
                ? FungibleAssetValue.FromRawValue(currency, i)
                : currency * 0;
    }
}
