using Bencodex.Types;
using Libplanet.Action.State;
using Libplanet.Crypto;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Types.Blocks;
using Xunit;
using static Libplanet.Action.State.KeyConverters;

namespace Libplanet.Action.Tests.State
{
    public class WorldBaseStateTest
    {
        private readonly IKeyValueStore _kvStore;
        private readonly IStateStore _stateStore;

        public WorldBaseStateTest()
        {
            _kvStore = new MemoryKeyValueStore();
            _stateStore = new TrieStateStore(_kvStore);
        }

        [Fact]
        public void Constructor()
        {
            ITrie trie = new MerkleTrie(_kvStore);
            var legacyBaseState = new WorldBaseState(trie, _stateStore);
            Assert.True(legacyBaseState.Legacy);
            trie = new MerkleTrie(_kvStore);
            trie = trie.SetMetadata(new TrieMetadata(BlockMetadata.CurrentProtocolVersion));
            var modernBaseState = new WorldBaseState(trie, _stateStore);
            Assert.False(modernBaseState.Legacy);
        }

        [Fact]
        public void Metadata()
        {
            var accountAddress = new Address(TestUtils.GetRandomBytes(20));
            var address = new Address(TestUtils.GetRandomBytes(20));
            ITrie accountTrie = new MerkleTrie(_kvStore);
            accountTrie = accountTrie.Set(ToStateKey(address), (Text)"foo");
            accountTrie =
                accountTrie.SetMetadata(new TrieMetadata(BlockMetadata.CurrentProtocolVersion));
            accountTrie = _stateStore.Commit(accountTrie);
            ITrie worldTrie = new MerkleTrie(_kvStore);
            worldTrie = worldTrie.Set(
                ToStateKey(accountAddress),
                (Binary)accountTrie.Hash.ByteArray);
            worldTrie =
                worldTrie.SetMetadata(new TrieMetadata(BlockMetadata.CurrentProtocolVersion));
            worldTrie = _stateStore.Commit(worldTrie);
            var stateRoot = worldTrie.Hash;
            var world = new World(new WorldBaseState(
                _stateStore.GetStateRoot(stateRoot),
                _stateStore));
            Assert.Equal(worldTrie.Hash, world.Trie.Hash);
            Assert.False(world.Legacy);
            var account = world.GetAccount(accountAddress);
            Assert.Equal(accountTrie.Hash, account.Trie.Hash);
            Assert.Equal(
                (Text)"foo",
                world.GetAccount(accountAddress).GetState(address));
        }

        [Fact]
        public void MetadataLegacy()
        {
            var accountAddress = ReservedAddresses.LegacyAccount;
            var address = new Address(TestUtils.GetRandomBytes(20));
            ITrie accountTrie = new MerkleTrie(_kvStore);
            accountTrie = accountTrie.Set(ToStateKey(address), (Text)"foo");
            accountTrie = _stateStore.Commit(accountTrie);
            ITrie worldTrie = new MerkleTrie(_kvStore);
            worldTrie = worldTrie.Set(
                ToStateKey(accountAddress),
                (Binary)accountTrie.Hash.ByteArray);
            worldTrie = worldTrie.SetMetadata(new TrieMetadata(
                BlockMetadata.CurrentProtocolVersion));
            worldTrie = _stateStore.Commit(worldTrie);
            var stateRoot = worldTrie.Hash;
            var world = new World(new WorldBaseState(
                _stateStore.GetStateRoot(stateRoot),
                _stateStore));
            Assert.Equal(worldTrie.Hash, world.Trie.Hash);
            Assert.False(world.Legacy);
            var account = world.GetAccount(accountAddress);
            Assert.Equal(accountTrie.Hash, account.Trie.Hash);
            Assert.Equal(
                (Text)"foo",
                world.GetAccount(accountAddress).GetState(address));
        }
    }
}
