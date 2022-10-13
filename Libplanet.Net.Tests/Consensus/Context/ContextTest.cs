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
        public async void StartAsync()
        {
            var proposeSent = new AsyncAutoResetEvent();

            var (_, _, context) = TestUtils.CreateDummyContext(
                consensusMessageSent: CatchPropose,
                startStep: Step.Default);

            var stepChangedToPreVote = new AsyncAutoResetEvent();
            context.StateChanged += (sender, state) =>
            {
                if (state.Step == Step.PreVote)
                {
                    stepChangedToPreVote.Set();
                }
            };
            void CatchPropose(object? observer, ConsensusMessage? message)
            {
                if (message is ConsensusPropose)
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
        public async void StartAsyncWithLastCommit()
        {
            var stepChangedToPreVote = new AsyncAutoResetEvent();
            var proposeSent = new AsyncAutoResetEvent();

            // Assumed that height 1 is already committed. It will catch a propose to check whether
            // the lastCommit of height 1 is used for propose. Note that Peer2 is the height 2
            // proposer.
            var (_, blockChain, context) = TestUtils.CreateDummyContext(
                height: 2,
                privateKey: TestUtils.Peer2Priv,
                consensusMessageSent: CatchPropose,
                startStep: Step.Default);

            ConsensusPropose? proposedMessage = null;
            context.StateChanged += (sender, state) =>
            {
                if (state.Step == Step.PreVote)
                {
                    stepChangedToPreVote.Set();
                }
            };
            void CatchPropose(object? observer, ConsensusMessage? message)
            {
                if (message is ConsensusPropose propose)
                {
                    proposedMessage = propose;
                    proposeSent.Set();
                }
            }

            // It needs a lastCommit to use, so we assume that index #1 block is already committed.
            var heightOneBlock = blockChain.ProposeBlock(TestUtils.Peer1Priv);
            blockChain.Append(heightOneBlock);
            var lastCommit =
                TestUtils.CreateLastCommit(heightOneBlock.Hash, heightOneBlock.Index, 0);

            context.Start(lastCommit);
            await Task.WhenAll(proposeSent.WaitAsync(), stepChangedToPreVote.WaitAsync());

            Assert.Equal(Step.PreVote, context.Step);
            Assert.NotNull(proposedMessage);
            Block<DumbAction> mined = BlockMarshaler.UnmarshalBlock<DumbAction>(
                (Dictionary)new Codec().Decode(proposedMessage!.Payload));
            Assert.NotNull(mined.LastCommit);

            for (int i = 0; i < lastCommit.Votes.Length; ++i)
            {
                Assert.Equal(lastCommit.Votes[i], mined.LastCommit?.Votes[i]);
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task ThrowInvalidProposer()
        {
            var (_, blockChain, context) = TestUtils.CreateDummyContext(
                startStep: Step.Default);

            var block = blockChain.ProposeBlock(TestUtils.Peer1Priv);
            Exception? exceptionThrown = null;
            var exceptionOccurred = new AsyncAutoResetEvent();
            context.ExceptionOccurred += (sender, he) =>
            {
                exceptionThrown = he.Exception;
                exceptionOccurred.Set();
            };

            _ = context.MessageConsumerTask(default);
            _ = context.MutationConsumerTask(default);

            context.ProduceMessage(
                TestUtils.CreateConsensusPropose(block, TestUtils.Peer0Priv));
            await exceptionOccurred.WaitAsync();

            Assert.True(exceptionThrown is InvalidProposerProposeMessageException);
        }

        [Fact(Timeout = Timeout)]
        public async void ThrowNilPropose()
        {
            var (_, _, context) = TestUtils.CreateDummyContext(
                startStep: Step.Default);

            Exception? exceptionThrown = null;
            var exceptionOccurred = new AsyncAutoResetEvent();
            context.ExceptionOccurred += (sender, he) =>
            {
                exceptionThrown = he.Exception;
                exceptionOccurred.Set();
            };

            _ = context.MessageConsumerTask(default);
            _ = context.MutationConsumerTask(default);

            context.ProduceMessage(
                TestUtils.CreateConsensusPropose(default, TestUtils.Peer1Priv));
            await exceptionOccurred.WaitAsync();

            Assert.True(exceptionThrown is InvalidBlockProposeMessageException);
        }

        [Fact(Timeout = Timeout)]
        public async Task ThrowInvalidValidatorVote()
        {
            var (_, blockChain, context) = TestUtils.CreateDummyContext(
                startStep: Step.Default);

            var block = blockChain.ProposeBlock(TestUtils.Peer1Priv);
            Exception? exceptionThrown = null;
            var exceptionOccurred = new AsyncAutoResetEvent();
            context.ExceptionOccurred += (sender, he) =>
            {
                exceptionThrown = he.Exception;
                exceptionOccurred.Set();
            };

            _ = context.MessageConsumerTask(default);
            _ = context.MutationConsumerTask(default);

            // Vote's signature does not match with remote
            context.ProduceMessage(
                new ConsensusVote(
                    new VoteMetadata(
                        context.Height,
                        context.Round,
                        block.Hash,
                        DateTimeOffset.UtcNow,
                        TestUtils.Validators[0],
                        VoteFlag.Absent).Sign(TestUtils.Peer1Priv)));
            await exceptionOccurred.WaitAsync();
            Assert.True(exceptionThrown is InvalidValidatorVoteMessageException);

            // Reset exception thrown.
            exceptionThrown = null;

            context.ProduceMessage(
                new ConsensusVote(
                    new VoteMetadata(
                        context.Height,
                        context.Round,
                        block.Hash,
                        DateTimeOffset.UtcNow,
                        TestUtils.Validators[0],
                        VoteFlag.Absent).Sign(TestUtils.Peer1Priv)));
            await exceptionOccurred.WaitAsync();
            Assert.True(exceptionThrown is InvalidValidatorVoteMessageException);
        }

        [Fact(Timeout = Timeout)]
        public async Task ThrowDifferentHeight()
        {
            var (_, blockChain, context) = TestUtils.CreateDummyContext(
                startStep: Step.Default);

            var block = blockChain.ProposeBlock(TestUtils.Peer2Priv);

            Exception? exceptionThrown = null;
            var exceptionOccurred = new AsyncAutoResetEvent();
            context.ExceptionOccurred += (sender, he) =>
            {
                exceptionThrown = he.Exception;
                exceptionOccurred.Set();
            };

            _ = context.MessageConsumerTask(default);
            _ = context.MutationConsumerTask(default);

            context.ProduceMessage(
                TestUtils.CreateConsensusPropose(block, TestUtils.Peer2Priv, 2, 2));
            await exceptionOccurred.WaitAsync();
            Assert.True(exceptionThrown is InvalidHeightMessageException);

            // Reset exception thrown.
            exceptionThrown = null;

            context.ProduceMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.Peer2Priv,
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

            context.ProduceMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(
                        TestUtils.Peer2Priv,
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
            var (_, _, context) = TestUtils.CreateDummyContext(
                startStep: Step.Default);

            BlockHash? blockHash = null;
            var stepChangedToPreCommit = new AsyncAutoResetEvent();
            context.StateChanged += (sender, state) =>
            {
                if (state.Step == Step.PreCommit)
                {
                    stepChangedToPreCommit.Set();
                }
            };

            context.Start();
            context.ProduceMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.Peer0Priv, 1, hash: blockHash, flag: VoteFlag.Absent))
                {
                    Remote = TestUtils.Peer0,
                });

            context.ProduceMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.Peer2Priv, 1, hash: blockHash, flag: VoteFlag.Absent))
                {
                    Remote = TestUtils.Peer2,
                });

            context.ProduceMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(
                        TestUtils.Peer2Priv, 1, hash: blockHash, flag: VoteFlag.Commit))
                {
                    Remote = TestUtils.Peer2,
                });

            await stepChangedToPreCommit.WaitAsync();
            // Wait for the vote to change from Absent to Commit to avoid flakiness.
            await Libplanet.Tests.TestUtils.AssertThatEventually(
                () => context.VoteSet(0).Votes[1].Flag == VoteFlag.Commit,
                3_000);
            VoteSet roundVoteSet = context.VoteSet(0);
            Assert.Equal(1, roundVoteSet.Height);
            Assert.Equal(0, roundVoteSet.Round);
            Assert.Equal(VoteFlag.Absent, roundVoteSet.Votes[0].Flag);
            Assert.Equal(VoteFlag.Commit, roundVoteSet.Votes[1].Flag);
            Assert.Equal(VoteFlag.Commit, roundVoteSet.Votes[2].Flag);
            Assert.Equal(VoteFlag.Null, roundVoteSet.Votes[3].Flag);
        }
    }
}
