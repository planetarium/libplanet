using System;
using System.Collections.Immutable;
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
using Xunit.Sdk;

namespace Libplanet.Net.Tests.Consensus.ConsensusContext
{
    public class ConsensusContextNonProposerTest : ConsensusContextTestBase
    {
        private const int Timeout = 60_000;
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
            AsyncAutoResetEvent proposed = new AsyncAutoResetEvent();
            ConsensusPropose? propose = null;
            var codec = new Codec();
            BlockChain.TipChanged += (sender, tuple) =>
            {
                tipChanged.Set();
            };

            watchConsensusMessage = (message) =>
            {
                if (message is ConsensusPropose proposeMessage)
                {
                    propose = proposeMessage;
                    proposed.Set();
                }
            };

            _ = Transport.StartAsync();
            await Transport.WaitForRunningAsync();

            ConsensusContext.NewHeight(1);
            var block1 = await BlockChain.MineBlock(TestUtils.Peer1Priv, append: false);
            ConsensusContext.HandleMessage(
                new ConsensusPropose(
                    1,
                    0,
                    block1.Hash,
                    codec.Encode(block1.MarshalBlock()),
                    -1) { Remote = TestUtils.Peer1, });
            var expectedVotes = new Vote[4];
            for (int i = 0; i < 4; i++)
            {
                if (i == 2)
                {
                    // Peer2 will send a ConsensusVote by handling the ConsensusPropose message.
                    continue;
                }

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

            for (int i = 0; i < 4; i++)
            {
                if (i == 2)
                {
                    // Peer2 will send a ConsensusCommit by handling the ConsensusVote message.
                    continue;
                }

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

            await tipChanged.WaitAsync();
            // NewHeight called after the tip changed event is triggered.
            await proposed.WaitAsync();

            Block<DumbAction> proposedBlock =
                BlockMarshaler.UnmarshalBlock<DumbAction>(
                    BlockChain.Policy.GetHashAlgorithm,
                    (Dictionary)codec.Decode(propose!.Payload));
            if (proposedBlock.LastCommit?.Votes is null)
            {
                throw new NotNullException();
            }

            ImmutableArray<Vote> votes = proposedBlock.LastCommit.Value.Votes.Value;
            foreach (Vote vote in votes)
            {
                Assert.True(vote.BlockHash.Equals(BlockChain[1].Hash));
                Assert.Equal(VoteFlag.Commit, vote.Flag);
            }
        }

        [Fact(Timeout = Timeout)]
        public async void HandleMessageFromHigherHeight()
        {
            ConsensusPropose? propose = null;
            var heightTwoStepChanged = new AsyncAutoResetEvent();
            var heightThreeStepChanged = new AsyncAutoResetEvent();
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

            _ = Transport.StartAsync();
            await Transport.WaitForRunningAsync();

            ConsensusContext.NewHeight(BlockChain.Tip.Index + 1);
            await proposed.WaitAsync();

            Assert.Equal(2, ConsensusContext.Height);

            if (propose is null)
            {
                throw new NullException(propose);
            }

            ConsensusContext.Contexts[2].StepChanged += (sender, tuple) =>
            {
                heightTwoStepChanged.Set();
            };
            await heightTwoStepChanged.WaitAsync();
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

            await heightTwoStepChanged.WaitAsync();
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
                    3,
                    0,
                    blockHeightThree.Hash,
                    codec.Encode(blockHeightThree.MarshalBlock()),
                    -1)
                {
                    Remote = TestUtils.Peer3,
                });

            ConsensusContext.Contexts[3].StepChanged += (sender, tuple) =>
            {
                heightThreeStepChanged.Set();
            };
            // Propose -> PreVote (by consuming the message)
            await heightThreeStepChanged.WaitAsync();
            // Commit ends
            await heightTwoStepChanged.WaitAsync();
            // GST, PreVote -> Propose (NewRound started)
            await NewHeightDelayAssert(3);
            // Propose -> PreVote (message consumed)
            await heightThreeStepChanged.WaitAsync();
            Assert.Equal(3, ConsensusContext.Height);
            Assert.Equal(Step.PreVote, ConsensusContext.Step);
        }
    }
}
