using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.Net.Consensus;
using Libplanet.Net.Messages;
using Libplanet.Tests;
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
                TestUtils.PrivateKeys[3]);

            AsyncAutoResetEvent heightThreeStepChangedToPropose = new AsyncAutoResetEvent();
            AsyncAutoResetEvent heightThreeStepChangedToEndCommit = new AsyncAutoResetEvent();
            AsyncAutoResetEvent heightFourStepChangedToPropose = new AsyncAutoResetEvent();
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
            consensusContext.MessageBroadcasted += (_, eventArgs) =>
            {
                if (eventArgs.Message is ConsensusProposalMsg proposalMsg)
                {
                    proposal = proposalMsg;
                    proposalMessageSent.Set();
                }
            };

            var block = blockChain.ProposeBlock(TestUtils.PrivateKeys[1]);
            var blockCommit = TestUtils.CreateBlockCommit(block);
            blockChain.Append(block, blockCommit);
            block = blockChain.ProposeBlock(TestUtils.PrivateKeys[2], blockCommit);
            blockChain.Append(block, TestUtils.CreateBlockCommit(block));
            Assert.Equal(2, blockChain.Tip.Index);

            // Wait for context of height 3 to start.
            await heightThreeStepChangedToPropose.WaitAsync();
            Assert.Equal(3, consensusContext.Height);

            // Cannot call NewHeight() with invalid heights.
            Assert.Throws<InvalidHeightIncreasingException>(() => consensusContext.NewHeight(2));
            Assert.Throws<InvalidHeightIncreasingException>(() => consensusContext.NewHeight(3));

            await proposalMessageSent.WaitAsync();
            Assert.NotNull(proposal?.BlockHash);

            consensusContext.HandleMessage(new ConsensusPreCommitMsg(TestUtils.CreateVote(
                TestUtils.PrivateKeys[0], 3, hash: proposal?.BlockHash, flag: VoteFlag.PreCommit)));
            consensusContext.HandleMessage(new ConsensusPreCommitMsg(TestUtils.CreateVote(
                TestUtils.PrivateKeys[1], 3, hash: proposal?.BlockHash, flag: VoteFlag.PreCommit)));
            consensusContext.HandleMessage(new ConsensusPreCommitMsg(TestUtils.CreateVote(
                TestUtils.PrivateKeys[2], 3, hash: proposal?.BlockHash, flag: VoteFlag.PreCommit)));

            // Waiting for commit.
            await heightThreeStepChangedToEndCommit.WaitAsync();
            Assert.Equal(3, blockChain.Tip.Index);

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
                TestUtils.PrivateKeys[1]);

            Assert.Equal(ConsensusStep.Null, consensusContext.Step);
            Assert.Equal("No context", consensusContext.ToString());
        }

        [Fact(Timeout = Timeout)]
        public async void NewHeightWhenTipChanged()
        {
            var newHeightDelay = TimeSpan.FromSeconds(1);
            var (blockChain, consensusContext) = TestUtils.CreateDummyConsensusContext(
                newHeightDelay,
                TestUtils.Policy,
                TestUtils.PrivateKeys[1]);

            Assert.Equal(-1, consensusContext.Height);
            Block block = blockChain.ProposeBlock(new PrivateKey());
            blockChain.Append(block, TestUtils.CreateBlockCommit(block));
            Assert.Equal(-1, consensusContext.Height);
            await Task.Delay(newHeightDelay + TimeSpan.FromSeconds(1));
            Assert.Equal(2, consensusContext.Height);
        }

        [Fact(Timeout = Timeout)]
        public void IgnoreMessagesFromLowerHeight()
        {
            var (blockChain, consensusContext) = TestUtils.CreateDummyConsensusContext(
                TimeSpan.FromSeconds(1),
                TestUtils.Policy,
                TestUtils.PrivateKeys[1]);

            consensusContext.NewHeight(blockChain.Tip.Index + 1);
            Assert.True(consensusContext.Height == 1);
            Assert.False(consensusContext.HandleMessage(
                TestUtils.CreateConsensusPropose(
                    blockChain.ProposeBlock(TestUtils.PrivateKeys[0]),
                    TestUtils.PrivateKeys[0],
                    0)));
        }

        [Fact(Timeout = Timeout)]
        public void RemoveOldContexts()
        {
            var (blockChain, consensusContext) = TestUtils.CreateDummyConsensusContext(
                TimeSpan.FromSeconds(1),
                TestUtils.Policy,
                TestUtils.PrivateKeys[1],
                blockCommitClearThreshold: 1);

            // Create context of index 1.
            consensusContext.NewHeight(1);
            // Create context of index 2.
            consensusContext.HandleMessage(
                TestUtils.CreateConsensusPropose(
                    blockChain.ProposeBlock(TestUtils.PrivateKeys[2]),
                    TestUtils.PrivateKeys[2],
                    2,
                    1));

            var block = blockChain.ProposeBlock(new PrivateKey());
            blockChain.Append(block, TestUtils.CreateBlockCommit(block));
            block = blockChain.ProposeBlock(
                new PrivateKey(), TestUtils.CreateBlockCommit(blockChain.Tip));
            blockChain.Append(block, TestUtils.CreateBlockCommit(block));
            block = blockChain.ProposeBlock(
                new PrivateKey(), TestUtils.CreateBlockCommit(blockChain.Tip));
            blockChain.Append(block, TestUtils.CreateBlockCommit(block));

            // Create context of index 4, check if the context of 1 and 2 are removed correctly.
            consensusContext.NewHeight(4);
            Assert.Throws<KeyNotFoundException>(() => consensusContext.Contexts[1]);
            Assert.Throws<KeyNotFoundException>(() => consensusContext.Contexts[2]);
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
                TestUtils.PrivateKeys[1]);

            consensusContext.StateChanged += (sender, tuple) =>
            {
                if (tuple.Height == 1 && tuple.Step == ConsensusStep.EndCommit)
                {
                    heightOneEndCommit.Set();
                }
            };
            consensusContext.MessageBroadcasted += (_, eventArgs) =>
            {
                if (eventArgs.Height == 1 && eventArgs.Message is ConsensusProposalMsg proposalMsg)
                {
                    proposal = proposalMsg;
                    heightOneProposalSent.Set();
                }
            };

            consensusContext.NewHeight(blockChain.Tip.Index + 1);

            await heightOneProposalSent.WaitAsync();
            Assert.NotNull(proposal?.BlockHash);

            votes.Add(TestUtils.CreateVote(
                TestUtils.PrivateKeys[0],
                1,
                0,
                new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size)),
                VoteFlag.PreCommit));
            votes.AddRange(Enumerable.Range(1, 3).Select(x => TestUtils.CreateVote(
                TestUtils.PrivateKeys[x],
                1,
                0,
                proposal?.BlockHash,
                VoteFlag.PreCommit)));

            foreach (var vote in votes)
            {
                consensusContext.HandleMessage(new ConsensusPreCommitMsg(vote));
            }

            await heightOneEndCommit.WaitAsync();

            var blockCommit = consensusContext.Contexts[1].GetBlockCommit();
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
    }
}
