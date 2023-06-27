using System;
using Libplanet.Consensus;
using Libplanet.Net.Messages;
using Nito.AsyncEx;
using Serilog;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Net.Tests.Consensus
{
    public class ConsensusContextProposerTest
    {
        private const int Timeout = 30000;
        private readonly ILogger _logger;

        public ConsensusContextProposerTest(ITestOutputHelper output)
        {
            const string outputTemplate =
                "{Timestamp:HH:mm:ss:ffffffZ} - {Message} {Exception}";
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
            var (blockChain, consensusContext) = TestUtils.CreateDummyConsensusContext(
                TimeSpan.FromSeconds(1),
                TestUtils.Policy,
                TestUtils.PrivateKeys[1]);

            var timeoutProcessed = new AsyncAutoResetEvent();

            consensusContext.TimeoutProcessed += (_, evnetArgs) =>
            {
                if (evnetArgs.Height == 1)
                {
                    timeoutProcessed.Set();
                }
            };

            consensusContext.NewHeight(blockChain.Tip.Index + 1);

            // Wait for block to be proposed.
            Assert.Equal(1, consensusContext.Height);
            Assert.Equal(0, consensusContext.Round);

            // Triggers timeout +2/3 with NIL and Block
            consensusContext.HandleMessage(
                new ConsensusPreVoteMsg(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[2],
                        1,
                        hash: default,
                        flag: VoteFlag.PreVote)));

            consensusContext.HandleMessage(
                new ConsensusPreVoteMsg(
                    vote: TestUtils.CreateVote(
                        TestUtils.PrivateKeys[3],
                        1,
                        hash: default,
                        flag: VoteFlag.PreVote)));

            await timeoutProcessed.WaitAsync();

            consensusContext.HandleMessage(
                new ConsensusPreCommitMsg(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[2],
                        1,
                        hash: default,
                        flag: VoteFlag.PreCommit)));

            consensusContext.HandleMessage(
                new ConsensusPreCommitMsg(
                    vote: TestUtils.CreateVote(
                        TestUtils.PrivateKeys[3],
                        1,
                        hash: default,
                        flag: VoteFlag.PreCommit)));

            await timeoutProcessed.WaitAsync();
            Assert.Equal(1, consensusContext.Height);
            Assert.Equal(1, consensusContext.Round);
        }
    }
}
