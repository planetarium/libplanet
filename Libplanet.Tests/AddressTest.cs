using System;
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
                "45a22187e2d8850bb357886958bc3e8560929ccc",
                address.ToString()
            );
        }
    }
}
