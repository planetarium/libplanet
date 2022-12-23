#nullable disable
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.IO;
using System.Linq;
using System.Runtime.InteropServices;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Store;
using Libplanet.Tx;
using LiteDB;
using LruCacheNet;
using FileMode = LiteDB.FileMode;

namespace Libplanet.Explorer.Store
{
    // It assumes running Explorer as online-mode.
    public class LiteDBRichStore : IRichStore
    {
        private const string TxRefCollectionName = "block_ref";
        private const string SignerRefCollectionName = "signer_ref";
        private const string UpdatedAddressRefCollectionName = "updated_address_ref";

        private readonly MemoryStream _memoryStream;
        private readonly LiteDatabase _db;
        private readonly LruCache<BlockHash, BlockDigest> _blockCache;

        // FIXME we should separate it.
        private readonly IStore _store;
        private bool _disposed = false;

        public LiteDBRichStore(
            IStore store,
            string path,
            bool journal = true,
            int indexCacheSize = 50000,
            bool flush = true,
            bool readOnly = false)
        {
            _store = store;

            if (path is null)
            {
                _memoryStream = new MemoryStream();
                _db = new LiteDatabase(_memoryStream);
            }
            else
            {
                var connectionString = new ConnectionString
                {
                    Filename = Path.Combine(path, "ext.ldb"),
                    Journal = journal,
                    CacheSize = indexCacheSize,
                    Flush = flush,
                };

                if (readOnly)
                {
                    connectionString.Mode = FileMode.ReadOnly;
                }
                else if (RuntimeInformation.IsOSPlatform(OSPlatform.OSX) &&
                         Type.GetType("Mono.Runtime") is null)
                {
                    // macOS + .NETCore doesn't support shared lock.
                    connectionString.Mode = FileMode.Exclusive;
                }

                _db = new LiteDatabase(connectionString);

                lock (_db.Mapper)
                {
                    _db.Mapper.RegisterType(
                        hash => hash.ToByteArray(),
                        b => new BlockHash(b));
                    _db.Mapper.RegisterType(
                        txid => txid.ToByteArray(),
                        b => new TxId(b));
                    _db.Mapper.RegisterType(
                        address => address.ToByteArray(),
                        b => new Address(b.AsBinary));
                }

                _blockCache = new LruCache<BlockHash, BlockDigest>(capacity: 512);
            }
        }

        /// <inheritdoc cref="IStore.GetBlockIndex(BlockHash)"/>
        public long? GetBlockIndex(BlockHash blockHash)
        {
            return _store.GetBlockIndex(blockHash);
        }

        /// <inheritdoc cref="IStore.PutTxExecution(Libplanet.Tx.TxSuccess)"/>
        public void PutTxExecution(TxSuccess txSuccess) =>
            _store.PutTxExecution(txSuccess);

        /// <inheritdoc cref="IStore.PutTxExecution(Libplanet.Tx.TxFailure)"/>
        public void PutTxExecution(TxFailure txFailure) =>
            _store.PutTxExecution(txFailure);

        /// <inheritdoc cref="IStore.GetTxExecution(BlockHash, TxId)"/>
        public TxExecution GetTxExecution(BlockHash blockHash, TxId txid) =>
            _store.GetTxExecution(blockHash, txid);

        public void PutTxIdBlockHashIndex(TxId txId, BlockHash blockHash) =>
            _store.PutTxIdBlockHashIndex(txId, blockHash);

        public BlockHash? GetFirstTxIdBlockHashIndex(TxId txId) =>
            _store.GetFirstTxIdBlockHashIndex(txId);

        public IEnumerable<BlockHash> IterateTxIdBlockHashIndex(TxId txId) =>
            _store.IterateTxIdBlockHashIndex(txId);

        public void DeleteTxIdBlockHashIndex(TxId txId, BlockHash blockHash) =>
            _store.DeleteTxIdBlockHashIndex(txId, blockHash);

        public BlockDigest? GetBlockDigest(BlockHash blockHash)
        {
            if (_blockCache.TryGetValue(blockHash, out BlockDigest cachedDigest))
            {
                return cachedDigest;
            }

            var blockDigest = _store.GetBlockDigest(blockHash);

            if (!(blockDigest is null))
            {
                _blockCache.AddOrUpdate(blockHash, blockDigest.Value);
            }

            return blockDigest;
        }

        /// <inheritdoc cref="IStore.DeleteBlock(BlockHash)"/>
        public bool DeleteBlock(BlockHash blockHash)
        {
            _blockCache.Remove(blockHash);
            return _store.DeleteBlock(blockHash);
        }

        /// <inheritdoc cref="IStore.ContainsBlock(BlockHash)"/>
        public bool ContainsBlock(BlockHash blockHash) =>
            _blockCache.ContainsKey(blockHash) || _store.ContainsBlock(blockHash);

        /// <inheritdoc cref="IStore.ListTxNonces(Guid)"/>
        public IEnumerable<KeyValuePair<Address, long>> ListTxNonces(Guid chainId)
        {
            return _store.ListTxNonces(chainId);
        }

        /// <inheritdoc cref="IStore.GetTxNonce(Guid, Address)"/>
        public long GetTxNonce(Guid chainId, Address address)
        {
            return _store.GetTxNonce(chainId, address);
        }

        /// <inheritdoc cref="IStore.IncreaseTxNonce(Guid, Address, long)"/>
        public void IncreaseTxNonce(Guid chainId, Address signer, long delta = 1)
        {
            _store.IncreaseTxNonce(chainId, signer, delta);
        }

        /// <inheritdoc cref="IStore.ContainsTransaction(TxId)"/>
        public bool ContainsTransaction(TxId txId)
        {
            return _store.ContainsTransaction(txId);
        }

        /// <inheritdoc cref="IStore.CountBlocks()"/>
        public long CountBlocks()
        {
            return _store.CountBlocks();
        }

        /// <inheritdoc cref="IStore.ForkTxNonces(Guid, Guid)"/>
        public void ForkTxNonces(Guid sourceChainId, Guid destinationChainId)
        {
            _store.ForkTxNonces(sourceChainId, destinationChainId);
        }

        /// <inheritdoc cref="IStore.PruneOutdatedChains(bool)"/>
        public void PruneOutdatedChains(bool noopWithoutCanon = false)
        {
            _store.PruneOutdatedChains(noopWithoutCanon);
        }

        /// <inheritdoc cref="IStore.PutBlock{T}(Block{T})"/>
        public void PutBlock<T>(Block<T> block)
            where T : IAction, new()
        {
            if (_blockCache.ContainsKey(block.Hash))
            {
                return;
            }

            _store.PutBlock(block);
            foreach (var tx in block.Transactions)
            {
                PutTransaction(tx);
                StoreTxReferences(tx.Id, block.Hash, block.Index);
            }

            _blockCache.AddOrUpdate(block.Hash, BlockDigest.FromBlock(block));
        }

        /// <inheritdoc cref="IStore.ListChainIds()"/>
        public IEnumerable<Guid> ListChainIds()
        {
            return _store.ListChainIds();
        }

        /// <inheritdoc cref="IStore.DeleteChainId(Guid)"/>
        public void DeleteChainId(Guid chainId)
        {
            _store.DeleteChainId(chainId);
        }

        /// <inheritdoc cref="IStore.GetCanonicalChainId()"/>
        public Guid? GetCanonicalChainId()
        {
            return _store.GetCanonicalChainId();
        }

        /// <inheritdoc cref="IStore.SetCanonicalChainId()"/>
        public void SetCanonicalChainId(Guid chainId)
        {
            _store.SetCanonicalChainId(chainId);
        }

        /// <inheritdoc cref="IStore.CountIndex(Guid)"/>
        public long CountIndex(Guid chainId)
        {
            return _store.CountIndex(chainId);
        }

        /// <inheritdoc cref="IStore.IterateIndexes(Guid, int, int?)"/>
        public IEnumerable<BlockHash> IterateIndexes(
            Guid chainId,
            int offset = 0,
            int? limit = null)
        {
            return _store.IterateIndexes(chainId, offset, limit);
        }

        /// <inheritdoc cref="IStore.IndexBlockHash(Guid, long)"/>
        public BlockHash? IndexBlockHash(Guid chainId, long index)
        {
            return _store.IndexBlockHash(chainId, index);
        }

        /// <inheritdoc cref="IStore.AppendIndex(Guid, BlockHash)"/>
        public long AppendIndex(Guid chainId, BlockHash hash) =>
            _store.AppendIndex(chainId, hash);

        /// <inheritdoc cref="IStore.ForkBlockIndexes(Guid, Guid, BlockHash)"/>
        public void ForkBlockIndexes(
            Guid sourceChainId,
            Guid destinationChainId,
            BlockHash branchpoint
        ) =>
            _store.ForkBlockIndexes(sourceChainId, destinationChainId, branchpoint);

        /// <inheritdoc cref="IStore.GetTransaction{T}(TxId)"/>
        public Transaction<T> GetTransaction<T>(TxId txid)
            where T : IAction, new()
        {
            return _store.GetTransaction<T>(txid);
        }

        /// <inheritdoc cref="IStore.IterateBlockHashes()"/>
        public IEnumerable<BlockHash> IterateBlockHashes() =>
            _store.IterateBlockHashes();

        /// <inheritdoc cref="IStore.GetBlock{T}"/>
        public Block<T> GetBlock<T>(BlockHash blockHash)
            where T : IAction, new()
        {
            return _store.GetBlock<T>(blockHash);
        }

        public void PutTransaction<T>(Transaction<T> tx)
            where T : IAction, new()
        {
            _store.PutTransaction(tx);
            StoreSignerReferences(tx.Id, tx.Nonce, tx.Signer);
            foreach (var updatedAddress in tx.UpdatedAddresses)
            {
                StoreUpdatedAddressReferences(tx.Id, tx.Nonce, updatedAddress);
            }
        }

        public void StoreTxReferences(TxId txId, in BlockHash blockHash, long blockIndex)
        {
            var collection = TxRefCollection();
            collection.Upsert(
                new TxRefDoc
                {
                    TxId = txId, BlockHash = blockHash, BlockIndex = blockIndex,
                });
            collection.EnsureIndex(nameof(TxRefDoc.TxId));
            collection.EnsureIndex(nameof(TxRefDoc.BlockIndex));
        }

        public IEnumerable<(TxId, BlockHash)> IterateTxReferences(
            TxId? txId = null,
            bool desc = false,
            int offset = 0,
            int limit = int.MaxValue)
        {
            var collection = TxRefCollection();
            var order = desc ? Query.Descending : Query.Ascending;
            var query = Query.All(nameof(TxRefDoc.BlockIndex), order);

            if (!(txId is null))
            {
                query = Query.And(
                    query,
                    Query.EQ(nameof(TxRefDoc.TxId), txId?.ToByteArray())
                );
            }

            return collection.Find(query, offset, limit).Select(doc => (doc.TxId, doc.BlockHash));
        }

        public void StoreSignerReferences(TxId txId, long txNonce, Address signer)
        {
            var collection = SignerRefCollection();
            collection.Upsert(new AddressRefDoc
            {
                Address = signer, TxNonce = txNonce, TxId = txId,
            });
            collection.EnsureIndex(nameof(AddressRefDoc.AddressString));
            collection.EnsureIndex(nameof(AddressRefDoc.TxNonce));
        }

        public IEnumerable<TxId> IterateSignerReferences(
            Address signer,
            bool desc,
            int offset = 0,
            int limit = int.MaxValue)
        {
            var collection = SignerRefCollection();
            var order = desc ? Query.Descending : Query.Ascending;
            var addressString = signer.ToHex().ToLowerInvariant();
            var query = Query.And(
                Query.All(nameof(AddressRefDoc.TxNonce), order),
                Query.EQ(nameof(AddressRefDoc.AddressString), addressString)
            );
            return collection.Find(query, offset, limit).Select(doc => doc.TxId);
        }

        public void StoreUpdatedAddressReferences(
            TxId txId,
            long txNonce,
            Address updatedAddress)
        {
            var collection = UpdatedAddressRefCollection();
            collection.Upsert(new AddressRefDoc
            {
                Address = updatedAddress, TxNonce = txNonce, TxId = txId,
            });
            collection.EnsureIndex(nameof(AddressRefDoc.AddressString));
            collection.EnsureIndex(nameof(AddressRefDoc.TxNonce));
        }

        public IEnumerable<TxId> IterateUpdatedAddressReferences(
            Address updatedAddress,
            bool desc,
            int offset = 0,
            int limit = int.MaxValue)
        {
            var collection = UpdatedAddressRefCollection();
            var order = desc ? Query.Descending : Query.Ascending;
            var addressString = updatedAddress.ToHex().ToLowerInvariant();
            var query = Query.And(
                Query.All(nameof(AddressRefDoc.TxNonce), order),
                Query.EQ(nameof(AddressRefDoc.AddressString), addressString)
            );
            return collection.Find(query, offset, limit).Select(doc => doc.TxId);
        }

        public void Dispose()
        {
            if (!_disposed)
            {
                _db?.Dispose();
                _memoryStream?.Dispose();
                _store?.Dispose();
                _disposed = true;
            }
        }

        private LiteCollection<TxRefDoc> TxRefCollection() =>
            _db.GetCollection<TxRefDoc>(TxRefCollectionName);

        private LiteCollection<AddressRefDoc> SignerRefCollection() =>
            _db.GetCollection<AddressRefDoc>(SignerRefCollectionName);

        private LiteCollection<AddressRefDoc> UpdatedAddressRefCollection() =>
            _db.GetCollection<AddressRefDoc>(UpdatedAddressRefCollectionName);
    }
}
