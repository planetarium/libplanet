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
        private const string TxNonceIdPrefix = "nonce_";

        private static readonly UPath TxRootPath = UPath.Root / "tx";
        private static readonly UPath BlockRootPath = UPath.Root / "block";
        private static readonly UPath BlockPerceptionRootPath = UPath.Root / "blockpercept";

        private readonly ILogger _logger;

        private readonly IFileSystem _root;
        private readonly SubFileSystem _txs;
        private readonly SubFileSystem _blocks;
        private readonly SubFileSystem _blockPerceptions;
        private readonly LruCache<TxId, object> _txCache;
        private readonly LruCache<HashDigest<SHA256>, BlockDigest> _blockCache;

        private readonly MemoryStream _memoryStream;

        private readonly LiteDatabase _db;

        /// <summary>
        /// Creates a new <seealso cref="DefaultStore"/>.
        /// </summary>
        /// <param name="path">The path of the directory where the storage files will be saved.
        /// If the path is <c>null</c>, the database is created in memory.</param>
        /// <param name="compress">Whether to compress data.  Does not compress by default.</param>
        /// <param name="journal">
        /// Enables or disables double write check to ensure durability.
        /// </param>
        /// <param name="indexCacheSize">Max number of pages in the index cache.</param>
        /// <param name="blockCacheSize">The capacity of the block cache.</param>
        /// <param name="txCacheSize">The capacity of the transaction cache.</param>
        /// <param name="statesCacheSize">The capacity of the states cache.</param>
        /// <param name="flush">Writes data direct to disk avoiding OS cache.  Turned on by default.
        /// </param>
        /// <param name="readOnly">Opens database readonly mode. Turned off by default.</param>
        public DefaultStore(
            string path,
            bool compress = false,
            bool journal = true,
            int indexCacheSize = 50000,
            int blockCacheSize = 512,
            int txCacheSize = 1024,
            int statesCacheSize = 10000,
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
            _root.CreateDirectory(BlockPerceptionRootPath);
            _blockPerceptions = new SubFileSystem(_root, BlockPerceptionRootPath, owned: false);

            _txCache = new LruCache<TxId, object>(capacity: txCacheSize);
            _blockCache = new LruCache<HashDigest<SHA256>, BlockDigest>(capacity: blockCacheSize);
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

        /// <inheritdoc/>
        public override IEnumerable<HashDigest<SHA256>> IterateIndexes(
            Guid chainId,
            int offset,
            int? limit)
        {
            return IndexCollection(chainId)
                .Find(Query.All(), offset, limit ?? int.MaxValue)
                .Select(i => i.Hash);
        }

        /// <inheritdoc/>
        public override HashDigest<SHA256>? IndexBlockHash(Guid chainId, long index)
        {
            if (index < 0)
            {
                index += CountIndex(chainId);

                if (index < 0)
                {
                    return null;
                }
            }

            return IndexCollection(chainId).FindById(index + 1)?.Hash;
        }

        /// <inheritdoc/>
        public override long AppendIndex(Guid chainId, HashDigest<SHA256> hash)
        {
            return IndexCollection(chainId).Insert(new HashDoc { Hash = hash }) - 1;
        }

        /// <inheritdoc/>
        public override void ForkBlockIndexes(
            Guid sourceChainId,
            Guid destinationChainId,
            HashDigest<SHA256> branchPoint)
        {
            LiteCollection<HashDoc> srcColl = IndexCollection(sourceChainId);
            LiteCollection<HashDoc> destColl = IndexCollection(destinationChainId);

            HashDigest<SHA256>? genesisHash = IterateIndexes(sourceChainId, 0, 1)
                .Cast<HashDigest<SHA256>?>()
                .FirstOrDefault();

            if (genesisHash is null || branchPoint.Equals(genesisHash))
            {
                return;
            }

            destColl.InsertBulk(srcColl.FindAll()
                .TakeWhile(i => !i.Hash.Equals(branchPoint)).Skip(1));

            AppendIndex(destinationChainId, branchPoint);
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

        /// <inheritdoc/>
        public override IEnumerable<HashDigest<SHA256>> IterateBlockHashes()
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
                    if (lower.Length != 62)
                    {
                        continue;
                    }

                    string name = upper + lower;
                    HashDigest<SHA256> blockHash;
                    try
                    {
                        blockHash = new HashDigest<SHA256>(ByteUtil.ParseHex(name));
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

        /// <inheritdoc/>
        public override BlockDigest? GetBlockDigest(HashDigest<SHA256> blockHash)
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
                IValue value = new Codec().Decode(_blocks.ReadAllBytes(path));
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

        /// <inheritdoc/>
        public override bool DeleteBlock(HashDigest<SHA256> blockHash)
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

        /// <inheritdoc/>
        public override bool ContainsBlock(HashDigest<SHA256> blockHash)
        {
            if (_blockCache.ContainsKey(blockHash))
            {
                return true;
            }

            UPath blockPath = BlockPath(blockHash);
            return _blocks.FileExists(blockPath);
        }

        /// <inheritdoc/>
        public override void SetBlockPerceivedTime(
            HashDigest<SHA256> blockHash,
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

        /// <inheritdoc/>
        public override DateTimeOffset? GetBlockPerceivedTime(HashDigest<SHA256> blockHash)
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
            var collectionId = TxNonceId(chainId);
            LiteCollection<BsonDocument> collection = _db.GetCollection<BsonDocument>(collectionId);
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
            var collectionId = TxNonceId(chainId);
            LiteCollection<BsonDocument> collection = _db.GetCollection<BsonDocument>(collectionId);
            var docId = new BsonValue(signer.ToByteArray());
            collection.Upsert(docId, new BsonDocument() { ["v"] = new BsonValue(nextNonce) });
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
            _db?.Dispose();
            _memoryStream?.Dispose();
            _root.Dispose();
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

        private UPath BlockPath(HashDigest<SHA256> blockHash)
        {
            string idHex = ByteUtil.Hex(blockHash.ByteArray);
            return UPath.Root / idHex.Substring(0, 2) / idHex.Substring(2);
        }

        private UPath TxPath(TxId txid)
        {
            string idHex = txid.ToHex();
            return UPath.Root / idHex.Substring(0, 2) / idHex.Substring(2);
        }

        private string TxNonceId(Guid chainId)
        {
            return $"{TxNonceIdPrefix}{FormatChainId(chainId)}";
        }

        private LiteCollection<HashDoc> IndexCollection(Guid chainId)
        {
            return _db.GetCollection<HashDoc>($"{IndexColPrefix}{FormatChainId(chainId)}");
        }

        private class HashDoc
        {
            public long Id { get; set; }

            public HashDigest<SHA256> Hash { get; set; }
        }

        private class StagedTxIdDoc
        {
            public long Id { get; set; }

            public TxId TxId { get; set; }
        }
    }
}
