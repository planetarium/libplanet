using System.Collections.Generic;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Net;
using Libplanet.Store;
using Libplanet.Store.Trie;

namespace Libplanet.Node
{
    /// <summary>
    /// A network configuration.
    /// </summary>
    /// <typeparam name="T">An <see cref="IAction"/> type.  It should match to
    /// <seealso cref="BlockChain{T}"/> and <see cref="Swarm{T}"/>.</typeparam>
    public sealed class NetworkConfiguration<T>
        where T : IAction, new()
    {
        /// <summary>
        /// The default private key used for mining the development-purpose genesis block.
        /// Never use this key for the mainnet genesis.
        /// </summary>
        public static readonly PrivateKey DefaultGenesisMinerKey = new PrivateKey();

        /// <summary>
        /// Initializes a <see cref="NetworkConfiguration{T}"/> instance.
        /// </summary>
        public NetworkConfiguration()
        {
            DifferentAppProtocolVersionEncountered = (peer, peerVersion, localVersion) => { };
            BlockPolicy = new BlockPolicy<T>();
            StagePolicy = new VolatileStagePolicy<T>();
            GenesisBlock = new BlockContent<T>()
                .Mine(BlockPolicy.GetHashAlgorithm(0))
                .Evaluate(
                    DefaultGenesisMinerKey,
                    BlockPolicy.BlockAction,
                    new TrieStateStore(new MemoryKeyValueStore())
                );
        }

        /// <summary>
        /// The application protocol version to comply.
        /// </summary>
        public AppProtocolVersion AppProtocolVersion { get; set; }

        /// <summary>
        /// <see cref="PublicKey"/>s of parties who signed <see cref="AppProtocolVersion"/>s to
        /// trust.  To trust any party, set this to <see langword="null"/>, which is the default.
        /// </summary>
        public ISet<PublicKey>? TrustedAppProtocolVersionSigners { get; set; }

        /// <summary>
        /// An event triggered when a node encounters a peer with one different from
        /// <see cref="AppProtocolVersion"/>, and their version is signed by a trusted party (i.e.,
        /// <see cref="TrustedAppProtocolVersionSigners"/>).
        /// </summary>
        public DifferentAppProtocolVersionEncountered
        DifferentAppProtocolVersionEncountered { get; set; }

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
        /// The genesis block of the network.  It's an automatically mined arbitrary block by
        /// default, but never use it without change for the mainnet.
        /// </summary>
        public Block<T> GenesisBlock { get; set; }
    }
}
