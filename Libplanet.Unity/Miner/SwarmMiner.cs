using System.Threading.Tasks;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Net;

namespace Libplanet.Unity.Miner
{
    /// <summary>
    /// Agent.
    /// </summary>
    /// <typeparam name="T">The type.</typeparam>
    public class SwarmMiner<T> : BaseMiner<T>
        where T : IAction, new()
    {
        private Swarm<T> _swarm;

        /// <summary>
        /// Agent.
        /// </summary>
        /// <param name="blockChain">A.</param>
        /// <param name="privateKey">Aa.</param>
        /// <param name="onMineListener">As.</param>
        /// <param name="swarm">Av.</param>
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
        /// Agent.
        /// </summary>
        /// <returns>a.</returns>
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
