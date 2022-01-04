#nullable enable
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Security.Cryptography;
using Cocona;
using Libplanet.Action;
using Libplanet.Blocks;
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
                }.ToImmutableSortedDictionary();

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
            store?.Dispose();
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
            store?.Dispose();
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

            store?.Dispose();
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
            store?.Dispose();
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
            store?.Dispose();
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
            store?.Dispose();
        }

        [Command]
        public void MigrateIndex(string storePath)
        {
            RocksDBStore.RocksDBStore.MigrateChainDBFromColumnFamilies(storePath);
        }

        private static Block<T> GetBlock<T>(IStore store, BlockHash blockHash)
            where T : IAction, new()
        {
            HashAlgorithmGetter thunkGetter = _ => HashAlgorithmType.Of<SHA256>();
            if (!(store.GetBlock<T>(thunkGetter, blockHash) is { } block))
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
            // FIXME: This method basically does the same thing to StatsCommand.LoadStoreFromUri()
            // method and Libplanet.Explorer.Executable's Program.LoadStore() method.
            // The duplicate code should be extract to a shared common method.
            // https://github.com/planetarium/libplanet/issues/1573
            var uri = new Uri(rawUri);
            var scheme = uri.Scheme;
            var splitScheme = scheme.Split('+');
            if (splitScheme.Length <= 0 || splitScheme.Length > 2)
            {
                const string? exceptionMessage = "A key-value store URI must have a scheme, " +
                                                 "e.g., default://, rocksdb+file://.";
                throw new ArgumentException(exceptionMessage, nameof(rawUri));
            }

            if (!_storeConstructors.TryGetValue(
                splitScheme[0],
                out var constructor))
            {
                throw new NotSupportedException(
                    $"No store backend supports the such scheme: {splitScheme[0]}.");
            }

            // NOTE: Actually, there is only File scheme support and it will work to check only.
            if (splitScheme.Length == 2
                && !Enum.TryParse<SchemeType>(splitScheme[1], ignoreCase: true, out _))
            {
                throw new NotSupportedException(
                    $"No store backend supports the such scheme: {splitScheme[1]}.");
            }

            return constructor(uri.AbsolutePath);
        }
    }
}
