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
using Libplanet.Tests.Common.Action;
using Nito.AsyncEx;
using Serilog;
using xRetry;
using Xunit;
using Xunit.Abstractions;
using Xunit.Sdk;

namespace Libplanet.Net.Tests.Consensus.ConsensusContext
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
            var (_, blockChain, consensusContext) = TestUtils.CreateDummyConsensusContext(
                TimeSpan.FromSeconds(1),
                TestUtils.Policy,
                TestUtils.Peer2Priv);
            blockChain.TipChanged += (_, __) => tipChanged.Set();
            consensusContext.MessageBroadcasted += (_, eventArgs) =>
            {
                if (eventArgs.Height == 2 && eventArgs.Message is ConsensusProposalMsg proposalMsg)
                {
                    proposal = proposalMsg;
                    heightTwoProposalSent.Set();
                }
            };

            consensusContext.NewHeight(1);
            var block1 = blockChain.ProposeBlock(TestUtils.Peer1Priv);
            consensusContext.HandleMessage(
                TestUtils.CreateConsensusPropose(block1, TestUtils.Peer1Priv));
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
                    TestUtils.Validators[i],
                    VoteFlag.PreVote).Sign(TestUtils.PrivateKeys[i]);
                consensusContext.HandleMessage(
                    new ConsensusPreVoteMsg(expectedVotes[i])
                    {
                        Remote = TestUtils.Peers[i],
                    });
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
                    TestUtils.Validators[i],
                    VoteFlag.PreCommit).Sign(TestUtils.PrivateKeys[i]);
                consensusContext.HandleMessage(
                    new ConsensusPreCommitMsg(expectedVotes[i])
                    {
                        Remote = TestUtils.Peers[i],
                    });
            }

            await heightTwoProposalSent.WaitAsync();
            Assert.NotNull(proposal);

            Block<DumbAction> proposedBlock = BlockMarshaler.UnmarshalBlock<DumbAction>(
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

            var (_, blockChain, consensusContext) = TestUtils.CreateDummyConsensusContext(
                newHeightDelay,
                TestUtils.Policy,
                TestUtils.Peer2Priv);

            consensusContext.StateChanged += (_, eventArgs) =>
            {
                if (eventArgs.Height == 2)
                {
                    if (eventArgs.Step == Step.PreVote)
                    {
                        heightTwoStepChangedToPreVote.Set();
                    }
                    else if (eventArgs.Step == Step.PreCommit)
                    {
                        heightTwoStepChangedToPreCommit.Set();
                    }
                    else if (eventArgs.Step == Step.EndCommit)
                    {
                        heightTwoStepChangedToEndCommit.Set();
                    }
                }
                else if (eventArgs.Height == 3)
                {
                    if (eventArgs.Step == Step.Propose)
                    {
                        heightThreeStepChangedToPropose.Set();
                    }
                    else if (eventArgs.Step == Step.PreVote)
                    {
                        heightThreeStepChangedToPreVote.Set();
                    }
                }
            };
            consensusContext.MessageBroadcasted += (_, eventArgs) =>
            {
                if (eventArgs.Message is ConsensusProposalMsg proposalMsg)
                {
                    proposal = proposalMsg;
                    proposalSent.Set();
                }
            };

            blockChain.Append(blockChain.ProposeBlock(TestUtils.Peer1Priv));

            blockChain.Store.PutLastCommit(TestUtils.CreateLastCommit(
                blockChain[1].Hash,
                1,
                0));
            await proposalSent.WaitAsync();

            Assert.Equal(2, consensusContext.Height);

            if (proposal is null)
            {
                throw new NullException(proposal);
            }

            foreach ((PrivateKey privateKey, BoundPeer peer)
                     in TestUtils.PrivateKeys.Zip(
                         TestUtils.Peers,
                         (first, second) => (first, second)))
            {
                if (privateKey == TestUtils.Peer2Priv)
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
                            VoteFlag.PreVote).Sign(privateKey))
                    {
                        Remote = peer,
                    });
            }

            foreach ((PrivateKey privateKey, BoundPeer peer)
                     in TestUtils.PrivateKeys.Zip(
                         TestUtils.Peers,
                         (first, second) => (first, second)))
            {
                if (privateKey == TestUtils.Peer2Priv)
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
                            VoteFlag.PreCommit).Sign(privateKey))
                    {
                        Remote = peer,
                    });
            }

            await heightTwoStepChangedToEndCommit.WaitAsync();

            var blockHeightTwo =
                BlockMarshaler.UnmarshalBlock<DumbAction>(
                    (Dictionary)codec.Decode(proposal.Proposal.MarshaledBlock));
            var blockHeightThree = blockChain.ProposeBlock(
                TestUtils.Peer3Priv,
                lastCommit: TestUtils.CreateLastCommit(blockHeightTwo.Hash, 2, 0));

            // Message from higher height
            consensusContext.HandleMessage(
                TestUtils.CreateConsensusPropose(blockHeightThree, TestUtils.Peer3Priv, 3));

            // New height started.
            await heightThreeStepChangedToPropose.WaitAsync();
            // Propose -> PreVote (message consumed)
            await heightThreeStepChangedToPreVote.WaitAsync();
            Assert.Equal(3, consensusContext.Height);
            Assert.Equal(Step.PreVote, consensusContext.Step);
        }

        [Fact(Timeout = Timeout)]
        public async void UseLastCommitCacheIfHeightContextIsEmpty()
        {
            var codec = new Codec();
            var heightTwoProposalSent = new AsyncAutoResetEvent();
            Block<DumbAction>? proposedBlock = null;

            var (_, blockChain, consensusContext) = TestUtils.CreateDummyConsensusContext(
                TimeSpan.FromSeconds(1),
                TestUtils.Policy,
                TestUtils.Peer2Priv);

            consensusContext.MessageConsumed += (_, eventArgs) =>
            {
                if (eventArgs.Height == 2 &&
                    eventArgs.Message is ConsensusProposalMsg propose)
                {
                    proposedBlock = BlockMarshaler.UnmarshalBlock<DumbAction>(
                        (Dictionary)codec.Decode(propose!.Proposal.MarshaledBlock));
                    heightTwoProposalSent.Set();
                }
            };

            // Do a consensus for height #1. (Genesis doesn't have last commit.)
            consensusContext.NewHeight(blockChain.Tip.Index + 1);

            var block = blockChain.ProposeBlock(TestUtils.Peer1Priv);
            blockChain.Append(block);

            // Creates a lastCommit of height 1 and put it to the store.
            var createdLastCommit = TestUtils.CreateLastCommit(block.Hash, 1, 0);
            blockChain.Store.PutLastCommit(createdLastCommit);

            // Starts height 2. Node 2 is the proposer.
            consensusContext.NewHeight(blockChain.Tip.Index + 1);
            await heightTwoProposalSent.WaitAsync();
            Assert.NotNull(proposedBlock);
            Assert.Equal(createdLastCommit, proposedBlock!.LastCommit);
        }

        // Retry: This calculates delta time.
        [RetryFact]
        public async void NewHeightDelay()
        {
            var newHeightDelay = TimeSpan.FromSeconds(1);
            // The maximum error margin. (macos-netcore-test)
            var timeError = 500;
            var heightOneEndCommit = new AsyncAutoResetEvent();
            var heightTwoProposalSent = new AsyncAutoResetEvent();
            var (_, blockChain, consensusContext) = TestUtils.CreateDummyConsensusContext(
                newHeightDelay,
                TestUtils.Policy,
                TestUtils.Peer2Priv);
            consensusContext.StateChanged += (_, eventArgs) =>
            {
                if (eventArgs.Height == 1 && eventArgs.Step == Step.EndCommit)
                {
                    heightOneEndCommit.Set();
                }
            };
            consensusContext.MessageBroadcasted += (_, eventArgs) =>
            {
                if (eventArgs.Height == 2 && eventArgs.Message is ConsensusProposalMsg)
                {
                    heightTwoProposalSent.Set();
                }
            };

            consensusContext.NewHeight(blockChain.Tip.Index + 1);

            var block = blockChain.ProposeBlock(TestUtils.Peer1Priv);
            consensusContext.HandleMessage(
                TestUtils.CreateConsensusPropose(block, TestUtils.Peer1Priv));

            TestUtils.HandleFourPeersPreCommitMessages(
                 consensusContext, TestUtils.Peer2Priv, block.Hash);

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
