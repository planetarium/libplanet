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
    /// Agent.
    /// </summary>
    /// <typeparam name="T">The type.</typeparam>
    public abstract class BaseMiner<T>
        where T : IAction, new()
    {
        /// <summary>
        /// Agent.
        /// </summary>
        /// <param name="blockChain">A.</param>
        /// <param name="privateKey">Av.</param>
        /// <param name="onMineListener">As.</param>
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
        /// Agent.
        /// </summary>
        protected BlockChain<T> BlockChain { get; }

        /// <summary>
        /// Agent.
        /// </summary>
        protected PrivateKey PrivateKey { get; }

        /// <summary>
        /// Agent.
        /// </summary>
        protected IMineListener<T> OnMineListener { get; set; }

        /// <summary>
        /// Agent.
        /// </summary>
        /// <returns>a.</returns>
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
        /// Agent.
        /// </summary>
        /// <returns>a.</returns>
        protected abstract Task<Block<T>> Mine();
    }
}
