using System;
using System.Threading.Tasks;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Net.Consensus;
using Libplanet.Net.Messages;
using Libplanet.Tests.Common.Action;
using Nito.AsyncEx;
using Serilog;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Net.Tests.Consensus.Context
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
            Block<DumbAction>? proposedBlock = null;
            var proposeSent = new AsyncAutoResetEvent();
            var roundTwoVoteSent = new AsyncAutoResetEvent();
            var stateChangedToRoundTwoPropose = new AsyncAutoResetEvent();
            bool timeoutProcessed = false;

            var (_, _, context) = TestUtils.CreateDummyContext(
                consensusMessageSent: CatchMessage);
            context.StateChanged += (sender, eventArgs) =>
            {
                if (eventArgs.Round == 2 && eventArgs.Step == Step.Propose)
                {
                    stateChangedToRoundTwoPropose.Set();
                }
            };
            context.TimeoutProcessed += (sender, _) => timeoutProcessed = true;

            void CatchMessage(object? sender, ConsensusMsg message)
            {
                if (message is ConsensusProposalMsg propose)
                {
                    proposedBlock = BlockMarshaler.UnmarshalBlock<DumbAction>(
                        (Bencodex.Types.Dictionary)_codec.Decode(propose.Proposal.MarshaledBlock));
                    proposeSent.Set();
                }
                else if (message is ConsensusPreVoteMsg prevote &&
                    prevote.BlockHash is { } hash &&
                    hash.Equals(proposedBlock?.Hash) &&
                    prevote.Round == 2)
                {
                    roundTwoVoteSent.Set();
                }
            }

            context.Start();
            await proposeSent.WaitAsync();
            Assert.NotNull(proposedBlock);

            // Force round change.
            context.ProduceMessage(TestUtils.CreateConsensusPropose(
                proposedBlock!, TestUtils.Peer3Priv, round: 2, validRound: 1));
            context.ProduceMessage(
                new ConsensusPreVoteMsg(TestUtils.CreateVote(
                    TestUtils.Peer0Priv,
                    height: 1,
                    round: 2,
                    hash: proposedBlock!.Hash,
                    flag: VoteFlag.PreVote)));
            await stateChangedToRoundTwoPropose.WaitAsync();
            Assert.Equal(2, context.Round);

            context.ProduceMessage(
                new ConsensusPreVoteMsg(TestUtils.CreateVote(
                    TestUtils.Peer0Priv,
                    1,
                    round: 1,
                    hash: proposedBlock!.Hash,
                    flag: VoteFlag.PreVote)));
            context.ProduceMessage(new
                ConsensusPreVoteMsg(TestUtils.CreateVote(
                    TestUtils.Peer2Priv,
                    1,
                    round: 1,
                    hash: proposedBlock!.Hash,
                    flag: VoteFlag.PreVote)));
            context.ProduceMessage(
                new ConsensusPreVoteMsg(TestUtils.CreateVote(
                    TestUtils.Peer3Priv,
                    1,
                    round: 1,
                    hash: proposedBlock!.Hash,
                    flag: VoteFlag.PreVote)));

            await roundTwoVoteSent.WaitAsync();
            Assert.False(timeoutProcessed); // Assert no transition is due to timeout.
            Assert.Equal(Step.PreVote, context.Step);
        }

        [Fact(Timeout = Timeout)]
        public async void EnterValidRoundPreVoteNil()
        {
            var proposeSent = new AsyncAutoResetEvent();
            Block<DumbAction>? proposedBlock = null;
            var stateChangedToRoundTwoPropose = new AsyncAutoResetEvent();
            var stateChangedToRoundTwoPreVote = new AsyncAutoResetEvent();
            var stateChangedToRoundTwoPreCommit = new AsyncAutoResetEvent();
            var stateChangedToRoundThreePropose = new AsyncAutoResetEvent();
            var roundThreeNilPreVoteSent = new AsyncAutoResetEvent();
            bool timeoutProcessed = false;
            var (fx, blockChain, context) = TestUtils.CreateDummyContext(
                consensusMessageSent: CatchMessage);
            context.StateChanged += (sender, eventArgs) =>
            {
                if (eventArgs.Round == 2 && eventArgs.Step == Step.Propose)
                {
                    stateChangedToRoundTwoPropose.Set();
                }
                else if (eventArgs.Round == 2 && eventArgs.Step == Step.PreVote)
                {
                    stateChangedToRoundTwoPreVote.Set();
                }
                else if (eventArgs.Round == 2 && eventArgs.Step == Step.PreCommit)
                {
                    stateChangedToRoundTwoPreCommit.Set();
                }
                else if (eventArgs.Round == 3 && eventArgs.Step == Step.Propose)
                {
                    stateChangedToRoundThreePropose.Set();
                }
            };
            context.TimeoutProcessed += (sender, _) => timeoutProcessed = true;
            void CatchMessage(object? sender, ConsensusMsg message)
            {
                if (message is ConsensusProposalMsg propose)
                {
                    proposedBlock = BlockMarshaler.UnmarshalBlock<DumbAction>(
                        (Bencodex.Types.Dictionary)_codec.Decode(propose.Proposal.MarshaledBlock));
                    proposeSent.Set();
                }
                else if (message is ConsensusPreVoteMsg prevote &&
                    prevote.Round == 3 &&
                    prevote.BlockHash is null)
                {
                    roundThreeNilPreVoteSent.Set();
                }
            }

            var differentBlock = new BlockContent<DumbAction>(
                new BlockMetadata(
                    protocolVersion: BlockMetadata.CurrentProtocolVersion,
                    index: blockChain.Tip.Index + 1,
                    timestamp: blockChain.Tip.Timestamp.Add(TimeSpan.FromSeconds(1)),
                    miner: fx.Miner.PublicKey.ToAddress(),
                    publicKey: fx.Miner.PublicKey,
                    previousHash: blockChain.Tip.Hash,
                    txHash: null,
                    lastCommit: null))
                .Propose().Evaluate(fx.Miner, blockChain);

            context.Start();
            await proposeSent.WaitAsync();
            Assert.NotNull(proposedBlock);

            // Force round change to 2.
            context.ProduceMessage(TestUtils.CreateConsensusPropose(
                proposedBlock!, TestUtils.Peer3Priv, round: 2, validRound: -1));
            context.ProduceMessage(
                new ConsensusPreVoteMsg(TestUtils.CreateVote(
                    TestUtils.Peer0Priv,
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
                    TestUtils.Peer2Priv,
                    height: 1,
                    round: 2,
                    hash: proposedBlock!.Hash,
                    flag: VoteFlag.PreVote)));
            context.ProduceMessage(
                new ConsensusPreVoteMsg(TestUtils.CreateVote(
                    TestUtils.Peer3Priv,
                    height: 1,
                    round: 2,
                    hash: proposedBlock!.Hash,
                    flag: VoteFlag.PreVote)));
            await stateChangedToRoundTwoPreCommit.WaitAsync();

            // Force round change to 3.
            context.ProduceMessage(TestUtils.CreateConsensusPropose(
                differentBlock, TestUtils.Peer0Priv, round: 3, validRound: 0));
            context.ProduceMessage(
                new ConsensusPreVoteMsg(TestUtils.CreateVote(
                    TestUtils.Peer3Priv,
                    height: 1,
                    round: 3,
                    hash: differentBlock.Hash,
                    flag: VoteFlag.PreVote)));
            await stateChangedToRoundThreePropose.WaitAsync();
            Assert.Equal(3, context.Round);

            context.ProduceMessage(
                new ConsensusPreVoteMsg(TestUtils.CreateVote(
                    TestUtils.Peer0Priv,
                    height: 1,
                    round: 0,
                    hash: differentBlock.Hash,
                    flag: VoteFlag.PreVote)));
            context.ProduceMessage(
                new ConsensusPreVoteMsg(TestUtils.CreateVote(
                    TestUtils.Peer2Priv,
                    height: 1,
                    round: 0,
                    hash: differentBlock.Hash,
                    flag: VoteFlag.PreVote)));
            context.ProduceMessage(
                new ConsensusPreVoteMsg(TestUtils.CreateVote(
                    TestUtils.Peer3Priv,
                    height: 1,
                    round: 0,
                    hash: differentBlock.Hash,
                    flag: VoteFlag.PreVote)));

            await roundThreeNilPreVoteSent.WaitAsync();
            Assert.False(timeoutProcessed);
        }
    }
}
