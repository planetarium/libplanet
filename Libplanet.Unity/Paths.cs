using System.IO;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Node;
using UnityEngine;

namespace Libplanet.Unity
{
    /// <summary>
    /// File paths for various persistent data.
    /// </summary>
    public static class Paths
    {
        /// <summary>
        /// File path for saving a genesis <see cref="Block{T}"/>.
        /// </summary>
        public static readonly string GenesisBlockPath =
            Path.Combine(Application.streamingAssetsPath, "genesis");

        /// <summary>
        /// File path for saving a <see cref="SwarmConfig"/>.
        /// </summary>
        public static readonly string SwarmConfigPath =
            Path.Combine(Application.streamingAssetsPath, "swarm_config.json");

        /// <summary>
        /// File path for saving chain data.
        /// </summary>
        public static readonly string StorePath =
            Path.Combine(Application.persistentDataPath, "store");

        /// <summary>
        /// File path for saving a <see cref="PrivateKey"/>.
        /// </summary>
        public static readonly string PrivateKeyPath =
            Path.Combine(Application.persistentDataPath, "private_key");
    }
}
