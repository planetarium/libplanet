using System;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.Types.Blocks;
using Xunit;

namespace Libplanet.Tests.Consensus
{
    public class ProposalClaimTest
    {
        [Fact]
        public void InvalidSignature()
        {
            var hash = new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size));

            ProposalClaimMetadata metadata = new ProposalClaimMetadata(
                1,
                0,
                hash,
                DateTimeOffset.UtcNow,
                new PrivateKey().PublicKey);

            // Empty Signature
            var emptySigBencodex = metadata.Encoded.Add(
                ProposalClaim.SignatureKey,
                Array.Empty<byte>());
            Assert.Throws<ArgumentNullException>(() => new ProposalClaim(emptySigBencodex));

            // Invalid Signature
            var invSigBencodex = metadata.Encoded.Add(
                ProposalClaim.SignatureKey,
                new PrivateKey().Sign(TestUtils.GetRandomBytes(20)));
            Assert.Throws<ArgumentException>(() => new ProposalClaim(invSigBencodex));
        }

        [Fact]
        public void Sign()
        {
            var key = new PrivateKey();
            var hash = new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size));

            ProposalClaimMetadata metadata = new ProposalClaimMetadata(
                1,
                0,
                hash,
                DateTimeOffset.UtcNow,
                key.PublicKey);
            ProposalClaim claim = metadata.Sign(key);

            TestUtils.AssertBytesEqual(claim.Signature, key.Sign(metadata.ByteArray));
            Assert.True(key.PublicKey.Verify(metadata.ByteArray, claim.Signature));
        }
    }
}
