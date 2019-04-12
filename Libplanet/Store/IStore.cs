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

        long CountIndex(string @namespace);

        IEnumerable<HashDigest<SHA256>> IterateIndex(string @namespace);

        HashDigest<SHA256>? IndexBlockHash(string @namespace, long index);

        long AppendIndex(string @namespace, HashDigest<SHA256> hash);

        bool DeleteIndex(string @namespace, HashDigest<SHA256> hash);

        void StageTransactionIds(ISet<TxId> txids);

        void UnstageTransactionIds(ISet<TxId> txids);

        IEnumerable<TxId> IterateStagedTransactionIds();

        IEnumerable<TxId> IterateTransactionIds();

        Transaction<T> GetTransaction<T>(TxId txid)
            where T : IAction, new();

        void PutTransaction<T>(Transaction<T> tx)
            where T : IAction, new();

        bool DeleteTransaction(TxId txid);

        IEnumerable<HashDigest<SHA256>> IterateBlockHashes();

        Block<T> GetBlock<T>(HashDigest<SHA256> blockHash)
            where T : IAction, new();

        /// <summary>
        /// Gets the bitmask of all addresses ever used until the block
        /// of the given <paramref name="blockHash"/>.
        /// </summary>
        /// <param name="blockHash">The <see cref="Block{T}.Hash"/> of
        /// the topmost <see cref="Block{T}"/> of the <see cref="Block{T}"/>
        /// sequence that updated the <see cref="Address"/> set to which
        /// the bit mask you want to obtain approximates.</param>
        /// <returns>A bitmask in the <see cref="Address"/> type
        /// (so this is probably not a valid address).  It can be
        /// <c>null</c> if the given <paramref name="blockHash"/> refers to
        /// a <see cref="Block{T}"/> that is not in the store.</returns>
        Address? GetAddressesMask(HashDigest<SHA256> blockHash);

        /// <summary>
        /// Puts the given <paramref name="block"/> in to the store,
        /// with a bit mask which approximates the <see cref="Address"/> set
        /// updated by the <paramref name="block"/> and its all previous
        /// <see cref="Block{T}"/>s.
        /// </summary>
        /// <param name="block">A <see cref="Block{T}"/> to put into the store.
        /// </param>
        /// <param name="addressesMask">A bit mask, in the <see cref="Address"/>
        /// type (so this is probably not a valid address), which approximates
        /// the <see cref="Address"/> set updated by the <paramref name="block"
        /// /> and its all previous <see cref="Block{T}"/>s.</param>
        /// <typeparam name="T">An <see cref="IAction"/> class used with
        /// <paramref name="block"/>.</typeparam>
        void PutBlock<T>(Block<T> block, Address addressesMask)
            where T : IAction, new();

        bool DeleteBlock(HashDigest<SHA256> blockHash);

        AddressStateMap GetBlockStates(HashDigest<SHA256> blockHash);

        void SetBlockStates(
            HashDigest<SHA256> blockHash,
            AddressStateMap states
        );

        long CountTransactions();

        long CountBlocks();
    }
}
