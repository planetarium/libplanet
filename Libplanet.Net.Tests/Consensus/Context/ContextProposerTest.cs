using System.Threading.Tasks;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Net.Consensus;
using Libplanet.Net.Messages;
using Nito.AsyncEx;
using Serilog;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Net.Tests.Consensus.Context
{
    public class ContextProposerTest
    {
        private const int Timeout = 30000;
        private readonly ILogger _logger;

        public ContextProposerTest(ITestOutputHelper output)
        {
            const string outputTemplate =
                "{Timestamp:HH:mm:ss:ffffffZ} - {Message} {Exception}";
            Log.Logger = new LoggerConfiguration()
                .MinimumLevel.Verbose()
                .WriteTo.TestOutput(output, outputTemplate: outputTemplate)
                .CreateLogger()
                .ForContext<ContextProposerTest>();

            _logger = Log.ForContext<ContextProposerTest>();
        }

        [Fact(Timeout = Timeout)]
        public async Task EnterPreCommitNil()
        {
            var stepChangedToPreCommit = new AsyncAutoResetEvent();
            var commitSent = new AsyncAutoResetEvent();

            var (_, _, context) = TestUtils.CreateDummyContext(
                consensusMessageSent: CheckCommit);
            context.StateChanged += (sender, eventArgs) =>
            {
                if (eventArgs.Step == Step.PreCommit)
                {
                    stepChangedToPreCommit.Set();
                }
            };
            void CheckCommit(object? sender, ConsensusMsg message)
            {
                if (message is ConsensusPreCommitMsg commit)
                {
                    Assert.Null(commit.PreCommit.BlockHash);
                    commitSent.Set();
                }
            }

            context.Start();
            context.ProduceMessage(
                new ConsensusPreVoteMsg(TestUtils.CreateVote(
                    TestUtils.Peer0Priv, 1, hash: null, flag: VoteFlag.PreVote)));
            context.ProduceMessage(
                new ConsensusPreVoteMsg(TestUtils.CreateVote(
                    TestUtils.Peer2Priv, 1, hash: null, flag: VoteFlag.PreVote)));
            context.ProduceMessage(
                new ConsensusPreVoteMsg(TestUtils.CreateVote(
                    TestUtils.Peer3Priv, 1, hash: null, flag: VoteFlag.PreVote)));

            await Task.WhenAll(commitSent.WaitAsync(), stepChangedToPreCommit.WaitAsync());
            Assert.Equal(1, context.Height);
            Assert.Equal(0, context.Round);
            Assert.Equal(Step.PreCommit, context.Step);
        }

        [Fact(Timeout = Timeout)]
        public async void EnterPreCommitBlock()
        {
            var proposeSent = new AsyncAutoResetEvent();
            var stepChangedToPreCommit = new AsyncAutoResetEvent();
            var commitSent = new AsyncAutoResetEvent();
            BlockHash? hash = null;

            var (_, _, context) = TestUtils.CreateDummyContext(
                consensusMessageSent: CatchMessage);
            context.StateChanged += (sender, eventArgs) =>
            {
                if (eventArgs.Step == Step.PreCommit)
                {
                    stepChangedToPreCommit.Set();
                }
            };
            void CatchMessage(object? sender, ConsensusMsg message)
            {
                if (message is ConsensusProposalMsg propose)
                {
                    hash = propose.BlockHash;
                    proposeSent.Set();
                }
                else if (message is ConsensusPreCommitMsg commit)
                {
                    Assert.Equal(commit.PreCommit.BlockHash, hash);
                    commitSent.Set();
                }
            }

            context.Start();

            // Wait for propose to process.
            await proposeSent.WaitAsync();
            Assert.NotNull(hash);

            context.ProduceMessage(
                new ConsensusPreVoteMsg(TestUtils.CreateVote(
                    TestUtils.Peer0Priv, 1, hash: hash, flag: VoteFlag.PreVote)));
            context.ProduceMessage(
                new ConsensusPreVoteMsg(TestUtils.CreateVote(
                    TestUtils.Peer2Priv, 1, hash: hash, flag: VoteFlag.PreVote)));
            context.ProduceMessage(
                new ConsensusPreVoteMsg(TestUtils.CreateVote(
                    TestUtils.Peer3Priv, 1, hash: hash, flag: VoteFlag.PreVote)));

            await Task.WhenAll(commitSent.WaitAsync(), stepChangedToPreCommit.WaitAsync());
            Assert.Equal(1, context.Height);
            Assert.Equal(0, context.Round);
            Assert.Equal(Step.PreCommit, context.Step);
        }

        [Fact(Timeout = Timeout)]
        public async void EnterNewRoundNil()
        {
            var roundChangedToOne = new AsyncAutoResetEvent();

            var (_, _, context) = TestUtils.CreateDummyContext();
            context.StateChanged += (sender, eventArgs) =>
            {
                if (eventArgs.Round == 1)
                {
                    roundChangedToOne.Set();
                }
            };

            context.Start();
            context.ProduceMessage(
                new ConsensusPreCommitMsg(
                    TestUtils.CreateVote(
                        TestUtils.Peer0Priv, 1, hash: null, flag: VoteFlag.PreCommit)));
            context.ProduceMessage(
                new ConsensusPreCommitMsg(
                    TestUtils.CreateVote(
                        TestUtils.Peer2Priv, 1, hash: null, flag: VoteFlag.PreCommit)));
            context.ProduceMessage(
                new ConsensusPreCommitMsg(
                    TestUtils.CreateVote(
                        TestUtils.Peer3Priv, 1, hash: null, flag: VoteFlag.PreCommit)));

            await roundChangedToOne.WaitAsync();
            Assert.Equal(1, context.Height);
            Assert.Equal(1, context.Round);
            Assert.Equal(Step.Propose, context.Step);
        }

        [Fact(Timeout = Timeout)]
        public async Task EndCommitBlock()
        {
            BlockHash? hash = null;
            var proposeSent = new AsyncAutoResetEvent();
            var stepChangedToEndCommit = new AsyncAutoResetEvent();

            var (_, _, context) = TestUtils.CreateDummyContext(
                consensusMessageSent: CatchMessage);
            context.StateChanged += (sender, eventArgs) =>
            {
                if (eventArgs.Step == Step.EndCommit)
                {
                    stepChangedToEndCommit.Set();
                }
            };
            void CatchMessage(object? sender, ConsensusMsg message)
            {
                if (message is ConsensusProposalMsg propose)
                {
                    hash = propose.BlockHash;
                    proposeSent.Set();
                }
                else if (message is ConsensusPreCommitMsg commit)
                {
                    Assert.Equal(commit.PreCommit.BlockHash, hash);
                }
            }

            context.Start();

            // Wait for propose to process.
            await proposeSent.WaitAsync();
            Assert.NotNull(hash);

            context.ProduceMessage(
                new ConsensusPreCommitMsg(
                    TestUtils.CreateVote(
                        TestUtils.Peer0Priv, 1, hash: hash, flag: VoteFlag.PreCommit)));
            context.ProduceMessage(
                new ConsensusPreCommitMsg(
                    TestUtils.CreateVote(
                        TestUtils.Peer2Priv, 1, hash: hash, flag: VoteFlag.PreCommit)));
            context.ProduceMessage(
                new ConsensusPreCommitMsg(
                    TestUtils.CreateVote(
                        TestUtils.Peer3Priv, 1, hash: hash, flag: VoteFlag.PreCommit)));

            await stepChangedToEndCommit.WaitAsync();
            Assert.Equal(1, context.Height);
            Assert.Equal(0, context.Round);
            Assert.Equal(Step.EndCommit, context.Step);
        }

        [Fact(Timeout = Timeout)]
        public async void EnterPreVoteNil()
        {
            var stepChangedToPreVote = new AsyncAutoResetEvent();
            var nilPreVoteSent = new AsyncAutoResetEvent();
            var (fx, blockChain, context) = TestUtils.CreateDummyContext(
                height: 5, // Peer1 should be a proposer
                consensusMessageSent: CheckVote);

            context.StateChanged += (sender, eventArgs) =>
            {
                if (eventArgs.Step == Step.PreVote)
                {
                    stepChangedToPreVote.Set();
                }
            };
            void CheckVote(object? sender, ConsensusMsg message)
            {
                if (message is ConsensusPreVoteMsg vote && vote.PreVote.BlockHash is null)
                {
                    nilPreVoteSent.Set();
                }
            }

            context.Start();
            await Task.WhenAll(nilPreVoteSent.WaitAsync(), stepChangedToPreVote.WaitAsync());
            Assert.Equal(Step.PreVote, context.Step);
            Assert.Equal(5, context.Height);
        }

        [Fact(Timeout = Timeout)]
        public async void EnterPreVoteBlock()
        {
            var proposeSent = new AsyncAutoResetEvent();
            var stepChangedToPreVote = new AsyncAutoResetEvent();
            var voteSent = new AsyncAutoResetEvent();
            BlockHash? hash = null;

            var (_, _, context) = TestUtils.CreateDummyContext(
                consensusMessageSent: CheckVote);

            context.StateChanged += (sender, eventArgs) =>
            {
                if (eventArgs.Step == Step.PreVote)
                {
                    stepChangedToPreVote.Set();
                }
            };
            void CheckVote(object? sender, ConsensusMsg message)
            {
                if (message is ConsensusProposalMsg propose)
                {
                    hash = propose.BlockHash;
                    proposeSent.Set();
                }
                else if (message is ConsensusPreVoteMsg preVote)
                {
                    Assert.Equal(preVote.PreVote.BlockHash, hash);
                    voteSent.Set();
                }
            }

            context.Start();
            await proposeSent.WaitAsync();
            Assert.NotNull(hash);

            await Task.WhenAll(voteSent.WaitAsync(), stepChangedToPreVote.WaitAsync());
            Assert.Equal(1, context.Height);
            Assert.Equal(0, context.Round);
            Assert.Equal(Step.PreVote, context.Step);
        }
    }
}
