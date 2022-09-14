using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Threading.Tasks;
using Libplanet.Consensus;
using Libplanet.Net.Consensus;
using Libplanet.Net.Messages;
using Nito.AsyncEx;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Net.Tests.Consensus.Context
{
    public class ContextNonProposerTest : ContextTestBase
    {
        private const int NodeId = 0;

        public ContextNonProposerTest(ITestOutputHelper output)
            : base(output, NodeId, 1, 0, Step.Default)
        {
        }

        [Fact(Timeout = Timeout)]
        public async Task EnterPreVoteBlockOneThird()
        {
            var block = BlockChain.ProposeBlock(TestUtils.PrivateKeys[1]);
            var stateChangedToRoundOnePreVote = new AsyncAutoResetEvent();
            Context.StateChanged += (sender, state) =>
            {
                if (state.Round == 1 && state.Step == Step.PreVote)
                {
                    stateChangedToRoundOnePreVote.Set();
                }
            };
            Context.Start();

            Context.ProduceMessage(
                TestUtils.CreateConsensusPropose(
                    block, TestUtils.ConsensusPrivateKeys[1], round: 0));

            Context.ProduceMessage(
                TestUtils.CreateConsensusPropose(
                    block, TestUtils.ConsensusPrivateKeys[2], round: 1));

            Context.ProduceMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.ConsensusPrivateKeys[2],
                        1,
                        1,
                        hash: block.Hash,
                        flag: VoteFlag.Absent))
                {
                    Remote = TestUtils.Peers[2],
                });

            // Wait for round 1 prevote step.
            await stateChangedToRoundOnePreVote.WaitAsync();
            Assert.Equal(Step.PreVote, Context.Step);
            Assert.Equal(1, Context.Height);
            Assert.Equal(1, Context.Round);
        }

        [Fact(Timeout = Timeout)]
        public async Task EnterPreCommitBlockTwoThird()
        {
            var block = BlockChain.ProposeBlock(TestUtils.PrivateKeys[1]);
            var blockHash = block.Hash;
            var stepChangedToPreCommit = new AsyncAutoResetEvent();
            var commitSent = new AsyncAutoResetEvent();
            Context.StateChanged += (sender, state) =>
            {
                if (state.Step == Step.PreCommit)
                {
                    stepChangedToPreCommit.Set();
                }
            };
            ConsensusMessageSent += (observer, message) =>
            {
                if (message is ConsensusCommit commit)
                {
                    Assert.Equal(commit.BlockHash, blockHash);
                    commitSent.Set();
                }
            };
            Context.Start();

            Context.ProduceMessage(
                TestUtils.CreateConsensusPropose(block, TestUtils.ConsensusPrivateKeys[1]));

            Context.ProduceMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.ConsensusPrivateKeys[1], 1, 0, hash: block.Hash, VoteFlag.Absent))
                {
                    Remote = TestUtils.Peers[1],
                });

            Context.ProduceMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.ConsensusPrivateKeys[2], 1, 0, hash: block.Hash, VoteFlag.Absent))
                {
                    Remote = TestUtils.Peers[2],
                });

            Context.ProduceMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.ConsensusPrivateKeys[3], 1, 0, hash: block.Hash, VoteFlag.Absent))
                {
                    Remote = TestUtils.Peers[3],
                });

            await Task.WhenAll(commitSent.WaitAsync(), stepChangedToPreCommit.WaitAsync());
            Assert.Equal(Step.PreCommit, Context.Step);
            Assert.Equal(1, Context.Height);
            Assert.Equal(0, Context.Round);

            var json =
                JsonSerializer.Deserialize<Dictionary<string, JsonElement>>(Context.ToString())
                    ?? throw new NullReferenceException("Failed to deserialize context");

            Assert.Equal(0, json["locked_round"].GetInt64());
            Assert.Equal(0, json["valid_round"].GetInt64());
            Assert.Equal(block.Hash.ToString(), json["locked_value"].GetString());
            Assert.Equal(block.Hash.ToString(), json["valid_value"].GetString());
        }

        [Fact(Timeout = Timeout)]
        public async void EnterPreCommitNilTwoThird()
        {
            var block = GetInvalidBlock();
            var blockHash = block.Hash;
            var stepChangedToPreCommit = new AsyncAutoResetEvent();
            var commitSent = new AsyncAutoResetEvent();
            Context.StateChanged += (sender, state) =>
            {
                if (state.Step == Step.PreCommit)
                {
                    stepChangedToPreCommit.Set();
                }
            };
            ConsensusMessageSent += (observer, message) =>
            {
                if (message is ConsensusCommit commit)
                {
                    Assert.Null(commit.BlockHash);
                    commitSent.Set();
                }
            };
            Context.Start();

            Context.ProduceMessage(
                TestUtils.CreateConsensusPropose(block, TestUtils.ConsensusPrivateKeys[1]));

            Context.ProduceMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.ConsensusPrivateKeys[1], 1, 0, hash: null, VoteFlag.Absent))
                {
                    Remote = TestUtils.Peers[1],
                });

            Context.ProduceMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.ConsensusPrivateKeys[2], 1, 0, hash: null, VoteFlag.Absent))
                {
                    Remote = TestUtils.Peers[2],
                });

            Context.ProduceMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.ConsensusPrivateKeys[3], 1, 0, hash: null, VoteFlag.Absent))
                {
                    Remote = TestUtils.Peers[3],
                });

            await Task.WhenAll(commitSent.WaitAsync(), stepChangedToPreCommit.WaitAsync());
            Assert.Equal(Step.PreCommit, Context.Step);
            Assert.Equal(1, Context.Height);
            Assert.Equal(0, Context.Round);
        }

        [Fact(Timeout = Timeout)]
        public async Task EnterPreVoteNilOneThird()
        {
            var block = BlockChain.ProposeBlock(TestUtils.PrivateKeys[1]);
            var stepChangedToRoundOnePreVote = new AsyncAutoResetEvent();
            Context.StateChanged += (sender, stage) =>
            {
                if (stage.Round == 1 && stage.Step == Step.PreVote)
                {
                    stepChangedToRoundOnePreVote.Set();
                }
            };
            Context.Start();

            Context.ProduceMessage(
                TestUtils.CreateConsensusPropose(
                    block, TestUtils.ConsensusPrivateKeys[1], round: 0));

            Context.ProduceMessage(
                TestUtils.CreateConsensusPropose(
                    block, TestUtils.ConsensusPrivateKeys[2], round: 1));

            Context.ProduceMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.ConsensusPrivateKeys[2], 1, 1, hash: null, flag: VoteFlag.Absent))
                {
                    Remote = TestUtils.Peers[2],
                });

            await stepChangedToRoundOnePreVote.WaitAsync();
            Assert.Equal(Step.PreVote, Context.Step);
            Assert.Equal(1, Context.Height);
            Assert.Equal(1, Context.Round);
        }

        [Fact(Timeout = Timeout)]
        public async void TimeoutPropose()
        {
            var stepChangedToPreVote = new AsyncAutoResetEvent();
            var voteSent = new AsyncAutoResetEvent();
            Context.StateChanged += (sender, state) =>
            {
                if (state.Step == Step.PreVote)
                {
                    stepChangedToPreVote.Set();
                }
            };
            ConsensusMessageSent += (observer, message) =>
            {
                if (message is ConsensusVote)
                {
                    voteSent.Set();
                }
            };
            Context.Start();

            await Task.WhenAll(voteSent.WaitAsync(), stepChangedToPreVote.WaitAsync());
            Assert.Equal(Step.PreVote, Context.Step);
            Assert.Equal(1, Context.Height);
            Assert.Equal(0, Context.Round);
        }

        [Fact(Timeout = Timeout)]
        public async Task UponRulesCheckAfterTimeout()
        {
            var block1 = BlockChain.ProposeBlock(TestUtils.PrivateKeys[1]);
            var block2 = BlockChain.ProposeBlock(TestUtils.PrivateKeys[2]);
            var roundOneStepChangedToPreVote = new AsyncAutoResetEvent();
            Context.StateChanged += (sender, state) =>
            {
                if (state.Round == 1 && state.Step == Step.PreVote)
                {
                    roundOneStepChangedToPreVote.Set();
                }
            };

            // Push round 0 and round 1 proposes.
            Context.ProduceMessage(
                TestUtils.CreateConsensusPropose(
                    block1, TestUtils.ConsensusPrivateKeys[1], round: 0));
            Context.ProduceMessage(
                TestUtils.CreateConsensusPropose(
                    block2, TestUtils.ConsensusPrivateKeys[2], round: 1));

            // Two additional votes should be enough to trigger prevote timeout timer.
            Context.ProduceMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.ConsensusPrivateKeys[2], 1, 0, hash: null, flag: VoteFlag.Absent))
                {
                    Remote = TestUtils.Peers[1],
                });
            Context.ProduceMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.ConsensusPrivateKeys[3], 1, 0, hash: null, flag: VoteFlag.Absent))
                {
                    Remote = TestUtils.Peers[1],
                });

            // Two additional votes should be enough to trigger precommit timeout timer.
            Context.ProduceMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(
                        TestUtils.ConsensusPrivateKeys[2], 1, 0, hash: null, flag: VoteFlag.Absent))
                {
                    Remote = TestUtils.Peers[1],
                });
            Context.ProduceMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(
                        TestUtils.ConsensusPrivateKeys[3], 1, 0, hash: null, flag: VoteFlag.Absent))
                {
                    Remote = TestUtils.Peers[1],
                });

            Context.Start();

            // Round 0 Propose -> Round 0 PreVote (due to Round 0 Propose message) ->
            // PreVote timeout start (due to PreVote messages) ->
            // PreVote timeout end -> Round 0 PreCommit ->
            // PreCommit timeout start (due to state mutation check and PreCommit messages) ->
            // PreCommit timeout end -> Round 1 Propose ->
            // Round 1 PreVote (due to state mutation check and Round 1 Propose message)
            await roundOneStepChangedToPreVote.WaitAsync();
            Assert.Equal(1, Context.Height);
            Assert.Equal(1, Context.Round);
            Assert.Equal(Step.PreVote, Context.Step);
        }

        [Fact(Timeout = Timeout)]
        public async Task TimeoutPreVote()
        {
            var block = BlockChain.ProposeBlock(TestUtils.PrivateKeys[1]);
            var timeoutProcessed = new AsyncAutoResetEvent();
            Context.TimeoutProcessed += (sender, message) => timeoutProcessed.Set();
            Context.Start();

            Context.ProduceMessage(
                TestUtils.CreateConsensusPropose(
                    block, TestUtils.ConsensusPrivateKeys[1], round: 0));

            Context.ProduceMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.ConsensusPrivateKeys[1],
                        1,
                        0,
                        hash: block.Hash,
                        flag: VoteFlag.Absent))
                {
                    Remote = TestUtils.Peers[1],
                });

            Context.ProduceMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.ConsensusPrivateKeys[2], 1, 0, hash: null, flag: VoteFlag.Absent))
                {
                    Remote = TestUtils.Peers[2],
                });

            Context.ProduceMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.ConsensusPrivateKeys[3], 1, 0, hash: null, flag: VoteFlag.Absent))
                {
                    Remote = TestUtils.Peers[3],
                });

            // Wait for timeout.
            await timeoutProcessed.WaitAsync();
            Assert.Equal(Step.PreCommit, Context.Step);
            Assert.Equal(1, Context.Height);
            Assert.Equal(0, Context.Round);
        }

        [Fact(Timeout = Timeout)]
        public async Task TimeoutPreCommit()
        {
            var block = BlockChain.ProposeBlock(TestUtils.PrivateKeys[1]);
            var timeoutProcessed = new AsyncAutoResetEvent();
            Context.TimeoutProcessed += (sender, message) => timeoutProcessed.Set();
            Context.Start();

            Context.ProduceMessage(
                TestUtils.CreateConsensusPropose(
                    block, TestUtils.ConsensusPrivateKeys[1], round: 0));

            Context.ProduceMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(
                        TestUtils.ConsensusPrivateKeys[1],
                        1,
                        0,
                        hash: block.Hash,
                        flag: VoteFlag.Commit))
                {
                    Remote = TestUtils.Peers[1],
                });

            Context.ProduceMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(
                        TestUtils.ConsensusPrivateKeys[2], 1, 0, hash: null, flag: VoteFlag.Commit))
                {
                    Remote = TestUtils.Peers[2],
                });

            Context.ProduceMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(
                        TestUtils.ConsensusPrivateKeys[3], 1, 0, hash: null, flag: VoteFlag.Commit))
                {
                    Remote = TestUtils.Peers[3],
                });

            // Wait for timeout.
            await timeoutProcessed.WaitAsync();
            Assert.Equal(Step.Propose, Context.Step);
            Assert.Equal(1, Context.Height);
            Assert.Equal(1, Context.Round);
        }
    }
}
