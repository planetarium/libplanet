using System;
using System.IO;
using System.Runtime.Serialization.Formatters.Binary;
using Libplanet.Crypto;
using Xunit;

namespace Libplanet.Tests
{
    public class AddressTest
    {
        [Fact]
        public void ConstructorDoesNotTakeNullValue()
        {
            Assert.Throws<NullReferenceException>(
                () => new Address((byte[])null)
            );
        }

        [Fact]
        public void DefaultConstructor()
        {
            Address defaultValue = default;
            Assert.Equal(new Address(new byte[20]), defaultValue);
        }

        [Fact]
        public void DerivingConstructor()
        {
            var key = new PublicKey(
                new byte[]
                {
                    0x03, 0x43, 0x8b, 0x93, 0x53, 0x89, 0xa7, 0xeb, 0xf8,
                    0x38, 0xb3, 0xae, 0x41, 0x25, 0xbd, 0x28, 0x50, 0x6a,
                    0xa2, 0xdd, 0x45, 0x7f, 0x20, 0xaf, 0xc8, 0x43, 0x72,
                    0x9d, 0x3e, 0x7d, 0x60, 0xd7, 0x28,
                }
            );
            Assert.Equal(
                new Address(
                    new byte[]
                    {
                        0xd4, 0x1f, 0xad, 0xf6, 0x1b, 0xad, 0xf5, 0xbe,
                        0x2d, 0xe6, 0x0e, 0x9f, 0xc3, 0x23, 0x0c, 0x0a,
                        0x8a, 0x43, 0x90, 0xf0,
                    }
                ),
                new Address(key)
            );
        }

        [Fact]
        public void HexAddressConstructor()
        {
            Assert.Equal(
                new Address(
                    new byte[20]
                    {
                        0x01, 0x23, 0x45, 0x67, 0x89, 0xab, 0xcd, 0xef, 0xab,
                        0xcd, 0xef, 0xab, 0xcd, 0xef, 0xab, 0xcd, 0xef, 0xab,
                        0xcd, 0xef,
                    }
                ),
                new Address(
                    "0123456789ABcdefABcdEfABcdEFabcDEFabCDEF"
                )
            );

            var address = new Address(
                "45a22187e2d8850bb357886958bc3e8560929ccc"
            );
            Assert.Equal(
                "45a22187e2D8850bb357886958bC3E8560929ccc",
                address.ToHex()
            );
        }

        [Fact]
        public void HexMustBe40Characters()
        {
            Assert.Throws<ArgumentException>(
                () => new Address("0123456789ABcdefABcdEfABcdEFabcDEFabCDE")
            );
            Assert.Throws<ArgumentException>(
                () => new Address("0123456789ABcdefABcdEfABcdEFabcDEFabCDEFF")
            );
        }

        [Fact]
        public void HexAddressConstructorOnlyTakesHexadecimalCharacters()
        {
            Assert.Throws<ArgumentException>(
                () => new Address("45a22187e2d8850bb357886958BC3E8560929ghi")
            );
            Assert.Throws<ArgumentException>(
                () => new Address("45a22187e2d8850bb357886958BC3E8560929£한글")
            );
        }

        [Fact]
        public void CanDetectInvalidMixedCaseChecksum()
        {
            Assert.Throws<ArgumentException>(() =>
                new Address("45A22187E2D8850BB357886958BC3E8560929CCC")
            );
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
        public void ToHex()
        {
            var address = new Address(
                new byte[20]
                {
                    0x45, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57,
                    0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                }
            );
            Assert.Equal(
                "45a22187e2D8850bb357886958bC3E8560929ccc",
                address.ToHex()
            );
            Assert.Equal(
                "0x45a22187e2D8850bb357886958bC3E8560929ccc",
                address.ToString()
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

        [Fact]
        public void CanSerializeAndDeserialize()
        {
            // Serialize and deserialize to and from memory
            var expectedAddress = new Address(
                new byte[]
                {
                    0x45, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57,
                    0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                }
            );
            Address deserializedAddress;
            BinaryFormatter formatter = new BinaryFormatter();
            using (var memoryStream = new MemoryStream())
            {
                formatter.Serialize(memoryStream, expectedAddress);
                memoryStream.Seek(0, SeekOrigin.Begin);
                deserializedAddress = (Address)formatter.Deserialize(memoryStream);
            }

            Assert.Equal(deserializedAddress, expectedAddress);
        }
    }
}
