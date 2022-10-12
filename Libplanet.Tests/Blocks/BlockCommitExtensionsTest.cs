using System;
using System.Collections.Immutable;
using System.Linq;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Tests.Blocks
{
    public class BlockCommitExtensionsTest
    {
        private readonly ITestOutputHelper _output;

        public BlockCommitExtensionsTest(ITestOutputHelper output)
        {
            _output = output;
        }

        [Fact]
        public void HasTwoThirdCommits()
        {
            var hash = new BlockHash(TestUtils.GetRandomBytes(32));
            BlockCommit? allCommits = TestUtils.CreateLastCommit(hash, 2, 0);
            Assert.True(allCommits?.HasTwoThirdCommits(TestUtils.ConsensusValidators));

            BlockCommit? noCommits = TestUtils.CreateLastCommit(hash, 2, 0, VoteFlag.Absent);
            Assert.False(noCommits?.HasTwoThirdCommits(TestUtils.ConsensusValidators));

            VoteSet voteSet = new VoteSet(2, 0, hash, TestUtils.ConsensusValidators);
            TestUtils.AddVotesToVoteSet(
                voteSet,
                hash,
                VoteFlag.Commit,
                TestUtils.ConsensusPrivateKeys.Take(2));
            TestUtils.AddVotesToVoteSet(
                voteSet,
                hash,
                VoteFlag.Absent,
                TestUtils.ConsensusPrivateKeys.Skip(2).Take(2));
            BlockCommit halfCommits = new BlockCommit(voteSet, hash);
            Assert.False(halfCommits.HasTwoThirdCommits(TestUtils.ConsensusValidators));
        }

        [Fact]
        public void HasSameValidators()
        {
            var hash = new BlockHash(TestUtils.GetRandomBytes(32));
            BlockCommit? allCommits = TestUtils.CreateLastCommit(hash, 2, 0);
            Assert.True(allCommits?.HasSameValidators(TestUtils.ConsensusValidators));
            Assert.False(
                allCommits?.HasSameValidators(TestUtils.ConsensusValidators.Skip(1).Take(3)));
            Assert.False(allCommits?.HasSameValidators(
                TestUtils.ConsensusValidators.Concat(TestUtils.ConsensusValidators.Take(1))
                    .ToArray()));
            Assert.False(allCommits?.HasSameValidators(
                TestUtils.ConsensusValidators.Concat(new[] { new PrivateKey().PublicKey })));
            Assert.False(allCommits?.HasSameValidators(
                Enumerable.Range(0, TestUtils.ConsensusValidators.Count)
                    .Select(x => new PrivateKey().PublicKey)
                    .ToArray()));
        }

        [Fact]
        public void HasValidVotes()
        {
            var hash = new BlockHash(TestUtils.GetRandomBytes(32));
            BlockCommit? allValidVotes = TestUtils.CreateLastCommit(hash, 2, 0);
            Assert.True(allValidVotes?.HasValidVotes());

            VoteSet threeVoteSet = new VoteSet(2, 0, hash, TestUtils.ConsensusValidators);
            TestUtils.AddVotesToVoteSet(
                threeVoteSet,
                hash,
                VoteFlag.Commit,
                TestUtils.ConsensusPrivateKeys.Take(3));
            BlockCommit threeValidVotes = new BlockCommit(threeVoteSet, hash);
            Assert.True(threeValidVotes.HasValidVotes());

            var invalidValidator = new PrivateKey();
            var invalidSignatureCommit = new BlockCommit(
                2,
                0,
                hash,
                new[]
                {
                    new VoteMetadata(
                        2,
                        0,
                        hash,
                        DateTimeOffset.UtcNow,
                        new PrivateKey().PublicKey,
                        VoteFlag.Commit).Sign(invalidValidator),
                }.ToImmutableArray());
            Assert.False(invalidSignatureCommit.HasValidVotes());
        }
    }
}
