using System;
using Libplanet.Tx;
using Xunit;

namespace Libplanet.Tests.Tx
{
    public class TxIdTest
    {
        [Fact]
        public void ConstructorDoesNotTakeNullValue()
        {
            Assert.Throws<ArgumentNullException>(() => new TxId(null));
        }

        [Fact]
        public void TxIdMustBe32Bytes()
        {
            for (int size = 0; size < 36; size++)
            {
                if (size == 32) continue;
                var random = new Random();
                var bytes = new byte[size];
                random.NextBytes(bytes);
                Assert.Throws<ArgumentException>(() => new TxId(bytes));
            }
        }

        [Fact]
        public void ToByteArray()
        {
            var random = new Random();
            var bytes = new byte[32];
            random.NextBytes(bytes);
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
    }
}
