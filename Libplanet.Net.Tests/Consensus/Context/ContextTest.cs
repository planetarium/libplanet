using System;
using System.Collections.Generic;
using System.Threading.Tasks;
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
            var stepChangedToPreVote = new AsyncAutoResetEvent();
            var messageReceived = new AsyncAutoResetEvent();

            void IsProposeSent(ConsensusMessage message)
            {
                if (message is ConsensusPropose)
                {
                    messageReceived.Set();
                }
            }

            watchConsensusMessage = IsProposeSent;
            Context.StateChanged += (sender, state) =>
            {
                if (state.Step == Step.PreVote)
                {
                    stepChangedToPreVote.Set();
                }
            };

            Context.StartAsync();
            await Task.WhenAll(messageReceived.WaitAsync(), stepChangedToPreVote.WaitAsync());

            Assert.Equal(Step.PreVote, Context.Step);
            Assert.Equal(1, Context.Height);
            Assert.Equal(0, Context.Round);
        }

        [Fact(Timeout = Timeout)]
        public async void StartAsyncWithLastCommit()
        {
            var stepChangedToPreVote = new AsyncAutoResetEvent();
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

            Context.StateChanged += (sender, state) =>
            {
                if (state.Step == Step.PreVote)
                {
                    stepChangedToPreVote.Set();
                }
            };

            var voteSet = new VoteSet(0, 0, BlockChain.Tip.Hash, TestUtils.Validators);
            var lastCommit = new BlockCommit(voteSet, BlockChain.Tip.Hash);

            Context.StartAsync(lastCommit);
            await Task.WhenAll(messageReceived.WaitAsync(), stepChangedToPreVote.WaitAsync());

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
                                null).Sign(TestUtils.PrivateKeys[NodeId]))));

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
                                null).Sign(TestUtils.PrivateKeys[NodeId]))));
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
            // FIXME: Pretty lousy testing method.
            BlockHash? blockHash = null;
            var stepChangedToPreCommit = new AsyncAutoResetEvent();
            Context.StateChanged += (sender, state) =>
            {
                if (state.Step == Step.PreCommit)
                {
                    stepChangedToPreCommit.Set();
                }
            };

            Context.StartAsync();

            Context.ProduceMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[0], 1, hash: blockHash, flag: VoteFlag.Absent))
                {
                    Remote = new Peer(TestUtils.Validators[0]),
                });

            Context.ProduceMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[2], 1, hash: blockHash, flag: VoteFlag.Absent))
                {
                    Remote = new Peer(TestUtils.Validators[2]),
                });

            Context.ProduceMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[2], 1, hash: blockHash, flag: VoteFlag.Commit))
                {
                    Remote = new Peer(TestUtils.Validators[2]),
                });

            await stepChangedToPreCommit.WaitAsync();
            VoteSet roundVoteSet = Context.VoteSet(0);
            Assert.Equal(1, roundVoteSet.Height);
            Assert.Equal(0, roundVoteSet.Round);
            Assert.Equal(VoteFlag.Absent, roundVoteSet.Votes[0].Flag);
            Assert.Equal(VoteFlag.Commit, roundVoteSet.Votes[1].Flag);
            Assert.Equal(VoteFlag.Commit, roundVoteSet.Votes[2].Flag);
            Assert.Equal(VoteFlag.Null, roundVoteSet.Votes[3].Flag);
        }
    }
}
