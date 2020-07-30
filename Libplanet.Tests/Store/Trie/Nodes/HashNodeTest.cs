using System;
using Bencodex.Types;
using Libplanet.Store.Trie.Nodes;
using Xunit;

namespace Libplanet.Tests.Store.Trie.Nodes
{
    public class HashNodeTest
    {
        [Fact]
        public void ToBencodex()
        {
            var buf = new byte[128];
            var random = new Random();
            random.NextBytes(buf);
            var hashDigest = Hashcash.Hash(buf);

            var valueNode = new HashNode(hashDigest);
            Assert.Equal((Binary)hashDigest.ToByteArray(), valueNode.ToBencodex());
        }
    }
}
