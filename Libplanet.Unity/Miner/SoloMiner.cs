using System.Threading.Tasks;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Net;

namespace Libplanet.Unity.Miner
{
    /// <summary>
    /// It is used for mining without <see cref="Swarm{T}"/>.
    /// </summary>
    /// <typeparam name="T"><see cref="BlockChain{T}"/> Action Type.</typeparam>
    public class SoloMiner<T> : BaseMiner<T>
        where T : IAction, new()
    {
        /// <summary>
        /// Initialize a <see cref="SoloMiner{T}"/> instance.
        /// </summary>
        /// <param name="blockChain">The <see cref="BlockChain{T}"/> to use.</param>
        /// <param name="privateKey">The <see cref="PrivateKey"/> to use.</param>
        /// <param name="onMineListener">The <see cref="IMineListener{T}"/> to use.</param>
        public SoloMiner(
            BlockChain<T> blockChain,
            PrivateKey privateKey,
            IMineListener<T> onMineListener)
            : base(blockChain, privateKey, onMineListener)
        {
        }

        /// <summary>
        /// Implementation for Solo Mining.
        /// </summary>
        /// <returns>Runned Task.</returns>
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
