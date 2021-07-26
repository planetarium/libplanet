#nullable enable
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.IO;
using System.Linq;
using Cocona;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.RocksDBStore;
using Libplanet.Store;
using Libplanet.Tx;

namespace Libplanet.Extensions.Cocona.Commands
{
    public class StoreCommand
    {
        private const string StoreArgumentDescription =
            "The URI denotes the type and path of concrete class for " + nameof(IStore) + "."
            + "<store-type>://<store-path> (e.g., rocksdb:///path/to/store)";

        private readonly IImmutableDictionary<string, Func<string, IStore>>
            _storeConstructors =
                new Dictionary<string, Func<string, IStore>>
                {
                    ["default"] = storePath => new DefaultStore(storePath),
                    ["rocksdb"] = storePath => new RocksDBStore.RocksDBStore(storePath),
                    ["monorocksdb"] = storePath => new MonoRocksDBStore(storePath),
                    ["rocksdbold"] = storePath => new RocksDBStoreOld(storePath),
                }.ToImmutableSortedDictionary();

        [Command(Description = "Migrate Column Family to Prefix")]
        public void MigrateCfPrefix(
            [Argument("STORE", Description = StoreArgumentDescription)]
            string from
        )
        {
            var oldStorePath = Path.Combine(
                Path.GetTempPath(), Guid.NewGuid().ToString().Substring(0, 8));
            var uri = ParseUri(from);

            DirectoryCopy(uri.AbsolutePath, oldStorePath, true);
            IStore oldStore = LoadStoreFromUri("rocksdbold://" + oldStorePath);
            if (oldStore.ListChainIds().Count() > 1)
            {
                throw Utils.Error("Only uni-chainid supported");
            }

            var chainId = oldStore.ListChainIds().First();
            if (oldStore.GetCanonicalChainId() is { } canonId && !chainId.Equals(canonId))
            {
                throw Utils.Error("The uni-chainid should be equal to the canonical chain id");
            }

            DeleteDirectory(Path.Combine(uri.AbsolutePath, "chain"));
            IStore newStore = LoadStoreFromUri(from);
            if (newStore.ListChainIds().Any())
            {
                throw Utils.Error("Chain db should be removed");
            }

            var total = oldStore.IterateIndexes(chainId).Count();
            foreach (BlockHash blockHash in oldStore.IterateIndexes(chainId))
            {
                newStore.AppendIndex(chainId, blockHash);
                Console.WriteLine($"{newStore.CountIndex(chainId)}/{total}");
            }

            foreach (KeyValuePair<Address, long> kv in oldStore.ListTxNonces(chainId))
            {
                newStore.IncreaseTxNonce(chainId, kv.Key, kv.Value);
            }

            newStore.SetCanonicalChainId(canonId);

            (oldStore as IDisposable)?.Dispose();
            (newStore as IDisposable)?.Dispose();
            DeleteDirectory(oldStorePath);
        }

        [Command(Description = "Build an index for transaction id and block hash.")]
        public void BuildIndexTxBlock(
            [Argument("STORE", Description = StoreArgumentDescription)]
            string home,
            [Argument("OFFSET", Description = "block index")]
            int offset,
            [Argument("LIMIT", Description = "block index")]
            int limit
        )
        {
            IStore store = LoadStoreFromUri(home);
            var prev = DateTimeOffset.UtcNow;
            foreach (var index in BuildTxIdBlockHashIndex(store, offset, limit))
            {
                Console.WriteLine($"processing {index}/{offset + limit}...");
            }

            Console.WriteLine($"It taken {DateTimeOffset.UtcNow - prev}");
            (store as IDisposable)?.Dispose();
        }

        [Command(Description = "Query block hashes by transaction id.")]
        public void BlockHashesByTxId(
            [Argument("STORE", Description = StoreArgumentDescription)]
            string home,
            [Argument("TX-ID", Description = "tx id")]
            string strTxId
        )
        {
            IStore store = LoadStoreFromUri(home);
            var blockHashes = store.IterateTxIdBlockHashIndex(new TxId(ByteUtil.ParseHex(strTxId)))
                .ToImmutableArray();
            Console.WriteLine(Utils.SerializeHumanReadable(blockHashes));
            (store as IDisposable)?.Dispose();
        }

        [Command(Description = "Query a list of blocks by transaction id.")]
        public void BlocksByTxId(
            [Argument("STORE", Description = StoreArgumentDescription)]
            string home,
            [Argument("TX-ID", Description = "tx id")]
            string strTxId
        )
        {
            IStore store = LoadStoreFromUri(home);
            var txId = new TxId(ByteUtil.ParseHex(strTxId));
            if (!(store.GetFirstTxIdBlockHashIndex(txId) is { } ))
            {
                throw Utils.Error($"cannot find the block with the TxId[{txId.ToString()}]");
            }

            var blocks = IterateBlocks<Utils.DummyAction>(store, txId).ToImmutableList();

            Console.WriteLine(Utils.SerializeHumanReadable(blocks));

            (store as IDisposable)?.Dispose();
        }

        [Command(Description = "Query a block by index.")]
        public void BlockByIndex(
            [Argument("STORE", Description = StoreArgumentDescription)]
            string home,
            [Argument("BLOCK-INDEX", Description = "block index")]
            int blockIndex
        )
        {
            IStore store = LoadStoreFromUri(home);
            var blockHash = GetBlockHash(store, blockIndex);
            var block = GetBlock<Utils.DummyAction>(store, blockHash);
            Console.WriteLine(Utils.SerializeHumanReadable(block));
            (store as IDisposable)?.Dispose();
        }

        [Command(Description = "Query a block by hash.")]
        public void BlockByHash(
            [Argument("STORE", Description = StoreArgumentDescription)]
            string home,
            [Argument("BLOCK-HASH", Description = "block hash")]
            string blockHash
        )
        {
            IStore store = LoadStoreFromUri(home);
            var block = GetBlock<Utils.DummyAction>(store, BlockHash.FromString(blockHash));
            Console.WriteLine(Utils.SerializeHumanReadable(block));
            (store as IDisposable)?.Dispose();
        }

        [Command(Description = "Query a transaction by tx id.")]
        public void TxById(
            [Argument("STORE", Description = StoreArgumentDescription)]
            string home,
            [Argument("TX-ID", Description = "tx id")]
            string strTxId
        )
        {
            IStore store = LoadStoreFromUri(home);
            var tx = GetTransaction<Utils.DummyAction>(store, new TxId(ByteUtil.ParseHex(strTxId)));
            Console.WriteLine(Utils.SerializeHumanReadable(tx));
            (store as IDisposable)?.Dispose();
        }

        private static void DeleteDirectory(string targetDir)
        {
            string[] files = Directory.GetFiles(targetDir);
            string[] dirs = Directory.GetDirectories(targetDir);

            foreach (string file in files)
            {
                File.SetAttributes(file, FileAttributes.Normal);
                File.Delete(file);
            }

            foreach (string dir in dirs)
            {
                DeleteDirectory(dir);
            }

            Directory.Delete(targetDir, false);
        }

        private static void DirectoryCopy(
            string sourceDirName, string destDirName, bool copySubDirs)
        {
            // Get the subdirectories for the specified directory.
            DirectoryInfo dir = new DirectoryInfo(sourceDirName);

            if (!dir.Exists)
            {
                throw new DirectoryNotFoundException(
                    "Source directory does not exist or could not be found: "
                    + sourceDirName);
            }

            DirectoryInfo[] dirs = dir.GetDirectories();

            // If the destination directory doesn't exist, create it.
            Directory.CreateDirectory(destDirName);

            // Get the files in the directory and copy them to the new location.
            FileInfo[] files = dir.GetFiles();
            foreach (FileInfo file in files)
            {
                string tempPath = Path.Combine(destDirName, file.Name);
                file.CopyTo(tempPath, false);
            }

            // If copying subdirectories, copy them and their contents to new location.
            if (copySubDirs)
            {
                foreach (DirectoryInfo subdir in dirs)
                {
                    string tempPath = Path.Combine(destDirName, subdir.Name);
                    DirectoryCopy(subdir.FullName, tempPath, copySubDirs);
                }
            }
        }

        private static Block<T> GetBlock<T>(IStore store, BlockHash blockHash)
            where T : IAction, new()
        {
            if (!(store.GetBlock<T>(blockHash) is { } block))
            {
                throw Utils.Error($"cannot find the block with the hash[{blockHash.ToString()}]");
            }

            return block;
        }

        private static BlockHash GetBlockHash(IStore store, int blockIndex)
        {
            if (!(store.GetCanonicalChainId() is { } chainId))
            {
                throw Utils.Error("Cannot find the main branch of the blockchain.");
            }

            if (!(store.IndexBlockHash(chainId, blockIndex) is { } blockHash))
            {
                throw Utils.Error(
                    $"Cannot find the block with the height {blockIndex}" +
                    $" within the blockchain {chainId}."
                );
            }

            return blockHash;
        }

        private static IEnumerable<Block<T>> IterateBlocks<T>(IStore store, TxId txId)
            where T : IAction, new()
        {
            foreach (var blockHash in store.IterateTxIdBlockHashIndex(txId))
            {
                yield return GetBlock<T>(store, blockHash);
            }
        }

        private static Transaction<T> GetTransaction<T>(IStore store, TxId txId)
            where T : IAction, new()
        {
            if (!(store.GetTransaction<T>(txId) is { } tx))
            {
                throw Utils.Error($"cannot find the tx with the tx id[{txId.ToString()}]");
            }

            return tx;
        }

        private static IEnumerable<int> BuildTxIdBlockHashIndex(IStore store, int offset, int limit)
        {
            if (!(store.GetCanonicalChainId() is { } chainId))
            {
                throw Utils.Error("Cannot find the main branch of the blockchain.");
            }

            var index = offset;
            foreach (BlockHash blockHash in store.IterateIndexes(chainId, offset, limit))
            {
                yield return index++;
                if (!(store.GetBlockDigest(blockHash) is { } blockDigest))
                {
                    throw Utils.Error(
                        $"Block is missing for BlockHash: {blockHash} index: {index}.");
                }

                foreach (TxId txId in blockDigest.TxIds.Select(bytes => new TxId(bytes.ToArray())))
                {
                    store.PutTxIdBlockHashIndex(txId, blockHash);
                }
            }
        }

        private IStore LoadStoreFromUri(string rawUri)
        {
            Uri uri = ParseUri(rawUri);
            var scheme = uri.Scheme;
            var splitScheme = scheme.Split('+');
            if (!_storeConstructors.TryGetValue(
                splitScheme[0],
                out var constructor))
            {
                throw new NotSupportedException(
                    $"No store backend supports the such scheme: {splitScheme[0]}.");
            }

            return constructor(uri.AbsolutePath);
        }

        private Uri ParseUri(string rawUri)
        {
            var uri = new Uri(rawUri);
            var scheme = uri.Scheme;
            var splitScheme = scheme.Split('+');
            if (splitScheme.Length <= 0 || splitScheme.Length > 2)
            {
                const string? exceptionMessage = "A key-value store URI must have a scheme, " +
                                                 "e.g., default://, rocksdb+file://.";
                throw new ArgumentException(exceptionMessage, nameof(rawUri));
            }

            // NOTE: Actually, there is only File scheme support and it will work to check only.
            if (splitScheme.Length == 2
                && !Enum.TryParse<SchemeType>(splitScheme[1], ignoreCase: true, out _))
            {
                throw new NotSupportedException(
                    $"No store backend supports the such scheme: {splitScheme[1]}.");
            }

            return uri;
        }
    }
}
