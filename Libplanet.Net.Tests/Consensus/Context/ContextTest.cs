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
            var proposeSent = new AsyncAutoResetEvent();
            Context.StateChanged += (sender, state) =>
            {
                if (state.Step == Step.PreVote)
                {
                    stepChangedToPreVote.Set();
                }
            };
            ConsensusMessageSent += (observer, message) =>
            {
                if (message is ConsensusPropose)
                {
                    proposeSent.Set();
                }
            };

            Context.Start();
            await Task.WhenAll(proposeSent.WaitAsync(), stepChangedToPreVote.WaitAsync());

            Assert.Equal(Step.PreVote, Context.Step);
            Assert.Equal(1, Context.Height);
            Assert.Equal(0, Context.Round);
        }

        [Fact(Timeout = Timeout)]
        public async void StartAsyncWithLastCommit()
        {
            var stepChangedToPreVote = new AsyncAutoResetEvent();
            var proposeSent = new AsyncAutoResetEvent();
            ConsensusPropose? proposedMessage = null;
            Context.StateChanged += (sender, state) =>
            {
                if (state.Step == Step.PreVote)
                {
                    stepChangedToPreVote.Set();
                }
            };
            ConsensusMessageSent += (observer, message) =>
            {
                if (message is ConsensusPropose propose)
                {
                    proposedMessage = propose;
                    proposeSent.Set();
                }
            };

            var voteSet = new VoteSet(0, 0, BlockChain.Tip.Hash, TestUtils.Validators);
            var lastCommit = new BlockCommit(voteSet, BlockChain.Tip.Hash);

            Context.Start(lastCommit);
            await Task.WhenAll(proposeSent.WaitAsync(), stepChangedToPreVote.WaitAsync());

            Assert.Equal(Step.PreVote, Context.Step);
            Assert.NotNull(proposedMessage);
            Block<DumbAction> mined = BlockMarshaler.UnmarshalBlock<DumbAction>(
                (Dictionary)new Codec().Decode(proposedMessage!.Payload));
            Assert.NotNull(mined.LastCommit);
            Assert.Equal(
                new HashSet<Vote>(voteSet.Votes),
                new HashSet<Vote>(mined.LastCommit?.Votes!));
        }

        [Fact(Timeout = Timeout)]
        public async Task ThrowInvalidProposer()
        {
            var block = BlockChain.ProposeBlock(TestUtils.PrivateKeys[NodeId]);
            Exception? exceptionThrown = null;
            var exceptionOccurred = new AsyncAutoResetEvent();
            Context.ExceptionOccurred += (sender, e) =>
            {
                exceptionThrown = e;
                exceptionOccurred.Set();
            };

            _ = Context.MessageConsumerTask(default);
            _ = Context.MutationConsumerTask(default);

            Context.ProduceMessage(
                TestUtils.CreateConsensusPropose(block, TestUtils.ConsensusPrivateKeys[0]));
            await exceptionOccurred.WaitAsync();

            Assert.True(exceptionThrown is InvalidProposerProposeMessageException);
        }

        [Fact(Timeout = Timeout)]
        public async void ThrowNilPropose()
        {
            Exception? exceptionThrown = null;
            var exceptionOccurred = new AsyncAutoResetEvent();
            Context.ExceptionOccurred += (sender, e) =>
            {
                exceptionThrown = e;
                exceptionOccurred.Set();
            };

            _ = Context.MessageConsumerTask(default);
            _ = Context.MutationConsumerTask(default);

            Context.ProduceMessage(
                TestUtils.CreateConsensusPropose(default, TestUtils.ConsensusPrivateKeys[NodeId]));
            await exceptionOccurred.WaitAsync();

            Assert.True(exceptionThrown is InvalidBlockProposeMessageException);
        }

        [Fact(Timeout = Timeout)]
        public async Task ThrowInvalidValidatorVote()
        {
            var block = BlockChain.ProposeBlock(TestUtils.PrivateKeys[NodeId]);
            Exception? exceptionThrown = null;
            var exceptionOccurred = new AsyncAutoResetEvent();
            Context.ExceptionOccurred += (sender, e) =>
            {
                exceptionThrown = e;
                exceptionOccurred.Set();
            };

            _ = Context.MessageConsumerTask(default);
            _ = Context.MutationConsumerTask(default);

            // Vote's signature does not match with remote
            Context.ProduceMessage(
                new ConsensusVote(
                    new Vote(
                        Context.Height,
                        Context.Round,
                        block.Hash,
                        DateTimeOffset.UtcNow,
                        TestUtils.Validators[0],
                        VoteFlag.Absent,
                        null).Sign(TestUtils.ConsensusPrivateKeys[NodeId])));
            await exceptionOccurred.WaitAsync();
            Assert.True(exceptionThrown is InvalidValidatorVoteMessageException);

            // Reset exception thrown.
            exceptionThrown = null;

            Context.ProduceMessage(
                new ConsensusVote(
                    new Vote(
                        Context.Height,
                        Context.Round,
                        block.Hash,
                        DateTimeOffset.UtcNow,
                        TestUtils.Validators[0],
                        VoteFlag.Absent,
                        null).Sign(TestUtils.ConsensusPrivateKeys[NodeId])));
            await exceptionOccurred.WaitAsync();
            Assert.True(exceptionThrown is InvalidValidatorVoteMessageException);
        }

        [Fact(Timeout = Timeout)]
        public async Task ThrowDifferentHeight()
        {
            var block = BlockChain.ProposeBlock(TestUtils.PrivateKeys[2]);

            Exception? exceptionThrown = null;
            var exceptionOccurred = new AsyncAutoResetEvent();
            Context.ExceptionOccurred += (sender, e) =>
            {
                exceptionThrown = e;
                exceptionOccurred.Set();
            };

            _ = Context.MessageConsumerTask(default);
            _ = Context.MutationConsumerTask(default);

            Context.ProduceMessage(
                TestUtils.CreateConsensusPropose(block, TestUtils.ConsensusPrivateKeys[2], 2, 2));
            await exceptionOccurred.WaitAsync();
            Assert.True(exceptionThrown is InvalidHeightMessageException);

            // Reset exception thrown.
            exceptionThrown = null;

            Context.ProduceMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.ConsensusPrivateKeys[2],
                        2,
                        0,
                        block.Hash,
                        VoteFlag.Absent))
                {
                    Remote = TestUtils.Peers[2],
                });
            await exceptionOccurred.WaitAsync();
            Assert.True(exceptionThrown is InvalidHeightMessageException);

            // Reset exception thrown.
            exceptionThrown = null;

            Context.ProduceMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(
                        TestUtils.ConsensusPrivateKeys[2],
                        2,
                        0,
                        block.Hash,
                        VoteFlag.Absent))
                {
                    Remote = TestUtils.Peers[2],
                });
            await exceptionOccurred.WaitAsync();
            Assert.True(exceptionThrown is InvalidHeightMessageException);
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

            Context.Start();

            Context.ProduceMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.ConsensusPrivateKeys[0],
                        1,
                        hash: blockHash,
                        flag: VoteFlag.Absent))
                {
                    Remote = TestUtils.Peers[0],
                });

            Context.ProduceMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.ConsensusPrivateKeys[2],
                        1,
                        hash: blockHash,
                        flag: VoteFlag.Absent))
                {
                    Remote = TestUtils.Peers[2],
                });

            Context.ProduceMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(
                        TestUtils.ConsensusPrivateKeys[2],
                        1,
                        hash: blockHash,
                        flag: VoteFlag.Commit))
                {
                    Remote = TestUtils.Peers[2],
                });

            await stepChangedToPreCommit.WaitAsync();
            // Wait for the vote to change from Absent to Commit to avoid flakiness.
            await Libplanet.Tests.TestUtils.AssertThatEventually(
                () => Context.VoteSet(0).Votes[1].Flag == VoteFlag.Commit,
                3_000);
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
