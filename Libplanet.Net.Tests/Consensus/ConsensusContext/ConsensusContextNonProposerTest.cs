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
using Xunit;
using Xunit.Abstractions;
using Xunit.Sdk;

namespace Libplanet.Net.Tests.Consensus.ConsensusContext
{
    [Collection("NetMQConfiguration")]
    public class ConsensusContextNonProposerTest
    {
        private const int Timeout = 30000;
        private readonly ILogger _logger;

        public ConsensusContextNonProposerTest(ITestOutputHelper output)
        {
            const string outputTemplate =
                "{Timestamp:HH:mm:ss:ffffffZ} - {Message}";
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
            Block<DumbAction>? proposedBlock = null;
            var heightTwoProposeSent = new AsyncAutoResetEvent();
            var (_, blockChain, consensusContext) = TestUtils.CreateDummyConsensusContext(
                TimeSpan.FromSeconds(1),
                TestUtils.Policy,
                TestUtils.Peer2Priv,
                consensusMessageSent: CatchPropose);

            blockChain.TipChanged += (sender, tuple) =>
            {
                tipChanged.Set();
            };
            void CatchPropose(object? observer, ConsensusMessage? message)
            {
                if (message is ConsensusPropose propose && message.Height == 2)
                {
                    proposedBlock = BlockMarshaler.UnmarshalBlock<DumbAction>(
                        (Dictionary)codec.Decode(propose!.Payload));
                    heightTwoProposeSent.Set();
                }
            }

            consensusContext.NewHeight(1);
            var block1 = blockChain.ProposeBlock(TestUtils.Peer1Priv);
            consensusContext.HandleMessage(
                new ConsensusPropose(
                    TestUtils.Peer1.PublicKey,
                    1,
                    0,
                    block1.Hash,
                    codec.Encode(block1.MarshalBlock()),
                    -1));
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
                    VoteFlag.Absent).Sign(TestUtils.PrivateKeys[i]);
                consensusContext.HandleMessage(
                    new ConsensusVote(expectedVotes[i])
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
                    VoteFlag.Commit).Sign(TestUtils.PrivateKeys[i]);
                consensusContext.HandleMessage(
                    new ConsensusCommit(expectedVotes[i])
                    {
                        Remote = TestUtils.Peers[i],
                    });
            }

            await heightTwoProposeSent.WaitAsync();
            ImmutableArray<Vote> votes = proposedBlock!.LastCommit?.Votes is { } vs
                ? vs
                : throw new NullReferenceException();
            Assert.Equal(
                votes.Count(),
                votes.Where(vote => vote.BlockHash.Equals(blockChain[1].Hash)).Count());
            Assert.Equal(VoteFlag.Commit, votes[0].Flag);
            Assert.Equal(VoteFlag.Commit, votes[1].Flag);
            Assert.Equal(VoteFlag.Commit, votes[2].Flag);
            Assert.Equal(VoteFlag.Null, votes[3].Flag);
        }

        [Fact(Timeout = Timeout)]
        public async void HandleMessageFromHigherHeight()
        {
            var codec = new Codec();
            ConsensusPropose? propose = null;
            var heightTwoStepChangedToPreVote = new AsyncAutoResetEvent();
            var heightTwoStepChangedToPreCommit = new AsyncAutoResetEvent();
            var heightTwoStepChangedToEndCommit = new AsyncAutoResetEvent();
            var heightThreeStepChangedToPropose = new AsyncAutoResetEvent();
            var heightThreeStepChangedToPreVote = new AsyncAutoResetEvent();
            var proposeSent = new AsyncAutoResetEvent();
            var newHeightDelay = TimeSpan.FromSeconds(1);

            var (_, blockChain, consensusContext) = TestUtils.CreateDummyConsensusContext(
                newHeightDelay,
                TestUtils.Policy,
                TestUtils.Peer2Priv,
                consensusMessageSent: CatchPropose);

            void CatchPropose(object? observer, ConsensusMessage? message)
            {
                if (message is ConsensusPropose proposeMessage)
                {
                    propose = proposeMessage;
                    proposeSent.Set();
                }
            }

            blockChain.Append(blockChain.ProposeBlock(TestUtils.Peer1Priv));

            blockChain.Store.PutLastCommit(TestUtils.CreateLastCommit(
                blockChain[1].Hash,
                1,
                0));
            consensusContext.NewHeight(blockChain.Tip.Index + 1);
            await proposeSent.WaitAsync();

            Assert.Equal(2, consensusContext.Height);

            if (propose is null)
            {
                throw new NullException(propose);
            }

            // FIXME: Waiting for PreVote is not triggered and block the whole test.
            consensusContext.Contexts[2].StateChanged += (sender, state) =>
            {
                if (state.Step == Step.PreVote)
                {
                    heightTwoStepChangedToPreVote.Set();
                }
                else if (state.Step == Step.PreCommit)
                {
                    heightTwoStepChangedToPreCommit.Set();
                }
                else if (state.Step == Step.EndCommit)
                {
                    heightTwoStepChangedToEndCommit.Set();
                }
            };

            foreach ((PrivateKey privateKey, BoundPeer peer)
                in TestUtils.PrivateKeys.Zip(TestUtils.Peers, (first, second) => (first, second)))
            {
                if (privateKey == TestUtils.Peer2Priv)
                {
                    // Peer2 will send a ConsensusVote by handling the ConsensusPropose message.
                    continue;
                }

                consensusContext.HandleMessage(
                    new ConsensusVote(
                        new VoteMetadata(
                            2,
                            0,
                            propose!.BlockHash,
                            DateTimeOffset.UtcNow,
                            privateKey.PublicKey,
                            VoteFlag.Absent).Sign(privateKey))
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
                    new ConsensusCommit(
                        new VoteMetadata(
                            2,
                            0,
                            propose!.BlockHash,
                            DateTimeOffset.UtcNow,
                            privateKey.PublicKey,
                            VoteFlag.Commit).Sign(privateKey))
                    {
                        Remote = peer,
                    });
            }

            await heightTwoStepChangedToEndCommit.WaitAsync();

            var blockHeightTwo =
                BlockMarshaler.UnmarshalBlock<DumbAction>(
                    (Dictionary)codec.Decode(propose.Payload));
            var blockHeightThree = blockChain.ProposeBlock(
                TestUtils.Peer3Priv,
                lastCommit: TestUtils.CreateLastCommit(blockHeightTwo.Hash, 2, 0));

            // Message from higher height
            consensusContext.HandleMessage(
                new ConsensusPropose(
                    TestUtils.Peer3.PublicKey,
                    3,
                    0,
                    blockHeightThree.Hash,
                    codec.Encode(blockHeightThree.MarshalBlock()),
                    -1));

            consensusContext.Contexts[3].StateChanged += (sender, state) =>
            {
                if (state.Step == Step.Propose)
                {
                    heightThreeStepChangedToPropose.Set();
                }
                else if (state.Step == Step.PreVote)
                {
                    heightThreeStepChangedToPreVote.Set();
                }
            };

            // Commit ends.
            await heightTwoStepChangedToEndCommit.WaitAsync();
            var heightTwoEndTimestamp = DateTime.UtcNow;
            // New height started.
            await heightThreeStepChangedToPropose.WaitAsync();
            var heightThreeStartTimestamp = DateTime.UtcNow;
            // Propose -> PreVote (message consumed)
            await heightThreeStepChangedToPreVote.WaitAsync();
            // Check new height delay.
            Assert.True(
                heightThreeStartTimestamp - heightTwoEndTimestamp > newHeightDelay);
            Assert.Equal(3, consensusContext.Height);
            Assert.Equal(Step.PreVote, consensusContext.Step);
        }

        [Fact(Timeout = Timeout)]
        public async void UseLastCommitCacheIfHeightContextIsEmpty()
        {
            var codec = new Codec();
            var heightOneEnded = new AsyncAutoResetEvent();
            var heightOneProposeSent = new AsyncAutoResetEvent();
            var heightTwoProposeSent = new AsyncAutoResetEvent();
            Block<DumbAction>? proposedBlock = null;

            var (_, blockChain, consensusContext) = TestUtils.CreateDummyConsensusContext(
                TimeSpan.FromSeconds(1),
                TestUtils.Policy,
                TestUtils.Peer2Priv);

            // Do a consensus for height #1. (Genesis doesn't have last commit.)
            consensusContext.NewHeight(blockChain.Tip.Index + 1);
            consensusContext.Contexts[blockChain.Tip.Index + 1].StateChanged +=
                (sender, tuple) =>
                {
                    if (tuple.Step == Step.EndCommit)
                    {
                        heightOneEnded.Set();
                    }
                };
            consensusContext.Contexts[blockChain.Tip.Index + 1].MessageConsumed +=
                (sender, message) =>
                {
                    if (message is ConsensusPropose propose)
                    {
                        heightOneProposeSent.Set();
                    }
                };

            var block = blockChain.ProposeBlock(TestUtils.Peer1Priv);
            consensusContext.HandleMessage(
                TestUtils.CreateConsensusPropose(block, TestUtils.Peer1Priv));

            await heightOneProposeSent.WaitAsync();

            // Use PreCommit votes for skipping PreVote step.
            TestUtils.HandleFourPeersPreCommitMessages(
                consensusContext,
                TestUtils.Peer2Priv,
                block.Hash);

            await heightOneEnded.WaitAsync();
            // Gets a vote set of a current context.
            var voteSet = consensusContext.Contexts[consensusContext.Height]
                .VoteSet(consensusContext.Contexts[consensusContext.Height].CommittedRound);

            // Forcefully dispose current context.
            consensusContext.Contexts[consensusContext.Height].Dispose();

            // Creates a cache of disposed context.
            var blockCommit = new BlockCommit(voteSet, block.Hash);
            blockChain.Store.PutLastCommit(blockCommit);

            // Remove context for testing whether context is getting LastCommit from store. Used
            // ConsensusContext.Height because it is in EndCommit, so the height does not changed
            // yet.
            consensusContext.Contexts.Remove(consensusContext.Height);

            // Restart consensus from height #2
            consensusContext.NewHeight(blockChain.Tip.Index + 1);
            consensusContext.Contexts[blockChain.Tip.Index + 1].MessageConsumed +=
                (sender, message) =>
                {
                    if (message is ConsensusPropose propose)
                    {
                        proposedBlock = BlockMarshaler.UnmarshalBlock<DumbAction>(
                            (Dictionary)codec.Decode(propose!.Payload));
                        heightTwoProposeSent.Set();
                    }
                };
            await heightTwoProposeSent.WaitAsync();

            if (proposedBlock == null)
            {
                throw new NullException("An error has occurred in block proposal.");
            }

            Assert.Equal(blockCommit, proposedBlock.LastCommit);
        }
    }
}
