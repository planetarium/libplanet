using System;
using Libplanet.Common.Crypto;
using Libplanet.Common.Types.Blocks;
using Libplanet.Consensus;
using Xunit;

namespace Libplanet.Tests.Consensus
{
    public class ProposalClaimMetadataTest
    {
        [Fact]
        public void Bencoded()
        {
            var hash = new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size));
            var key = new PrivateKey();
            var expected = new ProposalClaimMetadata(
                1,
                2,
                hash,
                DateTimeOffset.UtcNow,
                key.PublicKey);
            var decoded = new ProposalClaimMetadata(expected.Encoded);
            Assert.Equal(expected, decoded);
        }
    }
}
