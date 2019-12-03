using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Globalization;
using System.Linq;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Tx;

namespace Libplanet.Store
{
    public abstract class BaseStore : IStore
    {
        /// <inheritdoc />
        public abstract IEnumerable<Guid> ListChainIds();

        /// <inheritdoc />
        public abstract Guid? GetCanonicalChainId();

        /// <inheritdoc />
        public abstract void SetCanonicalChainId(Guid chainId);

        public abstract long CountIndex(Guid chainId);

        public abstract IEnumerable<HashDigest<SHA256>> IterateIndexes(
            Guid chainId,
            int offset,
            int? limit);

        public abstract HashDigest<SHA256>? IndexBlockHash(Guid chainId, long index);

        public abstract long AppendIndex(
            Guid chainId,
            HashDigest<SHA256> hash
        );

        /// <inheritdoc />
        public abstract void ForkBlockIndexes(
            Guid sourceChainId,
            Guid destinationChainId,
            HashDigest<SHA256> branchPoint);

        /// <inheritdoc />
        public abstract IEnumerable<Address> ListAddresses(Guid chainId);

        /// <inheritdoc />
        public abstract IImmutableDictionary<Address, IImmutableList<HashDigest<SHA256>>>
            ListAllStateReferences(
                Guid chainId,
                HashDigest<SHA256>? onlyAfter = null,
                HashDigest<SHA256>? ignoreAfter = null);

        /// <inheritdoc />
        public abstract void StageTransactionIds(IImmutableSet<TxId> txids);

        public abstract void UnstageTransactionIds(
            ISet<TxId> txids
        );

        /// <inheritdoc />
        public abstract IEnumerable<TxId> IterateStagedTransactionIds();

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

        /// <inheritdoc />
        public abstract bool ContainsBlock(HashDigest<SHA256> blockHash);

        public abstract IImmutableDictionary<Address, IValue> GetBlockStates(
            HashDigest<SHA256> blockHash
        );

        public abstract void SetBlockStates(
            HashDigest<SHA256> blockHash,
            IImmutableDictionary<Address, IValue> states
        );

        /// <inheritdoc />
        public abstract IEnumerable<Tuple<HashDigest<SHA256>, long>> IterateStateReferences(
            Guid chainId,
            Address address,
            long? highestIndex,
            long? lowestIndex,
            int? limit);

        public abstract void StoreStateReference(
            Guid chainId,
            IImmutableSet<Address> addresses,
            HashDigest<SHA256> blockHash,
            long blockIndex);

        /// <inheritdoc />
        public abstract void ForkStateReferences<T>(
            Guid sourceChainId,
            Guid destinationChainId,
            Block<T> branchPoint)
            where T : IAction, new();

        /// <inheritdoc/>
        public abstract IEnumerable<KeyValuePair<Address, long>> ListTxNonces(Guid chainId);

        /// <inheritdoc/>
        public abstract long GetTxNonce(Guid chainId, Address address);

        /// <inheritdoc/>
        public abstract void IncreaseTxNonce(Guid chainId, Address signer, long delta = 1);

        public virtual long CountTransactions()
        {
            return IterateTransactionIds().LongCount();
        }

        public virtual long CountBlocks()
        {
            return IterateBlockHashes().LongCount();
        }

        public abstract bool DeleteIndex(Guid chainId, HashDigest<SHA256> hash);

        /// <inheritdoc />
        public abstract bool ContainsTransaction(TxId txId);

        /// <inheritdoc/>
        public abstract void DeleteChainId(Guid chainId);

        internal abstract RawBlock? GetRawBlock(HashDigest<SHA256> blockHash);
    }
}
