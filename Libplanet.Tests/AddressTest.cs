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
        public void AddressMustBe20Bytes()
        {
            for (int size = 0; size < 25; size++)
            {
                if (size == 20) continue;
                var random = new Random();
                var addressBytes = new byte[size];
                random.NextBytes(addressBytes);
                Assert.Throws<ArgumentException>(() =>
                    new Address(addressBytes)
                );
            }
        }

        [Fact]
        public void ToByteArray()
        {
            var random = new Random();
            var addressBytes = new byte[20];
            random.NextBytes(addressBytes);
            var address = new Address(addressBytes);
            Assert.Equal(addressBytes, address.ToByteArray());
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
            var address1 = new Address(
                new byte[20]
                {
                    0x45, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57,
                    0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                }
            );
            var address2 = new Address(
                new byte[20]
                {
                    0x45, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57,
                    0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                }
            );
            var address3 = new Address(
                new byte[20]
                {
                    0x45, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57,
                    0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0x00,
                }
            );

            Assert.Equal(address1, address2);
            Assert.NotEqual(address2, address3);

            Assert.True(address1 == address2);
            Assert.False(address2 == address3);

            Assert.False(address1 != address2);
            Assert.True(address2 != address3);
        }
    }
}
