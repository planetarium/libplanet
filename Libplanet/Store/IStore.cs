using System.Collections.Generic;
using System.Security.Cryptography;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Tx;

namespace Libplanet.Store
{
    public interface IStore
    {
        /// <summary>
        /// Lists existing namespaces.
        /// </summary>
        /// <returns>Existing namespaces.</returns>
        IEnumerable<string> ListNamespaces();

        int CountIndex(string @namespace);

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

        void StageTransactionIds(ISet<TxId> txids);

        void UnstageTransactionIds(ISet<TxId> txids);

        IEnumerable<TxId> IterateStagedTransactionIds();

        IEnumerable<TxId> IterateTransactionIds();

        Transaction<T> GetTransaction<T>(TxId txid)
            where T : IAction;

        void PutTransaction<T>(Transaction<T> tx)
            where T : IAction;

        bool DeleteTransaction(TxId txid);

        IEnumerable<HashDigest<SHA256>> IterateBlockHashes(string @namespace);

        Block<T> GetBlock<T>(
            string @namespace,
            HashDigest<SHA256> blockHash
        )
            where T : IAction;

        void PutBlock<T>(string @namespace, Block<T> block)
            where T : IAction;

        bool DeleteBlock(string @namespace, HashDigest<SHA256> blockHash);

        AddressStateMap GetBlockStates(HashDigest<SHA256> blockHash);

        void SetBlockStates(
            HashDigest<SHA256> blockHash,
            AddressStateMap states
        );

        int CountTransactions();

        int CountBlocks(string @namespace);

        int CountAddresses(string @namespace);
    }
}
