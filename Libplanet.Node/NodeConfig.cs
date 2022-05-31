using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Crypto;
using Libplanet.Net;
using Libplanet.Store;

namespace Libplanet.Node
{
    /// <summary>
    /// A node configuration.  Largely comprised of two sub-configurations
    /// <see cref="Node.NetworkConfig{T}"/> and <see cref="Node.SwarmConfig"/>.
    /// </summary>
    /// <typeparam name="T">An <see cref="IAction"/> type.  It should match to
    /// <see cref="BlockChain{T}"/> and <see cref="Swarm{T}"/>.</typeparam>
    /// <seealso cref="Node.NetworkConfig{T}"/>
    /// <seealso cref="Node.SwarmConfig"/>
    public sealed class NodeConfig<T>
        where T : IAction, new()
    {
        /// <summary>
        /// The <see cref="PrivateKey"/> used for defining the identity of a <see cref="Swarm{T}"/>.
        /// </summary>
        private PrivateKey _privateKey;

        /// <summary>
        /// Initialize a <see cref="NodeConfig{T}"/> instance.
        /// </summary>
        /// <param name="privateKey">The <see cref="PrivateKey"/> to use to initialize
        /// a <see cref="Swarm{T}"/> instance.  This determines the identity of a node
        /// on the network.</param>
        /// <param name="networkConfig">The <see cref="Node.NetworkConfig{T}"/> to use.</param>
        /// <param name="swarmConfig">The <see cref="Node.SwarmConfig"/> to use.</param>
        /// <param name="store">The <see cref="IStore"/> to use for storing chain data.</param>
        /// <param name="stateStore">The <see cref="IStateStore"/> to use for storing state data.
        /// </param>
        public NodeConfig(
            PrivateKey privateKey,
            NetworkConfig<T> networkConfig,
            SwarmConfig swarmConfig,
            IStore store,
            IStateStore stateStore)
        {
            _privateKey = privateKey;
            NetworkConfig = networkConfig;
            SwarmConfig = swarmConfig;
            Store = store;
            StateStore = stateStore;
        }

        /// <summary>
        /// The configuration of the network that a <see cref="Swarm{T}"/> will participate in.
        /// </summary>
        public NetworkConfig<T> NetworkConfig { get; private set; }

        /// <summary>
        /// The configuration for the behavior of a <see cref="Swarm{T}"/>.
        /// </summary>
        public SwarmConfig SwarmConfig { get; private set; }

        /// <summary>
        /// The <see cref="IStore"/> for storing chain data.
        /// </summary>
        public IStore Store { get; private set; }

        /// <summary>
        /// The <see cref="IStateStore"/> for storing state data.
        /// </summary>
        public IStateStore StateStore { get; private set; }

        /// <summary>
        /// Creates a new <see cref="BlockChain{T}"/> instance.
        /// </summary>
        /// <returns>A new <see cref="BlockChain{T}"/> instance.</returns>
        public BlockChain<T> GetBlockChain()
        {
            return new BlockChain<T>(
                policy: NetworkConfig.BlockPolicy,
                stagePolicy: NetworkConfig.StagePolicy,
                genesisBlock: NetworkConfig.GenesisBlock,
                store: Store,
                stateStore: StateStore);
        }

        /// <summary>
        /// Creates a new <see cref="Swarm{T}"/> instance.
        /// </summary>
        /// <returns>A new <see cref="Swarm{T}"/> instance.</returns>
        public Swarm<T> GetSwarm()
        {
            BlockChain<T> blockChain = GetBlockChain();
#pragma warning disable MEN002
            return new Swarm<T>(
                privateKey: _privateKey,
                blockChain: blockChain,
                appProtocolVersion: NetworkConfig.AppProtocolVersion,
                trustedAppProtocolVersionSigners: NetworkConfig.TrustedAppProtocolVersionSigners,
                differentAppProtocolVersionEncountered: NetworkConfig.DifferentAppProtocolVersionEncountered,
                host: SwarmConfig.InitConfig.Host,
                listenPort: SwarmConfig.InitConfig.Port,
                iceServers: SwarmConfig.InitConfig.IceServers,
                options: SwarmConfig.ToSwarmOptions());
#pragma warning restore MEN002
        }
    }
}
