using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Tx;

namespace Libplanet.Store
{
    public abstract class BaseStore : IStore
    {
        public abstract long CountIndex(string @namespace);

        public abstract IEnumerable<HashDigest<SHA256>> IterateIndex(
            string @namespace
        );

        public abstract HashDigest<SHA256>? IndexBlockHash(
            string @namespace,
            long index
        );

        public abstract long AppendIndex(
            string @namespace,
            HashDigest<SHA256> hash
        );

        public abstract IEnumerable<Address> IterateAddresses(
            string @namespace
        );

        public abstract IEnumerable<TxId> GetAddressTransactionIds(
            string @namespace,
            Address address
        );

        public abstract long AppendAddressTransactionId(
            string @namespace,
            Address address,
            TxId txId
        );

        public abstract void StageTransactionIds(
            string @namespace,
            ISet<TxId> txids
        );

        public abstract void UnstageTransactionIds(
            string @namespace,
            ISet<TxId> txids
        );

        public abstract IEnumerable<TxId> IterateStagedTransactionIds(
            string @namespace
        );

        public abstract IEnumerable<TxId> IterateTransactionIds(
            string @namespace
        );

        public abstract Transaction<T> GetTransaction<T>(
            string @namespace,
            TxId txid
        )
            where T : IAction;

        public abstract void PutTransaction<T>(
            string @namespace,
            Transaction<T> tx
        )
            where T : IAction;

        public abstract bool DeleteTransaction(string @namespace, TxId txid);

        public abstract IEnumerable<HashDigest<SHA256>> IterateBlockHashes(
            string @namespace
        );

        public abstract Block<T> GetBlock<T>(
            string @namespace,
            HashDigest<SHA256> blockHash
        )
            where T : IAction;

        public abstract void PutBlock<T>(
            string @namespace,
            Block<T> block
        )
            where T : IAction;

        public abstract bool DeleteBlock(
            string @namespace,
            HashDigest<SHA256> blockHash
        );

        public abstract AddressStateMap GetBlockStates(
            string @namespace,
            HashDigest<SHA256> blockHash
        );

        public abstract void SetBlockStates(
            string @namespace,
            HashDigest<SHA256> blockHash,
            AddressStateMap states
        );

        public int CountTransactions(string @namespace)
        {
            return IterateTransactionIds(@namespace).Count();
        }

        public int CountBlocks(string @namespace)
        {
            return IterateBlockHashes(@namespace).Count();
        }

        public int CountAddresses(string @namespace)
        {
            return IterateAddresses(@namespace).Count();
        }

        public abstract bool DeleteIndex(
            string @namespace,
            HashDigest<SHA256> hash
        );
    }
}
