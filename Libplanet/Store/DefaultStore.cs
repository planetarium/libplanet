using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.IO;
using System.IO.Compression;
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
    public class DefaultStore : BaseStore, IDisposable
    {
        private const string IndexColPrefix = "index_";

        private const string StateRefIdPrefix = "stateref_";

        private const string TxNonceIdPrefix = "nonce_";

        private static readonly UPath TxRootPath = UPath.Root / "tx";
        private static readonly UPath BlockRootPath = UPath.Root / "block";
        private static readonly UPath StateRootPath = UPath.Root / "state";

        private readonly ILogger _logger;

        private readonly IFileSystem _root;
        private readonly SubFileSystem _txs;
        private readonly SubFileSystem _blocks;
        private readonly SubFileSystem _states;
        private readonly bool _compress;
        private readonly LruCache<TxId, object> _txCache;
        private readonly LruCache<HashDigest<SHA256>, BlockDigest> _blockCache;
        private readonly LruCache<HashDigest<SHA256>, IImmutableDictionary<string, IValue>>
            _statesCache;

        private readonly Dictionary<Guid, LruCache<string, Tuple<HashDigest<SHA256>, long>>>
            _lastStateRefCaches;

        private readonly MemoryStream _memoryStream;

        private readonly LiteDatabase _db;
        private readonly Codec _codec;

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
            _root.CreateDirectory(StateRootPath);
            _states = new SubFileSystem(_root, StateRootPath, owned: false);

            _compress = compress;
            _txCache = new LruCache<TxId, object>(capacity: txCacheSize);
            _blockCache = new LruCache<HashDigest<SHA256>, BlockDigest>(capacity: blockCacheSize);
            _statesCache = new LruCache<HashDigest<SHA256>, IImmutableDictionary<string, IValue>>(
                capacity: statesCacheSize
            );
            _lastStateRefCaches =
                new Dictionary<Guid, LruCache<string, Tuple<HashDigest<SHA256>, long>>>();

            _codec = new Codec();
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
            _db.DropCollection(StateRefId(chainId));
            _lastStateRefCaches.Remove(chainId);
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
        public override bool DeleteIndex(Guid chainId, HashDigest<SHA256> hash)
        {
            int deleted = IndexCollection(chainId).Delete(i => i.Hash.Equals(hash));
            return deleted > 0;
        }

        /// <inheritdoc/>
        public override void ForkBlockIndexes(
            Guid sourceChainId,
            Guid destinationChainId,
            HashDigest<SHA256> branchPoint)
        {
            LiteCollection<HashDoc> srcColl = IndexCollection(sourceChainId);
            LiteCollection<HashDoc> destColl = IndexCollection(destinationChainId);

            var genesisHash = IterateIndexes(sourceChainId, 0, 1).First();
            destColl.InsertBulk(srcColl.FindAll()
                .TakeWhile(i => !i.Hash.Equals(branchPoint)).Skip(1));
            if (!branchPoint.Equals(genesisHash))
            {
                AppendIndex(destinationChainId, branchPoint);
            }
        }

        /// <inheritdoc/>
        public override IEnumerable<string> ListStateKeys(Guid chainId)
        {
            string collId = StateRefId(chainId);
            return _db.GetCollection<StateRefDoc>(collId)
                .Find(Query.All(nameof(StateRefDoc.StateKey), Query.Ascending))
                .Select(doc => doc.StateKey)
                .ToImmutableHashSet();
        }

        /// <inheritdoc/>
        public override IImmutableDictionary<string, IImmutableList<HashDigest<SHA256>>>
            ListAllStateReferences(
                Guid chainId,
                long lowestIndex = 0,
                long highestIndex = long.MaxValue)
        {
            string collId = StateRefId(chainId);
            LiteCollection<StateRefDoc> coll = _db.GetCollection<StateRefDoc>(collId);

            Query query = Query.And(
                Query.All(nameof(StateRefDoc.BlockIndex)),
                Query.Between(nameof(StateRefDoc.BlockIndex), lowestIndex, highestIndex)
            );

            IEnumerable<StateRefDoc> stateRefs = coll.Find(query);
            return stateRefs
                .GroupBy(stateRef => stateRef.StateKey)
                .ToImmutableDictionary(
                    g => g.Key,
                    g => (IImmutableList<HashDigest<SHA256>>)g
                        .Select(r => r.BlockHash).ToImmutableList()
                );
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

            Transaction<T> tx = Transaction<T>.Deserialize(bytes);
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
        public override IImmutableDictionary<string, IValue> GetBlockStates(
            HashDigest<SHA256> blockHash
        )
        {
            if (_statesCache.TryGetValue(
                blockHash,
                out IImmutableDictionary<string, IValue> cached))
            {
                return cached;
            }

            UPath path = StatePath(blockHash);
            if (!_states.FileExists(path))
            {
                return null;
            }

            using (var buffer = new MemoryStream())
            using (Stream file = _states.OpenFile(path, System.IO.FileMode.Open, FileAccess.Read))
            {
                if (_compress)
                {
                    using (var deflate = new DeflateStream(file, CompressionMode.Decompress))
                    {
                        deflate.CopyTo(buffer);
                    }
                }
                else
                {
                    file.CopyTo(buffer);
                }

                buffer.Seek(0, SeekOrigin.Begin);
                IValue value = new Codec().Decode(buffer);
                if (!(value is Bencodex.Types.Dictionary dict))
                {
                    throw new DecodingException(
                        $"Expected {typeof(Bencodex.Types.Dictionary)} but " +
                        $"{value.GetType()}");
                }

                ImmutableDictionary<string, IValue> states = dict.ToImmutableDictionary(
                    kv => ((Text)kv.Key).Value,
                    kv => kv.Value
                );
                _statesCache.AddOrUpdate(blockHash, states);
                return states;
            }
        }

        /// <inheritdoc/>
        public override void SetBlockStates(
            HashDigest<SHA256> blockHash,
            IImmutableDictionary<string, IValue> states)
        {
            var serialized = new Bencodex.Types.Dictionary(
                states.ToImmutableDictionary(
                    kv => (IKey)(Text)kv.Key,
                    kv => kv.Value
                )
            );

            UPath path = StatePath(blockHash);
            UPath dirPath = path.GetDirectory();
            CreateDirectoryRecursively(_states, dirPath);

            var codec = new Codec();
            using (Stream file = _states.CreateFile(path))
            {
                if (_compress)
                {
                    using (var deflate = new DeflateStream(file, CompressionLevel.Fastest, true))
                    {
                        codec.Encode(serialized, deflate);
                    }
                }
                else
                {
                    codec.Encode(serialized, file);
                }
            }

            _statesCache.AddOrUpdate(blockHash, states);
        }

        public override Tuple<HashDigest<SHA256>, long> LookupStateReference<T>(
            Guid chainId,
            string key,
            Block<T> lookupUntil)
        {
            if (lookupUntil is null)
            {
                throw new ArgumentNullException(nameof(lookupUntil));
            }

            if (_lastStateRefCaches.TryGetValue(
                    chainId,
                    out LruCache<string, Tuple<HashDigest<SHA256>, long>> stateRefCache)
                && stateRefCache.TryGetValue(
                    key,
                    out Tuple<HashDigest<SHA256>, long> cache))
            {
                long cachedIndex = cache.Item2;

                if (cachedIndex <= lookupUntil.Index)
                {
                    return cache;
                }
            }

            Tuple<HashDigest<SHA256>, long> stateRef =
                IterateStateReferences(chainId, key, lookupUntil.Index, null, limit: 1)
                .FirstOrDefault();

            if (stateRef is null)
            {
                return null;
            }

            if (!_lastStateRefCaches.ContainsKey(chainId))
            {
                _lastStateRefCaches[chainId] =
                    new LruCache<string, Tuple<HashDigest<SHA256>, long>>();
            }

            stateRefCache = _lastStateRefCaches[chainId];

            if (!stateRefCache.TryGetValue(key, out cache) || cache.Item2 < stateRef.Item2)
            {
                stateRefCache[key] = new Tuple<HashDigest<SHA256>, long>(
                    stateRef.Item1,
                    stateRef.Item2);
            }

            return stateRef;
        }

        /// <inheritdoc/>
        public override IEnumerable<Tuple<HashDigest<SHA256>, long>> IterateStateReferences(
            Guid chainId,
            string key,
            long? highestIndex,
            long? lowestIndex,
            int? limit)
        {
            highestIndex = highestIndex ?? long.MaxValue;
            lowestIndex = lowestIndex ?? 0;

            if (highestIndex < lowestIndex)
            {
                var message =
                    $"highestIndex({highestIndex}) must be greater than or equal to " +
                    $"lowestIndex({lowestIndex})";
                throw new ArgumentException(
                    message,
                    nameof(highestIndex));
            }

            string collId = StateRefId(chainId);
            LiteCollection<StateRefDoc> coll = _db.GetCollection<StateRefDoc>(collId);
            IEnumerable<StateRefDoc> stateRefs = coll.Find(
                Query.And(
                    Query.All(nameof(StateRefDoc.BlockIndex), Query.Descending),
                    Query.EQ(nameof(StateRefDoc.StateKey), key),
                    Query.Between(nameof(StateRefDoc.BlockIndex), lowestIndex, highestIndex)
                ), limit: limit ?? int.MaxValue
            );
            return stateRefs
                .Select(doc => new Tuple<HashDigest<SHA256>, long>(doc.BlockHash, doc.BlockIndex));
        }

        /// <inheritdoc/>
        public override void StoreStateReference(
            Guid chainId,
            IImmutableSet<string> keys,
            HashDigest<SHA256> blockHash,
            long blockIndex)
        {
            string collId = StateRefId(chainId);
            LiteCollection<StateRefDoc> coll = _db.GetCollection<StateRefDoc>(collId);
            IEnumerable<StateRefDoc> stateRefDocs = keys
                .Select(key => new StateRefDoc
                {
                    StateKey = key,
                    BlockIndex = blockIndex,
                    BlockHash = blockHash,
                })
                .Where(doc => !coll.Exists(d => d.Id == doc.Id));
            coll.InsertBulk(stateRefDocs);
            coll.EnsureIndex(nameof(StateRefDoc.StateKey));
            coll.EnsureIndex(nameof(StateRefDoc.BlockIndex));

            if (!_lastStateRefCaches.ContainsKey(chainId))
            {
                _lastStateRefCaches[chainId] =
                    new LruCache<string, Tuple<HashDigest<SHA256>, long>>();
            }

            LruCache<string, Tuple<HashDigest<SHA256>, long>> stateRefCache =
                _lastStateRefCaches[chainId];

            foreach (string key in keys)
            {
                _logger.Debug($"Try to set cache {key}");
                if (!stateRefCache.TryGetValue(key, out Tuple<HashDigest<SHA256>, long> cache)
                    || cache.Item2 < blockIndex)
                {
                    stateRefCache[key] =
                        new Tuple<HashDigest<SHA256>, long>(blockHash, blockIndex);
                }
            }
        }

        /// <inheritdoc/>
        public override void ForkStateReferences<T>(
            Guid sourceChainId,
            Guid destinationChainId,
            Block<T> branchPoint)
        {
            string srcCollId = StateRefId(sourceChainId);
            string dstCollId = StateRefId(destinationChainId);
            LiteCollection<StateRefDoc> srcColl = _db.GetCollection<StateRefDoc>(srcCollId),
                                        dstColl = _db.GetCollection<StateRefDoc>(dstCollId);

            dstColl.InsertBulk(srcColl.Find(Query.LTE("BlockIndex", branchPoint.Index)));

            if (!dstColl.Exists(_ => true) && CountIndex(sourceChainId) < 1)
            {
                throw new ChainIdNotFoundException(
                    sourceChainId,
                    "The source chain to be forked does not exist."
                );
            }

            dstColl.EnsureIndex(nameof(StateRefDoc.StateKey));
            dstColl.EnsureIndex(nameof(StateRefDoc.BlockIndex));

            _lastStateRefCaches.Remove(destinationChainId);
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
            return doc is null ? 0 : (doc.TryGetValue("v", out BsonValue v) ? v.AsInt64 : 0);
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

        public void Dispose()
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

        private UPath StatePath(HashDigest<SHA256> blockHash)
        {
            return BlockPath(blockHash);
        }

        private string StateRefId(Guid chainId)
        {
            return $"{StateRefIdPrefix}{FormatChainId(chainId)}";
        }

        private string TxNonceId(Guid chainId)
        {
            return $"{TxNonceIdPrefix}{FormatChainId(chainId)}";
        }

        private LiteCollection<HashDoc> IndexCollection(Guid chainId)
        {
            return _db.GetCollection<HashDoc>($"{IndexColPrefix}{FormatChainId(chainId)}");
        }

        internal class StateRefDoc
        {
            public string StateKey { get; set; }

            public long BlockIndex { get; set; }

            public string BlockHashString { get; set; }

            [BsonId]
            public string Id => StateKey + BlockHashString;

            [BsonIgnore]
            public HashDigest<SHA256> BlockHash
            {
                get
                {
                    return HashDigest<SHA256>.FromString(BlockHashString);
                }

                set
                {
                    BlockHashString = value.ToString();
                }
            }
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
