using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.IO;
using System.Linq;
using System.Threading;
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
    /// The <a href="https://rocksdb.org/">RocksDB</a> <see cref="IStore"/> implementation,
    /// which is more production-ready than <see cref="DefaultStore"/>.
    /// This stores data in the RocksDB with multiple partitions under the hood.
    /// </summary>
    /// <seealso cref="IStore"/>
    public class RocksDBStore : BaseStore
    {
        private const string BlockDbRootPathName = "block";
        private const string BlockIndexDbName = "blockindex";
        private const string BlockPerceptionDbName = "blockpercept";
        private const string TxDbRootPathName = "tx";
        private const string TxIndexDbName = "txindex";
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
        private static readonly byte[] IndexCountKeyPrefix = { (byte)'c' };
        private static readonly byte[] CanonicalChainIdIdKey = { (byte)'C' };
        private static readonly byte[] PreviousChainIdKeyPrefix = { (byte)'P' };
        private static readonly byte[] PreviousChainIndexKeyPrefix = { (byte)'p' };
        private static readonly byte[] ForkedChainsKeyPrefix = { (byte)'f' };
        private static readonly byte[] DeletedKeyPrefix = { (byte)'d' };
        private static readonly byte[] ChainIdKeyPrefix = { (byte)'h' };

        private static readonly byte[] EmptyBytes = new byte[0];

        private static readonly Codec Codec = new Codec();

        private readonly ILogger _logger;

        private readonly LruCache<TxId, object> _txCache;
        private readonly LruCache<BlockHash, BlockDigest> _blockCache;

        private readonly DbOptions _options;
        private readonly string _path;
        private readonly int _txEpochUnitSeconds;
        private readonly int _blockEpochUnitSeconds;

        private readonly RocksDb _blockIndexDb;
        private readonly RocksDb _blockPerceptionDb;
        private readonly LruCache<string, RocksDb> _blockDbCache;
        private readonly RocksDb _txIndexDb;
        private readonly LruCache<string, RocksDb> _txDbCache;
        private readonly RocksDb _stagedTxDb;
        private readonly RocksDb _txExecutionDb;
        private readonly RocksDb _chainDb;

        private readonly ReaderWriterLockSlim _rwTxLock;
        private readonly ReaderWriterLockSlim _rwBlockLock;
        private bool _disposed = false;
        private object _chainForkDeleteLock = new object();

        /// <summary>
        /// Creates a new <seealso cref="RocksDBStore"/>.
        /// </summary>
        /// <param name="path">The path of the directory where the storage files will be saved.
        /// </param>
        /// <param name="blockCacheSize">The capacity of the block cache.</param>
        /// <param name="txCacheSize">The capacity of the transaction cache.</param>
        /// <param name="maxTotalWalSize">The number to configure <c>max_total_wal_size</c> RocksDB
        /// option.</param>
        /// <param name="keepLogFileNum">The number to configure <c>keep_log_file_num</c> RocksDB
        /// option.</param>
        /// <param name="maxLogFileSize">The number to configure <c>max_log_file_size</c>
        /// RocksDB option.</param>
        /// <param name="txEpochUnitSeconds">The interval between epochs of DB partions containing
        /// transactions.  86,400 seconds by default.</param>
        /// <param name="blockEpochUnitSeconds">The interval between epochs of DB partions
        /// containing blocks.  86,400 seconds by default.</param>
        /// <param name="dbConnectionCacheSize">The capacity of the block and transaction
        /// RocksDB connection cache. 100 by default.</param>
        public RocksDBStore(
            string path,
            int blockCacheSize = 512,
            int txCacheSize = 1024,
            ulong? maxTotalWalSize = null,
            ulong? keepLogFileNum = null,
            ulong? maxLogFileSize = null,
            int txEpochUnitSeconds = 86400,
            int blockEpochUnitSeconds = 86400,
            int dbConnectionCacheSize = 100
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
            _txEpochUnitSeconds = txEpochUnitSeconds > 0
                ? txEpochUnitSeconds
                : throw new ArgumentException(
                    "It must be greater than 0.",
                    nameof(txEpochUnitSeconds));
            _blockEpochUnitSeconds = blockEpochUnitSeconds > 0
                ? blockEpochUnitSeconds
                : throw new ArgumentException(
                    "It must be greater than 0.",
                    nameof(blockEpochUnitSeconds));
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

            _blockIndexDb = RocksDBUtils.OpenRocksDb(_options, BlockDbPath(BlockIndexDbName));
            _blockPerceptionDb =
                RocksDBUtils.OpenRocksDb(_options, RocksDbPath(BlockPerceptionDbName));
            _txIndexDb = RocksDBUtils.OpenRocksDb(_options, TxDbPath(TxIndexDbName));
            _stagedTxDb = RocksDBUtils.OpenRocksDb(_options, RocksDbPath(StagedTxDbName));
            _txExecutionDb =
                RocksDBUtils.OpenRocksDb(_options, RocksDbPath(TxExecutionDbName));

            // When opening a DB in a read-write mode, you need to specify all Column Families that
            // currently exist in a DB. https://github.com/facebook/rocksdb/wiki/Column-Families
            var chainDbColumnFamilies = GetColumnFamilies(_options, ChainDbName);
            _chainDb = RocksDBUtils.OpenRocksDb(
                _options, RocksDbPath(ChainDbName), chainDbColumnFamilies);

            _rwTxLock = new ReaderWriterLockSlim(LockRecursionPolicy.SupportsRecursion);
            _rwBlockLock = new ReaderWriterLockSlim(LockRecursionPolicy.SupportsRecursion);

            _blockDbCache = new LruCache<string, RocksDb>(dbConnectionCacheSize);
            _blockDbCache.SetPreRemoveDataMethod(db =>
            {
                db.Dispose();
                return true;
            });
            _txDbCache = new LruCache<string, RocksDb>(dbConnectionCacheSize);
            _txDbCache.SetPreRemoveDataMethod(db =>
            {
                db.Dispose();
                return true;
            });
        }

        /// <inheritdoc/>
        public override IEnumerable<Guid> ListChainIds()
        {
            foreach (var it in IterateDb(_chainDb, ChainIdKeyPrefix))
            {
                var guid = new Guid(it.Value());
                if (IsDeletionMarked(guid) && HasFork(guid))
                {
                    continue;
                }

                yield return guid;
            }
        }

        /// <inheritdoc/>
        public override void DeleteChainId(Guid chainId)
        {
            if (HasFork(chainId))
            {
                _chainDb.Put(DeletedChainKey(chainId), new byte[0]);

                // We need only chain indexes, not tx nonces at this time because they already had
                // been copied on .ForkTxNonces().
                // FIXME: We should remove this code after adjusting .ForkTxNonces().
                using var batch = new WriteBatch();
                byte[] prefix = TxNonceKey(chainId);
                foreach (Iterator k in IterateDb(_chainDb, prefix))
                {
                    batch.Delete(k.Key());
                }

                _chainDb.Write(batch);
                return;
            }

            _logger.Debug($"Deleting chainID: {chainId}.");
            Guid? prevChain = GetPreviousChainInfo(chainId)?.Item1;

            string cfName = chainId.ToString();
            try
            {
                using var batch = new WriteBatch();
                foreach (Iterator it in IterateDb(_chainDb, IndexKey(chainId)))
                {
                    batch.Delete(it.Key());
                }

                foreach (Iterator it in IterateDb(_chainDb, TxNonceKey(chainId)))
                {
                    batch.Delete(it.Key());
                }

                batch.Delete(DeletedChainKey(chainId));
                batch.Delete(PreviousChainIdKey(chainId));
                batch.Delete(PreviousChainIndexKey(chainId));
                batch.Delete(IndexCountKey(chainId));
                batch.Delete(ChainIdKey(chainId));

                _chainDb.Write(batch);

                if (prevChain is { } prevChainNotNull)
                {
                    lock (_chainForkDeleteLock)
                    {
                        if (HasFork(prevChainNotNull))
                        {
                            RemoveFork(prevChainNotNull, chainId);

                            if (IsDeletionMarked(prevChainNotNull))
                            {
                                DeleteChainId(prevChainNotNull);
                            }
                        }
                    }
                }
            }
            catch (KeyNotFoundException)
            {
                // Do nothing according to the specification: DeleteChainId() should be idempotent.
                _logger.Debug($"No such chain ID in _chainDb: {cfName}.", cfName);
            }
            catch (Exception e)
            {
                LogUnexpectedException(nameof(DeleteChainId), e);
            }
        }

        /// <inheritdoc />
        public override Guid? GetCanonicalChainId()
        {
            try
            {
                byte[] bytes = _chainDb.Get(CanonicalChainIdIdKey);

                return bytes is null
                    ? (Guid?)null
                    : new Guid(bytes);
            }
            catch (Exception e)
            {
                LogUnexpectedException(nameof(GetCanonicalChainId), e);
            }

            return (Guid?)null;
        }

        /// <inheritdoc />
        public override void SetCanonicalChainId(Guid chainId)
        {
            try
            {
                byte[] bytes = chainId.ToByteArray();
                _chainDb.Put(CanonicalChainIdIdKey, bytes);
            }
            catch (Exception e)
            {
                LogUnexpectedException(nameof(SetCanonicalChainId), e);
            }
        }

        /// <inheritdoc/>
        public override long CountIndex(Guid chainId)
        {
            try
            {
                byte[] bytes = _chainDb.Get(IndexCountKey(chainId));
                return bytes is null
                    ? 0
                    : RocksDBStoreBitConverter.ToInt64(bytes);
            }
            catch (Exception e)
            {
                LogUnexpectedException(nameof(CountIndex), e);
            }

            return 0;
        }

        /// <inheritdoc cref="BaseStore.IterateIndexes(Guid, int, int?)"/>
        public override IEnumerable<BlockHash> IterateIndexes(Guid chainId, int offset, int? limit)
            => IterateIndexes(chainId, offset, limit, false);

        /// <inheritdoc cref="BaseStore.IndexBlockHash(Guid, long)"/>
        public override BlockHash? IndexBlockHash(Guid chainId, long index)
            => IndexBlockHash(chainId, index, false);

        /// <inheritdoc cref="BaseStore.AppendIndex(Guid, BlockHash)"/>
        public override long AppendIndex(Guid chainId, BlockHash hash)
        {
            long index = CountIndex(chainId);
            try
            {
                byte[] indexBytes = RocksDBStoreBitConverter.GetBytes(index);

                byte[] key = IndexKey(chainId, indexBytes);

                using var writeBatch = new WriteBatch();

                writeBatch.Put(key, hash.ToByteArray());
                writeBatch.Put(
                    IndexCountKey(chainId),
                    RocksDBStoreBitConverter.GetBytes(index + 1)
                );
                writeBatch.Put(ChainIdKey(chainId), chainId.ToByteArray());

                _chainDb.Write(writeBatch);
            }
            catch (Exception e)
            {
                LogUnexpectedException(nameof(AppendIndex), e);
            }

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

            using var batch = new WriteBatch();
            foreach (Iterator k in IterateDb(_chainDb, IndexKey(destinationChainId)))
            {
                batch.Delete(k.Key());
            }

            _chainDb.Write(batch);

            long bpIndex = GetBlockIndex(branchpoint).Value;

            if (GetPreviousChainInfo(sourceChainId) is { } chainInfo &&
                chainInfo.Item2 == bpIndex)
            {
                ForkBlockIndexes(chainInfo.Item1, destinationChainId, branchpoint);
                return;
            }

            _chainDb.Put(PreviousChainIdKey(destinationChainId), sourceChainId.ToByteArray());
            _chainDb.Put(
                PreviousChainIndexKey(destinationChainId),
                RocksDBStoreBitConverter.GetBytes(bpIndex)
            );
            _chainDb.Put(
                IndexCountKey(destinationChainId),
                RocksDBStoreBitConverter.GetBytes(bpIndex + 1)
            );
            AddFork(sourceChainId, destinationChainId);
        }

        /// <inheritdoc/>
        public override void StageTransactionIds(IImmutableSet<TxId> txids)
        {
            try
            {
                foreach (TxId txId in txids)
                {
                    byte[] key = StagedTxKey(txId);
                    _stagedTxDb.Put(key, EmptyBytes);
                }
            }
            catch (Exception e)
            {
                LogUnexpectedException(nameof(StageTransactionIds), e);
            }
        }

        /// <inheritdoc/>
        public override void UnstageTransactionIds(ISet<TxId> txids)
        {
            try
            {
                foreach (TxId txId in txids)
                {
                    byte[] key = StagedTxKey(txId);
                    _stagedTxDb.Remove(key);
                }
            }
            catch (Exception e)
            {
                LogUnexpectedException(nameof(UnstageTransactionIds), e);
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

            foreach (Iterator it in IterateDb(_txIndexDb, prefix) )
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
            if (!(_txIndexDb.Get(key) is byte[] txDbNameBytes))
            {
                return null;
            }

            string txDbName = RocksDBStoreBitConverter.GetString(txDbNameBytes);
            _rwTxLock.EnterReadLock();
            try
            {
                if (!_txDbCache.TryGetValue(txDbName, out RocksDb txDb))
                {
                    txDb = RocksDBUtils.OpenRocksDb(_options, TxDbPath(txDbName));
                    _txDbCache.AddOrUpdate(txDbName, txDb);
                }

                byte[] txBytes = txDb.Get(key);

                Transaction<T> tx = Transaction<T>.Deserialize(txBytes, false);
                _txCache.AddOrUpdate(txid, tx);
                return tx;
            }
            catch (Exception e)
            {
                LogUnexpectedException(nameof(GetTransaction), e);
                return null;
            }
            finally
            {
                _rwTxLock.ExitReadLock();
            }
        }

        /// <inheritdoc/>
        public override void PutTransaction<T>(Transaction<T> tx)
        {
            if (_txCache.ContainsKey(tx.Id))
            {
                return;
            }

            byte[] key = TxKey(tx.Id);
            if (!(_txIndexDb.Get(key) is null))
            {
                return;
            }

            long timestamp = tx.Timestamp.ToUnixTimeSeconds();
            string txDbName = $"epoch{(int)timestamp / _txEpochUnitSeconds}";
            _rwTxLock.EnterWriteLock();
            try
            {
                if (!_txDbCache.TryGetValue(txDbName, out RocksDb txDb))
                {
                    txDb = RocksDBUtils.OpenRocksDb(_options, TxDbPath(txDbName));
                    _txDbCache.AddOrUpdate(txDbName, txDb);
                }

                txDb.Put(key, tx.Serialize(true));
                _txIndexDb.Put(key, RocksDBStoreBitConverter.GetBytes(txDbName));
                _txCache.AddOrUpdate(tx.Id, tx);
            }
            catch (Exception e)
            {
                LogUnexpectedException(nameof(PutTransaction), e);
            }
            finally
            {
                _rwTxLock.ExitWriteLock();
            }
        }

        /// <inheritdoc/>
        public override bool DeleteTransaction(TxId txid)
        {
            byte[] key = TxKey(txid);

            if (!(_txIndexDb.Get(key) is byte[] txDbNameBytes))
            {
                return false;
            }

            _rwTxLock.EnterWriteLock();
            try
            {
                string txDbName = RocksDBStoreBitConverter.GetString(txDbNameBytes);
                if (!_txDbCache.TryGetValue(txDbName, out RocksDb txDb))
                {
                    txDb = RocksDBUtils.OpenRocksDb(_options, TxDbPath(txDbName));
                    _txDbCache.AddOrUpdate(txDbName, txDb);
                }

                _txCache.Remove(txid);
                _txIndexDb.Remove(key);
                txDb.Remove(key);

                return true;
            }
            catch (Exception e)
            {
                LogUnexpectedException(nameof(DeleteTransaction), e);
            }
            finally
            {
                _rwTxLock.ExitWriteLock();
            }

            return false;
        }

        /// <inheritdoc/>
        public override bool ContainsTransaction(TxId txId)
        {
            try
            {
                if (_txCache.ContainsKey(txId))
                {
                    return true;
                }

                byte[] key = TxKey(txId);

                return !(_txIndexDb.Get(key) is null);
            }
            catch (Exception e)
            {
                LogUnexpectedException(nameof(ContainsTransaction), e);
            }

            return false;
        }

        /// <inheritdoc cref="BaseStore.IterateBlockHashes()"/>
        public override IEnumerable<BlockHash> IterateBlockHashes()
        {
            byte[] prefix = BlockKeyPrefix;

            foreach (Iterator it in IterateDb(_blockIndexDb, prefix))
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
            if (!(_blockIndexDb.Get(key) is byte[] blockDbNameBytes))
            {
                return null;
            }

            _rwBlockLock.EnterReadLock();
            try
            {
                string blockDbName = RocksDBStoreBitConverter.GetString(blockDbNameBytes);
                if (!_blockDbCache.TryGetValue(blockDbName, out RocksDb blockDb))
                {
                    blockDb = RocksDBUtils.OpenRocksDb(_options, BlockDbPath(blockDbName));
                    _blockDbCache.AddOrUpdate(blockDbName, blockDb);
                }

                byte[] blockBytes = blockDb.Get(key);

                BlockDigest blockDigest = BlockDigest.Deserialize(blockBytes);

                _blockCache.AddOrUpdate(blockHash, blockDigest);
                return blockDigest;
            }
            catch (Exception e)
            {
                LogUnexpectedException(nameof(GetBlockDigest), e);
            }
            finally
            {
                _rwBlockLock.ExitReadLock();
            }

            return null;
        }

        /// <inheritdoc/>
        public override void PutBlock<T>(Block<T> block)
        {
            if (_blockCache.ContainsKey(block.Hash))
            {
                return;
            }

            byte[] key = BlockKey(block.Hash);

            if (!(_blockIndexDb.Get(key) is null))
            {
                return;
            }

            long timestamp = block.Timestamp.ToUnixTimeSeconds();

            foreach (Transaction<T> tx in block.Transactions)
            {
                PutTransaction(tx);
            }

            _rwBlockLock.EnterWriteLock();
            try
            {
                string blockDbName = $"epoch{timestamp / _blockEpochUnitSeconds}";
                if (!_blockDbCache.TryGetValue(blockDbName, out RocksDb blockDb))
                {
                    blockDb = RocksDBUtils.OpenRocksDb(_options, BlockDbPath(blockDbName));
                    _blockDbCache.AddOrUpdate(blockDbName, blockDb);
                }

                byte[] value = block.ToBlockDigest().Serialize();
                blockDb.Put(key, value);
                _blockIndexDb.Put(key, RocksDBStoreBitConverter.GetBytes(blockDbName));
                _blockCache.AddOrUpdate(block.Hash, block.ToBlockDigest());
            }
            catch (Exception e)
            {
                LogUnexpectedException(nameof(PutBlock), e);
            }
            finally
            {
                _rwBlockLock.ExitWriteLock();
            }
        }

        /// <inheritdoc cref="BaseStore.DeleteBlock(BlockHash)"/>
        public override bool DeleteBlock(BlockHash blockHash)
        {
            byte[] key = BlockKey(blockHash);

            if (!(_blockIndexDb.Get(key) is byte[] blockDbNameByte))
            {
                return false;
            }

            _rwBlockLock.EnterWriteLock();
            try
            {
                string blockDbName = RocksDBStoreBitConverter.GetString(blockDbNameByte);
                if (!_blockDbCache.TryGetValue(blockDbName, out RocksDb blockDb))
                {
                    blockDb = RocksDBUtils.OpenRocksDb(_options, BlockDbPath(blockDbName));
                    _blockDbCache.AddOrUpdate(blockDbName, blockDb);
                }

                _blockCache.Remove(blockHash);
                _blockIndexDb.Remove(key);
                blockDb.Remove(key);
                return true;
            }
            catch (Exception e)
            {
                LogUnexpectedException(nameof(DeleteBlock), e);
            }
            finally
            {
                _rwBlockLock.ExitWriteLock();
            }

            return false;
        }

        /// <inheritdoc cref="BaseStore.ContainsBlock(BlockHash)"/>
        public override bool ContainsBlock(BlockHash blockHash)
        {
            try
            {
                if (_blockCache.ContainsKey(blockHash))
                {
                    return true;
                }

                byte[] key = BlockKey(blockHash);

                return !(_blockIndexDb.Get(key) is null);
            }
            catch (Exception e)
            {
                LogUnexpectedException(nameof(ContainsBlock), e);
            }

            return false;
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
            try
            {
                byte[] key = BlockKey(blockHash);
                _blockPerceptionDb.Put(
                    key,
                    NetworkOrderBitsConverter.GetBytes(perceivedTime.ToUnixTimeMilliseconds())
                );
            }
            catch (Exception e)
            {
                LogUnexpectedException(nameof(SetBlockPerceivedTime), e);
            }
        }

        /// <inheritdoc cref="BaseStore.GetBlockPerceivedTime(BlockHash)"/>
        public override DateTimeOffset? GetBlockPerceivedTime(BlockHash blockHash)
        {
            try
            {
                byte[] key = BlockKey(blockHash);
                if (_blockPerceptionDb.Get(key) is { } bytes)
                {
                    long unixTimeMs = NetworkOrderBitsConverter.ToInt64(bytes);
                    return DateTimeOffset.FromUnixTimeMilliseconds(unixTimeMs);
                }
            }
            catch (Exception e)
            {
                LogUnexpectedException(nameof(GetBlockPerceivedTime), e);
            }

            return null;
        }

        /// <inheritdoc/>
        public override IEnumerable<KeyValuePair<Address, long>> ListTxNonces(Guid chainId)
        {
            byte[] prefix = TxNonceKey(chainId);
            foreach (Iterator it in IterateDb(_chainDb, prefix))
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
            try
            {
                byte[] key = TxNonceKey(chainId, address);
                byte[] bytes = _chainDb.Get(key);
                return bytes is null
                    ? 0
                    : RocksDBStoreBitConverter.ToInt64(bytes);
            }
            catch (Exception e)
            {
                LogUnexpectedException(nameof(GetTxNonce), e);
            }

            return 0;
        }

        /// <inheritdoc/>
        public override void IncreaseTxNonce(Guid chainId, Address signer, long delta = 1)
        {
            try
            {
                long nextNonce = GetTxNonce(chainId, signer) + delta;

                byte[] key = TxNonceKey(chainId, signer);
                byte[] bytes = RocksDBStoreBitConverter.GetBytes(nextNonce);

                _chainDb.Put(key, bytes);
                _chainDb.Put(ChainIdKey(chainId), chainId.ToByteArray());
            }
            catch (Exception e)
            {
                LogUnexpectedException(nameof(IncreaseTxNonce), e);
            }
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

        public override void Dispose()
        {
            try
            {
                if (!_disposed)
                {
                    _chainDb?.Dispose();
                    _txIndexDb?.Dispose();
                    _blockIndexDb?.Dispose();
                    _blockPerceptionDb?.Dispose();
                    _stagedTxDb?.Dispose();
                    _txExecutionDb?.Dispose();
                    foreach (var db in _txDbCache.Values)
                    {
                        db.Dispose();
                    }

                    _txDbCache.Clear();

                    foreach (var db in _blockDbCache.Values)
                    {
                        db.Dispose();
                    }

                    _blockDbCache.Clear();
                    _disposed = true;
                }
            }
            catch (Exception e)
            {
                LogUnexpectedException(nameof(Dispose), e);
            }
        }

        /// <inheritdoc/>
        public override void ForkTxNonces(Guid sourceChainId, Guid destinationChainId)
        {
            var writeBatch = new WriteBatch();
            try
            {
                byte[] prefix = TxNonceKey(sourceChainId);
                foreach (Iterator it in IterateDb(_chainDb, prefix))
                {
                    Address address = new Address(it.Key().Skip(prefix.Length).ToArray());
                    writeBatch.Put(TxNonceKey(destinationChainId, address), it.Value());
                    if (writeBatch.Count() >= ForkWriteBatchSize)
                    {
                        _chainDb.Write(writeBatch);
                        writeBatch.Dispose();
                        writeBatch = new WriteBatch();
                    }
                }
            }
            catch (Exception e)
            {
                LogUnexpectedException(nameof(ForkTxNonces), e);
            }
            finally
            {
                _chainDb.Write(writeBatch);
                writeBatch.Dispose();
            }
        }

        private byte[] BlockKey(in BlockHash blockHash) =>
            BlockKeyPrefix.Concat(blockHash.ByteArray).ToArray();

        private byte[] TxKey(in TxId txId) =>
            TxKeyPrefix.Concat(txId.ByteArray).ToArray();

        private byte[] TxNonceKey(Guid chainId)
            => TxNonceKeyPrefix.Concat(chainId.ToByteArray()).ToArray();

        private byte[] TxNonceKey(Guid chainId, Address address)
            => TxNonceKey(chainId).Concat(address.ToByteArray()).ToArray();

        private byte[] StagedTxKey(in TxId txId) =>
            StagedTxKeyPrefix.Concat(txId.ToByteArray()).ToArray();

        private byte[] TxExecutionKey(in BlockHash blockHash, in TxId txId) =>

            // As BlockHash is not fixed size, place TxId first.
            TxExecutionKeyPrefix.Concat(txId.ByteArray).Concat(blockHash.ByteArray).ToArray();

        private byte[] TxExecutionKey(TxExecution txExecution) =>
            TxExecutionKey(txExecution.BlockHash, txExecution.TxId);

        private byte[] ForkedChainsKey(Guid chainId, Guid forkedChainId) =>
            ForkedChainsKeyPrefix
            .Concat(chainId.ToByteArray())
            .Concat(forkedChainId.ToByteArray()).ToArray();

        private IEnumerable<Iterator> IterateDb(RocksDb db, byte[] prefix)
        {
            using Iterator it = db.NewIterator();
            for (it.Seek(prefix); it.Valid() && it.Key().StartsWith(prefix); it.Next())
            {
                yield return it;
            }
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

        private string TxDbPath(string dbName) =>
            Path.Combine(RocksDbPath(TxDbRootPathName), dbName);

        private string BlockDbPath(string dbName) =>
            Path.Combine(RocksDbPath(BlockDbRootPathName), dbName);

        private string RocksDbPath(string dbName) => Path.Combine(_path, dbName);

        private void LogUnexpectedException(string methodName, Exception e)
        {
            string msg = $"An unexpected exception occurred on {methodName}: {{Message}}";
            _logger.Error(e, msg, e.Message);
        }

        private (Guid, long)? GetPreviousChainInfo(Guid chainId)
        {
            if (_chainDb.Get(PreviousChainIdKey(chainId)) is { } prevChainId &&
                _chainDb.Get(PreviousChainIndexKey(chainId)) is { } prevChainIndex)
            {
                return (new Guid(prevChainId), RocksDBStoreBitConverter.ToInt64(prevChainIndex));
            }

            return null;
        }

        private IEnumerable<BlockHash> IterateIndexes(
            Guid chainId,
            int offset,
            int? limit,
            bool includeDeleted
        )
        {
            if (!includeDeleted && IsDeletionMarked(chainId))
            {
                yield break;
            }

            long count = 0;

            if (GetPreviousChainInfo(chainId) is { } chainInfo)
            {
                long pi = chainInfo.Item2;
                foreach (BlockHash hash in IterateIndexes(chainInfo.Item1, offset, null, true))
                {
                    if (count >= limit)
                    {
                        yield break;
                    }

                    yield return hash;
                    count += 1;

                    if (offset + count > pi)
                    {
                        break;
                    }
                }

                offset = (int)Math.Max(0, offset - pi);
            }

            byte[] prefix = IndexKeyPrefix.Concat(chainId.ToByteArray()).ToArray();
            foreach (Iterator it in IterateDb(_chainDb, prefix).Skip(offset))
            {
                if (count >= limit)
                {
                    yield break;
                }

                byte[] value = it.Value();
                yield return new BlockHash(value);

                count += 1;
            }
        }

        private BlockHash? IndexBlockHash(Guid chainId, long index, bool includeDeleted)
        {
            try
            {
                if (index < 0)
                {
                    index += CountIndex(chainId);

                    if (index < 0)
                    {
                        return null;
                    }
                }

                if (!includeDeleted && IsDeletionMarked(chainId))
                {
                    return null;
                }

                if (GetPreviousChainInfo(chainId) is { } chainInfo &&
                    chainInfo.Item2 >= index)
                {
                    return IndexBlockHash(chainInfo.Item1, index, true);
                }

                byte[] indexBytes = RocksDBStoreBitConverter.GetBytes(index);
                byte[] bytes = _chainDb.Get(IndexKey(chainId, indexBytes));
                return bytes is null ? (BlockHash?)null : new BlockHash(bytes);
            }
            catch (Exception e)
            {
                LogUnexpectedException(nameof(IndexBlockHash), e);
            }

            return null;
        }

        private void AddFork(Guid chainId, Guid forkedChainId)
        {
            _chainDb.Put(ForkedChainsKey(chainId, forkedChainId), new byte[0]);
        }

        private void RemoveFork(Guid chainId, Guid forkedChainId)
        {
            _chainDb.Remove(ForkedChainsKey(chainId, forkedChainId));
        }

        private bool HasFork(Guid chainId)
        {
            byte[] prefix = ForkedChainsKeyPrefix.Concat(chainId.ToByteArray()).ToArray();
            return IterateDb(_chainDb, prefix).Any();
        }

        private bool IsDeletionMarked(Guid chainId)
            => _chainDb.Get(DeletedChainKey(chainId)) is { };

        private byte[] DeletedChainKey(Guid chainId)
            => DeletedKeyPrefix.Concat(chainId.ToByteArray()).ToArray();

        private byte[] PreviousChainIndexKey(Guid chainId)
            => PreviousChainIndexKeyPrefix.Concat(chainId.ToByteArray()).ToArray();

        private byte[] PreviousChainIdKey(Guid chainId)
            => PreviousChainIdKeyPrefix.Concat(chainId.ToByteArray()).ToArray();

        private byte[] IndexKey(Guid chainId)
            => IndexKeyPrefix.Concat(chainId.ToByteArray()).ToArray();

        private byte[] IndexKey(Guid chainId, byte[] indexBytes)
            => IndexKey(chainId).Concat(indexBytes).ToArray();

        private byte[] IndexCountKey(Guid chainId)
            => IndexCountKeyPrefix.Concat(chainId.ToByteArray()).ToArray();

        private byte[] ChainIdKey(Guid chainId)
            => ChainIdKeyPrefix.Concat(chainId.ToByteArray()).ToArray();
    }
}
