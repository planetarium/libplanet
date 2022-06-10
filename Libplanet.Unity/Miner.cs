using System.Collections;
using System.Threading.Tasks;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Net;
using UnityEngine;

namespace Libplanet.Unity.Miner
{
    /// <summary>
    /// <c>Miner</c> class provides basic mining coroutine.
    /// </summary>
    /// <typeparam name="T"><see cref="Swarm{T}"/> Action Type.</typeparam>
    public class Miner<T>
        where T : IAction, new()
    {
        /// <summary>
        /// <see cref="Swarm{T}"/> to be used in Mine.
        /// </summary>
        private Swarm<T> _swarm;

        /// <summary>
        /// <see cref="BlockChain{T}"/> to be used in Mine.
        /// </summary>
        private BlockChain<T> _blockChain;

        /// <summary>
        /// <see cref="PrivateKey"/> to be used in Mine.
        /// </summary>
        private PrivateKey _privateKey;

        /// <summary>
        /// Initialize a <see cref="Miner{T}"/> instance.
        /// </summary>
        /// <param name="swarm"><see cref="Swarm{T}"/> to be used for mining.</param>
        /// <param name="privateKey"><see cref="PrivateKey"/> to be used for mining.</param>
        public Miner(
            Swarm<T> swarm,
            PrivateKey privateKey)
        {
            _swarm = swarm;
            _blockChain = swarm.BlockChain;
            _privateKey = privateKey;
        }

        /// <summary>
        /// Process mining and wait.
        /// </summary>
        /// <returns>Mining Coroutine.</returns>
        public IEnumerator CoStart()
        {
            while (true)
            {
                var task = Mine();
                yield return new WaitUntil(() => task.IsCompleted);

                if (!task.IsCanceled && !task.IsFaulted)
                {
                    var block = task.Result;

                    Debug.Log($"Created block index[{block.Index}] difficulty {block.Difficulty}.");
                }
                else
                {
                    Debug.Log("Failed to create block");
                }
            }
        }

        /// <summary>
        /// Use <see cref="BlockChain{T}"/>'s <c>MineBlock</c> to implement <c>Mine</c>.
        /// </summary>
        /// <returns>Runned mine Task.</returns>
        public Task<Block<T>> Mine()
        {
            var task = Task.Run(async () =>
            {
                var block = await _blockChain.MineBlock(_privateKey);
                _swarm.BroadcastBlock(block);

                return block;
            });
            return task;
        }
    }
}
