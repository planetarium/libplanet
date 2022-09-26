using System;
using System.Collections.Generic;
using System.Net;
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
        protected const int Timeout = 30_000;

        protected readonly StoreFixture Fx;
        protected readonly BlockChain<DumbAction> BlockChain;
        protected readonly ConsensusContext<DumbAction> ConsensusContext;
        protected readonly TimeSpan NewHeightDelay = TimeSpan.FromSeconds(1);

        private const int Port = 19283;
        private readonly ILogger _logger;

        public ConsensusContextTestBase(
            ITestOutputHelper output,
            PrivateKey? privateKey = null,
            Func<long, IEnumerable<PublicKey>>? getValidators = null)
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
            getValidators ??= TestUtils.Policy.GetValidators;

            void BroadcastMessage(ConsensusMessage message) =>
                Task.Run(() =>
                {
                    ConsensusMessageSent?.Invoke(this, message);
                    message.Remote = new BoundPeer(
                        privateKey.PublicKey, new DnsEndPoint("1.2.3.4", 1234));
                    ConsensusContext!.HandleMessage(message);
                });

            BlockChain = TestUtils.CreateDummyBlockChain((MemoryStoreFixture)Fx);
            ConsensusContext = new ConsensusContext<DumbAction>(
                BroadcastMessage,
                BlockChain,
                BlockChain.Tip.Index + 1,
                privateKey,
                NewHeightDelay,
                getValidators);
        }

        protected event EventHandler<ConsensusMessage>? ConsensusMessageSent;

        public void Dispose()
        {
            Fx.Dispose();
            ConsensusContext.Dispose();
        }
    }
}
