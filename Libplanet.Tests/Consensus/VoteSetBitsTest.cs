using System;
using Libplanet.Common.Crypto;
using Libplanet.Common.Types.Blocks;
using Libplanet.Common.Types.Consensus;
using Libplanet.Consensus;
using Xunit;

namespace Libplanet.Tests.Consensus
{
    public class VoteSetBitsTest
    {
        [Fact]
        public void InvalidSignature()
        {
            var hash = new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size));

            VoteSetBitsMetadata metadata = new VoteSetBitsMetadata(
                1,
                0,
                hash,
                DateTimeOffset.UtcNow,
                new PrivateKey().PublicKey,
                VoteFlag.PreVote,
                new[] { true, true, false, false });

            // Empty Signature
            var emptySigBencodex = metadata.Encoded.Add(
                VoteSetBits.SignatureKey,
                Array.Empty<byte>());
            Assert.Throws<ArgumentNullException>(() => new VoteSetBits(emptySigBencodex));

            // Invalid Signature
            var invSigBencodex = metadata.Encoded.Add(
                VoteSetBits.SignatureKey,
                new PrivateKey().Sign(TestUtils.GetRandomBytes(20)));
            Assert.Throws<ArgumentException>(() => new VoteSetBits(invSigBencodex));
        }

        [Fact]
        public void Sign()
        {
            var key = new PrivateKey();
            var hash = new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size));

            VoteSetBitsMetadata metadata = new VoteSetBitsMetadata(
                1,
                0,
                hash,
                DateTimeOffset.UtcNow,
                key.PublicKey,
                VoteFlag.PreVote,
                new[] { true, true, false, false });
            VoteSetBits voteSetBits = metadata.Sign(key);

            TestUtils.AssertBytesEqual(voteSetBits.Signature, key.Sign(metadata.ByteArray));
            Assert.True(key.PublicKey.Verify(metadata.ByteArray, voteSetBits.Signature));
        }
    }
}
