using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Threading.Tasks;
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
    public class ContextNonProposerTest
    {
        private const int Timeout = 30000;
        private readonly ILogger _logger;

        public ContextNonProposerTest(ITestOutputHelper output)
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
        public async Task EnterPreVoteBlockOneThird()
        {
            var (_, blockChain, context) = TestUtils.CreateDummyContext(
                privateKey: TestUtils.Peer0Priv);

            var block = blockChain.ProposeBlock(TestUtils.Peer1Priv);
            var stateChangedToRoundOnePreVote = new AsyncAutoResetEvent();
            context.StateChanged += (sender, state) =>
            {
                if (state.Round == 1 && state.Step == Step.PreVote)
                {
                    stateChangedToRoundOnePreVote.Set();
                }
            };
            context.Start();

            context.ProduceMessage(
                TestUtils.CreateConsensusPropose(
                    block, TestUtils.Peer1Priv, round: 0));

            context.ProduceMessage(
                TestUtils.CreateConsensusPropose(
                    block, TestUtils.Peer2Priv, round: 1));

            context.ProduceMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.Peer2Priv, 1, 1, hash: block.Hash, flag: VoteFlag.Absent))
                {
                    Remote = TestUtils.Peer2,
                });

            // Wait for round 1 prevote step.
            await stateChangedToRoundOnePreVote.WaitAsync();
            Assert.Equal(Step.PreVote, context.Step);
            Assert.Equal(1, context.Height);
            Assert.Equal(1, context.Round);
        }

        [Fact(Timeout = Timeout)]
        public async Task EnterPreCommitBlockTwoThird()
        {
            var commitSent = new AsyncAutoResetEvent();
            BlockHash? blockHash = null;

            var (_, blockChain, context) = TestUtils.CreateDummyContext(
                privateKey: TestUtils.Peer0Priv,
                consensusMessageSent: CheckCommit);

            var block = blockChain.ProposeBlock(TestUtils.Peer1Priv);
            var stepChangedToPreCommit = new AsyncAutoResetEvent();
            blockHash = block.Hash;

            context.StateChanged += (sender, state) =>
            {
                if (state.Step == Step.PreCommit)
                {
                    stepChangedToPreCommit.Set();
                }
            };
            void CheckCommit(object? observer, ConsensusMessage? message)
            {
                if (message is ConsensusCommit commit)
                {
                    Assert.Equal(commit.BlockHash, blockHash);
                    commitSent.Set();
                }
            }

            context.Start();
            context.ProduceMessage(
                TestUtils.CreateConsensusPropose(block, TestUtils.Peer1Priv));

            context.ProduceMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.Peer1Priv, 1, 0, hash: block.Hash, VoteFlag.Absent))
                {
                    Remote = TestUtils.Peer1,
                });

            context.ProduceMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.Peer2Priv, 1, 0, hash: block.Hash, VoteFlag.Absent))
                {
                    Remote = TestUtils.Peer2,
                });

            context.ProduceMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[3], 1, 0, hash: block.Hash, VoteFlag.Absent))
                {
                    Remote = TestUtils.Peers[3],
                });

            await Task.WhenAll(commitSent.WaitAsync(), stepChangedToPreCommit.WaitAsync());
            Assert.Equal(Step.PreCommit, context.Step);
            Assert.Equal(1, context.Height);
            Assert.Equal(0, context.Round);

            var json =
                JsonSerializer.Deserialize<Dictionary<string, JsonElement>>(context.ToString())
                    ?? throw new NullReferenceException("Failed to deserialize context");

            Assert.Equal(0, json["locked_round"].GetInt64());
            Assert.Equal(0, json["valid_round"].GetInt64());
            Assert.Equal(block.Hash.ToString(), json["locked_value"].GetString());
            Assert.Equal(block.Hash.ToString(), json["valid_value"].GetString());
        }

        [Fact(Timeout = Timeout)]
        public async void EnterPreCommitNilTwoThird()
        {
            var stepChangedToPreCommit = new AsyncAutoResetEvent();
            var commitSent = new AsyncAutoResetEvent();

            var (fx, blockChain, context) = TestUtils.CreateDummyContext(
                privateKey: TestUtils.Peer0Priv,
                consensusMessageSent: CheckCommit);

            var invalidBlock = new BlockContent<DumbAction>(
                index: blockChain.Tip.Index + 1,
                publicKey: fx.Miner.PublicKey,
                previousHash: blockChain.Tip.Hash,
                lastCommit: null).Propose().Evaluate(fx.Miner, blockChain);

            context.StateChanged += (sender, state) =>
            {
                if (state.Step == Step.PreCommit)
                {
                    stepChangedToPreCommit.Set();
                }
            };
            void CheckCommit(object? observer, ConsensusMessage? message)
            {
                if (message is ConsensusCommit commit)
                {
                    Assert.Null(commit.BlockHash);
                    commitSent.Set();
                }
            }

            context.Start();
            context.ProduceMessage(
                TestUtils.CreateConsensusPropose(invalidBlock, TestUtils.Peer1Priv));

            context.ProduceMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.Peer1Priv, 1, 0, hash: null, VoteFlag.Absent))
                {
                    Remote = TestUtils.Peer1,
                });

            context.ProduceMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.Peer2Priv, 1, 0, hash: null, VoteFlag.Absent))
                {
                    Remote = TestUtils.Peer2,
                });

            context.ProduceMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[3], 1, 0, hash: null, VoteFlag.Absent))
                {
                    Remote = TestUtils.Peers[3],
                });

            await Task.WhenAll(commitSent.WaitAsync(), stepChangedToPreCommit.WaitAsync());
            Assert.Equal(Step.PreCommit, context.Step);
            Assert.Equal(1, context.Height);
            Assert.Equal(0, context.Round);
        }

        [Fact(Timeout = Timeout)]
        public async Task EnterPreVoteNilOneThird()
        {
            var (_, blockChain, context) = TestUtils.CreateDummyContext(
                privateKey: TestUtils.Peer0Priv);

            var block = blockChain.ProposeBlock(TestUtils.Peer1Priv);
            var stepChangedToRoundOnePreVote = new AsyncAutoResetEvent();
            context.StateChanged += (sender, stage) =>
            {
                if (stage.Round == 1 && stage.Step == Step.PreVote)
                {
                    stepChangedToRoundOnePreVote.Set();
                }
            };
            context.Start();

            context.ProduceMessage(
                TestUtils.CreateConsensusPropose(
                    block, TestUtils.Peer1Priv, round: 0));

            context.ProduceMessage(
                TestUtils.CreateConsensusPropose(
                    block, TestUtils.Peer2Priv, round: 1));

            context.ProduceMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.Peer2Priv, 1, 1, hash: null, flag: VoteFlag.Absent))
                {
                    Remote = TestUtils.Peer2,
                });

            await stepChangedToRoundOnePreVote.WaitAsync();
            Assert.Equal(Step.PreVote, context.Step);
            Assert.Equal(1, context.Height);
            Assert.Equal(1, context.Round);
        }

        [Fact(Timeout = Timeout)]
        public async void TimeoutPropose()
        {
            var stepChangedToPreVote = new AsyncAutoResetEvent();
            var voteSent = new AsyncAutoResetEvent();

            var (_, _, context) = TestUtils.CreateDummyContext(
                privateKey: TestUtils.Peer0Priv,
                consensusMessageSent: CheckVote);

            context.StateChanged += (sender, state) =>
            {
                if (state.Step == Step.PreVote)
                {
                    stepChangedToPreVote.Set();
                }
            };
            void CheckVote(object? observer, ConsensusMessage? message)
            {
                if (message is ConsensusVote)
                {
                    voteSent.Set();
                }
            }

            context.Start();
            await Task.WhenAll(voteSent.WaitAsync(), stepChangedToPreVote.WaitAsync());
            Assert.Equal(Step.PreVote, context.Step);
            Assert.Equal(1, context.Height);
            Assert.Equal(0, context.Round);
        }

        [Fact(Timeout = Timeout)]
        public async Task UponRulesCheckAfterTimeout()
        {
            var (_, blockChain, context) = TestUtils.CreateDummyContext(
                privateKey: TestUtils.Peer0Priv);

            var block1 = blockChain.ProposeBlock(TestUtils.Peer1Priv);
            var block2 = blockChain.ProposeBlock(TestUtils.Peer2Priv);
            var roundOneStepChangedToPreVote = new AsyncAutoResetEvent();
            context.StateChanged += (sender, state) =>
            {
                if (state.Round == 1 && state.Step == Step.PreVote)
                {
                    roundOneStepChangedToPreVote.Set();
                }
            };

            // Push round 0 and round 1 proposes.
            context.ProduceMessage(
                TestUtils.CreateConsensusPropose(
                    block1, TestUtils.Peer1Priv, round: 0));
            context.ProduceMessage(
                TestUtils.CreateConsensusPropose(
                    block2, TestUtils.Peer2Priv, round: 1));

            // Two additional votes should be enough to trigger prevote timeout timer.
            context.ProduceMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.Peer2Priv, 1, 0, hash: null, flag: VoteFlag.Absent))
                {
                    Remote = TestUtils.Peer1,
                });
            context.ProduceMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[3], 1, 0, hash: null, flag: VoteFlag.Absent))
                {
                    Remote = TestUtils.Peer1,
                });

            // Two additional votes should be enough to trigger precommit timeout timer.
            context.ProduceMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(
                        TestUtils.Peer2Priv, 1, 0, hash: null, flag: VoteFlag.Absent))
                {
                    Remote = TestUtils.Peer1,
                });
            context.ProduceMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[3], 1, 0, hash: null, flag: VoteFlag.Absent))
                {
                    Remote = TestUtils.Peer1,
                });

            context.Start();

            // Round 0 Propose -> Round 0 PreVote (due to Round 0 Propose message) ->
            // PreVote timeout start (due to PreVote messages) ->
            // PreVote timeout end -> Round 0 PreCommit ->
            // PreCommit timeout start (due to state mutation check and PreCommit messages) ->
            // PreCommit timeout end -> Round 1 Propose ->
            // Round 1 PreVote (due to state mutation check and Round 1 Propose message)
            await roundOneStepChangedToPreVote.WaitAsync();
            Assert.Equal(1, context.Height);
            Assert.Equal(1, context.Round);
            Assert.Equal(Step.PreVote, context.Step);
        }

        [Fact(Timeout = Timeout)]
        public async Task TimeoutPreVote()
        {
            var (_, blockChain, context) = TestUtils.CreateDummyContext(
                privateKey: TestUtils.Peer0Priv);

            var block = blockChain.ProposeBlock(TestUtils.Peer1Priv);
            var timeoutProcessed = new AsyncAutoResetEvent();
            context.TimeoutProcessed += (sender, message) => timeoutProcessed.Set();
            context.Start();

            context.ProduceMessage(
                TestUtils.CreateConsensusPropose(
                    block, TestUtils.Peer1Priv, round: 0));

            context.ProduceMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.Peer1Priv, 1, 0, hash: block.Hash, flag: VoteFlag.Absent))
                {
                    Remote = TestUtils.Peer1,
                });

            context.ProduceMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.Peer2Priv, 1, 0, hash: null, flag: VoteFlag.Absent))
                {
                    Remote = TestUtils.Peer2,
                });

            context.ProduceMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[3], 1, 0, hash: null, flag: VoteFlag.Absent))
                {
                    Remote = TestUtils.Peers[3],
                });

            // Wait for timeout.
            await timeoutProcessed.WaitAsync();
            Assert.Equal(Step.PreCommit, context.Step);
            Assert.Equal(1, context.Height);
            Assert.Equal(0, context.Round);
        }

        [Fact(Timeout = Timeout)]
        public async Task TimeoutPreCommit()
        {
            var (_, blockChain, context) = TestUtils.CreateDummyContext(
                privateKey: TestUtils.Peer0Priv);

            var block = blockChain.ProposeBlock(TestUtils.Peer1Priv);
            var timeoutProcessed = new AsyncAutoResetEvent();
            context.TimeoutProcessed += (sender, message) => timeoutProcessed.Set();
            context.Start();

            context.ProduceMessage(
                TestUtils.CreateConsensusPropose(
                    block, TestUtils.Peer1Priv, round: 0));

            context.ProduceMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(
                        TestUtils.Peer1Priv, 1, 0, hash: block.Hash, flag: VoteFlag.Commit))
                {
                    Remote = TestUtils.Peer1,
                });

            context.ProduceMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(
                        TestUtils.Peer2Priv, 1, 0, hash: null, flag: VoteFlag.Commit))
                {
                    Remote = TestUtils.Peer2,
                });

            context.ProduceMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[3], 1, 0, hash: null, flag: VoteFlag.Commit))
                {
                    Remote = TestUtils.Peers[3],
                });

            // Wait for timeout.
            await timeoutProcessed.WaitAsync();
            Assert.Equal(Step.Propose, context.Step);
            Assert.Equal(1, context.Height);
            Assert.Equal(1, context.Round);
        }
    }
}
