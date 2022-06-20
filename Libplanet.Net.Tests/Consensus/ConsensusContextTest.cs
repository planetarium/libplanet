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
        public async void NewHeightIncreasing()
        {
            // NewHeight also covers Commit() due to calling the method from Context<T>
            var privateKey = new PrivateKey();
            var blockChain = TestUtils.CreateDummyBlockChain((MemoryStoreFixture)_fx);
            using var transport = TestUtils.CreateNetMQTransport(
                privateKey,
                "localhost",
                17192);
            var consensusContext =
                TestUtils.CreateStandaloneConsensusContext(
                    blockChain,
                    transport,
                    TimeSpan.FromSeconds(1),
                    port: 17192,
                    privateKey: privateKey);
            var waitingCommit = new AutoResetEvent(false);

            _ = transport.StartAsync();
            await transport.WaitForRunningAsync();

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
                blockChain.Tip.Index,
                new PrivateKey(),
                new List<PublicKey> { new PrivateKey().PublicKey, new PrivateKey().PublicKey },
                newHeightDelay);
            Assert.Equal(0, context.Height);
            await blockChain.MineBlock(new PrivateKey(), append: true);
            Assert.Equal(0, context.Height);
            await Task.Delay(newHeightDelay + TimeSpan.FromSeconds(1));
            Assert.Equal(blockChain.Tip.Index + 1, context.Height);
        }
    }
}
