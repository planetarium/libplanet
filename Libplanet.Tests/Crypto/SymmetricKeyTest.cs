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
                0x18, 0x81, 0x34, 0x2a, 0x29, 0x30, 0xcd, 0xc2, 0x73, 0x4a,
                0xe1, 0x5e, 0x14, 0x3a, 0x09, 0xfe, 0x5b, 0x0a, 0x5f, 0x11,
                0x3b, 0x0e, 0x2f, 0xcf, 0xc8, 0xd5, 0x6f, 0x23, 0xc5, 0x08,
                0xa2, 0x89, 0x0d, 0x71, 0x39, 0xc5, 0x92, 0xcf, 0x4e, 0x4c,
                0x76, 0x75, 0x8a, 0x9b, 0x23, 0x17, 0xcb, 0x94,
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
