using Libplanet;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Tx;
using Libplanet.Unity.Miner;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using UnityEngine;

namespace Libplanet.Unity
{
    /// <summary>
    /// T.
    /// </summary>
    public class DefaultMineHandler : IMineListener<PolymorphicAction<ActionBase>>
    {
        private PrivateKey PrivateKey { get; set; }

        private BlockChain<PolymorphicAction<ActionBase>> _blockChain;

        /// <summary>
        /// T.
        /// </summary>
        public DefaultMineHandler(BlockChain<PolymorphicAction<ActionBase>> blockChain, PrivateKey PrivateKey)
        {
            this.PrivateKey = PrivateKey;
            _blockChain = blockChain;
        }

        /// <summary>
        /// T.
        /// </summary>
        public void Failure(Task mineTask)
        {
            var txs = new HashSet<Transaction<PolymorphicAction<ActionBase>>>();
            var invalidTxs = txs;
            var retryActions = new HashSet<IImmutableList<PolymorphicAction<ActionBase>>>();

            if (mineTask.IsFaulted)
            {
                foreach (var ex in mineTask.Exception.InnerExceptions)
                {
                    if (ex is InvalidTxNonceException invalidTxNonceException)
                    {
                        var invalidNonceTx = _blockChain.GetTransaction(invalidTxNonceException.TxId);

                        if (invalidNonceTx.Signer == PrivateKey.PublicKey.ToAddress())
                        {
                            Debug.Log($"Tx[{invalidTxNonceException.TxId}] nonce is invalid. Retry it.");
                            retryActions.Add(invalidNonceTx.Actions);
                        }
                    }

                    if (ex is InvalidTxException invalidTxException)
                    {
                        Debug.Log($"Tx[{invalidTxException.TxId}] is invalid. mark to unstage.");
                        invalidTxs.Add(_blockChain.GetTransaction(invalidTxException.TxId));
                    }

                    Debug.LogException(ex);
                }
            }

            foreach (var invalidTx in invalidTxs)
            {
                _blockChain.UnstageTransaction(invalidTx);
            }

            foreach (var retryAction in retryActions)
            {
                Agent.Instance.MakeTransaction((IImmutableList<ActionBase>) retryAction);
            }
        }

        /// <summary>
        /// T.
        /// </summary>
        public void Success(Block<PolymorphicAction<ActionBase>> block)
        {
            Debug.Log($"created block index: {block.Index}, difficulty: {block.Difficulty}");
        }
    }
}
