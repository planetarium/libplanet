using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Security.Cryptography;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Tx;

namespace Libplanet.Store
{
    public abstract class BaseStore : IStore
    {
        /// <inheritdoc />
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

        /// <inheritdoc />
        public abstract IEnumerable<Address> ListAddresses(string @namespace);

        /// <inheritdoc />
        public abstract void StageTransactionIds(
            IDictionary<TxId, bool> txids
        );

        public abstract void UnstageTransactionIds(
            ISet<TxId> txids
        );

        /// <inheritdoc />
        public abstract IEnumerable<TxId> IterateStagedTransactionIds(bool toBroadcast);

        public abstract IEnumerable<TxId> IterateTransactionIds();

        public abstract Transaction<T> GetTransaction<T>(TxId txid)
            where T : IAction, new();

        public abstract void PutTransaction<T>(Transaction<T> tx)
            where T : IAction, new();

        public abstract bool DeleteTransaction(TxId txid);

        public abstract IEnumerable<HashDigest<SHA256>> IterateBlockHashes();

        public abstract Block<TTxAction, TBlockAction> GetBlock<TTxAction, TBlockAction>(
            HashDigest<SHA256> blockHash)
            where TTxAction : IAction, new()
            where TBlockAction : IAction, new();

        /// <inheritdoc />
        public abstract void PutBlock<TTxAction, TBlockAction>(Block<TTxAction, TBlockAction> block)
            where TTxAction : IAction, new()
            where TBlockAction : IAction, new();

        public abstract bool DeleteBlock(HashDigest<SHA256> blockHash);

        public abstract AddressStateMap GetBlockStates(
            HashDigest<SHA256> blockHash
        );

        public abstract void SetBlockStates(
            HashDigest<SHA256> blockHash,
            AddressStateMap states
        );

        /// <inheritdoc />
        public abstract IEnumerable<Tuple<HashDigest<SHA256>, long>> IterateStateReferences(
            string @namespace, Address address);

        /// <inheritdoc />
        public abstract void StoreStateReference<TTxAction, TBlockAction>(
            string @namespace,
            IImmutableSet<Address> addresses,
            Block<TTxAction, TBlockAction> block)
            where TTxAction : IAction, new()
            where TBlockAction : IAction, new();

        /// <inheritdoc />
        public abstract void ForkStateReferences<TTxAction, TBlockAction>(
            string sourceNamespace,
            string destinationNamespace,
            Block<TTxAction, TBlockAction> branchPoint,
            IImmutableSet<Address> addressesToStrip)
            where TTxAction : IAction, new()
            where TBlockAction : IAction, new();

        /// <inheritdoc/>
        public abstract IEnumerable<KeyValuePair<Address, long>> ListTxNonces(string @namespace);

        /// <inheritdoc/>
        public abstract long GetTxNonce(string @namespace, Address address);

        /// <inheritdoc/>
        public abstract void IncreaseTxNonce(string @namespace, Address signer, long delta = 1);

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

        /// <inheritdoc/>
        public abstract void DeleteNamespace(string @namespace);
    }
}
