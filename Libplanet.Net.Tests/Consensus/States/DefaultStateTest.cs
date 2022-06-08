using Bencodex;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Net.Consensus;
using Libplanet.Net.Consensus.State;
using Libplanet.Net.Messages;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Store;
using Xunit;

namespace Libplanet.Net.Tests.Consensus.States
{
    public class DefaultStateTest
    {
        private readonly StoreFixture _fx;
        private readonly BlockChain<DumbAction> _blockChain;

        public DefaultStateTest()
        {
            _fx = new MemoryStoreFixture(TestUtils.Policy.BlockAction);
            _blockChain = new BlockChain<DumbAction>(
                TestUtils.Policy,
                new VolatileStagePolicy<DumbAction>(),
                _fx.Store,
                _fx.StateStore,
                _fx.GenesisBlock);
        }

        [Fact]
        public void Handle()
        {
            BlockHash blockHash = _fx.Block1.Hash;
            byte[] payload = new Codec().Encode(_fx.Block1.MarshalBlock());
            ConsensusContext<DumbAction> context = TestUtils.CreateConsensusContext(_blockChain);
            var state = new DefaultState<DumbAction>();
            Assert.Throws<TryUnexpectedMessageHandleException>(
                () => state.Handle(
                    context,
                    new ConsensusCommit(TestUtils.CreateVote(blockHash, VoteFlag.Commit, 0, 0, 0))
                        { Remote = TestUtils.Peer0 }));
            Assert.Throws<UnexpectedRoundProposeException>(
                () => state.Handle(
                    context,
                    new ConsensusPropose(0, 1, 1, blockHash, payload)
                        { Remote = TestUtils.Peer0 }));
            Assert.Throws<UnexpectedLeaderProposeException>(
                () => state.Handle(
                    context,
                    new ConsensusPropose(1, 1, 0, blockHash, payload)
                        { Remote = TestUtils.Peer0 }));
            Assert.Throws<UnexpectedHeightProposeException>(
                () => state.Handle(
                    context,
                    new ConsensusPropose(1, 2, 0, blockHash, payload)
                        { Remote = TestUtils.Peer0 }));
            ConsensusMessage? res = state.Handle(
                context,
                new ConsensusPropose(0, 1, 0, blockHash, payload) { Remote = TestUtils.Peer0 });
            Assert.NotNull(res);
            Assert.IsType<ConsensusVote>(res);
            Assert.Equal(blockHash, context.CurrentRoundContext.BlockHash);
            Assert.IsType<PreVoteState<DumbAction>>(context.CurrentRoundContext.State);
        }
    }
}
