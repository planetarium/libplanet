#nullable enable
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
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
                }.ToImmutableSortedDictionary();

        [Command(Description = "Query a block by index")]
        public void BlockByIndex(
            [Argument("STORE", Description = StoreArgumentDescription)]
            string home,
            [Argument("BLOCK-INDEX", Description = "block index")]
            int blockIndex
        )
        {
            var store = LoadStoreFromUri(home);
            var blockHash = GetBlockHash(store, blockIndex);
            var block = GetBlock<Utils.DummyAction>(store, blockHash);
            Console.WriteLine(Utils.SerializeHumanReadable(block));
        }

        [Command(Description = "Query a block by hash")]
        public void BlockByHash(
            [Argument("STORE", Description = StoreArgumentDescription)]
            string home,
            [Argument("BLOCK-HASH", Description = "block hash")]
            string blockHash
        )
        {
            var store = LoadStoreFromUri(home);
            var block = GetBlock<Utils.DummyAction>(store, BlockHash.FromString(blockHash));
            Console.WriteLine(Utils.SerializeHumanReadable(block));
        }

        [Command(Description = "Query a transaction by tx id")]
        public void TxById(
            [Argument("STORE", Description = StoreArgumentDescription)]
            string home,
            [Argument("TX-ID", Description = "tx id")]
            string strTxId
        )
        {
            var store = LoadStoreFromUri(home);
            var tx = GetTransaction<Utils.DummyAction>(store, new TxId(ByteUtil.ParseHex(strTxId)));
            Console.WriteLine(Utils.SerializeHumanReadable(tx));
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

        private static Transaction<T> GetTransaction<T>(IStore store, TxId txId)
            where T : IAction, new()
        {
            if (!(store.GetTransaction<T>(txId) is { } tx))
            {
                throw Utils.Error($"cannot find the tx with the tx id[{txId.ToString()}]");
            }

            return tx;
        }

        private IStore LoadStoreFromUri(string rawUri)
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
