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

        public abstract void StageTransactionIds(
            ISet<TxId> txids
        );

        public abstract void UnstageTransactionIds(
            ISet<TxId> txids
        );

        public abstract IEnumerable<TxId> IterateStagedTransactionIds();

        public abstract IEnumerable<TxId> IterateTransactionIds();

        public abstract Transaction<T> GetTransaction<T>(TxId txid)
            where T : IAction, new();

        public abstract void PutTransaction<T>(Transaction<T> tx)
            where T : IAction, new();

        public abstract bool DeleteTransaction(TxId txid);

        public abstract IEnumerable<HashDigest<SHA256>> IterateBlockHashes();

        public abstract Block<T> GetBlock<T>(HashDigest<SHA256> blockHash)
            where T : IAction, new();

        /// <inheritdoc />
        public abstract Address? GetAddressesMask(HashDigest<SHA256> blockHash);

        /// <inheritdoc />
        public abstract void PutBlock<T>(Block<T> block, Address addressesMask)
            where T : IAction, new();

        public abstract bool DeleteBlock(HashDigest<SHA256> blockHash);

        public abstract AddressStateMap GetBlockStates(
            HashDigest<SHA256> blockHash
        );

        public abstract void SetBlockStates(
            HashDigest<SHA256> blockHash,
            AddressStateMap states
        );

        public long CountTransactions()
        {
            return IterateTransactionIds().LongCount();
        }

        public long CountBlocks()
        {
            return IterateBlockHashes().LongCount();
        }

        public abstract bool DeleteIndex(
            string @namespace,
            HashDigest<SHA256> hash
        );
    }
}
