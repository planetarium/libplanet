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

            trieA.Set(new byte[] { 0x01, }, default(Null));
            trieA.Set(new byte[] { 0x02, }, default(Null));
            trieA.Set(new byte[] { 0x03, }, default(Null));
            trieB.Set(new byte[] { 0x01, }, Dictionary.Empty);
            trieB.Set(new byte[] { 0x02, }, default(Null));
            trieB.Set(new byte[] { 0x04, }, default(Null));
            trieA = (MerkleTrie)trieA.Commit();
            trieB = (MerkleTrie)trieB.Commit();

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
    }
}
