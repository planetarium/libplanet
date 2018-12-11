using System;
using Libplanet.Crypto;
using Xunit;

namespace Libplanet.Tests
{
    public class AddressTest
    {
        [Fact]
        public void ConstructorDoesNotTakeNullValue()
        {
            Assert.Throws<NullReferenceException>(() => new Address(null));
        }

        [Fact]
        public void DefaultConstructor()
        {
            Address defaultValue = default;
            Assert.Equal(new Address(new byte[20]), defaultValue);
        }

        [Fact]
        public void AddressMustBe20Bytes()
        {
            for (int size = 0; size < 25; size++)
            {
                if (size == 20)
                {
                    continue;
                }

                byte[] addressBytes = TestUtils.GetRandomBytes(size);
                Assert.Throws<ArgumentException>(() =>
                    new Address(addressBytes)
                );
            }
        }

        [Fact]
        public void ToByteArray()
        {
            byte[] addressBytes = TestUtils.GetRandomBytes(20);
            var address = new Address(addressBytes);
            Assert.Equal(addressBytes, address.ToByteArray());
        }

        [Fact]
        public void ToByteArrayShouldNotExposeContents()
        {
            var address = new Address(
                new byte[20]
                {
                    0x45, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57,
                    0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                }
            );
            address.ToByteArray()[0] = 0x00;

            Assert.Equal(0x45, address.ToByteArray()[0]);
        }

        [Fact]
        public void ToString_()
        {
            var address = new Address(
                new byte[20]
                {
                    0x45, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57,
                    0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                }
            );
            Assert.Equal(
                "0x45a22187e2d8850bb357886958bc3e8560929ccc",
                address.ToString()
            );
        }

        [Fact]
        public void FromPublicKey()
        {
            PublicKey key = PublicKey.FromBytes(ByteUtil.ParseHex(
                "03438b935389a7ebf838b3ae4125bd28506aa2dd457f20afc843729d3e7d60d728"));
            Assert.Equal(
                new Address(
                    ByteUtil.ParseHex(
                        "d41fadf61badf5be2de60e9fc3230c0a8a4390f0")),
                Address.FromPublicKey(key)
            );
        }

        [Fact]
        public void Equals_()
        {
            var sameAddress1 = new Address(
                new byte[20]
                {
                    0x45, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57,
                    0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                }
            );
            var sameAddress2 = new Address(
                new byte[20]
                {
                    0x45, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57,
                    0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                }
            );
            var differentAddress = new Address(
                new byte[20]
                {
                    0x45, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57,
                    0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0x00,
                }
            );

            Assert.Equal(sameAddress1, sameAddress2);
            Assert.NotEqual(sameAddress2, differentAddress);

            Assert.True(sameAddress1 == sameAddress2);
            Assert.False(sameAddress2 == differentAddress);

            Assert.False(sameAddress1 != sameAddress2);
            Assert.True(sameAddress2 != differentAddress);
        }
    }
}
