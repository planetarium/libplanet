using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;
using Libplanet.Consensus;
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
            string host = "localhost",
            int consensusPort = 5101,
            long id = 0,
            List<PublicKey> validators = null!,
            List<BoundPeer> validatorPeers = null!);

        [Fact(Timeout = Timeout)]
        public async void Propose()
        {
            const int count = 4;
            // INFO : This test uses local ports 6100 to 6103.
            const int consensusPort = 6100;

            const int propagationDelay = 4000;
            var keys = new PrivateKey[count];
            var reactors = new IReactor[count];
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
                reactors[i] = CreateReactor(
                    blockChain: blockChains[i],
                    key: keys[i],
                    consensusPort: consensusPort + i,
                    id: i,
                    validators: validators,
                    validatorPeers: validatorPeers);
            }

            var reactorCtx = new CancellationTokenSource();
            try
            {
                foreach (var reactor in reactors)
                {
                    _ = reactor.StartAsync(reactorCtx.Token);
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

                    reactors[(proposeNode + 1) % count].Propose(block.Hash);

                    // For test accuracy, this test should not run in parallel.
                    await Task.Delay(propagationDelay);
                    var isPolka = new bool[count];

                    for (var node = 0; node < count; ++node)
                    {
                        json =
                            JsonSerializer.Deserialize<Dictionary<string, JsonElement>>(
                                reactors[node].ToString());

                        // Genesis block exists, add 1 to the height.
                        if (json["step"].GetString() == "DefaultState" &&
                            json["height"].GetInt32() == 1 + proposeNode + 1)
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
                        Assert.Equal(1 + proposeNode + 1, json["height"].GetInt32());
                        Assert.Equal(0L, json["round"].GetInt32());
                        Assert.Equal("DefaultState", json["step"].GetString());
                        VoteSet? voteSet = reactors[node].VoteSetOf(1 + proposeNode);
                        if (voteSet is null)
                        {
                            Assert.NotNull(voteSet);
                        }
                        else
                        {
                            Assert.Equal(1 + proposeNode, voteSet.Height);
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

                reactorCtx.Cancel();
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
            var validatorPeers = new List<BoundPeer>
            {
                new BoundPeer(key1.PublicKey, new DnsEndPoint("localhost", 1004)),
                new BoundPeer(key2.PublicKey, new DnsEndPoint("localhost", 1005)),
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
                consensusPort: 5124,
                validators: validators,
                validatorPeers: validatorPeers);
            Assert.Null(reactor.VoteSetOf(0));
        }
    }
}
