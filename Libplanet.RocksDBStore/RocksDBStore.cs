using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
using Bencodex;
using Bencodex.Types;
using Libplanet.Blocks;
using Libplanet.Store;
using Libplanet.Tx;
using LruCacheNet;
using RocksDbSharp;
using Serilog;

namespace Libplanet.RocksDBStore
{
    /// <summary>
    /// The <a href="https://rocksdb.org/">RocksDB</a> <see cref="IStore"/> implementation.
    /// This stores data in the RocksDB.
    /// </summary>
    /// <seealso cref="IStore"/>
    public class RocksDBStore : BaseStore
    {
        private const string BlockDbName = "block";
        private const string TxDbName = "tx";
        private const string StateDbName = "state";
        private const string StagedTxDbName = "stagedtx";
        private const string ChainDbName = "chain";
        private const string StateRefDbName = "stateref";

        private static readonly byte[] IndexKeyPrefix = { (byte)'I' };
        private static readonly byte[] BlockKeyPrefix = { (byte)'B' };
        private static readonly byte[] BlockStateKeyPrefix = { (byte)'S' };
        private static readonly byte[] TxKeyPrefix = { (byte)'T' };
        private static readonly byte[] TxNonceKeyPrefix = { (byte)'N' };
        private static readonly byte[] StagedTxKeyPrefix = { (byte)'t' };
        private static readonly byte[] IndexCountKey = { (byte)'c' };
        private static readonly byte[] CanonicalChainIdIdKey = { (byte)'C' };
        private static readonly byte[] StateRefKeyPrefix = { (byte)'s' };

        private static readonly byte[] EmptyBytes = new byte[0];

        private readonly ILogger _logger;

        private readonly LruCache<TxId, object> _txCache;
        private readonly LruCache<HashDigest<SHA256>, BlockDigest> _blockCache;
        private readonly LruCache<HashDigest<SHA256>, IImmutableDictionary<string, IValue>>
            _statesCache;

        private readonly Dictionary<Guid, LruCache<string, Tuple<HashDigest<SHA256>, long>>>
            _lastStateRefCaches;

        private readonly DbOptions _options;
        private readonly string _path;

        private readonly RocksDb _blockDb;
        private readonly RocksDb _txDb;
        private readonly RocksDb _stateDb;
        private readonly RocksDb _stagedTxDb;
        private readonly RocksDb _chainDb;
        private readonly RocksDb _stateRefDb;

        /// <summary>
        /// Creates a new <seealso cref="RocksDBStore"/>.
        /// </summary>
        /// <param name="path">The path of the directory where the storage files will be saved.
        /// </param>
        /// <param name="blockCacheSize">The capacity of the block cache.</param>
        /// <param name="txCacheSize">The capacity of the transaction cache.</param>
        /// <param name="statesCacheSize">The capacity of the states cache.</param>
        public RocksDBStore(
            string path,
            int blockCacheSize = 512,
            int txCacheSize = 1024,
            int statesCacheSize = 10000
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

            _blockDb = OpenRocksDb(_options, BlockDbName);
            _txDb = OpenRocksDb(_options, TxDbName);
            _stateDb = OpenRocksDb(_options, StateDbName);
            _stagedTxDb = OpenRocksDb(_options, StagedTxDbName);

            // When opening a DB in a read-write mode, you need to specify all Column Families that
            // currently exist in a DB. https://github.com/facebook/rocksdb/wiki/Column-Families
            var chainDbColumnFamilies = GetColumnFamilies(_options, ChainDbName);
            _chainDb = OpenRocksDb(_options, ChainDbName, chainDbColumnFamilies);

            var stateRefDbColumnFamilies = GetColumnFamilies(_options, StateRefDbName);
            _stateRefDb = OpenRocksDb(_options, StateRefDbName, stateRefDbColumnFamilies);
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
            _lastStateRefCaches.Remove(chainId);

            var cfName = chainId.ToString();
            _chainDb.DropColumnFamily(cfName);
            _stateRefDb.DropColumnFamily(cfName);
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

            ColumnFamilyHandle cf = GetColumnFamily(_chainDb, chainId);

            byte[] indexBytes = RocksDBStoreBitConverter.GetBytes(index);

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

            byte[] indexBytes = RocksDBStoreBitConverter.GetBytes(index);

            byte[] key = IndexKeyPrefix.Concat(indexBytes).ToArray();
            ColumnFamilyHandle cf = GetColumnFamily(_chainDb, chainId);

            using var writeBatch = new WriteBatch();

            writeBatch.Put(key, hash.ToByteArray(), cf);
            writeBatch.Put(IndexCountKey, RocksDBStoreBitConverter.GetBytes(index + 1), cf);

            _chainDb.Write(writeBatch);

            return index;
        }

        /// <inheritdoc/>
        public override void ForkBlockIndexes(
            Guid sourceChainId,
            Guid destinationChainId,
            HashDigest<SHA256> branchPoint)
        {
            HashDigest<SHA256>? genesisHash = IterateIndexes(sourceChainId, 0, 1)
                .Cast<HashDigest<SHA256>?>()
                .FirstOrDefault();

            if (genesisHash is null || branchPoint.Equals(genesisHash))
            {
                return;
            }

            foreach (HashDigest<SHA256> hash in IterateIndexes(sourceChainId, 1, null))
            {
                AppendIndex(destinationChainId, hash);

                if (hash.Equals(branchPoint))
                {
                    break;
                }
            }
        }

        /// <inheritdoc/>
        public override IEnumerable<string> ListStateKeys(Guid chainId)
        {
            byte[] prefix = StateRefKeyPrefix;
            var prevStateKey = string.Empty;

            foreach (Iterator it in IterateDb(_stateRefDb, prefix, chainId))
            {
                byte[] key = it.Key();
                int stateKeyLength = key.Length - sizeof(long) - prefix.Length;
                byte[] stateKeyBytes = key.Skip(prefix.Length).Take(stateKeyLength).ToArray();
                string stateKey = RocksDBStoreBitConverter.GetString(stateKeyBytes);

                if (stateKey != prevStateKey)
                {
                    yield return stateKey;
                    prevStateKey = stateKey;
                }
            }
        }

        /// <inheritdoc/>
        public override IImmutableDictionary<string, IImmutableList<HashDigest<SHA256>>>
            ListAllStateReferences(
                Guid chainId,
                long lowestIndex = 0,
                long highestIndex = long.MaxValue)
        {
            byte[] prefix = StateRefKeyPrefix;

            var stateRefs = new List<StateRef>();

            foreach (Iterator it in IterateDb(_stateRefDb, prefix, chainId))
            {
                byte[] key = it.Key();
                int stateKeyLength = key.Length - sizeof(long) - prefix.Length;
                byte[] stateKeyBytes = key.Skip(prefix.Length).Take(stateKeyLength).ToArray();
                string stateKey = RocksDBStoreBitConverter.GetString(stateKeyBytes);

                byte[] indexBytes = key.Skip(prefix.Length + stateKeyLength).ToArray();
                long index = RocksDBStoreBitConverter.ToInt64(indexBytes);

                if (index < lowestIndex || index > highestIndex)
                {
                    continue;
                }

                var hash = new HashDigest<SHA256>(it.Value());
                var stateRef = new StateRef
                {
                    StateKey = stateKey,
                    BlockHash = hash,
                    BlockIndex = index,
                };

                stateRefs.Add(stateRef);
            }

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

            foreach (Iterator it in IterateDb(_txDb, prefix) )
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

            byte[] bytes = _stateDb.Get(key);

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

            _stateDb.Put(key, value);
            _statesCache.AddOrUpdate(blockHash, states);
        }

        /// <inheritdoc/>
        public override void PruneBlockStates<T>(
            Guid chainId,
            Block<T> until)
        {
            string[] keys = ListStateKeys(chainId).ToArray();
            long untilIndex = until.Index;
            foreach (var key in keys)
            {
                Tuple<HashDigest<SHA256>, long>[] stateRefs =
                    IterateStateReferences(chainId, key, untilIndex, null, null)
                        .OrderByDescending(tuple => tuple.Item2)
                        .ToArray();
                var dict = new Dictionary<HashDigest<SHA256>, List<string>>();
                foreach ((HashDigest<SHA256> blockHash, long index) in stateRefs.Skip(1))
                {
                    if (!dict.ContainsKey(blockHash))
                    {
                        dict.Add(blockHash, new List<string>());
                    }

                    dict[blockHash].Add(key);
                }

                foreach (var kv in dict)
                {
                    DeleteBlockStates(kv.Key, kv.Value);
                }
            }
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
            highestIndex ??= long.MaxValue;
            lowestIndex ??= 0;
            limit ??= int.MaxValue;

            if (highestIndex < lowestIndex)
            {
                var message =
                    $"highestIndex({highestIndex}) must be greater than or equal to " +
                    $"lowestIndex({lowestIndex})";
                throw new ArgumentException(
                    message,
                    nameof(highestIndex));
            }

            byte[] keyBytes = RocksDBStoreBitConverter.GetBytes(key);
            byte[] prefix = StateRefKeyPrefix.Concat(keyBytes).ToArray();

            ColumnFamilyHandle cf = GetColumnFamily(_stateRefDb, chainId);
            Iterator it = _stateRefDb.NewIterator(cf);

            return IterateStateReferences(
                prefix, it, highestIndex.Value, lowestIndex.Value, limit.Value);
        }

        /// <inheritdoc/>
        public override void StoreStateReference(
            Guid chainId,
            IImmutableSet<string> keys,
            HashDigest<SHA256> blockHash,
            long blockIndex)
        {
            ColumnFamilyHandle cf = GetColumnFamily(_stateRefDb, chainId);
            foreach (string key in keys)
            {
                byte[] keyBytes = StateRefKey(key, blockIndex);
                _stateRefDb.Put(keyBytes, blockHash.ToByteArray(), cf);
            }

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
            byte[] prefix = StateRefKeyPrefix;
            ColumnFamilyHandle destCf = GetColumnFamily(_stateRefDb, destinationChainId);

            foreach (Iterator it in IterateDb(_stateRefDb, prefix, sourceChainId))
            {
                byte[] key = it.Key();
                byte[] indexBytes = key.Skip(key.Length - sizeof(long)).ToArray();
                long index = RocksDBStoreBitConverter.ToInt64(indexBytes);

                if (index > branchPoint.Index)
                {
                    continue;
                }

                _stateRefDb.Put(key, it.Value(), destCf);
            }

            Iterator destIt = _stateRefDb.NewIterator(destCf);

            destIt.Seek(prefix);

            if (!(destIt.Valid() && destIt.Key().StartsWith(prefix))
                && CountIndex(sourceChainId) < 1)
            {
                throw new ChainIdNotFoundException(
                    sourceChainId,
                    "The source chain to be forked does not exist.");
            }

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

        public override void Dispose()
        {
            _chainDb?.Dispose();
            _stateRefDb?.Dispose();
            _txDb?.Dispose();
            _stateDb?.Dispose();
            _blockDb?.Dispose();
            _stagedTxDb?.Dispose();
        }

        /// <summary>
        /// Deletes the states with specified keys (i.e., <paramref name="stateKeys"/>)
        /// updated by actions in the specified block (i.e., <paramref name="blockHash"/>).
        /// </summary>
        /// <param name="blockHash"><see cref="Block{T}.Hash"/> to delete states.
        /// </param>
        /// <param name="stateKeys">The state keys to delete which were updated by actions
        /// in the specified block (i.e., <paramref name="blockHash"/>).
        /// </param>
        /// <seealso cref="GetBlockStates"/>
        private void DeleteBlockStates(
            HashDigest<SHA256> blockHash,
            IEnumerable<string> stateKeys)
        {
            IImmutableDictionary<string, IValue> dict = GetBlockStates(blockHash);
            if (dict is null)
            {
                return;
            }

            dict = dict.RemoveRange(stateKeys);
            if (dict.Any())
            {
                SetBlockStates(blockHash, dict);
            }
            else
            {
                _stateDb.Remove(BlockStateKey(blockHash));
                _statesCache.Remove(blockHash);
            }
        }

        private IEnumerable<Tuple<HashDigest<SHA256>, long>> IterateStateReferences(
            byte[] prefix,
            Iterator it,
            long highestIndex,
            long lowestIndex,
            int limit)
        {
            // FIXME: We need to change the state reference to be ordered by reverse byte-wise
            // and use the Seek function.
            it.SeekToLast();
            while (it.Valid() && !it.Key().StartsWith(prefix))
            {
                it.Prev();
            }

            for (; it.Valid() && it.Key().StartsWith(prefix); it.Prev())
            {
                byte[] indexBytes = it.Key().Skip(prefix.Length).ToArray();
                long index = RocksDBStoreBitConverter.ToInt64(indexBytes);

                if (index > highestIndex)
                {
                    continue;
                }

                if (index < lowestIndex || limit <= 0)
                {
                    break;
                }

                byte[] hashBytes = it.Value();
                var hash = new HashDigest<SHA256>(hashBytes);

                yield return new Tuple<HashDigest<SHA256>, long>(hash, index);
                limit--;
            }
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

        private byte[] StagedTxKey(TxId txId)
        {
            return StagedTxKeyPrefix.Concat(txId.ToByteArray()).ToArray();
        }

        private byte[] StateRefKey(string stateKey, long blockIndex)
        {
            byte[] stateKeyBytes = RocksDBStoreBitConverter.GetBytes(stateKey);
            byte[] blockIndexBytes = RocksDBStoreBitConverter.GetBytes(blockIndex);

            return StateRefKeyPrefix
                .Concat(stateKeyBytes)
                .Concat(blockIndexBytes)
                .ToArray();
        }

        private IEnumerable<Iterator> IterateDb(RocksDb db, byte[] prefix, Guid? chainId = null)
        {
            ColumnFamilyHandle cf = GetColumnFamily(db, chainId);
            Iterator it = db.NewIterator(cf);
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

        private RocksDb OpenRocksDb(
            DbOptions options, string dbName, ColumnFamilies columnFamilies = null)
        {
            var dbPath = Path.Combine(_path, dbName);

            return columnFamilies is null
                ? RocksDb.Open(options, dbPath)
                : RocksDb.Open(options, dbPath, columnFamilies);
        }

        private class StateRef
        {
            public string StateKey { get; set; }

            public long BlockIndex { get; set; }

            public HashDigest<SHA256> BlockHash { get; set; }
        }
    }
}
