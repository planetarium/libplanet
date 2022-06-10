using System.Collections;
using System.Threading.Tasks;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Net;
using UnityEngine;

namespace Libplanet.Unity
{
    /// <summary>
    /// <see cref="Miner"/> class provides basic mining coroutine.
    /// </summary>
    public class Miner
    {
        /// <summary>
        /// The <see cref="Swarm{T}"/> to use for mining.
        /// </summary>
        private Swarm<PolymorphicAction<ActionBase>> _swarm;

        /// <summary>
        /// The <see cref="PrivateKey"/> to sign mined <see cref="Block{T}"/>s.
        /// </summary>
        private PrivateKey _privateKey;

        /// <summary>
        /// Initialize a <see cref="Miner"/> instance.
        /// </summary>
        /// <param name="swarm">The <see cref="Swarm{T}"/> to use for mining.</param>
        /// <param name="privateKey">The <see cref="PrivateKey"/> to sign
        /// mined <see cref="Block{T}"/>s.</param>
        public Miner(
            Swarm<PolymorphicAction<ActionBase>> swarm,
            PrivateKey privateKey)
        {
            _swarm = swarm;
            _privateKey = privateKey;
        }

        /// <summary>
        /// Processes mining and wait.
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
        /// Uses <see cref="BlockChain{T}"/> to implement <see cref="Mine"/>.
        /// </summary>
        /// <returns>An awaitable task with a <see cref="Block{T}"/> that is mined.</returns>
        public Task<Block<PolymorphicAction<ActionBase>>> Mine()
        {
            var task = Task.Run(async () =>
            {
                var block = await _swarm.BlockChain.MineBlock(_privateKey);
                _swarm.BroadcastBlock(block);

                return block;
            });
            return task;
        }
    }
}
