using System.Collections.Generic;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Net;

namespace Libplanet.Node
{
    /// <summary>
    /// A network configuration.
    /// </summary>
    /// <typeparam name="T">An <see cref="IAction"/> type.  It should match to
    /// <seealso cref="BlockChain{T}"/> and <see cref="Swarm{T}"/>.</typeparam>
    public sealed class NetworkConfig<T>
        where T : IAction, new()
    {
        /// <summary>
        /// Initializes a <see cref="NetworkConfig{T}"/> instance using
        /// <see cref="NodeUtils{T}.DefaultBlockPolicy"/>
        /// and <see cref="NodeUtils{T}.DefaultStagePolicy"/>.
        /// An empty genesis <see cref="Block{T}"/> compliant with
        /// <see cref="NodeUtils{T}.DefaultBlockPolicy"/> is created and signed using
        /// an ephemeral <see cref="PrivateKey"/>.
        /// </summary>
        public NetworkConfig()
        {
            BlockPolicy = NodeUtils<T>.DefaultBlockPolicy;
            StagePolicy = NodeUtils<T>.DefaultStagePolicy;
            GenesisBlock = NodeUtils<T>.CreateGenesisBlock(new PrivateKey(), BlockPolicy);
        }

        /// <summary>
        /// Initializes a <see cref="NetworkConfig{T}"/> instance using
        /// <paramref name="blockPolicy"/>, <paramref name="stagePolicy"/>, and
        /// <paramref name="genesisBlock"/>.
        /// </summary>
        /// <param name="blockPolicy">The <see cref="IBlockPolicy{T}"/> to use.</param>
        /// <param name="stagePolicy">The <see cref="IStagePolicy{T}"/> to use.</param>
        /// <param name="genesisBlock">The <see cref="Block{T}"/> to use.</param>
        public NetworkConfig(
            IBlockPolicy<T> blockPolicy,
            IStagePolicy<T> stagePolicy,
            Block<T> genesisBlock)
        {
            BlockPolicy = blockPolicy;
            StagePolicy = stagePolicy;
            GenesisBlock = genesisBlock;
        }

        /// <summary>
        /// The application protocol version to comply.
        /// </summary>
        public AppProtocolVersion AppProtocolVersion { get; set; } = default;

        /// <summary>
        /// The set of <see cref="PublicKey"/>s to trust when a node encounters
        /// an <see cref="Libplanet.Net.AppProtocolVersion"/> that is different from
        /// <see cref="NetworkConfig{T}.AppProtocolVersion"/>.  To trust any party,
        /// set this to <see langword="null"/>.  Set to <see langword="null"/> by default.
        /// </summary>
        public ISet<PublicKey>? TrustedAppProtocolVersionSigners { get; set; } = null;

        /// <summary>
        /// The event triggered when a node encounters
        /// an <see cref="Libplanet.Net.AppProtocolVersion"/> that is different from
        /// <see cref="NetworkConfig{T}.AppProtocolVersion"/> that is signed by
        /// a <em>trusted party</em>, that is, one of
        /// <see cref="TrustedAppProtocolVersionSigners"/>.  Does nothing by default.
        /// </summary>
        public DifferentAppProtocolVersionEncountered
            DifferentAppProtocolVersionEncountered { get; set; } =
                (peer, peerVersion, localVersion) => { };

        /// <summary>
        /// The network's policy used to decide which blocks to accept.
        /// </summary>
        public IBlockPolicy<T> BlockPolicy { get; set; }

        /// <summary>
        /// The network's policy used to decide which transactions to accept and when to forget
        /// them.
        /// </summary>
        public IStagePolicy<T> StagePolicy { get; set; }

        /// <summary>
        /// The genesis <see cref="Block{T}"/> of the network.
        /// </summary>
        public Block<T> GenesisBlock { get; set; }
    }
}
