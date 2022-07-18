using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Libplanet.Blockchain;
using Libplanet.Blocks;
using Libplanet.Net.Consensus;
using Libplanet.Net.Messages;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Store;
using Libplanet.Tx;
using Nito.AsyncEx;
using Serilog;
using Xunit.Abstractions;

namespace Libplanet.Net.Tests.Consensus.Context
{
    public class ContextTestBase : IDisposable
    {
        protected const int Timeout = 60_000;
        protected readonly Context<DumbAction> Context;
        protected readonly BlockChain<DumbAction> BlockChain;

        protected TestUtils.DelegateWatchConsensusMessage? watchConsensusMessage = null;

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

            void BroadcastMessage(ConsensusMessage message) =>
                Task.Run(() =>
                {
                    watchConsensusMessage?.Invoke(message);
                    message.Remote = new Peer(TestUtils.PrivateKeys[(int)nodeId].PublicKey);
                    Context!.HandleMessage(message);
                });

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
        }

        public void Dispose()
        {
            _fx.Dispose();
            _consensusContext.Dispose();
            Context.Dispose();
        }

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
    }
}
