using System;
using Bencodex;
using Bencodex.Types;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Net.Consensus;
using Libplanet.Net.Messages;
using Nito.AsyncEx;
using Serilog;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Net.Tests.Consensus
{
    public class DuplicateVoteEvidenceTest
    {
        private const int Timeout = 30000;
        private static readonly Codec _codec = new Codec();
        private readonly ILogger _logger;

        public DuplicateVoteEvidenceTest(ITestOutputHelper output)
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
        public async void CanProposeWithDuplicateVoteEvidence()
        {
            ConsensusProposalMsg? proposal = null;
            var proposalMessageHeightThreeSent = new AsyncAutoResetEvent();
            var proposalMessageHeightSevenSent = new AsyncAutoResetEvent();
            var (blockChain, consensusContext) = TestUtils.CreateDummyConsensusContext(
                TimeSpan.FromSeconds(1),
                TestUtils.Policy,
                TestUtils.PrivateKeys[3]);

            AsyncAutoResetEvent heightThreeStepChangedToPropose = new AsyncAutoResetEvent();
            AsyncAutoResetEvent heightThreeStepChangedToEndCommit = new AsyncAutoResetEvent();
            AsyncAutoResetEvent heightFourStepChangedToPropose = new AsyncAutoResetEvent();
            consensusContext.StateChanged += (_, eventArgs) =>
            {
                if (eventArgs.Height == 3 && eventArgs.Step == Step.Propose)
                {
                    heightThreeStepChangedToPropose.Set();
                }
                else if (eventArgs.Height == 3 && eventArgs.Step == Step.EndCommit)
                {
                    heightThreeStepChangedToEndCommit.Set();
                }
                else if (eventArgs.Height == 4 && eventArgs.Step == Step.Propose)
                {
                    heightFourStepChangedToPropose.Set();
                }
            };
            consensusContext.MessageBroadcasted += (_, eventArgs) =>
            {
                if (eventArgs.Message is ConsensusProposalMsg proposalMsg)
                {
                    proposal = proposalMsg;

                    if (proposal.Height == 3L)
                    {
                        proposalMessageHeightThreeSent.Set();
                    }
                    else if (proposal.Height == 7L)
                    {
                        proposalMessageHeightSevenSent.Set();
                    }
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

            await proposalMessageHeightThreeSent.WaitAsync();
            Assert.NotNull(proposal?.BlockHash);

            consensusContext.HandleMessage(new ConsensusPreCommitMsg(TestUtils.CreateVote(
                TestUtils.PrivateKeys[0], 3, hash: proposal?.BlockHash, flag: VoteFlag.PreCommit)));
            consensusContext.HandleMessage(
                new ConsensusPreCommitMsg(TestUtils.CreateVote(
                    TestUtils.PrivateKeys[0],
                    3,
                    hash: new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size)),
                    flag: VoteFlag.PreCommit)));
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

            blockCommit = blockChain.GetBlockCommit(blockChain.Tip.Hash);
            block = blockChain.ProposeBlock(TestUtils.PrivateKeys[0], blockCommit);
            blockCommit = TestUtils.CreateBlockCommit(block);
            blockChain.Append(block, blockCommit);
            block = blockChain.ProposeBlock(TestUtils.PrivateKeys[1], blockCommit);
            blockCommit = TestUtils.CreateBlockCommit(block);
            blockChain.Append(block, blockCommit);
            block = blockChain.ProposeBlock(TestUtils.PrivateKeys[2], blockCommit);
            blockCommit = TestUtils.CreateBlockCommit(block);
            blockChain.Append(block, blockCommit);

            await proposalMessageHeightSevenSent.WaitAsync();
            Assert.NotNull(proposal?.BlockHash);
            var heightFourBlock = BlockMarshaler.UnmarshalBlock(
                (Dictionary)_codec.Decode(proposal.Proposal.MarshaledBlock));
            Assert.NotNull(heightFourBlock.Evidences);
            Assert.Single(heightFourBlock.Evidences);
        }
    }
}
