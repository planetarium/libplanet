using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.IO;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Bencodex;
using Bencodex.Types;
using Libplanet.Common;
using Libplanet.Common.Extensions;
using Libplanet.Crypto;
using Libplanet.Store;
using Libplanet.Types.Blocks;
using Libplanet.Types.Tx;
using RocksDbSharp;

namespace Libplanet.Explorer.Indexing;

/// <summary>
/// An <see cref="IBlockChainIndex"/> object that uses RocksDB as the backend.
/// </summary>
public class RocksDbBlockChainIndex : BlockChainIndexBase
{
    private static readonly byte[] BlockHashToIndexPrefix = { (byte)'b' };
    private static readonly byte[] IndexToBlockHashPrefix = { (byte)'i' };
    private static readonly byte[] ProducerToBlockIndexPrefix = { (byte)'p' };
    private static readonly byte[] SignerToTxIdPrefix = { (byte)'s' };
    private static readonly byte[] InvolvedAddressToTxIdPrefix = { (byte)'I' };
    private static readonly byte[] TxIdToContainedBlockHashPrefix = { (byte)'t' };
    private static readonly byte[] ActionTypeIdToTxIdPrefix = { (byte)'A' };
    private static readonly byte[] ActionTypeIdPrefix = { (byte)'a' };
    private static readonly Codec Codec = new();
    private readonly RocksDb _db;

    /// <summary>
    /// Create an instance of <see cref="IBlockChainIndex"/> that uses RocksDB as the backend.
    /// </summary>
    /// <param name="path">The path containing the RocksDB index database.</param>
    public RocksDbBlockChainIndex(string path)
    {
        if (path is null)
        {
            throw new ArgumentNullException(nameof(path));
        }

        path = Path.GetFullPath(path);

        if (!Directory.Exists(path))
        {
            Directory.CreateDirectory(path);
        }

        if (!Directory.Exists(Path.Combine(path, "indexdb")))
        {
            Directory.CreateDirectory(Path.Combine(path, "indexdb"));
        }

        var rocksDbOption = new DbOptions()
            .SetCreateIfMissing();

        _db = RocksDb.Open(rocksDbOption, Path.Combine(path, "indexdb"));
    }

    /// <inheritdoc />
    public override long BlockHashToIndex(BlockHash hash) =>
        _db.Get(
            BlockHashToIndexPrefix.Concat(hash.ByteArray).ToArray()) is { } arr
            ? BigEndianByteArrayToLong(arr)
            : throw new IndexOutOfRangeException(
                $"The hash {hash} does not exist in the index.");

    /// <inheritdoc />
    public override async Task<long> BlockHashToIndexAsync(BlockHash hash) =>
        await Task.Run(() => BlockHashToIndex(hash)).ConfigureAwait(false);

    /// <inheritdoc />
    public override IEnumerable<TxId>
        GetSignedTxIdsByAddress(Address signer, int? fromNonce, int? maxCount, bool desc) =>
        IteratePrefix(
                fromNonce, maxCount, desc, SignerToTxIdPrefix.Concat(signer.ByteArray).ToArray())
            .Select(kv => new TxId(kv.Value));

    /// <inheritdoc />
    public override async IAsyncEnumerable<TxId>
        GetSignedTxIdsByAddressAsync(Address signer, int? fromNonce, int? maxCount, bool desc)
    {
        using var enumerator =
            GetSignedTxIdsByAddress(signer, fromNonce, maxCount, desc).GetEnumerator();
        while (await Task.Run(() => enumerator.MoveNext()).ConfigureAwait(false))
        {
            yield return enumerator.Current;
        }
    }

    /// <inheritdoc />
    public override long? GetLastNonceByAddress(Address address)
    {
        using var iter = IteratePrefix(
                0, 1, true, SignerToTxIdPrefix.Concat(address.ByteArray).ToArray())
            .Select(kv => BigEndianByteArrayToLong(kv.Key)).GetEnumerator();
        return iter.MoveNext()
            ? iter.Current
            : null;
    }

    /// <inheritdoc />
    public override async Task<long?> GetLastNonceByAddressAsync(Address address) =>
        await Task.Run(() => GetLastNonceByAddress(address)).ConfigureAwait(false);

    /// <inheritdoc />
    public override bool TryGetContainedBlockHashById(TxId txId, out BlockHash containedBlock)
    {
        containedBlock = default;
        var bytes =
            _db.Get(TxIdToContainedBlockHashPrefix.Concat(txId.ByteArray).ToArray());
        if (bytes is not { })
        {
            return false;
        }

        containedBlock = new BlockHash(bytes);
        return true;
    }

    /// <inheritdoc />
    public override async Task<BlockHash?> TryGetContainedBlockHashByIdAsync(TxId txId) =>
        await Task.Run(() =>
            TryGetContainedBlockHashById(txId, out var containedBlock)
                ? containedBlock
                : (BlockHash?)null
        ).ConfigureAwait(false);

    public override BlockHash IndexToBlockHash(long index)
    {
        return _db.Get(
                IndexToBlockHashPrefix.Concat(
                    LongToBigEndianByteArray(
                        index >= 0 ? index : (GetTipImpl()?.Index ?? 0) + index + 1)).ToArray())
            is { } arr
            ? new BlockHash(arr)
            : throw new IndexOutOfRangeException(
                $"The block #{index} does not exist in the index.");
    }

    public override async Task<BlockHash> IndexToBlockHashAsync(long index)
        => await Task.Run(() => IndexToBlockHash(index)).ConfigureAwait(false);

    public override IEnumerable<(long Index, BlockHash Hash)>
        GetBlockHashesFromIndex(int? fromHeight, int? maxCount, bool desc, Address? producer)
    {
        if (producer is { } minerVal)
        {
            return IteratePrefix(
                    fromHeight,
                    maxCount,
                    desc,
                    ProducerToBlockIndexPrefix.Concat(minerVal.ByteArray).ToArray())
                .Select(
                    kv => (
                        BigEndianByteArrayToLong(kv.Value[..8]),
                        new BlockHash(kv.Value[8..40])));
        }

        return IteratePrefix(fromHeight, maxCount, desc, IndexToBlockHashPrefix)
            .Select(kv => (BigEndianByteArrayToLong(kv.Key), new BlockHash(kv.Value)));
    }

    public override async IAsyncEnumerable<(long Index, BlockHash Hash)>
        GetBlockHashesFromIndexAsync(int? fromHeight, int? maxCount, bool desc, Address? producer)
    {
        using var enumerator =
            GetBlockHashesFromIndex(fromHeight, maxCount, desc, producer)
                .GetEnumerator();
        while (await Task.Run(() => enumerator.MoveNext()).ConfigureAwait(false))
        {
            yield return enumerator.Current;
        }
    }

    protected override (long Index, BlockHash Hash)? GetTipImpl()
    {
        using var iter =
            GetBlockHashesFromIndex(0, 1, true, null)
                .GetEnumerator();
        return iter.MoveNext()
            ? iter.Current
            : null;
    }

    protected override async Task<(long Index, BlockHash Hash)?> GetTipAsyncImpl()
        => await Task.Run(GetTipImpl).ConfigureAwait(false);

    /// <inheritdoc />
    protected override async Task IndexAsyncImpl(
        BlockDigest blockDigest,
        IEnumerable<ITransaction> txs,
        IIndexingContext? context,
        CancellationToken stoppingToken) =>
        await Task.Run(() => IndexImpl(blockDigest, txs, context, stoppingToken), stoppingToken)
            .ConfigureAwait(false);

    protected override IIndexingContext GetIndexingContext() =>
        new RocksDbIndexingContext();

    protected override void CommitIndexingContext(IIndexingContext context)
    {
        if (context is not RocksDbIndexingContext)
        {
            throw new ArgumentException(
                $"Received an unsupported {nameof(IIndexingContext)}: {context.GetType()}");
        }
    }

    protected override async Task CommitIndexingContextAsync(IIndexingContext context) =>
        await Task.Run(() => CommitIndexingContext(context));

    // Use big endian for easier iterator prev seek
    private static byte[] ShortToBigEndianByteArray(short val)
    {
        byte[] arr = BitConverter.GetBytes(val);
        if (BitConverter.IsLittleEndian)
        {
            Array.Reverse(arr);
        }

        return arr;
    }

    private static byte[] LongToBigEndianByteArray(long val)
    {
        byte[] arr = BitConverter.GetBytes(val);
        if (BitConverter.IsLittleEndian)
        {
            Array.Reverse(arr);
        }

        return arr;
    }

    private static long BigEndianByteArrayToLong(byte[] val)
    {
        var len = val.Length;
        if (len != 8)
        {
            throw new ArgumentException(
                $"a byte array of size 8 must be provided, but the size of given array was {len}.",
                nameof(val));
        }

        if (BitConverter.IsLittleEndian)
        {
            Array.Reverse(val);
        }

        return BitConverter.ToInt64(val);
    }

    private void IndexImpl(
        BlockDigest blockDigest,
        IEnumerable<ITransaction> txs,
        IIndexingContext? context,
        CancellationToken stoppingToken)
    {
        var minerAddress = blockDigest.Miner.ByteArray.ToArray();
        var blockHash = blockDigest.Hash.ByteArray.ToArray();
        var indexToBlockHashKey = IndexToBlockHashPrefix
            .Concat(LongToBigEndianByteArray(blockDigest.Index)).ToArray();

        var writeBatch = new WriteBatch();
        if (_db.Get(indexToBlockHashKey) is { } existingHash)
        {
            writeBatch.Dispose();
            if (new BlockHash(existingHash).Equals(blockDigest.Hash))
            {
                return;
            }

            throw new IndexMismatchException(
                blockDigest.Index, GetTipImpl()!.Value.Hash, blockDigest.Hash);
        }

        writeBatch.Put(indexToBlockHashKey, blockHash);
        writeBatch.Put(
            BlockHashToIndexPrefix.Concat(blockHash).ToArray(),
            LongToBigEndianByteArray(blockDigest.Index));
        writeBatch.Put(
            GetNextOrdinalKey(ProducerToBlockIndexPrefix.Concat(minerAddress).ToArray()),
            LongToBigEndianByteArray(blockDigest.Index).Concat(blockHash).ToArray());

        IImmutableDictionary<byte[], long> duplicateActionTypeIdToTxTimestampOrdinalMemos =
            ImmutableDictionary<byte[], long>.Empty.WithComparers(ByteArrayComparer.Instance);
        IImmutableDictionary<byte[], long> duplicateAccountNonceOrdinalMemos =
            ImmutableDictionary<byte[], long>.Empty.WithComparers(ByteArrayComparer.Instance);
        IImmutableDictionary<byte[], long> duplicateInvolvedTxTimestampOrdinalMemos =
            ImmutableDictionary<byte[], long>.Empty.WithComparers(ByteArrayComparer.Instance);
        IImmutableSet<byte[]> encounteredActionTypeIdToTxIdKeys =
            ImmutableHashSet<byte[]>.Empty.WithComparer(ByteArrayComparer.Instance);
        IImmutableSet<byte[]> encounteredSignerToTxIdKeys =
            ImmutableHashSet<byte[]>.Empty.WithComparer(ByteArrayComparer.Instance);
        IImmutableSet<byte[]> encounteredInvolvedAddressToTxIdKeys =
            ImmutableHashSet<byte[]>.Empty.WithComparer(ByteArrayComparer.Instance);
        foreach (var tx in txs)
        {
            if (stoppingToken.IsCancellationRequested)
            {
                writeBatch.Dispose();
                throw new OperationCanceledException(stoppingToken);
            }

            var signerAddress = tx.Signer.ByteArray.ToArray();
            var txId = tx.Id.ByteArray.ToArray();
            var txIdToContainedBlockHashKey = TxIdToContainedBlockHashPrefix.Concat(txId).ToArray();
            if (_db.Get(txIdToContainedBlockHashKey) is { })
            {
                continue;
            }

            PutOrPutDuplicateOrdinal(
                ref writeBatch,
                SignerToTxIdPrefix
                    .Concat(signerAddress)
                    .Concat(LongToBigEndianByteArray(tx.Nonce))
                    .ToArray(),
                txId,
                ref encounteredSignerToTxIdKeys,
                ref duplicateAccountNonceOrdinalMemos);

            writeBatch.Put(txIdToContainedBlockHashKey, blockHash);
            foreach (var address in tx.UpdatedAddresses.Select(address => address.ByteArray))
            {
                if (stoppingToken.IsCancellationRequested)
                {
                    writeBatch.Dispose();
                    throw new OperationCanceledException(stoppingToken);
                }

                PutOrPutDuplicateOrdinal(
                    ref writeBatch,
                    InvolvedAddressToTxIdPrefix
                        .Concat(address)
                        .Concat(LongToBigEndianByteArray(tx.Timestamp.UtcTicks))
                        .ToArray(),
                    txId,
                    ref encounteredInvolvedAddressToTxIdKeys,
                    ref duplicateInvolvedTxTimestampOrdinalMemos);
            }

            if (tx.Actions is not { } actions)
            {
                continue;
            }

            foreach (var action in actions)
            {
                if (stoppingToken.IsCancellationRequested)
                {
                    writeBatch.Dispose();
                    throw new OperationCanceledException(stoppingToken);
                }

                if (action is not Dictionary actionDict
                    || !actionDict.TryGetValue((Text)"type_id", out var typeId))
                {
                    continue;
                }

                // Use IValue for string, as "abc" and "abcd" as raw byte strings overlap.
                writeBatch.Put(
                    ActionTypeIdPrefix.Concat(Codec.Encode(typeId)).ToArray(),
                    Array.Empty<byte>());
                PutOrPutDuplicateOrdinal(
                    ref writeBatch,
                    ActionTypeIdToTxIdPrefix
                        .Concat(Codec.Encode(typeId))
                        .Concat(LongToBigEndianByteArray(tx.Timestamp.UtcTicks))
                        .ToArray(),
                    txId,
                    ref encounteredActionTypeIdToTxIdKeys,
                    ref duplicateActionTypeIdToTxTimestampOrdinalMemos);
            }
        }

        _db.Write(writeBatch);
        writeBatch.Dispose();
    }

    private IEnumerable<(byte[] Key, byte[] Value)>
        IteratePrefix(int? offset, int? limit, bool desc, byte[] prefix)
    {
        if (limit == 0)
        {
            yield break;
        }

        Iterator iter = _db.NewIterator().Seek(prefix);
        if (!iter.Valid() || !iter.Key().StartsWith(prefix))
        {
            yield break;
        }

        if (desc)
        {
            byte[] upper = new byte[iter.Key().Length - prefix.Length];
            Array.Fill(upper, byte.MaxValue);
            iter.Dispose();
            iter = _db.NewIterator().SeekForPrev(prefix.Concat(upper).ToArray());
        }

        byte[] key;
        Func<long> GetAdvancer()
        {
            long count = 0;
            System.Action advance = desc
                ? () => iter.Prev()
                : () => iter.Next();
            return () =>
            {
                advance();
                return ++count;
            };
        }

        var advance = GetAdvancer();
        for (var i = 0; i < offset; ++i)
        {
            advance();
        }

        for (long count = 0L;
             iter.Valid()
             && (key = iter.Key()).StartsWith(prefix)
             && (limit is not { } || count < (offset ?? 0) + limit);
             count = advance())
        {
            yield return (key[prefix.Length..], iter.Value());
        }

        iter.Dispose();
    }

    private long GetNextOrdinal(byte[] prefix)
    {
        using Iterator iter = _db.NewIterator().Seek(prefix);
        if (!iter.Valid() || !iter.Key().StartsWith(prefix))
        {
            return 0L;
        }

        byte[] upper = new byte[iter.Key().Length - prefix.Length];
        Array.Fill(upper, byte.MaxValue);
        using Iterator lastIter = _db.NewIterator().SeekForPrev(prefix.Concat(upper).ToArray());
        return BigEndianByteArrayToLong(lastIter.Key()[prefix.Length..]) + 1;
    }

    private byte[] GetNextOrdinalKey(byte[] prefix)
    {
        long? memo = null;
        return GetNextOrdinalKey(prefix, ref memo);
    }

    private byte[] GetNextOrdinalKey(byte[] prefix, ref long? memo) =>
        prefix.Concat(
            LongToBigEndianByteArray(
                (long)(memo = memo is { } memoVal
                    ? ++memoVal
                    : (memo = GetNextOrdinal(prefix)).Value))).ToArray();

    private void PutOrdinalWithMemo(
        ref WriteBatch writeBatch,
        byte[] prefix,
        byte[] value,
        ref IImmutableDictionary<byte[], long> memos)
    {
        long? memo = memos.TryGetValue(prefix, out var memoValue)
            ? memoValue
            : null;
        writeBatch.Put(GetNextOrdinalKey(prefix, ref memo), value);
        memos = memos.SetItem(prefix, memo!.Value);
    }

    private void PutOrPutDuplicateOrdinal(
        ref WriteBatch writeBatch,
        byte[] key,
        byte[] value,
        ref IImmutableSet<byte[]> encounteredKeys,
        ref IImmutableDictionary<byte[], long> duplicateMemos)
    {
        if (
            !encounteredKeys.Contains(key)
            && _db.Get(key) is null)
        {
            writeBatch.Put(key, value);
            encounteredKeys = encounteredKeys.Add(key);
        }
        else
        {
            PutOrdinalWithMemo(
                ref writeBatch,
                key,
                value,
                ref duplicateMemos);
        }
    }

    private class ByteArrayComparer : IEqualityComparer<byte[]>
    {
        public static readonly ByteArrayComparer Instance = new ByteArrayComparer();

        public bool Equals(byte[]? x, byte[]? y) =>
            ((ReadOnlySpan<byte>)x).SequenceEqual(y);

        public int GetHashCode(byte[] obj)
        {
            HashCode hash = default;
            hash.AddBytes(obj);
            return hash.ToHashCode();
        }
    }
}
