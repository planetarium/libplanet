#nullable enable
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Store;
using Libplanet.Tx;
using LruCacheNet;
using MySqlConnector;
using Serilog;
using SqlKata;
using SqlKata.Compilers;
using SqlKata.Execution;

namespace Libplanet.Explorer.Store
{
    // It assumes running Explorer as online-mode.
    public class MySQLRichStore : IRichStore
    {
        private const string TxRefDbName = "block_ref";
        private const string SignerRefDbName = "signer_ref";
        private const string UpdatedAddressRefDbName = "updated_address_ref";

        private readonly LruCache<BlockHash, BlockDigest> _blockCache;

        // FIXME we should separate it.
        private readonly IStore _store;

        private readonly MySqlCompiler _compiler;
        private readonly string _connectionString;

        public MySQLRichStore(IStore store, MySQLRichStoreOptions options)
        {
            _store = store;

            var builder = new MySqlConnectionStringBuilder
            {
                Database = options.Database,
                UserID = options.Username,
                Password = options.Password,
                Server = options.Server,
                Port = options.Port,
            };

            _connectionString = builder.ConnectionString;
            _compiler = new MySqlCompiler();

            _blockCache = new LruCache<BlockHash, BlockDigest>(capacity: 512);
        }

        /// <inheritdoc cref="IStore.GetBlockIndex(BlockHash)"/>
        public long? GetBlockIndex(BlockHash blockHash) =>
            _store.GetBlockIndex(blockHash);

        public DateTimeOffset? GetBlockPerceivedTime(BlockHash blockHash) =>
            _store.GetBlockPerceivedTime(blockHash);

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
        public bool ContainsBlock(BlockHash blockHash)
        {
            if (_blockCache.ContainsKey(blockHash))
            {
                return true;
            }

            return _store.ContainsBlock(blockHash);
        }

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

        /// <inheritdoc cref="IStore.CountTransactions()"/>
        public long CountTransactions()
        {
            return _store.CountTransactions();
        }

        /// <inheritdoc cref="IStore.CountBlocks()"/>
        public long CountBlocks()
        {
            return _store.CountBlocks();
        }

        public void ForkTxNonces(Guid sourceChainId, Guid destinationChainId)
        {
            _store.ForkTxNonces(sourceChainId, destinationChainId);
        }

        /// <inheritdoc cref="IStore.PutBlock{T}(Block{T})"/>
        public void PutBlock<T>(Block<T> block)
            where T : IAction, new()
        {
            _store.PutBlock(block);
            foreach (var tx in block.Transactions)
            {
                PutTransaction(tx);
                StoreTxReferences(tx.Id, block.Hash, tx.Nonce);
            }
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

        /// <inheritdoc cref="IStore.SetCanonicalChainId(Guid)"/>
        public void SetCanonicalChainId(Guid chainId)
        {
            _store.SetCanonicalChainId(chainId);
        }

        /// <inheritdoc cref="IStore.CountIndex(Guid)"/>
        public long CountIndex(Guid chainId)
        {
            return _store.CountIndex(chainId);
        }

        /// <inheritdoc cref="IStore.IterateIndexes(Guid, int, int)"/>
        public IEnumerable<BlockHash> IterateIndexes(
            Guid chainId,
            int offset = 0,
            int? limit = null
        ) =>
            _store.IterateIndexes(chainId, offset, limit);

        /// <inheritdoc cref="IStore.IndexBlockHash(Guid, long)"/>
        public BlockHash? IndexBlockHash(Guid chainId, long index) =>
            _store.IndexBlockHash(chainId, index);

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

        /// <inheritdoc cref="IStore.StageTransactionIds(IImmutableSet{TxId})"/>
        public void StageTransactionIds(IImmutableSet<TxId> txids)
        {
            _store.StageTransactionIds(txids);
        }

        /// <inheritdoc cref="IStore.UnstageTransactionIds(ISet{TxId})"/>
        public void UnstageTransactionIds(ISet<TxId> txids)
        {
            _store.UnstageTransactionIds(txids);
        }

        /// <inheritdoc cref="IStore.IterateStagedTransactionIds()"/>
        public IEnumerable<TxId> IterateStagedTransactionIds()
        {
            return _store.IterateStagedTransactionIds();
        }

        /// <inheritdoc cref="IStore.IterateTransactionIds()"/>
        public IEnumerable<TxId> IterateTransactionIds()
        {
            return _store.IterateTransactionIds();
        }

        /// <inheritdoc cref="IStore.GetTransaction{T}(TxId)"/>
        public Transaction<T> GetTransaction<T>(TxId txid)
            where T : IAction, new()
        {
            return _store.GetTransaction<T>(txid);
        }

        /// <inheritdoc cref="IStore.DeleteTransaction(TxId)"/>
        public bool DeleteTransaction(TxId txid)
        {
            return _store.DeleteTransaction(txid);
        }

        /// <inheritdoc cref="IStore.IterateBlockHashes()"/>
        public IEnumerable<BlockHash> IterateBlockHashes() =>
            _store.IterateBlockHashes();

        /// <inheritdoc cref="IStore.GetBlock{T}(BlockHash)"/>
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
            InsertMany(
                "updated_address_references",
                new[] { "updated_address", "tx_id", "tx_nonce" },
                tx.UpdatedAddresses.Select(
                    addr => new object[]
                    {
                        addr.ToByteArray(), tx.Id.ToByteArray(), tx.Nonce,
                    }));
        }

        public void SetBlockPerceivedTime(
            BlockHash blockHash,
            DateTimeOffset perceivedTime
        ) =>
            _store.SetBlockPerceivedTime(blockHash, perceivedTime);

        public void StoreTxReferences(TxId txId, in BlockHash blockHash,  long txNonce)
        {
            Insert("tx_references", new Dictionary<string, object>
            {
                ["tx_id"] = txId.ToByteArray(),
                ["tx_nonce"] = txNonce,
                ["block_hash"] = blockHash.ToByteArray(),
            });
        }

        public IEnumerable<ValueTuple<TxId, BlockHash>> IterateTxReferences(
            TxId? txId = null,
            bool desc = false,
            int offset = 0,
            int limit = int.MaxValue)
        {
            using QueryFactory db = OpenDB();
            Query query = db.Query("tx_references").Select(new[] { "tx_id", "block_hash" });
            if (!(txId is null))
            {
                query = query.Where("tx_id", txId?.ToByteArray());
            }

            query = desc ? query.OrderByDesc("tx_nonce") : query.OrderBy("tx_nonce");
            query = query.Offset(offset).Limit(limit);
            return db.GetDictionary(query).Select(dict => new ValueTuple<TxId, BlockHash>(
                new TxId((byte[])dict["tx_id"]),
                new BlockHash((byte[])dict["block_hash"])));
        }

        public void StoreSignerReferences(TxId txId, long txNonce, Address signer)
        {
            Insert("signer_references", new Dictionary<string, object>
            {
                ["signer"] = signer.ToByteArray(),
                ["tx_id"] = txId.ToByteArray(),
                ["tx_nonce"] = txNonce,
            });
        }

        public IEnumerable<TxId> IterateSignerReferences(
            Address signer,
            bool desc,
            int offset = 0,
            int limit = int.MaxValue)
        {
            using QueryFactory db = OpenDB();
            var query = db.Query("signer_references").Where("signer", signer.ToByteArray())
                .Offset(offset)
                .Limit(limit)
                .Select("tx_id");
            query = desc ? query.OrderByDesc("tx_nonce") : query.OrderBy("tx_nonce");
            return query.OrderBy("tx_nonce")
                .Get<byte[]>()
                .Select(bytes => new TxId(bytes));
        }

        public void StoreUpdatedAddressReferences(
            TxId txId,
            long txNonce,
            Address updatedAddress)
        {
            Insert("updated_address_references", new Dictionary<string, object>
            {
                ["updated_address"] = updatedAddress.ToByteArray(),
                ["tx_id"] = txId.ToByteArray(),
                ["tx_nonce"] = txNonce,
            });
        }

        public IEnumerable<TxId> IterateUpdatedAddressReferences(
            Address updatedAddress,
            bool desc,
            int offset = 0,
            int limit = int.MaxValue)
        {
            using QueryFactory db = OpenDB();
            var query = db.Query("updated_address_references")
                .Where("updated_address", updatedAddress.ToByteArray())
                .Offset(offset)
                .Limit(limit)
                .Select("tx_id");
            query = desc ? query.OrderByDesc("tx_nonce") : query.OrderBy("tx_nonce");
            return query.OrderBy("tx_nonce")
                .Get<byte[]>()
                .Select(bytes => new TxId(bytes));
        }

        private QueryFactory OpenDB() =>
            new QueryFactory(new MySqlConnection(_connectionString), _compiler);

        private void Insert(string tableName, IReadOnlyDictionary<string, object> data)
        {
            using QueryFactory db = OpenDB();
            try
            {
                db.Query(tableName).Insert(data);
            }
            catch (MySqlException e)
            {
                Log.Debug(e.ErrorCode.ToString());
                if (e.ErrorCode == MySqlErrorCode.DuplicateKeyEntry)
                {
                    Log.Debug("Ignore DuplicateKeyEntry");
                }
                else
                {
                    throw;
                }
            }
        }

        private void InsertMany(
            string tableName,
            string[] columns,
            IEnumerable<object[]> data)
        {
            using QueryFactory db = OpenDB();
            try
            {
                db.Query(tableName).Insert(columns, data);
            }
            catch (MySqlException e)
            {
                if (e.ErrorCode == MySqlErrorCode.DuplicateKeyEntry)
                {
                    Log.Debug("Ignore DuplicateKeyEntry");
                }
                else
                {
                    throw;
                }
            }
        }
    }
}
