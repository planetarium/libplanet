using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Net.Consensus;
using Libplanet.Net.Protocols;
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
        private const int TimerTestTimeout = (int)ConsensusContext<DumbAction>.TimeoutMillisecond;
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
            RoutingTable? table = null,
            string host = "localhost",
            int port = 5001,
            long id = 0,
            List<PublicKey> validators = null!);

        [Fact(Timeout = (TimerTestTimeout * 2) + TimerTestMargin)]
        public async void VoteCommitTimeout()
        {
            // For preventing one man Vote-Commit-newHeight.
            var fakeKey = new PrivateKey();
            var key = new PrivateKey();
            var validators = new List<PublicKey>
            {
                key.PublicKey,
                fakeKey.PublicKey,
            };
            const int proposeProcessWaitTime = 100;
            const int yieldTime = 200;

            var blockChain = new BlockChain<DumbAction>(
                TestUtils.Policy,
                new VolatileStagePolicy<DumbAction>(),
                _fx.Store,
                _fx.StateStore,
                _fx.GenesisBlock);
            var reactor = CreateReactor(blockChain, key, port: 11001, validators: validators);

            try
            {
                _fx.Store.PutBlock(_fx.Block1);
                reactor.Propose(_fx.Block1.Hash);
                await Task.Delay(proposeProcessWaitTime);

                var json =
                    JsonSerializer.Deserialize<Dictionary<string, JsonElement>>(
                        reactor.ToString());

                Assert.Equal(0L, json["node_id"].GetInt32());
                Assert.Equal(0L, json["round"].GetInt32());
                Assert.Equal(0L, json["height"].GetInt32());
                Assert.Equal("PreVoteState", json["step"].GetString());

                await Task.Delay((int)ConsensusContext<DumbAction>.TimeoutMillisecond);

                json =
                    JsonSerializer.Deserialize<Dictionary<string, JsonElement>>(
                        reactor.ToString());

                if (json["step"].GetString() != "PreCommitState")
                {
                    Thread.Sleep(yieldTime);

                    json =
                        JsonSerializer.Deserialize<Dictionary<string, JsonElement>>(
                            reactor.ToString());
                }

                Assert.Equal(0L, json["node_id"].GetInt32());
                Assert.Equal(0L, json["round"].GetInt32());
                Assert.Equal(0L, json["height"].GetInt32());
                Assert.Equal("PreCommitState", json["step"].GetString());

                Thread.Sleep((int)ConsensusContext<DumbAction>.TimeoutMillisecond);

                json =
                    JsonSerializer.Deserialize<Dictionary<string, JsonElement>>(
                        reactor.ToString());

                if (json["step"].GetString() != "DefaultState")
                {
                    Thread.Sleep(yieldTime);

                    json =
                        JsonSerializer.Deserialize<Dictionary<string, JsonElement>>(
                            reactor.ToString());
                }

                Assert.Equal(0L, json["node_id"].GetInt32());
                Assert.Equal(1L, json["round"].GetInt32());
                Assert.Equal(0L, json["height"].GetInt32());
                Assert.Equal("DefaultState", json["step"].GetString());
            }
            finally
            {
                reactor.Dispose();
            }
        }

        [Fact(Timeout = Timeout)]
        public async void Propose()
        {
            const int count = 4;
            // INFO : This test uses local ports 6000 to 6003.
            const int startPort = 6000;

            const int propagationDelay = 4000;
            var keys = new PrivateKey[count];
            var tables = new RoutingTable[count];
            var reactors = new IReactor[count];
            var validators = new List<PublicKey>();
            var stores = new IStore[count];
            var blockChains = new BlockChain<DumbAction>[count];

            for (var i = 0; i < count; i++)
            {
                keys[i] = new PrivateKey();
                tables[i] = new RoutingTable(keys[i].ToAddress());
                validators.Add(keys[i].PublicKey);
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
                reactors[i] = CreateReactor(
                    blockChain: blockChains[i],
                    key: keys[i],
                    table: tables[i],
                    port: startPort + i,
                    id: i,
                    validators: validators);
            }

            try
            {
                foreach (var reactor in reactors)
                {
                    await reactor.StartAsync(default);
                }

                for (var i = 0; i < count; i++)
                {
                    for (var j = 0; j < count; j++)
                    {
                        if (i == j)
                        {
                            continue;
                        }

                        tables[i].AddPeer(
                            new BoundPeer(
                                keys[j].PublicKey,
                                new DnsEndPoint("localhost", startPort + j)));
                    }
                }

                Dictionary<string, JsonElement> json;

                for (var proposeNode = 0; proposeNode < count; proposeNode++)
                {
                    Block<DumbAction> block = await blockChains[proposeNode].MineBlock(
                        keys[proposeNode],
                        append: false);

                    stores[proposeNode].PutBlock(block);

                    reactors[proposeNode].Propose(block.Hash);

                    // For test accuracy, this test should not run in parallel.
                    Thread.Sleep(propagationDelay);
                    var isPolka = new bool[count];

                    for (var node = 0; node < count; ++node)
                    {
                        json =
                            JsonSerializer.Deserialize<Dictionary<string, JsonElement>>(
                                reactors[node].ToString());

                        if (json["step"].GetString() == "DefaultState" &&
                            json["height"].GetInt32() == proposeNode + 1)
                        {
                            isPolka[node] = true;
                        }
                        else
                        {
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
                        Assert.Equal(proposeNode + 1, json["height"].GetInt32());
                        Assert.Equal(0L, json["round"].GetInt32());
                        Assert.Equal("DefaultState", json["step"].GetString());
                    }
                }
            }
            finally
            {
                foreach (var reactor in reactors)
                {
                    await reactor.StopAsync(default);
                    reactor.Dispose();
                }
            }
        }
    }
}
