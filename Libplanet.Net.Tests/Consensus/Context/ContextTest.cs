using System;
using System.Collections.Generic;
using Bencodex;
using Bencodex.Types;
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
            var stepChanged = new AsyncAutoResetEvent();
            var messageReceived = new AsyncAutoResetEvent();

            void IsProposeSent(ConsensusMessage message)
            {
                if (message is ConsensusPropose)
                {
                    messageReceived.Set();
                }
            }

            watchConsensusMessage = IsProposeSent;
            Context.StepChanged += (sender, step) =>
            {
                if (step == Step.PreVote)
                {
                    stepChanged.Set();
                }
            };

            await Context.StartAsync();
            await messageReceived.WaitAsync();
            await stepChanged.WaitAsync();

            Assert.Equal(Step.PreVote, Context.Step);
            Assert.Equal(1, Context.Height);
            Assert.Equal(0, Context.Round);
        }

        [Fact(Timeout = Timeout)]
        public async void StartAsyncWithLastCommit()
        {
            var stepChanged = new AsyncAutoResetEvent();
            var messageReceived = new AsyncAutoResetEvent();
            ConsensusPropose? received = null;

            void IsProposeSent(ConsensusMessage message)
            {
                if (message is ConsensusPropose propose)
                {
                    messageReceived.Set();
                    received = propose;
                }
            }

            watchConsensusMessage = IsProposeSent;

            Context.StepChanged += (sender, step) =>
            {
                if (step == Step.PreVote)
                {
                    stepChanged.Set();
                }
            };

            var voteSet = new VoteSet(0, 0, BlockChain.Tip.Hash, TestUtils.Validators);
            var lastCommit = new BlockCommit(voteSet, BlockChain.Tip.Hash);

            await Context.StartAsync(lastCommit);
            await messageReceived.WaitAsync();
            await stepChanged.WaitAsync();

            Assert.Equal(Step.PreVote, Context.Step);
            // Looks dirty, but compiler throws error without if statement.
            if (received is null)
            {
                Assert.NotNull(received);
            }
            else
            {
                Block<DumbAction> mined = BlockMarshaler.UnmarshalBlock<DumbAction>(
                    BlockChain.Policy.GetHashAlgorithm,
                    (Dictionary)new Codec().Decode(received.Payload));
                Assert.NotNull(mined.LastCommit);
                Assert.Equal(
                    new HashSet<Vote>(voteSet.Votes),
                    new HashSet<Vote>(mined.LastCommit?.Votes!));
            }
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
                            TestUtils.PrivateKeys[0])));
        }

        [Fact(Timeout = Timeout)]
        public void ThrowNilPropose()
        {
            Assert.Throws<InvalidBlockProposeMessageException>(
                () =>
                    Context.AddMessage(
                        TestUtils.CreateConsensusPropose(
                            default,
                            TestUtils.PrivateKeys[NodeId])));
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
            BlockHash? blockHash = null;
            AsyncAutoResetEvent stepChanged = new AsyncAutoResetEvent();

            await Context.StartAsync();

            void WatchPropose(ConsensusMessage message)
            {
                if (message is ConsensusPropose)
                {
                    blockHash = message.BlockHash;
                }
            }

            watchConsensusMessage = WatchPropose;

            Context.StepChanged += (sender, step) =>
            {
                if (step == Step.PreCommit)
                {
                    stepChanged.Set();
                }
            };

            Context.HandleMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[0], 1, hash: blockHash, flag: VoteFlag.Absent))
                {
                    Remote = new Peer(TestUtils.Validators[0]),
                });

            Context.HandleMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[2], 1, hash: blockHash, flag: VoteFlag.Absent))
                {
                    Remote = new Peer(TestUtils.Validators[2]),
                });

            VoteSet roundVoteSet = Context.VoteSet(0);
            Assert.Equal(VoteFlag.Absent, roundVoteSet.Votes[2].Flag);

            AsyncAutoResetEvent messageProcessed = WatchMessageProcessed();
            Context.HandleMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[2], 1, hash: blockHash, flag: VoteFlag.Commit))
                {
                    Remote = new Peer(TestUtils.Validators[2]),
                });
            await messageProcessed.WaitAsync();

            roundVoteSet = Context.VoteSet(0);
            Assert.Equal(1, roundVoteSet.Height);
            Assert.Equal(0, roundVoteSet.Round);
            Assert.Equal(VoteFlag.Absent, roundVoteSet.Votes[0].Flag);
            Assert.Equal(VoteFlag.Absent, roundVoteSet.Votes[1].Flag);
            Assert.Equal(VoteFlag.Commit, roundVoteSet.Votes[2].Flag);
            Assert.Equal(VoteFlag.Null, roundVoteSet.Votes[3].Flag);
        }
    }
}
