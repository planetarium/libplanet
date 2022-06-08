using System.Threading.Tasks;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Net;

namespace Libplanet.Unity.Miner
{
    /// <summary>
    /// It is used for mining with <see cref="Swarm{T}"/>.
    /// </summary>
    /// <typeparam name="T"><see cref="BaseMiner{T}"/>'s chain Action Type.</typeparam>
    public class SwarmMiner<T> : BaseMiner<T>
        where T : IAction, new()
    {
        private Swarm<T> _swarm;

        /// <summary>
        /// Initialize a <see cref="SwarmMiner{T}"/> instance.
        /// </summary>
        /// <param name="blockChain">The <see cref="BlockChain{T}"/> to use.</param>
        /// <param name="privateKey">The <see cref="PrivateKey"/> to use.</param>
        /// <param name="onMineListener">The <see cref="IMineListener{T}"/> to use.</param>
        /// <param name="swarm">The <see cref="Swarm{T}"/> to use.</param>
        public SwarmMiner(
            BlockChain<T> blockChain,
            PrivateKey privateKey,
            IMineListener<T> onMineListener,
            Swarm<T> swarm)
            : base(blockChain, privateKey, onMineListener)
        {
            _swarm = swarm;
        }

        /// <summary>
        /// Implementation for Mining with <see cref="Swarm{T}"/>.
        /// </summary>
        /// <returns>Runned Task.</returns>
        protected override Task<Block<T>> Mine()
        {
            var task = Task.Run(async () =>
            {
                var block = await BlockChain.MineBlock(PrivateKey);
                _swarm.BroadcastBlock(block);

                return block;
            });
            return task;
        }
    }
}
