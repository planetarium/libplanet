using System;
using Libplanet.Net.Consensus;
using Libplanet.Types.Blocks;
using Libplanet.Types.Consensus;
using Xunit;

namespace Libplanet.Net.Tests.Consensus
{
    public class VoteSetTest
    {
        [Fact]
        public void Majority()
        {
            var voteSet = new VoteSet(0, 0, VoteFlag.PreCommit, TestUtils.ValidatorSet);
            Assert.False(voteSet.HasOneThirdsAny());
            Assert.False(voteSet.HasTwoThirdsAny());
            Assert.False(voteSet.HasTwoThirdsMajority());
            Assert.False(voteSet.TwoThirdsMajority(out var hash0));
            Assert.Equal(default, hash0);

            var blockHash = new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size));
            voteSet.AddVote(new VoteMetadata(
                0,
                0,
                blockHash,
                DateTimeOffset.UtcNow,
                TestUtils.ValidatorSet[0].PublicKey,
                TestUtils.ValidatorSet[0].Power,
                VoteFlag.PreCommit).Sign(TestUtils.PrivateKeys[0]));
            Assert.False(voteSet.HasOneThirdsAny());
            Assert.False(voteSet.HasTwoThirdsAny());
            Assert.False(voteSet.HasTwoThirdsMajority());
            Assert.False(voteSet.TwoThirdsMajority(out var hash1));
            Assert.Equal(default, hash1);

            voteSet.AddVote(new VoteMetadata(
                0,
                0,
                blockHash,
                DateTimeOffset.UtcNow,
                TestUtils.ValidatorSet[1].PublicKey,
                TestUtils.ValidatorSet[1].Power,
                VoteFlag.PreCommit).Sign(TestUtils.PrivateKeys[1]));
            Assert.True(voteSet.HasOneThirdsAny());
            Assert.False(voteSet.HasTwoThirdsAny());
            Assert.False(voteSet.HasTwoThirdsMajority());
            Assert.False(voteSet.TwoThirdsMajority(out var hash2));
            Assert.Equal(default, hash2);

            voteSet.AddVote(new VoteMetadata(
                0,
                0,
                new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size)),
                DateTimeOffset.UtcNow,
                TestUtils.ValidatorSet[2].PublicKey,
                TestUtils.ValidatorSet[2].Power,
                VoteFlag.PreCommit).Sign(TestUtils.PrivateKeys[2]));
            Assert.True(voteSet.HasOneThirdsAny());
            Assert.True(voteSet.HasTwoThirdsAny());
            Assert.False(voteSet.HasTwoThirdsMajority());
            Assert.False(voteSet.TwoThirdsMajority(out var hash3));
            Assert.Equal(default, hash3);

            voteSet.AddVote(new VoteMetadata(
                0,
                0,
                blockHash,
                DateTimeOffset.UtcNow,
                TestUtils.ValidatorSet[3].PublicKey,
                TestUtils.ValidatorSet[3].Power,
                VoteFlag.PreCommit).Sign(TestUtils.PrivateKeys[3]));
            Assert.True(voteSet.HasOneThirdsAny());
            Assert.True(voteSet.HasTwoThirdsAny());
            Assert.True(voteSet.HasTwoThirdsMajority());
            Assert.True(voteSet.TwoThirdsMajority(out var hash4));
            Assert.Equal(blockHash, hash4);
        }
    }
}
