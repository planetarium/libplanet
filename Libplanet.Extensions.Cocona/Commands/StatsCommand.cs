#nullable enable
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Security.Cryptography;
using Cocona;
using Libplanet.Blocks;
using Libplanet.RocksDBStore;
using Libplanet.Store;

namespace Libplanet.Extensions.Cocona.Commands
{
    public class StatsCommand
    {
        private const string StoreArgumentDescription =
            "The URI denoting the type and the path of a concrete class for " +
            nameof(IStore) + "; " +
            "given as <store-type>://<store-path>";

        private readonly IImmutableDictionary<string, Func<string, IStore>>
            _storeConstructors =
                new Dictionary<string, Func<string, IStore>>
                {
                    ["default"] = storePath => new DefaultStore(storePath),
                    ["rocksdb"] = storePath => new RocksDBStore.RocksDBStore(storePath),
                    ["monorocksdb"] = storePath => new MonoRocksDBStore(storePath),
                }.ToImmutableSortedDictionary();

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
                store: LoadStoreFromUri(path),
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
                    ? offset
                    : chainLength + offset,
                limit: limit);

            if (header)
            {
                Console.WriteLine("index,hash,difficulty,miner,txCount,timestamp,perceivedTime");
            }

            foreach (var hash in hashes)
            {
                BlockDigest blockDigest = store.GetBlockDigest(hash) ??
                    throw Utils.Error($"Failed to load the block {hash}.");
                BlockHeader blockHeader =
                    blockDigest.GetHeader(_ => HashAlgorithmType.Of<SHA256>());
                var perceivedTime = store.GetBlockPerceivedTime(hash);

                Console.WriteLine(
                    $"{blockHeader.Index}," +
                    $"{blockHeader.Hash}," +
                    $"{blockHeader.Difficulty}," +
                    $"{blockHeader.Miner}," +
                    $"{blockDigest.TxIds.Length}," +
                    $"{blockHeader.Timestamp.ToUnixTimeMilliseconds()}," +
                    $"{perceivedTime?.ToUnixTimeMilliseconds()}");
            }
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
