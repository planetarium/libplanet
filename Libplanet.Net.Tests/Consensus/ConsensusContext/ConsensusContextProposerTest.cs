using System;
using Libplanet.Consensus;
using Libplanet.Net.Messages;
using Nito.AsyncEx;
using Serilog;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Net.Tests.Consensus.ConsensusContext
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
            var (_, blockChain, consensusContext) = TestUtils.CreateDummyConsensusContext(
                TimeSpan.FromSeconds(1),
                TestUtils.Policy,
                TestUtils.Peer1Priv);

            var timeoutProcessed = new AsyncAutoResetEvent();

            consensusContext.TimeoutProcessed +=
                (sender, tuple) =>
                {
                    if (tuple.Height == 1)
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
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.Peer2Priv,
                        1,
                        hash: null,
                        flag: VoteFlag.PreVote))
                {
                    Remote = TestUtils.Peer2,
                });

            consensusContext.HandleMessage(
                new ConsensusVote(
                    vote: TestUtils.CreateVote(
                        TestUtils.Peer3Priv,
                        1,
                        hash: null,
                        flag: VoteFlag.PreVote))
                {
                    Remote = TestUtils.Peer3,
                });

            await timeoutProcessed.WaitAsync();

            consensusContext.HandleMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(
                        TestUtils.Peer2Priv,
                        1,
                        hash: null,
                        flag: VoteFlag.PreCommit))
                {
                    Remote = TestUtils.Peer2,
                });

            consensusContext.HandleMessage(
                new ConsensusCommit(
                    vote: TestUtils.CreateVote(
                        TestUtils.Peer3Priv,
                        1,
                        hash: null,
                        flag: VoteFlag.PreCommit))
                {
                    Remote = TestUtils.Peer3,
                });

            await timeoutProcessed.WaitAsync();
            Assert.Equal(1, consensusContext.Height);
            Assert.Equal(1, consensusContext.Round);
        }
    }
}
