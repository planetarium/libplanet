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
using Nito.AsyncEx;
using Serilog;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Net.Tests.Consensus
{
    [Collection("NetMQConfiguration")]
    public class ConsensusReactorTest : IDisposable
    {
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
            using var fx = new MemoryStoreFixture(TestUtils.Policy.BlockAction);
            var validatorPeers = new List<BoundPeer>();
            var cancellationTokenSource = new CancellationTokenSource();
            var heightChanged = new AsyncAutoResetEvent[4];

            for (var i = 0; i < 4; i++)
            {
                heightChanged[i] = new AsyncAutoResetEvent();
                validatorPeers.Add(
                    new BoundPeer(
                        TestUtils.PrivateKeys[i].PublicKey,
                        new DnsEndPoint("127.0.0.1", 6000 + i)));
                stores[i] = new MemoryStore();
                blockChains[i] = new BlockChain<DumbAction>(
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
                    newHeightDelayMilliseconds: 1000);

                var capture = i;
                consensusReactors[i].ConsensusContext.StateChanged += (sender, hmrs) =>
                {
                    if (hmrs.Height == 2)
                    {
                        heightChanged[capture].Set();
                    }
                };
            }

            try
            {
                // Prevents from non-stopping reactor. 1000 is arbitrary value which is considered
                // as preparation time.
                cancellationTokenSource.CancelAfter(Timeout - 1000);
                consensusReactors.AsParallel().ForAll(
                    reactor => _ = reactor.StartAsync(cancellationTokenSource.Token));

                await Task.WhenAll(heightChanged.Select(x =>
                    x.WaitAsync(cancellationTokenSource.Token)));

                foreach (var reactor in consensusReactors)
                {
                    await reactor.StopAsync(cancellationTokenSource.Token);
                }

                foreach (var i in Enumerable.Range(0, 4))
                {
                    // One height will be eventually consent.
                    Assert.Equal(2, consensusReactors[i].Height);
                    Assert.Equal(2, blockChains[i].Count);
                    Assert.Equal(0, consensusReactors[i].ConsensusContext.Round);
                }
            }
            finally
            {
                cancellationTokenSource.Cancel();
                for (int i = 0; i < 4; ++i)
                {
                    await consensusReactors[i].DisposeAsync();
                }
            }
        }

        [Fact(Timeout = Timeout)]
        public async void ToStringTest()
        {
            using var fx = new MemoryStoreFixture(TestUtils.Policy.BlockAction);
            var blockChain = TestUtils.CreateDummyBlockChain(fx);

            await using var consensusReactors = TestUtils.CreateDummyConsensusReactor(
                blockChain: blockChain,
                key: TestUtils.PrivateKeys[0],
                contextTimeoutOptions: new ContextTimeoutOption(
                    1,
                    100,
                    100));

            // Default value is NULL, and it cannot be serialized as JSON.
            Assert.Throws<JsonException>(() => consensusReactors.ToString());

            _ = consensusReactors.StartAsync(CancellationToken.None);
            await Task.Run(
                async () =>
                {
                    while (!consensusReactors.Running)
                    {
                        await Task.Delay(100);
                    }
                });

            var json = JsonSerializer.Deserialize<Dictionary<string, JsonElement>>(
                           consensusReactors.ToString())
                       ?? throw new NullReferenceException(
                           $"Failed to deserialize consensus reactor");

            Assert.Equal(
                TestUtils.PrivateKeys[0].PublicKey.ToAddress().ToString(),
                json["node_id"].GetString());
            Assert.Equal(1, json["height"].GetInt32());
            Assert.Equal(1, blockChain.Count);
            Assert.Equal(0L, json["round"].GetInt32());
            Assert.Equal("Propose", json["step"].GetString());
        }

        public void Dispose()
        {
            NetMQConfig.Cleanup(false);
        }
    }
}
