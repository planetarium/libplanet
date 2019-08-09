using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.IO;
using System.Linq;
using System.Runtime.InteropServices;
using System.Runtime.Serialization.Formatters.Binary;
using System.Security.Cryptography;
using System.Text;
using System.Threading;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Serialization;
using Libplanet.Tx;
using LiteDB;
using Serilog;

namespace Libplanet.Store
{
    /// <summary>
    /// <see cref="IStore"/> implementation using <a href="https://www.litedb.org/">LiteDB</a>.
    /// </summary>
    /// <seealso cref="IStore"/>
    public class LiteDBStore : BaseStore, IDisposable
    {
        private const string TxIdPrefix = "tx/";

        private const string IndexColPrefix = "index_";

        private const string StateRefIdPrefix = "stateref_";

        private const string NonceIdPrefix = "nonce_";

        private static HashAlgorithm namespaceHasher = MD5.Create();

        private readonly ILogger _logger;

        private readonly LiteDatabase _db;

        private readonly ReaderWriterLockSlim _txLock;

        /// <summary>
        /// Creates a new <seealso cref="LiteDBStore"/>.
        /// </summary>
        /// <param name="path">The path where the storage file will be saved.</param>
        /// <param name="journal">
        /// Enables or disables double write check to ensure durability.
        /// </param>
        /// <param name="cacheSize">Max number of pages in the cache.</param>
        /// <param name="flush">Writes data direct to disk avoiding OS cache.  Turned on by default.
        /// </param>
        /// <param name="readOnly">Opens database readonly mode. Turned off by default.
        /// </param>
        public LiteDBStore(
            string path,
            bool journal = true,
            int cacheSize = 50000,
            bool flush = true,
            bool readOnly = false
        )
        {
            if (path is null)
            {
                throw new ArgumentNullException(nameof(path));
            }

            _logger = Log.ForContext<LiteDBStore>();

            var connectionString = new ConnectionString
            {
                Filename = path,
                Journal = journal,
                CacheSize = cacheSize,
                Flush = flush,
            };

            if (readOnly)
            {
                connectionString.Mode = LiteDB.FileMode.ReadOnly;
            }
            else if (RuntimeInformation.IsOSPlatform(OSPlatform.OSX) &&
                Type.GetType("Mono.Runtime") is null)
            {
                // macOS + .NETCore doesn't support shared lock.
                connectionString.Mode = LiteDB.FileMode.Exclusive;
            }

            _db = new LiteDatabase(connectionString);
            _db.Mapper.RegisterType(
                hash => hash.ToByteArray(),
                b => new HashDigest<SHA256>(b));
            _db.Mapper.RegisterType(
                txid => txid.ToByteArray(),
                b => new TxId(b));
            _db.Mapper.RegisterType(
                address => address.ToByteArray(),
                b => new Address(b.AsBinary));

            _txLock = new ReaderWriterLockSlim(LockRecursionPolicy.NoRecursion);
        }

        private LiteCollection<StagedTxIdDoc> StagedTxIds =>
            _db.GetCollection<StagedTxIdDoc>("staged_txids");

        /// <inheritdoc/>
        public override IEnumerable<string> ListNamespaces()
        {
            return _db.GetCollectionNames()
                .Where(name => name.StartsWith(IndexColPrefix))
                .Select(name => name.Substring(IndexColPrefix.Length));
        }

        /// <inheritdoc/>
        public override void DeleteNamespace(string @namespace)
        {
            _db.DropCollection(IndexCollection(@namespace).Name);
            _db.DropCollection($"{NonceIdPrefix}{@namespace}");
            _db.DropCollection(StateRefId(@namespace));
        }

        /// <inheritdoc />
        public override string GetCanonicalNamespace()
        {
            LiteCollection<BsonDocument> collection = _db.GetCollection<BsonDocument>("canon");
            var docId = new BsonValue("canon");
            BsonDocument doc = collection.FindById(docId);
            return doc is null
                ? null
                : (doc.TryGetValue("ns", out BsonValue ns) ? ns.AsString : null);
        }

        /// <inheritdoc />
        public override void SetCanonicalNamespace(string @namespace)
        {
            if (@namespace is null)
            {
                throw new ArgumentNullException(nameof(@namespace));
            }

            LiteCollection<BsonDocument> collection = _db.GetCollection<BsonDocument>("canon");
            var docId = new BsonValue("canon");
            collection.Upsert(docId, new BsonDocument() { ["ns"] = new BsonValue(@namespace) });
        }

        /// <inheritdoc/>
        public override long CountIndex(string @namespace)
        {
            return IndexCollection(@namespace).Count();
        }

        /// <inheritdoc/>
        public override IEnumerable<HashDigest<SHA256>> IterateIndex(
            string @namespace,
            int offset,
            int? limit)
        {
            return IndexCollection(@namespace)
                .Find(Query.All(), offset, limit ?? int.MaxValue)
                .Select(i => i.Hash);
        }

        /// <inheritdoc/>
        public override HashDigest<SHA256>? IndexBlockHash(string @namespace, long index)
        {
            if (index < 0)
            {
                index += CountIndex(@namespace);

                if (index < 0)
                {
                    return null;
                }
            }

            return IndexCollection(@namespace).FindById(index + 1)?.Hash;
        }

        /// <inheritdoc/>
        public override long AppendIndex(string @namespace, HashDigest<SHA256> hash)
        {
            return IndexCollection(@namespace)
                       .Insert(new HashDoc { Hash = hash }) - 1;
        }

        /// <inheritdoc/>
        public override bool DeleteIndex(string @namespace, HashDigest<SHA256> hash)
        {
            int deleted = IndexCollection(@namespace)
                .Delete(i => i.Hash.Equals(hash));
            return deleted > 0;
        }

        /// <inheritdoc/>
        public override IEnumerable<Address> ListAddresses(string @namespace)
        {
            string collId = StateRefId(@namespace);
            return _db.GetCollection<StateRefDoc>(collId)
                .Find(Query.All("Address", Query.Ascending))
                .Select(doc => doc.Address)
                .ToImmutableHashSet();
        }

        /// <inheritdoc/>
        public override void StageTransactionIds(IDictionary<TxId, bool> txids)
        {
            StagedTxIds.InsertBulk(
                txids.Select(kv => new StagedTxIdDoc
                {
                    TxId = kv.Key,
                    Broadcast = kv.Value,
                }));
        }

        /// <inheritdoc/>
        public override void UnstageTransactionIds(ISet<TxId> txids)
        {
            StagedTxIds.Delete(tx => txids.Contains(tx.TxId));
        }

        /// <inheritdoc/>
        public override IEnumerable<TxId> IterateStagedTransactionIds(bool toBroadcast)
        {
            IEnumerable<StagedTxIdDoc> docs = StagedTxIds.FindAll();
            if (toBroadcast)
            {
                docs = docs.Where(d => d.Broadcast);
            }

            return docs.Select(d => d.TxId).Distinct();
        }

        /// <inheritdoc/>
        public override IEnumerable<TxId> IterateTransactionIds()
        {
            IEnumerable<string> filenames;
            _txLock.EnterReadLock();
            try
            {
                filenames = _db.FileStorage
                    .Find(TxIdPrefix)
                    .Select(file => file.Filename)
                    .ToList();
            }
            finally
            {
                _txLock.ExitReadLock();
            }

            return filenames.Select(filename => new TxId(ByteUtil.ParseHex(filename)));
        }

        /// <inheritdoc/>
        public override Transaction<T> GetTransaction<T>(TxId txid)
        {
            string fileId = TxFileId(txid);
            byte[] bytes;

            _txLock.EnterUpgradeableReadLock();
            try
            {
                LiteFileInfo file = _db.FileStorage.FindById(fileId);
                if (file is null)
                {
                    return null;
                }

                using (var stream = new MemoryStream())
                {
                    DownloadFile(file, stream);

                    bytes = stream.ToArray();
                    if (bytes.Length != file.Length || bytes.Length < 1)
                    {
                        _logger.Warning(
                            "The data file for the transaction {TxId} seems corrupted; " +
                            "it will be treated nonexistent and removed at all.",
                            txid
                        );
                        _txLock.EnterWriteLock();
                        try
                        {
                            _db.FileStorage.Delete(fileId);
                        }
                        finally
                        {
                            _txLock.ExitWriteLock();
                        }

                        return null;
                    }
                }
            }
            finally
            {
                _txLock.ExitUpgradeableReadLock();
            }

            return Transaction<T>.FromBencodex(bytes);
        }

        /// <inheritdoc/>
        public override void PutTransaction<T>(Transaction<T> tx)
        {
            string fileId = TxFileId(tx.Id);
            string filename = tx.Id.ToHex();
            byte[] txBytes = tx.ToBencodex(true);
            _txLock.EnterUpgradeableReadLock();
            try
            {
                LiteFileInfo file = _db.FileStorage.FindById(fileId);
                if (file is LiteFileInfo)
                {
                    // No-op if already exists.
                    return;
                }

                _txLock.EnterWriteLock();
                try
                {
                    UploadFile(fileId, filename, txBytes);
                }
                finally
                {
                    _txLock.ExitWriteLock();
                }
            }
            finally
            {
                _txLock.ExitUpgradeableReadLock();
            }
        }

        /// <inheritdoc/>
        public override bool DeleteTransaction(TxId txid)
        {
            _txLock.EnterWriteLock();
            try
            {
                return _db.FileStorage.Delete(TxFileId(txid));
            }
            finally
            {
                _txLock.ExitWriteLock();
            }
        }

        /// <inheritdoc/>
        public override IEnumerable<HashDigest<SHA256>> IterateBlockHashes()
        {
            return _db.FileStorage
                .Find("block/")
                .Select(file =>
                    new HashDigest<SHA256>(ByteUtil.ParseHex(file.Filename)));
        }

        /// <inheritdoc/>
        public override void PutBlock<T>(Block<T> block)
        {
            foreach (Transaction<T> tx in block.Transactions)
            {
                PutTransaction(tx);
            }

            UploadFile(
                BlockFileId(block.Hash),
                ByteUtil.Hex(block.Hash.ToByteArray()),
                block.ToBencodex(true, false)
            );
        }

        /// <inheritdoc/>
        public override bool DeleteBlock(HashDigest<SHA256> blockHash)
        {
            return _db.FileStorage.Delete(BlockFileId(blockHash));
        }

        /// <inheritdoc/>
        public override AddressStateMap GetBlockStates(HashDigest<SHA256> blockHash)
        {
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
                var formatter = new BinaryFormatter();
                return (AddressStateMap)formatter.Deserialize(stream);
            }
        }

        /// <inheritdoc/>
        public override void SetBlockStates(
            HashDigest<SHA256> blockHash,
            AddressStateMap states)
        {
            using (var stream = new MemoryStream())
            {
                var formatter = new BinaryFormatter();
                formatter.Serialize(stream, states);
                stream.Seek(0, SeekOrigin.Begin);
                _db.FileStorage.Upload(
                    BlockStateFileId(blockHash),
                    ByteUtil.Hex(blockHash.ToByteArray()),
                    stream
                );
            }
        }

        /// <inheritdoc/>
        public override IEnumerable<Tuple<HashDigest<SHA256>, long>> IterateStateReferences(
            string @namespace,
            Address address)
        {
            string collId = StateRefId(@namespace);
            LiteCollection<StateRefDoc> coll = _db.GetCollection<StateRefDoc>(collId);
            string addressString = address.ToHex().ToLower();
            IEnumerable<StateRefDoc> stateRefs = coll.Find(
                Query.And(
                    Query.EQ("AddressString", addressString),
                    Query.All("BlockIndex", Query.Descending)
                )
            );
            return stateRefs
                .Select(doc => new Tuple<HashDigest<SHA256>, long>(doc.BlockHash, doc.BlockIndex))
                .OrderByDescending(pair => pair.Item2);
        }

        /// <inheritdoc/>
        public override void StoreStateReference(
            string @namespace,
            IImmutableSet<Address> addresses,
            HashDigest<SHA256> hash,
            long index)
        {
            string collId = StateRefId(@namespace);
            LiteCollection<StateRefDoc> coll = _db.GetCollection<StateRefDoc>(collId);
            coll.InsertBulk(
                addresses.Select(addr => new StateRefDoc
                {
                    Address = addr,
                    BlockIndex = index,
                    BlockHash = hash,
                })
            );
            coll.EnsureIndex("AddressString");
            coll.EnsureIndex("BlockIndex");
        }

        /// <inheritdoc/>
        public override void ForkStateReferences<T>(
            string srcNamespace,
            string destNamespace,
            Block<T> branchPoint,
            IImmutableSet<Address> addressesToStrip)
        {
            string srcCollId = StateRefId(srcNamespace);
            string dstCollId = StateRefId(destNamespace);
            LiteCollection<StateRefDoc> srcColl = _db.GetCollection<StateRefDoc>(srcCollId),
                                        dstColl = _db.GetCollection<StateRefDoc>(dstCollId);

            dstColl.InsertBulk(srcColl.Find(Query.LTE("BlockIndex", branchPoint.Index)));

            if (dstColl.Count() < 1 && addressesToStrip.Any())
            {
                throw new NamespaceNotFoundException(
                    srcNamespace,
                    "The source namespace to be forked does not exist."
                );
            }
        }

        /// <inheritdoc/>
        public override IEnumerable<KeyValuePair<Address, long>> ListTxNonces(string @namespace)
        {
            var collectionId = $"{NonceIdPrefix}{@namespace}";
            LiteCollection<BsonDocument> collection = _db.GetCollection<BsonDocument>(collectionId);
            foreach (BsonDocument doc in collection.FindAll())
            {
                if (doc.TryGetValue("_id", out BsonValue id) && id.IsBinary)
                {
                    var address = new Address(id.AsBinary);
                    if (doc.TryGetValue("v", out BsonValue v) && v.IsInt64)
                    {
                        if (v.AsInt64 > 0)
                        {
                            yield return new KeyValuePair<Address, long>(address, v.AsInt64);
                        }
                    }
                }
            }
        }

        /// <inheritdoc/>
        public override long GetTxNonce(string @namespace, Address address)
        {
            var collectionId = $"{NonceIdPrefix}{@namespace}";
            LiteCollection<BsonDocument> collection = _db.GetCollection<BsonDocument>(collectionId);
            var docId = new BsonValue(address.ToByteArray());
            BsonDocument doc = collection.FindById(docId);
            return doc is null ? 0 : (doc.TryGetValue("v", out BsonValue v) ? v.AsInt64 : 0);
        }

        /// <inheritdoc/>
        public override void IncreaseTxNonce(string @namespace, Address signer, long delta = 1)
        {
            long nextNonce = GetTxNonce(@namespace, signer) + delta;
            var collectionId = $"{NonceIdPrefix}{@namespace}";
            LiteCollection<BsonDocument> collection = _db.GetCollection<BsonDocument>(collectionId);
            var docId = new BsonValue(signer.ToByteArray());
            collection.Upsert(docId, new BsonDocument() { ["v"] = new BsonValue(nextNonce) });
        }

        /// <inheritdoc/>
        public override long CountTransactions()
        {
            return _db.FileStorage.Find(TxIdPrefix).Count();
        }

        /// <inheritdoc/>
        public override long CountBlocks()
        {
            return _db.FileStorage.Find("block/").Count();
        }

        public void Dispose()
        {
            _db?.Dispose();
        }

        internal override RawBlock? GetRawBlock(HashDigest<SHA256> blockHash)
        {
            LiteFileInfo file =
                _db.FileStorage.FindById(BlockFileId(blockHash));
            if (file is null)
            {
                return null;
            }

            using (var stream = new MemoryStream())
            {
                DownloadFile(file, stream);
                stream.Seek(0, SeekOrigin.Begin);

                var formatter = new BencodexFormatter<RawBlock>();
                return (RawBlock)formatter.Deserialize(stream);
            }
        }

        private string TxFileId(TxId txid)
        {
            return $"{TxIdPrefix}{txid.ToHex()}";
        }

        private string BlockFileId(HashDigest<SHA256> blockHash)
        {
            return $"block/{blockHash}";
        }

        private string BlockStateFileId(HashDigest<SHA256> blockHash)
        {
            return $"state/{blockHash}";
        }

        private string StateRefId(string @namespace)
        {
            string ns =
                ByteUtil.Hex(namespaceHasher.ComputeHash(Encoding.UTF8.GetBytes(@namespace)));
            return $"{StateRefIdPrefix}{ns}";
        }

        private IEnumerable<Transaction<T>> GetTransactions<T>(
            IEnumerable transactions
        )
            where T : IAction, new()
        {
            return transactions
                .Cast<byte[]>()
                .Select(bytes => GetTransaction<T>(new TxId(bytes)))
                .Where(tx => tx != null);
        }

        private void UploadFile(string fileId, string filename, byte[] bytes)
        {
            using (var stream = new MemoryStream(bytes))
            {
                stream.Seek(0, SeekOrigin.Begin);
                _db.FileStorage.Upload(fileId, filename, stream);
            }
        }

        private void DownloadFile(LiteFileInfo file, Stream stream)
        {
            file.CopyTo(stream);

            if (stream.Length > file.Length)
            {
                stream.SetLength(file.Length);
            }
        }

        private LiteCollection<HashDoc> IndexCollection(string @namespace)
        {
            return _db.GetCollection<HashDoc>($"{IndexColPrefix}{@namespace}");
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
                    AddressString = value.ToHex().ToLower();
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

            public bool Broadcast { get; set; }
        }
    }
}
