using System;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Net.Consensus;
using Libplanet.Net.Messages;
using Libplanet.Tests.Common.Action;
using Nito.AsyncEx;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Net.Tests.Consensus.Context
{
    [Collection("NetMQConfiguration")]
    public class ContextTest : ContextTestBase
    {
        private const int NodeId = 1;

        public ContextTest(ITestOutputHelper output)
            : base(output, NodeId, 1, 0, Step.Default)
        {
        }

        [Fact(Timeout = Timeout)]
        public async void StartAsync()
        {
            var messageReceived = new AsyncManualResetEvent();

            void IsProposeSent(ConsensusMessage message)
            {
                if (message is ConsensusPropose)
                {
                    messageReceived.Set();
                }
            }

            watchConsensusMessage = IsProposeSent;
            _ = Transport.StartAsync();
            await Transport.WaitForRunningAsync();

            await Context.StartAsync();
            await messageReceived.WaitAsync();

            Assert.Equal(Step.PreVote, Context.Step);
            Assert.Equal(1, Context.Height);
            Assert.Equal(0, Context.Round);
        }

        [Fact(Timeout = Timeout)]
        public async void ThrowInvalidProposer()
        {
            Block<DumbAction> block =
                await BlockChain.MineBlock(TestUtils.PrivateKeys[NodeId], append: false);

            Assert.Throws<InvalidProposerProposeMessageException>(
                () =>
                    Context.AddMessage(
                        TestUtils.CreateConsensusPropose(
                            block,
                            TestUtils.PrivateKeys[0],
                            nodeId: NodeId)));
        }

        [Fact(Timeout = Timeout)]
        public void ThrowNilPropose()
        {
            Assert.Throws<InvalidBlockProposeMessageException>(
                () =>
                    Context.AddMessage(
                        TestUtils.CreateConsensusPropose(
                            default,
                            TestUtils.PrivateKeys[NodeId],
                            nodeId: NodeId)));
        }

        [Fact(Timeout = Timeout)]
        public async void ThrowInvalidValidatorVote()
        {
            Block<DumbAction> block =
                await BlockChain.MineBlock(TestUtils.PrivateKeys[NodeId], append: false);

            // Vote's validator does not match with remote
            Assert.Throws<InvalidValidatorVoteMessageException>(
                () =>
                    Context.AddMessage(
                        new ConsensusVote(
                            new Vote(
                                Context.Height,
                                Context.Round,
                                block.Hash,
                                DateTimeOffset.UtcNow,
                                TestUtils.Validators[0],
                                VoteFlag.Absent,
                                NodeId,
                                null).Sign(TestUtils.PrivateKeys[NodeId]))
                        {
                            Remote = new Peer(TestUtils.Validators[NodeId]),
                        }));

            // Vote's signature does not match with remote
            Assert.Throws<InvalidValidatorVoteMessageException>(
                () =>
                    Context.AddMessage(
                        new ConsensusVote(
                            new Vote(
                                Context.Height,
                                Context.Round,
                                block.Hash,
                                DateTimeOffset.UtcNow,
                                TestUtils.Validators[0],
                                VoteFlag.Absent,
                                1,
                                null).Sign(TestUtils.PrivateKeys[NodeId]))
                        {
                            Remote = new Peer(TestUtils.Validators[0]),
                        }));

            // Commit's validator does not match with remote
            Assert.Throws<InvalidValidatorVoteMessageException>(
                () =>
                    Context.AddMessage(
                        new ConsensusVote(
                            new Vote(
                                Context.Height,
                                Context.Round,
                                block.Hash,
                                DateTimeOffset.UtcNow,
                                TestUtils.Validators[NodeId],
                                VoteFlag.Absent,
                                1,
                                null).Sign(TestUtils.PrivateKeys[NodeId]))
                        {
                            Remote = new Peer(TestUtils.Validators[0]),
                        }));

            // Vote's signature does not match with remote
            Assert.Throws<InvalidValidatorVoteMessageException>(
                () =>
                    Context.AddMessage(
                        new ConsensusVote(
                            new Vote(
                                Context.Height,
                                Context.Round,
                                block.Hash,
                                DateTimeOffset.UtcNow,
                                TestUtils.Validators[0],
                                VoteFlag.Absent,
                                1,
                                null).Sign(TestUtils.PrivateKeys[NodeId]))
                        {
                            Remote = new Peer(TestUtils.Validators[0]),
                        }));
        }

        [Fact(Timeout = Timeout)]
        public async void ThrowDifferentHeight()
        {
            Block<DumbAction> block =
                await BlockChain.MineBlock(TestUtils.PrivateKeys[2], append: false);

            Assert.Throws<InvalidHeightMessageException>(
                () => Context.AddMessage(
                    TestUtils.CreateConsensusPropose(block, TestUtils.PrivateKeys[2], 2, 2)));

            Assert.Throws<InvalidHeightMessageException>(
                () => Context.AddMessage(
                    new ConsensusVote(
                        TestUtils.CreateVote(
                            TestUtils.PrivateKeys[2],
                            2,
                            2,
                            0,
                            block.Hash,
                            VoteFlag.Absent))
                    {
                        Remote = new Peer(TestUtils.Validators[2]),
                    }));

            Assert.Throws<InvalidHeightMessageException>(
                () => Context.AddMessage(
                    new ConsensusCommit(
                        TestUtils.CreateVote(
                            TestUtils.PrivateKeys[2],
                            2,
                            2,
                            0,
                            block.Hash,
                            VoteFlag.Absent))
                    {
                        Remote = new Peer(TestUtils.Validators[2]),
                    }));
        }

        [Fact(Timeout = Timeout)]
        public async void VoteSet()
        {
            Block<DumbAction> block =
                await BlockChain.MineBlock(TestUtils.PrivateKeys[1], append: false);

            await Context.StartAsync();
            Context.HandleMessage(
                TestUtils.CreateConsensusPropose(block, TestUtils.PrivateKeys[1]));

            Context.HandleMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[0], 0, 1, hash: block.Hash, flag: VoteFlag.Absent))
                {
                    Remote = new Peer(TestUtils.Validators[0]),
                });

            Context.HandleMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[1], 1, 1, hash: block.Hash, flag: VoteFlag.Absent))
                {
                    Remote = new Peer(TestUtils.Validators[1]),
                });
            VoteSet roundVoteSet = Context.VoteSet(0);
            Assert.Equal(VoteFlag.Absent, roundVoteSet.Votes[1].Flag);

            Context.HandleMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[2], 1, 1, hash: block.Hash, flag: VoteFlag.Commit))
                {
                    Remote = new Peer(TestUtils.Validators[2]),
                });
            roundVoteSet = Context.VoteSet(0);

            Assert.Equal(1, roundVoteSet.Height);
            Assert.Equal(0, roundVoteSet.Round);
            Assert.Equal(VoteFlag.Absent, roundVoteSet.Votes[0].Flag);
            Assert.Equal(VoteFlag.Commit, roundVoteSet.Votes[1].Flag);
            Assert.Equal(VoteFlag.Null, roundVoteSet.Votes[2].Flag);
            Assert.Equal(VoteFlag.Null, roundVoteSet.Votes[3].Flag);
        }
    }
}
