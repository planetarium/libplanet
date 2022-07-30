using System.Collections.Generic;
using System.Text.Json;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Net.Consensus;
using Libplanet.Net.Messages;
using Libplanet.Tests.Common.Action;
using Nito.AsyncEx;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Net.Tests.Consensus.Context
{
    public class ContextNonProposerTest : ContextTestBase
    {
        private const int NodeId = 0;

        public ContextNonProposerTest(ITestOutputHelper output)
            : base(output, NodeId, 1, 0, Step.Propose)
        {
        }

        [Fact(Timeout = Timeout)]
        public async void EnterPreVoteBlockOneThird()
        {
            var stepChangedToPreVote = new AsyncAutoResetEvent();
            Context.StepChanged += (sender, step) =>
            {
                if (step == Step.PreVote)
                {
                    stepChangedToPreVote.Set();
                }
            };
            Context.StartAsync();

            Block<DumbAction> block =
                await BlockChain.MineBlock(TestUtils.PrivateKeys[1], append: false);

            Context.AddMessage(
                TestUtils.CreateConsensusPropose(
                    block, TestUtils.PrivateKeys[1], round: 0));

            Context.AddMessage(
                TestUtils.CreateConsensusPropose(
                    block, TestUtils.PrivateKeys[2], round: 1));

            Context.ProduceMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[2], 1, 1, hash: block.Hash, flag: VoteFlag.Absent))
                {
                    Remote = new Peer(TestUtils.Validators[2]),
                });

            // Wait for round 0 prevote step.
            await stepChangedToPreVote.WaitAsync();
            // Wait for round 1 prevote step.
            await stepChangedToPreVote.WaitAsync();
            Assert.Equal(Step.PreVote, Context.Step);
            Assert.Equal(1, Context.Height);
            Assert.Equal(1, Context.Round);
        }

        [Fact(Timeout = Timeout)]
        public async void EnterPreCommitBlockTwoThird()
        {
            var stepChangedToPreCommit = new AsyncAutoResetEvent();
            var messageReceived = new AsyncAutoResetEvent();
            Context.StepChanged += (sender, step) =>
            {
                if (step == Step.PreCommit)
                {
                    stepChangedToPreCommit.Set();
                }
            };
            Context.StartAsync();
            BlockHash? blockHash = null;
            void IsVoteSent(ConsensusMessage consensusMessage)
            {
                if (consensusMessage is ConsensusCommit commit)
                {
                    messageReceived.Set();
                    Assert.Equal(commit.BlockHash, blockHash);
                }
            }

            watchConsensusMessage = IsVoteSent;

            Block<DumbAction> block =
                await BlockChain.MineBlock(TestUtils.PrivateKeys[1], append: false);
            blockHash = block.Hash;

            Context.ProduceMessage(
                TestUtils.CreateConsensusPropose(block, TestUtils.PrivateKeys[1]));

            Context.ProduceMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[1], 1, 0, hash: block.Hash, VoteFlag.Absent))
                {
                    Remote = new Peer(TestUtils.Validators[1]),
                });

            Context.ProduceMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[2], 1, 0, hash: block.Hash, VoteFlag.Absent))
                {
                    Remote = new Peer(TestUtils.Validators[2]),
                });

            Context.ProduceMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[3], 1, 0, hash: block.Hash, VoteFlag.Absent))
                {
                    Remote = new Peer(TestUtils.Validators[3]),
                });

            await messageReceived.WaitAsync();
            await stepChangedToPreCommit.WaitAsync();
            Assert.Equal(Step.PreCommit, Context.Step);
            Assert.Equal(1, Context.Height);
            Assert.Equal(0, Context.Round);

            var json = JsonSerializer.Deserialize<Dictionary<string, JsonElement>>(
                Context.ToString());

            Assert.Equal(0, json["locked_round"].GetInt64());
            Assert.Equal(0, json["valid_round"].GetInt64());
            Assert.Equal(block.Hash.ToString(), json["locked_value"].GetString());
            Assert.Equal(block.Hash.ToString(), json["valid_value"].GetString());
        }

        [Fact(Timeout = Timeout)]
        public async void EnterPreCommitNilTwoThird()
        {
            BlockHash? blockHash = null;
            var stepChangedToPreCommit = new AsyncAutoResetEvent();
            var messageReceived = new AsyncAutoResetEvent();
            Context.StepChanged += (sender, step) =>
            {
                if (step == Step.PreCommit)
                {
                    stepChangedToPreCommit.Set();
                }
            };
            void IsVoteSent(ConsensusMessage consensusMessage)
            {
                if (consensusMessage is ConsensusCommit commit)
                {
                    messageReceived.Set();
                    Assert.Null(commit.BlockHash);
                }
            }

            watchConsensusMessage = IsVoteSent;
            Context.StartAsync();

            Block<DumbAction> block = GetInvalidBlock();
            blockHash = block.Hash;

            Context.ProduceMessage(
                TestUtils.CreateConsensusPropose(block, TestUtils.PrivateKeys[1]));

            Context.ProduceMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[1], 1, 0, hash: null, VoteFlag.Absent))
                {
                    Remote = new Peer(TestUtils.Validators[1]),
                });

            Context.ProduceMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[2], 1, 0, hash: null, VoteFlag.Absent))
                {
                    Remote = new Peer(TestUtils.Validators[2]),
                });

            Context.ProduceMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[3], 1, 0, hash: null, VoteFlag.Absent))
                {
                    Remote = new Peer(TestUtils.Validators[3]),
                });

            await messageReceived.WaitAsync();
            await stepChangedToPreCommit.WaitAsync();
            Assert.Equal(Step.PreCommit, Context.Step);
            Assert.Equal(1, Context.Height);
            Assert.Equal(0, Context.Round);
        }

        [Fact(Timeout = Timeout)]
        public async void EnterPreVoteNilOneThird()
        {
            var stepChanged = new AsyncAutoResetEvent();
            Context.StepChanged += (sender, step) =>
            {
                if (step == Step.PreVote)
                {
                    stepChanged.Set();
                }
            };
            Context.StartAsync();

            Block<DumbAction> block =
                await BlockChain.MineBlock(TestUtils.PrivateKeys[1], append: false);

            Context.AddMessage(
                TestUtils.CreateConsensusPropose(
                    block, TestUtils.PrivateKeys[1], round: 0));

            Context.AddMessage(
                TestUtils.CreateConsensusPropose(
                    block, TestUtils.PrivateKeys[2], round: 1));

            Context.ProduceMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[2], 1, 1, hash: null, flag: VoteFlag.Absent))
                {
                    Remote = new Peer(TestUtils.Validators[2]),
                });

            // Wait for round 0 prevote step
            await stepChanged.WaitAsync();
            // Wait for round 1 prevote step
            await stepChanged.WaitAsync();
            Assert.Equal(Step.PreVote, Context.Step);
            Assert.Equal(1, Context.Height);
            Assert.Equal(1, Context.Round);
        }

        [Fact(Timeout = Timeout)]
        public async void TimeoutPropose()
        {
            var messageReceived = new AsyncAutoResetEvent();
            var mutationConsumed = new AsyncAutoResetEvent();
            void IsVoteSent(ConsensusMessage consensusMessage)
            {
                if (consensusMessage is ConsensusVote)
                {
                    messageReceived.Set();
                }
            }

            watchConsensusMessage = IsVoteSent;
            Context.MutationConsumed += (sender, action) => mutationConsumed.Set();

            Context.StartAsync();

            await mutationConsumed.WaitAsync();
            await messageReceived.WaitAsync();

            // Wait for timeout triggered mutation to be consumed.
            Assert.Equal(Step.PreVote, Context.Step);
            Assert.Equal(1, Context.Height);
            Assert.Equal(0, Context.Round);
        }

        [Fact(Timeout = Timeout)]
        public async void TimeoutPreVote()
        {
            var timeoutProcessed = new AsyncAutoResetEvent();
            Context.TimeoutProcessed += (sender, message) => timeoutProcessed.Set();
            Context.StartAsync();

            Block<DumbAction> block =
                await BlockChain.MineBlock(TestUtils.PrivateKeys[1], append: false);

            Context.AddMessage(
                TestUtils.CreateConsensusPropose(
                    block, TestUtils.PrivateKeys[1], round: 0));

            Context.ProduceMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[1], 1, 0, hash: block.Hash, flag: VoteFlag.Absent))
                {
                    Remote = new Peer(TestUtils.Validators[1]),
                });

            Context.ProduceMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[2], 1, 0, hash: null, flag: VoteFlag.Absent))
                {
                    Remote = new Peer(TestUtils.Validators[2]),
                });

            Context.ProduceMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[3], 1, 0, hash: null, flag: VoteFlag.Absent))
                {
                    Remote = new Peer(TestUtils.Validators[3]),
                });

            // Wait for timeout.
            await timeoutProcessed.WaitAsync();
            Assert.Equal(Step.PreCommit, Context.Step);
            Assert.Equal(1, Context.Height);
            Assert.Equal(0, Context.Round);
        }

        [Fact(Timeout = Timeout)]
        public async void TimeoutPreCommit()
        {
            var timeoutProcessed = new AsyncAutoResetEvent();
            Context.TimeoutProcessed += (sender, message) => timeoutProcessed.Set();
            Context.StartAsync();

            Block<DumbAction> block =
                await BlockChain.MineBlock(TestUtils.PrivateKeys[1], append: false);

            Context.AddMessage(
                TestUtils.CreateConsensusPropose(
                    block, TestUtils.PrivateKeys[1], round: 0));

            Context.ProduceMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[1], 1, 0, hash: block.Hash, flag: VoteFlag.Commit))
                {
                    Remote = new Peer(TestUtils.Validators[1]),
                });

            Context.ProduceMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[2], 1, 0, hash: null, flag: VoteFlag.Commit))
                {
                    Remote = new Peer(TestUtils.Validators[2]),
                });

            Context.ProduceMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[3], 1, 0, hash: null, flag: VoteFlag.Commit))
                {
                    Remote = new Peer(TestUtils.Validators[3]),
                });

            // Wait for timeout.
            await timeoutProcessed.WaitAsync();
            Assert.Equal(Step.Propose, Context.Step);
            Assert.Equal(1, Context.Height);
            Assert.Equal(1, Context.Round);
        }
    }
}
