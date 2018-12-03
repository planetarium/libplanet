using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Tx;
using Xunit;

namespace Libplanet.Tests.Blocks
{
    internal class Action : IAction
    {
        public IImmutableDictionary<string, object> PlainValue => throw new NotImplementedException();

        public void LoadPlainValue(IImmutableDictionary<string, object> plainValue)
        {
            throw new NotImplementedException();
        }
    }

    public class BlockTest
    {
        private Block<Action> MineGenesis()
        {
            var rewardBenificiary = new Address(
                ByteUtil.ParseHex("21744f4f08db23e044178dafb8273aeb5ebe6644")
            );
            var timestamp = new DateTime(2018, 11, 29);
            return Block<Action>.Mine(
                index: 0,
                difficulty: 0,
                rewardBeneficiary: rewardBenificiary,
                previousHash: null,
                timestamp: timestamp,
                transactions: new List<Transaction<Action>>()
            );
        }

        private Block<Action> MineNext(Block<Action> previousBlock)
        {
            return Block<Action>.Mine(
                index: 1,
                difficulty: 1,
                rewardBeneficiary: previousBlock.RewardBeneficiary.Value,
                previousHash: previousBlock.Hash,
                timestamp: previousBlock.Timestamp.AddDays(1),
                transactions: new List<Transaction<Action>>()
            );
        }

        [Fact]
        public void CanMine()
        {
            Block<Action> genesis = MineGenesis();
            Assert.Equal(0, genesis.Index);
            Assert.Equal(0, genesis.Difficulty);
            Assert.Null(genesis.PreviousHash);
            Assert.Equal(new DateTime(2018, 11, 29), genesis.Timestamp);
            Assert.Equal(new Address(
                ByteUtil.ParseHex("21744f4f08db23e044178dafb8273aeb5ebe6644")
            ), genesis.RewardBeneficiary);
            Assert.Equal(new Nonce(new byte[] { 0x01, 0x00, 0x00, 0x00 }), genesis.Nonce);
            Assert.Equal(
                new HashDigest(
                    ByteUtil.ParseHex(
                        "b23717ecdf0b9c83bcc92f5675f827c1ee6808887bf1ce14f0322318174e1007"
                    )
                ),
                genesis.Hash
            );

            Block<Action> next = MineNext(genesis);

            Assert.Equal(1, next.Index);
            Assert.Equal(1, next.Difficulty);
            Assert.Equal(genesis.Hash, next.PreviousHash);
            Assert.Equal(new DateTime(2018, 11, 30), next.Timestamp);
            Assert.Equal(new Address(
                ByteUtil.ParseHex("21744f4f08db23e044178dafb8273aeb5ebe6644")
            ), next.RewardBeneficiary);
        }

        [Fact]
        public void CanBencode()
        {
            Block<Action> genesis = MineGenesis();

            byte[] expected = ByteUtil.ParseHex(
                "6431303a646966666963756c7479693065343a6861736833323ab23717ecdf0b9c83bcc92f5675f827c1ee6808887bf1ce14f0322318174e1007353a696e646578693065353a6e6f6e6365343a0100000031383a7265776172645f62656e656669636961727932303a21744f4f08db23e044178dafb8273aeb5ebe6644393a74696d657374616d7032373a323031382d31312d32395430303a30303a30302e3030303030305a31323a7472616e73616374696f6e736c6565"
            );

            Assert.Equal(expected, genesis.Bencode(true, true));
        }

        [Fact]
        public void CanValidate()
        {
            Block<Action> genesis = MineGenesis();
            Block<Action> next = MineNext(genesis);

            genesis.Validate();
            next.Validate();
        }

        [Fact]
        public void CanDetectInvalidNonce()
        {
            Block<Action> genesis = MineGenesis();
            Block<Action> next = MineNext(genesis);

            var invalidBlock = new Block<Action>(
                index: next.Index,
                difficulty: next.Difficulty,
                nonce: new Nonce(new byte[] {0x00}),
                rewardBeneficiary: next.RewardBeneficiary,
                previousHash: next.PreviousHash,
                timestamp: next.Timestamp,
                transactions: next.Transactions
            );

            Assert.Throws<InvalidBlockNonceException>(() => { invalidBlock.Validate(); });
        }

        [Fact]
        public void CanDetectInvalidIndex()
        {
            var invalidBlock = new Block<Action>(
                index: -1,
                difficulty: 1,
                nonce: new Nonce(new byte[] { 0x00 }),
                rewardBeneficiary: null,
                previousHash: null,
                timestamp: new DateTime(2018, 11, 29),
                transactions: new List<Transaction<Action>>()
            );

            Assert.Throws<InvalidBlockIndexException>(() => { invalidBlock.Validate(); });
        }

        [Fact]
        public void CanDetectInvalidDifficulty()
        {
            Block<Action> genesis = MineGenesis();
            Block<Action> next = MineNext(genesis);

            var invalidGenesis = new Block<Action>(
                index: genesis.Index,
                difficulty: 1, // invalid
                nonce: genesis.Nonce,
                rewardBeneficiary: genesis.RewardBeneficiary,
                previousHash: genesis.PreviousHash,
                timestamp: genesis.Timestamp,
                transactions: genesis.Transactions
            );
            Assert.Throws<InvalidBlockDifficultyException>(() => { invalidGenesis.Validate(); });

            var invalidNext = new Block<Action>(
                index: next.Index,
                difficulty: 0, // invalid
                nonce: next.Nonce,
                rewardBeneficiary: next.RewardBeneficiary,
                previousHash: next.PreviousHash,
                timestamp: next.Timestamp,
                transactions: next.Transactions
            );
            Assert.Throws<InvalidBlockDifficultyException>(() => { invalidNext.Validate(); });
        }

        [Fact]
        public void CanDetectInvalidPreviousHash()
        {
            Block<Action> genesis = MineGenesis();
            Block<Action> next = MineNext(genesis);

            var invalidGenesis = new Block<Action>(
                index: genesis.Index,
                difficulty: genesis.Difficulty,
                nonce: genesis.Nonce,
                rewardBeneficiary: genesis.RewardBeneficiary,
                previousHash: new HashDigest(TestUtils.GetRandomBytes(32)), // invalid
                timestamp: genesis.Timestamp,
                transactions: genesis.Transactions
            );

            Assert.Throws<InvalidBlockPreviousHashException>(() => { invalidGenesis.Validate(); });

            var invalidNext = new Block<Action>(
                index: next.Index,
                difficulty: next.Difficulty,
                nonce: next.Nonce,
                rewardBeneficiary: next.RewardBeneficiary,
                previousHash: null,
                timestamp: next.Timestamp,
                transactions: next.Transactions
            );

            Assert.Throws<InvalidBlockPreviousHashException>(() => { invalidNext.Validate(); });
        }

        [Fact]
        public void CanConvertToRaw()
        {
            Block<Action> genesis = MineGenesis();

            RawBlock rawGenesis = genesis.ToRawBlock(true, true);
            Assert.Equal(0, rawGenesis.Index);
            Assert.Equal(0, rawGenesis.Difficulty);
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

            Block<Action> next = MineNext(genesis);
            RawBlock rawNext = next.ToRawBlock(false, false);

            Assert.Equal(1, rawNext.Index);
            Assert.Equal(1, rawNext.Difficulty);
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
            Block<Action> sameBlock1 = MineGenesis();
            var sameBlock2 = new Block<Action>(
                index: sameBlock1.Index,
                difficulty: sameBlock1.Difficulty,
                nonce: sameBlock1.Nonce,
                rewardBeneficiary: sameBlock1.RewardBeneficiary,
                previousHash: null,
                timestamp: sameBlock1.Timestamp,
                transactions: sameBlock1.Transactions
            );
            Block<Action> differentBlock = MineNext(sameBlock1);

            Assert.Equal(sameBlock1, sameBlock2);
            Assert.NotEqual(sameBlock2, differentBlock);

            Assert.True(sameBlock1 == sameBlock2);
            Assert.False(sameBlock2 == differentBlock);

            Assert.False(sameBlock1 != sameBlock2);
            Assert.True(sameBlock2 != differentBlock);
        }
    }
}
