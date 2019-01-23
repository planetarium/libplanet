using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Tx;
using Xunit;

namespace Libplanet.Tests
{
    internal class TestUtils
    {
        internal static void AssertBytesEqual(byte[] expected, byte[] actual)
        {
            string msg;
            if (expected.LongLength < 1024 && actual.LongLength < 1024 &&
                expected.All(b => b < 0x80) && actual.All(b => b < 0x80))
            {
                // If both arrays can be ASCII encoding, print them directly.
                string expectedStr = Encoding.ASCII.GetString(expected);
                string actualStr = Encoding.ASCII.GetString(actual);
                msg = $@"Two byte arrays do not equal
Expected: ({expected.LongLength}) {expectedStr}
Actual:   ({actual.LongLength}) {actualStr}";
            }
            else
            {
                string expectedRepr = Repr(expected);
                string actualRepr = Repr(actual);
                msg = $@"Two byte arrays do not equal
Expected: new byte[{expected.LongLength}] {{ {expectedRepr} }}
Actual:   new byte[{actual.LongLength}] {{ {actualRepr} }}";
            }

            Assert.True(expected.SequenceEqual(actual), msg);

            string Repr(byte[] bytes)
            {
                const int limit = 1024;
                if (bytes.LongLength > limit)
                {
                    bytes = bytes.Take(limit).ToArray();
                }

                string s = string.Join(
                    ", ",
                    bytes.Select(b => b < 0x10 ? $"0x0{b:x}" : $"0x{b:x}")
                );
                return bytes.LongLength > limit ? $"{s}, ..." : s;
            }
        }

        internal static void AssertBytesEqual(TxId expected, TxId actual)
        {
            AssertBytesEqual(expected.ToByteArray(), actual.ToByteArray());
        }

        internal static void AssertBytesEqual<T>(
            HashDigest<T> expected,
            HashDigest<T> actual
        )
            where T : HashAlgorithm
        {
            AssertBytesEqual(expected.ToByteArray(), actual.ToByteArray());
        }

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

        internal static Block<T> MineNext<T>(
            Block<T> previousBlock, IEnumerable<Transaction<T>> txs = null)
            where T : IAction
        {
            if (txs == null)
            {
                txs = new List<Transaction<T>>();
            }

            return Block<T>.Mine(
                index: 1,
                difficulty: 1,
                rewardBeneficiary: previousBlock.RewardBeneficiary.Value,
                previousHash: previousBlock.Hash,
                timestamp: previousBlock.Timestamp.AddDays(1),
                transactions: txs
            );
        }
    }
}
