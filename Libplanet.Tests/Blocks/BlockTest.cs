using System;
using System.Collections.Generic;
using System.Security.Cryptography;
using Libplanet.Blocks;
using Libplanet.Tests.Common.Action;
using Libplanet.Tx;
using Xunit;
using static Libplanet.Tests.TestUtils;

namespace Libplanet.Tests.Blocks
{
    public class BlockTest : IClassFixture<BlockFixture>
    {
        private BlockFixture _fx;

        public BlockTest(BlockFixture fixture) => _fx = fixture;

        [Fact]
        public void CanMine()
        {
            Assert.Equal(0u, _fx.Genesis.Index);
            Assert.Equal(0u, _fx.Genesis.Difficulty);
            Assert.Null(_fx.Genesis.PreviousHash);
            Assert.Equal(new DateTime(2018, 11, 29), _fx.Genesis.Timestamp);
            Assert.Equal(
                new Address(ByteUtil.ParseHex("21744f4f08db23e044178dafb8273aeb5ebe6644")),
                _fx.Genesis.RewardBeneficiary);
            Assert.Equal(new Nonce(new byte[] { 0x01, 0x00, 0x00, 0x00 }), _fx.Genesis.Nonce);
            AssertBytesEqual(
                new HashDigest<SHA256>(
                    new byte[]
                    {
                        0x16, 0xaf, 0x10, 0xab, 0xe2, 0x03, 0xe1, 0x2c, 0x35,
                        0x20, 0x52, 0xd3, 0x6c, 0x75, 0xed, 0xef, 0xbf, 0x26,
                        0x8b, 0xd3, 0xe6, 0x8e, 0xf0, 0x6b, 0x81, 0x93, 0xa0,
                        0xb6, 0x73, 0x78, 0xe1, 0x9f,
                    }
                ),
                _fx.Genesis.Hash
            );

            Block<BaseAction> next = MineNext(_fx.Genesis);

            Assert.Equal(1u, _fx.Next.Index);
            Assert.Equal(1u, _fx.Next.Difficulty);
            Assert.Equal(_fx.Genesis.Hash, _fx.Next.PreviousHash);
            Assert.Equal(new DateTime(2018, 11, 30), _fx.Next.Timestamp);
            Assert.Equal(
                new Address(ByteUtil.ParseHex("21744f4f08db23e044178dafb8273aeb5ebe6644")),
                _fx.Next.RewardBeneficiary);
        }

        [Fact]
        public void CanBencode()
        {
            byte[] expected = new byte[185]
            {
                0x64, 0x31, 0x30, 0x3a, 0x64, 0x69, 0x66, 0x66, 0x69, 0x63,
                0x75, 0x6c, 0x74, 0x79, 0x69, 0x30, 0x65, 0x34, 0x3a, 0x68,
                0x61, 0x73, 0x68, 0x33, 0x32, 0x3a, 0x16, 0xaf, 0x10, 0xab,
                0xe2, 0x03, 0xe1, 0x2c, 0x35, 0x20, 0x52, 0xd3, 0x6c, 0x75,
                0xed, 0xef, 0xbf, 0x26, 0x8b, 0xd3, 0xe6, 0x8e, 0xf0, 0x6b,
                0x81, 0x93, 0xa0, 0xb6, 0x73, 0x78, 0xe1, 0x9f, 0x35, 0x3a,
                0x69, 0x6e, 0x64, 0x65, 0x78, 0x69, 0x30, 0x65, 0x35, 0x3a,
                0x6e, 0x6f, 0x6e, 0x63, 0x65, 0x34, 0x3a, 0x01, 0x00, 0x00,
                0x00, 0x31, 0x38, 0x3a, 0x72, 0x65, 0x77, 0x61, 0x72, 0x64,
                0x5f, 0x62, 0x65, 0x6e, 0x65, 0x66, 0x69, 0x63, 0x69, 0x61,
                0x72, 0x79, 0x32, 0x30, 0x3a, 0x21, 0x74, 0x4f, 0x4f, 0x08,
                0xdb, 0x23, 0xe0, 0x44, 0x17, 0x8d, 0xaf, 0xb8, 0x27, 0x3a,
                0xeb, 0x5e, 0xbe, 0x66, 0x44, 0x39, 0x3a, 0x74, 0x69, 0x6d,
                0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x75, 0x32, 0x37, 0x3a,
                0x32, 0x30, 0x31, 0x38, 0x2d, 0x31, 0x31, 0x2d, 0x32, 0x39,
                0x54, 0x30, 0x30, 0x3a, 0x30, 0x30, 0x3a, 0x30, 0x30, 0x2e,
                0x30, 0x30, 0x30, 0x30, 0x30, 0x30, 0x5a, 0x31, 0x32, 0x3a,
                0x74, 0x72, 0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f,
                0x6e, 0x73, 0x6c, 0x65, 0x65,
            };

            AssertBytesEqual(expected, _fx.Genesis.Bencode(true, true));
        }

        [Fact]
        public void CanValidate()
        {
            Block<BaseAction> genesis = MineGenesis<BaseAction>();
            Block<BaseAction> next = MineNext(genesis);

            _fx.Genesis.Validate();
            _fx.Next.Validate();
        }

        [Fact]
        public void CanDetectInvalidNonce()
        {
            var invalidBlock = new Block<BaseAction>(
                index: _fx.Next.Index,
                difficulty: _fx.Next.Difficulty,
                nonce: new Nonce(new byte[] { 0x00 }),
                rewardBeneficiary: _fx.Next.RewardBeneficiary,
                previousHash: _fx.Next.PreviousHash,
                timestamp: _fx.Next.Timestamp,
                transactions: _fx.Next.Transactions
            );

            Assert.Throws<InvalidBlockNonceException>(() => { invalidBlock.Validate(); });
        }

        [Fact]
        public void CanDetectInvalidDifficulty()
        {
            var invalidGenesis = new Block<BaseAction>(
                index: _fx.Genesis.Index,
                difficulty: 1, // invalid
                nonce: _fx.Genesis.Nonce,
                rewardBeneficiary: _fx.Genesis.RewardBeneficiary,
                previousHash: _fx.Genesis.PreviousHash,
                timestamp: _fx.Genesis.Timestamp,
                transactions: _fx.Genesis.Transactions
            );
            Assert.Throws<InvalidBlockDifficultyException>(() => { invalidGenesis.Validate(); });

            var invalidNext = new Block<BaseAction>(
                index: _fx.Next.Index,
                difficulty: 0, // invalid
                nonce: _fx.Next.Nonce,
                rewardBeneficiary: _fx.Next.RewardBeneficiary,
                previousHash: _fx.Next.PreviousHash,
                timestamp: _fx.Next.Timestamp,
                transactions: _fx.Next.Transactions
            );
            Assert.Throws<InvalidBlockDifficultyException>(() => { invalidNext.Validate(); });
        }

        [Fact]
        public void CanDetectInvalidPreviousHash()
        {
            var invalidGenesis = new Block<BaseAction>(
                index: _fx.Genesis.Index,
                difficulty: _fx.Genesis.Difficulty,
                nonce: _fx.Genesis.Nonce,
                rewardBeneficiary: _fx.Genesis.RewardBeneficiary,
                previousHash: new HashDigest<SHA256>(GetRandomBytes(32)), // invalid
                timestamp: _fx.Genesis.Timestamp,
                transactions: _fx.Genesis.Transactions
            );

            Assert.Throws<InvalidBlockPreviousHashException>(() => { invalidGenesis.Validate(); });

            var invalidNext = new Block<BaseAction>(
                index: _fx.Next.Index,
                difficulty: _fx.Next.Difficulty,
                nonce: _fx.Next.Nonce,
                rewardBeneficiary: _fx.Next.RewardBeneficiary,
                previousHash: null,
                timestamp: _fx.Next.Timestamp,
                transactions: _fx.Next.Transactions
            );

            Assert.Throws<InvalidBlockPreviousHashException>(() => { invalidNext.Validate(); });
        }

        [Fact]
        public void CanConvertToRaw()
        {
            RawBlock rawGenesis = _fx.Genesis.ToRawBlock(true, true);
            Assert.Equal(0u, rawGenesis.Index);
            Assert.Equal(0u, rawGenesis.Difficulty);
            Assert.Null(rawGenesis.PreviousHash);
            Assert.Equal("2018-11-29T00:00:00.000000Z", rawGenesis.Timestamp);
            Assert.Equal(
                ByteUtil.ParseHex("21744f4f08db23e044178dafb8273aeb5ebe6644"),
                rawGenesis.RewardBeneficiary
            );
            Assert.Equal(
                new byte[] { 0x01, 0x00, 0x00, 0x00 },
                rawGenesis.Nonce
            );
            AssertBytesEqual(
                new byte[32]
                {
                    0x16, 0xaf, 0x10, 0xab, 0xe2, 0x03, 0xe1, 0x2c, 0x35, 0x20,
                    0x52, 0xd3, 0x6c, 0x75, 0xed, 0xef, 0xbf, 0x26, 0x8b, 0xd3,
                    0xe6, 0x8e, 0xf0, 0x6b, 0x81, 0x93, 0xa0, 0xb6, 0x73, 0x78,
                    0xe1, 0x9f,
                },
                rawGenesis.Hash
            );

            RawBlock rawNext = _fx.Next.ToRawBlock(false, false);

            Assert.Equal(1u, rawNext.Index);
            Assert.Equal(1u, rawNext.Difficulty);
            Assert.Equal(rawGenesis.Hash, rawNext.PreviousHash);
            Assert.Equal("2018-11-30T00:00:00.000000Z", rawNext.Timestamp);
            Assert.Equal(
                ByteUtil.ParseHex("21744f4f08db23e044178dafb8273aeb5ebe6644"),
                rawNext.RewardBeneficiary
             );
        }

        [Fact]
        public void CanCompareToOtherBlock()
        {
            Block<BaseAction> sameBlock1 = _fx.Genesis;
            var sameBlock2 = new Block<BaseAction>(
                index: sameBlock1.Index,
                difficulty: sameBlock1.Difficulty,
                nonce: sameBlock1.Nonce,
                rewardBeneficiary: sameBlock1.RewardBeneficiary,
                previousHash: null,
                timestamp: sameBlock1.Timestamp,
                transactions: sameBlock1.Transactions
            );
            Block<BaseAction> differentBlock = _fx.Next;

            Assert.Equal(sameBlock1, sameBlock2);
            Assert.NotEqual(sameBlock2, differentBlock);

            Assert.True(sameBlock1 == sameBlock2);
            Assert.False(sameBlock2 == differentBlock);

            Assert.False(sameBlock1 != sameBlock2);
            Assert.True(sameBlock2 != differentBlock);
        }
    }
}
