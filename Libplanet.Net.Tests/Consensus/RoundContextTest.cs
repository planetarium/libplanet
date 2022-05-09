using System;
using System.Collections.Generic;
using System.Linq;
using Libplanet.Crypto;
using Libplanet.Net.Consensus;
using Xunit;

namespace Libplanet.Net.Tests.Consensus
{
    public class RoundContextTest
    {
        [Fact]
        public void RoundContext()
        {
            Assert.Throws<ArgumentOutOfRangeException>(
                () => new RoundContext(0, new List<Address>(), 0, 0));
        }

        [Fact]
        public void Vote()
        {
            Address duplicatedAddress = new PrivateKey().ToAddress();
            Address uniqueAddress = new PrivateKey().ToAddress();
            RoundContext context = TestUtils.CreateRoundContext();
            long initialVoteCount = context.VoteCount;
            context.Vote(duplicatedAddress);
            Assert.Equal(initialVoteCount + 1, context.VoteCount);
            context.Vote(duplicatedAddress);
            Assert.Equal(initialVoteCount + 1, context.VoteCount);
            context.Vote(uniqueAddress);
            Assert.Equal(initialVoteCount + 2, context.VoteCount);
            Assert.Throws<ArgumentNullException>(() => context.Vote(null));
        }

        [Fact]
        public void ResetVote()
        {
            RoundContext context = TestUtils.CreateRoundContext();
            context.Vote(new PrivateKey().ToAddress());
            context.ResetVote();
            Assert.Equal(0, context.VoteCount);
        }

        [Fact]
        public void HasTwoThirdsAny()
        {
            List<Address> validator = new Address[3].ToList();
            RoundContext context = TestUtils.CreateRoundContext(validator);
            // 0 > 2
            Assert.False(context.HasTwoThirdsAny());
            context.Vote(new PrivateKey().ToAddress());
            // 1 > 2
            Assert.False(context.HasTwoThirdsAny());
            context.Vote(new PrivateKey().ToAddress());
            // 2 > 2
            Assert.False(context.HasTwoThirdsAny());
            context.Vote(new PrivateKey().ToAddress());
            // 3 > 2
            Assert.True(context.HasTwoThirdsAny());
            context.Vote(new PrivateKey().ToAddress());
        }

        [Fact]
        public void LeaderElection()
        {
            List<Address> validator = new Address[3].ToList();
            RoundContext context = TestUtils.CreateRoundContext(validator, round: 0);
            Assert.Equal(0, context.Round);
            Assert.Equal(0, context.LeaderElection());
            Assert.Equal(validator[0], context.Proposer());
            context = TestUtils.CreateRoundContext(validator, round: 1);
            Assert.Equal(1, context.Round);
            Assert.Equal(1, context.LeaderElection());
            Assert.Equal(validator[1], context.Proposer());
            context = TestUtils.CreateRoundContext(validator, round: 2);
            Assert.Equal(2, context.Round);
            Assert.Equal(2, context.LeaderElection());
            Assert.Equal(validator[2], context.Proposer());
            context = TestUtils.CreateRoundContext(validator, round: 3);
            Assert.Equal(3, context.Round);
            Assert.Equal(0, context.LeaderElection());
            Assert.Equal(validator[0], context.Proposer());
        }

        [Fact]
        public void ToStringTest()
        {
            byte[] data = { 0x01, 0x02 };
            const long id = 3;
            const long height = 8;
            const long round = 20;
            List<Address> validators = new Address[7].ToList();
            const long numberOfValidators = 7;
            const string step = "PreCommitState";
            const int voteCount = 2;
            RoundContext context = TestUtils.CreateRoundContext(
                id: id,
                validators: validators,
                height: height,
                round: round);
            context.State = new PreCommitState();
            context.Data = data;
            for (int i = 0; i < voteCount; i++)
            {
                context.Vote(new PrivateKey().ToAddress());
            }

            // replace data field with encoding
            Assert.Equal(
                $"{{\"node_id\":{id},\"number_of_validator\":{numberOfValidators}," +
                $"\"height\":{height},\"round\":{round},\"step\":\"{step}\",\"data\":\"AQI=\"," +
                $"\"vote_count\":{voteCount},\"current_election\":{context.LeaderElection()}}}",
                context.ToString());
        }
    }
}
