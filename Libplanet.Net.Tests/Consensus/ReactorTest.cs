using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text.Json;
using System.Threading.Tasks;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;
using Libplanet.Consensus;
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
            RoutingTable? swarmTable = null,
            RoutingTable? consensusTable = null,
            string host = "localhost",
            int swarmPort = 5001,
            int consensusPort = 5101,
            long id = 0,
            List<PublicKey> validators = null!);

        public abstract ConsensusReactor<DumbAction> CreateConcreteReactor(
            BlockChain<DumbAction> blockChain,
            PrivateKey? key = null,
            RoutingTable? swarmTable = null,
            RoutingTable? consensusTable = null,
            string host = "localhost",
            int swarmPort = 5001,
            int consensusPort = 5101,
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
            var reactor = CreateReactor(
                blockChain,
                key,
                swarmPort: 11001,
                consensusPort: 11101,
                validators: validators);

            try
            {
                reactor.Propose(_fx.Block1.Hash);
                _fx.Store.PutBlock(_fx.Block1);
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
                    await Task.Delay(yieldTime);

                    json =
                        JsonSerializer.Deserialize<Dictionary<string, JsonElement>>(
                            reactor.ToString());
                }

                Assert.Equal(0L, json["node_id"].GetInt32());
                Assert.Equal(0L, json["round"].GetInt32());
                Assert.Equal(0L, json["height"].GetInt32());
                Assert.Equal("PreCommitState", json["step"].GetString());

                await Task.Delay((int)ConsensusContext<DumbAction>.TimeoutMillisecond);

                json =
                    JsonSerializer.Deserialize<Dictionary<string, JsonElement>>(
                        reactor.ToString());

                if (json["step"].GetString() != "DefaultState")
                {
                    await Task.Delay(yieldTime);

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
            // INFO : This test uses local ports 6000 to 6003, 6100 to 6103.
            const int swarmPort = 6000;
            const int consensusPort = 6100;

            const int propagationDelay = 4000;
            var keys = new PrivateKey[count];
            var consensusTables = new RoutingTable[count];
            var reactors = new IReactor[count];
            var validators = new List<PublicKey>();
            var stores = new IStore[count];
            var blockChains = new BlockChain<DumbAction>[count];

            for (var i = 0; i < count; i++)
            {
                keys[i] = new PrivateKey();
                consensusTables[i] = new RoutingTable(keys[i].ToAddress());
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
                    consensusTable: consensusTables[i],
                    swarmPort: swarmPort + i,
                    consensusPort: consensusPort + i,
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

                        consensusTables[i].AddPeer(
                            new BoundPeer(
                                keys[j].PublicKey,
                                new DnsEndPoint("localhost", consensusPort + j)));
                    }
                }

                Dictionary<string, JsonElement> json;

                for (var proposeNode = 0; proposeNode < count; proposeNode++)
                {
                    Block<DumbAction> block = await blockChains[proposeNode].MineBlock(
                        keys[proposeNode],
                        append: false);

                    foreach (var store in stores)
                    {
                        store.PutBlock(block);
                    }

                    reactors[proposeNode].Propose(block.Hash);

                    // For test accuracy, this test should not run in parallel.
                    await Task.Delay(propagationDelay);
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
                        VoteSet? voteSet = reactors[node].VoteSetOf(proposeNode);
                        if (voteSet is null)
                        {
                            Assert.NotNull(voteSet);
                        }
                        else
                        {
                            Assert.Equal(proposeNode, voteSet.Height);
                            int a = voteSet.Votes.Count(v => v.Flag == VoteFlag.Commit);
                            int b = count / 3 * 2;
                            Assert.True(a >= b, $"Commit count: {a}, TwoThirds: {b}");
                        }
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

        [Fact(Timeout = Timeout)]
        public async void VoteHoldingIfBlockNotPresent()
        {
            const int count = 4;
            // INFO : This test uses local ports 7000 to 7003, 7100 to 7103.
            const int swarmPort = 7000;
            const int consensusPort = 7100;
            const int propagationDelay = 4000;

            var keys = new PrivateKey[count];
            var consensusTables = new RoutingTable[count];
            var reactors = new ConsensusReactor<DumbAction>[count];
            var validators = new List<PublicKey>();
            var stores = new IStore[count];
            var blockChains = new BlockChain<DumbAction>[count];

            for (var i = 0; i < count; i++)
            {
                keys[i] = new PrivateKey();
                consensusTables[i] = new RoutingTable(keys[i].ToAddress());
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
                reactors[i] = CreateConcreteReactor(
                    blockChain: blockChains[i],
                    key: keys[i],
                    consensusTable: consensusTables[i],
                    swarmPort: swarmPort + i,
                    consensusPort: consensusPort + i,
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

                        consensusTables[i].AddPeer(
                            new BoundPeer(
                                keys[j].PublicKey,
                                new DnsEndPoint("localhost", consensusPort + j)));
                    }
                }

                Block<DumbAction> block = await blockChains[0].MineBlock(
                    keys[0],
                    append: false);

                stores[0].PutBlock(block);

                reactors[0].Propose(block.Hash);

                await Task.Delay(propagationDelay);

                Assert.False(reactors[0].GetVoteHoldingHandle.IsSet);

                for (var i = 1; i < count; ++i)
                {
                    Assert.True(reactors[i].GetVoteHoldingHandle.IsSet);
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

        [Fact]
        public async Task RecommitFailedBlockWoNet()
        {
            const int count = 4;
            // INFO : This test uses local ports 8000 to 8003, 8100 to 8103.
            const int swarmPort = 8000;
            const int consensusPort = 8100;

            var keys = new PrivateKey[count];
            var consensusTables = new RoutingTable[count];
            var reactors = new ConsensusReactor<DumbAction>[count];
            var validators = new List<PublicKey>();
            var stores = new IStore[count];
            var blockChains = new BlockChain<DumbAction>[count];

            for (var i = 0; i < count; i++)
            {
                keys[i] = new PrivateKey();
                consensusTables[i] = new RoutingTable(keys[i].ToAddress());
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
                reactors[i] = CreateConcreteReactor(
                    blockChain: blockChains[i],
                    key: keys[i],
                    consensusTable: consensusTables[i],
                    swarmPort: swarmPort + i,
                    consensusPort: consensusPort + i,
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

                        consensusTables[i].AddPeer(
                            new BoundPeer(
                                keys[j].PublicKey,
                                new DnsEndPoint("localhost", consensusPort + j)));
                    }
                }

                var proposeNode = 0;
                var recommitNode = 1;

                Dictionary<string, JsonElement> json;

                Block<DumbAction> block = await blockChains[proposeNode].MineBlock(
                    keys[0],
                    append: false);

                stores[proposeNode].PutBlock(block);
                stores[2].PutBlock(block);
                stores[3].PutBlock(block);
                reactors[proposeNode].Propose(block.Hash);

                await reactors[recommitNode].GetRecommitFailedHandle.WaitAsync();
                stores[recommitNode].PutBlock(block);

                await Task.Delay(((count - 1) * 1000) + 500);

                json =
                    JsonSerializer.Deserialize<Dictionary<string, JsonElement>>(
                        reactors[recommitNode].ToString());

                Assert.Equal(recommitNode, json["node_id"].GetInt32());
                Assert.Equal(1, json["height"].GetInt32());
                Assert.Equal(0L, json["round"].GetInt32());
                Assert.Equal("DefaultState", json["step"].GetString());
                VoteSet? voteSet = reactors[recommitNode].VoteSetOf(proposeNode);
                if (voteSet is null)
                {
                    Assert.NotNull(voteSet);
                }
                else
                {
                    Assert.Equal(proposeNode, voteSet.Height);
                    int a = voteSet.Votes.Count(v => v.Flag == VoteFlag.Commit);
                    int b = count / 3 * 2;
                    Assert.True(a >= b, $"Commit count: {a}, TwoThirds: {b}");
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

        // Non-null case is in Propose().
        [Fact]
        public void VoteSetOfNull()
        {
            var key1 = new PrivateKey();
            var key2 = new PrivateKey();
            var validators = new List<PublicKey>
            {
                key1.PublicKey,
                key2.PublicKey,
            };
            var blockChain = new BlockChain<DumbAction>(
                TestUtils.Policy,
                new VolatileStagePolicy<DumbAction>(),
                _fx.Store,
                _fx.StateStore,
                _fx.GenesisBlock);
            IReactor reactor = CreateReactor(
                blockChain,
                key1,
                swarmPort: 5123,
                consensusPort: 5124,
                validators: validators);
            Assert.Null(reactor.VoteSetOf(0));
        }
    }
}
