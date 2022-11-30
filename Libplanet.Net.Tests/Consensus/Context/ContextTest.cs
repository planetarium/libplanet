using System;
using System.Linq;
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
            var proposalSent = new AsyncAutoResetEvent();
            var stepChangedToPreVote = new AsyncAutoResetEvent();
            var (_, context) = TestUtils.CreateDummyContext();
            context.StateChanged += (_, eventArgs) =>
            {
                if (eventArgs.Step == Step.PreVote)
                {
                    stepChangedToPreVote.Set();
                }
            };
            context.MessageBroadcasted += (_, message) =>
            {
                if (message is ConsensusProposalMsg)
                {
                    proposalSent.Set();
                }
            };

            context.Start();
            await Task.WhenAll(proposalSent.WaitAsync(), stepChangedToPreVote.WaitAsync());

            Assert.Equal(Step.PreVote, context.Step);
            Assert.Equal(1, context.Height);
            Assert.Equal(0, context.Round);
        }

        [Fact(Timeout = Timeout)]
        public async void StartAsProposerWithLastCommit()
        {
            var stepChangedToPreVote = new AsyncAutoResetEvent();
            ConsensusProposalMsg? proposal = null;
            var proposalSent = new AsyncAutoResetEvent();

            // Assumed that height 1 is already committed.  It will catch a propose to check
            // whether the lastCommit of height 1 is used for propose.  Note that Peer2
            // is the proposer for height 2.
            var (blockChain, context) = TestUtils.CreateDummyContext(
                height: 2,
                privateKey: TestUtils.PrivateKeys[2],
                validatorSet: Libplanet.Tests.TestUtils.ValidatorSet);

            context.StateChanged += (_, eventArgs) =>
            {
                if (eventArgs.Step == Step.PreVote)
                {
                    stepChangedToPreVote.Set();
                }
            };
            context.MessageBroadcasted += (_, message) =>
            {
                if (message is ConsensusProposalMsg proposalMsg)
                {
                    proposal = proposalMsg;
                    proposalSent.Set();
                }
            };

            // It needs a lastCommit to use, so we assume that index #1 block is already committed.
            Block<DumbAction> heightOneBlock = blockChain.ProposeBlock(TestUtils.PrivateKeys[1]);
            blockChain.Append(heightOneBlock, TestUtils.CreateBlockCommit(heightOneBlock));
            var lastCommit = TestUtils.CreateBlockCommit(heightOneBlock);

            context.Start(lastCommit);
            await Task.WhenAll(stepChangedToPreVote.WaitAsync(), proposalSent.WaitAsync());

            Assert.Equal(Step.PreVote, context.Step);
            Assert.NotNull(proposal);
            Block<DumbAction> proposed = BlockMarshaler.UnmarshalBlock<DumbAction>(
                (Dictionary)new Codec().Decode(proposal!.Proposal.MarshaledBlock));
            Assert.NotNull(proposed.LastCommit);
            Assert.Equal(lastCommit, proposed.LastCommit);
        }

        [Fact(Timeout = Timeout)]
        public async Task CanAcceptMessagesAfterCommitFailure()
        {
            Codec codec = new Codec();
            var stepChangedToPreVote = new AsyncAutoResetEvent();
            ConsensusProposalMsg? proposal = null;
            var proposalSent = new AsyncAutoResetEvent();
            Block<DumbAction>? proposedBlock = null;
            var stepChangedToEndCommit = new AsyncAutoResetEvent();
            var exceptionOccurred = new AsyncAutoResetEvent();
            Exception? exceptionThrown = null;

            var (blockChain, context) = TestUtils.CreateDummyContext(
                height: 2,
                privateKey: TestUtils.PrivateKeys[2]);

            // Add block #1 so we can start with a last commit for height 2.
            Block<DumbAction> heightOneBlock = blockChain.ProposeBlock(TestUtils.PrivateKeys[1]);
            blockChain.Append(heightOneBlock, TestUtils.CreateBlockCommit(heightOneBlock));
            var lastCommit = TestUtils.CreateBlockCommit(heightOneBlock);

            context.StateChanged += (_, eventArgs) =>
            {
                if (eventArgs.Step == Step.PreVote)
                {
                    stepChangedToPreVote.Set();
                }
                else if (eventArgs.Step == Step.EndCommit)
                {
                    stepChangedToEndCommit.Set();
                }
            };
            context.MessageBroadcasted += (_, message) =>
            {
                if (message is ConsensusProposalMsg proposalMsg)
                {
                    proposal = proposalMsg;
                    proposedBlock = BlockMarshaler.UnmarshalBlock<DumbAction>(
                        (Dictionary)codec.Decode(proposalMsg!.Proposal.MarshaledBlock));
                    proposalSent.Set();
                }
            };
            context.ExceptionOccurred += (_, exception) =>
            {
                exceptionThrown = exception;
                exceptionOccurred.Set();
            };

            context.Start(lastCommit);

            await Task.WhenAll(stepChangedToPreVote.WaitAsync(), proposalSent.WaitAsync());

            // Simulate bypass of context and block sync by swarm by
            // directly appending to the blockchain.
            Assert.NotNull(proposedBlock);
            blockChain.Append(proposedBlock!, TestUtils.CreateBlockCommit(proposedBlock!));
            Assert.Equal(2, blockChain.Tip.Index);

            // Make PreVotes to normally move to PreCommit step.
            foreach (int i in new int[] { 0, 1, 3 })
            {
                context.ProduceMessage(new ConsensusPreVoteMsg(new VoteMetadata(
                    2,
                    0,
                    proposedBlock!.Hash,
                    DateTimeOffset.UtcNow,
                    TestUtils.PrivateKeys[i].PublicKey,
                    VoteFlag.PreVote).Sign(TestUtils.PrivateKeys[i])));
            }

            // Validator 2 will automatically vote its PreCommit.
            foreach (int i in new int[] { 0, 1 })
            {
                context.ProduceMessage(new ConsensusPreCommitMsg(new VoteMetadata(
                    2,
                    0,
                    proposedBlock!.Hash,
                    DateTimeOffset.UtcNow,
                    TestUtils.PrivateKeys[i].PublicKey,
                    VoteFlag.PreCommit).Sign(TestUtils.PrivateKeys[i])));
            }

            await Task.WhenAll(stepChangedToEndCommit.WaitAsync(), exceptionOccurred.WaitAsync());
            Assert.IsType<InvalidBlockIndexException>(exceptionThrown);

            // Check context has only three votes.
            BlockCommit? commit = context.GetBlockCommit();
            Assert.Equal(3, commit?.Votes.Where(vote => vote.Flag == VoteFlag.PreCommit).Count());

            // Context should still accept new votes.
            context.ProduceMessage(new ConsensusPreCommitMsg(new VoteMetadata(
                2,
                0,
                proposedBlock!.Hash,
                DateTimeOffset.UtcNow,
                TestUtils.PrivateKeys[3].PublicKey,
                VoteFlag.PreCommit).Sign(TestUtils.PrivateKeys[3])));

            await Task.Delay(100);  // Wait for the new message to be added to the message log.
            commit = context.GetBlockCommit();
            Assert.Equal(4, commit?.Votes.Where(vote => vote.Flag == VoteFlag.PreCommit).Count());
        }

        [Fact(Timeout = Timeout)]
        public async Task ThrowOnInvalidProposerMessage()
        {
            Exception? exceptionThrown = null;
            var exceptionOccurred = new AsyncAutoResetEvent();

            var (blockChain, context) = TestUtils.CreateDummyContext();
            context.ExceptionOccurred += (_, e) =>
            {
                exceptionThrown = e;
                exceptionOccurred.Set();
            };
            var block = blockChain.ProposeBlock(TestUtils.PrivateKeys[1]);

            context.Start();
            context.ProduceMessage(
                TestUtils.CreateConsensusPropose(block, TestUtils.PrivateKeys[0]));
            await exceptionOccurred.WaitAsync();
            Assert.IsType<InvalidConsensusMessageException>(exceptionThrown);
        }

        [Fact(Timeout = Timeout)]
        public async Task ThrowOnDifferentHeightMessage()
        {
            Exception? exceptionThrown = null;
            var exceptionOccurred = new AsyncAutoResetEvent();

            var (blockChain, context) = TestUtils.CreateDummyContext();
            context.ExceptionOccurred += (_, e) =>
            {
                exceptionThrown = e;
                exceptionOccurred.Set();
            };
            var block = blockChain.ProposeBlock(TestUtils.PrivateKeys[2]);

            context.Start();
            context.ProduceMessage(
                TestUtils.CreateConsensusPropose(block, TestUtils.PrivateKeys[2], 2, 2));
            await exceptionOccurred.WaitAsync();
            Assert.IsType<InvalidConsensusMessageException>(exceptionThrown);

            // Reset exception thrown.
            exceptionThrown = null;
            context.ProduceMessage(
                new ConsensusPreVoteMsg(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[2],
                        2,
                        0,
                        block.Hash,
                        VoteFlag.PreVote)));
            await exceptionOccurred.WaitAsync();
            Assert.IsType<InvalidConsensusMessageException>(exceptionThrown);
        }
    }
}
