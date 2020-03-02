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
    public class RocksDBStore : BaseStore
    {
        private const string StateRefIdPrefix = "stateref_";

        private const string BlockDbName = "blockdb";

        private const string ChainDbName = "chaindb";

        private static readonly byte[] IndexKeyPrefix = { (byte)'I' };

        private static readonly byte[] BlockKeyPrefix = { (byte)'B' };

        private static readonly byte[] BlockStateKeyPrefix = { (byte)'S' };

        private static readonly byte[] TxKeyPrefix = { (byte)'T' };

        private static readonly byte[] TxNonceKeyPrefix = { (byte)'N' };

        private static readonly byte[] IndexCountKey = { (byte)'c' };

        private static readonly byte[] CanonicalChainIdIdKey = { (byte)'C' };

        private readonly ILogger _logger;

        private readonly LruCache<TxId, object> _txCache;
        private readonly LruCache<HashDigest<SHA256>, BlockDigest> _blockCache;
        private readonly LruCache<HashDigest<SHA256>, IImmutableDictionary<string, IValue>>
            _statesCache;

        private readonly Dictionary<Guid, LruCache<string, Tuple<HashDigest<SHA256>, long>>>
            _lastStateRefCaches;

        private readonly LiteDatabase _liteDb;
        private readonly DbOptions _options;
        private readonly string _path;
        private readonly RocksDb _blockDb;
        private readonly RocksDb _chainDb;

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

            _path = path;
            _options = new DbOptions()
                .SetCreateIfMissing();

            _blockDb = RocksDb.Open(_options, Path.Combine(path, BlockDbName));
            _chainDb = RocksDb.Open(
                _options, Path.Combine(path, ChainDbName), new ColumnFamilies());
        }

        private LiteCollection<StagedTxIdDoc> StagedTxIds =>
            _liteDb.GetCollection<StagedTxIdDoc>("staged_txids");

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
            _liteDb.DropCollection(StateRefId(chainId));
            _lastStateRefCaches.Remove(chainId);

            var cfName = chainId.ToString();
            _chainDb.DropColumnFamily(cfName);
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
            ColumnFamilyHandle cf = GetColumnFamily(chainId);
            byte[] bytes = _chainDb.Get(IndexCountKey, cf);
            return bytes is null
                ? 0
                : BitConverter.ToInt64(bytes, 0);
        }

        /// <inheritdoc/>
        public override IEnumerable<HashDigest<SHA256>> IterateIndexes(
            Guid chainId,
            int offset,
            int? limit)
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
                yield return new HashDigest<SHA256>(value);

                count += 1;
            }
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

            ColumnFamilyHandle cf = GetColumnFamily(chainId);
            byte[] indexBytes = BitConverter.GetBytes(index);

            // Use Big-endian to order index lexicographically.
            if (BitConverter.IsLittleEndian)
            {
                Array.Reverse(indexBytes);
            }

            byte[] key = IndexKeyPrefix.Concat(indexBytes).ToArray();
            byte[] bytes = _chainDb.Get(key, cf);
            return bytes is null
                ? (HashDigest<SHA256>?)null
                : new HashDigest<SHA256>(bytes);
        }

        /// <inheritdoc/>
        public override long AppendIndex(Guid chainId, HashDigest<SHA256> hash)
        {
            long index = CountIndex(chainId);
            byte[] indexBytes = BitConverter.GetBytes(index);

            // Use Big-endian to order index lexicographically.
            if (BitConverter.IsLittleEndian)
            {
                Array.Reverse(indexBytes);
            }

            byte[] key = IndexKeyPrefix.Concat(indexBytes).ToArray();
            ColumnFamilyHandle cf = GetColumnFamily(chainId);

            using var writeBatch = new WriteBatch();

            writeBatch.Put(key, hash.ToByteArray(), cf);
            writeBatch.Put(IndexCountKey, BitConverter.GetBytes(index + 1), cf);

            _chainDb.Write(writeBatch);

            return index;
        }

        /// <inheritdoc/>
        public override void ForkBlockIndexes(
            Guid sourceChainId,
            Guid destinationChainId,
            HashDigest<SHA256> branchPoint)
        {
            foreach (HashDigest<SHA256> hash in IterateIndexes(sourceChainId, 0, null))
            {
                if (hash.Equals(branchPoint))
                {
                    break;
                }

                AppendIndex(destinationChainId, hash);
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
            byte[] prefix = TxKeyPrefix;

            foreach (Iterator it in IterateDb(_blockDb, prefix) )
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
            byte[] bytes = _blockDb.Get(key);

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

            if (!(_blockDb.Get(key) is null))
            {
                return;
            }

            _blockDb.Put(key, tx.Serialize(true));
            _txCache.AddOrUpdate(tx.Id, tx);
        }

        /// <inheritdoc/>
        public override bool DeleteTransaction(TxId txid)
        {
            byte[] key = TxKey(txid);

            if (_blockDb.Get(key) is null)
            {
                return false;
            }

            _txCache.Remove(txid);
            _blockDb.Remove(key);

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

            return !(_blockDb.Get(key) is null);
        }

        /// <inheritdoc/>
        public override IEnumerable<HashDigest<SHA256>> IterateBlockHashes()
        {
            byte[] prefix = BlockKeyPrefix;

            foreach (Iterator it in IterateDb(_blockDb, prefix))
            {
                byte[] key = it.Key();
                byte[] hashBytes = key.Skip(prefix.Length).ToArray();

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
        public override bool DeleteBlock(HashDigest<SHA256> blockHash)
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

        /// <inheritdoc/>
        public override bool ContainsBlock(HashDigest<SHA256> blockHash)
        {
            if (_blockCache.ContainsKey(blockHash))
            {
                return true;
            }

            byte[] key = BlockKey(blockHash);

            return !(_blockDb.Get(key) is null);
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

            byte[] bytes = _blockDb.Get(key);

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

            _blockDb.Put(key, value);
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
            byte[] prefix = TxNonceKeyPrefix;

            foreach (Iterator it in IterateDb(_chainDb, prefix, chainId))
            {
                byte[] addressBytes = it.Key()
                    .Skip(prefix.Length)
                    .ToArray();
                var address = new Address(addressBytes);
                long nonce = BitConverter.ToInt64(it.Value(), 0);
                yield return new KeyValuePair<Address, long>(address, nonce);
            }
        }

        /// <inheritdoc/>
        public override long GetTxNonce(Guid chainId, Address address)
        {
            ColumnFamilyHandle cf = GetColumnFamily(chainId);
            byte[] key = TxNonceKey(address);
            byte[] bytes = _chainDb.Get(key, cf);

            return bytes is null
                ? 0
                : BitConverter.ToInt64(bytes, 0);
        }

        /// <inheritdoc/>
        public override void IncreaseTxNonce(Guid chainId, Address signer, long delta = 1)
        {
            ColumnFamilyHandle cf = GetColumnFamily(chainId);
            long nextNonce = GetTxNonce(chainId, signer) + delta;

            byte[] key = TxNonceKey(signer);
            byte[] bytes = BitConverter.GetBytes(nextNonce);

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

        public override void Dispose()
        {
            _liteDb?.Dispose();
            _chainDb?.Dispose();
            _blockDb?.Dispose();
        }

        internal static string FormatChainId(Guid chainId) =>
            ByteUtil.Hex(chainId.ToByteArray());

        private string StateRefId(Guid chainId)
        {
            return $"{StateRefIdPrefix}{FormatChainId(chainId)}";
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

        private byte[] TxNonceKey(Address address)
        {
            return TxNonceKeyPrefix
                .Concat(address.ToByteArray())
                .ToArray();
        }

        private IEnumerable<Iterator> IterateDb(RocksDb db, byte[] prefix, Guid? chainId = null)
        {
            ColumnFamilyHandle cf = GetColumnFamily(chainId);
            Iterator it = db.NewIterator(cf);
            for (it.Seek(prefix); it.Valid() && it.Key().StartsWith(prefix); it.Next())
            {
                yield return it;
            }
        }

        private ColumnFamilyHandle GetColumnFamily(Guid? chainId = null)
        {
            if (chainId is null)
            {
                return null;
            }

            var cfName = chainId.ToString();

            ColumnFamilyHandle cf;
            try
            {
                cf = _chainDb.GetColumnFamily(cfName);
            }
            catch (KeyNotFoundException)
            {
                cf = _chainDb.CreateColumnFamily(new ColumnFamilyOptions(), cfName);
            }

            return cf;
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

        private class StagedTxIdDoc
        {
            public long Id { get; set; }

            public TxId TxId { get; set; }
        }
    }
}
