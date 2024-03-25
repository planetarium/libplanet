using System.Threading.Tasks;
using Libplanet.Crypto;
using Libplanet.Net.Consensus;
using Libplanet.Net.Messages;
using Libplanet.Types.Blocks;
using Libplanet.Types.Consensus;
using Nito.AsyncEx;
using Serilog;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Net.Tests.Consensus
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
            ConsensusPreCommitMsg? preCommit = null;
            var preCommitSent = new AsyncAutoResetEvent();

            var (_, context) = TestUtils.CreateDummyContext();
            context.StateChanged += (_, eventArgs) =>
            {
                if (eventArgs.Step == ConsensusStep.PreCommit)
                {
                    stepChangedToPreCommit.Set();
                }
            };
            context.MessageToPublish += (_, message) =>
            {
                if (message is ConsensusPreCommitMsg preCommitMsg)
                {
                    preCommit = preCommitMsg;
                    preCommitSent.Set();
                }
            };

            context.Start();
            context.ProduceMessage(
                new ConsensusPreVoteMsg(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[0],
                        TestUtils.ValidatorSet[0].Power,
                        1,
                        0,
                        hash: default,
                        flag: VoteFlag.PreVote)));
            context.ProduceMessage(
                new ConsensusPreVoteMsg(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[2],
                        TestUtils.ValidatorSet[2].Power,
                        1,
                        0,
                        hash: default,
                        flag: VoteFlag.PreVote)));
            context.ProduceMessage(
                new ConsensusPreVoteMsg(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[3],
                        TestUtils.ValidatorSet[3].Power,
                        1,
                        0,
                        hash: default,
                        flag: VoteFlag.PreVote)));

            await Task.WhenAll(preCommitSent.WaitAsync(), stepChangedToPreCommit.WaitAsync());
            Assert.Equal(default(BlockHash), preCommit?.BlockHash);
            Assert.Equal(1, context.Height);
            Assert.Equal(0, context.Round);
            Assert.Equal(ConsensusStep.PreCommit, context.Step);
        }

        [Fact(Timeout = Timeout)]
        public async void EnterPreCommitBlock()
        {
            var stepChangedToPreCommit = new AsyncAutoResetEvent();
            ConsensusProposalMsg? proposal = null;
            var proposalSent = new AsyncAutoResetEvent();
            ConsensusPreCommitMsg? preCommit = null;
            var preCommitSent = new AsyncAutoResetEvent();

            var (_, context) = TestUtils.CreateDummyContext();
            context.StateChanged += (_, eventArgs) =>
            {
                if (eventArgs.Step == ConsensusStep.PreCommit)
                {
                    stepChangedToPreCommit.Set();
                }
            };
            context.MessageToPublish += (_, message) =>
            {
                if (message is ConsensusProposalMsg proposalMsg)
                {
                    proposal = proposalMsg;
                    proposalSent.Set();
                }
                else if (message is ConsensusPreCommitMsg preCommitMsg)
                {
                    preCommit = preCommitMsg;
                    preCommitSent.Set();
                }
            };

            context.Start();

            // Wait for propose to process.
            await proposalSent.WaitAsync();
            BlockHash proposedblockHash = Assert.IsType<BlockHash>(proposal?.BlockHash);

            context.ProduceMessage(
                new ConsensusPreVoteMsg(TestUtils.CreateVote(
                    TestUtils.PrivateKeys[0],
                    TestUtils.ValidatorSet[0].Power,
                    1,
                    0,
                    hash: proposedblockHash,
                    flag: VoteFlag.PreVote)));
            context.ProduceMessage(
                new ConsensusPreVoteMsg(TestUtils.CreateVote(
                    TestUtils.PrivateKeys[2],
                    TestUtils.ValidatorSet[2].Power,
                    1,
                    0,
                    hash: proposedblockHash,
                    flag: VoteFlag.PreVote)));
            context.ProduceMessage(
                new ConsensusPreVoteMsg(TestUtils.CreateVote(
                    TestUtils.PrivateKeys[3],
                    TestUtils.ValidatorSet[3].Power,
                    1,
                    0,
                    hash: proposedblockHash,
                    flag: VoteFlag.PreVote)));

            await Task.WhenAll(preCommitSent.WaitAsync(), stepChangedToPreCommit.WaitAsync());
            Assert.Equal(proposedblockHash, preCommit?.BlockHash);
            Assert.Equal(1, context.Height);
            Assert.Equal(0, context.Round);
            Assert.Equal(ConsensusStep.PreCommit, context.Step);
        }

        [Fact(Timeout = Timeout)]
        public async void EnterNewRoundNil()
        {
            var roundChangedToOne = new AsyncAutoResetEvent();

            var (_, context) = TestUtils.CreateDummyContext();
            context.StateChanged += (_, eventArgs) =>
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
                        TestUtils.PrivateKeys[0],
                        TestUtils.ValidatorSet[0].Power,
                        1,
                        0,
                        hash: default,
                        flag: VoteFlag.PreCommit)));
            context.ProduceMessage(
                new ConsensusPreCommitMsg(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[2],
                        TestUtils.ValidatorSet[2].Power,
                        1,
                        0,
                        hash: default,
                        flag: VoteFlag.PreCommit)));
            context.ProduceMessage(
                new ConsensusPreCommitMsg(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[3],
                        TestUtils.ValidatorSet[3].Power,
                        1,
                        0,
                        hash: default,
                        flag: VoteFlag.PreCommit)));

            await roundChangedToOne.WaitAsync();
            Assert.Equal(1, context.Height);
            Assert.Equal(1, context.Round);
            Assert.Equal(ConsensusStep.Propose, context.Step);
        }

        [Fact(Timeout = Timeout)]
        public async Task EndCommitBlock()
        {
            var stepChangedToEndCommit = new AsyncAutoResetEvent();
            var stepChangedToPreCommit = new AsyncAutoResetEvent();
            ConsensusProposalMsg? proposal = null;
            var proposalSent = new AsyncAutoResetEvent();

            var (_, context) = TestUtils.CreateDummyContext();
            context.StateChanged += (_, eventArgs) =>
            {
                if (eventArgs.Step == ConsensusStep.PreCommit)
                {
                    stepChangedToPreCommit.Set();
                }

                if (eventArgs.Step == ConsensusStep.EndCommit)
                {
                    stepChangedToEndCommit.Set();
                }
            };
            context.MessageToPublish += (_, message) =>
            {
                if (message is ConsensusProposalMsg proposalMsg)
                {
                    proposal = proposalMsg;
                    proposalSent.Set();
                }
            };

            context.Start();

            // Wait for propose to process.
            await proposalSent.WaitAsync();
            Assert.NotNull(proposal?.BlockHash);

            TestUtils.HandleFourPeersPreVoteMessages(
                context,
                TestUtils.PrivateKeys[1],
                proposal!.Proposal.BlockHash);

            await stepChangedToPreCommit.WaitAsync();

            TestUtils.HandleFourPeersPreCommitMessages(
                context,
                TestUtils.PrivateKeys[1],
                proposal!.Proposal.BlockHash);

            await stepChangedToEndCommit.WaitAsync();
            Assert.Equal(proposal?.BlockHash, context.GetBlockCommit()?.BlockHash);
            Assert.Equal(1, context.Height);
            Assert.Equal(0, context.Round);
            Assert.Equal(ConsensusStep.EndCommit, context.Step);
        }

        [Fact(Timeout = Timeout)]
        public async void EnterPreVoteNil()
        {
            var stepChangedToPreVote = new AsyncAutoResetEvent();
            var nilPreVoteSent = new AsyncAutoResetEvent();
            var (_, context) = TestUtils.CreateDummyContext(
                height: 5,
                validatorSet: Libplanet.Tests.TestUtils.ValidatorSet); // Peer1 should be a proposer

            context.StateChanged += (_, eventArgs) =>
            {
                if (eventArgs.Step == ConsensusStep.PreVote)
                {
                    stepChangedToPreVote.Set();
                }
            };
            context.MessageToPublish += (_, message) =>
            {
                if (message is ConsensusPreVoteMsg vote && vote.PreVote.BlockHash.Equals(default))
                {
                    nilPreVoteSent.Set();
                }
            };

            context.Start();
            await Task.WhenAll(nilPreVoteSent.WaitAsync(), stepChangedToPreVote.WaitAsync());
            Assert.Equal(ConsensusStep.PreVote, context.Step);
            Assert.Equal(5, context.Height);
        }

        [Fact(Timeout = Timeout)]
        public async void EnterPreVoteBlock()
        {
            var stepChangedToPreVote = new AsyncAutoResetEvent();
            ConsensusProposalMsg? proposal = null;
            var proposalSent = new AsyncAutoResetEvent();
            ConsensusPreVoteMsg? preVote = null;
            var preVoteSent = new AsyncAutoResetEvent();

            var (_, context) = TestUtils.CreateDummyContext();

            context.StateChanged += (_, eventArgs) =>
            {
                if (eventArgs.Step == ConsensusStep.PreVote)
                {
                    stepChangedToPreVote.Set();
                }
            };
            context.MessageToPublish += (_, message) =>
            {
                if (message is ConsensusProposalMsg proposalMsg)
                {
                    proposal = proposalMsg;
                    proposalSent.Set();
                }
                else if (message is ConsensusPreVoteMsg preVoteMsg)
                {
                    preVote = preVoteMsg;
                    preVoteSent.Set();
                }
            };

            context.Start();
            await proposalSent.WaitAsync();
            Assert.NotNull(proposal?.BlockHash);

            await Task.WhenAll(preVoteSent.WaitAsync(), stepChangedToPreVote.WaitAsync());
            Assert.Equal(proposal?.BlockHash, preVote?.BlockHash);
            Assert.Equal(1, context.Height);
            Assert.Equal(0, context.Round);
            Assert.Equal(ConsensusStep.PreVote, context.Step);
        }

        [Fact(Timeout = Timeout)]
        public async void VoteNilOnSelfProposedInvalidBlock()
        {
            var privateKey = new PrivateKey();
            ConsensusProposalMsg? proposal = null;
            var proposalSent = new AsyncAutoResetEvent();
            ConsensusPreVoteMsg? preVote = null;
            var preVoteSent = new AsyncAutoResetEvent();

            var blockChain = TestUtils.CreateDummyBlockChain();
            var proposer1 = new PrivateKey();
            var block1 = blockChain.ProposeBlock(
                proposer1,
                proof: TestUtils.CreateZeroRoundProof(blockChain.Tip, proposer1));
            var block1Commit = TestUtils.CreateBlockCommit(block1);
            blockChain.Append(block1, block1Commit);
            var proposer2 = new PrivateKey();
            var block2 = blockChain.ProposeBlock(
                proposer2,
                block1Commit,
                TestUtils.CreateZeroRoundProof(blockChain.Tip, proposer2));
            var block2Commit = TestUtils.CreateBlockCommit(block2);
            blockChain.Append(block2, block2Commit);

            var context = TestUtils.CreateDummyContext(
                blockChain,
                privateKey: TestUtils.PrivateKeys[2],
                height: 2,
                lastCommit: block2Commit,
                validatorSet: TestUtils.ValidatorSet);
            context.MessageToPublish += (_, message) =>
            {
                if (message is ConsensusProposalMsg proposalMsg)
                {
                    proposal = proposalMsg;
                    proposalSent.Set();
                }
                else if (message is ConsensusPreVoteMsg preVoteMsg)
                {
                    preVote = preVoteMsg;
                    preVoteSent.Set();
                }
            };

            Assert.Equal(
                TestUtils.PrivateKeys[2].PublicKey,
                TestUtils.ValidatorSet.GetProposer(2, 0).PublicKey);

            context.Start();
            await proposalSent.WaitAsync();
            Bencodex.Codec codec = new Bencodex.Codec();
            var proposedBlock = BlockMarshaler.UnmarshalBlock(
                (Bencodex.Types.Dictionary)codec.Decode(proposal?.Proposal.MarshaledBlock!));
            Assert.Equal(context.Height + 1, proposedBlock.Index);
            await preVoteSent.WaitAsync();
            Assert.Equal(default(BlockHash), preVote?.BlockHash);
            Assert.Equal(default(BlockHash), preVote?.PreVote.BlockHash);
        }
    }
}
