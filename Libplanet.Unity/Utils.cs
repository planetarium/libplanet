using System.IO;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Node;
using Libplanet.Store;
using Libplanet.Unity;

namespace Libplanet.Unity
{
    /// <summary>
    /// A static class with various helper methods for handling persistent data.
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

        /// <summary>
        /// Loads a <see cref="SwarmConfig"/> from <paramref name="path"/>.
        /// </summary>
        /// <param name="path">Path to a file containing a <see cref="SwarmConfig"/>.</param>
        /// <returns>A <see cref="SwarmConfig"/> loaded from <paramref name="path"/>.</returns>
        /// <exception cref="FileNotFoundException">If no file was found at
        /// <paramref name="path"/>.</exception>
        public static SwarmConfig LoadSwarmConfig(string path)
        {
            if (!File.Exists(path))
            {
                throw new FileNotFoundException(
                    $"File not found for {nameof(SwarmConfig)}.", path);
            }

            return SwarmConfig.FromJson(File.ReadAllText(path));
        }

        /// <summary>
        /// Loads a genesis <see cref="Block{T}"/> from <paramref name="path"/>.
        /// </summary>
        /// <param name="path">Path to a file containing a genesis <see cref="Block{T}"/>.</param>
        /// <returns>A genesis <see cref="Block{T}"/> loaded from <paramref name="path"/>.</returns>
        /// <exception cref="FileNotFoundException">If no file was found at
        /// <paramref name="path"/>.</exception>
        public static Block<PolymorphicAction<ActionBase>> LoadGenesisBlock(string path)
        {
            if (!File.Exists(Paths.GenesisBlockPath))
            {
                throw new FileNotFoundException(
                    $"File not found for genesis block.", path);
            }

            return NodeUtils<PolymorphicAction<ActionBase>>.LoadGenesisBlock(path);
        }

        /// <summary>
        /// Loads a <see cref="PrivateKey"/> from <paramref name="path"/>.
        /// </summary>
        /// <param name="path">Path to a file containing a <see cref="PrivateKey"/>.</param>
        /// <returns>A <see cref="PrivateKey"/> loaded from <paramref name="path"/>.</returns>
        /// <exception cref="FileNotFoundException">If no file was found at
        /// <paramref name="path"/>.</exception>
        public static PrivateKey LoadPrivateKey(string path)
        {
            if (!File.Exists(path))
            {
                throw new FileNotFoundException(
                    $"File not found for genesis block.", path);
            }

            return NodeUtils<PolymorphicAction<ActionBase>>.LoadPrivateKey(path);
        }

        /// <summary>
        /// Loads a pair of <see cref="IStore"/> and <see cref="IStateStore"/> from
        /// <paramref name="path"/>.
        /// </summary>
        /// <param name="path">The location of a directory containing <see cref="IStore"/>
        /// and <see cref="IStateStore"/>.</param>
        /// <returns>A pair of loaded <see cref="IStore"/> and <see cref="IStateStore"/> instances
        /// from <paramref name="path"/>.</returns>
        /// <remarks>
        /// Unlike other methods for loading, if stores are not found at <paramref name="path"/>,
        /// they are created silently.
        /// </remarks>
        public static (IStore Store, IStateStore StateStore) LoadStore(string path)
        {
            return NodeUtils<PolymorphicAction<ActionBase>>.LoadStore(path);
        }
    }
}
