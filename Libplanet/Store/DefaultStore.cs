#nullable disable
using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.IO;
using System.Linq;
using System.Runtime.InteropServices;
using System.Security.Cryptography;
using System.Web;
using Bencodex;
using Bencodex.Types;
using Libplanet.Blocks;
using Libplanet.Misc;
using Libplanet.Store.Trie;
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
    /// <para><see cref="DefaultStore"/> and <see cref="DefaultKeyValueStore"/>-backed
    /// <see cref="TrieStateStore"/> can be instantiated from a URI with <c>default+file:</c> scheme
    /// using <see cref="StoreLoaderAttribute.LoadStore(Uri)"/>, e.g.:</para>
    /// <list type="bullet">
    /// <item><description><c>default+file:///var/data/planet/</c></description></item>
    /// <item><description><c>default+file:///c:/Users/john/AppData/Local/planet/</c></description>
    /// </item>
    /// <item><description><c>default+file:///var/data/planet/?secure=true</c>
    /// (trie keys are hashed)</description></item>
    /// </list>
    /// <para>The following query string parameters are supported:</para>
    /// <list type="table">
    /// <item>
    /// <term><c>journal</c></term>
    /// <description><see langword="true"/> (default) or <see langword="false"/>.  Corresponds to
    /// <see cref="DefaultStore(string, bool, int, int, int, bool, bool)"/>'s <c>journal</c>
    /// parameter.</description>
    /// </item>
    /// <item>
    /// <term><c>index-cache</c></term>
    /// <description>Corresponds to <see cref="DefaultStore(string,bool,int,int,int,bool,bool)"/>'s
    /// <c>indexCacheSize</c> parameter.  50000 by default.</description>
    /// </item>
    /// <item>
    /// <term><c>block-cache</c></term>
    /// <description>Corresponds to <see cref="DefaultStore(string,bool,int,int,int,bool,bool)"/>'s
    /// <c>blockCacheSize</c> parameter.  512 by default.</description>
    /// </item>
    /// <item>
    /// <term><c>tx-cache</c></term>
    /// <description>Corresponds to <see cref="DefaultStore(string,bool,int,int,int,bool,bool)"/>'s
    /// <c>txCacheSize</c> parameter.  1024 by default.</description>
    /// </item>
    /// <item>
    /// <term><c>flush</c></term>
    /// <description><see langword="true"/> (default) or <see langword="false"/>.  Corresponds to
    /// <see cref="DefaultStore(string, bool, int, int, int, bool, bool)"/>'s <c>flush</c>
    /// parameter.</description>
    /// </item>
    /// <item>
    /// <term><c>readonly</c></term>
    /// <description><see langword="true"/> or <see langword="false"/> (default).  Corresponds to
    /// <see cref="DefaultStore(string, bool, int, int, int, bool, bool)"/>'s <c>readOnly</c>
    /// parameter.</description>
    /// </item>
    /// <item>
    /// <term><c>states-dir</c></term>
    /// <description>Corresponds to <see cref="DefaultKeyValueStore(string)"/>'s <c>path</c>
    /// parameter.  It is relative to the URI path, and defaults to <c>states</c>.</description>
    /// </item>
    /// <item>
    /// <term><c>secure</c></term>
    /// <description><see langword="true"/> or <see langword="false"/> (default).  Corresponds to
    /// <see cref="TrieStateStore(IKeyValueStore, bool)"/>'s <c>secure</c> parameter.</description>
    /// </item>
    /// </list>
    /// </summary>
    /// <seealso cref="IStore"/>
    public class DefaultStore : BaseStore
    {
        private const string IndexColPrefix = "index_";
        private const string TxIdBlockIndexPrefix = "txblockindex_";
        private const string TxNonceIdPrefix = "nonce_";
        private const string StatesKvPathDefault = "states";

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
        /// If the path is <see langword="null"/>, the database is created in memory.</param>
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
                blockDigest = BlockDigest.Deserialize(_blocks.ReadAllBytes(path));
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

            BlockDigest digest = BlockDigest.FromBlock(block);
            WriteContentAddressableFile(_blocks, path, digest.Serialize());
            _blockCache.AddOrUpdate(block.Hash, digest);
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
                _txExecutions.OpenFile(path, System.IO.FileMode.Create, FileAccess.Write);
            Codec.Encode(SerializeTxExecution(txSuccess), f);
        }

        /// <inheritdoc cref="BaseStore.PutTxExecution(Libplanet.Tx.TxFailure)"/>
        public override void PutTxExecution(TxFailure txFailure)
        {
            UPath path = TxExecutionPath(txFailure);
            UPath dirPath = path.GetDirectory();
            CreateDirectoryRecursively(_txExecutions, dirPath);
            using Stream f =
                _txExecutions.OpenFile(path, System.IO.FileMode.Create, FileAccess.Write);
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
                            "Uncaught exception during " + nameof(GetTxExecution);
                        _logger.Error(e, msg);
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
            var path = TxIdBlockHashIndexPath(txId, blockHash);
            var dirPath = path.GetDirectory();
            CreateDirectoryRecursively(_txIdBlockHashIndex, dirPath);
            _txIdBlockHashIndex.WriteAllBytes(path, blockHash.ToByteArray());
        }

        public override IEnumerable<BlockHash> IterateTxIdBlockHashIndex(TxId txId)
        {
            var txPath = TxPath(txId);
            if (!_txIdBlockHashIndex.DirectoryExists(txPath))
            {
                yield break;
            }

            foreach (var path in _txIdBlockHashIndex.EnumerateFiles(txPath))
            {
                yield return new BlockHash(ByteUtil.ParseHex(path.GetName()));
            }
        }

        /// <inheritdoc cref="BaseStore.DeleteTxIdBlockHashIndex(TxId, BlockHash)"/>
        public override void DeleteTxIdBlockHashIndex(TxId txId, BlockHash blockHash)
        {
            var path = TxIdBlockHashIndexPath(txId, blockHash);
            if (_txIdBlockHashIndex.FileExists(path))
            {
                _txIdBlockHashIndex.DeleteFile(path);
            }
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

            Guid[] chainIds = ListChainIds().ToArray();
            foreach (Guid id in chainIds.Where(id => !id.Equals(ccid)))
            {
                DeleteChainId(id);
            }
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

        [StoreLoader("default+file")]
        private static (IStore Store, IStateStore StateStore) Loader(Uri storeUri)
        {
            NameValueCollection query = HttpUtility.ParseQueryString(storeUri.Query);
            bool journal = query.GetBoolean("journal", true);
            int indexCacheSize = query.GetInt32("index-cache", 50000);
            int blockCacheSize = query.GetInt32("block-cache", 512);
            int txCacheSize = query.GetInt32("tx-cache", 1024);
            bool flush = query.GetBoolean("flush", true);
            bool readOnly = query.GetBoolean("readonly");
            string statesKvPath = query.Get("states-dir") ?? StatesKvPathDefault;
            bool secure = query.GetBoolean("secure");
            var store = new DefaultStore(
                storeUri.LocalPath,
                journal,
                indexCacheSize,
                blockCacheSize,
                txCacheSize,
                flush,
                readOnly
            );
            var stateStore = new TrieStateStore(
                new DefaultKeyValueStore(Path.Combine(storeUri.LocalPath, statesKvPath)),
                secure
            );
            return (store, stateStore);
        }

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

        private UPath TxIdBlockHashIndexPath(in TxId txid, in BlockHash blockHash) =>
            TxPath(txid) / blockHash.ToString();

        private string TxNonceId(in Guid chainId)
        {
            return $"{TxNonceIdPrefix}{FormatChainId(chainId)}";
        }

        private LiteCollection<HashDoc> IndexCollection(in Guid chainId)
        {
            return _db.GetCollection<HashDoc>($"{IndexColPrefix}{FormatChainId(chainId)}");
        }

        private LiteCollection<BsonDocument> TxNonceCollection(Guid chainId)
        {
            return _db.GetCollection<BsonDocument>(TxNonceId(chainId));
        }

        private class HashDoc
        {
            public long Id { get; set; }

            public BlockHash Hash { get; set; }
        }
    }
}
