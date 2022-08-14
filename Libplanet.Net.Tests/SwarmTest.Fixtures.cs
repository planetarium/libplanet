#nullable disable
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Net.Consensus;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Store;
using Serilog;
using static Libplanet.Tests.TestUtils;

namespace Libplanet.Net.Tests
{
    public partial class SwarmTest
    {
        private static Block<DumbAction>[] _fixtureBlocksForPreloadAsyncCancellationTest;

        private readonly List<Func<Task>> _finalizers;

        private static async Task<(Address, Block<DumbAction>[])>
            MakeFixtureBlocksForPreloadAsyncCancellationTest()
        {
            Block<DumbAction>[] blocks = _fixtureBlocksForPreloadAsyncCancellationTest;

            if (blocks is null)
            {
                var policy = new BlockPolicy<DumbAction>(new MinerReward(1));
                using (var storeFx = new MemoryStoreFixture())
                {
                    var chain = MakeBlockChain(policy, storeFx.Store, storeFx.StateStore);
                    var miner = new PrivateKey();
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

            return (blocks[1].Transactions.First().CustomActions.First().TargetAddress, blocks);
        }

        private Swarm<DumbAction> CreateSwarm(
            PrivateKey privateKey = null,
            PrivateKey consensusPrivateKey = null,
            AppProtocolVersion? appProtocolVersion = null,
            string host = null,
            int? listenPort = null,
            IEnumerable<IceServer> iceServers = null,
            DifferentAppProtocolVersionEncountered differentAppProtocolVersionEncountered = null,
            IEnumerable<PublicKey> trustedAppProtocolVersionSigners = null,
            SwarmOptions options = null,
            IBlockPolicy<DumbAction> policy = null,
            Block<DumbAction> genesis = null,
            ConsensusReactorOption? consensusReactorOption = null)
        {
            policy = policy ?? new BlockPolicy<DumbAction>(new MinerReward(1));
            var fx = new MemoryStoreFixture(policy.BlockAction);
            var blockchain = MakeBlockChain(
                policy,
                fx.Store,
                fx.StateStore,
                genesisBlock: genesis
            );
            return CreateSwarm(
                blockchain,
                privateKey,
                appProtocolVersion,
                host,
                listenPort,
                iceServers,
                differentAppProtocolVersionEncountered,
                trustedAppProtocolVersionSigners,
                options,
                consensusReactorOption: consensusReactorOption);
        }

        private Swarm<T> CreateSwarm<T>(
            BlockChain<T> blockChain,
            PrivateKey privateKey = null,
            AppProtocolVersion? appProtocolVersion = null,
            string host = null,
            int? listenPort = null,
            IEnumerable<IceServer> iceServers = null,
            DifferentAppProtocolVersionEncountered differentAppProtocolVersionEncountered = null,
            IEnumerable<PublicKey> trustedAppProtocolVersionSigners = null,
            SwarmOptions options = null,
            ConsensusReactorOption? consensusReactorOption = null
        )
            where T : IAction, new()
        {
            if (host is null && !(iceServers?.Any() ?? false))
            {
                host = IPAddress.Loopback.ToString();
            }

            options ??= new SwarmOptions();
            privateKey ??= new PrivateKey();

            var swarm = new Swarm<T>(
                blockChain,
                privateKey,
                appProtocolVersion ?? DefaultAppProtocolVersion,
                workers: 5,
                host: host,
                listenPort: listenPort,
                iceServers: iceServers,
                differentAppProtocolVersionEncountered: differentAppProtocolVersionEncountered,
                trustedAppProtocolVersionSigners: trustedAppProtocolVersionSigners,
                options: options,
                consensusOption: consensusReactorOption ?? new ConsensusReactorOption
                {
                    ConsensusPeers = ImmutableList<BoundPeer>.Empty,
                    ConsensusPort = 5000,
                    ConsensusPrivateKey = new PrivateKey(),
                    ConsensusWorkers = 100,
                    TargetBlockInterval = TimeSpan.FromSeconds(10),
                });
            _finalizers.Add(async () =>
            {
                try
                {
                    await StopAsync(swarm);
                    swarm.Dispose();
                }
                catch (ObjectDisposedException)
                {
                    _logger.Debug("Swarm {Swarm} is already disposed.", swarm);
                }
            });
            return swarm;
        }
    }
}
