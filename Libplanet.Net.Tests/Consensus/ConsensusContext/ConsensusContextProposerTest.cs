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
            var timeoutProcessed = new AsyncAutoResetEvent();

            ConsensusContext.NewHeight(BlockChain.Tip.Index + 1);
            ConsensusContext.Contexts[BlockChain.Tip.Index + 1].TimeoutProcessed +=
                (sender, message) =>
                {
                    timeoutProcessed.Set();
                };

            // Wait for block to be proposed.
            Assert.Equal(1, ConsensusContext.Height);
            Assert.Equal(0, ConsensusContext.Round);

            // Triggers timeout +2/3 with NIL and Block
            ConsensusContext.HandleMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.Peer2ConsensusPriv,
                        1,
                        hash: null,
                        flag: VoteFlag.Absent))
                {
                    Remote = TestUtils.Peer2,
                });

            ConsensusContext.HandleMessage(
                new ConsensusVote(
                    vote: TestUtils.CreateVote(
                        TestUtils.Peer3ConsensusPriv,
                        1,
                        hash: null,
                        flag: VoteFlag.Absent))
                {
                    Remote = TestUtils.Peer3,
                });

            await timeoutProcessed.WaitAsync();

            ConsensusContext.HandleMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(
                        TestUtils.Peer2ConsensusPriv,
                        1,
                        hash: null,
                        flag: VoteFlag.Commit))
                {
                    Remote = TestUtils.Peer2,
                });

            ConsensusContext.HandleMessage(
                new ConsensusCommit(
                    vote: TestUtils.CreateVote(
                        TestUtils.Peer3ConsensusPriv,
                        1,
                        hash: null,
                        flag: VoteFlag.Commit))
                {
                    Remote = TestUtils.Peer3,
                });

            await timeoutProcessed.WaitAsync();
            Assert.Equal(1, ConsensusContext.Height);
            Assert.Equal(1, ConsensusContext.Round);
        }
    }
}
