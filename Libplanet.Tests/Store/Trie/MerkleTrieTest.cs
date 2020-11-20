using System.Linq;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Store.Trie;
using Libplanet.Store.Trie.Nodes;
using Xunit;

namespace Libplanet.Tests.Store.Trie
{
    public class MerkleTrieTest
    {
        [Fact]
        public void ConstructWithHashDigest()
        {
            var hashDigest
                = new HashDigest<SHA256>(TestUtils.GetRandomBytes(HashDigest<SHA256>.Size));
            var merkleTrie = new MerkleTrie(new MemoryKeyValueStore(), hashDigest);
            Assert.Equal(hashDigest, merkleTrie.Hash);

            // See https://github.com/planetarium/libplanet/pull/1091
            merkleTrie = new MerkleTrie(new MemoryKeyValueStore(), MerkleTrie.EmptyRootHash);
            Assert.Null(merkleTrie.Root);
        }

        [Fact]
        public void ConstructWithRootNode()
        {
            var hashDigest
                = new HashDigest<SHA256>(TestUtils.GetRandomBytes(HashDigest<SHA256>.Size));
            INode rootNode = new HashNode(hashDigest);
            var merkleTrie = new MerkleTrie(new MemoryKeyValueStore(), rootNode);
            Assert.Equal(hashDigest, merkleTrie.Hash);
        }

        [Fact]
        public void IterateNodes()
        {
            var merkleTrie = new MerkleTrie(new MemoryKeyValueStore());
            // There is nothing.
            Assert.Empty(merkleTrie.IterateNodes());

            merkleTrie = (MerkleTrie)merkleTrie.Set(
                new byte[] { 0xbe, 0xef, },
                Dictionary.Empty.Add(TestUtils.GetRandomBytes(32), default(Null)));
            // There are (ShortNode, ValueNode)
            Assert.Equal(2, merkleTrie.IterateNodes().Count());

            merkleTrie = (MerkleTrie)merkleTrie.Commit();
            // There are (HashNode, ShortNode, HashNode, ValueNode)
            Assert.Equal(4, merkleTrie.IterateNodes().Count());
        }
    }
}
