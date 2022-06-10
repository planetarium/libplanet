using System.IO;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Node;
using Libplanet.Unity.Action;

namespace LibplanetUnity
{
    /// <summary>
    /// Various helper methods for creating persistent data.
    /// </summary>
    public static class Utils
    {
        /// <summary>
        /// Creates a new <see cref="SwarmConfig"/> and writes to <paramref name="path"/>.
        /// If one already exists at <paramref name="path"/>, overwrites it.
        /// </summary>
        /// <param name="path">File path to save a <see cref="SwarmConfig"/>.</param>
        public static void CreateSwarmConfig(string path)
        {
            SwarmConfig swarmConfig = new SwarmConfig();
            File.Delete(path);
            File.WriteAllText(path, swarmConfig.ToJson());
        }

        /// <summary>
        /// Creates a new genesis <see cref="Block{T}"/> and writes to <paramref name="path"/>.
        /// If one already exists at <paramref name="path"/>, overwrites it.
        /// </summary>
        /// <param name="path">The path to save a genesis <see cref="Block{T}"/>.</param>
        public static void CreateGenesisBlock(string path)
        {
            Block<PolymorphicAction<ActionBase>> genesisBlock =
                NodeUtils<PolymorphicAction<ActionBase>>.CreateGenesisBlock();
            File.Delete(path);
            NodeUtils<PolymorphicAction<ActionBase>>.SaveGenesisBlock(path, genesisBlock);
        }

        /// <summary>
        /// Creates a new <see cref="PrivateKey"/> and writes to <paramref name="path"/>.
        /// If one already exists at <paramref name="path"/>, overwrites it.
        /// </summary>
        /// <param name="path">The path to save a <see cref="PrivateKey"/>.</param>
        public static void CreatePrivateKey(string path)
        {
            PrivateKey privateKey = new PrivateKey();
            File.Delete(path);
            NodeUtils<PolymorphicAction<ActionBase>>.SavePrivateKey(path, privateKey);
        }
    }
}
