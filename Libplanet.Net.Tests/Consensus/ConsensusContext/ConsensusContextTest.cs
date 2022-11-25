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
using Libplanet.Tests.Common.Action;
using Nito.AsyncEx;
using Serilog;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Net.Tests.Consensus.ConsensusContext
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
                TestUtils.PrivateKeys[1]);

            AsyncAutoResetEvent stepChangedToEndCommit = new AsyncAutoResetEvent();
            consensusContext.StateChanged += (_, eventArgs) =>
            {
                if (eventArgs.Height == 1 && eventArgs.Step == Step.EndCommit)
                {
                    stepChangedToEndCommit.Set();
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

            // The given height is equal to the consensus context's height.
            Assert.Throws<InvalidHeightIncreasingException>(
                () => consensusContext.NewHeight(blockChain.Tip.Index));
            // The given height is not the same tip's index + 1.
            Assert.Throws<InvalidHeightIncreasingException>(
                () => consensusContext.NewHeight(blockChain.Tip.Index + 2));

            consensusContext.NewHeight(blockChain.Tip.Index + 1);
            await proposalMessageSent.WaitAsync();
            Assert.NotNull(proposal?.BlockHash);

            consensusContext.HandleMessage(new ConsensusPreCommitMsg(TestUtils.CreateVote(
                TestUtils.PrivateKeys[0], 1, hash: proposal?.BlockHash, flag: VoteFlag.PreCommit)));
            consensusContext.HandleMessage(new ConsensusPreCommitMsg(TestUtils.CreateVote(
                TestUtils.PrivateKeys[2], 1, hash: proposal?.BlockHash, flag: VoteFlag.PreCommit)));
            consensusContext.HandleMessage(new ConsensusPreCommitMsg(TestUtils.CreateVote(
                TestUtils.PrivateKeys[3], 1, hash: proposal?.BlockHash, flag: VoteFlag.PreCommit)));

            // Waiting for commit.
            await stepChangedToEndCommit.WaitAsync();
            Assert.Equal(1, blockChain.Tip.Index);

            // Next NewHeight is not called yet.
            Assert.Equal(1, consensusContext.Height);
            Assert.Equal(0, consensusContext.Round);
        }

        [Fact(Timeout = Timeout)]
        public void Ctor()
        {
            var (_, consensusContext) = TestUtils.CreateDummyConsensusContext(
                TimeSpan.FromSeconds(1),
                TestUtils.Policy,
                TestUtils.PrivateKeys[1]);

            Assert.Equal(Step.Null, consensusContext.Step);
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
            Block<DumbAction> block = blockChain.ProposeBlock(new PrivateKey());
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
            Assert.Throws<InvalidConsensusMessageException>(
                () => consensusContext.HandleMessage(
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
                new PrivateKey(), lastCommit: TestUtils.CreateBlockCommit(blockChain.Tip));
            blockChain.Append(block, TestUtils.CreateBlockCommit(block));
            block = blockChain.ProposeBlock(
                new PrivateKey(), lastCommit: TestUtils.CreateBlockCommit(blockChain.Tip));
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
                if (tuple.Height == 1 && tuple.Step == Step.EndCommit)
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
                x.Validator.Equals(TestUtils.PrivateKeys[0].PublicKey)));

            var actualVotesWithoutInvalid =
                HashSetExtensions.ToHashSet(blockCommit.Votes.Where(x =>
                    !x.Validator.Equals(TestUtils.PrivateKeys[0].PublicKey)));

            var expectedVotes = HashSetExtensions.ToHashSet(votes.Where(x =>
                !x.Validator.Equals(TestUtils.PrivateKeys[0].PublicKey)));

            Assert.Equal(expectedVotes, actualVotesWithoutInvalid);
        }

        [Fact(Timeout = Timeout)]
        public void Commit()
        {
            var stepChangedToPreVote = new AsyncAutoResetEvent();
            var stepChangedToPreCommit = new AsyncAutoResetEvent();
            var stepChangedToEndCommit = new AsyncAutoResetEvent();

            var (blockChain, consensusContext) = TestUtils.CreateDummyConsensusContext(
                TimeSpan.FromSeconds(1),
                TestUtils.Policy,
                TestUtils.PrivateKeys[1]);

            consensusContext.StateChanged += (sender, eventArgs) =>
            {
                if (eventArgs.Height == 2 && eventArgs.Step == Step.PreVote)
                {
                    stepChangedToPreVote.Set();
                }

                if (eventArgs.Height == 2 && eventArgs.Step == Step.PreCommit)
                {
                    stepChangedToPreCommit.Set();
                }

                if (eventArgs.Height == 2 && eventArgs.Step == Step.EndCommit)
                {
                    stepChangedToEndCommit.Set();
                }
            };

            // Height 1 does not have lastCommit, so skipping height 1.
            var block1 = blockChain.ProposeBlock(TestUtils.PrivateKeys[1], lastCommit: null);
            blockChain.Append(block1, TestUtils.CreateBlockCommit(block1));

            var block2 = blockChain.ProposeBlock(
                TestUtils.PrivateKeys[2],
                lastCommit: TestUtils.CreateBlockCommit(blockChain.Tip));
            consensusContext.Commit(block2, TestUtils.CreateBlockCommit(block2));
            Assert.Equal(blockChain.Tip, block2);
            Assert.NotNull(blockChain.Store.GetBlockCommit(block2.Hash));
        }
    }
}
