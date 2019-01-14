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
    public class FileStore : BaseStore, IStore
    {
        private readonly string _path;
        private readonly string _transactionsPath;
        private readonly string _blocksPath;
        private readonly string _indexPath;
        private readonly string _stagedTransactionsPath;
        private readonly string _addressesPath;
        private readonly string _statesPath;

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
            _transactionsPath = Path.Combine(_path, "tx");
            _blocksPath = Path.Combine(_path, "blocks");
            _stagedTransactionsPath = Path.Combine(_path, "stage");
            _addressesPath = Path.Combine(_path, "addr");
            _statesPath = Path.Combine(_path, "states");
            _indexPath = Path.Combine(_path, "index");

            var dirPaths = new string[]
            {
                _transactionsPath,
                _blocksPath,
                _stagedTransactionsPath,
                _addressesPath,
                _statesPath,
            };

            foreach (var p in dirPaths)
            {
                if (!Directory.Exists(p))
                {
                    Directory.CreateDirectory(p);
                }
            }
        }

        public string GetTransactionPath(TxId txid)
        {
            var txidHex = txid.ToString();
            return Path.Combine(
                _transactionsPath,
                txidHex.Substring(0, 4),
                txidHex.Substring(4));
        }

        public string GetBlockPath(HashDigest<SHA256> blockHash)
        {
            var keyHex = blockHash.ToString();
            return Path.Combine(
                _blocksPath,
                keyHex.Substring(0, 4),
                keyHex.Substring(4));
        }

        public string GetStagedTransactionPath(TxId txid)
        {
            return Path.Combine(_stagedTransactionsPath, txid.ToString());
        }

        public string GetAddressPath(Address address)
        {
            var addrHex = address.ToHex();
            return Path.Combine(
                _addressesPath,
                addrHex.Substring(0, 4),
                addrHex.Substring(4));
        }

        public string GetStatesPath(HashDigest<SHA256> key)
        {
            var keyHex = key.ToString();
            return Path.Combine(
                _statesPath,
                keyHex.Substring(0, 4),
                keyHex.Substring(4));
        }

        public override long AppendAddressTransactionId(
            Address address, TxId txId)
        {
            var addrFile = new FileInfo(GetAddressPath(address));
            addrFile.Directory.Create();

            using (Stream stream = addrFile.Open(
                FileMode.Append, FileAccess.Write))
            {
                var offset = stream.Position;
                stream.Write(txId.ToByteArray(), 0, TxId.RequiredLength);
                return Convert.ToInt64(offset / (float)TxId.RequiredLength);
            }
        }

        public override long AppendIndex(HashDigest<SHA256> hash)
        {
            var indexFile = new FileInfo(_indexPath);
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

        public override ulong CountIndex()
        {
            var indexFile = new FileInfo(_indexPath);
            if (indexFile.Exists)
            {
                var indexSize = (ulong)indexFile.Length;
                if (indexSize % (ulong)HashDigest<SHA256>.Size != 0)
                {
                    throw new FileLoadException(
                        $"Index size {indexSize} should be a multiple " +
                        $"of HashSize {HashDigest<SHA256>.Size}"
                    );
                }

                return indexSize / (ulong)HashDigest<SHA256>.Size;
            }

            return 0;
        }

        public override bool DeleteBlock(HashDigest<SHA256> blockHash)
        {
            var blockFile = new FileInfo(GetBlockPath(blockHash));
            if (blockFile.Exists)
            {
                blockFile.Delete();
                return true;
            }

            return false;
        }

        public override bool DeleteTransaction(TxId txid)
        {
            var txFile = new FileInfo(GetTransactionPath(txid));
            if (!txFile.Exists)
            {
                return false;
            }

            txFile.Delete();
            return true;
        }

        public override IEnumerable<TxId> GetAddressTransactionIds(Address address)
        {
            var addrFile = new FileInfo(GetAddressPath(address));
            if (addrFile.Exists)
            {
                using (var f = addrFile.OpenRead())
                {
                    while (true)
                    {
                        var txIdBytes = new byte[TxId.RequiredLength];
                        var length = f.Read(txIdBytes, 0, TxId.RequiredLength);
                        if (length == 0)
                        {
                            break;
                        }

                        yield return new TxId(txIdBytes);
                    }
                }
            }
        }

        public override Block<T> GetBlock<T>(HashDigest<SHA256> blockHash)
        {
            var blockFile = new FileInfo(GetBlockPath(blockHash));
            if (!blockFile.Exists)
            {
                return null;
            }

            using (Stream stream = blockFile.OpenRead())
            {
                var formatter = new BencodexFormatter<RawBlock>();
                RawBlock rawBlock = (RawBlock)formatter.Deserialize(stream);
                HashDigest<SHA256>? previousHash = (rawBlock.PreviousHash != null) ?
                    new HashDigest<SHA256>?(new HashDigest<SHA256>(rawBlock.PreviousHash)) :
                    null;
                return new Block<T>(
                    index: rawBlock.Index,
                    difficulty: rawBlock.Difficulty,
                    nonce: new Nonce(rawBlock.Nonce),
                    rewardBeneficiary: new Address(rawBlock.RewardBeneficiary),
                    previousHash: previousHash,
                    timestamp: DateTime.ParseExact(
                        rawBlock.Timestamp,
                        Block<T>.TimestampFormat,
                        CultureInfo.InvariantCulture
                    ).ToUniversalTime(),
                    transactions: GetTransactions<T>(rawBlock.Transactions)
                );
            }
        }

        public override Transaction<T> GetTransaction<T>(TxId txid)
        {
            var txFile = new FileInfo(GetTransactionPath(txid));
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

        public override HashDigest<SHA256>? IndexBlockHash(long index)
        {
            if (index < 0)
            {
                index += (long)CountIndex();

                if (index < 0)
                {
                    return null;
                }
            }

            if (!File.Exists(_indexPath))
            {
                return null;
            }

            using (Stream stream = IndexFileStream())
            {
                var blockHash = new byte[HashDigest<SHA256>.Size];
                stream.Seek(HashDigest<SHA256>.Size * (int)index, SeekOrigin.Begin);
                var bytesRead = stream.Read(blockHash, 0, HashDigest<SHA256>.Size);
                Trace.Assert(bytesRead == HashDigest<SHA256>.Size);

                return new HashDigest<SHA256>(blockHash);
            }
        }

        public override IEnumerable<Address> IterateAddresses()
        {
            var prefixRegex = new Regex(@"^[a-f0-9]{4}$", RegexOptions.IgnoreCase);
            var restRegex = new Regex(@"^[a-f0-9]{36}$", RegexOptions.IgnoreCase);
            var addressesRoot = new DirectoryInfo(_addressesPath);
            foreach (DirectoryInfo prefix in addressesRoot.EnumerateDirectories())
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

                    yield return new Address(ByteUtil.ParseHex(prefix.Name + rest.Name));
                }
            }
        }

        public override IEnumerable<HashDigest<SHA256>> IterateBlockHashes()
        {
            var prefixRegex = new Regex(@"^[a-f0-9]{4}$", RegexOptions.IgnoreCase);
            var restRegex = new Regex(@"^[a-f0-9]{60}$", RegexOptions.IgnoreCase);
            var addressesRoot = new DirectoryInfo(_blocksPath);
            foreach (DirectoryInfo prefix in addressesRoot.EnumerateDirectories())
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

                    yield return new HashDigest<SHA256>(ByteUtil.ParseHex(prefix.Name + rest.Name));
                }
            }
        }

        public override IEnumerable<HashDigest<SHA256>> IterateIndex()
        {
            if (!File.Exists(_indexPath))
            {
                yield break;
            }

            using (Stream stream = IndexFileStream())
            {
                while (true)
                {
                    var blockHash = new byte[HashDigest<SHA256>.Size];
                    var bytesRead = stream.Read(blockHash, 0, HashDigest<SHA256>.Size);

                    if (bytesRead == 0)
                    {
                        yield break;
                    }

                    yield return new HashDigest<SHA256>(blockHash);
                }
            }
        }

        public override IEnumerable<TxId> IterateStagedTransactionIds()
        {
            var stagingDirectory = new DirectoryInfo(_stagedTransactionsPath);
            if (stagingDirectory.Exists)
            {
                foreach (var staged in new DirectoryInfo(_stagedTransactionsPath).EnumerateFiles())
                {
                    yield return new TxId(ByteUtil.ParseHex(staged.Name));
                }
            }
        }

        public override IEnumerable<TxId> IterateTransactionIds()
        {
            // TODO: refactor
            var prefixRegex = new Regex(@"^[a-f0-9]{4}$", RegexOptions.IgnoreCase);
            var restRegex = new Regex(@"^[a-f0-9]{60}$", RegexOptions.IgnoreCase);
            var transactionsRoot = new DirectoryInfo(_transactionsPath);
            foreach (DirectoryInfo prefix in transactionsRoot.EnumerateDirectories())
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

                    yield return new TxId(ByteUtil.ParseHex(prefix.Name + rest.Name));
                }
            }
        }

        public override void PutBlock<T>(Block<T> block)
        {
            foreach (var tx in block.Transactions)
            {
                PutTransaction(tx);
            }

            var blockFile = new FileInfo(GetBlockPath(block.Hash));
            blockFile.Directory.Create();
            using (Stream stream = blockFile.Open(FileMode.OpenOrCreate, FileAccess.Write))
            {
                byte[] blockBytes = block.Bencode(true, transactionData: false);
                stream.Write(blockBytes, 0, blockBytes.Length);
            }
        }

        public override void PutTransaction<T>(Transaction<T> tx)
        {
            var txFile = new FileInfo(GetTransactionPath(tx.Id));
            txFile.Directory.Create();
            using (Stream stream = txFile.Open(FileMode.OpenOrCreate, FileAccess.Write))
            {
                byte[] txBytes = tx.Bencode(true);
                stream.Write(txBytes, 0, txBytes.Length);
            }
        }

        public override void StageTransactionIds(ISet<TxId> txids)
        {
            foreach (var txid in txids)
            {
                string stagedPath = GetStagedTransactionPath(txid);
                var stagedFile = new FileInfo(stagedPath);
                stagedFile.Directory.Create();
                stagedFile.Create().Close();
            }
        }

        public override void UnstageTransactionIds(ISet<TxId> txids)
        {
            foreach (TxId txid in txids)
            {
                File.Delete(GetStagedTransactionPath(txid));
            }
        }

        public override AddressStateMap GetBlockStates(HashDigest<SHA256> blockHash)
        {
            var statesFile = new FileInfo(GetStatesPath(blockHash));

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

        public override void SetBlockStates(HashDigest<SHA256> blockHash, AddressStateMap states)
        {
            var statesFile = new FileInfo(GetStatesPath(blockHash));
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

        private FileStream IndexFileStream()
        {
            var stream = new FileStream(_indexPath, FileMode.Open, FileAccess.Read);
            if (stream.Length % HashDigest<SHA256>.Size != 0)
            {
                throw new FileLoadException(
                    $"Index file size {stream.Length} should be a multiple " +
                    $"of HashSize {HashDigest<SHA256>.Size}"
                );
            }

            return stream;
        }

        private IEnumerable<Transaction<T>> GetTransactions<T>(IEnumerable transactions)
            where T : IAction
        {
            return transactions
                .Cast<byte[]>()
                .Select(bytes => GetTransaction<T>(new TxId(bytes)))
                .Where(tx => tx != null);
        }
    }
}
