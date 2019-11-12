using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Tx;
using Xunit;

namespace Libplanet.Tests
{
    public class TestUtils
    {
        public static readonly Address GenesisMinerAddress =
            new Address("21744f4f08db23e044178dafb8273aeb5ebe6644");

        public static void AssertBytesEqual(byte[] expected, byte[] actual)
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

        public static void AssertBytesEqual(
            ImmutableArray<byte> expected,
            ImmutableArray<byte> actual
        )
        {
            AssertBytesEqual(expected.ToArray(), actual.ToArray());
        }

        public static void AssertBytesEqual(TxId expected, TxId actual)
        {
            AssertBytesEqual(expected.ToByteArray(), actual.ToByteArray());
        }

        public static void AssertBytesEqual<T>(
            HashDigest<T> expected,
            HashDigest<T> actual
        )
            where T : HashAlgorithm
        {
            AssertBytesEqual(expected.ToByteArray(), actual.ToByteArray());
        }

        public static byte[] GetRandomBytes(int size)
        {
            var random = new System.Random();
            var bytes = new byte[size];
            random.NextBytes(bytes);

            return bytes;
        }

        public static Block<T> MineGenesis<T>(Address? miner = null)
            where T : IAction, new()
        {
            var timestamp = new DateTimeOffset(2018, 11, 29, 0, 0, 0, TimeSpan.Zero);
            return new Block<T>(
                index: 0,
                difficulty: 0,
                nonce: new Nonce(new byte[] { 0x01, 0x00, 0x00, 0x00 }),
                miner: miner ?? GenesisMinerAddress,
                previousHash: null,
                timestamp: timestamp,
                transactions: new List<Transaction<T>>()
            );
        }

        public static Block<T> MineNext<T>(
            Block<T> previousBlock,
            IEnumerable<Transaction<T>> txs = null,
            byte[] nonce = null,
            long difficulty = 1
        )
            where T : IAction, new()
        {
            if (txs == null)
            {
                txs = new List<Transaction<T>>();
            }

            long index = previousBlock.Index + 1;
            HashDigest<SHA256> previousHash = previousBlock.Hash;
            DateTimeOffset timestamp = previousBlock.Timestamp.AddDays(1);
            Address miner = previousBlock.Miner.Value;
            long previousTotalDifficulty = previousBlock.TotalDifficulty;

            if (nonce == null)
            {
                return Block<T>.Mine(
                    index: index,
                    difficulty: difficulty,
                    previousTotalDifficulty: previousTotalDifficulty,
                    miner: miner,
                    previousHash: previousHash,
                    timestamp: timestamp,
                    transactions: txs
                );
            }

            return new Block<T>(
                index: index,
                difficulty: difficulty,
                previousTotalDifficulty: previousTotalDifficulty,
                nonce: new Nonce(nonce),
                miner: miner,
                previousHash: previousHash,
                timestamp: timestamp,
                transactions: txs
            );
        }

        public static string ToString(BitArray bitArray)
        {
            return new string(
                bitArray.OfType<bool>().Select(b => b ? '1' : '0').ToArray()
            );
        }
    }
}
