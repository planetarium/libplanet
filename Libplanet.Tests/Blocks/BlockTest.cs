using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Security.Cryptography;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Tx;
using Xunit;

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
            Assert.Equal(
                new HashDigest<SHA256>(
                    ByteUtil.ParseHex(
                        "b23717ecdf0b9c83bcc92f5675f827c1ee6808887bf1ce14f0322318174e1007"
                    )
                ),
                _fx.Genesis.Hash
            );

            Block<Action> next = TestUtils.MineNext(_fx.Genesis);

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
            byte[] expected = ByteUtil.ParseHex(
                "6431303a646966666963756c7479693065343a6861736833323ab23717ecdf0b9c83bcc92f5675f827c1ee6808887bf1ce14f0322318174e1007353a696e646578693065353a6e6f6e6365343a0100000031383a7265776172645f62656e656669636961727932303a21744f4f08db23e044178dafb8273aeb5ebe6644393a74696d657374616d7032373a323031382d31312d32395430303a30303a30302e3030303030305a31323a7472616e73616374696f6e736c6565"
            );

            Assert.Equal(expected, _fx.Genesis.Bencode(true, true));
        }

        [Fact]
        public void CanValidate()
        {
            Block<Action> genesis = TestUtils.MineGenesis<Action>();
            Block<Action> next = TestUtils.MineNext(genesis);

            _fx.Genesis.Validate();
            _fx.Next.Validate();
        }

        [Fact]
        public void CanDetectInvalidNonce()
        {
            var invalidBlock = new Block<Action>(
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
            var invalidGenesis = new Block<Action>(
                index: _fx.Genesis.Index,
                difficulty: 1, // invalid
                nonce: _fx.Genesis.Nonce,
                rewardBeneficiary: _fx.Genesis.RewardBeneficiary,
                previousHash: _fx.Genesis.PreviousHash,
                timestamp: _fx.Genesis.Timestamp,
                transactions: _fx.Genesis.Transactions
            );
            Assert.Throws<InvalidBlockDifficultyException>(() => { invalidGenesis.Validate(); });

            var invalidNext = new Block<Action>(
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
            var invalidGenesis = new Block<Action>(
                index: _fx.Genesis.Index,
                difficulty: _fx.Genesis.Difficulty,
                nonce: _fx.Genesis.Nonce,
                rewardBeneficiary: _fx.Genesis.RewardBeneficiary,
                previousHash: new HashDigest<SHA256>(TestUtils.GetRandomBytes(32)), // invalid
                timestamp: _fx.Genesis.Timestamp,
                transactions: _fx.Genesis.Transactions
            );

            Assert.Throws<InvalidBlockPreviousHashException>(() => { invalidGenesis.Validate(); });

            var invalidNext = new Block<Action>(
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
            Assert.Equal(
                ByteUtil.ParseHex("b23717ecdf0b9c83bcc92f5675f827c1ee6808887bf1ce14f0322318174e1007"),
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
            Block<Action> sameBlock1 = _fx.Genesis;
            var sameBlock2 = new Block<Action>(
                index: sameBlock1.Index,
                difficulty: sameBlock1.Difficulty,
                nonce: sameBlock1.Nonce,
                rewardBeneficiary: sameBlock1.RewardBeneficiary,
                previousHash: null,
                timestamp: sameBlock1.Timestamp,
                transactions: sameBlock1.Transactions
            );
            Block<Action> differentBlock = _fx.Next;

            Assert.Equal(sameBlock1, sameBlock2);
            Assert.NotEqual(sameBlock2, differentBlock);

            Assert.True(sameBlock1 == sameBlock2);
            Assert.False(sameBlock2 == differentBlock);

            Assert.False(sameBlock1 != sameBlock2);
            Assert.True(sameBlock2 != differentBlock);
        }
    }

#pragma warning disable SA1402 // File may only contain a single class
    internal class Action : IAction
    {
        public IImmutableDictionary<string, object> PlainValue => throw new NotImplementedException();

        public void LoadPlainValue(IImmutableDictionary<string, object> plainValue)
        {
            throw new NotImplementedException();
        }
    }
#pragma warning restore SA1402 // File may only contain a single class
}
