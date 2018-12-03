using System.Collections.Generic;
using System.IO;
using System.Security.Cryptography;
using System.Text.RegularExpressions;
using Libplanet.Blocks;
using Libplanet.Tx;

namespace Libplanet.Store
{
    public class FileStore : IStore
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
                throw new System.ArgumentException(
                    "expected a directory path or path that does not exist yet:" + path
                );
            }

            _path = path;
            _transactionsPath = Path.Combine(_path, "tx");
            _blocksPath = Path.Combine(_path, "blocks");
            _indexPath = Path.Combine(_path, "index");
            _stagedTransactionsPath = Path.Combine(_path, "stage");
            _addressesPath = Path.Combine(_path, "addr");
            _statesPath = Path.Combine(_path, "states");

            var dirPaths = new string[]
            {
                _transactionsPath,
                _blocksPath,
                _stagedTransactionsPath,
                _addressesPath,
                _statesPath
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
            return Path.Combine(_transactionsPath, txidHex.Substring(0, 4), txidHex.Substring(4));
        }

        public string GetBlockPath(HashDigest<SHA256> blockHash)
        {
            var keyHex = blockHash.ToString();
            return Path.Combine(_blocksPath, keyHex.Substring(0, 4), keyHex.Substring(4));
        }

        public string GetStagedTransactionPath(TxId txid)
        {
            return Path.Combine(_stagedTransactionsPath, txid.ToString());
        }

        public string GetAddressPath(Address address)
        {
            var addrHex = address.Hex();
            return Path.Combine(_addressesPath, addrHex.Substring(0, 4), addrHex.Substring(4));
        }

        public string GetStatesPath(HashDigest key)
        {
            var keyHex = key.ToString();
            return Path.Combine(_statesPath, keyHex.Substring(0, 4), keyHex.Substring(4));
        }

        public override long AppendAddressTransactionId(Address address, TxId txId)
        {
            var addrFile = new FileInfo(GetAddressPath(address));
            addrFile.Directory.Create();

            using (var f = addrFile.Open(FileMode.Append, FileAccess.ReadWrite))
            {
                var offset = f.Position;
                f.Write(txId.ToByteArray(), 0, TxId.RequiredLength);
                return offset / TxId.RequiredLength;
            }
        }

        public override long AppendIndex(HashDigest<SHA256> hash)
        {
            var indexFile = new FileInfo(_indexPath);
            if (!indexFile.Directory.Exists)
            {
                indexFile.Directory.Create();
            }

            using (var f = indexFile.Open(FileMode.Append, FileAccess.ReadWrite))
            {
                var offset = f.Position;
                f.Write(hash.ToByteArray(), 0, hash.ToByteArray().Length);
                return offset / HashDigest<SHA256>.Size;
            }
        }

        public override long CountIndex()
        {
            var indexFile = new FileInfo(_indexPath);
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

                return indexSize / HashDigest<SHA256>.Size;
            }

            return 0;
        }

        public override bool DeleteBlock(HashDigest<SHA256> blockHash)
        {
            var blockPath = GetBlockPath(blockHash);
            var blockFile = new FileInfo(blockPath);
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
            var addrPath = GetAddressPath(address);
            var addrFile = new FileInfo(addrPath);
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

        public override Block<T>? GetBlock<T>(HashDigest<SHA256> blockHash)
        {
            var blockPath = GetBlockPath(blockHash);
            var blockFile = new FileInfo(blockPath);
            if (blockFile.Exists)
            {
                var blockBytes = File.ReadAllBytes(blockPath);

                // FIXME: TODO
            }

            return null;
        }

        public override Transaction<T>? GetTransaction<T>(TxId txid)
        {
            var txPath = GetTransactionPath(txid);
            try
            {
                return Transaction<T>.FromBencoded(File.ReadAllBytes(txPath));
            }
            catch (FileNotFoundException)
            {
            }

            return null;
        }

        public override HashDigest<SHA256>? IndexBlockHash(long index)
        {
            if (index < 0)
            {
                index += CountIndex();

                // Purpose? @hong
                if (index < 0)
                {
                    return null;
                }
            }

            using (var f = IndexFileStream())
            {
                var blockHash = new byte[HashDigest<SHA256>.Size];
                f.Seek(HashDigest<SHA256>.Size * index, SeekOrigin.Begin);
                var bytesRead = f.Read(blockHash, 0, HashDigest<SHA256>.Size);
                if (bytesRead == HashDigest<SHA256>.Size)
                {
                    return new HashDigest<SHA256>(blockHash);
                }
                else
                {
                    return null;
                }
            }
        }

        public override IEnumerable<Address> IterateAddresses()
        {
            var prefixRegex = new Regex(@"^[a-f0-9]{4}$", RegexOptions.IgnoreCase);
            var restRegex = new Regex(@"^[a-f0-9]{36}$", RegexOptions.IgnoreCase);
            var addressesRoot = new DirectoryInfo(_addressesPath);
            foreach (var prefix in addressesRoot.EnumerateDirectories())
            {
                if (!prefixRegex.IsMatch(prefix.Name))
                {
                    continue;
                }

                foreach (var rest in prefix.EnumerateDirectories())
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
            var restRegex = new Regex(@"^[a-f0-9]{36}$", RegexOptions.IgnoreCase);
            var addressesRoot = new DirectoryInfo(_blocksPath);
            foreach (var prefix in addressesRoot.EnumerateDirectories())
            {
                if (!prefixRegex.IsMatch(prefix.Name))
                {
                    continue;
                }

                foreach (var rest in prefix.EnumerateDirectories())
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
            using (var f = IndexFileStream())
            {
                while (true)
                {
                    var blockHash = new byte[HashDigest<SHA256>.Size];
                    var bytesRead = f.Read(blockHash, 0, HashDigest<SHA256>.Size);
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
            foreach (var prefix in transactionsRoot.EnumerateDirectories())
            {
                if (!prefixRegex.IsMatch(prefix.Name))
                {
                    continue;
                }

                foreach (var rest in prefix.EnumerateDirectories())
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
            using (var stream = blockFile.Open(FileMode.OpenOrCreate, FileAccess.Write))
            {
                var blockBytes = block.Bencode(true, transactionData: false);
                stream.Write(blockBytes, 0, blockBytes.Length);
            }
        }

        public override void PutTransaction<T>(Transaction<T> tx)
        {
            var txFile = new FileInfo(GetTransactionPath(tx.Id));
            txFile.Directory.Create();
            using (var f = txFile.Open(FileMode.OpenOrCreate, FileAccess.Write))
            {
                var txBytes = tx.Bencode(true);
                f.Write(txBytes, 0, txBytes.Length);
            }
        }

/*
        public override void SetBlockStates(HashDigest blockHash, States states)
        {
            throw new System.NotImplementedException();
        }
*/

        public override void StageTransactionIds(ISet<TxId> txids)
        {
            foreach (var txid in txids)
            {
                // TODO what if txid is null?
                var stagedPath = GetStagedTransactionPath(txid);
                var stagedFile = new FileInfo(stagedPath);
                stagedFile.Directory.Create();
                stagedFile.Create().Close();
            }
        }

        public override void UnstageTransactionIds(ISet<TxId> txids)
        {
            foreach (var txid in txids)
            {
                File.Delete(GetStagedTransactionPath(txid));
            }
        }

        private FileStream IndexFileStream()
        {
            var index = new FileStream(_indexPath, FileMode.Open, FileAccess.Read);
            if (index.Length % HashDigest<SHA256>.Size != 0)
            {
                throw new FileLoadException(
                    $"Index file size {index.Length} should be a multiple " +
                    $"of HashSize {HashDigest<SHA256>.Size}"
                );
            }

            return index;
        }
    }
}
