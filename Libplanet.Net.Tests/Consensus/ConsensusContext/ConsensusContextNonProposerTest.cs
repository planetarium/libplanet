using System;
using System.Collections.Immutable;
using System.Linq;
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
using Xunit.Sdk;

namespace Libplanet.Net.Tests.Consensus.ConsensusContext
{
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
            AsyncAutoResetEvent tipChanged = new AsyncAutoResetEvent();
            AsyncAutoResetEvent heightTwoProposed = new AsyncAutoResetEvent();
            ConsensusPropose? propose = null;
            var codec = new Codec();
            BlockChain.TipChanged += (sender, tuple) =>
            {
                tipChanged.Set();
            };

            watchConsensusMessage = (message) =>
            {
                if (message is ConsensusPropose proposeMessage &&
                    message.Height == 2)
                {
                    propose = proposeMessage;
                    heightTwoProposed.Set();
                }
            };

            ConsensusContext.NewHeight(1);
            var block1 = await BlockChain.MineBlock(TestUtils.Peer1Priv, append: false);
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
                expectedVotes[i] = new Vote(
                    1,
                    0,
                    block1.Hash,
                    DateTimeOffset.UtcNow,
                    TestUtils.Validators[i],
                    VoteFlag.Absent,
                    null).Sign(TestUtils.PrivateKeys[i]);
                ConsensusContext.HandleMessage(
                    new ConsensusVote(expectedVotes[i])
                    {
                        Remote = new Peer(TestUtils.Validators[i]),
                    });
            }

            // Peer2 sends a ConsensusVote via background process.
            // Enough votes are present to proceed even without Peer3's vote.
            for (int i = 0; i < 2; i++)
            {
                expectedVotes[i] = new Vote(
                    1,
                    0,
                    block1.Hash,
                    DateTimeOffset.UtcNow,
                    TestUtils.Validators[i],
                    VoteFlag.Commit,
                    null).Sign(TestUtils.PrivateKeys[i]);
                ConsensusContext.HandleMessage(
                    new ConsensusCommit(expectedVotes[i])
                    {
                        Remote = new Peer(TestUtils.Validators[i]),
                    });
            }

            await heightTwoProposed.WaitAsync();
            Block<DumbAction> proposedBlock =
                BlockMarshaler.UnmarshalBlock<DumbAction>(
                    BlockChain.Policy.GetHashAlgorithm,
                    (Dictionary)codec.Decode(propose!.Payload));
            ImmutableArray<Vote> votes = proposedBlock.LastCommit?.Votes is { } vs
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
            ConsensusPropose? propose = null;
            var heightTwoStepChanged = new AsyncAutoResetEvent();
            var heightTwoStepChangedToPreVote = new AsyncAutoResetEvent();
            var heightTwoStepChangedToPreCommit = new AsyncAutoResetEvent();
            var heightTwoStepChangedToEndCommit = new AsyncAutoResetEvent();
            var heightThreeStepChangedToPreVote = new AsyncAutoResetEvent();
            var proposed = new AsyncAutoResetEvent();

            var codec = new Codec();
            await BlockChain.MineBlock(TestUtils.Peer1Priv, append: true);

            Block<DumbAction> blockHeightThree =
                await BlockChain.MineBlock(TestUtils.Peer3Priv, append: false);

            watchConsensusMessage = (message) =>
            {
                if (message is ConsensusPropose proposeMessage)
                {
                    propose = proposeMessage;
                    proposed.Set();
                }
            };

            ConsensusContext.NewHeight(BlockChain.Tip.Index + 1);
            await proposed.WaitAsync();

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

            foreach (var privateKey in TestUtils.PrivateKeys)
            {
                if (privateKey == TestUtils.Peer2Priv)
                {
                    // Peer2 will send a ConsensusVote by handling the ConsensusPropose message.
                    continue;
                }

                ConsensusContext.HandleMessage(
                    new ConsensusVote(
                        new Vote(
                            2,
                            0,
                            propose.BlockHash,
                            DateTimeOffset.UtcNow,
                            privateKey.PublicKey,
                            VoteFlag.Absent,
                            null).Sign(privateKey))
                    {
                        Remote = new Peer(privateKey.PublicKey),
                    });
            }

            await heightTwoStepChangedToPreCommit.WaitAsync();
            Assert.Equal(Step.PreCommit, ConsensusContext.Contexts[2].Step);

            foreach (var privateKey in TestUtils.PrivateKeys)
            {
                if (privateKey == TestUtils.Peer2Priv)
                {
                    // Peer2 will send a ConsensusCommit by handling the ConsensusVote message.
                    continue;
                }

                ConsensusContext.HandleMessage(
                    new ConsensusCommit(
                        new Vote(
                            2,
                            0,
                            propose.BlockHash,
                            DateTimeOffset.UtcNow,
                            privateKey.PublicKey,
                            VoteFlag.Commit,
                            null).Sign(privateKey))
                    {
                        Remote = new Peer(privateKey.PublicKey),
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
                if (state.Step == Step.PreVote)
                {
                    heightThreeStepChangedToPreVote.Set();
                }
            };

            // Commit ends
            await heightTwoStepChangedToEndCommit.WaitAsync();
            // Propose -> PreVote (message consumed)
            await heightThreeStepChangedToPreVote.WaitAsync();
            Assert.Equal(3, ConsensusContext.Height);
            Assert.Equal(Step.PreVote, ConsensusContext.Step);
        }
    }
}
