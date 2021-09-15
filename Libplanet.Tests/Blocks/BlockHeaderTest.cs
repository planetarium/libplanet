using System;
using System.Collections.Immutable;
using System.Globalization;
using System.Numerics;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Blocks;
using Libplanet.Tests.Common.Action;
using Xunit;
using static Libplanet.Tests.TestUtils;

namespace Libplanet.Tests.Blocks
{
    public class BlockHeaderTest : IClassFixture<BlockFixture>
    {
        private const string TimestampFormat = "yyyy-MM-ddTHH:mm:ss.ffffffZ";

        private BlockFixture _fx;

        public BlockHeaderTest(BlockFixture fixture) => _fx = fixture;

        [Fact]
        public void ToBencodex()
        {
            var header = new BlockHeader(
                protocolVersion: 0,
                index: 0,
                difficulty: _fx.Genesis.Difficulty,
                totalDifficulty: _fx.Genesis.TotalDifficulty,
                nonce: _fx.Genesis.Nonce,
                miner: _fx.Genesis.Miner,
                hash: _fx.Genesis.Hash,
                txHash: _fx.Genesis.TxHash,
                previousHash: _fx.Genesis.PreviousHash,
                timestamp: _fx.Genesis.Timestamp,
                preEvaluationHash: _fx.Genesis.PreEvaluationHash,
                stateRootHash: _fx.Genesis.StateRootHash,
                hashAlgorithm: _fx.GetHashAlgorithm(0)
            );
            Bencodex.Types.Dictionary expected = Bencodex.Types.Dictionary.Empty
                .Add(BlockHeader.IndexKey, 0)
                .Add(
                    BlockHeader.TimestampKey,
                    _fx.Genesis.Timestamp.ToString(TimestampFormat, CultureInfo.InvariantCulture)
                )
                .Add(BlockHeader.DifficultyKey, _fx.Genesis.Difficulty)
                .Add(
                    BlockHeader.TotalDifficultyKey,
                    (IValue)new Bencodex.Types.Integer(_fx.Genesis.TotalDifficulty)
                )
                .Add(BlockHeader.NonceKey, _fx.Genesis.Nonce.ByteArray)
                .Add(BlockHeader.HashKey, _fx.Genesis.Hash.ByteArray)
                .Add(BlockHeader.MinerKey, _fx.Genesis.Miner.ByteArray)
                .Add(BlockHeader.PreEvaluationHashKey, _fx.Genesis.PreEvaluationHash)
                .Add(BlockHeader.StateRootHashKey, _fx.Genesis.StateRootHash.ByteArray);
            AssertBencodexEqual(expected, header.ToBencodex());
            AssertBencodexEqual(
                expected,
                new BlockHeader(_fx.GetHashAlgorithm, expected).ToBencodex()
            );

            var random = new Random();
            HashDigest<SHA256> randomHash = random.NextHashDigest<SHA256>();
            HashDigest<SHA256> randomHash2 = random.NextHashDigest<SHA256>();
            header = new BlockHeader(
                protocolVersion: 1,
                index: 1,
                difficulty: _fx.Next.Difficulty,
                totalDifficulty: _fx.Next.TotalDifficulty,
                nonce: _fx.Next.Nonce,
                miner: _fx.Next.Miner,
                hash: _fx.Next.Hash,
                txHash: randomHash,
                previousHash: _fx.Genesis.Hash,
                timestamp: _fx.Next.Timestamp,
                preEvaluationHash: ImmutableArray<byte>.Empty,
                stateRootHash: randomHash2,
                hashAlgorithm: _fx.GetHashAlgorithm(1)
            );
            expected = Bencodex.Types.Dictionary.Empty
                .Add(BlockHeader.ProtocolVersionKey, 1)
                .Add(BlockHeader.IndexKey, 1)
                .Add(
                    BlockHeader.TimestampKey,
                    _fx.Next.Timestamp.ToString(
                        TimestampFormat,
                        CultureInfo.InvariantCulture
                    )
                )
                .Add(BlockHeader.DifficultyKey, _fx.Next.Difficulty)
                .Add(
                    BlockHeader.TotalDifficultyKey,
                    (IValue)new Bencodex.Types.Integer(_fx.Next.TotalDifficulty)
                )
                .Add(BlockHeader.NonceKey, _fx.Next.Nonce.ByteArray)
                .Add(BlockHeader.MinerKey, _fx.Next.Miner.ByteArray)
                .Add(BlockHeader.HashKey, _fx.Next.Hash.ByteArray)
                .Add(BlockHeader.PreviousHashKey, _fx.Genesis.Hash.ByteArray)
                .Add(BlockHeader.TxHashKey, randomHash.ByteArray)
                .Add(BlockHeader.StateRootHashKey, randomHash2.ByteArray);
            AssertBencodexEqual(expected, header.ToBencodex());
            AssertBencodexEqual(
                expected,
                new BlockHeader(_fx.GetHashAlgorithm, expected).ToBencodex()
            );
        }

        [Fact]
        public void ValidateValidHeader()
        {
            _fx.Genesis.Header.Validate(_fx.GetHashAlgorithm(0), DateTimeOffset.UtcNow);
            _fx.Next.Header.Validate(_fx.GetHashAlgorithm(1), DateTimeOffset.UtcNow);
        }

        [Fact]
        public void ValidateHash()
        {
            var header = new BlockHeader(
                protocolVersion: 0,
                index: 0,
                difficulty: _fx.Genesis.Difficulty,
                totalDifficulty: _fx.Genesis.TotalDifficulty,
                nonce: _fx.Genesis.Nonce,
                miner: _fx.Genesis.Miner,
                hash: new Random().NextBlockHash(),
                txHash: _fx.Genesis.TxHash,
                previousHash: _fx.Genesis.PreviousHash,
                timestamp: _fx.Genesis.Timestamp,
                preEvaluationHash: _fx.Genesis.PreEvaluationHash,
                stateRootHash: _fx.Genesis.StateRootHash,
                hashAlgorithm: _fx.GetHashAlgorithm(0)
            );

            Assert.Throws<InvalidBlockHashException>(
                () => { header.Validate(_fx.GetHashAlgorithm(0), DateTime.UtcNow); });
        }

        [Fact]
        public void ValidateProtocolVersion()
        {
            var header = new BlockHeader(
                protocolVersion: -1,
                index: _fx.Next.Index,
                difficulty: _fx.Next.Difficulty,
                totalDifficulty: _fx.Next.TotalDifficulty,
                nonce: _fx.Next.Nonce,
                miner: _fx.Next.Miner,
                hash: _fx.Next.Hash,
                txHash: _fx.Next.TxHash,
                previousHash: _fx.Next.PreviousHash,
                timestamp: _fx.Next.Timestamp,
                preEvaluationHash: GetRandomBytes(32).ToImmutableArray(),
                stateRootHash: null,
                hashAlgorithm: _fx.GetHashAlgorithm(_fx.Next.Index)
            );

            Assert.Throws<InvalidBlockProtocolVersionException>(() =>
                header.Validate(_fx.GetHashAlgorithm(_fx.Next.Index), DateTimeOffset.UtcNow)
            );

            header = new BlockHeader(
                protocolVersion: Block<DumbAction>.CurrentProtocolVersion + 1,
                index: _fx.Next.Index,
                difficulty: _fx.Next.Difficulty,
                totalDifficulty: _fx.Next.TotalDifficulty,
                nonce: _fx.Next.Nonce,
                miner: _fx.Next.Miner,
                hash: _fx.Next.Hash,
                txHash: _fx.Next.TxHash,
                previousHash: _fx.Next.PreviousHash,
                timestamp: _fx.Next.Timestamp,
                preEvaluationHash: GetRandomBytes(32).ToImmutableArray(),
                stateRootHash: null,
                hashAlgorithm: _fx.GetHashAlgorithm(_fx.Next.Index)
            );

            Assert.Throws<InvalidBlockProtocolVersionException>(() =>
                header.Validate(_fx.GetHashAlgorithm(_fx.Next.Index), DateTimeOffset.UtcNow)
            );
        }

        [Fact]
        public void ValidateTimestamp()
        {
            DateTimeOffset now = DateTimeOffset.UtcNow;
            DateTimeOffset future = now + TimeSpan.FromSeconds(16);
            HashAlgorithmType hashAlgorithm = _fx.GetHashAlgorithm(0);
            BlockHeader header = MakeBlockHeader(
                hashAlgorithm: hashAlgorithm,
                protocolVersion: 0,
                index: 0,
                difficulty: 0,
                totalDifficulty: 0,
                nonce: default,
                previousHash: null,
                txHash: default,
                miner: default,
                timestamp: future,
                preEvaluationHash: GetRandomBytes(32).ToImmutableArray(),
                stateRootHash: new Random().NextHashDigest<SHA256>()
            );

            Assert.Throws<InvalidBlockTimestampException>(
                () => { header.Validate(hashAlgorithm, now); });

            // it's okay because 2 seconds later.
            header.Validate(hashAlgorithm, now + TimeSpan.FromSeconds(2));
        }

        [Fact]
        public void ValidateNonce()
        {
            HashAlgorithmType hashAlgorithm = _fx.GetHashAlgorithm(_fx.Next.Index);
            var header = new BlockHeader(
                protocolVersion: 0,
                index: _fx.Next.Index,
                difficulty: long.MaxValue,
                totalDifficulty: _fx.Genesis.TotalDifficulty + long.MaxValue,
                nonce: _fx.Next.Nonce,
                miner: _fx.Next.Miner,
                hash: _fx.Next.Hash,
                txHash: _fx.Next.TxHash,
                previousHash: _fx.Next.PreviousHash,
                timestamp: _fx.Next.Timestamp,
                preEvaluationHash: GetRandomBytes(32).ToImmutableArray(),
                stateRootHash: null,
                hashAlgorithm: hashAlgorithm
            );

            Assert.Throws<InvalidBlockNonceException>(() =>
                header.Validate(hashAlgorithm, DateTimeOffset.UtcNow));
        }

        [Fact]
        public void ValidateIndex()
        {
            HashAlgorithmType hashAlgorithm = _fx.GetHashAlgorithm(-1);
            var header = new BlockHeader(
                protocolVersion: 0,
                index: -1,
                difficulty: _fx.Next.Difficulty,
                totalDifficulty: _fx.Next.TotalDifficulty,
                nonce: _fx.Next.Nonce,
                miner: _fx.Next.Miner,
                hash: _fx.Next.Hash,
                txHash: _fx.Next.TxHash,
                previousHash: _fx.Next.PreviousHash,
                timestamp: _fx.Next.Timestamp,
                preEvaluationHash: GetRandomBytes(32).ToImmutableArray(),
                stateRootHash: null,
                hashAlgorithm: hashAlgorithm
            );

            Assert.Throws<InvalidBlockIndexException>(() =>
                header.Validate(hashAlgorithm, DateTimeOffset.UtcNow));
        }

        [Fact]
        public void ValidateDifficulty()
        {
            DateTimeOffset now = DateTimeOffset.UtcNow;
            var random = new Random();
            var genesisHeader = new BlockHeader(
                protocolVersion: 0,
                index: 0,
                difficulty: 1000,
                totalDifficulty: 1000,
                nonce: default,
                previousHash: null,
                txHash: default,
                hash: random.NextBlockHash(),
                miner: default,
                timestamp: now,
                preEvaluationHash: GetRandomBytes(32).ToImmutableArray(),
                stateRootHash: null,
                hashAlgorithm: _fx.GetHashAlgorithm(0)
            );

            Assert.Throws<InvalidBlockDifficultyException>(() =>
                genesisHeader.Validate(_fx.GetHashAlgorithm(0), DateTimeOffset.UtcNow));

            var header1 = new BlockHeader(
                protocolVersion: 0,
                index: 10,
                difficulty: 0,
                totalDifficulty: 1000,
                nonce: default,
                previousHash: null,
                txHash: default,
                hash: random.NextBlockHash(),
                miner: default,
                timestamp: now,
                preEvaluationHash: GetRandomBytes(32).ToImmutableArray(),
                stateRootHash: null,
                hashAlgorithm: _fx.GetHashAlgorithm(10)
            );

            Assert.Throws<InvalidBlockDifficultyException>(() =>
                header1.Validate(_fx.GetHashAlgorithm(10), DateTimeOffset.UtcNow));

            var header2 = new BlockHeader(
                protocolVersion: 0,
                index: 10,
                difficulty: 1000,
                totalDifficulty: 10,
                nonce: default,
                previousHash: null,
                txHash: default(HashDigest<SHA256>),
                hash: random.NextBlockHash(),
                miner: default,
                timestamp: now,
                preEvaluationHash: GetRandomBytes(32).ToImmutableArray(),
                stateRootHash: null,
                hashAlgorithm: _fx.GetHashAlgorithm(10)
            );

            Assert.Throws<InvalidBlockTotalDifficultyException>(() =>
                header2.Validate(_fx.GetHashAlgorithm(10), DateTimeOffset.UtcNow));
        }

        [Fact]
        public void ValidatePreviousHash()
        {
            DateTimeOffset now = DateTimeOffset.UtcNow;
            var random = new Random();
            var genesisHeader = new BlockHeader(
                protocolVersion: 0,
                index: 0,
                difficulty: 0,
                totalDifficulty: 0,
                nonce: default,
                previousHash: random.NextBlockHash(),
                txHash: default(HashDigest<SHA256>),
                hash: random.NextBlockHash(),
                miner: default,
                timestamp: now,
                preEvaluationHash: GetRandomBytes(32).ToImmutableArray(),
                stateRootHash: null,
                hashAlgorithm: _fx.GetHashAlgorithm(0)
            );

            Assert.Throws<InvalidBlockPreviousHashException>(() =>
                genesisHeader.Validate(_fx.GetHashAlgorithm(0), DateTimeOffset.UtcNow));

            var header = new BlockHeader(
                protocolVersion: 0,
                index: 10,
                difficulty: 1000,
                totalDifficulty: 1500,
                nonce: default,
                previousHash: null,
                txHash: default(HashDigest<SHA256>),
                hash: random.NextBlockHash(),
                miner: default,
                timestamp: now,
                preEvaluationHash: GetRandomBytes(32).ToImmutableArray(),
                stateRootHash: null,
                hashAlgorithm: _fx.GetHashAlgorithm(0)
            );

            Assert.Throws<InvalidBlockPreviousHashException>(() =>
                genesisHeader.Validate(_fx.GetHashAlgorithm(0), DateTimeOffset.UtcNow));
        }

        private BlockHeader MakeBlockHeader(
            HashAlgorithmType hashAlgorithm,
            int protocolVersion,
            long index,
            long difficulty,
            BigInteger totalDifficulty,
            Nonce nonce,
            BlockHash? previousHash,
            HashDigest<SHA256> txHash,
            Address miner,
            DateTimeOffset timestamp,
            ImmutableArray<byte> preEvaluationHash,
            HashDigest<SHA256>? stateRootHash
        )
        {
            return new BlockHeader(
                protocolVersion: protocolVersion,
                index: index,
                timestamp: timestamp,
                nonce: nonce,
                miner: miner,
                difficulty: difficulty,
                totalDifficulty: totalDifficulty,
                previousHash: previousHash,
                txHash: txHash,
                preEvaluationHash: preEvaluationHash,
                stateRootHash: stateRootHash,
                hashAlgorithm: hashAlgorithm);
        }
    }
}
