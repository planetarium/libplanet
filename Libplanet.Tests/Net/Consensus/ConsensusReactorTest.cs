using Libplanet.Net.Consensus;
using Libplanet.Net.Messages;
using Xunit;

namespace Libplanet.Tests.Net.Consensus
{
    public class ConsensusReactorTest
    {
        [Fact]
        public void ProcessPropose()
        {
            ConsensusReactor reactor = new ConsensusReactor(0, new MockedConsensusBroadCaster());
            var data = new byte[] { 0x01 };
            ConsensusPropose propose = new ConsensusPropose(0, 0, new byte[] { 0x01 });
            reactor.ProcessMessage(propose);

            ConsensusState state = reactor.GetState();
            Assert.Equal(data, state.Data);
            Assert.Equal(ConsensusState.RoundStep.RoundStepPrevoteWait, state.Step);
        }

        [Fact]
        public void ProcessProposeWrongRound()
        {
             ConsensusReactor reactor = new ConsensusReactor(0, new MockedConsensusBroadCaster());
             var data = new byte[] { 0x01 };
             ConsensusPropose propose = new ConsensusPropose(0, 1, new byte[] { 0x01 });
             reactor.ProcessMessage(propose);

             ConsensusState state = reactor.GetState();
             Assert.Equal(new byte[] { }, state.Data);
             Assert.Equal(ConsensusState.RoundStep.RoundStepNewRound, state.Step);
        }

        public class MockedConsensusBroadCaster : IConsensusBroadcaster
        {
            public void BroadcastMessage(ConsensusMessage message)
            {
            }
        }
    }
}
