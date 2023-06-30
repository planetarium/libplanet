using System;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Xunit;

namespace Libplanet.Tests.Consensus
{
    public class VoteSetBitsMetadataTest
    {
        private static Bencodex.Codec _codec = new Bencodex.Codec();

        [Fact]
        public void Bencoded()
        {
            var hash = new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size));
            var key = new PrivateKey();
            var voteBits = new[] { true, true, false, false };
            var expected = new VoteSetBitsMetadata(
                1,
                2,
                hash,
                DateTimeOffset.UtcNow,
                key.PublicKey,
                VoteFlag.PreCommit,
                voteBits);
            var decoded = new VoteSetBitsMetadata(expected.Encoded);
            Assert.Equal(expected, decoded);
        }
    }
}
