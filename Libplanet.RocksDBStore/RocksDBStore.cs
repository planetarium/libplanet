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
using Libplanet.Store;
using Libplanet.Tx;
using LiteDB;
using LruCacheNet;
using RocksDbSharp;
using Serilog;
using FileMode = LiteDB.FileMode;

namespace Libplanet.RocksDBStore
{
    /// <summary>
    /// The <a href="https://rocksdb.org/">RocksDB</a> <see cref="IStore"/> implementation.
    /// This stores data in the RocksDB.  It also uses <a href="https://www.litedb.org/">LiteDB</a>
    /// for some complex indices.
    /// </summary>
    /// <seealso cref="IStore"/>
    public class RocksDBStore : BaseStore, IDisposable
    {
        private const string IndexColPrefix = "index_";

        private const string StateRefIdPrefix = "stateref_";

        private const string TxNonceIdPrefix = "nonce_";

        private static readonly byte[] BlockKeyPrefix = { (byte)'B' };

        private static readonly byte[] BlockStateKeyPrefix = { (byte)'S' };

        private static readonly byte[] TxKeyPrefix = { (byte)'T' };

        private readonly ILogger _logger;

        private readonly LruCache<TxId, object> _txCache;
        private readonly LruCache<HashDigest<SHA256>, BlockDigest> _blockCache;
        private readonly LruCache<HashDigest<SHA256>, IImmutableDictionary<string, IValue>>
            _statesCache;

        private readonly Dictionary<Guid, LruCache<string, Tuple<HashDigest<SHA256>, long>>>
            _lastStateRefCaches;

        private readonly LiteDatabase _liteDb;
        private readonly RocksDb _rocksDb;

        /// <summary>
        /// Creates a new <seealso cref="RocksDBStore"/>.
        /// </summary>
        /// <param name="path">The path of the directory where the storage files will be saved.
        /// </param>
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
        public RocksDBStore(
            string path,
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
                throw new ArgumentNullException(nameof(path));
            }

            path = Path.GetFullPath(path);

            if (!Directory.Exists(path))
            {
                Directory.CreateDirectory(path);
            }

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

            _liteDb = new LiteDatabase(connectionString);

            lock (_liteDb.Mapper)
            {
                _liteDb.Mapper.RegisterType(
                    hash => hash.ToByteArray(),
                    b => new HashDigest<SHA256>(b));
                _liteDb.Mapper.RegisterType(
                    txid => txid.ToByteArray(),
                    b => new TxId(b));
                _liteDb.Mapper.RegisterType(
                    address => address.ToByteArray(),
                    b => new Address(b.AsBinary));
            }

            _txCache = new LruCache<TxId, object>(capacity: txCacheSize);
            _blockCache = new LruCache<HashDigest<SHA256>, BlockDigest>(capacity: blockCacheSize);
            _statesCache = new LruCache<HashDigest<SHA256>, IImmutableDictionary<string, IValue>>(
                capacity: statesCacheSize
            );
            _lastStateRefCaches =
                new Dictionary<Guid, LruCache<string, Tuple<HashDigest<SHA256>, long>>>();

            var options = new DbOptions()
                .SetCreateIfMissing();

            _rocksDb = RocksDb.Open(options, path);
        }

        private LiteCollection<StagedTxIdDoc> StagedTxIds =>
            _liteDb.GetCollection<StagedTxIdDoc>("staged_txids");

        /// <inheritdoc/>
        public override IEnumerable<Guid> ListChainIds()
        {
            return _liteDb.GetCollectionNames()
                .Where(name => name.StartsWith(IndexColPrefix))
                .Select(name => ParseChainId(name.Substring(IndexColPrefix.Length)));
        }

        /// <inheritdoc/>
        public override void DeleteChainId(Guid chainId)
        {
            _liteDb.DropCollection(IndexCollection(chainId).Name);
            _liteDb.DropCollection(TxNonceId(chainId));
            _liteDb.DropCollection(StateRefId(chainId));
            _lastStateRefCaches.Remove(chainId);
        }

        /// <inheritdoc />
        public override Guid? GetCanonicalChainId()
        {
            LiteCollection<BsonDocument> collection = _liteDb.GetCollection<BsonDocument>("canon");
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
            LiteCollection<BsonDocument> collection = _liteDb.GetCollection<BsonDocument>("canon");
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

            HashDigest<SHA256> genesisHash = IterateIndexes(sourceChainId, 0, 1).First();
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
            return _liteDb.GetCollection<StateRefDoc>(collId)
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
            LiteCollection<StateRefDoc> coll = _liteDb.GetCollection<StateRefDoc>(collId);

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
            Iterator it = _rocksDb.NewIterator();

            for (it.Seek(TxKeyPrefix); it.Valid(); it.Next())
            {
                byte[] key = it.Key();
                byte[] txIdBytes = key.Skip(TxKeyPrefix.Length).ToArray();

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
            byte[] bytes = _rocksDb.Get(key);

            if (bytes is null)
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

            byte[] key = TxKey(tx.Id);

            if (!(_rocksDb.Get(key) is null))
            {
                return;
            }

            _rocksDb.Put(key, tx.Serialize(true));
            _txCache.AddOrUpdate(tx.Id, tx);
        }

        /// <inheritdoc/>
        public override bool DeleteTransaction(TxId txid)
        {
            byte[] key = TxKey(txid);

            if (_rocksDb.Get(key) is null)
            {
                return false;
            }

            _txCache.Remove(txid);
            _rocksDb.Remove(key);

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

            return !(_rocksDb.Get(key) is null);
        }

        /// <inheritdoc/>
        public override IEnumerable<HashDigest<SHA256>> IterateBlockHashes()
        {
            Iterator it = _rocksDb.NewIterator();

            for (it.Seek(BlockKeyPrefix); it.Valid(); it.Next())
            {
                byte[] key = it.Key();
                byte[] hashBytes = key.Skip(BlockKeyPrefix.Length).ToArray();

                var blockHash = new HashDigest<SHA256>(hashBytes);
                yield return blockHash;
            }
        }

        /// <inheritdoc/>
        public override BlockDigest? GetBlockDigest(HashDigest<SHA256> blockHash)
        {
            if (_blockCache.TryGetValue(blockHash, out BlockDigest cachedDigest))
            {
                return cachedDigest;
            }

            byte[] key = BlockKey(blockHash);
            byte[] bytes = _rocksDb.Get(key);

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

            if (!(_rocksDb.Get(key) is null))
            {
                return;
            }

            foreach (Transaction<T> tx in block.Transactions)
            {
                PutTransaction(tx);
            }

            byte[] value = block.ToBlockDigest().Serialize();
            _rocksDb.Put(key, value);
            _blockCache.AddOrUpdate(block.Hash, block.ToBlockDigest());
        }

        /// <inheritdoc/>
        public override bool DeleteBlock(HashDigest<SHA256> blockHash)
        {
            byte[] key = BlockKey(blockHash);

            if (_rocksDb.Get(key) is null)
            {
                return false;
            }

            _blockCache.Remove(blockHash);
            _rocksDb.Remove(key);

            return true;
        }

        /// <inheritdoc/>
        public override bool ContainsBlock(HashDigest<SHA256> blockHash)
        {
            if (_blockCache.ContainsKey(blockHash))
            {
                return true;
            }

            byte[] key = BlockKey(blockHash);

            return !(_rocksDb.Get(key) is null);
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

            byte[] key = BlockStateKey(blockHash);

            byte[] bytes = _rocksDb.Get(key);

            if (bytes is null)
            {
                return null;
            }

            IValue value = new Codec().Decode(bytes);
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

            byte[] key = BlockStateKey(blockHash);

            var codec = new Codec();
            byte[] value = codec.Encode(serialized);

            _rocksDb.Put(key, value);
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
            LiteCollection<StateRefDoc> coll = _liteDb.GetCollection<StateRefDoc>(collId);
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
            LiteCollection<StateRefDoc> coll = _liteDb.GetCollection<StateRefDoc>(collId);
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
            LiteCollection<StateRefDoc> srcColl = _liteDb.GetCollection<StateRefDoc>(srcCollId),
                                        dstColl = _liteDb.GetCollection<StateRefDoc>(dstCollId);

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
            string collId = TxNonceId(chainId);
            LiteCollection<BsonDocument> collection = _liteDb.GetCollection<BsonDocument>(collId);
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
            string collId = TxNonceId(chainId);
            LiteCollection<BsonDocument> collection = _liteDb.GetCollection<BsonDocument>(collId);
            var docId = new BsonValue(address.ToByteArray());
            BsonDocument doc = collection.FindById(docId);
            return doc is null ? 0 : (doc.TryGetValue("v", out BsonValue v) ? v.AsInt64 : 0);
        }

        /// <inheritdoc/>
        public override void IncreaseTxNonce(Guid chainId, Address signer, long delta = 1)
        {
            long nextNonce = GetTxNonce(chainId, signer) + delta;
            string collId = TxNonceId(chainId);
            LiteCollection<BsonDocument> collection = _liteDb.GetCollection<BsonDocument>(collId);
            var docId = new BsonValue(signer.ToByteArray());
            collection.Upsert(docId, new BsonDocument() { ["v"] = new BsonValue(nextNonce) });
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

        public void Dispose()
        {
            _liteDb?.Dispose();
            _rocksDb?.Dispose();
        }

        internal static Guid ParseChainId(string chainIdString) =>
            new Guid(ByteUtil.ParseHex(chainIdString));

        internal static string FormatChainId(Guid chainId) =>
            ByteUtil.Hex(chainId.ToByteArray());

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
            return _liteDb.GetCollection<HashDoc>($"{IndexColPrefix}{FormatChainId(chainId)}");
        }

        private byte[] BlockKey(HashDigest<SHA256> blockHash)
        {
            return BlockKeyPrefix.Concat(blockHash.ToByteArray()).ToArray();
        }

        private byte[] BlockStateKey(HashDigest<SHA256> blockHash)
        {
            return BlockStateKeyPrefix.Concat(blockHash.ToByteArray()).ToArray();
        }

        private byte[] TxKey(TxId txId)
        {
            return TxKeyPrefix.Concat(txId.ToByteArray()).ToArray();
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
