using System;
using System.Threading.Tasks;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Unity.Miner;
using Libplanet.Unity.Action;
using UnityEngine;

namespace Libplanet.Unity
{
    /// <summary>
    /// <see cref="BaseMiner{T}"/> Mine Handler
    /// Simple logging only
    /// </summary>
    public class MineHandler : IMineListener<PolymorphicAction<ActionBase>>
    {
        private BlockChain<PolymorphicAction<ActionBase>> _blockChain;

        /// <summary>
        /// T.
        /// </summary>
        /// <param name="blockChain"><see cref="BlockChain{T}"/> to be used for mining.</param>
        /// <param name="privateKey"><see cref="PrivateKey"/> to be used for mining.</param>
        public MineHandler(
            BlockChain<PolymorphicAction<ActionBase>> blockChain,
            PrivateKey privateKey)
        {
            PrivateKey = privateKey;
            _blockChain = blockChain;
        }

        private PrivateKey PrivateKey { get; set; }

        /// <summary>
        /// Simple Failure Log
        /// </summary>
        /// <param name="mineTask">Failed Task.</param>
        public void Failure(Task mineTask)
        {
            if (mineTask.IsCanceled)
            {
                Debug.Log($"Mining cancelled.");
            }
            else if (mineTask.IsFaulted)
            {
                Debug.Log($"Failed to mine block {mineTask.Exception}");
            }
        }

        /// <summary>
        /// Simple Success Log
        /// </summary>
        /// <param name="block">Created Block.</param>
        public void Success(Block<PolymorphicAction<ActionBase>> block)
        {
            Debug.Log($"Created block with index {block.Index} and difficulty {block.Difficulty}");
        }
    }
}
