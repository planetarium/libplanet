using System.Linq;
using Libplanet.Crypto;
using Libplanet.Net.Consensus;
using Libplanet.Net.Messages;
using Xunit;

namespace Libplanet.Net.Tests.Consensus.States
{
    public class PreVoteStateTest
    {
        [Fact]
        public void Handle()
        {
            byte[] data = { 0x01, 0x02 };
            var validators = new Address[6].ToList();
            ConsensusContext contextAlreadyVoted = TestUtils.CreateConsensusContext(validators);
            ConsensusContext context = TestUtils.CreateConsensusContext(validators);
            for (int i = 0; i < 5; i++)
            {
                contextAlreadyVoted.CurrentRoundContext.Vote(new PrivateKey().ToAddress());
            }

            var state = new PreVoteState();
            Assert.Throws<TryUnexpectedMessageHandleException>(
                () => state.Handle(
                    context,
                    new ConsensusPropose(0, 0, 0, data) { Remote = TestUtils.Peer0 }));
            Assert.Throws<UnexpectedRoundProposeException>(
                () => state.Handle(
                    context,
                    new ConsensusVote(0, 0, 1, data) { Remote = TestUtils.Peer0 }));
            Assert.Throws<UnexpectedHeightProposeException>(
                () => state.Handle(
                    context,
                    new ConsensusVote(0, 1, 0, data) { Remote = TestUtils.Peer0 }));
            Assert.Equal(0, context.CurrentRoundContext.VoteCount);
            Assert.Null(
                state.Handle(
                    context,
                    new ConsensusVote(0, 0, 0, data) { Remote = TestUtils.Peer0 }));
            Assert.Equal(1, context.CurrentRoundContext.VoteCount);
            ConsensusMessage? res = state.Handle(
                contextAlreadyVoted,
                new ConsensusVote(0, 0, 0, data) { Remote = TestUtils.Peer0 });
            Assert.NotNull(res);
            Assert.IsType<ConsensusCommit>(res);
            Assert.IsType<PreCommitState>(contextAlreadyVoted.CurrentRoundContext.State);
        }
    }
}
