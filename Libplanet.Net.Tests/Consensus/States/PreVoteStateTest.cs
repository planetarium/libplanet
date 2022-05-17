using System.Linq;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Net.Consensus;
using Libplanet.Net.Messages;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Store;
using Xunit;

namespace Libplanet.Net.Tests.Consensus.States
{
    public class PreVoteStateTest
    {
        private readonly StoreFixture _fx;
        private readonly BlockChain<DumbAction> _blockChain;

        public PreVoteStateTest()
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
            BlockHash validBlockHash = _fx.Block1.Hash;
            BlockHash invalidBlockHash = _fx.Block2.Hash;
            var validators = new Address[6].ToList();
            ConsensusContext<DumbAction> contextAlreadyVoted =
                TestUtils.CreateConsensusContext(validators, _blockChain);
            contextAlreadyVoted.CurrentRoundContext.BlockHash = validBlockHash;
            ConsensusContext<DumbAction> context =
                TestUtils.CreateConsensusContext(validators, _blockChain);
            context.CurrentRoundContext.BlockHash = validBlockHash;
            for (int i = 0; i < 5; i++)
            {
                contextAlreadyVoted.CurrentRoundContext.Vote(new PrivateKey().ToAddress());
            }

            var state = new PreVoteState<DumbAction>();
            Assert.Throws<TryUnexpectedMessageHandleException>(
                () => state.Handle(
                    context,
                    new ConsensusPropose(0, 0, 0, validBlockHash) { Remote = TestUtils.Peer0 }));
            Assert.Throws<UnexpectedRoundProposeException>(
                () => state.Handle(
                    context,
                    new ConsensusVote(0, 0, 1, validBlockHash) { Remote = TestUtils.Peer0 }));
            Assert.Throws<UnexpectedHeightProposeException>(
                () => state.Handle(
                    context,
                    new ConsensusVote(0, 1, 0, validBlockHash) { Remote = TestUtils.Peer0 }));
            Assert.Throws<UnexpectedBlockHashException>(
                () => state.Handle(
                    context,
                    new ConsensusVote(0, 0, 0, invalidBlockHash) { Remote = TestUtils.Peer0 }));
            Assert.Equal(0, context.CurrentRoundContext.VoteCount);
            Assert.Null(
                state.Handle(
                    context,
                    new ConsensusVote(0, 0, 0, validBlockHash) { Remote = TestUtils.Peer0 }));
            Assert.Equal(1, context.CurrentRoundContext.VoteCount);
            ConsensusMessage? res = state.Handle(
                contextAlreadyVoted,
                new ConsensusVote(0, 0, 0, validBlockHash) { Remote = TestUtils.Peer0 });
            Assert.NotNull(res);
            Assert.IsType<ConsensusCommit>(res);
            Assert.IsType<PreCommitState<DumbAction>>(
                contextAlreadyVoted.CurrentRoundContext.State);
        }
    }
}
