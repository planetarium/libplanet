using System;
using System.Numerics;
using Libplanet.Crypto;
using Libplanet.Types.Blocks;
using Libplanet.Types.Consensus;
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
                2,
                2,
                hash,
                DateTimeOffset.UtcNow,
                new PrivateKey().PublicKey,
                BigInteger.One,
                VoteFlag.Null);
            _ = new VoteMetadata(
                2,
                2,
                hash,
                DateTimeOffset.UtcNow,
                new PrivateKey().PublicKey,
                BigInteger.One,
                VoteFlag.Unknown);

            // Null hash is not allowed.
            Assert.Throws<ArgumentException>(() => new VoteMetadata(
                2,
                2,
                default,
                DateTimeOffset.UtcNow,
                new PrivateKey().PublicKey,
                BigInteger.One,
                VoteFlag.Null));
            Assert.Throws<ArgumentException>(() => new VoteMetadata(
                2,
                2,
                default,
                DateTimeOffset.UtcNow,
                new PrivateKey().PublicKey,
                BigInteger.One,
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
                BigInteger.One,
                VoteFlag.PreCommit);
            var decoded = new VoteMetadata(expected.Bencoded);
            Assert.Equal(expected, decoded);

            expected = new VoteMetadata(
                1,
                2,
                hash,
                DateTimeOffset.UtcNow,
                key.PublicKey,
                null,
                VoteFlag.PreCommit);
            decoded = new VoteMetadata(expected.Bencoded);
            Assert.Equal(expected, decoded);
        }
    }
}
