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
    public class LiteDBStore : IStore, IDisposable
    {
        private const string TxIdPrefix = "tx/";

        private const string IndexColPrefix = "index_";

        private const string StateRefIdPrefix = "stateref/";

        private const string NonceIdPrefix = "nonce/";

        private readonly LiteDatabase _db;

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

        private LiteCollection<TxIdDoc> StagedTxIds =>
            _db.GetCollection<TxIdDoc>("staged_txids");

        /// <inheritdoc/>
        public IEnumerable<string> ListNamespaces()
        {
            return _db.GetCollectionNames()
                .Where(name => name.StartsWith(IndexColPrefix))
                .Select(name => name.Substring(IndexColPrefix.Length));
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
        public void StageTransactionIds(ISet<TxId> txids)
        {
            StagedTxIds.InsertBulk(
                txids.Select(tid => new TxIdDoc { TxId = tid }));
        }

        /// <inheritdoc/>
        public void UnstageTransactionIds(ISet<TxId> txids)
        {
            StagedTxIds.Delete(tx => txids.Contains(tx.TxId));
        }

        /// <inheritdoc/>
        public IEnumerable<TxId> IterateStagedTransactionIds()
        {
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
        public Block<T> GetBlock<T>(HashDigest<SHA256> blockHash)
            where T : IAction, new()
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

                return new Block<T>(
                    index: rawBlock.Index,
                    difficulty: rawBlock.Difficulty,
                    nonce: new Nonce(rawBlock.Nonce),
                    miner: new Address(rawBlock.Miner),
                    previousHash: previousHash,
                    timestamp: DateTimeOffset.ParseExact(
                        rawBlock.Timestamp,
                        Block<T>.TimestampFormat,
                        CultureInfo.InvariantCulture
                    ).ToUniversalTime(),
                    transactions: GetTransactions<T>(rawBlock.Transactions)
                );
            }
        }

        /// <inheritdoc/>
        public void PutBlock<T>(Block<T> block)
            where T : IAction, new()
        {
            foreach (Transaction<T> tx in block.Transactions)
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
        public HashDigest<SHA256>? LookupStateReference<T>(
            string @namespace,
            Address address,
            Block<T> lookupUntil)
            where T : IAction, new()
        {
            var fileId = $"{StateRefIdPrefix}{@namespace}/{address.ToHex()}";
            LiteFileInfo file = _db.FileStorage.FindById(fileId);

            if (file is null || file.Length == 0)
            {
                return null;
            }

            using (var stream = new MemoryStream())
            {
                file.CopyTo(stream);

                int hashSize = HashDigest<SHA256>.Size;
                int stateReferenceSize = hashSize + sizeof(long);
                var buffer = new byte[stateReferenceSize];

                if (stream.Length % stateReferenceSize != 0)
                {
                    throw new FileLoadException(
                        $"State reference file size {stream.Length} " +
                        "should be multiple of state reference entry size " +
                        $"{stateReferenceSize}");
                }

                long position = stream.Seek(0, SeekOrigin.End);

                for (var i = 1; position - buffer.Length >= 0; i++)
                {
                    position = stream.Seek(
                        -buffer.Length * i, SeekOrigin.End);
                    stream.Read(buffer, 0, buffer.Length);
                    byte[] hashBytes = buffer.Take(hashSize).ToArray();
                    long index = BitConverter.ToInt64(buffer, hashSize);

                    if (index <= lookupUntil.Index)
                    {
                        return new HashDigest<SHA256>(hashBytes);
                    }
                }
            }

            return null;
        }

        /// <inheritdoc/>
        public void StoreStateReference<T>(
            string @namespace,
            IImmutableSet<Address> addresses,
            Block<T> block)
            where T : IAction, new()
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
        public void ForkStateReferences<T>(
            string srcNamespace,
            string destNamespace,
            Block<T> branchPoint,
            IImmutableSet<Address> addressesToStrip)
            where T : IAction, new()
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
        public long GetTxNonce(string @namespace, Address address)
        {
            var fileId = $"{NonceIdPrefix}{@namespace}/{address.ToHex()}";
            LiteFileInfo file = _db.FileStorage.FindById(fileId);

            if (file is null || file.Length == 0)
            {
                return 0;
            }

            int hashSize = HashDigest<SHA256>.Size;
            int blockIndexSize = sizeof(long);
            int nonceSize = sizeof(long);
            int nonceEntrySize = hashSize + blockIndexSize + nonceSize;

            using (var stream = new MemoryStream())
            {
                file.CopyTo(stream);

                if (stream.Length % nonceEntrySize != 0)
                {
                    throw new FileLoadException(
                        $"Nonce file size {stream.Length} should be " +
                        $"a multiple of nonce entry size {nonceEntrySize}");
                }

                var buffer = new byte[nonceEntrySize];
                stream.Seek(stream.Length - buffer.Length, SeekOrigin.Begin);
                stream.Read(buffer, 0, buffer.Length);

                return BitConverter.ToInt64(buffer, hashSize + blockIndexSize);
            }
        }

        /// <inheritdoc/>
        public void IncreaseTxNonce<T>(string @namespace, Block<T> block)
            where T : IAction, new()
        {
            IEnumerable<Address> signers = block
                .Transactions
                .Select(tx => tx.Signer);
            int hashSize = HashDigest<SHA256>.Size;
            long blockIndex = block.Index;

            foreach (Address signer in signers)
            {
                var fileId = $"{NonceIdPrefix}{@namespace}/{signer.ToHex()}";
                long nextNonce = GetTxNonce(@namespace, signer) + 1;

                if (!_db.FileStorage.Exists(fileId))
                {
                    _db.FileStorage.Upload(
                        fileId,
                        signer.ToHex(),
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
                        stream.Write(block.Hash.ToByteArray(), 0, hashSize);
                        stream.Write(
                            BitConverter.GetBytes(blockIndex), 0, sizeof(long));
                        stream.Write(
                            BitConverter.GetBytes(nextNonce), 0, sizeof(long));
                    }
                }
            }
        }

        /// <inheritdoc/>
        public void ForkTxNonce<T>(
            string sourceNamespace,
            string destinationNamespace,
            Block<T> branchPoint,
            IImmutableSet<Address> addressesToStrip)
            where T : IAction, new()
        {
            long branchPointIndex = branchPoint.Index;
            List<LiteFileInfo> files =
                _db.FileStorage
                    .Find($"{NonceIdPrefix}{sourceNamespace}")
                    .ToList();

            if (!files.Any() && addressesToStrip.Any())
            {
                throw new NamespaceNotFoundException(
                    sourceNamespace,
                    "The source namespace to be forked does not exist.");
            }

            foreach (LiteFileInfo srcFile in files)
            {
                string destId =
                    $"{NonceIdPrefix}{destinationNamespace}/{srcFile.Filename}";
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
                        var nonceBytes = new byte[sizeof(long)];

                        srcStream.Read(hashBytes, 0, hashBytes.Length);
                        srcStream.Read(indexBytes, 0, indexBytes.Length);
                        srcStream.Read(nonceBytes, 0, nonceBytes.Length);

                        long currentIndex =
                            BitConverter.ToInt64(indexBytes, 0);

                        if (currentIndex <= branchPointIndex)
                        {
                            destStream.Write(hashBytes, 0, hashBytes.Length);
                            destStream.Write(indexBytes, 0, indexBytes.Length);
                            destStream.Write(nonceBytes, 0, nonceBytes.Length);
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

        private class TxIdDoc
        {
            public long Id { get; set; }

            public TxId TxId { get; set; }
        }
    }
}
