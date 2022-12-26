using System;
using System.Collections.Generic;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Store;
using Libplanet.Tx;

namespace Libplanet.Tests.Store
{
    /// <summary>
    /// An thin <see cref="IStore"/> implementation that forwards all method calls to the actual
    /// <see cref="Store"/> implementation.  As this purposes to override only few parts of
    /// an existing <see cref="Store"/> implementation with maintaining the rest of methods,
    /// its all methods are declared as <c>virtual</c>.
    /// </summary>
    public abstract class ProxyStore : IStore
    {
        /// <summary>
        /// Creates a new <see cref="ProxyStore"/> instance with the given actual
        /// <paramref name="store"/> implementation.
        /// </summary>
        /// <param name="store">The actual <see cref="IStore"/> implementation.</param>
        protected ProxyStore(IStore store)
        {
            Store = store;
        }

        /// <summary>
        /// The actual <see cref="IStore"/> implementation.
        /// </summary>
        public IStore Store { get; }

        /// <inheritdoc cref="IStore.Dispose()"/>
        public virtual void Dispose() =>
            Store.Dispose();

        /// <inheritdoc cref="IStore.ListChainIds()"/>
        public virtual IEnumerable<Guid> ListChainIds() =>
            Store.ListChainIds();

        /// <inheritdoc cref="IStore.DeleteChainId(Guid)"/>
        public virtual void DeleteChainId(Guid chainId) =>
            Store.DeleteChainId(chainId);

        /// <inheritdoc cref="IStore.GetCanonicalChainId()"/>
        public virtual Guid? GetCanonicalChainId() =>
            Store.GetCanonicalChainId();

        /// <inheritdoc cref="IStore.SetCanonicalChainId(Guid)"/>
        public virtual void SetCanonicalChainId(Guid chainId) =>
            Store.SetCanonicalChainId(chainId);

        /// <inheritdoc cref="IStore.CountIndex(Guid)"/>
        public virtual long CountIndex(Guid chainId) =>
            Store.CountIndex(chainId);

        /// <inheritdoc cref="IStore.IterateIndexes(Guid, int, int?)"/>
        public virtual IEnumerable<BlockHash> IterateIndexes(
            Guid chainId,
            int offset = 0,
            int? limit = null
        ) =>
            Store.IterateIndexes(chainId, offset, limit);

        /// <inheritdoc cref="IStore.IndexBlockHash(Guid, long)"/>
        public virtual BlockHash? IndexBlockHash(Guid chainId, long index) =>
            Store.IndexBlockHash(chainId, index);

        /// <inheritdoc cref="IStore.AppendIndex(Guid, BlockHash)"/>
        public virtual long AppendIndex(Guid chainId, BlockHash hash) =>
            Store.AppendIndex(chainId, hash);

        /// <inheritdoc cref="IStore.ForkBlockIndexes(Guid, Guid, BlockHash)"/>
        public virtual void ForkBlockIndexes(
            Guid sourceChainId,
            Guid destinationChainId,
            BlockHash branchpoint
        ) =>
            Store.ForkBlockIndexes(sourceChainId, destinationChainId, branchpoint);

        /// <inheritdoc cref="IStore.GetTransaction{T}(TxId)"/>
        public virtual Transaction<T> GetTransaction<T>(TxId txid)
            where T : IAction, new()
        =>
            Store.GetTransaction<T>(txid);

        /// <inheritdoc cref="IStore.GetTransaction{T}(TxId)"/>
        public virtual void PutTransaction<T>(Transaction<T> tx)
            where T : IAction, new()
        =>
            Store.PutTransaction(tx);

        /// <inheritdoc cref="IStore.IterateBlockHashes()"/>
        public virtual IEnumerable<BlockHash> IterateBlockHashes() =>
            Store.IterateBlockHashes();

        /// <inheritdoc cref="IStore.GetBlock{T}"/>
        public virtual Block<T> GetBlock<T>(
            BlockHash blockHash
        )
            where T : IAction, new()
        =>
            Store.GetBlock<T>(blockHash);

        /// <inheritdoc cref="IStore.GetBlockIndex(BlockHash)"/>
        public virtual long? GetBlockIndex(BlockHash blockHash) =>
            Store.GetBlockIndex(blockHash);

        /// <inheritdoc cref="IStore.GetBlockDigest(BlockHash)"/>
        public virtual BlockDigest? GetBlockDigest(BlockHash blockHash) =>
            Store.GetBlockDigest(blockHash);

        /// <inheritdoc cref="IStore.PutBlock{T}(Block{T})"/>
        public virtual void PutBlock<T>(Block<T> block)
            where T : IAction, new()
        =>
            Store.PutBlock(block);

        /// <inheritdoc cref="IStore.DeleteBlock(BlockHash)"/>
        public virtual bool DeleteBlock(BlockHash blockHash) =>
            Store.DeleteBlock(blockHash);

        /// <inheritdoc cref="IStore.ContainsBlock(BlockHash)"/>
        public virtual bool ContainsBlock(BlockHash blockHash) =>
            Store.ContainsBlock(blockHash);

        /// <inheritdoc cref="IStore.PutTxExecution(TxSuccess)"/>
        public virtual void PutTxExecution(TxSuccess txSuccess) =>
            Store.PutTxExecution(txSuccess);

        /// <inheritdoc cref="IStore.PutTxExecution(TxFailure)"/>
        public virtual void PutTxExecution(TxFailure txFailure) =>
            Store.PutTxExecution(txFailure);

        /// <inheritdoc cref="IStore.GetTxExecution(BlockHash, TxId)"/>
        public virtual TxExecution GetTxExecution(BlockHash blockHash, TxId txid) =>
            Store.GetTxExecution(blockHash, txid);

        /// <inheritdoc cref="IStore.PutTxIdBlockHashIndex(TxId, BlockHash)"/>
        public virtual void PutTxIdBlockHashIndex(TxId txId, BlockHash blockHash) =>
            Store.PutTxIdBlockHashIndex(txId, blockHash);

        /// <inheritdoc cref="IStore.GetFirstTxIdBlockHashIndex(TxId)"/>
        public virtual BlockHash? GetFirstTxIdBlockHashIndex(TxId txId) =>
            Store.GetFirstTxIdBlockHashIndex(txId);

        /// <inheritdoc cref="IStore.IterateTxIdBlockHashIndex(TxId)"/>
        public virtual IEnumerable<BlockHash> IterateTxIdBlockHashIndex(TxId txId) =>
            Store.IterateTxIdBlockHashIndex(txId);

        /// <inheritdoc cref="IStore.DeleteTxIdBlockHashIndex(TxId, BlockHash)"/>
        public virtual void DeleteTxIdBlockHashIndex(TxId txId, BlockHash blockHash) =>
            Store.DeleteTxIdBlockHashIndex(txId, blockHash);

        /// <inheritdoc cref="IStore.ListTxNonces(Guid)"/>
        public virtual IEnumerable<KeyValuePair<Address, long>> ListTxNonces(Guid chainId) =>
            Store.ListTxNonces(chainId);

        /// <inheritdoc cref="IStore.GetTxNonce(Guid, Address)"/>
        public virtual long GetTxNonce(Guid chainId, Address address) =>
            Store.GetTxNonce(chainId, address);

        /// <inheritdoc cref="IStore.IncreaseTxNonce(Guid, Address, long)"/>
        public virtual void IncreaseTxNonce(Guid chainId, Address signer, long delta = 1) =>
            Store.IncreaseTxNonce(chainId, signer, delta);

        /// <inheritdoc cref="IStore.ContainsTransaction(TxId)"/>
        public virtual bool ContainsTransaction(TxId txId) =>
            Store.ContainsTransaction(txId);

        /// <inheritdoc cref="IStore.CountBlocks()"/>
        public virtual long CountBlocks() =>
            Store.CountBlocks();

        /// <inheritdoc cref="IStore.ForkTxNonces(Guid, Guid)"/>
        public virtual void ForkTxNonces(Guid sourceChainId, Guid destinationChainId) =>
            Store.ForkTxNonces(sourceChainId, destinationChainId);

        /// <inheritdoc cref="IStore.PruneOutdatedChains(bool)"/>
        public void PruneOutdatedChains(bool noopWithoutCanon = false) =>
            Store.PruneOutdatedChains(noopWithoutCanon);
    }
}
