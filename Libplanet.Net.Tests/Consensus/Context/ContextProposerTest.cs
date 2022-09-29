using System.Threading.Tasks;
using Bencodex;
using Libplanet.Consensus;
using Libplanet.Net.Consensus;
using Libplanet.Net.Messages;
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
        public async Task EnterPreCommitNil()
        {
            var block = BlockChain.ProposeBlock(Proposer(0));
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
                    Assert.Null(commit.CommitVote.BlockHash);
                    commitSent.Set();
                }
            };

            // Bypass StartAsync() to avoid StartRound(0).
            _ = Context.MessageConsumerTask(default);
            _ = Context.MutationConsumerTask(default);

            Context.ProduceMessage(
                TestUtils.CreateConsensusPropose(block, Proposer(0)));

            Context.ProduceMessage(
                new ConsensusVote(TestUtils.CreateVote(
                    TestUtils.PrivateKeys[0], 1, hash: null, flag: VoteFlag.Absent))
                {
                    Remote = TestUtils.Peers[0],
                });
            Context.ProduceMessage(
                new ConsensusVote(TestUtils.CreateVote(
                    TestUtils.PrivateKeys[2], 1, hash: null, flag: VoteFlag.Absent))
                {
                    Remote = TestUtils.Peers[2],
                });
            Context.ProduceMessage(
                new ConsensusVote(TestUtils.CreateVote(
                    TestUtils.PrivateKeys[3], 1, hash: null, flag: VoteFlag.Absent))
                {
                    Remote = TestUtils.Peers[3],
                });

            await Task.WhenAll(commitSent.WaitAsync(), stepChangedToPreCommit.WaitAsync());
            Assert.Equal(Step.PreCommit, Context.Step);
            Assert.Equal(1, Context.Height);
            Assert.Equal(0, Context.Round);
        }

        [Fact(Timeout = Timeout)]
        public async void EnterPreCommitBlock()
        {
            var block = BlockChain.ProposeBlock(Proposer(0));
            var targetHash = block.Hash;
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
                    Assert.Equal(commit.CommitVote.BlockHash, targetHash);
                    commitSent.Set();
                }
            };

            // Bypass StartAsync() to avoid StartRound(0).
            _ = Context.MessageConsumerTask(default);
            _ = Context.MutationConsumerTask(default);

            Context.ProduceMessage(
                TestUtils.CreateConsensusPropose(block, Proposer(0)));

            Context.ProduceMessage(
                new ConsensusVote(TestUtils.CreateVote(
                    TestUtils.PrivateKeys[0], 1, hash: block.Hash, flag: VoteFlag.Absent))
                {
                    Remote = TestUtils.Peers[0],
                });

            Context.ProduceMessage(
                new ConsensusVote(TestUtils.CreateVote(
                    TestUtils.PrivateKeys[2], 1, hash: block.Hash, flag: VoteFlag.Absent))
                {
                    Remote = TestUtils.Peers[2],
                });

            Context.ProduceMessage(
                new ConsensusVote(TestUtils.CreateVote(
                    TestUtils.PrivateKeys[3], 1, hash: block.Hash, flag: VoteFlag.Absent))
                {
                    Remote = TestUtils.Peers[3],
                });

            await Task.WhenAll(commitSent.WaitAsync(), stepChangedToPreCommit.WaitAsync());
            Assert.Equal(Step.PreCommit, Context.Step);
            Assert.Equal(1, Context.Height);
            Assert.Equal(0, Context.Round);
        }

        [Fact(Timeout = Timeout)]
        public async void EnterNewRoundNil()
        {
            var roundChangedToOne = new AsyncAutoResetEvent();
            Context.StateChanged += (sender, state) =>
            {
                if (state.Round == 1)
                {
                    roundChangedToOne.Set();
                }
            };

            // Bypass StartAsync() to avoid StartRound(0).
            _ = Context.MessageConsumerTask(default);
            _ = Context.MutationConsumerTask(default);

            Context.ProduceMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[0], 1, hash: null, flag: VoteFlag.Commit))
                {
                    Remote = TestUtils.Peers[0],
                });

            Context.ProduceMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[2], 1, hash: null, flag: VoteFlag.Commit))
                {
                    Remote = TestUtils.Peers[2],
                });

            Context.ProduceMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[3], 1, hash: null, flag: VoteFlag.Commit))
                {
                    Remote = TestUtils.Peers[3],
                });

            await roundChangedToOne.WaitAsync();
            Assert.Equal(Step.Propose, Context.Step);
            Assert.Equal(1, Context.Height);
            Assert.Equal(1, Context.Round);
        }

        [Fact(Timeout = Timeout)]
        public async Task EndCommitBlock()
        {
            var codec = new Codec();
            var block = BlockChain.ProposeBlock(Proposer(0));
            var stepChangedToEndCommit = new AsyncAutoResetEvent();
            Context.StateChanged += (sender, state) =>
            {
                if (state.Step == Step.EndCommit)
                {
                    stepChangedToEndCommit.Set();
                }
            };

            // Bypass StartAsync() to avoid StartRound(0).
            _ = Context.MessageConsumerTask(default);
            _ = Context.MutationConsumerTask(default);

            Context.ProduceMessage(
                TestUtils.CreateConsensusPropose(block, Proposer(0)));

            Context.ProduceMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[0], 1, hash: block.Hash, flag: VoteFlag.Commit))
                {
                    Remote = TestUtils.Peers[0],
                });

            Context.ProduceMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[2], 1, hash: block.Hash, flag: VoteFlag.Commit))
                {
                    Remote = TestUtils.Peers[2],
                });

            Context.ProduceMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[3], 1, hash: block.Hash, flag: VoteFlag.Commit))
                {
                    Remote = TestUtils.Peers[3],
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
                if (message is ConsensusVote vote && vote.ProposeVote.BlockHash is null)
                {
                    voteSent.Set();
                }
            };

            // Bypass StartAsync() to avoid StartRound(0).
            _ = Context.MessageConsumerTask(default);
            _ = Context.MutationConsumerTask(default);

            var invalidBlock = GetInvalidBlock();
            Context.ProduceMessage(
                TestUtils.CreateConsensusPropose(
                    invalidBlock, Proposer(0)));

            await Task.WhenAll(voteSent.WaitAsync(), stepChangedToPreVote.WaitAsync());
            Assert.Equal(Step.PreVote, Context.Step);
            Assert.Equal(1, Context.Height);
            Assert.Equal(0, Context.Round);
        }

        [Fact(Timeout = Timeout)]
        public async void EnterPreVoteBlock()
        {
            var block = BlockChain.ProposeBlock(Proposer(0));
            var targetHash = block.Hash;
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
                if (message is ConsensusVote vote)
                {
                    Assert.Equal(vote.ProposeVote.BlockHash, targetHash);
                    voteSent.Set();
                }
            };

            // Bypass StartAsync() to avoid StartRound(0).
            _ = Context.MessageConsumerTask(default);
            _ = Context.MutationConsumerTask(default);

            Context.ProduceMessage(
                TestUtils.CreateConsensusPropose(block, Proposer(0)));

            await Task.WhenAll(voteSent.WaitAsync(), stepChangedToPreVote.WaitAsync());
            Assert.Equal(Step.PreVote, Context.Step);
            Assert.Equal(1, Context.Height);
            Assert.Equal(0, Context.Round);
        }
    }
}
