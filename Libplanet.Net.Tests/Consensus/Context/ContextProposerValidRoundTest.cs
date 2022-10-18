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
            var voteSent = new AsyncAutoResetEvent();
            BlockHash? targetHash = null;

            var (_, blockChain, context) = TestUtils.CreateDummyContext(
                consensusMessageSent: CheckVote,
                startStep: Step.Propose,
                round: 2);

            Block<DumbAction> block = blockChain.ProposeBlock(TestUtils.Peer1Priv);
            targetHash = block.Hash;
            void CheckVote(object? observer, ConsensusMessage? message)
            {
                if (message is ConsensusVote vote && vote.BlockHash.Equals(targetHash))
                {
                    voteSent.Set();
                }
            }

            // Bypass StartAsync() to avoid StartRound(0).
            _ = context.MessageConsumerTask(default);
            _ = context.MutationConsumerTask(default);

            context.ProduceMessage(TestUtils.CreateConsensusPropose(
                block, TestUtils.Peer1Priv, round: 0, validRound: -1));

            context.ProduceMessage(TestUtils.CreateConsensusPropose(
                block, TestUtils.Peer2Priv, round: 1, validRound: 0));

            context.ProduceMessage(TestUtils.CreateConsensusPropose(
                block, TestUtils.Peer3Priv, round: 2, validRound: 1));

            context.ProduceMessage(
                new ConsensusVote(TestUtils.CreateVote(
                    TestUtils.Peer0Priv,
                    1,
                    round: 1,
                    hash: block.Hash,
                    flag: VoteFlag.PreVote))
                {
                    Remote = TestUtils.Peer0,
                });

            context.ProduceMessage(new
                ConsensusVote(TestUtils.CreateVote(
                    TestUtils.Peer2Priv,
                    1,
                    round: 1,
                    hash: block.Hash,
                    flag: VoteFlag.PreVote))
                {
                    Remote = TestUtils.Peer2,
                });

            context.ProduceMessage(
                new ConsensusVote(TestUtils.CreateVote(
                    TestUtils.Peer3Priv,
                    1,
                    round: 1,
                    hash: block.Hash,
                    flag: VoteFlag.PreVote))
                {
                    Remote = TestUtils.Peer3,
                });

            await voteSent.WaitAsync();
            Assert.Equal(Step.PreVote, context.Step);
            Assert.Equal(1, context.Height);
            Assert.Equal(2, context.Round);
        }

        [Fact(Timeout = Timeout)]
        public async void EnterValidRoundPreVoteNil()
        {
            var voteSent = new AsyncAutoResetEvent();
            var (fx, blockChain, context) = TestUtils.CreateDummyContext(
                consensusMessageSent: CheckVote,
                startStep: Step.Propose,
                round: 2);

            var invalidBlock = new BlockContent<DumbAction>(
                new BlockMetadata(
                    protocolVersion: BlockMetadata.CurrentProtocolVersion,
                    index: blockChain.Tip.Index + 1,
                    timestamp: blockChain.Tip.Timestamp.Subtract(TimeSpan.FromSeconds(1)),
                    miner: fx.Miner.PublicKey.ToAddress(),
                    publicKey: fx.Miner.PublicKey,
                    previousHash: blockChain.Tip.Hash,
                    txHash: null,
                    lastCommit: null))
                .Propose().Evaluate(fx.Miner, blockChain);

            void CheckVote(object? observer, ConsensusMessage? message)
            {
                if (message is ConsensusVote vote && vote.BlockHash is null)
                {
                    voteSent.Set();
                }
            }

            // Bypass StartAsync() to avoid StartRound(0).
            _ = context.MessageConsumerTask(default);
            _ = context.MutationConsumerTask(default);

            context.ProduceMessage(TestUtils.CreateConsensusPropose(
                invalidBlock, TestUtils.Peer1Priv, round: 0, validRound: -1));

            context.ProduceMessage(TestUtils.CreateConsensusPropose(
                invalidBlock, TestUtils.Peer2Priv, round: 1, validRound: 0));

            context.ProduceMessage(TestUtils.CreateConsensusPropose(
                invalidBlock, TestUtils.Peer3Priv, round: 2, validRound: 1));

            context.ProduceMessage(
                new ConsensusVote(TestUtils.CreateVote(
                    TestUtils.Peer0Priv,
                    1,
                    round: 1,
                    hash: invalidBlock.Hash,
                    flag: VoteFlag.PreVote))
                {
                    Remote = TestUtils.Peer0,
                });

            context.ProduceMessage(new
                ConsensusVote(TestUtils.CreateVote(
                    TestUtils.Peer2Priv,
                    1,
                    round: 1,
                    hash: invalidBlock.Hash,
                    flag: VoteFlag.PreVote))
                {
                    Remote = TestUtils.Peer2,
                });

            context.ProduceMessage(
                new ConsensusVote(TestUtils.CreateVote(
                    TestUtils.Peer3Priv,
                    1,
                    round: 1,
                    hash: invalidBlock.Hash,
                    flag: VoteFlag.PreVote))
                {
                    Remote = TestUtils.Peer3,
                });

            await voteSent.WaitAsync();
            Assert.Equal(Step.PreVote, context.Step);
            Assert.Equal(1, context.Height);
            Assert.Equal(2, context.Round);
        }
    }
}
