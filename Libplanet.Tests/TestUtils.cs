using System;
using System.Collections.Generic;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Tx;

namespace Libplanet.Tests
{
    internal class TestUtils
    {
        internal static byte[] GetRandomBytes(int size)
        {
            var random = new Random();
            var bytes = new byte[size];
            random.NextBytes(bytes);

            return bytes;
        }

        internal static Block<T> MineGenesis<T>()
            where T : IAction
        {
            var rewardBenificiary = new Address(
                ByteUtil.ParseHex("21744f4f08db23e044178dafb8273aeb5ebe6644")
            );
            var timestamp = new DateTime(2018, 11, 29);
            return Block<T>.Mine(
                index: 0,
                difficulty: 0,
                rewardBeneficiary: rewardBenificiary,
                previousHash: null,
                timestamp: timestamp,
                transactions: new List<Transaction<T>>()
            );
        }

        internal static Block<T> MineNext<T>(Block<T> previousBlock)
            where T : IAction
        {
            return Block<T>.Mine(
                index: 1,
                difficulty: 1,
                rewardBeneficiary: previousBlock.RewardBeneficiary.Value,
                previousHash: previousBlock.Hash,
                timestamp: previousBlock.Timestamp.AddDays(1),
                transactions: new List<Transaction<T>>()
            );
        }
    }
}
