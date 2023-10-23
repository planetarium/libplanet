#nullable disable
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Collections.Specialized;
using System.IO;
using System.Linq;
using System.Threading;
using System.Web;
using Bencodex;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Store;
using Libplanet.Types.Blocks;
using Libplanet.Types.Tx;
using LruCacheNet;
using RocksDbSharp;
using Serilog;

namespace Libplanet.RocksDBStore
{
    /// <summary>
    /// The <a href="https://rocksdb.org/">RocksDB</a> <see cref="IStore"/> implementation,
    /// which is more production-ready than <see cref="DefaultStore"/>.
    /// This stores data in the RocksDB with multiple partitions under the hood.
    /// <para><see cref="RocksDBStore"/> and <see cref="RocksDBKeyValueStore"/>-backed
    /// <see cref="TrieStateStore"/> can be instantiated from a URI with <c>rocksdb+file:</c> scheme
    /// using <see cref="StoreLoaderAttribute.LoadStore(Uri)"/>, e.g.:</para>
    /// <list type="bullet">
    /// <item><description><c>rocksdb+file:///var/data/planet/</c></description></item>
    /// <item><description><c>rocksdb+file:///c:/Users/john/AppData/Local/planet/</c></description>
    /// </item>
    /// </list>
    /// <para>The following query string parameters are supported:</para>
    /// <list type="table">
    /// <item>
    /// <term><c>block-cache</c></term>
    /// <description>Corresponds to
    /// <see cref="RocksDBStore(string, int, int, ulong?, ulong?, ulong?, int, int, int)"/>'s
    /// <c>blockCacheSize</c> parameter.  512 by default.</description>
    /// </item>
    /// <item>
    /// <term><c>tx-cache</c></term>
    /// <description>Corresponds to
    /// <see cref="RocksDBStore(string, int, int, ulong?, ulong?, ulong?, int, int, int)"/>'s
    /// <c>txCacheSize</c> parameter.  1024 by default.</description>
    /// </item>
    /// <item>
    /// <term><c>max-total-wal-size</c></term>
    /// <description>Corresponds to RocksDB's <c>max_total_wal_size</c> option.</description>
    /// </item>
    /// <item>
    /// <term><c>keep-log-file-num</c></term>
    /// <description>Corresponds to RocksDB's <c>keep_log_file_num</c> option.</description>
    /// </item>
    /// <item>
    /// <term><c>max_log_file_size</c></term>
    /// <description>Corresponds to RocksDB's <c>max_log_file_size</c> option.</description>
    /// </item>
    /// <item>
    /// <term><c>tx-epoch-unit-secs</c></term>
    /// <description>Corresponds to
    /// <see cref="RocksDBStore(string, int, int, ulong?, ulong?, ulong?, int, int, int)"/>'s
    /// <c>txEpochUnitSeconds</c> parameter.  86400 by default.</description>
    /// </item>
    /// <item>
    /// <term><c>block-epoch-unit-secs</c></term>
    /// <description>Corresponds to
    /// <see cref="RocksDBStore(string, int, int, ulong?, ulong?, ulong?, int, int, int)"/>'s
    /// <c>blockEpochUnitSeconds</c> parameter.  86400 by default.</description>
    /// </item>
    /// <item>
    /// <term><c>connection-cache</c></term>
    /// <description>Corresponds to
    /// <see cref="RocksDBStore(string, int, int, ulong?, ulong?, ulong?, int, int, int)"/>'s
    /// <c>dbConnectionCacheSize</c> parameter.  100 by default.</description>
    /// </item>
    /// <item>
    /// <term><c>states-dir</c></term>
    /// <description>Corresponds to <see cref="RocksDBKeyValueStore(string)"/>'s <c>path</c>
    /// parameter.  It is relative to the URI path, and defaults to <c>states</c>.</description>
    /// </item>
    /// </list>
    /// </summary>
    /// <seealso cref="IStore"/>
    public class RocksDBStore : BaseStore
    {
        private const string BlockDbRootPathName = "block";
        private const string BlockIndexDbName = "blockindex";
        private const string BlockPerceptionDbName = "blockpercept";
        private const string TxDbRootPathName = "tx";
        private const string TxIndexDbName = "txindex";
        private const string TxExecutionDbName = "txexec";
        private const string TxIdBlockHashIndexDbName = "txbindex";
        private const string ChainDbName = "chain";
        private const string StatesKvPathDefault = "states";
        private const string BlockCommitDbName = "blockcommit";
        private const int ForkWriteBatchSize = 100000;

        private static readonly byte[] IndexKeyPrefix = { (byte)'I' };
        private static readonly byte[] BlockKeyPrefix = { (byte)'B' };
        private static readonly byte[] TxKeyPrefix = { (byte)'T' };
        private static readonly byte[] TxNonceKeyPrefix = { (byte)'N' };
        private static readonly byte[] TxExecutionKeyPrefix = { (byte)'e' };
        private static readonly byte[] TxIdBlockHashIndexPrefix = { (byte)'i' };
        private static readonly byte[] IndexCountKeyPrefix = { (byte)'c' };
        private static readonly byte[] CanonicalChainIdIdKey = { (byte)'C' };
        private static readonly byte[] PreviousChainIdKeyPrefix = { (byte)'P' };
        private static readonly byte[] PreviousChainIndexKeyPrefix = { (byte)'p' };
        private static readonly byte[] ForkedChainsKeyPrefix = { (byte)'f' };
        private static readonly byte[] DeletedKeyPrefix = { (byte)'d' };
        private static readonly byte[] ChainIdKeyPrefix = { (byte)'h' };
        private static readonly byte[] ChainBlockCommitKeyPrefix = { (byte)'M' };
        private static readonly byte[] BlockCommitKeyPrefix = { (byte)'m' };

        private static readonly byte[] EmptyBytes = Array.Empty<byte>();

        private static readonly Codec Codec = new Codec();

        private readonly ILogger _logger;

        private readonly LruCache<TxId, object> _txCache;
        private readonly LruCache<BlockHash, BlockDigest> _blockCache;

        private readonly DbOptions _options;
        private readonly string _path;
        private readonly bool _readonly;
        private readonly int _txEpochUnitSeconds;
        private readonly int _blockEpochUnitSeconds;

        private readonly RocksDb _blockIndexDb;
        private readonly RocksDb _blockPerceptionDb;
        private readonly LruCache<string, RocksDb> _blockDbCache;
        private readonly RocksDb _txIndexDb;
        private readonly LruCache<string, RocksDb> _txDbCache;
        private readonly RocksDb _txExecutionDb;
        private readonly RocksDb _txIdBlockHashIndexDb;
        private readonly RocksDb _chainDb;
        private readonly RocksDb _blockCommitDb;

        private readonly ReaderWriterLockSlim _rwTxLock;
        private readonly ReaderWriterLockSlim _rwBlockLock;
        private readonly ReaderWriterLockSlim _rwBlockCommitLock;
        private bool _disposed = false;
        private object _chainForkDeleteLock = new object();
        private LruCache<Guid, LruCache<(int, int?), List<BlockHash>>> _indexCache;

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
        /// <param name="txEpochUnitSeconds">The interval between epochs of DB partitions containing
        /// transactions.  86,400 seconds by default.</param>
        /// <param name="blockEpochUnitSeconds">The interval between epochs of DB partitions
        /// containing blocks.  86,400 seconds by default.</param>
        /// <param name="dbConnectionCacheSize">The capacity of the block and transaction
        /// RocksDB connection cache. 100 by default.</param>
        /// <param name="readonly">If it is true, it will open rocksdb in read-only mode.</param>
        public RocksDBStore(
            string path,
            int blockCacheSize = 512,
            int txCacheSize = 1024,
            ulong? maxTotalWalSize = null,
            ulong? keepLogFileNum = null,
            ulong? maxLogFileSize = null,
            int txEpochUnitSeconds = 86400,
            int blockEpochUnitSeconds = 86400,
            int dbConnectionCacheSize = 100,
            bool @readonly = false
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
            _indexCache = new LruCache<Guid, LruCache<(int, int?), List<BlockHash>>>(64);

            _path = path;
            _readonly = @readonly;
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

            _blockIndexDb = RocksDBUtils.OpenRocksDb(
                _options, BlockDbPath(BlockIndexDbName), @readonly: _readonly);
            _blockPerceptionDb =
                RocksDBUtils.OpenRocksDb(
                    _options, RocksDbPath(BlockPerceptionDbName), @readonly: _readonly);
            _txIndexDb = RocksDBUtils.OpenRocksDb(
                _options, TxDbPath(TxIndexDbName), @readonly: _readonly);
            _txExecutionDb =
                RocksDBUtils.OpenRocksDb(
                    _options, RocksDbPath(TxExecutionDbName), @readonly: _readonly);
            _txIdBlockHashIndexDb =
                RocksDBUtils.OpenRocksDb(
                    _options, RocksDbPath(TxIdBlockHashIndexDbName), @readonly: _readonly);
            _blockCommitDb =
                RocksDBUtils.OpenRocksDb(
                    _options, RocksDbPath(BlockCommitDbName), @readonly: _readonly);

            // When opening a DB in a read-write mode, you need to specify all Column Families that
            // currently exist in a DB. https://github.com/facebook/rocksdb/wiki/Column-Families
            var chainDbColumnFamilies = GetColumnFamilies(_options, ChainDbName);
            _chainDb = RocksDBUtils.OpenRocksDb(
                _options, RocksDbPath(ChainDbName), chainDbColumnFamilies, _readonly);

            _rwTxLock = new ReaderWriterLockSlim(LockRecursionPolicy.SupportsRecursion);
            _rwBlockLock = new ReaderWriterLockSlim(LockRecursionPolicy.SupportsRecursion);
            _rwBlockCommitLock = new ReaderWriterLockSlim(LockRecursionPolicy.SupportsRecursion);

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

        public static bool MigrateChainDBFromColumnFamilies(string path)
        {
            var opt = new DbOptions();
            opt.SetCreateIfMissing();
            List<string> cfns = RocksDb.ListColumnFamilies(opt, path).ToList();
            var cfs = new ColumnFamilies();
            foreach (string name in cfns)
            {
                cfs.Add(name, opt);
            }

            RocksDb db = RocksDb.Open(opt, path, cfs);
            if (cfs.Count() == 1 && IterateDb(db, ChainIdKeyPrefix).Any())
            {
                // Already migrated.
                db.Dispose();
                return false;
            }

            var tmpDbPath = Path.GetDirectoryName(path) + ".tmp";
            RocksDb newDb = RocksDb.Open(opt, tmpDbPath);
            var ccid = new Guid(db.Get(CanonicalChainIdIdKey));
            newDb.Put(CanonicalChainIdIdKey, ccid.ToByteArray());
            ColumnFamilyHandle ccf = db.GetColumnFamily(ccid.ToString());
            var batch = new WriteBatch();

            // Migrate chain indexes
            (ColumnFamilyHandle, long)? PreviousColumnFamily(ColumnFamilyHandle cfh)
            {
                byte[] cid = db.Get(PreviousChainIdKeyPrefix, cfh);

                if (cid is null)
                {
                    return null;
                }
                else
                {
                    return (
                        db.GetColumnFamily(new Guid(cid).ToString()),
                        RocksDBStoreBitConverter.ToInt64(db.Get(PreviousChainIndexKeyPrefix, cfh))
                    );
                }
            }

            void CopyIndexes(ColumnFamilyHandle cfh, long? limit)
            {
                Iterator it = db.NewIterator(cfh);
                for (
                    it.Seek(IndexKeyPrefix);
                    it.Valid() && it.Key().StartsWith(IndexKeyPrefix);
                    it.Next()
                )
                {
                    byte[] indexBytes = it.Key().Skip(1).ToArray();
                    long index = RocksDBStoreBitConverter.ToInt64(indexBytes);
                    if (index > limit)
                    {
                        continue;
                    }

                    batch.Put(IndexKey(ccid, indexBytes), it.Value());

                    if (batch.Count() > 10000)
                    {
                        newDb.Write(batch);
                        batch.Clear();
                    }
                }
            }

            CopyIndexes(ccf, null);
            var cfInfo = PreviousColumnFamily(ccf);
            while (cfInfo is { } cfInfoNotNull)
            {
                ColumnFamilyHandle cf = cfInfoNotNull.Item1;
                long cfi = cfInfoNotNull.Item2;

                CopyIndexes(cf, cfi);

                cfInfo = PreviousColumnFamily(cf);
            }

            newDb.Write(batch);
            batch.Clear();

            // Migrate total count & chain ID
            long prevCount = RocksDBStoreBitConverter.ToInt64(
                db.Get(IndexCountKeyPrefix, ccf)
            );
            newDb.Put(
                IndexCountKey(ccid),
                RocksDBStoreBitConverter.GetBytes(prevCount)
            );
            newDb.Put(ChainIdKey(ccid), ccid.ToByteArray());

            // Migrate tx nonces
            Iterator it = db.NewIterator(ccf);
            for (
                it.Seek(TxNonceKeyPrefix);
                it.Valid() && it.Key().StartsWith(TxNonceKeyPrefix);
                it.Next()
            )
            {
                batch.Put(TxNonceKey(ccid, it.Key().Skip(1).ToArray()), it.Value());
            }

            newDb.Write(batch);
            batch.Dispose();

            // Remove column families
            db.Dispose();
            newDb.Dispose();
            Directory.Delete(path, true);
            Directory.Move(tmpDbPath, path);

            return true;
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
            _indexCache.Remove(chainId);
            if (HasFork(chainId))
            {
                _chainDb.Put(DeletedChainKey(chainId), Array.Empty<byte>());

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

            _logger.Debug($"Deleting chainID: {chainId}");
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
                _logger.Debug($"No such chain ID in _chainDb: {cfName}", cfName);
            }
            catch (Exception e)
            {
                LogUnexpectedException(nameof(DeleteChainId), e);
                throw;
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
                throw;
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
        {
            if (_indexCache.TryGetValue(chainId, out LruCache<(int, int?), List<BlockHash>> ic) &&
                ic.TryGetValue((offset, limit), out List<BlockHash> cached))
            {
                return cached;
            }

            List<BlockHash> indexes = IterateIndexes(chainId, offset, limit, false).ToList();

            if (ic is null)
            {
                _indexCache[chainId] = ic = new LruCache<(int, int?), List<BlockHash>>();
            }

            ic[(offset, limit)] = indexes;
            return indexes;
        }

        /// <inheritdoc cref="BaseStore.IndexBlockHash(Guid, long)"/>
        public override BlockHash? IndexBlockHash(Guid chainId, long index)
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

                if (IsDeletionMarked(chainId))
                {
                    return null;
                }

                (Guid ChainId, long Index)? prevChainInfo = GetPreviousChainInfo(chainId);
                while (prevChainInfo is { } infoNotNull && infoNotNull.Index >= index)
                {
                    chainId = infoNotNull.ChainId;
                    prevChainInfo = GetPreviousChainInfo(chainId);
                }

                byte[] indexBytes = RocksDBStoreBitConverter.GetBytes(index);
                byte[] bytes = _chainDb.Get(IndexKey(chainId, indexBytes));
                return bytes is null ? (BlockHash?)null : new BlockHash(bytes);
            }
            catch (Exception e)
            {
                LogUnexpectedException(nameof(IndexBlockHash), e);
                return null;
            }
        }

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
                throw;
            }

            _indexCache.Remove(chainId);

            return index;
        }

        /// <inheritdoc cref="BaseStore.ForkBlockIndexes(Guid, Guid, BlockHash)"/>
        public override void ForkBlockIndexes(
            Guid sourceChainId,
            Guid destinationChainId,
            BlockHash branchpoint
        )
        {
            BlockHash[] bottoms = IterateIndexes(sourceChainId, 0, 1, true).ToArray();
            BlockHash? genesisHash = bottoms.Any() ? bottoms[0] : (BlockHash?)null;

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

            // Do fork from previous chain instead current if it's available and same as current.
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

            _chainDb.Put(ChainIdKey(destinationChainId), destinationChainId.ToByteArray());
            AddFork(sourceChainId, destinationChainId);
        }

        /// <inheritdoc/>
        public override Transaction GetTransaction(TxId txid)
        {
            if (_txCache.TryGetValue(txid, out object cachedTx))
            {
                return (Transaction)cachedTx;
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
                RocksDb txDb;
                lock (_txDbCache)
                {
                    if (!_txDbCache.TryGetValue(txDbName, out txDb))
                    {
                        txDb = RocksDBUtils.OpenRocksDb(
                            _options, TxDbPath(txDbName), @readonly: _readonly);
                        _txDbCache.AddOrUpdate(txDbName, txDb);
                    }
                }

                byte[] txBytes = txDb.Get(key);

                Transaction tx =
                    TxMarshaler.DeserializeTransactionWithoutVerification(txBytes);
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
        public override void PutTransaction(Transaction tx)
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
            string txDbName = $"epoch{timestamp / _txEpochUnitSeconds}";
            _rwTxLock.EnterWriteLock();
            try
            {
                RocksDb txDb;
                lock (_txDbCache)
                {
                    if (!_txDbCache.TryGetValue(txDbName, out txDb))
                    {
                        txDb = RocksDBUtils.OpenRocksDb(
                            _options, TxDbPath(txDbName), @readonly: _readonly);
                        _txDbCache.AddOrUpdate(txDbName, txDb);
                    }
                }

                txDb.Put(key, tx.Serialize());
                _txIndexDb.Put(key, RocksDBStoreBitConverter.GetBytes(txDbName));
                _txCache.AddOrUpdate(tx.Id, tx);
            }
            catch (Exception e)
            {
                LogUnexpectedException(nameof(PutTransaction), e);
                throw;
            }
            finally
            {
                _rwTxLock.ExitWriteLock();
            }
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
                RocksDb blockDb;
                lock (_blockDbCache)
                {
                    if (!_blockDbCache.TryGetValue(blockDbName, out blockDb))
                    {
                        blockDb = RocksDBUtils.OpenRocksDb(
                            _options, BlockDbPath(blockDbName), @readonly: _readonly);
                        _blockDbCache.AddOrUpdate(blockDbName, blockDb);
                    }
                }

                if (!(blockDb.Get(key) is byte[] blockBytes))
                {
                    return null;
                }

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
        public override void PutBlock(Block block)
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

            foreach (Transaction tx in block.Transactions)
            {
                PutTransaction(tx);
            }

            _rwBlockLock.EnterWriteLock();
            try
            {
                string blockDbName = $"epoch{timestamp / _blockEpochUnitSeconds}";
                RocksDb blockDb;
                lock (_blockDbCache)
                {
                    if (!_blockDbCache.TryGetValue(blockDbName, out blockDb))
                    {
                        blockDb = RocksDBUtils.OpenRocksDb(
                            _options, BlockDbPath(blockDbName), @readonly: _readonly);
                        _blockDbCache.AddOrUpdate(blockDbName, blockDb);
                    }
                }

                BlockDigest digest = BlockDigest.FromBlock(block);
                byte[] value = digest.Serialize();
                blockDb.Put(key, value);
                _blockIndexDb.Put(key, RocksDBStoreBitConverter.GetBytes(blockDbName));
                _blockCache.AddOrUpdate(block.Hash, digest);
            }
            catch (Exception e)
            {
                LogUnexpectedException(nameof(PutBlock), e);
                throw;
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
                RocksDb blockDb;
                lock (_blockDbCache)
                {
                    if (!_blockDbCache.TryGetValue(blockDbName, out blockDb))
                    {
                        blockDb = RocksDBUtils.OpenRocksDb(
                            _options, BlockDbPath(blockDbName), @readonly: _readonly);
                        _blockDbCache.AddOrUpdate(blockDbName, blockDb);
                    }
                }

                _blockCache.Remove(blockHash);
                _blockIndexDb.Remove(key);
                blockDb.Remove(key);
                return true;
            }
            catch (Exception e)
            {
                LogUnexpectedException(nameof(DeleteBlock), e);
                throw;
            }
            finally
            {
                _rwBlockLock.ExitWriteLock();
            }
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

        /// <inheritdoc cref="BaseStore.PutTxIdBlockHashIndex(TxId, BlockHash)"/>
        public override void PutTxIdBlockHashIndex(TxId txId, BlockHash blockHash)
        {
            _txIdBlockHashIndexDb.Put(
                TxIdBlockHashIndexKey(txId, blockHash),
                blockHash.ToByteArray()
                );
        }

        /// <inheritdoc cref="BaseStore.DeleteTxIdBlockHashIndex(TxId, BlockHash)"/>
        public override void DeleteTxIdBlockHashIndex(TxId txId, BlockHash blockHash)
        {
            _txIdBlockHashIndexDb.Remove(
                TxIdBlockHashIndexKey(txId, blockHash)
            );
        }

        /// <inheritdoc cref="BaseStore.IterateTxIdBlockHashIndex(TxId)"/>
        public override IEnumerable<BlockHash> IterateTxIdBlockHashIndex(TxId txId)
        {
            var prefix = TxIdBlockHashIndexTxIdKey(txId);
            foreach (var it in IterateDb(_txIdBlockHashIndexDb, prefix))
            {
                yield return new BlockHash(it.Value());
            }
        }

        /// <inheritdoc cref="BaseStore.PutTxExecution"/>
        public override void PutTxExecution(TxExecution txExecution) =>
            _txExecutionDb.Put(
                TxExecutionKey(txExecution),
                Codec.Encode(SerializeTxExecution(txExecution))
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
                throw;
            }
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
                    _txExecutionDb?.Dispose();
                    _txIdBlockHashIndexDb?.Dispose();
                    foreach (var db in _txDbCache.Values)
                    {
                        db.Dispose();
                    }

                    _txDbCache.Clear();
                    _blockCommitDb?.Dispose();

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
            bool exist = false;
            try
            {
                byte[] prefix = TxNonceKey(sourceChainId);
                foreach (Iterator it in IterateDb(_chainDb, prefix))
                {
                    exist = true;
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
                throw;
            }
            finally
            {
                if (exist)
                {
                    _chainDb.Write(writeBatch);
                    writeBatch.Dispose();
                }
            }
        }

        /// <inheritdoc />
        public override void PruneOutdatedChains(bool noopWithoutCanon = false)
        {
            if (!(GetCanonicalChainId() is { } ccid))
            {
                if (noopWithoutCanon)
                {
                    return;
                }

                throw new InvalidOperationException("Canonical chain ID is not assigned.");
            }

            using var batch = new WriteBatch();

            // Copy indexes from previous chains.
            // TxNonce is not copied because it is copied during .ForkTxNonces().
            long index = 0;
            foreach (var hash in IterateIndexes(ccid, 0, null))
            {
                batch.Put(
                    IndexKey(ccid, RocksDBStoreBitConverter.GetBytes(index)),
                    hash.ToByteArray());

                if (batch.Count() > 10000)
                {
                    _chainDb.Write(batch);
                    batch.Clear();
                }

                index++;
            }

            _chainDb.Write(batch);
            batch.Clear();

            batch.Delete(PreviousChainIdKey(ccid));
            batch.Delete(PreviousChainIndexKey(ccid));
            batch.Delete(DeletedChainKey(ccid));
            _chainDb.Write(batch);
            batch.Clear();

            int guidLength = ccid.ToByteArray().Length;
            using Iterator it = _chainDb.NewIterator();
            for (it.SeekToFirst();
                 it.Valid();
                 it.Next())
            {
                if (it.Key().StartsWith(CanonicalChainIdIdKey))
                {
                    continue;
                }

                try
                {
                    var id = new Guid(it.Key().Skip(1).Take(guidLength).ToArray());
                    if (id.Equals(ccid))
                    {
                        continue;
                    }

                    batch.Delete(it.Key());
                }
                catch (Exception)
                {
                    // Key is corrupted, delete.
                    batch.Delete(it.Key());
                }

                if (batch.Count() > 10000)
                {
                    _chainDb.Write(batch);
                    batch.Clear();
                }
            }

            _chainDb.Write(batch);
            batch.Clear();
        }

        /// <inheritdoc />
        public override BlockCommit GetChainBlockCommit(Guid chainId)
        {
            try
            {
                byte[] key = ChainBlockCommitKey(chainId);
                byte[] bytes = _chainDb.Get(key);
                if (bytes is null)
                {
                    return null;
                }

                return new BlockCommit(Codec.Decode(bytes));
            }
            catch (Exception e)
            {
                LogUnexpectedException(nameof(GetChainBlockCommit), e);
            }

            return null;
        }

        public override void PutChainBlockCommit(Guid chainId, BlockCommit blockCommit)
        {
            try
            {
                byte[] key = ChainBlockCommitKey(chainId);
                byte[] bytes = Codec.Encode(blockCommit.Bencoded);

                _chainDb.Put(key, bytes);
                _chainDb.Put(ChainIdKey(chainId), chainId.ToByteArray());
            }
            catch (Exception e)
            {
                LogUnexpectedException(nameof(PutChainBlockCommit), e);
            }
        }

        public override BlockCommit GetBlockCommit(BlockHash blockHash)
        {
            _rwBlockCommitLock.EnterReadLock();

            try
            {
                byte[] key = BlockCommitKey(blockHash);
                byte[] bytes = _blockCommitDb.Get(key);
                if (bytes is null)
                {
                    return null;
                }

                return new BlockCommit(Codec.Decode(bytes));
            }
            catch (Exception e)
            {
                LogUnexpectedException(nameof(GetBlockCommit), e);
            }
            finally
            {
                _rwBlockCommitLock.ExitReadLock();
            }

            return null;
        }

        /// <inheritdoc />
        public override void PutBlockCommit(BlockCommit blockCommit)
        {
            byte[] key = BlockCommitKey(blockCommit.BlockHash);

            if (_blockCommitDb.Get(key) is { })
            {
                return;
            }

            _rwBlockCommitLock.EnterWriteLock();
            try
            {
                byte[] value = Codec.Encode(blockCommit.Bencoded);
                _blockCommitDb.Put(key, value);
            }
            catch (Exception e)
            {
                LogUnexpectedException(nameof(PutBlockCommit), e);
                throw;
            }
            finally
            {
                _rwBlockCommitLock.ExitWriteLock();
            }
        }

        /// <inheritdoc />
        public override void DeleteBlockCommit(BlockHash blockHash)
        {
            byte[] key = BlockCommitKey(blockHash);

            if (!(_blockCommitDb.Get(key) is { }))
            {
                return;
            }

            _rwBlockCommitLock.EnterWriteLock();
            try
            {
                _blockCommitDb.Remove(key);
            }
            catch (Exception e)
            {
                LogUnexpectedException(nameof(DeleteBlockCommit), e);
                throw;
            }
            finally
            {
                _rwBlockCommitLock.ExitWriteLock();
            }
        }

        /// <inheritdoc />
        public override IEnumerable<BlockHash> GetBlockCommitHashes()
        {
            try
            {
                IEnumerable<Iterator> iterators = IterateDb(_blockCommitDb, Array.Empty<byte>());

                // FIXME: Somehow key value comes with 0x76 prefix at the first index of
                // byte array.
                IEnumerable<BlockHash> hashes = iterators
                    .Select(x => new BlockHash(x.Key().Skip(1).ToArray()))
                    .ToArray();
                return hashes;
            }
            catch (Exception e)
            {
                LogUnexpectedException(nameof(PutBlockCommit), e);
                throw;
            }
        }

        [StoreLoader("rocksdb+file")]
        private static (IStore Store, IStateStore StateStore) Loader(Uri storeUri)
        {
            NameValueCollection query = HttpUtility.ParseQueryString(storeUri.Query);
            int blockCacheSize = query.GetInt32("block-cache", 512);
            int txCacheSize = query.GetInt32("tx-cache", 1024);
            ulong? maxTotalWalSize = query.GetUInt64("max-total-wal-size");
            ulong? keepLogFileNum = query.GetUInt64("keep-log-file-num");
            ulong? maxLogFileSize = query.GetUInt64("max-log-file-size");
            int txEpochUnitSeconds = query.GetInt32("tx-epoch-unit-secs", 86400);
            int blockEpochUnitSeconds = query.GetInt32("block-epoch-unit-secs", 86400);
            int dbConnectionCacheSize = query.GetInt32("connection-cache", 100);
            bool @readonly = query.GetBoolean("readonly", false);
            string statesKvPath = query.Get("states-dir") ?? StatesKvPathDefault;
            var store = new RocksDBStore(
                storeUri.LocalPath,
                blockCacheSize,
                txCacheSize,
                maxTotalWalSize,
                keepLogFileNum,
                maxLogFileSize,
                txEpochUnitSeconds,
                blockEpochUnitSeconds,
                dbConnectionCacheSize,
                @readonly);
            string statesDirPath = Path.Combine(storeUri.LocalPath, statesKvPath);
            var stateStore = new TrieStateStore(
                new RocksDBKeyValueStore(statesDirPath, @readonly));
            return (store, stateStore);
        }

        private static byte[] DeletedChainKey(Guid chainId) =>
            Concat(DeletedKeyPrefix, chainId.ToByteArray());

        private static byte[] PreviousChainIndexKey(Guid chainId) =>
            Concat(PreviousChainIndexKeyPrefix, chainId.ToByteArray());

        private static byte[] PreviousChainIdKey(Guid chainId) =>
            Concat(PreviousChainIdKeyPrefix, chainId.ToByteArray());

        private static byte[] IndexKey(Guid chainId) =>
            Concat(IndexKeyPrefix, chainId.ToByteArray());

        private static byte[] IndexKey(Guid chainId, byte[] indexBytes) =>
            Concat(IndexKeyPrefix, chainId.ToByteArray(), indexBytes);

        private static byte[] IndexCountKey(Guid chainId) =>
            Concat(IndexCountKeyPrefix, chainId.ToByteArray());

        private static byte[] ChainIdKey(Guid chainId) =>
            Concat(ChainIdKeyPrefix, chainId.ToByteArray());

        private static byte[] BlockKey(in BlockHash blockHash) =>
            Concat(BlockKeyPrefix, blockHash.ByteArray);

        private static byte[] TxKey(in TxId txId) =>
            Concat(TxKeyPrefix, txId.ByteArray);

        private static byte[] TxNonceKey(Guid chainId) =>
            Concat(TxNonceKeyPrefix, chainId.ToByteArray());

        private static byte[] TxNonceKey(Guid chainId, Address address) =>
            Concat(TxNonceKeyPrefix, chainId.ToByteArray(), address.ByteArray);

        private static byte[] TxNonceKey(Guid chainId, byte[] addressBytes) =>
            Concat(TxNonceKeyPrefix, chainId.ToByteArray(), addressBytes);

        private static byte[] TxExecutionKey(in BlockHash blockHash, in TxId txId) =>

            // As BlockHash is not fixed size, place TxId first.
            Concat(TxExecutionKeyPrefix, txId.ByteArray, blockHash.ByteArray);

        private static byte[] TxExecutionKey(TxExecution txExecution) =>
            Concat(
                TxExecutionKeyPrefix, txExecution.TxId.ByteArray, txExecution.BlockHash.ByteArray);

        private static byte[] TxIdBlockHashIndexKey(in TxId txId, in BlockHash blockHash) =>
            Concat(TxIdBlockHashIndexPrefix, txId.ByteArray, blockHash.ByteArray);

        private static byte[] TxIdBlockHashIndexTxIdKey(in TxId txId) =>
            Concat(TxIdBlockHashIndexPrefix, txId.ByteArray);

        private static byte[] ForkedChainsKey(Guid chainId, Guid forkedChainId) =>
            Concat(ForkedChainsKeyPrefix, chainId.ToByteArray(), forkedChainId.ToByteArray());

        private static byte[] ChainBlockCommitKey(Guid chainId) =>
            Concat(ChainBlockCommitKeyPrefix, chainId.ToByteArray());

        private static byte[] BlockCommitKey(in BlockHash blockHash) =>
            Concat(BlockCommitKeyPrefix, blockHash.ByteArray);

        private static byte[] Concat(byte[] first, byte[] second)
        {
            byte[] result = new byte[first.Length + second.Length];
            first.CopyTo(result, 0);
            second.CopyTo(result, first.Length);
            return result;
        }

        private static byte[] Concat(byte[] first, ImmutableArray<byte> second)
        {
            byte[] result = new byte[first.Length + second.Length];
            first.CopyTo(result, 0);
            second.CopyTo(result, first.Length);
            return result;
        }

        private static byte[] Concat(byte[] first, byte[] second, byte[] third)
        {
            byte[] result = new byte[first.Length + second.Length + third.Length];
            first.CopyTo(result, 0);
            second.CopyTo(result, first.Length);
            third.CopyTo(result, first.Length + second.Length);
            return result;
        }

        private static byte[] Concat(
            byte[] first,
            byte[] second,
            ImmutableArray<byte> third)
        {
            byte[] result = new byte[first.Length + second.Length + third.Length];
            first.CopyTo(result, 0);
            second.CopyTo(result, first.Length);
            third.CopyTo(result, first.Length + second.Length);
            return result;
        }

        private static byte[] Concat(
            byte[] first,
            ImmutableArray<byte> second,
            ImmutableArray<byte> third)
        {
            byte[] result = new byte[first.Length + second.Length + third.Length];
            first.CopyTo(result, 0);
            second.CopyTo(result, first.Length);
            third.CopyTo(result, first.Length + second.Length);
            return result;
        }

        private static IEnumerable<Iterator> IterateDb(RocksDb db, byte[] prefix)
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
            _logger.Error(e, "An unexpected exception occurred on {MethodName}()", methodName);
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
            long offset,
            long? limit,
            bool includeDeleted
        )
        {
            long count = 0;
            Stack<(Guid, long)> chainInfos = new Stack<(Guid, long)>();

            if (!includeDeleted && IsDeletionMarked(chainId))
            {
                yield break;
            }

            chainInfos.Push((chainId, CountIndex(chainId)));

            while (true)
            {
                if (chainInfos.Peek().Item2 > offset &&
                    GetPreviousChainInfo(chainInfos.Peek().Item1) is { } chainInfo)
                {
                    chainInfos.Push(chainInfo);
                }
                else
                {
                    break;
                }
            }

            long previousChainTipIndex;

            // Adjust offset if it skipped some previous chains.
            (offset, previousChainTipIndex) =
                GetPreviousChainInfo(chainInfos.Peek().Item1) is { } cinfo
                    ? (Math.Max(0, offset - cinfo.Item2 - 1), cinfo.Item2)
                    : (offset, 0);

            while (chainInfos.Count > 0)
            {
                (Guid, long) chainInfo = chainInfos.Pop();
                (Guid cid, long chainTipIndex) = chainInfo;

                // Include genesis block.
                long expectedCount = chainTipIndex - previousChainTipIndex +
                                     (GetPreviousChainInfo(cid) is null ? 1 : 0);

                foreach (BlockHash hash in IterateIndexesInner(cid, expectedCount))
                {
                    if (offset > 0)
                    {
                        offset -= 1;
                        continue;
                    }

                    if (count >= limit)
                    {
                        yield break;
                    }

                    yield return hash;
                    count += 1;
                }

                previousChainTipIndex = chainTipIndex;
            }
        }

        private IEnumerable<BlockHash> IterateIndexesInner(Guid chainId, long expectedCount)
        {
            long count = 0;
            byte[] prefix = Concat(IndexKeyPrefix, chainId.ToByteArray());
            foreach (Iterator it in IterateDb(_chainDb, prefix))
            {
                if (count >= expectedCount)
                {
                    yield break;
                }

                byte[] value = it.Value();
                yield return new BlockHash(value);
                count += 1;
            }
        }

        private void AddFork(Guid chainId, Guid forkedChainId)
        {
            _chainDb.Put(ForkedChainsKey(chainId, forkedChainId), Array.Empty<byte>());
        }

        private void RemoveFork(Guid chainId, Guid forkedChainId)
        {
            _chainDb.Remove(ForkedChainsKey(chainId, forkedChainId));
        }

        private bool HasFork(Guid chainId)
        {
            byte[] prefix = Concat(ForkedChainsKeyPrefix, chainId.ToByteArray());
            return IterateDb(_chainDb, prefix).Any();
        }

        private bool IsDeletionMarked(Guid chainId)
            => _chainDb.Get(DeletedChainKey(chainId)) is { };
    }
}
