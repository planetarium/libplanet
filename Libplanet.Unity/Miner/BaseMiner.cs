using System.Collections;
using System.Threading.Tasks;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blocks;
using Libplanet.Crypto;
using UnityEngine;

namespace Libplanet.Unity.Miner
{
    /// <summary>
    /// <c>BaseMiner</c> class provides basic mining coroutine.
    /// <see cref="BlockChain{T}"/>'s <c>MineBlock</c> must be implemented
    /// and success/failure can be monitored through <c>OnMineListener</c>.
    /// </summary>
    /// <typeparam name="T"><see cref="BlockChain{T}"/> Action Type.</typeparam>
    public abstract class BaseMiner<T>
        where T : IAction, new()
    {
        /// <summary>
        /// Initialize a <see cref="BaseMiner{T}"/> instance.
        /// </summary>
        /// <param name="blockChain"><see cref="BlockChain{T}"/> to be used for mining.</param>
        /// <param name="privateKey"><see cref="PrivateKey"/> to be used for mining.</param>
        /// <param name="onMineListener"><c>OnMineListener</c> success/failure handler.</param>
        protected BaseMiner(
            BlockChain<T> blockChain,
            PrivateKey privateKey,
            IMineListener<T> onMineListener)
        {
            BlockChain = blockChain;
            PrivateKey = privateKey;
            OnMineListener = onMineListener;
        }

        /// <summary>
        /// <see cref="BlockChain{T}"/> to be used in Mine.
        /// </summary>
        protected BlockChain<T> BlockChain { get; }

        /// <summary>
        /// <see cref="PrivateKey"/> to be used in Mine.
        /// </summary>
        protected PrivateKey PrivateKey { get; }

        /// <summary>
        /// <see cref="IMineListener{T}"/> to be used in CoStart.
        /// </summary>
        protected IMineListener<T> OnMineListener { get; set; }

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
                    OnMineListener.Success(block);
                }
                else
                {
                    OnMineListener.Failure(task);
                }
            }
        }

        /// <summary>
        /// Use <see cref="BlockChain"/>'s <c>MineBlock</c> to implement <c>Mine</c>.
        /// </summary>
        /// <returns>Runned mine Task.</returns>
        protected abstract Task<Block<T>> Mine();
    }
}
