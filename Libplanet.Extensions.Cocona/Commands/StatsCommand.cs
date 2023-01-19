namespace Libplanet.Extensions.Cocona.Commands;

using System;
using System.Collections.Generic;
using global::Cocona;
using Libplanet.Blocks;
using Libplanet.Store;

public class StatsCommand
{
    private const string StoreArgumentDescription =
        "The URI denotes the type and path of concrete class for " + nameof(IStore) + "."
        + "<store-type>://<store-path> (e.g., rocksdb+file:///path/to/store)";

    [Command(Description = "Outputs a summary of a stored chain in a CSV format.")]
    public void Summary(
        [Option('p', Description = StoreArgumentDescription)]
        string path,
        [Option('r', Description = "Whether to include header row")]
        bool header,
        [Option('o', Description =
            "Starting index offset; " +
            "supports negative indexing")]
        long offset = 0,
        [Option('l', Description =
            "Maximum number of results to return; " +
            "no limit by default")]
        long? limit = null) => Summary(
            store: Utils.LoadStoreFromUri(path),
            header: header,
            offset: offset,
            limit: limit);

    internal void Summary(
        IStore store,
        bool header,
        long offset,
        long? limit)
    {
        if (limit is { } && limit < 1)
        {
            throw new ArgumentException($"limit must be at least 1: {limit}");
        }

        Guid chainId = store.GetCanonicalChainId()
            ?? throw Utils.Error($"Failed to find the canonical chain in store.");
        long chainLength = store.CountIndex(chainId);

        if (offset >= chainLength || (offset < 0 && chainLength + offset < 0))
        {
            throw new ArgumentException(
                $"invalid offset value {offset} for found chain length {chainLength}");
        }

        IEnumerable<BlockHash> hashes = store.IterateIndexes(
            chainId,
            offset: offset >= 0
                ? (int)offset
                : (int)(chainLength + offset),
            limit: (int?)limit);

        if (header)
        {
            Console.WriteLine("index,hash,difficulty,miner,txCount,timestamp,perceivedTime");
        }

        foreach (var hash in hashes)
        {
            BlockDigest blockDigest = store.GetBlockDigest(hash) ??
                throw Utils.Error($"Failed to load the block {hash}.");
            BlockHeader blockHeader =
                blockDigest.GetHeader();

            Console.WriteLine(
                $"{blockHeader.Index}," +
                $"{blockHeader.Hash}," +
                $"{blockHeader.Difficulty}," +
                $"{blockHeader.Miner}," +
                $"{blockDigest.TxIds.Length}," +
                $"{blockHeader.Timestamp.ToUnixTimeMilliseconds()}");
        }
    }
}
