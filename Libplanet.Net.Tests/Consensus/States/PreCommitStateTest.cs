using System.Linq;
using Bencodex;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.Net.Consensus;
using Libplanet.Net.Consensus.State;
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
            byte[] payload = new Codec().Encode(_fx.Block1.MarshalBlock());
            ConsensusContext<DumbAction> context = TestUtils.CreateConsensusContext(_blockChain);
            var state = new PreCommitState<DumbAction>();
            Assert.Throws<TryUnexpectedMessageHandleException>(
                () => state.Handle(
                    context,
                    new ConsensusPropose(0, 0, 0, blockHash, payload)));
        }

        [Fact]
        public async void HandleCommit()
        {
            Block<DumbAction> block =
                await _blockChain.MineBlock(new PrivateKey(), append: false);
            _fx.Store.PutBlock(block);
            BlockHash validBlockHash = block.Hash;
            BlockHash invalidBlockHash = _fx.Block2.Hash;
            var validators = Enumerable.Range(0, 6)
                .Select(x => new PrivateKey())
                .ToList();
            var validatorsPubKey = validators.Select(x => x.PublicKey).ToList();
            ConsensusContext<DumbAction> contextAlreadyVoted =
                TestUtils.CreateConsensusContext(validatorsPubKey, validators[0], _blockChain, 0);
            contextAlreadyVoted.CurrentRoundContext.BlockHash = validBlockHash;
            ConsensusContext<DumbAction> context =
                TestUtils.CreateConsensusContext(validatorsPubKey, validators[1], _blockChain, 1);
            context.CurrentRoundContext.BlockHash = validBlockHash;
            for (int i = 0; i < 5; i++)
            {
                contextAlreadyVoted.CurrentRoundContext.Vote(
                        TestUtils
                            .CreateVote(validatorsPubKey[i], VoteFlag.Commit, id: i, height: 1)
                            .Sign(validators[i])
                );
            }

            var state = new PreCommitState<DumbAction>();
            Assert.Throws<UnexpectedRoundProposeException>(
                () => state.Handle(
                    context,
                    new ConsensusCommit(
                            TestUtils.CreateVote(validBlockHash, VoteFlag.Commit, 0, 1, 1))
                        { Remote = TestUtils.Peer0 }));
            Assert.Throws<UnexpectedHeightProposeException>(
                () => state.Handle(
                    context,
                    new ConsensusCommit(
                            TestUtils.CreateVote(validBlockHash, VoteFlag.Commit, 0, 2, 0))
                        { Remote = TestUtils.Peer0 }));
            Assert.Throws<UnexpectedBlockHashException>(
                () => state.Handle(
                    context,
                    new ConsensusCommit(
                            TestUtils.CreateVote(invalidBlockHash, VoteFlag.Commit, 0, 1, 0))
                        { Remote = TestUtils.Peer0 }));
            Assert.Equal(0, context.CurrentRoundContext.CommitCount);
            Assert.Null(
                state.Handle(
                    context,
                    new ConsensusCommit(
                                TestUtils.CreateVote(
                                    validBlockHash,
                                    VoteFlag.Commit,
                                    0,
                                    1,
                                    0,
                                    validatorsPubKey[0]).Sign(validators[0]))
                        { Remote = TestUtils.Peer0 }));
            Assert.Equal(1, context.CurrentRoundContext.CommitCount);
            ConsensusMessage? res = state.Handle(
                contextAlreadyVoted,
                new ConsensusCommit(
                            TestUtils.CreateVote(
                                validBlockHash,
                                VoteFlag.Commit,
                                5,
                                1,
                                0,
                                validatorsPubKey[5]).Sign(validators[5]))
                    { Remote = TestUtils.Peer0 });
            Assert.Null(res);
            Assert.Equal(0, contextAlreadyVoted.Round);
            Assert.Equal(2, contextAlreadyVoted.Height);
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
                    new ConsensusVote(
                            context.SignVote(
                                TestUtils.CreateVote(
                                    blockHash,
                                    VoteFlag.Absent,
                                    0,
                                    1,
                                    0)))
                        { Remote = TestUtils.Peer0 }));
            ConsensusMessage? res = state.Handle(
                context,
                new ConsensusVote(
                    context.SignVote(
                        TestUtils.CreateVote(blockHash, VoteFlag.Absent, 0, 1, 2)))
                    { Remote = TestUtils.Peer0 });
            Assert.NotNull(res);
            Assert.IsType<ConsensusCommit>(res);
            Assert.Equal(2, context.Round);
            Assert.Equal(blockHash, context.CurrentRoundContext.BlockHash);
            res = state.Handle(
                context,
                new ConsensusVote(
                        context.SignVote(
                        TestUtils.CreateVote(blockHash, VoteFlag.Absent, 0, 2, 3)))
                    { Remote = TestUtils.Peer0 });
            Assert.Null(res);
        }
    }
}
