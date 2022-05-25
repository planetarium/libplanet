using System;
using System.Collections.Generic;
using System.Linq;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.Net.Consensus;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Store;
using Xunit;

namespace Libplanet.Net.Tests.Consensus
{
    public class RoundContextTest
    {
        [Fact]
        public void RoundContext()
        {
            Assert.Throws<ArgumentOutOfRangeException>(
                () => new RoundContext<DumbAction>(0, new List<PublicKey>(), 0, 0));
        }

        [Fact]
        public void Vote()
        {
            var validators = Enumerable.Range(0, 2)
                .Select(x => new PrivateKey())
                .ToList();
            var validatorsPubKey = validators.Select(x => x.PublicKey).ToList();
            Vote duplicatedVote = TestUtils.SignVote(
                TestUtils.CreateVote(validatorsPubKey[0], VoteFlag.Absent, id: 0), validators[0]);
            Vote uniqueVote = TestUtils.SignVote(
                TestUtils.CreateVote(validatorsPubKey[1], VoteFlag.Absent, id: 1), validators[1]);
            RoundContext<DumbAction> context = TestUtils.CreateRoundContext(validatorsPubKey);
            long initialVoteCount = context.VoteCount;
            context.Vote(duplicatedVote);
            Assert.Equal(initialVoteCount + 1, context.VoteCount);
            context.Vote(duplicatedVote);
            Assert.Equal(initialVoteCount + 1, context.VoteCount);
            context.Vote(uniqueVote);
            Assert.Equal(initialVoteCount + 2, context.VoteCount);
        }

        [Fact]
        public void ResetVote()
        {
            RoundContext<DumbAction> context = TestUtils.CreateRoundContext();
            Vote vote = TestUtils.CreateVote(new PrivateKey().PublicKey, VoteFlag.Absent);
            context.Vote(vote);
            context.ResetVote();
            Assert.Equal(0, context.VoteCount);
        }

        [Fact]
        public void HasTwoThirdsAny()
        {
            List<PrivateKey> validators = Enumerable.Range(0, 4)
                .Select(x => new PrivateKey())
                .ToList();
            List<PublicKey> validatorsPubKey = validators.Select(x => x.PublicKey).ToList();
            RoundContext<DumbAction> context = TestUtils.CreateRoundContext(validatorsPubKey);
            // 0 > 2
            Assert.False(context.HasTwoThirdsAny());
            context.Vote(TestUtils.SignVote(
                TestUtils.CreateVote(validatorsPubKey[0], VoteFlag.Absent, id: 0), validators[0]));
            // 1 > 2
            Assert.False(context.HasTwoThirdsAny());
            context.Vote(TestUtils.SignVote(
                TestUtils.CreateVote(validatorsPubKey[1], VoteFlag.Absent, id: 1), validators[1]));
            // 2 > 2
            Assert.False(context.HasTwoThirdsAny());
            context.Vote(TestUtils.SignVote(
                TestUtils.CreateVote(validatorsPubKey[2], VoteFlag.Absent, id: 2), validators[2]));
            // 3 > 2
            Assert.True(context.HasTwoThirdsAny());
            context.Vote(TestUtils.SignVote(
                TestUtils.CreateVote(validatorsPubKey[3], VoteFlag.Absent, id: 3), validators[3]));
        }

        [Fact]
        public void LeaderElection()
        {
            List<PublicKey> validator = Enumerable.Range(0, 3)
                .Select(x => new PrivateKey().PublicKey)
                .ToList();
            RoundContext<DumbAction> context = TestUtils.CreateRoundContext(validator, round: 0);
            Assert.Equal(0, context.Round);
            Assert.Equal(0, context.LeaderElection());
            Assert.Equal(validator[0].ToAddress(), context.Proposer());
            context = TestUtils.CreateRoundContext(validator, round: 1);
            Assert.Equal(1, context.Round);
            Assert.Equal(1, context.LeaderElection());
            Assert.Equal(validator[1].ToAddress(), context.Proposer());
            context = TestUtils.CreateRoundContext(validator, round: 2);
            Assert.Equal(2, context.Round);
            Assert.Equal(2, context.LeaderElection());
            Assert.Equal(validator[2].ToAddress(), context.Proposer());
            context = TestUtils.CreateRoundContext(validator, round: 3);
            Assert.Equal(3, context.Round);
            Assert.Equal(0, context.LeaderElection());
            Assert.Equal(validator[0].ToAddress(), context.Proposer());
        }

        [Fact]
        public void ToStringTest()
        {
            var fx = new MemoryStoreFixture();
            BlockHash blockHash = fx.Block1.Hash;
            const long id = 3;
            const long height = 8;
            const long round = 20;
            List<PrivateKey> validators = Enumerable.Range(0, 7)
                .Select(x => new PrivateKey())
                .ToList();
            List<PublicKey> validatorsPubKey = validators.Select(x => x.PublicKey).ToList();
            const long numberOfValidators = 7;
            const string step = "PreCommitState";
            const int voteCount = 2;
            RoundContext<DumbAction> context = TestUtils.CreateRoundContext(
                id: id,
                validators: validatorsPubKey,
                height: height,
                round: round);
            context.State = new PreCommitState<DumbAction>();
            context.BlockHash = blockHash;
            for (int i = 0; i < voteCount; i++)
            {
                context.Vote(
                    TestUtils.SignVote(
                        TestUtils.CreateVote(
                            validatorsPubKey[i],
                            VoteFlag.Absent,
                            i,
                            height,
                            round),
                        validators[i]));
            }

            // replace data field with encoding
            Assert.Equal(
                $"{{\"node_id\":{id},\"number_of_validator\":{numberOfValidators}," +
                $"\"height\":{height},\"round\":{round},\"step\":\"{step}\"," +
                $"\"target_block\":\"{blockHash.ToString()}\"," +
                $"\"vote_count\":{voteCount},\"current_election\":{context.LeaderElection()}}}",
                context.ToString());
        }
    }
}
