using System.Collections.Generic;
using System.Linq;
using Bencodex.Types;
using Libplanet.Store;
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
            IStateStore stateStore = new TrieStateStore(keyValueStore);
            MerkleTrie trieA = (MerkleTrie)stateStore.GetStateRoot(null);
            MerkleTrie trieB = (MerkleTrie)stateStore.GetStateRoot(null);

            trieA = (MerkleTrie)stateStore.Commit(trieA
                .Set(new KeyBytes(0x01), Null.Value)
                .Set(new KeyBytes(0x02), Null.Value)
                .Set(new KeyBytes(0x03), Null.Value));
            trieB = (MerkleTrie)stateStore.Commit(trieB
                .Set(new KeyBytes(0x01), Dictionary.Empty)
                .Set(new KeyBytes(0x02), Null.Value)
                .Set(new KeyBytes(0x04), Null.Value));

            Dictionary<KeyBytes, (IValue OriginValue, IValue OtherValue)> differentNodes =
                trieA.DifferentNodes(trieB).ToDictionary(
                    diff => diff.Key,
                    diff => (diff.OriginValue, diff.OtherValue));
            Assert.Equal(2, differentNodes.Count);
            Assert.NotNull(differentNodes[new KeyBytes(1)].OtherValue);
            Assert.False(differentNodes.ContainsKey(new KeyBytes(2)));
            Assert.Null(differentNodes[new KeyBytes(3)].OtherValue);
            Assert.False(differentNodes.ContainsKey(new KeyBytes(4)));
        }

        [Fact]
        public void ListAllStates()
        {
            IKeyValueStore keyValueStore = new MemoryKeyValueStore();
            IStateStore stateStore = new TrieStateStore(keyValueStore);
            MerkleTrie trie = (MerkleTrie)stateStore.GetStateRoot(null);

            trie = (MerkleTrie)trie
                .Set(new KeyBytes(0x01), Null.Value)
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

            trie = (MerkleTrie)stateStore.Commit(trie);
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
