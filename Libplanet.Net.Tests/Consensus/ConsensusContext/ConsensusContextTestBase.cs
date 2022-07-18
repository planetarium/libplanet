using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Libplanet.Blockchain;
using Libplanet.Crypto;
using Libplanet.Net.Consensus;
using Libplanet.Net.Messages;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Store;
using Serilog;
using Xunit.Abstractions;

namespace Libplanet.Net.Tests.Consensus.ConsensusContext
{
    public class ConsensusContextTestBase : IDisposable
    {
        protected readonly StoreFixture Fx;
        protected readonly BlockChain<DumbAction> BlockChain;
        protected readonly ConsensusContext<DumbAction> ConsensusContext;
        protected readonly TimeSpan NewHeightDelay = TimeSpan.FromSeconds(1);

        protected TestUtils.DelegateWatchConsensusMessage? watchConsensusMessage;

        private const int Port = 19283;
        private readonly ILogger _logger;

        public ConsensusContextTestBase(
            ITestOutputHelper output,
            PrivateKey? privateKey = null,
            List<PublicKey>? validators = null)
        {
            const string outputTemplate =
                "{Timestamp:HH:mm:ss:ffffffZ} - {Message}";
            Log.Logger = new LoggerConfiguration()
                .MinimumLevel.Verbose()
                .WriteTo.TestOutput(output, outputTemplate: outputTemplate)
                .CreateLogger()
                .ForContext<ConsensusContextTestBase>();

            _logger = Log.ForContext<ConsensusContextTestBase>();
            Fx = new MemoryStoreFixture(TestUtils.Policy.BlockAction);

            privateKey ??= TestUtils.Peer1Priv;
            validators ??= TestUtils.Validators;

            void BroadcastMessage(ConsensusMessage message) =>
                Task.Run(() =>
                {
                    watchConsensusMessage?.Invoke(message);
                    message.Remote = new Peer(privateKey.PublicKey);
                    ConsensusContext!.HandleMessage(message);
                });

            BlockChain = TestUtils.CreateDummyBlockChain((MemoryStoreFixture)Fx);
            ConsensusContext = new ConsensusContext<DumbAction>(
                BroadcastMessage,
                BlockChain,
                BlockChain.Tip.Index + 1,
                privateKey,
                validators,
                NewHeightDelay);
        }

        public void Dispose()
        {
            Fx.Dispose();
            ConsensusContext.Dispose();
        }

        protected async Task NewHeightDelayAssert(long height)
        {
            await Libplanet.Tests.TestUtils.AssertThatEventually(
                () => ConsensusContext.Height == height,
                NewHeightDelay.Duration().Milliseconds + 3_000);
        }
    }
}
