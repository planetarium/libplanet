using System;
using Bencodex.Types;
using Libplanet.Store.Trie;
using Libplanet.Types.Blocks;
using Xunit;

namespace Libplanet.Tests.Store.Trie
{
    public class TrieMetadataTest
    {
        [Fact]
        public void CannotCreateWithInvalidVersion()
        {
            Assert.Throws<ArgumentException>(
                () => new TrieMetadata(BlockMetadata.WorldStateProtocolVersion - 1));
            Assert.Throws<ArgumentException>(
                () => new TrieMetadata(BlockMetadata.CurrentProtocolVersion + 1));
        }

        [Fact]
        public void Bencoded()
        {
            var meta = new TrieMetadata(BlockMetadata.WorldStateProtocolVersion);
            IValue bencoded = meta.Bencoded;
            var decoded = new TrieMetadata(bencoded);
            Assert.Equal(meta.Version, decoded.Version);
        }
    }
}
