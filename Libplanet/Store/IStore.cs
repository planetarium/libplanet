using System.Collections.Generic;
using System.Collections.Immutable;
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
        /// Puts the given <paramref name="block"/> in to the store.
        /// </summary>
        /// <param name="block">A <see cref="Block{T}"/> to put into the store.
        /// </param>
        /// <typeparam name="T">An <see cref="IAction"/> class used with
        /// <paramref name="block"/>.</typeparam>
        void PutBlock<T>(Block<T> block)
            where T : IAction, new();

        bool DeleteBlock(HashDigest<SHA256> blockHash);

        AddressStateMap GetBlockStates(HashDigest<SHA256> blockHash);

        void SetBlockStates(
            HashDigest<SHA256> blockHash,
            AddressStateMap states
        );

        /// <summary>
        /// Gets a <see cref="Block{T}.Hash"/> which has the state of the
        /// <paramref name="address"/>.
        /// </summary>
        /// <param name="namespace">The namespace to get
        /// <see cref="Block{T}.Hash"/>.</param>
        /// <param name="address">The <see cref="Address"/> to find the
        /// <see cref="Block{T}.Hash"/>.</param>
        /// <param name="offsetIndex">The offset at which to begin looking for
        /// a block hash.</param>
        /// <returns>A <see cref="Block{T}.Hash"/> which has the state of the
        /// <paramref name="address"/>.</returns>
        /// <seealso cref="SetAddressStateBlockHash{T}"/>
        HashDigest<SHA256>? GetAddressStateBlockHash(
            string @namespace,
            Address address,
            long offsetIndex);

        /// <summary>
        /// Stores a <see cref="Block{T}.Hash"/> which has the state of the
        /// <see cref="Address"/> for each updated <see cref="Address"/>es by
        /// the <paramref name="block"/>.
        /// </summary>
        /// <param name="namespace">The namespace to store
        /// <see cref="Block{T}.Hash"/>.</param>
        /// <param name="block">The <see cref="Block{T}"/> which has the state
        /// of the <see cref="Address"/>.</param>
        /// <param name="updatedAddresses">The <see cref="Address"/>es updated
        /// by the <paramref name="block"/>.</param>
        /// <typeparam name="T">An <see cref="IAction"/> class used with
        /// <paramref name="block"/>.</typeparam>
        /// <seealso cref="GetAddressStateBlockHash"/>
        void SetAddressStateBlockHash<T>(
            string @namespace,
            Block<T> block,
            IImmutableSet<Address> updatedAddresses)
            where T : IAction, new();

        /// <summary>
        /// Forks <see cref="Block{T}.Hash"/>es which has the state of the
        /// <see cref="Address"/>es from <paramref name="sourceNamespace"/> to
        /// <paramref name="targetNamespace"/>.
        /// </summary>
        /// <param name="sourceNamespace">The namespace to fork
        /// <see cref="Block{T}.Hash"/>es.</param>
        /// <param name="targetNamespace">The namespace where the forked
        /// <see cref="Block{T}.Hash"/> will be stored.</param>
        /// <param name="branchPointIndex">The index of branch point to fork.
        /// </param>
        /// <param name="addressesToStrip">The set of <see cref="Address"/>es
        /// to strip <see cref="Block{T}.Hash"/> after forking.</param>
        void ForkAddressStateBlockHash(
            string sourceNamespace,
            string targetNamespace,
            long branchPointIndex,
            IImmutableSet<Address> addressesToStrip);

        long CountTransactions();

        long CountBlocks();
    }
}
