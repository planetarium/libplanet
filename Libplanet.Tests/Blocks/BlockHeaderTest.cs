using System;
using System.Collections.Immutable;
using System.Globalization;
using System.Numerics;
using Libplanet.Blocks;
using Xunit;

namespace Libplanet.Tests.Blocks
{
    public class BlockHeaderTest : IClassFixture<BlockFixture>
    {
        private BlockFixture _fx;

        public BlockHeaderTest(BlockFixture fixture) => _fx = fixture;

        [Fact]
        public void ValidateTimestamp()
        {
            DateTimeOffset now = DateTimeOffset.UtcNow;
            string future = (now + TimeSpan.FromSeconds(16))
                .ToString(BlockHeader.TimestampFormat, CultureInfo.InvariantCulture);
            BlockHeader header = MakeBlockHeader(
                index: 0,
                difficulty: 0,
                totalDifficulty: 0,
                nonce: ImmutableArray<byte>.Empty,
                previousHash: ImmutableArray<byte>.Empty,
                txHash: ImmutableArray<byte>.Empty,
                miner: ImmutableArray<byte>.Empty,
                timestamp: future,
                preEvaluationHash: TestUtils.GetRandomBytes(32).ToImmutableArray(),
                stateRootHash: ImmutableArray<byte>.Empty
            );

            Assert.Throws<InvalidBlockTimestampException>(
                () => { header.Validate(now); });

            // it's okay because 2 seconds later.
            header.Validate(now + TimeSpan.FromSeconds(2));
        }

        [Fact]
        public void ValidateNonce()
        {
            var header = new BlockHeader(
                index: _fx.Next.Index,
                difficulty: long.MaxValue,
                totalDifficulty: _fx.Genesis.TotalDifficulty + long.MaxValue,
                nonce: _fx.Next.Nonce.ByteArray,
                miner: _fx.Next.Miner?.ByteArray ?? ImmutableArray<byte>.Empty,
                hash: _fx.Next.Hash.ByteArray,
                txHash: _fx.Next.TxHash?.ByteArray ?? ImmutableArray<byte>.Empty,
                previousHash: _fx.Next.PreviousHash?.ByteArray ?? ImmutableArray<byte>.Empty,
                timestamp: _fx.Next.Timestamp.ToString(
                    BlockHeader.TimestampFormat,
                    CultureInfo.InvariantCulture
                ),
                preEvaluationHash: TestUtils.GetRandomBytes(32).ToImmutableArray(),
                stateRootHash: ImmutableArray<byte>.Empty
            );

            Assert.Throws<InvalidBlockNonceException>(() =>
                header.Validate(DateTimeOffset.UtcNow));
        }

        [Fact]
        public void ValidateIndex()
        {
            var header = new BlockHeader(
                index: -1,
                difficulty: _fx.Next.Difficulty,
                totalDifficulty: _fx.Next.TotalDifficulty,
                nonce: _fx.Next.Nonce.ByteArray,
                miner: _fx.Next.Miner?.ByteArray ?? ImmutableArray<byte>.Empty,
                hash: _fx.Next.Hash.ByteArray,
                txHash: _fx.Next.TxHash?.ByteArray ?? ImmutableArray<byte>.Empty,
                previousHash: _fx.Next.PreviousHash?.ByteArray ?? ImmutableArray<byte>.Empty,
                timestamp: _fx.Next.Timestamp.ToString(
                    BlockHeader.TimestampFormat,
                    CultureInfo.InvariantCulture
                ),
                preEvaluationHash: TestUtils.GetRandomBytes(32).ToImmutableArray(),
                stateRootHash: ImmutableArray<byte>.Empty
            );

            Assert.Throws<InvalidBlockIndexException>(() =>
                header.Validate(DateTimeOffset.UtcNow));
        }

        [Fact]
        public void ValidateDifficulty()
        {
            DateTimeOffset now = DateTimeOffset.UtcNow;
            var genesisHeader = new BlockHeader(
                index: 0,
                difficulty: 1000,
                totalDifficulty: 1000,
                nonce: ImmutableArray<byte>.Empty,
                previousHash: ImmutableArray<byte>.Empty,
                txHash: ImmutableArray<byte>.Empty,
                hash: TestUtils.GetRandomBytes(32).ToImmutableArray(),
                miner: ImmutableArray<byte>.Empty,
                timestamp: now.ToString(BlockHeader.TimestampFormat, CultureInfo.InvariantCulture),
                preEvaluationHash: TestUtils.GetRandomBytes(32).ToImmutableArray(),
                stateRootHash: ImmutableArray<byte>.Empty
            );

            Assert.Throws<InvalidBlockDifficultyException>(() =>
                genesisHeader.Validate(DateTimeOffset.UtcNow));

            var header1 = new BlockHeader(
                index: 10,
                difficulty: 0,
                totalDifficulty: 1000,
                nonce: ImmutableArray<byte>.Empty,
                previousHash: ImmutableArray<byte>.Empty,
                txHash: ImmutableArray<byte>.Empty,
                hash: TestUtils.GetRandomBytes(32).ToImmutableArray(),
                miner: ImmutableArray<byte>.Empty,
                timestamp: now.ToString(BlockHeader.TimestampFormat, CultureInfo.InvariantCulture),
                preEvaluationHash: TestUtils.GetRandomBytes(32).ToImmutableArray(),
                stateRootHash: ImmutableArray<byte>.Empty
            );

            Assert.Throws<InvalidBlockDifficultyException>(() =>
                header1.Validate(DateTimeOffset.UtcNow));

            var header2 = new BlockHeader(
                index: 10,
                difficulty: 1000,
                totalDifficulty: 10,
                nonce: ImmutableArray<byte>.Empty,
                previousHash: ImmutableArray<byte>.Empty,
                txHash: ImmutableArray<byte>.Empty,
                hash: TestUtils.GetRandomBytes(32).ToImmutableArray(),
                miner: ImmutableArray<byte>.Empty,
                timestamp: now.ToString(BlockHeader.TimestampFormat, CultureInfo.InvariantCulture),
                preEvaluationHash: TestUtils.GetRandomBytes(32).ToImmutableArray(),
                stateRootHash: ImmutableArray<byte>.Empty
            );

            Assert.Throws<InvalidBlockTotalDifficultyException>(() =>
                header2.Validate(DateTimeOffset.UtcNow));
        }

        [Fact]
        public void ValidatePreviousHash()
        {
            DateTimeOffset now = DateTimeOffset.UtcNow;
            var genesisHeader = new BlockHeader(
                index: 0,
                difficulty: 0,
                totalDifficulty: 0,
                nonce: ImmutableArray<byte>.Empty,
                previousHash: TestUtils.GetRandomBytes(32).ToImmutableArray(),
                txHash: ImmutableArray<byte>.Empty,
                hash: TestUtils.GetRandomBytes(32).ToImmutableArray(),
                miner: ImmutableArray<byte>.Empty,
                timestamp: now.ToString(BlockHeader.TimestampFormat, CultureInfo.InvariantCulture),
                preEvaluationHash: TestUtils.GetRandomBytes(32).ToImmutableArray(),
                stateRootHash: ImmutableArray<byte>.Empty
            );

            Assert.Throws<InvalidBlockPreviousHashException>(() =>
                genesisHeader.Validate(DateTimeOffset.UtcNow));

            var header = new BlockHeader(
                index: 10,
                difficulty: 1000,
                totalDifficulty: 1500,
                nonce: ImmutableArray<byte>.Empty,
                previousHash: ImmutableArray<byte>.Empty,
                txHash: ImmutableArray<byte>.Empty,
                hash: TestUtils.GetRandomBytes(32).ToImmutableArray(),
                miner: ImmutableArray<byte>.Empty,
                timestamp: now.ToString(BlockHeader.TimestampFormat, CultureInfo.InvariantCulture),
                preEvaluationHash: TestUtils.GetRandomBytes(32).ToImmutableArray(),
                stateRootHash: ImmutableArray<byte>.Empty
            );

            Assert.Throws<InvalidBlockPreviousHashException>(() =>
                genesisHeader.Validate(DateTimeOffset.UtcNow));
        }

        private BlockHeader MakeBlockHeader(
            long index,
            long difficulty,
            BigInteger totalDifficulty,
            ImmutableArray<byte> nonce,
            ImmutableArray<byte> previousHash,
            ImmutableArray<byte> txHash,
            ImmutableArray<byte> miner,
            string timestamp,
            ImmutableArray<byte> preEvaluationHash,
            ImmutableArray<byte> stateRootHash
        )
        {
            ImmutableArray<byte> hash = Hashcash.Hash(
                BlockHeader.SerializeForHash(
                    index,
                    timestamp,
                    difficulty,
                    nonce,
                    miner,
                    previousHash,
                    txHash,
                    stateRootHash
                )
            ).ByteArray;
            return new BlockHeader(
                index,
                timestamp,
                nonce,
                miner,
                difficulty,
                totalDifficulty,
                previousHash,
                txHash,
                hash,
                preEvaluationHash,
                stateRootHash
            );
        }
    }
}
