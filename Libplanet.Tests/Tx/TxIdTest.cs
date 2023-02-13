using System;
using System.Collections.Immutable;
using System.Linq;
using Libplanet.Tx;
using Xunit;
using static Libplanet.Tests.TestUtils;

namespace Libplanet.Tests.Tx
{
    public class TxIdTest
    {
        [Fact]
        public void TxIdMustBe32Bytes()
        {
            for (int size = 0; size < 36; size++)
            {
                if (size == 32)
                {
                    continue;
                }

                byte[] bytes = GetRandomBytes(size);
                ImmutableArray<byte> immutableBytes = bytes.ToImmutableArray();
                Assert.Throws<ArgumentOutOfRangeException>(
                    "txid",
                    () => new TxId(immutableBytes));
                Assert.Throws<ArgumentOutOfRangeException>(
                    "txid",
                    () => new TxId(bytes));
            }
        }

        [Fact]
        public void FromHex()
        {
            TxId actual = TxId.FromHex(
                "45a22187e2d8850bb357886958bc3e8560929ccc886958bc3e8560929ccc9ccc");
            var expected = new TxId(
                new byte[]
                {
                    0x45, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57,
                    0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                    0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                    0x9c, 0xcc,
                }
            );
            Assert.Equal(expected, actual);

            Assert.Throws<FormatException>(() => TxId.FromHex("0g"));
            Assert.Throws<ArgumentOutOfRangeException>("hex", () => TxId.FromHex("1"));
            Assert.Throws<ArgumentOutOfRangeException>(
                "hex",
                () => TxId.FromHex(
                    "45a22187e2d8850bb357886958bc3e8560929ccc886958bc3e8560929ccc9c"));
            Assert.Throws<ArgumentOutOfRangeException>(
                "hex",
                () => TxId.FromHex(
                    "45a22187e2d8850bb357886958bc3e8560929ccc886958bc3e8560929ccc9ccc0"));
            Assert.Throws<ArgumentOutOfRangeException>(
                "hex",
                () => TxId.FromHex(
                    "45a22187e2d8850bb357886958bc3e8560929ccc886958bc3e8560929ccc9ccc00"));
        }

        [Fact]
        public void ToByteArray()
        {
            var bytes = GetRandomBytes(32);
            var txId = new TxId(bytes);

            Assert.Equal(bytes, txId.ToByteArray());
        }

        [Fact]
        public void ToByteArrayShouldNotExposeContents()
        {
            var txId = new TxId(
                new byte[]
                {
                    0x45, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57,
                    0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                    0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                    0x9c, 0xcc,
                }
            );
            txId.ToByteArray()[0] = 0x00;
            Assert.Equal(0x45, txId.ToByteArray()[0]);
        }

        [Fact]
        public void ToHex()
        {
            var id = new TxId(
                new byte[]
                {
                    0x45, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57,
                    0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                    0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                    0x9c, 0xcc,
                }
            );
            Assert.Equal(
                "45a22187e2d8850bb357886958bc3e8560929ccc886958bc3e8560929ccc9ccc",
                id.ToHex()
            );
        }

        [Fact]
        public void ToString_()
        {
            var txId = new TxId(
                new byte[]
                {
                    0x45, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57,
                    0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                    0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                    0x9c, 0xcc,
                }
            );
            Assert.Equal(
                "45a22187e2d8850bb357886958bc3e8560929ccc886958bc3e8560929ccc9ccc",
                txId.ToString()
            );
        }

        [Fact]
        public void Equals_()
        {
            var sameTxId1 = new TxId(
                new byte[]
                {
                    0x45, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57,
                    0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                    0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                    0x9c, 0xcc,
                }
            );
            var sameTxId2 = new TxId(
                new byte[]
                {
                    0x45, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57,
                    0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                    0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                    0x9c, 0xcc,
                }
            );
            var differentTxId = new TxId(
                new byte[]
                {
                    0x45, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57,
                    0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0x00,
                    0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0x00,
                    0x9c, 0x00,
                }
            );

            Assert.Equal(sameTxId1, sameTxId2);
            Assert.NotEqual(sameTxId2, differentTxId);

            Assert.True(sameTxId1 == sameTxId2);
            Assert.False(sameTxId2 == differentTxId);

            Assert.False(sameTxId1 != sameTxId2);
            Assert.True(sameTxId2 != differentTxId);
        }

        [Fact]
        public void Compare()
        {
            var random = new Random();
            var buffer = new byte[32];
            TxId[] txIds = Enumerable.Repeat(0, 50).Select(_ =>
            {
                random.NextBytes(buffer);
                return new TxId(buffer);
            }).ToArray();
            for (int i = 1; i < txIds.Length; i++)
            {
                TxId left = txIds[i - 1], right = txIds[i];
                string leftString = left.ToHex().ToLower(),
                    rightString = right.ToHex().ToLower();
                Assert.Equal(
                    Math.Min(Math.Max(left.CompareTo(right), 1), -1),
                    Math.Min(Math.Max(leftString.CompareTo(rightString), 1), -1)
                );
                Assert.Equal(
                    left.CompareTo(right),
                    (left as IComparable).CompareTo(right)
                );
            }

            Assert.Throws<ArgumentException>(() => txIds[0].CompareTo(null));
            Assert.Throws<ArgumentException>(() => txIds[0].CompareTo("invalid"));
        }

        [Fact]
        public void Bencoded()
        {
            var expected = new TxId(TestUtils.GetRandomBytes(TxId.Size));
            var deserialized = new TxId(expected.Bencoded);
            Assert.Equal(expected, deserialized);
            expected = default(TxId);
            deserialized = new TxId(expected.Bencoded);
            Assert.Equal(expected, deserialized);
        }

        [Fact]
        public void Serializable()
        {
            var expected = new TxId(TestUtils.GetRandomBytes(TxId.Size));
            var deserialized = TestUtils.BinarySerializeDeserialize<TxId>(expected);
            Assert.Equal(expected, deserialized);
            expected = default(TxId);
            deserialized = TestUtils.BinarySerializeDeserialize<TxId>(expected);
            Assert.Equal(expected, deserialized);
        }

        [SkippableFact]
        public void JsonSerialization()
        {
            TxId txid = TxId.FromHex(
                "45a22187e2d8850bb357886958bc3e8560929ccc886958bc3e8560929ccc9ccc");
            AssertJsonSerializable(
                txid,
                "\"45a22187e2d8850bb357886958bc3e8560929ccc886958bc3e8560929ccc9ccc\""
            );
        }
    }
}
