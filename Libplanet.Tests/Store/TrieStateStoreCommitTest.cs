using System.Linq;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Common;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Xunit;

namespace Libplanet.Tests.Store
{
    public class TrieStateStoreCommitTest
    {
        [Fact]
        public void CommitEmptyDoesNotWrite()
        {
            IKeyValueStore keyValueStore = new MemoryKeyValueStore();
            IStateStore stateStore = new TrieStateStore(new MemoryKeyValueStore());
            ITrie emptyTrie = stateStore.GetStateRoot(null);
            HashDigest<SHA256> emptyRootHash = emptyTrie.Hash;

            Assert.Null(emptyTrie.Root);
            Assert.True(stateStore.ContainsStateRoot(emptyRootHash));
            Assert.False(keyValueStore.Exists(new KeyBytes(emptyRootHash.ByteArray)));

            emptyTrie = stateStore.Commit(emptyTrie);
            Assert.Null(emptyTrie.Root);
            Assert.Equal(emptyRootHash, emptyTrie.Hash);
            Assert.True(stateStore.ContainsStateRoot(emptyRootHash));
            Assert.False(keyValueStore.Exists(new KeyBytes(emptyRootHash.ByteArray)));
        }

        [Fact]
        public void Commit()
        {
            IKeyValueStore keyValueStore = new MemoryKeyValueStore();
            IStateStore stateStore = new TrieStateStore(keyValueStore);
            ITrie trie = stateStore.GetStateRoot(null);

            trie = trie.Set(new KeyBytes(new byte[] { 0x2c, 0x73 }), new Text("2c73"));
            trie = trie.Set(new KeyBytes(new byte[] { 0x23, 0x4f }), new Text("234f"));

            HashDigest<SHA256> hashBeforeCommit = trie.Hash;
            trie = stateStore.Commit(trie);
            HashDigest<SHA256> hashAfterCommitOnce = trie.Hash;
            trie = stateStore.Commit(trie);
            HashDigest<SHA256> hashAfterCommitTwice = trie.Hash;

            Assert.NotEqual(hashBeforeCommit, hashAfterCommitOnce);
            Assert.Equal(hashAfterCommitOnce, hashAfterCommitTwice);
            Assert.False(stateStore.ContainsStateRoot(hashBeforeCommit));
            Assert.True(stateStore.ContainsStateRoot(hashAfterCommitOnce));
            Assert.False(keyValueStore.Exists(new KeyBytes(hashBeforeCommit.ByteArray)));
            Assert.True(keyValueStore.Exists(new KeyBytes(hashAfterCommitOnce.ByteArray)));

            trie = stateStore.GetStateRoot(hashAfterCommitOnce);
            Assert.Equal(2, ((MerkleTrie)trie).ListAllStates().Count());
            Assert.Equal(new Text("2c73"), trie.Get(new KeyBytes(new byte[] { 0x2c, 0x73 })));
            Assert.Equal(new Text("234f"), trie.Get(new KeyBytes(new byte[] { 0x23, 0x4f })));
        }
    }
}
