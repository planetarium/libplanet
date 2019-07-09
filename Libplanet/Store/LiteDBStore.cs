using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Runtime.InteropServices;
using System.Runtime.Serialization.Formatters.Binary;
using System.Security.Cryptography;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Serialization;
using Libplanet.Tx;
using LiteDB;

namespace Libplanet.Store
{
    /// <summary>
    /// <see cref="IStore"/> implementation using <a href="https://www.litedb.org/">LiteDB</a>.
    /// </summary>
    /// <seealso cref="IStore"/>
    public class LiteDBStore : IStore, IDisposable
    {
        private const string TxIdPrefix = "tx/";

        private const string IndexColPrefix = "index_";

        private const string StateRefIdPrefix = "stateref/";

        private const string NonceIdPrefix = "nonce_";

        private readonly LiteDatabase _db;

        /// <summary>
        /// Creates a new <seealso cref="LiteDBStore"/>.
        /// </summary>
        /// <param name="path">The path where the storage file will be saved.</param>
        /// <param name="journal">
        /// Enables or disables double write check to ensure durability.
        /// </param>
        /// <param name="cacheSize">Max number of pages in the cache.</param>
        public LiteDBStore(string path, bool journal = true, int cacheSize = 50000)
        {
            if (path is null)
            {
                throw new ArgumentNullException(nameof(path));
            }

            var connectionString = new ConnectionString
            {
                Filename = path,
                Journal = journal,
                CacheSize = cacheSize,
            };

            if (RuntimeInformation.IsOSPlatform(OSPlatform.OSX) &&
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
        }

        private LiteCollection<StagedTxIdDoc> StagedTxIds =>
            _db.GetCollection<StagedTxIdDoc>("staged_txids");

        /// <inheritdoc/>
        public IEnumerable<string> ListNamespaces()
        {
            return _db.GetCollectionNames()
                .Where(name => name.StartsWith(IndexColPrefix))
                .Select(name => name.Substring(IndexColPrefix.Length));
        }

        /// <inheritdoc/>
        public void DeleteNamespace(string @namespace)
        {
            _db.DropCollection(IndexCollection(@namespace).Name);
            _db.DropCollection($"{NonceIdPrefix}{@namespace}");

            foreach (LiteFileInfo file in _db.FileStorage.Find($"{StateRefIdPrefix}{@namespace}"))
            {
                _db.FileStorage.Delete(file.Id);
            }
        }

        /// <inheritdoc/>
        public long CountIndex(string @namespace)
        {
            return IndexCollection(@namespace).Count();
        }

        /// <inheritdoc/>
        public IEnumerable<HashDigest<SHA256>> IterateIndex(string @namespace)
        {
            return IndexCollection(@namespace)
                .FindAll()
                .Select(i => i.Hash);
        }

        /// <inheritdoc/>
        public HashDigest<SHA256>? IndexBlockHash(string @namespace, long index)
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
        public long AppendIndex(string @namespace, HashDigest<SHA256> hash)
        {
            return IndexCollection(@namespace)
                       .Insert(new HashDoc { Hash = hash }) - 1;
        }

        /// <inheritdoc/>
        public bool DeleteIndex(string @namespace, HashDigest<SHA256> hash)
        {
            int deleted = IndexCollection(@namespace)
                .Delete(i => i.Hash.Equals(hash));
            return deleted > 0;
        }

        /// <inheritdoc/>
        public IEnumerable<Address> ListAddresses(string @namespace)
        {
            var prefix = $"{StateRefIdPrefix}{@namespace}/";
            foreach (LiteFileInfo fileInfo in _db.FileStorage.Find(prefix))
            {
                string fileId = fileInfo.Id;
                int slashIndex = fileId.LastIndexOf('/');
                if (slashIndex < 0)
                {
                    continue;
                }

                string addressHex = fileId.Substring(slashIndex + 1);
                if (addressHex.Length < Address.Size * 2)
                {
                    continue;
                }

                Address address;
                try
                {
                    address = new Address(addressHex);
                }
                catch (ArgumentException)
                {
                    continue;
                }

                yield return address;
            }
        }

        /// <inheritdoc/>
        public void StageTransactionIds(IDictionary<TxId, bool> txids)
        {
            StagedTxIds.InsertBulk(
                txids.Select(kv => new StagedTxIdDoc
                {
                    TxId = kv.Key,
                    Broadcast = kv.Value,
                }));
        }

        /// <inheritdoc/>
        public void UnstageTransactionIds(ISet<TxId> txids)
        {
            StagedTxIds.Delete(tx => txids.Contains(tx.TxId));
        }

        /// <inheritdoc/>
        public IEnumerable<TxId> IterateStagedTransactionIds(bool toBroadcast)
        {
            if (toBroadcast)
            {
                return StagedTxIds.FindAll().Where(t => t.Broadcast).Select(t => t.TxId);
            }

            return StagedTxIds.FindAll().Select(t => t.TxId);
        }

        /// <inheritdoc/>
        public IEnumerable<TxId> IterateTransactionIds()
        {
            return _db.FileStorage
                .Find(TxIdPrefix)
                .Select(file => new TxId(ByteUtil.ParseHex(file.Filename)));
        }

        /// <inheritdoc/>
        public Transaction<T> GetTransaction<T>(TxId txid)
            where T : IAction, new()
        {
            LiteFileInfo file = _db.FileStorage.FindById(TxFileId(txid));
            if (file is null)
            {
                return null;
            }

            using (var stream = new MemoryStream())
            {
                file.CopyTo(stream);
                stream.Seek(0, SeekOrigin.Begin);
                return Transaction<T>.FromBencodex(stream.ToArray());
            }
        }

        /// <inheritdoc/>
        public void PutTransaction<T>(Transaction<T> tx)
            where T : IAction, new()
        {
            using (var stream = new MemoryStream())
            {
                byte[] encoded = tx.ToBencodex(true);
                stream.Write(encoded, 0, encoded.Length);
                stream.Seek(0, SeekOrigin.Begin);
                _db.FileStorage.Upload(
                    TxFileId(tx.Id),
                    tx.Id.ToHex(),
                    stream);
            }
        }

        /// <inheritdoc/>
        public bool DeleteTransaction(TxId txid)
        {
            return _db.FileStorage.Delete(TxFileId(txid));
        }

        /// <inheritdoc/>
        public IEnumerable<HashDigest<SHA256>> IterateBlockHashes()
        {
            return _db.FileStorage
                .Find("block/")
                .Select(file =>
                    new HashDigest<SHA256>(ByteUtil.ParseHex(file.Filename)));
        }

        /// <inheritdoc/>
        public Block<TTxAction, TBlockAction> GetBlock<TTxAction, TBlockAction>(
            HashDigest<SHA256> blockHash)
            where TTxAction : IAction, new()
            where TBlockAction : IAction, new()
        {
            LiteFileInfo file =
                _db.FileStorage.FindById(BlockFileId(blockHash));

            if (file is null)
            {
                return null;
            }

            using (var stream = new MemoryStream())
            {
                file.CopyTo(stream);
                stream.Seek(0, SeekOrigin.Begin);

                var formatter = new BencodexFormatter<RawBlock>();
                RawBlock rawBlock = (RawBlock)formatter.Deserialize(stream);
                HashDigest<SHA256>? previousHash = null;

                if (rawBlock.PreviousHash != null)
                {
                    previousHash =
                        new HashDigest<SHA256>(rawBlock.PreviousHash);
                }

                return new Block<TTxAction, TBlockAction>(
                    index: rawBlock.Index,
                    difficulty: rawBlock.Difficulty,
                    nonce: new Nonce(rawBlock.Nonce),
                    miner: new Address(rawBlock.Miner),
                    previousHash: previousHash,
                    timestamp: DateTimeOffset.ParseExact(
                        rawBlock.Timestamp,
                        Block<TTxAction, TBlockAction>.TimestampFormat,
                        CultureInfo.InvariantCulture
                    ).ToUniversalTime(),
                    transactions: GetTransactions<TTxAction>(rawBlock.Transactions)
                );
            }
        }

        /// <inheritdoc/>
        public void PutBlock<TTxAction, TBlockAction>(Block<TTxAction, TBlockAction> block)
            where TTxAction : IAction, new()
            where TBlockAction : IAction, new()
        {
            foreach (Transaction<TTxAction> tx in block.Transactions)
            {
                PutTransaction(tx);
            }

            using (var stream = new MemoryStream())
            {
                byte[] encoded = block.ToBencodex(true, false);
                stream.Write(encoded, 0, encoded.Length);
                stream.Seek(0, SeekOrigin.Begin);
                _db.FileStorage.Upload(
                    BlockFileId(block.Hash),
                    ByteUtil.Hex(block.Hash.ToByteArray()),
                    stream);
            }
        }

        /// <inheritdoc/>
        public bool DeleteBlock(HashDigest<SHA256> blockHash)
        {
            return _db.FileStorage.Delete(BlockFileId(blockHash));
        }

        /// <inheritdoc/>
        public AddressStateMap GetBlockStates(HashDigest<SHA256> blockHash)
        {
            LiteFileInfo file =
                _db.FileStorage.FindById(BlockStateFileId(blockHash));
            if (file is null)
            {
                return null;
            }

            using (var stream = new MemoryStream())
            {
                file.CopyTo(stream);
                stream.Seek(0, SeekOrigin.Begin);
                var formatter = new BinaryFormatter();
                return (AddressStateMap)formatter.Deserialize(stream);
            }
        }

        /// <inheritdoc/>
        public void SetBlockStates(
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
                    stream);
            }
        }

        /// <inheritdoc/>
        public IEnumerable<Tuple<HashDigest<SHA256>, long>> IterateStateReferences(
            string @namespace,
            Address address)
        {
            var fileId = $"{StateRefIdPrefix}{@namespace}/{address.ToHex()}";
            LiteFileInfo file = _db.FileStorage.FindById(fileId);

            if (file is null || file.Length == 0)
            {
                yield break;
            }

            int hashSize = HashDigest<SHA256>.Size;
            int stateReferenceSize = hashSize + sizeof(long);
            if (file.Length % stateReferenceSize != 0)
            {
                throw new FileLoadException(
                    $"State references file's size ({file.Length}) should be multiple of " +
                    $"state reference entry size {stateReferenceSize})."
                );
            }

            using (var stream = new MemoryStream())
            {
                // Note that a stream made by file.OpenRead() does not support
                // .Seek() operation --- although it implements the interface,
                // the method throws a NotSupportedException.
                file.CopyTo(stream);

                var buffer = new byte[stateReferenceSize];
                long position = stream.Seek(0, SeekOrigin.End);

                for (var i = 1; position - buffer.Length >= 0; i++)
                {
                    position = stream.Seek(-buffer.Length * i, SeekOrigin.End);
                    stream.Read(buffer, 0, buffer.Length);
                    byte[] hashBytes = buffer.Take(hashSize).ToArray();
                    long index = BitConverter.ToInt64(buffer, hashSize);
                    yield return Tuple.Create(
                        new HashDigest<SHA256>(hashBytes),
                        index
                    );
                }
            }
        }

        /// <inheritdoc/>
        public void StoreStateReference<TTxAction, TBlockAction>(
            string @namespace,
            IImmutableSet<Address> addresses,
            Block<TTxAction, TBlockAction> block)
            where TTxAction : IAction, new()
            where TBlockAction : IAction, new()
        {
            int hashSize = HashDigest<SHA256>.Size;
            byte[] hashBytes = block.Hash.ToByteArray();
            byte[] indexBytes = BitConverter.GetBytes(block.Index);

            foreach (Address address in addresses)
            {
                string addrHex = address.ToHex();
                var fileId = $"{StateRefIdPrefix}{@namespace}/{addrHex}";
                if (!_db.FileStorage.Exists(fileId))
                {
                    _db.FileStorage.Upload(
                        fileId,
                        addrHex,
                        new MemoryStream());
                }

                LiteFileInfo file = _db.FileStorage.FindById(fileId);
                using (var temp = new MemoryStream())
                {
                    file.CopyTo(temp);
                    temp.Seek(0, SeekOrigin.Begin);
                    byte[] prev = temp.ToArray();

                    using (LiteFileStream stream = file.OpenWrite())
                    {
                        stream.Write(prev, 0, prev.Length);
                        stream.Write(hashBytes, 0, hashSize);
                        stream.Write(indexBytes, 0, sizeof(long));
                    }
                }
            }
        }

        /// <inheritdoc/>
        public void ForkStateReferences<TTxAction, TBlockAction>(
            string srcNamespace,
            string destNamespace,
            Block<TTxAction, TBlockAction> branchPoint,
            IImmutableSet<Address> addressesToStrip)
            where TTxAction : IAction, new()
            where TBlockAction : IAction, new()
        {
            long branchPointIndex = branchPoint.Index;
            List<LiteFileInfo> files =
                _db.FileStorage
                    .Find($"{StateRefIdPrefix}{srcNamespace}")
                    .ToList();

            if (!files.Any() && addressesToStrip.Any())
            {
                throw new NamespaceNotFoundException(
                    srcNamespace,
                    "The source namespace to be forked does not exist.");
            }

            foreach (LiteFileInfo srcFile in files)
            {
                string destId =
                    $"{StateRefIdPrefix}{destNamespace}/{srcFile.Filename}";
                _db.FileStorage.Upload(
                    destId,
                    srcFile.Filename,
                    new MemoryStream());

                LiteFileInfo destFile = _db.FileStorage.FindById(destId);
                using (LiteFileStream srcStream = srcFile.OpenRead())
                using (LiteFileStream destStream = destFile.OpenWrite())
                {
                    while (srcStream.Position < srcStream.Length)
                    {
                        var hashBytes = new byte[HashDigest<SHA256>.Size];
                        var indexBytes = new byte[sizeof(long)];

                        srcStream.Read(hashBytes, 0, hashBytes.Length);
                        srcStream.Read(indexBytes, 0, indexBytes.Length);

                        long currentIndex =
                            BitConverter.ToInt64(indexBytes, 0);

                        if (currentIndex <= branchPointIndex)
                        {
                            destStream.Write(hashBytes, 0, hashBytes.Length);
                            destStream.Write(indexBytes, 0, indexBytes.Length);
                        }
                        else
                        {
                            break;
                        }
                    }
                }

                if (destFile.Length == 0)
                {
                    _db.FileStorage.Delete(destId);
                }
            }
        }

        /// <inheritdoc/>
        public IEnumerable<KeyValuePair<Address, long>> ListTxNonces(string @namespace)
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
        public long GetTxNonce(string @namespace, Address address)
        {
            var collectionId = $"{NonceIdPrefix}{@namespace}";
            LiteCollection<BsonDocument> collection = _db.GetCollection<BsonDocument>(collectionId);
            var docId = new BsonValue(address.ToByteArray());
            BsonDocument doc = collection.FindById(docId);
            return doc is null ? 0 : (doc.TryGetValue("v", out BsonValue v) ? v.AsInt64 : 0);
        }

        /// <inheritdoc/>
        public void IncreaseTxNonce(string @namespace, Address signer, long delta = 1)
        {
            long nextNonce = GetTxNonce(@namespace, signer) + delta;
            var collectionId = $"{NonceIdPrefix}{@namespace}";
            LiteCollection<BsonDocument> collection = _db.GetCollection<BsonDocument>(collectionId);
            var docId = new BsonValue(signer.ToByteArray());
            collection.Upsert(docId, new BsonDocument() { ["v"] = new BsonValue(nextNonce) });
        }

        /// <inheritdoc/>
        public long CountTransactions()
        {
            return _db.FileStorage.Find(TxIdPrefix).Count();
        }

        /// <inheritdoc/>
        public long CountBlocks()
        {
            return _db.FileStorage.Find("block/").Count();
        }

        public void Dispose()
        {
            _db?.Dispose();
        }

        private string TxFileId(TxId txid)
        {
            return $"tx/{txid.ToHex()}";
        }

        private string BlockFileId(HashDigest<SHA256> blockHash)
        {
            return $"block/{blockHash}";
        }

        private string BlockStateFileId(HashDigest<SHA256> blockHash)
        {
            return $"state/{blockHash}";
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

        private LiteCollection<HashDoc> IndexCollection(string @namespace)
        {
            return _db.GetCollection<HashDoc>($"{IndexColPrefix}{@namespace}");
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
