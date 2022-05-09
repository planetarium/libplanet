using Libplanet.Net.Consensus;
using Libplanet.Net.Messages;
using Xunit;

namespace Libplanet.Net.Tests.Consensus.States
{
    public class DefaultStateTest
    {
        [Fact]
        public void Handle()
        {
            byte[] data = { 0x01, 0x02 };
            ConsensusContext context = TestUtils.CreateConsensusContext();
            var state = new DefaultState();
            Assert.Throws<TryUnexpectedMessageHandleException>(
                () => state.Handle(
                    context,
                    new ConsensusCommit(0, 0, 0, data) { Remote = TestUtils.Peer0 }));
            Assert.Throws<UnexpectedRoundProposeException>(
                () => state.Handle(
                    context,
                    new ConsensusPropose(0, 0, 1, data) { Remote = TestUtils.Peer0 }));
            Assert.Throws<UnexpectedLeaderProposeException>(
                () => state.Handle(
                    context,
                    new ConsensusPropose(1, 0, 0, data) { Remote = TestUtils.Peer0 }));
            Assert.Throws<UnexpectedHeightProposeException>(
                () => state.Handle(
                    context,
                    new ConsensusPropose(1, 1, 0, data) { Remote = TestUtils.Peer0 }));
            ConsensusMessage? res = state.Handle(
                context,
                new ConsensusPropose(0, 0, 0, data) { Remote = TestUtils.Peer0 });
            Assert.NotNull(res);
            Assert.IsType<ConsensusVote>(res);
            Assert.Equal(data, context.CurrentRoundContext.Data);
            Assert.IsType<PreVoteState>(context.CurrentRoundContext.State);
        }
    }
}
