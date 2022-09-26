using System;
using System.Collections.Immutable;
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
            var vote = new Vote(
                1,
                2,
                fx.Hash1,
                now,
                new PrivateKey().PublicKey,
                VoteFlag.Commit,
                ImmutableArray<byte>.Empty);
            byte[] marshaled = vote.ByteArray;
            var unMarshaled = new Vote(marshaled);
            Assert.Equal(vote, unMarshaled);
        }

        [Fact]
        public void Sign()
        {
            var fx = new MemoryStoreFixture();
            var now = DateTimeOffset.UtcNow;
            var privateKey = new PrivateKey();
            var vote = new Vote(
                1,
                2,
                fx.Hash1,
                now,
                privateKey.PublicKey,
                VoteFlag.Commit,
                ImmutableArray<byte>.Empty);
            Assert.True(vote.Signature.IsDefaultOrEmpty);
            Vote signed = vote.Sign(privateKey);
            Assert.False(signed.Signature.IsDefaultOrEmpty);
            Assert.True(
                privateKey.PublicKey.Verify(signed.RemoveSignature.ByteArray, signed.Signature));
        }
    }
}
