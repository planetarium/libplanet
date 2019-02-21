using System.Collections.Generic;
using System.Security.Cryptography;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Tx;

namespace Libplanet.Store
{
    public interface IStore
    {
        void InitNamespace(string @namespace);

        long CountIndex(string @namespace);

        IEnumerable<HashDigest<SHA256>> IterateIndex(string @namespace);

        HashDigest<SHA256>? IndexBlockHash(string @namespace, long index);

        long AppendIndex(string @namespace, HashDigest<SHA256> hash);

        bool DeleteIndex(string @namespace, HashDigest<SHA256> hash);

        IEnumerable<Address> IterateAddresses(string @namespace);

        IEnumerable<TxId> GetAddressTransactionIds(
            string @namespace,
            Address address
        );

        long AppendAddressTransactionId(
            string @namespace,
            Address address,
            TxId txId
        );

        void StageTransactionIds(string @namespace, ISet<TxId> txids);

        void UnstageTransactionIds(string @namespace, ISet<TxId> txids);

        IEnumerable<TxId> IterateStagedTransactionIds(string @namespace);

        IEnumerable<TxId> IterateTransactionIds(string @namespace);

        Transaction<T> GetTransaction<T>(string @namespace, TxId txid)
            where T : IAction;

        void PutTransaction<T>(string @namespace, Transaction<T> tx)
            where T : IAction;

        bool DeleteTransaction(string @namespace, TxId txid);

        IEnumerable<HashDigest<SHA256>> IterateBlockHashes(string @namespace);

        Block<T> GetBlock<T>(
            string @namespace,
            HashDigest<SHA256> blockHash
        )
            where T : IAction;

        void PutBlock<T>(string @namespace, Block<T> block)
            where T : IAction;

        bool DeleteBlock(string @namespace, HashDigest<SHA256> blockHash);

        AddressStateMap GetBlockStates(
            string @namespace,
            HashDigest<SHA256> blockHash
        );

        void SetBlockStates(
            string @namespace,
            HashDigest<SHA256> blockHash,
            AddressStateMap states
        );

        int CountTransactions(string @namespace);

        int CountBlocks(string @namespace);

        int CountAddresses(string @namespace);
    }
}
