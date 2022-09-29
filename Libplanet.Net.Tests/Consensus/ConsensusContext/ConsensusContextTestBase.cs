using System;
using System.Collections.Generic;
using System.Net;
using System.Threading.Tasks;
using Libplanet.Action.Sys;
using Libplanet.Assets;
using Libplanet.Blockchain;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.Net.Consensus;
using Libplanet.Net.Messages;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Store;
using Libplanet.Tx;
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
        protected readonly List<Validator> Validators;
        protected readonly TimeSpan NewHeightDelay = TimeSpan.FromSeconds(1);

        private const int Port = 19283;
        private readonly ILogger _logger;

        public ConsensusContextTestBase(
            ITestOutputHelper output,
            PrivateKey? privateKey = null,
            List<Validator>? validators = null)
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
                    ConsensusMessageSent?.Invoke(this, message);
                    message.Remote = new BoundPeer(
                        privateKey.PublicKey, new DnsEndPoint("1.2.3.4", 1234));
                    ConsensusContext!.HandleMessage(message);
                });

            var stateStore = new TrieStateStore(new MemoryKeyValueStore());
            Block<DumbAction> genesis = TestUtils.CreateDummyGenesisBlockForPoS(
                GenesisValidatorTransaction());

            BlockChain = TestUtils.CreateDummyBlockChain(
                (MemoryStoreFixture)Fx,
                genesis,
                stateStore);
            ConsensusContext = new ConsensusContext<DumbAction>(
                BroadcastMessage,
                BlockChain,
                BlockChain.Tip.Index + 1,
                privateKey,
                validators,
                NewHeightDelay);
            Validators = validators;
        }

        protected event EventHandler<ConsensusMessage>? ConsensusMessageSent;

        public List<Transaction<DumbAction>> GenesisValidatorTransaction()
        {
            List<Transaction<DumbAction>> txs = new List<Transaction<DumbAction>>();
            Currency governance = Currency.Uncapped("GovernanceToken", 18, minters: null);
            foreach (var privateKey in TestUtils.PrivateKeys)
            {
                txs.Add(Transaction<DumbAction>.Create(
                    0,
                    privateKey,
                    null,
                    new Mint(
                        privateKey.ToAddress(),
                        new FungibleAssetValue(governance, 1000, 0))));
                txs.Add(Transaction<DumbAction>.Create(
                    1,
                    privateKey,
                    null,
                    new PromoteValidator(
                        privateKey.PublicKey,
                        new FungibleAssetValue(governance, 300, 0))));
            }

            return txs;
        }

        public void Dispose()
        {
            Fx.Dispose();
            ConsensusContext.Dispose();
        }
    }
}
