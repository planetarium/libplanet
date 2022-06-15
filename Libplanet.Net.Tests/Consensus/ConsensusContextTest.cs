using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Blockchain;
using Libplanet.Crypto;
using Libplanet.Net.Consensus;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Store;
using Serilog;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Net.Tests.Consensus
{
    public class ConsensusContextTest
    {
        private const int Timeout = 60_000;
        private readonly StoreFixture _fx;
        private readonly ILogger _logger;

        public ConsensusContextTest(ITestOutputHelper output)
        {
            const string outputTemplate =
                "{Timestamp:HH:mm:ss:ffffffZ} - {Message}";
            Log.Logger = new LoggerConfiguration()
                .MinimumLevel.Verbose()
                .WriteTo.TestOutput(output, outputTemplate: outputTemplate)
                .CreateLogger()
                .ForContext<ReactorTest>();

            _logger = Log.ForContext<ReactorTest>();
            _fx = new MemoryStoreFixture(TestUtils.Policy.BlockAction);
        }

        [Fact(Timeout = Timeout)]
        public void NewHeightIncreasing()
        {
            // NewHeight also covers Commit() due to calling the method from Context<T>
            var blockChain = TestUtils.CreateDummyBlockChain((MemoryStoreFixture)_fx);
            var (transport, consensusContext) =
                TestUtils.CreateStandaloneConsensusContext(
                    blockChain,
                    TimeSpan.FromSeconds(1));
            var waitingCommit = new AutoResetEvent(false);

            using (transport)
            {
                transport.StartAsync();

                Assert.Throws<InvalidHeightIncreasingException>(
                    () => consensusContext.NewHeight(blockChain.Tip.Index));
                Assert.Throws<InvalidHeightIncreasingException>(
                    () => consensusContext.NewHeight(blockChain.Tip.Index + 2));

                blockChain.TipChanged += (sender, tuple) => waitingCommit.Set();
                consensusContext.NewHeight(blockChain.Tip.Index + 1);

                waitingCommit.WaitOne();

                Assert.Equal(1, blockChain.Tip.Index);
                // Next NewHeight is not called yet.
                Assert.Equal(1, consensusContext.Height);
                Assert.Equal(0, consensusContext.Round);
            }
        }

        [Fact(Timeout = Timeout)]
        public async void NewHeightWhenTipChanged()
        {
            BlockChain<DumbAction> blockChain =
                TestUtils.CreateDummyBlockChain((MemoryStoreFixture)_fx);
            TimeSpan newHeightDelay = TimeSpan.FromSeconds(1);
            var context = new ConsensusContext<DumbAction>(
                _ => { },
                blockChain,
                0,
                new PrivateKey(),
                new List<PublicKey> { new PrivateKey().PublicKey, new PrivateKey().PublicKey },
                newHeightDelay);
            Assert.Equal(1, context.Height);
            await blockChain.MineBlock(new PrivateKey(), append: true);
            Assert.Equal(1, context.Height);
            await Task.Delay(newHeightDelay + TimeSpan.FromSeconds(1));
            Assert.Equal(blockChain.Tip.Index + 1, context.Height);
        }
    }
}
