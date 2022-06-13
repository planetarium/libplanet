using System.IO;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Node;
using UnityEngine;

namespace Libplanet.Unity
{
    /// <summary>
    /// Various file paths for storing persistent data.
    /// </summary>
    public static class Paths
    {
        /// <summary>
        /// Path to storing a genesis <see cref="Block{T}"/>.
        /// </summary>
        public static readonly string GenesisBlockPath =
            Path.Combine(Application.streamingAssetsPath, "genesis");

        /// <summary>
        /// Path to storing a <see cref="SwarmConfig"/>.
        /// </summary>
        public static readonly string SwarmConfigPath =
            Path.Combine(Application.streamingAssetsPath, "swarm_config.json");

        /// <summary>
        /// Path to storing chain data.
        /// </summary>
        public static readonly string StorePath =
            Path.Combine(Application.persistentDataPath, "store");

        /// <summary>
        /// Path to storing a <see cref="PrivateKey"/>.
        /// </summary>
        public static readonly string PrivateKeyPath =
            Path.Combine(Application.persistentDataPath, "private_key");

        /// <summary>
        /// Path to storing temporary <see cref="PrivateKey"/>s with memos.
        /// </summary>
        public static readonly string TempPrivateKeysPath =
            Path.Combine(Application.temporaryCachePath, "temp_private_keys");
    }
}
