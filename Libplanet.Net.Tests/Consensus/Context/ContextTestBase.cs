using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Libplanet.Blockchain;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.Net.Consensus;
using Libplanet.Net.Messages;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Store;
using Libplanet.Tx;
using Serilog;
using Xunit.Abstractions;

namespace Libplanet.Net.Tests.Consensus.Context
{
    public class ContextTestBase : IDisposable
    {
        protected const int Timeout = 30_000;
        protected readonly Context<DumbAction> Context;
        protected readonly BlockChain<DumbAction> BlockChain;

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
            BlockChain = TestUtils.CreateDummyBlockChain((MemoryStoreFixture)_fx, null, null);

            void BroadcastMessage(ConsensusMessage message) =>
                Task.Run(() =>
                {
                    ConsensusMessageSent?.Invoke(this, message);
                    message.Remote = TestUtils.Peers[(int)nodeId];
                    Context!.ProduceMessage(message);
                });

            _consensusContext = new ConsensusContext<DumbAction>(
                BroadcastMessage,
                BlockChain,
                height,
                TestUtils.PrivateKeys[(int)nodeId],
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

        protected event EventHandler<ConsensusMessage>? ConsensusMessageSent;

        public PrivateKey Proposer(int round)
        {
            // return designated proposer for the height round pair.
            BlockProof? lastProof = BlockChain.Tip.Proof;
            PublicKey proposer = Sortition.SampleProposer(
                TestUtils.Validators.ToArray(), lastProof, Context.Height, round).PublicKey;
            return TestUtils.PrivateKeys.Single(x => x.PublicKey.Equals(proposer));
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
                PublicKey = _fx.Miner.PublicKey,
                PreviousHash = BlockChain.Tip.Hash,
                Timestamp = BlockChain.Tip.Timestamp.Subtract(TimeSpan.FromSeconds(1)),
                Transactions = new List<Transaction<DumbAction>>(),
            }.Propose().Evaluate(_fx.Miner, BlockChain);
    }
}
