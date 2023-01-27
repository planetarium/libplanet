namespace Libplanet.Extensions.Cocona.Commands;

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Globalization;
using System.Linq;
using global::Cocona;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Store;
using Libplanet.Tx;

public class StoreCommand
{
    private const string StoreArgumentDescription =
        "The URI denotes the type and path of concrete class for " + nameof(IStore) + "."
        + "<store-type>://<store-path> (e.g., rocksdb+file:///path/to/store)";

    [Command(Description = "List all chain IDs.")]
    public void ChainIds(
        [Argument("STORE", Description = StoreArgumentDescription)]
        string storeUri,
        [Option("hash", Description = "Show the hash of the chain tip.")]
        bool showHash
    )
    {
        IStore store = Utils.LoadStoreFromUri(storeUri);
        Guid? canon = store.GetCanonicalChainId();
        var headerWithoutHash = ("Chain ID", "Height", "Canon?");
        var headerWithHash = ("Chain ID", "Height", "Canon?", "Hash");
        var chainIds = store.ListChainIds().Select(id =>
        {
            var height = store.CountIndex(id) - 1;
            return (
                id.ToString(),
                height.ToString(CultureInfo.InvariantCulture),
                id == canon ? "*" : string.Empty,
                store.GetBlockDigest(
                    store.IndexBlockHash(id, height)!.Value)!.Value.Hash.ToString());
        });
        if (showHash)
        {
            Utils.PrintTable(headerWithHash, chainIds);
        }
        else
        {
            Utils.PrintTable(
                headerWithoutHash, chainIds.Select(i => (i.Item1, i.Item2, i.Item3)));
        }
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
        IStore store = Utils.LoadStoreFromUri(home);
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
        IStore store = Utils.LoadStoreFromUri(home);
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
        using IStore store = Utils.LoadStoreFromUri(home);
        var txId = TxId.FromHex(strTxId);
        if (!(store.GetFirstTxIdBlockHashIndex(txId) is { } ))
        {
            throw Utils.Error($"cannot find the block with the TxId[{txId.ToString()}]");
        }

        var blocks = IterateBlocks<Utils.DummyAction>(store, txId).ToImmutableList();

        Console.WriteLine(Utils.SerializeHumanReadable(blocks));
    }

    [Command(Description = "Query a block by index.")]
    public void BlockByIndex(
        [Argument("STORE", Description = StoreArgumentDescription)]
        string home,
        [Argument("BLOCK-INDEX", Description = "block index")]
        int blockIndex
    )
    {
        using IStore store = Utils.LoadStoreFromUri(home);
        var blockHash = GetBlockHash(store, blockIndex);
        var block = GetBlock<Utils.DummyAction>(store, blockHash);
        Console.WriteLine(Utils.SerializeHumanReadable(block));
    }

    [Command(Description = "Query a block by hash.")]
    public void BlockByHash(
        [Argument("STORE", Description = StoreArgumentDescription)]
        string home,
        [Argument("BLOCK-HASH", Description = "block hash")]
        string blockHash
    )
    {
        using IStore store = Utils.LoadStoreFromUri(home);
        var block = GetBlock<Utils.DummyAction>(store, BlockHash.FromString(blockHash));
        Console.WriteLine(Utils.SerializeHumanReadable(block));
    }

    [Command(Description = "Query a transaction by tx id.")]
    public void TxById(
        [Argument("STORE", Description = StoreArgumentDescription)]
        string home,
        [Argument("TX-ID", Description = "tx id")]
        string strTxId
    )
    {
        IStore store = Utils.LoadStoreFromUri(home);
        var tx = GetTransaction<Utils.DummyAction>(store, new TxId(ByteUtil.ParseHex(strTxId)));
        Console.WriteLine(Utils.SerializeHumanReadable(tx));
        store?.Dispose();
    }

    [Command]
    public void MigrateIndex(string storePath)
    {
        if (RocksDBStore.RocksDBStore.MigrateChainDBFromColumnFamilies(storePath))
        {
            Console.WriteLine("Successfully migrated.");
        }
        else
        {
            Console.WriteLine("Already migrated, no need to migrate.");
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
}
