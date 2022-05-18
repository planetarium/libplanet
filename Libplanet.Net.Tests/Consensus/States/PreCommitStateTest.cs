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
    public class PreCommitStateTest
    {
        private readonly StoreFixture _fx;
        private readonly BlockChain<DumbAction> _blockChain;

        public PreCommitStateTest()
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
            ConsensusContext<DumbAction> context = TestUtils.CreateConsensusContext(_blockChain);
            var state = new PreCommitState<DumbAction>();
            Assert.Throws<TryUnexpectedMessageHandleException>(
                () => state.Handle(context, new ConsensusPropose(0, 0, 0, blockHash)));
        }

        [Fact]
        public async void HandleCommit()
        {
            Block<DumbAction> block =
                await _blockChain.MineBlock(new PrivateKey(), append: false);
            _fx.Store.PutBlock(block);
            BlockHash validBlockHash = block.Hash;
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

            var state = new PreCommitState<DumbAction>();
            Assert.Throws<UnexpectedRoundProposeException>(
                () => state.Handle(
                    context,
                    new ConsensusCommit(0, 0, 1, validBlockHash) { Remote = TestUtils.Peer0 }));
            Assert.Throws<UnexpectedHeightProposeException>(
                () => state.Handle(
                    context,
                    new ConsensusCommit(0, 1, 0, validBlockHash) { Remote = TestUtils.Peer0 }));
            Assert.Throws<UnexpectedBlockHashException>(
                () => state.Handle(
                    context,
                    new ConsensusCommit(0, 0, 0, invalidBlockHash) { Remote = TestUtils.Peer0 }));
            Assert.Equal(0, context.CurrentRoundContext.VoteCount);
            Assert.Null(
                state.Handle(
                    context,
                    new ConsensusCommit(0, 0, 0, validBlockHash) { Remote = TestUtils.Peer0 }));
            Assert.Equal(1, context.CurrentRoundContext.VoteCount);
            ConsensusMessage? res = state.Handle(
                contextAlreadyVoted,
                new ConsensusCommit(0, 0, 0, validBlockHash) { Remote = TestUtils.Peer0 });
            Assert.Null(res);
            Assert.Equal(0, contextAlreadyVoted.Round);
            Assert.Equal(1, contextAlreadyVoted.Height);
            Assert.Equal(default, contextAlreadyVoted.CurrentRoundContext.BlockHash);
            Assert.IsType<DefaultState<DumbAction>>(contextAlreadyVoted.CurrentRoundContext.State);
        }

        [Fact]
        public void HandleResetRound()
        {
            BlockHash blockHash = _fx.Block1.Hash;
            ConsensusContext<DumbAction> context = TestUtils.CreateConsensusContext(_blockChain);
            context.Round = 1;
            var state = new PreCommitState<DumbAction>();
            Assert.Null(
                state.Handle(
                    context,
                    new ConsensusVote(0, 0, 0, blockHash) { Remote = TestUtils.Peer0 }));
            ConsensusMessage? res = state.Handle(
                context,
                new ConsensusVote(0, 0, 2, blockHash) { Remote = TestUtils.Peer0 });
            Assert.NotNull(res);
            Assert.IsType<ConsensusCommit>(res);
            Assert.Equal(2, context.Round);
            Assert.Equal(blockHash, context.CurrentRoundContext.BlockHash);
            res = state.Handle(
                context,
                new ConsensusVote(0, 1, 3, blockHash) { Remote = TestUtils.Peer0 });
            Assert.Null(res);
        }
    }
}
