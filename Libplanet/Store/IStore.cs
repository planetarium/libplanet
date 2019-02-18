using System.Collections.Async;
using System.Collections.Generic;
using System.Security.Cryptography;
using System.Threading.Tasks;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Tx;

namespace Libplanet.Store
{
    public interface IStore
    {
        Task<long> CountIndex();

        IAsyncEnumerable<HashDigest<SHA256>> IterateIndex();

        Task<HashDigest<SHA256>?> IndexBlockHash(long index);

        Task<long> AppendIndex(HashDigest<SHA256> hash);

        Task<bool> DeleteIndex(HashDigest<SHA256> hash);

        IAsyncEnumerable<Address> IterateAddresses();

        IAsyncEnumerable<TxId> GetAddressTransactionIds(Address address);

        Task<long> AppendAddressTransactionId(Address address, TxId txId);

        Task StageTransactionIds(ISet<TxId> txids);

        Task UnstageTransactionIds(ISet<TxId> txids);

        IAsyncEnumerable<TxId> IterateStagedTransactionIds();

        IAsyncEnumerable<TxId> IterateTransactionIds();

        Task<Transaction<T>> GetTransaction<T>(TxId txid)
            where T : IAction;

        Task PutTransaction<T>(Transaction<T> tx)
            where T : IAction;

        Task<bool> DeleteTransaction(TxId txid);

        IAsyncEnumerable<HashDigest<SHA256>> IterateBlockHashes();

        Task<Block<T>> GetBlock<T>(HashDigest<SHA256> blockHash)
            where T : IAction;

        Task PutBlock<T>(Block<T> block)
            where T : IAction;

        Task<bool> DeleteBlock(HashDigest<SHA256> blockHash);

        Task<AddressStateMap> GetBlockStates(HashDigest<SHA256> blockHash);

        Task SetBlockStates(
            HashDigest<SHA256> blockHash,
            AddressStateMap states
        );

        Task<int> CountTransactions();

        Task<int> CountBlocks();

        Task<int> CountAddresses();
    }
}
