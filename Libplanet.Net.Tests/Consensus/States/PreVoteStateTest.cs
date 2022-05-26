using System.Linq;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;
using Libplanet.Consensus;
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
                            .CreateVote(validatorsPubKey[i], VoteFlag.Absent, id: i)
                            .Sign(validators[i]));
            }

            var state = new PreVoteState<DumbAction>();
            Assert.Throws<TryUnexpectedMessageHandleException>(
                () => state.Handle(
                    context,
                    new ConsensusPropose(0, 0, 0, validBlockHash) { Remote = TestUtils.Peer0 }));
            Assert.Throws<UnexpectedRoundProposeException>(
                () => state.Handle(
                    context,
                    new ConsensusVote(
                            TestUtils.CreateVote(validBlockHash, VoteFlag.Absent, 0, 0, 1))
                        { Remote = TestUtils.Peer0 }));
            Assert.Throws<UnexpectedHeightProposeException>(
                () => state.Handle(
                    context,
                    new ConsensusVote(
                            TestUtils.CreateVote(validBlockHash, VoteFlag.Absent, 0, 1, 0))
                        { Remote = TestUtils.Peer0 }));
            Assert.Throws<UnexpectedBlockHashException>(
                () => state.Handle(
                    context,
                    new ConsensusVote(
                            TestUtils.CreateVote(invalidBlockHash, VoteFlag.Absent, 0, 0, 0))
                        { Remote = TestUtils.Peer0 }));
            Assert.Equal(0, context.CurrentRoundContext.VoteCount);
            Assert.Null(
                state.Handle(
                    context,
                    new ConsensusVote(
                                TestUtils.CreateVote(
                                    validBlockHash,
                                    VoteFlag.Absent,
                                    0,
                                    0,
                                    0,
                                    validatorsPubKey[0]).Sign(
                                validators[0]))
                        { Remote = TestUtils.Peer0 }));
            Assert.Equal(1, context.CurrentRoundContext.VoteCount);
            ConsensusMessage? res = state.Handle(
                contextAlreadyVoted,
                new ConsensusVote(
                            TestUtils.CreateVote(
                                validBlockHash,
                                VoteFlag.Absent,
                                5,
                                0,
                                0,
                                validatorsPubKey[5]).Sign(validators[5]))
                    { Remote = TestUtils.Peer0 });
            Assert.NotNull(res);
            Assert.IsType<ConsensusCommit>(res);
            Assert.IsType<PreCommitState<DumbAction>>(
                contextAlreadyVoted.CurrentRoundContext.State);
        }
    }
}
