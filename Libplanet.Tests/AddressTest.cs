using System;
using System.Collections.Immutable;
using System.Linq;
using Bencodex.Types;
using Libplanet.Crypto;
using Xunit;
using static Libplanet.Tests.TestUtils;

namespace Libplanet.Tests
{
    public class AddressTest
    {
        [Fact]
        public void ConstructWithImmutableArray()
        {
            byte[] addr = new byte[20]
            {
                0x01, 0x23, 0x45, 0x67, 0x89, 0xab, 0xcd, 0xef, 0xab,
                0xcd, 0xef, 0xab, 0xcd, 0xef, 0xab, 0xcd, 0xef, 0xab,
                0xcd, 0xef,
            };

            Assert.Equal(
                new Address("0123456789ABcdefABcdEfABcdEFabcDEFabCDEF"),
                new Address(addr.ToImmutableArray())
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
        public void DeriveFromHex()
        {
            Assert.Throws<ArgumentException>(
                () => new Address("0123456789ABcdefABcdEfABcdEFabcDEFabCDE"));      // 39 chars
            Assert.Throws<ArgumentException>(
                () => new Address("0123456789ABcdefABcdEfABcdEFabcDEFabCDEFF"));    // 41 chars
            Assert.Throws<ArgumentException>(
                () => new Address("1x0123456789ABcdefABcdEfABcdEFabcDEFabCDEF"));   // bad prefix
            Assert.Throws<ArgumentException>(
                () => new Address("0x0123456789ABcdefABcdEfABcdEFabcDEFabCDE"));    // 41 chars
            Assert.Throws<ArgumentException>(
                () => new Address("0x0123456789ABcdefABcdEfABcdEFabcDEFabCDEFF"));  // 43 chars
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

                byte[] addressBytes = GetRandomBytes(size);
                Assert.Throws<ArgumentException>(() =>
                    new Address(addressBytes)
                );
            }
        }

        [Fact]
        public void ConstructWithBinary()
        {
            byte[] addr =
            {
                0x01, 0x23, 0x45, 0x67, 0x89, 0xab, 0xcd, 0xef, 0xab,
                0xcd, 0xef, 0xab, 0xcd, 0xef, 0xab, 0xcd, 0xef, 0xab,
                0xcd, 0xef,
            };

            Assert.Equal(
                new Address("0123456789ABcdefABcdEfABcdEFabcDEFabCDEF"),
                new Address((IValue)new Binary(addr))
            );

            var invalidAddr = new byte[19];
            Assert.Throws<ArgumentException>(() => new Address((IValue)new Binary(invalidAddr)));
        }

        [Fact]
        public void ToByteArray()
        {
            byte[] addressBytes = GetRandomBytes(20);
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
        public void SerializeAndDeserializeWithDefault()
        {
            var defaultAddress = default(Address);
            Address deserializedAddress = new Address(defaultAddress.Bencoded);
            Assert.Equal(default, deserializedAddress);
        }

        [Fact]
        public void Compare()
        {
            var random = new System.Random();
            var buffer = new byte[20];
            Address[] addresses = Enumerable.Repeat(0, 50).Select(_ =>
            {
                random.NextBytes(buffer);
                return new Address(buffer);
            }).ToArray();
            for (int i = 1; i < addresses.Length; i++)
            {
                Address left = addresses[i - 1];
                Address right = addresses[i];
                string leftString = addresses[i - 1].ToHex().ToLower(),
                       rightString = right.ToHex().ToLower();
                Assert.Equal(
                    Math.Min(Math.Max(left.CompareTo(right), 1), -1),
                    Math.Min(Math.Max(leftString.CompareTo(rightString), 1), -1)
                );
                Assert.Equal(
                    left.CompareTo(right),
                    left.CompareTo(right as object)
                );
            }

            Assert.Throws<ArgumentException>(() => addresses[0].CompareTo(null));
            Assert.Throws<ArgumentException>(() => addresses[0].CompareTo("invalid"));
        }

        [Fact]
        public void ReplaceHexPrefixString()
        {
            var address = new Address("0x0123456789ABcdefABcdEfABcdEFabcDEFabCDEF");

            Assert.Equal(
                "0x0123456789ABcdefABcdEfABcdEFabcDEFabCDEF",
                address.ToString()
            );
        }

        [Fact]
        public void ReplaceHexUpperCasePrefixString()
        {
            Assert.Throws<ArgumentException>(() =>
                 new Address("0X0123456789ABcdefABcdEfABcdEFabcDEFabCDEF")
            );
        }

        [Fact]
        public void Bencoded()
        {
            var expected = new Address(TestUtils.GetRandomBytes(Address.Size));
            var deserialized = new Address(expected.Bencoded);
            Assert.Equal(expected, deserialized);
            expected = default(Address);
            deserialized = new Address(expected.Bencoded);
            Assert.Equal(expected, deserialized);
        }

        [Fact]
        public void Serializable()
        {
            var expected = new Address(TestUtils.GetRandomBytes(Address.Size));
            Address deserialized = TestUtils.BinarySerializeDeserialize<Address>(expected);
            Assert.Equal(expected, deserialized);
            expected = default(Address);
            deserialized = TestUtils.BinarySerializeDeserialize<Address>(expected);
            Assert.Equal(expected, deserialized);
        }

        [SkippableFact]
        public void JsonSerialization()
        {
            var address = new Address("0123456789ABcdefABcdEfABcdEFabcDEFabCDEF");
            AssertJsonSerializable(
                address,
                "\"0123456789ABcdefABcdEfABcdEFabcDEFabCDEF\""
            );
        }
    }
}
