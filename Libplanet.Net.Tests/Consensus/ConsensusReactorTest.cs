using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Net.Consensus;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Store;
using NetMQ;
using Serilog;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Net.Tests.Consensus
{
    [Collection("NetMQConfiguration")]
    public class ConsensusReactorTest : IDisposable
    {
        private const int PropagationDelay = 25_000;
        private const int Timeout = 60 * 1000;
        private ILogger _logger;

        public ConsensusReactorTest(ITestOutputHelper output)
        {
            const string outputTemplate =
                "{Timestamp:HH:mm:ss:ffffffZ} - {Message}";
            Log.Logger = new LoggerConfiguration()
                .MinimumLevel.Verbose()
                .WriteTo.TestOutput(output, outputTemplate: outputTemplate)
                .CreateLogger()
                .ForContext<ConsensusReactorTest>();

            _logger = Log.ForContext<ConsensusReactorTest>();
        }

        [Fact(Timeout = Timeout)]
        public async void StartAsync()
        {
            var consensusReactors = new ConsensusReactor<DumbAction>[4];
            var stores = new IStore[4];
            var blockChains = new BlockChain<DumbAction>[4];
            var fx = new MemoryStoreFixture(TestUtils.Policy.BlockAction);
            var validatorPeers = new List<BoundPeer>();
            var cancellationTokenSource = new CancellationTokenSource();

            for (var i = 0; i < 4; i++)
            {
                validatorPeers.Add(
                    new BoundPeer(
                        TestUtils.PrivateKeys[i].PublicKey,
                        new DnsEndPoint("127.0.0.1", 6000 + i)));
                stores[i] = new MemoryStore();
                blockChains[i] = BlockChain<DumbAction>.Create(
                    TestUtils.Policy,
                    new VolatileStagePolicy<DumbAction>(),
                    stores[i],
                    new TrieStateStore(new MemoryKeyValueStore()),
                    fx.GenesisBlock);
            }

            for (var i = 0; i < 4; i++)
            {
                consensusReactors[i] = TestUtils.CreateDummyConsensusReactor(
                    blockChain: blockChains[i],
                    key: TestUtils.PrivateKeys[i],
                    consensusPort: 6000 + i,
                    validatorPeers: validatorPeers,
                    contextMinIntervalMilliseconds: PropagationDelay * 2);
            }

            try
            {
                consensusReactors.AsParallel().ForAll(
                    reactor => _ = reactor.StartAsync(cancellationTokenSource.Token));

                Dictionary<string, JsonElement> json;

                await Task.Delay(PropagationDelay, cancellationTokenSource.Token);
                foreach (var reactor in consensusReactors)
                {
                    await reactor.StopAsync(cancellationTokenSource.Token);
                }

                var isPolka = new bool[4];

                for (var node = 0; node < 4; ++node)
                {
                    json = JsonSerializer.Deserialize<Dictionary<string, JsonElement>>(
                               consensusReactors[node].ToString())
                           ?? throw new NullReferenceException(
                               $"Failed to deserialize consensus reactor");

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

                Assert.Equal(4, isPolka.Sum(x => x ? 1 : 0));

                for (var node = 0; node < 4; ++node)
                {
                    json = JsonSerializer.Deserialize<Dictionary<string, JsonElement>>(
                               consensusReactors[node].ToString())
                           ?? throw new NullReferenceException(
                               $"Failed to deserialize consensus reactor");

                    Assert.Equal(
                        validatorPeers[node].Address.ToString(),
                        json["node_id"].GetString());
                    Assert.Equal(1, json["height"].GetInt32());
                    Assert.Equal(1, blockChains[node].Count);
                    Assert.Equal(0L, json["round"].GetInt32());
                    Assert.Equal("EndCommit", json["step"].GetString());
                }
            }
            finally
            {
                cancellationTokenSource.Cancel();
                for (int i = 0; i < 4; ++i)
                {
                    await consensusReactors[i].StopAsync(cancellationTokenSource.Token);
                    consensusReactors[i].Dispose();
                }
            }
        }

        public void Dispose()
        {
            NetMQConfig.Cleanup(false);
        }
    }
}
