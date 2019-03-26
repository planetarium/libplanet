using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Runtime.Serialization.Formatters.Binary;
using System.Security.Cryptography;
using System.Text.RegularExpressions;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Serialization;
using Libplanet.Tx;

namespace Libplanet.Store
{
    public class FileStore : BaseStore
    {
        private const string _transactionsDir = "tx";
        private const string _blocksDir = "blocks";
        private const string _stagedTransactionsDir = "stage";
        private const string _addressesDir = "addr";
        private const string _statesDir = "states";
        private const string _indexFile = "index";

        private readonly string _path;

        public FileStore(string path)
        {
            if (File.Exists(path) && !Directory.Exists(path))
            {
                throw new ArgumentException(
                    $"expected a directory path or path " +
                    $"that does not exist yet: {path}"
                );
            }

            _path = path;
        }

        public string GetTransactionPath(string @namespace, TxId txid)
        {
            var txidHex = txid.ToString();
            return Path.Combine(
                GetTransactionPath(@namespace),
                txidHex.Substring(0, 4),
                txidHex.Substring(4));
        }

        public string GetTransactionPath(string @namespace)
        {
            EnsureNamespace(@namespace);

            return Path.Combine(
                _path,
                @namespace,
                _transactionsDir);
        }

        public string GetBlockPath(
            string @namespace,
            HashDigest<SHA256> blockHash
        )
        {
            var keyHex = blockHash.ToString();
            return Path.Combine(
                GetBlockPath(@namespace),
                keyHex.Substring(0, 4),
                keyHex.Substring(4));
        }

        public string GetBlockPath(string @namespace)
        {
            EnsureNamespace(@namespace);

            return Path.Combine(
                _path,
                @namespace,
                _blocksDir);
        }

        public string GetStagedTransactionPath(string @namespace, TxId txid)
        {
            return Path.Combine(
                GetStagedTransactionPath(@namespace),
                txid.ToString()
            );
        }

        public string GetStagedTransactionPath(string @namespace)
        {
            EnsureNamespace(@namespace);

            return Path.Combine(
                _path,
                @namespace,
                _stagedTransactionsDir);
        }

        public string GetAddressPath(string @namespace, Address address)
        {
            EnsureNamespace(@namespace);

            var addrHex = address.ToHex();
            return Path.Combine(
                _path,
                @namespace,
                _addressesDir,
                addrHex.Substring(0, 4),
                addrHex.Substring(4));
        }

        public string GetAddressPath(string @namespace)
        {
            EnsureNamespace(@namespace);

            return Path.Combine(
                _path,
                @namespace,
                _addressesDir);
        }

        public string GetStatesPath(string @namespace, HashDigest<SHA256> key)
        {
            EnsureNamespace(@namespace);

            var keyHex = key.ToString();
            return Path.Combine(
                GetStatesPath(@namespace),
                keyHex.Substring(0, 4),
                keyHex.Substring(4));
        }

        public string GetStatesPath(string @namespace)
        {
            EnsureNamespace(@namespace);

            return Path.Combine(
                _path,
                @namespace,
                _statesDir);
        }

        public string GetIndexPath(string @namespace)
        {
            EnsureNamespace(@namespace);

            return Path.Combine(
                _path,
                @namespace,
                _indexFile
            );
        }

        /// <inheritdoc/>
        public override IEnumerable<string> ListNamespaces()
        {
            if (Directory.Exists(_path))
            {
                foreach (string p in Directory.EnumerateDirectories(_path))
                {
                    yield return Path.GetFileName(p);
                }
            }
        }

        public override long AppendAddressTransactionId(
            string @namespace,
            Address address,
            TxId txId
        )
        {
            var addrFile = new FileInfo(GetAddressPath(@namespace, address));
            addrFile.Directory.Create();

            using (Stream stream = addrFile.Open(
                FileMode.Append, FileAccess.Write))
            {
                var offset = stream.Position;
                stream.Write(txId.ToByteArray(), 0, TxId.Size);
                return Convert.ToInt64(offset / (float)TxId.Size);
            }
        }

        public override long AppendIndex(
            string @namespace,
            HashDigest<SHA256> hash
        )
        {
            var indexFile = new FileInfo(GetIndexPath(@namespace));
            if (!indexFile.Directory.Exists)
            {
                indexFile.Directory.Create();
            }

            using (Stream stream = indexFile.Open(
                FileMode.Append, FileAccess.Write))
            {
                var offset = stream.Position;
                stream.Write(hash.ToByteArray(), 0, hash.ToByteArray().Length);
                return offset / HashDigest<SHA256>.Size;
            }
        }

        public override bool DeleteIndex(
            string @namespace,
            HashDigest<SHA256> hash
        )
        {
            bool found = false;
            using (var writer = new MemoryStream())
            {
                foreach (var idx in IterateIndex(@namespace))
                {
                    if (!found && idx == hash)
                    {
                        found = true;
                    }
                    else
                    {
                        writer.Write(
                            idx.ToByteArray(), 0, HashDigest<SHA256>.Size);
                    }
                }

                // FIXME We can't this if the index is too large to buffer...
                File.WriteAllBytes(GetIndexPath(@namespace), writer.ToArray());
            }

            return found;
        }

        public override int CountIndex(string @namespace)
        {
            var indexFile = new FileInfo(GetIndexPath(@namespace));
            if (indexFile.Exists)
            {
                var indexSize = indexFile.Length;
                if (indexSize % HashDigest<SHA256>.Size != 0)
                {
                    throw new FileLoadException(
                        $"Index size {indexSize} should be a multiple " +
                        $"of HashSize {HashDigest<SHA256>.Size}"
                    );
                }

                return (int)(indexSize / HashDigest<SHA256>.Size);
            }

            return 0;
        }

        public override bool DeleteBlock(
            string @namespace,
            HashDigest<SHA256> blockHash
        )
        {
            var blockFile = new FileInfo(GetBlockPath(@namespace, blockHash));
            if (blockFile.Exists)
            {
                blockFile.Delete();
                return true;
            }

            return false;
        }

        public override bool DeleteTransaction(string @namespace, TxId txid)
        {
            var txFile = new FileInfo(GetTransactionPath(@namespace, txid));
            if (!txFile.Exists)
            {
                return false;
            }

            txFile.Delete();
            return true;
        }

        public override IEnumerable<TxId> GetAddressTransactionIds(
            string @namespace,
            Address address
        )
        {
            var addrFile = new FileInfo(GetAddressPath(@namespace, address));
            if (addrFile.Exists)
            {
                using (var f = addrFile.OpenRead())
                {
                    while (true)
                    {
                        var txIdBytes = new byte[TxId.Size];
                        var length = f.Read(txIdBytes, 0, TxId.Size);
                        if (length == 0)
                        {
                            break;
                        }

                        yield return new TxId(txIdBytes);
                    }
                }
            }
        }

        public override Block<T> GetBlock<T>(
            string @namespace,
            HashDigest<SHA256> blockHash
        )
        {
            var blockFile = new FileInfo(GetBlockPath(@namespace, blockHash));
            if (!blockFile.Exists)
            {
                return null;
            }

            using (Stream stream = blockFile.OpenRead())
            {
                var formatter = new BencodexFormatter<RawBlock>();
                RawBlock rawBlock = (RawBlock)formatter.Deserialize(stream);
                HashDigest<SHA256>? previousHash = null;

                if (rawBlock.PreviousHash != null)
                {
                    previousHash = new HashDigest<SHA256>?(
                        new HashDigest<SHA256>(rawBlock.PreviousHash)
                    );
                }

                return new Block<T>(
                    index: rawBlock.Index,
                    difficulty: rawBlock.Difficulty,
                    nonce: new Nonce(rawBlock.Nonce),
                    rewardBeneficiary: new Address(rawBlock.RewardBeneficiary),
                    previousHash: previousHash,
                    timestamp: DateTimeOffset.ParseExact(
                        rawBlock.Timestamp,
                        Block<T>.TimestampFormat,
                        CultureInfo.InvariantCulture
                    ).ToUniversalTime(),
                    transactions: GetTransactions<T>(
                        @namespace,
                        rawBlock.Transactions
                    )
                );
            }
        }

        public override Transaction<T> GetTransaction<T>(
            string @namespace,
            TxId txid
        )
        {
            var txFile = new FileInfo(GetTransactionPath(@namespace, txid));
            if (!txFile.Exists)
            {
                return null;
            }

            using (Stream stream = txFile.OpenRead())
            {
                var formatter = new BencodexFormatter<Transaction<T>>();
                return (Transaction<T>)formatter.Deserialize(stream);
            }
        }

        public override HashDigest<SHA256>? IndexBlockHash(
            string @namespace,
            long index
        )
        {
            if (index < 0)
            {
                index += CountIndex(@namespace);

                if (index < 0)
                {
                    return null;
                }
            }

            if (!File.Exists(GetIndexPath(@namespace)))
            {
                return null;
            }

            using (Stream stream = IndexFileStream(@namespace))
            {
                var blockHash = new byte[HashDigest<SHA256>.Size];
                stream.Seek(
                    HashDigest<SHA256>.Size * (int)index,
                    SeekOrigin.Begin
                );
                var bytesRead = stream.Read(
                    blockHash,
                    0,
                    HashDigest<SHA256>.Size
                );
                Trace.Assert(bytesRead == HashDigest<SHA256>.Size);

                return new HashDigest<SHA256>(blockHash);
            }
        }

        public override IEnumerable<Address> IterateAddresses(
            string @namespace
        )
        {
            var prefixRegex = new Regex(
                @"^[a-f0-9]{4}$",
                RegexOptions.IgnoreCase
            );
            var restRegex = new Regex(
                @"^[a-f0-9]{36}$",
                RegexOptions.IgnoreCase
            );
            var addressesRoot = new DirectoryInfo(GetAddressPath(@namespace));
            var prefixes = addressesRoot.EnumerateDirectories();
            foreach (DirectoryInfo prefix in prefixes)
            {
                if (!prefixRegex.IsMatch(prefix.Name))
                {
                    continue;
                }

                foreach (FileInfo rest in prefix.EnumerateFiles())
                {
                    if (!restRegex.IsMatch(rest.Name))
                    {
                        continue;
                    }

                    yield return new Address(prefix.Name + rest.Name);
                }
            }
        }

        public override IEnumerable<HashDigest<SHA256>> IterateBlockHashes(
            string @namespace
        )
        {
            var prefixRegex = new Regex(
                @"^[a-f0-9]{4}$",
                RegexOptions.IgnoreCase
            );
            var restRegex = new Regex(
                @"^[a-f0-9]{60}$",
                RegexOptions.IgnoreCase
            );
            var rootDir = new DirectoryInfo(GetBlockPath(@namespace));
            var prefixes = rootDir.EnumerateDirectories();
            foreach (DirectoryInfo prefix in prefixes)
            {
                if (!prefixRegex.IsMatch(prefix.Name))
                {
                    continue;
                }

                foreach (FileInfo rest in prefix.EnumerateFiles())
                {
                    if (!restRegex.IsMatch(rest.Name))
                    {
                        continue;
                    }

                    yield return new HashDigest<SHA256>(
                        ByteUtil.ParseHex(prefix.Name + rest.Name)
                    );
                }
            }
        }

        public override IEnumerable<HashDigest<SHA256>> IterateIndex(
            string @namespace
        )
        {
            if (!File.Exists(GetIndexPath(@namespace)))
            {
                yield break;
            }

            using (Stream stream = IndexFileStream(@namespace))
            {
                while (true)
                {
                    var blockHash = new byte[HashDigest<SHA256>.Size];
                    var bytesRead = stream.Read(
                        blockHash,
                        0,
                        HashDigest<SHA256>.Size
                    );

                    if (bytesRead == 0)
                    {
                        yield break;
                    }

                    yield return new HashDigest<SHA256>(blockHash);
                }
            }
        }

        public override IEnumerable<TxId> IterateStagedTransactionIds(
            string @namespace
        )
        {
            string stagedTxPath = GetStagedTransactionPath(@namespace);
            var stagingDirectory = new DirectoryInfo(stagedTxPath);
            if (stagingDirectory.Exists)
            {
                var dir = new DirectoryInfo(stagedTxPath);
                foreach (var staged in dir.EnumerateFiles())
                {
                    yield return new TxId(ByteUtil.ParseHex(staged.Name));
                }
            }
        }

        public override IEnumerable<TxId> IterateTransactionIds(
            string @namespace
        )
        {
            // TODO: refactor
            var prefixRegex = new Regex(
                @"^[a-f0-9]{4}$",
                RegexOptions.IgnoreCase
            );
            var restRegex = new Regex(
                @"^[a-f0-9]{60}$",
                RegexOptions.IgnoreCase
            );
            var rootDir = new DirectoryInfo(GetTransactionPath(@namespace));
            foreach (DirectoryInfo prefix in rootDir.EnumerateDirectories())
            {
                if (!prefixRegex.IsMatch(prefix.Name))
                {
                    continue;
                }

                foreach (FileInfo rest in prefix.EnumerateFiles())
                {
                    if (!restRegex.IsMatch(rest.Name))
                    {
                        continue;
                    }

                    yield return new TxId(
                        ByteUtil.ParseHex(prefix.Name + rest.Name)
                    );
                }
            }
        }

        public override void PutBlock<T>(string @namespace, Block<T> block)
        {
            foreach (var tx in block.Transactions)
            {
                PutTransaction(@namespace, tx);
            }

            var blockFile = new FileInfo(GetBlockPath(@namespace, block.Hash));
            blockFile.Directory.Create();
            using (Stream stream = blockFile.Open(
                FileMode.OpenOrCreate, FileAccess.Write))
            {
                byte[] blockBytes = block.ToBencodex(
                    true,
                    transactionData: false
                );
                stream.Write(blockBytes, 0, blockBytes.Length);
            }
        }

        public override void PutTransaction<T>(
            string @namespace,
            Transaction<T> tx
        )
        {
            var txFile = new FileInfo(GetTransactionPath(@namespace, tx.Id));
            txFile.Directory.Create();
            using (Stream stream = txFile.Open(
                FileMode.OpenOrCreate, FileAccess.Write))
            {
                byte[] txBytes = tx.ToBencodex(true);
                stream.Write(txBytes, 0, txBytes.Length);
            }
        }

        public override void StageTransactionIds(
            string @namespace,
            ISet<TxId> txids
        )
        {
            foreach (var txid in txids)
            {
                string stagedPath = GetStagedTransactionPath(@namespace, txid);
                var stagedFile = new FileInfo(stagedPath);
                stagedFile.Directory.Create();
                stagedFile.Create().Close();
            }
        }

        public override void UnstageTransactionIds(
            string @namespace,
            ISet<TxId> txids
        )
        {
            foreach (TxId txid in txids)
            {
                File.Delete(GetStagedTransactionPath(@namespace, txid));
            }
        }

        public override AddressStateMap GetBlockStates(
            string @namespace,
            HashDigest<SHA256> blockHash
        )
        {
            var statesFile = new FileInfo(
                GetStatesPath(@namespace, blockHash)
            );

            if (!statesFile.Exists)
            {
                return new AddressStateMap();
            }

            using (Stream stream = statesFile.OpenRead())
            {
                var formatter = new BinaryFormatter();
                return (AddressStateMap)formatter.Deserialize(stream);
            }
        }

        public override void SetBlockStates(
            string @namespace,
            HashDigest<SHA256> blockHash,
            AddressStateMap states
        )
        {
            var statesFile = new FileInfo(
                GetStatesPath(@namespace, blockHash)
            );
            if (!statesFile.Directory.Exists)
            {
                statesFile.Directory.Create();
            }

            using (Stream stream = statesFile.OpenWrite())
            {
                var formatter = new BinaryFormatter();
                formatter.Serialize(stream, states);
            }
        }

        private FileStream IndexFileStream(string @namespace)
        {
            var stream = new FileStream(
                GetIndexPath(@namespace),
                FileMode.Open,
                FileAccess.Read
            );
            if (stream.Length % HashDigest<SHA256>.Size != 0)
            {
                throw new FileLoadException(
                    $"Index file size {stream.Length} should be a multiple " +
                    $"of HashSize {HashDigest<SHA256>.Size}"
                );
            }

            return stream;
        }

        private IEnumerable<Transaction<T>> GetTransactions<T>(
            string @namespace,
            IEnumerable transactions
        )
            where T : IAction
        {
            return transactions
                .Cast<byte[]>()
                .Select(bytes => GetTransaction<T>(@namespace, new TxId(bytes)))
                .Where(tx => tx != null);
        }

        private void EnsureNamespace(string @namespace)
        {
            string namespacePath = Path.Combine(_path, @namespace);

            if (!Directory.Exists(namespacePath))
            {
                Directory.CreateDirectory(namespacePath);

                var dirPaths = new string[]
                {
                    _transactionsDir,
                    _blocksDir,
                    _stagedTransactionsDir,
                    _addressesDir,
                    _statesDir,
                };

                foreach (var dir in dirPaths)
                {
                    string path = Path.Combine(namespacePath, dir);
                    if (!Directory.Exists(path))
                    {
                        Directory.CreateDirectory(path);
                    }
                }
            }
        }
    }
}
