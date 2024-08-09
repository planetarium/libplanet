using System;
using System.Collections.Generic;
using System.Linq;
using System.Numerics;
using System.Threading.Tasks;
using Bencodex;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.Net.Consensus;
using Libplanet.Net.Messages;
using Libplanet.Tests;
using Libplanet.Types.Blocks;
using Libplanet.Types.Consensus;
using Nito.AsyncEx;
using Serilog;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Net.Tests.Consensus
{
    public class ConsensusContextTest
    {
        private const int Timeout = 30000;
        private readonly ILogger _logger;

        public ConsensusContextTest(ITestOutputHelper output)
        {
            const string outputTemplate =
                "{Timestamp:HH:mm:ss:ffffffZ} - {Message} {Exception}";
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
            ConsensusProposalMsg? proposal = null;
            var proposalMessageSent = new AsyncAutoResetEvent();
            var (blockChain, consensusContext) = TestUtils.CreateDummyConsensusContext(
                TimeSpan.FromSeconds(1),
                TestUtils.Policy,
                TestUtils.ActionLoader,
                TestUtils.PrivateKeys[3]);
            consensusContext.Start();

            AsyncAutoResetEvent heightThreeStepChangedToPropose = new AsyncAutoResetEvent();
            AsyncAutoResetEvent heightThreeStepChangedToEndCommit = new AsyncAutoResetEvent();
            AsyncAutoResetEvent heightFourStepChangedToPropose = new AsyncAutoResetEvent();
            AsyncAutoResetEvent onTipChangedToThree = new AsyncAutoResetEvent();
            consensusContext.StateChanged += (_, eventArgs) =>
            {
                if (eventArgs.Height == 3 && eventArgs.Step == ConsensusStep.Propose)
                {
                    heightThreeStepChangedToPropose.Set();
                }
                else if (eventArgs.Height == 3 && eventArgs.Step == ConsensusStep.EndCommit)
                {
                    heightThreeStepChangedToEndCommit.Set();
                }
                else if (eventArgs.Height == 4 && eventArgs.Step == ConsensusStep.Propose)
                {
                    heightFourStepChangedToPropose.Set();
                }
            };
            consensusContext.MessagePublished += (_, eventArgs) =>
            {
                if (eventArgs.Message is ConsensusProposalMsg proposalMsg)
                {
                    proposal = proposalMsg;
                    proposalMessageSent.Set();
                }
            };
            blockChain.TipChanged += (_, eventArgs) =>
            {
                if (eventArgs.NewTip.Index == 3L)
                {
                    onTipChangedToThree.Set();
                }
            };

            var lotSet = new LotSet(
                blockChain.Tip.Index + 1, 0, blockChain.Tip.Proof, TestUtils.ValidatorSet, 20);
            var lot = lotSet.GenerateLot(TestUtils.PrivateKeys[1]);
            foreach (int i in new int[] { 0, 1, 2 })
            {
                consensusContext.HandleMessage(
                    new ConsensusDominantLotMsg(
                        TestUtils.CreateDominantLot(TestUtils.PrivateKeys[i], lot)));
            }

            var block = blockChain.ProposeBlock(
                TestUtils.PrivateKeys[1],
                proof: TestUtils.CreateZeroRoundProof(blockChain.Tip, TestUtils.PrivateKeys[1]));
            var blockCommit = TestUtils.CreateBlockCommit(block);
            blockChain.Append(block, blockCommit);

            lotSet = new LotSet(
                blockChain.Tip.Index + 1, 0, blockChain.Tip.Proof, TestUtils.ValidatorSet, 20);
            lot = lotSet.GenerateLot(TestUtils.PrivateKeys[2]);
            foreach (int i in new int[] { 0, 1, 2 })
            {
                consensusContext.HandleMessage(
                    new ConsensusDominantLotMsg(
                        TestUtils.CreateDominantLot(TestUtils.PrivateKeys[i], lot)));
            }

            block = blockChain.ProposeBlock(
                TestUtils.PrivateKeys[2],
                blockCommit,
                TestUtils.CreateZeroRoundProof(blockChain.Tip, TestUtils.PrivateKeys[2]));
            blockChain.Append(block, TestUtils.CreateBlockCommit(block));
            Assert.Equal(2, blockChain.Tip.Index);

            lotSet = new LotSet(
                blockChain.Tip.Index + 1, 0, blockChain.Tip.Proof, TestUtils.ValidatorSet, 20);
            lot = lotSet.GenerateLot(TestUtils.PrivateKeys[3]);
            foreach (int i in new int[] { 0, 1, 2 })
            {
                consensusContext.HandleMessage(
                    new ConsensusDominantLotMsg(
                        TestUtils.CreateDominantLot(TestUtils.PrivateKeys[i], lot)));
            }

            // Wait for context of height 3 to start.
            await heightThreeStepChangedToPropose.WaitAsync();
            Assert.Equal(3, consensusContext.Height);

            // Cannot call NewHeight() with invalid heights.
            Assert.Throws<InvalidHeightIncreasingException>(() => consensusContext.NewHeight(2));
            Assert.Throws<InvalidHeightIncreasingException>(() => consensusContext.NewHeight(3));

            await proposalMessageSent.WaitAsync();
            BlockHash proposedblockHash = Assert.IsType<BlockHash>(proposal?.BlockHash);

            consensusContext.HandleMessage(
                new ConsensusPreCommitMsg(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[0],
                        TestUtils.ValidatorSet[0].Power,
                        3,
                        0,
                        hash: proposedblockHash,
                        flag: VoteFlag.PreCommit)));
            consensusContext.HandleMessage(
                new ConsensusPreCommitMsg(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[1],
                        TestUtils.ValidatorSet[1].Power,
                        3,
                        0,
                        hash: proposedblockHash,
                        flag: VoteFlag.PreCommit)));
            consensusContext.HandleMessage(
                new ConsensusPreCommitMsg(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[2],
                        TestUtils.ValidatorSet[2].Power,
                        3,
                        0,
                        hash: proposedblockHash,
                        flag: VoteFlag.PreCommit)));

            // Waiting for commit.
            await heightThreeStepChangedToEndCommit.WaitAsync();
            await onTipChangedToThree.WaitAsync();
            Assert.Equal(3, blockChain.Tip.Index);

            lotSet = new LotSet(
                blockChain.Tip.Index + 1, 0, blockChain.Tip.Proof, TestUtils.ValidatorSet, 20);
            lot = lotSet.GenerateLot(TestUtils.PrivateKeys[3]);
            foreach (int i in new int[] { 0, 1, 2 })
            {
                consensusContext.HandleMessage(
                    new ConsensusDominantLotMsg(
                        TestUtils.CreateDominantLot(TestUtils.PrivateKeys[i], lot)));
            }

            // Next height starts normally.
            await heightFourStepChangedToPropose.WaitAsync();
            Assert.Equal(4, consensusContext.Height);
            Assert.Equal(0, consensusContext.Round);
        }

        [Fact(Timeout = Timeout)]
        public void Ctor()
        {
            var (_, consensusContext) = TestUtils.CreateDummyConsensusContext(
                TimeSpan.FromSeconds(1),
                TestUtils.Policy,
                TestUtils.ActionLoader,
                TestUtils.PrivateKeys[1]);

            Assert.Equal(ConsensusStep.Default, consensusContext.Step);
            Assert.Equal(1, consensusContext.Height);
            Assert.Equal(-1, consensusContext.Round);
        }

        [Fact]
        public void CannotStartTwice()
        {
            var (_, consensusContext) = TestUtils.CreateDummyConsensusContext(
                TimeSpan.FromSeconds(1),
                TestUtils.Policy,
                TestUtils.ActionLoader,
                TestUtils.PrivateKeys[1]);
            consensusContext.Start();
            Assert.Throws<InvalidOperationException>(() => consensusContext.Start());
        }

        [Fact(Timeout = Timeout)]
        public async void NewHeightWhenTipChanged()
        {
            var newHeightDelay = TimeSpan.FromSeconds(1);
            var (blockChain, consensusContext) = TestUtils.CreateDummyConsensusContext(
                newHeightDelay,
                TestUtils.Policy,
                TestUtils.ActionLoader,
                TestUtils.PrivateKeys[1]);
            consensusContext.Start();
            var proposer = new PrivateKey();
            Assert.Equal(1, consensusContext.Height);
            Block block = blockChain.ProposeBlock(
                proposer,
                proof: TestUtils.CreateZeroRoundProof(blockChain.Tip, proposer));
            blockChain.Append(block, TestUtils.CreateBlockCommit(block));
            Assert.Equal(1, consensusContext.Height);
            await Task.Delay(newHeightDelay + TimeSpan.FromSeconds(1));
            Assert.Equal(2, consensusContext.Height);
        }

        [Fact(Timeout = Timeout)]
        public void IgnoreMessagesFromLowerHeight()
        {
            var (blockChain, consensusContext) = TestUtils.CreateDummyConsensusContext(
                TimeSpan.FromSeconds(1),
                TestUtils.Policy,
                TestUtils.ActionLoader,
                TestUtils.PrivateKeys[1]);
            consensusContext.Start();
            Assert.True(consensusContext.Height == 1);
            Assert.False(consensusContext.HandleMessage(
                TestUtils.CreateConsensusPropose(
                    blockChain.ProposeBlock(
                        TestUtils.PrivateKeys[0],
                        proof: TestUtils.CreateZeroRoundProof(
                            blockChain.Tip, TestUtils.PrivateKeys[0])),
                    TestUtils.PrivateKeys[0],
                    0)));
        }

        [Fact(Timeout = Timeout)]
        public async void VoteSetGetOnlyProposeCommitHash()
        {
            ConsensusProposalMsg? proposal = null;
            var heightOneProposalSent = new AsyncAutoResetEvent();
            var heightOneEndCommit = new AsyncAutoResetEvent();
            var votes = new List<Vote>();

            var (blockChain, consensusContext) = TestUtils.CreateDummyConsensusContext(
                TimeSpan.FromSeconds(1),
                TestUtils.Policy,
                TestUtils.ActionLoader,
                TestUtils.PrivateKeys[1]);
            consensusContext.StateChanged += (sender, tuple) =>
            {
                if (tuple.Height == 1 && tuple.Step == ConsensusStep.EndCommit)
                {
                    heightOneEndCommit.Set();
                }
            };
            consensusContext.MessagePublished += (_, eventArgs) =>
            {
                if (eventArgs.Height == 1 && eventArgs.Message is ConsensusProposalMsg proposalMsg)
                {
                    proposal = proposalMsg;
                    heightOneProposalSent.Set();
                }
            };

            consensusContext.Start();
            var lotSet = new LotSet(
                blockChain.Tip.Index + 1, 0, blockChain.Tip.Proof, TestUtils.ValidatorSet, 20);
            var lot = lotSet.GenerateLot(TestUtils.PrivateKeys[1]);
            foreach (int i in new int[] { 0, 2, 3 })
            {
                consensusContext.HandleMessage(
                    new ConsensusDominantLotMsg(
                        TestUtils.CreateDominantLot(TestUtils.PrivateKeys[i], lot)));
            }

            await heightOneProposalSent.WaitAsync();
            BlockHash proposedblockHash = Assert.IsType<BlockHash>(proposal?.BlockHash);

            votes.Add(TestUtils.CreateVote(
                TestUtils.PrivateKeys[0],
                TestUtils.ValidatorSet[0].Power,
                1,
                0,
                new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size)),
                VoteFlag.PreCommit));
            votes.AddRange(Enumerable.Range(1, 3).Select(x => TestUtils.CreateVote(
                TestUtils.PrivateKeys[x],
                TestUtils.ValidatorSet[x].Power,
                1,
                0,
                proposedblockHash,
                VoteFlag.PreCommit)));

            foreach (var vote in votes)
            {
                consensusContext.HandleMessage(new ConsensusPreCommitMsg(vote));
            }

            await heightOneEndCommit.WaitAsync();

            var blockCommit = consensusContext.CurrentContext.GetBlockCommit();
            Assert.NotNull(blockCommit);
            Assert.NotEqual(votes[0], blockCommit!.Votes.First(x =>
                x.ValidatorPublicKey.Equals(TestUtils.PrivateKeys[0].PublicKey)));

            var actualVotesWithoutInvalid =
                HashSetExtensions.ToHashSet(blockCommit.Votes.Where(x =>
                    !x.ValidatorPublicKey.Equals(TestUtils.PrivateKeys[0].PublicKey)));

            var expectedVotes = HashSetExtensions.ToHashSet(votes.Where(x =>
                !x.ValidatorPublicKey.Equals(TestUtils.PrivateKeys[0].PublicKey)));

            Assert.Equal(expectedVotes, actualVotesWithoutInvalid);
        }

        [Fact(Timeout = Timeout)]
        public async Task GetVoteSetBits()
        {
            PrivateKey proposer = TestUtils.PrivateKeys[1];
            BigInteger proposerPower = TestUtils.ValidatorSet[1].Power;
            AsyncAutoResetEvent stepChanged = new AsyncAutoResetEvent();
            AsyncAutoResetEvent committed = new AsyncAutoResetEvent();
            var (blockChain, consensusContext) = TestUtils.CreateDummyConsensusContext(
                TimeSpan.FromSeconds(1),
                TestUtils.Policy,
                TestUtils.ActionLoader,
                TestUtils.PrivateKeys[0]);
            consensusContext.Start();
            var lotSet = new LotSet(
                blockChain.Tip.Index + 1, 0, blockChain.Tip.Proof, TestUtils.ValidatorSet, 20);
            var lot = lotSet.GenerateLot(proposer);
            foreach (int i in new int[] { 1, 2, 3 })
            {
                consensusContext.HandleMessage(
                    new ConsensusDominantLotMsg(
                        TestUtils.CreateDominantLot(TestUtils.PrivateKeys[i], lot)));
            }

            var block = blockChain.ProposeBlock(
                proposer,
                proof: TestUtils.CreateZeroRoundProof(blockChain.Tip, proposer));
            var proposal = new ProposalMetadata(
                1,
                0,
                DateTimeOffset.UtcNow,
                proposer.PublicKey,
                new Codec().Encode(block.MarshalBlock()),
                -1).Sign(proposer);
            var preVote1 = new VoteMetadata(
                1,
                0,
                block.Hash,
                DateTimeOffset.UtcNow,
                proposer.PublicKey,
                proposerPower,
                VoteFlag.PreVote).Sign(proposer);
            var preVote2 = new VoteMetadata(
                1,
                0,
                block.Hash,
                DateTimeOffset.UtcNow,
                TestUtils.PrivateKeys[2].PublicKey,
                TestUtils.ValidatorSet[2].Power,
                VoteFlag.PreVote).Sign(TestUtils.PrivateKeys[2]);
            var preVote3 = new VoteMetadata(
                1,
                0,
                block.Hash,
                DateTimeOffset.UtcNow,
                TestUtils.PrivateKeys[3].PublicKey,
                TestUtils.ValidatorSet[3].Power,
                VoteFlag.PreVote).Sign(TestUtils.PrivateKeys[3]);
            consensusContext.StateChanged += (_, eventArgs) =>
            {
                if (eventArgs is { Height: 1, Step: ConsensusStep.PreCommit })
                {
                    stepChanged.Set();
                }
            };
            consensusContext.CurrentContext.VoteSetModified += (_, eventArgs) =>
            {
                if (eventArgs.Flag == VoteFlag.PreCommit)
                {
                    committed.Set();
                }
            };

            consensusContext.HandleMessage(new ConsensusProposalMsg(proposal));
            consensusContext.HandleMessage(new ConsensusPreVoteMsg(preVote1));
            consensusContext.HandleMessage(new ConsensusPreVoteMsg(preVote3));
            await stepChanged.WaitAsync();
            await committed.WaitAsync();

            // VoteSetBits expects missing votes
            VoteSetBits voteSetBits = consensusContext.CurrentContext
                .GetVoteSetBits(0, block.Hash, VoteFlag.PreVote);
            Assert.True(
                voteSetBits.VoteBits.SequenceEqual(new[] { true, true, false, true }));
            voteSetBits = consensusContext.CurrentContext
                .GetVoteSetBits(0, block.Hash, VoteFlag.PreCommit);
            Assert.True(
                voteSetBits.VoteBits.SequenceEqual(new[] { true, false, false, false }));
        }

        [Fact(Timeout = Timeout)]
        public async Task HandleVoteSetBits()
        {
            PrivateKey proposer = TestUtils.PrivateKeys[1];
            BigInteger proposerPower = TestUtils.ValidatorSet[1].Power;
            ConsensusStep step = ConsensusStep.Default;
            var stepChanged = new AsyncAutoResetEvent();
            var (blockChain, consensusContext) = TestUtils.CreateDummyConsensusContext(
                TimeSpan.FromSeconds(1),
                TestUtils.Policy,
                TestUtils.ActionLoader,
                TestUtils.PrivateKeys[0]);
            consensusContext.StateChanged += (_, eventArgs) =>
            {
                if (eventArgs.Step != step)
                {
                    step = eventArgs.Step;
                    stepChanged.Set();
                }
            };

            consensusContext.Start();
            var lotSet = new LotSet(
                blockChain.Tip.Index + 1, 0, blockChain.Tip.Proof, TestUtils.ValidatorSet, 20);
            var lot = lotSet.GenerateLot(TestUtils.PrivateKeys[1]);
            foreach (int i in new int[] { 1, 2, 3 })
            {
                consensusContext.HandleMessage(
                    new ConsensusDominantLotMsg(
                        TestUtils.CreateDominantLot(TestUtils.PrivateKeys[i], lot)));
            }

            var block = blockChain.ProposeBlock(
                proposer,
                proof: TestUtils.CreateZeroRoundProof(blockChain.Tip, proposer));
            var proposal = new ProposalMetadata(
                1,
                0,
                DateTimeOffset.UtcNow,
                proposer.PublicKey,
                new Codec().Encode(block.MarshalBlock()),
                -1).Sign(proposer);
            var preVote1 = new VoteMetadata(
                1,
                0,
                block.Hash,
                DateTimeOffset.UtcNow,
                proposer.PublicKey,
                proposerPower,
                VoteFlag.PreVote).Sign(proposer);
            var preVote2 = new VoteMetadata(
                1,
                0,
                block.Hash,
                DateTimeOffset.UtcNow,
                TestUtils.PrivateKeys[2].PublicKey,
                TestUtils.ValidatorSet[2].Power,
                VoteFlag.PreVote).Sign(TestUtils.PrivateKeys[2]);
            consensusContext.HandleMessage(new ConsensusProposalMsg(proposal));
            consensusContext.HandleMessage(new ConsensusPreVoteMsg(preVote1));
            consensusContext.HandleMessage(new ConsensusPreVoteMsg(preVote2));
            do
            {
                await stepChanged.WaitAsync();
            }
            while (step != ConsensusStep.PreCommit);

            // VoteSetBits expects missing votes
            var voteSetBits =
                new VoteSetBitsMetadata(
                        1,
                        0,
                        block.Hash,
                        DateTimeOffset.UtcNow,
                        TestUtils.PrivateKeys[1].PublicKey,
                        VoteFlag.PreVote,
                        new[] { false, false, true, false })
                    .Sign(TestUtils.PrivateKeys[1]);
            ConsensusMsg[] votes =
                consensusContext.HandleVoteSetBits(voteSetBits).ToArray();
            Assert.True(votes.All(vote => vote is ConsensusPreVoteMsg));
            Assert.Equal(2, votes.Length);
            Assert.Equal(TestUtils.PrivateKeys[0].PublicKey, votes[0].ValidatorPublicKey);
            Assert.Equal(TestUtils.PrivateKeys[1].PublicKey, votes[1].ValidatorPublicKey);
        }

        [Fact(Timeout = Timeout)]
        public async Task HandleProposalClaim()
        {
            PrivateKey proposer = TestUtils.PrivateKeys[1];
            ConsensusStep step = ConsensusStep.Default;
            var stepChanged = new AsyncAutoResetEvent();
            var (blockChain, consensusContext) = TestUtils.CreateDummyConsensusContext(
                TimeSpan.FromSeconds(1),
                TestUtils.Policy,
                TestUtils.ActionLoader,
                TestUtils.PrivateKeys[0]);
            consensusContext.StateChanged += (_, eventArgs) =>
            {
                if (eventArgs.Step != step)
                {
                    step = eventArgs.Step;
                    stepChanged.Set();
                }
            };
            consensusContext.Start();
            var lotSet = new LotSet(
                blockChain.Tip.Index + 1, 0, blockChain.Tip.Proof, TestUtils.ValidatorSet, 20);
            var lot = lotSet.GenerateLot(TestUtils.PrivateKeys[1]);
            foreach (int i in new int[] { 1, 2, 3 })
            {
                consensusContext.HandleMessage(
                    new ConsensusDominantLotMsg(
                        TestUtils.CreateDominantLot(TestUtils.PrivateKeys[i], lot)));
            }

            var block = blockChain.ProposeBlock(
                proposer,
                proof: TestUtils.CreateZeroRoundProof(blockChain.Tip, proposer));
            var proposal = new ProposalMetadata(
                1,
                0,
                DateTimeOffset.UtcNow,
                proposer.PublicKey,
                new Codec().Encode(block.MarshalBlock()),
                -1).Sign(proposer);
            consensusContext.HandleMessage(new ConsensusProposalMsg(proposal));
            await stepChanged.WaitAsync();

            // ProposalClaim expects corresponding proposal if exists
            var proposalClaim =
                new ProposalClaimMetadata(
                        1,
                        0,
                        block.Hash,
                        DateTimeOffset.UtcNow,
                        TestUtils.PrivateKeys[1].PublicKey)
                    .Sign(TestUtils.PrivateKeys[1]);
            Proposal? reply =
                consensusContext.HandleProposalClaim(proposalClaim);
            Assert.NotNull(reply);
            Assert.Equal(proposal, reply);
        }
    }
}
