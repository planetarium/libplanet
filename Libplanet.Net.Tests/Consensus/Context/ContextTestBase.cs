using System;
using System.Collections.Generic;
using System.Net;
using System.Threading.Tasks;
using Libplanet.Blockchain;
using Libplanet.Blocks;
using Libplanet.Net.Consensus;
using Libplanet.Net.Messages;
using Libplanet.Net.Transports;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Store;
using Libplanet.Tx;
using NetMQ;
using Nito.AsyncEx;
using Serilog;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Net.Tests.Consensus.Context
{
    [Collection("NetMQConfiguration")]
    public class ContextTestBase : IDisposable, IAsyncLifetime
    {
        protected const int Timeout = 60_000;
        protected readonly Context<DumbAction> Context;
        protected readonly ITransport Transport;
        protected readonly BlockChain<DumbAction> BlockChain;

        protected TestUtils.DelegateWatchConsensusMessage? watchConsensusMessage = null;

        private const int Port = 51211;

        private readonly StoreFixture _fx;
        private readonly ILogger _logger;
        private readonly TimeSpan _newHeightDelay = TimeSpan.FromSeconds(4);
        private readonly ConsensusContext<DumbAction> _consensusContext;

        public ContextTestBase(
            ITestOutputHelper output,
            long nodeId,
            long height,
            int round,
            Step step)
        {
            const string outputTemplate =
                "{Timestamp:HH:mm:ss:ffffffZ} - {Message}";
            Log.Logger = new LoggerConfiguration()
                .MinimumLevel.Verbose()
                .WriteTo.TestOutput(output, outputTemplate: outputTemplate)
                .CreateLogger()
                .ForContext<ContextTestBase>();

            _logger = Log.ForContext<ContextTestBase>();
            _fx = new MemoryStoreFixture(TestUtils.Policy.BlockAction);
            BlockChain = TestUtils.CreateDummyBlockChain((MemoryStoreFixture)_fx);
            Transport = TestUtils.CreateNetMQTransport(
                TestUtils.PrivateKeys[(int)nodeId], port: Port);

            var validatorPeers = new List<BoundPeer>()
            {
                new BoundPeer(
                    TestUtils.PrivateKeys[(int)nodeId].PublicKey,
                    new DnsEndPoint("localhost", Port)),
            };

            void BroadcastMessage(ConsensusMessage message) =>
                Transport.BroadcastMessage(validatorPeers, message);

            _consensusContext = new ConsensusContext<DumbAction>(
                BroadcastMessage,
                BlockChain,
                height,
                privateKey: TestUtils.PrivateKeys[(int)nodeId],
                validators: TestUtils.Validators,
                _newHeightDelay);

            Context = new Context<DumbAction>(
                _consensusContext,
                BlockChain,
                height,
                TestUtils.PrivateKeys[(int)nodeId],
                TestUtils.Validators,
                step,
                round);

            async Task ContextHandle(Message message)
            {
                switch (message)
                {
                    case ConsensusMessage consensusMessage:
                        await Transport.ReplyMessageAsync(message, default);
                        Context.HandleMessage(consensusMessage);
                        watchConsensusMessage?.Invoke(consensusMessage);
                        break;
                }
            }

            Transport.ProcessMessageHandler.Register(ContextHandle);
        }

        public void Dispose()
        {
            _fx.Dispose();
            Transport.Dispose();
            _consensusContext.Dispose();
            Context.Dispose();
            NetMQConfig.Cleanup(false);
        }

        public Task InitializeAsync() => Task.Delay(TimeSpan.Zero);

        public Task DisposeAsync() => DisposeTransport();

        protected Block<DumbAction> GetInvalidBlock() =>
            new BlockContent<DumbAction>
            {
                Index = BlockChain.Tip.Index + 1,
                Difficulty = BlockChain.Tip.Difficulty,
                TotalDifficulty = BlockChain.Tip.TotalDifficulty + BlockChain.Tip.Difficulty,
                PublicKey = _fx.Miner.PublicKey,
                PreviousHash = BlockChain.Tip.Hash,
                Timestamp = BlockChain.Tip.Timestamp.Subtract(TimeSpan.FromSeconds(1)),
                Transactions = new List<Transaction<DumbAction>>(),
            }.Mine(_fx.GetHashAlgorithm(2)).Evaluate(_fx.Miner, BlockChain);

        protected async Task NewRoundSendMessageAssert()
        {
            await Libplanet.Tests.TestUtils.AssertThatEventually(
                () => Context.Step == Step.Propose,
                1_000);
        }

        protected AsyncAutoResetEvent WatchMessageProcessed()
        {
            var messageProcessed = new AsyncAutoResetEvent();
            Context.MessageProcessed += (sender, consensusMessage) => messageProcessed.Set();

            return messageProcessed;
        }

        private async Task DisposeTransport()
        {
            if (Transport.Running)
            {
                await Transport.StopAsync(TimeSpan.FromSeconds(1));
            }
        }
    }
}
