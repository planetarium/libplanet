using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.IO;
using System.Linq;
using System.Runtime.InteropServices;
using System.Security.Cryptography;
using Bencodex;
using Bencodex.Types;
using Libplanet.Blocks;
using Libplanet.Tx;
using LiteDB;
using LruCacheNet;
using Serilog;
using Zio;
using Zio.FileSystems;
using FileMode = LiteDB.FileMode;

namespace Libplanet.Store
{
    /// <summary>
    /// The default built-in <see cref="IStore"/> implementation.  This stores data in
    /// the file system or in memory.  It also uses <a href="https://www.litedb.org/">LiteDB</a>
    /// for some complex indices.
    /// </summary>
    /// <seealso cref="IStore"/>
    public class DefaultStore : BaseStore
    {
        private const string IndexColPrefix = "index_";
        private const string TxIdBlockIndexPrefix = "txblockindex_";
        private const string TxNonceIdPrefix = "nonce_";

        private static readonly UPath TxRootPath = UPath.Root / "tx";
        private static readonly UPath BlockRootPath = UPath.Root / "block";
        private static readonly UPath TxExecutionRootPath = UPath.Root / "txexec";
        private static readonly UPath TxIdBlockHashRootPath = UPath.Root / "txbindex";
        private static readonly UPath BlockPerceptionRootPath = UPath.Root / "blockpercept";
        private static readonly Codec Codec = new Codec();

        private readonly ILogger _logger;

        private readonly IFileSystem _root;
        private readonly SubFileSystem _txs;
        private readonly SubFileSystem _blocks;
        private readonly SubFileSystem _txExecutions;
        private readonly SubFileSystem _txIdBlockHashIndex;
        private readonly SubFileSystem _blockPerceptions;
        private readonly LruCache<TxId, object> _txCache;
        private readonly LruCache<BlockHash, BlockDigest> _blockCache;

        private readonly MemoryStream _memoryStream;

        private readonly LiteDatabase _db;

        private bool _disposed = false;

        /// <summary>
        /// Creates a new <seealso cref="DefaultStore"/>.
        /// </summary>
        /// <param name="path">The path of the directory where the storage files will be saved.
        /// If the path is <c>null</c>, the database is created in memory.</param>
        /// <param name="journal">
        /// Enables or disables double write check to ensure durability.
        /// </param>
        /// <param name="indexCacheSize">Max number of pages in the index cache.</param>
        /// <param name="blockCacheSize">The capacity of the block cache.</param>
        /// <param name="txCacheSize">The capacity of the transaction cache.</param>
        /// <param name="flush">Writes data direct to disk avoiding OS cache.  Turned on by default.
        /// </param>
        /// <param name="readOnly">Opens database readonly mode. Turned off by default.</param>
        public DefaultStore(
            string path,
            bool journal = true,
            int indexCacheSize = 50000,
            int blockCacheSize = 512,
            int txCacheSize = 1024,
            bool flush = true,
            bool readOnly = false
        )
        {
            _logger = Log.ForContext<DefaultStore>();

            if (path is null)
            {
                _root = new MemoryFileSystem();
                _memoryStream = new MemoryStream();
                _db = new LiteDatabase(_memoryStream);
            }
            else
            {
                path = Path.GetFullPath(path);

                if (!Directory.Exists(path))
                {
                    Directory.CreateDirectory(path);
                }

                var pfs = new PhysicalFileSystem();
                _root = new SubFileSystem(
                    pfs,
                    pfs.ConvertPathFromInternal(path),
                    owned: true
                );

                var connectionString = new ConnectionString
                {
                    Filename = Path.Combine(path, "index.ldb"),
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
            }

            lock (_db.Mapper)
            {
                _db.Mapper.RegisterType(
                    hash => hash.ToByteArray(),
                    b => new BlockHash(b));
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

            _root.CreateDirectory(TxRootPath);
            _txs = new SubFileSystem(_root, TxRootPath, owned: false);
            _root.CreateDirectory(BlockRootPath);
            _blocks = new SubFileSystem(_root, BlockRootPath, owned: false);
            _root.CreateDirectory(TxExecutionRootPath);
            _txExecutions = new SubFileSystem(_root, TxExecutionRootPath, owned: false);
            _root.CreateDirectory(TxIdBlockHashRootPath);
            _txIdBlockHashIndex = new SubFileSystem(_root, TxIdBlockHashRootPath, owned: false);
            _root.CreateDirectory(BlockPerceptionRootPath);
            _blockPerceptions = new SubFileSystem(_root, BlockPerceptionRootPath, owned: false);

            _txCache = new LruCache<TxId, object>(capacity: txCacheSize);
            _blockCache = new LruCache<BlockHash, BlockDigest>(capacity: blockCacheSize);
        }

        private LiteCollection<StagedTxIdDoc> StagedTxIds =>
            _db.GetCollection<StagedTxIdDoc>("staged_txids");

        /// <inheritdoc/>
        public override IEnumerable<Guid> ListChainIds()
        {
            return _db.GetCollectionNames()
                .Where(name => name.StartsWith(IndexColPrefix))
                .Select(name => ParseChainId(name.Substring(IndexColPrefix.Length)));
        }

        /// <inheritdoc/>
        public override void DeleteChainId(Guid chainId)
        {
            _db.DropCollection(IndexCollection(chainId).Name);
            _db.DropCollection(TxNonceId(chainId));
        }

        /// <inheritdoc />
        public override Guid? GetCanonicalChainId()
        {
            LiteCollection<BsonDocument> collection = _db.GetCollection<BsonDocument>("canon");
            var docId = new BsonValue("canon");
            BsonDocument doc = collection.FindById(docId);
            if (doc is null)
            {
                return null;
            }

            return doc.TryGetValue("chainId", out BsonValue ns)
                ? new Guid(ns.AsBinary)
                : (Guid?)null;
        }

        /// <inheritdoc />
        public override void SetCanonicalChainId(Guid chainId)
        {
            LiteCollection<BsonDocument> collection = _db.GetCollection<BsonDocument>("canon");
            var docId = new BsonValue("canon");
            byte[] idBytes = chainId.ToByteArray();
            collection.Upsert(docId, new BsonDocument() { ["chainId"] = new BsonValue(idBytes) });
        }

        /// <inheritdoc/>
        public override long CountIndex(Guid chainId)
        {
            return IndexCollection(chainId).Count();
        }

        /// <inheritdoc cref="BaseStore.IterateIndexes(Guid, int, int?)"/>
        public override IEnumerable<BlockHash> IterateIndexes(Guid chainId, int offset, int? limit)
        {
            return IndexCollection(chainId)
                .Find(Query.All(), offset, limit ?? int.MaxValue)
                .Select(i => i.Hash);
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

            HashDoc doc = IndexCollection(chainId).FindById(index + 1);
            BlockHash? hash = doc is { } d ? d.Hash : (BlockHash?)null;
            return hash;
        }

        /// <inheritdoc cref="BaseStore.AppendIndex(Guid, BlockHash)"/>
        public override long AppendIndex(Guid chainId, BlockHash hash)
        {
            return IndexCollection(chainId).Insert(new HashDoc { Hash = hash }) - 1;
        }

        /// <inheritdoc cref="BaseStore.ForkBlockIndexes(Guid, Guid, BlockHash)"/>
        public override void ForkBlockIndexes(
            Guid sourceChainId,
            Guid destinationChainId,
            BlockHash branchpoint)
        {
            LiteCollection<HashDoc> srcColl = IndexCollection(sourceChainId);
            LiteCollection<HashDoc> destColl = IndexCollection(destinationChainId);

            BlockHash? genesisHash = IterateIndexes(sourceChainId, 0, 1)
                .Cast<BlockHash?>()
                .FirstOrDefault();

            if (genesisHash is null || branchpoint.Equals(genesisHash))
            {
                return;
            }

            destColl.Delete(Query.All());
            destColl.InsertBulk(srcColl.FindAll().TakeWhile(i => !i.Hash.Equals(branchpoint)));

            AppendIndex(destinationChainId, branchpoint);
        }

        /// <inheritdoc/>
        public override void StageTransactionIds(IImmutableSet<TxId> txids)
        {
            StagedTxIds.InsertBulk(
                txids.Select(txid => new StagedTxIdDoc { TxId = txid, })
            );
        }

        /// <inheritdoc/>
        public override void UnstageTransactionIds(ISet<TxId> txids)
        {
            StagedTxIds.Delete(tx => txids.Contains(tx.TxId));
        }

        /// <inheritdoc/>
        public override IEnumerable<TxId> IterateStagedTransactionIds()
        {
            IEnumerable<StagedTxIdDoc> docs = StagedTxIds.FindAll();
            return docs.Select(d => d.TxId).Distinct();
        }

        /// <inheritdoc/>
        public override IEnumerable<TxId> IterateTransactionIds()
        {
            foreach (UPath path in _txs.EnumerateDirectories(UPath.Root))
            {
                string upper = path.GetName();
                if (upper.Length != 2)
                {
                    continue;
                }

                foreach (UPath subPath in _txs.EnumerateFiles(path))
                {
                    string lower = subPath.GetName();
                    if (lower.Length != 62)
                    {
                        continue;
                    }

                    string name = upper + lower;
                    TxId txid;
                    try
                    {
                        txid = new TxId(ByteUtil.ParseHex(name));
                    }
                    catch (Exception)
                    {
                        // Skip if a filename does not match to the format.
                        continue;
                    }

                    yield return txid;
                }
            }
        }

        /// <inheritdoc/>
        public override Transaction<T> GetTransaction<T>(TxId txid)
        {
            if (_txCache.TryGetValue(txid, out object cachedTx))
            {
                return (Transaction<T>)cachedTx;
            }

            UPath path = TxPath(txid);
            if (!_txs.FileExists(path))
            {
                return null;
            }

            byte[] bytes;
            try
            {
                bytes = _txs.ReadAllBytes(path);
            }
            catch (FileNotFoundException)
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

            WriteContentAddressableFile(_txs, TxPath(tx.Id), tx.Serialize(true));
            _txCache.AddOrUpdate(tx.Id, tx);
        }

        /// <inheritdoc/>
        public override bool DeleteTransaction(TxId txid)
        {
            var path = TxPath(txid);
            if (_txs.FileExists(path))
            {
                _txs.DeleteFile(path);
                _txCache.Remove(txid);
                return true;
            }

            return false;
        }

        /// <inheritdoc/>
        public override bool ContainsTransaction(TxId txId)
        {
            if (_txCache.ContainsKey(txId))
            {
                return true;
            }

            return _txs.FileExists(TxPath(txId));
        }

        /// <inheritdoc cref="BaseStore.IterateBlockHashes()"/>
        public override IEnumerable<BlockHash> IterateBlockHashes()
        {
            foreach (UPath path in _blocks.EnumerateDirectories(UPath.Root))
            {
                string upper = path.GetName();
                if (upper.Length != 2)
                {
                    continue;
                }

                foreach (UPath subPath in _blocks.EnumerateFiles(path))
                {
                    string lower = subPath.GetName();
                    string name = upper + lower;
                    BlockHash blockHash;
                    try
                    {
                        blockHash = BlockHash.FromString(name);
                    }
                    catch (Exception)
                    {
                        // Skip if a filename does not match to the format.
                        continue;
                    }

                    yield return blockHash;
                }
            }
        }

        /// <inheritdoc cref="BaseStore.GetBlockDigest(BlockHash)"/>
        public override BlockDigest? GetBlockDigest(BlockHash blockHash)
        {
            if (_blockCache.TryGetValue(blockHash, out BlockDigest cachedDigest))
            {
                return cachedDigest;
            }

            UPath path = BlockPath(blockHash);
            if (!_blocks.FileExists(path))
            {
                return null;
            }

            BlockDigest blockDigest;
            try
            {
                IValue value = Codec.Decode(_blocks.ReadAllBytes(path));
                if (!(value is Bencodex.Types.Dictionary dict))
                {
                    throw new DecodingException(
                        $"Expected {typeof(Bencodex.Types.Dictionary)} but " +
                        $"{value.GetType()}");
                }

                blockDigest = new BlockDigest(dict);
            }
            catch (FileNotFoundException)
            {
                return null;
            }

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

            UPath path = BlockPath(block.Hash);
            if (_blocks.FileExists(path))
            {
                return;
            }

            foreach (Transaction<T> tx in block.Transactions)
            {
                PutTransaction(tx);
            }

            WriteContentAddressableFile(_blocks, path, block.ToBlockDigest().Serialize());
            _blockCache.AddOrUpdate(block.Hash, block.ToBlockDigest());
        }

        /// <inheritdoc cref="BaseStore.DeleteBlock(BlockHash)"/>
        public override bool DeleteBlock(BlockHash blockHash)
        {
            var path = BlockPath(blockHash);
            if (_blocks.FileExists(path))
            {
                _blocks.DeleteFile(path);
                _blockCache.Remove(blockHash);
                return true;
            }

            return false;
        }

        /// <inheritdoc cref="BaseStore.ContainsBlock(BlockHash)"/>
        public override bool ContainsBlock(BlockHash blockHash)
        {
            if (_blockCache.ContainsKey(blockHash))
            {
                return true;
            }

            UPath blockPath = BlockPath(blockHash);
            return _blocks.FileExists(blockPath);
        }

        /// <inheritdoc cref="BaseStore.PutTxExecution(Libplanet.Tx.TxSuccess)"/>
        public override void PutTxExecution(TxSuccess txSuccess)
        {
            UPath path = TxExecutionPath(txSuccess);
            UPath dirPath = path.GetDirectory();
            CreateDirectoryRecursively(_txExecutions, dirPath);
            using Stream f =
                _txExecutions.OpenFile(path, System.IO.FileMode.OpenOrCreate, FileAccess.Write);
            Codec.Encode(SerializeTxExecution(txSuccess), f);
        }

        /// <inheritdoc cref="BaseStore.PutTxExecution(Libplanet.Tx.TxFailure)"/>
        public override void PutTxExecution(TxFailure txFailure)
        {
            UPath path = TxExecutionPath(txFailure);
            UPath dirPath = path.GetDirectory();
            CreateDirectoryRecursively(_txExecutions, dirPath);
            using Stream f =
                _txExecutions.OpenFile(path, System.IO.FileMode.OpenOrCreate, FileAccess.Write);
            Codec.Encode(SerializeTxExecution(txFailure), f);
        }

        /// <inheritdoc cref="BaseStore.GetTxExecution(BlockHash, TxId)"/>
        public override TxExecution GetTxExecution(BlockHash blockHash, TxId txid)
        {
            UPath path = TxExecutionPath(blockHash, txid);
            if (_txExecutions.FileExists(path))
            {
                IValue decoded;
                using (Stream f = _txExecutions.OpenFile(
                    path, System.IO.FileMode.Open, FileAccess.Read))
                {
                    try
                    {
                        decoded = Codec.Decode(f);
                    }
                    catch (DecodingException e)
                    {
                        const string msg =
                            "Uncaught exception during " + nameof(GetTxExecution) + ": {Exception}";
                        _logger.Error(e, msg, e);
                        return null;
                    }
                }

                return DeserializeTxExecution(blockHash, txid, decoded, _logger);
            }

            return null;
        }

        /// <inheritdoc cref="BaseStore.PutTxIdBlockHashIndex(TxId, BlockHash)"/>
        public override void PutTxIdBlockHashIndex(TxId txId, BlockHash blockHash)
        {
            var path = TxPath(txId);
            var dirPath = path.GetDirectory();
            CreateDirectoryRecursively(_txIdBlockHashIndex, dirPath);
            _txIdBlockHashIndex.WriteAllBytes(path, blockHash.ToByteArray());
        }

        /// <inheritdoc cref="BaseStore.GetTxIdBlockHashIndex(TxId)"/>
        public override BlockHash? GetTxIdBlockHashIndex(TxId txId)
        {
            var path = TxPath(txId);
            if (!_txIdBlockHashIndex.FileExists(path))
            {
                return null;
            }

            try
            {
                return new BlockHash(_txIdBlockHashIndex.ReadAllBytes(path));
            }
            catch (FileNotFoundException)
            {
                return null;
            }
        }

        /// <inheritdoc cref="BaseStore.DeleteTxIdBlockHashIndex(TxId)"/>
        public override void DeleteTxIdBlockHashIndex(TxId txId)
        {
            var path = TxPath(txId);
            if (_txIdBlockHashIndex.FileExists(path))
            {
                _txIdBlockHashIndex.DeleteFile(path);
            }
        }

        /// <inheritdoc cref="BaseStore.SetBlockPerceivedTime(BlockHash, DateTimeOffset)"/>
        public override void SetBlockPerceivedTime(
            BlockHash blockHash,
            DateTimeOffset perceivedTime
        )
        {
            UPath path = BlockPath(blockHash);
            if (!_blockPerceptions.FileExists(path))
            {
                UPath dirPath = path.GetDirectory();
                CreateDirectoryRecursively(_blockPerceptions, dirPath);
                _blockPerceptions.WriteAllBytes(path, new byte[0]);
            }

            _blockPerceptions.SetLastWriteTime(path, perceivedTime.LocalDateTime);
        }

        /// <inheritdoc cref="BaseStore.GetBlockPerceivedTime(BlockHash)"/>
        public override DateTimeOffset? GetBlockPerceivedTime(BlockHash blockHash)
        {
            UPath path = BlockPath(blockHash);
            return _blockPerceptions.FileExists(path)
                ? (DateTimeOffset?)_blockPerceptions.GetLastWriteTime(path)
                : null;
        }

        /// <inheritdoc/>
        public override IEnumerable<KeyValuePair<Address, long>> ListTxNonces(Guid chainId)
        {
            var collectionId = TxNonceId(chainId);
            LiteCollection<BsonDocument> collection = _db.GetCollection<BsonDocument>(collectionId);
            foreach (BsonDocument doc in collection.FindAll())
            {
                if (doc.TryGetValue("_id", out BsonValue id) && id.IsBinary)
                {
                    var address = new Address(id.AsBinary);
                    if (doc.TryGetValue("v", out BsonValue v) && v.IsInt64 && v.AsInt64 > 0)
                    {
                        yield return new KeyValuePair<Address, long>(address, v.AsInt64);
                    }
                }
            }
        }

        /// <inheritdoc/>
        public override long GetTxNonce(Guid chainId, Address address)
        {
            LiteCollection<BsonDocument> collection = TxNonceCollection(chainId);
            var docId = new BsonValue(address.ToByteArray());
            BsonDocument doc = collection.FindById(docId);

            if (doc is null)
            {
                return 0;
            }

            return doc.TryGetValue("v", out BsonValue v) ? v.AsInt64 : 0;
        }

        /// <inheritdoc/>
        public override void IncreaseTxNonce(Guid chainId, Address signer, long delta = 1)
        {
            long nextNonce = GetTxNonce(chainId, signer) + delta;
            LiteCollection<BsonDocument> collection = TxNonceCollection(chainId);
            var docId = new BsonValue(signer.ToByteArray());
            collection.Upsert(docId, new BsonDocument() { ["v"] = new BsonValue(nextNonce) });
        }

        /// <inheritdoc/>
        public override void ForkTxNonces(Guid sourceChainId, Guid destinationChainId)
        {
            LiteCollection<BsonDocument> srcColl = TxNonceCollection(sourceChainId);
            LiteCollection<BsonDocument> destColl = TxNonceCollection(destinationChainId);

            destColl.InsertBulk(srcColl.FindAll());
        }

        /// <inheritdoc/>
        public override long CountTransactions()
        {
            // FIXME: This implementation is too inefficient.  Fortunately, this method seems
            // unused (except for unit tests).  If this is never used why should we maintain
            // this?  This is basically only for making TransactionSet<T> class to implement
            // IDictionary<TxId, Transaction<T>>.Count property, which is never used either.
            // We'd better to refactor all such things so that unnecessary APIs are gone away.
            return IterateTransactionIds().LongCount();
        }

        /// <inheritdoc/>
        public override long CountBlocks()
        {
            // FIXME: This implementation is too inefficient.  Fortunately, this method seems
            // unused (except for unit tests).  If this is never used why should we maintain
            // this?  This is basically only for making BlockSet<T> class to implement
            // IDictionary<HashDigest<SHA256>, Block<T>>.Count property, which is never used either.
            // We'd better to refactor all such things so that unnecessary APIs are gone away.
            return IterateBlockHashes().LongCount();
        }

        public override void Dispose()
        {
            if (!_disposed)
            {
                _db?.Dispose();
                _memoryStream?.Dispose();
                _root.Dispose();
                _disposed = true;
            }
        }

        internal static Guid ParseChainId(string chainIdString) =>
            new Guid(ByteUtil.ParseHex(chainIdString));

        internal static string FormatChainId(Guid chainId) =>
            ByteUtil.Hex(chainId.ToByteArray());

        private static void CreateDirectoryRecursively(IFileSystem fs, UPath path)
        {
            if (!fs.DirectoryExists(path))
            {
                CreateDirectoryRecursively(fs, path.GetDirectory());
                fs.CreateDirectory(path);
            }
        }

        private void WriteContentAddressableFile(IFileSystem fs, UPath path, byte[] contents)
        {
            UPath dirPath = path.GetDirectory();
            CreateDirectoryRecursively(fs, dirPath);

            // Assuming the filename is content-addressable, so that if there is
            // already the file of the same name the content is the same as well.
            if (fs.FileExists(path))
            {
                return;
            }

            // For atomicity, writes bytes into an intermediate temp file,
            // and then renames it to the final destination.
            UPath tmpPath = dirPath / $".{Guid.NewGuid():N}.tmp";
            try
            {
                fs.WriteAllBytes(tmpPath, contents);
                try
                {
                    fs.MoveFile(tmpPath, path);
                }
                catch (IOException)
                {
                    if (!fs.FileExists(path) ||
                        fs.GetFileLength(path) != contents.LongLength)
                    {
                        throw;
                    }
                }
            }
            finally
            {
                if (fs.FileExists(tmpPath))
                {
                    fs.DeleteFile(tmpPath);
                }
            }
        }

        private UPath BlockPath(in BlockHash blockHash)
        {
            string idHex = ByteUtil.Hex(blockHash.ByteArray);
            if (idHex.Length < 3)
            {
                throw new ArgumentException(
                    $"Too short block hash: \"{idHex}\".",
                    nameof(blockHash)
                );
            }

            return UPath.Root / idHex.Substring(0, 2) / idHex.Substring(2);
        }

        private UPath TxPath(in TxId txid)
        {
            string idHex = txid.ToHex();
            return UPath.Root / idHex.Substring(0, 2) / idHex.Substring(2);
        }

        private UPath TxExecutionPath(in BlockHash blockHash, in TxId txid) =>
            BlockPath(blockHash) / txid.ToHex();

        private UPath TxExecutionPath(TxExecution txExecution) =>
            TxExecutionPath(txExecution.BlockHash, txExecution.TxId);

        private string TxNonceId(in Guid chainId)
        {
            return $"{TxNonceIdPrefix}{FormatChainId(chainId)}";
        }

        private LiteCollection<HashDoc> IndexCollection(in Guid chainId)
        {
            return _db.GetCollection<HashDoc>($"{IndexColPrefix}{FormatChainId(chainId)}");
        }

        private LiteCollection<TxIdBlockHashDoc> TxIdBlockIndexCollection(in Guid chainId)
        {
            return _db.GetCollection<TxIdBlockHashDoc>(
                $"{TxIdBlockIndexPrefix}{FormatChainId(chainId)}");
        }

        private LiteCollection<BsonDocument> TxNonceCollection(Guid chainId)
        {
            return _db.GetCollection<BsonDocument>(TxNonceId(chainId));
        }

        private class TxIdBlockHashDoc
        {
            [BsonId]
            public long Id { get; set; }

            public TxId TxId { get; set; }

            public BlockHash BlockHash { get; set; }
        }

        private class HashDoc
        {
            public long Id { get; set; }

            public BlockHash Hash { get; set; }
        }

        private class StagedTxIdDoc
        {
            public long Id { get; set; }

            public TxId TxId { get; set; }
        }
    }
}
