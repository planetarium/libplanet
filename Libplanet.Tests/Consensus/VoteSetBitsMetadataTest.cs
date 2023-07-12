using System;
using Libplanet.Common.Crypto;
using Libplanet.Common.Types.Blocks;
using Libplanet.Common.Types.Consensus;
using Libplanet.Consensus;
using Xunit;

namespace Libplanet.Tests.Consensus
{
    public class VoteSetBitsMetadataTest
    {
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
