using System;
using System.Collections.Generic;
using System.Threading.Tasks;
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

namespace Libplanet.Net.Tests.Consensus.ConsensusContext
{
    public class ConsensusContextTest : ConsensusContextTestBase
    {
        private static readonly PrivateKey PrivateKeyPeer1 = TestUtils.Peer1Priv;
        private static readonly List<PublicKey> Validators = new List<PublicKey>()
            { TestUtils.Peer0Priv.PublicKey, PrivateKeyPeer1.PublicKey, };

        private readonly ILogger _logger;

        public ConsensusContextTest(ITestOutputHelper output)
            : base(output, PrivateKeyPeer1, index => Validators, lastCommitClearThreshold: 1)
        {
            const string outputTemplate =
                "{Timestamp:HH:mm:ss:ffffffZ} - {Message}";
            Log.Logger = new LoggerConfiguration()
                .MinimumLevel.Verbose()
                .WriteTo.TestOutput(output, outputTemplate: outputTemplate)
                .CreateLogger()
                .ForContext<ConsensusContextTest>();

            _logger = Log.ForContext<ConsensusContextTest>();
        }

        [Fact(Timeout = Timeout)]
        public async void NewHeightIncreasing()
        {
            AsyncAutoResetEvent stepChangedToEndCommit = new AsyncAutoResetEvent();

            Assert.Throws<InvalidHeightIncreasingException>(
                () => ConsensusContext.NewHeight(BlockChain.Tip.Index));
            Assert.Throws<InvalidHeightIncreasingException>(
                () => ConsensusContext.NewHeight(BlockChain.Tip.Index + 2));

            ConsensusContext.NewHeight(BlockChain.Tip.Index + 1);
            ConsensusContext.Contexts[BlockChain.Tip.Index + 1].StateChanged += (sender, state) =>
            {
                if (state.Step == Step.EndCommit)
                {
                    stepChangedToEndCommit.Set();
                }
            };

            // FIXME: StartAsync inside NewHeight makes it unreliable to try to await for
            // early events.
            BlockHash blockHash;
            while (true)
            {
                try
                {
                    var voteSet = ConsensusContext.Contexts[BlockChain.Tip.Index + 1].VoteSet(0);
                    if (voteSet.Votes[0].BlockHash is BlockHash hash)
                    {
                        blockHash = hash;
                        break;
                    }
                }
                catch (Exception)
                {
                }

                await Task.Delay(100);
            }

            ConsensusContext.HandleMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.Peer0Priv, 1, hash: blockHash, flag: VoteFlag.Absent))
                {
                    Remote = TestUtils.Peers[0],
                });

            ConsensusContext.HandleMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(
                        TestUtils.Peer0Priv, 1, hash: blockHash, flag: VoteFlag.Commit))
                {
                    Remote = TestUtils.Peers[0],
                });

            // Waiting for commit.
            await stepChangedToEndCommit.WaitAsync();
            Assert.Equal(1, BlockChain.Tip.Index);
            // Next NewHeight is not called yet.
            Assert.Equal(1, ConsensusContext.Height);
            Assert.Equal(0, ConsensusContext.Round);
        }

        [Fact(Timeout = Timeout)]
        public void Ctor()
        {
            Assert.Equal(Step.Null, ConsensusContext.Step);
            Assert.Equal("No context", ConsensusContext.ToString());
        }

        [Fact(Timeout = Timeout)]
        public async void NewHeightWhenTipChanged()
        {
            Assert.Equal(1, ConsensusContext.Height);
            BlockChain.Append(BlockChain.ProposeBlock(new PrivateKey()));
            Assert.Equal(1, ConsensusContext.Height);
            await Task.Delay(NewHeightDelay + TimeSpan.FromSeconds(1));
            Assert.Equal(2, ConsensusContext.Height);
        }

        [Fact(Timeout = Timeout)]
        public void IgnoreMessagesFromLowerHeight()
        {
            Assert.True(ConsensusContext.Height > 0);
            Assert.Throws<InvalidHeightMessageException>(
                () => ConsensusContext.HandleMessage(
                    new ConsensusPropose(
                        new PrivateKey().PublicKey,
                        0,
                        0,
                        Fx.Block1.Hash,
                        new byte[] { },
                        -1)));
        }

        [Fact(Timeout = Timeout)]
        public async void ClearOldLastCommitCache()
        {
            // FIXME: Due to this test, lastCommitClearThreshold = 1 is set. every other test also
            // affected by this parameter.
            var codec = new Codec();
            var heightOneEnded = new AsyncAutoResetEvent();
            var heightOneProposeSent = new AsyncAutoResetEvent();
            var heightTwoProposeSent = new AsyncAutoResetEvent();
            var heightTwoEnded = new AsyncAutoResetEvent();
            var heightThreePreVote = new AsyncAutoResetEvent();
            Block<DumbAction>? proposedBlock = null;

            ConsensusMessageSent += (sender, message) =>
            {
                if (message is ConsensusPropose propose)
                {
                    proposedBlock =
                        BlockMarshaler.UnmarshalBlock<DumbAction>(
                            (Dictionary)codec.Decode(propose.Payload));
                    heightOneProposeSent.Set();
                }
            };

            // Do a consensus for height to #2 consecutively.
            ConsensusContext.NewHeight(BlockChain.Tip.Index + 1);
            ConsensusContext.Contexts[BlockChain.Tip.Index + 1].StateChanged +=
                (sender, tuple) =>
                {
                    if (tuple.Step == Step.EndCommit)
                    {
                        heightOneEnded.Set();
                    }
                };

            await heightOneProposeSent.WaitAsync();

            ConsensusContext.HandleMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.Peer0Priv,
                        1,
                        0,
                        proposedBlock!.Hash,
                        VoteFlag.Absent))
            );

            ConsensusContext.HandleMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(
                        TestUtils.Peer0Priv,
                        1,
                        0,
                        proposedBlock!.Hash,
                        VoteFlag.Commit))
                );

            await heightOneEnded.WaitAsync();

            // Starts NewHeight manually.
            ConsensusContext.NewHeight(BlockChain.Tip.Index + 1);
            ConsensusContext.Contexts[BlockChain.Tip.Index + 1].StateChanged +=
                (sender, tuple) =>
                {
                    if (tuple.Step == Step.EndCommit)
                    {
                        heightTwoEnded.Set();
                    }
                };
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

            var block = BlockChain.ProposeBlock(TestUtils.Peer0Priv);
            ConsensusContext.HandleMessage(
                TestUtils.CreateConsensusPropose(block, TestUtils.Peer0Priv, height: 2));

            await heightTwoProposeSent.WaitAsync();

            ConsensusContext.HandleMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.Peer0Priv,
                        2,
                        0,
                        block.Hash,
                        VoteFlag.Absent))
            );

            ConsensusContext.HandleMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(
                        TestUtils.Peer0Priv,
                        2,
                        0,
                        block.Hash,
                        VoteFlag.Commit))
            );

            await heightTwoEnded.WaitAsync();

            // Starts round 3, Waits PreVote timeout
            // Checks previous LastCommit and see if it's available.
            ConsensusContext.NewHeight(BlockChain.Tip.Index + 1);
            ConsensusContext.Contexts[BlockChain.Tip.Index + 1].StateChanged +=
                (sender, tuple) =>
                {
                    if (tuple.Step == Step.PreVote)
                    {
                        heightThreePreVote.Set();
                    }
                };

            await heightThreePreVote.WaitAsync();
            Assert.NotNull(BlockChain.Store.GetLastCommit(BlockChain.Tip.Index));
            Assert.Null(BlockChain.Store.GetLastCommit(BlockChain.Tip.Index - 1));
        }
    }
}
