using System.Collections.Generic;
using System.Security.Cryptography;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Tx;

namespace Libplanet.Store
{
    public interface IStore
    {
        ulong CountIndex();

        IEnumerable<HashDigest<SHA256>> IterateIndex();

        HashDigest<SHA256>? IndexBlockHash(long index);

        long AppendIndex(HashDigest<SHA256> hash);

        IEnumerable<Address> IterateAddresses();

        IEnumerable<TxId> GetAddressTransactionIds(Address address);

        long AppendAddressTransactionId(Address address, TxId txId);

        void StageTransactionIds(ISet<TxId> txids);

        void UnstageTransactionIds(ISet<TxId> txids);

        IEnumerable<TxId> IterateStagedTransactionIds();

        IEnumerable<TxId> IterateTransactionIds();

        Transaction<T>? GetTransaction<T>(TxId txid)
            where T : IAction;

        void PutTransaction<T>(Transaction<T> tx)
            where T : IAction;

         bool DeleteTransaction(TxId txid);

        IEnumerable<HashDigest<SHA256>> IterateBlockHashes();

        Block<T>? GetBlock<T>(HashDigest<SHA256> blockHash)
            where T : IAction;

        void PutBlock<T>(Block<T> block)
            where T : IAction;

        bool DeleteBlock(HashDigest<SHA256> blockHash);

        AddressStateMap GetBlockStates(HashDigest<SHA256> blockHash);

        void SetBlockStates(HashDigest<SHA256> blockHash, AddressStateMap states);

        int CountTransactions();

        int CountBlocks();

        int CountAddresses();
    }
}
