using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.Immutable;
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
        private const string _statesDir = "states";
        private const string _indicesDir = "indices";
        private const string _stateReferenceDir = "stateref";
        private const string _txNonceDir = "txnonce";

        private static readonly string[] BuiltinDirs =
        {
            _blocksDir,
            _transactionsDir,
            _stagedTransactionsDir,
            _statesDir,
            _indicesDir,
            _stateReferenceDir,
            _txNonceDir,
        };

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

            foreach (string dir in BuiltinDirs)
            {
                Directory.CreateDirectory(Path.Combine(_path, dir));
            }
        }

        public string GetTransactionPath(TxId txid)
        {
            var txidHex = txid.ToString();
            return Path.Combine(
                GetTransactionPath(),
                txidHex.Substring(0, 4),
                txidHex.Substring(4));
        }

        public string GetTransactionPath()
        {
            return Path.Combine(
                _path,
                _transactionsDir);
        }

        public string GetBlockPath(HashDigest<SHA256> blockHash)
        {
            var keyHex = blockHash.ToString();
            return Path.Combine(
                GetBlockPath(),
                keyHex.Substring(0, 4),
                keyHex.Substring(4));
        }

        public string GetBlockPath()
        {
            return Path.Combine(
                _path,
                _blocksDir);
        }

        public string GetStagedTransactionPath(TxId txid)
        {
            return Path.Combine(
                GetStagedTransactionPath(),
                txid.ToString()
            );
        }

        public string GetStagedTransactionPath()
        {
            return Path.Combine(
                _path,
                _stagedTransactionsDir);
        }

        public string GetStatesPath(HashDigest<SHA256> key)
        {
            var keyHex = key.ToString();
            return Path.Combine(
                GetStatesPath(),
                keyHex.Substring(0, 4),
                keyHex.Substring(4));
        }

        public string GetStatesPath()
        {
            return Path.Combine(
                _path,
                _statesDir);
        }

        public string GetIndexPath(string @namespace)
        {
            return Path.Combine(
                _path,
                _indicesDir,
                @namespace
            );
        }

        public string GetStateReferencePath(string @namespace)
        {
            return Path.Combine(
                _path,
                _stateReferenceDir,
                @namespace);
        }

        public string GetStateReferencePath(
            string @namespace,
            Address address)
        {
            string addressHex = address.ToHex();
            return Path.Combine(
                GetStateReferencePath(@namespace),
                addressHex.Substring(0, 4),
                addressHex.Substring(4));
        }

        public string GetTxNoncePath(string @namespace)
        {
            return Path.Combine(
                _path,
                _txNonceDir,
                @namespace);
        }

        public string GetTxNoncePath(
            string @namespace,
            Address address)
        {
            string addressHex = address.ToHex();
            return Path.Combine(
                GetTxNoncePath(@namespace),
                addressHex.Substring(0, 4),
                addressHex.Substring(4));
        }

        /// <inheritdoc/>
        public override IEnumerable<string> ListNamespaces()
        {
            var indicesPath =
                new DirectoryInfo(Path.Combine(_path, _indicesDir));
            foreach (FileInfo p in indicesPath.EnumerateFiles())
            {
                yield return p.Name;
            }
        }

        public override long AppendIndex(
            string @namespace,
            HashDigest<SHA256> hash
        )
        {
            var indexFile = new FileInfo(GetIndexPath(@namespace));

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
                    if (!found && idx.Equals(hash))
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

        public override long CountIndex(string @namespace)
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

                return indexSize / HashDigest<SHA256>.Size;
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

        public override IEnumerable<HashDigest<SHA256>> IterateBlockHashes()
        {
            var prefixRegex = new Regex(
                @"^[a-f0-9]{4}$",
                RegexOptions.IgnoreCase
            );
            var restRegex = new Regex(
                @"^[a-f0-9]{60}$",
                RegexOptions.IgnoreCase
            );
            var rootDir = new DirectoryInfo(GetBlockPath());
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

        public override IEnumerable<TxId> IterateStagedTransactionIds()
        {
            string stagedTxPath = GetStagedTransactionPath();
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

        public override IEnumerable<TxId> IterateTransactionIds()
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
            var rootDir = new DirectoryInfo(GetTransactionPath());
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

        /// <inheritdoc />
        public override void PutBlock<T>(Block<T> block)
        {
            foreach (var tx in block.Transactions)
            {
                PutTransaction(tx);
            }

            var blockFile = new FileInfo(GetBlockPath(block.Hash));
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

        public override void PutTransaction<T>(Transaction<T> tx)
        {
            var txFile = new FileInfo(GetTransactionPath(tx.Id));
            txFile.Directory.Create();
            using (Stream stream = txFile.Open(
                FileMode.OpenOrCreate, FileAccess.Write))
            {
                byte[] txBytes = tx.ToBencodex(true);
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

        public override AddressStateMap GetBlockStates(
            HashDigest<SHA256> blockHash
        )
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

        public override void SetBlockStates(
            HashDigest<SHA256> blockHash,
            AddressStateMap states
        )
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

        /// <inheritdoc/>
        public override HashDigest<SHA256>? LookupStateReference<T>(
            string @namespace,
            Address address,
            Block<T> lookupUntil)
        {
            var addrFile = new FileInfo(
                GetStateReferencePath(@namespace, address));
            long lookupUntilIndex = lookupUntil.Index;

            if (!addrFile.Exists || addrFile.Length == 0)
            {
                return null;
            }

            using (Stream stream = addrFile.OpenRead())
            {
                int stateReferenceSize = HashDigest<SHA256>.Size + sizeof(long);

                if (stream.Length % stateReferenceSize != 0)
                {
                    throw new FileLoadException(
                        $"State reference file size {stream.Length} " +
                        "should be multiple of state reference entry size " +
                        $"{stateReferenceSize}");
                }

                foreach (
                    var (hashBytes, index)
                    in GetStateReferences(stream))
                {
                    if (index <= lookupUntilIndex)
                    {
                        return new HashDigest<SHA256>(hashBytes);
                    }
                }
            }

            return null;
        }

        /// <inheritdoc/>
        public override void StoreStateReference<T>(
            string @namespace,
            IImmutableSet<Address> addresses,
            Block<T> block)
        {
            HashDigest<SHA256> blockHash = block.Hash;
            long blockIndex = block.Index;
            int hashSize = HashDigest<SHA256>.Size;

            foreach (Address address in addresses)
            {
                var stateReferenceFile = new FileInfo(
                    GetStateReferencePath(@namespace, address));

                if (!stateReferenceFile.Directory.Exists)
                {
                    stateReferenceFile.Directory.Create();
                }

                using (Stream stream = stateReferenceFile.Open(
                    FileMode.Append, FileAccess.Write))
                {
                    stream.Write(blockHash.ToByteArray(), 0, hashSize);
                    stream.Write(
                        BitConverter.GetBytes(blockIndex), 0, sizeof(long));
                }
            }
        }

        /// <inheritdoc/>
        public override void ForkStateReferences<T>(
            string sourceNamespace,
            string destinationNamespace,
            Block<T> branchPoint,
            IImmutableSet<Address> addressesToStrip)
        {
            ForkIndexedStack(
                sourceNamespace,
                destinationNamespace,
                branchPoint.Index,
                addressesToStrip,
                GetStateReferencePath,
                GetStateReferencePath,
                s => GetStateReferences(s).Select(t => t.Item2));
        }

        /// <inheritdoc/>
        public override long GetTxNonce(string @namespace, Address address)
        {
            var nonceFile = new FileInfo(
                GetTxNoncePath(@namespace, address));

            if (!nonceFile.Exists || nonceFile.Length == 0)
            {
                return 0;
            }

            int hashSize = HashDigest<SHA256>.Size;
            int blockIndexSize = sizeof(long);
            int nonceSize = sizeof(long);
            int nonceEntrySize = hashSize + blockIndexSize + nonceSize;

            using (Stream stream = nonceFile.OpenRead())
            {
                if (stream.Length % nonceEntrySize != 0)
                {
                    throw new FileLoadException(
                        $"Nonce file size {stream.Length} should be " +
                        $"a multiple of nonce entry size {nonceEntrySize}");
                }

                var buffer = new byte[nonceEntrySize];

                stream.Seek(-buffer.Length, SeekOrigin.End);
                stream.Read(buffer, 0, buffer.Length);

                return BitConverter.ToInt64(buffer, hashSize + blockIndexSize);
            }
        }

        /// <inheritdoc/>
        public override void IncreaseTxNonce<T>(
            string @namespace,
            Block<T> block)
        {
            IEnumerable<Address> signers = block
                .Transactions
                .Select(tx => tx.Signer);
            int hashSize = HashDigest<SHA256>.Size;
            long blockIndex = block.Index;

            foreach (Address signer in signers)
            {
                long nextNonce = GetTxNonce(@namespace, signer) + 1;
                var nonceFile = new FileInfo(
                    GetTxNoncePath(@namespace, signer));

                if (!nonceFile.Directory.Exists)
                {
                    nonceFile.Directory.Create();
                }

                using (Stream stream = nonceFile.Open(
                    FileMode.Append, FileAccess.Write))
                {
                    stream.Write(block.Hash.ToByteArray(), 0, hashSize);
                    stream.Write(
                        BitConverter.GetBytes(blockIndex), 0, sizeof(long));
                    stream.Write(
                        BitConverter.GetBytes(nextNonce), 0, sizeof(long));
                }
            }
        }

        /// <inheritdoc/>
        public override void ForkTxNonce<T>(
            string sourceNamespace,
            string destinationNamespace,
            Block<T> branchPoint,
            IImmutableSet<Address> addressesToStrip)
        {
            ForkIndexedStack(
                sourceNamespace,
                destinationNamespace,
                branchPoint.Index,
                addressesToStrip,
                GetTxNoncePath,
                GetTxNoncePath,
                s => GetTxNonces(s).Select(t => t.Item2));
        }

        private void ForkIndexedStack(
            string sourceNamespace,
            string destinationNamespace,
            long branchPointIndex,
            IImmutableSet<Address> addressesToStrip,
            Func<string, string> getPath,
            Func<string, Address, string> getAddressPath,
            Func<Stream, IEnumerable<long>> getIndexedStack)
        {
            string sourceDir = getPath(sourceNamespace);
            string targetDir = getPath(destinationNamespace);
            bool copied = CopyDirectory(sourceDir, targetDir);

            if (!copied && addressesToStrip.Any())
            {
                throw new NamespaceNotFoundException(
                    sourceNamespace,
                    "The source namespace to be forked does not exist.");
            }

            foreach (Address address in addressesToStrip)
            {
                StripIndexedStack(
                    getAddressPath(destinationNamespace, address),
                    branchPointIndex,
                    getIndexedStack);
            }
        }

        private void StripIndexedStack(
            string path,
            long stripAfter,
            Func<Stream, IEnumerable<long>> getIndexedStack)
        {
            var file = new FileInfo(path);

            if (!file.Exists)
            {
                return;
            }

            using (Stream stream = file.Open(
                FileMode.Open, FileAccess.ReadWrite))
            {
                foreach (long index in getIndexedStack(stream))
                {
                    if (index <= stripAfter)
                    {
                        break;
                    }
                }

                stream.SetLength(stream.Position);
            }
        }

        private IEnumerable<(byte[], long)> GetStateReferences(Stream stream)
        {
            int hashSize = HashDigest<SHA256>.Size;
            int blockInfoSize = hashSize + sizeof(long);
            var buffer = new byte[blockInfoSize];

            long position = stream.Seek(0, SeekOrigin.End);

            for (var i = 1; position - buffer.Length >= 0; i++)
            {
                position = stream.Seek(
                    -buffer.Length * i, SeekOrigin.End);
                stream.Read(buffer, 0, buffer.Length);
                byte[] hashBytes = buffer.Take(hashSize).ToArray();
                long index = BitConverter.ToInt64(buffer, hashSize);

                yield return (hashBytes, index);
            }

            stream.Seek(position, SeekOrigin.Begin);
        }

        private IEnumerable<(byte[], long, long)> GetTxNonces(Stream stream)
        {
            int hashSize = HashDigest<SHA256>.Size;
            int blockIndexSize = sizeof(long);
            int nonceSize = sizeof(long);
            int nonceEntrySize = hashSize + blockIndexSize + nonceSize;
            var buffer = new byte[nonceEntrySize];

            long position = stream.Seek(0, SeekOrigin.End);

            for (var i = 1; position - buffer.Length >= 0; i++)
            {
                position = stream.Seek(
                    -buffer.Length * i, SeekOrigin.End);
                stream.Read(buffer, 0, buffer.Length);
                byte[] hashBytes = buffer.Take(hashSize).ToArray();
                long index = BitConverter.ToInt64(buffer, hashSize);
                long nonce = BitConverter.ToInt64(
                    buffer, hashSize + blockIndexSize);

                yield return (hashBytes, index, nonce);
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
            IEnumerable transactions
        )
            where T : IAction, new()
        {
            return transactions
                .Cast<byte[]>()
                .Select(bytes => GetTransaction<T>(new TxId(bytes)))
                .Where(tx => tx != null);
        }

        private bool CopyDirectory(
            string sourceDirName,
            string destDirName)
        {
            var dir = new DirectoryInfo(sourceDirName);

            if (!dir.Exists)
            {
                return false;
            }

            if (!Directory.Exists(destDirName))
            {
                Directory.CreateDirectory(destDirName);
            }

            FileInfo[] files = dir.GetFiles();
            foreach (FileInfo file in files)
            {
                string temppath = Path.Combine(destDirName, file.Name);
                file.CopyTo(temppath, false);
            }

            DirectoryInfo[] dirs = dir.GetDirectories();
            foreach (DirectoryInfo subdir in dirs)
            {
                string temppath = Path.Combine(destDirName, subdir.Name);
                CopyDirectory(subdir.FullName, temppath);
            }

            return true;
        }
    }
}
