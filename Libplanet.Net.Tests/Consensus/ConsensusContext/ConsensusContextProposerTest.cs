using Libplanet.Consensus;
using Libplanet.Net.Messages;
using Nito.AsyncEx;
using Serilog;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Net.Tests.Consensus.ConsensusContext
{
    [Collection("NetMQConfiguration")]
    public class ConsensusContextProposerTest : ConsensusContextTestBase
    {
        private const int Timeout = 60_000;

        private readonly ILogger _logger;

        public ConsensusContextProposerTest(ITestOutputHelper output)
            : base(output)
        {
            const string outputTemplate =
                "{Timestamp:HH:mm:ss:ffffffZ} - {Message}";
            Log.Logger = new LoggerConfiguration()
                .MinimumLevel.Verbose()
                .WriteTo.TestOutput(output, outputTemplate: outputTemplate)
                .CreateLogger()
                .ForContext<ConsensusContextProposerTest>();

            _logger = Log.ForContext<ConsensusContextProposerTest>();
        }

        [Fact(Timeout = Timeout)]
        public async void IncreaseRoundWhenTimeout()
        {
            var messageProcessed = new AsyncAutoResetEvent();
            var timeoutOccurred = new AsyncAutoResetEvent();

            ConsensusContext.NewHeight(BlockChain.Tip.Index + 1);

            ConsensusContext.Contexts[BlockChain.Tip.Index + 1].MessageProcessed +=
                (sender, message) =>
                {
                    messageProcessed.Set();
                };
            ConsensusContext.Contexts[BlockChain.Tip.Index + 1].TimeoutOccurred +=
                (sender, message) =>
                {
                    timeoutOccurred.Set();
                };

            // Wait for block to be proposed.
            await messageProcessed.WaitAsync();
            Assert.Equal(1, ConsensusContext.Height);
            Assert.Equal(0, ConsensusContext.Round);

            // Triggers timeout +2/3 with NIL and Block
            ConsensusContext.HandleMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.Peer2Priv,
                        1,
                        hash: null,
                        flag: VoteFlag.Absent))
                {
                    Remote = TestUtils.Peer2,
                });

            ConsensusContext.HandleMessage(
                new ConsensusVote(
                    vote: TestUtils.CreateVote(
                        TestUtils.Peer3Priv,
                        1,
                        hash: null,
                        flag: VoteFlag.Absent))
                {
                    Remote = TestUtils.Peer3,
                });

            await timeoutOccurred.WaitAsync();

            ConsensusContext.HandleMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(
                        TestUtils.Peer2Priv,
                        1,
                        hash: null,
                        flag: VoteFlag.Commit))
                {
                    Remote = TestUtils.Peer2,
                });

            ConsensusContext.HandleMessage(
                new ConsensusCommit(
                    vote: TestUtils.CreateVote(
                        TestUtils.Peer3Priv,
                        1,
                        hash: null,
                        flag: VoteFlag.Commit))
                {
                    Remote = TestUtils.Peer3,
                });

            await timeoutOccurred.WaitAsync();

            Assert.Equal(1, ConsensusContext.Height);
            await Libplanet.Tests.TestUtils.AssertThatEventually(
                () => ConsensusContext.Round == 1,
                5_000,
                conditionLabel: "Round does not changed.");
        }
    }
}
