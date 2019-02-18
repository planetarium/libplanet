using System.Collections.Async;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Threading.Tasks;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Tx;

namespace Libplanet.Store
{
    public abstract class BaseStore : IStore
    {
        public abstract Task<long> CountIndex();

        public abstract IAsyncEnumerable<HashDigest<SHA256>> IterateIndex();

        public abstract Task<HashDigest<SHA256>?> IndexBlockHash(long index);

        public abstract Task<long> AppendIndex(HashDigest<SHA256> hash);

        public abstract IAsyncEnumerable<Address> IterateAddresses();

        public abstract IAsyncEnumerable<TxId> GetAddressTransactionIds(
            Address address
        );

        public abstract Task<long> AppendAddressTransactionId(
            Address address,
            TxId txId
        );

        public abstract Task StageTransactionIds(ISet<TxId> txids);

        public abstract Task UnstageTransactionIds(ISet<TxId> txids);

        public abstract IAsyncEnumerable<TxId> IterateStagedTransactionIds();

        public abstract IAsyncEnumerable<TxId> IterateTransactionIds();

        public abstract Task<Transaction<T>> GetTransaction<T>(TxId txid)
            where T : IAction;

        public abstract Task PutTransaction<T>(Transaction<T> tx)
            where T : IAction;

        public abstract Task<bool> DeleteTransaction(TxId txid);

        public abstract IAsyncEnumerable<HashDigest<SHA256>>
            IterateBlockHashes();

        public abstract Task<Block<T>> GetBlock<T>(HashDigest<SHA256> blockHash)
            where T : IAction;

        public abstract Task PutBlock<T>(Block<T> block)
            where T : IAction;

        public abstract Task<bool> DeleteBlock(HashDigest<SHA256> blockHash);

        public abstract Task<AddressStateMap> GetBlockStates(
            HashDigest<SHA256> blockHash
        );

        public abstract Task SetBlockStates(
            HashDigest<SHA256> blockHash,
            AddressStateMap states
        );

        public virtual async Task<int> CountTransactions()
        {
            var iterateTransactionIds = IterateTransactionIds();
            return (await iterateTransactionIds.ToListAsync()).Count;
        }

        public virtual async Task<int> CountBlocks()
        {
            return (await IterateBlockHashes().ToListAsync()).Count;
        }

        public virtual async Task<int> CountAddresses()
        {
            return (await IterateAddresses().ToListAsync()).Count;
        }

        public abstract Task<bool> DeleteIndex(HashDigest<SHA256> hash);
    }
}
