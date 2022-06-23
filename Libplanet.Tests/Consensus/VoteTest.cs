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
            var vote = new Vote(
                1,
                2,
                fx.Hash1,
                now,
                new PrivateKey().PublicKey,
                VoteFlag.Commit,
                null);
            byte[] marshaled = vote.ByteArray;
            var unMarshaled = new Vote(marshaled);
            Assert.Equal(vote, unMarshaled);
        }
    }
}
