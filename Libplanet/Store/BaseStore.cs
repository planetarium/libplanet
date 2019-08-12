using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Globalization;
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

        /// <inheritdoc />
        public abstract string GetCanonicalNamespace();

        /// <inheritdoc />
        public abstract void SetCanonicalNamespace(string @namespace);

        public abstract long CountIndex(string @namespace);

        public abstract IEnumerable<HashDigest<SHA256>> IterateIndex(
            string @namespace,
            int offset,
            int? limit);

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

        /// <inheritdoc/>
        public Block<T> GetBlock<T>(HashDigest<SHA256> blockHash)
            where T : IAction, new()
        {
            if (GetRawBlock(blockHash) is RawBlock rawBlock)
            {
                HashDigest<SHA256>? prevHash = rawBlock.PreviousHash is byte[] h
                    ? new HashDigest<SHA256>(h)
                    : (HashDigest<SHA256>?)null;
                return new Block<T>(
                    index: rawBlock.Index,
                    difficulty: rawBlock.Difficulty,
                    nonce: new Nonce(rawBlock.Nonce),
                    miner: new Address(rawBlock.Miner),
                    previousHash: prevHash,
                    timestamp: DateTimeOffset.ParseExact(
                        rawBlock.Timestamp,
                        Block<T>.TimestampFormat,
                        CultureInfo.InvariantCulture
                    ).ToUniversalTime(),
                    transactions: rawBlock.Transactions
                        .Cast<byte[]>()
                        .Select(bytes => GetTransaction<T>(new TxId(bytes)))
                );
            }

            return null;
        }

        /// <inheritdoc/>
        public long? GetBlockIndex(HashDigest<SHA256> blockHash)
        {
            return GetRawBlock(blockHash)?.Index;
        }

        /// <inheritdoc />
        public abstract void PutBlock<T>(Block<T> block)
            where T : IAction, new();

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
        public abstract void StoreStateReference<T>(
            string @namespace,
            IImmutableSet<Address> addresses,
            Block<T> block)
            where T : IAction, new();

        /// <inheritdoc />
        public abstract void ForkStateReferences<T>(
            string sourceNamespace,
            string destinationNamespace,
            Block<T> branchPoint,
            IImmutableSet<Address> addressesToStrip)
            where T : IAction, new();

        /// <inheritdoc/>
        public abstract IEnumerable<KeyValuePair<Address, long>> ListTxNonces(string @namespace);

        /// <inheritdoc/>
        public abstract long GetTxNonce(string @namespace, Address address);

        /// <inheritdoc/>
        public abstract void IncreaseTxNonce(string @namespace, Address signer, long delta = 1);

        public virtual long CountTransactions()
        {
            return IterateTransactionIds().LongCount();
        }

        public virtual long CountBlocks()
        {
            return IterateBlockHashes().LongCount();
        }

        public abstract bool DeleteIndex(
            string @namespace,
            HashDigest<SHA256> hash
        );

        /// <inheritdoc/>
        public abstract void DeleteNamespace(string @namespace);

        internal abstract RawBlock? GetRawBlock(HashDigest<SHA256> blockHash);
    }
}
