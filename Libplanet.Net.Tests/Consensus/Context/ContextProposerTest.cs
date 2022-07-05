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
    public class ContextProposerTest : ContextTestBase
    {
        private const int NodeId = 1;

        public ContextProposerTest(ITestOutputHelper output)
            : base(output, NodeId, 1, 0, Step.Propose)
        {
        }

        [Fact(Timeout = Timeout)]
        public async void EnterPreCommitNil()
        {
            var messageReceived = new AsyncAutoResetEvent();
            void IsPreCommitSent(ConsensusMessage consensusMessage)
            {
                if (consensusMessage is ConsensusCommit commit)
                {
                    messageReceived.Set();
                    Assert.Null(commit.CommitVote.BlockHash);
                }
            }

            watchConsensusMessage = IsPreCommitSent;
            _ = Transport.StartAsync();
            await Transport.WaitForRunningAsync();

            Block<DumbAction> block =
                await BlockChain.MineBlock(TestUtils.PrivateKeys[NodeId], append: false);
            await Context.StartAsync();

            Context.HandleMessage(
                TestUtils.CreateConsensusPropose(block, TestUtils.PrivateKeys[NodeId]));
            Context.HandleMessage(
                new ConsensusVote(TestUtils.CreateVote(
                    TestUtils.PrivateKeys[0], 1, hash: null, flag: VoteFlag.Absent))
                {
                    Remote = new Peer(TestUtils.Validators[0]),
                });

            Context.HandleMessage(
                new ConsensusVote(TestUtils.CreateVote(
                    TestUtils.PrivateKeys[2], 1, hash: null, flag: VoteFlag.Absent))
                {
                    Remote = new Peer(TestUtils.Validators[2]),
                });

            AsyncAutoResetEvent messageProcessed = WatchMessageProcessed();

            Context.HandleMessage(
                new ConsensusVote(TestUtils.CreateVote(
                    TestUtils.PrivateKeys[3], 1, hash: null, flag: VoteFlag.Absent))
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
        public async void EnterPreCommitBlock()
        {
            var messageReceived = new AsyncAutoResetEvent();
            BlockHash? targetHash = null;
            void IsPreCommitSent(ConsensusMessage consensusMessage)
            {
                if (consensusMessage is ConsensusCommit commit)
                {
                    messageReceived.Set();
                    Assert.Equal(commit.CommitVote.BlockHash, targetHash);
                }
            }

            watchConsensusMessage = IsPreCommitSent;
            _ = Transport.StartAsync();
            await Transport.WaitForRunningAsync();

            Block<DumbAction> block =
                await BlockChain.MineBlock(TestUtils.PrivateKeys[1], append: false);
            targetHash = block.Hash;
            await Context.StartAsync();

            Context.HandleMessage(
                TestUtils.CreateConsensusPropose(block, TestUtils.PrivateKeys[1]));

            Context.HandleMessage(
                new ConsensusVote(TestUtils.CreateVote(
                    TestUtils.PrivateKeys[0], 1, hash: block.Hash, flag: VoteFlag.Absent))
                {
                    Remote = new Peer(TestUtils.Validators[0]),
                });

            Context.HandleMessage(
                new ConsensusVote(TestUtils.CreateVote(
                    TestUtils.PrivateKeys[2], 1, hash: block.Hash, flag: VoteFlag.Absent))
                {
                    Remote = new Peer(TestUtils.Validators[2]),
                });

            AsyncAutoResetEvent messageProcessed = WatchMessageProcessed();

            Context.HandleMessage(
                new ConsensusVote(TestUtils.CreateVote(
                    TestUtils.PrivateKeys[3], 1, hash: block.Hash, flag: VoteFlag.Absent))
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
        public async void EnterNewRoundNil()
        {
            var timeoutOccurred = new AsyncAutoResetEvent();
            var stepChanged = new AsyncAutoResetEvent();
            var roundStarted = new AsyncAutoResetEvent();

            _ = Transport.StartAsync();
            await Transport.WaitForRunningAsync();

            Block<DumbAction> block =
                await BlockChain.MineBlock(TestUtils.PrivateKeys[NodeId], append: false);
            Context.StepChanged += (sender, i) =>
            {
                if (i == Step.PreVote)
                {
                    stepChanged.Set();
                }
            };
            Context.TimeoutOccurred += (sender, tuple) => timeoutOccurred.Set();
            Context.RoundStarted += (sender, i) => roundStarted.Set();

            Context.AddMessage(
                TestUtils.CreateConsensusPropose(block, TestUtils.PrivateKeys[NodeId]));

            Context.HandleMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[0], 1, hash: null, flag: VoteFlag.Commit))
                {
                    Remote = new Peer(TestUtils.Validators[0]),
                });

            Context.HandleMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[2], 1, hash: null, flag: VoteFlag.Commit))
                {
                    Remote = new Peer(TestUtils.Validators[2]),
                });

            Context.HandleMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[3], 1, hash: null, flag: VoteFlag.Commit))
                {
                    Remote = new Peer(TestUtils.Validators[3]),
                });

            await timeoutOccurred.WaitAsync();
            await roundStarted.WaitAsync();
            // Node id 1 is not next proposer, and wait for SendMessageAfter() and broadcast
            // messages.
            await NewRoundSendMessageAfterAssert();
            Assert.Equal(Step.Propose, Context.Step);
            Assert.Equal(1, Context.Height);
            Assert.Equal(1, Context.Round);
        }

        [Fact(Timeout = Timeout)]
        public async void EndCommitBlock()
        {
            var stepChanged = new AsyncAutoResetEvent();

            Context.StepChanged += (sender, step) => stepChanged.Set();
            _ = Transport.StartAsync();
            await Transport.WaitForRunningAsync();

            Block<DumbAction> block =
                await BlockChain.MineBlock(TestUtils.PrivateKeys[NodeId], append: false);

            Context.AddMessage(
                TestUtils.CreateConsensusPropose(block, TestUtils.PrivateKeys[NodeId]));

            Context.HandleMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[0], 1, hash: block.Hash, flag: VoteFlag.Commit))
                {
                    Remote = new Peer(TestUtils.Validators[0]),
                });

            Context.HandleMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[2], 1, hash: block.Hash, flag: VoteFlag.Commit))
                {
                    Remote = new Peer(TestUtils.Validators[2]),
                });

            AsyncAutoResetEvent messageProcessed = WatchMessageProcessed();

            Context.HandleMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[3], 1, hash: block.Hash, flag: VoteFlag.Commit))
                {
                    Remote = new Peer(TestUtils.Validators[3]),
                });

            await stepChanged.WaitAsync();
            await messageProcessed.WaitAsync();
            Assert.Equal(Step.EndCommit, Context.Step);
            Assert.Equal(1, Context.Height);
            Assert.Equal(0, Context.Round);
        }

        [Fact(Timeout = Timeout)]
        public async void EnterPreVoteNil()
        {
            var messageReceived = new AsyncAutoResetEvent();
            void IsVoteSent(ConsensusMessage consensusMessage)
            {
                if (consensusMessage is ConsensusVote vote)
                {
                    messageReceived.Set();
                    Assert.Null(vote.ProposeVote.BlockHash);
                }
            }

            watchConsensusMessage = IsVoteSent;
            Block<DumbAction> invalidBlock = GetInvalidBlock();

            _ = Transport.StartAsync();
            await Transport.WaitForRunningAsync();

            AsyncAutoResetEvent messageProcessed = WatchMessageProcessed();

            Context.HandleMessage(
                TestUtils.CreateConsensusPropose(
                    invalidBlock, TestUtils.PrivateKeys[NodeId]));

            await messageReceived.WaitAsync();
            await messageProcessed.WaitAsync();
            Assert.Equal(Step.PreVote, Context.Step);
            Assert.Equal(1, Context.Height);
            Assert.Equal(0, Context.Round);
        }

        [Fact(Timeout = Timeout)]
        public async void EnterPreVoteBlock()
        {
            var messageReceived = new AsyncAutoResetEvent();
            BlockHash? targetHash = null;
            void IsVoteSent(ConsensusMessage consensusMessage)
            {
                if (consensusMessage is ConsensusVote vote)
                {
                    messageReceived.Set();
                    Assert.Equal(vote.ProposeVote.BlockHash, targetHash);
                }
            }

            watchConsensusMessage = IsVoteSent;
            _ = Transport.StartAsync();
            await Transport.WaitForRunningAsync();

            Block<DumbAction> block =
                await BlockChain.MineBlock(TestUtils.PrivateKeys[NodeId], append: false);
            targetHash = block.Hash;

            AsyncAutoResetEvent messageProcessed = WatchMessageProcessed();

            Context.HandleMessage(
                TestUtils.CreateConsensusPropose(block, TestUtils.PrivateKeys[NodeId]));

            await messageReceived.WaitAsync();
            await messageProcessed.WaitAsync();
            Assert.Equal(Step.PreVote, Context.Step);
            Assert.Equal(1, Context.Height);
            Assert.Equal(0, Context.Round);
        }
    }
}
