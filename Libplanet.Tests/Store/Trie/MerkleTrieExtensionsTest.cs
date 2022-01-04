using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Store.Trie;
using Xunit;

namespace Libplanet.Tests.Store.Trie
{
    public class MerkleTrieExtensionsTest
    {
        [Fact]
        public void DifferentNodes()
        {
            IKeyValueStore keyValueStore = new MemoryKeyValueStore();
            MerkleTrie trieA = new MerkleTrie(keyValueStore),
                trieB = new MerkleTrie(keyValueStore);

            trieA = (MerkleTrie)trieA.Set(new KeyBytes(0x01), Null.Value)
                .Set(new KeyBytes(0x02), Null.Value)
                .Set(new KeyBytes(0x03), Null.Value)
                .Commit();
            trieB = (MerkleTrie)trieB.Set(new KeyBytes(0x01), Dictionary.Empty)
                .Set(new KeyBytes(0x02), Null.Value)
                .Set(new KeyBytes(0x04), Null.Value)
                .Commit();

            Dictionary<string, (HashDigest<SHA256> Root, IValue Value)[]> differentNodes =
                trieA.DifferentNodes(trieB).ToDictionary(
                    group => group.Key,
                    group => group.ToArray());
            Assert.Equal(3, differentNodes.Count);
            Assert.Equal(2, differentNodes["01"].Length);
            Assert.False(differentNodes.ContainsKey("02"));
            Assert.Single(differentNodes["03"]);
            Assert.Single(differentNodes["04"]);
            Assert.Equal(trieA.Hash, differentNodes["01"][0].Root);
            Assert.Equal(trieB.Hash, differentNodes["01"][1].Root);
            Assert.Equal(trieA.Hash, differentNodes["03"][0].Root);
            Assert.Equal(trieB.Hash, differentNodes["04"][0].Root);
        }

        [Fact]
        public void ListAllStates()
        {
            IKeyValueStore keyValueStore = new MemoryKeyValueStore();
            MerkleTrie trie = new MerkleTrie(keyValueStore);

            trie = (MerkleTrie)trie.Set(new KeyBytes(0x01), Null.Value)
                    .Set(new KeyBytes(0x02), Null.Value)
                    .Set(new KeyBytes(0x03), Null.Value)
                    .Set(new KeyBytes(0x04), Null.Value)
                    .Set(new KeyBytes(0xbe, 0xef), Dictionary.Empty);

            Dictionary<KeyBytes, IValue> states =
                trie.ListAllStates().ToDictionary(pair => pair.Key, pair => pair.Value);
            Assert.Equal(5, states.Count);
            Assert.Equal(Null.Value, states[new KeyBytes(0x01)]);
            Assert.Equal(Null.Value, states[new KeyBytes(0x02)]);
            Assert.Equal(Null.Value, states[new KeyBytes(0x03)]);
            Assert.Equal(Null.Value, states[new KeyBytes(0x04)]);
            Assert.Equal(Dictionary.Empty, states[new KeyBytes(0xbe, 0xef)]);

            trie = (MerkleTrie)trie.Commit();
            states = trie.ListAllStates().ToDictionary(pair => pair.Key, pair => pair.Value);
            Assert.Equal(5, states.Count);
            Assert.Equal(Null.Value, states[new KeyBytes(0x01)]);
            Assert.Equal(Null.Value, states[new KeyBytes(0x02)]);
            Assert.Equal(Null.Value, states[new KeyBytes(0x03)]);
            Assert.Equal(Null.Value, states[new KeyBytes(0x04)]);
            Assert.Equal(Dictionary.Empty, states[new KeyBytes(0xbe, 0xef)]);
        }
    }
}
