using System;
using System.Linq;
using Libplanet.Crypto;
using Libplanet.Net.Consensus;
using Libplanet.Net.Messages;
using Xunit;

namespace Libplanet.Net.Tests.Consensus.States
{
    public class PreCommitStateTest
    {
        [Fact]
        public void Handle()
        {
            byte[] data = { 0x01, 0x02 };
            ConsensusContext context = TestUtils.CreateConsensusContext();
            var state = new PreCommitState();
            Assert.Throws<TryUnexpectedMessageHandleException>(
                () => state.Handle(context, new ConsensusPropose(0, 0, 0, data)));
        }

        [Fact]
        public void HandleCommit()
        {
            byte[] data = { 0x01, 0x02 };
            var validators = new Address[6].ToList();
            ConsensusContext contextAlreadyVoted = TestUtils.CreateConsensusContext(validators);
            ConsensusContext context = TestUtils.CreateConsensusContext(validators);
            for (int i = 0; i < 5; i++)
            {
                contextAlreadyVoted.CurrentRoundContext.Vote(new PrivateKey().ToAddress());
            }

            var state = new PreCommitState();
            Assert.Throws<UnexpectedRoundProposeException>(
                () => state.Handle(
                    context,
                    new ConsensusCommit(0, 0, 1, data) { Remote = TestUtils.Peer0 }));
            Assert.Throws<UnexpectedHeightProposeException>(
                () => state.Handle(
                    context,
                    new ConsensusCommit(0, 1, 0, data) { Remote = TestUtils.Peer0 }));
            Assert.Equal(0, context.CurrentRoundContext.VoteCount);
            Assert.Null(
                state.Handle(
                    context,
                    new ConsensusCommit(0, 0, 0, data) { Remote = TestUtils.Peer0 }));
            Assert.Equal(1, context.CurrentRoundContext.VoteCount);
            ConsensusMessage? res = state.Handle(
                contextAlreadyVoted,
                new ConsensusCommit(0, 0, 0, data) { Remote = TestUtils.Peer0 });
            Assert.Null(res);
            Assert.Equal(0, contextAlreadyVoted.Round);
            Assert.Equal(1, contextAlreadyVoted.Height);
            Assert.Equal(Array.Empty<byte>(), contextAlreadyVoted.CurrentRoundContext.Data);
            Assert.IsType<DefaultState>(contextAlreadyVoted.CurrentRoundContext.State);
        }

        [Fact]
        public void HandleResetRound()
        {
            byte[] data = { 0x01, 0x02 };
            ConsensusContext context = TestUtils.CreateConsensusContext();
            context.Round = 1;
            var state = new PreCommitState();
            Assert.Null(
                state.Handle(
                    context,
                    new ConsensusVote(0, 0, 0, data) { Remote = TestUtils.Peer0 }));
            ConsensusMessage? res = state.Handle(
                context,
                new ConsensusVote(0, 0, 2, data) { Remote = TestUtils.Peer0 });
            Assert.NotNull(res);
            Assert.IsType<ConsensusCommit>(res);
            Assert.Equal(2, context.Round);
            Assert.Equal(data, context.CurrentRoundContext.Data);
            res = state.Handle(
                context,
                new ConsensusVote(0, 1, 3, data) { Remote = TestUtils.Peer0 });
            Assert.Null(res);
        }
    }
}
