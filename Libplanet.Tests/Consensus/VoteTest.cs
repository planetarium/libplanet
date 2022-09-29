using System;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.Tests.Store;
using Xunit;

namespace Libplanet.Tests.Consensus
{
    public class VoteTest
    {
        [Fact]
        public void MarshalVote()
        {
            var fx = new MemoryStoreFixture();
            var now = DateTimeOffset.UtcNow;
            var vote = new VoteMetadata(
                1,
                2,
                fx.Hash1,
                now,
                new PrivateKey().PublicKey,
                VoteFlag.Commit).Sign(new PrivateKey());
            byte[] marshaled = vote.ByteArray;
            var unMarshaled = new Vote(marshaled);
            Assert.Equal(vote, unMarshaled);
        }

        [Fact]
        public void Sign()
        {
            var fx = new MemoryStoreFixture();
            var privateKey = new PrivateKey();
            var voteMetadata = new VoteMetadata(
                1,
                2,
                fx.Hash1,
                DateTimeOffset.UtcNow,
                privateKey.PublicKey,
                VoteFlag.Commit);
            Vote vote = voteMetadata.Sign(privateKey);
            Assert.True(
                privateKey.PublicKey.Verify(voteMetadata.ByteArray, vote.Signature));
        }

        [Fact]
        public void DefaultSignatureIsInvalid()
        {
            var voteMetadata = new VoteMetadata(
                0, 0, null, DateTimeOffset.UtcNow, new PrivateKey().PublicKey, VoteFlag.Commit);
            Assert.Throws<ArgumentException>(() => new Vote(voteMetadata, default));
        }
    }
}
