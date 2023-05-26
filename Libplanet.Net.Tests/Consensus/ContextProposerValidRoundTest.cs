using System;
using System.Threading.Tasks;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.Net.Consensus;
using Libplanet.Net.Messages;
using Nito.AsyncEx;
using Serilog;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Net.Tests.Consensus
{
    public class ContextProposerValidRoundTest
    {
        private const int Timeout = 30000;
        private static Bencodex.Codec _codec = new Bencodex.Codec();
        private readonly ILogger _logger;

        public ContextProposerValidRoundTest(ITestOutputHelper output)
        {
            const string outputTemplate =
                "{Timestamp:HH:mm:ss:ffffffZ} - {Message} {Exception}";
            Log.Logger = new LoggerConfiguration()
                .MinimumLevel.Verbose()
                .WriteTo.TestOutput(output, outputTemplate: outputTemplate)
                .CreateLogger()
                .ForContext<ContextProposerValidRoundTest>();

            _logger = Log.ForContext<ContextProposerValidRoundTest>();
        }

        [Fact(Timeout = Timeout)]
        public async Task EnterValidRoundPreVoteBlock()
        {
            ConsensusProposalMsg? proposal = null;
            var proposalSent = new AsyncAutoResetEvent();
            var roundTwoVoteSent = new AsyncAutoResetEvent();
            var stateChangedToRoundTwoPropose = new AsyncAutoResetEvent();
            bool timeoutProcessed = false;

            var (_, context) = TestUtils.CreateDummyContext();
            context.StateChanged += (_, eventArgs) =>
            {
                if (eventArgs.Round == 2 && eventArgs.Step == ConsensusStep.Propose)
                {
                    stateChangedToRoundTwoPropose.Set();
                }
            };
            context.TimeoutProcessed += (_, __) => timeoutProcessed = true;
            context.MessageBroadcasted += (_, message) =>
            {
                if (message is ConsensusProposalMsg proposalMsg)
                {
                    proposal = proposalMsg;
                    proposalSent.Set();
                }
                else if (message is ConsensusPreVoteMsg prevote &&
                    prevote.BlockHash is { } hash &&
                    hash.Equals(proposal?.BlockHash) &&
                    prevote.Round == 2)
                {
                    roundTwoVoteSent.Set();
                }
            };

            context.Start();
            await proposalSent.WaitAsync();
            Assert.NotNull(proposal);
            Block proposedBlock = BlockMarshaler.UnmarshalBlock(
                (Bencodex.Types.Dictionary)_codec.Decode(proposal!.Proposal.MarshaledBlock));

            // Force round change.
            context.ProduceMessage(TestUtils.CreateConsensusPropose(
                proposedBlock, TestUtils.PrivateKeys[3], round: 2, validRound: 1));
            context.ProduceMessage(
                new ConsensusPreVoteMsg(TestUtils.CreateVote(
                    TestUtils.PrivateKeys[0],
                    height: 1,
                    round: 2,
                    hash: proposedBlock.Hash,
                    flag: VoteFlag.PreVote)));
            await stateChangedToRoundTwoPropose.WaitAsync();
            Assert.Equal(2, context.Round);

            context.ProduceMessage(
                new ConsensusPreVoteMsg(TestUtils.CreateVote(
                    TestUtils.PrivateKeys[0],
                    1,
                    round: 1,
                    hash: proposedBlock.Hash,
                    flag: VoteFlag.PreVote)));
            context.ProduceMessage(new
                ConsensusPreVoteMsg(TestUtils.CreateVote(
                    TestUtils.PrivateKeys[2],
                    1,
                    round: 1,
                    hash: proposedBlock.Hash,
                    flag: VoteFlag.PreVote)));
            context.ProduceMessage(
                new ConsensusPreVoteMsg(TestUtils.CreateVote(
                    TestUtils.PrivateKeys[3],
                    1,
                    round: 1,
                    hash: proposedBlock.Hash,
                    flag: VoteFlag.PreVote)));

            await roundTwoVoteSent.WaitAsync();
            Assert.False(timeoutProcessed); // Assert no transition is due to timeout.
            Assert.Equal(ConsensusStep.PreVote, context.Step);
        }

        [Fact(Timeout = Timeout)]
        public async void EnterValidRoundPreVoteNil()
        {
            ConsensusProposalMsg? proposal = null;
            var proposalSent = new AsyncAutoResetEvent();
            var stateChangedToRoundTwoPropose = new AsyncAutoResetEvent();
            var stateChangedToRoundTwoPreVote = new AsyncAutoResetEvent();
            var stateChangedToRoundTwoPreCommit = new AsyncAutoResetEvent();
            var stateChangedToRoundThreePropose = new AsyncAutoResetEvent();
            var roundThreeNilPreVoteSent = new AsyncAutoResetEvent();
            bool timeoutProcessed = false;
            var (blockChain, context) = TestUtils.CreateDummyContext();
            context.StateChanged += (_, eventArgs) =>
            {
                if (eventArgs.Round == 2 && eventArgs.Step == ConsensusStep.Propose)
                {
                    stateChangedToRoundTwoPropose.Set();
                }
                else if (eventArgs.Round == 2 && eventArgs.Step == ConsensusStep.PreVote)
                {
                    stateChangedToRoundTwoPreVote.Set();
                }
                else if (eventArgs.Round == 2 && eventArgs.Step == ConsensusStep.PreCommit)
                {
                    stateChangedToRoundTwoPreCommit.Set();
                }
                else if (eventArgs.Round == 3 && eventArgs.Step == ConsensusStep.Propose)
                {
                    stateChangedToRoundThreePropose.Set();
                }
            };
            context.TimeoutProcessed += (_, __) => timeoutProcessed = true;
            context.MessageBroadcasted += (_, message) =>
            {
                if (message is ConsensusProposalMsg proposalMsg)
                {
                    proposal = proposalMsg;
                    proposalSent.Set();
                }
                else if (message is ConsensusPreVoteMsg prevote &&
                    prevote.Round == 3 &&
                    prevote.BlockHash is null)
                {
                    roundThreeNilPreVoteSent.Set();
                }
            };

            var key = new PrivateKey();
            var differentBlock = blockChain.EvaluateAndSign(
                new BlockContent(
                    new BlockMetadata(
                        protocolVersion: BlockMetadata.CurrentProtocolVersion,
                        index: blockChain.Tip.Index + 1,
                        timestamp: blockChain.Tip.Timestamp.Add(TimeSpan.FromSeconds(1)),
                        miner: key.PublicKey.ToAddress(),
                        publicKey: key.PublicKey,
                        previousHash: blockChain.Tip.Hash,
                        txHash: null,
                        lastCommit: null)).Propose(),
                key);

            context.Start();
            await proposalSent.WaitAsync();
            Assert.NotNull(proposal);
            Block proposedBlock = BlockMarshaler.UnmarshalBlock(
                (Bencodex.Types.Dictionary)_codec.Decode(proposal!.Proposal.MarshaledBlock));

            // Force round change to 2.
            context.ProduceMessage(TestUtils.CreateConsensusPropose(
                proposedBlock!, TestUtils.PrivateKeys[3], round: 2, validRound: -1));
            context.ProduceMessage(
                new ConsensusPreVoteMsg(TestUtils.CreateVote(
                    TestUtils.PrivateKeys[0],
                    height: 1,
                    round: 2,
                    hash: proposedBlock!.Hash,
                    flag: VoteFlag.PreVote)));
            await stateChangedToRoundTwoPropose.WaitAsync();
            Assert.Equal(2, context.Round);
            Assert.False(timeoutProcessed); // Assert no transition is due to timeout.

            // Updated locked round and valid round to 2.
            context.ProduceMessage(
                new ConsensusPreVoteMsg(TestUtils.CreateVote(
                    TestUtils.PrivateKeys[2],
                    height: 1,
                    round: 2,
                    hash: proposedBlock!.Hash,
                    flag: VoteFlag.PreVote)));
            context.ProduceMessage(
                new ConsensusPreVoteMsg(TestUtils.CreateVote(
                    TestUtils.PrivateKeys[3],
                    height: 1,
                    round: 2,
                    hash: proposedBlock!.Hash,
                    flag: VoteFlag.PreVote)));
            await stateChangedToRoundTwoPreCommit.WaitAsync();

            // Force round change to 3.
            context.ProduceMessage(TestUtils.CreateConsensusPropose(
                differentBlock, TestUtils.PrivateKeys[0], round: 3, validRound: 0));
            context.ProduceMessage(
                new ConsensusPreVoteMsg(TestUtils.CreateVote(
                    TestUtils.PrivateKeys[3],
                    height: 1,
                    round: 3,
                    hash: differentBlock.Hash,
                    flag: VoteFlag.PreVote)));
            await stateChangedToRoundThreePropose.WaitAsync();
            Assert.Equal(3, context.Round);

            context.ProduceMessage(
                new ConsensusPreVoteMsg(TestUtils.CreateVote(
                    TestUtils.PrivateKeys[0],
                    height: 1,
                    round: 0,
                    hash: differentBlock.Hash,
                    flag: VoteFlag.PreVote)));
            context.ProduceMessage(
                new ConsensusPreVoteMsg(TestUtils.CreateVote(
                    TestUtils.PrivateKeys[2],
                    height: 1,
                    round: 0,
                    hash: differentBlock.Hash,
                    flag: VoteFlag.PreVote)));
            context.ProduceMessage(
                new ConsensusPreVoteMsg(TestUtils.CreateVote(
                    TestUtils.PrivateKeys[3],
                    height: 1,
                    round: 0,
                    hash: differentBlock.Hash,
                    flag: VoteFlag.PreVote)));

            await roundThreeNilPreVoteSent.WaitAsync();
            Assert.False(timeoutProcessed);
        }
    }
}
