using System;
using System.Collections;
using System.Collections.Async;
using System.Collections.Generic;
using System.Diagnostics;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Runtime.Serialization.Formatters.Binary;
using System.Security.Cryptography;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Serialization;
using Libplanet.Tx;
using Uno.Extensions;

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

        public override async Task<long> AppendAddressTransactionId(
            Address address, TxId txId)
        {
            var addrFile = new FileInfo(GetAddressPath(address));
            addrFile.Directory.Create();

            using (Stream stream = addrFile.Open(
                FileMode.Append, FileAccess.Write))
            {
                var offset = stream.Position;
                await stream.WriteAsync(
                    txId.ToByteArray(), 0, TxId.RequiredLength
                );
                return Convert.ToInt64(offset / (float)TxId.RequiredLength);
            }
        }

        public override async Task<long> AppendIndex(HashDigest<SHA256> hash)
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
                await stream.WriteAsync(
                    hash.ToByteArray(), 0, hash.ToByteArray().Length
                );
                return offset / HashDigest<SHA256>.Size;
            }
        }

        public override async Task<bool> DeleteIndex(HashDigest<SHA256> hash)
        {
            bool found = false;
            using (var writer = new MemoryStream())
            {
                foreach (var idx in await this.IterateIndex().ToListAsync())
                {
                    if (!found && idx == hash)
                    {
                        found = true;
                    }
                    else
                    {
                        await writer.WriteAsync(
                            idx.ToByteArray(), 0, HashDigest<SHA256>.Size);
                    }
                }

                // FIXME We can't this if the index is too large to buffer...
                using (var file = IndexFileStream())
                {
                    await writer.CopyToAsync(file);
                }
            }

            return found;
        }

        public override async Task<long> CountIndex()
        {
            await Task.CompletedTask;
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

            return 0L;
        }

        public override async Task<bool> DeleteBlock(
            HashDigest<SHA256> blockHash)
        {
            await Task.CompletedTask;
            var blockFile = new FileInfo(GetBlockPath(blockHash));
            if (blockFile.Exists)
            {
                blockFile.Delete();
                return true;
            }

            return false;
        }

        public override async Task<bool> DeleteTransaction(TxId txid)
        {
            await Task.CompletedTask;
            var txFile = new FileInfo(GetTransactionPath(txid));
            if (!txFile.Exists)
            {
                return false;
            }

            txFile.Delete();
            return true;
        }

        public override IAsyncEnumerable<TxId> GetAddressTransactionIds(
            Address address
        )
        {
            return new AsyncEnumerable<TxId>(async yield =>
            {
                var addrFile = new FileInfo(GetAddressPath(address));
                if (addrFile.Exists)
                {
                    using (var f = addrFile.OpenRead())
                    {
                        while (true)
                        {
                            var txIdBytes = new byte[TxId.RequiredLength];
                            var length = await f.ReadAsync(
                                txIdBytes, 0, TxId.RequiredLength
                            );
                            if (length == 0)
                            {
                                break;
                            }

                            await yield.ReturnAsync(new TxId(txIdBytes));
                        }
                    }
                }
            });
        }

        public override async Task<Block<T>> GetBlock<T>(
            HashDigest<SHA256> blockHash)
        {
            var blockFile = new FileInfo(GetBlockPath(blockHash));
            if (!blockFile.Exists)
            {
                return null;
            }

            RawBlock rawBlock = await Task.Run(() =>
            {
                using (Stream stream = blockFile.OpenRead())
                {
                    var formatter = new BencodexFormatter<RawBlock>();
                    return (RawBlock)formatter.Deserialize(stream);
                }
            });

            HashDigest<SHA256>? previousHash = null;

            if (rawBlock.PreviousHash != null)
            {
                previousHash = new HashDigest<SHA256>(rawBlock.PreviousHash);
            }

            List<Transaction<T>> transactions =
                await GetTransactions<T>(rawBlock.Transactions).ToListAsync();
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
                transactions: transactions
            );
        }

        public override async Task<Transaction<T>> GetTransaction<T>(TxId txid)
        {
            var txFile = new FileInfo(GetTransactionPath(txid));
            if (!txFile.Exists)
            {
                return null;
            }

            return await Task.Run(() =>
            {
                using (Stream stream = txFile.OpenRead())
                {
                    var formatter = new BencodexFormatter<Transaction<T>>();
                    return (Transaction<T>)formatter.Deserialize(stream);
                }
            });
        }

        public override async Task<HashDigest<SHA256>?> IndexBlockHash(
            long index)
        {
            if (index < 0)
            {
                index += await CountIndex();

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
                stream.Seek(
                    HashDigest<SHA256>.Size * (int)index,
                    SeekOrigin.Begin
                );
                var bytesRead = await stream.ReadAsync(
                    blockHash,
                    0,
                    HashDigest<SHA256>.Size
                );
                Trace.Assert(bytesRead == HashDigest<SHA256>.Size);

                return new HashDigest<SHA256>(blockHash);
            }
        }

        public override IAsyncEnumerable<Address> IterateAddresses()
        {
            return new AsyncEnumerable<Address>(async yield =>
            {
                var prefixRegex = new Regex(
                    @"^[a-f0-9]{4}$",
                    RegexOptions.IgnoreCase
                );
                var restRegex = new Regex(
                    @"^[a-f0-9]{36}$",
                    RegexOptions.IgnoreCase
                );
                var addressesRoot = new DirectoryInfo(_addressesPath);
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

                        await yield.ReturnAsync(
                            new Address(prefix.Name + rest.Name));
                    }
                }
            });
        }

        public override IAsyncEnumerable<HashDigest<SHA256>>
            IterateBlockHashes()
        {
            return new AsyncEnumerable<HashDigest<SHA256>>(async yield =>
            {
                var prefixRegex = new Regex(
                    @"^[a-f0-9]{4}$",
                    RegexOptions.IgnoreCase
                );
                var restRegex = new Regex(
                    @"^[a-f0-9]{60}$",
                    RegexOptions.IgnoreCase
                );
                var addressesRoot = new DirectoryInfo(_blocksPath);
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

                        await yield.ReturnAsync(new HashDigest<SHA256>(
                            ByteUtil.ParseHex(prefix.Name + rest.Name)
                        ));
                    }
                }
            });
        }

        public override IAsyncEnumerable<HashDigest<SHA256>> IterateIndex()
        {
            return new AsyncEnumerable<HashDigest<SHA256>>(async yield =>
            {
                if (!File.Exists(_indexPath))
                {
                    yield.Break();
                }

                using (Stream stream = IndexFileStream())
                {
                    while (true)
                    {
                        var blockHash = new byte[HashDigest<SHA256>.Size];
                        var bytesRead = await stream.ReadAsync(
                            blockHash,
                            0,
                            HashDigest<SHA256>.Size
                        );

                        if (bytesRead == 0)
                        {
                            yield.Break();
                        }

                        await yield.ReturnAsync(
                            new HashDigest<SHA256>(blockHash));
                    }
                }
            });
        }

        public override IAsyncEnumerable<TxId> IterateStagedTransactionIds()
        {
            return new AsyncEnumerable<TxId>(async yield =>
            {
                var stagingDirectory =
                    new DirectoryInfo(_stagedTransactionsPath);
                if (stagingDirectory.Exists)
                {
                    var dir = new DirectoryInfo(_stagedTransactionsPath);
                    foreach (var staged in dir.EnumerateFiles())
                    {
                        await yield.ReturnAsync(
                            new TxId(ByteUtil.ParseHex(staged.Name)));
                    }
                }
            });
        }

        public override IAsyncEnumerable<TxId> IterateTransactionIds()
        {
            return new AsyncEnumerable<TxId>(async yield =>
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
                var rootDir = new DirectoryInfo(_transactionsPath);
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

                        await yield.ReturnAsync(new TxId(
                            ByteUtil.ParseHex(prefix.Name + rest.Name)
                        ));
                    }
                }
            });
        }

        public override async Task PutBlock<T>(Block<T> block)
        {
            await Task.WhenAll(block.Transactions.Select(PutTransaction));

            var blockFile = new FileInfo(GetBlockPath(block.Hash));
            blockFile.Directory.Create();
            using (Stream stream = blockFile.Open(
                FileMode.OpenOrCreate, FileAccess.Write))
            {
                byte[] blockBytes = block.ToBencodex(
                    true,
                    transactionData: false
                );
                await stream.WriteAsync(blockBytes, 0, blockBytes.Length);
            }
        }

        public override async Task PutTransaction<T>(Transaction<T> tx)
        {
            var txFile = new FileInfo(GetTransactionPath(tx.Id));
            txFile.Directory.Create();
            using (Stream stream = txFile.Open(
                FileMode.OpenOrCreate, FileAccess.Write))
            {
                byte[] txBytes = tx.ToBencodex(true);
                await stream.WriteAsync(txBytes, 0, txBytes.Length);
            }
        }

        public override async Task StageTransactionIds(ISet<TxId> txids)
        {
            await Task.CompletedTask;
            foreach (var txid in txids)
            {
                string stagedPath = GetStagedTransactionPath(txid);
                var stagedFile = new FileInfo(stagedPath);
                stagedFile.Directory.Create();
                stagedFile.Create().Close();
            }
        }

        public override async Task UnstageTransactionIds(ISet<TxId> txids)
        {
            await Task.CompletedTask;
            foreach (TxId txid in txids)
            {
                File.Delete(GetStagedTransactionPath(txid));
            }
        }

        public override async Task<AddressStateMap> GetBlockStates(
            HashDigest<SHA256> blockHash
        )
        {
            var statesFile = new FileInfo(GetStatesPath(blockHash));
            if (!statesFile.Exists)
            {
                return new AddressStateMap();
            }

            return await Task.Run(() =>
            {
                using (Stream stream = statesFile.OpenRead())
                {
                    var formatter = new BinaryFormatter();
                    return (AddressStateMap)formatter.Deserialize(stream);
                }
            });
        }

        public override async Task SetBlockStates(
            HashDigest<SHA256> blockHash,
            AddressStateMap states
        )
        {
            var statesFile = new FileInfo(GetStatesPath(blockHash));
            if (!statesFile.Directory.Exists)
            {
                statesFile.Directory.Create();
            }

            await Task.Run(() =>
            {
                using (Stream stream = statesFile.OpenWrite())
                {
                    var formatter = new BinaryFormatter();
                    formatter.Serialize(stream, states);
                }
            });
        }

        private FileStream IndexFileStream()
        {
            var stream =
                new FileStream(_indexPath, FileMode.Open, FileAccess.Read);
            if (stream.Length % HashDigest<SHA256>.Size != 0)
            {
                throw new FileLoadException(
                    $"Index file size {stream.Length} should be a multiple " +
                    $"of HashSize {HashDigest<SHA256>.Size}"
                );
            }

            return stream;
        }

        private IAsyncEnumerable<Transaction<T>> GetTransactions<T>(
            IEnumerable transactions
        )
            where T : IAction
        {
            return new AsyncEnumerable<Transaction<T>>(async yield =>
            {
                var txs = await Task.WhenAll(
                    transactions
                        .Cast<byte[]>()
                        .Select(bytes => GetTransaction<T>(new TxId(bytes)))
                );
                await Task.WhenAll(
                    txs.Where(tx => tx != null).Select(yield.ReturnAsync)
                );
            });
        }
    }
}
