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
using Serilog;
using Xunit.Abstractions;

namespace Libplanet.Net.Tests.Consensus.Context
{
    public class ContextTestBase : IDisposable
    {
        protected const int Timeout = 60_000;
        protected readonly Context<DumbAction> Context;
        protected readonly ITransport Transport;
        protected readonly BlockChain<DumbAction> BlockChain;
        protected readonly StoreFixture Fx;

        protected TestUtils.DelegateWatchConsensusMessage? watchConsensusMessage = null;

        private const int Port = 51211;

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
                .ForContext<ReactorTest>();

            _logger = Log.ForContext<ContextTest>();
            Fx = new MemoryStoreFixture(TestUtils.Policy.BlockAction);
            BlockChain = TestUtils.CreateDummyBlockChain((MemoryStoreFixture)Fx);
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
                nodeId,
                height,
                privateKey: TestUtils.PrivateKeys[(int)nodeId],
                validators: TestUtils.Validators,
                _newHeightDelay);

            Context = new Context<DumbAction>(
                _consensusContext,
                BlockChain,
                nodeId,
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

        public async void Dispose()
        {
            await Transport.StopAsync(default);

            Fx.Dispose();
            Transport.Dispose();
            _consensusContext.Dispose();
            Context.Dispose();
        }

        protected Block<DumbAction> GetInvalidBlock() =>
            new BlockContent<DumbAction>
            {
                Index = BlockChain.Tip.Index + 1,
                Difficulty = BlockChain.Tip.Difficulty,
                TotalDifficulty = BlockChain.Tip.TotalDifficulty + 1,
                PublicKey = Fx.Miner.PublicKey,
                PreviousHash = BlockChain.Tip.Hash,
                Timestamp = BlockChain.Tip.Timestamp.Subtract(TimeSpan.FromSeconds(1)),
                Transactions = new List<Transaction<DumbAction>>(),
            }.Mine(Fx.GetHashAlgorithm(2)).Evaluate(Fx.Miner, BlockChain);

        protected async Task NewRoundSendMessageAfterAssert()
        {
            await Libplanet.Tests.TestUtils.AssertThatEventually(
                () => Context.Step == Step.Propose,
                1_000);
        }
    }
}
