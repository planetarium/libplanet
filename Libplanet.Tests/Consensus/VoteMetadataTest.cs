using System;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Xunit;

namespace Libplanet.Tests.Consensus
{
    public class VoteMetadataTest
    {
        private static Bencodex.Codec _codec = new Bencodex.Codec();

        [Fact]
        public void NullBlockHashNotAllowedForNullAndUnknown()
        {
            var hash = new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size));

            // Works with some hash value.
            _ = new VoteMetadata(
                2, 2, hash, DateTimeOffset.UtcNow, new PrivateKey().PublicKey, VoteFlag.Null);
            _ = new VoteMetadata(
                2, 2, hash, DateTimeOffset.UtcNow, new PrivateKey().PublicKey, VoteFlag.Unknown);

            // Null hash is not allowed.
            Assert.Throws<ArgumentException>(() => new VoteMetadata(
                2,
                2,
                default,
                DateTimeOffset.UtcNow,
                new PrivateKey().PublicKey,
                VoteFlag.Null));
            Assert.Throws<ArgumentException>(() => new VoteMetadata(
                2,
                2,
                default,
                DateTimeOffset.UtcNow,
                new PrivateKey().PublicKey,
                VoteFlag.Unknown));
        }

        [Fact]
        public void Bencoded()
        {
            var hash = new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size));
            var key = new PrivateKey();
            var expected = new VoteMetadata(
                1,
                2,
                hash,
                DateTimeOffset.UtcNow,
                key.PublicKey,
                VoteFlag.PreCommit);
            var decoded = new VoteMetadata(expected.Bencoded);
            Assert.Equal(expected, decoded);
        }
    }
}
