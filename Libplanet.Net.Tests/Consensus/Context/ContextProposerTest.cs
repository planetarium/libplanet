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
            var stepChanged = new AsyncAutoResetEvent();
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
            Context.StepChanged += (sender, step) =>
            {
                if (step == Step.PreCommit)
                {
                    stepChanged.Set();
                }
            };

            Block<DumbAction> block =
                await BlockChain.MineBlock(TestUtils.PrivateKeys[NodeId], append: false);
            Context.StartAsync();

            Context.ProduceMessage(
                TestUtils.CreateConsensusPropose(block, TestUtils.PrivateKeys[NodeId]));
            Context.ProduceMessage(
                new ConsensusVote(TestUtils.CreateVote(
                    TestUtils.PrivateKeys[0], 1, hash: null, flag: VoteFlag.Absent))
                {
                    Remote = new Peer(TestUtils.Validators[0]),
                });
            Context.ProduceMessage(
                new ConsensusVote(TestUtils.CreateVote(
                    TestUtils.PrivateKeys[2], 1, hash: null, flag: VoteFlag.Absent))
                {
                    Remote = new Peer(TestUtils.Validators[2]),
                });
            Context.ProduceMessage(
                new ConsensusVote(TestUtils.CreateVote(
                    TestUtils.PrivateKeys[3], 1, hash: null, flag: VoteFlag.Absent))
                {
                    Remote = new Peer(TestUtils.Validators[3]),
                });

            await messageReceived.WaitAsync();
            await stepChanged.WaitAsync();
            Assert.Equal(Step.PreCommit, Context.Step);
            Assert.Equal(1, Context.Height);
            Assert.Equal(0, Context.Round);
        }

        [Fact(Timeout = Timeout)]
        public async void EnterPreCommitBlock()
        {
            BlockHash? targetHash = null;
            var stepChanged = new AsyncAutoResetEvent();
            var messageReceived = new AsyncAutoResetEvent();
            Context.StepChanged += (sender, step) =>
            {
                if (step == Step.PreCommit)
                {
                    stepChanged.Set();
                }
            };
            void IsPreCommitSent(ConsensusMessage consensusMessage)
            {
                if (consensusMessage is ConsensusCommit commit)
                {
                    messageReceived.Set();
                    Assert.Equal(commit.CommitVote.BlockHash, targetHash);
                }
            }

            watchConsensusMessage = IsPreCommitSent;

            Block<DumbAction> block =
                await BlockChain.MineBlock(TestUtils.PrivateKeys[1], append: false);
            targetHash = block.Hash;
            Context.StartAsync();

            Context.ProduceMessage(
                TestUtils.CreateConsensusPropose(block, TestUtils.PrivateKeys[1]));

            Context.ProduceMessage(
                new ConsensusVote(TestUtils.CreateVote(
                    TestUtils.PrivateKeys[0], 1, hash: block.Hash, flag: VoteFlag.Absent))
                {
                    Remote = new Peer(TestUtils.Validators[0]),
                });

            Context.ProduceMessage(
                new ConsensusVote(TestUtils.CreateVote(
                    TestUtils.PrivateKeys[2], 1, hash: block.Hash, flag: VoteFlag.Absent))
                {
                    Remote = new Peer(TestUtils.Validators[2]),
                });

            Context.ProduceMessage(
                new ConsensusVote(TestUtils.CreateVote(
                    TestUtils.PrivateKeys[3], 1, hash: block.Hash, flag: VoteFlag.Absent))
                {
                    Remote = new Peer(TestUtils.Validators[3]),
                });

            await messageReceived.WaitAsync();
            await stepChanged.WaitAsync();
            Assert.Equal(Step.PreCommit, Context.Step);
            Assert.Equal(1, Context.Height);
            Assert.Equal(0, Context.Round);
        }

        [Fact(Timeout = Timeout)]
        public async void EnterNewRoundNil()
        {
            var roundChangedToOne = new AsyncAutoResetEvent();
            Context.RoundChanged += (sender, round) =>
            {
                if (round == 1)
                {
                    roundChangedToOne.Set();
                }
            };
            Context.StartAsync();

            Context.ProduceMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[0], 1, hash: null, flag: VoteFlag.Commit))
                {
                    Remote = new Peer(TestUtils.Validators[0]),
                });

            Context.ProduceMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[2], 1, hash: null, flag: VoteFlag.Commit))
                {
                    Remote = new Peer(TestUtils.Validators[2]),
                });

            Context.ProduceMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[3], 1, hash: null, flag: VoteFlag.Commit))
                {
                    Remote = new Peer(TestUtils.Validators[3]),
                });

            await roundChangedToOne.WaitAsync();
            await NewRoundSendMessageAssert();
            Assert.Equal(Step.Propose, Context.Step);
            Assert.Equal(1, Context.Height);
            Assert.Equal(1, Context.Round);
        }

        [Fact(Timeout = Timeout)]
        public async void EndCommitBlock()
        {
            Block<DumbAction>? proposedBlock = null;
            var blockProposed = new AsyncAutoResetEvent();
            var stepChangedToEndCommit = new AsyncAutoResetEvent();
            Context.BlockProposed += (sender, block) =>
            {
                proposedBlock = block;
                blockProposed.Set();
            };
            Context.StepChanged += (sender, step) =>
            {
                if (step == Step.EndCommit)
                {
                    stepChangedToEndCommit.Set();
                }
            };
            Context.StartAsync();
            await blockProposed.WaitAsync();

            Context.ProduceMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[0],
                        1,
                        hash: proposedBlock!.Hash,
                        flag: VoteFlag.Commit))
                {
                    Remote = new Peer(TestUtils.Validators[0]),
                });

            Context.ProduceMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[2],
                        1,
                        hash: proposedBlock!.Hash,
                        flag: VoteFlag.Commit))
                {
                    Remote = new Peer(TestUtils.Validators[2]),
                });

            Context.ProduceMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[3],
                        1,
                        hash: proposedBlock!.Hash,
                        flag: VoteFlag.Commit))
                {
                    Remote = new Peer(TestUtils.Validators[3]),
                });

            await stepChangedToEndCommit.WaitAsync();
            Assert.Equal(Step.EndCommit, Context.Step);
            Assert.Equal(1, Context.Height);
            Assert.Equal(0, Context.Round);
        }

        [Fact(Timeout = Timeout)]
        public async void EnterPreVoteNil()
        {
            var stepChangedToPreVote = new AsyncAutoResetEvent();
            Context.StepChanged += (sender, step) =>
            {
                if (step == Step.PreVote)
                {
                    stepChangedToPreVote.Set();
                }
            };
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

            Context.StartAsync();

            Block<DumbAction> invalidBlock = GetInvalidBlock();
            Context.ProduceMessage(
                TestUtils.CreateConsensusPropose(
                    invalidBlock, TestUtils.PrivateKeys[NodeId]));

            await messageReceived.WaitAsync();
            await stepChangedToPreVote.WaitAsync();
            Assert.Equal(Step.PreVote, Context.Step);
            Assert.Equal(1, Context.Height);
            Assert.Equal(0, Context.Round);
        }

        [Fact(Timeout = Timeout)]
        public async void EnterPreVoteBlock()
        {
            var stepChangedToPreVote = new AsyncAutoResetEvent();
            Context.StepChanged += (sender, step) =>
            {
                if (step == Step.PreVote)
                {
                    stepChangedToPreVote.Set();
                }
            };
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

            Context.StartAsync();

            await messageReceived.WaitAsync();
            await stepChangedToPreVote.WaitAsync();
            Assert.Equal(Step.PreVote, Context.Step);
            Assert.Equal(1, Context.Height);
            Assert.Equal(0, Context.Round);
        }
    }
}
