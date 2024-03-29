#nullable disable
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Libplanet.Action.Loader;
using Libplanet.Action.Tests.Common;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Crypto;
using Libplanet.Net.Consensus;
using Libplanet.Net.Options;
using Libplanet.Net.Transports;
using Libplanet.Tests.Store;
using Libplanet.Types.Blocks;
using Serilog;
using static Libplanet.Tests.TestUtils;

namespace Libplanet.Net.Tests
{
    public partial class SwarmTest
    {
        private static Block[] _fixtureBlocksForPreloadAsyncCancellationTest;

        private readonly List<Func<Task>> _finalizers;

        private static (Address, Block[])
            MakeFixtureBlocksForPreloadAsyncCancellationTest()
        {
            Block[] blocks = _fixtureBlocksForPreloadAsyncCancellationTest;

            if (blocks is null)
            {
                var policy = new BlockPolicy(new MinerReward(1));
                using (var storeFx = new MemoryStoreFixture())
                {
                    var chain =
                        MakeBlockChain(
                            policy,
                            storeFx.Store,
                            storeFx.StateStore,
                            new SingleActionLoader(typeof(DumbAction)));
                    var miner = new PrivateKey();
                    var signer = new PrivateKey();
                    Address address = signer.Address;
                    Log.Logger.Information("Fixture blocks:");
                    for (int i = 0; i < 20; i++)
                    {
                        for (int j = 0; j < 5; j++)
                        {
                            chain.MakeTransaction(
                                signer,
                                new[] { new DumbAction(address, $"Item{i}.{j}") }
                            );
                        }

                        Block block = chain.ProposeBlock(
                            miner, CreateBlockCommit(chain.Tip));
                        Log.Logger.Information("  #{0,2} {1}", block.Index, block.Hash);
                        chain.Append(block, CreateBlockCommit(block));
                    }

                    var blockList = new List<Block>();
                    for (var i = 1; i < chain.Count; i++)
                    {
                        Block block = chain[i];
                        blockList.Add(block);
                    }

                    blocks = blockList.ToArray();

                    _fixtureBlocksForPreloadAsyncCancellationTest = blocks;
                }
            }

            var action = new DumbAction();
            action.LoadPlainValue(blocks[1].Transactions.First().Actions.First());
            return (action.TargetAddress, blocks);
        }

        private Task<Swarm> CreateConsensusSwarm(
            PrivateKey privateKey = null,
            AppProtocolVersionOptions appProtocolVersionOptions = null,
            HostOptions hostOptions = null,
            SwarmOptions options = null,
            IBlockPolicy policy = null,
            Block genesis = null,
            ConsensusReactorOption? consensusReactorOption = null)
        {
            return CreateSwarm(
                privateKey,
                appProtocolVersionOptions,
                hostOptions,
                options,
                policy,
                genesis,
                consensusReactorOption ?? new ConsensusReactorOption
            {
                SeedPeers = ImmutableList<BoundPeer>.Empty,
                ConsensusPeers = ImmutableList<BoundPeer>.Empty,
                ConsensusPort = 0,
                ConsensusPrivateKey = new PrivateKey(),
                ConsensusWorkers = 100,
                TargetBlockInterval = TimeSpan.FromSeconds(10),
            });
        }

        private async Task<Swarm> CreateSwarm(
            PrivateKey privateKey = null,
            AppProtocolVersionOptions appProtocolVersionOptions = null,
            HostOptions hostOptions = null,
            SwarmOptions options = null,
            IBlockPolicy policy = null,
            Block genesis = null,
            ConsensusReactorOption? consensusReactorOption = null)
        {
            policy = policy ?? new BlockPolicy(new MinerReward(1));
            var fx = new MemoryStoreFixture(policy.BlockAction);
            var blockchain = MakeBlockChain(
                policy,
                fx.Store,
                fx.StateStore,
                new SingleActionLoader(typeof(DumbAction)),
                genesisBlock: genesis
            );
            appProtocolVersionOptions ??= new AppProtocolVersionOptions();
            hostOptions ??= new HostOptions(IPAddress.Loopback.ToString(), new IceServer[] { });

            return await CreateSwarm(
                blockchain,
                privateKey,
                appProtocolVersionOptions,
                hostOptions,
                options,
                consensusReactorOption: consensusReactorOption);
        }

        private async Task<Swarm> CreateSwarm(
            BlockChain blockChain,
            PrivateKey privateKey = null,
            AppProtocolVersionOptions appProtocolVersionOptions = null,
            HostOptions hostOptions = null,
            SwarmOptions options = null,
            ConsensusReactorOption? consensusReactorOption = null
        )
        {
            appProtocolVersionOptions ??= new AppProtocolVersionOptions();
            hostOptions ??= new HostOptions(IPAddress.Loopback.ToString(), new IceServer[] { });
            options ??= new SwarmOptions();
            privateKey ??= new PrivateKey();
            var transport = await NetMQTransport.Create(
                privateKey,
                appProtocolVersionOptions,
                hostOptions,
                options.MessageTimestampBuffer);
            ITransport consensusTransport = null;
            if (consensusReactorOption is { } option)
            {
                var consensusHostOptions = new HostOptions(
                    hostOptions.Host,
                    hostOptions.IceServers,
                    option.ConsensusPort);
                consensusTransport = await NetMQTransport.Create(
                    privateKey,
                    appProtocolVersionOptions,
                    consensusHostOptions,
                    options.MessageTimestampBuffer);
            }

            var swarm = new Swarm(
                blockChain,
                privateKey,
                transport,
                options,
                consensusTransport: consensusTransport,
                consensusOption: consensusReactorOption);
            _finalizers.Add(async () =>
            {
                try
                {
                    await StopAsync(swarm);
                    swarm.Dispose();
                }
                catch (ObjectDisposedException)
                {
                    _logger.Debug("Swarm {Swarm} is already disposed", swarm);
                }
            });
            return swarm;
        }
    }
}
