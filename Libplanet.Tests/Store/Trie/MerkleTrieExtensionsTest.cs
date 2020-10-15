using System.Collections.Generic;
using System.Collections.Immutable;
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

            trieA = (MerkleTrie)trieA.Set(new byte[] { 0x01, }, default(Null))
                .Set(new byte[] { 0x02, }, default(Null))
                .Set(new byte[] { 0x03, }, default(Null))
                .Commit();
            trieB = (MerkleTrie)trieB.Set(new byte[] { 0x01, }, Dictionary.Empty)
                .Set(new byte[] { 0x02, }, default(Null))
                .Set(new byte[] { 0x04, }, default(Null))
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

            trie = (MerkleTrie)trie.Set(new byte[] { 0x01, }, default(Null))
                    .Set(new byte[] { 0x02, }, default(Null))
                    .Set(new byte[] { 0x03, }, default(Null))
                    .Set(new byte[] { 0x04, }, default(Null))
                    .Set(new byte[] { 0xbe, 0xef }, Dictionary.Empty);

            Dictionary<ImmutableArray<byte>, IValue> states =
                trie.ListAllStates().ToDictionary(
                    pair => pair.Key,
                    pair => pair.Value,
                    new ImmutableArrayEqualityComparer<byte>());
            Assert.Equal(5, states.Count);
            Assert.Equal(default(Null), states[ImmutableArray<byte>.Empty.Add(0x01)]);
            Assert.Equal(default(Null), states[ImmutableArray<byte>.Empty.Add(0x02)]);
            Assert.Equal(default(Null), states[ImmutableArray<byte>.Empty.Add(0x03)]);
            Assert.Equal(default(Null), states[ImmutableArray<byte>.Empty.Add(0x04)]);
            Assert.Equal(Dictionary.Empty, states[ImmutableArray<byte>.Empty.Add(0xbe).Add(0xef)]);

            trie = (MerkleTrie)trie.Commit();
            states = trie.ListAllStates().ToDictionary(
                pair => pair.Key,
                pair => pair.Value,
                new ImmutableArrayEqualityComparer<byte>());
            Assert.Equal(5, states.Count);
            Assert.Equal(default(Null), states[ImmutableArray<byte>.Empty.Add(0x01)]);
            Assert.Equal(default(Null), states[ImmutableArray<byte>.Empty.Add(0x02)]);
            Assert.Equal(default(Null), states[ImmutableArray<byte>.Empty.Add(0x03)]);
            Assert.Equal(default(Null), states[ImmutableArray<byte>.Empty.Add(0x04)]);
            Assert.Equal(Dictionary.Empty, states[ImmutableArray<byte>.Empty.Add(0xbe).Add(0xef)]);
        }
    }
}
