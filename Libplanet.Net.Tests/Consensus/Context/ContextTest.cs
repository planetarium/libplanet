using System;
using System.Threading.Tasks;
using Bencodex;
using Bencodex.Types;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Net.Consensus;
using Libplanet.Net.Messages;
using Libplanet.Tests.Common.Action;
using Nito.AsyncEx;
using Serilog;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Net.Tests.Consensus.Context
{
    public class ContextTest
    {
        private const int Timeout = 30000;
        private readonly ILogger _logger;

        public ContextTest(ITestOutputHelper output)
        {
            const string outputTemplate =
                "{Timestamp:HH:mm:ss:ffffffZ} - {Message}";
            Log.Logger = new LoggerConfiguration()
                .MinimumLevel.Verbose()
                .WriteTo.TestOutput(output, outputTemplate: outputTemplate)
                .CreateLogger()
                .ForContext<ContextTest>();

            _logger = Log.ForContext<ContextTest>();
        }

        [Fact(Timeout = Timeout)]
        public async void StartAsProposer()
        {
            var proposeSent = new AsyncAutoResetEvent();

            var (_, _, context) = TestUtils.CreateDummyContext(
                consensusMessageSent: CatchPropose);

            var stepChangedToPreVote = new AsyncAutoResetEvent();
            context.StateChanged += (sender, state) =>
            {
                if (state.Step == Step.PreVote)
                {
                    stepChangedToPreVote.Set();
                }
            };
            void CatchPropose(object? observer, ConsensusMsg? message)
            {
                if (message is ConsensusProposeMsg)
                {
                    proposeSent.Set();
                }
            }

            context.Start();
            await Task.WhenAll(proposeSent.WaitAsync(), stepChangedToPreVote.WaitAsync());

            Assert.Equal(Step.PreVote, context.Step);
            Assert.Equal(1, context.Height);
            Assert.Equal(0, context.Round);
        }

        [Fact(Timeout = Timeout)]
        public async void StartAsProposerWithLastCommit()
        {
            var stepChangedToPreVote = new AsyncAutoResetEvent();

            // Assumed that height 1 is already committed.  It will catch a propose to check
            // whether the lastCommit of height 1 is used for propose.  Note that Peer2
            // is the proposer for height 2.
            var (_, blockChain, context) = TestUtils.CreateDummyContext(
                height: 2,
                privateKey: TestUtils.Peer2Priv,
                consensusMessageSent: CatchPropose);

            ConsensusProposeMsg? proposedMessage = null;
            context.StateChanged += (sender, state) =>
            {
                if (state.Step == Step.PreVote)
                {
                    stepChangedToPreVote.Set();
                }
            };
            void CatchPropose(object? observer, ConsensusMsg? message)
            {
                if (message is ConsensusProposeMsg propose)
                {
                    proposedMessage = propose;
                }
            }

            // It needs a lastCommit to use, so we assume that index #1 block is already committed.
            var heightOneBlock = blockChain.ProposeBlock(TestUtils.Peer1Priv);
            blockChain.Append(heightOneBlock);
            var lastCommit =
                TestUtils.CreateLastCommit(heightOneBlock.Hash, heightOneBlock.Index, 0);

            context.Start(lastCommit);
            await Task.WhenAll(stepChangedToPreVote.WaitAsync());

            Assert.Equal(Step.PreVote, context.Step);
            Assert.NotNull(proposedMessage);
            Block<DumbAction> proposed = BlockMarshaler.UnmarshalBlock<DumbAction>(
                (Dictionary)new Codec().Decode(proposedMessage!.Payload));
            Assert.NotNull(proposed.LastCommit);
            Assert.Equal(lastCommit, proposed.LastCommit);
        }

        [Fact(Timeout = Timeout)]
        public async Task ThrowInvalidProposer()
        {
            var (_, blockChain, context) = TestUtils.CreateDummyContext();

            var block = blockChain.ProposeBlock(TestUtils.Peer1Priv);
            Exception? exceptionThrown = null;
            var exceptionOccurred = new AsyncAutoResetEvent();
            context.ExceptionOccurred += (sender, he) =>
            {
                exceptionThrown = he.Exception;
                exceptionOccurred.Set();
            };

            context.Start();
            context.ProduceMessage(
                TestUtils.CreateConsensusPropose(block, TestUtils.Peer0Priv));
            await exceptionOccurred.WaitAsync();
            Assert.True(exceptionThrown is InvalidProposerProposeMessageException);
        }

        [Fact(Timeout = Timeout)]
        public async void ThrowNilPropose()
        {
            var (_, _, context) = TestUtils.CreateDummyContext();

            Exception? exceptionThrown = null;
            var exceptionOccurred = new AsyncAutoResetEvent();
            context.ExceptionOccurred += (sender, he) =>
            {
                exceptionThrown = he.Exception;
                exceptionOccurred.Set();
            };

            context.Start();
            context.ProduceMessage(
                TestUtils.CreateConsensusPropose(default, TestUtils.Peer1Priv));
            await exceptionOccurred.WaitAsync();
            Assert.True(exceptionThrown is InvalidBlockProposeMessageException);
        }

        [Fact(Timeout = Timeout)]
        public async Task ThrowDifferentHeight()
        {
            var (_, blockChain, context) = TestUtils.CreateDummyContext();

            var block = blockChain.ProposeBlock(TestUtils.Peer2Priv);

            Exception? exceptionThrown = null;
            var exceptionOccurred = new AsyncAutoResetEvent();
            context.ExceptionOccurred += (sender, he) =>
            {
                exceptionThrown = he.Exception;
                exceptionOccurred.Set();
            };

            context.Start();
            context.ProduceMessage(
                TestUtils.CreateConsensusPropose(block, TestUtils.Peer2Priv, 2, 2));
            await exceptionOccurred.WaitAsync();
            Assert.True(exceptionThrown is InvalidHeightMessageException);

            // Reset exception thrown.
            exceptionThrown = null;

            context.ProduceMessage(
                new ConsensusPreVoteMsg(
                    TestUtils.CreateVote(
                        TestUtils.Peer2Priv,
                        2,
                        0,
                        block.Hash,
                        VoteFlag.PreVote)));
            await exceptionOccurred.WaitAsync();
            Assert.True(exceptionThrown is InvalidHeightMessageException);

            // Reset exception thrown.
            exceptionThrown = null;

            context.ProduceMessage(
                new ConsensusPreVoteMsg(
                    TestUtils.CreateVote(
                        TestUtils.Peer2Priv,
                        2,
                        0,
                        block.Hash,
                        VoteFlag.PreVote)));
            await exceptionOccurred.WaitAsync();
            Assert.True(exceptionThrown is InvalidHeightMessageException);
        }

        [Fact(Timeout = Timeout)]
        public async void VoteSet()
        {
            var proposeSent = new AsyncAutoResetEvent();
            var stepChangedToPreCommit = new AsyncAutoResetEvent();

            Block<DumbAction>? proposedBlock = null;
            var codec = new Codec();

            // FIXME: Pretty lousy testing method.
            var (_, _, context) = TestUtils.CreateDummyContext(
                contextTimeoutOptions: new ContextTimeoutOption(preVoteSecondBase: 1),
                consensusMessageSent: (sender, msg) =>
                {
                    if (msg is ConsensusProposeMsg proposeMsg)
                    {
                        proposedBlock = BlockMarshaler.UnmarshalBlock<DumbAction>(
                            (Dictionary)codec.Decode(proposeMsg.Payload));
                        proposeSent.Set();
                    }
                });

            context.StateChanged += (sender, state) =>
            {
                if (state.Step == Step.PreCommit)
                {
                    stepChangedToPreCommit.Set();
                }
            };

            context.Start();
            await proposeSent.WaitAsync();
            context.ProduceMessage(
                new ConsensusPreVoteMsg(
                    TestUtils.CreateVote(
                        TestUtils.Peer0Priv,
                        1,
                        hash: proposedBlock!.Hash,
                        flag: VoteFlag.PreVote)));

            context.ProduceMessage(
                new ConsensusPreVoteMsg(
                    TestUtils.CreateVote(
                        TestUtils.Peer2Priv,
                        1,
                        hash: proposedBlock!.Hash,
                        flag: VoteFlag.PreVote)));

            context.ProduceMessage(
                new ConsensusPreCommitMsg(
                    TestUtils.CreateVote(
                        TestUtils.Peer2Priv,
                        1,
                        hash: proposedBlock!.Hash,
                        flag: VoteFlag.PreCommit)));

            await stepChangedToPreCommit.WaitAsync();

            // Wait for the vote to change from PreVote to PreCommit to avoid flakiness.
            await Libplanet.Tests.TestUtils.AssertThatEventually(
                () => context.VoteSet(0).Votes[1].Flag == VoteFlag.PreCommit,
                3_000);
            VoteSet roundVoteSet = context.VoteSet(0);
            Assert.Equal(1, roundVoteSet.Height);
            Assert.Equal(0, roundVoteSet.Round);
            Assert.Equal(VoteFlag.Null, roundVoteSet.Votes[0].Flag);
            Assert.Equal(VoteFlag.PreCommit, roundVoteSet.Votes[1].Flag);
            Assert.Equal(VoteFlag.PreCommit, roundVoteSet.Votes[2].Flag);
            Assert.Equal(VoteFlag.Null, roundVoteSet.Votes[3].Flag);
        }
    }
}
