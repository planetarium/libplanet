using System.Linq;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Common;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Store.Trie.Nodes;
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
            ITrie emptyTrie = stateStore.GetStateRoot(default);
            HashDigest<SHA256> emptyRootHash = emptyTrie.Hash;

            Assert.Null(emptyTrie.Node);
            Assert.True(stateStore.GetStateRoot(emptyRootHash).IsCommitted);
            Assert.Null(stateStore.GetStateRoot(emptyRootHash).Node);
            Assert.False(keyValueStore.ContainsKey(new KeyBytes(emptyRootHash.ByteArray)));

            emptyTrie = stateStore.Commit(emptyTrie);
            Assert.Null(emptyTrie.Node);
            Assert.Equal(emptyRootHash, emptyTrie.Hash);
            Assert.True(stateStore.GetStateRoot(emptyRootHash).IsCommitted);
            Assert.False(keyValueStore.ContainsKey(new KeyBytes(emptyRootHash.ByteArray)));
        }

        [Fact]
        public void Commit()
        {
            IKeyValueStore keyValueStore = new MemoryKeyValueStore();
            IStateStore stateStore = new TrieStateStore(keyValueStore);
            ITrie trie = stateStore.GetStateRoot(default);

            trie = trie.Set(KeyBytes.Create(new byte[] { 0x2c, 0x73 }), new Text("2c73"));
            trie = trie.Set(KeyBytes.Create(new byte[] { 0x23, 0x4f }), new Text("234f"));

            HashDigest<SHA256> hashBeforeCommit = trie.Hash;
            trie = stateStore.Commit(trie);
            HashDigest<SHA256> hashAfterCommitOnce = trie.Hash;
            trie = stateStore.Commit(trie);
            HashDigest<SHA256> hashAfterCommitTwice = trie.Hash;

            Assert.NotEqual(hashBeforeCommit, hashAfterCommitOnce);
            Assert.Equal(hashAfterCommitOnce, hashAfterCommitTwice);
            Assert.False(stateStore.GetStateRoot(hashBeforeCommit).IsCommitted);
            Assert.True(stateStore.GetStateRoot(hashAfterCommitOnce).IsCommitted);
            Assert.False(keyValueStore.ContainsKey(new KeyBytes(hashBeforeCommit.ByteArray)));
            Assert.True(keyValueStore.ContainsKey(new KeyBytes(hashAfterCommitOnce.ByteArray)));

            trie = stateStore.GetStateRoot(hashAfterCommitOnce);
            Assert.Equal(2, trie.ToDictionary().Count);
            Assert.Equal(new Text("2c73"), trie[KeyBytes.Create(new byte[] { 0x2c, 0x73 })]);
            Assert.Equal(new Text("234f"), trie[KeyBytes.Create(new byte[] { 0x23, 0x4f })]);
        }

        [Fact]
        public void CommittedNonEmptyTrieRootIsHashNode()
        {
            IKeyValueStore keyValueStore = new MemoryKeyValueStore();
            IStateStore stateStore = new TrieStateStore(keyValueStore);
            ITrie trie = stateStore.GetStateRoot(default);
            trie = trie.Set(KeyBytes.Create([]), new Integer(1));
            trie = stateStore.Commit(trie);
            HashNode root = Assert.IsType<HashNode>(trie.Node);
            trie = stateStore.GetStateRoot(trie.Hash);
            Assert.IsType<HashNode>(trie.Node);
            Assert.Equal(root, trie.Node);
        }
    }
}
