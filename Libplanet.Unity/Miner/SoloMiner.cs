using System.Threading.Tasks;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blocks;
using Libplanet.Crypto;

namespace Libplanet.Unity.Miner
{
    /// <summary>
    /// Agent.
    /// </summary>
    /// <typeparam name="T">The type.</typeparam>
    public class SoloMiner<T> : BaseMiner<T>
        where T : IAction, new()
    {
        /// <summary>
        /// Agent.
        /// </summary>
        /// <param name="blockChain">A.</param>
        /// <param name="privateKey">Ad.</param>
        /// <param name="onMineListener">As.</param>
        public SoloMiner(
            BlockChain<T> blockChain,
            PrivateKey privateKey,
            IMineListener<T> onMineListener)
            : base(blockChain, privateKey, onMineListener)
        {
        }

        /// <summary>
        /// Agent.
        /// </summary>
        /// <returns>a.</returns>
        protected override Task<Block<T>> Mine()
        {
            var task = Task.Run(async () =>
            {
                var block = await BlockChain.MineBlock(PrivateKey);

                return block;
            });
            return task;
        }
    }
}
