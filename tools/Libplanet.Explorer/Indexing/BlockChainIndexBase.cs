using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Crypto;
using Libplanet.Store;
using Libplanet.Types.Blocks;
using Libplanet.Types.Tx;
using Serilog;

namespace Libplanet.Explorer.Indexing;

/// <summary>
/// A base implementation of <see cref="IBlockChainIndex"/>.
/// </summary>
public abstract class BlockChainIndexBase : IBlockChainIndex
{
    private ILogger? _logger;

    private ILogger? _defaultLogger;

    /// <inheritdoc />
    public (long Index, BlockHash Hash) Tip
        => GetTipImpl() ?? throw new IndexOutOfRangeException("The index is empty.");

    protected ILogger Logger
    {
        get
        {
            _defaultLogger ??= Log
                .ForContext<IBlockChainIndex>()
                .ForContext("Source", GetType().Name);
            return _logger ?? _defaultLogger;
        }
        set => _logger = _logger is null ? value : throw new InvalidOperationException(
            "The logger is already set.");
    }

    /// <inheritdoc />
    public async Task<(long Index, BlockHash Hash)> GetTipAsync() =>
        await GetTipAsyncImpl().ConfigureAwait(false)
        ?? throw new IndexOutOfRangeException("The index is empty.");

    /// <inheritdoc />
    public abstract long BlockHashToIndex(BlockHash hash);

    /// <inheritdoc />
    public abstract Task<long> BlockHashToIndexAsync(BlockHash hash);

    /// <inheritdoc />
    public abstract BlockHash IndexToBlockHash(long index);

    /// <inheritdoc />
    public abstract Task<BlockHash> IndexToBlockHashAsync(long index);

    /// <inheritdoc />
    public IEnumerable<(long Index, BlockHash Hash)>
        GetBlockHashesByRange(Range indexRange, bool desc, Address? producer)
    {
        var (fromHeight, maxCount) =
            indexRange.GetOffsetAndLength((int)(Tip.Index + 1 & int.MaxValue));
        return GetBlockHashesFromIndex(fromHeight, maxCount, desc, producer);
    }

    /// <inheritdoc />
    public async IAsyncEnumerable<(long Index, BlockHash Hash)>
        GetBlockHashesByRangeAsync(Range indexRange, bool desc, Address? producer)
    {
        var (fromHeight, maxCount) =
            indexRange.GetOffsetAndLength((int)(Tip.Index + 1 & int.MaxValue));
        await foreach (
            var item in GetBlockHashesFromIndexAsync(fromHeight, maxCount, desc, producer)
                .ConfigureAwait(false))
        {
            yield return item;
        }
    }

    /// <inheritdoc />
    public abstract IEnumerable<(long Index, BlockHash Hash)>
        GetBlockHashesFromIndex(int? fromHeight, int? maxCount, bool desc, Address? producer);

    /// <inheritdoc />
    public abstract IAsyncEnumerable<(long Index, BlockHash Hash)>
        GetBlockHashesFromIndexAsync(int? fromHeight, int? maxCount, bool desc, Address? producer);

    /// <inheritdoc />
    public abstract IEnumerable<TxId>
        GetSignedTxIdsByAddress(Address signer, int? fromNonce, int? maxCount, bool desc);

    /// <inheritdoc />
    public abstract IAsyncEnumerable<TxId>
        GetSignedTxIdsByAddressAsync(Address signer, int? fromNonce, int? maxCount, bool desc);

    /// <inheritdoc />
    public abstract long? GetLastNonceByAddress(Address address);

    /// <inheritdoc />
    public abstract Task<long?> GetLastNonceByAddressAsync(Address address);

    /// <inheritdoc />
    public BlockHash GetContainedBlockHashByTxId(TxId txId) =>
        TryGetContainedBlockHashById(txId, out var containedBlock)
            ? containedBlock
            : throw new IndexOutOfRangeException(
                $"The txId {txId} does not exist in the index.");

    /// <inheritdoc />
    public async Task<BlockHash> GetContainedBlockHashByTxIdAsync(TxId txId) =>
        await TryGetContainedBlockHashByIdAsync(txId).ConfigureAwait(false)
        ?? throw new IndexOutOfRangeException(
            $"The txId {txId} does not exist in the index.");

    /// <inheritdoc />
    public abstract bool TryGetContainedBlockHashById(TxId txId, out BlockHash containedBlock);

    /// <inheritdoc />
    public abstract Task<BlockHash?> TryGetContainedBlockHashByIdAsync(TxId txId);

    /// <inheritdoc />
    async Task IBlockChainIndex.IndexAsync(
        BlockDigest blockDigest, IEnumerable<ITransaction> txs, CancellationToken stoppingToken) =>
        await IndexAsyncImpl(blockDigest, txs, null, stoppingToken).ConfigureAwait(false);

    async Task IBlockChainIndex.SynchronizeForeverAsync(
        IStore store, TimeSpan pollInterval, CancellationToken stoppingToken)
    {
        var syncMetadata = await GetSyncMetadata(store).ConfigureAwait(false);
        await CheckIntegrity(store, syncMetadata).ConfigureAwait(false);
        while (true)
        {
            await SynchronizeAsyncImpl(store, syncMetadata, false, stoppingToken)
                .ConfigureAwait(false);
            await Task.Delay(pollInterval, stoppingToken).ConfigureAwait(false);
        }
    }

    async Task IBlockChainIndex.SynchronizeAsync(IStore store, CancellationToken stoppingToken)
    {
        var syncMetadata = await GetSyncMetadata(store).ConfigureAwait(false);
        await CheckIntegrity(store, syncMetadata).ConfigureAwait(false);
        await SynchronizeAsyncImpl(store, syncMetadata, true, stoppingToken)
            .ConfigureAwait(false);
    }

    protected abstract (long Index, BlockHash Hash)? GetTipImpl();

    protected abstract Task<(long Index, BlockHash Hash)?> GetTipAsyncImpl();

    protected abstract Task IndexAsyncImpl(
        BlockDigest blockDigest,
        IEnumerable<ITransaction> txs,
        IIndexingContext? context,
        CancellationToken token);

    /// <summary>
    /// Get a context that can be consumed by <see cref="IBlockChainIndex.IndexAsync"/> and
    /// <see cref="IBlockChainIndex.IndexAsync"/> for batch processing.
    /// </summary>
    /// <returns>A context that can be consumed by <see cref="IBlockChainIndex.IndexAsync"/>.
    /// </returns>
    protected abstract IIndexingContext GetIndexingContext();

    /// <summary>
    /// Commits the data gathered in the context gained from <see cref="GetIndexingContext"/>.
    /// </summary>
    /// <param name="context">A context gained from <see cref="GetIndexingContext"/>.</param>
    protected abstract void CommitIndexingContext(IIndexingContext context);

    /// <inheritdoc cref="CommitIndexingContext"/>
    protected abstract Task CommitIndexingContextAsync(IIndexingContext context);

    private static string FormatSeconds(int seconds)
    {
        var minutes = seconds / 60;
        seconds %= 60;
        var hours = minutes / 60;
        minutes %= 60;
        return hours > 0
            ? $"{hours}h{minutes}m{seconds}s"
            : minutes > 0
                ? $"{minutes}m{seconds}s"
                : $"{seconds}s";
    }

    private async Task CheckIntegrity(
        IStore store,
        (
            Guid ChainId,
            long IndexTipIndex,
            long ChainTipIndex,
            BlockHash? IndexTipHash) syncMetadata)
    {
        var chainId = syncMetadata.ChainId;
        var indexTipIndex = syncMetadata.IndexTipIndex;
        var chainTipIndex = syncMetadata.ChainTipIndex;
        var indexTipHash = syncMetadata.IndexTipHash;
        if (indexTipIndex >= 0)
        {
            var indexHash = await IndexToBlockHashAsync(0).ConfigureAwait(false);
            using var chainIndexEnumerator =
                store.IterateIndexes(chainId, limit: 1).GetEnumerator();
            if (!chainIndexEnumerator.MoveNext())
            {
                throw new InvalidOperationException(
                    "The store does not contain a valid genesis block.");
            }

            var chainHash = chainIndexEnumerator.Current;
            if (!indexHash.Equals(chainHash))
            {
                throw new IndexMismatchException(0, indexHash, chainHash);
            }
        }

        if (indexTipIndex >= 1)
        {
            var commonLatestIndex = Math.Min(indexTipIndex, chainTipIndex);
            using var chainIndexEnumerator =
                store.IterateIndexes(chainId, (int)commonLatestIndex, limit: 1).GetEnumerator();
            BlockHash? chainTipHash = chainIndexEnumerator.MoveNext()
                ? chainIndexEnumerator.Current
                : null;
            if (chainTipHash is not { } chainTipHashValue
                || !indexTipHash!.Value.Equals(chainTipHashValue))
            {
                throw new IndexMismatchException(
                    indexTipIndex, indexTipHash!.Value, chainTipHash);
            }
        }

        if (indexTipIndex > chainTipIndex)
        {
            Logger.Information(
                "The height of the index is higher than the height of the blockchain. The index"
                + " will continue to be synchronized, but if a block of an existing height and a"
                + $" different hash is encountered, an {nameof(IndexMismatchException)} will be"
                + " raised.");
        }
    }

    private async Task SynchronizeAsyncImpl(
        IStore store,
        (
            Guid ChainId,
            long IndexTipIndex,
            long ChainTipIndex,
            BlockHash? IndexTipHash) syncMetadata,
        bool log,
        CancellationToken stoppingToken
    )
    {
        var chainId = syncMetadata.ChainId;
        var indexTipIndex = syncMetadata.IndexTipIndex;
        var chainTipIndex = syncMetadata.ChainTipIndex;

        if (indexTipIndex > chainTipIndex)
        {
            return;
        }

        if (indexTipIndex == chainTipIndex)
        {
            if (log)
            {
                Logger.Information("Index is up to date.");
            }

            return;
        }

        if (log)
        {
            Logger.Information("Index is out of date. Synchronizing...");
        }

        long processedBlockCount = 0,
            totalBlocksToSync = chainTipIndex - indexTipIndex,
            intervalBlockCount = 0,
            intervalTxCount = 0;
        var populateStart = DateTimeOffset.Now;
        var intervalStart = populateStart;

        using var indexEnumerator =
            store.IterateIndexes(chainId, (int)indexTipIndex + 1).GetEnumerator();
        var addBlockContext = GetIndexingContext();
        while (indexEnumerator.MoveNext() && indexTipIndex + processedBlockCount < chainTipIndex)
        {
            if (stoppingToken.IsCancellationRequested)
            {
                if (log)
                {
                    Logger.Information("Index synchronization interrupted.");
                }

                break;
            }

            var blockDigest = store.GetBlockDigest(indexEnumerator.Current);
            ITransaction[] txs = blockDigest.TxIds
                .Select(txId => store.GetTransaction(new TxId(txId))
                    ?? throw new InvalidOperationException(
                        $"Could not find transaction with txid {txId} in store."))
                .ToArray();
            try
            {
                await IndexAsyncImpl(blockDigest, txs, addBlockContext, stoppingToken)
                    .ConfigureAwait(false);
            }
            catch (OperationCanceledException)
            {
                break;
            }

            intervalTxCount += txs.Length;
            ++processedBlockCount;
            ++intervalBlockCount;

            var now = DateTimeOffset.Now;
            var interval = (now - intervalStart).TotalSeconds;
            if (interval > 10)
            {
                var processedPercentage =
                    (float)(indexTipIndex + processedBlockCount) / chainTipIndex * 100;
                var totalElapsedSec = (now - populateStart).TotalSeconds;
                var currentRate = intervalBlockCount / interval;
                var totalRate = processedBlockCount / totalElapsedSec;
                var txRate = intervalTxCount / interval;
                var elapsedStr = FormatSeconds((int)totalElapsedSec);
                var eta = FormatSeconds(
                    (int)TimeSpan.FromSeconds(
                            (chainTipIndex - indexTipIndex - processedBlockCount) / currentRate)
                        .TotalSeconds);

                if (log)
                {
                    Logger.Information(
                        $"Height #{blockDigest.Index} of {chainTipIndex},"
                        + $" {totalBlocksToSync - processedBlockCount} to go"
                        + $" ({processedPercentage:F1}% synced),"
                        + $" session: {processedBlockCount}/{totalBlocksToSync},"
                        + $" current: {(int)currentRate}blk/s, total: {(int)totalRate}blk/s,"
                        + $" txrate: {(int)txRate}tx/s,"
                        + $" tx density: {intervalTxCount / intervalBlockCount}tx/blk,"
                        + $" elapsed: {elapsedStr}, eta: {eta}");
                }

                intervalStart = now;
                intervalBlockCount = 0;
                intervalTxCount = 0;
            }
        }

        await CommitIndexingContextAsync(addBlockContext).ConfigureAwait(false);

        if (log)
        {
            Logger.Information(
                $"{processedBlockCount} out of {totalBlocksToSync} blocks processed, elapsed:"
                + $" {FormatSeconds((int)(DateTimeOffset.Now - populateStart).TotalSeconds)}");
        }

        stoppingToken.ThrowIfCancellationRequested();

        if (totalBlocksToSync == processedBlockCount && log)
        {
            Logger.Information("Finished synchronizing index.");
        }
    }

    private async Task<(
        Guid ChainId,
        long IndexTipIndex,
        long ChainTipIndex,
        BlockHash? IndexTipHash)>
        GetSyncMetadata(IStore store)
    {
        var indexTip = await GetTipAsyncImpl().ConfigureAwait(false);
        var indexTipIndex = indexTip?.Index ?? -1;
        var chainId = store.GetCanonicalChainId()
                      ?? throw new InvalidOperationException(
                          "The store does not contain a valid chain.");
        var chainTipIndex = store.CountIndex(chainId) - 1;
        return (chainId, indexTipIndex, chainTipIndex, indexTip?.Hash);
    }
}
