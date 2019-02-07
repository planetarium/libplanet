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
        public abstract ulong CountIndex();

        public abstract IEnumerable<HashDigest<SHA256>> IterateIndex();

        public abstract HashDigest<SHA256>? IndexBlockHash(long index);

        public abstract long AppendIndex(HashDigest<SHA256> hash);

        public abstract IEnumerable<Address> IterateAddresses();

        public abstract IEnumerable<TxId> GetAddressTransactionIds(
            Address address
        );

        public abstract long AppendAddressTransactionId(
            Address address,
            TxId txId
        );

        public abstract void StageTransactionIds(ISet<TxId> txids);

        public abstract void UnstageTransactionIds(ISet<TxId> txids);

        public abstract IEnumerable<TxId> IterateStagedTransactionIds();

        public abstract IEnumerable<TxId> IterateTransactionIds();

        public abstract Transaction<T> GetTransaction<T>(TxId txid)
            where T : IAction;

        public abstract void PutTransaction<T>(Transaction<T> tx)
            where T : IAction;

        public abstract bool DeleteTransaction(TxId txid);

        public abstract IEnumerable<HashDigest<SHA256>> IterateBlockHashes();

        public abstract Block<T> GetBlock<T>(HashDigest<SHA256> blockHash)
            where T : IAction;

        public abstract void PutBlock<T>(Block<T> block)
            where T : IAction;

        public abstract bool DeleteBlock(HashDigest<SHA256> blockHash);

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

        public int CountBlocks()
        {
            return IterateBlockHashes().Count();
        }

        public int CountAddresses()
        {
            return IterateAddresses().Count();
        }

        public abstract bool DeleteIndex(HashDigest<SHA256> hash);
    }
}
