using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.NetworkInformation;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Action;
using Libplanet.Action.Loader;
using Libplanet.Action.Tests.Common;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Net.Consensus;
using Libplanet.Store;
using Libplanet.Store.Trie;
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
            var consensusReactors = new ConsensusReactor[4];
            var stores = new IStore[4];
            var blockChains = new BlockChain[4];
            var ports = new int[4];
            var fx = new MemoryStoreFixture(TestUtils.Policy.BlockAction);
            var validatorPeers = new List<BoundPeer>();
            var cancellationTokenSource = new CancellationTokenSource();
            cancellationTokenSource.CancelAfter(Timeout);

            for (int i = 0; i < 4; i++)
            {
                ports[i] = GetAvailablePort() ?? throw new Exception("No available port.");
            }

            for (var i = 0; i < 4; i++)
            {
                validatorPeers.Add(
                    new BoundPeer(
                        TestUtils.PrivateKeys[i].PublicKey,
                        new DnsEndPoint("127.0.0.1", ports[i])));
                stores[i] = new MemoryStore();
                var stateStore = new TrieStateStore(new MemoryKeyValueStore());
                blockChains[i] = BlockChain.Create(
                    TestUtils.Policy,
                    new VolatileStagePolicy(),
                    stores[i],
                    stateStore,
                    fx.GenesisBlock,
                    new ActionEvaluator(
                        policyBlockActionGetter: _ => TestUtils.Policy.BlockAction,
                        blockChainStates: new BlockChainStates(stores[i], stateStore),
                        actionTypeLoader: new SingleActionLoader(typeof(DumbAction))));
            }

            for (var i = 0; i < 4; i++)
            {
                consensusReactors[i] = TestUtils.CreateDummyConsensusReactor(
                    blockChain: blockChains[i],
                    key: TestUtils.PrivateKeys[i],
                    consensusPort: ports[i],
                    validatorPeers: validatorPeers,
                    newHeightDelayMilliseconds: PropagationDelay * 2);
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
                    Assert.Equal(2, blockChains[node].Count);
                    Assert.Equal(0L, json["round"].GetInt32());
                    Assert.Equal("EndCommit", json["step"].GetString());
                }
            }
            finally
            {
                for (int i = 0; i < 4; ++i)
                {
                    if (!consensusReactors[i].Running)
                    {
                        continue;
                    }

                    await consensusReactors[i].StopAsync(cancellationTokenSource.Token);
                    consensusReactors[i].Dispose();
                }
            }
        }

        public void Dispose()
        {
            NetMQConfig.Cleanup(false);
        }

        private static int? GetAvailablePort(
            ushort lowerPort = 6000,
            ushort upperPort = ushort.MaxValue)
        {
            var ipProperties = IPGlobalProperties.GetIPGlobalProperties();
            var usedPorts = Enumerable.Empty<int>()
                .Concat(ipProperties.GetActiveTcpConnections().Select(c => c.LocalEndPoint.Port))
                .Concat(ipProperties.GetActiveTcpListeners().Select(l => l.Port))
                .Concat(ipProperties.GetActiveUdpListeners().Select(l => l.Port))
                .ToHashSet();
            for (int port = lowerPort; port <= upperPort; port++)
            {
                if (!usedPorts.Contains(port))
                {
                    return port;
                }
            }

            return null;
        }
    }
}
