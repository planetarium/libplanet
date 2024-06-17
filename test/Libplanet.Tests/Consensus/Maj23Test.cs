using System;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.Types.Blocks;
using Libplanet.Types.Consensus;
using Xunit;

namespace Libplanet.Tests.Consensus
{
    public class Maj23Test
    {
        [Fact]
        public void InvalidSignature()
        {
            var hash = new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size));

            Maj23Metadata metadata = new Maj23Metadata(
                1,
                0,
                hash,
                DateTimeOffset.UtcNow,
                new PrivateKey().PublicKey,
                VoteFlag.PreVote);

            // Empty Signature
            var emptySigBencodex = metadata.Encoded.Add(Maj23.SignatureKey, Array.Empty<byte>());
            Assert.Throws<ArgumentNullException>(() => new Maj23(emptySigBencodex));

            // Invalid Signature
            var invSigBencodex = metadata.Encoded.Add(
                Maj23.SignatureKey,
                new PrivateKey().Sign(TestUtils.GetRandomBytes(20)));
            Assert.Throws<ArgumentException>(() => new Maj23(invSigBencodex));
        }

        [Fact]
        public void Sign()
        {
            var key = new PrivateKey();
            var hash = new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size));

            Maj23Metadata metadata = new Maj23Metadata(
                1,
                0,
                hash,
                DateTimeOffset.UtcNow,
                key.PublicKey,
                VoteFlag.PreVote);
            Maj23 maj23 = metadata.Sign(key);

            TestUtils.AssertBytesEqual(maj23.Signature, key.Sign(metadata.ByteArray));
            Assert.True(key.PublicKey.Verify(metadata.ByteArray, maj23.Signature));
        }
    }
}
