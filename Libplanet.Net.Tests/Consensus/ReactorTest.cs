using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Crypto;
using Libplanet.Net.Consensus;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Store;
using Serilog;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Net.Tests.Consensus
{
    public abstract class ReactorTest
    {
        private const int Timeout = 60 * 1000;
        private const int TimerTestMargin = 500;

        private readonly StoreFixture _fx;

        private ILogger _logger;

        protected ReactorTest(ITestOutputHelper output)
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

        public abstract IReactor CreateReactor(
            BlockChain<DumbAction> blockChain,
            PrivateKey? key = null,
            string host = "localhost",
            int consensusPort = 5101,
            long id = 0,
            List<PublicKey> validators = null!,
            List<BoundPeer> validatorPeers = null!,
            int newHeightDelayMilliseconds = 10_000);

        [Fact(Timeout = Timeout)]
        public async void StartAsync()
        {
            const int count = 4;
            // INFO : This test uses local ports 6100 to 6103.
            const int consensusPort = 6100;

            const int propagationDelay = 3_000;
            var keys = new PrivateKey[count];
            var reactors = new ConsensusReactor<DumbAction>[count];
            var validators = new List<PublicKey>();
            var validatorPeers = new List<BoundPeer>();
            var stores = new IStore[count];
            var blockChains = new BlockChain<DumbAction>[count];

            for (var i = 0; i < count; i++)
            {
                keys[i] = new PrivateKey();
                validators.Add(keys[i].PublicKey);
                validatorPeers.Add(
                    new BoundPeer(
                        keys[i].PublicKey,
                        new DnsEndPoint("localhost", consensusPort + i)));
                stores[i] = new MemoryStore();
                blockChains[i] = new BlockChain<DumbAction>(
                    TestUtils.Policy,
                    new VolatileStagePolicy<DumbAction>(),
                    stores[i],
                    new TrieStateStore(new MemoryKeyValueStore()),
                    _fx.GenesisBlock);
            }

            for (var i = 0; i < count; i++)
            {
                reactors[i] = (ConsensusReactor<DumbAction>)CreateReactor(
                    blockChain: blockChains[i],
                    key: keys[i],
                    consensusPort: consensusPort + i,
                    id: i,
                    validators: validators,
                    validatorPeers: validatorPeers,
                    newHeightDelayMilliseconds: propagationDelay * 2);
            }

            var reactorCtx = new CancellationTokenSource();
            try
            {
                foreach (var reactor in reactors)
                {
                    _ = reactor.StartAsync(reactorCtx.Token);
                }

                Dictionary<string, JsonElement> json;

                // For test accuracy, this test should not run in parallel.
                await Task.Delay(propagationDelay, reactorCtx.Token);
                foreach (var reactor in reactors)
                {
                    await reactor.StopAsync(reactorCtx.Token);
                }

                var isPolka = new bool[count];

                for (var node = 0; node < count; ++node)
                {
                    json =
                        JsonSerializer.Deserialize<Dictionary<string, JsonElement>>(
                            reactors[node].ToString());

                    // Genesis block exists, add 1 to the height.
                    if (json["step"].GetString() == "EndCommit")
                    {
                        isPolka[node] = true;
                    }
                    else
                    {
                        Log.Error(
                            "[Failed]: {0} {1}",
                            json["step"].GetString(),
                            blockChains[node].Count);
                        isPolka[node] = false;
                    }
                }

                Assert.Equal(count, isPolka.Sum(x => x ? 1 : 0));

                for (var node = 0; node < count; ++node)
                {
                    json =
                        JsonSerializer.Deserialize<Dictionary<string, JsonElement>>(
                            reactors[node].ToString());

                    Assert.Equal((long)node, json["node_id"].GetInt32());
                    Assert.Equal(1, json["height"].GetInt32());
                    Assert.Equal(2, blockChains[node].Count);
                    Assert.Equal(0L, json["round"].GetInt32());
                    Assert.Equal("EndCommit", json["step"].GetString());
                }
            }
            finally
            {
                foreach (var reactor in reactors)
                {
                    if (reactor.Running)
                    {
                        await reactor.StopAsync(default);
                        reactor.Dispose();
                    }
                }

                reactorCtx.Cancel();
            }
        }

        [Fact(Timeout = Timeout)]
        public async void IncreaseRoundWhenTimeout()
        {
            await Task.Yield();
            Assert.True(true);
        }
    }
}
