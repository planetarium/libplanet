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
            _ = Transport.StartAsync();
            await Transport.WaitForRunningAsync();

            Block<DumbAction> block =
                await BlockChain.MineBlock(TestUtils.PrivateKeys[1], append: false);

            Context.AddMessage(
                TestUtils.CreateConsensusPropose(
                    block, TestUtils.PrivateKeys[1], round: 0));

            Context.AddMessage(
                TestUtils.CreateConsensusPropose(
                    block, TestUtils.PrivateKeys[2], round: 1));

            AsyncManualResetEvent messageProcessed = WatchMessageProcessed();

            Context.HandleMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[2], 1, 1, hash: block.Hash, flag: VoteFlag.Absent))
                {
                    Remote = new Peer(TestUtils.Validators[2]),
                });

            await messageProcessed.WaitAsync();
            Assert.Equal(Step.Propose, Context.Step);
            Assert.Equal(1, Context.Height);
            Assert.Equal(1, Context.Round);
        }

        [Fact(Timeout = Timeout)]
        public async void EnterPreCommitBlockTwoThird()
        {
            var messageReceived = new AsyncManualResetEvent();
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
            _ = Transport.StartAsync();
            await Transport.WaitForRunningAsync();

            Block<DumbAction> block =
                await BlockChain.MineBlock(TestUtils.PrivateKeys[1], append: false);
            blockHash = block.Hash;

            Context.HandleMessage(
                TestUtils.CreateConsensusPropose(block, TestUtils.PrivateKeys[1]));

            Context.HandleMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[1], 1, 0, hash: block.Hash, VoteFlag.Absent))
                {
                    Remote = new Peer(TestUtils.Validators[1]),
                });

            Context.HandleMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[2], 1, 0, hash: block.Hash, VoteFlag.Absent))
                {
                    Remote = new Peer(TestUtils.Validators[2]),
                });

            AsyncManualResetEvent messageProcessed = WatchMessageProcessed();

            Context.HandleMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[3], 1, 0, hash: block.Hash, VoteFlag.Absent))
                {
                    Remote = new Peer(TestUtils.Validators[3]),
                });

            await messageReceived.WaitAsync();
            await messageProcessed.WaitAsync();
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
            var messageReceived = new AsyncManualResetEvent();
            BlockHash? blockHash = null;
            void IsVoteSent(ConsensusMessage consensusMessage)
            {
                if (consensusMessage is ConsensusCommit commit)
                {
                    messageReceived.Set();
                    Assert.Null(commit.BlockHash);
                }
            }

            watchConsensusMessage = IsVoteSent;
            _ = Transport.StartAsync();
            await Transport.WaitForRunningAsync();

            Block<DumbAction> block = GetInvalidBlock();
            blockHash = block.Hash;

            Context.HandleMessage(
                TestUtils.CreateConsensusPropose(block, TestUtils.PrivateKeys[1]));

            Context.HandleMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[1], 1, 0, hash: null, VoteFlag.Absent))
                {
                    Remote = new Peer(TestUtils.Validators[1]),
                });

            Context.HandleMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[2], 1, 0, hash: null, VoteFlag.Absent))
                {
                    Remote = new Peer(TestUtils.Validators[2]),
                });

            AsyncManualResetEvent messageProcessed = WatchMessageProcessed();

            Context.HandleMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[3], 1, 0, hash: null, VoteFlag.Absent))
                {
                    Remote = new Peer(TestUtils.Validators[3]),
                });

            await messageReceived.WaitAsync();
            await messageProcessed.WaitAsync();
            Assert.Equal(Step.PreCommit, Context.Step);
            Assert.Equal(1, Context.Height);
            Assert.Equal(0, Context.Round);
        }

        [Fact(Timeout = Timeout)]
        public async void EnterPreVoteNilOneThird()
        {
            _ = Transport.StartAsync();
            await Transport.WaitForRunningAsync();

            Block<DumbAction> block =
                await BlockChain.MineBlock(TestUtils.PrivateKeys[1], append: false);

            Context.AddMessage(
                TestUtils.CreateConsensusPropose(
                    block, TestUtils.PrivateKeys[1], round: 0));

            Context.AddMessage(
                TestUtils.CreateConsensusPropose(
                    block, TestUtils.PrivateKeys[2], round: 1));

            AsyncManualResetEvent messageProcessed = WatchMessageProcessed();

            Context.HandleMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[2], 1, 1, hash: null, flag: VoteFlag.Absent))
                {
                    Remote = new Peer(TestUtils.Validators[2]),
                });

            await messageProcessed.WaitAsync();
            Assert.Equal(Step.Propose, Context.Step);
            Assert.Equal(1, Context.Height);
            Assert.Equal(1, Context.Round);
        }

        [Fact(Timeout = Timeout)]
        public async void TimeoutPropose()
        {
            var stepChanged = new AsyncManualResetEvent();
            var messageReceived = new AsyncManualResetEvent();
            var timeoutOccurred = new AsyncManualResetEvent();
            void IsVoteSent(ConsensusMessage consensusMessage)
            {
                if (consensusMessage is ConsensusVote)
                {
                    messageReceived.Set();
                }
            }

            watchConsensusMessage = IsVoteSent;
            _ = Transport.StartAsync();
            await Transport.WaitForRunningAsync();

            Context.TimeoutOccurred += (sender, tuple) => timeoutOccurred.Set();
            AsyncManualResetEvent messageProcessed = WatchMessageProcessed();

            await Context.StartAsync();

            Context.StepChanged += (sender, step) => stepChanged.Set();

            await timeoutOccurred.WaitAsync();
            await messageReceived.WaitAsync();
            await messageProcessed.WaitAsync();
            await stepChanged.WaitAsync();
            Assert.Equal(Step.PreVote, Context.Step);
            Assert.Equal(1, Context.Height);
            Assert.Equal(0, Context.Round);
        }

        [Fact(Timeout = Timeout)]
        public async void TimeoutPreVote()
        {
            var messageReceived = new AsyncManualResetEvent();
            void IsVoteSent(ConsensusMessage consensusMessage)
            {
                if (consensusMessage is ConsensusCommit)
                {
                    messageReceived.Set();
                }
            }

            watchConsensusMessage = IsVoteSent;
            var timeoutOccurred = new AsyncManualResetEvent();
            var stepChanged = new AsyncManualResetEvent();
            Context.TimeoutOccurred += (sender, tuple) => timeoutOccurred.Set();

            _ = Transport.StartAsync();
            await Transport.WaitForRunningAsync();

            Block<DumbAction> block =
                await BlockChain.MineBlock(TestUtils.PrivateKeys[1], append: false);

            Context.AddMessage(
                TestUtils.CreateConsensusPropose(
                    block, TestUtils.PrivateKeys[1], round: 0));

            Context.HandleMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[1], 1, 0, hash: block.Hash, flag: VoteFlag.Absent))
                {
                    Remote = new Peer(TestUtils.Validators[1]),
                });

            Context.HandleMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[2], 1, 0, hash: null, flag: VoteFlag.Absent))
                {
                    Remote = new Peer(TestUtils.Validators[2]),
                });

            AsyncManualResetEvent messageProcessed = WatchMessageProcessed();

            Context.HandleMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[3], 1, 0, hash: null, flag: VoteFlag.Absent))
                {
                    Remote = new Peer(TestUtils.Validators[3]),
                });
            Context.StepChanged += (sender, step) => stepChanged.Set();

            await timeoutOccurred.WaitAsync();
            await messageReceived.WaitAsync();
            await messageProcessed.WaitAsync();
            await stepChanged.WaitAsync();
            Assert.Equal(Step.PreCommit, Context.Step);
            Assert.Equal(1, Context.Height);
            Assert.Equal(0, Context.Round);
        }

        [Fact(Timeout = Timeout)]
        public async void TimeoutPreCommit()
        {
            var timeoutOccurred = new AsyncManualResetEvent();
            var roundStared = new AsyncManualResetEvent();
            Context.TimeoutOccurred += (sender, tuple) => timeoutOccurred.Set();
            Context.RoundStarted += (sender, i) => roundStared.Set();

            _ = Transport.StartAsync();
            await Transport.WaitForRunningAsync();

            Block<DumbAction> block =
                await BlockChain.MineBlock(TestUtils.PrivateKeys[1], append: false);

            Context.AddMessage(
                TestUtils.CreateConsensusPropose(
                    block, TestUtils.PrivateKeys[1], round: 0));

            Context.HandleMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[1], 1, 0, hash: block.Hash, flag: VoteFlag.Commit))
                {
                    Remote = new Peer(TestUtils.Validators[1]),
                });

            Context.HandleMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[2], 1, 0, hash: null, flag: VoteFlag.Commit))
                {
                    Remote = new Peer(TestUtils.Validators[2]),
                });

            AsyncManualResetEvent messageProcessed = WatchMessageProcessed();

            Context.HandleMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[3], 1, 0, hash: null, flag: VoteFlag.Commit))
                {
                    Remote = new Peer(TestUtils.Validators[3]),
                });

            await timeoutOccurred.WaitAsync();
            await roundStared.WaitAsync();
            await messageProcessed.WaitAsync();
            await NewRoundSendMessageAfterAssert();
            Assert.Equal(Step.Propose, Context.Step);
            Assert.Equal(1, Context.Height);
            Assert.Equal(1, Context.Round);
        }
    }
}
