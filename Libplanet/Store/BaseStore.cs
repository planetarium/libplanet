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
        public abstract IEnumerable<string> ListNamespaces();

        public abstract int CountIndex(string @namespace);

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
            ISet<TxId> txids
        );

        public abstract void UnstageTransactionIds(
            ISet<TxId> txids
        );

        public abstract IEnumerable<TxId> IterateStagedTransactionIds();

        public abstract IEnumerable<TxId> IterateTransactionIds();

        public abstract Transaction<T> GetTransaction<T>(TxId txid)
            where T : IAction;

        public abstract void PutTransaction<T>(Transaction<T> tx)
            where T : IAction;

        public abstract bool DeleteTransaction(TxId txid);

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
            HashDigest<SHA256> blockHash
        );

        public abstract void SetBlockStates(
            HashDigest<SHA256> blockHash,
            AddressStateMap states
        );

        public int CountTransactions()
        {
            return IterateTransactionIds().Count();
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
