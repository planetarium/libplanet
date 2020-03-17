using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Net;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Store;
using Serilog;

namespace Libplanet.Tests.Net
{
    public partial class SwarmTest
    {
        private static Block<DumbAction>[] _fixtureBlocksForPreloadAsyncCancellationTest;

        private readonly StoreFixture _fx1;
        private readonly StoreFixture _fx2;
        private readonly StoreFixture _fx3;
        private readonly StoreFixture _fx4;

        private readonly List<BlockChain<DumbAction>> _blockchains;
        private readonly List<Swarm<DumbAction>> _swarms;

        private static async Task<(Address, Block<DumbAction>[])>
            MakeFixtureBlocksForPreloadAsyncCancellationTest()
        {
            Block<DumbAction>[] blocks = _fixtureBlocksForPreloadAsyncCancellationTest;

            if (blocks is null)
            {
                var policy = new BlockPolicy<DumbAction>(new MinerReward(1));
                using (var storeFx = new DefaultStoreFixture(memory: true))
                {
                    var chain = TestUtils.MakeBlockChain(policy, storeFx.Store);
                    Address miner = new PrivateKey().ToAddress();
                    var signer = new PrivateKey();
                    Address address = signer.ToAddress();
                    Log.Logger.Information("Fixture blocks:");
                    for (int i = 0; i < 20; i++)
                    {
                        for (int j = 0; j < 5; j++)
                        {
                            chain.MakeTransaction(
                                signer,
                                new[] { new DumbAction(address, $"Item{i}.{j}", idempotent: true) }
                            );
                        }

                        Block<DumbAction> block = await chain.MineBlock(miner);
                        Log.Logger.Information("  #{0,2} {1}", block.Index, block.Hash);
                    }

                    var blockList = new List<Block<DumbAction>>();
                    for (var i = 1; i < chain.Count; i++)
                    {
                        Block<DumbAction> block = chain[i];
                        blockList.Add(block);
                    }

                    blocks = blockList.ToArray();

                    _fixtureBlocksForPreloadAsyncCancellationTest = blocks;
                }
            }

            return (blocks[1].Transactions.First().Actions.First().TargetAddress, blocks);
        }

        private Swarm<T> CreateSwarm<T>(
            BlockChain<T> blockChain,
            PrivateKey privateKey = null,
            AppProtocolVersion? appProtocolVersion = null,
            int? tableSize = null,
            int? bucketSize = null,
            string host = null,
            int? listenPort = null,
            DateTimeOffset? createdAt = null,
            IEnumerable<IceServer> iceServers = null,
            DifferentAppProtocolVersionEncountered differentAppProtocolVersionEncountered = null,
            IEnumerable<PublicKey> trustedAppProtocolVersionSigners = null
        )
            where T : IAction, new()
        {
            if (host is null && !(iceServers?.Any() ?? false))
            {
                host = IPAddress.Loopback.ToString();
            }

            return new Swarm<T>(
                blockChain,
                privateKey ?? new PrivateKey(),
                appProtocolVersion ?? DefaultAppProtocolVersion,
                tableSize,
                bucketSize,
                5,
                host,
                listenPort,
                createdAt,
                iceServers,
                differentAppProtocolVersionEncountered,
                trustedAppProtocolVersionSigners);
        }
    }
}
