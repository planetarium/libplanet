using System;
using System.Collections.Generic;
using System.Numerics;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Xunit;

namespace Libplanet.Tests.Consensus
{
    public class EvidenceTest
    {
        [Fact]
        public void BencodeDuplicateVoteEvidence()
        {
            var key = new PrivateKey();
            var voteRef = new VoteMetadata(
                1,
                2,
                new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size)),
                DateTimeOffset.UtcNow,
                key.PublicKey,
                VoteFlag.PreCommit).Sign(key);
            var voteDup = new VoteMetadata(
                1,
                2,
                new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size)),
                DateTimeOffset.UtcNow,
                key.PublicKey,
                VoteFlag.PreCommit).Sign(key);

            var expected = new DuplicateVoteEvidence(
                voteRef,
                voteDup,
                new ValidatorSet(
                    new List<Validator> { new Validator(key.PublicKey, BigInteger.One) }),
                DateTimeOffset.UtcNow);

            var decoded = Evidence.Decode(Evidence.Bencode(expected));
            Assert.Equal(expected, decoded);
        }
    }
}
