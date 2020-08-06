using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.IO;
using System.Linq;
using System.Runtime.InteropServices;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Store;
using Libplanet.Tx;
using LiteDB;
using FileMode = LiteDB.FileMode;

namespace Libplanet.Explorer.Store
{
    // It assumes running Explorer as online-mode.
    public class RichStore : IRichStore
    {
        private const string TxRefCollectionName = "block_ref";
        private const string SignerRefCollectionName = "signer_ref";
        private const string UpdatedAddressRefCollectionName = "updated_address_ref";

        private readonly MemoryStream _memoryStream;
        private readonly LiteDatabase _db;
        private readonly IStore _store;

        public RichStore(
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
                        b => new HashDigest<SHA256>(b));
                    _db.Mapper.RegisterType(
                        txid => txid.ToByteArray(),
                        b => new TxId(b));
                    _db.Mapper.RegisterType(
                        address => address.ToByteArray(),
                        b => new Address(b.AsBinary));
                }
            }
        }

        /// <inheritdoc cref="IStore"/>
        public long? GetBlockIndex(HashDigest<SHA256> blockHash)
        {
            return _store.GetBlockIndex(blockHash);
        }

        public BlockDigest? GetBlockDigest(HashDigest<SHA256> blockHash)
        {
            return _store.GetBlockDigest(blockHash);
        }

        /// <inheritdoc cref="IStore"/>
        public bool DeleteBlock(HashDigest<SHA256> blockHash)
        {
            return _store.DeleteBlock(blockHash);
        }

        /// <inheritdoc cref="IStore"/>
        public bool ContainsBlock(HashDigest<SHA256> blockHash)
        {
            return _store.ContainsBlock(blockHash);
        }

        /// <inheritdoc cref="IStore"/>
        public IImmutableDictionary<string, IValue> GetBlockStates(HashDigest<SHA256> blockHash)
        {
            return _store.GetBlockStates(blockHash);
        }

        /// <inheritdoc cref="IStore"/>
        public void SetBlockStates(
            HashDigest<SHA256> blockHash,
            IImmutableDictionary<string, IValue> states)
        {
            _store.SetBlockStates(blockHash, states);
        }

        public void PruneBlockStates<T>(Guid chainId, Block<T> until)
            where T : IAction, new()
        {
            _store.PruneBlockStates(chainId, until);
        }

        /// <inheritdoc cref="IStore"/>
        public Tuple<HashDigest<SHA256>, long> LookupStateReference<T>(
            Guid chainId,
            string key,
            Block<T> lookupUntil)
            where T : IAction, new()
        {
            return _store.LookupStateReference(chainId, key, lookupUntil);
        }

        /// <inheritdoc cref="IStore"/>
        public IEnumerable<Tuple<HashDigest<SHA256>, long>> IterateStateReferences(
            Guid chainId,
            string key,
            long? highestIndex = null,
            long? lowestIndex = null,
            int? limit = null)
        {
            return _store.IterateStateReferences(
                chainId,
                key,
                highestIndex,
                lowestIndex,
                limit);
        }

        /// <inheritdoc cref="IStore"/>
        public void StoreStateReference(
            Guid chainId,
            IImmutableSet<string> keys,
            HashDigest<SHA256> blockHash,
            long blockIndex)
        {
            _store.StoreStateReference(chainId, keys, blockHash, blockIndex);
        }

        /// <inheritdoc cref="IStore"/>
        public void ForkStateReferences<T>(
            Guid sourceChainId,
            Guid destinationChainId,
            Block<T> branchPoint)
            where T : IAction, new()
        {
            _store.ForkStateReferences(sourceChainId, destinationChainId, branchPoint);
        }

        /// <inheritdoc cref="IStore"/>
        public IEnumerable<KeyValuePair<Address, long>> ListTxNonces(Guid chainId)
        {
            return _store.ListTxNonces(chainId);
        }

        /// <inheritdoc cref="IStore"/>
        public long GetTxNonce(Guid chainId, Address address)
        {
            return _store.GetTxNonce(chainId, address);
        }

        /// <inheritdoc cref="IStore"/>
        public void IncreaseTxNonce(Guid chainId, Address signer, long delta = 1)
        {
            _store.IncreaseTxNonce(chainId, signer, delta);
        }

        /// <inheritdoc cref="IStore"/>
        public bool ContainsTransaction(TxId txId)
        {
            return _store.ContainsTransaction(txId);
        }

        /// <inheritdoc cref="IStore"/>
        public long CountTransactions()
        {
            return _store.CountTransactions();
        }

        /// <inheritdoc cref="IStore"/>
        public long CountBlocks()
        {
            return _store.CountBlocks();
        }

        /// <inheritdoc cref="IStore"/>
        public void PutBlock<T>(Block<T> block)
            where T : IAction, new()
        {
            _store.PutBlock(block);
            foreach (var tx in block.Transactions)
            {
                PutTransaction(tx);
                StoreTxReferences(tx.Id, block.Hash, block.Index);
            }
        }

        /// <inheritdoc cref="IStore"/>
        public IEnumerable<Guid> ListChainIds()
        {
            return _store.ListChainIds();
        }

        /// <inheritdoc cref="IStore"/>
        public void DeleteChainId(Guid chainId)
        {
            _store.DeleteChainId(chainId);
        }

        /// <inheritdoc cref="IStore"/>
        public Guid? GetCanonicalChainId()
        {
            return _store.GetCanonicalChainId();
        }

        /// <inheritdoc cref="IStore"/>
        public void SetCanonicalChainId(Guid chainId)
        {
            _store.SetCanonicalChainId(chainId);
        }

        /// <inheritdoc cref="IStore"/>
        public long CountIndex(Guid chainId)
        {
            return _store.CountIndex(chainId);
        }

        /// <inheritdoc cref="IStore"/>
        public IEnumerable<HashDigest<SHA256>> IterateIndexes(
            Guid chainId,
            int offset = 0,
            int? limit = null)
        {
            return _store.IterateIndexes(chainId, offset, limit);
        }

        /// <inheritdoc cref="IStore"/>
        public HashDigest<SHA256>? IndexBlockHash(Guid chainId, long index)
        {
            return _store.IndexBlockHash(chainId, index);
        }

        /// <inheritdoc cref="IStore"/>
        public long AppendIndex(Guid chainId, HashDigest<SHA256> hash)
        {
            return _store.AppendIndex(chainId, hash);
        }

        /// <inheritdoc cref="IStore"/>
        public void ForkBlockIndexes(
            Guid sourceChainId,
            Guid destinationChainId,
            HashDigest<SHA256> branchPoint)
        {
            _store.ForkBlockIndexes(sourceChainId, destinationChainId, branchPoint);
        }

        /// <inheritdoc cref="IStore"/>
        public IEnumerable<string> ListStateKeys(Guid chainId)
        {
            return _store.ListStateKeys(chainId);
        }

        /// <inheritdoc cref="IStore"/>
        public IImmutableDictionary<string, IImmutableList<HashDigest<SHA256>>>
            ListAllStateReferences(
            Guid chainId,
            long lowestIndex = 0,
            long highestIndex = long.MaxValue)
        {
            return _store.ListAllStateReferences(chainId, lowestIndex, highestIndex);
        }

        /// <inheritdoc cref="IStore"/>
        public void StageTransactionIds(IImmutableSet<TxId> txids)
        {
            _store.StageTransactionIds(txids);
        }

        /// <inheritdoc cref="IStore"/>
        public void UnstageTransactionIds(ISet<TxId> txids)
        {
            _store.UnstageTransactionIds(txids);
        }

        /// <inheritdoc cref="IStore"/>
        public IEnumerable<TxId> IterateStagedTransactionIds()
        {
            return _store.IterateStagedTransactionIds();
        }

        /// <inheritdoc cref="IStore"/>
        public IEnumerable<TxId> IterateTransactionIds()
        {
            return _store.IterateTransactionIds();
        }

        /// <inheritdoc cref="IStore"/>
        public Transaction<T> GetTransaction<T>(TxId txid)
            where T : IAction, new()
        {
            return _store.GetTransaction<T>(txid);
        }

        /// <inheritdoc cref="IStore"/>
        public bool DeleteTransaction(TxId txid)
        {
            return _store.DeleteTransaction(txid);
        }

        /// <inheritdoc cref="IStore"/>
        public IEnumerable<HashDigest<SHA256>> IterateBlockHashes()
        {
            return _store.IterateBlockHashes();
        }

        /// <inheritdoc cref="IStore"/>
        public Block<T> GetBlock<T>(HashDigest<SHA256> blockHash)
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

        public void StoreTxReferences(TxId txId, HashDigest<SHA256> blockHash, long blockIndex)
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

        public IEnumerable<ValueTuple<TxId, HashDigest<SHA256>>> IterateTxReferences(
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

        private LiteCollection<TxRefDoc> TxRefCollection() =>
            _db.GetCollection<TxRefDoc>(TxRefCollectionName);

        private LiteCollection<AddressRefDoc> SignerRefCollection() =>
            _db.GetCollection<AddressRefDoc>(SignerRefCollectionName);

        private LiteCollection<AddressRefDoc> UpdatedAddressRefCollection() =>
            _db.GetCollection<AddressRefDoc>(UpdatedAddressRefCollectionName);
    }
}
