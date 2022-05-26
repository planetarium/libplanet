using System;
using System.Collections.Generic;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Net;
using Libplanet.Store;
using Serilog;
using static Libplanet.Store.StoreLoaderAttribute;

namespace Libplanet.Node
{
    /// <summary>
    /// A node configuration.
    /// </summary>
    /// <typeparam name="T">An <see cref="IAction"/> type.  It should match to
    /// <seealso cref="BlockChain{T}"/> and <see cref="Swarm{T}"/>.</typeparam>
    public sealed class NodeConfiguration<T>
        where T : IAction, new()
    {
        /// <summary>
        /// The configuration of the network that the node will participate in.
        /// </summary>
        public NetworkConfiguration<T> NetworkConfiguration { get; set; } =
            new NetworkConfiguration<T>();

        /// <summary>
        /// The private key used for identifying the node, mining and signing blocks.
        /// </summary>
        public PrivateKey PrivateKey { get; set; } = new PrivateKey();

        /// <summary>
        /// The hostname to be a part of the public endpoint, that peers use when they connect to
        /// this node.  Note that this is not a hostname to listen to; <see cref="Swarm{T}"/> always
        /// listens to <c>0.0.0.0</c> &amp; <c>::/0</c>.
        /// </summary>
        public string? Host { get; set; }

        /// <summary>
        /// A port number to listen to.
        /// </summary>
        public int? ListenPort { get; set; }

        /// <summary>
        /// <a href="https://en.wikipedia.org/wiki/Interactive_Connectivity_Establishment">ICE</a>
        /// servers to use for TURN/STUN.  Purposes to traverse NAT.
        /// </summary>
        public IList<IceServer> IceServers { get; set; } = Array.Empty<IceServer>();

        /// <summary>
        /// The number of concurrent workers for networking.
        /// </summary>
        public int Workers { get; set; } = 256;

        /// <summary>
        /// The URI referring to the local persistent store where in the <see cref="BlockChain{T}"/>
        /// data is placed.
        /// </summary>
        public Uri StoreUri { get; set; } = new Uri("memory:");

        /// <summary>
        /// Customizes the <see cref="SwarmOptions"/>.
        /// </summary>
        public SwarmOptions SwarmOptions { get; set; } = new SwarmOptions();

        /// <summary>
        /// Creates a new <see cref="BlockChain{T}"/> instance.
        /// </summary>
        /// <returns>A new <see cref="BlockChain{T}"/> instance.</returns>
        public BlockChain<T> GetBlockChain()
        {
            if (!(LoadStore(StoreUri) is (IStore store, IStateStore stateStore)))
            {
                throw new InvalidOperationException(
                    $"Failed to instantiate {nameof(IStore)} and {nameof(IStateStore)} " +
                    $"objects from a specified store URI: {StoreUri}"
                );
            }

            Block<T> genesis = NetworkConfiguration.GenesisBlock;
            if (genesis.Miner.Equals(NetworkConfiguration<T>.DefaultGenesisMinerKey.ToAddress()))
            {
                Log.ForContext<NetworkConfiguration<T>>().Warning(
                    "The configured genesis block #{BlockIndex} {BlockHash} is an " +
                    "arbitrary block which is automatically mined by Libplanet for the sake of " +
                    "your initial development and experiments.  Never use this one for your " +
                    "mainnet, and you must mine another block with your own private key for " +
                    "your mainnet.",
                    genesis.Index,
                    genesis.Hash
                );
            }

            return new BlockChain<T>(
                NetworkConfiguration.BlockPolicy,
                NetworkConfiguration.StagePolicy,
                store,
                stateStore,
                genesis
            );
        }

        /// <summary>
        /// Creates a new <see cref="Swarm{T}"/> instance.
        /// </summary>
        /// <returns>A new <see cref="Swarm{T}"/> instance.</returns>
        public Swarm<T> GetSwarm()
        {
            BlockChain<T> blockChain = GetBlockChain();
            return new Swarm<T>(
                blockChain,
                PrivateKey,
                NetworkConfiguration.AppProtocolVersion,
                Workers,
                Host,
                ListenPort,
                IceServers,
                NetworkConfiguration.DifferentAppProtocolVersionEncountered,
                NetworkConfiguration.TrustedAppProtocolVersionSigners,
                SwarmOptions);
        }
    }
}
