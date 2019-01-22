using System;
using Xunit;

namespace Libplanet.Tests
{
    public class NonceTest
    {
        [Fact]
        public void ConstructorDoesNotTakeNullValue()
        {
            Assert.Throws<ArgumentNullException>(() => new Nonce(null));
        }

        [Fact]
        public void DefaultConstructor()
        {
            Nonce defaultValue = default;
            Assert.Equal(new Nonce(new byte[0]), defaultValue);
        }

        [Fact]
        public void ToByteArray()
        {
            byte[] nonceBytes = TestUtils.GetRandomBytes(5);
            var nonce = new Nonce(nonceBytes);
            Assert.Equal(nonceBytes, nonce.ToByteArray());
        }

        [Fact]
        public void ToByteArrayShouldNotExposeContents()
        {
            var nonce = new Nonce(new byte[5]);
            nonce.ToByteArray()[0] = 0x01;

            Assert.Equal(0x00, nonce.ToByteArray()[0]);
        }

        [Fact]
        public void ToString_()
        {
            var nonce = new Nonce(
                new byte[] { 0x00, 0x01, 0x80, 0xff }
            );
            Assert.Equal("000180ff", nonce.ToString());
        }
    }
}
