using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Globalization;
using System.Linq;
using System.Security.Cryptography;
using Bencodex;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Store;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Fixtures;
using Libplanet.Tx;
using Xunit;
using Xunit.Abstractions;
using static Libplanet.Tests.TestUtils;

namespace Libplanet.Tests.Blocks
{
    public class BlockTest : IClassFixture<BlockFixture>
    {
        private BlockFixture _fx;
        private ITestOutputHelper _output;

        public BlockTest(BlockFixture fixture, ITestOutputHelper output)
        {
            _fx = fixture;
            _output = output;
        }

        [Fact]
        public void Constructor()
        {
            var contents = new BlockContentFixture();
            var random = new System.Random();
            var stateRootHash = random.NextHashDigest<SHA256>();
            PreEvaluationBlock<Arithmetic> preEval = contents.Genesis.Mine(_fx.GetHashAlgorithm(0));
            var block = new Block<Arithmetic>(
                preEval,
                stateRootHash
            );
            AssertPreEvaluationBlocksEqual(preEval, block);
            AssertBytesEqual(stateRootHash, block.StateRootHash);
        }

        [Fact]
        public void Transactions()
        {
            // Creates fixtures.
            PrivateKey[] privKeys =
                Enumerable.Repeat((object)null, 5).Select(_ => new PrivateKey()).ToArray();
            var random = new System.Random();
            Transaction<DumbAction>[] txs = Enumerable.Range(0, 50)
                .Select(i => (privKeys[i % privKeys.Length], i / privKeys.Length))
                .Select(pair =>
                    Transaction<DumbAction>.Create(
                        nonce: pair.Item2,
                        privateKey: pair.Item1,
                        genesisHash: null,
                        actions: new DumbAction[0]
                    )
                )
                .OrderBy(_ => random.Next())
                .ToArray();
            var block = new Block<DumbAction>(
                index: 0,
                difficulty: 0,
                totalDifficulty: 0,
                nonce: new Nonce(new byte[0]),
                miner: new Address(new byte[Address.Size]),
                previousHash: null,
                timestamp: DateTimeOffset.UtcNow,
                transactions: txs,
                stateRootHash: default(HashDigest<SHA256>),
                hashAlgorithm: HashAlgorithmType.Of<SHA256>()
            );

            // For transactions signed by the same signer, these should be ordered by its tx nonce.
            Address[] signers = privKeys.Select(AddressExtensions.ToAddress).ToArray();
            foreach (Address signer in signers)
            {
                IEnumerable<Transaction<DumbAction>> signersTxs =
                    block.Transactions.Where(tx => tx.Signer == signer);
                Assert.Equal(signersTxs.OrderBy(tx => tx.Nonce).ToArray(), signersTxs.ToArray());
            }
        }

        [Fact]
        public void Mine()
        {
            Assert.Equal(0, _fx.Genesis.Index);
            Assert.Equal(0, _fx.Genesis.Difficulty);
            Assert.Null(_fx.Genesis.PreviousHash);
            Assert.Equal(
                new DateTimeOffset(2018, 11, 29, 0, 0, 0, TimeSpan.Zero),
                _fx.Genesis.Timestamp
            );
            Assert.Equal(
                new Address("21744f4f08db23e044178dafb8273aeb5ebe6644"),
                _fx.Genesis.Miner);
            Assert.Equal(new Nonce(new byte[] { 0x01, 0x00, 0x00, 0x00 }), _fx.Genesis.Nonce);
            AssertBytesEqual(
                BlockHash.FromString(
                    "1f83d5e19ffe9e91661c01fae11e4946" +
                    "ad290947f0e7b266409eee7d3adee78e"
                ),
                _fx.Genesis.Hash
            );

            Block<PolymorphicAction<BaseAction>> next =
                MineNextBlock(_fx.Genesis, _fx.GetHashAlgorithm);

            Assert.Equal(1, _fx.Next.Index);
            Assert.Equal(1, _fx.Next.Difficulty);
            Assert.Equal(_fx.Genesis.Hash, _fx.Next.PreviousHash);
            Assert.Equal(
                new DateTimeOffset(2018, 11, 29, 0, 0, 15, TimeSpan.Zero),
                _fx.Next.Timestamp
            );
            Assert.Equal(
                new Address("21744f4f08db23e044178dafb8273aeb5ebe6644"),
                _fx.Next.Miner);
        }

        [Fact]
        public void Serialize()
        {
            byte[] expected =
            {
                0x64, 0x31, 0x3a, 0x48, 0x64, 0x31, 0x3a, 0x00, 0x69, 0x31, 0x65, 0x31, 0x3a, 0x54,
                0x69, 0x30, 0x65, 0x31, 0x3a, 0x63, 0x33, 0x32, 0x3a, 0xd6, 0x93, 0xda, 0x38, 0x66,
                0xa3, 0x4d, 0x65, 0x9e, 0x01, 0x4f, 0x97, 0xc8, 0xfe, 0xb0, 0x8a, 0xfe, 0x2e, 0x97,
                0xc9, 0x9e, 0x3f, 0x33, 0x89, 0xda, 0x02, 0x5f, 0xd0, 0x66, 0x5c, 0x62, 0x1c, 0x31,
                0x3a, 0x64, 0x69, 0x30, 0x65, 0x31, 0x3a, 0x68, 0x33, 0x32, 0x3a, 0x1f, 0x83, 0xd5,
                0xe1, 0x9f, 0xfe, 0x9e, 0x91, 0x66, 0x1c, 0x01, 0xfa, 0xe1, 0x1e, 0x49, 0x46, 0xad,
                0x29, 0x09, 0x47, 0xf0, 0xe7, 0xb2, 0x66, 0x40, 0x9e, 0xee, 0x7d, 0x3a, 0xde, 0xe7,
                0x8e, 0x31, 0x3a, 0x69, 0x69, 0x30, 0x65, 0x31, 0x3a, 0x6d, 0x32, 0x30, 0x3a, 0x21,
                0x74, 0x4f, 0x4f, 0x08, 0xdb, 0x23, 0xe0, 0x44, 0x17, 0x8d, 0xaf, 0xb8, 0x27, 0x3a,
                0xeb, 0x5e, 0xbe, 0x66, 0x44, 0x31, 0x3a, 0x6e, 0x34, 0x3a, 0x01, 0x00, 0x00, 0x00,
                0x31, 0x3a, 0x73, 0x33, 0x32, 0x3a, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
                0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
                0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x31, 0x3a, 0x74, 0x75,
                0x32, 0x37, 0x3a, 0x32, 0x30, 0x31, 0x38, 0x2d, 0x31, 0x31, 0x2d, 0x32, 0x39, 0x54,
                0x30, 0x30, 0x3a, 0x30, 0x30, 0x3a, 0x30, 0x30, 0x2e, 0x30, 0x30, 0x30, 0x30, 0x30,
                0x30, 0x5a, 0x65, 0x65,
            };

            AssertBytesEqual(expected, _fx.Genesis.Serialize());
            Assert.Equal(expected.Length, _fx.Genesis.BytesLength);
        }

        [Fact]
        public void Deserialize()
        {
            byte[] encoded =
            {
                0x64, 0x31, 0x3a, 0x48, 0x64, 0x31, 0x3a, 0x00, 0x69, 0x31, 0x65, 0x31, 0x3a, 0x54,
                0x69, 0x32, 0x65, 0x31, 0x3a, 0x63, 0x33, 0x32, 0x3a, 0x65, 0x1a, 0x3f, 0x01, 0xaf,
                0x71, 0x55, 0x10, 0xb8, 0xd1, 0x53, 0xb3, 0x41, 0xbb, 0x75, 0x9b, 0x30, 0x1d, 0x2e,
                0x17, 0xe8, 0xe1, 0x56, 0x2c, 0x8c, 0x8b, 0x3d, 0x20, 0x34, 0xc6, 0xbc, 0xaa, 0x31,
                0x3a, 0x64, 0x69, 0x31, 0x65, 0x31, 0x3a, 0x68, 0x33, 0x32, 0x3a, 0xb2, 0x8e, 0x2b,
                0xd1, 0xfc, 0xc7, 0x47, 0x39, 0x87, 0x57, 0xb0, 0xc4, 0x2f, 0x5f, 0x5e, 0x6c, 0x8e,
                0x52, 0x37, 0xe5, 0x0f, 0xc9, 0x80, 0x08, 0xc3, 0x1b, 0xda, 0x13, 0x77, 0xee, 0xa1,
                0x4a, 0x31, 0x3a, 0x69, 0x69, 0x32, 0x65, 0x31, 0x3a, 0x6d, 0x32, 0x30, 0x3a, 0x21,
                0x74, 0x4f, 0x4f, 0x08, 0xdb, 0x23, 0xe0, 0x44, 0x17, 0x8d, 0xaf, 0xb8, 0x27, 0x3a,
                0xeb, 0x5e, 0xbe, 0x66, 0x44, 0x31, 0x3a, 0x6e, 0x31, 0x30, 0x3a, 0x5c, 0x77, 0x74,
                0xc2, 0x39, 0x69, 0x37, 0x51, 0x87, 0xa5, 0x31, 0x3a, 0x70, 0x33, 0x32, 0x3a, 0x59,
                0x7a, 0x34, 0x4e, 0x29, 0x10, 0xbe, 0x41, 0x82, 0x6a, 0x4a, 0x52, 0x07, 0x2d, 0xd3,
                0x81, 0x2b, 0x51, 0xd8, 0xc1, 0x56, 0x75, 0x48, 0x63, 0xad, 0xf0, 0xeb, 0x33, 0x95,
                0x5d, 0x21, 0x5f, 0x31, 0x3a, 0x73, 0x33, 0x32, 0x3a, 0x00, 0x00, 0x00, 0x00, 0x00,
                0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
                0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x31,
                0x3a, 0x74, 0x75, 0x32, 0x37, 0x3a, 0x32, 0x30, 0x31, 0x38, 0x2d, 0x31, 0x31, 0x2d,
                0x32, 0x39, 0x54, 0x30, 0x30, 0x3a, 0x30, 0x30, 0x3a, 0x33, 0x30, 0x2e, 0x30, 0x30,
                0x30, 0x30, 0x30, 0x30, 0x5a, 0x31, 0x3a, 0x78, 0x33, 0x32, 0x3a, 0x3b, 0xc7, 0xcc,
                0x26, 0x3b, 0x24, 0xc3, 0x0a, 0x02, 0xe4, 0xd3, 0x86, 0x72, 0x17, 0xdc, 0xb2, 0x50,
                0x0e, 0x49, 0x12, 0xea, 0x56, 0x2b, 0x29, 0xb5, 0x2b, 0x97, 0xb0, 0xa1, 0x81, 0xbe,
                0x45, 0x65, 0x31, 0x3a, 0x54, 0x6c, 0x34, 0x33, 0x35, 0x3a, 0x64, 0x31, 0x3a, 0x53,
                0x37, 0x30, 0x3a, 0x30, 0x44, 0x02, 0x20, 0x05, 0x5f, 0x77, 0xce, 0x80, 0x50, 0xfd,
                0x06, 0xf9, 0xcc, 0xf4, 0x6b, 0x5f, 0x69, 0xe3, 0xef, 0x10, 0xae, 0x0d, 0xa8, 0x21,
                0xb6, 0xdf, 0xfa, 0x46, 0xe6, 0x20, 0x1c, 0x77, 0xbf, 0x90, 0x45, 0x02, 0x20, 0x5e,
                0x48, 0xc1, 0xa1, 0xdf, 0x7e, 0xfb, 0x8d, 0xe1, 0x55, 0x2c, 0xde, 0xa9, 0x25, 0xcf,
                0x84, 0x55, 0xb2, 0x36, 0x7e, 0x10, 0x0a, 0x9b, 0xaa, 0x71, 0x7b, 0x55, 0x9c, 0x74,
                0xf4, 0x40, 0xb2, 0x31, 0x3a, 0x61, 0x6c, 0x64, 0x75, 0x37, 0x3a, 0x74, 0x79, 0x70,
                0x65, 0x5f, 0x69, 0x64, 0x75, 0x36, 0x3a, 0x61, 0x74, 0x74, 0x61, 0x63, 0x6b, 0x75,
                0x36, 0x3a, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x73, 0x64, 0x75, 0x36, 0x3a, 0x74, 0x61,
                0x72, 0x67, 0x65, 0x74, 0x75, 0x33, 0x3a, 0x6f, 0x72, 0x63, 0x75, 0x31, 0x34, 0x3a,
                0x74, 0x61, 0x72, 0x67, 0x65, 0x74, 0x5f, 0x61, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73,
                0x32, 0x30, 0x3a, 0xc2, 0xa8, 0x60, 0x14, 0x07, 0x3d, 0x66, 0x2a, 0x4a, 0x9b, 0xfc,
                0xf9, 0xcb, 0x54, 0x26, 0x3d, 0xfa, 0x4f, 0x5c, 0xbc, 0x75, 0x36, 0x3a, 0x77, 0x65,
                0x61, 0x70, 0x6f, 0x6e, 0x75, 0x34, 0x3a, 0x77, 0x61, 0x6e, 0x64, 0x65, 0x65, 0x64,
                0x75, 0x37, 0x3a, 0x74, 0x79, 0x70, 0x65, 0x5f, 0x69, 0x64, 0x75, 0x35, 0x3a, 0x73,
                0x6c, 0x65, 0x65, 0x70, 0x75, 0x36, 0x3a, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x73, 0x64,
                0x75, 0x37, 0x3a, 0x7a, 0x6f, 0x6e, 0x65, 0x5f, 0x69, 0x64, 0x69, 0x31, 0x30, 0x65,
                0x65, 0x65, 0x65, 0x31, 0x3a, 0x67, 0x33, 0x32, 0x3a, 0x1f, 0x83, 0xd5, 0xe1, 0x9f,
                0xfe, 0x9e, 0x91, 0x66, 0x1c, 0x01, 0xfa, 0xe1, 0x1e, 0x49, 0x46, 0xad, 0x29, 0x09,
                0x47, 0xf0, 0xe7, 0xb2, 0x66, 0x40, 0x9e, 0xee, 0x7d, 0x3a, 0xde, 0xe7, 0x8e, 0x31,
                0x3a, 0x6e, 0x69, 0x30, 0x65, 0x31, 0x3a, 0x70, 0x36, 0x35, 0x3a, 0x04, 0x46, 0x11,
                0x5b, 0x01, 0x31, 0xba, 0xcc, 0xf9, 0x4a, 0x58, 0x56, 0xed, 0xe8, 0x71, 0x29, 0x5f,
                0x6f, 0x3d, 0x35, 0x2e, 0x68, 0x47, 0xcd, 0xa9, 0xc0, 0x3e, 0x89, 0xfe, 0x09, 0xf7,
                0x32, 0x80, 0x87, 0x11, 0xec, 0x97, 0xaf, 0x6e, 0x34, 0x1f, 0x11, 0x0a, 0x32, 0x6d,
                0xa1, 0xbd, 0xb8, 0x1f, 0x5a, 0xe3, 0xba, 0xdf, 0x76, 0xa9, 0x0b, 0x22, 0xc8, 0xc4,
                0x91, 0xae, 0xd3, 0xaa, 0xa2, 0x96, 0x31, 0x3a, 0x73, 0x32, 0x30, 0x3a, 0xc2, 0xa8,
                0x60, 0x14, 0x07, 0x3d, 0x66, 0x2a, 0x4a, 0x9b, 0xfc, 0xf9, 0xcb, 0x54, 0x26, 0x3d,
                0xfa, 0x4f, 0x5c, 0xbc, 0x31, 0x3a, 0x74, 0x75, 0x32, 0x37, 0x3a, 0x32, 0x30, 0x31,
                0x38, 0x2d, 0x31, 0x31, 0x2d, 0x32, 0x31, 0x54, 0x30, 0x30, 0x3a, 0x30, 0x30, 0x3a,
                0x30, 0x30, 0x2e, 0x30, 0x30, 0x30, 0x30, 0x30, 0x30, 0x5a, 0x31, 0x3a, 0x75, 0x6c,
                0x32, 0x30, 0x3a, 0xc2, 0xa8, 0x60, 0x14, 0x07, 0x3d, 0x66, 0x2a, 0x4a, 0x9b, 0xfc,
                0xf9, 0xcb, 0x54, 0x26, 0x3d, 0xfa, 0x4f, 0x5c, 0xbc, 0x65, 0x65, 0x65, 0x65,
            };

            _output.WriteLine(
                $"{nameof(_fx.HasTx)}.{nameof(_fx.HasTx.Serialize)}() = {{0}}",
                ByteUtil.Hex(_fx.HasTx.Serialize())
            );
            Block<PolymorphicAction<BaseAction>> actual =
                Block<PolymorphicAction<BaseAction>>.Deserialize(_fx.GetHashAlgorithm, encoded);
            Assert.Equal(_fx.HasTx, actual);
            Assert.Equal(actual.BytesLength, encoded.Length);
            AssertBytesEqual(_fx.HasTx.Serialize(), encoded);
            Assert.Equal(_fx.HasTx.BytesLength, encoded.Length);
        }

        [Fact]
        public void DetectInvalidTimestamp()
        {
            DateTimeOffset now = DateTimeOffset.UtcNow;
            HashAlgorithmType hashAlgo = _fx.GetHashAlgorithm(_fx.Next.Index);
            PreEvaluationBlock<DumbAction> preEval = new BlockContent<DumbAction>
            {
                Index = _fx.Next.Index,
                Difficulty = _fx.Next.Difficulty,
                TotalDifficulty = _fx.Genesis.TotalDifficulty + _fx.Next.Difficulty,
                Miner = _fx.Next.Miner,
                PreviousHash = _fx.Genesis.Hash,
                Timestamp = now + TimeSpan.FromSeconds(16),
            }.Mine(hashAlgo);
            var block = new Block<DumbAction>(preEval, default);

            Assert.Throws<InvalidBlockTimestampException>(
                () => { block.Validate(hashAlgo, now); });

            // it's okay because 2 seconds later.
            block.Validate(hashAlgo, now + TimeSpan.FromSeconds(2));
        }

        [Fact]
        public void DetectInvalidNonce()
        {
            const int easyDifficulty = 4;
            var invalidBlock = new Block<PolymorphicAction<BaseAction>>(
                index: _fx.Next.Index,
                difficulty: easyDifficulty,
                totalDifficulty: _fx.Genesis.TotalDifficulty + easyDifficulty,
                nonce: new Nonce(new byte[] { 0x00 }),
                miner: _fx.Next.Miner,
                previousHash: _fx.Next.PreviousHash,
                timestamp: _fx.Next.Timestamp,
                transactions: _fx.Next.Transactions,
                preEvaluationHash: _fx.Next.PreEvaluationHash,
                stateRootHash: default(HashDigest<SHA256>),
                protocolVersion: _fx.Next.ProtocolVersion,
                hashAlgorithm: _fx.GetHashAlgorithm(_fx.Next.Index)
            );

            Assert.Throws<InvalidBlockNonceException>(() =>
                invalidBlock.Validate(_fx.GetHashAlgorithm(_fx.Next.Index), DateTimeOffset.UtcNow));
        }

        [Fact]
        public void DetectInvalidDifficulty()
        {
            HashAlgorithmType hashAlgo = _fx.GetHashAlgorithm(_fx.Genesis.Index);
            var invalidDifficultyGenesis = new Block<DumbAction>(
                index: _fx.Genesis.Index,
                difficulty: 1, // invalid
                totalDifficulty: 1,
                nonce: _fx.Genesis.Nonce,
                miner: _fx.Genesis.Miner,
                previousHash: _fx.Genesis.PreviousHash,
                timestamp: _fx.Genesis.Timestamp,
                transactions: MineGenesis<DumbAction>(_fx.GetHashAlgorithm).Transactions,
                hashAlgorithm: hashAlgo,
                stateRootHash: default(HashDigest<SHA256>)
            );
            Assert.Throws<InvalidBlockDifficultyException>(() =>
                invalidDifficultyGenesis.Validate(hashAlgo, DateTimeOffset.UtcNow)
            );

            var invalidTotalDifficultyGenesis = new Block<DumbAction>(
                index: _fx.Genesis.Index,
                difficulty: 0,
                totalDifficulty: 1, // invalid
                nonce: _fx.Genesis.Nonce,
                miner: _fx.Genesis.Miner,
                previousHash: _fx.Genesis.PreviousHash,
                timestamp: _fx.Genesis.Timestamp,
                transactions: MineGenesis<DumbAction>(_fx.GetHashAlgorithm).Transactions,
                stateRootHash: default(HashDigest<SHA256>),
                hashAlgorithm: hashAlgo
            );
            Assert.Throws<InvalidBlockTotalDifficultyException>(() =>
                invalidTotalDifficultyGenesis.Validate(hashAlgo, DateTimeOffset.UtcNow)
            );

            HashAlgorithmType hashAlgoNext = _fx.GetHashAlgorithm(_fx.Next.Index);
            var invalidDifficultyNext = new Block<PolymorphicAction<BaseAction>>(
                index: _fx.Next.Index,
                difficulty: 0, // invalid,
                totalDifficulty: _fx.Genesis.TotalDifficulty,
                nonce: _fx.Next.Nonce,
                miner: _fx.Next.Miner,
                previousHash: _fx.Next.PreviousHash,
                timestamp: _fx.Next.Timestamp,
                transactions: _fx.Next.Transactions,
                stateRootHash: default(HashDigest<SHA256>),
                hashAlgorithm: hashAlgoNext
            );
            Assert.Throws<InvalidBlockDifficultyException>(() =>
                invalidDifficultyNext.Validate(hashAlgoNext, DateTimeOffset.UtcNow)
            );

            var invalidTotalDifficultyNext = new Block<PolymorphicAction<BaseAction>>(
                index: _fx.Next.Index,
                difficulty: 1,
                totalDifficulty: 0,
                nonce: _fx.Next.Nonce,
                miner: _fx.Next.Miner,
                previousHash: _fx.Next.PreviousHash,
                timestamp: _fx.Next.Timestamp,
                transactions: _fx.Next.Transactions,
                stateRootHash: default(HashDigest<SHA256>),
                hashAlgorithm: hashAlgoNext
            );
            Assert.Throws<InvalidBlockTotalDifficultyException>(() =>
                invalidTotalDifficultyNext.Validate(hashAlgoNext, DateTimeOffset.UtcNow)
            );
        }

        [Fact]
        public void DetectInvalidPreviousHash()
        {
            HashAlgorithmType hashAlgo = _fx.GetHashAlgorithm(_fx.Genesis.Index);
            var invalidGenesis = new Block<DumbAction>(
                index: _fx.Genesis.Index,
                difficulty: _fx.Genesis.Difficulty,
                totalDifficulty: _fx.Genesis.TotalDifficulty,
                nonce: _fx.Genesis.Nonce,
                miner: _fx.Genesis.Miner,
                previousHash: new BlockHash(GetRandomBytes(32)), // invalid
                timestamp: _fx.Genesis.Timestamp,
                transactions: MineGenesis<DumbAction>(_fx.GetHashAlgorithm).Transactions,
                stateRootHash: default(HashDigest<SHA256>),
                hashAlgorithm: hashAlgo
            );

            Assert.Throws<InvalidBlockPreviousHashException>(() =>
                invalidGenesis.Validate(hashAlgo, DateTimeOffset.UtcNow)
            );

            HashAlgorithmType hashAlgoNext = _fx.GetHashAlgorithm(_fx.Next.Index);
            var invalidNext = new Block<PolymorphicAction<BaseAction>>(
                index: _fx.Next.Index,
                difficulty: _fx.Next.Difficulty,
                totalDifficulty: _fx.Next.TotalDifficulty,
                nonce: _fx.Next.Nonce,
                miner: _fx.Next.Miner,
                previousHash: null,
                timestamp: _fx.Next.Timestamp,
                transactions: _fx.Next.Transactions,
                stateRootHash: default(HashDigest<SHA256>),
                hashAlgorithm: hashAlgoNext
            );

            Assert.Throws<InvalidBlockPreviousHashException>(() =>
                invalidNext.Validate(hashAlgoNext, DateTimeOffset.UtcNow)
            );
        }

        [Fact]
        public void ToBencodex()
        {
            Bencodex.Types.Dictionary rawGenesis = _fx.Genesis.ToBencodex();
            AssertBencodexEqual(
                Bencodex.Types.Dictionary.Empty
                    .Add(Block<DumbAction>.HeaderKey, _fx.Genesis.Header.ToBencodex()),
                rawGenesis
            );

            Bencodex.Types.Dictionary rawNext = _fx.Next.ToBencodex();
            AssertBencodexEqual(
                Bencodex.Types.Dictionary.Empty
                    .Add(Block<DumbAction>.HeaderKey, _fx.Next.Header.ToBencodex()),
                rawNext
            );

            Bencodex.Types.Dictionary rawHasTx = _fx.HasTx.ToBencodex();
            var txs = _fx.HasTx.Transactions.Select(tx => (Binary)tx.Serialize(true))
                .Cast<IValue>();
            AssertBencodexEqual(
                Bencodex.Types.Dictionary.Empty
                    .Add(Block<DumbAction>.HeaderKey, _fx.HasTx.Header.ToBencodex())
                    .Add(Block<DumbAction>.TransactionsKey, txs),
                rawHasTx
            );
        }

        [Fact]
        public void CompareToOtherBlock()
        {
            Block<PolymorphicAction<BaseAction>> sameBlock1 = _fx.Genesis;
            var sameBlock2 = new Block<PolymorphicAction<BaseAction>>(
                index: sameBlock1.Index,
                difficulty: sameBlock1.Difficulty,
                totalDifficulty: sameBlock1.TotalDifficulty,
                nonce: sameBlock1.Nonce,
                miner: sameBlock1.Miner,
                previousHash: null,
                timestamp: sameBlock1.Timestamp,
                transactions: sameBlock1.Transactions,
                preEvaluationHash: sameBlock1.PreEvaluationHash,
                stateRootHash: sameBlock1.StateRootHash,
                hashAlgorithm: _fx.GetHashAlgorithm(sameBlock1.Index)
            );
            Block<PolymorphicAction<BaseAction>> differentBlock = _fx.Next;

            Assert.Equal(sameBlock1, sameBlock2);
            Assert.NotEqual(sameBlock2, differentBlock);

            Assert.True(sameBlock1.Equals(sameBlock2));
            Assert.False(sameBlock2.Equals(differentBlock));
        }

        [Fact]
        public void BlockStructureSize()
        {
            var emptyBlock = _fx.Next;
            var txBlock = _fx.HasTx;
            var codec = new Codec();
            // Case of a block with no any txs, contained state root.
            // Size of serialized bytes:
            Assert.Equal(252, emptyBlock.Serialize().Length);
            // Size of BlockDigest
            Assert.Equal(252, BlockDigest.FromBlock(emptyBlock).Serialize().Length);
            // Size of BlockHeader
            Assert.Equal(247, codec.Encode(emptyBlock.Header.ToBencodex()).Length);

            // Case of a block with txs, not contained state root.
            // Size of serialized bytes:
            Assert.Equal(741, txBlock.Serialize().Length);
            // Size of BlockDigest
            Assert.Equal(337, BlockDigest.FromBlock(txBlock).Serialize().Length);
            // Size of BlockHeader
            Assert.Equal(292, codec.Encode(txBlock.Header.ToBencodex()).Length);
        }

        [Fact]
        public void OrderTxsForEvaluation()
        {
            // New test should be written once this breaks with a protocol version bump.
            const int protocolVersion = BlockMetadata.CurrentProtocolVersion;
            const int numSigners = 5;
            const int numTxsPerSigner = 3;
            var epoch = DateTimeOffset.FromUnixTimeSeconds(0);

            ImmutableArray<PrivateKey> signers = ImmutableArray.Create(new PrivateKey[]
                {
                    _fx.TxFixture.PrivateKey1,
                    _fx.TxFixture.PrivateKey2,
                    _fx.TxFixture.PrivateKey3,
                    _fx.TxFixture.PrivateKey4,
                    _fx.TxFixture.PrivateKey5,
                });
            ImmutableArray<ImmutableArray<int>> noncesPerSigner = ImmutableArray.Create(
                new ImmutableArray<int>[]
                    {
                        ImmutableArray.Create(new int[] { 0, 2, 1 }),
                        ImmutableArray.Create(new int[] { 1, 0, 2 }),
                        ImmutableArray.Create(new int[] { 1, 2, 0 }),
                        ImmutableArray.Create(new int[] { 2, 0, 1 }),
                        ImmutableArray.Create(new int[] { 2, 1, 0 }),
                    });
            // Unix Epoch used for hard coded timestamp.
            ImmutableArray<Transaction<RandomAction>> txs =
                signers.Zip(noncesPerSigner, (signer, nonces) => (signer, nonces))
                    .SelectMany(
                        signerNoncesPair => signerNoncesPair.nonces,
                        (signerNoncesPair, nonce) => (signerNoncesPair.signer, nonce))
                    .Select(signerNoncePair => Transaction<RandomAction>.Create(
                        nonce: signerNoncePair.nonce,
                        privateKey: signerNoncePair.signer,
                        genesisHash: null,
                        actions: new[] { new RandomAction(signerNoncePair.signer.ToAddress()) },
                        timestamp: epoch)).ToImmutableArray();
            // Rearrange transactions so that transactions are not grouped by signers
            // while keeping the hard coded mixed order nonces above.
            txs = txs
                .Where((tx, i) => i % numTxsPerSigner == 0)
                .Concat(txs.Where((tx, i) => i % numTxsPerSigner != 0)).ToImmutableArray();
            byte[] preEvaluationHashBytes =
            {
                0x45, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57,
                0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
            };
            ImmutableArray<byte> preEvaluationHash = preEvaluationHashBytes.ToImmutableArray();

            var orderedTxs = Block<RandomAction>.OrderTxsForEvaluation(
                protocolVersion: protocolVersion,
                txs: txs,
                preEvaluationHash: preEvaluationHash).ToImmutableArray();

            // Check signers are grouped together.
            for (int i = 0; i < numSigners; i++)
            {
                var signerTxs = orderedTxs.Skip(i * numTxsPerSigner).Take(numTxsPerSigner);
                Assert.True(signerTxs.Select(tx => tx.Signer).Distinct().Count() == 1);
            }

            // Check nonces are ordered.
            foreach (var signer in signers)
            {
                var signerTxs = orderedTxs.Where(tx => tx.Signer == signer.ToAddress());
                Assert.Equal(signerTxs.OrderBy(tx => tx.Nonce).ToArray(), signerTxs.ToArray());
            }

            string[] originalAddresses =
            {
                "0xc2A86014073D662a4a9bFCF9CB54263dfa4F5cBc",
                "0x921Ba81C0be280C8A2faed79E14aD2a098874759",
                "0x1d2B31bF9A2CA71051f8c66E1C783Ae70EF32798",
                "0xfcbfa4977B2Fc7A608E4Bd2F6F0D6b27C0a4cd13",
                "0xB0ea0018Ab647418FA81c384194C9167e6A3C925",
            };
            string[] orderedAddresses =
            {
                "0x921Ba81C0be280C8A2faed79E14aD2a098874759",
                "0x1d2B31bF9A2CA71051f8c66E1C783Ae70EF32798",
                "0xB0ea0018Ab647418FA81c384194C9167e6A3C925",
                "0xfcbfa4977B2Fc7A608E4Bd2F6F0D6b27C0a4cd13",
                "0xc2A86014073D662a4a9bFCF9CB54263dfa4F5cBc",
            };

            Assert.True(originalAddresses.SequenceEqual(
                signers.Select(signer => signer.ToAddress().ToString())));
            Assert.True(orderedAddresses.SequenceEqual(
                orderedTxs
                    .Where((tx, i) => i % numTxsPerSigner == 0)
                    .Select(tx => tx.Signer.ToString())));
        }

        [Fact]
        public void TransactionOrderIdempotent()
        {
            const int signerCount = 5;
            DateTimeOffset timestamp = DateTimeOffset.UtcNow;
            var signers = Enumerable.Range(0, signerCount).Select(_ => new PrivateKey());
            ImmutableArray<Transaction<RandomAction>> txs = signers.Select(signer =>
                Transaction<RandomAction>.Create(
                    0,
                    signer,
                    null,
                    new[] { new RandomAction(signer.ToAddress()) })).ToImmutableArray();
            HashAlgorithmGetter algoGetter = _ => HashAlgorithmType.Of<SHA256>();
            var blockA = MineGenesis(algoGetter, timestamp: timestamp, transactions: txs);
            var blockB = MineGenesis(algoGetter, timestamp: timestamp, transactions: txs);

            Assert.True(blockA.Transactions.SequenceEqual(blockB.Transactions));
        }

        [Fact]
        public void BytesLength()
        {
            var block = new Block<DumbAction>(
                index: 0,
                difficulty: 0,
                totalDifficulty: 0,
                nonce: new Nonce(new byte[0]),
                miner: new Address(new byte[Address.Size]),
                previousHash: null,
                timestamp: DateTimeOffset.UtcNow,
                transactions: new Transaction<DumbAction>[0],
                hashAlgorithm: HashAlgorithmType.Of<SHA256>(),
                stateRootHash: default(HashDigest<SHA256>)
            );
            Assert.Equal(210, block.BytesLength);
        }

        [Fact]
        public void ValidateTxHash()
        {
            Transaction<DumbAction>[] txs = new[]
            {
                Transaction<DumbAction>.Create(0, new PrivateKey(), null, new DumbAction[0]),
                Transaction<DumbAction>.Create(0, new PrivateKey(), null, new DumbAction[0]),
                Transaction<DumbAction>.Create(0, new PrivateKey(), null, new DumbAction[0]),
            };
            HashAlgorithmType hashAlgorithm = HashAlgorithmType.Of<SHA256>();
            var block = new Block<DumbAction>(
                index: 0,
                difficulty: 0,
                totalDifficulty: 0,
                nonce: new Nonce(new byte[0]),
                miner: new Address(new byte[Address.Size]),
                previousHash: null,
                timestamp: DateTimeOffset.UtcNow,
                transactions: txs,
                stateRootHash: default(HashDigest<SHA256>),
                hashAlgorithm: HashAlgorithmType.Of<SHA256>()
            );

            block.Validate(hashAlgorithm, DateTimeOffset.UtcNow);

            Dictionary blockDict = block.ToBencodex();
            var txList = (List)blockDict[Block<DumbAction>.TransactionsKey];

            var abnormalTxs = new Block<DumbAction>(
                _fx.GetHashAlgorithm,
                blockDict.SetItem(
                    Block<DumbAction>.TransactionsKey,
                    (IValue)new List(txList.Take(2))
                )
            );

            var exc = Assert.Throws<InvalidBlockTxHashException>(
                () => abnormalTxs.Validate(hashAlgorithm, DateTimeOffset.UtcNow)
            );
            Assert.Equal(abnormalTxs.TxHash, exc.BlockTxHash);

            var emptyTxs = new Block<DumbAction>(
                _fx.GetHashAlgorithm,
                blockDict.SetItem(
                    Block<DumbAction>.TransactionsKey,
                    (IValue)default(List)
                )
            );
            Assert.Throws<InvalidBlockTxHashException>(
                 () => emptyTxs.Validate(hashAlgorithm, DateTimeOffset.UtcNow)
            );
        }

        [Fact]
        public void DetectInvalidPreEvaluationHash()
        {
            var invalidBlock = new Block<PolymorphicAction<BaseAction>>(
                index: _fx.Next.Index,
                difficulty: _fx.Next.Difficulty,
                totalDifficulty: _fx.Next.TotalDifficulty * 10000, // invalid
                preEvaluationHash: _fx.Next.PreEvaluationHash,
                nonce: new Nonce(new byte[] { 0x00 }),
                miner: _fx.Next.Miner,
                previousHash: _fx.Next.PreviousHash,
                timestamp: _fx.Next.Timestamp,
                transactions: _fx.Next.Transactions,
                stateRootHash: default(HashDigest<SHA256>),
                hashAlgorithm: _fx.GetHashAlgorithm(_fx.Next.Index)
            );

            Assert.Throws<InvalidBlockPreEvaluationHashException>(() =>
                invalidBlock.Validate(_fx.GetHashAlgorithm(_fx.Next.Index), DateTimeOffset.UtcNow));
        }

        [Fact]
        public void DetectInvalidTxSignature()
        {
            RawTransaction rawTx = new RawTransaction(
                0,
                _fx.TxFixture.Address1.ByteArray,
                _fx.Genesis.Hash.ByteArray,
                ImmutableArray<ImmutableArray<byte>>.Empty,
                _fx.TxFixture.PublicKey1.Format(false).ToImmutableArray(),
                DateTimeOffset.UtcNow.ToString(
                    "yyyy-MM-ddTHH:mm:ss.ffffffZ",
                    CultureInfo.InvariantCulture
                ),
                ImmutableArray<IValue>.Empty,
                new byte[10].ToImmutableArray()
            );
            var invalidTx = new Transaction<DumbAction>(rawTx);
            Assert.Throws<InvalidTxSignatureException>(() =>
                MineNext(
                    MineGenesisBlock<DumbAction>(_fx.GetHashAlgorithm),
                    _fx.GetHashAlgorithm,
                    new List<Transaction<DumbAction>>
                    {
                        invalidTx,
                    }
                )
            );
        }

        [Fact]
        public void DetectInvalidTxPublicKey()
        {
            RawTransaction rawTxWithoutSig = new RawTransaction(
                0,
                new PrivateKey().ToAddress().ByteArray,
                _fx.Genesis.Hash.ByteArray,
                ImmutableArray<ImmutableArray<byte>>.Empty,
                _fx.TxFixture.PublicKey1.Format(false).ToImmutableArray(),
                DateTimeOffset.UtcNow.ToString(
                    "yyyy-MM-ddTHH:mm:ss.ffffffZ",
                    CultureInfo.InvariantCulture
                ),
                ImmutableArray<IValue>.Empty,
                ImmutableArray<byte>.Empty
            );
            byte[] sig = _fx.TxFixture.PrivateKey1.Sign(
                new Transaction<DumbAction>(rawTxWithoutSig).Serialize(false)
            );
            var invalidTx = new Transaction<DumbAction>(
                new RawTransaction(
                    0,
                    rawTxWithoutSig.Signer,
                    rawTxWithoutSig.GenesisHash,
                    rawTxWithoutSig.UpdatedAddresses,
                    rawTxWithoutSig.PublicKey,
                    rawTxWithoutSig.Timestamp,
                    rawTxWithoutSig.Actions,
                    sig.ToImmutableArray()
                )
            );
            Assert.Throws<InvalidTxPublicKeyException>(() =>
                MineNext(
                    MineGenesisBlock<DumbAction>(_fx.GetHashAlgorithm),
                    _fx.GetHashAlgorithm,
                    new List<Transaction<DumbAction>> { invalidTx }
                )
            );
        }
    }
}
