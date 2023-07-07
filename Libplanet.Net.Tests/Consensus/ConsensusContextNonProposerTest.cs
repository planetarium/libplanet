using System;
using System.Collections.Immutable;
using System.Linq;
using Bencodex;
using Bencodex.Types;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.Net.Consensus;
using Libplanet.Net.Messages;
using Nito.AsyncEx;
using Serilog;
using xRetry;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Net.Tests.Consensus
{
    public class ConsensusContextNonProposerTest
    {
        private const int Timeout = 30000;
        private readonly ILogger _logger;

        public ConsensusContextNonProposerTest(ITestOutputHelper output)
        {
            const string outputTemplate =
                "{Timestamp:HH:mm:ss:ffffffZ} - {Message} {Exception}";
            Log.Logger = new LoggerConfiguration()
                .MinimumLevel.Verbose()
                .WriteTo.TestOutput(output, outputTemplate: outputTemplate)
                .CreateLogger()
                .ForContext<ConsensusContextNonProposerTest>();

            _logger = Log.ForContext<ConsensusContextNonProposerTest>();
        }

        [Fact(Timeout = Timeout)]
        public async void NewHeightWithLastCommit()
        {
            var codec = new Codec();
            var tipChanged = new AsyncAutoResetEvent();
            ConsensusProposalMsg? proposal = null;
            var heightTwoProposalSent = new AsyncAutoResetEvent();
            var (blockChain, consensusContext) = TestUtils.CreateDummyConsensusContext(
                TimeSpan.FromSeconds(1),
                TestUtils.Policy,
                TestUtils.PrivateKeys[2]);
            blockChain.TipChanged += (_, __) => tipChanged.Set();
            consensusContext.MessagePublished += (_, eventArgs) =>
            {
                if (eventArgs.Height == 2 && eventArgs.Message is ConsensusProposalMsg proposalMsg)
                {
                    proposal = proposalMsg;
                    heightTwoProposalSent.Set();
                }
            };

            consensusContext.NewHeight(1);
            var block1 = blockChain.ProposeBlock(TestUtils.PrivateKeys[1]);
            consensusContext.HandleMessage(
                TestUtils.CreateConsensusPropose(block1, TestUtils.PrivateKeys[1]));
            var expectedVotes = new Vote[4];

            // Peer2 sends a ConsensusVote via background process.
            // Enough votes are present to proceed even without Peer3's vote.
            for (int i = 0; i < 2; i++)
            {
                expectedVotes[i] = new VoteMetadata(
                    1,
                    0,
                    block1.Hash,
                    DateTimeOffset.UtcNow,
                    TestUtils.ValidatorSet[i].PublicKey,
                    VoteFlag.PreVote).Sign(TestUtils.PrivateKeys[i]);
                consensusContext.HandleMessage(new ConsensusPreVoteMsg(expectedVotes[i]));
            }

            // Peer2 sends a ConsensusCommit via background process.
            // Enough votes are present to proceed even without Peer3's vote.
            for (int i = 0; i < 2; i++)
            {
                expectedVotes[i] = new VoteMetadata(
                    1,
                    0,
                    block1.Hash,
                    DateTimeOffset.UtcNow,
                    TestUtils.ValidatorSet[i].PublicKey,
                    VoteFlag.PreCommit).Sign(TestUtils.PrivateKeys[i]);
                consensusContext.HandleMessage(new ConsensusPreCommitMsg(expectedVotes[i]));
            }

            await heightTwoProposalSent.WaitAsync();
            Assert.NotNull(proposal);

            Block proposedBlock = BlockMarshaler.UnmarshalBlock(
                (Dictionary)codec.Decode(proposal!.Proposal.MarshaledBlock));
            ImmutableArray<Vote> votes = proposedBlock.LastCommit?.Votes is { } vs
                ? vs
                : throw new NullReferenceException();
            Assert.Equal(VoteFlag.PreCommit, votes[0].Flag);
            Assert.Equal(VoteFlag.PreCommit, votes[1].Flag);
            Assert.Equal(VoteFlag.PreCommit, votes[2].Flag);
            Assert.Equal(VoteFlag.Null, votes[3].Flag);
        }

        [Fact(Timeout = Timeout)]
        public async void HandleMessageFromHigherHeight()
        {
            var codec = new Codec();
            ConsensusProposalMsg? proposal = null;
            var heightTwoStepChangedToPreVote = new AsyncAutoResetEvent();
            var heightTwoStepChangedToPreCommit = new AsyncAutoResetEvent();
            var heightTwoStepChangedToEndCommit = new AsyncAutoResetEvent();
            var heightThreeStepChangedToPropose = new AsyncAutoResetEvent();
            var heightThreeStepChangedToPreVote = new AsyncAutoResetEvent();
            var proposalSent = new AsyncAutoResetEvent();
            var newHeightDelay = TimeSpan.FromSeconds(1);

            var (blockChain, consensusContext) = TestUtils.CreateDummyConsensusContext(
                newHeightDelay,
                TestUtils.Policy,
                TestUtils.PrivateKeys[2]);

            consensusContext.StateChanged += (_, eventArgs) =>
            {
                if (eventArgs.Height == 2)
                {
                    if (eventArgs.Step == ConsensusStep.PreVote)
                    {
                        heightTwoStepChangedToPreVote.Set();
                    }
                    else if (eventArgs.Step == ConsensusStep.PreCommit)
                    {
                        heightTwoStepChangedToPreCommit.Set();
                    }
                    else if (eventArgs.Step == ConsensusStep.EndCommit)
                    {
                        heightTwoStepChangedToEndCommit.Set();
                    }
                }
                else if (eventArgs.Height == 3)
                {
                    if (eventArgs.Step == ConsensusStep.Propose)
                    {
                        heightThreeStepChangedToPropose.Set();
                    }
                    else if (eventArgs.Step == ConsensusStep.PreVote)
                    {
                        heightThreeStepChangedToPreVote.Set();
                    }
                }
            };
            consensusContext.MessagePublished += (_, eventArgs) =>
            {
                if (eventArgs.Message is ConsensusProposalMsg proposalMsg)
                {
                    proposal = proposalMsg;
                    proposalSent.Set();
                }
            };

            Block block = blockChain.ProposeBlock(TestUtils.PrivateKeys[1]);
            blockChain.Append(block, TestUtils.CreateBlockCommit(block));

            blockChain.Store.PutBlockCommit(TestUtils.CreateBlockCommit(blockChain[1]));
            await proposalSent.WaitAsync();

            Assert.Equal(2, consensusContext.Height);

            if (proposal is null)
            {
                throw new Exception("Proposal is null.");
            }

            foreach ((PrivateKey privateKey, BoundPeer peer)
                     in TestUtils.PrivateKeys.Zip(
                         TestUtils.Peers,
                         (first, second) => (first, second)))
            {
                if (privateKey == TestUtils.PrivateKeys[2])
                {
                    // Peer2 will send a ConsensusVote by handling the ConsensusPropose message.
                    continue;
                }

                consensusContext.HandleMessage(
                    new ConsensusPreVoteMsg(
                        new VoteMetadata(
                            2,
                            0,
                            proposal!.BlockHash,
                            DateTimeOffset.UtcNow,
                            privateKey.PublicKey,
                            VoteFlag.PreVote).Sign(privateKey)));
            }

            foreach ((PrivateKey privateKey, BoundPeer peer)
                     in TestUtils.PrivateKeys.Zip(
                         TestUtils.Peers,
                         (first, second) => (first, second)))
            {
                if (privateKey == TestUtils.PrivateKeys[2])
                {
                    // Peer2 will send a ConsensusCommit by handling the ConsensusVote message.
                    continue;
                }

                consensusContext.HandleMessage(
                    new ConsensusPreCommitMsg(
                        new VoteMetadata(
                            2,
                            0,
                            proposal!.BlockHash,
                            DateTimeOffset.UtcNow,
                            privateKey.PublicKey,
                            VoteFlag.PreCommit).Sign(privateKey)));
            }

            await heightTwoStepChangedToEndCommit.WaitAsync();

            var blockHeightTwo =
                BlockMarshaler.UnmarshalBlock(
                    (Dictionary)codec.Decode(proposal.Proposal.MarshaledBlock));
            var blockHeightThree = blockChain.ProposeBlock(
                TestUtils.PrivateKeys[3],
                TestUtils.CreateBlockCommit(blockHeightTwo));

            // Message from higher height
            consensusContext.HandleMessage(
                TestUtils.CreateConsensusPropose(blockHeightThree, TestUtils.PrivateKeys[3], 3));

            // New height started.
            await heightThreeStepChangedToPropose.WaitAsync();
            // Propose -> PreVote (message consumed)
            await heightThreeStepChangedToPreVote.WaitAsync();
            Assert.Equal(3, consensusContext.Height);
            Assert.Equal(ConsensusStep.PreVote, consensusContext.Step);
        }

        [Fact(Timeout = Timeout)]
        public async void UseLastCommitCacheIfHeightContextIsEmpty()
        {
            var codec = new Codec();
            var heightTwoProposalSent = new AsyncAutoResetEvent();
            Block? proposedBlock = null;

            var (blockChain, consensusContext) = TestUtils.CreateDummyConsensusContext(
                TimeSpan.FromSeconds(1),
                TestUtils.Policy,
                TestUtils.PrivateKeys[2]);

            consensusContext.MessageConsumed += (_, eventArgs) =>
            {
                if (eventArgs.Height == 2 &&
                    eventArgs.Message is ConsensusProposalMsg propose)
                {
                    proposedBlock = BlockMarshaler.UnmarshalBlock(
                        (Dictionary)codec.Decode(propose!.Proposal.MarshaledBlock));
                    heightTwoProposalSent.Set();
                }
            };

            // Do a consensus for height #1. (Genesis doesn't have last commit.)
            consensusContext.NewHeight(blockChain.Tip.Index + 1);

            Block block = blockChain.ProposeBlock(TestUtils.PrivateKeys[1]);
            var createdLastCommit = TestUtils.CreateBlockCommit(block);
            blockChain.Append(block, createdLastCommit);

            // Context for height #2 where node #2 is the proposer is automatically started
            // by watching blockchain's Tip.
            await heightTwoProposalSent.WaitAsync();
            Assert.NotNull(proposedBlock);
            Assert.Equal(2, proposedBlock!.Index);
            Assert.Equal(createdLastCommit, proposedBlock!.LastCommit);
        }

        // Retry: This calculates delta time.
        [RetryFact(10, Timeout = Timeout)]
        public async void NewHeightDelay()
        {
            var newHeightDelay = TimeSpan.FromSeconds(1);
            // The maximum error margin. (macos-netcore-test)
            var timeError = 500;
            var heightOneEndCommit = new AsyncAutoResetEvent();
            var heightTwoProposalSent = new AsyncAutoResetEvent();
            var (blockChain, consensusContext) = TestUtils.CreateDummyConsensusContext(
                newHeightDelay,
                TestUtils.Policy,
                TestUtils.PrivateKeys[2]);
            consensusContext.StateChanged += (_, eventArgs) =>
            {
                if (eventArgs.Height == 1 && eventArgs.Step == ConsensusStep.EndCommit)
                {
                    heightOneEndCommit.Set();
                }
            };
            consensusContext.MessagePublished += (_, eventArgs) =>
            {
                if (eventArgs.Height == 2 && eventArgs.Message is ConsensusProposalMsg)
                {
                    heightTwoProposalSent.Set();
                }
            };

            consensusContext.NewHeight(blockChain.Tip.Index + 1);

            var block = blockChain.ProposeBlock(TestUtils.PrivateKeys[1]);
            consensusContext.HandleMessage(
                TestUtils.CreateConsensusPropose(block, TestUtils.PrivateKeys[1]));

            TestUtils.HandleFourPeersPreCommitMessages(
                 consensusContext, TestUtils.PrivateKeys[2], block.Hash);

            await heightOneEndCommit.WaitAsync();
            var endCommitTime = DateTimeOffset.UtcNow;

            await heightTwoProposalSent.WaitAsync();
            var proposeTime = DateTimeOffset.UtcNow;
            var difference = proposeTime - endCommitTime;

            _logger.Debug("Difference: {Difference}", difference);
            // Check new height delay; slight margin of error is allowed as delay task
            // is run asynchronously from context events.
            Assert.True(
                ((proposeTime - endCommitTime) - newHeightDelay).Duration() <
                    TimeSpan.FromMilliseconds(timeError));
        }
    }
}
