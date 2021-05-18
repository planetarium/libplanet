using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.IO;
using System.Linq;
using System.Text;
using Bencodex;
using Libplanet.Blocks;
using Libplanet.Store;
using Libplanet.Tx;
using LruCacheNet;
using NetMQ;
using RocksDbSharp;
using Serilog;

namespace Libplanet.RocksDBStore
{
    /// <summary>
    /// The <a href="https://rocksdb.org/">RocksDB</a> <see cref="IStore"/> implementation.
    /// This stores data in the RocksDB.
    /// </summary>
    /// <seealso cref="IStore"/>
    public class MonoRocksDBStore : BaseStore
    {
        private const string BlockDbName = "block";
        private const string BlockPerceptionDbName = "blockpercept";
        private const string TxDbName = "tx";
        private const string StagedTxDbName = "stagedtx";
        private const string TxExecutionDbName = "txexec";
        private const string ChainDbName = "chain";
        private const int ForkWriteBatchSize = 100000;

        private static readonly byte[] IndexKeyPrefix = { (byte)'I' };
        private static readonly byte[] BlockKeyPrefix = { (byte)'B' };
        private static readonly byte[] TxKeyPrefix = { (byte)'T' };
        private static readonly byte[] TxNonceKeyPrefix = { (byte)'N' };
        private static readonly byte[] StagedTxKeyPrefix = { (byte)'t' };
        private static readonly byte[] TxExecutionKeyPrefix = { (byte)'e' };
        private static readonly byte[] IndexCountKey = { (byte)'c' };
        private static readonly byte[] CanonicalChainIdIdKey = { (byte)'C' };

        private static readonly byte[] EmptyBytes = new byte[0];

        private static readonly Codec Codec = new Codec();

        private readonly ILogger _logger;

        private readonly LruCache<TxId, object> _txCache;
        private readonly LruCache<BlockHash, BlockDigest> _blockCache;

        private readonly DbOptions _options;
        private readonly string _path;

        private readonly RocksDb _blockDb;
        private readonly RocksDb _blockPerceptionDb;
        private readonly RocksDb _txDb;
        private readonly RocksDb _stagedTxDb;
        private readonly RocksDb _txExecutionDb;
        private readonly RocksDb _chainDb;
        private bool _disposed = false;

        /// <summary>
        /// Creates a new <seealso cref="RocksDBStore"/>.
        /// </summary>
        /// <param name="path">The path of the directory where the storage files will be saved.
        /// </param>
        /// <param name="blockCacheSize">The capacity of the block cache.</param>
        /// <param name="txCacheSize">The capacity of the transaction cache.</param>
        /// <param name="statesCacheSize">The capacity of the states cache.</param>
        /// <param name="maxTotalWalSize">The number to configure <c>max_total_wal_size</c> RocksDB
        /// option.</param>
        /// <param name="keepLogFileNum">The number to configure <c>keep_log_file_num</c> RocksDB
        /// option.</param>
        /// <param name="maxLogFileSize">The number to configure <c>max_log_file_size</c>
        /// RocksDB option.</param>
        public MonoRocksDBStore(
            string path,
            int blockCacheSize = 512,
            int txCacheSize = 1024,
            ulong? maxTotalWalSize = null,
            ulong? keepLogFileNum = null,
            ulong? maxLogFileSize = null
        )
        {
            _logger = Log.ForContext<RocksDBStore>();

            if (path is null)
            {
                throw new ArgumentNullException(nameof(path));
            }

            path = Path.GetFullPath(path);

            if (!Directory.Exists(path))
            {
                Directory.CreateDirectory(path);
            }

            _txCache = new LruCache<TxId, object>(capacity: txCacheSize);
            _blockCache = new LruCache<BlockHash, BlockDigest>(capacity: blockCacheSize);

            _path = path;
            _options = new DbOptions()
                .SetCreateIfMissing();

            if (maxTotalWalSize is ulong maxTotalWalSizeValue)
            {
                _options = _options.SetMaxTotalWalSize(maxTotalWalSizeValue);
            }

            if (keepLogFileNum is ulong keepLogFileNumValue)
            {
                _options = _options.SetKeepLogFileNum(keepLogFileNumValue);
            }

            if (maxLogFileSize is ulong maxLogFileSizeValue)
            {
                _options = _options.SetMaxLogFileSize(maxLogFileSizeValue);
            }

            _blockDb = RocksDBUtils.OpenRocksDb(_options, RocksDbPath(BlockDbName));
            _blockPerceptionDb =
                RocksDBUtils.OpenRocksDb(_options, RocksDbPath(BlockPerceptionDbName));
            _txDb = RocksDBUtils.OpenRocksDb(_options, RocksDbPath(TxDbName));
            _stagedTxDb = RocksDBUtils.OpenRocksDb(_options, RocksDbPath(StagedTxDbName));
            _txExecutionDb =
                RocksDBUtils.OpenRocksDb(_options, RocksDbPath(TxExecutionDbName));

            // When opening a DB in a read-write mode, you need to specify all Column Families that
            // currently exist in a DB. https://github.com/facebook/rocksdb/wiki/Column-Families
            var chainDbColumnFamilies = GetColumnFamilies(_options, ChainDbName);
            _chainDb = RocksDBUtils.OpenRocksDb(
                _options, RocksDbPath(ChainDbName), chainDbColumnFamilies);
        }

        /// <inheritdoc/>
        public override IEnumerable<Guid> ListChainIds()
        {
            string path = Path.Combine(_path, ChainDbName);

            foreach (string name in RocksDb.ListColumnFamilies(_options, path))
            {
                Guid guid;

                try
                {
                    guid = Guid.Parse(name);
                }
                catch (FormatException)
                {
                    continue;
                }

                yield return guid;
            }
        }

        /// <inheritdoc/>
        public override void DeleteChainId(Guid chainId)
        {
            _logger.Debug($"Deleting chainID: {chainId}.");

            var cfName = chainId.ToString();
            try
            {
                _chainDb.DropColumnFamily(cfName);
            }
            catch (KeyNotFoundException)
            {
                // Do nothing according to the specification: DeleteChainId() should be idempotent.
                _logger.Debug($"No such chain ID in _chainDb: {cfName}.", cfName);
            }
        }

        /// <inheritdoc />
        public override Guid? GetCanonicalChainId()
        {
            byte[] bytes = _chainDb.Get(CanonicalChainIdIdKey);

            return bytes is null
                ? (Guid?)null
                : new Guid(bytes);
        }

        /// <inheritdoc />
        public override void SetCanonicalChainId(Guid chainId)
        {
            byte[] bytes = chainId.ToByteArray();
            _chainDb.Put(CanonicalChainIdIdKey, bytes);
        }

        /// <inheritdoc/>
        public override long CountIndex(Guid chainId)
        {
            ColumnFamilyHandle cf = GetColumnFamily(_chainDb, chainId);
            byte[] bytes = _chainDb.Get(IndexCountKey, cf);
            return bytes is null
                ? 0
                : RocksDBStoreBitConverter.ToInt64(bytes);
        }

        /// <inheritdoc cref="BaseStore.IterateIndexes(Guid, int, int?)"/>
        public override IEnumerable<BlockHash> IterateIndexes(Guid chainId, int offset, int? limit)
        {
            int count = 0;
            byte[] prefix = IndexKeyPrefix;

            foreach (Iterator it in IterateDb(_chainDb, prefix, chainId).Skip(offset))
            {
                if (count >= limit)
                {
                    break;
                }

                byte[] value = it.Value();
                yield return new BlockHash(value);

                count += 1;
            }
        }

        /// <inheritdoc cref="BaseStore.IndexBlockHash(Guid, long)"/>
        public override BlockHash? IndexBlockHash(Guid chainId, long index)
        {
            if (index < 0)
            {
                index += CountIndex(chainId);

                if (index < 0)
                {
                    return null;
                }
            }

            ColumnFamilyHandle cf = GetColumnFamily(_chainDb, chainId);

            byte[] indexBytes = RocksDBStoreBitConverter.GetBytes(index);

            byte[] key = IndexKeyPrefix.Concat(indexBytes).ToArray();
            byte[] bytes = _chainDb.Get(key, cf);
            return bytes is null ? (BlockHash?)null : new BlockHash(bytes);
        }

        /// <inheritdoc cref="BaseStore.AppendIndex(Guid, BlockHash)"/>
        public override long AppendIndex(Guid chainId, BlockHash hash)
        {
            long index = CountIndex(chainId);

            byte[] indexBytes = RocksDBStoreBitConverter.GetBytes(index);

            byte[] key = IndexKeyPrefix.Concat(indexBytes).ToArray();
            ColumnFamilyHandle cf = GetColumnFamily(_chainDb, chainId);

            using var writeBatch = new WriteBatch();

            writeBatch.Put(key, hash.ToByteArray(), cf);
            writeBatch.Put(IndexCountKey, RocksDBStoreBitConverter.GetBytes(index + 1), cf);

            _chainDb.Write(writeBatch);

            return index;
        }

        /// <inheritdoc cref="BaseStore.ForkBlockIndexes(Guid, Guid, BlockHash)"/>
        public override void ForkBlockIndexes(
            Guid sourceChainId,
            Guid destinationChainId,
            BlockHash branchpoint
        )
        {
            BlockHash? genesisHash = IterateIndexes(sourceChainId, 0, 1).FirstOrDefault();

            if (genesisHash is null || branchpoint.Equals(genesisHash))
            {
                return;
            }

            ColumnFamilyHandle cf = GetColumnFamily(_chainDb, destinationChainId);
            var writeBatch = new WriteBatch();
            long index = 0;
            try
            {
                foreach (Iterator it in IterateDb(_chainDb, IndexKeyPrefix, sourceChainId))
                {
                    byte[] hashBytes = it.Value();
                    writeBatch.Put(it.Key(), hashBytes, cf);
                    index += 1;

                    if (writeBatch.Count() >= ForkWriteBatchSize)
                    {
                        _chainDb.Write(writeBatch);
                        writeBatch.Dispose();
                        writeBatch = new WriteBatch();
                    }

                    if (branchpoint.ByteArray.SequenceEqual(hashBytes))
                    {
                        break;
                    }
                }
            }
            finally
            {
                _chainDb.Write(writeBatch);
                writeBatch.Dispose();
            }

            _chainDb.Put(
                IndexCountKey,
                RocksDBStoreBitConverter.GetBytes(index),
                cf
            );
        }

        /// <inheritdoc/>
        public override void StageTransactionIds(IImmutableSet<TxId> txids)
        {
            foreach (TxId txId in txids)
            {
                byte[] key = StagedTxKey(txId);
                _stagedTxDb.Put(key, EmptyBytes);
            }
        }

        /// <inheritdoc/>
        public override void UnstageTransactionIds(ISet<TxId> txids)
        {
            foreach (TxId txId in txids)
            {
                byte[] key = StagedTxKey(txId);
                _stagedTxDb.Remove(key);
            }
        }

        /// <inheritdoc/>
        public override IEnumerable<TxId> IterateStagedTransactionIds()
        {
            byte[] prefix = StagedTxKeyPrefix;
            foreach (var it in IterateDb(_stagedTxDb, prefix))
            {
                byte[] key = it.Key();
                byte[] txIdBytes = key.Skip(prefix.Length).ToArray();
                yield return new TxId(txIdBytes);
            }
        }

        /// <inheritdoc/>
        public override IEnumerable<TxId> IterateTransactionIds()
        {
            byte[] prefix = TxKeyPrefix;

            foreach (Iterator it in IterateDb(_txDb, prefix))
            {
                byte[] key = it.Key();
                byte[] txIdBytes = key.Skip(prefix.Length).ToArray();

                var txId = new TxId(txIdBytes);
                yield return txId;
            }
        }

        /// <inheritdoc/>
        public override Transaction<T> GetTransaction<T>(TxId txid)
        {
            if (_txCache.TryGetValue(txid, out object cachedTx))
            {
                return (Transaction<T>)cachedTx;
            }

            byte[] key = TxKey(txid);
            byte[] bytes = _txDb.Get(key);

            if (bytes is null)
            {
                return null;
            }

            Transaction<T> tx = Transaction<T>.Deserialize(bytes, false);
            _txCache.AddOrUpdate(txid, tx);
            return tx;
        }

        /// <inheritdoc/>
        public override void PutTransaction<T>(Transaction<T> tx)
        {
            if (_txCache.ContainsKey(tx.Id))
            {
                return;
            }

            byte[] key = TxKey(tx.Id);

            if (!(_txDb.Get(key) is null))
            {
                return;
            }

            _txDb.Put(key, tx.Serialize(true));
            _txCache.AddOrUpdate(tx.Id, tx);
        }

        /// <inheritdoc/>
        public override bool DeleteTransaction(TxId txid)
        {
            byte[] key = TxKey(txid);

            if (_txDb.Get(key) is null)
            {
                return false;
            }

            _txCache.Remove(txid);
            _txDb.Remove(key);

            return true;
        }

        /// <inheritdoc/>
        public override bool ContainsTransaction(TxId txId)
        {
            if (_txCache.ContainsKey(txId))
            {
                return true;
            }

            byte[] key = TxKey(txId);

            return !(_txDb.Get(key) is null);
        }

        /// <inheritdoc cref="BaseStore.IterateBlockHashes()"/>
        public override IEnumerable<BlockHash> IterateBlockHashes()
        {
            byte[] prefix = BlockKeyPrefix;

            foreach (Iterator it in IterateDb(_blockDb, prefix))
            {
                byte[] key = it.Key();
                byte[] hashBytes = key.Skip(prefix.Length).ToArray();
                yield return new BlockHash(hashBytes);
            }
        }

        /// <inheritdoc cref="BaseStore.GetBlockDigest(BlockHash)"/>
        public override BlockDigest? GetBlockDigest(BlockHash blockHash)
        {
            if (_blockCache.TryGetValue(blockHash, out BlockDigest cachedDigest))
            {
                return cachedDigest;
            }

            byte[] key = BlockKey(blockHash);
            byte[] bytes = _blockDb.Get(key);

            if (bytes is null)
            {
                return null;
            }

            BlockDigest blockDigest = BlockDigest.Deserialize(bytes);

            _blockCache.AddOrUpdate(blockHash, blockDigest);
            return blockDigest;
        }

        /// <inheritdoc/>
        public override void PutBlock<T>(Block<T> block)
        {
            if (_blockCache.ContainsKey(block.Hash))
            {
                return;
            }

            byte[] key = BlockKey(block.Hash);

            if (!(_blockDb.Get(key) is null))
            {
                return;
            }

            foreach (Transaction<T> tx in block.Transactions)
            {
                PutTransaction(tx);
            }

            byte[] value = block.ToBlockDigest().Serialize();
            _blockDb.Put(key, value);
            _blockCache.AddOrUpdate(block.Hash, block.ToBlockDigest());
        }

        /// <inheritdoc/>
        public override void PutBlockHeader(BlockHeader blockHeader)
        {
            throw new NotSupportedException();
        }

        /// <inheritdoc cref="BaseStore.DeleteBlock(BlockHash)"/>
        public override bool DeleteBlock(BlockHash blockHash)
        {
            byte[] key = BlockKey(blockHash);

            if (_blockDb.Get(key) is null)
            {
                return false;
            }

            _blockCache.Remove(blockHash);
            _blockDb.Remove(key);

            return true;
        }

        /// <inheritdoc cref="BaseStore.ContainsBlock(BlockHash)"/>
        public override bool ContainsBlock(BlockHash blockHash)
        {
            if (_blockCache.ContainsKey(blockHash))
            {
                return true;
            }

            byte[] key = BlockKey(blockHash);

            return !(_blockDb.Get(key) is null);
        }

        /// <inheritdoc cref="BaseStore.PutTxExecution(Libplanet.Tx.TxSuccess)"/>
        public override void PutTxExecution(TxSuccess txSuccess) =>
            _txExecutionDb.Put(
                TxExecutionKey(txSuccess),
                Codec.Encode(SerializeTxExecution(txSuccess))
            );

        /// <inheritdoc cref="BaseStore.PutTxExecution(Libplanet.Tx.TxFailure)"/>
        public override void PutTxExecution(TxFailure txFailure) =>
            _txExecutionDb.Put(
                TxExecutionKey(txFailure),
                Codec.Encode(SerializeTxExecution(txFailure))
            );

        /// <inheritdoc cref="BaseStore.GetTxExecution(BlockHash, TxId)"/>
        public override TxExecution GetTxExecution(BlockHash blockHash, TxId txid)
        {
            byte[] key = TxExecutionKey(blockHash, txid);
            if (_txExecutionDb.Get(key) is { } bytes)
            {
                return DeserializeTxExecution(blockHash, txid, Codec.Decode(bytes), _logger);
            }

            return null;
        }

        /// <inheritdoc cref="BaseStore.SetBlockPerceivedTime(BlockHash, DateTimeOffset)"/>
        public override void SetBlockPerceivedTime(
            BlockHash blockHash,
            DateTimeOffset perceivedTime
        )
        {
            byte[] key = BlockKey(blockHash);
            _blockPerceptionDb.Put(
                key,
                NetworkOrderBitsConverter.GetBytes(perceivedTime.ToUnixTimeMilliseconds())
            );
        }

        /// <inheritdoc cref="BaseStore.GetBlockPerceivedTime(BlockHash)"/>
        public override DateTimeOffset? GetBlockPerceivedTime(BlockHash blockHash)
        {
            byte[] key = BlockKey(blockHash);
            if (_blockPerceptionDb.Get(key) is { } bytes)
            {
                long unixTimeMs = NetworkOrderBitsConverter.ToInt64(bytes);
                return DateTimeOffset.FromUnixTimeMilliseconds(unixTimeMs);
            }

            return null;
        }

        /// <inheritdoc/>
        public override IEnumerable<KeyValuePair<Address, long>> ListTxNonces(Guid chainId)
        {
            byte[] prefix = TxNonceKeyPrefix;

            foreach (Iterator it in IterateDb(_chainDb, prefix, chainId))
            {
                byte[] addressBytes = it.Key()
                    .Skip(prefix.Length)
                    .ToArray();
                var address = new Address(addressBytes);
                long nonce = RocksDBStoreBitConverter.ToInt64(it.Value());
                yield return new KeyValuePair<Address, long>(address, nonce);
            }
        }

        /// <inheritdoc/>
        public override long GetTxNonce(Guid chainId, Address address)
        {
            ColumnFamilyHandle cf = GetColumnFamily(_chainDb, chainId);
            byte[] key = TxNonceKey(address);
            byte[] bytes = _chainDb.Get(key, cf);

            return bytes is null
                ? 0
                : RocksDBStoreBitConverter.ToInt64(bytes);
        }

        /// <inheritdoc/>
        public override void IncreaseTxNonce(Guid chainId, Address signer, long delta = 1)
        {
            ColumnFamilyHandle cf = GetColumnFamily(_chainDb, chainId);
            long nextNonce = GetTxNonce(chainId, signer) + delta;

            byte[] key = TxNonceKey(signer);
            byte[] bytes = RocksDBStoreBitConverter.GetBytes(nextNonce);

            _chainDb.Put(key, bytes, cf);
        }

        /// <inheritdoc/>
        public override long CountTransactions()
        {
            return IterateTransactionIds().LongCount();
        }

        /// <inheritdoc/>
        public override long CountBlocks()
        {
            return IterateBlockHashes().LongCount();
        }

        public override void ForkTxNonces(Guid sourceChainId, Guid destinationChainId)
        {
            byte[] prefix = TxNonceKeyPrefix;
            ColumnFamilyHandle cf = GetColumnFamily(_chainDb, destinationChainId);
            var writeBatch = new WriteBatch();
            try
            {
                foreach (Iterator it in IterateDb(_chainDb, prefix, sourceChainId))
                {
                    writeBatch.Put(it.Key(), it.Value(), cf);
                    if (writeBatch.Count() >= ForkWriteBatchSize)
                    {
                        _chainDb.Write(writeBatch);
                        writeBatch.Dispose();
                        writeBatch = new WriteBatch();
                    }
                }
            }
            finally
            {
                _chainDb.Write(writeBatch);
                writeBatch.Dispose();
            }
        }

        public override void Dispose()
        {
            if (!_disposed)
            {
                _chainDb?.Dispose();
                _txDb?.Dispose();
                _blockDb?.Dispose();
                _blockPerceptionDb?.Dispose();
                _txExecutionDb?.Dispose();
                _stagedTxDb?.Dispose();
                _disposed = true;
            }
        }

        private byte[] BlockKey(in BlockHash blockHash) =>
            BlockKeyPrefix.Concat(blockHash.ByteArray).ToArray();

        private byte[] TxKey(in TxId txId) =>
            TxKeyPrefix.Concat(txId.ByteArray).ToArray();

        private byte[] TxNonceKey(in Address address) =>
            TxNonceKeyPrefix.Concat(address.ByteArray).ToArray();

        private byte[] StagedTxKey(in TxId txId) =>
            StagedTxKeyPrefix.Concat(txId.ByteArray).ToArray();

        private byte[] TxExecutionKey(in BlockHash blockHash, in TxId txId) =>

            // As BlockHash is not fixed size, place TxId first.
            TxExecutionKeyPrefix.Concat(txId.ByteArray).Concat(blockHash.ByteArray).ToArray();

        private byte[] TxExecutionKey(TxExecution txExecution) =>
            TxExecutionKey(txExecution.BlockHash, txExecution.TxId);

        private IEnumerable<Iterator> IterateDb(RocksDb db, byte[] prefix, Guid? chainId = null)
        {
            ColumnFamilyHandle cf = GetColumnFamily(db, chainId);
            using Iterator it = db.NewIterator(cf);
            for (it.Seek(prefix); it.Valid() && it.Key().StartsWith(prefix); it.Next())
            {
                yield return it;
            }
        }

        private ColumnFamilyHandle GetColumnFamily(RocksDb db, Guid? chainId = null)
        {
            if (chainId is null)
            {
                return null;
            }

            var cfName = chainId.ToString();

            ColumnFamilyHandle cf;
            try
            {
                cf = db.GetColumnFamily(cfName);
            }
            catch (KeyNotFoundException)
            {
                cf = db.CreateColumnFamily(_options, cfName);
            }

            return cf;
        }

        private ColumnFamilies GetColumnFamilies(DbOptions options, string dbName)
        {
            var dbPath = Path.Combine(_path, dbName);
            var columnFamilies = new ColumnFamilies();
            List<string> listColumnFamilies;

            try
            {
                listColumnFamilies = RocksDb.ListColumnFamilies(options, dbPath).ToList();
            }
            catch (RocksDbException)
            {
                listColumnFamilies = new List<string>();
            }

            foreach (string name in listColumnFamilies)
            {
                columnFamilies.Add(name, _options);
            }

            return columnFamilies;
        }

        private string RocksDbPath(string dbName) => Path.Combine(_path, dbName);

        internal static class RocksDBUtils
        {
            internal static RocksDb OpenRocksDb(
                DbOptions options, string dbPath, ColumnFamilies columnFamilies = null)
            {
                return columnFamilies is null
                    ? RocksDb.Open(options, dbPath)
                    : RocksDb.Open(options, dbPath, columnFamilies);
            }
        }

        internal static class RocksDBStoreBitConverter
        {
            /// <summary>
            /// Get <c>long</c> representation of the <paramref name="value"/>.
            /// </summary>
            /// <param name="value">The Big-endian byte-array value
            /// to convert to <c>long</c>.</param>
            /// <returns>The <c>long</c> representation of the <paramref name="value"/>.</returns>
            public static long ToInt64(byte[] value)
            {
                byte[] bytes = new byte[sizeof(long)];
                value.CopyTo(bytes, 0);

                // Use Big-endian to order index lexicographically.
                if (BitConverter.IsLittleEndian)
                {
                    Array.Reverse(bytes);
                }

                return BitConverter.ToInt64(bytes, 0);
            }

            /// <summary>
            /// Get <c>string</c> representation of the <paramref name="value"/>.
            /// </summary>
            /// <param name="value">The byte-array value to convert to <c>string</c>.</param>
            /// <returns>The <c>string</c> representation of the <paramref name="value"/>.</returns>
            public static string GetString(byte[] value)
            {
                return Encoding.UTF8.GetString(value);
            }

            /// <summary>
            /// Get Big-endian byte-array representation of the <paramref name="value"/>.
            /// </summary>
            /// <param name="value">The <c>long</c> value to convert to byte-array.</param>
            /// <returns>The Big-endian byte-array representation of the <paramref name="value"/>.
            /// </returns>
            public static byte[] GetBytes(long value)
            {
                byte[] bytes = BitConverter.GetBytes(value);

                // Use Big-endian to order index lexicographically.
                if (BitConverter.IsLittleEndian)
                {
                    Array.Reverse(bytes);
                }

                return bytes;
            }

            /// <summary>
            /// Get encoded byte-array representation of the <paramref name="value"/>.
            /// </summary>
            /// <param name="value">The <c>string</c> to convert to byte-array.</param>
            /// <returns>The encoded representation of the <paramref name="value"/>.</returns>
            public static byte[] GetBytes(string value)
            {
                return Encoding.UTF8.GetBytes(value);
            }
        }
    }
}
