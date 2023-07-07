using System;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Xunit;

namespace Libplanet.Tests.Consensus
{
    public class Maj23MetadataTest
    {
        private static Bencodex.Codec _codec = new Bencodex.Codec();

        [Fact]
        public void VoteFlagShouldBePreVoteOrPreCommit()
        {
            var hash = new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size));

            // Works with PreVote and PreCommit vote flags.
            _ = new Maj23Metadata(
                2, 2, hash, DateTimeOffset.UtcNow, new PrivateKey().PublicKey, VoteFlag.PreVote);
            _ = new Maj23Metadata(
                2, 2, hash, DateTimeOffset.UtcNow, new PrivateKey().PublicKey, VoteFlag.PreCommit);

            // Null and Unknown vote flags are not allowed.
            Assert.Throws<ArgumentException>(() => new Maj23Metadata(
                2,
                2,
                hash,
                DateTimeOffset.UtcNow,
                new PrivateKey().PublicKey,
                VoteFlag.Null));
            Assert.Throws<ArgumentException>(() => new Maj23Metadata(
                2,
                2,
                hash,
                DateTimeOffset.UtcNow,
                new PrivateKey().PublicKey,
                VoteFlag.Unknown));
        }

        [Fact]
        public void Bencoded()
        {
            var hash = new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size));
            var key = new PrivateKey();
            var expected = new Maj23Metadata(
                1,
                2,
                hash,
                DateTimeOffset.UtcNow,
                key.PublicKey,
                VoteFlag.PreCommit);
            var decoded = new Maj23Metadata(expected.Encoded);
            Assert.Equal(expected, decoded);
        }
    }
}
