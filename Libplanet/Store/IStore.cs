using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Security.Cryptography;
using Libplanet.Action;
using Libplanet.Blockchain;
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

        /// <summary>
        /// Deletes an index, tx nonces, and state references in the given
        /// <paramref name="namespace"/>.
        /// It also deletes namespace itself.
        /// </summary>
        /// <param name="namespace">The namespace to delete.</param>
        /// <remarks>This does not delete blocks or transactions that belong to
        /// the index of the <paramref name="namespace"/>, but only the index,
        /// tx nonces, and state references.</remarks>
        void DeleteNamespace(string @namespace);

        /// <summary>
        /// Lists all addresses that have ever had states.
        /// </summary>
        /// <param name="namespace">The namespace to list addresses.</param>
        /// <returns>All addresses in an arbitrary order.  The order might
        /// be vary for each call.</returns>
        IEnumerable<Address> ListAddresses(string @namespace);

        /// <summary>
        /// Adds <see cref="TxId"/>s to the pending list so that
        /// a next <see cref="Block{T}"/> to be mined contains the corresponding
        /// <see cref="Transaction{T}"/>s.
        /// </summary>
        /// <param name="txids"><see cref="TxId"/>s to add to pending list. Keys are
        /// <see cref="TxId"/>s and values are whether to broadcast.</param>
        void StageTransactionIds(IDictionary<TxId, bool> txids);

        void UnstageTransactionIds(ISet<TxId> txids);

        /// <summary>
        /// Iterates staged <see cref="TxId"/>s.
        /// </summary>
        /// <param name="toBroadcast">Whether to iterate only the <see cref="TxId "/>s set to
        /// broadcast.</param>
        /// <returns>Staged <see cref="TxId"/>s.</returns>
        IEnumerable<TxId> IterateStagedTransactionIds(bool toBroadcast = false);

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

        /// <summary>
        /// Gets the states updated by actions in the inquired block.
        /// </summary>
        /// <param name="blockHash"><see cref="Block{T}.Hash"/> to query.
        /// </param>
        /// <returns>The states updated by actions in the inquired block.
        /// If actions definitely do not update any addresses it returns
        /// an empty map.  If there is no record for the inquired block
        /// (because actions in it have never been evaluated yet) it returns
        /// <c>null</c> instead.
        /// </returns>
        /// <remarks>It does not return all states built up from the genesis
        /// block nor delta, but only dirty states by actions the inquired
        /// block.
        /// <para>For example, if actions in the genesis block do
        /// <c>a++; b++</c>, /// and actions in the second block do
        /// <c>b++; c++</c>, this method /// for the second block returns
        /// <c>b = 2; c = 1</c> (dirty), not
        /// <c>a = 1; b = 2; c = 1</c> (all states) nor
        /// <c>b = 1; c = 1</c> (delta).</para>
        /// </remarks>
        AddressStateMap GetBlockStates(HashDigest<SHA256> blockHash);

        void SetBlockStates(
            HashDigest<SHA256> blockHash,
            AddressStateMap states
        );

        /// <summary>
        /// Gets pairs of a state reference and a corresponding <see cref="Block{T}.Index"/> of
        /// the requested <paramref name="address"/> in the specified <paramref name="namespace"/>.
        /// </summary>
        /// <param name="namespace">The chain namespace.</param>
        /// <param name="address">The <see cref="Address"/> to get state references.</param>
        /// <returns><em>Ordered</em> pairs of a state reference and a corresponding
        /// <see cref="Block{T}.Index"/>.  The highest index (i.e., the closest to the tip) go last,
        /// and the lowest index (i.e., the closest to the genesis) go first.</returns>
        /// <seealso cref="StoreStateReference{T}(string, IImmutableSet{Address}, Block{T})"/>
        IEnumerable<Tuple<HashDigest<SHA256>, long>> IterateStateReferences(
            string @namespace,
            Address address);

        /// <summary>
        /// Stores a state reference, which is a <see cref="Block{T}.Hash"/>
        /// that has the state of the <see cref="Address"/> for each updated
        /// <see cref="Address"/>es by the <see cref="Transaction{T}"/>s in the
        /// <paramref name="block"/>.</summary>
        /// <param name="namespace">The namespace to store a state reference.
        /// </param>
        /// <param name="addresses">The <see cref="Address"/>es to store state
        /// reference.</param>
        /// <param name="block">The <see cref="Block{T}"/> which has the state
        /// of the <see cref="Address"/>.</param>
        /// <typeparam name="T">An <see cref="IAction"/> class used with
        /// <paramref name="block"/>.</typeparam>
        /// <remarks>State reference must be stored in the same order as the blocks. For now,
        /// it is assumed that this is only called by
        /// <see cref="BlockChain{T}.Append(Block{T}, DateTimeOffset, bool)"/> method.</remarks>
        /// <seealso cref="IterateStateReferences(string, Address)"/>
        void StoreStateReference<T>(
            string @namespace,
            IImmutableSet<Address> addresses,
            Block<T> block)
            where T : IAction, new();

        /// <summary>
        /// Forks state references, which are <see cref="Block{T}.Hash"/>es that
        /// have the state of the <see cref="Address"/>es, from
        /// <paramref name="sourceNamespace"/> to
        /// <paramref name="destinationNamespace"/>.
        /// <para>This method copies state references from
        /// <paramref name="sourceNamespace"/> to
        /// <paramref name="destinationNamespace"/> and strips
        /// <paramref name="addressesToStrip"/> of state references after
        /// <paramref name="branchPoint"/>.</para>
        /// </summary>
        /// <param name="sourceNamespace">The namespace of state references to
        /// fork.</param>
        /// <param name="destinationNamespace">The namespace of destination
        /// state references.</param>
        /// <param name="branchPoint">The branch point <see cref="Block{T}"/>
        /// to fork.</param>
        /// <param name="addressesToStrip">The set of <see cref="Address"/>es
        /// to strip <see cref="Block{T}.Hash"/> after forking.</param>
        /// <typeparam name="T">An <see cref="IAction"/> class used with
        /// <paramref name="branchPoint"/>.</typeparam>
        /// <exception cref="NamespaceNotFoundException">Thrown when the given
        /// <paramref name="sourceNamespace"/> does not exist.</exception>
        /// <seealso cref="IterateStateReferences(string, Address)"/>
        /// <seealso cref="StoreStateReference{T}(string, IImmutableSet{Address}, Block{T})"/>
        void ForkStateReferences<T>(
            string sourceNamespace,
            string destinationNamespace,
            Block<T> branchPoint,
            IImmutableSet<Address> addressesToStrip)
            where T : IAction, new();

        /// <summary>
        /// Lists all <see cref="Address"/>es that have ever signed <see cref="Transaction{T}"/>,
        /// and their corresponding <see cref="Transaction{T}"/> nonces.
        /// </summary>
        /// <param name="namespace">The namespace to list <see cref="Address"/>es and their
        /// <see cref="Transaction{T}"/> nonces.</param>
        /// <returns>Pairs of an <see cref="Address"/> and its tx nonce.  All nonces are greater
        /// than 0.  (If there are underlying entries having zero nonces these must be hidden.)
        /// </returns>
        /// <seealso cref="GetTxNonce(string, Address)"/>
        IEnumerable<KeyValuePair<Address, long>> ListTxNonces(string @namespace);

        /// <summary>
        /// Gets <see cref="Transaction{T}"/> nonce of the
        /// <paramref name="address"/>.
        /// </summary>
        /// <param name="namespace">The namespace to get
        /// <see cref="Transaction{T}"/> nonce.
        /// </param>
        /// <param name="address">The <see cref="Address"/> to get
        /// <see cref="Transaction{T}"/> nonce.
        /// </param>
        /// <returns>A <see cref="Transaction{T}"/> nonce. If there is no
        /// previous <see cref="Transaction{T}"/>, return 0.</returns>
        /// <seealso cref="IncreaseTxNonce(string, Address, long)"/>
        long GetTxNonce(string @namespace, Address address);

        /// <summary>
        /// Increases (or decreases if a negative <paramref name="delta"/> is given)
        /// the tx nonce counter for <paramref name="signer"/>.
        /// </summary>
        /// <param name="namespace">The namespace to increase
        /// <see cref="Transaction{T}"/> nonce.</param>
        /// <param name="signer">The address of the account to increase tx nonce.</param>
        /// <param name="delta">How many to incrase the counter.  A negative number decreases
        /// the counter.  1 by default.</param>
        /// <seealso cref="GetTxNonce(string, Address)"/>
        void IncreaseTxNonce(string @namespace, Address signer, long delta = 1);

        long CountTransactions();

        long CountBlocks();
    }
}
