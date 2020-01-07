using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Globalization;
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

        private readonly ILogger _logger;

        private readonly IFileSystem _root;
        private readonly SubFileSystem _txs;
        private readonly SubFileSystem _blocks;
        private readonly bool _compress;
        private readonly LruCache<TxId, object> _txCache;
        private readonly LruCache<HashDigest<SHA256>, RawBlock> _blockCache;
        private readonly LruCache<HashDigest<SHA256>, IImmutableDictionary<Address, IValue>>
            _statesCache;

        private readonly Dictionary<Guid, LruCache<Address, Tuple<HashDigest<SHA256>, long>>>
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

            _compress = compress;
            _txCache = new LruCache<TxId, object>(capacity: txCacheSize);
            _blockCache = new LruCache<HashDigest<SHA256>, RawBlock>(capacity: blockCacheSize);
            _statesCache = new LruCache<HashDigest<SHA256>, IImmutableDictionary<Address, IValue>>(
                capacity: statesCacheSize
            );
            _lastStateRefCaches =
                new Dictionary<Guid, LruCache<Address, Tuple<HashDigest<SHA256>, long>>>();

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
        public override IEnumerable<Address> ListAddresses(Guid chainId)
        {
            string collId = StateRefId(chainId);
            return _db.GetCollection<StateRefDoc>(collId)
                .Find(Query.All("Address", Query.Ascending))
                .Select(doc => doc.Address)
                .ToImmutableHashSet();
        }

        /// <inheritdoc/>
        public override IImmutableDictionary<Address, IImmutableList<HashDigest<SHA256>>>
            ListAllStateReferences(
                Guid chainId,
                long lowestIndex = 0,
                long highestIndex = long.MaxValue)
        {
            string collId = StateRefId(chainId);
            LiteCollection<StateRefDoc> coll = _db.GetCollection<StateRefDoc>(collId);

            Query query = Query.And(
                Query.All("BlockIndex"),
                Query.Between("BlockIndex", lowestIndex, highestIndex)
            );

            IEnumerable<StateRefDoc> stateRefs = coll.Find(query);
            return stateRefs
                .GroupBy(stateRef => stateRef.Address)
                .Select(g =>
                    new KeyValuePair<Address, IImmutableList<HashDigest<SHA256>>>(
                        g.Key,
                        g.Select(r => r.BlockHash).ToImmutableList()))
                .ToImmutableDictionary();
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

            Transaction<T> tx = Transaction<T>.FromBencodex(bytes);
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

            WriteContentAddressableFile(_txs, TxPath(tx.Id), tx.ToBencodex(true));
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

            WriteContentAddressableFile(_blocks, path, block.ToBencodex(true, false));
            _blockCache.AddOrUpdate(block.Hash, block.ToRawBlock(false, false));
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
        public override IImmutableDictionary<Address, IValue> GetBlockStates(
            HashDigest<SHA256> blockHash
        )
        {
            if (_statesCache.TryGetValue(
                blockHash,
                out IImmutableDictionary<Address, IValue> cached))
            {
                return cached;
            }

            LiteFileInfo file =
                _db.FileStorage.FindById(BlockStateFileId(blockHash));
            if (file is null)
            {
                return null;
            }

            using (var stream = new MemoryStream())
            {
                DownloadFile(file, stream);
                stream.Seek(0, SeekOrigin.Begin);

                var deserialized = (Bencodex.Types.Dictionary)_codec.Decode(stream);
                ImmutableDictionary<Address, IValue> states = deserialized.ToImmutableDictionary(
                    kv => new Address((Binary)kv.Key),
                    kv => kv.Value
                );
                _statesCache.AddOrUpdate(blockHash, states);
                return states;
            }
        }

        /// <inheritdoc/>
        public override void SetBlockStates(
            HashDigest<SHA256> blockHash,
            IImmutableDictionary<Address, IValue> states)
        {
            _statesCache.AddOrUpdate(blockHash, states);
            var serialized = new Bencodex.Types.Dictionary(
                states.Select(kv =>
                    new KeyValuePair<IKey, IValue>(
                        new Binary(kv.Key.ToByteArray()),
                        kv.Value
                    )
                )
            );
            using (var stream = new MemoryStream())
            {
                _codec.Encode(serialized, stream);
                stream.Seek(0, SeekOrigin.Begin);
                UploadFile(
                    BlockStateFileId(blockHash),
                    ByteUtil.Hex(blockHash.ToByteArray()),
                    stream
                );
            }
        }

        public override Tuple<HashDigest<SHA256>, long> LookupStateReference<T>(
            Guid chainId,
            Address address,
            Block<T> lookupUntil)
        {
            if (lookupUntil is null)
            {
                throw new ArgumentNullException(nameof(lookupUntil));
            }

            if (_lastStateRefCaches.TryGetValue(
                    chainId,
                    out LruCache<Address, Tuple<HashDigest<SHA256>, long>> stateRefCache)
                && stateRefCache.TryGetValue(
                    address,
                    out Tuple<HashDigest<SHA256>, long> cache))
            {
                long cachedIndex = cache.Item2;

                if (cachedIndex <= lookupUntil.Index)
                {
                    return cache;
                }
            }

            Tuple<HashDigest<SHA256>, long> stateRef =
                IterateStateReferences(chainId, address, lookupUntil.Index, null, limit: 1)
                .FirstOrDefault();

            if (stateRef is null)
            {
                return null;
            }

            if (!_lastStateRefCaches.ContainsKey(chainId))
            {
                _lastStateRefCaches[chainId] =
                    new LruCache<Address, Tuple<HashDigest<SHA256>, long>>();
            }

            stateRefCache = _lastStateRefCaches[chainId];

            if (!stateRefCache.TryGetValue(address, out cache) || cache.Item2 < stateRef.Item2)
            {
                stateRefCache[address] = new Tuple<HashDigest<SHA256>, long>(
                    stateRef.Item1,
                    stateRef.Item2);
            }

            return stateRef;
        }

        /// <inheritdoc/>
        public override IEnumerable<Tuple<HashDigest<SHA256>, long>> IterateStateReferences(
            Guid chainId,
            Address address,
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
            string addressString = address.ToHex().ToLower(CultureInfo.InvariantCulture);
            IEnumerable<StateRefDoc> stateRefs = coll.Find(
                Query.And(
                    Query.All("BlockIndex", Query.Descending),
                    Query.EQ("AddressString", addressString),
                    Query.Between("BlockIndex", lowestIndex, highestIndex)
                ), limit: limit ?? int.MaxValue
            );
            return stateRefs
                .Select(doc => new Tuple<HashDigest<SHA256>, long>(doc.BlockHash, doc.BlockIndex));
        }

        /// <inheritdoc/>
        public override void StoreStateReference(
            Guid chainId,
            IImmutableSet<Address> addresses,
            HashDigest<SHA256> blockHash,
            long blockIndex)
        {
            string collId = StateRefId(chainId);
            LiteCollection<StateRefDoc> coll = _db.GetCollection<StateRefDoc>(collId);
            IEnumerable<StateRefDoc> stateRefDocs = addresses
                .Select(addr => new StateRefDoc
                {
                    Address = addr,
                    BlockIndex = blockIndex,
                    BlockHash = blockHash,
                })
                .Where(doc => !coll.Exists(d => d.Id == doc.Id));
            coll.InsertBulk(stateRefDocs);
            coll.EnsureIndex("AddressString");
            coll.EnsureIndex("BlockIndex");

            if (!_lastStateRefCaches.ContainsKey(chainId))
            {
                _lastStateRefCaches[chainId] =
                    new LruCache<Address, Tuple<HashDigest<SHA256>, long>>();
            }

            LruCache<Address, Tuple<HashDigest<SHA256>, long>> stateRefCache =
                _lastStateRefCaches[chainId];

            foreach (Address address in addresses)
            {
                _logger.Debug($"Try to set cache {address}");
                if (!stateRefCache.TryGetValue(address, out Tuple<HashDigest<SHA256>, long> cache)
                    || cache.Item2 < blockIndex)
                {
                    stateRefCache[address] =
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

            Query srcQuery = Query.And(
                Query.GT("BlockIndex", 0),
                Query.LTE("BlockIndex", branchPoint.Index)
            );
            IEnumerable<StateRefDoc> srcStateRefs = srcColl.Find(srcQuery);
            dstColl.InsertBulk(srcStateRefs);

            if (!dstColl.Exists(_ => true) && CountIndex(sourceChainId) < 1)
            {
                throw new ChainIdNotFoundException(
                    sourceChainId,
                    "The source chain to be forked does not exist."
                );
            }

            dstColl.EnsureIndex("AddressString");
            dstColl.EnsureIndex("BlockIndex");
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

        internal override RawBlock? GetRawBlock(HashDigest<SHA256> blockHash)
        {
            if (_blockCache.TryGetValue(blockHash, out RawBlock cahcedBlock))
            {
                return cahcedBlock;
            }

            UPath path = BlockPath(blockHash);
            if (!_blocks.FileExists(path))
            {
                return null;
            }

            RawBlock rawBlock;
            try
            {
                rawBlock = new RawBlock(_blocks.ReadAllBytes(path));
            }
            catch (FileNotFoundException)
            {
                return null;
            }

            _blockCache.AddOrUpdate(blockHash, rawBlock);
            return rawBlock;
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

        private string BlockStateFileId(HashDigest<SHA256> blockHash)
        {
            return $"state/{blockHash}";
        }

        private string StateRefId(Guid chainId)
        {
            return $"{StateRefIdPrefix}{FormatChainId(chainId)}";
        }

        private string TxNonceId(Guid chainId)
        {
            return $"{TxNonceIdPrefix}{FormatChainId(chainId)}";
        }

        private void UploadFile(string fileId, string filename, Stream inStream)
        {
            if (_compress)
            {
                using (var buffer = new MemoryStream())
                {
                    using (var deflate = new DeflateStream(buffer, CompressionLevel.Fastest, true))
                    {
                        inStream.CopyTo(deflate);
                    }

                    buffer.Seek(0, SeekOrigin.Begin);
                    _db.FileStorage.Upload(fileId, filename, buffer);
                }
            }
            else
            {
                _db.FileStorage.Upload(fileId, filename, inStream);
            }
        }

        private void UploadFile(string fileId, string filename, byte[] bytes)
        {
            using (var stream = new MemoryStream(bytes))
            {
                stream.Seek(0, SeekOrigin.Begin);
                UploadFile(fileId, filename, stream);
            }
        }

        private void DownloadFile(LiteFileInfo file, Stream outStream)
        {
            using (var fileStream = file.OpenRead())
            {
                if (fileStream.Length > file.Length)
                {
                    fileStream.SetLength(file.Length);
                }

                if (_compress)
                {
                    using (var deflate = new DeflateStream(outStream, CompressionMode.Decompress))
                    {
                        deflate.CopyTo(outStream);
                    }
                }
                else
                {
                    fileStream.CopyTo(outStream);
                }
            }
        }

        private LiteCollection<HashDoc> IndexCollection(Guid chainId)
        {
            return _db.GetCollection<HashDoc>($"{IndexColPrefix}{FormatChainId(chainId)}");
        }

        internal class StateRefDoc
        {
            public string AddressString { get; set; }

            public long BlockIndex { get; set; }

            public string BlockHashString { get; set; }

            [BsonId]
            public string Id => AddressString + BlockHashString;

            [BsonIgnore]
            public Address Address
            {
                get
                {
                    return new Address(AddressString);
                }

                set
                {
                    AddressString = value.ToHex().ToLower(CultureInfo.InvariantCulture);
                }
            }

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
