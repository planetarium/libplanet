using System.Collections.Immutable;
using System.Text;
using Libplanet.Crypto;
using Xunit;

using static Libplanet.Tests.TestUtils;

namespace Libplanet.Tests.Crypto
{
    public class SymmetricKeyTest
    {
        private static readonly byte[] KeyBytes =
            {
                0x34, 0x9c, 0x46, 0x9e, 0x0e, 0xa9, 0xeb, 0x88, 0x22,
                0x65, 0x8a, 0xaf, 0x08, 0x17, 0xa2, 0x21, 0xd7, 0xfd,
                0x4b, 0xe7, 0x8b, 0x24, 0x3f, 0x45, 0x5d, 0x72, 0xb6,
                0x0f, 0x9b, 0x1a, 0x3a, 0x4e,
            };

        [Fact]
        public void DecryptTest()
        {
            byte[] ciphertext =
            {
                0xda, 0xff, 0x4f, 0xc7, 0x9f, 0x81, 0x2c, 0xdd, 0x1e, 0xa5, 0xf2, 0xd4, 0xab, 0x50,
                0x69, 0x8e, 0x56, 0xfb, 0xcf, 0x32, 0x64, 0x99, 0x8b, 0xff, 0xd4, 0xf0, 0x33, 0x11,
                0xd8, 0x8c, 0x4b, 0x82, 0x6c, 0x83, 0x0f, 0x57, 0x7c, 0xf2, 0x42, 0xd5, 0x32, 0xa4,
                0x69, 0x01,
            };
            var expected = Encoding.ASCII.GetBytes("a secret message");
            var aes = new SymmetricKey(KeyBytes);
            var actual = aes.Decrypt(ciphertext);

            Assert.Equal(expected, actual);
        }

        [Fact]
        public void ByteArray()
        {
            var aes = new SymmetricKey(KeyBytes);
            ImmutableArray<byte> expected = KeyBytes.ToImmutableArray();
            ImmutableArray<byte> actual = aes.ByteArray;
            Assert.Equal<byte>(expected, actual);
        }

        [Fact]
        public void ToByteArray()
        {
            var aes = new SymmetricKey(KeyBytes);
            Assert.Equal(KeyBytes, aes.ToByteArray());
        }
    }
}
