using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Crypto;
using Libplanet.Types.Blocks;
using Libplanet.Types.Consensus;
using Libplanet.Types.Tx;
using Libplanet.Explorer.Indexing;
using Xunit;
using Libplanet.Consensus;

namespace Libplanet.Explorer.Tests.Indexing;

public abstract class BlockChainIndexTest
{
    protected const int BlockCount = 20;

    protected const int MaxTxCount = 20;

    protected abstract IBlockChainIndexFixture Fx { get; set; }

    protected GeneratedBlockChainFixture ChainFx { get; set; }

    protected System.Random RandomGenerator { get; }

    protected BlockChainIndexTest()
    {
        RandomGenerator = new System.Random();
        ChainFx = new GeneratedBlockChainFixture(
            RandomGenerator.Next(), BlockCount, MaxTxCount);
    }

    [Fact]
    public async Task Synchronize()
    {
        var index = Fx.CreateEphemeralIndexInstance();
        await index.SynchronizeAsync(
            ChainFx.Chain.Store, CancellationToken.None);

        var forkedChain = ChainFx.Chain.Fork(ChainFx.Chain.Tip.PreviousHash!.Value);
        var divergentBlock = forkedChain.ProposeBlock(
            ChainFx.PrivateKeys[0],
            forkedChain.GetBlockCommit(forkedChain.Tip.Hash),
            new ConsensusInformation(forkedChain.Tip.Index + 1, 0, forkedChain.Tip.Proof)
                .Prove(ChainFx.PrivateKeys[0]));
        forkedChain.Append(
            divergentBlock,
            new BlockCommit(
                forkedChain.Tip.Index + 1,
                0,
                divergentBlock.Hash,
                ChainFx.PrivateKeys
                    .OrderBy(pk => pk.Address.ToHex())
                    .Select(pk => new VoteMetadata(
                        forkedChain.Tip.Index + 1,
                        0,
                        divergentBlock.Hash,
                        DateTimeOffset.UtcNow,
                        pk.PublicKey,
                        VoteFlag.PreCommit)
                        .Sign(pk))
                    .ToImmutableArray()));
        await index.IndexAsync(
            ChainFx.Chain.Store.GetBlockDigest(ChainFx.Chain.Tip.Hash)!.Value,
            ChainFx.Chain.Tip.Transactions,
            CancellationToken.None);
        await Assert.ThrowsAsync<IndexMismatchException>(
            async () => await index.IndexAsync(
                forkedChain.Store.GetBlockDigest(forkedChain.Tip.Hash)!.Value,
                forkedChain.Tip.Transactions,
                CancellationToken.None));
    }

    [Fact]
    public async Task Tip()
    {
        var tip = await Fx.Index.GetTipAsync();
        Assert.Equal(tip, Fx.Index.Tip);
        Assert.Equal(ChainFx.Chain.Tip.Hash, tip.Hash);
        Assert.Equal(ChainFx.Chain.Tip.Index, tip.Index);
    }

    [Fact]
    public async Task GetLastNonceByAddress()
    {
        foreach (var pk in ChainFx.PrivateKeys)
        {
            var address = pk.Address;
            Assert.Equal(
                ChainFx.Chain.GetNextTxNonce(address) - 1,
                // ReSharper disable once MethodHasAsyncOverload
                Fx.Index.GetLastNonceByAddress(address) ?? -1);
            Assert.Equal(
                ChainFx.Chain.GetNextTxNonce(address) - 1,
                await Fx.Index.GetLastNonceByAddressAsync(address) ?? -1);
        }

        // ReSharper disable once MethodHasAsyncOverload
        Assert.Null(Fx.Index.GetLastNonceByAddress(new Address()));
        Assert.Null(await Fx.Index.GetLastNonceByAddressAsync(new Address()));
    }

    [Fact]
    public async Task BlockHashToIndex()
    {
        for (var i = 0; i < ChainFx.Chain.Count; i++)
        {
            var inChain = ChainFx.Chain[i];
            // ReSharper disable once MethodHasAsyncOverload
            Assert.Equal(i, Fx.Index.BlockHashToIndex(inChain.Hash));
            Assert.Equal(i, await Fx.Index.BlockHashToIndexAsync(inChain.Hash));
        }

        Assert.Throws<IndexOutOfRangeException>(() => Fx.Index.BlockHashToIndex(new BlockHash()));
        await Assert.ThrowsAsync<IndexOutOfRangeException>(
            async () => await Fx.Index.BlockHashToIndexAsync(new BlockHash()));
    }

    [Fact]
    public async Task IndexToBlockHash()
    {
        for (var i = 0; i < ChainFx.Chain.Count; i++)
        {
            var inChain = ChainFx.Chain[i];
            // ReSharper disable once MethodHasAsyncOverload
            Assert.Equal(inChain.Hash, Fx.Index.IndexToBlockHash(i));
            Assert.Equal(inChain.Hash, await Fx.Index.IndexToBlockHashAsync(i));
        }

        Assert.Throws<IndexOutOfRangeException>(() => Fx.Index.IndexToBlockHash(long.MaxValue));
        await Assert.ThrowsAsync<IndexOutOfRangeException>(
            async () => await Fx.Index.IndexToBlockHashAsync(long.MaxValue));

        Assert.Equal(
            await Fx.Index.IndexToBlockHashAsync(Fx.Index.Tip.Index),
            await Fx.Index.IndexToBlockHashAsync(-1));
    }

    [Theory]
    [MemberData(nameof(BooleanPermutation3))]
    public async Task GetBlockHashes(bool fromHalfway, bool throughHalfway, bool desc)
    {
        var blockCount = (int)ChainFx.Chain.Count;
        int? fromHeight = fromHalfway ? blockCount / 4 : null;
        int? maxCount = throughHalfway ? blockCount / 2 : null;
        int rangeEnd =
            maxCount is { } limitValue
                ? (fromHeight ?? 0) + limitValue
                : blockCount;
        var blocks = Enumerable.Range(0, (int)ChainFx.Chain.Count)
            .Select(i => ChainFx.Chain[i])
            .ToImmutableArray();
        blocks = desc ? blocks.Reverse().ToImmutableArray() : blocks;
        var inChain = Enumerable.Range(fromHeight ?? 0, rangeEnd - (fromHeight ?? 0))
            .Select(i => blocks[i])
            .ToImmutableArray();
        var indexed = Fx.Index.GetBlockHashesFromIndex(fromHeight, maxCount, desc).ToArray();
        Assert.Equal(
            indexed,
            await Fx.Index.GetBlockHashesFromIndexAsync(
                fromHeight, maxCount, desc).ToArrayAsync());
        Assert.Equal(
            indexed,
            Fx.Index.GetBlockHashesByRange((fromHeight ?? 0)..rangeEnd, desc));
        Assert.Equal(
            indexed,
            await Fx.Index.GetBlockHashesByRangeAsync(
                (fromHeight ?? 0)..rangeEnd, desc).ToArrayAsync());
        if (!desc)
        {
            Assert.Equal(
                indexed.Select(tuple => tuple.Hash),
                Fx.Index[(fromHeight ?? 0)..rangeEnd]);
        }

        Assert.Equal(inChain.Length, indexed.Length);
        for (var i = 0; i < indexed.Length; i++)
        {
            Assert.Equal(inChain[i].Hash, indexed[i].Hash);
            Assert.Equal(inChain[i].Index, indexed[i].Index);
        }
    }

    [Fact]
    public async Task GetBlockHashesByRangeOutOfRange()
    {
        Assert.Throws<ArgumentOutOfRangeException>(() =>
            Fx.Index.GetBlockHashesByRange(..((int)Fx.Index.Tip.Index + 2)));
        await Assert.ThrowsAsync<ArgumentOutOfRangeException>(async () =>
            await Fx.Index.GetBlockHashesByRangeAsync(
                ..((int)Fx.Index.Tip.Index + 2)).ToArrayAsync());
    }

    [Theory]
    [InlineData(SpecialRangeKind.OmitStartEnd, false)]
    [InlineData(SpecialRangeKind.OmitStartEnd, true)]
    [InlineData(SpecialRangeKind.OmitEnd, false)]
    [InlineData(SpecialRangeKind.OmitEnd, true)]
    [InlineData(SpecialRangeKind.StartFromEnd, false)]
    [InlineData(SpecialRangeKind.StartFromEnd, true)]
    [InlineData(SpecialRangeKind.EndFromEnd, false)]
    [InlineData(SpecialRangeKind.EndFromEnd, true)]
    public async Task GetBlockHashesByRangeSpecial(SpecialRangeKind kind, bool desc)
    {
        var (special, regular) = GetSpecialRange(kind);
        var byRegular = Fx.Index.GetBlockHashesByRange(regular, desc).ToArray();
        var byRegularAsync =
            await Fx.Index.GetBlockHashesByRangeAsync(regular, desc).ToArrayAsync();
        var bySpecial = Fx.Index.GetBlockHashesByRange(special, desc).ToArray();
        var bySpecialAsync =
            await Fx.Index.GetBlockHashesByRangeAsync(special, desc).ToArrayAsync();
        Assert.Equal(byRegular, bySpecial);
        Assert.Equal(byRegularAsync, bySpecialAsync);
        Assert.Equal(byRegular, byRegularAsync);
        Assert.Equal(bySpecial, bySpecialAsync);
        if (!desc)
        {
            Assert.Equal(
                Fx.Index[regular],
                Fx.Index[special]);
        }
    }

    public (Range special, Range regular) GetSpecialRange(SpecialRangeKind kind)
    {
        var blockCount = (int)ChainFx.Chain.Count;
        switch (kind)
        {
            case SpecialRangeKind.OmitStartEnd:
                return (.., ..blockCount);
            case SpecialRangeKind.OmitEnd:
                return ((blockCount / 4).., (blockCount / 4)..blockCount);
            case SpecialRangeKind.StartFromEnd:
                return blockCount < 4
                    ? (^0.., blockCount..blockCount)
                    : (
                    ^(blockCount - blockCount / 4)..,
                    (blockCount / 4)..blockCount);
            case SpecialRangeKind.EndFromEnd:
                return blockCount < 4
                    ? (..^blockCount, ..0)
                    : (..^(blockCount / 4), ..(blockCount - blockCount / 4));
        }

        throw new ArgumentOutOfRangeException();
    }

    [Theory]
    [MemberData(nameof(BooleanPermutation3))]
    public async Task GetBlockHashesByMiner(bool fromHalfway, bool throughHalfway, bool desc)
    {
        foreach (var pk in ChainFx.PrivateKeys)
        {
            var address = pk.Address;
            var inChain = ChainFx.MinedBlocks[address].ToArray();
            inChain = desc ? inChain.Reverse().ToArray() : inChain;
            int? fromHeight = fromHalfway ? inChain.Length / 4 : null;
            int? maxCount = throughHalfway ? inChain.Length / 2 : null;
            inChain = inChain[
                (fromHeight ?? 0)
                ..(maxCount is { } limitValue ? (fromHeight ?? 0) + limitValue : inChain.Length)];
            var indexed =
                Fx.Index.GetBlockHashesFromIndex(fromHeight, maxCount, desc, address).ToArray();
            Assert.Equal(
                indexed,
                await Fx.Index.GetBlockHashesFromIndexAsync(
                    fromHeight, maxCount, desc, address)
                    .ToArrayAsync());
            Assert.Equal(inChain.Length, indexed.Length);
            for (var i = 0; i < indexed.Length; i++)
            {
                Assert.Equal(inChain[i].Hash, indexed[i].Hash);
                Assert.Equal(inChain[i].Index, indexed[i].Index);
            }
        }
    }

    [Fact]
    public async Task GetContainedBlockHashByTxId()
    {
        for (var i = 0; i < ChainFx.Chain.Count; i++)
        {
            foreach (var txId in ChainFx.Chain[i].Transactions.Select(tx => tx.Id))
            {
                // ReSharper disable once MethodHasAsyncOverload
                var indexed = Fx.Index.GetContainedBlockHashByTxId(txId);
                Assert.Equal(ChainFx.Chain[i].Hash, indexed);
                Assert.Equal(indexed, await Fx.Index.GetContainedBlockHashByTxIdAsync(txId));
                Assert.True(Fx.Index.TryGetContainedBlockHashById(txId, out var indexed2));
                Assert.Equal(indexed, indexed2);
            }
        }

        Assert.Throws<IndexOutOfRangeException>(
            () => Fx.Index.GetContainedBlockHashByTxId(new TxId()));
        await Assert.ThrowsAsync<IndexOutOfRangeException>(
            async () => await Fx.Index.GetContainedBlockHashByTxIdAsync(new TxId()));
        Assert.False(Fx.Index.TryGetContainedBlockHashById(new TxId(), out _));
        Assert.Null(await Fx.Index.TryGetContainedBlockHashByIdAsync(new TxId()));
    }

    [Theory]
    [MemberData(nameof(BooleanPermutation3))]
    public async Task GetSignedTxIdsByAddress(bool fromHalfway, bool throughHalfway, bool desc)
    {
        foreach (var pk in ChainFx.PrivateKeys)
        {
            var address = pk.Address;
            var inChain = ChainFx.SignedTxs[address].ToArray();
            inChain = desc ? inChain.Reverse().ToArray() : inChain;
            int? fromNonce = fromHalfway ? inChain.Length / 4 : null;
            int? maxCount = throughHalfway ? inChain.Length / 2 : null;
            inChain = inChain[
                (fromNonce ?? 0)
                ..(maxCount is { } limitValue ? (fromNonce ?? 0) + limitValue : inChain.Length)];
            var indexed =
                Fx.Index.GetSignedTxIdsByAddress(address, fromNonce, maxCount, desc).ToArray();
            Assert.Equal(inChain.Length, indexed.Length);
            Assert.Equal(
                indexed,
                await Fx.Index.GetSignedTxIdsByAddressAsync(address, fromNonce, maxCount, desc)
                    .ToArrayAsync());
            for (var i = 0; i < indexed.Length; i++)
            {
                Assert.Equal(inChain[i].Id, indexed[i]);
            }
        }
    }

    public static IEnumerable<object[]> BooleanPermutation(short count) =>
        Enumerable.Range(0, 1 << count)
            .Aggregate(
                ImmutableArray<object[]>.Empty,
                (arr, bitString) =>
                    arr.Add(
                        Enumerable.Range(0, count)
                            .Aggregate(
                                ImmutableArray<object>.Empty,
                                (arr, item) =>
                                {
                                    var newArr = arr.Add(bitString % 2 != 0);
                                    bitString >>= 1;
                                    return newArr;
                                }).ToArray()));

    public static IEnumerable<object[]> BooleanPermutation3() => BooleanPermutation(3);

    public enum SpecialRangeKind
    {
        OmitStartEnd,
        OmitEnd,
        StartFromEnd,
        EndFromEnd
    }
}
