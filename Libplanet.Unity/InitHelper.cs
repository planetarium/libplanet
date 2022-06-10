using System.IO;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Node;
using Libplanet.Unity;
using Libplanet.Store;

namespace Libplanet.Unity
{
    /// <summary>
    /// T.
    /// </summary>
    public static class InitHelper
    {
        /// <summary>
        /// T.
        /// </summary>
        /// <param name="path">T.</param>
        public static SwarmConfig GetSwarmConfig(string path)
        {
            if (!File.Exists(path))
            {
                throw new FileNotFoundException(
                    $"File not found for {nameof(SwarmConfig)}.", path);
            }

            return SwarmConfig.FromJson(File.ReadAllText(path));
        }

        /// <summary>
        /// T.
        /// </summary>
        /// <param name="path">T.</param>
        public static Block<PolymorphicAction<ActionBase>> GetGenesisBlock(string path)
        {
            if (!File.Exists(Paths.GenesisBlockPath))
            {
                throw new FileNotFoundException(
                    $"File not found for genesis block.", path);
            }

            return NodeUtils<PolymorphicAction<ActionBase>>.LoadGenesisBlock(path);
        }

        /// <summary>
        /// T.
        /// </summary>
        /// <param name="path">T.</param>
        public static PrivateKey GetPrivateKey(string path)
        {
            if (!File.Exists(path))
            {
                Utils.CreatePrivateKey(path);
            }

            return NodeUtils<PolymorphicAction<ActionBase>>.LoadPrivateKey(path);
        }

        /// <summary>
        /// T.
        /// </summary>
        /// <param name="path">T.</param>
        public static (IStore store, IStateStore stateStore) GetStore(string path)
        {
            return NodeUtils<PolymorphicAction<ActionBase>>.LoadStore(path);
        }
    }
}
