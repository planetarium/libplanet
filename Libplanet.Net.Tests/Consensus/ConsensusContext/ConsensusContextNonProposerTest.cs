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
    public class ConsensusContextNonProposerTest : ConsensusContextTestBase
    {
        private readonly ILogger _logger;

        public ConsensusContextNonProposerTest(ITestOutputHelper output)
            : base(output, privateKey: TestUtils.Peer2Priv)
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
            BlockChain.TipChanged += (sender, tuple) =>
            {
                tipChanged.Set();
            };
            ConsensusMessageSent += (observer, message) =>
            {
                if (message is ConsensusPropose propose && message.Height == 2)
                {
                    proposedBlock = BlockMarshaler.UnmarshalBlock<DumbAction>(
                        (Dictionary)codec.Decode(propose!.Payload));
                    heightTwoProposeSent.Set();
                }
            };

            ConsensusContext.NewHeight(1);
            var block1 = BlockChain.ProposeBlock(TestUtils.Peer1Priv);
            ConsensusContext.HandleMessage(
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
                ConsensusContext.HandleMessage(
                    new ConsensusVote(expectedVotes[i])
                    {
                        Remote = TestUtils.Peers[i],
                    });
            }

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
                    VoteFlag.Commit).Sign(TestUtils.PrivateKeys[i]);
                ConsensusContext.HandleMessage(
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
                votes.Where(vote => vote.BlockHash.Equals(BlockChain[1].Hash)).Count());
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
            var heightTwoStepChanged = new AsyncAutoResetEvent();
            var heightTwoStepChangedToPreVote = new AsyncAutoResetEvent();
            var heightTwoStepChangedToPreCommit = new AsyncAutoResetEvent();
            var heightTwoStepChangedToEndCommit = new AsyncAutoResetEvent();
            var heightThreeStepChangedToPropose = new AsyncAutoResetEvent();
            var heightThreeStepChangedToPreVote = new AsyncAutoResetEvent();
            var proposeSent = new AsyncAutoResetEvent();
            ConsensusMessageSent += (observer, message) =>
            {
                if (message is ConsensusPropose proposeMessage)
                {
                    propose = proposeMessage;
                    proposeSent.Set();
                }
            };

            BlockChain.Append(BlockChain.ProposeBlock(TestUtils.Peer1Priv));
            var blockHeightThree = BlockChain.ProposeBlock(TestUtils.Peer3Priv);

            ConsensusContext.NewHeight(BlockChain.Tip.Index + 1);
            await proposeSent.WaitAsync();

            Assert.Equal(2, ConsensusContext.Height);

            if (propose is null)
            {
                throw new NullException(propose);
            }

            ConsensusContext.Contexts[2].StateChanged += (sender, state) =>
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
            await heightTwoStepChangedToPreVote.WaitAsync();
            Assert.Equal(2, ConsensusContext.Height);
            Assert.Equal(Step.PreVote, ConsensusContext.Step);

            foreach ((PrivateKey privateKey, BoundPeer peer)
                in TestUtils.PrivateKeys.Zip(TestUtils.Peers, (first, second) => (first, second)))
            {
                if (privateKey == TestUtils.Peer2Priv)
                {
                    // Peer2 will send a ConsensusVote by handling the ConsensusPropose message.
                    continue;
                }

                ConsensusContext.HandleMessage(
                    new ConsensusVote(
                        new VoteMetadata(
                            2,
                            0,
                            propose.BlockHash,
                            DateTimeOffset.UtcNow,
                            privateKey.PublicKey,
                            VoteFlag.Absent).Sign(privateKey))
                    {
                        Remote = peer,
                    });
            }

            await heightTwoStepChangedToPreCommit.WaitAsync();
            Assert.Equal(Step.PreCommit, ConsensusContext.Contexts[2].Step);

            foreach ((PrivateKey privateKey, BoundPeer peer)
                in TestUtils.PrivateKeys.Zip(TestUtils.Peers, (first, second) => (first, second)))
            {
                if (privateKey == TestUtils.Peer2Priv)
                {
                    // Peer2 will send a ConsensusCommit by handling the ConsensusVote message.
                    continue;
                }

                ConsensusContext.HandleMessage(
                    new ConsensusCommit(
                        new VoteMetadata(
                            2,
                            0,
                            propose.BlockHash,
                            DateTimeOffset.UtcNow,
                            privateKey.PublicKey,
                            VoteFlag.Commit).Sign(privateKey))
                    {
                        Remote = peer,
                    });
            }

            // Message from higher height
            ConsensusContext.HandleMessage(
                new ConsensusPropose(
                    TestUtils.Peer3.PublicKey,
                    3,
                    0,
                    blockHeightThree.Hash,
                    codec.Encode(blockHeightThree.MarshalBlock()),
                    -1));

            ConsensusContext.Contexts[3].StateChanged += (sender, state) =>
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
                heightThreeStartTimestamp - heightTwoEndTimestamp > NewHeightDelay);
            Assert.Equal(3, ConsensusContext.Height);
            Assert.Equal(Step.PreVote, ConsensusContext.Step);
        }

        [Fact(Timeout = Timeout)]
        public async void UseLastCommitCacheIfHeightContextIsEmpty()
        {
            var codec = new Codec();
            var heightOneEnded = new AsyncAutoResetEvent();
            var heightOneProposeSent = new AsyncAutoResetEvent();
            var heightTwoProposeSent = new AsyncAutoResetEvent();
            Block<DumbAction>? proposedBlock = null;

            // Do a consensus for height #1. (Genesis doesn't have last commit.)
            ConsensusContext.NewHeight(BlockChain.Tip.Index + 1);
            ConsensusContext.Contexts[BlockChain.Tip.Index + 1].StateChanged +=
                (sender, tuple) =>
                {
                    if (tuple.Step == Step.EndCommit)
                    {
                        heightOneEnded.Set();
                    }
                };
            ConsensusContext.Contexts[BlockChain.Tip.Index + 1].MessageConsumed +=
                (sender, message) =>
                {
                    if (message is ConsensusPropose propose)
                    {
                        heightOneProposeSent.Set();
                    }
                };

            var block = BlockChain.ProposeBlock(TestUtils.Peer1Priv);
            ConsensusContext.HandleMessage(
                TestUtils.CreateConsensusPropose(block, TestUtils.Peer1Priv));

            await heightOneProposeSent.WaitAsync();

            // Use PreCommit votes for skipping PreVote step.
            TestUtils.HandleFourPeersPreCommitMessages(
                ConsensusContext,
                TestUtils.Peer2Priv,
                block.Hash);

            await heightOneEnded.WaitAsync();
            // Gets a vote set of a current context.
            var voteSet = ConsensusContext.Contexts[ConsensusContext.Height]
                .VoteSet(ConsensusContext.Contexts[ConsensusContext.Height].CommittedRound);

            // Forcefully dispose current context.
            ConsensusContext.Contexts[ConsensusContext.Height].Dispose();

            // Creates a cache of disposed context.
            var blockCommit = new BlockCommit(voteSet, block.Hash);
            BlockChain.Store.PutLastCommit(blockCommit);

            // Remove context for testing whether context is getting LastCommit from store. Used
            // ConsensusContext.Height because it is in EndCommit, so the height does not changed
            // yet.
            ConsensusContext.Contexts.Remove(ConsensusContext.Height);

            // Restart consensus from height #2
            ConsensusContext.NewHeight(BlockChain.Tip.Index + 1);
            ConsensusContext.Contexts[BlockChain.Tip.Index + 1].MessageConsumed +=
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
