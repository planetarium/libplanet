using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Store;
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
            long difficulty = 1,
            Address? miner = null,
            TimeSpan? blockInterval = null
        )
            where T : IAction, new()
        {
            if (txs == null)
            {
                txs = new List<Transaction<T>>();
            }

            long index = previousBlock.Index + 1;
            HashDigest<SHA256> previousHash = previousBlock.Hash;
            DateTimeOffset timestamp =
                previousBlock.Timestamp.Add(blockInterval ?? TimeSpan.FromDays(1));

            if (nonce == null)
            {
                return Block<T>.Mine(
                    index: index,
                    difficulty: difficulty,
                    miner: miner ?? previousBlock.Miner.Value,
                    previousHash: previousHash,
                    timestamp: timestamp,
                    transactions: txs
                );
            }

            return new Block<T>(
                index: index,
                difficulty: difficulty,
                nonce: new Nonce(nonce),
                miner: miner ?? previousBlock.Miner.Value,
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

        public static BlockChain<T> MakeBlockChain<T>(
            IBlockPolicy<T> policy,
            IStore store,
            IEnumerable<T> actions = null,
            PrivateKey privateKey = null,
            DateTimeOffset? timestamp = null)
            where T : IAction, new()
        {
            actions = actions ?? ImmutableArray<T>.Empty;
            privateKey = privateKey ?? new PrivateKey(
                new byte[]
                {
                    0xcf, 0x36, 0xec, 0xf9, 0xe4, 0x7c, 0x87, 0x9a, 0x0d, 0xbf,
                    0x46, 0xb2, 0xec, 0xd8, 0x3f, 0xd2, 0x76, 0x18, 0x2a, 0xde,
                    0x02, 0x65, 0x82, 0x5e, 0x3b, 0x8c, 0x6b, 0xa2, 0x14, 0x46,
                    0x7b, 0x76,
                }
            );

            var tx = Transaction<T>.Create(
                0,
                privateKey,
                actions,
                timestamp: timestamp ?? DateTimeOffset.MinValue);
            var genesisBlock = new Block<T>(
                0,
                0,
                new Nonce(new byte[] { 0x01, 0x00, 0x00, 0x00 }),
                GenesisMinerAddress,
                null,
                timestamp ?? DateTimeOffset.MinValue,
                new[] { tx, });
            return new BlockChain<T>(policy, store, genesisBlock);
        }
    }
}
