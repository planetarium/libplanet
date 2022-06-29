using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Libplanet.Blockchain;
using Libplanet.Crypto;
using Libplanet.Net.Consensus;
using Libplanet.Net.Messages;
using Libplanet.Net.Transports;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Store;
using NetMQ;
using Serilog;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Net.Tests.Consensus.ConsensusContext
{
    [Collection("NetMQConfiguration")]
    public class ConsensusContextTestBase : IDisposable, IAsyncLifetime
    {
        protected readonly StoreFixture Fx;
        protected readonly BlockChain<DumbAction> BlockChain;
        protected readonly ConsensusContext<DumbAction> ConsensusContext;
        protected readonly TimeSpan NewHeightDelay = TimeSpan.FromSeconds(1);
        protected readonly ITransport Transport;

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

            var boundPeers =
                Enumerable.Range(0, validators.Count)
                    .Select(
                        x => new BoundPeer(validators[x], new DnsEndPoint("localhost", Port + x)));

            Transport = TestUtils.CreateNetMQTransport(privateKey, port: Port);
            void BroadcastMessage(ConsensusMessage message) =>
                Transport?.BroadcastMessage(boundPeers, message);

            BlockChain = TestUtils.CreateDummyBlockChain((MemoryStoreFixture)Fx);
            ConsensusContext = new ConsensusContext<DumbAction>(
                BroadcastMessage,
                BlockChain,
                BlockChain.Tip.Index + 1,
                privateKey,
                validators,
                NewHeightDelay);

            async Task DummyHandle(Message message)
            {
                switch (message)
                {
                    case ConsensusMessage consensusMessage:
                        await Transport!.ReplyMessageAsync(message, default);
                        ConsensusContext!.HandleMessage(consensusMessage);
                        watchConsensusMessage?.Invoke(consensusMessage);
                        break;
                }
            }

            Transport.ProcessMessageHandler.Register(DummyHandle);
        }

        public void Dispose()
        {
            Fx.Dispose();
            ConsensusContext.Dispose();
            Transport.Dispose();
            NetMQConfig.Cleanup(false);
        }

        public Task InitializeAsync() => Task.CompletedTask;

        public Task DisposeAsync() => Transport.Running ?
                Transport.StopAsync(TimeSpan.Zero) : Task.CompletedTask;
    }
}
